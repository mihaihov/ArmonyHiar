import { serve } from 'https://deno.land/std@0.224.0/http/server.ts'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-academy-function-key',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
}

type WaitlistBody = {
  fullName?: string
  email?: string
  phone?: string
  notes?: string
  source?: string
}

function jsonResponse(status: number, payload: Record<string, unknown>) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: {
      ...corsHeaders,
      'Content-Type': 'application/json',
    },
  })
}

function getClientIp(request: Request) {
  const forwardedFor = request.headers.get('x-forwarded-for')
  if (forwardedFor) {
    return forwardedFor.split(',')[0].trim()
  }

  const realIp = request.headers.get('x-real-ip')
  if (realIp) {
    return realIp.trim()
  }

  return 'unknown'
}

function sanitizeString(value: unknown, maxLength: number) {
  if (typeof value !== 'string') {
    return ''
  }

  return value.trim().slice(0, maxLength)
}

async function applyRateLimit(ipAddress: string) {
  const upstashUrl = Deno.env.get('UPSTASH_REDIS_REST_URL')
  const upstashToken = Deno.env.get('UPSTASH_REDIS_REST_TOKEN')

  if (!upstashUrl || !upstashToken) {
    return { allowed: true, skipped: true }
  }

  const cleanBaseUrl = upstashUrl.replace(/\/$/, '')
  const windowSeconds = Number(Deno.env.get('UPSTASH_RATE_LIMIT_WINDOW_SECONDS') ?? '3600')
  const maxRequests = Number(Deno.env.get('UPSTASH_RATE_LIMIT_MAX_REQUESTS') ?? '5')

  const currentBucket = Math.floor(Date.now() / 1000 / windowSeconds)
  const key = `academy_waitlist:${ipAddress}:${currentBucket}`
  const headers = {
    Authorization: `Bearer ${upstashToken}`,
  }

  const incrementResponse = await fetch(`${cleanBaseUrl}/incr/${encodeURIComponent(key)}`, {
    method: 'POST',
    headers,
  })

  if (!incrementResponse.ok) {
    throw new Error('Rate limit increment failed')
  }

  const incrementData = await incrementResponse.json() as { result: number }
  const currentCount = Number(incrementData.result ?? 0)

  if (currentCount === 1) {
    await fetch(`${cleanBaseUrl}/expire/${encodeURIComponent(key)}/${windowSeconds}`, {
      method: 'POST',
      headers,
    })
  }

  return {
    allowed: currentCount <= maxRequests,
    skipped: false,
    currentCount,
    maxRequests,
  }
}

serve(async (request) => {
  if (request.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: corsHeaders,
    })
  }

  if (request.method !== 'POST') {
    return jsonResponse(405, {
      success: false,
      message: 'Method not allowed.',
    })
  }

  const functionApiKey = Deno.env.get('ACADEMY_FUNCTION_API_KEY')
  if (functionApiKey) {
    const requestApiKey = request.headers.get('x-academy-function-key')
    if (requestApiKey !== functionApiKey) {
      return jsonResponse(401, {
        success: false,
        message: 'Unauthorized request.',
      })
    }
  }

  let body: WaitlistBody = {}

  try {
    body = await request.json()
  } catch {
    return jsonResponse(400, {
      success: false,
      message: 'Payload invalid.',
    })
  }

  const fullName = sanitizeString(body.fullName, 120)
  const email = sanitizeString(body.email, 180).toLowerCase()
  const phone = sanitizeString(body.phone, 30)
  const notes = sanitizeString(body.notes, 500)
  const source = sanitizeString(body.source, 40) || 'unknown'

  if (!fullName || fullName.length < 2) {
    return jsonResponse(400, {
      success: false,
      message: 'Numele trebuie sa contina minim 2 caractere.',
    })
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return jsonResponse(400, {
      success: false,
      message: 'Adresa de email nu este valida.',
    })
  }

  const clientIp = getClientIp(request)

  try {
    const rateLimit = await applyRateLimit(clientIp)
    if (!rateLimit.allowed) {
      return jsonResponse(429, {
        success: false,
        message: 'Too many requests. Please try again later.',
      })
    }
  } catch {
    return jsonResponse(503, {
      success: false,
      message: 'Rate limiter unavailable. Please retry in a minute.',
    })
  }

  const supabaseUrl = Deno.env.get('ACADEMY_SUPABASE_URL') || Deno.env.get('SUPABASE_URL')
  const supabaseServiceRoleKey = Deno.env.get('ACADEMY_SUPABASE_SERVICE_ROLE_KEY') || Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')

  if (!supabaseUrl || !supabaseServiceRoleKey) {
    return jsonResponse(500, {
      success: false,
      message: 'Supabase environment variables are missing (ACADEMY_SUPABASE_URL / ACADEMY_SUPABASE_SERVICE_ROLE_KEY).',
    })
  }

  const commonHeaders = {
    apikey: supabaseServiceRoleKey,
    Authorization: `Bearer ${supabaseServiceRoleKey}`,
  }

  const existingUrl = `${supabaseUrl}/rest/v1/academy_waitlist?select=id&email=eq.${encodeURIComponent(email)}&limit=1`
  const existingResponse = await fetch(existingUrl, {
    method: 'GET',
    headers: commonHeaders,
  })

  if (!existingResponse.ok) {
    return jsonResponse(502, {
      success: false,
      message: 'Could not verify existing waitlist entries.',
    })
  }

  const existingRows = await existingResponse.json() as Array<{ id: number }>
  if (Array.isArray(existingRows) && existingRows.length > 0) {
    return jsonResponse(200, {
      success: true,
      alreadyRegistered: true,
      message: 'Email already registered in waitlist.',
    })
  }

  const userAgent = request.headers.get('user-agent')?.slice(0, 255) || null

  const insertResponse = await fetch(`${supabaseUrl}/rest/v1/academy_waitlist`, {
    method: 'POST',
    headers: {
      ...commonHeaders,
      'Content-Type': 'application/json',
      Prefer: 'return=minimal',
    },
    body: JSON.stringify({
      full_name: fullName,
      email,
      phone: phone || null,
      notes: notes || null,
      source,
      ip_address: clientIp,
      user_agent: userAgent,
    }),
  })

  if (!insertResponse.ok) {
    const errorBody = await insertResponse.text()

    if (errorBody.includes('academy_waitlist_email_lower_idx') || insertResponse.status === 409) {
      return jsonResponse(200, {
        success: true,
        alreadyRegistered: true,
        message: 'Email already registered in waitlist.',
      })
    }

    return jsonResponse(502, {
      success: false,
      message: 'Failed to save waitlist entry.',
      details: errorBody,
    })
  }

  return jsonResponse(201, {
    success: true,
    alreadyRegistered: false,
    message: 'Waitlist entry created successfully.',
  })
})

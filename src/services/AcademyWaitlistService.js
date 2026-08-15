import axios from 'axios'
import { environment } from '../environments/environment'

function detectSource() {
    if (environment.deploymentSource && environment.deploymentSource !== 'auto') {
        return environment.deploymentSource
    }

    if (typeof window === 'undefined') {
        return 'unknown'
    }

    const hostname = window.location.hostname.toLowerCase()

    if (hostname.includes('localhost') || hostname.includes('127.0.0.1')) {
        return 'local'
    }

    if (hostname.includes('dev')) {
        return 'development'
    }

    return 'production'
}

export async function SubscribeToAcademyWaitlist(data) {
    try {
        if (!environment.academyWaitlistFunctionUrl) {
            return {
                success: false,
                message: 'Lipseste configurarea pentru inscrierea in waitlist.',
            }
        }

        const headers = {
            'Content-Type': 'application/json',
        }

        if (environment.academyWaitlistFunctionApiKey) {
            headers['x-academy-function-key'] = environment.academyWaitlistFunctionApiKey
        }

        const payload = {
            fullName: data.fullName,
            email: data.email,
            phone: data.phone,
            notes: data.notes,
            source: detectSource(),
        }

        const response = await axios.post(environment.academyWaitlistFunctionUrl, payload, { headers })

        return {
            success: Boolean(response?.data?.success),
            alreadyRegistered: Boolean(response?.data?.alreadyRegistered),
            message: response?.data?.message || 'Cererea a fost trimisa.',
        }
    } catch (error) {
        const status = error?.response?.status

        if (status === 429) {
            return {
                success: false,
                message: 'Prea multe incercari intr-un timp scurt. Te rugam sa incerci putin mai tarziu.',
            }
        }

        if (status === 400) {
            return {
                success: false,
                message: error?.response?.data?.message || 'Datele introduse nu sunt valide.',
            }
        }

        return {
            success: false,
            message: 'Momentan nu am putut salva datele. Incearca din nou in cateva minute.',
        }
    }
}

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Academy Waitlist (Supabase + Upstash)

The academy page now includes a waitlist form that stores leads in Supabase and applies rate limiting with Upstash.

### 1) Create table in Supabase

Run the SQL from `supabase/sql/academy_waitlist.sql` in Supabase SQL Editor.

### 2) Deploy Edge Function

Function path:

- `supabase/functions/academy-waitlist/index.ts`

Deploy command:

```bash
supabase functions deploy academy-waitlist --no-verify-jwt
```

### 3) Set function secrets in Supabase

```bash
supabase secrets set \
	ACADEMY_SUPABASE_URL="https://<project-ref>.supabase.co" \
	ACADEMY_SUPABASE_SERVICE_ROLE_KEY="<service-role-key>" \
	UPSTASH_REDIS_REST_URL="https://<upstash-host>.upstash.io" \
	UPSTASH_REDIS_REST_TOKEN="<upstash-token>" \
	UPSTASH_RATE_LIMIT_WINDOW_SECONDS="3600" \
	UPSTASH_RATE_LIMIT_MAX_REQUESTS="5" \
	ACADEMY_FUNCTION_API_KEY="<public-function-key>"
```

Notes:

- If your project already exposes `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY`, the function can use those automatically.
- If you cannot create secrets with `SUPABASE_` prefix, use the `ACADEMY_*` names above.

### 4) Configure frontend environment variables

Set these in your Azure Static Web App pipeline/environment:

- `VITE_ACADEMY_WAITLIST_FUNCTION_URL` = `https://<project-ref>.functions.supabase.co/academy-waitlist`
- `VITE_ACADEMY_WAITLIST_FUNCTION_API_KEY` = same value as `ACADEMY_FUNCTION_API_KEY`
- `VITE_DEPLOYMENT_SOURCE` = `development` for dev branch deployment, `production` for master deployment

### 5) Single Supabase project for both environments

Because both dev and production use the same Supabase project, every lead is stored in one table and tagged with `source`.
Use `VITE_DEPLOYMENT_SOURCE` to distinguish records created by dev vs production deployments.

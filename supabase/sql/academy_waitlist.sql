-- Academy waitlist schema
-- Run in Supabase SQL editor.

create table if not exists public.academy_waitlist (
    id bigint generated always as identity primary key,
    created_at timestamptz not null default now(),
    full_name text not null,
    email text not null,
    phone text,
    notes text,
    source text not null default 'unknown',
    ip_address text,
    user_agent text
);

create unique index if not exists academy_waitlist_email_lower_idx
    on public.academy_waitlist ((lower(email)));

create index if not exists academy_waitlist_created_at_idx
    on public.academy_waitlist (created_at desc);

alter table public.academy_waitlist enable row level security;

-- Public users are not allowed direct access.
-- Writes are done by Edge Function with service role key.
revoke all on public.academy_waitlist from anon;
revoke all on public.academy_waitlist from authenticated;

-- Gibson Moore Art Commission — petition schema
-- Run in Supabase → SQL Editor. Safe to re-run, including over the earlier version.
--
-- Two kinds of signers, both confirmed by an emailed link (one signature per email):
--   • Duke students (undergrad / grad): @duke.edu email and full name required,
--     plus the authorization box or a drawn signature.
--   • Everyone else ('public'): any email; name and everything else optional.
-- Emails and drawn signatures are never public: visitors only read counts and
-- "First L." names through the views below.

create table if not exists public.signatures (
  id bigint generated always as identity primary key,
  user_id uuid not null unique default auth.uid() references auth.users (id) on delete cascade,
  email text not null unique,
  full_name text,
  affiliation text not null,
  authorized boolean not null default false,
  signature_png text,
  comment text,
  comment_public boolean not null default false,
  hidden boolean not null default false,  -- moderators can hide a comment/name
  created_at timestamptz not null default now()
);

-- (Re)apply the rules so this also upgrades the earlier, Duke-only version.
alter table public.signatures alter column full_name drop not null;
alter table public.signatures drop constraint if exists signatures_email_check;
alter table public.signatures drop constraint if exists signatures_full_name_check;
alter table public.signatures drop constraint if exists signatures_affiliation_check;
alter table public.signatures drop constraint if exists signatures_signature_png_check;
alter table public.signatures drop constraint if exists signatures_comment_check;
alter table public.signatures drop constraint if exists signatures_check;
alter table public.signatures drop constraint if exists signatures_rules;

alter table public.signatures add constraint signatures_rules check (
  email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
  and affiliation in ('undergrad', 'grad', 'public')
  and (full_name is null or char_length(full_name) between 1 and 80)
  and (signature_png is null or (signature_png like 'data:image/png;base64,%' and char_length(signature_png) < 200000))
  and (comment is null or char_length(comment) <= 500)
  and (
    affiliation = 'public'
    or (email ~* '@duke\.edu$' and char_length(coalesce(full_name, '')) >= 3 and (authorized or signature_png is not null))
  )
) not valid;

alter table public.signatures enable row level security;

-- Sign once, as yourself, with the email you confirmed.
drop policy if exists "sign as yourself" on public.signatures;
create policy "sign as yourself" on public.signatures
  for insert to authenticated
  with check (user_id = auth.uid() and lower(email) = lower(auth.jwt() ->> 'email'));

drop policy if exists "read own signature" on public.signatures;
create policy "read own signature" on public.signatures
  for select to authenticated using (user_id = auth.uid());

-- Public: counts only.
drop view if exists public.signature_count;
create view public.signature_count
with (security_invoker = false) as
  select count(*)::int as total,
         count(*) filter (where affiliation in ('undergrad', 'grad'))::int as students,
         count(*) filter (where affiliation = 'public')::int as others
  from public.signatures;

-- Public: recent signers as "First L." + affiliation. Comments only when the
-- signer ticked "show my comment". Unnamed supporters show as "A supporter".
drop view if exists public.recent_signers;
create view public.recent_signers
with (security_invoker = false) as
  select id,
         case when p.parts is null or p.parts[1] = '' then 'A supporter'
              when cardinality(p.parts) > 1
              then p.parts[1] || ' ' || left(p.parts[cardinality(p.parts)], 1) || '.'
              else p.parts[1] end as display_name,
         affiliation,
         case when comment_public then comment end as comment,
         created_at
  from public.signatures,
       lateral (select regexp_split_to_array(nullif(trim(full_name), ''), '\s+') as parts) p
  where not hidden
  order by created_at desc
  limit 50;

grant select on public.signature_count, public.recent_signers to anon, authenticated;

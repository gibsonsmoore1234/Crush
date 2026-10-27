-- Gibson Moore Art Commission — petition schema
-- Run in Supabase → SQL Editor. Safe to re-run, including over earlier versions.
--
-- Anyone can sign straight from the page (no sign-in, no confirmation email).
-- Only a name is required; email, drawn signature and comment are optional.
-- Signers mark themselves as a Duke student or anyone else.
-- Nothing about individual signers is public: visitors only read the counts.

create table if not exists public.signatures (
  id bigint generated always as identity primary key,
  full_name text not null,
  affiliation text not null default 'public',
  email text,
  authorized boolean not null default false,
  signature_png text,
  comment text,
  comment_public boolean not null default false,
  hidden boolean not null default false,  -- moderators can hide a name/comment
  created_at timestamptz not null default now()
);

-- Upgrade earlier versions (which required sign-in and a confirmed email).
alter table public.signatures add column if not exists user_id uuid;
alter table public.signatures alter column user_id drop not null;
alter table public.signatures alter column user_id drop default;
alter table public.signatures alter column email drop not null;
update public.signatures set full_name = 'A supporter' where full_name is null or trim(full_name) = '';
alter table public.signatures alter column full_name set not null;
alter table public.signatures alter column affiliation set default 'public';
alter table public.signatures drop constraint if exists signatures_user_id_key;
alter table public.signatures drop constraint if exists signatures_email_key;
alter table public.signatures drop constraint if exists signatures_email_check;
alter table public.signatures drop constraint if exists signatures_full_name_check;
alter table public.signatures drop constraint if exists signatures_affiliation_check;
alter table public.signatures drop constraint if exists signatures_signature_png_check;
alter table public.signatures drop constraint if exists signatures_comment_check;
alter table public.signatures drop constraint if exists signatures_check;
alter table public.signatures drop constraint if exists signatures_rules;

alter table public.signatures add constraint signatures_rules check (
  char_length(trim(full_name)) between 1 and 80
  and affiliation in ('student', 'public', 'undergrad', 'grad')
  and (email is null or char_length(email) <= 254)
  and (signature_png is null or (signature_png like 'data:image/png;base64,%' and char_length(signature_png) < 200000))
  and (comment is null or char_length(comment) <= 500)
) not valid;

alter table public.signatures enable row level security;

-- Anyone may add a signature; nobody can read, edit or delete rows directly.
drop policy if exists "sign as yourself" on public.signatures;
drop policy if exists "read own signature" on public.signatures;
drop policy if exists "anyone can sign" on public.signatures;
create policy "anyone can sign" on public.signatures
  for insert to anon, authenticated
  with check (hidden = false and user_id is null);
revoke insert, update, delete on public.signatures from anon, authenticated;
grant insert (full_name, affiliation, email, authorized, signature_png, comment, comment_public)
  on public.signatures to anon, authenticated;

-- Public: counts only.
drop view if exists public.signature_count;
create view public.signature_count
with (security_invoker = false) as
  select count(*)::int as total,
         count(*) filter (where affiliation in ('student', 'undergrad', 'grad'))::int as students,
         count(*) filter (where affiliation = 'public')::int as others
  from public.signatures;

-- No public list of signers: names and comments are visible only in the Supabase dashboard.
drop view if exists public.recent_signers;

grant select on public.signature_count to anon, authenticated;

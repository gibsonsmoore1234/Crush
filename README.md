# Gibson Moore Art Commission

A student petition asking Duke University to fund a $30,000, 12-painting series by student artist Gibson Moore.

The site is independent and student-led. It is not an official Duke University site, and the page footer says so.

## Pages

- **Home** (`/`): the headline, a short statement, and links to sign or read the proposal.
- **Proposal** (`/proposal`): the twelve paintings in four sizes, the planning sketch, and the $30,000 budget.
- **Artist's Work** (`/work`): a gallery of Gibson Moore's paintings and drawings.
- **Sign** (`/sign`): the petition form, a live counter toward 10,000, recent supporters and their comments.

The colors are Duke blue, white, black and grey. The artwork keeps its own colors.

**Every number and name on the page is real.** The counter, feed and quotes come only from actual signatures. Nothing is seeded, so a new site starts at 0.

## How signatures are verified

When someone submits the form, Supabase emails a confirmation link to their `@duke.edu` address. The signature is saved only after they click that link.

The database enforces three rules:
- the email must be the one the signer confirmed;
- it must end in `@duke.edu`;
- each email can sign only once.

Emails and drawn signatures are never shown publicly. Visitors see the total count and names shortened to "First L.", plus comments the signer chose to make public.

## Setup

### 1. Supabase

1. Create a project. In **SQL Editor**, run [`supabase/schema.sql`](supabase/schema.sql).
2. Under **Authentication → URL Configuration**, set **Site URL** to your Vercel URL. Then add `https://YOUR-SITE/**` under **Redirect URLs**.
3. Under **Authentication → Providers → Email**, leave Email turned on. Supabase's built-in email sender is rate-limited, so before launch go to **Authentication → SMTP** and add a sender such as Resend or Postmark.

### 2. Vercel

Import this repo with **Framework Preset** set to *Other* and the **Root Directory** left empty. Then add these environment variables:

- `SUPABASE_URL`
- `SUPABASE_ANON_KEY` (the public anon key; never use the service-role key)

Redeploy after adding them.

If those variables aren't set, the site runs in **preview mode**. A banner says so, and signatures are kept only in that browser.

### Exporting signatures for DSG / Duke Arts

In Supabase, go to **Table Editor → signatures → Export CSV**. To hide an inappropriate comment or name from the public page, set `hidden = true` on that row.

### Editing the page

- **Press link:** set `chronicleUrl` at the top of `public/assets/app.js`.
- **Goal:** set `goal` in `public/assets/app.js`.
- **Budget lines:** edit `BUDGET` in `public/assets/app.js`.

## Local preview

```bash
npm run dev    # http://localhost:3000
```

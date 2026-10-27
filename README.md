# Crush
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
  <title>Gibson Moore Art Commission — Student Petition</title>
  <meta name="description" content="Sign the student petition asking Duke Arts, DSG and Campus Facilities to fund a $30,000, 10-piece permanent painting series by student artist Gibson Moore.">
  <meta property="og:title" content="A $30,000 Student Legacy Art Series for Duke Public Spaces">
  <meta property="og:description" content="Sign the petition for permanent, student-created art on campus.">
  <meta property="og:image" content="https://www.stevensosmoore.com/images/details/cowboy-in-the-clouds-1.jpg">
  <meta name="theme-color" content="#012169">
  <link rel="icon" href="data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 32 32%22%3E%3Crect width=%2232%22 height=%2232%22 rx=%226%22 fill=%22%23012169%22/%3E%3C/svg%3E">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Libre+Caslon+Text:ital,wght@0,400;0,700;1,400&family=Inter:wght@400;500;600;700&display=swap">
  <style>
/* Duke colors only: blue, white, black, grey. Photos keep their own color. */
:root {
  --blue: #012169;      /* Duke Blue */
  --navy: #00174a;
  --blue-2: #1f3d8a;
  --white: #ffffff;
  --black: #000000;
  --ink: #111111;
  --grey-1: #f3f4f6;
  --grey-2: #e5e7eb;
  --grey-3: #9ca3af;
  --grey-4: #4b5563;
  --serif: "Libre Caslon Text", Georgia, "Times New Roman", serif;
  --sans: Inter, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  --radius: 10px;
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; scroll-padding-top: 80px; }
@media (prefers-reduced-motion: reduce) { html { scroll-behavior: auto; } }
body { margin: 0; background: var(--white); color: var(--ink); font: 16px/1.6 var(--sans); -webkit-font-smoothing: antialiased; }
img { max-width: 100%; display: block; }
a { color: var(--blue); }
h1, h2, h3 { font-family: var(--serif); line-height: 1.15; margin: 0 0 .6em; color: inherit; }
h1 { font-size: clamp(2rem, 5vw, 3.6rem); }
h2 { font-size: clamp(1.5rem, 3vw, 2.2rem); }
h3 { font-size: 1.15rem; }
[hidden] { display: none !important; }
.wrap { max-width: 1120px; margin: 0 auto; padding: 0 16px; }
.muted { color: var(--grey-4); }
.eyebrow { font: 700 .75rem/1 var(--sans); letter-spacing: .14em; text-transform: uppercase; color: var(--blue); margin: 0 0 1rem; }
.eyebrow-light { color: var(--grey-2); }

.preview-banner { background: var(--grey-2); color: var(--ink); text-align: center; font-size: .82rem; padding: .4rem 16px; }

/* Buttons */
.btn {
  display: inline-flex; align-items: center; justify-content: center; gap: .4rem;
  background: var(--blue); color: var(--white); border: 2px solid var(--blue);
  padding: .85rem 1.5rem; border-radius: 999px; font: 700 .9rem/1 var(--sans);
  text-transform: uppercase; letter-spacing: .06em; text-decoration: none; cursor: pointer;
  transition: background .15s, color .15s, transform .15s;
}
.btn:hover { background: var(--navy); border-color: var(--navy); }
.btn:active { transform: translateY(1px); }
.btn:focus-visible, a:focus-visible, input:focus-visible, select:focus-visible, textarea:focus-visible, .link:focus-visible {
  outline: 3px solid var(--blue-2); outline-offset: 2px;
}
.btn-light { background: var(--white); color: var(--blue); border-color: var(--white); }
.btn-light:hover { background: var(--grey-2); border-color: var(--grey-2); color: var(--navy); }
.btn-outline { background: transparent; color: var(--white); border-color: var(--grey-3); }
.btn-outline:hover { background: var(--white); color: var(--blue); border-color: var(--white); }
.btn-small { padding: .55rem 1.1rem; font-size: .78rem; }
.btn-block { width: 100%; padding: 1.05rem; font-size: .95rem; }
.btn:disabled { opacity: .6; cursor: progress; }
.link { background: none; border: 0; padding: 0; color: var(--blue); cursor: pointer; text-decoration: underline; font: inherit; }

/* Header */
.site-header { position: sticky; top: 0; z-index: 10; background: var(--blue); color: var(--white); border-bottom: 1px solid var(--navy); }
.header-inner { display: flex; align-items: center; justify-content: space-between; gap: 1rem; padding-top: .7rem; padding-bottom: .7rem; }
.brand { color: var(--white); text-decoration: none; min-width: 0; }
.brand-title { display: block; font: 700 .95rem/1.2 var(--serif); letter-spacing: .02em; text-transform: uppercase; }
.brand-sub { display: block; font-size: .75rem; color: var(--grey-2); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.site-header .btn { background: var(--white); color: var(--blue); border-color: var(--white); flex: none; }

/* Hero */
.hero { position: relative; min-height: min(88vh, 760px); display: flex; align-items: flex-end; color: var(--white); overflow: hidden; background: var(--navy); }
.hero-img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
.hero-shade { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(0, 23, 74, .15) 0%, rgba(0, 23, 74, .55) 45%, rgba(0, 0, 0, .88) 100%); }
.hero-content { position: relative; padding-top: 6rem; padding-bottom: 4rem; }
.hero h1 { max-width: 16ch; }
.hero .lede { max-width: 62ch; font-size: 1.08rem; color: var(--grey-1); }
.hero .eyebrow { color: var(--grey-2); }
.hero-actions { display: flex; flex-wrap: wrap; align-items: center; gap: 1.25rem; margin-top: 1.75rem; }
.hero-count { font-size: .95rem; color: var(--grey-2); }
.hero-count strong { color: var(--white); font-size: 1.3rem; }
.hero-credit { position: absolute; right: 16px; bottom: 10px; margin: 0; font-size: .72rem; color: var(--grey-3); }

/* Work strip */
.strip { background: var(--black); padding: 14px 0; overflow: hidden; }
.strip-track { display: flex; gap: 12px; width: max-content; animation: drift 80s linear infinite; }
.strip-track:hover { animation-play-state: paused; }
.strip figure { margin: 0; height: 180px; flex: none; position: relative; }
.strip img { height: 100%; width: auto; border-radius: 4px; }
.strip figcaption { position: absolute; left: 8px; bottom: 6px; font-size: .7rem; color: var(--white); background: rgba(0, 0, 0, .6); padding: 2px 6px; border-radius: 3px; opacity: 0; transition: opacity .2s; }
.strip figure:hover figcaption { opacity: 1; }
@keyframes drift { to { transform: translateX(-50%); } }
@media (prefers-reduced-motion: reduce) { .strip-track { animation: none; } .strip { overflow-x: auto; } }

/* Sections */
.section { padding: clamp(3rem, 8vw, 6rem) 0; }
.section-blue { background: var(--blue); color: var(--white); }
.card { background: var(--white); border: 1px solid var(--grey-2); border-radius: var(--radius); padding: clamp(1.25rem, 3vw, 2rem); box-shadow: 0 1px 2px rgba(0, 0, 0, .04); }
.grid-2 { display: grid; grid-template-columns: 1fr 1.1fr; gap: 1.5rem; align-items: start; }
.places { list-style: none; padding: 0; margin: 1rem 0 0; display: grid; gap: .5rem; }
.places li { border-left: 3px solid var(--blue); padding: .4rem .8rem; background: var(--grey-1); }

.budget-bar { display: flex; height: 18px; border-radius: 999px; overflow: hidden; margin: .5rem 0 1.25rem; background: var(--grey-2); }
.budget-bar span { height: 100%; }
.budget-table { width: 100%; border-collapse: collapse; font-size: .95rem; }
.budget-table th, .budget-table td { padding: .65rem 0; border-bottom: 1px solid var(--grey-2); text-align: left; font-weight: 400; vertical-align: top; }
.budget-table td { text-align: right; font-variant-numeric: tabular-nums; font-weight: 700; white-space: nowrap; padding-left: 1rem; }
.budget-table .sw { display: inline-block; width: 12px; height: 12px; border-radius: 3px; margin-right: .6rem; vertical-align: -1px; }
.budget-table small { display: block; color: var(--grey-4); font-size: .78rem; margin-left: 1.45rem; }
.budget-table tfoot th, .budget-table tfoot td { border-bottom: 0; border-top: 2px solid var(--ink); font-weight: 700; font-size: 1.05rem; padding-top: .8rem; }

.why { margin-top: clamp(2.5rem, 6vw, 4rem); }
.why-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
.why-grid p { margin: 0; padding-top: 1rem; border-top: 3px solid var(--blue); }
.why-grid strong { display: block; font-family: var(--serif); font-size: 1.1rem; margin-bottom: .3rem; }

/* Petition */
.grid-petition { display: grid; grid-template-columns: .9fr 1.1fr; gap: clamp(1.5rem, 4vw, 3rem); align-items: start; }
.tracker-bar { height: 16px; background: rgba(255, 255, 255, .18); border-radius: 999px; overflow: hidden; }
.tracker-bar i { display: block; height: 100%; width: 0; background: var(--white); border-radius: 999px; transition: width 1s ease; }
.tracker-label { margin: .6rem 0 2rem; color: var(--grey-2); }
.tracker-label strong { color: var(--white); font-size: 1.4rem; }
.feed { list-style: none; margin: 0; padding: 0; max-height: 300px; overflow-y: auto; border-top: 1px solid rgba(255, 255, 255, .2); }
.feed li { padding: .6rem 0; border-bottom: 1px solid rgba(255, 255, 255, .15); font-size: .92rem; }
.feed li .muted, .section-blue .muted { color: var(--grey-3); }
.feed li.new { animation: flash 1.2s ease; }
@keyframes flash { from { background: rgba(255, 255, 255, .2); } }

.form { color: var(--ink); }
.field { display: block; font-weight: 600; font-size: .92rem; margin-bottom: 1.1rem; border: 0; padding: 0; }
.field small { display: block; font-weight: 400; color: var(--grey-4); font-size: .8rem; margin-top: .35rem; }
.req { color: var(--blue); }
.opt { font-weight: 400; color: var(--grey-4); }
input:not([type=checkbox]), select, textarea {
  display: block; width: 100%; margin-top: .4rem; font: 400 1rem/1.4 var(--sans); color: var(--ink);
  border: 1px solid var(--grey-3); border-radius: 8px; padding: .75rem .85rem; background: var(--white);
}
input:focus, select:focus, textarea:focus { border-color: var(--blue); outline: none; box-shadow: 0 0 0 3px rgba(1, 33, 105, .15); }
input[aria-invalid=true], select[aria-invalid=true] { border-color: var(--black); box-shadow: 0 0 0 2px var(--black); }
.sig legend { font-weight: 600; margin-bottom: .5rem; }
.check { display: flex; gap: .6rem; align-items: flex-start; font-weight: 400; font-size: .92rem; cursor: pointer; }
.check input { width: 18px; height: 18px; margin-top: 2px; accent-color: var(--blue); flex: none; }
.check.small { font-size: .82rem; color: var(--grey-4); margin: -.4rem 0 1.1rem; }
.or { font-size: .8rem; color: var(--grey-4); margin: .8rem 0 .4rem; font-weight: 400; }
.pad-wrap { position: relative; }
#pad { width: 100%; height: 140px; border: 1px dashed var(--grey-3); border-radius: 8px; background: var(--grey-1); touch-action: none; cursor: crosshair; display: block; }
#pad-clear { position: absolute; right: 10px; top: 8px; font-size: .8rem; }
.err { background: var(--grey-1); border-left: 4px solid var(--black); padding: .7rem .9rem; font-size: .9rem; margin: 0 0 1rem; }
.done { text-align: center; padding: 1.5rem .5rem; }
.done h3 { font-size: 1.6rem; color: var(--blue); }

/* Quotes */
.quotes { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 1rem; }
.quote { margin: 0; padding: 1.4rem; background: var(--grey-1); border-radius: var(--radius); border-top: 4px solid var(--blue); }
.quote p { font-family: var(--serif); font-size: 1.05rem; margin: 0 0 .8rem; }
.quote footer { font-size: .82rem; color: var(--grey-4); }
.empty { color: var(--grey-4); }

/* Footer */
.footer { background: var(--black); color: var(--grey-2); padding: 3rem 0 2rem; }
.footer h3 { color: var(--white); }
.footer a:not(.btn) { color: var(--white); }
.footer-grid { display: grid; grid-template-columns: 1.3fr 1fr 1fr; gap: 2rem; }
.share { display: flex; flex-wrap: wrap; gap: .6rem; }
.share .btn { font-size: .75rem; padding: .65rem 1rem; }
.share-note { font-size: .82rem; color: var(--grey-3); min-height: 1.2em; }
.disclaimer { margin-top: 2.5rem; padding-top: 1.25rem; border-top: 1px solid var(--grey-4); font-size: .78rem; color: var(--grey-3); }

@media (max-width: 860px) {
  .grid-2, .grid-petition, .why-grid, .footer-grid { grid-template-columns: 1fr; }
  .brand-sub { display: none; }
  .strip figure { height: 130px; }
}
</style>
    <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.45.4/dist/umd/supabase.js"></script>
  </head>
<body>
  <div id="preview-banner" class="preview-banner" hidden>Preview mode — signatures are saved only in this browser until the database is connected.</div>

  <header class="site-header">
    <div class="wrap header-inner">
      <a href="#top" class="brand">
        <span class="brand-title">Duke University Gibson Moore Art Commission</span>
        <span class="brand-sub">Empowering Student Visual Culture Through Permanent Campus Art</span>
      </a>
      <a href="#sign" class="btn btn-small">Sign</a>
    </div>
  </header>

  <main id="top">
    <!-- 1. Hero -->
    <section class="hero">
      <img class="hero-img" src="https://www.stevensosmoore.com/images/details/cowboy-in-the-clouds-1.jpg" alt="Close-up of oil brushwork from Gibson Moore's painting Cowboy in the Clouds">
      <div class="hero-shade"></div>
      <div class="wrap hero-content">
        <p class="eyebrow">Student petition</p>
        <h1>A $30,000 Student Legacy Art Series for Duke Public Spaces.</h1>
        <p class="lede">We are calling on Duke Arts, Duke Student Government (DSG), and Campus Facilities to fully fund and install a 10-piece large-scale painting series created by student artist Gibson Moore. Sign the petition below to show university leadership that Duke students support investing campus funds into permanent, student-created visual art.</p>
        <div class="hero-actions">
          <a href="#sign" class="btn btn-light">Sign the petition</a>
          <div class="hero-count" aria-live="polite"><strong data-count>—</strong> signatures so far</div>
        </div>
      </div>
      <p class="hero-credit">Detail, <em>Cowboy in the Clouds</em>, oil on canvas</p>
    </section>

    <!-- Work strip -->
    <section class="strip" aria-label="Selected work by Gibson Moore">
      <div class="strip-track" id="strip"></div>
    </section>

    <!-- 2. Project breakdown -->
    <section class="section" id="project">
      <div class="wrap">
        <div class="grid-2">
          <article class="card vision">
            <p class="eyebrow">The vision</p>
            <h2>Ten paintings. Permanent homes on campus.</h2>
            <p>A cohesive series of ten large-scale paintings in varied canvas sizes, made with archival oil and acrylic so they hold their color for decades.</p>
            <p>The series is planned for permanent or semi-permanent installation in the places students actually pass every day:</p>
            <ul class="places">
              <li><strong>Bryan Center</strong></li>
              <li><strong>Brodhead Center</strong></li>
              <li><strong>Rubenstein Arts Center</strong></li>
            </ul>
          </article>

          <article class="card budget">
            <p class="eyebrow">Budget transparency</p>
            <h2>Where every dollar of the $30,000 goes</h2>
            <div class="budget-bar" id="budget-bar" role="img" aria-label="Budget split as a bar"></div>
            <table class="budget-table" id="budget-table">
              <tbody></tbody>
              <tfoot><tr><th>Total</th><td>$30,000</td></tr></tfoot>
            </table>
          </article>
        </div>

        <article class="why">
          <p class="eyebrow">Why this matters to students</p>
          <h2>Duke's walls should show Duke's own students.</h2>
          <div class="why-grid">
            <p><strong>Keep it in the community.</strong> Major campus art commissions should go to Duke's own student creators, not be outsourced to outside contractors.</p>
            <p><strong>Leave a legacy.</strong> Permanent student work tells every future class that what they make here matters enough to hang on the walls.</p>
            <p><strong>Spend visibly.</strong> A fixed, published budget means students can see exactly what campus funds are buying.</p>
          </div>
        </article>
      </div>
    </section>

    <!-- 3 + 4. Petition and progress -->
    <section class="section section-blue" id="sign">
      <div class="wrap grid-petition">
        <div class="progress-col">
          <p class="eyebrow eyebrow-light">Live progress</p>
          <h2>Add your name.</h2>
          <div class="tracker">
            <div class="tracker-bar"><i id="tracker-fill"></i></div>
            <p class="tracker-label" aria-live="polite"><strong data-count>—</strong> / <span id="goal">10,000</span> signatures collected</p>
          </div>
          <h3>Recent supporters</h3>
          <ul class="feed" id="feed"><li class="muted">Loading…</li></ul>
        </div>

        <form id="petition" class="card form" novalidate>
          <div id="form-body">
            <label class="field">Full name <span class="req">*</span>
              <input name="full_name" required minlength="3" maxlength="80" autocomplete="name" placeholder="First and Last Name">
            </label>
            <label class="field">Duke email address <span class="req">*</span>
              <input name="email" type="email" required autocomplete="email" placeholder="netid@duke.edu" pattern="^[^@\s]+@duke\.edu$">
              <small>Used solely to verify current Duke student/community status. Your email will not be shared or spammed.</small>
            </label>
            <label class="field">Affiliation <span class="req">*</span>
              <select name="affiliation" required>
                <option value="" disabled selected>Choose one</option>
                <option value="undergrad">Undergraduate Student</option>
                <option value="grad">Graduate Student</option>
                <option value="faculty_staff">Duke Faculty &amp; Staff</option>
                <option value="alumni">Alumni</option>
              </select>
            </label>

            <fieldset class="field sig">
              <legend>Signature</legend>
              <label class="check"><input type="checkbox" name="authorized"> I authorize my name to be included in the petition presented to DSG and Duke Arts.</label>
              <p class="or">and/or draw your signature</p>
              <div class="pad-wrap">
                <canvas id="pad" aria-label="Signature pad: draw with your finger or mouse"></canvas>
                <button type="button" class="link" id="pad-clear">Clear</button>
              </div>
            </fieldset>

            <label class="field">Why do you want to see more student-created art in Duke buildings? <span class="opt">(optional)</span>
              <textarea name="comment" rows="3" maxlength="500"></textarea>
            </label>
            <label class="check small"><input type="checkbox" name="comment_public" checked> Show my comment (with my first name and last initial) on this page</label>

            <p class="err" id="form-err" hidden></p>
            <button class="btn btn-block" id="submit">Add my signature to the commission</button>
          </div>
          <div id="form-done" class="done" hidden></div>
        </form>
      </div>
    </section>

    <!-- Endorsements -->
    <section class="section" id="voices">
      <div class="wrap">
        <p class="eyebrow">In their words</p>
        <h2>Why students are signing</h2>
        <div class="quotes" id="quotes"></div>
      </div>
    </section>
  </main>

  <!-- 5. Footer -->
  <footer class="footer">
    <div class="wrap footer-grid">
      <div>
        <h3>Share the petition</h3>
        <div class="share">
          <button class="btn btn-outline" data-share="instagram">Instagram Story</button>
          <button class="btn btn-outline" data-share="groupme">GroupMe</button>
          <a class="btn btn-outline" id="share-reddit" target="_blank" rel="noopener">Post to r/duke</a>
        </div>
        <p class="share-note" id="share-note" aria-live="polite"></p>
      </div>
      <div>
        <h3>Press</h3>
        <p id="press">The Duke Chronicle feature — link coming once it's published.</p>
      </div>
      <div>
        <h3>Contact</h3>
        <p>Departmental co-sponsorship or faculty advising? <a href="mailto:gibson.moore@duke.edu?subject=Art%20Commission%20co-sponsorship">Email Gibson Moore</a>.</p>
        <p>See more work at <a href="https://www.stevensosmoore.com" target="_blank" rel="noopener">stevensosmoore.com</a> and <a href="https://instagram.com/stevensosmoore" target="_blank" rel="noopener">@stevensosmoore</a>.</p>
      </div>
    </div>
    <p class="wrap disclaimer">This is an independent, student-led petition. It is not an official Duke University website and is not endorsed by Duke University, Duke Arts, Duke Student Government or Campus Facilities.</p>
  </footer>
<script type="module">
// Petition page. Signatures go to Supabase when public/env.js has a URL +
// anon key; otherwise the page runs in preview mode and keeps signatures in
// this browser only. Every number and name shown comes from real signatures —
// nothing is seeded.

const CONFIG = {
  goal: 10000,
  chronicleUrl: "", // paste The Duke Chronicle article URL here once it's published
  shareText: "Sign the petition for a $30,000 student-made art series in Duke's public spaces.",
};

const BUDGET = [
  { amount: 10000, label: "Artist Commission & Production Fee", color: "#012169" },
  { amount: 6500, label: "Raw Materials & Fine Art Supplies", color: "#1f3d8a" },
  { amount: 5000, label: "Archival Framing & Preservation", color: "#4b5563" },
  { amount: 4000, label: "Site Mounting, Facilities Safety & Lighting", color: "#000000" },
  { amount: 2500, label: "Studio Operations & Ventilation Logistics", color: "#9ca3af" },
  { amount: 2000, label: "Digital Documentation & Fine Art Transit", color: "#d1d5db" },
];

const WORKS = [
  ["airship-over-the-glass-city", "Airship over the Glass City"],
  ["teal-harlequin", "Harlequin in Teal"],
  ["the-procession", "The Procession"],
  ["the-dragon-duel", "The Dragon Duel"],
  ["the-dog-pile", "Three Good Dogs"],
  ["angels-at-the-gate", "Angels at the Gate"],
  ["cowboy-in-the-clouds", "Cowboy in the Clouds"],
  ["the-garden-of-everything", "The Garden of Everything"],
  ["golden-face", "Golden Face"],
  ["the-pink-whirlpool", "The Pink Whirlpool"],
  ["riders-in-the-red", "Riders in the Red"],
  ["falling-through-water", "Falling Through Water"],
  ["the-long-fall", "The Long Fall"],
  ["moon-faces", "Comet of Faces"],
  ["the-red-cyclops", "The Red Cyclops"],
  ["charcoal-figure", "Charcoal Figure"],
];

const AFFILIATIONS = { undergrad: "Undergrad", grad: "Grad Student", faculty_staff: "Faculty & Staff", alumni: "Alumni" };
const PENDING_KEY = "commission.pending";

const $ = (s) => document.querySelector(s);
const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
const fmt = (n) => n.toLocaleString("en-US");

// To collect real verified signatures, paste your Supabase project URL and anon key here.
const ENV = { SUPABASE_URL: "", SUPABASE_ANON_KEY: "" };
const sb = ENV.SUPABASE_URL && ENV.SUPABASE_ANON_KEY && window.supabase
  ? window.supabase.createClient(ENV.SUPABASE_URL, ENV.SUPABASE_ANON_KEY, { auth: { persistSession: true, detectSessionInUrl: true, flowType: "implicit" } })
  : null;
if (!sb) $("#preview-banner").hidden = false;

const store = {
  get(k) { try { return JSON.parse(localStorage.getItem(k)); } catch { return null; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} },
  del(k) { try { localStorage.removeItem(k); } catch {} },
};

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------
async function loadStats() {
  if (!sb) {
    const all = store.get("commission.preview") || [];
    return { total: all.length, recent: all.slice().reverse() };
  }
  const [{ data: c }, { data: r }] = await Promise.all([
    sb.from("signature_count").select("total").single(),
    sb.from("recent_signers").select("*"),
  ]);
  return { total: c?.total ?? 0, recent: r || [] };
}

async function saveSignature(row) {
  if (!sb) {
    const all = store.get("commission.preview") || [];
    if (all.some((s) => s.email === row.email)) throw new Error("already");
    const parts = row.full_name.trim().split(/\s+/);
    all.push({ ...row, display_name: parts.length > 1 ? `${parts[0]} ${parts.at(-1)[0]}.` : parts[0], comment: row.comment_public ? row.comment : null, created_at: new Date().toISOString() });
    store.set("commission.preview", all);
    return;
  }
  const { error } = await sb.from("signatures").insert(row);
  if (error) throw new Error(error.code === "23505" ? "already" : error.message);
}

// ---------------------------------------------------------------------------
// Render: strip, budget, stats
// ---------------------------------------------------------------------------
function renderStrip() {
  const items = WORKS.map(([f, t]) => `<figure><img src="https://www.stevensosmoore.com/images/works/${f}.jpg" alt="${esc(t)} by Gibson Moore" loading="lazy"><figcaption>${esc(t)}</figcaption></figure>`).join("");
  $("#strip").innerHTML = items + items.replace(/alt="[^"]*"/g, 'alt="" aria-hidden="true"');
}

function renderBudget() {
  const total = BUDGET.reduce((a, b) => a + b.amount, 0);
  $("#budget-bar").innerHTML = BUDGET.map((b) => `<span style="width:${(b.amount / total) * 100}%;background:${b.color}" title="${esc(b.label)}"></span>`).join("");
  $("#budget-table tbody").innerHTML = BUDGET.map((b) => `
    <tr><th><span class="sw" style="background:${b.color}"></span>${esc(b.label)}<small>${Math.round((b.amount / total) * 1000) / 10}% of budget</small></th>
    <td>$${fmt(b.amount)}</td></tr>`).join("");
}

function ago(iso) {
  const s = Math.max(1, (Date.now() - Date.parse(iso)) / 1000);
  const units = [[31536000, "year"], [2592000, "month"], [86400, "day"], [3600, "hour"], [60, "minute"], [1, "second"]];
  for (const [sec, name] of units) if (s >= sec) { const n = Math.floor(s / sec); return `${n} ${name}${n > 1 ? "s" : ""} ago`; }
  return "just now";
}

let lastTopId = null;
async function refreshStats() {
  let stats;
  try { stats = await loadStats(); } catch { return; }
  document.querySelectorAll("[data-count]").forEach((el) => (el.textContent = fmt(stats.total)));
  $("#goal").textContent = fmt(CONFIG.goal);
  $("#tracker-fill").style.width = stats.total ? `${Math.min(100, Math.max(1.5, (stats.total / CONFIG.goal) * 100))}%` : "0";

  const topId = stats.recent[0]?.id ?? stats.recent[0]?.created_at;
  $("#feed").innerHTML = stats.recent.slice(0, 25).map((s, i) => `
    <li class="${i === 0 && lastTopId && topId !== lastTopId ? "new" : ""}"><strong>${esc(s.display_name)}</strong>
      (${esc(AFFILIATIONS[s.affiliation] || "")}) signed <span class="muted">${ago(s.created_at)}</span></li>`).join("")
    || `<li class="muted">No signatures yet — be the first.</li>`;
  lastTopId = topId;

  const quotes = stats.recent.filter((s) => s.comment && s.comment.trim().length >= 12).slice(0, 9);
  $("#quotes").innerHTML = quotes.map((s) => `
    <blockquote class="quote"><p>“${esc(s.comment.trim())}”</p><footer>— ${esc(s.display_name)}, ${esc(AFFILIATIONS[s.affiliation] || "")}</footer></blockquote>`).join("")
    || `<p class="empty">Supporters' comments will appear here as people sign. Leave one with your signature.</p>`;
}

// ---------------------------------------------------------------------------
// Signature pad
// ---------------------------------------------------------------------------
const pad = $("#pad");
const ctx = pad.getContext("2d");
let drawn = false, drawing = false, last = null;

function sizePad() {
  const r = pad.getBoundingClientRect(), dpr = window.devicePixelRatio || 1;
  const keep = drawn ? pad.toDataURL() : null;
  pad.width = r.width * dpr; pad.height = r.height * dpr;
  ctx.scale(dpr, dpr);
  ctx.lineWidth = 2.2; ctx.lineCap = "round"; ctx.lineJoin = "round"; ctx.strokeStyle = "#012169";
  if (keep) { const img = new Image(); img.onload = () => ctx.drawImage(img, 0, 0, r.width, r.height); img.src = keep; }
}
const pt = (e) => { const r = pad.getBoundingClientRect(); return { x: e.clientX - r.left, y: e.clientY - r.top }; };
pad.addEventListener("pointerdown", (e) => { drawing = true; last = pt(e); pad.setPointerCapture(e.pointerId); });
pad.addEventListener("pointermove", (e) => {
  if (!drawing) return;
  const p = pt(e);
  ctx.beginPath(); ctx.moveTo(last.x, last.y); ctx.lineTo(p.x, p.y); ctx.stroke();
  last = p; drawn = true;
});
["pointerup", "pointercancel", "pointerleave"].forEach((t) => pad.addEventListener(t, () => (drawing = false)));
$("#pad-clear").onclick = () => { ctx.clearRect(0, 0, pad.width, pad.height); drawn = false; };
window.addEventListener("resize", sizePad);

// Trimmed, downscaled PNG so stored signatures stay small.
function signaturePng() {
  if (!drawn) return null;
  const c = document.createElement("canvas");
  const s = Math.min(1, 600 / pad.width);
  c.width = pad.width * s; c.height = pad.height * s;
  c.getContext("2d").drawImage(pad, 0, 0, c.width, c.height);
  return c.toDataURL("image/png");
}

// ---------------------------------------------------------------------------
// Form
// ---------------------------------------------------------------------------
const form = $("#petition");
const showErr = (msg) => { const e = $("#form-err"); e.textContent = msg; e.hidden = !msg; if (msg) e.scrollIntoView({ block: "nearest", behavior: "smooth" }); };

function collect() {
  const f = form.elements;
  const row = {
    full_name: f.full_name.value.trim().replace(/\s+/g, " "),
    email: f.email.value.trim().toLowerCase(),
    affiliation: f.affiliation.value,
    authorized: f.authorized.checked,
    signature_png: signaturePng(),
    comment: f.comment.value.trim() || null,
    comment_public: f.comment_public.checked,
  };
  [f.full_name, f.email, f.affiliation].forEach((el) => el.removeAttribute("aria-invalid"));
  const bad = (el, msg) => { el.setAttribute("aria-invalid", "true"); el.focus(); throw new Error(msg); };
  if (row.full_name.split(" ").length < 2) bad(f.full_name, "Please enter your first and last name.");
  if (!/^[^@\s]+@duke\.edu$/i.test(row.email)) bad(f.email, "Please use your @duke.edu email address.");
  if (!row.affiliation) bad(f.affiliation, "Please choose your affiliation.");
  if (!row.authorized && !row.signature_png) throw new Error("Tick the authorization box or draw your signature.");
  return row;
}

function done(title, body) {
  $("#form-body").hidden = true;
  const d = $("#form-done");
  d.innerHTML = `<h3>${title}</h3><p>${body}</p><a class="btn" href="#voices">See why others signed</a>`;
  d.hidden = false;
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  showErr("");
  let row;
  try { row = collect(); } catch (ex) { return showErr(ex.message); }
  const btn = $("#submit");
  btn.disabled = true; btn.textContent = "Submitting…";
  try {
    if (!sb) {
      await saveSignature(row);
      done("Thank you — you're on the petition.", "Your signature has been added. Share the page so more Duke students sign.");
      refreshStats();
      return;
    }
    // Verify the Duke email: Supabase sends a confirmation link; the signature
    // is saved when they come back through it (see finishPending below).
    store.set(PENDING_KEY, row);
    const { error } = await sb.auth.signInWithOtp({ email: row.email, options: { emailRedirectTo: `${location.origin}/#sign`, shouldCreateUser: true } });
    if (error) throw error;
    done("Check your Duke inbox.", `We sent a confirmation link to <strong>${esc(row.email)}</strong>. Click it to finish — your signature is counted once your Duke email is confirmed.`);
  } catch (ex) {
    showErr(ex.message === "already" ? "This Duke email has already signed. Thank you!" : `Something went wrong: ${ex.message}`);
  } finally {
    btn.disabled = false; btn.textContent = "Add my signature to the commission";
  }
});

async function finishPending(session) {
  const row = store.get(PENDING_KEY);
  if (!row || !session) return;
  if ((session.user.email || "").toLowerCase() !== row.email) return;
  store.del(PENDING_KEY);
  try {
    await saveSignature(row);
    done("Confirmed — you're on the petition.", "Your Duke email is verified and your signature has been added. Thank you!");
  } catch (ex) {
    if (ex.message === "already") done("You've already signed.", "This Duke email is already on the petition. Thank you!");
    else showErr(`We couldn't save your signature: ${ex.message}`);
  }
  await sb.auth.signOut();
  refreshStats();
  document.getElementById("sign").scrollIntoView();
}

// ---------------------------------------------------------------------------
// Share
// ---------------------------------------------------------------------------
const pageUrl = () => location.origin + location.pathname;
const note = (msg) => { $("#share-note").textContent = msg; };

async function shareOrCopy(hint) {
  if (navigator.share) {
    try { await navigator.share({ title: document.title, text: CONFIG.shareText, url: pageUrl() }); return; } catch (e) { if (e.name === "AbortError") return; }
  }
  try { await navigator.clipboard.writeText(`${CONFIG.shareText} ${pageUrl()}`); note(`Link copied. ${hint}`); }
  catch { note(`Copy this link: ${pageUrl()}`); }
}
document.querySelector('[data-share="instagram"]').onclick = () => shareOrCopy("Add it to your Instagram Story with a link sticker.");
document.querySelector('[data-share="groupme"]').onclick = () => shareOrCopy("Paste it into your GroupMe chats.");
$("#share-reddit").href = `https://www.reddit.com/r/duke/submit?url=${encodeURIComponent(pageUrl())}&title=${encodeURIComponent("Petition: fund a $30,000 student-made permanent art series on campus")}`;
if (CONFIG.chronicleUrl) $("#press").innerHTML = `<a href="${esc(CONFIG.chronicleUrl)}" target="_blank" rel="noopener">Read The Duke Chronicle feature →</a>`;

// ---------------------------------------------------------------------------
renderStrip();
renderBudget();
sizePad();
refreshStats();
setInterval(refreshStats, 30000);
if (sb) {
  sb.auth.getSession().then(({ data }) => finishPending(data.session));
  sb.auth.onAuthStateChange((event, session) => { if (event === "SIGNED_IN") finishPending(session); });
}
</script>
</body>
</html>

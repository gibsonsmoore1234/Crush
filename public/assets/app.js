// Petition page. Signatures go to Supabase when public/env.js has a URL +
// anon key; otherwise the page runs in preview mode and keeps signatures in
// this browser only. Every number and name shown comes from real signatures —
// nothing is seeded.

const CONFIG = {
  goal: 10000,
  chronicleUrl: "", // paste The Duke Chronicle article URL here once it's published
  shareText: "Sign the request to Duke University to commission a student art series by Gibson Moore.",
};


const WORKS = [
  ["new-field-painting", ""],
  ["new-fisherman-painting", ""],
  ["new-portrait-drawing", ""],
  ["new-flowers-drawing", ""],
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

const isStudent = (a) => a === "student" || a === "undergrad" || a === "grad";

const $ = (s) => document.querySelector(s);
const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
const fmt = (n) => n.toLocaleString("en-US");

const ENV = window.__ENV__ || {};
const sb = ENV.SUPABASE_URL && ENV.SUPABASE_ANON_KEY && window.supabase
  ? window.supabase.createClient(ENV.SUPABASE_URL, ENV.SUPABASE_ANON_KEY, { auth: { persistSession: false } })
  : null;
if (!sb) $("#preview-banner").hidden = false;

// Make database problems visible instead of silently showing 0 / losing signatures.
function dbProblem(err) {
  const b = $("#preview-banner");
  b.textContent = `Signatures are not being saved: the database isn't set up yet (${err.message}). Run supabase/schema.sql in Supabase.`;
  b.classList.add("db-error");
  b.hidden = false;
}

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
    const students = all.filter((x) => isStudent(x.affiliation)).length;
    return { total: all.length, students, others: all.length - students, recent: all.slice().reverse() };
  }
  const [{ data: c, error: e1 }, { data: r, error: e2 }] = await Promise.all([
    sb.from("signature_count").select("total,students,others").single(),
    sb.from("recent_signers").select("*"),
  ]);
  if (e1 || e2) dbProblem(e1 || e2);
  return { total: c?.total ?? 0, students: c?.students ?? 0, others: c?.others ?? 0, recent: r || [] };
}

async function saveSignature(row) {
  if (!sb) {
    const all = store.get("commission.preview") || [];
    const parts = (row.full_name || "").trim().split(/\s+/).filter(Boolean);
    all.push({ ...row, display_name: !parts.length ? "A supporter" : parts.length > 1 ? `${parts[0]} ${parts.at(-1)[0]}.` : parts[0], comment: row.comment_public ? row.comment : null, created_at: new Date().toISOString() });
    store.set("commission.preview", all);
    return;
  }
  const { error } = await sb.from("signatures").insert(row);
  if (error) throw new Error(error.message);
}

// ---------------------------------------------------------------------------
// Render: gallery, stats
// ---------------------------------------------------------------------------
function renderGallery() {
  $("#gallery").innerHTML = WORKS.map(([f, t]) => `
    <figure><img src="/images/works/${f}.jpg" alt="${t ? esc(t) + " by Gibson Moore" : "Artwork by Gibson Moore"}" loading="lazy">${t ? `<figcaption>${esc(t)}</figcaption>` : ""}</figure>`).join("");
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
  document.querySelectorAll("[data-students]").forEach((el) => (el.textContent = fmt(stats.students)));
  document.querySelectorAll("[data-others]").forEach((el) => (el.textContent = fmt(stats.others)));
  if (!$("#feed")) return;
  $("#goal").textContent = fmt(CONFIG.goal);
  $("#tracker-fill").style.width = stats.total ? `${Math.min(100, Math.max(1.5, (stats.total / CONFIG.goal) * 100))}%` : "0";

  const topId = stats.recent[0]?.id ?? stats.recent[0]?.created_at;
  $("#feed").innerHTML = stats.recent.slice(0, 25).map((s, i) => `
    <li class="${i === 0 && lastTopId && topId !== lastTopId ? "new" : ""}"><strong>${esc(s.display_name)}</strong>
      ${isStudent(s.affiliation) ? "(Duke student) " : ""}signed <span class="muted">${ago(s.created_at)}</span></li>`).join("")
    || `<li class="muted">No signatures yet — be the first.</li>`;
  lastTopId = topId;

  if (!$("#quotes")) return;
  const quotes = stats.recent.filter((s) => s.comment && s.comment.trim().length >= 12).slice(0, 9);
  $("#quotes").innerHTML = quotes.map((s) => `
    <blockquote class="quote"><p>“${esc(s.comment.trim())}”</p><footer>— ${esc(s.display_name)}${isStudent(s.affiliation) ? ", Duke student" : ""}</footer></blockquote>`).join("")
    || `<p class="empty">Comments from supporters will appear here.</p>`;
}

// ---------------------------------------------------------------------------
// Signature pad
// ---------------------------------------------------------------------------
const page = document.body.dataset.page;
const pad = $("#pad") || document.createElement("canvas");
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
if ($("#pad-clear")) $("#pad-clear").onclick = () => { ctx.clearRect(0, 0, pad.width, pad.height); drawn = false; };
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
const form = $("#petition") || document.createElement("form");
const showErr = (msg) => { const e = $("#form-err"); e.textContent = msg; e.hidden = !msg; if (msg) e.scrollIntoView({ block: "nearest", behavior: "smooth" }); };

function collect() {
  const f = form.elements;
  const row = {
    full_name: f.full_name.value.trim().replace(/\s+/g, " "),
    affiliation: form.querySelector("[name=affiliation]:checked")?.value || "public",
    email: f.email.value.trim() || null,
    authorized: f.authorized.checked,
    signature_png: signaturePng(),
    comment: f.comment.value.trim() || null,
    comment_public: f.comment_public.checked,
  };
  f.full_name.removeAttribute("aria-invalid");
  if (!row.full_name) {
    f.full_name.setAttribute("aria-invalid", "true");
    f.full_name.focus();
    throw new Error("Please enter your name.");
  }
  return row;
}

function done(title, body) {
  if (!$("#form-body")) return;
  $("#form-body").hidden = true;
  const d = $("#form-done");
  d.innerHTML = `<h3>${title}</h3><p>${body}</p><a class="btn" href="/proposal">View the proposal</a>`;
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
    await saveSignature(row);
    done("Thank you — you're on the petition.", "Your signature has been added. Share the page so more people sign.");
    refreshStats();
  } catch (ex) {
    showErr(`Something went wrong: ${ex.message}`);
  } finally {
    btn.disabled = false; btn.textContent = "Add my signature to the commission";
  }
});

// ---------------------------------------------------------------------------
// Share
// ---------------------------------------------------------------------------
const pageUrl = () => location.origin + "/sign";
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
$("#share-reddit").href = `https://www.reddit.com/r/duke/submit?url=${encodeURIComponent(pageUrl())}&title=${encodeURIComponent("Request to Duke University to Commission a Student Art Series by Gibson Moore")}`;
if (CONFIG.chronicleUrl) $("#press").innerHTML = `<a href="${esc(CONFIG.chronicleUrl)}" target="_blank" rel="noopener">Read The Duke Chronicle feature →</a>`;

// ---------------------------------------------------------------------------
if (page === "work") renderGallery();
if (page === "sign") sizePad();
refreshStats();
setInterval(refreshStats, 30000);


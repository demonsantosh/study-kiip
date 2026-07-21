/* ============================================================
   reveal-check.js
   For each chapter listed as hidden in staging.json, check whether
   its CLEAN (translatable) content is fully translated into all 11
   languages. When a chapter is clean-complete, remove it from
   staging.json so the next build reveals it in the learner UI.

   "Clean" ignores OCR-garbled scan fragments (stray latin/digits,
   replacement chars, markers, low-Hangul) — those can never be
   translated, so they must not block a reveal.

   Usage:
     node reveal-check.js           # check + reveal + rebuild if changed
     node reveal-check.js --dry     # report only, change nothing
   ============================================================ */
const fs = require("fs");
const { execSync } = require("child_process");

global.window = {};
require("./js/data.js");
require("./js/translations.js");
require("./js/translations-gen.js");
require("./js/lessons-data.js");

const LANGS = ["ne", "bn", "ru", "he", "ms", "vi", "id", "si", "pt", "fr", "ta"];
const data = (window.I18N && window.I18N.data) || {};
const LV = window.LESSON_VOCAB || {};
const MD = window.LESSON_MD || {};

const srcNe = new Set();
Object.keys(LV).forEach((id) => (LV[id] || []).forEach((v) => { if (v && v.ne && /[ऀ-ॿ]/.test(v.ne)) srcNe.add(v.ko); }));
const hasNe = (k) => !!(data[k] && data[k].ne) || srcNe.has(k);
const missAny = (k) => LANGS.some((l) => (l === "ne" ? !hasNe(k) : !(data[k] && data[k][l])));

// conservative "is this an un-translatable OCR fragment?" test (ignore for reveal)
function garbled(s) {
  if (/[�]/.test(s)) return true;                       // replacement char
  if (/(^|\s)[ㄱ-ㅣ](\s|$)/.test(s)) return true;    // isolated jamo
  if (/[가-힣][0-9][가-힣]/.test(s)) return true; // digit glued inside a word
  if (/[①-⑨○●•¥@]/.test(s)) return true; // ①..⑨ ○ ● • ¥ @
  const h = (s.match(/[가-힣]/g) || []).length, nz = s.replace(/\s/g, "").length;
  if (/[A-Za-z]{2,}/.test(s) && (nz ? h / nz < 0.55 : true)) return true; // latin-heavy
  if (nz && h / nz < 0.55) return true;                      // mostly non-Hangul
  return false;
}

// extract the displayed Korean sentences of one chapter (mirror of nextwords.js)
function sentsOf(id) {
  const out = [], seen = new Set();
  (MD[id] || "").split(/\r?\n/).forEach((line) => {
    const s = line.trim(); if (!s) return;
    const kr = (s.match(/[가-힣]/g) || []).length; if (!kr) return;
    if (kr / s.replace(/\s/g, "").length < 0.5) return;
    if (!(s.length >= 10 || /[?!]$|다$|요$|까$|죠$/.test(s))) return;
    if (seen.has(s)) return; seen.add(s); out.push(s);
  });
  return out;
}

function chapterStatus(id) {
  const items = [];
  (LV[id] || []).forEach((v) => { if (v && v.ko) items.push(v.ko); });
  sentsOf(id).forEach((s) => items.push(s));
  let cleanTotal = 0, cleanMissing = 0, garbledCount = 0;
  const uniq = new Set(items);
  for (const ko of uniq) {
    if (garbled(ko)) { garbledCount++; continue; }
    cleanTotal++;
    if (missAny(ko)) cleanMissing++;
  }
  return { cleanTotal, cleanMissing, garbledCount };
}

const dry = process.argv.includes("--dry");
let staging;
try { staging = JSON.parse(fs.readFileSync("staging.json", "utf8")); } catch (e) { console.log("no staging.json — nothing to check"); process.exit(0); }
const hidden = staging.hidden || [];
if (!hidden.length) { console.log("no hidden chapters"); process.exit(0); }

const reveal = [];
hidden.forEach((id) => {
  const st = chapterStatus(id);
  const title = (window.LESSON_META[id] || {}).title || id;
  const done = st.cleanMissing === 0 && st.cleanTotal > 0;
  console.log(`${id} (${title}): clean ${st.cleanTotal - st.cleanMissing}/${st.cleanTotal} done, ${st.garbledCount} garbled${done ? "  => REVEAL" : ""}`);
  if (done) reveal.push(id);
});

if (!reveal.length) { console.log("nothing to reveal yet."); process.exit(0); }
if (dry) { console.log("[dry] would reveal:", reveal.join(", ")); process.exit(0); }

staging.hidden = hidden.filter((id) => reveal.indexOf(id) === -1);
fs.writeFileSync("staging.json", JSON.stringify(staging, null, 2) + "\n");
console.log("revealed:", reveal.join(", "), "— rebuilding lessons-data.js");
execSync("node build-lessons.js", { stdio: "inherit" });

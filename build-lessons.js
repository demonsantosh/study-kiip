#!/usr/bin/env node
/* ============================================================
   build-lessons.js
   Reads every Markdown file in ./mds, cleans the chat artifacts,
   and writes js/lessons-data.js with:
     window.LESSON_MD    = { "<id>": "<full cleaned markdown>" }
     window.LESSON_VOCAB = { "<id>": [ {ko,en,ne,similar}, ... ] }
     window.LESSON_META  = { "<id>": { level, number, title } }

   File naming convention (case-insensitive):
     KIIP4_chapter1.md  -> level kiip4, chapter 1, id "k4-ch1"
     KIIP3_chapter5.md  -> level kiip3, chapter 5, id "k3-ch5"

   Run:  node build-lessons.js
   ============================================================ */
const fs = require("fs");
const path = require("path");

const MDS = path.join(__dirname, "mds");
const OUT = path.join(__dirname, "js", "lessons-data.js");

// Recursively collect every .md under mds/ (now organized in KIIP-3/ , KIIP-4/
// subfolders). Paths are returned RELATIVE to MDS; ids are derived from the
// filename (KIIP3_chapter1.md -> k3-ch1), so the folder layout doesn't matter.
function walkMd(dir) {
  let out = [];
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) out = out.concat(walkMd(full));
    else if (/\.md$/i.test(e.name)) out.push(path.relative(MDS, full));
  }
  return out;
}
const files = fs.existsSync(MDS) ? walkMd(MDS).sort() : [];

const MD = {}, VOCAB = {}, META = {};

function idFromName(name) {
  // KIIP4_chapter1.md / kiip3-ch2.md / KIIP 4 chapter 1 ...
  const m = name.match(/kiip\s*_?\s*([34]).*?(\d+)/i);
  if (!m) return null;
  const lvl = m[1], num = parseInt(m[2], 10);
  return { id: "k" + lvl + "-ch" + num, level: "kiip" + lvl, number: num };
}

const hasHangul = s => /[가-힣]/.test(s);

// lines that are pure chat artifacts -> drop
function isArtifact(line) {
  const t = line.trim();
  if (!t) return false; // keep blanks (paragraph breaks)
  if (/^(May|June|July|Apr|Aug|Sept?|Oct|Nov|Dec|Jan|Feb|Mar)\s+\d{1,2}$/i.test(t)) return true;
  if (/^Used \d+ tools?$/i.test(t)) return true;
  if (/^📖?\s*Send the next page/i.test(t)) return true;
  if (/^Continue from where you left off\.?$/i.test(t)) return true;
  if (/^Show more$/i.test(t)) return true;
  if (/^Claude'?s response was interrupted\.?$/i.test(t)) return true;

  // ---- page-share prompts, chat timestamps & assistant/user narration ----
  if (/^📌?\s*✅?\s*Share (the next page|Chapter)\b/i.test(t)) return true;     // "📌 Share the next page to continue!"
  if (/whenever you'?re ready/i.test(t)) return true;                           // "...whenever you're ready 🚀"
  if (/^\d{1,2}:\d{2}\s*(AM|PM)$/i.test(t)) return true;                        // "10:09 AM" chat timestamps
  if (/^(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Sept|Oct|Nov|Dec)[a-z]*\s+\d{1,2}$/i.test(t)) return true; // "Jun 7"
  if (/Memory updated/i.test(t) || /메모리 업데이트/.test(t)) return true;
  if (/^Now let me save this/i.test(t)) return true;
  if (/\breprovide\b/i.test(t)) return true;                                    // "Reprovide all this is chapter 8"
  if (/^Let me (update|reconsider|reprovide|save)\b/i.test(t)) return true;
  if (/잠깐! Let me reconsider/.test(t)) return true;
  if (/^Based on the (input|text on this page)/i.test(t)) return true;
  if (/^You('| )re right —/.test(t)) return true;
  if (/^You made mistake/i.test(t)) return true;
  if (/^Sentence wise word meaning also please/i.test(t)) return true;
  if (/^Also update in memo/i.test(t)) return true;
  if (/^Claude Fable/i.test(t)) return true;
  if (/^Next Chapter Preview/i.test(t)) return true;
  if (/^Chapter \d+ likely covers/i.test(t)) return true;
  if (/한국어 문법 오류를 식별하기 위해/.test(t)) return true;                       // KR process narration
  if (/^Results? from the web$/i.test(t)) return true;                          // search-UI leak
  if (/^Page number\s*\d+$/i.test(t)) return true;                              // OCR page number
  if (/^Acknowledged[.! ]/i.test(t)) return true;                              // "Acknowledged. Ready when you..."
  if (/^I need (a |the )?(sentence|question|word|translation|grammar)/i.test(t)) return true; // leaked user request
  if (/sentence wise (translation|word meaning)/i.test(t)) return true;
  if (/체계적으로 (정리|분석)/.test(t)) return true;                               // "...체계적으로 정리했습니다" prep note
  if (/표로 정리(했|함)/.test(t)) return true;
  if (/사용자 선호 형식/.test(t)) return true;
  if (/^총 \d+개 단어/.test(t)) return true;                                      // "총 35개 단어 — ...정리했어요"
  if (/could you re-?check|answer key genuinely/i.test(t)) return true;         // leaked chat question
  if (/^\d{1,3}\s+사[회외의]통[합할찰].{0,8}그램.*한국/.test(t)) return true;          // scanned page footer "16 사회통합프로그램(KIIP) 한국어와 한국문화 중급 2" (incl. OCR variants)

  // ---- chat / meta exchange lines (you copied whole chats) ----
  if (/^(Which book is this|Main book|Practice book|Page numbers default|From next time|Form next time|Some translation missing|My prompt requirement|Memory so that|Help me track|Just acknowledge|provide grammer|provide grammar|check (into )?memory|deconstructed|deciphered|identified|revised memory|saved to memory)/i.test(t)) return true;
  if (/(to memory|in memory\??)$/i.test(t) && t.length < 60) return true;
  if (/^(인식했|기억했|메모리|검토했|준비했)/.test(t)) return true;            // Claude process notes (KR)
  if (/(준비했습니다|준비했음|준비했다|정리했습니다|분석했습니다|준비됐습니다)$/.test(t)) return true;

  // ---- UI chrome accidentally copied ----
  if (/^(New chat|Chats|Projects|Artifacts|Customize|Products|Recents|All chats|Share|Code|Design|Ask Gme[- ]?IT|Gme-IT|Santosh Bhandary|Write a message.*)$/i.test(t)) return true;
  if (/^(Opus|Sonnet|Haiku|Claude)\s*[0-9]/.test(t)) return true;
  if (/Claude is AI and can make mistakes/i.test(t)) return true;

  // ---- OCR gibberish from pasted page photos (no Korean, no Nepali) ----
  if (!/[가-힣ऀ-ॿ]/.test(t)) {
    if (/[\[\]{}]/.test(t) && t.length < 40) return true;                  // stray brackets
    if (/[a-z]\.[a-z]/i.test(t) && t.length < 25 && !/\b(e\.g|i\.e|etc|a\.m|p\.m|u\.s|vs)\b/i.test(t)) return true; // "ad.y" letter.letter gibberish
    if (/(\b[A-Za-z]\b[\s,]+){3,}/.test(t) && t.length < 40) return true;  // "i n, C, w, v"
    if (/[A-Za-z]{1,4}\s+[A-Za-z]{1,4}$/.test(t) && t.length < 14 && !/\b(the|and|for|you|are|day|how|was|new|all)\b/i.test(t) && !/^[A-Z]/.test(t.replace(/[^A-Za-z]/g,""))) return true;
  }
  return false;
}

// Lines that START a real lesson section (Claude's structured output)
const START = /^((?:📖\s*)?KIIP\b|Page\s*\d+\s*[—\-–:]|Chapter\s*\d+\s*[:—\-–]|🔵|🎯|Word-by-word|Word meanings\s*:|Sentence\s*1\s*:)/i;
// Lines that END a section (chat scaffolding / hand-back to user)
const STOP = /^((?:📖\s*)?(?:✅\s*)?Send the next|(?:📖\s*)?(?:✅\s*)?Ready for the next|✅\s*Done\b|✅\s*Ready|Saved\b|Got it\b|Acknowledged\b|Understood\b|Help me track|Form next time|🎉[^\n]*(complete|완료|done))/i;

// Remove adjacent duplicate lines. If the duplicate has no Korean (an English
// "thinking summary" or doubled label), remove ALL copies; keep one if Korean.
function dedupe(lines) {
  const out = [];
  for (const l of lines) {
    if (out.length && out[out.length - 1] === l && l.trim()) {
      if (!hasHangul(l)) out.pop(); // drop both copies of English meta line
      continue;
    }
    out.push(l);
  }
  return out;
}

// Keep only content that lives inside a recognized lesson section; drop the
// user/Claude chat conversation, OCR pastes, acknowledgements, etc.
function cleanMarkdown(raw) {
  // The scanned running footer ("50 사회통합프로그램(KIIP) 한국어와 한국문화 중급2")
  // carries the textbook page number but is otherwise OCR noise. Convert it to a
  // normalized "Page N" marker BEFORE artifact removal so the page survives and
  // can be picked up by extractVocab (anchored on "한국어" to avoid vocab rows).
  let lines = raw.split(/\r?\n/).map(l => {
    const f = l.trim().match(/^(\d{1,3})\s+\S.*한국어/);
    return f ? "Page " + f[1] : l;
  });
  lines = dedupe(lines.filter(l => !isArtifact(l)));
  const kept = [];
  let inLesson = false;
  for (const line of lines) {
    const t = line.trim();
    // a line that is clearly lesson content (keeps blocks that lack a "Page N" header)
    const isContent =
      (line.indexOf("\t") !== -1 && hasHangul(line.split("\t")[0])) ||      // vocab/table row
      /^EN\s*:|^NE\s*:/.test(t) ||                                           // translation lines
      /^[🍜👥🏠🆕📝🔤🌱🌟💼📜🏃😔🌳😊🎯💡⚠️📊🍳📚🔵🌐🗣️📅🧭🎧✍️🧩🏷️]/.test(t) || // emoji section markers
      (/^[가-힣][가-힣\s()一-鿕]{0,24}\s[—–]\s/.test(t)) ||                   // "단어 — meaning ..." definition
      /^(Question|Sentence|Possible answer|Sample|Activity|Word|Example|예문|보기|정답|단어장|어휘|문법|활동)/i.test(t);
    if (STOP.test(t)) { inLesson = false; continue; }
    if (START.test(t) || isContent) { inLesson = true; kept.push(line); continue; }
    if (inLesson) kept.push(line);
  }
  // collapse runs of blank lines
  const out = [];
  let blank = 0;
  for (const l of kept) {
    if (!l.trim()) { blank++; if (blank > 1) continue; }
    else blank = 0;
    out.push(l);
  }
  return out.join("\n").trim();
}

const HEADER_KO = /^(word|korean|한국어|단어|#|영어|뜻|group|verb|tense|form|stem|program|award|title|event|excerpt|column|feeling|condition|항목|문장|root|pattern|grammar|번호|구분|예시|내용)/i;
const META_EN = /^(english|en|meaning|nepali|ne|np|नेपाली|similar|note|focus)$/i;

// split a meaning string "Korea / कोरिया Similar: 대한민국 (Republic of Korea)" -> {en, ne, similar}
function splitMeaning(rest) {
  rest = rest.trim();
  let similar = "";
  // pull "Similar: ..." or "(Similar: ...)"
  let mSim = rest.match(/\(?\s*Similar\s*:\s*([^)]+)\)?\s*$/i);
  if (mSim) { similar = mSim[1].trim(); rest = rest.slice(0, mSim.index).trim(); }
  rest = rest.replace(/[\/·]+$/, "").trim();
  // en / ne separated by " / "
  let en = rest, ne = "";
  const slash = rest.split(/\s+\/\s+/);
  if (slash.length >= 2) { en = slash[0].trim(); ne = slash.slice(1).join(" / ").trim(); }
  return { en, ne, similar };
}

function extractVocab(raw) {
  const seen = {}, voc = [];
  let curPage = null;
  const add = (ko, en, ne, similar, rom) => {
    ko = (ko || "").trim();
    en = (en || "").trim();
    if (!ko || !hasHangul(ko) || !en) return;
    if (HEADER_KO.test(ko) || META_EN.test(en)) return;
    if (ko.length > 24) return;                 // skip whole-sentence rows
    if (/[.?!。]$/.test(ko)) return;            // skip sentences
    if (seen[ko]) return;
    seen[ko] = 1;
    const o = { ko: ko, en: en };
    if (ne && ne.trim() && ne !== "-" && ne !== "—") o.ne = ne.trim();
    if (rom && rom.trim()) o.rom = rom.trim();
    if (similar && similar.trim() && similar !== "-" && similar !== "—") o.similar = similar.trim();
    if (curPage) o.page = curPage;
    voc.push(o);
  };

  raw.split(/\r?\n/).forEach(line => {
    const t = line.trim();
    if (!t) return;

    // track the current textbook page from several marker styles:
    //   "Page 14", "📖 KIIP … Page 14"           -> Page N at line start
    //   section headings "어휘 (Vocabulary) — p.122" -> inline p.NN / pp.NN
    //   "N과 ... NN"                                -> lesson-number footer
    let pm = t.match(/(?:^|[—\-–\s])Page\s*(\d{1,3})\b/i)        // "Page 14", "… — Page 60"
          || t.match(/(?:^|[—\-–\s])pp?\.\s*(\d{2,3})\b/i)        // "… — p.122", "pp.122"
          || t.match(/^(\d{2,3})\s+\S.*한국/)                      // OCR footer "50 …(KIIP) 한국어와 한국문화"
          || t.match(/^\s*\d?\s*과[^\n]*?\s(\d{2,3})\s*$/);        // "N과 … NN"
    if (pm && +pm[1] > 0 && +pm[1] < 300) curPage = pm[1];          // ignore page 0 / out-of-range noise

    // 1) tab-separated table rows
    if (line.indexOf("\t") !== -1) {
      let p = line.split("\t").map(x => x.trim()).filter(x => x.length);
      if (/^\d+$/.test(p[0])) p = p.slice(1);
      if (p.length >= 3) { add(p[0], p[1], p[2], p[3]); return; }
      if (p.length === 2 && /\//.test(p[1])) { const m = splitMeaning(p[1]); add(p[0], m.en, m.ne, m.similar); return; }
      return;
    }

    // 2) inline definition:  "한국 (han-guk) — Korea / कोरिया Similar: 대한민국"
    let m = t.match(/^([^()—–-][^()]{0,22}?)\s*\(([^)]{1,30})\)\s*[—–]\s*(.+)$/);
    if (m && hasHangul(m[1])) {
      const mn = splitMeaning(m[3]);
      add(m[1], mn.en, mn.ne, mn.similar, m[2]);
      return;
    }
    // 3) inline definition without romanization:  "초기 — early stage / सुरुवाती (Similar: 처음)"
    m = t.match(/^([^—–()]{1,22}?)\s*[—–]\s*(.+)$/);
    if (m && hasHangul(m[1]) && !/^EN\b|^NE\b/i.test(t)) {
      const mn = splitMeaning(m[2]);
      if (mn.en) { add(m[1], mn.en, mn.ne, mn.similar); return; }
    }
  });
  return voc;
}

const LANG_CODES = ["ne", "bn", "ru", "he", "ms", "vi", "id", "si"];
let extraSeq = 0;

// Standalone review files (not named KIIP<3|4>_chapterN) pinned to a KIIP level
// so they appear under the right level instead of a separate "Extra" group.
// Numbers are chosen above each level's existing chapters (kiip3: 1-16, kiip4: 1-9).
const REVIEW_MAP = {
  "한국어 중급 어휘 복습": { level: "kiip4", number: 10 },
  "Cultural_and_Information": { level: "kiip3", number: 17 },
  "Revise1": { level: "kiip3", number: 18 },
  "Revise2": { level: "kiip3", number: 19 },
};

files.forEach(f => {
  const base = path.basename(f);
  let info = idFromName(base);
  // files that aren't named KIIP<3|4>_chapterN: pin to a level via REVIEW_MAP,
  // otherwise fall back to a standalone "Extra/Review" entry.
  if (!info) {
    const key = base.replace(/(?:\.[a-z]{2})?\.md$/i, "").normalize("NFC");
    const r = REVIEW_MAP[key];
    if (r) {
      const lvlDigit = r.level.replace("kiip", "");
      const title = key.replace(/[_-]+/g, " ").trim();
      info = { id: "k" + lvlDigit + "-ch" + r.number, level: r.level, number: r.number, _title: title };
    } else {
      extraSeq++;
      const title = base.replace(/\.md$/i, "").replace(/[_-]+/g, " ").trim();
      info = { id: "extra-" + extraSeq, level: "extra", number: extraSeq, _title: title };
    }
  }
  // language-suffixed file?  KIIP4_chapter1.vi.md  ->  variant for "vi"
  const lm = base.match(/\.([a-z]{2})\.md$/i);
  const lang = lm && LANG_CODES.indexOf(lm[1].toLowerCase()) !== -1 ? lm[1].toLowerCase() : null;
  const raw = fs.readFileSync(path.join(MDS, f), "utf8");
  const cleaned = cleanMarkdown(raw);
  if (lang && lang !== "ne") {
    MD[info.id + "@" + lang] = cleaned;
    console.log(info.id + "@" + lang, "-> per-language lesson,", cleaned.length, "chars");
    return;
  }
  MD[info.id] = cleaned;
  VOCAB[info.id] = extractVocab(cleaned);
  // title: try to read the "Chapter N: <title>" line
  let title = info._title || "";
  const tm = cleaned.match(/Chapter\s*\d+\s*[:\-—]\s*([^\n(]+)/i);
  if (tm && !info._title) title = tm[1].trim();
  META[info.id] = { level: info.level, number: info.number, title };
  console.log(info.id, "->", VOCAB[info.id].length, "vocab,", cleaned.length, "chars", title ? "| " + title : "");
});

const body =
  "/* AUTO-GENERATED by build-lessons.js — do not edit by hand. */\n" +
  "window.LESSON_MD = " + JSON.stringify(MD) + ";\n" +
  "window.LESSON_VOCAB = " + JSON.stringify(VOCAB) + ";\n" +
  "window.LESSON_META = " + JSON.stringify(META) + ";\n";
fs.writeFileSync(OUT, body);
console.log("\nWrote", OUT, "(" + files.length + " file(s))");

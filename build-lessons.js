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

// derive a chapter topic from the raw file: a line that is just the chapter
// number is followed by a short Korean topic line (e.g. "10" then "언어생활").
function topicFromRaw(raw, number) {
  const ls = raw.split(/\r?\n/).map(s => s.trim());
  // (a) "📖 KIIP 4 · 12과 선거와 투표 · …" or "… 12과 선거와 투표" → topic after "N과"
  for (const l of ls) {
    const m = l.match(new RegExp(number + "\\s*과\\s+([가-힣][가-힣\\s]{1,20}?)\\s*(?:·|\\||\\(|$)"));
    if (m && m[1].trim()) return m[1].trim();
  }
  // (b) a line that is just the chapter number, followed by a short Korean topic line
  for (let i = 0; i < ls.length - 1; i++) {
    if (ls[i] !== String(number)) continue;
    let j = i + 1; while (j < ls.length && !ls[j]) j++;
    const c = ls[j] || "";
    if (/[가-힣]/.test(c) && c.length <= 14 && !/[:：\t\d]/.test(c)) return c;
  }
  // (c) "12 선거와 투표" — number + topic on the SAME line
  for (const l of ls) {
    const m = l.match(new RegExp("^" + number + "\\s+([가-힣][가-힣\\s]{1,20})$"));
    if (m && m[1].trim()) return m[1].trim();
  }
  return "";
}

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
  // ---- chatty AI intro / greeting narration (not lesson content) ----
  if (/축하(해요|합니다|드려요|해)/.test(t)) return true;                 // "…축하해요, Santosh! 🎉"
  if (/도입 페이지(예요|입니다|이에요)|미리 보여줘요|미리 보여드려요/.test(t)) return true; // "이 페이지는 …도입 페이지예요"
  if (/\bSantosh\b/.test(t)) return true;                                // user's name should never be in content
  if (/단원 개요를 정리|어휘 표를 구성|단원 개요를 구성|어휘 표를 정리/.test(t)) return true; // build-narration line ("…개요를 정리하고 어휘 표를 구성했다")

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

  // ---- chat-app chrome accidentally pasted in (no Korean) ----
  if (/^Continue$/i.test(t)) return true;                                  // "Continue" button
  if (/^\d{1,3}\/\d{1,4}$/.test(t)) return true;                           // "16/335" scroll/progress indicator

  // ---- stock-ticker / phone-screenshot OCR junk (no Korean, no Nepali) ----
  if (!/[가-힣ऀ-ॿ]/.test(t)) {
    if (/^\$\s?[\d,]+(\.\d+)?$/.test(t)) return true;                      // "$12,120" price
    if (/^[+\-]?\d+(\.\d+)?\s*%$/.test(t)) return true;                    // "+2.12%", "75%"
    if (/^\d{5,}$/.test(t)) return true;                                   // "9888857" long bare number
    if (/^0\d{1,2}\.?$/.test(t)) return true;                             // "002", "003", "004."
    if (/^\d[\d\s.,]*\s*[KMB]$/.test(t)) return true;                      // "40600K", "411 800K" volume
    if (/^[A-Z][A-Z0-9]{1,7}$/.test(t) && !/^(OK|TV|AM|PM|EN|NE|US|UK|UN|EU|ID|KR|KIIP)$/.test(t)) return true; // "JOLK","JEDOMO0","ET"
    if (/^\d{1,3}\s+[a-z]{1,3}$/.test(t)) return true;                     // "12 al" OCR fragment
    if (/^[!-~]{1,2}$/.test(t) && !/\d/.test(t)) return true;              // lone ASCII "C","#","+" (keep digits/markers)
  }

  // ---- OCR gibberish from pasted page photos (no Korean, no Nepali) ----
  if (!/[가-힣ऀ-ॿ]/.test(t)) {
    if (/[\[\]{}]/.test(t) && t.length < 40) return true;                  // stray brackets
    if (/[a-z]\.[a-z]/i.test(t) && t.length < 25 && !/\b(e\.g|i\.e|etc|a\.m|p\.m|u\.s|vs)\b/i.test(t)) return true; // "ad.y" letter.letter gibberish
    if (/(\b[A-Za-z]\b[\s,]+){3,}/.test(t) && t.length < 40) return true;  // "i n, C, w, v"
    if (/[A-Za-z]{1,4}\s+[A-Za-z]{1,4}$/.test(t) && t.length < 14 && !/\b(the|and|for|you|are|day|how|was|new|all)\b/i.test(t) && !/^[A-Z]/.test(t.replace(/[^A-Za-z]/g,""))) return true;
    if (/^(Loaal|JEDOMO0?)$/.test(t)) return true;                        // known phone-screenshot OCR tokens
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

// Chapter-overview lines often cram several section labels onto ONE tightly
// packed line — e.g. "활동: … 문화와 정보: 출산 장려 정책 icy Eniviagemree H" — and
// carry OCR Latin-gibberish. These labels are Korean, so for any line that holds
// a section label we (a) strip embedded Latin runs / stray symbols (OCR noise),
// then (b) put each label on its own line so the overview reads cleanly.
const LABEL_RE = /(어휘|문법|활동|문화와 정보|발음|말하기|듣기|읽기)\s*[:：.]/;
function tidyOverview(line) {
  if (line.indexOf("\t") !== -1) return line;          // never touch vocab table rows
  if (!LABEL_RE.test(line)) return line;
  if (/^(EN|NE)\s*:/i.test(line.trim())) return line;  // leave translation lines
  let s = line
    .replace(/[A-Za-z]{2,}[A-Za-z ]*/g, " ")           // drop Latin word-runs (OCR junk)
    .replace(/[€@~]+/g, " ")                            // stray OCR symbols
    .replace(/[ \t]{2,}/g, " ");
  // newline before every label after the first, so each section is its own line
  s = s.replace(/\s*(어휘|문법|활동|문화와 정보|발음|말하기|듣기|읽기)(\s*[:：.])/g,
    (m, l, c, off) => (off === 0 ? l + c : "\n" + l + c));
  return s.split("\n")
    .map(x => x.replace(/\s+\d{1,3}\s*$/, "").trim())  // drop trailing stray OCR page-numbers
    .filter(Boolean).join("\n");
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
  // tidy & split crammed chapter-overview lines (may turn 1 line into several)
  lines = lines.flatMap(l => tidyOverview(l).split("\n"));
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
  // Remove "단원 도입 / Chapter Overview / Intro" blocks ANYWHERE they occur — the
  // textbook contents/syllabus: "KIIP 4", unit number/title fragments, bare
  // 어휘:/문법:/활동:/문화와 정보: listings (with or without numbered items and EN/NP
  // glosses), and "Chapter Overview"/"Intro Page" markers. It's a table of contents, not
  // study material; the full content follows in real sections. We skip from a syllabus
  // start up to the next REAL lesson anchor (a vocab table row, "Word-by-Word", a
  // "단어 (rom) — meaning" definition, a "(Vocabulary)" header, or a Chapter/📖 header).
  const isLessonAnchor = (t) =>
    t.indexOf("\t") !== -1 ||
    /Word[\s-]?by[\s-]?Word|Word meanings|Word Breakdown/i.test(t) ||
    /^Chapter\s*\d+\s*[:：]/i.test(t) ||
    /^📖\s*KIIP\b/.test(t) ||
    (/[—–]/.test(t) && /\([^)]*\)/.test(t)) ||
    (/\([^)]*\)\s*$/.test(t) && /(Vocabulary|Grammar|어휘|문법)/i.test(t));
  const isSyllabusStart = (t) =>
    (/^(어휘|문법|활동|문화와 정보|발음|말하기|듣기|읽기)\s*[:：.]/.test(t) && t.indexOf("\t") === -1) ||
    (/Chapter Overview|단원\s*도입|Intro Page/i.test(t) && !/^📖\s*KIIP\b/.test(t));
  const isPreMarker = (p) =>
    !p || /^\d{1,2}[.)]?$/.test(p) || /Chapter Overview|단원\s*도입|Intro Page/i.test(p) ||
    /^(📚|📘|🟦|📖)/.test(p) || /^KIIP\b/i.test(p) || (/^[가-힣 ]{1,12}$/.test(p));
  // strip the leading "KIIP 4" / unit-number / title-fragment preamble that sits above
  // the first real anchor or syllabus block
  const anchor0 = (t) =>
    /^Chapter\s*\d+\s*[:：]/i.test(t) || /^📖\s*KIIP\b/.test(t) ||
    /Word[\s-]?by[\s-]?Word|Word meanings|Word Breakdown/i.test(t) ||
    t.indexOf("\t") !== -1 || /^(EN|NE|NP)\s*:/i.test(t) || /^(🇬🇧|🇳🇵)/.test(t) ||
    (/[—–]/.test(t) && /\([^)]*\)/.test(t)) || isSyllabusStart(t);
  let a0 = 0;
  while (a0 < kept.length && a0 < 40 && !anchor0(kept[a0].trim())) a0++;
  const base = (a0 > 0 && a0 < kept.length && a0 < 40 && anchor0(kept[a0].trim())) ? kept.slice(a0) : kept;
  const cleaned2 = [];
  for (let i = 0; i < base.length; i++) {
    const t = base[i].trim();
    if (isSyllabusStart(t) && !isLessonAnchor(t)) {
      // pull back over the syllabus's own preceding marker/number/title fragments
      let back = 0;
      while (cleaned2.length && back < 6 && isPreMarker(cleaned2[cleaned2.length - 1].trim()) &&
             !isLessonAnchor(cleaned2[cleaned2.length - 1].trim())) { cleaned2.pop(); back++; }
      // skip forward to the next real lesson anchor
      let j = i, n = 0;
      while (j < base.length && n < 45 && !isLessonAnchor(base[j].trim())) { j++; n++; }
      i = j - 1;
      continue;
    }
    cleaned2.push(base[i]);
  }

  // collapse runs of blank lines
  const out = [];
  let blank = 0;
  for (const l of cleaned2) {
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
    // strip a leading list/quiz marker so the vocab KEY is the word itself:
    //   "① 말 중시" -> "말 중시", "🔹 댕댕이" -> "댕댕이", "1) 가다" -> "가다".
    // numbers fused to the word (e.g. "4단계", "3~6세", "6년") are left intact.
    ko = ko.replace(/^(?:(?:[•·▶►*:：]|[‍︎️⃣]|[←-⇿①-➿⬀-⯿■-⛿]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|\uD83E[\uDC00-\uDFFF])\s*)+/, "")
           .replace(/^\d{1,2}[).]\s+/, "")
           .replace(/\s*[✓✔✗✘√×]\s*$/, "")   // trailing check / cross marks
           .trim();
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

files.forEach(f => {
  const base = path.basename(f);
  let info = idFromName(base);
  // Files NOT named KIIP<3|4>_chapterN are standalone review / study-note files
  // (한국어 중급 어휘 복습, Cultural_and_Information, Revise1, Revise2, …). They are
  // grouped into the separate "Revision" level (rendered as "Revision 1") — NOT
  // mixed into the numbered KIIP 3 / KIIP 4 Lessons lists.
  if (!info) {
    extraSeq++;
    const title = base.replace(/(?:\.[a-z]{2})?\.md$/i, "").replace(/[_-]+/g, " ").replace(/([A-Za-z])(\d)/g, "$1 $2").trim();
    info = { id: "extra-" + extraSeq, level: "extra", number: extraSeq, _title: title };
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
  if (!title && !info._title) title = topicFromRaw(raw, info.number);
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

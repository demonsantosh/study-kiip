/* ===================== Study KIIP — app ===================== */
(function () {
  "use strict";

  const DATA = window.KIIP_DATA || { levels: [] };
  const view = document.getElementById("view");
  const topNav = document.getElementById("topNav");
  const searchInput = document.getElementById("searchInput");
  const searchResults = document.getElementById("searchResults");

  /* ---------- helpers ---------- */
  const el = (tag, cls, html) => {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  };
  const esc = (s) =>
    String(s == null ? "" : s).replace(/[&<>"]/g, (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c])
    );
  const findLevel = (id) => DATA.levels.find((l) => l.id === id);
  const findChapter = (lvl, cid) => lvl && lvl.chapters.find((c) => c.id === cid);
  const chapterCount = (lvl) => lvl.chapters.filter((c) => (c.vocab && c.vocab.length) || (window.LESSON_MD && window.LESSON_MD[c.id])).length;

  /* ---------- merge in any /mds lessons not already in data.js ---------- */
  function mergeLessons() {
    if (!window.LESSON_META) return;
    // create the "Extra / Review" level if any standalone files exist
    if (Object.keys(window.LESSON_META).some((id) => window.LESSON_META[id].level === "extra") && !findLevel("extra")) {
      DATA.levels.push({
        id: "extra", name: "Revision 1", subtitle: "Vocabulary review & study notes", chapters: [],
        names: { en: "Revision 1", ne: "पुनरावलोकन १", bn: "রিভিশন ১", ru: "Повторение 1", he: "חזרה 1", ms: "Ulang Kaji 1", vi: "Ôn tập 1", id: "Revisi 1", si: "පුනරීක්ෂණය 1", pt: "Revisão 1", fr: "Révision 1", ta: "மீள்பார்வை 1" }
      });
    }
    Object.keys(window.LESSON_META).forEach((id) => {
      const m = window.LESSON_META[id];
      const lvl = findLevel(m.level);
      if (!lvl) return;
      const existing = lvl.chapters.find((c) => c.id === id || c.number === m.number);
      if (existing) { existing.hasFull = true; return; }
      lvl.chapters.push({
        id: id, number: m.number,
        ko: m.title || ("Chapter " + m.number), en: "", ne: "",
        summary: "", vocab: (window.LESSON_VOCAB && window.LESSON_VOCAB[id]) || [],
        grammar: [], dialogues: [], activities: [], culture: null, quiz: [], hasFull: true
      });
      lvl.chapters.sort((a, b) => a.number - b.number);
    });
  }
  mergeLessons();

  // ---- clean source fields: some 'en' values have Nepali glued on
  // (e.g. "I (humble) / म"). Route the Devanagari part to 'ne' so English
  // stays English and Nepali coverage improves. Runs once at load.
  function cleanWord(v) {
    if (!v) return;
    // 1) Pull any "Similar: …" / "(유사어 …)" reference words out of en/ne into .similar,
    //    so they never leak into the word-by-word gloss.
    ["en", "ne"].forEach((f) => {
      if (!v[f]) return;
      const m = String(v[f]).match(/\s*\(?\s*(?:Similar|유사어)\s*[:：]\s*([^]*)$/i);
      if (m) { if (!v.similar) v.similar = m[1].replace(/\)\s*$/, "").trim(); v[f] = String(v[f]).slice(0, m.index).trim(); }
    });
    // 2) A Korean "similar" word mistakenly stored in the Nepali (ne) slot → move to similar.
    if (v.ne && /[가-힣]/.test(v.ne) && !/[ऀ-ॿ]/.test(v.ne)) {
      if (!v.similar) v.similar = v.ne;
      v.ne = "";
    }
    // 3) Nepali (Devanagari) stuck inside the English field → split it out into 'ne'.
    if (v.en && /[ऀ-ॿ]/.test(v.en)) {
      const parts = v.en.split("/").map((s) => s.trim()).filter(Boolean);
      const en = [], ne = [];
      parts.forEach((p) => { (/[ऀ-ॿ]/.test(p) ? ne : en).push(p); });
      v.en = en.join(" / ");
      if (!v.ne && ne.length) v.ne = ne.join(" / ");
    }
    // 4) A Nepali field that is purely English (no Devanagari) is wrong → clear it so the
    //    gloss falls back to the English meaning rather than showing English as "Nepali".
    if (v.ne && /[A-Za-z]/.test(v.ne) && !/[ऀ-ॿ]/.test(v.ne)) v.ne = "";
    // 5) An English field that is purely Korean (no Latin) is not an English meaning →
    //    relocate to similar so the English gloss doesn't display Korean.
    if (v.en && /[가-힣]/.test(v.en) && !/[A-Za-z]/.test(v.en)) { if (!v.similar) v.similar = v.en; v.en = ""; }
    // tidy stray leading/trailing separators left behind
    ["en", "ne"].forEach((f) => { if (v[f]) v[f] = String(v[f]).replace(/^[\/·,:\s]+|[\/·,:\s]+$/g, "").trim(); });
  }
  (function cleanAllWords() {
    // Normalize en/ne on EVERY object that carries them, so Nepali never shows a
    // Korean similar-word or English-mixed text anywhere: vocab, grammar,
    // dialogues (+lines), activities, culture — across all chapters.
    DATA.levels.forEach((l) => l.chapters.forEach((c) => {
      (c.vocab || []).forEach(cleanWord);
      (c.grammar || []).forEach(cleanWord);
      (c.dialogues || []).forEach((d) => { cleanWord(d); (d.lines || []).forEach(cleanWord); });
      (c.activities || []).forEach(cleanWord);
      if (c.culture) cleanWord(c.culture);
    }));
    const LV = window.LESSON_VOCAB || {};
    Object.keys(LV).forEach((id) => (LV[id] || []).forEach(cleanWord));
  })();
  // some rebuilt chapters store their title as "English | <Nepali>" in .ko. Split it so
  // the universal (non-Devanagari) part stays as the title and the Nepali moves to .ne,
  // where it shows only for Nepali users. Devanagari letters/digits only — the danda
  // punctuation U+0964/65 is shared with Bengali and must not trigger this.
  (function cleanTitles() {
    const DEVA = /[ऀ-ॣ०-ॿ]/;
    function fix(o) {
      if (!o || !o.ko || o.ko.indexOf("|") === -1) return;
      const parts = o.ko.split("|").map((s) => s.trim()).filter(Boolean);
      const keep = parts.filter((p) => !DEVA.test(p));
      const nep = parts.filter((p) => DEVA.test(p));
      if (nep.length && keep.length) { if (!o.ne) o.ne = nep.join(" | "); o.ko = keep.join(" | "); }
    }
    DATA.levels.forEach((l) => l.chapters.forEach((c) => { fix(c); if (c.culture) fix(c.culture); (c.grammar || []).forEach(fix); }));
  })();

  // every unique word for a chapter: curated (with translations) + all word
  // meanings extracted from the lesson text (incl. sentence-wise breakdowns).
  // a real vocab key is short Korean; reject extraction noise (long English
  // sentences, notes, headerless prose) so it never reaches the word lists.
  const isWord = (v) => {
    const k = v && v.ko ? String(v.ko).trim() : "";
    if (!k || !/[가-힣]/.test(k)) return false;          // must contain Korean
    if (k.length > 28) return false;                      // no real key is this long
    if (/[A-Za-z]{4,}/.test(k)) return false;             // contains an English word → note/artifact
    return true;
  };
  const vocabOf = (ch) => {
    const out = (ch.vocab || []).filter(isWord);
    const seen = {};
    out.forEach((v) => { seen[v.ko] = 1; });
    const extra = (window.LESSON_VOCAB && window.LESSON_VOCAB[ch.id]) || [];
    extra.forEach((v) => { if (!seen[v.ko] && isWord(v)) { seen[v.ko] = 1; out.push(v); } });
    return out;
  };

  /* ---------- language (the selectable "extra" translation) ---------- */
  const LANGS = (window.I18N && window.I18N.langs) || [{ code: "ne", name: "नेपाली", flag: "🇳🇵", rtl: false }];
  function curLang() { try { return localStorage.getItem("kiip_lang") || (window.I18N && window.I18N.default) || "ne"; } catch (e) { return "ne"; } }
  function langMeta(code) { return LANGS.find((l) => l.code === code) || LANGS[0]; }
  // UI / screen-text translation: t("key") → string in the selected language (English fallback)
  function t(key) {
    const u = window.UI_I18N && window.UI_I18N[key];
    return (u && (u[curLang()] || u.en)) || (u && u.en) || key;
  }
  // display name for a level — localized when the level has a names map (e.g. Revision 1)
  function lvlName(l) { return (l && l.names && (l.names[curLang()] || l.names.en)) || (l ? l.name : ""); }
  // Localized titles for the non-Korean Revision/review chapter names (the rest of the
  // chapters keep their Korean lesson titles, as befits a Korean course).
  const TITLE_I18N = {
    "Cultural and Information": { ko: "문화와 정보", en: "Culture & Information", ne: "संस्कृति र जानकारी", bn: "সংস্কৃতি ও তথ্য", ru: "Культура и информация", he: "תרבות ומידע", ms: "Budaya & Maklumat", vi: "Văn hóa & Thông tin", id: "Budaya & Informasi", si: "සංස්කෘතිය හා තොරතුරු", pt: "Cultura e Informação", fr: "Culture et information", ta: "கலாசாரமும் தகவலும்" },
    "Revise 1": { ko: "복습 1", en: "Review 1", ne: "पुनरावलोकन १", bn: "পুনরালোচনা ১", ru: "Повторение 1", he: "חזרה 1", ms: "Ulang Kaji 1", vi: "Ôn tập 1", id: "Tinjauan 1", si: "පුනරීක්ෂණය 1", pt: "Revisão 1", fr: "Révision 1", ta: "மீள்பார்வை 1" },
    "Revise 2": { ko: "복습 2", en: "Review 2", ne: "पुनरावलोकन २", bn: "পুনরালোচনা ২", ru: "Повторение 2", he: "חזרה 2", ms: "Ulang Kaji 2", vi: "Ôn tập 2", id: "Tinjauan 2", si: "පුනරීක්ෂණය 2", pt: "Revisão 2", fr: "Révision 2", ta: "மீள்பார்வை 2" },
    "한국어 중급 어휘 복습": { ko: "한국어 중급 어휘 복습", en: "Intermediate Korean Vocabulary Review", ne: "कोरियन मध्यम तह शब्दावली पुनरावलोकन", bn: "মধ্যবর্তী কোরীয় শব্দভাণ্ডার পুনরালোচনা", ru: "Повторение лексики (средний уровень)", he: "חזרה על אוצר מילים (ביניים)", ms: "Ulang Kaji Kosa Kata Korea Pertengahan", vi: "Ôn tập từ vựng tiếng Hàn trung cấp", id: "Tinjauan Kosakata Korea Menengah", si: "අතරමැදි කොරියානු වචන මාලා පුනරීක්ෂණය", pt: "Revisão de Vocabulário Coreano Intermediário", fr: "Révision du vocabulaire coréen intermédiaire", ta: "இடைநிலை கொரிய சொற்களஞ்சிய மீள்பார்வை" },
    "Worries and Counseling": { ko: "걱정과 상담", en: "Worries and Counseling", ne: "चिन्ता र परामर्श", bn: "দুশ্চিন্তা ও পরামর্শ", ru: "Тревоги и консультирование", he: "דאגות וייעוץ", ms: "Kerisauan & Kaunseling", vi: "Lo lắng và Tư vấn", id: "Kekhawatiran & Konseling", si: "කනස්සල්ල හා උපදේශනය", pt: "Preocupações e Aconselhamento", fr: "Soucis et conseil", ta: "கவலைகளும் ஆலோசனையும்" },
    "언어생활": { ko: "언어생활", en: "Language Life", ne: "भाषिक जीवन", bn: "ভাষিক জীবন", ru: "Языковая жизнь", he: "חיי שפה", ms: "Kehidupan Berbahasa", vi: "Đời sống ngôn ngữ", id: "Kehidupan Berbahasa", si: "භාෂික ජීවිතය", pt: "Vida linguística", fr: "Vie langagière", ta: "மொழி வாழ்க்கை" },
    "교육 제도": { ko: "교육 제도", en: "Education System", ne: "शिक्षा प्रणाली", bn: "শিক্ষা ব্যবস্থা", ru: "Система образования", he: "מערכת החינוך", ms: "Sistem Pendidikan", vi: "Hệ thống giáo dục", id: "Sistem Pendidikan", si: "අධ්‍යාපන ක්‍රමය", pt: "Sistema educativo", fr: "Système éducatif", ta: "கல்வி முறை" },
    "선거와 투표": { ko: "선거와 투표", en: "Elections and Voting", ne: "निर्वाचन र मतदान", bn: "নির্বাচন ও ভোট", ru: "Выборы и голосование", he: "בחירות והצבעה", ms: "Pilihan Raya & Pengundian", vi: "Bầu cử và Bỏ phiếu", id: "Pemilu & Pemungutan Suara", si: "මැතිවරණ හා ඡන්දය", pt: "Eleições e Votação", fr: "Élections et vote", ta: "தேர்தலும் வாக்களிப்பும்" },
    "환경 보호": { ko: "환경 보호", en: "Environmental Protection", ne: "वातावरण संरक्षण", bn: "পরিবেশ সুরক্ষা", ru: "Защита окружающей среды", he: "הגנת הסביבה", ms: "Perlindungan Alam Sekitar", vi: "Bảo vệ môi trường", id: "Perlindungan Lingkungan", si: "පරිසර සංරක්ෂණය", pt: "Proteção Ambiental", fr: "Protection de l'environnement", ta: "சுற்றுச்சூழல் பாதுகாப்பு" },
    "생활과 경제": { ko: "생활과 경제", en: "Life and Economy", ne: "जीवन र अर्थतन्त्र", bn: "জীবন ও অর্থনীতি", ru: "Жизнь и экономика", he: "חיים וכלכלה", ms: "Kehidupan dan Ekonomi", vi: "Đời sống và Kinh tế", id: "Kehidupan dan Ekonomi", si: "ජීවිතය සහ ආර්ථිකය", pt: "Vida e Economia", fr: "Vie et économie", ta: "வாழ்க்கையும் பொருளாதாரமும்" }
  };
  // Title fields: a chapter shows Korean + English + the SELECTED language together,
  // uniformly across every chapter (Revision chapters use TITLE_I18N; the rest use their
  // own ko/en/ne). Empty fields are skipped by the renderer so there are no blank gaps.
  function titleTT(c) { const k = String((c && c.ko) || ""); return TITLE_I18N[k] || TITLE_I18N[k.normalize("NFC")] || null; }
  function titleKo(c) { const tt = titleTT(c); if (tt && tt.ko) return tt.ko; const k = String((c && c.ko) || "").normalize("NFC"); return /[가-힣]/.test(k) ? k : ""; }
  function titleEn(c) { const tt = titleTT(c); return (tt && tt.en) || (c && c.en) || ""; }
  function titleSel(c) { const code = curLang(); const tt = titleTT(c); if (tt && tt[code]) return tt[code]; if (code === "ne") return (c && c.ne) || ""; return ""; }
  function chTitle(c) { return titleKo(c) || titleEn(c) || titleSel(c); }   // single-line fallback (breadcrumbs etc.)
  // Localized level subtitles (the small line under each level title).
  const SUBTITLE_I18N = {
    "사회통합프로그램 · 중급 1 (Intermediate 1)": { en: "Social Integration Program · Intermediate 1", ne: "सामाजिक एकीकरण कार्यक्रम · मध्यम तह १", bn: "সামাজিক একীকরণ কর্মসূচি · মধ্যবর্তী ১", ru: "Программа социальной интеграции · Средний 1", he: "תוכנית שילוב חברתי · ביניים 1", ms: "Program Integrasi Sosial · Pertengahan 1", vi: "Chương trình hội nhập xã hội · Trung cấp 1", id: "Program Integrasi Sosial · Menengah 1", si: "සමාජ ඒකාබද්ධතා වැඩසටහන · අතරමැදි 1", pt: "Programa de Integração Social · Intermediário 1", fr: "Programme d'intégration sociale · Intermédiaire 1", ta: "சமூக ஒருங்கிணைப்புத் திட்டம் · இடைநிலை 1" },
    "사회통합프로그램 · 중급 2 (Intermediate 2)": { en: "Social Integration Program · Intermediate 2", ne: "सामाजिक एकीकरण कार्यक्रम · मध्यम तह २", bn: "সামাজিক একীকরণ কর্মসূচি · মধ্যবর্তী ২", ru: "Программа социальной интеграции · Средний 2", he: "תוכנית שילוב חברתי · ביניים 2", ms: "Program Integrasi Sosial · Pertengahan 2", vi: "Chương trình hội nhập xã hội · Trung cấp 2", id: "Program Integrasi Sosial · Menengah 2", si: "සමාජ ඒකාබද්ධතා වැඩසටහන · අතරමැදි 2", pt: "Programa de Integração Social · Intermediário 2", fr: "Programme d'intégration sociale · Intermédiaire 2", ta: "சமூக ஒருங்கிணைப்புத் திட்டம் · இடைநிலை 2" },
    "Vocabulary review & study notes": { en: "Vocabulary review & study notes", ne: "शब्दावली पुनरावलोकन र अध्ययन टिप्पणीहरू", bn: "শব্দভাণ্ডার পুনরালোচনা ও অধ্যয়ন নোট", ru: "Повторение лексики и учебные заметки", he: "חזרה על אוצר מילים והערות לימוד", ms: "Ulang kaji kosa kata & nota kajian", vi: "Ôn tập từ vựng & ghi chú học tập", id: "Tinjauan kosakata & catatan belajar", si: "වචන මාලා පුනරීක්ෂණය සහ අධ්‍යයන සටහන්", pt: "Revisão de vocabulário e notas de estudo", fr: "Révision du vocabulaire et notes d'étude", ta: "சொற்களஞ்சிய மீள்பார்வை & கற்றல் குறிப்புகள்" }
  };
  function subName(l) {
    if (!l) return "";
    const code = curLang();
    const m = (l.subtitles && l.subtitles) || SUBTITLE_I18N[l.subtitle];
    return (m && (m[code] || m.en)) || l.subtitle || "";
  }
  // the extra-language translation for a vocab item. Shows the SELECTED language
  // when we have it; otherwise English (universal) — never an unrelated language.
  function extraOf(v) {
    const c = curLang();
    if (c === "ne") return v.ne || v.en || "";
    const d = window.I18N && window.I18N.data && window.I18N.data[v.ko];
    return (d && d[c]) || v.en || "";
  }
  function extraIsFallback(v) {
    const c = curLang();
    if (c === "ne") return !v.ne;
    const d = window.I18N && window.I18N.data && window.I18N.data[v.ko];
    return !(d && d[c]);
  }
  // selected-language line for grammar / culture / dialogue items (which only have
  // Korean + English + Nepali). Nepali shows when 'ne' is selected; for other
  // languages we have no full-sentence translation, so the line is omitted
  // (English is always shown directly above it).
  function selLine(o, cls, style) {
    const c = curLang(), t = c === "ne" ? ((o && o.ne) || "") : "";
    if (!t) return "";
    const m = langMeta(c);
    return '<div class="' + cls + '"' + (style ? ' style="' + style + '"' : '') + (m.rtl ? ' dir="rtl"' : '') + '>' + esc(t) + '</div>';
  }
  function setupLangSelector() {
    const sel = document.getElementById("langSelect");
    if (!sel) return;
    sel.innerHTML = LANGS.map((l) => '<option value="' + l.code + '">' + l.flag + " " + l.name + "</option>").join("");
    sel.value = curLang();
    applyDir();
    sel.onchange = () => {
      try { localStorage.setItem("kiip_lang", sel.value); } catch (e) {}
      applyDir();
      buildNav();   // re-localize "Revision 1" etc. in the top nav
      render();
    };
  }
  function applyDir() {
    const m = langMeta(curLang());
    document.documentElement.setAttribute("data-extra-rtl", m.rtl ? "1" : "0");
    // localize static chrome (search box placeholder)
    const si = document.getElementById("searchInput");
    if (si) si.placeholder = t("search_ph");
  }

  /* ---------- sentence → word-by-word meaning (local dictionary) ---------- */
  let VMAP = null;
  function vmap() {
    if (VMAP) return VMAP;
    VMAP = {};
    allVocab().forEach((v) => { if (!VMAP[v.ko]) VMAP[v.ko] = { en: v.en, ne: v.ne, rom: v.rom }; });
    return VMAP;
  }
  // strip leading labels ("Sentence 1:", "Title:", "1)", ✅ …) → bare Korean sentence
  function bareKo(s) {
    return String(s)
      .replace(/\*\*/g, "")
      .replace(/^\s*(?:✅|🔹|🔵|🔴|🟦|🟢|🟡|🟠|📌|▶|→|←|⇒|»|·|-)\s*/, "")
      .replace(/^\s*(?:Sentence|문장|Question|질문|Sample|예시|보기|Title|제목|Dialogue|대화|Excerpt|Answer|정답|Task|Korean|한국어|KO)\s*\d*\s*[:.)]\s*/i, "")
      .replace(/^\s*\d+\s*[).]\s*/, "")
      .trim();
  }
  const normK = (s) => bareKo(s).replace(/\s+/g, "").replace(/[.?!。…·,，'"“”()（）\[\]~]/g, "");

  // sentence-translation index built from the lesson notes' own EN:/NE: lines — fully offline
  let SENT = null;
  function sentMap() {
    if (SENT) return SENT; SENT = {};
    const MD = window.LESSON_MD || {};
    Object.keys(MD).forEach((id) => {
      if (id.indexOf("@") !== -1) return; // base files only (per-language files are @lang)
      const ls = MD[id].split(/\r?\n/);
      const splitNe = (s) => { const ni = s.search(/\b(?:NE|NP|Nepali)\s*[:：]/i); return ni >= 0 ? [s.slice(0, ni).trim(), s.slice(ni).replace(/^\s*(?:NE|NP|Nepali)\s*[:：]\s*/i, "").trim()] : [s.trim(), ""]; };
      for (let i = 0; i < ls.length; i++) {
        const raw = ls[i] || "";
        if (!/[가-힣]/.test(raw)) continue;
        let ko = "", en = "", ne = "", matched = false;
        // format C: Korean + inline "EN:/English: … [NE:/NP:/Nepali: …]" all on ONE line
        const inl = raw.match(/^(.*?)\b(?:EN|English)\s*[:：]\s*(.*)$/i);
        if (inl && /[가-힣]/.test(inl[1])) {
          ko = bareKo(inl[1]); [en, ne] = splitNe(inl[2]); matched = true;
        } else {
          ko = bareKo(raw);
          const n1 = (ls[i + 1] || "").trim();
          // format A: "EN:/English: …" on the next line
          const em = n1.match(/^(?:EN|English)\s*[:：]\s*(.*)$/i);
          if (em) { [en, ne] = splitNe(em[1]); matched = true; }
          else {
            // format B: "🇬🇧 English" next line, "🇳🇵 Nepali" the line after
            const mEn = n1.match(/^🇬🇧\s*(.*)$/);
            if (mEn) { en = mEn[1].trim(); const mNe = (ls[i + 2] || "").trim().match(/^🇳🇵\s*(.*)$/); if (mNe) ne = mNe[1].trim(); matched = true; }
          }
        }
        if (!matched || !/[가-힣]/.test(ko)) continue;
        const k = normK(ko);
        if (k && !SENT[k]) { SENT[k] = { en: en, ne: ne }; cleanWord(SENT[k]); }
      }
    });
    return SENT;
  }

  // ----- dictionary-driven Korean segmenter (greedy longest-match) -----
  // The mapping "database" is the merged vocab dictionary (vmap). We tokenize a
  // sentence left→right, taking the longest dictionary entry at each position,
  // so every chunk maps to exactly one entry in reading order. Fully offline.
  let LEX = null;
  function buildLex() {
    if (LEX) return LEX;
    const map = vmap(); const set = new Set(); let max = 1;
    Object.keys(map).forEach((k) => { const kk = String(k).trim(); if (kk && /[가-힣]/.test(kk)) { set.add(kk); if (kk.length > max) max = kk.length; } });
    LEX = { set: set, max: max, map: map }; return LEX;
  }
  function segment(S) {
    const lx = buildLex(), set = lx.set, max = lx.max, n = S.length, res = [];
    let i = 0;
    while (i < n) {
      if (!/[가-힣]/.test(S[i])) { i++; continue; }
      let matched = null, mlen = 0;
      const lim = Math.min(max, n - i);
      for (let L = lim; L >= 2; L--) { const cand = S.substr(i, L); if (set.has(cand)) { matched = cand; mlen = L; break; } }
      if (!matched) {
        // no whole-phrase match: take this word chunk and try its longest known prefix (strips particles/endings)
        let j = i; while (j < n && /[가-힣]/.test(S[j])) j++;
        const eojeol = S.slice(i, j);
        for (let L = eojeol.length; L >= 2; L--) { const pre = eojeol.slice(0, L); if (set.has(pre)) { matched = pre; mlen = L; break; } }
        if (!matched) { i = j; continue; } // unknown chunk — skip it
      }
      res.push(matched); i += mlen;
    }
    return res;
  }
  function sentenceTerms(sentence) {
    const map = vmap(), code = curLang(), seen = {}, out = [];
    segment(sentence).forEach((ko) => {
      if (seen[ko]) return; seen[ko] = 1;
      const mm = map[ko] || {};
      const ex = code === "ne" ? (mm.ne || mm.en || "") : ((window.I18N && window.I18N.data[ko] && window.I18N.data[ko][code]) || mm.en || "");
      out.push({ ko: ko, rom: mm.rom, en: mm.en, ex: ex });
    });
    return out;
  }

  // build one sentence block: Korean (top) → EN + selected-language → word meanings (bottom)
  function breakdownBlock(ko) {
    const m = langMeta(curLang()), code = curLang();
    const terms = sentenceTerms(ko);
    const sm = sentMap()[normK(ko)];
    // generated full-sentence translations (from the offline translation index / schedule)
    const dict = (window.I18N && window.I18N.data) || {};
    const dtr = dict[ko] || dict[bareKo(ko)] || null;
    const enText0 = (sm && sm.en) || (dtr && dtr.en) || "";
    const enExact = !!enText0;
    const enText = enText0 || terms.map((t) => t.en).filter(Boolean).join(" · ");
    // exact full-sentence translation in the selected language: source notes (sm) for
    // Nepali, plus the generated index (dtr) for every language — word-by-word only when
    // no full translation exists yet.
    const exTr = (code === "ne" ? (sm && sm.ne) : "") || (dtr && dtr[code]) || "";
    const exExact = !!exTr;
    const exText = exTr || terms.map((t) => t.ex).filter(Boolean).join(" · ");
    const gloss = ' <i class="sb-gloss">' + esc(t("sb_wbw")) + '</i>';

    let h = '<div class="sb-sentence">' + esc(ko) + '</div>';
    h += '<div class="sb-trans">';
    h += '<div class="sb-tline"><span class="sb-lbl">🇬🇧 EN</span><span class="sb-val">' + esc(enText || "—") + (enExact || !enText ? '' : gloss) + '</span></div>';
    h += '<div class="sb-tline"><span class="sb-lbl">' + esc(m.flag + " " + m.name) + '</span><span class="sb-val"' + (m.rtl ? ' dir="rtl"' : '') + '>' + esc(exText || "—") + (exExact || !exText ? '' : gloss) + '</span></div>';
    h += '</div>';
    h += '<div class="sb-words-h">단어 · ' + esc(t("sb_words")) + '</div>';
    if (!terms.length) h += '<div class="sb-empty">' + esc(t("sb_none")) + '</div>';
    else h += terms.map((t) =>
      '<div class="sb-row"><span class="sb-ko">' + esc(t.ko) + '</span>' +
      (t.rom ? '<span class="sb-rom">' + esc(t.rom) + '</span>' : '') +
      '<span class="sb-en">' + esc(t.en || "") + '</span>' +
      (t.ex ? '<span class="sb-ex"' + (m.rtl ? ' dir="rtl"' : '') + '>' + esc(t.ex) + '</span>' : '') +
      '</div>').join("");
    return h;
  }
  function toggleBreakdown(elm) {
    const nxt = elm.nextElementSibling;
    if (nxt && nxt.classList && nxt.classList.contains("sentence-breakdown")) { nxt.remove(); return; }
    const ko = bareKo(elm.textContent);
    // split a clicked block into individual sentences (reading passages etc.)
    let parts = ko.split(/(?<=[.?!。！？])\s+/).map((s) => s.trim()).filter((s) => /[가-힣]/.test(s));
    if (!parts.length) parts = [ko];
    const box = el("div", "sentence-breakdown");
    box.innerHTML = parts.map((s) => '<div class="sb-block">' + breakdownBlock(s) + '</div>').join("");
    elm.parentNode.insertBefore(box, elm.nextSibling);
  }
  function makeKoClickable(root) {
    root.querySelectorAll(".lp.ko, .ko, .l-label, .l-answer").forEach((e2) => {
      if (/[가-힣]/.test(e2.textContent) && e2.textContent.trim().length > 3) {
        e2.classList.add("ko-click");
        e2.title = "Click for translation & word meanings";
        e2.onclick = () => toggleBreakdown(e2);
      }
    });
  }
  // selected-language meaning for a whole Korean sentence: exact stored
  // translation when we have one, else an offline word-composed gloss.
  function passageTrans(ko) {
    const code = curLang();
    // 1) exact hand translation of the whole sentence, if we've added one
    const d = window.I18N && window.I18N.data && window.I18N.data[ko];
    if (d && d[code]) return { text: d[code], exact: true };
    // 2) Nepali sentence equivalent from the .md notes (for Nepali users)
    const sm = sentMap()[normK(ko)];
    if (code === "ne" && sm && sm.ne) return { text: sm.ne, exact: true };
    // 3) offline word-composed gloss (improves as the dictionary grows)
    const ex = sentenceTerms(ko).map((t) => t.ex).filter(Boolean).join(" ");
    return { text: ex, exact: false };
  }
  // Under each Korean sentence in a passage, add a line in the selected language
  // (auto gloss). Removes the raw Nepali first so nothing mixes. Nepali users keep
  // the original Nepali notes untouched.
  function annotatePassage(root) {
    if (!root || curLang() === "ne") return;
    stripNepali(root);
    const m = langMeta(curLang());
    root.querySelectorAll(".lp.ko, .l-label, .l-answer").forEach((el2) => {
      const ko = bareKo(el2.textContent);
      if (!/[가-힣]/.test(ko) || ko.trim().length < 2) return;
      const nx = el2.nextElementSibling;
      if (nx && nx.classList && nx.classList.contains("l-trans")) return;
      // Korean lines that have their own "🇬🇧 …" gloss line are handled by
      // annotateGloss (which places the selected language next to the English).
      if (nx && /^🇬🇧/.test((nx.textContent || "").trim())) return;
      const parts = ko.split(/(?<=[.?!。！？])\s+/).map((s) => s.trim()).filter((s) => /[가-힣]/.test(s));
      const text = (parts.length ? parts : [ko]).map((s) => passageTrans(s).text).filter(Boolean).join(" / ");
      if (!text) return;
      const d = document.createElement("div");
      d.className = "l-trans";
      if (m.rtl) d.setAttribute("dir", "rtl");
      d.textContent = text;
      el2.parentNode.insertBefore(d, el2.nextSibling);
    });
  }
  // For "🇰🇷 Korean → 🇬🇧 English (→ 🇳🇵 Nepali)" blocks in lesson notes, show the
  // SELECTED language next to the English using the offline dictionary. The Nepali
  // line is removed by stripNepali; English stays as the universal fallback.
  function annotateGloss(root) {
    const code = curLang();
    if (!root || code === "ne" || !window.I18N || !window.I18N.data) return;
    const m = langMeta(code), dict = window.I18N.data;
    root.querySelectorAll("h1,h2,h3,h4,h5,p,div,li").forEach((el2) => {
      const txt = (el2.textContent || "").trim();
      if (!/^🇬🇧/.test(txt)) return;
      if (el2.classList && el2.classList.contains("l-gloss")) return;
      const nxt = el2.nextElementSibling;
      if (nxt && nxt.classList && nxt.classList.contains("l-gloss")) return; // already added
      // nearest preceding element that contains Korean = the source line
      let prev = el2.previousElementSibling;
      while (prev && !/[가-힣]/.test(prev.textContent || "")) prev = prev.previousElementSibling;
      if (!prev) return;
      const ko = bareKo(prev.textContent);
      const d = dict[ko], tr = d && d[code];
      if (!tr) return;
      const g = document.createElement("div");
      g.className = (el2.className ? el2.className + " " : "") + "l-trans l-gloss";
      if (m.rtl) g.setAttribute("dir", "rtl");
      g.textContent = m.flag + " " + tr;
      el2.parentNode.insertBefore(g, el2.nextSibling);
    });
  }
  // Reading passages (Full Lesson, Culture) are the original Korean/English/Nepali
  // notes. When a non-Nepali language is selected, remove the Nepali so the page
  // never mixes in an unrelated language. Korean & English are kept.
  function stripNepali(root) {
    if (curLang() === "ne" || !root) return;
    root.querySelectorAll(".l-ne").forEach((e) => e.remove());      // whole "NE:" lines
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);
    const nodes = []; while (walker.nextNode()) nodes.push(walker.currentNode);
    const NPFLAG = "🇳🇵"; // 🇳🇵
    nodes.forEach((n) => {
      let s = n.nodeValue;
      const hasNep = /[ऀ-ॿ]/.test(s);
      const hasNpFlag = s.indexOf(NPFLAG) !== -1;
      if (!hasNep && !hasNpFlag) return;
      // A line packs "🇰🇷 Korean 🇬🇧 English 🇳🇵 Nepali"; the 🇳🇵 flag introduces the
      // Nepali segment and runs to the end of this (line) node. Drop the flag and
      // everything after it so no stranded flag or leftover unit (?, :, °C, %) remains.
      s = s.replace(/🇳🇵[\s\S]*$/u, "");
      s = s.replace(/\s*[\/·,–—-]\s*[^\/\n]*[ऀ-ॿ][^\/\n]*/g, ""); // "english / नेपाली" → "english"
      s = s.replace(/[ऀ-ॿ०-ॿ]+/g, "");                   // any remaining Devanagari run
      s = s.replace(/\(\s*\)/g, "").replace(/\s{2,}/g, " ").replace(/\s+([.?!,;:])/g, "$1").trim();
      n.nodeValue = s;
    });
    // After removing Nepali, a "🇳🇵 …" line collapses to just its flag (or empty).
    // Drop those leftover lines so a non-Nepali user never sees a bare/empty flag.
    // English stays as the universal fallback; selected-language lines (added
    // elsewhere from the dictionary) are unaffected.
    const FLAGS = /[\u{1F1E6}-\u{1F1FF}️‍\s]/gu;
    root.querySelectorAll("p, div, li, h1, h2, h3, h4, h5, span").forEach((e) => {
      if (e.querySelector("*")) return;                 // only leaf lines
      // A line that is only flags, whitespace, and stray punctuation/units left
      // behind by the removed Nepali (e.g. "🇳🇵?", ":", "°C") carries no content.
      const rem = (e.textContent || "").replace(FLAGS, "").replace(/^[\s?!:.,;·°%\-–—()]+$/u, "");
      if (rem === "") e.remove();
    });
  }
  // extract the "문화와 정보" section out of a full lesson's markdown
  function getCultureMd(id) {
    const md = window.LESSON_MD && window.LESSON_MD[id];
    if (!md) return null;
    const lines = md.split("\n");
    let start = -1;
    for (let i = 0; i < lines.length; i++) {
      if (/(문화와\s*정보|Culture\s*&\s*Information|Culture and Information)/i.test(lines[i])) { start = i; break; }
    }
    if (start < 0) return null;
    let end = lines.length;
    for (let i = start + 1; i < lines.length; i++) {
      if (/^(📖\s*KIIP|Page\s*\d+\s*[—\-–:]|배운 어휘|🎉|🔵)/i.test(lines[i].trim())) { end = i; break; }
    }
    return lines.slice(start, end).join("\n").trim();
  }


  /* ---------- routing (hash based) ---------- */
  function go(hash) { window.location.hash = hash; }
  function parseHash() {
    const h = window.location.hash.replace(/^#/, "");
    const parts = h.split("/").filter(Boolean);
    return parts; // e.g. ["level","kiip4"] or ["lesson","kiip4","k4-ch1","grammar"]
  }
  window.addEventListener("hashchange", render);

  /* ---------- remember last-opened lesson (simple content continuity) ---------- */
  function saveLast(o) { try { localStorage.setItem("kiip_last", JSON.stringify(o)); } catch (e) {} }
  function getLast() { try { return JSON.parse(localStorage.getItem("kiip_last") || "null"); } catch (e) { return null; } }

  /* ---------- top nav ---------- */
  function buildNav() {
    topNav.innerHTML = "";
    DATA.levels.forEach((l) => {
      const b = el("button", null, esc(lvlName(l)));
      b.onclick = () => go("/level/" + l.id);
      topNav.appendChild(b);
    });
    [["words", "📚", "nav_words"], ["grammar", "✍️", "nav_grammar"], ["culture", "🎎", "nav_culture"]].forEach(([key, emo, k]) => {
      const b = el("button", "nav-study", emo + " " + t(k));
      b.onclick = () => go("/" + key);
      topNav.appendChild(b);
    });
  }
  document.getElementById("homeBtn").onclick = () => go("/");

  /* ================= VIEWS ================= */

  function renderHome() {
    view.innerHTML = "";
    const hero = el("div", "hero");
    hero.innerHTML =
      '<h1>Study KIIP</h1>' +
      '<p class="hero-ko">사회통합프로그램 한국어 학습 도우미</p>' +
      '<p>' + esc(t("hero_desc")) + '</p>';
    view.appendChild(hero);

    // Continue where you left off (last opened lesson)
    const last = getLast();
    const lastLvl = last && findLevel(last.lvl);
    const lastCh = lastLvl && findChapter(lastLvl, last.ch);
    if (lastCh) {
      const cont = el("button", "continue-card");
      cont.innerHTML =
        '<span class="cont-ic">▶</span>' +
        '<span class="cont-body"><span class="cont-kicker">' + esc(t("continue_label")) + '</span>' +
        '<span class="cont-title">' + esc(lastCh.ko) + '</span>' +
        '<span class="cont-sub">' + esc(lvlName(lastLvl) + " · " + t("kicker_lesson") + " " + lastCh.number) + '</span></span>' +
        '<span class="cont-go">→</span>';
      cont.onclick = () => go("/lesson/" + last.lvl + "/" + last.ch + "/" + (last.tab || "lesson"));
      view.appendChild(cont);
    }

    view.appendChild(el("div", "section-label", t("choose_level")));
    const grid = el("div", "grid");
    DATA.levels.forEach((l) => {
      const ready = chapterCount(l);
      const card = el("button", "card level");
      card.innerHTML =
        '<div class="card-kicker">' + esc(t("kicker_level")) + '</div>' +
        '<div class="card-ko">' + esc(lvlName(l)) + '</div>' +
        '<div class="card-ne">' + esc(subName(l)) + '</div>' +
        '<div class="card-meta"><span><b>' + l.chapters.length + '</b> ' + esc(t("cnt_lessons")) + '</span>' +
        (ready ? '<span><b>' + ready + '</b> ' + esc(t("cnt_ready")) + '</span>' : '') + '</div>';
      card.onclick = () => go("/level/" + l.id);
      grid.appendChild(card);
    });
    view.appendChild(grid);

    // study-across-chapters tools (compact row, visually distinct from levels)
    view.appendChild(el("div", "section-label", t("study_tools_label")));
    const tools = el("div", "tool-row");
    const counts = allCounts();
    [["words", "📚", t("nav_words"), counts.words + " " + t("cnt_words")],
     ["grammar", "✍️", t("nav_grammar"), counts.grammar + " " + t("cnt_patterns")],
     ["culture", "🎎", t("nav_culture"), counts.culture + " " + t("cnt_notes")]].forEach(([key, emo, title, meta]) => {
      const card = el("button", "tool-card");
      card.innerHTML = '<span class="tool-ic">' + emo + '</span>' +
        '<span class="tool-txt"><span class="tool-title">' + esc(title) + '</span>' +
        '<span class="tool-meta">' + esc(meta) + '</span></span>';
      card.onclick = () => go("/" + key);
      tools.appendChild(card);
    });
    view.appendChild(tools);
  }

  /* ---------- gather-all helpers ---------- */
  function allVocab() {
    const out = [];
    DATA.levels.forEach((lvl) => lvl.chapters.forEach((ch) => {
      vocabOf(ch).forEach((v) => out.push(Object.assign({}, v, { _lvl: lvlName(lvl), _lvlId: lvl.id, _chNo: ch.number, _chKo: ch.ko, _chId: ch.id })));
    }));
    return out;
  }
  function allGrammar() {
    const out = [];
    DATA.levels.forEach((lvl) => lvl.chapters.forEach((ch) => {
      (ch.grammar || []).forEach((g) => out.push(Object.assign({}, g, { _lvl: lvlName(lvl), _lvlId: lvl.id, _chNo: ch.number, _chKo: ch.ko, _chId: ch.id })));
    }));
    return out;
  }
  function allCulture() {
    const out = [];
    DATA.levels.forEach((lvl) => lvl.chapters.forEach((ch) => {
      if (ch.culture && ch.culture.ko) out.push(Object.assign({}, ch.culture, { _lvl: lvlName(lvl), _lvlId: lvl.id, _chNo: ch.number, _chKo: ch.ko, _chId: ch.id }));
    }));
    return out;
  }
  function allCounts() {
    const seen = {}; let w = 0;
    allVocab().forEach((v) => { if (!seen[v.ko]) { seen[v.ko] = 1; w++; } });
    return { words: w, grammar: allGrammar().length, culture: allCulture().length };
  }

  /* ---------- 📚 Words (all chapters) ---------- */
  function renderWords() {
    view.innerHTML = "";
    view.appendChild(crumbs([[t("crumb_home"), "/"], [t("nav_words"), null]]));
    view.appendChild(el("h1", "page-title", "📚 " + t("nav_words")));

    const m = langMeta(curLang());
    // unique words across all chapters (first occurrence kept)
    const data = (function () {
      const seen = {}, out = [];
      allVocab().forEach((v) => { if (!seen[v.ko]) { seen[v.ko] = 1; out.push(v); } });
      return out;
    })();
    // controls
    const controls = el("div", "study-controls");
    const q = el("input", "study-search"); q.type = "search"; q.placeholder = t("word_search_ph");
    const levelSel = el("select", "study-filter");
    levelSel.innerHTML = '<option value="">' + esc(t("all_levels")) + '</option>' + DATA.levels.map((l) => '<option value="' + l.id + '">' + esc(lvlName(l)) + '</option>').join("");
    // chapter sub-filter — a dependent dropdown that repopulates from the
    // selected level (lists only that level's chapters; all of them otherwise)
    const chapSel = el("select", "study-filter");
    function chapLabel(c) {
      const hasTitle = c.ko && !/^Chapter\s*\d+$/i.test(c.ko);
      return t("th_chapter") + " " + c.number + (hasTitle ? " — " + c.ko : "");
    }
    function populateChapters() {
      const lid = levelSel.value;
      const lvls = lid ? DATA.levels.filter((l) => l.id === lid) : DATA.levels;
      let html = '<option value="">' + esc(t("all_chapters")) + "</option>";
      lvls.forEach((l) => {
        l.chapters.filter((c) => vocabOf(c).length).forEach((c) => {
          const prefix = lid ? "" : lvlName(l) + " · ";
          html += '<option value="' + esc(c.id) + '">' + esc(prefix + chapLabel(c)) + "</option>";
        });
      });
      chapSel.innerHTML = html;
    }
    populateChapters();
    // page sub-filter — a dropdown (so all pages stay visible after one is
    // picked). Depends on the level + chapter scope; disabled when the
    // selection has no page data (e.g. KIIP 3).
    const pageSel = el("select", "study-filter page-select");
    function pagesInScope() {
      const lid = levelSel.value;
      return [...new Set(data.filter((v) =>
        (!lid || v._lvlId === lid) && (!chapSel.value || v._chId === chapSel.value)
      ).map((v) => v.page).filter(Boolean))].sort((a, b) => (+a) - (+b));
    }
    function refreshPages() {
      const pages = pagesInScope();
      const keep = pageSel.value;
      pageSel.innerHTML = '<option value="">' + esc(t("all_pages")) + "</option>" +
        pages.map((p) => '<option value="' + esc(p) + '">' + esc(t("page_label") + " " + p) + "</option>").join("");
      const has = pages.length > 0;
      pageSel.disabled = !has;
      pageSel.style.opacity = has ? "" : "0.45";
      pageSel.title = has ? "" : "No page data for this selection";
      // preserve the chosen page if it still exists in the new scope
      pageSel.value = pages.includes(keep) ? keep : "";
    }
    const count = el("span", "study-count");
    const clearBtn = el("button", "btn-clear", t("clear_label"));
    // search on its own row; filters grouped on a labelled row below
    const searchRow = el("div", "study-search-row");
    searchRow.append(q, count);
    const filterRow = el("div", "study-filter-row");
    filterRow.append(el("span", "filter-label", t("filters_label")), levelSel, chapSel, pageSel, clearBtn);
    controls.append(searchRow, filterRow);
    view.appendChild(controls);

    function pageMatch(v) {
      return !pageSel.value || String(v.page) === String(pageSel.value);
    }
    function chapMatch(v) {
      return !chapSel.value || v._chId === chapSel.value;
    }

    const tableWrap = el("div", "study-table-wrap");
    view.appendChild(tableWrap);

    function draw() {
      const term = q.value.trim().toLowerCase();
      const lid = levelSel.value;
      const rows = data.filter((v) => {
        if (lid && v._lvlId !== lid) return false;
        if (!chapMatch(v)) return false;
        if (!pageMatch(v)) return false;
        if (!term) return true;
        const ex = extraOf(v);
        return [v.ko, v.rom, v.en, v.similar, ex].join(" ").toLowerCase().indexOf(term) !== -1;
      });
      count.textContent = rows.length + " " + t("cnt_words");
      let html = '<table class="vocab-table"><thead><tr><th>' + esc(t("th_korean")) + '</th><th>' + esc(t("th_english")) + '</th><th>' + esc(m.flag + " " + m.name) + '</th><th>' + esc(t("th_chapter")) + '</th></tr></thead><tbody>';
      rows.forEach((v) => {
        const dir = m.rtl ? ' dir="rtl"' : "";
        html += '<tr><td><div class="v-ko">' + esc(v.ko) + '</div>' + (v.rom ? '<div class="v-rom">' + esc(v.rom) + '</div>' : '') + '</td>' +
          '<td>' + esc(v.en) + '</td>' +
          '<td class="v-ne' + (extraIsFallback(v) ? ' v-fallback' : '') + '"' + dir + '>' + esc(extraOf(v)) + '</td>' +
          '<td class="v-sim"><a class="chip-link" data-ch="' + v._chId + '" data-lvl="' + v._lvlId + '">' + esc(v._lvl + " · " + v._chNo) + '</a></td></tr>';
      });
      html += "</tbody></table>";
      tableWrap.innerHTML = rows.length ? html : '<div class="empty-state"><div class="es-emoji">🔍</div><p>No words match.</p></div>';
      tableWrap.querySelectorAll(".chip-link").forEach((a) => a.onclick = () => go("/lesson/" + a.getAttribute("data-lvl") + "/" + a.getAttribute("data-ch") + "/vocab"));
    }
    q.oninput = draw;
    levelSel.onchange = () => { populateChapters(); refreshPages(); draw(); };
    chapSel.onchange = () => { refreshPages(); draw(); };
    pageSel.onchange = draw;
    clearBtn.onclick = () => {
      q.value = ""; levelSel.value = ""; populateChapters(); chapSel.value = ""; refreshPages(); draw();
    };
    refreshPages();
    draw();
  }

  /* ---------- ✍️ Grammar (all chapters) ---------- */
  function renderGrammar() {
    view.innerHTML = "";
    view.appendChild(crumbs([[t("crumb_home"), "/"], [t("nav_grammar"), null]]));
    view.appendChild(el("h1", "page-title", "✍️ " + t("nav_grammar")));
    const data = allGrammar();
    const controls = el("div", "study-controls");
    const q = el("input", "study-search"); q.type = "search"; q.placeholder = t("word_search_ph");
    const levelSel = el("select", "study-filter");
    levelSel.innerHTML = '<option value="">' + esc(t("all_levels")) + '</option>' + DATA.levels.map((l) => '<option value="' + l.id + '">' + esc(lvlName(l)) + '</option>').join("");
    const count = el("span", "study-count");
    const clearBtn = el("button", "btn-clear", t("clear_label"));
    const searchRow = el("div", "study-search-row"); searchRow.append(q, count);
    const filterRow = el("div", "study-filter-row"); filterRow.append(el("span", "filter-label", t("filters_label")), levelSel, clearBtn);
    controls.append(searchRow, filterRow);
    view.appendChild(controls);
    const list = el("div"); view.appendChild(list);
    function draw() {
      const term = q.value.trim().toLowerCase(), lid = levelSel.value;
      const rows = data.filter((g) => {
        if (lid && g._lvlId !== lid) return false;
        if (!term) return true;
        return [g.pattern, g.en, g.ne, g.note].join(" ").toLowerCase().indexOf(term) !== -1;
      });
      count.textContent = rows.length + " patterns";
      list.innerHTML = "";
      rows.forEach((g) => {
        const c = el("div", "grammar-card");
        let h = '<div class="g-chap">' + esc(g._lvl + " · " + t("kicker_lesson") + " " + g._chNo + " — " + g._chKo) + '</div>' +
          '<div class="g-pattern">' + esc(g.pattern) + '</div>' +
          '<div class="g-mean">' + esc(g.en || "") + '</div>' + selLine(g, "g-ne");
        if (g.note) h += '<div class="g-note">' + esc(g.note) + '</div>';
        (g.examples || []).forEach((ex) => {
          h += '<div class="g-ex tri" style="box-shadow:none;border:none;padding:8px 0;margin:0"><div class="ko">' + esc(ex.ko) + '</div><div class="en">' + esc(ex.en || "") + '</div>' + selLine(ex, "ne") + '</div>';
        });
        const open = el("button", "btn btn-ghost", t("open_lesson")); open.style.marginTop = "8px";
        open.onclick = () => go("/lesson/" + g._lvlId + "/" + g._chId + "/grammar");
        c.innerHTML = h; stripNepali(c); c.appendChild(open);
        list.appendChild(c);
      });
      if (!rows.length) list.appendChild(emptyState("🔍", "No grammar matches."));
    }
    q.oninput = draw; levelSel.onchange = draw;
    clearBtn.onclick = () => { q.value = ""; levelSel.value = ""; draw(); };
    draw();
  }

  /* ---------- 🎎 Culture (all chapters) ---------- */
  function renderCulture() {
    view.innerHTML = "";
    view.appendChild(crumbs([[t("crumb_home"), "/"], [t("nav_culture"), null]]));
    view.appendChild(el("h1", "page-title", "🎎 " + t("nav_culture")));

    // chapter filter
    const controls = el("div", "study-controls");
    const sel = el("select", "study-filter");
    const items = [];
    DATA.levels.forEach((lvl) => lvl.chapters.forEach((ch) => {
      const c = ch.culture, cmd = getCultureMd(ch.id);
      if (c || cmd) items.push({ lvl, ch, c, cmd });
    }));
    sel.innerHTML = '<option value="">' + esc(t("all_chapters")) + '</option>' + items.map((it, i) => '<option value="' + i + '">' + esc(lvlName(it.lvl) + " · " + it.ch.number + ". " + it.ch.ko) + '</option>').join("");
    const filterRow = el("div", "study-filter-row"); filterRow.append(el("span", "filter-label", t("filters_label")), sel);
    controls.appendChild(filterRow);
    view.appendChild(controls);
    const host = el("div"); view.appendChild(host);

    function drawOne(it) {
      const block = el("div", "culture-block");
      block.appendChild(el("div", "g-chap", esc(lvlName(it.lvl) + " · " + t("kicker_lesson") + " " + it.ch.number + " — " + it.ch.ko)));
      if (it.c) {
        const head = el("div", "culture");
        head.innerHTML = '<div class="c-ko">' + esc(it.c.ko) + '</div>' +
          '<div style="font-weight:600;margin:2px 0">' + esc(it.c.en || "") + '</div>' +
          (it.c.ne && curLang() === "ne" ? '<div class="g-ne">' + esc(it.c.ne) + '</div>' : '') +
          (it.c.text ? '<p style="margin:10px 0 0">' + esc(it.c.text) + '</p>' : '');
        block.appendChild(head);
      }
      if (it.cmd) {
        const doc = el("div", "lesson-doc"); doc.style.marginTop = "12px";
        try { doc.innerHTML = window.renderLesson(it.cmd); } catch (e) { doc.textContent = it.cmd; }
        if (!(window.LESSON_MD && window.LESSON_MD[it.ch.id + "@" + curLang()])) { localizeLesson(doc); annotatePassage(doc); annotateGloss(doc); }
        makeKoClickable(doc);
        block.appendChild(doc);
      }
      const open = el("button", "btn btn-ghost", "Open full lesson →");
      open.style.marginTop = "10px";
      open.onclick = () => go("/lesson/" + it.lvl.id + "/" + it.ch.id + "/lesson");
      block.appendChild(open);
      return block;
    }
    function draw() {
      host.innerHTML = "";
      const v = sel.value;
      const show = v === "" ? items : [items[+v]];
      show.forEach((it) => host.appendChild(drawOne(it)));
    }
    sel.onchange = draw;
    draw();
  }

  function renderLevel(levelId) {
    const lvl = findLevel(levelId);
    if (!lvl) return renderHome();
    view.innerHTML = "";
    view.appendChild(crumbs([[t("crumb_home"), "/"], [lvlName(lvl), null]]));
    view.appendChild(el("h1", "page-title", esc(lvlName(lvl))));
    view.appendChild(el("p", "page-sub", esc(subName(lvl)) ));

    view.appendChild(el("div", "section-label", t("cnt_lessons")));
    if (!lvl.chapters.length) {
      view.appendChild(emptyState("📚", "No lessons added to this level yet.",
        "Add chapter objects to this level in <code>js/data.js</code>."));
      return;
    }
    const grid = el("div", "grid");
    lvl.chapters.forEach((c) => {
      const full = window.LESSON_MD && window.LESSON_MD[c.id];
      const nWords = (c.vocab && c.vocab.length) || ((window.LESSON_VOCAB && window.LESSON_VOCAB[c.id] || []).length);
      const ready = nWords || full;
      const card = el("button", "card" + (ready ? "" : " muted"));
      const tko = titleKo(c), ten = titleEn(c), tse = titleSel(c), rtl = langMeta(curLang()).rtl;
      let th = '<div class="card-kicker">' + esc(t("kicker_lesson")) + ' ' + c.number + '</div>';
      if (tko) th += '<div class="card-ko">' + esc(tko) + '</div>';
      if (ten && ten !== tko) th += '<div class="card-en">' + esc(ten) + '</div>';
      if (tse && tse !== ten && tse !== tko) th += '<div class="card-ne"' + (rtl ? ' dir="rtl"' : '') + '>' + esc(tse) + '</div>';
      card.innerHTML = th +
        (ready
          ? '<div class="card-meta">' + (full ? '<span>📖 ' + esc(t("tab_full")) + '</span>' : '') +
            (nWords ? '<span><b>' + nWords + '</b> ' + esc(t("cnt_words")) + '</span>' : '') + '</div>'
          : '<span class="badge-soon">—</span>');
      if (ready) card.onclick = () => go("/lesson/" + lvl.id + "/" + c.id + "/" + (full ? "lesson" : "vocab"));
      grid.appendChild(card);
    });
    view.appendChild(grid);
  }

  function renderLesson(levelId, chapterId, tab) {
    const lvl = findLevel(levelId);
    const ch = findChapter(lvl, chapterId);
    if (!lvl || !ch) return renderHome();
    const hasFull = window.LESSON_MD && window.LESSON_MD[ch.id];
    const hasVocab = vocabOf(ch).length > 0;
    // which tabs actually have content (markdown-only chapters keep everything in the
    // Full Lesson, so their Grammar/Dialogues/Quiz tabs would otherwise be empty)
    const avail = {
      lesson: !!hasFull,
      vocab: hasVocab,
      grammar: (ch.grammar || []).length > 0,
      dialogues: (ch.dialogues || []).length > 0 || (ch.activities || []).length > 0 || !!(ch.culture && ch.culture.ko),
      flashcards: hasVocab,
      quiz: vocabOf(ch).length >= 4
    };
    if (!tab || !avail[tab]) tab = hasFull ? "lesson" : (hasVocab ? "vocab" : "lesson");
    saveLast({ lvl: lvl.id, ch: ch.id, tab: tab, ko: ch.ko, number: ch.number });
    view.innerHTML = "";
    view.appendChild(crumbs([[t("crumb_home"), "/"], [lvlName(lvl), "/level/" + lvl.id], [t("kicker_lesson") + " " + ch.number, null]]));
    view.appendChild(el("h1", "page-title", esc(titleKo(ch) || titleEn(ch))));
    const _sub = [titleKo(ch) ? titleEn(ch) : "", titleSel(ch)].filter((s) => s && s !== titleKo(ch)).filter((v, i, a) => a.indexOf(v) === i);
    if (_sub.length) view.appendChild(el("p", "page-sub", esc(_sub.join(" · "))));
    if (ch.summary) {
      const s = el("p", null, esc(ch.summary));
      s.style.color = "var(--ink-soft)"; s.style.marginTop = "-14px"; s.style.marginBottom = "8px";
      view.appendChild(s);
    }

    const tabs = el("div", "tabs");
    const defs = [
      ["lesson", "📖", t("tab_full")], ["vocab", "📚", t("tab_vocab")],
      ["grammar", "✍️", t("tab_grammar")], ["dialogues", "💬", t("tab_dialogues")],
      ["flashcards", "🃏", t("tab_flashcards")], ["quiz", "❓", t("tab_quiz")]
    ].filter(([k]) => avail[k]);
    defs.forEach(([key, emo, label]) => {
      const b = el("button", key === tab ? "active" : null, '<span class="tab-ic">' + emo + '</span>' + esc(label));
      b.onclick = () => go("/lesson/" + lvl.id + "/" + ch.id + "/" + key);
      tabs.appendChild(b);
    });
    view.appendChild(tabs);

    const panel = el("div", "panel");
    view.appendChild(panel);
    if (tab === "lesson") panelLesson(panel, ch);
    else if (tab === "vocab") panelVocab(panel, ch);
    else if (tab === "grammar") panelGrammar(panel, ch);
    else if (tab === "dialogues") panelDialogues(panel, ch);
    else if (tab === "flashcards") panelFlashcards(panel, ch);
    else if (tab === "quiz") panelQuiz(panel, ch);
  }

  /* ---------- full lesson (rendered from /mds markdown) ---------- */
  function panelLesson(panel, ch) {
    const code = curLang();
    const variant = window.LESSON_MD && window.LESSON_MD[ch.id + "@" + code];
    const md = variant || (window.LESSON_MD && window.LESSON_MD[ch.id]);
    if (!md) return panel.appendChild(emptyState("📖", "No full lesson text for this chapter yet."));
    const wrap = el("div", "lesson-doc");
    try { wrap.innerHTML = window.renderLesson(md); }
    catch (e) { wrap.textContent = md; }
    panel.appendChild(wrap);
    // If we're showing the base (Nepali) lesson in another language, localize
    // its vocab tables from the dictionary. If a full per-language file exists,
    // it's already in that language — leave it as-is.
    if (!variant) localizeLesson(wrap);
    // For non-Nepali users: remove the raw Nepali and add a selected-language line
    // under each Korean sentence (auto equivalent). Per-language full lesson files
    // (variant) are already in the right language, so leave them.
    if (!variant) annotatePassage(wrap);
    if (!variant) annotateGloss(wrap);
    makeKoClickable(wrap);
    const tip = el("div", "click-tip", t("tip_click"));
    wrap.insertBefore(tip, wrap.firstChild);
  }

  // Local-only: replace the Nepali column of lesson vocab tables with the
  // selected language using the offline dictionary. No internet. Korean &
  // English stay; sentence lines stay Nepali (no local equivalent stored).
  function localizeLesson(wrap) {
    const code = curLang();
    if (code === "ne" || !window.I18N || !window.I18N.data) return;
    const m = langMeta(code);
    const dict = window.I18N.data;
    const lookup = (s) => dict[s] || dict[s.replace(/\s*\(.*$/, "").trim()] || dict[s.replace(/\s*\(.*?\)\s*/g, "").trim()];
    wrap.querySelectorAll(".lesson-table tbody tr").forEach((tr) => {
      const tds = tr.querySelectorAll("td");
      if (tds.length < 3 || !/[가-힣]/.test(tds[0].textContent)) return;
      const d = lookup(tds[0].textContent.trim());
      if (d && d[code]) {
        const last = tds[tds.length - 1];
        last.textContent = d[code];
        if (m.rtl) last.setAttribute("dir", "rtl");
        last.classList.add("lt-localized");
      }
    });
  }

  /* ---------- panels ---------- */
  function panelVocab(panel, ch) {
    const VOC = vocabOf(ch);
    if (!VOC.length) return panel.appendChild(emptyState("🈁", "No vocabulary yet."));
    ch = Object.assign({}, ch, { vocab: VOC });
    const m = langMeta(curLang());
    const tbl = el("table", "vocab-table");
    tbl.innerHTML =
      "<thead><tr><th>" + esc(t("th_korean")) + "</th><th>" + esc(t("th_english")) + "</th><th>" + esc(m.flag + " " + m.name) + "</th><th>" + esc(t("th_similar")) + "</th></tr></thead>";
    const tb = el("tbody");
    ch.vocab.forEach((v) => {
      const tr = el("tr");
      const dir = m.rtl ? ' dir="rtl"' : "";
      const fb = extraIsFallback(v) ? " v-fallback" : "";
      tr.innerHTML =
        '<td><div class="v-ko">' + esc(v.ko) + '</div>' +
        (v.rom ? '<div class="v-rom">' + esc(v.rom) + '</div>' : '') + '</td>' +
        '<td>' + esc(v.en) + '</td>' +
        '<td class="v-ne' + fb + '"' + dir + '>' + esc(extraOf(v)) + '</td>' +
        '<td class="v-sim">' + esc(v.similar || "") + '</td>';
      tb.appendChild(tr);
    });
    tbl.appendChild(tb);
    panel.appendChild(tbl);
  }

  function panelGrammar(panel, ch) {
    if (!ch.grammar || !ch.grammar.length) return panel.appendChild(emptyState("✍️", "No grammar points yet."));
    ch.grammar.forEach((g) => {
      const c = el("div", "grammar-card");
      let html =
        '<div class="g-pattern">' + esc(g.pattern) + '</div>' +
        '<div class="g-mean">' + esc(g.en || "") + '</div>' +
        selLine(g, "g-ne");
      if (g.note) html += '<div class="g-note">' + esc(g.note) + '</div>';
      (g.examples || []).forEach((ex) => {
        html +=
          '<div class="g-ex tri" style="box-shadow:none;border:none;padding:8px 0;margin:0">' +
          '<div class="ko">' + esc(ex.ko) + '</div>' +
          '<div class="en">' + esc(ex.en || "") + '</div>' +
          selLine(ex, "ne") + '</div>';
      });
      c.innerHTML = html;
      stripNepali(c); // safety net for any Nepali baked into notes
      panel.appendChild(c);
    });
  }

  function panelDialogues(panel, ch) {
    const items = (ch.dialogues || []);
    if (!items.length) return panel.appendChild(emptyState("💬", "No dialogues yet."));
    items.forEach((d) => {
      const wrap = el("div");
      wrap.style.marginBottom = "22px";
      const h = el("div", "tri");
      h.style.background = "var(--brand-soft)"; h.style.border = "none";
      h.innerHTML =
        '<div class="ko">' + esc(d.title || "") + '</div>' +
        '<div class="en">' + esc(d.en || "") + '</div>' +
        selLine(d, "ne");
      wrap.appendChild(h);
      (d.lines || []).forEach((ln) => {
        const t = el("div", "tri");
        t.innerHTML =
          '<div class="ko">' + esc(ln.ko) + '</div>' +
          '<div class="en">' + esc(ln.en || "") + '</div>' +
          selLine(ln, "ne");
        wrap.appendChild(t);
      });
      panel.appendChild(wrap);
    });

    if (ch.activities && ch.activities.length) {
      panel.appendChild(el("div", "section-label", "Activities · 활동"));
      ch.activities.forEach((a) => {
        const t = el("div", "tri");
        t.innerHTML =
          '<div class="ko">' + esc(a.ko) + '</div>' +
          '<div class="en">' + esc(a.en || "") + '</div>' +
          selLine(a, "ne");
        panel.appendChild(t);
      });
    }
    if (ch.culture) {
      panel.appendChild(el("div", "section-label", "Culture & Information · 문화와 정보"));
      const c = el("div", "culture");
      c.innerHTML =
        '<div class="c-ko">' + esc(ch.culture.ko) + '</div>' +
        '<div style="font-weight:600;margin:2px 0">' + esc(ch.culture.en || "") + '</div>' +
        selLine(ch.culture, "g-ne") +
        (ch.culture.text ? '<p style="margin:10px 0 0">' + esc(ch.culture.text) + '</p>' : '');
      panel.appendChild(c);
    }
  }

  /* ---------- flashcards ---------- */
  function panelFlashcards(panel, ch) {
    const cards = vocabOf(ch).slice();
    if (!cards.length) return panel.appendChild(emptyState("🃏", "No flashcards — add vocabulary first."));
    let i = 0;
    const stage = el("div", "fc-stage");

    const card = el("div", "flashcard");
    const inner = el("div", "flashcard-inner");
    inner.innerHTML =
      '<div class="fc-face fc-front"><div class="fc-ko"></div><div class="fc-rom"></div><div class="fc-hint">tap to flip</div></div>' +
      '<div class="fc-face fc-back"><div class="fc-en"></div><div class="fc-ne"></div><div class="fc-sim"></div><div class="fc-hint">tap to flip</div></div>';
    card.appendChild(inner);
    card.onclick = () => card.classList.toggle("flipped");

    const controls = el("div", "fc-controls");
    const prev = el("button", "btn btn-ghost btn-round", "‹");
    const count = el("div", "fc-count");
    const next = el("button", "btn btn-ghost btn-round", "›");
    const shuffle = el("button", "btn btn-ghost", "🔀 Shuffle");
    controls.append(prev, count, next, shuffle);

    function show() {
      const v = cards[i];
      card.classList.remove("flipped");
      inner.querySelector(".fc-ko").textContent = v.ko;
      inner.querySelector(".fc-rom").textContent = v.rom || "";
      inner.querySelector(".fc-en").textContent = v.en || "";
      const ne = inner.querySelector(".fc-ne");
      ne.textContent = extraOf(v);
      ne.setAttribute("dir", langMeta(curLang()).rtl ? "rtl" : "ltr");
      inner.querySelector(".fc-sim").textContent = v.similar ? "≈ " + v.similar : "";
      count.textContent = (i + 1) + " / " + cards.length;
    }
    prev.onclick = () => { i = (i - 1 + cards.length) % cards.length; show(); };
    next.onclick = () => { i = (i + 1) % cards.length; show(); };
    shuffle.onclick = () => { for (let j = cards.length - 1; j > 0; j--) { const k = Math.floor(Math.random() * (j + 1)); [cards[j], cards[k]] = [cards[k], cards[j]]; } i = 0; show(); };

    stage.append(card, controls);
    panel.appendChild(stage);
    show();
  }

  /* ---------- quiz ---------- */
  function buildQuiz(ch) {
    if (ch.quiz && ch.quiz.length) return ch.quiz.slice();
    // auto-generate from vocab: meaning -> pick Korean
    const vocab = vocabOf(ch).filter((v) => v.en);
    if (vocab.length < 4) return [];
    const pool = vocab.map((v) => v.ko);
    return vocab.slice(0, 8).map((v) => {
      const wrong = pool.filter((k) => k !== v.ko).sort(() => Math.random() - 0.5).slice(0, 3);
      const opts = [v.ko, ...wrong].sort(() => Math.random() - 0.5);
      return { q: 'Which word means "' + v.en + '"?', options: opts, answer: opts.indexOf(v.ko) };
    });
  }

  function panelQuiz(panel, ch) {
    const qs = buildQuiz(ch);
    if (!qs.length) return panel.appendChild(emptyState("❓", "Not enough content for a quiz yet."));
    let idx = 0, score = 0;
    const wrap = el("div", "quiz-wrap");
    const prog = el("div", "quiz-progress", "<span></span>");
    const body = el("div");
    wrap.append(prog, body);
    panel.appendChild(wrap);

    function showQ() {
      const q = qs[idx];
      prog.firstChild.style.width = (idx / qs.length * 100) + "%";
      body.innerHTML = "";
      const qe = el("div", "quiz-q");
      qe.innerHTML = '<span class="qko">' + esc(q.q) + '</span>';
      body.appendChild(qe);
      q.options.forEach((opt, oi) => {
        const b = el("button", "opt", esc(opt));
        b.onclick = () => choose(b, oi, q);
        body.appendChild(b);
      });
    }
    function choose(btn, oi, q) {
      const opts = body.querySelectorAll(".opt");
      opts.forEach((o) => (o.disabled = true));
      if (oi === q.answer) { btn.classList.add("correct"); score++; }
      else { btn.classList.add("wrong"); opts[q.answer].classList.add("correct"); }
      const nextBtn = el("button", "btn btn-primary", idx + 1 < qs.length ? "Next →" : "See results");
      nextBtn.style.marginTop = "12px";
      nextBtn.onclick = () => { idx++; idx < qs.length ? showQ_keepNext() : showResult(); };
      body.appendChild(nextBtn);
    }
    function showQ_keepNext() { showQ(); }
    function showResult() {
      prog.firstChild.style.width = "100%";
      body.innerHTML = "";
      const pct = Math.round(score / qs.length * 100);
      const r = el("div", "quiz-result");
      r.innerHTML =
        '<div class="score">' + pct + '%</div>' +
        '<p>You got <b>' + score + '</b> of <b>' + qs.length + '</b> correct.</p>';
      const again = el("button", "btn btn-primary", "Try again");
      again.onclick = () => { idx = 0; score = 0; showQ(); };
      r.appendChild(again);
      body.appendChild(r);
    }
    showQ();
  }

  /* ---------- search ---------- */
  function buildIndex() {
    const idx = [];
    DATA.levels.forEach((lvl) => {
      lvl.chapters.forEach((ch) => {
        (ch.vocab || []).forEach((v) =>
          idx.push({ type: "Word", ko: v.ko, sub: v.en + (v.ne ? " · " + v.ne : ""), text: [v.ko, v.rom, v.en, v.ne, v.similar].join(" "), lvl, ch, tab: "vocab" }));
        (ch.grammar || []).forEach((g) =>
          idx.push({ type: "Grammar", ko: g.pattern, sub: g.en || "", text: [g.pattern, g.en, g.ne, g.note].join(" "), lvl, ch, tab: "grammar" }));
        (ch.dialogues || []).forEach((d) =>
          (d.lines || []).forEach((ln) =>
            idx.push({ type: "Dialogue", ko: ln.ko, sub: ln.en || "", text: [ln.ko, ln.en, ln.ne].join(" "), lvl, ch, tab: "dialogues" })));
      });
    });
    return idx;
  }
  const SEARCH_INDEX = buildIndex();

  function doSearch(q) {
    q = q.trim().toLowerCase();
    if (!q) { searchResults.hidden = true; return; }
    const hits = SEARCH_INDEX.filter((it) => it.text.toLowerCase().includes(q)).slice(0, 30);
    searchResults.innerHTML = "";
    if (!hits.length) {
      searchResults.appendChild(el("div", "sr-empty", "No matches for “" + esc(q) + "”"));
    } else {
      hits.forEach((it) => {
        const d = el("div", "sr-item");
        d.innerHTML =
          '<div class="sr-ko">' + esc(it.ko) + ' <span class="sr-meta">· ' + it.type + '</span></div>' +
          '<div class="sr-meta">' + esc(it.sub) + ' — ' + esc(lvlName(it.lvl)) + ' · Lesson ' + it.ch.number + '</div>';
        d.onclick = () => {
          searchResults.hidden = true; searchInput.value = "";
          go("/lesson/" + it.lvl.id + "/" + it.ch.id + "/" + it.tab);
        };
        searchResults.appendChild(d);
      });
    }
    searchResults.hidden = false;
  }
  searchInput.addEventListener("input", (e) => doSearch(e.target.value));
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".search-wrap")) searchResults.hidden = true;
  });

  /* ---------- shared bits ---------- */
  function crumbs(items) {
    const c = el("div", "crumbs");
    items.forEach((it, i) => {
      if (i) c.appendChild(el("span", "sep", "›"));
      if (it[1]) { const b = el("button", null, esc(it[0])); b.onclick = () => go(it[1]); c.appendChild(b); }
      else c.appendChild(el("span", null, esc(it[0])));
    });
    return c;
  }
  function emptyState(emoji, title, sub) {
    const e = el("div", "empty-state");
    e.innerHTML = '<div class="es-emoji">' + emoji + '</div><h3>' + esc(title) + '</h3>' + (sub ? '<p>' + sub + '</p>' : '');
    return e;
  }

  /* ---------- main render ---------- */
  function render() {
    const p = parseHash();
    window.scrollTo(0, 0);
    if (!p.length) return renderHome();
    if (p[0] === "level") return renderLevel(p[1]);
    if (p[0] === "lesson") return renderLesson(p[1], p[2], p[3]);
    if (p[0] === "words") return renderWords();
    if (p[0] === "grammar") return renderGrammar();
    if (p[0] === "culture") return renderCulture();
    renderHome();
  }

  buildNav();
  setupLangSelector();
  render();
})();

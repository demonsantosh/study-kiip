/* ============================================================
   render-lesson.js
   window.renderLesson(markdownText) -> HTML string
   Tuned to the KIIP study-note format: tab-separated tables,
   "Word — meaning / nepali (Similar: x)" lines, Page/📌/🔵
   headings, EN:/NE: lines, ✅ answers, **bold**, --- rules.
   ============================================================ */
(function () {
  "use strict";

  const esc = (s) =>
    String(s).replace(/[&<>]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c]));

  // attribute-safe plain text (for data-label): strip **bold** markers, escape quotes too
  const escAttr = (s) =>
    String(s).replace(/\*\*/g, "").replace(/[&<>"]/g, (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c])).trim();

  // inline: **bold**, `code`, and highlight EN:/NE: labels
  function inline(s) {
    s = esc(s);
    s = s.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
    return s;
  }

  const hangulHeavy = (s) => {
    const h = (s.match(/[가-힣]/g) || []).length;
    return h > s.replace(/\s/g, "").length * 0.3;
  };

  function renderTable(rows) {
    // rows: array of arrays (cells)
    const headRx = /^(#|korean|한국어|word|단어|verb|verb\/adj|tense|form|stem|program|award|title|event|excerpt|feeling|condition|항목|문장)/i;
    let html = '<div class="lesson-table-wrap"><table class="lesson-table">';
    let bodyStart = 0;
    let headers = [];
    if (rows.length && rows[0].length >= 2 && headRx.test(rows[0][0].trim())) {
      headers = rows[0];
      html += "<thead><tr>" + rows[0].map((c) => "<th>" + inline(c) + "</th>").join("") + "</tr></thead>";
      bodyStart = 1;
    }
    html += "<tbody>";
    for (let i = bodyStart; i < rows.length; i++) {
      const r = rows[i];
      html += "<tr>" + r.map((c, idx) => {
        const isKo = idx === 0 && hangulHeavy(c);
        const cls = isKo ? ' class="lt-ko"' : "";
        // carry the column header as a label so the stacked mobile view keeps context;
        // the first Korean cell stands on its own (bold), so it gets no label prefix.
        const lbl = (!isKo && headers[idx]) ? ' data-label="' + escAttr(headers[idx]) + '"' : "";
        return "<td" + cls + lbl + ">" + inline(c) + "</td>";
      }).join("") + "</tr>";
    }
    html += "</tbody></table></div>";
    return html;
  }

  // A source line often crams "한국어 … EN: English … NE: Nepali" together. Split it so
  // the Korean, the EN: gloss and the NE:/NP: gloss each land on their own line.
  function splitGlossLine(line) {
    if (line.indexOf("\t") !== -1) return [line];                 // leave tables intact
    line = line.replace(/^\s*(?:Korean|한국어|KO)\s*[:：]\s*/i, ""); // drop a leading "Korean:" label
    let parts = line.split(/\s+(?=(?:EN|NE|NP|English|Nepali)\s*:)/);
    // also split several "단어 (rom) — meaning" definitions crammed on one line
    parts = parts.flatMap((p) => p.split(/\s+(?=[가-힣][가-힣\s]{0,12}\([A-Za-z-]+\)\s—\s)/));
    return parts.length > 1 ? parts.map((p) => p.trim()).filter(Boolean) : [line];
  }

  window.renderLesson = function (md) {
    if (!md) return '<div class="empty-state"><div class="es-emoji">📖</div><p>No lesson text yet.</p></div>';
    const lines = md.split(/\r?\n/).flatMap(splitGlossLine);
    let html = "";
    let i = 0;
    let para = [];

    function flushPara() {
      if (!para.length) return;
      const text = para.join(" ").trim();
      if (text) {
        const cls = hangulHeavy(text) ? ' class="lp ko"' : ' class="lp"';
        html += "<p" + cls + ">" + inline(text) + "</p>";
      }
      para = [];
    }

    while (i < lines.length) {
      const line = lines[i];
      const t = line.trim();

      // blank -> paragraph break
      if (!t) { flushPara(); i++; continue; }

      // horizontal rule
      if (/^[-*_]{3,}$/.test(t)) { flushPara(); html += "<hr/>"; i++; continue; }

      // tab-separated table block
      if (line.indexOf("\t") !== -1) {
        flushPara();
        const rows = [];
        while (i < lines.length && lines[i].indexOf("\t") !== -1) {
          rows.push(lines[i].split("\t").map((c) => c.trim()));
          i++;
        }
        html += renderTable(rows);
        continue;
      }

      // markdown headings
      if (/^#{1,6}\s+/.test(t)) {
        flushPara();
        const lvl = t.match(/^#+/)[0].length;
        html += "<h" + Math.min(lvl + 1, 4) + ' class="lh">' + inline(t.replace(/^#+\s+/, "")) + "</h" + Math.min(lvl + 1, 4) + ">";
        i++; continue;
      }

      // section headings by marker / keyword
      if (/^📖/.test(t) || /^Page\s*\d/i.test(t) || /^Chapter\s*\d/i.test(t)) {
        flushPara(); html += '<h3 class="lh lh-page">' + inline(t.replace(/^📖\s*/, "")) + "</h3>"; i++; continue;
      }
      if (/^🔵/.test(t)) { flushPara(); html += '<h3 class="lh lh-grammar">' + inline(t.replace(/^🔵\s*/, "")) + "</h3>"; i++; continue; }
      if (/^📌/.test(t)) { flushPara(); html += '<h4 class="lh lh-sub">' + inline(t.replace(/^📌\s*/, "")) + "</h4>"; i++; continue; }
      if (/^[🌱🌟💼📜🏃😔🌳😊🎯🔤🆕💡⚠️🎉📊📝🍜📚🍳]/.test(t)) {
        flushPara(); html += '<h4 class="lh lh-sub">' + inline(t) + "</h4>"; i++; continue;
      }
      if (/^(어휘|문법|활동|문화와 정보|문화|읽기|쓰기|듣기|말하기|발음|예문|의미|형태|단어장|사용 규칙|배운 어휘)/.test(t) && t.length < 40) {
        flushPara(); html += '<h4 class="lh lh-sub">' + inline(t) + "</h4>"; i++; continue;
      }

      // EN: / NE: lines
      if (/^(EN|English)\s*:/i.test(t)) { flushPara(); html += '<div class="l-en">' + inline(t) + "</div>"; i++; continue; }
      if (/^(NE|NP|Nepali)\s*:/i.test(t)) { flushPara(); html += '<div class="l-ne">' + inline(t) + "</div>"; i++; continue; }

      // ✅ answer / Question / Sentence / Sample
      if (/^✅/.test(t)) { flushPara(); html += '<div class="l-answer">' + inline(t) + "</div>"; i++; continue; }
      if (/^(Question\b|Sentence\b|Sample\b|Activity\b|Title\b|예시|보기|Dialogue\b|Excerpt\b)/i.test(t)) {
        flushPara(); html += '<div class="l-label">' + inline(t) + "</div>"; i++; continue;
      }
      if (/^🔹/.test(t)) { flushPara(); html += '<div class="l-note">' + inline(t.replace(/^🔹\s*/, "")) + "</div>"; i++; continue; }

      // "Word — meaning / nepali (Similar: x)" definition line. Match when the head
      // contains Korean (even with romanization like "한국 (han-guk)"), so each word
      // definition lands on its own line instead of merging into one paragraph.
      const dm = t.match(/^([^—]{1,30})\s—\s(.+)$/);
      if (dm && /[가-힣]/.test(dm[1])) {
        flushPara();
        html += '<div class="l-def"><span class="l-def-ko">' + inline(dm[1].trim()) + '</span> — <span class="l-def-mean">' + inline(dm[2].trim()) + "</span></div>";
        i++; continue;
      }

      // bullet / numbered list
      if (/^(\s*[-•]\s+|\s*\d+\)\s+)/.test(line)) {
        flushPara();
        const items = [];
        while (i < lines.length && /^(\s*[-•]\s+|\s*\d+\)\s+)/.test(lines[i])) {
          items.push(lines[i].replace(/^(\s*[-•]\s+|\s*\d+\)\s+)/, ""));
          i++;
        }
        html += '<ul class="l-list">' + items.map((it) => "<li>" + inline(it) + "</li>").join("") + "</ul>";
        continue;
      }

      // default: a Korean line is a complete sentence/item in this note format, so it
      // stands on its own — each becomes its own clickable unit and gets its own
      // sentence-level translation (not a word-by-word gloss of several merged lines).
      // Non-Korean prose can still wrap together into a paragraph.
      if (hangulHeavy(t)) {
        flushPara();
        // split the line into individual sentences so each becomes its own clickable
        // unit and gets its own sentence-level translation (not one merged word-by-word).
        const sents = t.split(/(?<=[.?!。！？…])\s+/).map((s) => s.trim()).filter(Boolean);
        (sents.length ? sents : [t]).forEach((s) => { html += '<p class="lp ko">' + inline(s) + "</p>"; });
        i++; continue;
      }
      para.push(t);
      i++;
    }
    flushPara();
    return html;
  };
})();

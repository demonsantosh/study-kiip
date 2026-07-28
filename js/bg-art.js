/* ============================================================
   bg-art.js — rotating Korean-culture background.
   A different subtle line-art motif each calendar day (rotates
   "on a schedule" = the calendar), drawn in theme-aware colors
   behind all content. Pure SVG data-URIs, offline-safe, no images.
   ============================================================ */
(function () {
  "use strict";

  function dayIndex() {
    const d = new Date();
    const start = new Date(d.getFullYear(), 0, 0);
    return Math.floor((d - start) / 86400000); // 1..366
  }

  function palette() {
    const dark = document.documentElement.getAttribute("data-theme") === "dark";
    return dark
      ? { line: "#8fa6ff", accent: "#ff8a72", warm: "#ffd27a" }
      : { line: "#1d3a8a", accent: "#e0533d", warm: "#c98a1e" };
  }

  const wrap = (inner) =>
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">' + inner + "</svg>";

  /* ---- 6 motifs (subtle; extra faintness applied via CSS opacity) ---- */

  // 1. Mountains & rising sun (산과 해)
  const mountains = (c) =>
    wrap(
      '<circle cx="930" cy="190" r="95" fill="' + c.accent + '" opacity="0.55"/>' +
      '<path d="M0 610 L210 470 L370 555 L560 410 L770 540 L980 430 L1200 560 L1200 800 L0 800 Z" fill="' + c.line + '" opacity="0.5"/>' +
      '<path d="M0 700 L270 560 L500 665 L730 545 L980 650 L1200 570 L1200 800 L0 800 Z" fill="' + c.line + '" opacity="0.32"/>'
    );

  // 2. Hanok rooflines (기와 지붕)
  const hanok = (c) => {
    let s = "";
    for (let i = 0; i < 3; i++) {
      const y = 360 + i * 150, x = 60 + i * 120;
      s += '<path d="M' + x + ' ' + y + ' Q600 ' + (y - 120) + ' ' + (1140 - i * 40) + ' ' + y +
        ' L' + (1120 - i * 40) + ' ' + (y + 26) + ' Q600 ' + (y - 86) + ' ' + (x + 20) + ' ' + (y + 26) + ' Z" fill="' + c.line + '" opacity="' + (0.4 - i * 0.08) + '"/>';
    }
    return wrap(s);
  };

  // 3. Dancheong-style repeating geometric motif (단청 문양)
  const dancheong = (c) => {
    let cells = "";
    for (let gx = 0; gx < 1300; gx += 200)
      for (let gy = 0; gy < 900; gy += 200) {
        cells += '<circle cx="' + (gx + 100) + '" cy="' + (gy + 100) + '" r="46" fill="none" stroke="' + c.line + '" stroke-width="6" opacity="0.5"/>' +
          '<circle cx="' + (gx + 100) + '" cy="' + (gy + 100) + '" r="18" fill="' + c.accent + '" opacity="0.45"/>' +
          '<path d="M' + (gx + 100) + ' ' + (gy + 46) + ' L' + (gx + 100) + ' ' + (gy + 154) + ' M' + (gx + 46) + ' ' + (gy + 100) + ' L' + (gx + 154) + ' ' + (gy + 100) + '" stroke="' + c.warm + '" stroke-width="5" opacity="0.4"/>';
      }
    return wrap(cells);
  };

  // 4. Hangeul characters (한 · 국 · 어)
  const hangeul = (c) =>
    wrap(
      '<g font-family="Noto Sans KR, sans-serif" font-weight="900" fill="' + c.line + '">' +
      '<text x="60" y="430" font-size="380" opacity="0.16">한</text>' +
      '<text x="470" y="600" font-size="300" opacity="0.12" fill="' + c.accent + '">국</text>' +
      '<text x="850" y="360" font-size="330" opacity="0.14">어</text>' +
      "</g>"
    );

  // 5. Pine branch & crane (소나무와 학)
  const pineCrane = (c) =>
    wrap(
      '<path d="M0 120 Q260 200 470 150 Q650 110 760 200" fill="none" stroke="' + c.line + '" stroke-width="10" opacity="0.4"/>' +
      '<g stroke="' + c.line + '" stroke-width="7" opacity="0.38" fill="none">' +
      '<path d="M180 150 l-40 -60 M300 165 l30 -66 M430 150 l-26 -64 M560 165 l36 -58"/></g>' +
      '<g opacity="0.42" fill="' + c.line + '"><ellipse cx="900" cy="560" rx="70" ry="26"/>' +
      '<path d="M900 540 q40 -70 96 -80 q-30 30 -30 70 z"/>' +
      '<path d="M840 560 l-46 120 M860 560 l-26 130" stroke="' + c.line + '" stroke-width="6"/>' +
      '<circle cx="978" cy="470" r="12"/></g>'
    );

  // 6. Cheongsachorong lanterns (청사초롱)
  const lanterns = (c) => {
    let s = "";
    const xs = [220, 520, 820, 1080], drop = [140, 240, 180, 300];
    xs.forEach((x, i) => {
      const y = drop[i];
      s += '<line x1="' + x + '" y1="0" x2="' + x + '" y2="' + y + '" stroke="' + c.line + '" stroke-width="4" opacity="0.35"/>' +
        '<rect x="' + (x - 46) + '" y="' + y + '" width="92" height="120" rx="42" fill="none" stroke="' + c.line + '" stroke-width="7" opacity="0.45"/>' +
        '<rect x="' + (x - 46) + '" y="' + (y + 40) + '" width="92" height="40" fill="' + (i % 2 ? c.accent : c.warm) + '" opacity="0.4"/>' +
        '<line x1="' + x + '" y1="' + (y + 120) + '" x2="' + x + '" y2="' + (y + 160) + '" stroke="' + c.accent + '" stroke-width="4" opacity="0.4"/>';
    });
    return wrap(s);
  };

  const scenes = [mountains, hanok, dancheong, hangeul, pineCrane, lanterns];

  function render() {
    const c = palette();
    const scene = scenes[dayIndex() % scenes.length];
    const uri = "data:image/svg+xml;utf8," + encodeURIComponent(scene(c));
    let el = document.getElementById("bgArt");
    if (!el) {
      el = document.createElement("div");
      el.id = "bgArt";
      el.className = "bg-art";
      el.setAttribute("aria-hidden", "true");
      document.body.insertBefore(el, document.body.firstChild);
    }
    el.style.backgroundImage = 'url("' + uri + '")';
  }

  // redraw when the day/night theme flips (colors change)
  try {
    new MutationObserver((muts) => {
      if (muts.some((m) => m.attributeName === "data-theme")) render();
    }).observe(document.documentElement, { attributes: true });
  } catch (e) {}

  if (document.readyState !== "loading") render();
  else document.addEventListener("DOMContentLoaded", render);
})();

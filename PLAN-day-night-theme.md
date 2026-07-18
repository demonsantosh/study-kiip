# Plan — Day / Night Theme Toggle (Study KIIP)

Goal: add a **light (day)** and **dark (night)** theme with a toggle button in the header. The app remembers the choice and applies it instantly with no flash of the wrong theme. No functional/content changes — purely presentation.

This is a written plan to hand off; no code has been changed.

---

## Why this is a small, low-risk change

`css/styles.css` already drives almost all colors from CSS custom properties in `:root` (`--bg`, `--surface`, `--ink`, `--brand`, `--line`, etc.). That means a dark theme is mostly a second set of values for those same variables — the HTML and JS barely change. The only cleanup needed is moving ~29 remaining hardcoded hex colors that are scattered in the stylesheet into variables so they flip too.

---

## Approach: `data-theme` attribute + CSS variable overrides

Standard, offline-friendly, works on `file://` and Vercel. No libraries.

- Light stays the default (current look).
- Dark is an override block keyed on `html[data-theme="dark"]`.
- A tiny inline script in `<head>` sets the theme **before first paint** to avoid a white flash.
- Choice persisted in `localStorage` (available in the real app; the "no localStorage" rule only applies to Claude.ai artifacts, not this deployed site).

---

## Step 1 — Audit & consolidate colors (css/styles.css)

**Audited — exact list (line numbers as of this audit).** The base is already variable-driven (`body` → `var(--bg)`/`var(--ink)`, `a` → `var(--brand-2)`), so only these hardcoded literals need changing:

Must fix (would stay light in dark mode):
- Line 44 — topbar `background: rgba(255,255,255,0.92)` → new var `--topbar-bg` (light: same; dark: a translucent dark, e.g. `rgba(15,20,32,0.92)`)
- Line 68 — `#searchInput:focus { background: #fff }` → `var(--surface)`
- Line 71 — card `background: #fff` → `var(--surface)`
- Line 191 — `.fc-back { background: #fff }` → `var(--surface)`
- Line 300 — `.study-search:focus { background: #fff }` → `var(--surface)`
- Line 251 — `.l-note { background: #fff7e6; border: 1px solid #ffe2ad }` → `var(--note-bg)` / `var(--note-line)`
- Line 151 — `.culture { ... border: 1px solid #cdeede }` → `var(--ok-line)` (or reuse a soft border var)
- Line 208 — `.mt-banner { ... border: 1px solid #cdd8f7 }` → `var(--brand-line)`

Leave as-is (white text on brand/gradient — correct in both themes): lines 33 (brand), 87 (hero), 164 (fc-front), 195 (btn-primary), 215 (lh-page).

Add the new vars to `:root` (light values) and to the `html[data-theme="dark"]` block (Step 2).

Deliverable of this step: the light theme looks identical to now, but every theme-relevant color comes from a variable. (~8 edits, not a broad sweep.)

## Step 1b — Confirmed theme-safe (no action needed)

Verified during audit so the implementer doesn't re-investigate:
- No inline `style="color/background"` anywhere in `index.html`.
- JS-injected colors are already variables: `app.js:892` (`var(--ink-soft)`), `app.js:1083` (`var(--brand-soft)`).
- All inline styles emitted from JS template strings (`app.js` lines 204, 763, 803, 805, 1065, 1116, 1118) are **layout-only** — margins, padding, `box-shadow:none`, `border:none`, font-weight. No colors, so nothing bypasses the theme.
- `--brand-2` is defined (`#3457d5`) — no dangling variable refs.
- Optional polish: `<meta name="theme-color" content="#1d3a8a">` in `index.html` sets the mobile browser chrome color; to make it follow the theme, update it from `initTheme()` (set to `--surface`/brand per theme). Minor, not required.

## Step 2 — Add the dark palette (css/styles.css)

Add one block after `:root`:

```css
html[data-theme="dark"] {
  --bg: #0f1420;
  --surface: #171e2e;
  --bg-elevated: #1e2740;
  --ink: #e7ecf6;
  --ink-soft: #9aa8c4;
  --line: #2a3450;
  --brand: #7d9bff;         /* lighten brand so it reads on dark */
  --brand-soft: #1b2547;
  --accent: #ff7a63;
  --ok: #34c993;  --ok-soft: #123a2c;
  --warn: #ff6b66; --warn-soft: #3a1b1b;
  --ko: #7d9bff;  --en: #e7ecf6;  --ne: #e0b872;
  --shadow: 0 6px 24px rgba(0,0,0,0.45);
  --shadow-sm: 0 2px 8px rgba(0,0,0,0.35);
}
```

(Exact values to be tuned during review — targets: body text ≥ 7:1 contrast, UI text ≥ 4.5:1.)

Also add a smooth transition once, e.g. `body { transition: background-color .2s, color .2s; }`.

## Step 3 — Toggle button (index.html)

Add a button in the existing `.topbar`, next to `#langSelect`:

```html
<button id="themeToggle" class="theme-toggle" aria-label="Toggle day/night theme" aria-pressed="false">
  <span class="theme-icon" aria-hidden="true">🌙</span>
</button>
```

Style it to match the existing header controls (same height/radius as the language `<select>`). Icon swaps 🌙 (offer dark) / ☀️ (offer light).

## Step 4 — No-flash init script (index.html `<head>`, before the stylesheet link)

```html
<script>
  (function () {
    try {
      var saved = localStorage.getItem('kiip_theme');
      var sysDark = window.matchMedia && matchMedia('(prefers-color-scheme: dark)').matches;
      var theme = saved || (sysDark ? 'dark' : 'light');
      document.documentElement.setAttribute('data-theme', theme);
    } catch (e) {}
  })();
</script>
```

This runs synchronously in `<head>`, so the correct palette is applied before the body renders.

## Step 5 — Toggle logic (js/app.js)

On startup (after DOM ready): read current `data-theme`, set the button icon + `aria-pressed`, then wire the click:

```js
function initTheme() {
  var root = document.documentElement;
  var btn = document.getElementById('themeToggle');
  function paint() {
    var dark = root.getAttribute('data-theme') === 'dark';
    if (btn) {
      btn.querySelector('.theme-icon').textContent = dark ? '☀️' : '🌙';
      btn.setAttribute('aria-pressed', String(dark));
    }
  }
  paint();
  if (btn) btn.addEventListener('click', function () {
    var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('kiip_theme', next); } catch (e) {}
    paint();
  });
}
```

Call `initTheme()` from the existing init path. (Optional: also listen to `prefers-color-scheme` changes and follow the OS *only* when the user hasn't set a manual preference.)

## Step 6 — Localize the toggle label (js/ui-i18n.js) — optional

Add a UI key like `theme_toggle` in all 13 languages for the `aria-label`/tooltip, matching how the other 40 UI keys are handled. Not strictly required (icon-only works), but consistent with the rest of the app.

## Step 7 — Verify (both themes × key surfaces)

Check in **both** themes, in a couple of languages including an RTL one (Hebrew) and Tamil/Nepali:

- Home / level cards, lesson page (KO/EN/selected titles), the 4 lesson tabs
- Vocab table **and** its mobile stacked-card form (≤720px)
- Flashcards (front/back), quiz states (correct = `--ok`, wrong = `--warn`)
- Search dropdown, top nav, language `<select>`
- Mobile top bar reflow (the responsive breakpoints already in place)
- Confirm no white flash on reload in dark mode
- Contrast pass on body text and soft/secondary text in dark

## Files touched

- `index.html` — head init script + toggle button
- `css/styles.css` — consolidate colors into vars, add `html[data-theme="dark"]` block + transition + button styles
- `js/app.js` — `initTheme()` + wire toggle
- `js/ui-i18n.js` — optional localized label

## Out of scope (can be follow-ups)

- A dedicated "side-by-side" comparison page (this plan is the in-app toggle only).
- Per-lesson or scheduled auto day/night switching beyond the OS default.
- Theming the flashcard/print/export styles if any exist separately.

## Rough effort

Half a day: Step 1 (color audit) is the bulk; Steps 2–5 are quick; Step 7 (cross-theme/language QA) is the rest.

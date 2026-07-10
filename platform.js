/* ══════════════════════════════════════════════════════════════════════════
   PlanWise — shared platform shell
   ----------------------------------------------------------------------------
   Renders the master top bar (PlanWise logo + app switcher + theme toggle) and
   owns the two cross-app concerns: shared light/dark theme and active-app
   highlighting. Each app file stays fully independent; the only contract is:

     1. <link rel="stylesheet" href="platform.css">  + <script src="platform.js"></script>
     2. <body data-app="<id>">                         (id must match an APPS entry)
     3. <div id="pw-bar"></div>                         (mount point, first in body)
     4. Re-render charts on the 'pw-theme-change' window event.

   ADD A NEW APP  →  drop a new HTML file + add ONE entry to APPS below.
   ══════════════════════════════════════════════════════════════════════════ */
(function () {
  // ── App registry — single source of truth for the switcher ───────────────
  const APPS = [
    { id: 'retiresmart',     name: 'RetireSmart',    icon: '💼', href: 'index.html' },
    { id: 'happyhome',       name: 'India Home',     icon: '🏡', href: 'mortgage.html' },
    { id: 'canadamortgage',  name: 'Maple Home',     icon: '🍁', href: 'canadamortgage.html' },
    { id: 'dreamcar',        name: 'Dream Car',      icon: '🚗', href: 'dreamcar.html' },
    { id: 'alphaforge',      name: 'AlphaForge',     icon: '⚒️', href: 'alphaforge.html' },
    { id: 'harness',         name: 'Harness Lab',    icon: '🎓', href: 'harness.html' },
    { id: 'kids',            name: 'Kids',           icon: '🧒', href: 'kids.html', group: ['kids','spark','abc','listen','cosmos'] },
  ];

  // ── Kid apps that live UNDER the "Kids" tab ───────────────────────────────
  // ADD A KID APP  →  one entry here + its HTML file (the Kids hub + sub-nav
  // auto-update; set its <body data-app="<id>"> and add the id to the group above).
  const KIDS = [
    { id: 'spark',  name: 'Spark',  icon: '⭐', href: 'spark.html',  blurb: 'What kind of learner is your child?' },
    { id: 'abc',    name: 'ABC',    icon: '🔤', href: 'abc.html',    blurb: 'Learn the letters, then play' },
    { id: 'listen', name: 'Listen', icon: '👂', href: 'listen.html', blurb: 'Fun games to grow listening' },
    { id: 'cosmos', name: 'Cosmos', icon: '🪐', href: 'cosmos.html', blurb: 'Fly through the solar system, galaxy & universe in 3D' },
  ];

  const THEME_KEY = 'pw_theme';

  // ── Apply saved theme IMMEDIATELY (before paint) to avoid a flash ─────────
  // Migrates from RetireSmart's legacy 'rs_theme' key if present.
  const savedTheme =
    localStorage.getItem(THEME_KEY) || localStorage.getItem('rs_theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);

  const isDark = () =>
    document.documentElement.getAttribute('data-theme') === 'dark';

  function updateThemeBtn() {
    const b = document.getElementById('pw-theme-btn');
    if (b) b.textContent = isDark() ? '☀️ Light' : '🌙 Dark';
  }

  function toggleTheme() {
    const next = isDark() ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem(THEME_KEY, next);
    localStorage.setItem('rs_theme', next); // keep legacy key in sync (back-compat)
    updateThemeBtn();
    // Let the active app re-render charts / theme-dependent UI.
    window.dispatchEvent(new CustomEvent('pw-theme-change', { detail: { theme: next } }));
  }

  function currentAppId() {
    return (document.body && document.body.getAttribute('data-app')) || '';
  }

  function renderBar() {
    const mount = document.getElementById('pw-bar');
    if (!mount) return;
    const active = currentAppId();

    const pills = APPS.map((a) => {
      if (a.soon) {
        return `<span class="pw-app soon" title="Coming soon">${a.icon} ${a.name} <span class="pw-soon">Soon</span></span>`;
      }
      const isActive = a.id === active || (a.group && a.group.includes(active));
      const cls = isActive ? 'pw-app active' : 'pw-app';
      // The active app links to itself (harmless); others navigate across files.
      return `<a class="${cls}" href="${a.href}">${a.icon} ${a.name}</a>`;
    }).join('');

    mount.className = 'pw-bar';
    mount.innerHTML = `
      <div class="pw-bar-in">
        <div class="pw-logo">🎯 PlanWise</div>
        <nav class="pw-apps">${pills}</nav>
        <button class="pw-theme" id="pw-theme-btn" type="button" aria-label="Toggle theme"></button>
      </div>`;

    updateThemeBtn();
    document.getElementById('pw-theme-btn').addEventListener('click', toggleTheme);
  }

  // Renders the kid sub-nav (Spark · ABC · Listen …) into any <div id="pw-kidnav">.
  function renderKidNav() {
    const mount = document.getElementById('pw-kidnav');
    if (!mount) return;
    const active = currentAppId();
    mount.className = 'pw-kidnav';
    mount.innerHTML =
      `<a class="ktab ktab-home ${active === 'kids' ? 'active' : ''}" href="kids.html">🧒 Kids</a>`
      + KIDS.map(k => `<a class="ktab ${k.id === active ? 'active' : ''}" href="${k.href}">${k.icon} ${k.name}</a>`).join('');
  }

  // Expose a tiny API in case an app wants it (the Kids hub reads KIDS).
  window.PlanWise = { APPS, KIDS, toggleTheme, isDark };

  function boot() { renderBar(); renderKidNav(); }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();

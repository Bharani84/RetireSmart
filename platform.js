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
      const cls = a.id === active ? 'pw-app active' : 'pw-app';
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

  // Expose a tiny API in case an app wants it.
  window.PlanWise = { APPS, toggleTheme, isDark };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderBar);
  } else {
    renderBar();
  }
})();

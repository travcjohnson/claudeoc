/* Slide engine — Claude for Leaders · Travis Johnson · AuraPath AI edition.
   Forké de conf-public.js : même API window.Slides (navigation pilotée par
   app.js générique), mêmes animations signature (compteurs, machine à écrire,
   vibe-loop, pluie Matrix). Seuls changent les prompts d'accroche, calibrés
   pour une audience de dirigeants, et le libellé de titre. */

(function () {
  'use strict';

  if (typeof BroadcastChannel !== 'undefined') {
    try { window._broadcast = new BroadcastChannel('slides'); } catch (e) {}
  }

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const slides = Array.from(document.querySelectorAll('.slide[data-slide]'));
  const TOTAL = slides.length;
  let currentIdx = 1;
  const timers = [];

  function getEl(n) {
    return document.querySelector('.slide[data-slide="' + n + '"]');
  }

  function clearTimers() {
    while (timers.length) clearTimeout(timers.pop());
  }

  /* ——— Compteur : 0 -> valeur, séparateur de milliers suisse (1'200) ——— */
  function formatSwiss(n) {
    return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  function runCounters(el) {
    el.querySelectorAll('[data-count]').forEach(function (node) {
      const target = parseInt(node.getAttribute('data-count'), 10);
      if (isNaN(target)) return;
      const prefix = node.getAttribute('data-prefix') || '';
      const suffix = node.getAttribute('data-suffix') || '';
      if (reduced) { node.textContent = prefix + formatSwiss(target) + suffix; return; }
      const dur = 1100;
      const start = performance.now();
      function tick(now) {
        const t = Math.min(1, (now - start) / dur);
        const e = 1 - Math.pow(1 - t, 3); // ease-out cubic
        const val = Math.round(target * e);
        node.textContent = prefix + formatSwiss(val) + suffix;
        if (t < 1) requestAnimationFrame(tick);
      }
      node.textContent = prefix + '0' + suffix;
      requestAnimationFrame(tick);
    });
  }

  /* ——— Machine à écrire : tape le texte du nœud lettre à lettre ——— */
  function runTypewriter(el) {
    el.querySelectorAll('[data-typewriter]').forEach(function (node) {
      const full = node.getAttribute('data-text') || node.textContent;
      node.setAttribute('data-text', full);
      if (reduced) { node.textContent = full; return; }
      node.textContent = '';
      node.classList.add('is-typing');
      const delay = parseInt(node.getAttribute('data-tw-start'), 10) || 350;
      let i = 0;
      function type() {
        if (i <= full.length) {
          node.textContent = full.slice(0, i);
          i++;
          timers.push(setTimeout(type, 16));
        } else {
          node.classList.remove('is-typing');
        }
      }
      timers.push(setTimeout(type, delay));
    });
  }

  /* ——— Vibe-loop : problèmes de dirigeant résolus avec du code, en boucle ——— */
  const VIBE_PROMPTS = [
    "build my executive committee dashboard",
    "turn these 200 customer reviews into a summary for Monday",
    "automate my teams' monthly reporting",
    "create the internal tool my department has wanted for a year",
    "compare our supplier offers, keep the best value",
    "prepare the briefing note for the board"
  ];
  let vibeTimer = null;

  function stopVibe() {
    if (vibeTimer) { clearTimeout(vibeTimer); vibeTimer = null; }
  }

  function startVibe(el) {
    const t = el.querySelector('.gp-vibe__text');
    if (!t) return;
    if (reduced) { t.textContent = VIBE_PROMPTS[0]; return; }
    let pi = 0;
    function typePrompt() {
      const full = VIBE_PROMPTS[pi];
      let i = 0;
      (function typeChar() {
        if (i <= full.length) {
          t.textContent = full.slice(0, i); i++;
          vibeTimer = setTimeout(typeChar, 38);
        } else {
          vibeTimer = setTimeout(erasePrompt, 2000);
        }
      })();
      function erasePrompt() {
        if (i > 0) {
          i--; t.textContent = full.slice(0, i);
          vibeTimer = setTimeout(erasePrompt, 16);
        } else {
          pi = (pi + 1) % VIBE_PROMPTS.length;
          vibeTimer = setTimeout(typePrompt, 350);
        }
      }
    }
    typePrompt();
  }

  /* ——— Aide-mémoire recherchable (onglets + recherche) ——— */
  function bindCheatsheet(el) {
    const root = el.classList.contains('cheatsheet') ? el : el.querySelector('.cheatsheet');
    if (!root) return;
    const tabs = root.querySelectorAll('.cheatsheet__tab');
    const items = root.querySelectorAll('.cheatsheet__item');
    const search = root.querySelector('.cheatsheet__search');
    const empty = root.querySelector('.cheatsheet__empty');

    function applyFilter() {
      const activeTab = root.querySelector('.cheatsheet__tab.is-active');
      const cat = activeTab ? activeTab.getAttribute('data-tab') : null;
      const q = (search.value || '').trim().toLowerCase();
      let n = 0;
      items.forEach((it) => {
        const matchesCat = it.getAttribute('data-cat') === cat;
        const text = (it.textContent || '').toLowerCase();
        const matchesQuery = q === '' || text.includes(q);
        const visible = q !== '' ? matchesQuery : (matchesCat && matchesQuery);
        it.classList.toggle('is-hidden', !visible);
        if (visible) n += 1;
      });
      if (empty) empty.hidden = n > 0;
    }

    if (!root._bound) {
      tabs.forEach((tab) => tab.addEventListener('click', () => {
        tabs.forEach((t) => { t.classList.remove('is-active'); t.setAttribute('aria-selected', 'false'); });
        tab.classList.add('is-active');
        tab.setAttribute('aria-selected', 'true');
        if (search.value) search.value = '';
        applyFilter();
      }));
      search.addEventListener('input', applyFilter);
      root._bound = true;
    }

    tabs.forEach((t, i) => { t.classList.toggle('is-active', i === 0); t.setAttribute('aria-selected', i === 0 ? 'true' : 'false'); });
    if (search) search.value = '';
    applyFilter();
  }

  /* ——— Pluie de code « Matrix » orange (moitié droite des slides sombres) ——— */
  let matrixRAF = null;
  const MX_CHARS = "const=>(){}[]<>;:$#/*+claude01_.MCP→".split('');

  function stopMatrix() {
    if (matrixRAF) { cancelAnimationFrame(matrixRAF); matrixRAF = null; }
  }

  function startMatrix(el) {
    const c = el.querySelector('.gp-matrix');
    if (!c || reduced) return;
    const ctx = c.getContext('2d');
    if (!ctx) return;
    const w = c.offsetWidth, h = c.offsetHeight;
    if (!w || !h) return;
    c.width = w; c.height = h;
    const fontSize = 18;
    const cols = Math.max(1, Math.floor(w / fontSize));
    const rows = h / fontSize;
    const drops = [];
    for (let i = 0; i < cols; i++) drops[i] = Math.random() * rows;
    ctx.fillStyle = '#0F0F0F';
    ctx.fillRect(0, 0, w, h);
    ctx.font = fontSize + 'px JetBrains Mono, monospace';
    function frame() {
      ctx.fillStyle = 'rgba(15,15,15,0.07)';
      ctx.fillRect(0, 0, w, h);
      for (let i = 0; i < cols; i++) {
        const ch = MX_CHARS[Math.floor(Math.random() * MX_CHARS.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;
        ctx.fillStyle = Math.random() > 0.88 ? '#FC750C' : '#D97757';
        ctx.fillText(ch, x, y);
        if (y > h && Math.random() > 0.94) drops[i] = 0;
        drops[i] += 0.7;
      }
      matrixRAF = requestAnimationFrame(frame);
    }
    frame();
  }

  function animateSlide(el) {
    if (!el) return;
    clearTimers();
    stopVibe();
    stopMatrix();
    runCounters(el);
    runTypewriter(el);
    startVibe(el);
    bindCheatsheet(el);
    startMatrix(el);
    try {
      document.querySelectorAll('video').forEach(function (v) {
        if (!el.contains(v)) v.pause();
      });
    } catch (e) {}
  }

  function goto(n) {
    if (n < 1 || n > TOTAL || n === currentIdx) return;
    const prev = getEl(currentIdx);
    if (prev) prev.classList.remove('is-active');
    const next = getEl(n);
    if (!next) return;
    next.classList.add('is-active');
    currentIdx = n;
    animateSlide(next);
    if (window._broadcast) {
      try { window._broadcast.postMessage({ type: 'slide', n: n }); } catch (e) {}
    }
    document.title = 'Claude Code for Founders · ' + n + '/' + TOTAL;
  }

  function next() { goto(Math.min(currentIdx + 1, TOTAL)); }
  function prev() { goto(Math.max(currentIdx - 1, 1)); }
  function current() { return currentIdx; }
  function total() { return TOTAL; }

  function replay() {
    const el = getEl(currentIdx);
    if (!el) return;
    el.classList.remove('is-active');
    void el.offsetWidth;
    el.classList.add('is-active');
    animateSlide(el);
  }

  function onKey() {}
  function register() {}

  window.Slides = {
    register: register, goto: goto, next: next, prev: prev,
    current: current, total: total, replay: replay, onKey: onKey
  };
})();

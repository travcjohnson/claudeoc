/* App entrypoint : scaling canvas, navigation clavier, black screen,
   fullscreen, mode orateur, broadcast vers la fenêtre speaker. */

(function () {
  'use strict';

  let speakerWindow = null;

  // BroadcastChannel : synchro avec speaker.html.
  // Fallback silencieux si non supporté (contexte file:// très ancien).
  if (typeof BroadcastChannel !== 'undefined') {
    try { window._broadcast = new BroadcastChannel('slides'); } catch (e) {}
  }

  /* ——— Scaling du canvas 1920×1080 — bypass sur mobile ——— */

  const mobileQuery = window.matchMedia('(max-width: 900px)');

  function resize() {
    const root = document.querySelector('.slides-root');
    if (!root) return;

    // Sur mobile, pas de transform : le CSS @media gère une mise en page fluide.
    if (mobileQuery.matches) {
      root.style.setProperty('--scale', '1');
      return;
    }

    const W = window.innerWidth;
    const H = window.innerHeight;
    const scale = Math.min(W / 1920, H / 1080);
    root.style.setProperty('--scale', String(scale));
  }

  window.addEventListener('resize', resize);
  window.addEventListener('orientationchange', function () {
    setTimeout(resize, 120); // laisse le temps au viewport de se mettre à jour
  });


  /* ——— Touch gestures : swipe gauche/droite pour naviguer ——— */

  let touchStartX = 0;
  let touchStartY = 0;
  let touchStartTime = 0;
  let touchActive = false;

  function onTouchStart(e) {
    if (e.touches.length !== 1) return;
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
    touchStartTime = Date.now();
    touchActive = true;
  }

  function onTouchEnd(e) {
    if (!touchActive) return;
    touchActive = false;

    // Jump sheet ouverte : pas de swipe entre slides.
    if (document.body.classList.contains('has-jump-open')) return;

    const dx = e.changedTouches[0].clientX - touchStartX;
    const dy = e.changedTouches[0].clientY - touchStartY;
    const dt = Date.now() - touchStartTime;

    // Swipe horizontal franc : > 60px, plus horizontal que vertical, rapide.
    if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.4 && dt < 600) {
      if (dx < 0) Slides.next();
      else Slides.prev();
      e.preventDefault();
    }
  }


  /* ——— Black screen (B) ——— */

  function toggleBlack() {
    document.body.classList.toggle('is-black');
  }


  /* ——— Fullscreen (F ou bouton nav-bar) ——— */

  function toggleFullscreen() {
    const root = document.documentElement;
    if (!document.fullscreenElement && !document.webkitFullscreenElement) {
      const req = root.requestFullscreen || root.webkitRequestFullscreen || root.mozRequestFullScreen || root.msRequestFullscreen;
      if (req) req.call(root).catch(function () {});
    } else {
      const exit = document.exitFullscreen || document.webkitExitFullscreen || document.mozCancelFullScreen || document.msExitFullscreen;
      if (exit) exit.call(document).catch(function () {});
    }
  }

  function onFullscreenChange() {
    const active = !!(document.fullscreenElement || document.webkitFullscreenElement);
    document.body.classList.toggle('is-fullscreen', active);
  }

  document.addEventListener('fullscreenchange', onFullscreenChange);
  document.addEventListener('webkitfullscreenchange', onFullscreenChange);


  /* ——— Mode orateur (P) ——— */

  function openSpeaker() {
    if (speakerWindow && !speakerWindow.closed) {
      speakerWindow.focus();
      return;
    }
    speakerWindow = window.open('./speaker.html', 'speaker', 'width=960,height=720');
  }


  /* ——— Navigation clavier ——— */

  function onKeyDown(e) {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
    const k = e.key;

    // Touches globales.
    if (k === 'ArrowRight' || k === ' ' || k === 'PageDown') {
      Slides.next(); e.preventDefault(); return;
    }
    if (k === 'ArrowLeft' || k === 'PageUp') {
      Slides.prev(); e.preventDefault(); return;
    }
    if (k === 'Home') { Slides.goto(1); e.preventDefault(); return; }
    if (k === 'End')  { Slides.goto(Slides.total()); e.preventDefault(); return; }
    if (k === 'b' || k === 'B') { toggleBlack(); e.preventDefault(); return; }
    if (k === 'f' || k === 'F') { toggleFullscreen(); e.preventDefault(); return; }
    if (k === 'p' || k === 'P') { openSpeaker(); e.preventDefault(); return; }
    if (k === 'r' || k === 'R') { Slides.replay(); e.preventDefault(); return; }
    if (k === 'Escape') {
      // Si la jump sheet est ouverte, la fermer en priorité.
      if (isJumpOpen()) { closeJumpSheet(); e.preventDefault(); return; }
      // Si le panneau review est ouvert, laisser review.js le fermer.
      const reviewPanel = document.getElementById('review-panel');
      if (reviewPanel && !reviewPanel.hasAttribute('hidden') && reviewPanel.classList.contains('is-open')) {
        return;
      }
      Grid.toggle(); e.preventDefault(); return;
    }

    // Saut direct par numéro : tape G puis les chiffres puis Entrée.
    if (k === 'g' || k === 'G') { startNumericJump(); e.preventDefault(); return; }

    // Tout le reste est passé à la slide courante (pour anims internes).
    Slides.onKey(k);
  }


  /* ——— Saut direct par numéro (G + chiffres + Entrée) ——— */

  let jumpBuffer = '';
  let jumpActive = false;
  let jumpTimeout = null;

  function startNumericJump() {
    jumpActive = true;
    jumpBuffer = '';
    clearTimeout(jumpTimeout);
    jumpTimeout = setTimeout(commitJump, 1600);
    document.addEventListener('keydown', handleJumpKey, true);
  }

  function handleJumpKey(e) {
    if (!jumpActive) return;
    const k = e.key;
    if (/^[0-9]$/.test(k)) {
      jumpBuffer += k;
      e.stopPropagation();
      e.preventDefault();
      clearTimeout(jumpTimeout);
      jumpTimeout = setTimeout(commitJump, 900);
    } else if (k === 'Enter') {
      e.stopPropagation();
      e.preventDefault();
      commitJump();
    } else {
      cancelJump();
    }
  }

  function commitJump() {
    if (jumpBuffer) {
      const n = parseInt(jumpBuffer, 10);
      if (!isNaN(n)) Slides.goto(n);
    }
    cancelJump();
  }

  function cancelJump() {
    jumpActive = false;
    jumpBuffer = '';
    clearTimeout(jumpTimeout);
    document.removeEventListener('keydown', handleJumpKey, true);
  }


  /* ——— Mise à jour du compteur et du hint ——— */

  function updateCounter() {
    const counter = document.querySelector('.nav-bar__counter');
    if (counter) {
      counter.textContent = Slides.current() + ' / ' + Slides.total();
    }
  }

  function updateHash() {
    const n = Slides.current();
    const target = '#' + n;
    if (location.hash !== target) {
      history.replaceState(null, '', target);
    }
  }

  // Wrap Slides.next/prev/goto pour maj auto du compteur + URL + event.
  ['next', 'prev', 'goto'].forEach(function (name) {
    const orig = Slides[name];
    Slides[name] = function () {
      const r = orig.apply(Slides, arguments);
      updateCounter();
      updateHash();
      document.dispatchEvent(new CustomEvent('slidechange', { detail: { n: Slides.current() } }));
      return r;
    };
  });

  // Navigation manuelle via changement d'URL (partage de lien, back/forward).
  window.addEventListener('hashchange', function () {
    const n = parseInt(location.hash.slice(1), 10);
    if (!isNaN(n) && n >= 1 && n <= Slides.total() && n !== Slides.current()) {
      Slides.goto(n);
    }
  });


  /* ——— Souris : mouse-move idle + clic pour avancer ——— */

  let mouseIdleTimer;
  function onMouseMove() {
    document.body.classList.add('mouse-active');
    clearTimeout(mouseIdleTimer);
    mouseIdleTimer = setTimeout(function () {
      document.body.classList.remove('mouse-active');
    }, 2500);
  }

  function onDocClick(e) {
    // Clics sur les boutons de nav.
    const navBtn = e.target.closest('[data-nav]');
    if (navBtn) {
      const action = navBtn.getAttribute('data-nav');
      if (action === 'prev') Slides.prev();
      else if (action === 'next') Slides.next();
      else if (action === 'fullscreen') toggleFullscreen();
      else if (action === 'jump') openJumpSheet();
      return;
    }

    // Clics dans la jump sheet : gérés séparément, on ne propage pas vers "next".
    if (e.target.closest('.jump-sheet')) {
      const jumpAction = e.target.closest('[data-jump]');
      if (jumpAction) {
        const a = jumpAction.getAttribute('data-jump');
        if (a === 'close') closeJumpSheet();
      }
      const gridBtn = e.target.closest('.jump-sheet__grid button[data-slide-jump]');
      if (gridBtn) {
        const n = parseInt(gridBtn.getAttribute('data-slide-jump'), 10);
        if (!isNaN(n)) { Slides.goto(n); closeJumpSheet(); }
      }
      e.stopPropagation();
      return;
    }

    // Clics sur les boutons "copier" (data-copy="...").
    const copyBtn = e.target.closest('[data-copy]');
    if (copyBtn) {
      e.stopPropagation();
      const text = copyBtn.getAttribute('data-copy');
      const writeToClipboard = function () {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          return navigator.clipboard.writeText(text);
        }
        // Fallback ancien navigateur
        const ta = document.createElement('textarea');
        ta.value = text;
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.select();
        try { document.execCommand('copy'); } catch (err) {}
        document.body.removeChild(ta);
        return Promise.resolve();
      };
      writeToClipboard().then(function () {
        copyBtn.classList.add('is-copied');
        setTimeout(function () {
          copyBtn.classList.remove('is-copied');
        }, 1500);
      }).catch(function () {});
      return;
    }

    // Clics dans la barre de nav mais hors bouton : ignore.
    if (e.target.closest('.nav-bar')) return;

    // Clics dans le panneau review : ne pas avancer (textarea, boutons…).
    if (e.target.closest('.review-panel')) return;

    // Clics sur le hint : ignore.
    if (e.target.closest('.hint')) return;

    // Clics dans la slide référentiel (onglets, recherche, items) : ignore.
    if (e.target.closest('.cheatsheet')) return;

    // Liens externes <a> : on laisse le navigateur ouvrir la cible, on n'avance pas.
    // Si le <a> a target="_blank" il ouvrira dans un nouvel onglet, on reste sur la prez.
    const link = e.target.closest('a[href]');
    if (link) {
      // Forcer target="_blank" pour tout lien http(s) qui n'en aurait pas.
      const href = link.getAttribute('href') || '';
      if (/^https?:\/\//i.test(href) && link.getAttribute('target') !== '_blank') {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener');
      }
      return;
    }

    // Black screen : on ne veut pas avancer par clic.
    if (document.body.classList.contains('is-black')) return;

    // Sinon clic sur la slide → suivant.
    Slides.next();
  }


  /* ——— Molette : navigation entre slides (debounced) ——— */

  let wheelLock = false;
  function onWheel(e) {
    if (wheelLock) return;
    // Si la jump sheet est ouverte, laisser la grille scroller normalement.
    if (document.body.classList.contains('has-jump-open')) return;
    if (Math.abs(e.deltaY) < 10) return;

    wheelLock = true;
    setTimeout(function () { wheelLock = false; }, 700);

    if (e.deltaY > 0) Slides.next();
    else Slides.prev();

    e.preventDefault();
  }


  /* ——— Jump sheet : modale "aller à la slide" ——— */

  function buildJumpGrid() {
    const grid = document.getElementById('jump-sheet-grid');
    if (!grid || grid.childElementCount) return;
    const total = Slides.total();
    const frag = document.createDocumentFragment();
    for (let i = 1; i <= total; i++) {
      const b = document.createElement('button');
      b.type = 'button';
      b.setAttribute('data-slide-jump', String(i));
      b.setAttribute('role', 'listitem');
      b.setAttribute('aria-label', 'Go to slide ' + i);
      b.textContent = String(i);
      frag.appendChild(b);
    }
    grid.appendChild(frag);
  }

  function refreshJumpCurrent() {
    const grid = document.getElementById('jump-sheet-grid');
    if (!grid) return;
    const cur = String(Slides.current());
    grid.querySelectorAll('button[data-slide-jump]').forEach(function (b) {
      if (b.getAttribute('data-slide-jump') === cur) {
        b.setAttribute('aria-current', 'true');
      } else {
        b.removeAttribute('aria-current');
      }
    });
  }

  function openJumpSheet() {
    const sheet = document.getElementById('jump-sheet');
    if (!sheet) return;
    buildJumpGrid();
    refreshJumpCurrent();
    sheet.removeAttribute('hidden');
    document.body.classList.add('has-jump-open');
    // Scroll la vignette courante dans la vue
    const cur = sheet.querySelector('button[aria-current="true"]');
    if (cur && cur.scrollIntoView) cur.scrollIntoView({ block: 'nearest' });
    // Focus : sur desktop on vise l'input (frappe rapide),
    // sur mobile on évite d'ouvrir le clavier d'emblée (la grille suffit).
    if (!mobileQuery.matches) {
      const input = sheet.querySelector('.jump-sheet__input');
      if (input) setTimeout(function () { input.focus(); input.select(); }, 50);
    }
  }

  function closeJumpSheet() {
    const sheet = document.getElementById('jump-sheet');
    if (!sheet) return;
    sheet.setAttribute('hidden', '');
    document.body.classList.remove('has-jump-open');
    const input = sheet.querySelector('.jump-sheet__input');
    if (input) input.value = '';
  }

  function isJumpOpen() {
    const sheet = document.getElementById('jump-sheet');
    return sheet && !sheet.hasAttribute('hidden');
  }

  function onJumpSubmit(e) {
    if (!e.target.matches('[data-jump="submit"]')) return;
    e.preventDefault();
    const input = e.target.querySelector('.jump-sheet__input');
    if (!input) return;
    const n = parseInt(input.value, 10);
    if (!isNaN(n) && n >= 1 && n <= Slides.total()) {
      Slides.goto(n);
      closeJumpSheet();
    } else {
      input.focus();
      input.select();
    }
  }


  /* ——— Hint d'aide au démarrage ——— */

  function showHint() {
    const hint = document.getElementById('hint');
    if (!hint) return;
    hint.classList.add('is-visible');
    setTimeout(function () {
      hint.classList.remove('is-visible');
    }, 4000);
  }


  /* ——— Boot ——— */

  window.addEventListener('DOMContentLoaded', function () {
    resize();
    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('click', onDocClick);
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('wheel', onWheel, { passive: false });
    document.addEventListener('touchstart', onTouchStart, { passive: true });
    document.addEventListener('touchend', onTouchEnd, { passive: false });
    document.addEventListener('submit', onJumpSubmit);
    document.addEventListener('slidechange', refreshJumpCurrent);

    updateCounter();
    setTimeout(showHint, 800);

    // Curseur visible au démarrage, puis idle au bout de 2.5s sans mouvement.
    onMouseMove();

    // Slide initiale : 1 par défaut, ou via hash (#2 → slide 2).
    const hash = parseInt((location.hash || '').slice(1), 10);
    const start = (!isNaN(hash) && hash >= 1 && hash <= Slides.total()) ? hash : 1;

    const el = document.querySelector('[data-slide="' + start + '"]');
    if (el) el.classList.add('is-active');

    requestAnimationFrame(function () {
      if (start === 1) {
        Slides.replay();
      } else {
        el.classList.remove('is-active');
        Slides.goto(start);
      }
      updateCounter();
    });
  });

})();

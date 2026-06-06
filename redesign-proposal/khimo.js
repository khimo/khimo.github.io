/* ============================================================================
   khimo design system — runtime behaviours
   Pair with khimo.css. All effects are progressive-enhancement and
   reduced-motion aware. Zero dependencies.

   TWO PIECES:
   1) THEME BOOT — must run in <head> BEFORE paint to avoid a flash.
      Copy this inline into <head> (it is intentionally NOT in this file's IIFE):

      <script>try{var t=localStorage.getItem('khimo-theme');
      if(!t&&window.matchMedia&&matchMedia('(prefers-color-scheme: light)').matches)t='light';
      if(t==='light'||t==='dark')document.documentElement.setAttribute('data-theme',t);}catch(e){}</script>

   2) BEHAVIOURS — load this file with <script src="khimo.js"></script> before </body>.
   ========================================================================== */

/* — interactions: scroll-morph badge, scrollspy, theme toggle — */
(function () {
  var root = document.documentElement;
  var standalone = window.self === window.top;        // only morph when top-level, not iframed
  if (standalone) root.classList.add('standalone');
  var heroLogo = document.querySelector('.hero .logo');
  var badge = document.getElementById('brandBadge');
  var prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion:reduce)').matches;

  // scrollspy: highlight the TOC link of the section currently in view
  var navEl = document.querySelector('nav.toc');
  var spy = [].slice.call(document.querySelectorAll('nav.toc a')).map(function (a) {
    return { a: a, t: document.getElementById(a.getAttribute('href').slice(1)) };
  }).filter(function (o) { return o.t; });

  function onScroll() {
    var y = window.pageYOffset || 0;
    // hero logo recedes; coral badge follows (standalone only)
    if (standalone && heroLogo && !prefersReduced) {
      heroLogo.style.opacity = Math.max(0, 1 - y / 240);
      heroLogo.style.transform = 'translateY(' + (-y * 0.12) + 'px) scale(' + (1 - Math.min(.18, y / 1400)) + ')';
    }
    if (badge) badge.classList.toggle('show', y > 150);
    if (spy.length) {
      var line = y + (navEl ? navEl.offsetHeight : 48) + 28;
      var atBottom = (window.innerHeight + y) >= (document.body.scrollHeight - 4);
      var cur = spy[0];
      for (var i = 0; i < spy.length; i++) { if (spy[i].t.offsetTop <= line) cur = spy[i]; }
      if (atBottom) cur = spy[spy.length - 1];
      for (var j = 0; j < spy.length; j++) { spy[j].a.classList.toggle('active', spy[j] === cur); }
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true }); onScroll();

  // footer theme toggle (persisted)
  var tog = document.getElementById('themeToggle');
  function sync() {
    var light = root.getAttribute('data-theme') === 'light';
    if (tog) { tog.setAttribute('aria-pressed', light); var l = tog.querySelector('.tlabel'); if (l) l.textContent = light ? 'Light' : 'Dark'; }
  }
  if (tog) tog.addEventListener('click', function () {
    var light = root.getAttribute('data-theme') === 'light';
    var next = light ? 'dark' : 'light';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('khimo-theme', next); } catch (e) {}
    sync();
  });
  sync();
})();

/* — ghost numerals, coral scroll-progress thread, scroll reveals — */
(function () {
  // ghost section numerals: data-n drives the oversized ::before behind each h2
  [].forEach.call(document.querySelectorAll('h2 .num'), function (n) {
    if (!n.getAttribute('data-n')) n.setAttribute('data-n', n.textContent.trim());
  });

  // coral scroll-progress thread (fixed 2px line at very top)
  var bar = document.getElementById('scrollProgress');
  function prog() {
    if (!bar) return;
    var h = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = (h > 0 ? (window.pageYOffset / h * 100) : 0) + '%';
  }
  window.addEventListener('scroll', prog, { passive: true });
  window.addEventListener('resize', prog, { passive: true }); prog();

  // scroll reveals — fade-up, reduced-motion safe, graceful if unsupported
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion:reduce)').matches;
  if (!reduce && 'IntersectionObserver' in window) {
    var obs = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('is-revealed'); obs.unobserve(e.target); } });
    }, { threshold: .12, rootMargin: '0px 0px -40px 0px' });
    [].forEach.call(document.querySelectorAll('section h2,.lead,.card,.step,.node,.seq'),
      function (el) { el.classList.add('will-reveal'); obs.observe(el); });
  }
})();

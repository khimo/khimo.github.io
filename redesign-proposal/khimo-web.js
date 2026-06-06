/* khimo-web.js — global menu behaviour (burger + dropdown). Zero deps. */

/* ?reveal=1 — immediately reveal all scroll-hidden elements (for screenshots / testing).
   Runs after khimo.js has set up IntersectionObserver so the class additions are not
   fighting the observer setup. A single rAF after load is enough.                      */
if (/[?&]reveal=1/.test(location.search)) {
  window.addEventListener('load', function () {
    requestAnimationFrame(function () {
      document.querySelectorAll('.will-reveal').forEach(function (el) {
        el.classList.add('is-revealed');
      });
      var hero = document.querySelector('.hero-left');
      if (hero) [].forEach.call(hero.children, function (c) {
        c.style.setProperty('animation', 'none', 'important');
        c.style.setProperty('opacity', '1', 'important');
        c.style.setProperty('transform', 'none', 'important');
      });
    });
  });
}

(function () {
  var menu = document.querySelector('.khimo-menu');
  if (!menu) return;

  // mobile burger toggles the whole menu open/closed
  var burger = menu.querySelector('.burger');
  if (burger) burger.addEventListener('click', function () {
    menu.classList.toggle('open');
    burger.setAttribute('aria-expanded', menu.classList.contains('open') ? 'true' : 'false');
  });

  // dropdown panels: click the trigger to toggle; close others
  var groups = menu.querySelectorAll('.has-menu');
  groups.forEach(function (g) {
    var trigger = g.querySelector('a, button');
    if (!trigger) return;
    trigger.addEventListener('click', function (e) {
      e.preventDefault();
      var wasOpen = g.classList.contains('open');
      groups.forEach(function (o) { o.classList.remove('open'); });
      if (!wasOpen) g.classList.add('open');
    });
  });

  // click outside closes dropdowns
  document.addEventListener('click', function (e) {
    if (!menu.contains(e.target)) groups.forEach(function (o) { o.classList.remove('open'); });
  });
  // escape closes everything
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { menu.classList.remove('open'); groups.forEach(function (o) { o.classList.remove('open'); }); }
  });
})();

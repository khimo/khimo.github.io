/* khimo-doc.js — documentation page engine. Zero deps. Replaces bootstrap-toc.
   Driver/guide markdown is inconsistent (some author sections as h1, some as h2),
   so we DETECT the section level per page, drop a redundant leading title heading,
   number the sections (01,02…) and build the TOC from the SAME set — guaranteeing
   the TOC numbers always match the in-content ghost numerals. */
(function () {
  var content = document.querySelector('.pagecontent');
  if (!content) return;

  /* ---- table-wrap (rounded scrollable tables) ---- */
  content.querySelectorAll('table').forEach(function (t) {
    if (t.closest('.table-wrap')) return;
    var w = document.createElement('div'); w.className = 'table-wrap';
    t.parentNode.insertBefore(w, t); w.appendChild(t);
  });

  function norm(s) { return (s || '').trim().toLowerCase().replace(/\s+/g, ' '); }
  function slug(s) { return norm(s).replace(/[^\w]+/g, '-').replace(/^-+|-+$/g, ''); }

  var titleEl = document.querySelector('.page-head h1, .ph-title');
  var pageTitle = norm(titleEl ? titleEl.textContent : '');

  var h1s = [].slice.call(content.querySelectorAll('h1'));
  var sectionTag, subTag;
  if (h1s.length >= 2) { sectionTag = 'h1'; subTag = 'h2'; }
  else { sectionTag = 'h2'; subTag = 'h3'; }

  /* A redundant leading title heading in the body — hide it (page-head already shows the title). */
  var echo = null;
  if (h1s.length === 1) echo = h1s[0];
  else if (h1s.length >= 2 && pageTitle && norm(h1s[0].textContent) === pageTitle) echo = h1s[0];
  if (echo) echo.classList.add('is-title-echo');

  /* Sections = section-level headings minus the echo; number them for the ghost numeral CSS. */
  var sections = [].slice.call(content.querySelectorAll(sectionTag)).filter(function (h) { return h !== echo; });
  sections.forEach(function (h, i) {
    var num = (i + 1 < 10 ? '0' : '') + (i + 1);
    h.setAttribute('data-sec', num);
    h.classList.add('is-section');
    if (!h.id) h.id = slug(h.textContent) || ('section-' + num);
  });

  /* ---- Build the TOC: sections + nested sub-headings ---- */
  var toc = document.getElementById('toc');
  var spyTargets = [];
  if (toc) {
    if (!sections.length) { toc.style.display = 'none'; }
    else {
      var secSet = new Set(sections);
      var ul = document.createElement('ul'), curLi = null, curSub = null;
      [].slice.call(content.querySelectorAll(sectionTag + ',' + subTag)).forEach(function (h) {
        if (h === echo) return;
        if (secSet.has(h)) {
          curLi = document.createElement('li'); curSub = null;
          var a = document.createElement('a'); a.href = '#' + h.id;
          var n = document.createElement('span'); n.className = 'toc-num'; n.textContent = h.getAttribute('data-sec');
          a.appendChild(n); a.appendChild(document.createTextNode(' ' + h.textContent.trim()));
          curLi.appendChild(a); ul.appendChild(curLi);
          spyTargets.push(h);
        } else if (curLi) {                       // sub-heading under the current section
          if (!h.id) h.id = slug(h.textContent) || (h.id);
          if (!curSub) { curSub = document.createElement('ul'); curLi.appendChild(curSub); }
          var li2 = document.createElement('li');
          var a2 = document.createElement('a'); a2.href = '#' + h.id; a2.textContent = h.textContent.trim();
          li2.appendChild(a2); curSub.appendChild(li2);
          spyTargets.push(h);
        }
      });
      toc.innerHTML = ''; toc.appendChild(ul);
    }
  }

  /* ---- Scrollspy (active TOC item) via IntersectionObserver ---- */
  if (toc && spyTargets.length && 'IntersectionObserver' in window) {
    var linkFor = {};
    toc.querySelectorAll('a').forEach(function (a) { linkFor[a.getAttribute('href').slice(1)] = a; });
    var visible = {};
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { visible[e.target.id] = e.isIntersecting; });
      // pick the first target (document order) currently visible
      var activeId = null;
      for (var i = 0; i < spyTargets.length; i++) { if (visible[spyTargets[i].id]) { activeId = spyTargets[i].id; break; } }
      if (activeId) {
        toc.querySelectorAll('a.active').forEach(function (a) { a.classList.remove('active'); });
        if (linkFor[activeId]) linkFor[activeId].classList.add('active');
      }
    }, { rootMargin: '-96px 0px -65% 0px' });
    spyTargets.forEach(function (h) { io.observe(h); });
  }

  /* ---- Coral scroll-progress thread (defensive; harmless if khimo.js also runs) ---- */
  var prog = document.getElementById('scrollProgress');
  if (prog) {
    var onScroll = function () {
      var d = document.documentElement;
      var total = d.scrollHeight - d.clientHeight;
      prog.style.width = total > 0 ? (d.scrollTop / total * 100) + '%' : '0';
    };
    window.addEventListener('scroll', onScroll, { passive: true }); onScroll();
  }
})();

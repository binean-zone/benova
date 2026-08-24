/**
 * BENOVA — hành vi phía client.
 *
 * Không phụ thuộc thư viện ngoài: theme sáng/tối, menu mobile, hiệu ứng
 * reveal khi cuộn và highlight mục điều hướng đang xem.
 */
(function () {
  'use strict';

  var doc = document.documentElement;
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ------------------------------------------------------------ theme -- */

  var THEME_KEY = 'benova-theme';
  var toggle = document.getElementById('theme-toggle');

  function applyTheme(theme) {
    doc.setAttribute('data-theme', theme);
    try {
      localStorage.setItem(THEME_KEY, theme);
    } catch (e) {
      /* chế độ riêng tư: bỏ qua, theme vẫn đổi trong phiên hiện tại */
    }
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', theme === 'light' ? '#f6f9fc' : '#0a192f');
  }

  if (toggle) {
    toggle.addEventListener('click', function () {
      applyTheme(doc.getAttribute('data-theme') === 'light' ? 'dark' : 'light');
    });
  }

  /* ------------------------------------------------------ menu mobile -- */

  var navToggle = document.getElementById('nav-toggle');
  var nav = document.getElementById('site-nav');

  function closeNav() {
    if (!nav || !navToggle) return;
    nav.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.setAttribute('aria-label', 'Mở menu');
  }

  if (navToggle && nav) {
    navToggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(open));
      navToggle.setAttribute('aria-label', open ? 'Đóng menu' : 'Mở menu');
    });

    nav.addEventListener('click', function (event) {
      if (event.target.closest('a')) closeNav();
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') closeNav();
    });

    window.addEventListener('resize', function () {
      if (window.innerWidth > 860) closeNav();
    });
  }

  /* ------------------------------------------------- header khi cuộn --- */

  var header = document.getElementById('site-header');

  function onScroll() {
    if (header) header.classList.toggle('is-stuck', window.scrollY > 8);
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* --------------------------------------------------- reveal on scroll */

  var revealables = Array.prototype.slice.call(document.querySelectorAll('.reveal'));

  if (reduceMotion || !('IntersectionObserver' in window)) {
    revealables.forEach(function (el) {
      el.classList.add('is-visible');
    });
  } else {
    // Stagger theo vị trí trong cùng một nhóm cha để card hiện lần lượt.
    revealables.forEach(function (el) {
      var siblings = Array.prototype.filter.call(el.parentNode.children, function (child) {
        return child.classList.contains('reveal');
      });
      var index = siblings.indexOf(el);
      if (index > 0) el.style.setProperty('--delay', Math.min(index, 5) * 80 + 'ms');
    });

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.08 }
    );

    revealables.forEach(function (el) {
      observer.observe(el);
    });
  }

  /* ---------------------------------------------------------- scrollspy */

  var navLinks = Array.prototype.slice.call(document.querySelectorAll('.site-nav a[href^="#"]'));
  var sections = navLinks
    .map(function (link) {
      return document.querySelector(link.getAttribute('href'));
    })
    .filter(Boolean);

  if (sections.length && 'IntersectionObserver' in window) {
    var spy = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          navLinks.forEach(function (link) {
            link.classList.toggle('is-active', link.getAttribute('href') === '#' + entry.target.id);
          });
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );

    sections.forEach(function (section) {
      spy.observe(section);
    });
  }

})();

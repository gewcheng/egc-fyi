/**
 * egc.fyi — Site interactions
 * Vanilla JS, no dependencies
 */

/* ── Logo Lottie animation (hover state) ─────────────────────── */
window.addEventListener('load', () => {
  const logoContainer = document.getElementById('logo-lottie');
  const logoStatic    = document.getElementById('logo-static');
  const logoLink      = document.querySelector('.site-logo-link');

  if (logoContainer && typeof lottie !== 'undefined') {
    // Load the taupe-100 (lighter) version for hover
    const logoAnim = lottie.loadAnimation({
      container:     logoContainer,
      renderer:      'svg',
      loop:          true,
      autoplay:      false,
      animationData: egcLogoTaupe100Data,
    });

    // Show static by default; swap to Lottie on hover
    logoLink.addEventListener('mouseenter', () => {
      if (logoStatic) logoStatic.style.display = 'none';
      logoContainer.style.display = 'block';
      logoAnim.play();
    });

    logoLink.addEventListener('mouseleave', () => {
      logoAnim.goToAndStop(0, true);
      logoContainer.style.display = 'none';
      if (logoStatic) logoStatic.style.display = 'block';
    });
  }
});

/* ── Smooth scroll for anchor links ─────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

/* ── Coming soon overlay — keyboard + touch accessibility ────── */
const comingSoonArticle = document.querySelector('.showcase--coming-soon');

if (comingSoonArticle) {
  const imageWrap = comingSoonArticle.querySelector('.showcase__image-wrap');
  const overlay   = comingSoonArticle.querySelector('.coming-soon-overlay');

  if (imageWrap && overlay) {
    imageWrap.setAttribute('tabindex', '0');
    imageWrap.setAttribute('role', 'img');
    imageWrap.setAttribute('aria-label', 'Haven — Patch branding. Case study coming soon.');

    imageWrap.addEventListener('click', () => {
      const isVisible = overlay.style.opacity === '1';
      overlay.style.opacity = isVisible ? '0' : '1';
    });

    imageWrap.addEventListener('focus', () => { overlay.style.opacity = '1'; });
    imageWrap.addEventListener('blur',  () => { overlay.style.opacity = '0'; });
  }
}

/* ── Active nav link highlighting (scroll spy) ───────────────── */
const sections = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.hero-nav-row');

if (sections.length && navLinks.length) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.remove('hero-nav-row--active');
          if (link.getAttribute('href') === `#${entry.target.id}`) {
            link.classList.add('hero-nav-row--active');
          }
        });
      }
    });
  }, { threshold: 0.3 });

  sections.forEach(s => observer.observe(s));
}

/* ── Project row entrance animation (IntersectionObserver) ────── */
const rows = document.querySelectorAll('.showcase');

if (rows.length) {
  const fadeIn = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        fadeIn.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

  rows.forEach(row => {
    row.classList.add('will-animate');
    fadeIn.observe(row);
  });

  // Inject animation styles
  const style = document.createElement('style');
  style.textContent = `
    .will-animate {
      opacity: 0;
      transform: translateY(24px);
      transition: opacity 0.55s ease, transform 0.55s ease;
    }
    .will-animate.is-visible {
      opacity: 1;
      transform: translateY(0);
    }
  `;
  document.head.appendChild(style);
}

/* ── Project index: highlight current page ───────────────────── */
const currentPath = window.location.pathname;
document.querySelectorAll('.project-index__item').forEach(item => {
  const href = item.getAttribute('href') || '';
  if (href && currentPath.includes(href.replace(/^\.\.\//, '').replace('.html', ''))) {
    item.classList.add('project-index__item--active');
  }
});

/* ── Video controls: show only on hover ─────────────────────── */
/* Videos with [data-no-controls] (e.g. the Rebalance screen overlay) are excluded */
document.querySelectorAll('video:not([data-no-controls])').forEach(video => {
  video.removeAttribute('controls');
  video.addEventListener('mouseenter', () => video.setAttribute('controls', ''));
  video.addEventListener('mouseleave', () => video.removeAttribute('controls'));
});

/* ── External links: open in new tab ────────────────────────── */
document.querySelectorAll('a[href^="http"]').forEach(link => {
  if (!link.hasAttribute('target')) {
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener noreferrer');
  }
});

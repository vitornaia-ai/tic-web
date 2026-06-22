// Smooth scroll highlight no nav
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.sticky-nav a');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinks.forEach(link => {
        link.style.color = link.getAttribute('href') === `#${id}`
          ? '#c9a84c'
          : '#888';
      });
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(s => observer.observe(s));

// Fade-in ao fazer scroll
const fadeEls = document.querySelectorAll('.disco-card, .video-card, .stat-card, .gallery-item');

const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = entry.target.style.transform?.includes('translateY')
        ? 'translateY(0)'
        : '';
      fadeObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

fadeEls.forEach(el => {
  el.style.opacity = '0';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  el.style.transform = 'translateY(16px)';
  fadeObserver.observe(el);
});
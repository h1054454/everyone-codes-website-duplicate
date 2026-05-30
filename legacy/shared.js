/* ── NAV: shrink on scroll + active highlight ── */
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

/* ── SCROLL REVEAL ── */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('section, .t-card, .collab-card, .module-card, .job-card, .divider')
  .forEach(el => { el.classList.add('reveal'); observer.observe(el); });

/* ── DROPDOWN: close on outside click ── */
document.addEventListener('click', e => {
  if (!e.target.closest('.nav-links'))
    document.querySelectorAll('.dropdown').forEach(d => d.style.display = '');
});

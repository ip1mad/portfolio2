const navToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('#menu');

if (navToggle && menu) {
  navToggle.addEventListener('click', () => {
    const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!isExpanded));
    menu.classList.toggle('open');
  });

  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navToggle.setAttribute('aria-expanded', 'false');
      menu.classList.remove('open');
    });
  });
}

const sections = document.querySelectorAll('section');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.12 }
  );

  sections.forEach((section) => {
    section.classList.add('reveal');
    observer.observe(section);
  });
} else {
  sections.forEach((section) => section.classList.add('visible'));
}

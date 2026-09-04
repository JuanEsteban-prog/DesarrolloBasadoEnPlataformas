const year = document.querySelector('#year');
const currentYear = new Date().getFullYear();
const heroImage = document.querySelector('.image-frame img');

if (year) {
  year.textContent = currentYear;
}

if (heroImage) {
  heroImage.addEventListener('error', () => {
    heroImage.closest('.image-frame').classList.add('image-fallback');
    heroImage.remove();
  });
}

const sections = [...document.querySelectorAll('main section[id]')];
const navLinks = [...document.querySelectorAll('.main-nav a')];

const observer = new IntersectionObserver((entries) => {
  const visibleSection = entries
    .filter((entry) => entry.isIntersecting)
    .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0];

  if (!visibleSection) {
    return;
  }

  navLinks.forEach((link) => {
    link.classList.toggle('active', link.getAttribute('href') === `#${visibleSection.target.id}`);
  });
},
{ threshold: [0.2, 0.5, 0.8], rootMargin: '-15% 0px -55% 0px' });

sections.forEach((section) => observer.observe(section));

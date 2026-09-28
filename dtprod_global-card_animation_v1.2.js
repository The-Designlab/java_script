// Homepage image-cards: one script drives every .image-card on the page.
// Optional hover colour per card via data-hover-color on the card root.

(() => {
  const items = document.querySelectorAll('.image-card');
  if (!items.length || typeof gsap === 'undefined') return;
  items.forEach((item) => {
    const image = item.querySelector('.mkt-card_image');
    const category = item.querySelector('.card-category_txt');
    const body = item.querySelector('.card-body_text');
    const button = item.querySelector('.btn');
    if (!image || !body) return;
    const hoverColors = {
  Blue: 'var(--_color---primary--blue)',
  White: 'var(--_color---neutral--white)',
  Accent: 'var(--colors--primary-accent)',
};

const choice = (item.getAttribute('data-hover-color'); || '').trim().toLowerCase();
const hoverColor = hoverColors[choice] || 'var(--_color---primary--blue)';
    const colorTargets = [category, body, button].filter(Boolean);
    const tl = gsap.timeline({
      paused: true,
      defaults: { duration: 0.3, ease: 'power3.in' },
    });
    tl.to(image, {
      xPercent: 100,
      opacity: 0,
    });
    tl.from(body, {
      xPercent: -110,
      opacity: 0,
    });
    tl.to(colorTargets, {
      color: hoverColor,
    }, '<');
    item.addEventListener('mouseenter', () => tl.play());
    item.addEventListener('mouseleave', () => tl.reverse());
  });
})();

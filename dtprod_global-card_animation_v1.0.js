// Homepage image-cards — one script drives every .image-card; colours via data-* on each card

(() => {
  const items = document.querySelectorAll('.image-card');
  if (!items.length || typeof gsap === 'undefined') return;
  gsap.defaults({ duration: 0.3 });
  items.forEach((item) => {
    const image = item.querySelector('.mkt-card_image');
    const body = item.querySelector('.card-body_text');
    const button = item.querySelector('.card-button'); // prefer class over #card-button
    const cat = item.querySelector('.card-cat'); // prefer class over #card-cat
    if (!image || !body) return;
    
    // Set these on each card in Webflow (Custom attributes)
    // data-cat-color / data-btn-color — optional; fallbacks used if missing
    
    const catTo = item.getAttribute('data-cat-color') || 'var(--_color---primary--blue)';
    const btnTo = item.getAttribute('data-btn-color') || 'var(--_color---primary--blue)';
    const catFrom = item.getAttribute('data-cat-color-from') || '#fffafa';
    const btnFrom = item.getAttribute('data-btn-color-from') || '#fffafa';
    const tl = gsap.timeline({ paused: true })
      .to(image, {
        xPercent: 100,
        ease: 'power3.in',
        opacity: 0,
      })
      .from(body, {
        xPercent: -110,
        ease: 'power3.in',
        opacity: 0,
      });
    if (cat) {
      tl.fromTo(
        cat,
        { color: catFrom },
        { color: catTo, ease: 'power3.in' },
        '<' // with the body tween
      );
    }
    if (button) {
      tl.from(button, {
        xPercent: -110,
        ease: 'power3.in',
        scale: 1.1,
        opacity: 0,
      }).to(
        button,
        { color: btnTo, ease: 'power3.in' },
        '<'
      );
    }
    item.addEventListener('mouseenter', () => tl.play());
    item.addEventListener('mouseleave', () => tl.reverse());
  });
})();

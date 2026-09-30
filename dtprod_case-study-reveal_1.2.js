// Case-study reveal: one script drives every [data-reveal="item"] on the page.
(() => {
  const items = document.querySelectorAll('[data-reveal="item"]');
  if (!items.length || typeof gsap === 'undefined') return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  items.forEach((item) => {
    const moreBtn = item.querySelector('[data-reveal="more"]');
    const cover = item.querySelector('[data-reveal="cover"]');
    const closeBtn = item.querySelector('[data-reveal="close"]');
    if (!moreBtn || !cover) return;

    const tl = gsap.timeline({
      paused: true,
      defaults: { duration: reduceMotion ? 0 : 0.3, ease: 'power3.in' },
    });
    tl.to(moreBtn, { autoAlpha: 0 });
    tl.to(cover, { autoAlpha: 0, xPercent: -110 });

    item.addEventListener('click', (e) => {
      if (closeBtn && closeBtn.contains(e.target)) return;
      tl.play();
    });
   // item.addEventListener('mouseleave', () => tl.reverse());

    closeBtn?.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      tl.reverse();
    });
  });
})();

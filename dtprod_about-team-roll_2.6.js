(() => {
  const items = document.querySelectorAll('.team-member_wrapper');
  if (!items.length || typeof gsap === 'undefined') return;

  items.forEach((item) => {
    const image = item.querySelector('#image-default');
    if (!image) return;

    const tween = gsap.to(image, {
      autoAlpha: 0,
      duration: 0.1,
      ease: 'power2.out',
      paused: true,
    });

    item.addEventListener('mouseenter', () => tween.timescale(1).play());
    item.addEventListener('mouseleave', () => tween.timescale(0.5).reverse());
  });
})();

// hover-effects.js (example name on jsDelivr)

window.Webflow = window.Webflow || [];
window.Webflow.push(function () {
  const items = document.querySelectorAll('.project_listing');

  // Detect touch/mobile-like devices
  const isTouchDevice = window.matchMedia('(hover: none), (pointer: coarse)').matches;

  items.forEach(function (item) {
    const image = item.querySelector('#card-image');
    const paragraph = item.querySelector('#paragraph_text');
    const button = item.querySelector('.btn');

    if (!image || !paragraph || !button) return;

    // If touch/mobile, do nothing (no animation)
    if (isTouchDevice) return;

    // Initial states
    gsap.set(image, { scale: 1 });
    gsap.set(paragraph, { yPercent: 0, autoAlpha: 1 });
    gsap.set(button, { autoAlpha: 0, yPercent: 150 });

    const tl = gsap.timeline({
      paused: true,
      reversed: true,
      defaults: { duration: 0.3, ease: 'power1.out' }
    });

    tl.to(image, { scale: 1.05, duration: 0.6 }, 0)
      .to(paragraph, { yPercent: -100, autoAlpha: 0 }, 0)
      .to(button, { yPercent: 0, autoAlpha: 1, ease: 'power1.out' }, 0.1);

    // Desktop/laptop only
    item.addEventListener('mouseover', function () {
      tl.play();
    });

    item.addEventListener('mouseleave', function () {
      tl.reverse();
    });
  });
});

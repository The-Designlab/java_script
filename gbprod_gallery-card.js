// hover-effects.js (example name on jsDelivr)

window.Webflow = window.Webflow || [];
window.Webflow.push(function () {
  const items = document.querySelectorAll('.project_listing');

  items.forEach(function (item) {
    const image = item.querySelector('#card-image');
    // CHANGE this to match your real class exactly:
    const paragraph = item.querySelector('#paragraph_text'); // or '.paragraph_wrapper'
    const button = item.querySelector('.btn_no-link');  // or '.card-button-wrapper'

    if (!image || !paragraph || !button) return; // avoid errors if structure changes

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

    // Desktop: mouse events
    item.addEventListener('mouseenter', function () {
      tl.play();
    });

    item.addEventListener('mouseleave', function () {
      tl.reverse();
    });

    // Touch devices: touch events
    item.addEventListener('touchstart', function (e) {
      e.preventDefault(); // Prevent default touch behavior
      tl.play();
    });

    item.addEventListener('touchend', function (e) {
      e.preventDefault();
      tl.reverse();
    });
  });
});

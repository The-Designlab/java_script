// hover-effects.js (example name on jsDelivr)

window.Webflow = window.Webflow || [];
window.Webflow.push(function () {
  const items = document.querySelectorAll('.project_listing');

  items.forEach(function (item) {
    const image = item.querySelector('#card-image');
    // CHANGE this to match your real class exactly:
    const paragraph = item.querySelector('.paragraph_wrapper'); // or '.paragraph_wrapper'
    const button = item.querySelector('.card-button_wrapper');  // or '.card-button-wrapper'

    if (!image || !paragraph || !button) return; // avoid errors if structure changes

    // Initial states
    gsap.set(image, { scale: 1 });
    gsap.set(paragraph, { yPercent: 0, autoAlpha: 1 });
    gsap.set(button, { autoAlpha: 0 });

    const tl = gsap.timeline({
      paused: true,
      reversed: true,
      defaults: { duration: 0.4, ease: 'power3.out' }
    });

    tl.to(image, { scale: 1.1 }, 0)
      .to(paragraph, { yPercent: -100, autoAlpha: 0 }, 0)
      .to(button, { autoAlpha: 1 }, 0);

    item.addEventListener('mouseenter', function () {
      tl.play();
    });

    item.addEventListener('mouseleave', function () {
      tl.reverse();
    });
  });
});

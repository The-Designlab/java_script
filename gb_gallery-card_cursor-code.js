// Make sure GSAP is loaded on the page first

gsap.utils.toArray(".project-listing_item").forEach((item) => {
  const image    = item.querySelector(".gallery-image");
  const paragraph = item.querySelector(".paragraph-wrapper"); // or ".paragraph_wrapper"
  const button   = item.querySelector(".card-button_wrapper");

  // Optional: set initial states (can also be done in CSS)
  gsap.set(button,   { autoAlpha: 0 });   // hidden
  gsap.set(paragraph, { yPercent: 0, autoAlpha: 1 });
  gsap.set(image,    { scale: 1 });

  const tl = gsap.timeline({ paused: true, reversed: true });

  tl.to(image, {
    scale: 1.1,          // "enlarge" the image
    duration: 0.4,
    ease: "power3.out"
  }, 0)
  .to(paragraph, {
    yPercent: -100,      // move up by 100%
    autoAlpha: 0,        // fade out to 0 opacity
    duration: 0.4,
    ease: "power3.out"
  }, 0)
  .to(button, {
    autoAlpha: 1,        // fade in / show button wrapper
    duration: 0.4,
    ease: "power3.out"
  }, 0);

  item.addEventListener("mouseenter", () => {
    tl.play();
  });

  item.addEventListener("mouseleave", () => {
    tl.reverse();
  });
});

// timeline mouse enter and leave tween (image slide out, text slide in) fixed to work with multiple objects using the same class to fire individually using one piece of code. Used on homepage "Our People" and "Hiring" image-cards//

const items = document.querySelectorAll(".experience-collection_item");
gsap.defaults({ duration: 0.3 });

items.forEach(function (item, index) {
  const tl = gsap
    .timeline({ paused: true })

    .to(item.querySelector(".mkt-card_image"), {
      xPercent: 100,
      ease: 'power3.in',
      opacity: 0
    })

    .fromTo(item.querySelector('#card-cat'), {
      color: "#fffafa"
    }, {
      color: "var(--_color---primary--blue)",
      ease: 'power3.in'
    }, '-=<')

    .fromTo(item.querySelector(".mkt-card-body_text"), {
      xPercent: -110,
      opacity: 0,
      color: "#fffafa"
    }, {
      xPercent: 0,
      opacity: 1,
      color: "var(--_color---primary--blue)",
      ease: 'power3.in'
    })

    .to(item.querySelector('#exp-button'), {
      color: "var(--_color---primary--blue)",
      ease: 'power3.in'
    });

  item.addEventListener("mouseenter", () => tl.play());
  item.addEventListener("mouseleave", () => tl.reverse());
});

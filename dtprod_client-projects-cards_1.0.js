// timeline mouse enter and leave tween (image fade out, text reveal in) fixed to work with multiple objects using the same class of ".article-card_wrapper" to fire individually using one piece of code//

const items = document.querySelectorAll(".environment-card__grid");
gsap.defaults({ defaults: { ease: 'Expo.easeInOut', duration: .2 } });

items.forEach(function (item, index) {
  const tl = gsap
    .timeline({ paused: true })

    /*.fromTo(item.querySelector(".ext-btn_wrapper"), {
      color: "#ffffff"
    }, {
      opacity: 0
    })*/

    .to(item.querySelector('#read-more'), {
      opacity: 0
    })

    .fromTo(item.querySelector('#card-cat'), {
      color: "var(--_color---neutral--white)"
    }, {
      color: "#171f43",
      ease: 'power3.in'
    })

    .to(item.querySelector(".mkt-card_image"), {
      opacity: 0
    }, "-=0.2")

    .fromTo(item.querySelector(".mkt-card-body_text"), {
      opacity: 0,
      color: "var(--_color---neutral--white)"
    }, {
      opacity: 1,
      color: "#171f43",
      ease: 'power3.in'
    }, "-=0.2");

  item.addEventListener("mouseenter", () => tl.play());
  item.addEventListener("mouseleave", () => tl.reverse());
});

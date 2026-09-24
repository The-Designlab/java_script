// timeline mouse enter and leave tween (image fade out, text reveal in) fixed to work with multiple objects using the same class of ".article-card_wrapper" to fire individually using one piece of code

const items = document.querySelectorAll(".article-card_wrapper");
gsap.defaults({ duration: 0.2 });

items.forEach(function (item, index) {
  const tl = gsap
    .timeline({ paused: true })

    /*    .to(item.querySelector(".card-image"), { ease: 'power3.in', opacity: 0 })
        .to(item.querySelector(".card-body_text"), { yPercent: -5, ease: 'power3.in' });
    */

    /*.to(item.querySelector(".card-category_txt"), {
      opacity: 0,
      ease: 'power3.in'
    })*/

    .to(item.querySelector(".mkt-card_image"), {
      ease: 'power3.in',
      opacity: 0
    })

    .fromTo(item.querySelector('#card-cat'), {
      color: "var(--_color---neutral--white)"
    }, {
      color: "#171f43",
      ease: 'power3.in'
    })

    .fromTo(item.querySelector(".mkt-card-body_text"), {
      opacity: 0,
      color: "#d5d1cb"
    }, {
      opacity: 1,
      color: "#171f43",
      ease: 'power3.in'
    })

    .fromTo(item.querySelector('#button-name'), {
      color: "var(--_color---neutral--white)"
    }, {
      color: "#171f43",
      ease: 'power3.in'
    });

  item.addEventListener("mouseenter", () => tl.play());
  item.addEventListener("mouseleave", () => tl.reverse());
});

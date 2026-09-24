// THIS IS FOR THE HOMEPAGE YMALS ONLY ---- timeline mouse enter and leave tween (image slide out, text slide in) fixed to work with multiple objects using the same class to fire individually using one piece of code. Used on homepage "Our People" and "Hiring" image-cards//

const items = document.querySelectorAll(".ymal-item");
gsap.defaults({ duration: 0.3 });

items.forEach(function (item, index) {
  const tl = gsap
    .timeline({ paused: true })

    .to(item.querySelector(".mkt-card_image"), {
      xPercent: 100,
      ease: 'power3.in',
      opacity: 0
    })

    .from(item.querySelector(".card-category_txt"), {
      color: "#ffffff"
    })

    .from(item.querySelector(".mkt-card-body_text"), {
      xPercent: -110,
      ease: 'power3.in',
      scale: 1.1,
      opacity: 0
    })

    .to(item.querySelector('#card-btn'), {
      color: "var(--_color---primary--blue)",
      ease: 'power3.in'
    })

  /*.from(item.querySelector('#card-btn'), {
    xPercent: -110,
    ease: 'power3.in',
    opacity: 0
  })*/
  ;

  item.addEventListener("mouseenter", () => tl.play());
  item.addEventListener("mouseleave", () => tl.reverse());
});

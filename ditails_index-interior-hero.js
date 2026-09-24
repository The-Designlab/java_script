// timeline mouse enter and leave tween (image slide out, text slide in) fixed to work with multiple objects using the same class of ".image-card" to fire individually using one piece of code//

/*
const items = document.querySelectorAll(".product-cat_container");
gsap.defaults({ duration: 0.3 });

items.forEach(function (item) {
  const tl = gsap
    .timeline({ paused: true })

    .to(item.querySelector(".product-cat-image__wrapper"), {
      height: "100%",
      width: "50%",
    })

    .from(item.querySelector(".card-body_text"), {
      xPercent: -110,
      ease: 'power3.in',
      scale: 1.1,
      opacity: 0
    });
  item.addEventListener("mouseenter", () => tl.play());
  item.addEventListener("mouseleave", () => tl.reverse());
});
*/

// timeline for product-cat__container

const item = document.querySelector(".what-we-inside_wrapper")

const tl = gsap.timeline({ paused: true })

  .from('#interior-image', {
    duration: .4,
    align: "right right",
    width: '100%',
    height: "100%",
    right: 0,
    ease: 'ease.in'
  })

  .to('#interior-intro', {
    duration: .2,
    y: '-50%',
    ease: 'ease.out',
    opacity: '0'
  }, "-=0.3")

  /*
  .from('.product-name', {
    duration: .2,
    delay: .2,
    y: '50%',
    ease: 'power3.in',
    opacity: '0'
  })
*/

  .from('#kitchens', {
    duration: .3,
    y: '50%',
    ease: 'ease.out',
    opacity: '0'
  }, "-=0.2")

  .from('#dressing', {
    duration: .3,
    y: '50%',
    ease: 'ease.out',
    opacity: '0'
  }, "-=0.2")

  .from('#bathrooms', {
    duration: .2,
    delay: '0',
    y: '50%',
    ease: 'ease.out',
    opacity: '0'
  })

  .from('#bootrooms', {
    duration: .3,
    y: '50%',
    ease: 'ease.out',
    opacity: '0'
  }, "-=0.2")

  .from('#media', {
    duration: .3,
    y: '50%',
    ease: 'ease.out',
    opacity: '0'
  }, "-=0.2")

  .from('#interior-doors', {
    duration: .3,
    y: '50%',
    ease: 'ease.out',
    opacity: '0'
  } /*, "+=0.5"*/ )

  .from('#staircases', {
    duration: .3,
    y: '50%',
    ease: 'ease.out',
    opacity: '0'
  }, "-=0.2")

  .from('#mouldings', {
    duration: .3,
    y: '50%',
    ease: 'ease.out',
    opacity: '0'
  }, "-=0.2")

  .from('.int-btn_wrapper', {
    duration: .3,
    y: '50%',
    ease: 'ease.out',
    opacity: '0'
  })

/*.to('#category-title', {duration: .2, ease: 'power3.in'})*/

item.addEventListener("mouseenter", function () {
  tl.play()
})
item.addEventListener("mouseleave", function () {
  tl.reverse()
})

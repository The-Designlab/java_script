const items = document.querySelectorAll(".product_item");

items.forEach(function (item, index) {

  const tl = gsap.timeline({ paused: true })

    .to(item.querySelector("#card-image"), {
      duration: .3,
      scale: 1.10,
      ease: 'ease.out'
    })

    .to(item.querySelector("#paragraph_wrapper"), {
      duration: .3,
      y: '-100%',
      ease: 'ease.out',
      opacity: '0'
    }, "-=0.2")

    .from(item.querySelector("#gallery-button"), {
      duration: .3,
      y: '100%',
      ease: 'ease.out',
      opacity: '0'
    });

  /*.to(item.querySelector(".paragraph-default"), {
    duration: .3,
    y: '-100%',
    ease: 'ease.out',
    opacity: '0'
  }, "-=0.2")

  .from(item.querySelector('#gallery-button'), {
    duration: .3,
    y: '100%',
    ease: 'ease.out',
    opacity: '0'
  });*/

  item.addEventListener("mouseenter", function () {
    tl.play();
  });
  item.addEventListener("mouseleave", function () {
    tl.reverse();
  });
});

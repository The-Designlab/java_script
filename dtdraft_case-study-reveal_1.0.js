const items = document.querySelectorAll(".product-tn_wrap");

const open = document.querySelector('#gallery-button');

const close_gallery = document.querySelector('#close-button');

gsap.defaults({ duration: 0.3 });

items.forEach(function (item, index) {
  const tl = gsap
    .timeline({ paused: true })

    .to(item.querySelector(".more-btn_wrapper"), {
      ease: 'power3.in',
      opacity: 0
    })

    .to(item.querySelector(".gallery-cover_wrap"), {
      ease: 'power3.in',
      opacity: 0,
      xPercent: -110
    })

  item.addEventListener("mouseup", function () {
    tl.play()
  })

  item.addEventListener("mouseleave", function () {
    tl.reverse()
  })

  //this does not work!
  close_gallery.addEventListener("click", function () {
    tl.reverse()
  })

});

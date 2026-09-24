const item = document.querySelector(".what-we-outside_wrapper")

const tl = gsap.timeline({ paused: true })

  .from('#exterior-image', {
    duration: .4,
    align: "left left",
    width: '100%',
    height: "100%",
    right: 0,
    ease: 'ease.in'
  })

  .to('#exterior-intro', {
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

  .from('#exterior-doors', {
    duration: .3,
    y: '50%',
    ease: 'ease.out',
    opacity: '0'
  } /*, "+=0.5"*/ )

  .from('#windows', {
    duration: .3,
    y: '50%',
    ease: 'ease.out',
    opacity: '0'
  }, "-=0.2")

  .from('#gates', {
    duration: .3,
    y: '50%',
    ease: 'ease.out',
    opacity: '0'
  }, "-=0.2")

  .from('#porches', {
    duration: .3,
    y: '50%',
    ease: 'ease.out',
    opacity: '0'
  }, "-=0.2")

  .from('.ext-btn_wrapper', {
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

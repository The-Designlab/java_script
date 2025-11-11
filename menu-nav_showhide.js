const item = document.querySelector(".new-nav");
const mask = document.querySelector(".Body");

const tl = gsap.timeline({ paused: true })

  .to(".nav-layout_wrapper", {
    backgroundColor: "white",
    ease: 'ease.out'
  } /*, '-=0.3'*/ )

  .to(".rwa-text", {
    duration: .1,
    color: "var(--colours--rwg-slate)"
  } /*, '-=0.1'*/ , '-=<')

  .to(".group-text", {
    duration: .1,
    color: "var(--colours--rwg-sage)"
  } /*, '-=0.1'*/ , '-=<')

  .to("#burger-open", {
    duration: .5,
    ease: 'ease.out',
    color: "var(--colours--rwg-slate)"
  }, '-=<')

  .to('#burger-label', {
    duration: .5,
    ease: 'ease.out',
    color: "var(--colours--rwg-slate)"
  }, '-=<')

item.addEventListener("mouseenter", function () {
  tl.play()
})

item.addEventListener("mouseleave", function () {
  tl.reverse()
})

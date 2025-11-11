/*
addEventListener("DOMContentLoaded", (e) => {
*/
const item = document.querySelector(".new-nav");
const mask = document.querySelector(".Body");

const tl = gsap.timeline({ paused: true })

  tl.from(".nav-layout_wrapper", {
    backgroundColor: "transparent",
    ease: 'ease.out'
  })
  
  tl.to(".nav-layout_wrapper", {
    backgroundColor: "white",
    ease: 'ease.out'
  })

	tl.from(".rwa-text", {
   duration:0.1,
   color: "white"
  }, '-=<')
  
  tl.to(".rwa-text", {
   duration:0.1,
   color: "var(--colours--rwg-slate)"
  }, '-=<')

  tl.from(".group-text", {
    duration:0.1,
    color: "white"
  }, '-=<')
  
  tl.to(".group-text", {
    duration:0.1,
    color: "var(--colours--rwg-sage)"
  }, '-=<')

  tl.to("#burger-open", {
    duration:0.5,
    ease: 'ease.out',
    color: "var(--colours--rwg-slate)"
  }, '-=<')

  tl.to('#burger-label', {
    duration:0.5,
    ease: 'ease.out',
    color: "var(--colours--rwg-slate)"
  }, '-=<')

item.addEventListener("mouseenter", function () {
  tl.play()
})

item.addEventListener("mouseleave", function () {
  tl.reverse()
})
  
  
});

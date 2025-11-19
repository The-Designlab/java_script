addEventListener("DOMContentLoaded", (e) => {

const item = document.querySelector(".nav_wrapper");

const tl = gsap.timeline({ paused: true })

  .from(".nav-layout_wrapper", {
    backgroundColor: "transparent",
    ease: 'ease.out'
  })
  
  .to(".nav-layout_wrapper", {
    backgroundColor: "white",
    ease: 'ease.out'
  })
  
  .from("#burger-open", {
    duration:0.5,
    ease: 'ease.out',
    color: "white"
  })
  
  .to("#burger-open", {
    duration:0.5,
    ease: 'ease.out',
    color: "var(--_color---primary--grey)"
  }, '-=<')

  .from('#burger-label', {
    duration:0.5,
    ease: 'ease.out',
    color: "white"
  })
  
  .to('#burger-label', {
    duration:0.5,
    ease: 'ease.out',
    color: "var(--_color---primary--grey)"
  }, '-=<')

  const tl = gsap.timeline({ paused: true, defaults: { duration: 0.5, ease: "power2.out" } })
    // Define the final (hovered) state in a single 'to' call
    .to(".nav-layout_wrapper", {
        backgroundColor: "white",
    }, 0) // Start at time 0
    
    .to(["#burger-open", "#burger-label"], {
        color: "var(--_color---primary--grey)",
    }, 0); // Also start at time 0

item.addEventListener("mouseenter", function () {
  tl.play()
})

item.addEventListener("mouseleave", function () {
  tl.reverse()
})
  
  
});

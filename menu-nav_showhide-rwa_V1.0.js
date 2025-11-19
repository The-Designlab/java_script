addEventListener("DOMContentLoaded", () => {
  
  const item = document.querySelector(".new-nav");

  // QA FIX: Safety check. If the element isn't found, stop here to prevent errors.
  if (!item) return; 

  // QA FIX: specific easing and defaults to clean up code
  const tl = gsap.timeline({ 
    paused: true, 
    defaults: { duration: 0.5, ease: "power2.out" } 
  });

  tl
    .to(".nav-layout_wrapper", {
      backgroundColor: "255,255,255,40",
    })
    .to(".rwa-text", {
      color: "var(--colours--rwg-slate)",
    })
    .to(".group-text", {
      color: "var(--colours--rwg-sage)",
    }, "<")
    
    // QA FIX: target multiple elements in one tween
    .to(["#burger-open", "#burger-label"], {
      color: "var(--colours--rwg-slate)",
    }, "<"); // QA FIX: "<" symbol aligns this animation to start with the previous one

  item.addEventListener("mouseenter", () => {
    tl.play();
  });

  item.addEventListener("mouseleave", () => {
    tl.reverse().timescale(2);
  });

});

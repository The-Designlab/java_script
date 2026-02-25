document.addEventListener("DOMContentLoaded", () => {
    const openBtn = document.querySelector(".open-menu_btn");
    const closeBtn = document.querySelector(".close-menu_btn");
    const workBtn = document.querySelector('#work-with-us_btn');
    const workBackBtn = document.querySelector('#work-back_btn');
    
    // Set GSAP defaults
    gsap.defaults({ duration: 0.4, ease: 'power2.out' });

    const tl = gsap.timeline({ paused: true });

    // 1. Open Menu Animation
    tl.to(".nav-logo_wrapper", { yPercent: -100 })
      .to(".open-menu_btn", { yPercent: -100 }, "<")
      .from(".close-menu_btn", { yPercent: 100, autoAlpha: 0 }, "<")
      .from(".black_mask", { duration: 0.8, opacity: 0 }, "<")
      
      .addLabel("nav-loaded") 
      .from(['#about-us_btn', '#how-we-work_btn', '#gallery_btn', '#work-with-us_btn', '#contact_btn'], {
          opacity: 0,
          y: 10,
          stagger: 0.05
      })
      .addPause() 

    // 2. Submenu Animation
      .addLabel("work-with")
      .to(".main-nav__block", { xPercent: -20, autoAlpha: 0 })
      .from(".sub-nav__block", { xPercent: 50, autoAlpha: 0 }, "<")
      .addPause();


    // Event Listeners
    if (openBtn) openBtn.addEventListener("click", () => tl.play("nav-loaded"));
    
    // Reverse the whole thing to close
    if (closeBtn) closeBtn.addEventListener("click", () => tl.reverse(0));

    if (workBtn) workBtn.addEventListener("click", () => tl.play("work-with"));

    if (workBackBtn) {
        workBackBtn.addEventListener("click", () => {
            // Added 0.5s delay before reversing the submenu
            gsap.delayedCall(0.5, () => {
                tl.reverse("work-with");
            });
        });
    }
});

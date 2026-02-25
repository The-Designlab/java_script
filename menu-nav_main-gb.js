document.addEventListener("DOMContentLoaded", () => {
    // 1. Element selection
    const openBtn = document.querySelector(".open-menu_btn");
    const closeBtn = document.querySelector(".close-menu_btn");
    const workBtn = document.querySelector('#work-with-us_btn');
    const workBackBtn = document.querySelector('#work-back_btn');
    
    // Set GSAP defaults
    gsap.defaults({ duration: 0.4, ease: 'power2.out' });

    // 2. Timeline Definition
    const tl = gsap.timeline({ paused: true });

    tl.to(".nav-logo_wrapper", { yPercent: -100 })
      .to(".open-menu_btn", { yPercent: -100 }, "<")
      .from(".close-menu_btn", { yPercent: 100, autoAlpha: 0 }, "<")
      .from(".black_mask", { duration: 0.8, opacity: 0 }, "<")
      
      .addLabel("nav-loaded") 
      // Staggered nav items
      .from(['#about-us_btn', '#how-we-work_btn', '#gallery_btn', '#work-with-us_btn', '#contact_btn'], {
          opacity: 0,
          y: 10,
          stagger: 0.1
      })
      .addPause() // --- STOP HERE (Main Menu Open) ---

      .addLabel("work-with")
      .to(".main-nav__block", { xPercent: -20, autoAlpha: 0 }) // Slightly move for depth
      .from(".sub-nav__block", { xPercent: 50, autoAlpha: 0 }, "<")
      .addPause();


    // 3. Event Listeners
    if (openBtn) {
        openBtn.addEventListener("click", () => tl.play("nav-loaded"));
    }

    if (closeBtn) {
        closeBtn.addEventListener("click", () => tl.reverse());
    }

    if (workBtn) {
        workBtn.addEventListener("click", () => tl.play("work-with"));
    }

    if (workBackBtn) {
        // To go "Back" to main nav, we play the timeline in reverse 
        // until it hits the previous pause point/label
        workBackBtn.addEventListener("click", () => tl.reverse("work-with"));
    }
});

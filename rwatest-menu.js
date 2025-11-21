document.addEventListener("DOMContentLoaded", () => {
    // 1. Element selection
    const openBtn = document.querySelector(".open-menu_btn");
    const closeBtn = document.querySelector(".close-menu_btn");
    
    // Buttons
    const expertiseBtn = document.querySelector('#expertise_btn');
    const expertiseBackBtn = document.querySelector('#exp-back_btn');
    const workBtn = document.querySelector('#work-with-us_btn');
    const workBackBtn = document.querySelector('#work-back_btn');
    const subnavItem = document.querySelector('#sub-nav_item');

    // GSAP defaults
    gsap.defaults({ duration: 0.5, ease: 'power1.out' });

    // 2. Timeline Definition
    const tl = gsap.timeline({ paused: true });

    // --- Menu Open Animation ---
    tl.to(".nav-logo_wrapper", { yPercent: -100, duration: 0.2 })
      .to(".open-menu_btn", { duration: 0.2, yPercent: -100, ease: 'power4.out' }, "<")
      .from(".close-menu_btn", { duration: 0.2, yPercent: 100, ease: 'power4.out', autoAlpha: 0 }, "<")
      .from(".black_mask", { duration: 1, opacity: 0, ease: 'power1.out' }, "<")
      
      .addLabel("nav-loaded") 
      
      // Staggered Load
      .from('#about-us_btn', { duration: 0.3, xPercent: -50, opacity: 0 })
      .from('#expertise_btn', { opacity: 0 }, "<0.1")
      .from('#gallery_btn', { opacity: 0 }, "<0.1")
      .from('#work-with-us_btn', { opacity: 0 }, "<0.1")
      .from('#contact_btn', { opacity: 0 }, "<0.1")
      
      .addPause(); // Waits here for user interaction

    // --- Subnav (Expertise) Animation ---
    tl.addLabel("start-expertise_menu")
    
      // KEY FIX 1: Explicitly hide the Work menu to prevent overlap/ghost clicks
      .set(".with-nav-btn__list", { autoAlpha: 0, display: "none" }) 
      // Ensure Expertise is display block (but invisible) so it can animate in
      .set(".exp-nav-btn__list", { display: "block" }) 

      .to(".main-nav_block", {
          duration: .3,
          xPercent: -80,
          ease: 'ease.out',
          autoAlpha: 0
      })
      .fromTo(".exp-nav-btn__list", 
          { xPercent: -80, autoAlpha: 0 }, // Start values
          { duration: .3, xPercent: 0, autoAlpha: 1, ease: 'ease.out' }, // End values
      "-=0.2")

      .addLabel("end-expertise_menu")    
      .addPause();

    // --- Subnav (Work with) Animation ---
    tl.addLabel("start-workwith_menu")
    
      // KEY FIX 2: Explicitly hide the Expertise menu
      .set(".exp-nav-btn__list", { autoAlpha: 0, display: "none" })
      // Ensure Work is display block
      .set(".with-nav-btn__list", { display: "block" })

      .to(".main-nav_block", {
          duration: .3,
          xPercent: -80,
          ease: 'ease.out',
          autoAlpha: 0
      })
      .fromTo(".with-nav-btn__list", 
          { xPercent: -80, autoAlpha: 0 }, 
          { duration: .3, xPercent: 0, autoAlpha: 1, ease: 'ease.out' }, 
      "-=0.2")

      .addLabel("end-workwith_menu")
      .addPause();


    // 3. Event Listeners
    
    if (openBtn) {
        openBtn.addEventListener("click", () => tl.play("nav-loaded")); // Play to start
    }

    if (closeBtn) {
        closeBtn.addEventListener("click", () => {
            tl.pause(); // Stop wherever it is
            tl.reverse(0); // Reverse entire timeline to 0
        });
    }

    // --- Submenu Triggers ---

    if (expertiseBtn) {
        expertiseBtn.addEventListener("click", () => {
            // Jump to specific label
            tl.play("start-expertise_menu"); 
        });
    }

    if (workBtn) {
        workBtn.addEventListener("click", () => {
            // Jump to specific label
            tl.play("start-workwith_menu"); 
        });
    }

    // --- Back Buttons (KEY LOGIC CHANGE) ---
    
    // Instead of playing "nav-loaded", we REVERSE. 
    // This plays the timeline backwards from the submenu to the pause point.
    
    if (expertiseBackBtn) {
        expertiseBackBtn.addEventListener("click", () => tl.reverse());
    }

    if (workBackBtn) {
        workBackBtn.addEventListener("click", () => tl.reverse());
    }
    
    // Handle clicking the subnav item itself to close
    if (subnavItem) {
        subnavItem.addEventListener("click", () => tl.reverse(0));
    }
});

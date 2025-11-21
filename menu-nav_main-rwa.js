document.addEventListener("DOMContentLoaded", () => {
    // 1. Element selection (QA Check: Ensure these selectors exist in your HTML)
    const openBtn = document.querySelector(".open-menu_btn");
    const closeBtn = document.querySelector(".close-menu_btn");
    const expertiseBtn = document.querySelector('#expertise_btn');
    const expertiseBackBtn = document.querySelector('#exp-back_btn');
    const workBtn = document.querySelector('#work-with-us_btn');
    const workBackBtn = document.querySelector('#work-back_btn');
    const subnavItem = document.querySelector('#sub-nav_item');

    // Set GSAP defaults
    gsap.defaults({ duration: 0.5, ease: 'power1.out' });

    // 2. Timeline Definition
    const tl = gsap.timeline({ paused: true });

    // --- Menu Open Animation ---

    tl.to(".nav-logo_wrapper", {
        yPercent: -100,
        duration: 0.2
    })

    // Burger animation (Open to Close)
    .to(".open-menu_btn", {
        duration: 0.2,
        yPercent: -100,
        ease: 'power4.out'
    }, "<") // Start with the logo movement

    // Burger animation (Close appears)
    .from(".close-menu_btn", {
        duration: 0.2,
        yPercent: 100,
        ease: 'power4.out',
        autoAlpha: 0
    }, "<") // Start with the logo movement

    .from(".black_mask", {
        duration: 1,
        opacity: 0,
        ease: 'power1.out'
    }, "<") // Start with the logo movement

    // 1st level-nav items staggered load
    .addLabel("nav-loaded") // QA Fix: Standardized to a single label

    .from('#about-us_btn', {
        duration: 0.3,
        xPercent: -50,
        opacity: 0
    })

    .from('#expertise_btn', {
        opacity: 0
    }, "<0.1") // QA Suggestion: Consistent, easy-to-read offset

    .from('#gallery_btn', {
        opacity: 0
    }, "<0.1")

    .from('#work-with-us_btn', {
        opacity: 0
    }, "<0.1")

    .from('#contact_btn', {
        opacity: 0
    }, "<0.1")

    .addPause()

    // --- Subnav (Expertise) Animation ---

    .addLabel("start-expertise_menu")

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
           
    .fromTo(".exp-nav-btn__list", {
        xPercent: -80,
        autoAlpha: 0},
        {duration: .3,
        xPercent: 0,
        ease: 'ease.out',
        autoAlpha: 1
    }, "-=0.2")

    .addLabel("end-expertise_menu")    
    .addPause()

    // --- Subnav (Work with) Animation ---

    .addLabel("start-workwith_menu")

    // KEY FIX 2: Explicitly hide the Expertise menu
      .set(".exp-nav-btn__list", { autoAlpha: 0, display: "none" })
    // Ensure Work is display block
      .set(".with-nav-btn__list", { display: "block" })
        
/*
// remove expertise menu from timeline
        .to(".exp-nav-btn__list", {
        duration: 0,
        autoAlpha: 0
    })
*/
         
    .to(".main-nav_block", {
        duration: .3,
        xPercent: -80,
        ease: 'ease.out',
        autoAlpha: 0
    })

    .fromTo(".with-nav-btn__list", {
        xPercent: -80,
        autoAlpha: 0},
        {duration: .3,
        xPercent: 0,
        ease: 'ease.out',
        autoAlpha: 1
    }, "-=0.2")

    .addLabel("end-workwith_menu")
    .addPause();


    // 3. Event Listeners (QA Check: Added null checks for robustness)
    
    // Main Menu Open/Close
    if (openBtn) {
        openBtn.addEventListener("click", () => tl.play("nav-loaded"));
    }

    // QA Fix: Removed .75 argument. Reversing should go back to the absolute start (closed state).
    if (closeBtn) {
        closeBtn.addEventListener("click", () => {
            tl.pause();
            tl.reverse(0);
        });
    }

    //****** QA Fix: Removed .75 argument. Assuming this element also closes the main nav. Not sure where this sits now???
    if (subnavItem) {
        subnavItem.addEventListener("click", function () {
            tl.reverse(0);
        });
    }

    // Expertise Sub-Menu
    if (expertiseBtn) {
        expertiseBtn.addEventListener("click", function () {
            tl.play("start-expertise_menu");
        });
    }

    // Back to Main Nav from Expertise
    if (expertiseBackBtn) {
        // QA Fix: Targetting the single, standardized label
        expertiseBackBtn.addEventListener("click", function () {
            tl.reverse();
        });
    }

    // Work With Us Sub-Menu
    if (workBtn) {
        workBtn.addEventListener("click", function () {
            tl.play("start-workwith_menu");
        });
    }

    // Back to Main Nav from Work With Us
    if (workBackBtn) {
        // QA Fix: Targetting the single, standardized label
        workBackBtn.addEventListener("click", function () {
            tl.reverse();
        });
    }

});

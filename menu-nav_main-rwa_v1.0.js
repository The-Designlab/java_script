document.addEventListener("DOMContentLoaded", () => {
    // 1. Element selection (QA Check: Ensure these selectors exist in your HTML)
    const openBtn = document.querySelector(".open-menu_btn");
    const closeBtn = document.querySelector(".close-menu_btn");
    const expBtn = document.querySelector("#expertise_btn");
    const expBackBtn = document.querySelector("#exp-back_btn");
    const workBtn = document.querySelector('#work-with-us_btn');
    const workBackBtn = document.querySelector('#work-back_btn');
    const subnavItem = document.querySelector('#sub-nav_item');

    // Set GSAP defaults
    gsap.defaults({ duration: 0.3, ease: 'power1.out' });

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
        opacity: 0
    })

    .from('#how-we-work_btn', {
        opacity: 0
    }, ">0.1") // QA Suggestion: Consistent, easy-to-read offset

    .from('#gallery_btn', {
        opacity: 0
    }, ">0.1")

    .from('#work-with-us_btn', {
        opacity: 0
    }, ">0.1")

    .from('#contact_btn', {
        opacity: 0
    }, ">0.1")

    .addPause()

    // --- Subnav (Expertise) Animation ---

    .addLabel("expertise")

/*    .to(".main-nav_block", {
        duration: .3,
        xPercent: -80,
        ease: 'ease.out',
        autoAlpha: 0
    })
*/
    .from(".exp-nav-btn__list", {
        duration: .3,
        xPercent: -80,
        ease: 'ease.out',
        autoAlpha: 0
    }, "-=0.2")

    .addPause()

        
    // --- Subnav (Work with) Animation ---

    .addLabel("work-with")

/*    // QA Fix: Ensure duration is 0 for immediate hiding, prevents unclickable state
    .to(".exp-nav-btn__list", {
        duration: 0,
        visibility: "hidden" 
    }) 
*/
    .to(".main-nav__block", {
        xPercent: -80,
        ease: 'ease.out',
        autoAlpha: 0
    })

    .from(".sub-nav__block", {
        xPercent: -80,
        ease: 'ease.out',
        opacity: 0
    }, "-=0.2")

    .addPause();


    // 3. Event Listeners (QA Check: Added null checks for robustness)
    
    // Main Menu Open/Close
    if (openBtn) {
        openBtn.addEventListener("mouseup", function () {
            tl.play();
        });
    }

    // QA Fix: Removed .75 argument. Reversing should go back to the absolute start (closed state).
    if (closeBtn) {
        closeBtn.addEventListener("mouseup", function () {
            tl.reverse();
        });
    }

    // QA Fix: Removed .75 argument. Assuming this element also closes the main nav.
    if (subnavItem) {
        subnavItem.addEventListener("mouseup", function () {
            tl.reverse();
        });
    }
/*
    // Expertise Sub-Menu
    if (expertiseBtn) {
        expertiseBtn.addEventListener("mouseup", function () {
            tl.play("expertise");
        });
    }

    // Back to Main Nav from Expertise
    if (expertiseBackBtn) {
        // QA Fix: Targetting the single, standardized label
        expertiseBackBtn.addEventListener("mouseup", function () {
            tl.play("nav-loaded");
        });
    }
*/
    // Work With Us Sub-Menu
    if (workBtn) {
        workBtn.addEventListener("mouseup", function () {
            tl.play("work-with");
        });
    }

    // Back to Main Nav from Work With Us
    if (workBackBtn) {
        // QA Fix: Targetting the single, standardized label
        workBackBtn.addEventListener("mouseup", function () {
            tl.play("nav-loaded");
        });
    }

});

document.addEventListener("DOMContentLoaded", () => {
    // 1. Element selection (QA Check: Ensure these selectors exist in your HTML)
    const openBtn = document.querySelector(".open-menu_btn");
    const closeBtn = document.querySelector(".close-menu_btn");
    const expBtn = document.querySelector('#expertise_btn');
    const expBackBtn = document.querySelector('#exp-back_btn');
    const workBtn = document.querySelector('#work-with-us_btn');
    const workBackBtn = document.querySelector('#work-back_btn');
    // const subnavItem = document.querySelector('#sub-nav_item'); // Kept commented out as per previous QA

    // Set GSAP defaults (Standardized ease)
    gsap.defaults({ duration: 0.3, ease: 'power2.out' }); // Changed to power2.out for better feel

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
        ease: 'power4.out' // Retained this specific ease for the button transition
    }, "<") // Start with the logo movement

    // Burger animation (Close appears)
    .from(".close-menu_btn", {
        duration: 0.2,
        yPercent: 100,
        ease: 'power4.out', // Retained this specific ease for the button transition
        autoAlpha: 0
    }, "<") // Start with the logo movement

    .from(".black_mask", {
        duration: 1,
        opacity: 0
    }, "<") // Start with the logo movement

    // 1st level-nav items staggered load
    .addLabel("nav-loaded") // The designated stop point for the main menu open state

    .from('#about-us_btn', {
        opacity: 0
    })

    .from('#expertise_btn', {
        opacity: 0
    }, ">0.1")

    .from('#gallery_btn', {
        opacity: 0
    }, ">0.1")

    .from('#work-with-us_btn', {
        opacity: 0
    }, ">0.1")

    .from('#contact_btn', {
        opacity: 0
    }, ">0.1")

    // QA Fix: Removed the first .addPause(). The "nav-loaded" label is the control point.

    // --- Subnav (Expertise) Animation ---
    .addLabel("expertise")

    // QA Fix: Ensure we are targeting the list that is currently visible to hide it
    // NOTE: If the main nav block is moving, you don't need to hide the exp list here yet.
    .to(".main-nav_block", { // Assuming main-nav_block is the container for the 1st level links
        duration: 0.3,
        xPercent: -80,
        autoAlpha: 0 // Fade out as it slides
    })

    .from(".exp-nav-btn__list", {
        duration: 0.3,
        xPercent: 80, // Using 80 to slide in from the opposite side of the main nav slide-out
        autoAlpha: 0
    }, "-=0.2") // Slight overlap

    .addPause() // Pause after Expertise menu is displayed

    // --- Subnav (Work with) Animation ---
    .addLabel("work-with")

    // QA Fix: Hide the Expertise list instantly before showing the Work list
    .set(".exp-nav-btn__list", {
        autoAlpha: 0,
        xPercent: 0 // Reset xPercent to 0 or its initial state for clean reverse/future plays
    })

    // Slide out the Main Nav Block (needed if jumping from Expertise Back to Work With)
    .to(".main-nav_block", {
        xPercent: -80,
        autoAlpha: 0
    })

    .from(".with-nav-btn__list", {
        xPercent: 80, // Slide in from the opposite side
        autoAlpha: 0
    }, "-=0.2") // Slight overlap

    .addPause();


    // 3. Event Listeners (Incorporating logic fixes)

    // Main Menu Open
    if (openBtn) {
        openBtn.addEventListener("mouseup", function () {
            // QA Fix: Play ONLY up to the 'nav-loaded' label, preventing subsequent subnav animations.
            tl.play("nav-loaded");
        });
    }

    // Main Menu Close
    if (closeBtn) {
        closeBtn.addEventListener("mouseup", function () {
            // QA Fix: Added logic to reset timescale after fast reverse.
            tl.reverse(0).timeScale(2).then(() => tl.timeScale(1));
        });
    }

    // Expertise Sub-Menu
    if (expBtn) {
        expBtn.addEventListener("mouseup", function () {
            tl.play("expertise");
        });
    }

    // Back to Main Nav from Expertise
    if (expBackBtn) {
        expBackBtn.addEventListener("mouseup", function () {
            // Plays back to the main menu loaded state
            tl.play("nav-loaded");
        });
    }

    // Work With Us Sub-Menu
    if (workBtn) {
        workBtn.addEventListener("mouseup", function () {
            tl.play("work-with");
        });
    }

    // Back to Main Nav from Work With Us
    if (workBackBtn) {
        workBackBtn.addEventListener("mouseup", function () {
            // Plays back to the main menu loaded state
            tl.play("nav-loaded");
        });
    }

});

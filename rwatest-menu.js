document.addEventListener("DOMContentLoaded", () => {
  
  // --- 1. SETUP ---
  const openBtn = document.querySelector(".open-menu_btn");
  const closeBtn = document.querySelector(".close-menu_btn");
  
  // Nav Blocks
  const mainNav = document.querySelector(".main-nav_block");
  const expNav = document.querySelector(".exp-nav-btn__list");
  const workNav = document.querySelector(".with-nav-btn__list");
  
  // Triggers
  const expBtn = document.querySelector('#expertise_btn');
  const workBtn = document.querySelector('#work-with-us_btn');
  
  // Back Buttons
  const expBack = document.querySelector('#exp-back_btn');
  const workBack = document.querySelector('#work-back_btn');

  gsap.defaults({ duration: 0.5, ease: 'power2.out' });

  // Set Initial States
  gsap.set([expNav, workNav], { autoAlpha: 0, xPercent: -80 }); // Subs sit to the right
  gsap.set(mainNav, { autoAlpha: 1, xPercent: 0 }); // Main sits in center

  
  // --- 2. MAIN MENU ANIMATION (Only Open/Close) ---
  const menuTL = gsap.timeline({ paused: true });

  menuTL
    .to(".nav-logo_wrapper", { yPercent: -100, duration: 0.2 })
    .to(".open-menu_btn", { yPercent: -100, duration: 0.2 }, "<")
    .from(".close-menu_btn", { yPercent: 100, autoAlpha: 0 }, "<")
    .to(".black_mask", { opacity: 1, duration: 0.8 }, "<") // Fade in mask
    .from(".main-nav_block li", { // Stagger in main links
        y: 30, 
        opacity: 0, 
        stagger: 0.1,
        duration: 0.3
    }, "-=0.4");


  // --- 3. HELPER FUNCTIONS (The "Switching" Logic) ---

  // Function to Switch FROM Main TO Sub
  function showSubMenu(targetMenu) {
    // 1. Animate Main OUT to the LEFT
    gsap.to(mainNav, { 
      xPercent: -80, 
      autoAlpha: 0, 
      duration: 0.3,
      ease: "power2.in"
    });

    // 2. Animate Target Sub IN from the RIGHT
    gsap.fromTo(targetMenu, 
      { xPercent: -80, autoAlpha: 0 }, // Ensure it starts from right/hidden
      { xPercent: 0, autoAlpha: 1, duration: 0.3, delay: 0.1 }
    );
  }

  // Function to Switch FROM Sub TO Main
  function hideSubMenu(currentMenu) {
    // 1. Animate Current Sub OUT to the RIGHT
    gsap.to(currentMenu, { 
      xPercent: -80, 
      autoAlpha: 0, 
      duration: 0.3,
      ease: "power2.in"
    });

    // 2. Animate Main IN from the LEFT
    gsap.to(mainNav, { 
      xPercent: 0, 
      autoAlpha: 1, 
      duration: 0.3, 
      delay: 0.1 
    });
  }


  // --- 4. EVENT LISTENERS ---

  // Main Open/Close
  openBtn.addEventListener("click", () => menuTL.play());
  
  closeBtn.addEventListener("click", () => {
    menuTL.reverse();
    // SAFETY: When closing the whole menu, reset all submenus instantly
    // so next time you open, it's clean.
    gsap.set([expNav, workNav], { autoAlpha: 0, xPercent: 50 });
    gsap.set(mainNav, { autoAlpha: 1, xPercent: 0 });
  });

  // Go to Expertise
  expBtn.addEventListener("click", () => showSubMenu(expNav));
  
  // Go to Work
  workBtn.addEventListener("click", () => showSubMenu(workNav));

  // Back from Expertise
  expBack.addEventListener("click", () => hideSubMenu(expNav));
  
  // Back from Work
  workBack.addEventListener("click", () => hideSubMenu(workNav));

});

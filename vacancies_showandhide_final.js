document.addEventListener("DOMContentLoaded", () => {
  
  // Select all card containers
  const jobcards = document.querySelectorAll(".job-card");

  jobcards.forEach((card) => {
    
    // SCOPED SELECTORS:
    // Select the button wrapper (for the click)
    const toggleBtn = card.querySelector(".visibility-button");
    
    // Select the specific text element INSIDE the button (for the text change)
    const toggleBtnText = toggleBtn.querySelector(".btn-label");
    
    const content = card.querySelector(".job-card_content"); 
    
    const applyBtn = card.querySelector(".apply-btn");

    // SAFETY CHECK: Prevents crash if elements aren't found
    if (!toggleBtn || !content || !applyBtn) return;

    const contentItems = content.children;

    // Initial Setup
    gsap.set(content, { height: 0, overflow: "hidden" });
    gsap.set(applyBtn, { autoAlpha: 0 });
    gsap.set(contentItems, { autoAlpha: 0, y: 20 });

    // Create Timeline
    const tl = gsap.timeline({ 
      paused: true, 
      reversed: true 
    });

    tl.to(content, {
      height: "auto",
      duration: 0.6,
      ease: "power2.out"
    })
    .to(contentItems, {
      autoAlpha: 1,
      y: 0,
      duration: 0.4,
      stagger: 0.1,
      ease: "power2.out"
    }, "<0.2")
    .to(applyBtn, {
      autoAlpha: 1,
      duration: 0.3
    }, "<");

    // Interaction Logic
    toggleBtn.addEventListener("click", () => {
      if (tl.reversed()) {
        tl.play();
        // Update only the text element, preserving the button's layout
    if(toggleBtnText) toggleBtnText.innerText = "SHOW LESS";
  } else {

    // CLOSING: Delay text change
        tl.reverse();
        
    // Wait 600ms (matching the 0.6s animation) before changing text
        setTimeout(() => {
           toggleBtn.innerText = "LEARN MORE";
        }, 600);
      }
    });

  }); // End forEach

}); // End DOMContentLoaded

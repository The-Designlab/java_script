document.addEventListener("DOMContentLoaded", () => {
  
  // Select all card containers
  const jobcards = document.querySelectorAll(".job-card");

  jobcards.forEach((card) => {
    
    // SCOPED SELECTORS:
    const toggleBtn = card.querySelector(".visibility-button");
    
    
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
        toggleBtn.innerText = "Show Less";
      } else {
        tl.reverse();
        toggleBtn.innerText = "Learn More";
      }
    });

  }); // End forEach

}); // End DOMContentLoaded

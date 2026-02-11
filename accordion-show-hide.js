document.addEventListener("DOMContentLoaded", () => {
  
  // Select all card containers
  const jobCards = document.querySelectorAll(".job-card");

  jobCards.forEach((card) => {
    
    // 1. Select elements
    const toggleBtn = card.querySelector(".visibility-button");
    const content = card.querySelector(".job-card-content");
    const applyBtn = card.querySelector(".apply-btn");

    // Safety check
    if (!toggleBtn || !content || !applyBtn) return;

    // 2. Initial Setup
    // We only need to hide the content height and the apply button now
    gsap.set(content, { height: 0, overflow: "hidden" });
    gsap.set(applyBtn, { autoAlpha: 0 });

    // 3. Create Timeline
    const tl = gsap.timeline({ 
      paused: true, 
      reversed: true 
    });

    tl.to(content, {
      height: "auto",
      duration: 0.6,
      ease: "power2.out"
    })
    .to(applyBtn, {
      autoAlpha: 1,
      duration: 0.3
    }, "<0.2"); // "<0.2" starts the fade 0.2s after the height animation begins

    // 4. Interaction Logic
    toggleBtn.addEventListener("click", () => {
      if (tl.reversed()) {
        tl.play();
        toggleBtn.innerText = "Show Less";
      } else {
        tl.reverse();
        toggleBtn.innerText = "Show More";
      }
    });

  });

});

addEventListener("DOMContentLoaded", () => {

// 1. Select all card containers
const cards = document.querySelectorAll(".job-card_body");

// 2. Loop through each card to create a unique scope
cards.forEach((card) => {
  
  // SCOPED SELECTORS:
  // We search only inside the current 'card' element
  const toggleBtn = card.querySelector(".visibility-button");
  const content = card.querySelector(".job-card_content");
  const applyBtn = card.querySelector(".apply-btn");
  const contentItems = content.children; // Selects direct children for stagger

  // 3. Initial Setup (Scoped to this card)
  gsap.set(content, { height: 0, overflow: "hidden" });
  gsap.set(applyBtn, { autoAlpha: 0 });
  gsap.set(contentItems, { autoAlpha: 0, y: 20 });

  // 4. Create a unique Timeline for THIS card
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

  // 5. Interaction Logic
  toggleBtn.addEventListener("click", () => {
    // Optional: Close other cards when opening a new one?
    // If yes, we would need a slight modification here.
    
    if (tl.reversed()) {
      tl.play();
      toggleBtn.innerText = "Show Less";
    } else {
      tl.reverse();
      toggleBtn.innerText = "Learn More";
    }
  });
  
});

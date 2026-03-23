window.Webflow = window.Webflow || [];

window.Webflow.push(function () {
  const items = document.querySelectorAll(".project_listing");
  const isTouchDevice = window.matchMedia("(hover: none), (pointer: coarse)").matches;

  items.forEach(function (item) {
    const image = item.querySelector("#card-image");
    const paragraph = item.querySelector("#paragraph_text");
    const button = item.querySelector(".btn");
    /*const link = item.querySelector("a[href]"); // CMS link inside the card*/

    if (!image || !paragraph || !button /*|| !link*/) return;

    // Initial states
    gsap.set(image, { scale: 1 });
    gsap.set(paragraph, { yPercent: 0, autoAlpha: 1 });
    gsap.set(button, { autoAlpha: 0, yPercent: 150 });

    const tl = gsap.timeline({
      paused: true,
      reversed: true,
      defaults: { duration: 0.3, ease: "power1.out" },
    });

    tl.to(image, { scale: 1.05, duration: 0.6 }, 0)
      .to(paragraph, { yPercent: -100, autoAlpha: 0 }, 0)
      .to(button, { yPercent: 0, autoAlpha: 1, ease: "power1.out" }, 0.1);

    tl.pause(0);

    // Desktop: keep hover behavior
    if (!isTouchDevice) {
      item.addEventListener("mouseover", function () {
        tl.play();
      });
      item.addEventListener("mouseleave", function () {
        tl.reverse();
      });
      return;
    }

    // Touch: 1st tap play, 2nd tap reverse then navigate
    let state = 0; // 0 = original, 1 = animated/active
    let navTimer = null;
    let suppressClicksUntil = 0;

    // Prevent Webflow's default link click on tap 1 & 2
    link.addEventListener("click", function (e) {
      if (Date.now() < suppressClicksUntil) {
        e.preventDefault();
        e.stopPropagation();
      }
    });

    item.addEventListener("pointerdown", function (e) {
      if (e.pointerType !== "touch") return;
      if (!link.contains(e.target)) return; // only run when tapping the CMS link area

      e.preventDefault();
      e.stopPropagation();

      // Suppress the upcoming click from the browser for ~700ms
      suppressClicksUntil = Date.now() + 700;

      if (state === 0) {
        state = 1;
        if (navTimer) clearTimeout(navTimer);
        tl.play();
        return;
      }

      // state === 1 -> tap 2
      state = 0;
      tl.reverse();

      // Match your forward tween timing (image tween is 0.6s)
      const NAV_DELAY_MS = 620;

      if (navTimer) clearTimeout(navTimer);
      navTimer = setTimeout(() => {
        window.location.href = link.href;
      }, NAV_DELAY_MS);
    });

    item.addEventListener("pointercancel", function () {
      state = 0;
      if (navTimer) clearTimeout(navTimer);
      tl.reverse();
    });
  });
});

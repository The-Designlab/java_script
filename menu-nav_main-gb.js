document.addEventListener("DOMContentLoaded", () => {
    const openBtn = document.querySelector(".open-menu_btn");
    const closeBtn = document.querySelector(".close-menu_btn");
    const workBtn = document.querySelector("#work-with-us_btn");
    const workBackBtn = document.querySelector("#work-back_btn");

    gsap.defaults({ duration: 0.4, ease: "power2.out" });

    const tl = gsap.timeline({ paused: true });

    // 1. Open Menu Animation
    tl.to(".nav-logo_wrapper", { yPercent: -100 })
      .to(".open-menu_btn", { yPercent: -100 }, "<")
      .from(".close-menu_btn", { yPercent: 100, autoAlpha: 0 }, "<")
      .from(".black_mask", { duration: 0.8, opacity: 0 }, "<")

      .addLabel("nav-loaded") // main nav fully in

      .from(
        [
          "#about-us_btn",
          "#how-we-work_btn",
          "#gallery_btn",
          "#work-with-us_btn",
          "#contact_btn"
        ],
        {
          opacity: 0,
          y: 10,
          stagger: 0.05
        }
      )
      .addPause()

      // 2. Submenu Animation
      .addLabel("work-with")
      .to(".main-nav__block", { xPercent: -20, autoAlpha: 0 })
      .from(".sub-nav__block", { xPercent: 50, autoAlpha: 0 }, "<")
      .addPause();

    // When the timeline has fully reversed (menu closed)
    tl.eventCallback("onReverseComplete", () => {
        const open = document.querySelector(".open-menu_btn");
        const close = document.querySelector(".close-menu_btn");

        // #region agent log
        fetch("http://127.0.0.1:7320/ingest/365e0f17-ea52-4378-afc8-610a128fe5b4", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-Debug-Session-Id": "b74d19"
          },
          body: JSON.stringify({
            sessionId: "b74d19",
            runId: "pre-fix",
            hypothesisId: "H1",
            location: "nav.js:onReverseComplete",
            message: "Timeline reversed to 0",
            data: {
              time: tl.time(),
              progress: tl.progress(),
              openBtnExists: !!open,
              closeBtnExists: !!close
            },
            timestamp: Date.now()
          })
        }).catch(() => {});
        // #endregion agent log

        // Force a clean, visible state for the open button
        if (open) {
            gsap.set(open, {
                clearProps: "all",   // remove inline transforms/opacity Webflow/GSAP may have set
                autoAlpha: 1
            });
        }
        if (close) {
            gsap.set(close, {
                autoAlpha: 0
            });
        }
    });

    // Event Listeners
    if (openBtn) {
        openBtn.addEventListener("click", () => {
            // #region agent log
            fetch("http://127.0.0.1:7320/ingest/365e0f17-ea52-4378-afc8-610a128fe5b4", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                "X-Debug-Session-Id": "b74d19"
              },
              body: JSON.stringify({
                sessionId: "b74d19",
                runId: "pre-fix",
                hypothesisId: "H2",
                location: "nav.js:openBtn",
                message: "Open button clicked",
                data: { time: tl.time(), progress: tl.progress() },
                timestamp: Date.now()
              })
            }).catch(() => {});
            // #endregion agent log

            tl.play("nav-loaded");
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener("click", (event) => {
            // #region agent log
            fetch("http://127.0.0.1:7320/ingest/365e0f17-ea52-4378-afc8-610a128fe5b4", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                "X-Debug-Session-Id": "b74d19"
              },
              body: JSON.stringify({
                sessionId: "b74d19",
                runId: "pre-fix",
                hypothesisId: "H3",
                location: "nav.js:closeBtn",
                message: "Close button clicked",
                data: { time: tl.time(), progress: tl.progress() },
                timestamp: Date.now()
              })
            }).catch(() => {});
            // #endregion agent log

            tl.reverse(0);
        });
    }

    if (workBtn) {
        workBtn.addEventListener("click", () => {
            // #region agent log
            fetch("http://127.0.0.1:7320/ingest/365e0f17-ea52-4378-afc8-610a128fe5b4", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                "X-Debug-Session-Id": "b74d19"
              },
              body: JSON.stringify({
                sessionId: "b74d19",
                runId: "pre-fix",
                hypothesisId: "H4",
                location: "nav.js:workBtn",
                message: "Work With Us clicked",
                data: { time: tl.time(), progress: tl.progress() },
                timestamp: Date.now()
              })
            }).catch(() => {});
            // #endregion agent log

            tl.play("work-with");
        });
    }

    let backDelay;

    if (workBackBtn) {
        workBackBtn.addEventListener("click", (event) => {
            event.preventDefault();
            event.stopPropagation();

            // #region agent log
            fetch("http://127.0.0.1:7320/ingest/365e0f17-ea52-4378-afc8-610a128fe5b4", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                "X-Debug-Session-Id": "b74d19"
              },
              body: JSON.stringify({
                sessionId: "b74d19",
                runId: "pre-fix",
                hypothesisId: "H5",
                location: "nav.js:workBackBtn",
                message: "Work back clicked",
                data: { time: tl.time(), progress: tl.progress() },
                timestamp: Date.now()
              })
            }).catch(() => {});
            // #endregion agent log

            if (backDelay) backDelay.kill();

            backDelay = gsap.delayedCall(0.1, () => {
                tl.tweenTo("nav-loaded");
            });
        });
    }
});

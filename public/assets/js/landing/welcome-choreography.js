    (function(){
      const railTimers = [];

      function signalVideoReveal(){
        if (window.__mxVideoRevealReady) return;
        window.__mxVideoRevealReady = true;
        window.dispatchEvent(new CustomEvent("mx:video-reveal-ready"));
      }

      function cancel(){
        while (railTimers.length) clearTimeout(railTimers.pop());
        document.querySelector(".lang-pill.mx-hint")?.classList.remove("mx-hint");
        document.querySelector(".brand.is-revealed")?.classList.remove("is-revealed");
      }

      const sw = document.getElementById("lang-switch");
      if (sw){
        const stop = () => cancel();
        ["pointerenter", "pointerdown", "touchstart", "focusin", "click"]
          .forEach(ev => sw.addEventListener(ev, stop, { passive:true }));
      }

      function syncHeaderHeight(){
        const hdr = document.querySelector("header");
        if (!hdr) return;
        const h = Math.round(hdr.getBoundingClientRect().height);
        if (h > 0) document.documentElement.style.setProperty("--mx-hdr-h", h + "px");
      }

      let hdrResizeTimer = null;
      window.addEventListener("resize", () => {
        if (!document.body.classList.contains("mx-cmp-open")) return;
        clearTimeout(hdrResizeTimer);
        hdrResizeTimer = setTimeout(syncHeaderHeight, 120);
      }, { passive:true });

      function startBanner(){
        cancel();

        // Do not automatically open, pulse, or move the language selector
        // while the consent panel is on screen.
        const reduce = window.matchMedia
          && window.matchMedia("prefers-reduced-motion: reduce)").matches;

        const brandEl = document.querySelector(".brand");
        if (!brandEl) {
          signalVideoReveal();
          return;
        }

        const mobile = window.matchMedia("(max-width: 640px)").matches;
        const revealAt = reduce ? 0 : (mobile ? 2320 : 4320);

        railTimers.push(setTimeout(() => {
          brandEl.classList.add("is-revealed");
        }, revealAt));

        railTimers.push(setTimeout(() => {
          const bx = brandEl.querySelector(".brand-x");
          bx?.classList.add("is-lit");
          if (!reduce) window.__mxBrandEffects?.flare?.();

          if (reduce) {
            signalVideoReveal();
          } else {
            // The screen flare lasts 1350 ms. Keep the background black until it has finished.
            railTimers.push(setTimeout(signalVideoReveal, 1350));
          }

          setTimeout(() => {
            bx?.classList.remove("is-lit");
            bx?.classList.add("is-ember");
          }, reduce ? 0 : 1750);
        }, revealAt + (reduce ? 0 : 1450)));
      }

      function settleAfterDecision(){
        document.querySelector(".brand")?.classList.add("is-twinkling");
        // If the visitor decides before the scheduled flare, do not leave the video waiting forever.
        signalVideoReveal();
      }

      function returningVisit(){
        setTimeout(() => {
          const b = document.querySelector(".brand");
          b?.classList.add("is-twinkling");
          const bx = b?.querySelector(".brand-x");
          bx?.classList.add("is-lit");
          setTimeout(() => {
            bx?.classList.remove("is-lit");
            bx?.classList.add("is-ember");
            signalVideoReveal();
          }, 1750);
        }, 600);
      }

      window.__mxWelcome = {
        cancel,
        startBanner,
        settleAfterDecision,
        returningVisit,
        syncHeaderHeight
      };
    })();

    (function(){
      function screenFlare(x){
        const r = x.getBoundingClientRect();
        if (!r.width) return;

        let veil = document.querySelector(".mx-xveil");
        if (!veil){
          veil = document.createElement("div");
          veil.className = "mx-xveil";
          veil.setAttribute("aria-hidden", "true");
          veil.appendChild(document.createElement("i"));
          veil.appendChild(document.createElement("i"));
          document.body.appendChild(veil);
        }

        veil.style.setProperty("--fx", (r.left + r.width / 2) + "px");
        veil.style.setProperty("--fy", (r.top + r.height / 2) + "px");

        veil.classList.remove("is-on");
        void veil.offsetWidth;
        veil.classList.add("is-on");

        clearTimeout(veil.__t);
        veil.__t = setTimeout(() => veil.classList.remove("is-on"), 1350);
      }

      const brandLock = document.querySelector(".brand");
      const brandX = brandLock?.querySelector(".brand-x");

      function fireFlare(){
        if (!brandX || !brandLock) return;

        screenFlare(brandX);

        brandX.classList.remove("is-flaring");
        brandLock.classList.remove("is-flaring");
        void brandX.offsetWidth;
        brandX.classList.add("is-flaring");
        brandLock.classList.add("is-flaring");

        clearTimeout(brandX.__flareTimer);
        brandX.__flareTimer = setTimeout(() => {
          brandX.classList.remove("is-flaring");
          brandLock.classList.remove("is-flaring");
        }, 1000);
      }

      let charge = 0;
      let decayTimer = null;

      function applyCharge(){
        brandX?.style.setProperty("--charge", charge.toFixed(3));
      }

      function decay(){
        clearInterval(decayTimer);
        decayTimer = setInterval(() => {
          charge = Math.max(0, charge - 0.14);
          applyCharge();
          if (charge <= 0) clearInterval(decayTimer);
        }, 260);
      }

      brandLock?.addEventListener("click", (e) => {
        e.preventDefault();
        fireFlare();
      });

      brandLock?.addEventListener("pointerenter", () => {
        clearInterval(decayTimer);
        charge = Math.min(1, charge + 0.34);
        applyCharge();
      });

      brandLock?.addEventListener("pointerleave", decay);

      window.__mxFlare = fireFlare;
      window.__mxBrandEffects = {
        flare: fireFlare
      };
    })();

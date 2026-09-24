    (function(){
      const CONSENT_KEY = "mx_consent";

      /* Dos versiones distintas, a proposito.

         POLICY_VERSION identifica el TEXTO legal. Sube cada vez que se edita
         la redaccion: corregir una frase, anadir el inventario de
         almacenamiento, aclarar una seccion. No invalida nada: queda grabado
         en el registro para saber bajo que version consintio cada visitante.

         CONSENT_SCOPE identifica QUE se trata. Sube solo si cambia el
         tratamiento: una categoria nueva, un proveedor nuevo, una finalidad
         nueva. Solo esto invalida el consentimiento guardado y vuelve a
         preguntar.

         Describir mejor lo que ya se hacia no es un cambio de tratamiento.
         Por eso se puede mejorar el texto sin molestar a nadie. */
      const POLICY_VERSION = "2026-01-01";
      const CONSENT_SCOPE  = 1;
      const EDGE_SCOPE_COOKIE = "__Host-mx-consent-scope";
      const BLOCK_UNTIL_DECIDED = false;

      const welcome = window.__mxWelcome;
      if (!welcome || typeof welcome.startBanner !== "function") {
        throw new Error("MICRORETAILX welcome runtime unavailable");
      }

      const cmpEl = document.getElementById("mx-cmp");
      const appRoot = document.getElementById("app-root");

      const tgAnalytics = document.getElementById("mx-tg-analytics");
      const tgMarketing = document.getElementById("mx-tg-marketing");

      const btnAccept = document.getElementById("mx-btn-accept");
      const btnReject = document.getElementById("mx-btn-reject");
      const btnSave   = document.getElementById("mx-btn-save");

      function readCookie(name){
        const prefix = name + "=";
        const parts = document.cookie ? document.cookie.split(";") : [];

        for (const part of parts){
          const item = part.trim();
          if (!item.startsWith(prefix)) continue;

          const value = item.slice(prefix.length);
          try { return decodeURIComponent(value); }
          catch(_){ return value; }
        }

        return null;
      }

      function edgeScopeMatches(){
        const edgeScope = readCookie(EDGE_SCOPE_COOKIE);
        return edgeScope === null || edgeScope === String(CONSENT_SCOPE);
      }

      function safeParse(json){
        try{ return JSON.parse(json); } catch(_){ return null; }
      }

      function readConsent(){
        if (!edgeScopeMatches()) return null;
        const v = localStorage.getItem(CONSENT_KEY);
        const obj = safeParse(v);
        if (!obj || typeof obj !== "object") return null;
        const scope = (typeof obj.scope === "number") ? obj.scope : obj.v;
        if (scope !== CONSENT_SCOPE) return null;
        if (!obj.choices || typeof obj.choices !== "object") return null;
        return obj;
      }

      function writeConsent(choices){
        const payload = {
          scope: CONSENT_SCOPE,
          policy: POLICY_VERSION,
          ts: new Date().toISOString(),
          choices: {
            necessary: true,
            analytics: !!choices.analytics,
            marketing: !!choices.marketing
          }
        };
        localStorage.setItem(CONSENT_KEY, JSON.stringify(payload));
        return payload;
      }

      function isDecided(){ return !!readConsent(); }

      function lockUI(){
        document.body.classList.add("mx-consent-locked");
        if (appRoot) appRoot.setAttribute("aria-hidden", "true");
      }

      function unlockUI(){
        document.body.classList.remove("mx-consent-locked");
        if (appRoot) appRoot.removeAttribute("aria-hidden");
      }

      function setToggle(btn, on){
        if (!btn) return;
        btn.setAttribute("data-on", on ? "1" : "0");
      }

      function getToggle(btn){
        if (!btn) return 0;
        return btn.getAttribute("data-on") === "1" ? 1 : 0;
      }

      function toggle(btn){
        setToggle(btn, getToggle(btn) ? 0 : 1);
      }

      function openCMP(mode){
        if (!cmpEl) return;

        const existing = readConsent();
        setToggle(tgAnalytics, existing?.choices?.analytics ? 1 : 0);
        setToggle(tgMarketing, existing?.choices?.marketing ? 1 : 0);

        const asBanner = (mode === "banner");
        cmpEl.classList.toggle("is-banner", asBanner);
        cmpEl.classList.add("is-open");

        if (asBanner){
          cmpEl.removeAttribute("aria-modal");
          unlockUI();

          welcome.syncHeaderHeight();
          document.body.classList.add("mx-cmp-open");
          welcome.startBanner();
        } else {
          cmpEl.setAttribute("aria-modal", "true");
          lockUI();
          document.body.classList.remove("mx-cmp-open");
        }
      }

      function closeCMP(){
        if (!cmpEl) return;
        cmpEl.classList.remove("is-open");
        cmpEl.classList.remove("is-banner");
        cmpEl.removeAttribute("aria-modal");

        welcome.cancel();
        document.body.classList.remove("mx-cmp-open");
        document.getElementById("lang-switch")?.classList.remove("is-open");
        welcome.settleAfterDecision();

        unlockUI();
      }

      function acceptAll(){
        writeConsent({ analytics:true, marketing:true });
        closeCMP();
      }

      function rejectAll(){
        writeConsent({ analytics:false, marketing:false });
        closeCMP();
      }

      function savePrefs(){
        writeConsent({
          analytics: !!getToggle(tgAnalytics),
          marketing: !!getToggle(tgMarketing)
        });
        closeCMP();
      }

      tgAnalytics?.addEventListener("click", (e) => { e.preventDefault(); toggle(tgAnalytics); });
      tgMarketing?.addEventListener("click", (e) => { e.preventDefault(); toggle(tgMarketing); });

      btnAccept?.addEventListener("click", (e) => { e.preventDefault(); acceptAll(); });
      btnReject?.addEventListener("click", (e) => { e.preventDefault(); rejectAll(); });
      btnSave?.addEventListener("click", (e) => { e.preventDefault(); savePrefs(); });

      const gear = document.getElementById("cookiePreferencesGear");
      gear?.addEventListener("click", (e) => {
        e.preventDefault();
        openCMP("modal");
      });

      document.addEventListener("keydown", (e) => {
        if (e.key !== "Escape") return;
        if (!isDecided() && cmpEl?.classList.contains("is-open")) return;
        if (cmpEl?.classList.contains("is-open")) closeCMP();
      });

      window.__mxConsent = {
        isDecided,
        getConsent: () => readConsent(),
        open: () => openCMP("modal"),
        openBanner: () => openCMP("banner"),
        acceptAll,
        rejectAll,
        savePrefs,
        reset: () => {
          localStorage.removeItem(CONSENT_KEY);
          openCMP(BLOCK_UNTIL_DECIDED ? "modal" : "banner");
        }
      };

      if (!isDecided()){
        openCMP(BLOCK_UNTIL_DECIDED ? "modal" : "banner");
      } else {
        welcome.returningVisit();
      }
    })();

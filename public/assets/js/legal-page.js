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
      const POLICY_VERSION = window.MX_PAGE.policyVersion;
      const CONSENT_SCOPE  = 1;

      const BLOCK_UNTIL_DECIDED = false;

      const cmpEl = document.getElementById("mx-cmp");
      const appRoot = document.getElementById("app-root");

      const tgAnalytics = document.getElementById("mx-tg-analytics");
      const tgMarketing = document.getElementById("mx-tg-marketing");

      const btnAccept = document.getElementById("mx-btn-accept");
      const btnReject = document.getElementById("mx-btn-reject");
      const btnSave   = document.getElementById("mx-btn-save");

      function safeParse(json){
        try{ return JSON.parse(json); } catch(_){ return null; }
      }

      function readConsent(){
        let v = null;
        try { v = localStorage.getItem(CONSENT_KEY); } catch(e) { v = null; }
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
        const on = getToggle(btn);
        setToggle(btn, on ? 0 : 1);
      }

      const railTimers = [];

      function cancelRailChoreo(){
        while (railTimers.length) clearTimeout(railTimers.pop());
        document.querySelector(".lang-pill.mx-hint")?.classList.remove("mx-hint");
      }

      (function(){
        const sw = document.getElementById("lang-switch");
        if (!sw) return;
        const stop = () => cancelRailChoreo();
        ["pointerenter", "pointerdown", "touchstart", "focusin", "click"]
          .forEach(ev => sw.addEventListener(ev, stop, { passive:true }));
      })();

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

          syncHeaderHeight();
          document.body.classList.add("mx-cmp-open");

          cancelRailChoreo();
          // No automatic language-menu choreography while the CMP is visible.

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
        cancelRailChoreo();
        document.body.classList.remove("mx-cmp-open");
        document.getElementById("lang-switch")?.classList.remove("is-open");
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
        reset: () => { localStorage.removeItem(CONSENT_KEY); openCMP(BLOCK_UNTIL_DECIDED ? "modal" : "banner"); }
      };

      if (!isDecided()){
        openCMP(BLOCK_UNTIL_DECIDED ? "modal" : "banner");
      }
    })();

    (function(){
      const I18N = window.MX_PAGE.i18n;

      const RTL_LANGS = new Set(["ar", "he"]);
      const DEFAULT_LANG = "en";
      const storageKey = "mx_lang";
      const TITLE_MAP = window.MX_PAGE.titleMap;

      const DESC_MAP = window.MX_PAGE.descriptionMap;

      const LANG_FALLBACK = {
        gl:  "es",
        ast: "es",
        an:  "es",
        oc:  "ca"
      };

      const COUNTRY_LANG = {
        ES:"es", MX:"es", AR:"es", CO:"es", PE:"es", CL:"es", VE:"es", EC:"es",
        GT:"es", CU:"es", BO:"es", DO:"es", HN:"es", PY:"es", SV:"es", NI:"es",
        CR:"es", PA:"es", UY:"es", GQ:"es",
        FR:"fr", MC:"fr", SN:"fr", CI:"fr", ML:"fr", BF:"fr", NE:"fr", CD:"fr",
        DE:"de", AT:"de", CH:"de",
        IT:"it", SM:"it",
        PT:"pt", BR:"pt",
        NL:"nl", BE:"nl",
        KR:"ko", ID:"id", TH:"th", VN:"vi",
        CN:"zh", TW:"zh", HK:"zh", MO:"zh", SG:"zh",
        IN:"hi", JP:"ja",
        RU:"ru", BY:"ru", KZ:"ru", KG:"ru",
        IL:"he",
        SA:"ar", AE:"ar", EG:"ar", MA:"ar", DZ:"ar", TN:"ar", QA:"ar", KW:"ar",
        BH:"ar", OM:"ar", JO:"ar", LB:"ar", IQ:"ar", LY:"ar", SD:"ar", YE:"ar",
        SY:"ar", PS:"ar", MR:"ar",
        US:"en", GB:"en", AU:"en", NZ:"en", IE:"en"
      };

      const TZ_COUNTRY = {
        "europe/madrid":"ES", "atlantic/canary":"ES", "africa/ceuta":"ES",
        "europe/paris":"FR", "europe/monaco":"FR",
        "europe/berlin":"DE", "europe/vienna":"AT", "europe/zurich":"CH",
        "europe/rome":"IT", "europe/lisbon":"PT", "america/sao_paulo":"BR",
        "europe/amsterdam":"NL", "europe/brussels":"BE",
        "asia/seoul":"KR", "asia/jakarta":"ID", "asia/makassar":"ID", "asia/bangkok":"TH", "asia/ho_chi_minh":"VN",
        "europe/moscow":"RU", "europe/minsk":"BY", "asia/almaty":"KZ",
        "asia/shanghai":"CN", "asia/taipei":"TW", "asia/hong_kong":"HK",
        "asia/macau":"MO", "asia/singapore":"SG",
        "asia/kolkata":"IN", "asia/calcutta":"IN", "asia/tokyo":"JP",
        "africa/casablanca":"MA", "africa/algiers":"DZ", "africa/tunis":"TN",
        "africa/cairo":"EG", "asia/riyadh":"SA", "asia/dubai":"AE",
        "asia/qatar":"QA", "asia/kuwait":"KW", "asia/baghdad":"IQ",
        "asia/beirut":"LB", "asia/amman":"JO", "asia/jerusalem":"IL",
        "america/mexico_city":"MX", "america/argentina/buenos_aires":"AR",
        "america/bogota":"CO", "america/lima":"PE", "america/santiago":"CL",
        "america/caracas":"VE", "america/guayaquil":"EC", "america/havana":"CU",
        "america/montevideo":"UY", "america/panama":"PA",
        "europe/london":"GB", "europe/dublin":"IE",
        "america/new_york":"US", "america/chicago":"US", "america/denver":"US",
        "america/los_angeles":"US", "australia/sydney":"AU", "pacific/auckland":"NZ"
      };

      function detectCountry(){
        const prefs = (Array.isArray(navigator.languages) && navigator.languages.length)
          ? navigator.languages
          : [navigator.language || navigator.userLanguage || ""];

        for (const raw of prefs){
          const parts = String(raw || "").split("-");
          for (const part of parts.slice(1)){
            if (/^[A-Za-z]{2}$/.test(part)) return part.toUpperCase();
          }
        }

        try {
          const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
          if (tz) return TZ_COUNTRY[String(tz).toLowerCase()] || null;
        } catch(e) {  }

        return null;
      }

      function detectBrowserLang(){
        const supported = new Set(Object.keys(I18N));
        const prefs = (Array.isArray(navigator.languages) && navigator.languages.length)
          ? navigator.languages
          : [navigator.language || navigator.userLanguage || DEFAULT_LANG];

        for (const raw of prefs){
          if (!raw) continue;
          const tag = String(raw).toLowerCase();

          if (supported.has(tag)) return tag;

          const base = tag.split("-")[0];
          if (supported.has(base)) return base;

          const near = LANG_FALLBACK[base];
          if (near && supported.has(near)) return near;
        }

        const country = detectCountry();
        const byCountry = country ? COUNTRY_LANG[country] : null;
        if (byCountry && supported.has(byCountry)) return byCountry;

        return null;
      }

      function getLang(){
        let saved = null;
        try { saved = localStorage.getItem(storageKey); } catch(e) { saved = null; }
        if (saved && I18N[saved]) return saved;

        const detected = detectBrowserLang();
        if (detected) return detected;

        return DEFAULT_LANG;
      }

      function setLang(lang){ try { localStorage.setItem(storageKey, lang); } catch(e) {  } }

      function escapeHtml(s){
        return String(s)
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/"/g, "&quot;")
          .replace(/'/g, "&#39;");
      }

      function formatLegalHTML(text){
        const raw = String(text ?? "");
        const split = raw.split(/\n\s*\n(?=1\.)/);
        const head = split[0] || raw;
        const body = split.length > 1 ? split.slice(1).join("\n\n") : "";

        const headHtml = escapeHtml(head);
        const bodyHtml = body.split("\n").map((line) => {
          const heading = line.match(/^\s*(\d{1,2})\.\s+(.+?)\s*$/);
          if (!heading) return escapeHtml(line);
          return `<span class="legal-section" data-legal-section="${heading[1]}">${escapeHtml(line)}</span>`;
        }).join("\n");

        if (!body) return `<div class="legal-head">${headHtml}</div>`;
        return `<div class="legal-head">${headHtml}</div><div class="legal-sep" aria-hidden="true"></div><div class="legal-body">${bodyHtml}</div>`;
      }

function applyLang(lang){

        try{
          const dict = I18N[lang] || I18N[DEFAULT_LANG];

          document.title = (TITLE_MAP[lang] || TITLE_MAP[DEFAULT_LANG]);
          const metaDesc = document.querySelector('meta[name="description"]');
          if (metaDesc) metaDesc.setAttribute("content", (DESC_MAP[lang] || DESC_MAP[DEFAULT_LANG]));

          const html = document.documentElement;
          html.lang = lang;

          const isRTL = RTL_LANGS.has(lang);
          html.dir = isRTL ? "rtl" : "ltr";
          const appRoot = document.getElementById("app-root");
          if (appRoot) appRoot.setAttribute("dir", isRTL ? "rtl" : "ltr");

          const legal = document.querySelector('.legalcopy[data-i18n="card.terms"]');
          if (legal) legal.setAttribute("dir", isRTL ? "rtl" : "ltr");

          const switchEl = document.getElementById("lang-switch");

          if (!document.body.classList.contains("mx-cmp-open")){
            switchEl?.classList.remove("is-open");
          }
          switchEl?.classList.remove("open-right");

          const railEl = document.getElementById("lang-rail");
          if (railEl){
            railEl.querySelectorAll(".lang-pill").forEach(btn => {
              const l = btn.getAttribute("data-lang");
              const supported = !!(l && I18N[l]);
              const active = supported && (l === lang);

              btn.hidden = !supported;
              btn.classList.toggle("is-active", active);
              if (active) btn.setAttribute("aria-current", "true");
              else btn.removeAttribute("aria-current");
            });
            railEl.scrollLeft = 0;
          }

          const nodes = Array.from(document.querySelectorAll("[data-i18n]"));

          const paint = () => {
            nodes.forEach(el => {
              const key = el.getAttribute("data-i18n");
              if (!key) return;
              const val = dict[key] ?? I18N[DEFAULT_LANG][key];
              if (typeof val !== "string") return;

              if (el.classList.contains("legalcopy")) {
                el.innerHTML = formatLegalHTML(val);
              } else {
                el.textContent = val;
              }
            });

            document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
              const key = el.getAttribute("data-i18n-placeholder");
              const val = key ? (dict[key] ?? I18N[DEFAULT_LANG][key]) : null;
              if (typeof val === "string") el.setAttribute("placeholder", val);
            });

            document.querySelectorAll("[data-i18n-aria-label]").forEach(el => {
              const key = el.getAttribute("data-i18n-aria-label");
              const val = key ? (dict[key] ?? I18N[DEFAULT_LANG][key]) : null;
              if (typeof val === "string") el.setAttribute("aria-label", val);
            });

            document.querySelectorAll("[data-i18n-title]").forEach(el => {
              const key = el.getAttribute("data-i18n-title");
              const val = key ? (dict[key] ?? I18N[DEFAULT_LANG][key]) : null;
              if (typeof val === "string") el.setAttribute("title", val);
            });

            const gear = document.getElementById("cookiePreferencesGear");
            if (gear){
              const tip = dict["cookie.prefs"] ?? I18N[DEFAULT_LANG]["cookie.prefs"];
              if (typeof tip === "string") {
                gear.setAttribute("data-tip", tip);
                gear.setAttribute("aria-label", tip);
              }
            }

            const toolMap = {
              "font-up":"tools.fontup",
              "font-down":"tools.fontdown",
              "readable":"tools.readable",
              "contrast":"tools.contrast",
              "lightbg":"tools.light",
              "audio":"tools.audio",
              "pdf":"tools.pdf",
              "reset":"tools.reset"
            };

            document.querySelectorAll(".tool-pill[data-action]").forEach(btn => {
              const action = btn.getAttribute("data-action");
              const key = action ? toolMap[action] : null;
              const label = key ? (dict[key] ?? I18N[DEFAULT_LANG][key]) : null;
              if (typeof label !== "string") return;
              btn.setAttribute("data-label", label);
              if (action === "pdf") {
                btn.setAttribute("aria-label", label);
                btn.setAttribute("title", label);
              }
            });

            document.documentElement.classList.add('i18n-ready');
            document.documentElement.classList.add('mx-i18n-ready');
          };

          paint();
          document.documentElement.classList.add('mx-ui-ready');

        } finally {}
      }

      window.__mxApplyLang = applyLang;
      applyLang(getLang());

      (function(){
        const btn = document.getElementById("mx-reader-toggle");
        if (!btn) return;

        const KEY = "mx_reader_immersive";
        let saved = null; try { saved = localStorage.getItem(KEY); } catch(e) { saved = null; }
        if (saved === "1") document.body.classList.add("mx-immersive");

        btn.addEventListener("click", (e) => {
          e.preventDefault();
          document.body.classList.toggle("mx-immersive");
          localStorage.setItem(KEY, document.body.classList.contains("mx-immersive") ? "1" : "0");
        });
      })();

      (function(){
        const rail = document.getElementById("lang-rail");
        if (!rail) return;

        const isTouch = ("ontouchstart" in window) || (navigator.maxTouchPoints > 0);

        const TAP_MOVE_PX = 14;
        const TAP_SCROLL_PX = 6;

        let startX = 0, startY = 0, startScroll = 0;
        let dragging = false;
        let pressedBtn = null;

        function ptFromTouch(t){ return { x: t.clientX, y: t.clientY }; }

        rail.addEventListener("touchstart", (e) => {
          const targetBtn = e.target && e.target.closest ? e.target.closest(".lang-pill") : null;
          pressedBtn = targetBtn && rail.contains(targetBtn) ? targetBtn : null;

          if (!e.touches || e.touches.length === 0) return;
          const p = ptFromTouch(e.touches[0]);
          startX = p.x;
          startY = p.y;
          startScroll = rail.scrollLeft;
          dragging = false;

          if (pressedBtn){
            e.preventDefault();
          }
        }, { passive:false });

        rail.addEventListener("touchmove", (e) => {
          if (!e.touches || e.touches.length === 0) return;

          const p = ptFromTouch(e.touches[0]);
          const dx = Math.abs(p.x - startX);
          const dy = Math.abs(p.y - startY);
          const ds = Math.abs(rail.scrollLeft - startScroll);

          if (dx > TAP_MOVE_PX || dy > TAP_MOVE_PX || ds > TAP_SCROLL_PX){
            dragging = true;
          }
        }, { passive:true });

        rail.addEventListener("touchend", (e) => {
          if (dragging){ pressedBtn = null; return; }

          let btn = pressedBtn;

          if (!btn){
            const ct = e.changedTouches && e.changedTouches[0];
            if (ct){
              const p = ptFromTouch(ct);
              const el = document.elementFromPoint(p.x, p.y);
              const maybe = el && el.closest ? el.closest(".lang-pill") : null;
              if (maybe && rail.contains(maybe)) btn = maybe;
            }
          }

          if (!btn || btn.hidden){ pressedBtn = null; return; }

          e.preventDefault();
          e.stopPropagation();

          const lang = btn.getAttribute("data-lang") || DEFAULT_LANG;
          setLang(lang);
          window.__mxApplyLang(lang);

          btn.blur();
          if (document.activeElement && document.activeElement.blur) document.activeElement.blur();

          pressedBtn = null;
        }, { passive:false });

        rail.addEventListener("touchcancel", () => {
          dragging = false;
          pressedBtn = null;
        }, { passive:true });

        rail.addEventListener("click", (e) => {
          e.preventDefault();
          e.stopPropagation();
        }, true);

        if (!isTouch){
          let downX = 0, downY = 0;
          let pDragging = false;

          rail.addEventListener("pointerdown", (e) => {
            const btn = e.target && e.target.closest ? e.target.closest(".lang-pill") : null;
            if (btn) e.preventDefault();
            downX = e.clientX; downY = e.clientY;
            pDragging = false;
          }, { passive:false });

          rail.addEventListener("pointermove", (e) => {
            if (Math.abs(e.clientX - downX) > 10 || Math.abs(e.clientY - downY) > 10) pDragging = true;
          }, { passive:true });

          rail.addEventListener("pointerup", (e) => {
            if (pDragging) return;

            const el = document.elementFromPoint(e.clientX, e.clientY);
            const btn = el && el.closest ? el.closest(".lang-pill") : null;
            if (!btn || !rail.contains(btn) || btn.hidden) return;

            const lang = btn.getAttribute("data-lang") || DEFAULT_LANG;
            setLang(lang);
            window.__mxApplyLang(lang);

            btn.blur();
            if (document.activeElement && document.activeElement.blur) document.activeElement.blur();
          }, { passive:true });
        }
      })();

    })();

    (function(){

    (function(){
      const switchEl = document.getElementById('tools-switch');
      const railEl   = document.getElementById('tools-rail');
      if (!switchEl || !railEl) return;

      let openTimer = null;
      let closeTimer = null;
      let locked = false;

      const OPEN_DELAY_MS  = 420;
      const CLOSE_DELAY_MS = 3200;

      let firstOpen = true;

      function clearTimers(){
        if (openTimer)  { clearTimeout(openTimer);  openTimer = null; }
        if (closeTimer) { clearTimeout(closeTimer); closeTimer = null; }
      }

      function ensureStartVisibleOnce(){
        if (!firstOpen) return;
        railEl.scrollLeft = 0;
        firstOpen = false;
      }

      function resetShift(){
        railEl.style.setProperty('--rail-shift', '0px');
      }

      function clampRailIntoViewport(){
        const vw = window.innerWidth || document.documentElement.clientWidth;
        const margin = 8;

        resetShift();

        const rect = railEl.getBoundingClientRect();
        let shift = 0;

        if (rect.left < margin){
          shift = (margin - rect.left);
        } else if (rect.right > (vw - margin)){
          shift = - (rect.right - (vw - margin));
        }

        if (shift !== 0){
          railEl.style.setProperty('--rail-shift', `${Math.round(shift)}px`);
        }
      }

      function placeRailSmart(){
        railEl.classList.add('is-measuring');
        requestAnimationFrame(() => railEl.classList.remove('is-measuring'));

        switchEl.classList.remove('open-right');
        resetShift();

        const vw = window.innerWidth || document.documentElement.clientWidth;
        const margin = 8;

        let rect = railEl.getBoundingClientRect();

        if (rect.left < -margin){
          switchEl.classList.add('open-right');
          rect = railEl.getBoundingClientRect();
        }

        if (rect.right > vw + margin){
          switchEl.classList.remove('open-right');
        }

        clampRailIntoViewport();
      }

      function openRail(){
        const y = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
        requestAnimationFrame(() => window.scrollTo(0, y));

        switchEl.classList.add('is-open');

        requestAnimationFrame(() => {
          ensureStartVisibleOnce();
          placeRailSmart();
        });
      }

      function closeRail(){
        locked = false;
        switchEl.classList.remove('is-open');
        switchEl.classList.remove('open-right');
        resetShift();
      }

      function scheduleOpen(){
        clearTimers();
        openTimer = setTimeout(() => openRail(), OPEN_DELAY_MS);
      }
      function scheduleClose(){
        clearTimers();
        closeTimer = setTimeout(() => closeRail(), CLOSE_DELAY_MS);
      }

      switchEl.addEventListener('pointerenter', () => {
        if (closeTimer) { clearTimeout(closeTimer); closeTimer = null; }
        if (switchEl.classList.contains('is-open')) return;
        scheduleOpen();
      });

      switchEl.addEventListener('pointerleave', () => {
        if (!switchEl.classList.contains('is-open')) { clearTimers(); return; }
        if (locked) return;
        scheduleClose();
      });

      railEl.addEventListener('pointerenter', () => {
        locked = true;
        clearTimers();
        openRail();
      });

      railEl.addEventListener('pointerleave', () => {
        locked = false;
        scheduleClose();
      });

      const trigger = switchEl.querySelector('.tools-trigger');
      function toggleRail(){
        clearTimers();
        if (switchEl.classList.contains('is-open')) closeRail();
        else openRail();
        trigger?.blur();
        if (document.activeElement && document.activeElement.blur) document.activeElement.blur();
      }

      trigger?.addEventListener('click', (e) => { e.preventDefault(); e.stopPropagation(); toggleRail(); });
      document.addEventListener('click', (e) => {
        if (!switchEl.classList.contains('is-open')) return;
        if (switchEl.contains(e.target)) return;
        closeRail();
      });

      window.addEventListener('resize', () => {
        if (!switchEl.classList.contains('is-open')) return;
        requestAnimationFrame(() => placeRailSmart());
      }, { passive:true });
    })();

    (function(){
      const KEY = "mx_a11y";
      const root = document.documentElement;

      const state = (function(){
        try{ return JSON.parse(localStorage.getItem(KEY) || "{}"); }catch(_){ return {}; }
      })();

      function clamp(n, a, b){ return Math.max(a, Math.min(b, n)); }

      function apply(){
        const scale = clamp(Number.isFinite(Number(state.scale)) ? Number(state.scale) : 1, 0.9, 1.35);
        root.style.setProperty("--a11y-font-scale", String(scale));

        document.body.classList.toggle("mx-a11y-grayscale", !!state.gray);
        document.body.classList.toggle("mx-a11y-high-contrast", !!state.hc);
        document.body.classList.toggle("mx-a11y-lightbg", !!state.light);
        document.body.classList.toggle("mx-a11y-readable", !!state.readable);
        document.body.classList.toggle("mx-a11y-underline", !!state.underline);

        const activeActions = {
          readable: !!state.readable,
          underline: !!state.underline,
          contrast: !!state.hc,
          lightbg: !!state.light,
          grayscale: !!state.gray
        };
        document.querySelectorAll(".tool-pill[data-action]").forEach((button) => {
          const action = button.getAttribute("data-action");
          const active = !!activeActions[action];
          button.classList.toggle("is-active", active);
          if (Object.prototype.hasOwnProperty.call(activeActions, action)) {
            button.setAttribute("aria-pressed", active ? "true" : "false");
          }
        });

        try{ localStorage.setItem(KEY, JSON.stringify(state)); }catch(_){}
      }

      let mxUtterance = null;
      let mxSpeaking = false;

      function getBestVoice(lang){
        const voices = speechSynthesis.getVoices();
        const preferred = voices.filter(v =>
          v.lang && v.lang.toLowerCase().startsWith(lang.toLowerCase())
        );
        return preferred.find(v => /Google|Microsoft|Natural|Premium/i.test(v.name)) || preferred[0] || voices[0];
      }

      function toggleAudio(){
        if (!window.speechSynthesis) return;

        if (mxSpeaking){
          window.speechSynthesis.pause(); document.body.classList.remove('mx-audio-playing');
          mxSpeaking = false;
          return;
        }

        const el = document.querySelector('[data-reader-document]') || document.querySelector('[data-i18n="card.terms"]');
        if (!el) return;

        window.speechSynthesis.cancel();
        mxUtterance = new SpeechSynthesisUtterance(el.textContent);
        const lang = document.documentElement.lang || "en";
        mxUtterance.lang = lang;
        mxUtterance.voice = getBestVoice(lang);
        mxUtterance.rate = 0.95;
        mxUtterance.pitch = 1;

        mxUtterance.onend = () => { mxSpeaking = false; document.body.classList.remove('mx-audio-playing'); };
        mxSpeaking = true; document.body.classList.add('mx-audio-playing');
        window.speechSynthesis.speak(mxUtterance);
      }

      function downloadText(){
        const el = document.querySelector('[data-reader-document]') || document.querySelector('[data-i18n="card.terms"]');
        const txt = el ? el.textContent : document.body.innerText;
        const blob = new Blob([txt], { type: "text/plain;charset=utf-8" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = (el && el.dataset.readerFilename ? el.dataset.readerFilename : "MICRORETAILX_TERMS") + ".txt";
        document.body.appendChild(a);
        a.click();
        a.remove();
        setTimeout(() => URL.revokeObjectURL(url), 4000);
      }

      function savePdf(){

        window.print();
      }

      apply();

      const rail = document.getElementById("tools-rail");
      if (!rail) return;

      rail.addEventListener("click", (e) => {
        const btn = e.target && e.target.closest ? e.target.closest(".tool-pill") : null;
        if (!btn) return;
        e.preventDefault();
        e.stopPropagation();

        const act = btn.getAttribute("data-action");
        if (!act) return;

        if (act === "font-up"){ state.scale = (Number.isFinite(Number(state.scale)) ? Number(state.scale) : 1) + 0.08; }
        else if (act === "font-down"){ state.scale = (Number.isFinite(Number(state.scale)) ? Number(state.scale) : 1) - 0.08; }
        else if (act === "readable"){ state.readable = !state.readable; }
        else if (act === "underline"){ state.underline = !state.underline; }
        else if (act === "contrast"){ state.hc = !state.hc; }

        else if (act === "lightbg"){ state.light = !state.light; state.inv = false; }

        else if (act === "audio"){ toggleAudio(); return; }
        else if (act === "top"){ window.scrollTo({top:0, behavior:"smooth"}); return; }
        else if (act === "bottom"){ window.scrollTo({top:document.body.scrollHeight, behavior:"smooth"}); return; }
        else if (act === "pdf"){ savePdf(); return; }
        else if (act === "download"){ downloadText(); return; }
        else if (act === "reset"){
          for (const k of Object.keys(state)) delete state[k];
          state.scale = 1;
        }

        apply();
      }, true);
    })();

          const switchEl = document.getElementById('lang-switch');
      const railEl   = document.getElementById('lang-rail');
      if (!switchEl || !railEl) return;

      let openTimer = null;
      let closeTimer = null;
      let locked = false;

      const OPEN_DELAY_MS  = 500;
      const CLOSE_DELAY_MS = 3000;

      let firstOpen = true;

      function clearTimers(){
        if (openTimer)  { clearTimeout(openTimer);  openTimer = null; }
        if (closeTimer) { clearTimeout(closeTimer); closeTimer = null; }
      }

      function ensureStartVisibleOnce(){
        if (!firstOpen) return;
        railEl.scrollLeft = 0;
        firstOpen = false;
      }

      function resetShift(){
        railEl.style.setProperty('--rail-shift', '0px');
      }

      function clampRailIntoViewport(){
        const vw = window.innerWidth || document.documentElement.clientWidth;
        const margin = 8;

        resetShift();

        const rect = railEl.getBoundingClientRect();
        let shift = 0;

        if (rect.left < margin){
          shift = (margin - rect.left);
        } else if (rect.right > (vw - margin)){
          shift = - (rect.right - (vw - margin));
        }

        if (shift !== 0){
          railEl.style.setProperty('--rail-shift', `${Math.round(shift)}px`);
        }
      }

      function placeRailSmart(){
        railEl.classList.add('is-measuring');
        requestAnimationFrame(() => railEl.classList.remove('is-measuring'));

        switchEl.classList.remove('open-right');
        resetShift();

        const vw = window.innerWidth || document.documentElement.clientWidth;
        const margin = 8;

        let rect = railEl.getBoundingClientRect();

        if (rect.left < -margin){
          switchEl.classList.add('open-right');
          rect = railEl.getBoundingClientRect();
        }

        if (rect.right > vw + margin){
          switchEl.classList.remove('open-right');
        }

        clampRailIntoViewport();
      }

      const isMobileSheet = () => window.matchMedia("(max-width: 640px)").matches;

      function syncSheetLock(){
        const open = switchEl.classList.contains('is-open') && isMobileSheet();
        document.body.classList.toggle('mx-sheet-open', open);
      }

      switchEl.addEventListener('click', (e) => {
        if (e.target === switchEl) closeRail();
      });

      function openRail(){
        const y = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
        requestAnimationFrame(() => window.scrollTo(0, y));

        switchEl.classList.add('is-open');
        syncSheetLock();

        if (isMobileSheet()) return;

        requestAnimationFrame(() => {
          ensureStartVisibleOnce();
          placeRailSmart();
        });
      }

      function closeRail(){
        locked = false;
        switchEl.classList.remove('is-open');
        switchEl.classList.remove('open-right');
        resetShift();
        syncSheetLock();
      }

      function scheduleOpen(){
        clearTimers();
        openTimer = setTimeout(() => openRail(), OPEN_DELAY_MS);
      }
      function scheduleClose(){
        clearTimers();
        closeTimer = setTimeout(() => closeRail(), CLOSE_DELAY_MS);
      }

      switchEl.addEventListener('pointerenter', () => {
        if (closeTimer) { clearTimeout(closeTimer); closeTimer = null; }
        if (switchEl.classList.contains('is-open')) return;
        scheduleOpen();
      });

      switchEl.addEventListener('pointerleave', () => {
        if (!switchEl.classList.contains('is-open')) { clearTimers(); return; }
        if (locked) return;
        scheduleClose();
      });

      railEl.addEventListener('pointerenter', () => {
        locked = true;
        clearTimers();
        openRail();
      });

      railEl.addEventListener('pointerleave', () => {
        locked = false;
        scheduleClose();
      });

      const trigger = switchEl.querySelector('.lang-trigger');
      let _touchHandled = false;

      function toggleRail(){
        clearTimers();
        if (switchEl.classList.contains('is-open')) closeRail();
        else openRail();

        trigger?.blur();
        if (document.activeElement && document.activeElement.blur) document.activeElement.blur();
      }

      trigger?.addEventListener('touchstart', (e) => {
        _touchHandled = true;
        e.preventDefault();
        toggleRail();
        setTimeout(() => { _touchHandled = false; }, 450);
      }, { passive: false });

      trigger?.addEventListener('click', (e) => {
        if (_touchHandled) return;
        e.preventDefault();
        toggleRail();
      });

      window.addEventListener('resize', () => {
        if (!switchEl.classList.contains('is-open')) return;
        requestAnimationFrame(() => placeRailSmart());
      });
    })();

    (function(){
      const v = document.getElementById('verticals');
      if (!v) return;

      function setOpen(isOpen){
        v.classList.toggle('is-open', isOpen);
        v.setAttribute('aria-expanded', isOpen ? 'true' : 'false');

        /* En movil el desplegable es un panel acoplado abajo: mientras
           este abierto, la pagina de detras no debe desplazarse. */
        if (window.matchMedia("(max-width: 640px)").matches){
          document.body.classList.toggle('mx-sheet-open', isOpen);
        } else {
          document.body.classList.remove('mx-sheet-open');
        }
      }
      function isOpen(){ return v.classList.contains('is-open'); }

      v.addEventListener('click', (e) => {
        const a = e.target.closest('a');
        if (a) return;
        e.preventDefault();
        e.stopPropagation();
        setOpen(!isOpen());
      });

      document.addEventListener('click', (e) => {
        if (!v.contains(e.target)) setOpen(false);
      });

      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') setOpen(false);
      });

      v.querySelectorAll('a').forEach(a=>{
        a.addEventListener('click', ()=> setOpen(false));
      });
    })();

    (function(){
      const box = document.querySelector(".mx-float-scroll");
      const rail = document.querySelector(".mx-scroll-rail");
      const topBtn = document.getElementById("mx-scroll-top");
      const bottomBtn = document.getElementById("mx-scroll-bottom");
      const scroller = document.getElementById("legal-scroll-area");
      const legalCopy = document.querySelector(".legalcopy") || document.querySelector("[data-reader-document]");
      if (!box || !rail || !topBtn || !bottomBtn) return;

      let sections = [];

      function maxScroll(){
        return scroller ? Math.max(0, scroller.scrollHeight - scroller.clientHeight) : Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
      }

      function currentScroll(){
        return scroller ? scroller.scrollTop : (window.scrollY || document.documentElement.scrollTop || 0);
      }

      function moveTo(position){
        const top = Math.max(0, Math.min(maxScroll(), position));
        if (scroller) scroller.scrollTo({ top, behavior: "smooth" });
        else window.scrollTo({ top, behavior: "smooth" });
      }

      function sectionPosition(node){
        if (!scroller) return node.getBoundingClientRect().top + currentScroll() - 20;
        const scrollerBox = scroller.getBoundingClientRect();
        return node.getBoundingClientRect().top - scrollerBox.top + scroller.scrollTop - 20;
      }

      function buildIndex(){
        sections = Array.from(document.querySelectorAll(".legal-section"));
        rail.querySelectorAll(".mx-scroll-marker").forEach((marker) => marker.remove());

        const maximum = maxScroll() || 1;
        const rawPositions = sections.map((section) => {
          return Math.max(3, Math.min(97, (sectionPosition(section) / maximum) * 100));
        });
        const minimumGap = Math.min(4.2, 90 / Math.max(1, sections.length - 1));
        const positions = [];
        rawPositions.forEach((position, index) => {
          const previous = index ? positions[index - 1] : 3;
          positions.push(index ? Math.max(position, previous + minimumGap) : Math.max(3, position));
        });
        const overflow = positions.length ? Math.max(0, positions[positions.length - 1] - 97) : 0;
        if (overflow) positions.forEach((_, index) => {
          positions[index] = Math.max(3, positions[index] - overflow * (index / Math.max(1, positions.length - 1)));
        });

        sections.forEach((section, index) => {
          const number = section.dataset.legalSection || "";
          const label = section.textContent.replace(/^\s*\d{1,2}\.\s*/, "").trim();
          const marker = document.createElement("button");
          marker.type = "button";
          marker.className = "mx-scroll-marker";
          marker.dataset.section = number;
          marker.dataset.number = number.padStart(2, "0");
          marker.dataset.label = label;
          marker.style.setProperty("--orb-delay", `${(sections.length - sections.indexOf(section)) * -110}ms`);
          marker.setAttribute("aria-label", `${number}. ${label}`);
          marker.style.setProperty("--section-position", `${positions[index]}%`);
          const labelNode = document.createElement("span");
          labelNode.className = "mx-scroll-marker__label";
          labelNode.textContent = label;
          marker.appendChild(labelNode);
          marker.addEventListener("click", () => moveTo(sectionPosition(section)));
          rail.appendChild(marker);
        });

        const available = Math.max(180, window.innerHeight * 0.64);
        const desired = Math.max(190, sections.length * 21 + 28);
        rail.style.setProperty("--rail-expanded-height", `${Math.round(Math.min(available, desired))}px`);
        update();
      }

      function update(){
        const maximum = maxScroll();
        const progress = maximum ? currentScroll() / maximum : 0;
        box.classList.add("is-visible");
        box.style.setProperty("--scroll-progress", `${progress * 100}%`);

        let active = -1;
        sections.forEach((section, position) => {
          if (sectionPosition(section) <= currentScroll() + 24) active = position;
        });
        rail.querySelectorAll(".mx-scroll-marker").forEach((item, position) => {
          const selected = position === active;
          item.classList.toggle("is-active", selected);
          item.setAttribute("aria-current", selected ? "true" : "false");
        });
      }

      topBtn.addEventListener("click", (e) => {
        e.preventDefault();
        moveTo(0);
      });

      bottomBtn.addEventListener("click", (e) => {
        e.preventDefault();
        moveTo(maxScroll());
      });

      (scroller || window).addEventListener("scroll", update, { passive:true });
      window.addEventListener("resize", update, { passive:true });

      let proximityTimer;
      document.addEventListener("pointermove", (event) => {
        if (event.pointerType && event.pointerType !== "mouse") return;
        if (event.clientX < window.innerWidth - 88) return;
        box.classList.add("is-proximity");
        window.clearTimeout(proximityTimer);
        proximityTimer = window.setTimeout(() => {
          if (!box.matches(":hover") && !box.matches(":focus-within")) {
            box.classList.remove("is-proximity");
          }
        }, 700);
      }, { passive:true });

      new MutationObserver(buildIndex).observe(document.querySelector(".card") || legalCopy || document.body, { childList:true, subtree:true });
      document.addEventListener("mx-reader-content-change", buildIndex);
      buildIndex();
    })();
    if ('ontouchstart' in window){
      const box = document.querySelector('.mx-float-scroll');
      if (box) box.classList.add('is-visible');
    }

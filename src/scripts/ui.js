(function(){
      const switchEl = document.getElementById('lang-switch');
      const railEl = document.getElementById('lang-rail');
      if (!switchEl || !railEl) return;

      const storageKey = 'mlx_lang';
      const buttons = Array.from(railEl.querySelectorAll('.lang-pill'));
      const contactLink = document.getElementById('contactLink');
      const footerComment = document.getElementById('footerComment');
      const headlineText = document.getElementById('headlineText');
      const DEFAULT_LANG = 'en';
      const I18N = {
        en: {
          contact: 'Contact',
          headline: 'WE ARE DEVELOPING',
          footer: '© 2023–2026 <a href="https://www.microretailx.com" rel="noopener">MICRORETAILX LLC (DELAWARE)</a> — ALL RIGHTS RESERVED — MICROLABSX: NON-COMMERCIAL R&amp;D PROJECTS'
        },
        es: {
          contact: 'Contacto',
          headline: 'ESTAMOS DESARROLLANDO',
          footer: '© 2023–2026 <a href="https://www.microretailx.com" rel="noopener">MICRORETAILX LLC (DELAWARE)</a> — TODOS LOS DERECHOS RESERVADOS — MICROLABSX: PROYECTOS DE I+D NO COMERCIALES'
        },
        ca: {
          contact: 'Contacte',
          headline: 'ESTEM DESENVOLUPANT',
          footer: '© 2023–2026 <a href="https://www.microretailx.com" rel="noopener">MICRORETAILX LLC (DELAWARE)</a> — TOTS ELS DRETS RESERVATS — MICROLABSX: PROJECTES D’R+D NO COMERCIALS'
        },
        eu: {
          contact: 'Kontaktua',
          headline: 'GARATZEN ARI GARA',
          footer: '© 2023–2026 <a href="https://www.microretailx.com" rel="noopener">MICRORETAILX LLC (DELAWARE)</a> — ESKUBIDE GUZTIAK ERRESERBATUTA — MICROLABSX: MERKATARITZARIK GABEKO I+G PROIEKTUAK'
        },
        zh: {
          contact: '联系',
          headline: '正在开发中',
          footer: '© 2023–2026 <a href="https://www.microretailx.com" rel="noopener">MICRORETAILX LLC（DELAWARE）</a> — 保留所有权利 — MICROLABSX：非商业研发项目'
        },
        hi: {
          contact: 'संपर्क',
          headline: 'विकास जारी है',
          footer: '© 2023–2026 <a href="https://www.microretailx.com" rel="noopener">MICRORETAILX LLC (DELAWARE)</a> — सर्वाधिकार सुरक्षित — MICROLABSX: गैर-व्यावसायिक अनुसंधान एवं विकास परियोजनाएँ'
        },
        ar: {
          contact: 'تواصل',
          headline: 'قيد التطوير',
          footer: '© 2023–2026 <a href="https://www.microretailx.com" rel="noopener">MICRORETAILX LLC (DELAWARE)</a> — جميع الحقوق محفوظة — MICROLABSX: مشاريع بحث وتطوير غير تجارية'
        },
        ru: {
          contact: 'Контакты',
          headline: 'МЫ РАЗРАБАТЫВАЕМ',
          footer: '© 2023–2026 <a href="https://www.microretailx.com" rel="noopener">MICRORETAILX LLC (DELAWARE)</a> — ВСЕ ПРАВА ЗАЩИЩЕНЫ — MICROLABSX: НЕКОММЕРЧЕСКИЕ НИОКР-ПРОЕКТЫ'
        },
        fr: {
          contact: 'Contact',
          headline: 'NOUS DÉVELOPPONS',
          footer: '© 2023–2026 <a href="https://www.microretailx.com" rel="noopener">MICRORETAILX LLC (DELAWARE)</a> — TOUS DROITS RÉSERVÉS — MICROLABSX : PROJETS DE R&amp;D NON COMMERCIAUX'
        }
      };

      function normalizeLang(raw){
        if (!raw) return null;
        const code = String(raw).toLowerCase();
        if (I18N[code]) return code;
        const base = code.split('-')[0];
        return I18N[base] ? base : null;
      }

      function detectBrowserLang(){
        const prefs = Array.isArray(navigator.languages) && navigator.languages.length
          ? navigator.languages
          : [navigator.language || navigator.userLanguage || DEFAULT_LANG];

        for (const pref of prefs){
          const detected = normalizeLang(pref);
          if (detected && buttons.some(btn => btn.dataset.lang === detected)) return detected;
        }
        return DEFAULT_LANG;
      }

      function selectedLang(){
        const saved = normalizeLang(localStorage.getItem(storageKey));
        if (saved && buttons.some(btn => btn.dataset.lang === saved)) return saved;
        return detectBrowserLang();
      }

      console.assert(normalizeLang('es-ES') === 'es', 'Browser language es-ES resolves to es');
      console.assert(normalizeLang('ar-SA') === 'ar', 'Browser language ar-SA resolves to ar');
      console.assert(normalizeLang('pt-BR') === null, 'Unsupported browser language falls back later');

      function applyLang(lang){
        const dict = I18N[lang] || I18N[DEFAULT_LANG];
        localStorage.setItem(storageKey, lang);
        document.documentElement.lang = lang;
        document.documentElement.dir = 'ltr';
        document.documentElement.dataset.langDir = lang === 'ar' ? 'rtl' : 'ltr';
        buttons.forEach(btn => { btn.hidden = btn.dataset.lang === lang; });
        if (contactLink) contactLink.textContent = dict.contact;
        if (headlineText) {
          headlineText.textContent = dict.headline;
          headlineText.setAttribute('data-text', dict.headline);
          document.getElementById('app')?.setAttribute('aria-label', `MICROLABSX ${dict.headline}`);
        }
        if (footerComment) footerComment.innerHTML = dict.footer;
        railEl.scrollLeft = 0;
        railEl.scrollTo?.({ left: 0, behavior: 'instant' });
        closeRail();
      }

      let openTimer = null;
      let closeTimer = null;
      let locked = false;

      function clearTimers(){
        if (openTimer) { clearTimeout(openTimer); openTimer = null; }
        if (closeTimer) { clearTimeout(closeTimer); closeTimer = null; }
      }

      function resetShift(){ railEl.style.setProperty('--rail-shift', '0px'); }

      function clampRailIntoViewport(){
        const vw = window.innerWidth || document.documentElement.clientWidth;
        const margin = 8;
        resetShift();
        const rect = railEl.getBoundingClientRect();
        let shift = 0;
        if (rect.left < margin) shift = margin - rect.left;
        else if (rect.right > vw - margin) shift = -(rect.right - (vw - margin));
        if (shift !== 0) railEl.style.setProperty('--rail-shift', `${Math.round(shift)}px`);
      }

      function placeRailSmart(){
        switchEl.classList.remove('open-right');
        resetShift();
        const vw = window.innerWidth || document.documentElement.clientWidth;
        const margin = 8;
        const isMobile = window.matchMedia('(max-width: 600px)').matches;

        if (!isMobile) {
          let rect = railEl.getBoundingClientRect();
          if (rect.left < margin) {
            switchEl.classList.add('open-right');
            rect = railEl.getBoundingClientRect();
          }
          if (rect.right > vw - margin) {
            switchEl.classList.remove('open-right');
          }
        }

        requestAnimationFrame(clampRailIntoViewport);
      }

      function openRail(){
        switchEl.classList.add('is-open');
        requestAnimationFrame(placeRailSmart);
      }

      function closeRail(){
        locked = false;
        switchEl.classList.remove('is-open', 'open-right');
        resetShift();
      }

      function scheduleOpen(){ clearTimers(); openTimer = setTimeout(openRail, 240); }
      function scheduleClose(){ clearTimers(); closeTimer = setTimeout(closeRail, 1600); }

      switchEl.addEventListener('pointerenter', () => {
        if (closeTimer) { clearTimeout(closeTimer); closeTimer = null; }
        if (!switchEl.classList.contains('is-open')) scheduleOpen();
      });
      switchEl.addEventListener('pointerleave', () => {
        if (!switchEl.classList.contains('is-open')) { clearTimers(); return; }
        if (!locked) scheduleClose();
      });
      railEl.addEventListener('pointerenter', () => { locked = true; clearTimers(); openRail(); });
      railEl.addEventListener('pointerleave', () => { locked = false; scheduleClose(); });

      const trigger = switchEl.querySelector('.lang-trigger');
      let touchHandled = false;
      function toggleRail(){
        clearTimers();
        if (switchEl.classList.contains('is-open')) closeRail();
        else openRail();
        trigger?.blur();
      }
      trigger?.addEventListener('touchstart', (e) => {
        touchHandled = true;
        e.preventDefault();
        toggleRail();
        setTimeout(() => { touchHandled = false; }, 450);
      }, { passive: false });
      trigger?.addEventListener('click', (e) => {
        if (touchHandled) return;
        e.preventDefault();
        toggleRail();
      });

      buttons.forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          applyLang(btn.dataset.lang || DEFAULT_LANG);
        });
      });

      document.addEventListener('pointerdown', (e) => {
        if (!switchEl.contains(e.target)) closeRail();
      });
      window.addEventListener('resize', () => {
        if (switchEl.classList.contains('is-open')) requestAnimationFrame(placeRailSmart);
      });

      applyLang(selectedLang());
      console.assert(document.documentElement.dir === 'ltr', 'Language bar keeps layout LTR, including Arabic');
      console.assert(railEl.style.getPropertyValue('--rail-shift') !== null, 'Language rail shift variable is available');
    })();

(() => {
      "use strict";
      const block = event => {
        if (!event.target.closest("a")) event.preventDefault();
      };
      document.addEventListener("contextmenu", block, { passive: false });
      document.addEventListener("copy", block, { passive: false });
      document.addEventListener("cut", block, { passive: false });
      document.addEventListener("dragstart", block, { passive: false });
      document.addEventListener("selectstart", event => {
        if (!event.target.closest("a")) event.preventDefault();
      }, { passive: false });
    })();

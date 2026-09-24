(function () {
  "use strict";

  const settings = window.__mxGarfixSettings;
  const NAV_STATE_KEY = "mx_garfix_navigation_v2";
  const NAV_STATE_MAX_AGE = 15000;
  const THEME_STATE_KEY = "mx_garfix_theme_v1";
  const DISCO_DURATION_MS = 5000;

  let discoTimer = null;
  let audioContext = null;
  let activeDiscoGain = null;

  const allowedRoutes = new Set([
    "/",
    "/about",
    "/legal",
    "/privacy",
    "/cookies",
    "/terms"
  ]);

  const allowedLanguages = new Set([
    "en", "es", "ca", "fr", "ar", "zh", "hi", "ja", "ru", "eu"
  ]);

  const capabilities = [
    "navigate",
    "language",
    "cookies",
    "expand",
    "compact",
    "settings",
    "scroll",
    "theme",
    "disco"
  ];

  const COLOR_ALIASES = Object.freeze({
    rosa: "hotpink",
    rosado: "hotpink",
    fucsia: "deeppink",
    magenta: "magenta",
    rojo: "red",
    naranja: "orange",
    amarillo: "gold",
    verde: "limegreen",
    azul: "dodgerblue",
    morado: "blueviolet",
    violeta: "violet",
    blanco: "white",
    negro: "black",
    gris: "gray"
  });

  const ARRIVAL_COPY = {
    en: {
      "/": "Home again. I’ll stay here while you move around the site.",
      "/about": "Shop Beta. For now there is no active stock: these are experimental catalogue placeholders. When inventory and supplier feeds are connected, I’ll be able to watch availability, recommend alternatives and escalate supplier issues. Yes, I know, I’m adorable.",
      "/legal": "Legal page. I know the public legal framework and can explain it in normal language without inventing guarantees.",
      "/privacy": "Privacy page. The design is data-minimising by default: I can explain what is processed, what is not, and where the limits are.",
      "/cookies": "Cookie page. Necessary technical storage is separated from optional tracking; I can explain the setup without making you read the whole thing.",
      "/terms": "Terms page. Ask me about any clause and I’ll explain what it actually means."
    },
    es: {
      "/": "Otra vez en casa. Yo me quedo abierto mientras te mueves por la web.",
      "/about": "Shop Beta. De momento no hay stock activo: lo que ves son marcadores del catálogo experimental. Cuando conectemos inventario y proveedores podré vigilar disponibilidad, recomendar alternativas y escalar incidencias al proveedor. Ya sabes que soy muy mono.",
      "/legal": "Página legal. Conozco el marco jurídico público y te lo puedo traducir a idioma humano sin inventarme garantías.",
      "/privacy": "Privacidad. La arquitectura minimiza datos por diseño: puedo explicarte qué se procesa, qué no y dónde están los límites.",
      "/cookies": "Cookies. El almacenamiento técnico necesario está separado del seguimiento opcional; te lo explico sin obligarte a leer el ladrillo entero.",
      "/terms": "Términos. Señálame una cláusula y te digo qué significa de verdad."
    },
    ca: {
      "/": "Tornem a casa. Em quedaré obert mentre et mous pel web.",
      "/about": "Shop Beta. De moment no hi ha estoc actiu: el que veus són marcadors del catàleg experimental. Quan connectem inventari i proveïdors podré vigilar disponibilitat, recomanar alternatives i escalar incidències al proveïdor.",
      "/legal": "Pàgina legal. Pregunta’m el que vulguis i t’ho tradueixo a llenguatge normal.",
      "/privacy": "Privacitat. Et puc resumir quines dades s’utilitzen, quines no i on són els límits.",
      "/cookies": "Cookies. Et puc explicar l’emmagatzematge tècnic i el consentiment sense fer-te llegir-ho tot.",
      "/terms": "Termes. Assenyala una clàusula i t’explico què significa realment."
    },
    fr: {
      "/": "Retour à l’accueil. Je reste ouvert pendant que vous naviguez sur le site.",
      "/about": "Shop Beta. Il n’y a pas encore de stock actif : vous voyez des emplacements du catalogue expérimental. Quand les flux de stock et fournisseurs seront connectés, je pourrai surveiller la disponibilité, recommander des alternatives et remonter les incidents fournisseur.",
      "/legal": "Page juridique. Demandez-moi ce que vous voulez et je vous l’explique simplement.",
      "/privacy": "Confidentialité. Je peux résumer les données utilisées, celles qui ne le sont pas et les limites.",
      "/cookies": "Cookies. Je peux expliquer le stockage technique et le consentement sans vous faire tout lire.",
      "/terms": "Conditions. Montrez-moi une clause et je vous explique ce qu’elle signifie vraiment."
    },
    ar: {
      "/": "عدنا إلى الصفحة الرئيسية. سأبقى مفتوحًا أثناء تنقلك في الموقع.",
      "/about": "Shop Beta. لا يوجد مخزون فعّال حاليًا؛ ما تراه عناصر تجريبية للكتالوج. عند ربط المخزون والمورّدين سأتمكن من متابعة التوفر واقتراح البدائل وتصعيد مشاكل المورّدين.",
      "/legal": "الصفحة القانونية. اسألني عن أي جزء وسأشرحه لك ببساطة.",
      "/privacy": "الخصوصية. يمكنني تلخيص البيانات المستخدمة وغير المستخدمة وحدود المعالجة.",
      "/cookies": "ملفات تعريف الارتباط. يمكنني شرح التخزين التقني والموافقة دون الحاجة لقراءة الصفحة كاملة.",
      "/terms": "الشروط. اختر أي بند وسأشرح معناه الفعلي."
    },
    zh: {
      "/": "回到首页。我会在你浏览网站时保持聊天窗口开启。",
      "/about": "Shop Beta。目前没有真实在售库存，这里展示的是实验目录占位内容。接入库存和供应商数据后，我可以监控可用性、推荐替代品并升级供应商问题。",
      "/legal": "法律页面。你可以问我任何条款，我会用更容易理解的方式解释。",
      "/privacy": "隐私页面。我可以总结会使用哪些数据、不会使用哪些数据以及边界在哪里。",
      "/cookies": "Cookie 页面。我可以解释技术存储和同意机制，不需要你全部读完。",
      "/terms": "条款页面。指出任何条款，我会解释它实际意味着什么。"
    },
    hi: {
      "/": "फिर से होम पर। आप साइट पर घूमते रहें, मैं खुला रहूँगा।",
      "/about": "Shop Beta. अभी कोई सक्रिय स्टॉक नहीं है; जो दिख रहा है वह प्रयोगात्मक कैटलॉग प्लेसहोल्डर है। इन्वेंटरी और सप्लायर फीड जुड़ने पर मैं उपलब्धता देख सकूँगा, विकल्प सुझा सकूँगा और सप्लायर समस्याएँ एस्केलेट कर सकूँगा।",
      "/legal": "लीगल पेज। जो भी समझना हो पूछिए, मैं आसान भाषा में समझा दूँगा।",
      "/privacy": "प्राइवेसी पेज। मैं बता सकता हूँ कि कौन-सा डेटा उपयोग होता है, कौन-सा नहीं और सीमाएँ क्या हैं।",
      "/cookies": "कुकी पेज। मैं तकनीकी स्टोरेज और सहमति को संक्षेप में समझा सकता हूँ।",
      "/terms": "टर्म्स पेज। कोई भी क्लॉज़ चुनिए और मैं उसका वास्तविक मतलब समझा दूँगा।"
    },
    ru: {
      "/": "Снова на главной. Я останусь открытым, пока вы перемещаетесь по сайту.",
      "/about": "Shop Beta. Активного склада пока нет: перед вами заглушки экспериментального каталога. После подключения остатков и поставщиков я смогу отслеживать наличие, предлагать альтернативы и эскалировать проблемы поставщикам.",
      "/legal": "Юридическая страница. Спросите о любом пункте — объясню нормальным языком.",
      "/privacy": "Конфиденциальность. Могу кратко объяснить, какие данные используются, какие нет и где границы.",
      "/cookies": "Cookies. Могу объяснить техническое хранение и согласие без чтения всей страницы.",
      "/terms": "Условия. Укажите пункт — объясню, что он означает на практике."
    },
    eu: {
      "/": "Hasierara itzuli gara. Irekita geratuko naiz webgunean zehar mugitzen zaren bitartean.",
      "/about": "Shop Beta. Oraingoz ez dago stock aktiborik; ikusten duzuna katalogo esperimentaleko leku-markak dira. Inbentarioa eta hornitzaileak konektatzean erabilgarritasuna zaindu, alternatibak gomendatu eta hornitzaile-arazoak eskalatu ahal izango ditut.",
      "/legal": "Lege-orria. Galdetu nahi duzuna eta hizkera arruntean azalduko dizut.",
      "/privacy": "Pribatutasuna. Zein datu erabiltzen diren, zein ez eta mugak non dauden laburbil dezaket.",
      "/cookies": "Cookieak. Biltegiratze teknikoa eta baimena azal diezazuket guztia irakurri gabe.",
      "/terms": "Baldintzak. Seinalatu klausula bat eta benetan zer esan nahi duen azalduko dizut."
    },
    ja: {
      "/": "ホームに戻りました。サイト内を移動している間も、このまま開いています。",
      "/about": "Shop Betaです。現在は有効な在庫はなく、表示されているのは実験用カタログのプレースホルダーです。在庫とサプライヤー情報が接続されれば、在庫状況の確認、代替案の提案、サプライヤー問題のエスカレーションができます。",
      "/legal": "法的情報のページです。公開されている法的枠組みについて、保証を作り上げることなく分かりやすく説明できます。",
      "/privacy": "プライバシーページです。どのデータが処理されるか、処理されないか、そしてその範囲を説明できます。",
      "/cookies": "Cookieページです。必要な技術的保存と任意の追跡を区別して、全文を読まなくても分かるように説明できます。",
      "/terms": "利用規約のページです。条項を指定してください。実際に何を意味するのか説明します。"
    }
  };

  function enabled() {
    return settings?.get?.("siteActions") === true;
  }

  function currentLanguage() {
    const raw = String(document.documentElement.lang || "en")
      .toLowerCase()
      .split("-")[0];
    return allowedLanguages.has(raw) ? raw : "en";
  }

  function normalizePath(value) {
    const path = String(value || "/").replace(/\/$/, "") || "/";
    return path;
  }

  function normalizeRoute(value) {
    try {
      const url = new URL(String(value || "/"), location.origin);
      if (url.origin !== location.origin) return null;
      const path = normalizePath(url.pathname);
      return allowedRoutes.has(path) ? path : null;
    } catch (_) {
      return null;
    }
  }

  function garfixIsOpen() {
    return window.__garfix?.status?.().open === true;
  }

  function rememberNavigation(path, source = "site") {
    const route = normalizeRoute(path);
    if (!route) return false;

    try {
      sessionStorage.setItem(NAV_STATE_KEY, JSON.stringify({
        from: normalizePath(location.pathname),
        to: route,
        chatOpen: garfixIsOpen(),
        source,
        at: Date.now()
      }));
      return true;
    } catch (_) {
      return false;
    }
  }

  function readNavigationState() {
    try {
      const value = JSON.parse(sessionStorage.getItem(NAV_STATE_KEY) || "null");
      if (!value || typeof value !== "object") return null;
      if (Date.now() - Number(value.at || 0) > NAV_STATE_MAX_AGE) return null;
      return value;
    } catch (_) {
      return null;
    }
  }

  function clearNavigationState() {
    try { sessionStorage.removeItem(NAV_STATE_KEY); } catch (_) {}
  }

  function pageArrival(path) {
    const lang = currentLanguage();
    return ARRIVAL_COPY[lang]?.[path] || ARRIVAL_COPY.en[path] || "";
  }

  function restoreNavigationContinuity() {
    const saved = readNavigationState();
    clearNavigationState();

    if (!saved || saved.chatOpen !== true) return;

    const currentPath = normalizePath(location.pathname);
    if (normalizePath(saved.to) !== currentPath) return;

    window.__garfix?.open?.();

    const arrival = pageArrival(currentPath);
    if (!arrival) return;

    const conversation = window.__garfix?.conversation;
    const existing = conversation?.messages?.() || [];
    const lastText = String(existing.at?.(-1)?.text || "").trim();

    if (lastText === arrival) return;

    conversation?.restore?.([
      ...existing,
      {
        role: "assistant",
        text: arrival,
        timestamp: new Date().toISOString()
      }
    ]);
  }

  function navigate(path) {
    if (!enabled()) return false;
    const route = normalizeRoute(path);
    if (!route) return false;

    rememberNavigation(route, "garfix");

    window.setTimeout(() => {
      location.assign(route);
    }, 320);

    return true;
  }

  function setLanguage(lang) {
    if (!enabled()) return false;
    const normalized = String(lang || "").toLowerCase().split("-")[0];
    if (!allowedLanguages.has(normalized)) return false;

    try { localStorage.setItem("mx_lang", normalized); } catch (_) {}
    window.__mxApplyLang?.(normalized);
    return true;
  }

  function openCookiePreferences() {
    if (!enabled()) return false;
    window.__mxConsent?.open?.();
    return true;
  }

  function setExpanded(value) {
    if (!enabled()) return false;

    const expanded = Boolean(value);
    settings?.set?.("expanded", expanded);

    const root = document.getElementById("mx-garfix");
    if (root) root.dataset.expanded = expanded ? "1" : "0";

    return true;
  }

  function openSettings() {
    if (!enabled()) return false;
    settings?.open?.();
    return true;
  }

  function scrollPage(position) {
    if (!enabled()) return false;
    const target = String(position || "").toLowerCase();

    if (target === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return true;
    }

    if (target === "bottom") {
      window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "smooth" });
      return true;
    }

    return false;
  }

  function normalizeThemeColor(value) {
    const raw = String(value || "").trim().slice(0, 64);
    if (!raw) return null;

    const lower = raw.toLowerCase();
    if (["default", "reset", "normal"].includes(lower)) return "default";

    const candidate = COLOR_ALIASES[lower] || raw;
    if (!window.CSS?.supports?.("color", candidate)) return null;
    return candidate;
  }

  function readThemeState() {
    try {
      const parsed = JSON.parse(sessionStorage.getItem(THEME_STATE_KEY) || "null");
      if (!parsed || typeof parsed !== "object") return { color: "default", disco: false };
      return {
        color: normalizeThemeColor(parsed.color) || "default",
        disco: false
      };
    } catch (_) {
      return { color: "default", disco: false };
    }
  }

  function persistThemeState(state) {
    try {
      sessionStorage.setItem(THEME_STATE_KEY, JSON.stringify({
        color: state?.color || "default",
        disco: false
      }));
    } catch (_) {}
  }

  function applyThemeState(state) {
    const visual = window.__mxHyperionVisual;

    if (!visual) {
      return true;
    }

    if (state?.disco === true) {
      return visual.setDisco(true);
    }

    return visual.setTheme(state?.color || "default");
  }

  function stopDiscoAudio() {
    if (!activeDiscoGain || !audioContext) return;

    try {
      const now = audioContext.currentTime;
      activeDiscoGain.gain.cancelScheduledValues(now);
      activeDiscoGain.gain.setValueAtTime(Math.max(activeDiscoGain.gain.value, 0.0001), now);
      activeDiscoGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.08);
    } catch (_) {}

    activeDiscoGain = null;
  }

  function ensureAudioContext() {
    const AudioCtor = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtor) return null;

    if (!audioContext) {
      try {
        audioContext = new AudioCtor();
      } catch (_) {
        return null;
      }
    }

    return audioContext;
  }

  function unlockAudio() {
    const ctx = ensureAudioContext();
    if (!ctx || ctx.state !== "suspended") return;
    ctx.resume().catch(() => {});
  }

  document.addEventListener("pointerdown", unlockAudio, { capture: true, passive: true });
  document.addEventListener("keydown", unlockAudio, { capture: true });

  function playDiscoJingle(durationMs = DISCO_DURATION_MS) {
    const ctx = ensureAudioContext();
    if (!ctx) return false;

    const schedule = () => {
      stopDiscoAudio();

      const duration = Math.max(1, Math.min(Number(durationMs) / 1000 || 5, 5));
      const start = ctx.currentTime + 0.035;
      const end = start + duration;
      const master = ctx.createGain();
      activeDiscoGain = master;

      master.gain.setValueAtTime(0.0001, start);
      master.gain.exponentialRampToValueAtTime(0.115, start + 0.08);
      master.gain.setValueAtTime(0.115, Math.max(start + 0.09, end - 0.18));
      master.gain.exponentialRampToValueAtTime(0.0001, end);
      master.connect(ctx.destination);

      const bass = ctx.createOscillator();
      const bassGain = ctx.createGain();
      bass.type = "triangle";
      bass.frequency.setValueAtTime(82.41, start);
      bassGain.gain.setValueAtTime(0.0001, start);
      bassGain.gain.exponentialRampToValueAtTime(0.20, start + 0.04);
      bassGain.gain.exponentialRampToValueAtTime(0.0001, end);
      bass.connect(bassGain).connect(master);
      bass.start(start);
      bass.stop(end + 0.02);

      const notes = [329.63, 392.0, 493.88, 392.0, 349.23, 440.0, 523.25, 440.0];
      const step = 0.25;
      const count = Math.floor(duration / step);

      for (let i = 0; i < count; i += 1) {
        const noteStart = start + i * step;
        const noteEnd = Math.min(noteStart + 0.19, end);
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = i % 4 === 0 ? "square" : "sawtooth";
        osc.frequency.setValueAtTime(notes[i % notes.length], noteStart);
        gain.gain.setValueAtTime(0.0001, noteStart);
        gain.gain.exponentialRampToValueAtTime(0.13, noteStart + 0.025);
        gain.gain.exponentialRampToValueAtTime(0.0001, noteEnd);

        osc.connect(gain).connect(master);
        osc.start(noteStart);
        osc.stop(noteEnd + 0.01);
      }

      window.setTimeout(() => {
        if (activeDiscoGain === master) activeDiscoGain = null;
        try { master.disconnect(); } catch (_) {}
      }, duration * 1000 + 350);
    };

    if (ctx.state === "suspended") {
      ctx.resume().then(schedule).catch(() => {});
      return true;
    }

    schedule();
    return true;
  }

  function setTheme(color) {
    if (!enabled()) return false;

    const normalized = normalizeThemeColor(color);
    if (!normalized) return false;

    if (discoTimer) {
      window.clearTimeout(discoTimer);
      discoTimer = null;
    }
    stopDiscoAudio();

    const state = {
      color: normalized,
      disco: false
    };

    persistThemeState(state);
    return applyThemeState(state);
  }

  function setDisco(value) {
    if (!enabled()) return false;

    const baseState = readThemeState();

    if (discoTimer) {
      window.clearTimeout(discoTimer);
      discoTimer = null;
    }

    if (!value) {
      stopDiscoAudio();
      return applyThemeState({ ...baseState, disco: false });
    }

    persistThemeState(baseState);
    applyThemeState({ ...baseState, disco: true });
    playDiscoJingle(DISCO_DURATION_MS);

    discoTimer = window.setTimeout(() => {
      discoTimer = null;
      stopDiscoAudio();
      applyThemeState({ ...readThemeState(), disco: false });
    }, DISCO_DURATION_MS);

    return true;
  }

  function execute(action) {
    if (!action || typeof action !== "object" || !enabled()) return false;

    switch (action.type) {
      case "navigate":
        return navigate(action.path);
      case "language":
        return setLanguage(action.lang);
      case "cookies":
        return openCookiePreferences();
      case "expand":
        return setExpanded(true);
      case "compact":
        return setExpanded(false);
      case "settings":
        return openSettings();
      case "scroll":
        return scrollPage(action.position);
      case "theme":
        return setTheme(action.color);
      case "disco":
        return setDisco(action.enabled !== false);
      default:
        return false;
    }
  }

  function authorizationContext() {
    return {
      authorized: enabled(),
      setting: "siteActions",
      capabilities: [...capabilities],
      scope: "microretailx.com only",
      requiresExplicitUserAuthorization: true
    };
  }

  document.addEventListener("click", event => {
    if (!garfixIsOpen() || event.defaultPrevented) return;

    const anchor = event.target?.closest?.("a[href]");
    if (!anchor || anchor.hasAttribute("download")) return;
    if (anchor.target && anchor.target !== "_self") return;

    try {
      const url = new URL(anchor.href, location.href);
      if (url.origin !== location.origin) return;

      const route = normalizeRoute(url.pathname);
      if (!route || route === normalizePath(location.pathname)) return;

      rememberNavigation(route, "site");
    } catch (_) {}
  }, { capture: true });

  window.__mxGarfixPowers = {
    enabled,
    execute,
    navigate,
    setLanguage,
    openCookiePreferences,
    setExpanded,
    openSettings,
    scrollPage,
    setTheme,
    setDisco,
    authorizationContext,
    capabilities: () => [...capabilities]
  };

  window.addEventListener("mx:garfix-action", event => {
    execute(event.detail);
  });

  applyThemeState(readThemeState());
  restoreNavigationContinuity();
})();
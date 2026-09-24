(function () {
  "use strict";

  const STORAGE_KEY = "mx_garfix_settings_v4";
  const END_CONFIRM_WINDOW = 3500;

  const defaults = {
    autoVoice: false,
    siteActions: false,
    expanded: false
  };

  const listeners = new Set();

  const COPY = {
    en: {
      settings: "Settings",
      expand: "Expand",
      compact: "Compact",
      autoVoice: "Automatic reading",
      autoVoiceHint: "GARFIX AI will use your browser voice to answer your questions.",
      hyperion: "HYPERION MOD",
      hyperionHint: "Give GARFIX AI permission to control this website safely.",
      downloadPdf: "Download conversation PDF",
      end: "End chat",
      confirmEnd: "Press again to end chat",
      start: "Start chat"
    },
    es: {
      settings: "Configuración",
      expand: "Ampliar",
      compact: "Compactar",
      autoVoice: "Lectura automática",
      autoVoiceHint: "GARFIX AI utilizará la voz de tu navegador para dar respuesta a tus preguntas.",
      hyperion: "HYPERION MOD",
      hyperionHint: "GARFIX AI obtiene permiso para controlar esta web de forma segura.",
      downloadPdf: "Descargar conversación PDF",
      end: "Finalizar chat",
      confirmEnd: "Pulsa otra vez para finalizar",
      start: "Iniciar chat"
    },
    ar: {
      settings: "الإعدادات",
      expand: "توسيع",
      compact: "تصغير",
      autoVoice: "القراءة التلقائية",
      autoVoiceHint: "سيستخدم GARFIX AI صوت المتصفح للرد على أسئلتك.",
      hyperion: "HYPERION MOD",
      hyperionHint: "امنح GARFIX AI إذناً للتحكم في هذا الموقع بأمان.",
      downloadPdf: "تنزيل المحادثة PDF",
      end: "إنهاء المحادثة",
      confirmEnd: "اضغط مرة أخرى لإنهاء المحادثة",
      start: "بدء المحادثة"
    },
    ca: {
      settings: "Configuració",
      expand: "Amplia",
      compact: "Compacta",
      autoVoice: "Lectura automàtica",
      autoVoiceHint: "GARFIX AI utilitzarà la veu del navegador per llegir les respostes.",
      hyperion: "HYPERION MOD",
      hyperionHint: "Dona permís a GARFIX AI per controlar aquest lloc web de manera segura.",
      downloadPdf: "Descarrega la conversa en PDF",
      end: "Finalitza el xat",
      confirmEnd: "Prem una altra vegada per finalitzar",
      start: "Inicia el xat"
    },
    eu: {
      settings: "Ezarpenak",
      expand: "Zabaldu",
      compact: "Trinkotu",
      autoVoice: "Irakurketa automatikoa",
      autoVoiceHint: "GARFIX AIk nabigatzailearen ahotsa erabiliko du erantzunak irakurtzeko.",
      hyperion: "HYPERION MOD",
      hyperionHint: "Eman GARFIX AIri webgune hau modu seguruan kontrolatzeko baimena.",
      downloadPdf: "Deskargatu elkarrizketa PDFan",
      end: "Amaitu txata",
      confirmEnd: "Sakatu berriro amaitzeko",
      start: "Hasi txata"
    },
    zh: {
      settings: "设置",
      expand: "展开",
      compact: "紧凑",
      autoVoice: "自动朗读",
      autoVoiceHint: "GARFIX AI 将使用浏览器语音功能朗读回答。",
      hyperion: "HYPERION MOD",
      hyperionHint: "授权 GARFIX AI 安全地控制本网站。",
      downloadPdf: "下载对话 PDF",
      end: "结束聊天",
      confirmEnd: "再次按下以结束聊天",
      start: "开始聊天"
    },
    hi: {
      settings: "सेटिंग्स",
      expand: "विस्तृत करें",
      compact: "कॉम्पैक्ट करें",
      autoVoice: "स्वचालित पढ़ना",
      autoVoiceHint: "GARFIX AI उत्तर पढ़ने के लिए आपके ब्राउज़र की आवाज़ का उपयोग करेगा।",
      hyperion: "HYPERION MOD",
      hyperionHint: "GARFIX AI को इस वेबसाइट को सुरक्षित रूप से नियंत्रित करने की अनुमति दें।",
      downloadPdf: "बातचीत PDF डाउनलोड करें",
      end: "चैट समाप्त करें",
      confirmEnd: "समाप्त करने के लिए फिर दबाएँ",
      start: "चैट शुरू करें"
    },
    ru: {
      settings: "Настройки",
      expand: "Развернуть",
      compact: "Компактный режим",
      autoVoice: "Автоматическое чтение",
      autoVoiceHint: "GARFIX AI будет использовать голос браузера для озвучивания ответов.",
      hyperion: "HYPERION MOD",
      hyperionHint: "Разрешите GARFIX AI безопасно управлять этим сайтом.",
      downloadPdf: "Скачать разговор в PDF",
      end: "Завершить чат",
      confirmEnd: "Нажмите ещё раз для завершения",
      start: "Начать чат"
    },
    fr: {
      settings: "Paramètres",
      expand: "Agrandir",
      compact: "Réduire",
      autoVoice: "Lecture automatique",
      autoVoiceHint: "GARFIX AI utilisera la voix du navigateur pour lire les réponses.",
      hyperion: "HYPERION MOD",
      hyperionHint: "Autorisez GARFIX AI à contrôler ce site de manière sécurisée.",
      downloadPdf: "Télécharger la conversation en PDF",
      end: "Terminer le chat",
      confirmEnd: "Appuyez encore une fois pour terminer",
      start: "Démarrer le chat"
    },
    ja: {
      settings: "設定",
      expand: "拡大",
      compact: "コンパクト",
      autoVoice: "自動読み上げ",
      autoVoiceHint: "GARFIX AI がブラウザの音声機能を使って回答を読み上げます。",
      hyperion: "HYPERION MOD",
      hyperionHint: "GARFIX AI にこのサイトを安全に操作する権限を与えます。",
      downloadPdf: "会話をPDFでダウンロード",
      end: "チャットを終了",
      confirmEnd: "もう一度押して終了",
      start: "チャットを開始"
    }
  };

  function lang() {
    const raw = String(document.documentElement.lang || "en")
      .toLowerCase()
      .split("-")[0];
    return COPY[raw] ? raw : "en";
  }

  function copy(key) {
    const active = lang();
    return COPY[active]?.[key] || COPY.en[key] || key;
  }

  function read() {
    try {
      const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
      return {
        ...defaults,
        ...(parsed && typeof parsed === "object" ? parsed : {})
      };
    } catch (_) {
      return { ...defaults };
    }
  }

  let state = read();

  function persist() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (_) {}
  }

  function get(key) {
    return key ? state[key] : { ...state };
  }

  function set(key, value) {
    if (!(key in defaults)) return;
    state = { ...state, [key]: Boolean(value) };
    persist();

    for (const listener of listeners) {
      try { listener(key, state[key], { ...state }); } catch (_) {}
    }

    window.dispatchEvent(new CustomEvent("mx:garfix-setting", {
      detail: { key, value: state[key], settings: { ...state } }
    }));
  }

  function subscribe(listener) {
    if (typeof listener !== "function") return () => {};
    listeners.add(listener);
    return () => listeners.delete(listener);
  }

  const GEAR = `
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M9.4 4.4 10 2h4l.6 2.4 2 .8 2.1-1.2 2.8 2.8-1.2 2.1.8 2L23.5 11v4l-2.4.6-.8 2 1.2 2.1-2.8 2.8-2.1-1.2-2 .8-.6 2.4h-4l-.6-2.4-2-.8-2.1 1.2-2.8-2.8 1.2-2.1-.8-2L.5 15v-4l2.4-.6.8-2-1.2-2.1L5.3 3.5l2.1 1.2 2-.3Z" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linejoin="round"/>
      <circle cx="12" cy="13" r="2.7" fill="none" stroke="currentColor" stroke-width="1.25"/>
    </svg>`;

  const EXPAND = `
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M9 4H4v5M15 4h5v5M20 15v5h-5M9 20H4v-5" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`;

  const COMPACT = `
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M4 9h5V4M20 9h-5V4M15 20v-5h5M9 20v-5H4" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`;

  function initUI() {
    const root = document.getElementById("mx-garfix");
    const panel = document.getElementById("mx-garfix-panel");
    const head = panel?.querySelector(".mx-garfix-head");
    const close = document.getElementById("mx-garfix-close");

    if (!root || !panel || !head || !close) return;
    if (document.getElementById("mx-garfix-settings")) return;

    const actions = document.createElement("div");
    actions.className = "mx-garfix-head-actions";

    const expandButton = document.createElement("button");
    expandButton.type = "button";
    expandButton.className = "mx-garfix-head-control";
    expandButton.id = "mx-garfix-expand";
    expandButton.setAttribute("aria-pressed", "false");

    const settingsButton = document.createElement("button");
    settingsButton.type = "button";
    settingsButton.className = "mx-garfix-head-control";
    settingsButton.id = "mx-garfix-settings-toggle";
    settingsButton.innerHTML = GEAR;
    settingsButton.setAttribute("aria-controls", "mx-garfix-settings");
    settingsButton.setAttribute("aria-expanded", "false");

    actions.append(expandButton, settingsButton, close);
    head.appendChild(actions);

    const drawer = document.createElement("section");
    drawer.className = "mx-garfix-settings";
    drawer.id = "mx-garfix-settings";
    drawer.hidden = true;
    drawer.innerHTML = `
      <div class="mx-garfix-settings-head">
        <strong data-gx-copy="settings"></strong>
        <button type="button" class="mx-garfix-settings-close" aria-label="Close">×</button>
      </div>

      <div class="mx-garfix-settings-list">
        <label class="mx-garfix-setting-row">
          <span><strong data-gx-copy="autoVoice"></strong></span>
          <input type="checkbox" data-gx-setting="autoVoice" />
        </label>

        <label class="mx-garfix-setting-row mx-garfix-setting-power">
          <span><strong data-gx-copy="hyperion"></strong></span>
          <input type="checkbox" data-gx-setting="siteActions" />
        </label>
      </div>

      <div class="mx-garfix-settings-actions">
        <button type="button" id="mx-garfix-download-chat" data-gx-copy="downloadPdf"></button>
        <button type="button" id="mx-garfix-lifecycle-chat"></button>
      </div>

      <div class="mx-garfix-settings-brand">GARFIX AI <span>BY MICROSTUDIOX</span></div>
    `;

    panel.appendChild(drawer);

    const downloadButton = drawer.querySelector("#mx-garfix-download-chat");
    const lifecycleButton = drawer.querySelector("#mx-garfix-lifecycle-chat");
    const drawerClose = drawer.querySelector(".mx-garfix-settings-close");

    let pendingEndButton = null;
    let pendingEndTimer = null;

    function resetEndConfirmation(button = pendingEndButton) {
      clearTimeout(pendingEndTimer);
      pendingEndTimer = null;

      if (button) {
        delete button.dataset.confirmEnd;
        button.classList.remove("is-confirm-end");
      }

      if (pendingEndButton === button) {
        pendingEndButton = null;
      }
    }

    function armEndConfirmation(button) {
      if (!button) return;

      if (pendingEndButton && pendingEndButton !== button) {
        resetEndConfirmation(pendingEndButton);
      }

      pendingEndButton = button;
      button.dataset.confirmEnd = "1";
      button.classList.add("is-confirm-end");
      button.textContent = copy("confirmEnd");

      clearTimeout(pendingEndTimer);
      pendingEndTimer = window.setTimeout(() => {
        if (button.isConnected) {
          delete button.dataset.confirmEnd;
          button.classList.remove("is-confirm-end");
          button.textContent = copy("end");
        }
        if (pendingEndButton === button) pendingEndButton = null;
        pendingEndTimer = null;
      }, END_CONFIRM_WINDOW);
    }

    function syncSessionActions() {
      const sessions = window.__mxGarfixSessions;
      const active = Boolean(sessions?.current?.());

      if (downloadButton) {
        downloadButton.disabled = sessions?.canDownload?.() !== true;
      }

      if (lifecycleButton) {
        if (pendingEndButton !== lifecycleButton || lifecycleButton.dataset.confirmEnd !== "1") {
          lifecycleButton.textContent = copy(active ? "end" : "start");
        }
        lifecycleButton.classList.toggle("is-end", active);
      }
    }

    function closeDrawer() {
      resetEndConfirmation();
      drawer.hidden = true;
      settingsButton.setAttribute("aria-expanded", "false");
      settingsButton.focus({ preventScroll: true });
    }

    function openDrawer() {
      resetEndConfirmation();
      drawer.hidden = false;
      settingsButton.setAttribute("aria-expanded", "true");
      syncSessionActions();
    }

    settingsButton.addEventListener("click", () => {
      drawer.hidden ? openDrawer() : closeDrawer();
    });

    drawerClose?.addEventListener("click", closeDrawer);

    /* The settings drawer closes naturally when the visitor clicks back
       into the conversation or elsewhere in the page. */
    document.addEventListener("pointerdown", event => {
      if (drawer.hidden) return;
      const target = event.target;
      if (drawer.contains(target) || settingsButton.contains(target)) return;
      closeDrawer();
    }, true);

    /* When Settings is open, the main GARFIX X behaves like Back instead of
       closing the whole assistant. This returns directly to General/chat. */
    close.addEventListener("click", event => {
      if (drawer.hidden) return;

      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();
      closeDrawer();
    }, true);

    downloadButton?.addEventListener("click", () => {
      window.__mxGarfixSessions?.downloadPdf?.();
    });

    lifecycleButton?.addEventListener("click", () => {
      const sessions = window.__mxGarfixSessions;
      if (!sessions) return;

      if (sessions.current?.()) {
        if (lifecycleButton.dataset.confirmEnd !== "1") {
          armEndConfirmation(lifecycleButton);
          return;
        }

        resetEndConfirmation(lifecycleButton);
        sessions.end?.();
      } else {
        sessions.start?.("general");
      }

      syncSessionActions();
      closeDrawer();
    });

    /* The bottom Finalizar chat button is deliberately two-step as well.
       Capture phase prevents its original one-click handler from ending a
       session accidentally. */
    panel.addEventListener("click", event => {
      const button = event.target?.closest?.(".mx-garfix-session-lifecycle");
      if (!button || button === lifecycleButton) return;

      const sessions = window.__mxGarfixSessions;
      if (!sessions?.current?.()) return;

      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();

      if (button.dataset.confirmEnd !== "1") {
        armEndConfirmation(button);
        return;
      }

      resetEndConfirmation(button);
      sessions.end?.();
    }, true);

    function syncUI() {
      drawer.querySelectorAll("[data-gx-copy]").forEach(node => {
        node.textContent = copy(node.getAttribute("data-gx-copy"));
      });

      settingsButton.setAttribute("aria-label", copy("settings"));
      settingsButton.setAttribute("title", copy("settings"));

      const expanded = state.expanded === true;
      expandButton.innerHTML = expanded ? COMPACT : EXPAND;
      expandButton.setAttribute("aria-label", copy(expanded ? "compact" : "expand"));
      expandButton.setAttribute("title", copy(expanded ? "compact" : "expand"));
      expandButton.setAttribute("aria-pressed", expanded ? "true" : "false");

      root.dataset.expanded = expanded ? "1" : "0";
      root.dataset.siteControl = state.siteActions ? "1" : "0";

      drawer.querySelectorAll("[data-gx-setting]").forEach(input => {
        const key = input.getAttribute("data-gx-setting");
        input.checked = Boolean(state[key]);
      });

      syncSessionActions();
    }

    expandButton.addEventListener("click", event => {
      event.preventDefault();
      event.stopPropagation();

      const nextExpanded = root.dataset.expanded !== "1";
      set("expanded", nextExpanded);

      /* Apply immediately as well as through the settings subscriber.
         This prevents the compact action from being lost to stale UI state. */
      root.dataset.expanded = nextExpanded ? "1" : "0";
      expandButton.setAttribute("aria-pressed", nextExpanded ? "true" : "false");

      requestAnimationFrame(syncUI);
    });

    drawer.querySelectorAll("[data-gx-setting]").forEach(input => {
      input.addEventListener("change", () => {
        set(input.getAttribute("data-gx-setting"), input.checked);
      });
    });

    subscribe(syncUI);
    window.addEventListener("mx:garfix-session-change", syncSessionActions);

    new MutationObserver(syncUI).observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["lang", "dir"]
    });

    syncUI();
  }

  window.__mxGarfixSettings = {
    get,
    set,
    all: () => ({ ...state }),
    subscribe,
    setExpanded: value => set("expanded", Boolean(value)),
    toggleExpanded: () => set("expanded", !state.expanded),
    open: () => {
      const drawer = document.getElementById("mx-garfix-settings");
      const button = document.getElementById("mx-garfix-settings-toggle");
      if (drawer) drawer.hidden = false;
      button?.setAttribute("aria-expanded", "true");
    },
    close: () => {
      const drawer = document.getElementById("mx-garfix-settings");
      const button = document.getElementById("mx-garfix-settings-toggle");
      if (drawer) drawer.hidden = true;
      button?.setAttribute("aria-expanded", "false");
    }
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initUI, { once: true });
  } else {
    initUI();
  }
})();
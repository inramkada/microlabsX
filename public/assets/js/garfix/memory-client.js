(function () {
  "use strict";

  const CONSENT_KEY = "mx_garfix_memory_consent_v1";
  const CLIENT_KEY = "mx_garfix_memory_client_v1";
  const API_HOST = "api.microretailx.com";
  const ENDPOINTS = new Set(["/v1/chat", "/v1/vision"]);

  const COPY = {
    en: {
      title: "Conversation memory",
      hint: "Optional. Your chat may be retained for up to 30 days; uploaded images are not stored."
    },
    es: {
      title: "Memoria de conversación",
      hint: "Opcional. El chat puede conservarse hasta 30 días; las imágenes no se guardan."
    },
    ca: {
      title: "Memòria de conversa",
      hint: "Opcional. El xat es pot conservar fins a 30 dies; les imatges no es desen."
    },
    fr: {
      title: "Mémoire de conversation",
      hint: "Facultatif. Le chat peut être conservé jusqu’à 30 jours ; les images ne sont pas stockées."
    },
    ar: {
      title: "ذاكرة المحادثة",
      hint: "اختياري. قد تُحفظ المحادثة حتى 30 يوماً؛ لا تُخزّن الصور."
    },
    ru: {
      title: "Память разговора",
      hint: "Необязательно. Чат может храниться до 30 дней; изображения не сохраняются."
    },
    hi: {
      title: "बातचीत मेमोरी",
      hint: "वैकल्पिक। चैट 30 दिन तक रखी जा सकती है; चित्र संग्रहीत नहीं होते।"
    },
    zh: {
      title: "对话记忆",
      hint: "可选。聊天可保留最多 30 天；图片不会保存。"
    },
    eu: {
      title: "Elkarrizketa-memoria",
      hint: "Aukerakoa. Txata 30 egunez gorde daiteke; irudiak ez dira gordetzen."
    },
    ja: {
      title: "会話メモリ",
      hint: "任意です。チャットは最大30日間保存される場合があります。アップロード画像は保存されません。"
    }
  };

  function lang() {
    const raw = String(document.documentElement.lang || "en")
      .toLowerCase()
      .split("-")[0];
    return COPY[raw] ? raw : "en";
  }

  function copy(key) {
    return COPY[lang()]?.[key] || COPY.en[key] || key;
  }

  function readConsent() {
    try {
      return localStorage.getItem(CONSENT_KEY) === "1";
    } catch (_) {
      return false;
    }
  }

  function setConsent(value) {
    const enabled = Boolean(value);
    try {
      localStorage.setItem(CONSENT_KEY, enabled ? "1" : "0");
    } catch (_) {}
    syncUI();
    window.dispatchEvent(new CustomEvent("mx:garfix-memory-consent", {
      detail: { enabled }
    }));
    return enabled;
  }

  function clientId() {
    try {
      let value = localStorage.getItem(CLIENT_KEY);
      if (!value) {
        value = crypto.randomUUID
          ? crypto.randomUUID()
          : `gx-${Date.now()}-${Math.random().toString(16).slice(2)}`;
        localStorage.setItem(CLIENT_KEY, value);
      }
      return value;
    } catch (_) {
      return null;
    }
  }

  function targetUrl(input) {
    try {
      const raw = input instanceof Request ? input.url : String(input);
      return new URL(raw, window.location.href);
    } catch (_) {
      return null;
    }
  }

  const nativeFetch = window.fetch.bind(window);

  window.fetch = function garfixMemoryFetch(input, init) {
    const url = targetUrl(input);
    const enabled = readConsent();

    if (
      url &&
      url.hostname === API_HOST &&
      ENDPOINTS.has(url.pathname) &&
      init &&
      typeof init.body === "string"
    ) {
      try {
        const body = JSON.parse(init.body);
        if (body && typeof body === "object" && !Array.isArray(body)) {
          const context = body.context && typeof body.context === "object"
            ? body.context
            : {};

          body.context = {
            ...context,
            memoryConsent: enabled,
            ...(enabled ? { clientId: clientId() } : {})
          };

          init = {
            ...init,
            body: JSON.stringify(body)
          };
        }
      } catch (_) {}
    }

    return nativeFetch(input, init);
  };

  function ensureUI() {
    const list = document.querySelector("#mx-garfix-settings .mx-garfix-settings-list");
    if (!list || document.getElementById("mx-garfix-memory-setting")) return;

    const row = document.createElement("label");
    row.className = "mx-garfix-setting-row";
    row.id = "mx-garfix-memory-setting";
    row.innerHTML = `
      <span>
        <strong data-gx-memory-copy="title"></strong>
        <small data-gx-memory-copy="hint"></small>
      </span>
      <input type="checkbox" id="mx-garfix-memory-toggle" />
    `;

    list.appendChild(row);

    const toggle = row.querySelector("#mx-garfix-memory-toggle");
    toggle?.addEventListener("change", () => setConsent(toggle.checked));
    syncUI();
  }

  function syncUI() {
    ensureUI();
    const row = document.getElementById("mx-garfix-memory-setting");
    if (!row) return;

    row.querySelectorAll("[data-gx-memory-copy]").forEach(node => {
      const key = node.getAttribute("data-gx-memory-copy");
      node.textContent = copy(key);
    });

    const toggle = row.querySelector("#mx-garfix-memory-toggle");
    if (toggle) toggle.checked = readConsent();
  }

  window.__mxGarfixMemory = {
    enabled: readConsent,
    setEnabled: setConsent,
    clientId
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", syncUI, { once: true });
  } else {
    syncUI();
  }

  window.addEventListener("mx:garfix-settings-open", syncUI);

  new MutationObserver(syncUI).observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["lang", "dir"]
  });
})();

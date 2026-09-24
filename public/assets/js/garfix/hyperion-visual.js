(function () {
  "use strict";

  const OVERLAY_ID = "mx-hyperion-visual-overlay";
  const THEME_STATE_KEY = "mx_garfix_theme_v1";
  const DISCO_DURATION_MS = 5000;

  const COLOR_ALIASES = Object.freeze({
    rosa: "pink",
    rosado: "pink",
    pink: "pink",
    hotpink: "pink",

    fucsia: "fuchsia",
    fuchsia: "fuchsia",
    deeppink: "fuchsia",

    magenta: "magenta",

    rojo: "red",
    red: "red",

    naranja: "orange",
    orange: "orange",

    amarillo: "gold",
    yellow: "gold",
    dorado: "gold",
    gold: "gold",

    verde: "green",
    green: "green",
    limegreen: "green",

    azul: "blue",
    blue: "blue",
    dodgerblue: "blue",

    morado: "purple",
    purple: "purple",
    blueviolet: "purple",

    violeta: "violet",
    violet: "violet",

    blanco: "white",
    white: "white",

    negro: "black",
    black: "black",

    gris: "gray",
    grey: "gray",
    gray: "gray"
  });

  let discoTimer = null;
  let audioContext = null;
  let audioGain = null;

  function ensureOverlay() {
    let overlay = document.getElementById(OVERLAY_ID);
    if (overlay) return overlay;

    overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    overlay.setAttribute("aria-hidden", "true");
    overlay.dataset.active = "0";

    const video = document.getElementById("mx-video-bg");

    if (video?.parentNode) {
      video.insertAdjacentElement("afterend", overlay);
    } else {
      document.body.prepend(overlay);
    }

    return overlay;
  }

  function normalizeColor(value) {
    const raw = String(value || "").trim().slice(0, 64);
    if (!raw) return null;

    const lower = raw.toLowerCase();

    if (["default", "normal", "reset", "original"].includes(lower)) {
      return "default";
    }

    return COLOR_ALIASES[lower] || null;
  }

  function persistColor(color) {
    try {
      sessionStorage.setItem(THEME_STATE_KEY, JSON.stringify({
        color: color || "default",
        disco: false
      }));
    } catch (_) {}
  }

  function readColor() {
    try {
      const saved = JSON.parse(sessionStorage.getItem(THEME_STATE_KEY) || "null");
      return normalizeColor(saved?.color) || "default";
    } catch (_) {
      return "default";
    }
  }

  function stopAudio() {
    if (!audioGain || !audioContext) return;

    try {
      const now = audioContext.currentTime;
      audioGain.gain.cancelScheduledValues(now);
      audioGain.gain.setValueAtTime(Math.max(audioGain.gain.value, 0.0001), now);
      audioGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.06);
    } catch (_) {}

    audioGain = null;
  }

  function playDiscoAudio() {
    const AudioCtor = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtor) return false;

    try {
      if (!audioContext) audioContext = new AudioCtor();
    } catch (_) {
      return false;
    }

    const schedule = () => {
      stopAudio();

      const ctx = audioContext;
      const start = ctx.currentTime + 0.025;
      const end = start + 5;
      const master = ctx.createGain();
      audioGain = master;

      master.gain.setValueAtTime(0.0001, start);
      master.gain.exponentialRampToValueAtTime(0.10, start + 0.06);
      master.gain.setValueAtTime(0.10, end - 0.18);
      master.gain.exponentialRampToValueAtTime(0.0001, end);
      master.connect(ctx.destination);

      const notes = [329.63, 392.00, 493.88, 587.33, 493.88, 392.00, 349.23, 440.00];
      const step = 0.25;

      for (let i = 0; i < 20; i += 1) {
        const noteStart = start + i * step;
        const noteEnd = Math.min(noteStart + 0.18, end);
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = i % 4 === 0 ? "square" : "sawtooth";
        osc.frequency.setValueAtTime(notes[i % notes.length], noteStart);
        gain.gain.setValueAtTime(0.0001, noteStart);
        gain.gain.exponentialRampToValueAtTime(0.11, noteStart + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, noteEnd);

        osc.connect(gain).connect(master);
        osc.start(noteStart);
        osc.stop(noteEnd + 0.01);
      }

      window.setTimeout(() => {
        if (audioGain === master) audioGain = null;
        try { master.disconnect(); } catch (_) {}
      }, 5350);
    };

    if (audioContext.state === "suspended") {
      audioContext.resume().then(schedule).catch(() => {});
      return true;
    }

    schedule();
    return true;
  }

  function setTheme(color) {
    const powers = window.__mxGarfixPowers;
    if (powers?.enabled?.() !== true) return false;

    const normalized = normalizeColor(color);
    if (!normalized) return false;

    if (discoTimer) {
      clearTimeout(discoTimer);
      discoTimer = null;
    }
    stopAudio();

    const overlay = ensureOverlay();
    overlay.classList.remove("is-disco");

    if (normalized === "default") {
      overlay.dataset.active = "0";
      delete overlay.dataset.theme;
      persistColor("default");
      return true;
    }

    overlay.dataset.theme = normalized;
    overlay.dataset.active = "1";
    persistColor(normalized);
    return true;
  }

  function setDisco(enabled) {
    const powers = window.__mxGarfixPowers;
    if (powers?.enabled?.() !== true) return false;

    const overlay = ensureOverlay();

    if (discoTimer) {
      clearTimeout(discoTimer);
      discoTimer = null;
    }

    if (enabled === false) {
      stopAudio();
      overlay.classList.remove("is-disco");
      const base = readColor();
      if (base === "default") {
        overlay.dataset.active = "0";
      } else {
        overlay.dataset.theme = base;
        overlay.dataset.active = "1";
      }
      return true;
    }

    overlay.dataset.active = "1";
    overlay.classList.add("is-disco");
    playDiscoAudio();

    discoTimer = window.setTimeout(() => {
      discoTimer = null;
      stopAudio();
      overlay.classList.remove("is-disco");

      const restore = readColor();
      if (restore === "default") {
        overlay.dataset.active = "0";
      } else {
        overlay.dataset.theme = restore;
        overlay.dataset.active = "1";
      }
    }, DISCO_DURATION_MS);

    return true;
  }

  function install() {
    const powers = window.__mxGarfixPowers;
    if (!powers || powers.__hyperionVisualV2 === true) return false;

    const originalExecute = powers.execute.bind(powers);

    powers.setTheme = setTheme;
    powers.setDisco = setDisco;
    powers.execute = action => {
      if (action?.type === "theme") return setTheme(action.color);
      if (action?.type === "disco") return setDisco(action.enabled !== false);
      return originalExecute(action);
    };
    powers.__hyperionVisualV2 = true;

    const saved = readColor();
    if (saved !== "default") {
      const overlay = ensureOverlay();
      overlay.dataset.theme = saved;
      overlay.dataset.active = "1";
    }

    return true;
  }

  if (!install()) {
    window.addEventListener("load", install, { once: true });
  }

  window.__mxHyperionVisual = {
    setTheme,
    setDisco,
    install,
    overlay: ensureOverlay
  };
})();

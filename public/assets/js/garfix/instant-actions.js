(function () {
  "use strict";

  const COLOR_WORDS = Object.freeze({
    rosa: "hotpink",
    rosado: "hotpink",
    pink: "hotpink",
    hotpink: "hotpink",
    fucsia: "deeppink",
    fuchsia: "deeppink",
    magenta: "magenta",
    rojo: "red",
    red: "red",
    naranja: "orange",
    orange: "orange",
    amarillo: "gold",
    yellow: "gold",
    dorado: "gold",
    gold: "gold",
    verde: "limegreen",
    green: "limegreen",
    azul: "dodgerblue",
    blue: "dodgerblue",
    morado: "blueviolet",
    purple: "blueviolet",
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

  const ACTION_VERBS = /\b(pon|poner|ponme|cambia|cambiar|cambiame|haz|hacer|activa|activar|enciende|encender|deja|vuelve|restaura|restaurar|quita|quitar|set|make|turn|change|switch|activate|enable|disable|stop)\b/i;
  const VISUAL_CONTEXT = /\b(web|pagina|fondo|background|tema|theme|color|colores|colour|colours)\b/i;
  const DISCO_ON = /\b(modo\s+discoteca|modo\s+disco|discoteca|disco\s+mode|party\s+mode|modo\s+fiesta)\b/i;
  const DISCO_OFF = /\b(para|parar|quita|quitar|apaga|apagar|stop|disable|off)\b.*\b(discoteca|disco|fiesta)\b|\b(discoteca|disco|fiesta)\b.*\b(para|parar|quita|quitar|apaga|apagar|stop|disable|off)\b/i;
  const RESET_THEME = /\b(normal|original|por\s+defecto|default|reset|restaura|restaurar)\b/i;

  let lastExecutionKey = "";
  let lastExecutionAt = 0;

  function normalizeText(value) {
    return String(value || "")
      .trim()
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  }

  function powersReady() {
    return Boolean(
      window.__mxGarfixPowers?.enabled?.() &&
      typeof window.__mxGarfixPowers?.execute === "function"
    );
  }

  function findColor(text) {
    const hex = text.match(/#[0-9a-f]{3,8}\b/i)?.[0];
    if (hex) return hex;

    const rgb = text.match(/\b(?:rgb|rgba|hsl|hsla)\([^)]{3,64}\)/i)?.[0];
    if (rgb) return rgb;

    for (const [word, color] of Object.entries(COLOR_WORDS)) {
      const pattern = new RegExp(`\\b${word}\\b`, "i");
      if (pattern.test(text)) return color;
    }

    return null;
  }

  function inferInstantAction(rawText) {
    const text = normalizeText(rawText);
    if (!text) return null;

    if (DISCO_ON.test(text)) {
      return {
        type: "disco",
        enabled: !DISCO_OFF.test(text)
      };
    }

    if (!ACTION_VERBS.test(text)) return null;

    if (
      RESET_THEME.test(text) &&
      (VISUAL_CONTEXT.test(text) || /\b(negro|black)\b/.test(text))
    ) {
      return { type: "theme", color: "default" };
    }

    const color = findColor(text);
    if (!color) return null;

    const hasVisualContext = VISUAL_CONTEXT.test(text);
    const shortCommand = text.split(/\s+/).length <= 7;
    if (!hasVisualContext && !shortCommand) return null;

    return { type: "theme", color };
  }

  function executeText(rawText, source) {
    if (!powersReady()) return false;

    const action = inferInstantAction(rawText);
    if (!action) return false;

    const key = JSON.stringify(action);
    const now = Date.now();

    if (key === lastExecutionKey && now - lastExecutionAt < 600) {
      return true;
    }

    lastExecutionKey = key;
    lastExecutionAt = now;

    const executed = window.__mxGarfixPowers.execute(action) === true;

    window.dispatchEvent(
      new CustomEvent("mx:garfix-instant-action", {
        detail: {
          action,
          executed,
          source
        }
      })
    );

    return executed;
  }

  function executeFromComposer(event) {
    const form = event.target;
    if (!(form instanceof HTMLFormElement) || form.id !== "mx-garfix-form") return;

    const input = document.getElementById("mx-garfix-input");
    executeText(input?.value, "submit");
  }

  function executeFromEnter(event) {
    const input = event.target;

    if (!(input instanceof HTMLTextAreaElement) || input.id !== "mx-garfix-input") return;
    if (event.key !== "Enter" || event.shiftKey || event.isComposing) return;

    executeText(input.value, "enter");
  }

  /* GARFIX's own Enter handler calls sendMessage() directly instead of
     submitting the form. Listen in capture phase so visual commands run for
     both ways of sending: Enter and the send button. */
  document.addEventListener("keydown", executeFromEnter, true);
  document.addEventListener("submit", executeFromComposer, true);

  window.__mxGarfixInstantActions = {
    infer: inferInstantAction,
    execute(text) {
      return executeText(text, "api");
    }
  };
})();
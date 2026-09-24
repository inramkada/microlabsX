(function () {
  "use strict";

  const settings = window.__mxGarfixSettings;
  const canSpeak =
    "speechSynthesis" in window &&
    "SpeechSynthesisUtterance" in window;

  const timers = new WeakMap();
  let activeButton = null;

  const LANG = {
    en: "en-US",
    es: "es-ES",
    ca: "ca-ES",
    fr: "fr-FR",
    ar: "ar-MA",
    zh: "zh-CN",
    hi: "hi-IN",
    ja: "ja-JP",
    ru: "ru-RU",
    eu: "eu-ES"
  };

  const LABEL = {
    en: "Read response aloud",
    es: "Leer respuesta en voz alta",
    ca: "Llegeix la resposta en veu alta",
    eu: "Irakurri erantzuna ozen",
    zh: "朗读回答",
    hi: "उत्तर ज़ोर से पढ़ें",
    ar: "قراءة الرد بصوت عالٍ",
    ru: "Прочитать ответ вслух",
    fr: "Lire la réponse à voix haute",
    ja: "回答を音声で読み上げる"
  };

  const SPEAKER_SVG = `
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M5 10h3l4-3v10l-4-3H5z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
      <path d="M15 9.2c1 .8 1.5 1.7 1.5 2.8S16 14 15 14.8" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
      <path d="M17.5 7c1.7 1.3 2.5 3 2.5 5s-.8 3.7-2.5 5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
    </svg>`;

  function language() {
    return String(document.documentElement.lang || "en")
      .toLowerCase()
      .split("-")[0];
  }

  function currentVoiceLang() {
    return LANG[language()] || "en-US";
  }

  function speakerLabel() {
    return LABEL[language()] || LABEL.en;
  }

  function stopSpeaking() {
    if (!canSpeak) return;
    window.speechSynthesis.cancel();
    activeButton?.classList.remove("is-speaking");
    activeButton = null;
  }

  function messageText(node) {
    return String(
      node?.querySelector?.(".mx-garfix-message-text")?.textContent || ""
    ).trim();
  }

  function speakText(text, button = null) {
    if (!canSpeak) return false;

    const clean = String(text || "").trim();
    if (!clean) return false;

    if (button && activeButton === button) {
      stopSpeaking();
      return true;
    }

    stopSpeaking();

    const utterance = new SpeechSynthesisUtterance(clean);
    utterance.lang = currentVoiceLang();
    utterance.rate = 1.12;
    utterance.pitch = 1;
    utterance.volume = 1;

    activeButton = button;
    button?.classList.add("is-speaking");

    const finish = () => {
      button?.classList.remove("is-speaking");
      if (activeButton === button) activeButton = null;
    };

    utterance.addEventListener("end", finish, { once: true });
    utterance.addEventListener("error", finish, { once: true });
    window.speechSynthesis.speak(utterance);
    return true;
  }

  function decorate(node) {
    if (
      !canSpeak ||
      !node?.matches?.('.mx-garfix-message[data-role="assistant"]')
    ) return;

    if (!messageText(node)) return;

    const meta = node.querySelector(".mx-garfix-message-meta");
    if (!meta || meta.querySelector(".mx-garfix-speak")) return;

    const button = document.createElement("button");
    button.type = "button";
    button.className = "mx-garfix-speak";
    button.setAttribute("aria-label", speakerLabel());
    button.setAttribute("title", speakerLabel());
    button.innerHTML = SPEAKER_SVG;

    button.addEventListener("click", () => {
      speakText(messageText(node), button);
    });

    meta.prepend(button);
  }

  function schedule(node) {
    if (!node) return;
    clearTimeout(timers.get(node));
    timers.set(node, setTimeout(() => decorate(node), 300));
  }

  function findMessage(node) {
    const element =
      node?.nodeType === Node.ELEMENT_NODE
        ? node
        : node?.parentElement;

    return element?.closest?.(".mx-garfix-message") || null;
  }

  function init() {
    const messages = document.getElementById("mx-garfix-messages");
    if (!messages) return;

    messages
      .querySelectorAll('.mx-garfix-message[data-role="assistant"]')
      .forEach(schedule);

    const observer = new MutationObserver(mutations => {
      for (const mutation of mutations) {
        const targetMessage = findMessage(mutation.target);
        if (targetMessage) schedule(targetMessage);

        for (const added of mutation.addedNodes) {
          const direct = findMessage(added);
          if (direct) schedule(direct);

          if (added.nodeType === Node.ELEMENT_NODE) {
            added
              .querySelectorAll?.('.mx-garfix-message[data-role="assistant"]')
              .forEach(schedule);
          }
        }
      }
    });

    observer.observe(messages, {
      childList: true,
      subtree: true,
      characterData: true
    });

    window.addEventListener("mx:garfix-response-complete", event => {
      if (settings?.get?.("autoVoice") === true) {
        speakText(event.detail?.text || "");
      }
    });

    settings?.subscribe?.((key, value) => {
      if (key === "autoVoice" && !value) stopSpeaking();
    });

    document.getElementById("mx-garfix-close")
      ?.addEventListener("click", stopSpeaking);
  }

  window.__mxGarfixVoice = {
    supported: { output: canSpeak },
    stopSpeaking,
    speak: text => speakText(text)
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
})();

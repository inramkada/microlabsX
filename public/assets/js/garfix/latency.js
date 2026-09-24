(function () {
  "use strict";

  const form = document.getElementById("mx-garfix-form");
  const input = document.getElementById("mx-garfix-input");
  const attachment = document.getElementById("mx-garfix-attachment");
  const messages = document.getElementById("mx-garfix-messages");
  const API_HOST = "api.microretailx.com";
  const ENDPOINTS = new Set(["/v1/chat", "/v1/vision"]);

  if (!form || !input || !messages) return;

  let startedAt = null;
  let armed = false;
  let lastResponseMs = null;

  function hasPendingMessage() {
    return Boolean(
      input.value.trim() ||
      (attachment && attachment.hidden === false)
    );
  }

  function arm() {
    if (!hasPendingMessage()) return;
    startedAt = performance.now();
    armed = true;
  }

  function reset() {
    startedAt = null;
    armed = false;
  }

  function targetUrl(inputValue) {
    try {
      const raw = inputValue instanceof Request
        ? inputValue.url
        : String(inputValue);
      return new URL(raw, window.location.href);
    } catch (_) {
      return null;
    }
  }

  const nativeFetch = window.fetch.bind(window);

  window.fetch = function garfixLatencyFetch(inputValue, init) {
    const url = targetUrl(inputValue);

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
            performance: {
              ...(context.performance && typeof context.performance === "object"
                ? context.performance
                : {}),
              ...(Number.isFinite(lastResponseMs)
                ? { lastResponseMs }
                : {})
            }
          };

          init = {
            ...init,
            body: JSON.stringify(body)
          };
        }
      } catch (_) {}
    }

    return nativeFetch(inputValue, init);
  };

  function addLatency(node) {
    if (!armed || startedAt == null) return false;
    if (!(node instanceof HTMLElement)) return false;
    if (node.dataset.role !== "assistant") return false;

    const text = node.querySelector(".mx-garfix-message-text");
    const meta = node.querySelector(".mx-garfix-message-meta");

    if (!text || !text.textContent.trim() || !meta) return false;
    if (meta.querySelector(".mx-garfix-latency")) return true;

    const elapsedMs = Math.max(
      0,
      Math.round(performance.now() - startedAt)
    );

    lastResponseMs = elapsedMs;

    const badge = document.createElement("span");
    badge.className = "mx-garfix-message-time mx-garfix-latency";
    badge.textContent = `⚡ ${elapsedMs} ms`;
    badge.dir = "ltr";

    meta.appendChild(badge);
    node.dataset.latencyMs = String(elapsedMs);
    reset();
    return true;
  }

  window.__mxGarfixLatency = {
    lastResponseMs: () => lastResponseMs
  };

  document.addEventListener(
    "submit",
    event => {
      if (event.target === form) arm();
    },
    true
  );

  document.addEventListener(
    "keydown",
    event => {
      if (
        event.target === input &&
        event.key === "Enter" &&
        !event.shiftKey &&
        !event.isComposing
      ) {
        arm();
      }
    },
    true
  );

  new MutationObserver(mutations => {
    if (!armed) return;

    for (const mutation of mutations) {
      for (const added of mutation.addedNodes) {
        if (!(added instanceof HTMLElement)) continue;

        if (addLatency(added)) return;

        if (added.dataset.role === "system") {
          reset();
          return;
        }
      }
    }
  }).observe(messages, {
    childList: true
  });
})();

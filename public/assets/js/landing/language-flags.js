(() => {
  "use strict";

  const pills = Array.from(document.querySelectorAll(".lang-pill"));
  if (!pills.length) return;

  const reduceMotion =
    window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

  const TRANSITION_MS = reduceMotion ? 40 : 360;
  const sequenceState = new WeakMap();
  const previewTimers = new WeakMap();

  function sequenceConfig(pill) {
    const host = pill?.querySelector?.("[data-flag-sequence]");
    if (!host) return null;

    const flags = String(host.dataset.flags || "")
      .split(",")
      .map((flag) => flag.trim())
      .filter(Boolean);

    const slots = Array.from(
      host.querySelectorAll("[data-flag-slot]")
    );

    if (!flags.length || slots.length < 2) return null;

    const interval = Math.max(
      TRANSITION_MS + 100,
      Number.parseInt(host.dataset.interval || "560", 10) || 560
    );

    return { host, flags, slots, interval };
  }

  function resetSlots(config) {
    config.slots.forEach((slot, index) => {
      slot.classList.remove(
        "is-entering",
        "is-leaving",
        "is-current"
      );

      if (index === 0) {
        slot.classList.add("is-current");
      }
    });
  }

  function stopSequence(pill) {
    const state = sequenceState.get(pill);
    if (!state) return;

    state.stopped = true;
    state.token += 1;

    if (state.timer) {
      window.clearTimeout(state.timer);
    }

    if (state.transitionTimer) {
      window.clearTimeout(state.transitionTimer);
    }

    resetSlots(state.config);
    sequenceState.delete(pill);
  }

  function startSequence(pill) {
    const config = sequenceConfig(pill);
    if (!config || sequenceState.has(pill)) return;

    const state = {
      config,
      index: 0,
      currentSlot: 0,
      timer: null,
      transitionTimer: null,
      token: 0,
      stopped: false,
    };

    sequenceState.set(pill, state);

    const firstUrl = `/assets/flags/${config.flags[0]}.svg`;
    config.slots[0].style.backgroundImage = `url("${firstUrl}")`;
    resetSlots(config);

    const schedule = (delay = config.interval) => {
      if (state.stopped) return;
      state.timer = window.setTimeout(advance, delay);
    };

    const advance = () => {
      if (state.stopped) return;

      const nextIndex = (state.index + 1) % config.flags.length;
      const nextSlotIndex = state.currentSlot === 0 ? 1 : 0;
      const nextSlot = config.slots[nextSlotIndex];
      const currentSlot = config.slots[state.currentSlot];
      const url = `/assets/flags/${config.flags[nextIndex]}.svg`;
      const token = ++state.token;

      const preloader = new Image();
      preloader.decoding = "async";

      preloader.onload = () => {
        if (
          state.stopped ||
          token !== state.token ||
          sequenceState.get(pill) !== state
        ) {
          return;
        }

        nextSlot.style.backgroundImage = `url("${url}")`;

        currentSlot.classList.remove(
          "is-entering",
          "is-leaving",
          "is-current"
        );

        nextSlot.classList.remove(
          "is-entering",
          "is-leaving",
          "is-current"
        );

        // One frame lets the browser paint the new SVG before the wipe begins.
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            if (state.stopped) return;

            currentSlot.classList.add("is-leaving");
            nextSlot.classList.add("is-entering");

            state.transitionTimer = window.setTimeout(() => {
              if (state.stopped) return;

              currentSlot.classList.remove("is-leaving");
              nextSlot.classList.remove("is-entering");
              nextSlot.classList.add("is-current");

              state.currentSlot = nextSlotIndex;
              state.index = nextIndex;
            }, TRANSITION_MS);

            // The next country starts only after this premium sweep has had
            // enough time to breathe, so transitions never stack.
            schedule(config.interval);
          });
        });
      };

      preloader.onerror = () => {
        if (!state.stopped) schedule(config.interval);
      };

      preloader.src = url;
    };

    schedule();
  }

  function clearPreviewTimer(pill) {
    const timer = previewTimers.get(pill);
    if (timer) window.clearTimeout(timer);
    previewTimers.delete(pill);
  }

  function showPreview(pill) {
    clearPreviewTimer(pill);
    pill.classList.add("is-flag-preview");
    startSequence(pill);
  }

  function hidePreview(pill, delay = 180) {
    clearPreviewTimer(pill);

    const timer = window.setTimeout(() => {
      pill.classList.remove("is-flag-preview");
      stopSequence(pill);
      previewTimers.delete(pill);
    }, delay);

    previewTimers.set(pill, timer);
  }

  pills.forEach((pill) => {
    pill.addEventListener("mouseenter", () => startSequence(pill));
    pill.addEventListener("mouseleave", () => stopSequence(pill));
    pill.addEventListener("focusin", () => startSequence(pill));
    pill.addEventListener("focusout", () => stopSequence(pill));

    pill.addEventListener(
      "touchstart",
      () => showPreview(pill),
      { passive: true }
    );

    pill.addEventListener(
      "touchend",
      () => hidePreview(pill, 280),
      { passive: true }
    );

    pill.addEventListener(
      "touchcancel",
      () => hidePreview(pill, 0),
      { passive: true }
    );
  });

  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) return;

    pills.forEach((pill) => {
      clearPreviewTimer(pill);
      pill.classList.remove("is-flag-preview");
      stopSequence(pill);
    });
  });
})();
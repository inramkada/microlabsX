(() => {
  "use strict";

  const switchEl =
    document.getElementById("lang-switch");

  const railEl =
    document.getElementById("lang-rail");

  if (!switchEl || !railEl) return;

  const trigger =
    switchEl.querySelector(".lang-trigger");

  if (!trigger) return;

  const MOBILE = "(max-width: 760px)";

  const isMobile = () =>
    window.matchMedia(MOBILE).matches;


  function syncBodyLock() {
    const open =
      isMobile() &&
      (
        switchEl.classList.contains("is-open") ||
        document.querySelector("#mx-header .nav-dropdown.is-open")
      );

    document.body.classList.toggle(
      "mx-sheet-open",
      !!open
    );
  }

  function closeLanguage() {
    switchEl.classList.remove("is-open");

    trigger.setAttribute(
      "aria-expanded",
      "false"
    );

    syncBodyLock();
  }

  function openLanguage() {
    document
      .querySelectorAll("#mx-header .nav-dropdown.is-open")
      .forEach((dropdown) => {
        dropdown.classList.remove("is-open");

        dropdown
          .querySelector(":scope > .navdrop-trigger")
          ?.setAttribute(
            "aria-expanded",
            "false"
          );
      });

    switchEl.classList.add("is-open");

    trigger.setAttribute(
      "aria-expanded",
      "true"
    );

    syncBodyLock();
  }

  function toggleLanguage(event) {
    event.preventDefault();
    event.stopPropagation();

    if (
      switchEl.classList.contains("is-open")
    ) {
      closeLanguage();
    } else {
      openLanguage();
    }
  }

  trigger.addEventListener(
    "click",
    toggleLanguage
  );

  trigger.addEventListener(
    "keydown",
    (event) => {
      if (
        event.key !== "Enter" &&
        event.key !== " "
      ) {
        return;
      }

      toggleLanguage(event);
    }
  );

  railEl
    .querySelectorAll("[data-lang], a, button")
    .forEach((item) => {
      item.addEventListener("click", () => {
        setTimeout(
          closeLanguage,
          0
        );
      });
    });

  document.addEventListener("click", (event) => {
    if (!switchEl.contains(event.target)) {
      closeLanguage();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeLanguage();
    }
  });

  window.addEventListener("resize", () => {
    syncBodyLock();
  });

  // The menu is now fully initialised; reveal it only in its final state.
  document.documentElement.classList.add("mx-ui-ready");
})();
(function(){
  "use strict";

  function applyLabsIdentity(){
    const root = document.getElementById("mx-garfix");
    if (!root) return false;

    root.dataset.site = "microlabsx";

    const name = root.querySelector(".mx-garfix-name strong");
    if (name) name.textContent = "GARFIX · LABS";

    const subtitle = document.getElementById("mx-garfix-subtitle");
    if (subtitle) subtitle.textContent = "MICROLABSX / R&D ASSISTANT";

    const launcher = document.getElementById("mx-garfix-launcher");
    if (launcher) {
      const label = Array.from(launcher.children).find(
        node => node.tagName === "SPAN" &&
        !node.classList.contains("mx-garfix-launcher-dot") &&
        !node.classList.contains("mx-garfix-launcher-time")
      );
      if (label) label.textContent = "GARFIX LABS";
    }

    return true;
  }

  if (!applyLabsIdentity()) {
    const observer = new MutationObserver(() => {
      if (applyLabsIdentity()) observer.disconnect();
    });
    observer.observe(document.documentElement, { childList:true, subtree:true });
    window.setTimeout(() => observer.disconnect(), 10000);
  }

  window.__MICROLABSX_CONTEXT = Object.freeze({
    site: "microlabsx.com",
    vertical: "microlabsx",
    operator: "MICRORETAILX LLC",
    purpose: "non-commercial R&D",
    assistant: "GARFIX · LABS"
  });
})();
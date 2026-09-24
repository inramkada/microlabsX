(function(){
  "use strict";

  const page = document.body?.dataset?.page;
  const data = window.MX_PAGE;
  if (!page || !data) return;

  const visibleBrand = "MICROLABSX";
  const operatorBrand = "MICRORETAILX";

  const adaptMeta = value => {
    if (typeof value !== "string") return value;
    return value.replaceAll(operatorBrand, visibleBrand);
  };

  const adaptBodyHeading = value => {
    if (typeof value !== "string") return value;

    const lines = value.split("\n");
    if (lines.length > 0) {
      lines[0] = lines[0].replaceAll(operatorBrand, visibleBrand);
    }
    return lines.join("\n");
  };

  if (data.titleMap) {
    for (const lang of Object.keys(data.titleMap)) {
      data.titleMap[lang] = adaptMeta(data.titleMap[lang]);
    }
  }

  if (data.descriptionMap) {
    for (const lang of Object.keys(data.descriptionMap)) {
      data.descriptionMap[lang] = adaptMeta(data.descriptionMap[lang]);
    }
  }

  if (data.i18n) {
    for (const lang of Object.keys(data.i18n)) {
      const locale = data.i18n[lang];
      if (!locale || typeof locale !== "object") continue;

      if (typeof locale["card.terms"] === "string") {
        locale["card.terms"] = adaptBodyHeading(locale["card.terms"]);
      }
    }
  }
})();
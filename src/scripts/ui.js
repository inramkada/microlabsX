(() => {
  "use strict";

  const switchEl = document.getElementById("lang-switch");
  const railEl = document.getElementById("lang-rail");
  if (!switchEl || !railEl) return;

  const buttons = Array.from(railEl.querySelectorAll(".lang-pill"));
  const contactLink = document.getElementById("contactLink");
  const footerRights = document.getElementById("footerRights");
  const headlineText = document.getElementById("headlineText");
  const trigger = switchEl.querySelector(".lang-trigger");

  const DEFAULT_LANG = "en";
  const STORAGE_KEY = "mx_lang";
  const RTL_LANGS = new Set(["ar", "he"]);

  const I18N = {
    "en": { contact: "Contact", headline: "WE ARE DEVELOPING", selector: "Language selector", languages: "Languages", footer: "ALL RIGHTS RESERVED — MICROLABSX: NON-COMMERCIAL R&D PROJECTS" },
    "es": { contact: "Contacto", headline: "ESTAMOS DESARROLLANDO", selector: "Selector de idioma", languages: "Idiomas", footer: "TODOS LOS DERECHOS RESERVADOS — MICROLABSX: PROYECTOS DE I+D NO COMERCIALES" },
    "ca": { contact: "Contacte", headline: "ESTEM DESENVOLUPANT", selector: "Selector d’idioma", languages: "Idiomes", footer: "TOTS ELS DRETS RESERVATS — MICROLABSX: PROJECTES D’R+D NO COMERCIALS" },
    "eu": { contact: "Kontaktua", headline: "GARATZEN ARI GARA", selector: "Hizkuntza hautatzailea", languages: "Hizkuntzak", footer: "ESKUBIDE GUZTIAK ERRESERBATUTA — MICROLABSX: MERKATARITZARIK GABEKO I+G PROIEKTUAK" },
    "zh": { contact: "联系", headline: "正在开发中", selector: "语言选择器", languages: "语言", footer: "保留所有权利 — MICROLABSX：非商业研发项目" },
    "ja": { contact: "お問い合わせ", headline: "開発中です", selector: "言語セレクター", languages: "言語", footer: "無断転載禁止 — MICROLABSX：非商用R&Dプロジェクト" },
    "hi": { contact: "संपर्क", headline: "विकास जारी है", selector: "भाषा चयन", languages: "भाषाएँ", footer: "सर्वाधिकार सुरक्षित — MICROLABSX: गैर-व्यावसायिक अनुसंधान एवं विकास परियोजनाएँ" },
    "ar": { contact: "تواصل", headline: "قيد التطوير", selector: "محدد اللغة", languages: "اللغات", footer: "جميع الحقوق محفوظة — MICROLABSX: مشاريع بحث وتطوير غير تجارية" },
    "he": { contact: "צור קשר", headline: "בפיתוח", selector: "בחירת שפה", languages: "שפות", footer: "כל הזכויות שמורות — MICROLABSX: פרויקטי מו״פ לא-מסחריים" },
    "ru": { contact: "Контакты", headline: "МЫ РАЗРАБАТЫВАЕМ", selector: "Выбор языка", languages: "Языки", footer: "ВСЕ ПРАВА ЗАЩИЩЕНЫ — MICROLABSX: НЕКОММЕРЧЕСКИЕ НИОКР-ПРОЕКТЫ" },
    "fr": { contact: "Contact", headline: "NOUS DÉVELOPPONS", selector: "Sélecteur de langue", languages: "Langues", footer: "TOUS DROITS RÉSERVÉS — MICROLABSX : PROJETS DE R&D NON COMMERCIAUX" },
    "de": { contact: "Kontakt", headline: "WIR ENTWICKELN", selector: "Sprachauswahl", languages: "Sprachen", footer: "ALLE RECHTE VORBEHALTEN — MICROLABSX: NICHTKOMMERZIELLE F&E-PROJEKTE" },
    "it": { contact: "Contatti", headline: "STIAMO SVILUPPANDO", selector: "Selettore lingua", languages: "Lingue", footer: "TUTTI I DIRITTI RISERVATI — MICROLABSX: PROGETTI R&S NON COMMERCIALI" },
    "pt": { contact: "Contacto", headline: "ESTAMOS A DESENVOLVER", selector: "Seletor de idioma", languages: "Idiomas", footer: "TODOS OS DIREITOS RESERVADOS — MICROLABSX: PROJETOS DE I&D NÃO COMERCIAIS" },
    "ko": { contact: "문의", headline: "개발 중입니다", selector: "언어 선택", languages: "언어", footer: "모든 권리 보유 — MICROLABSX: 비상업적 R&D 프로젝트" },
    "id": { contact: "Kontak", headline: "SEDANG DIKEMBANGKAN", selector: "Pemilih bahasa", languages: "Bahasa", footer: "HAK CIPTA DILINDUNGI — MICROLABSX: PROYEK R&D NONKOMERSIAL" },
    "nl": { contact: "Contact", headline: "IN ONTWIKKELING", selector: "Taalselector", languages: "Talen", footer: "ALLE RECHTEN VOORBEHOUDEN — MICROLABSX: NIET-COMMERCIËLE R&D-PROJECTEN" },
    "th": { contact: "ติดต่อ", headline: "กำลังพัฒนา", selector: "ตัวเลือกภาษา", languages: "ภาษา", footer: "สงวนลิขสิทธิ์ — MICROLABSX: โครงการวิจัยและพัฒนาที่ไม่ใช่เชิงพาณิชย์" },
    "vi": { contact: "Liên hệ", headline: "ĐANG PHÁT TRIỂN", selector: "Bộ chọn ngôn ngữ", languages: "Ngôn ngữ", footer: "BẢO LƯU MỌI QUYỀN — MICROLABSX: DỰ ÁN R&D PHI THƯƠNG MẠI" }
  };

  const LANG_FALLBACK = { gl: "es", ast: "es", an: "es", oc: "ca" };
  const COUNTRY_LANG = {
    ES:"es", MX:"es", AR:"es", CO:"es", PE:"es", CL:"es", VE:"es", EC:"es",
    GT:"es", CU:"es", BO:"es", DO:"es", HN:"es", PY:"es", SV:"es", NI:"es",
    CR:"es", PA:"es", UY:"es", GQ:"es",
    FR:"fr", MC:"fr", SN:"fr", CI:"fr", ML:"fr", BF:"fr", NE:"fr", CD:"fr",
    DE:"de", AT:"de", CH:"de", IT:"it", SM:"it", PT:"pt", BR:"pt",
    NL:"nl", BE:"nl", KR:"ko", ID:"id", TH:"th", VN:"vi",
    CN:"zh", TW:"zh", HK:"zh", MO:"zh", SG:"zh", IN:"hi", JP:"ja",
    RU:"ru", BY:"ru", KZ:"ru", KG:"ru", IL:"he",
    SA:"ar", AE:"ar", EG:"ar", MA:"ar", DZ:"ar", TN:"ar", QA:"ar", KW:"ar",
    BH:"ar", OM:"ar", JO:"ar", LB:"ar", IQ:"ar", LY:"ar", SD:"ar", YE:"ar",
    SY:"ar", PS:"ar", MR:"ar", US:"en", GB:"en", AU:"en", NZ:"en", IE:"en"
  };
  const TZ_COUNTRY = {
    "europe/madrid":"ES", "atlantic/canary":"ES", "africa/ceuta":"ES",
    "europe/paris":"FR", "europe/monaco":"FR", "europe/berlin":"DE",
    "europe/vienna":"AT", "europe/zurich":"CH", "europe/rome":"IT",
    "europe/lisbon":"PT", "america/sao_paulo":"BR", "europe/amsterdam":"NL",
    "europe/brussels":"BE", "asia/seoul":"KR", "asia/jakarta":"ID",
    "asia/makassar":"ID", "asia/bangkok":"TH", "asia/ho_chi_minh":"VN",
    "europe/moscow":"RU", "europe/minsk":"BY", "asia/almaty":"KZ",
    "asia/shanghai":"CN", "asia/taipei":"TW", "asia/hong_kong":"HK",
    "asia/macau":"MO", "asia/singapore":"SG", "asia/kolkata":"IN",
    "asia/calcutta":"IN", "asia/tokyo":"JP", "africa/casablanca":"MA",
    "africa/algiers":"DZ", "africa/tunis":"TN", "africa/cairo":"EG",
    "asia/riyadh":"SA", "asia/dubai":"AE", "asia/qatar":"QA",
    "asia/kuwait":"KW", "asia/baghdad":"IQ", "asia/beirut":"LB",
    "asia/amman":"JO", "asia/jerusalem":"IL", "america/mexico_city":"MX",
    "america/argentina/buenos_aires":"AR", "america/bogota":"CO",
    "america/lima":"PE", "america/santiago":"CL", "america/caracas":"VE",
    "america/guayaquil":"EC", "america/havana":"CU", "america/montevideo":"UY",
    "america/panama":"PA", "europe/london":"GB", "europe/dublin":"IE",
    "america/new_york":"US", "america/chicago":"US", "america/denver":"US",
    "america/los_angeles":"US", "australia/sydney":"AU", "pacific/auckland":"NZ"
  };

  function normalizeLang(raw) {
    if (!raw) return null;
    const tag = String(raw).toLowerCase();
    if (I18N[tag]) return tag;
    const base = tag.split("-")[0];
    if (I18N[base]) return base;
    return LANG_FALLBACK[base] && I18N[LANG_FALLBACK[base]] ? LANG_FALLBACK[base] : null;
  }

  function detectCountry() {
    const prefs = Array.isArray(navigator.languages) && navigator.languages.length
      ? navigator.languages
      : [navigator.language || navigator.userLanguage || ""];
    for (const raw of prefs) {
      const parts = String(raw || "").split("-");
      for (const part of parts.slice(1)) {
        if (/^[A-Za-z]{2}$/.test(part)) return part.toUpperCase();
      }
    }
    try {
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
      if (tz) return TZ_COUNTRY[String(tz).toLowerCase()] || null;
    } catch {}
    return null;
  }

  function detectBrowserLang() {
    const prefs = Array.isArray(navigator.languages) && navigator.languages.length
      ? navigator.languages
      : [navigator.language || navigator.userLanguage || DEFAULT_LANG];

    for (const raw of prefs) {
      const resolved = normalizeLang(raw);
      if (resolved) return resolved;
    }

    const country = detectCountry();
    const byCountry = country ? COUNTRY_LANG[country] : null;
    return byCountry && I18N[byCountry] ? byCountry : DEFAULT_LANG;
  }

  function selectedLang() {
    try {
      const saved = normalizeLang(localStorage.getItem(STORAGE_KEY));
      if (saved) return saved;
    } catch {}
    return detectBrowserLang();
  }

  function applyLang(lang) {
    const code = I18N[lang] ? lang : DEFAULT_LANG;
    const dict = I18N[code];

    try { localStorage.setItem(STORAGE_KEY, code); } catch {}

    document.documentElement.lang = code;
    document.documentElement.dir = RTL_LANGS.has(code) ? "rtl" : "ltr";

    buttons.forEach((btn) => {
      const active = btn.dataset.lang === code;
      btn.hidden = false;
      btn.classList.toggle("is-active", active);
      if (active) btn.setAttribute("aria-current", "true");
      else btn.removeAttribute("aria-current");
    });

    if (contactLink) contactLink.textContent = dict.contact;
    if (trigger) trigger.setAttribute("aria-label", dict.selector);
    railEl.setAttribute("aria-label", dict.languages);

    if (headlineText) {
      headlineText.textContent = dict.headline;
      headlineText.setAttribute("data-text", dict.headline);
      document.getElementById("app")?.setAttribute("aria-label", `MICROLABSX ${dict.headline}`);
    }

    if (footerRights) {
      footerRights.textContent = dict.footer;
    }

    railEl.scrollLeft = 0;
    document.documentElement.classList.add("mx-i18n-ready");
  }

  buttons.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      applyLang(btn.dataset.lang || DEFAULT_LANG);
      btn.blur();
    });
  });

  applyLang(selectedLang());

  console.assert(normalizeLang("es-ES") === "es", "es-ES resolves to es");
  console.assert(normalizeLang("ja-JP") === "ja", "ja-JP resolves to ja");
  console.assert(normalizeLang("he-IL") === "he", "he-IL resolves to he");
  console.assert(normalizeLang("pt-BR") === "pt", "pt-BR resolves to pt");
})();

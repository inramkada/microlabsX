(function(){
  "use strict";

  const LABS_COPY = {
    en: {
      subtitle: "MICROSTUDIOX TECHNOLOGY PREVIEW",
      welcome: "Hello. I'm GARFIX · LABS, a demonstration of MICROSTUDIOX conversational technology. For now I do not provide or expose MICROLABSX project data. You can talk with me about whatever you need to test the technology.",
      footnote: "TECHNOLOGY PREVIEW · NO MICROLABSX DATA ACCESS"
    },
    es: {
      subtitle: "DEMOSTRACIÓN TECNOLÓGICA DE MICROSTUDIOX",
      welcome: "Hola. Soy GARFIX · LABS, una demostración de la tecnología conversacional de MICROSTUDIOX. Por el momento no proporciono ni expongo datos de MICROLABSX. Puedes hablar conmigo de lo que necesites para probar la tecnología.",
      footnote: "DEMOSTRACIÓN TECNOLÓGICA · SIN ACCESO A DATOS DE MICROLABSX"
    },
    ca: {
      subtitle: "DEMOSTRACIÓ TECNOLÒGICA DE MICROSTUDIOX",
      welcome: "Hola. Soc GARFIX · LABS, una demostració de la tecnologia conversacional de MICROSTUDIOX. De moment no proporciono ni exposo dades de MICROLABSX. Pots parlar amb mi del que necessitis per provar la tecnologia.",
      footnote: "DEMOSTRACIÓ TECNOLÒGICA · SENSE ACCÉS A DADES DE MICROLABSX"
    },
    fr: {
      subtitle: "DÉMONSTRATION TECHNOLOGIQUE MICROSTUDIOX",
      welcome: "Bonjour. Je suis GARFIX · LABS, une démonstration de la technologie conversationnelle de MICROSTUDIOX. Pour le moment, je ne fournis ni n'expose de données de MICROLABSX. Vous pouvez discuter avec moi de ce dont vous avez besoin pour tester la technologie.",
      footnote: "DÉMONSTRATION TECHNOLOGIQUE · AUCUN ACCÈS AUX DONNÉES MICROLABSX"
    },
    ar: {
      subtitle: "عرض تقني من MICROSTUDIOX",
      welcome: "مرحبًا. أنا GARFIX · LABS، عرض لتقنية المحادثة من MICROSTUDIOX. في الوقت الحالي لا أقدّم ولا أكشف بيانات MICROLABSX. يمكنك التحدث معي حول ما تحتاجه لاختبار التقنية.",
      footnote: "عرض تقني · لا وصول إلى بيانات MICROLABSX"
    },
    zh: {
      subtitle: "MICROSTUDIOX 对话技术演示",
      welcome: "你好。我是 GARFIX · LABS，是 MICROSTUDIOX 对话技术的演示。目前我不会提供或公开 MICROLABSX 项目数据。你可以和我讨论任何需要的话题，以测试这项技术。",
      footnote: "技术演示 · 不访问 MICROLABSX 数据"
    },
    hi: {
      subtitle: "MICROSTUDIOX तकनीकी प्रदर्शन",
      welcome: "नमस्ते। मैं GARFIX · LABS हूँ, MICROSTUDIOX की संवाद तकनीक का प्रदर्शन। फिलहाल मैं MICROLABSX परियोजना का डेटा प्रदान या उजागर नहीं करता। तकनीक को परखने के लिए आप मुझसे अपनी ज़रूरत के किसी भी विषय पर बात कर सकते हैं।",
      footnote: "तकनीकी प्रदर्शन · MICROLABSX डेटा तक पहुँच नहीं"
    },
    ja: {
      subtitle: "MICROSTUDIOX 会話技術デモ",
      welcome: "こんにちは。GARFIX · LABSです。MICROSTUDIOXの会話技術を体験するためのデモです。現時点ではMICROLABSXのプロジェクトデータを提供・公開しません。技術を試すため、必要なことについて自由に会話できます。",
      footnote: "技術デモ · MICROLABSXデータへのアクセスなし"
    },
    ru: {
      subtitle: "ДЕМОНСТРАЦИЯ ТЕХНОЛОГИИ MICROSTUDIOX",
      welcome: "Здравствуйте. Я GARFIX · LABS — демонстрация разговорной технологии MICROSTUDIOX. На данный момент я не предоставляю и не раскрываю данные проекта MICROLABSX. Вы можете говорить со мной на нужные вам темы, чтобы протестировать технологию.",
      footnote: "ДЕМОНСТРАЦИЯ ТЕХНОЛОГИИ · БЕЗ ДОСТУПА К ДАННЫМ MICROLABSX"
    },
    eu: {
      subtitle: "MICROSTUDIOX TEKNOLOGIA-DEMOA",
      welcome: "Kaixo. GARFIX · LABS naiz, MICROSTUDIOXen elkarrizketa-teknologiaren erakustaldia. Oraingoz ez dut MICROLABSX proiektuaren daturik ematen edo azaltzen. Teknologia probatzeko behar duzun edozein gairi buruz hitz egin dezakezu nirekin.",
      footnote: "TEKNOLOGIA-DEMOA · MICROLABSX DATUETARA SARBIDERIK EZ"
    }
  };

  function applyLabsTranslations(){
    const i18n = window.__mxGarfixI18N;
    if (!i18n) return;

    for (const [lang, copy] of Object.entries(LABS_COPY)) {
      if (!i18n[lang]) continue;
      Object.assign(i18n[lang], copy);
    }
  }

  function applyLabsIdentity(){
    applyLabsTranslations();

    const root = document.getElementById("mx-garfix");
    if (!root) return false;

    root.dataset.site = "microlabsx";
    root.dataset.mode = "technology-preview";

    const name = root.querySelector(".mx-garfix-name strong");
    if (name) name.textContent = "GARFIX · LABS";

    const lang = (
      document.documentElement.lang ||
      "en"
    ).toLowerCase().split("-")[0];

    const copy = LABS_COPY[lang] || LABS_COPY.en;

    const subtitle = document.getElementById("mx-garfix-subtitle");
    if (subtitle) subtitle.textContent = copy.subtitle;

    const footnote = document.getElementById("mx-garfix-footnote");
    if (footnote) footnote.textContent = copy.footnote;

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

  applyLabsTranslations();

  if (!applyLabsIdentity()) {
    const observer = new MutationObserver(() => {
      if (applyLabsIdentity()) observer.disconnect();
    });

    observer.observe(
      document.documentElement,
      {
        childList:true,
        subtree:true
      }
    );

    window.setTimeout(
      () => observer.disconnect(),
      10000
    );
  }

  window.__MICROLABSX_CONTEXT = Object.freeze({
    site: "microlabsx.com",
    vertical: "microlabsx",
    operator: "MICRORETAILX LLC",
    technologyProvider: "MICROSTUDIOX",
    mode: "technology-preview",
    projectType: "non-commercial R&D",
    assistant: "GARFIX · LABS",
    internalDataAccess: false,
    internalDataDisclosure: false,
    purpose: "Evaluate MICROSTUDIOX conversational technology through open conversation.",
    publicNotice: "GARFIX · LABS does not currently provide or expose MICROLABSX project data. It may converse about general topics requested by the visitor to demonstrate and evaluate the technology."
  });
})();
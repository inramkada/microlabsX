(function () {
  "use strict";

  const departments = {
    general: {
      id: "general",
      copy: {
        en: { label: "GENERAL", description: "General questions and orientation." },
        es: { label: "GENERAL", description: "Consultas generales y orientación." },
        ar: { label: "عام", description: "أسئلة عامة وتوجيه داخل MICRORETAILX." },
        ca: { label: "GENERAL", description: "Consultes generals i orientació." },
        eu: { label: "OROKORRA", description: "Galdera orokorrak eta orientazioa." },
        zh: { label: "综合", description: "一般问题与指引。" },
        hi: { label: "सामान्य", description: "सामान्य प्रश्न और मार्गदर्शन।" },
        ru: { label: "ОБЩЕЕ", description: "Общие вопросы и навигация." },
        fr: { label: "GÉNÉRAL", description: "Questions générales et orientation." },
        ja: { label: "一般", description: "一般的な質問やご案内。" }
      },
      starters: {
        en: [
          "What is MICRORETAILX?",
          "What can MICROLABSX AI help me with?",
          "How can I contact the company?"
        ],
        es: [
          "¿Qué es MICRORETAILX?",
          "¿En qué puede ayudarme MICROLABSX AI?",
          "¿Cómo puedo contactar con la empresa?"
        ],
        ar: [
          "ما هي MICRORETAILX؟",
          "كيف يمكن لـ MICROLABSX AI مساعدتي؟",
          "كيف يمكنني التواصل مع الشركة؟"
        ],
        ca: [
          "Què és MICRORETAILX?",
          "En què em pot ajudar MICROLABSX AI?",
          "Com puc contactar amb l'empresa?"
        ],
        eu: [
          "Zer da MICRORETAILX?",
          "Zertan lagun diezadake MICROLABSX AIek?",
          "Nola jar naiteke harremanetan enpresarekin?"
        ],
        zh: [
          "MICRORETAILX 是什么？",
          "MICROLABSX AI 能帮我做什么？",
          "如何联系公司？"
        ],
        hi: [
          "MICRORETAILX क्या है?",
          "MICROLABSX AI मेरी किस तरह मदद कर सकता है?",
          "मैं कंपनी से कैसे संपर्क कर सकता हूँ?"
        ],
        ru: [
          "Что такое MICRORETAILX?",
          "Чем мне может помочь MICROLABSX AI?",
          "Как связаться с компанией?"
        ],
        fr: [
          "Qu’est-ce que MICRORETAILX ?",
          "Comment MICROLABSX AI peut-il m’aider ?",
          "Comment contacter l’entreprise ?"
        ],
        ja: [
          "MICRORETAILXとは何ですか？",
          "MICROLABSX AIはどのようなことを手伝えますか？",
          "会社にはどう連絡できますか？"
        ]
      }
    },
    business: {
      id: "business",
      copy: {
        en: { label: "BUSINESS", description: "Business, partnerships and commercial enquiries." },
        es: { label: "NEGOCIO", description: "Negocio, colaboraciones y consultas comerciales." },
        ar: { label: "الأعمال", description: "الأعمال والشراكات والاستفسارات التجارية." },
        ca: { label: "NEGOCI", description: "Negoci, col·laboracions i consultes comercials." },
        eu: { label: "NEGOZIOA", description: "Negozioak, lankidetzak eta merkataritza-kontsultak." },
        zh: { label: "商务", description: "业务、合作与商业咨询。" },
        hi: { label: "व्यवसाय", description: "व्यवसाय, साझेदारी और वाणिज्यिक पूछताछ।" },
        ru: { label: "БИЗНЕС", description: "Бизнес, партнёрства и коммерческие запросы." },
        fr: { label: "ACTIVITÉ", description: "Activité, partenariats et demandes commerciales." },
        ja: { label: "ビジネス", description: "事業、提携、商談に関するお問い合わせ。" }
      },
      starters: {
        en: [
          "I want to discuss a partnership.",
          "What business areas is MICRORETAILX developing?",
          "Who should I contact for a commercial proposal?"
        ],
        es: [
          "Quiero hablar de una colaboración.",
          "¿Qué áreas de negocio está desarrollando MICRORETAILX?",
          "¿Con quién contacto para una propuesta comercial?"
        ],
        ar: [
          "أريد مناقشة شراكة.",
          "ما مجالات الأعمال التي تطورها MICRORETAILX؟",
          "مع من أتواصل بشأن عرض تجاري؟"
        ],
        ca: [
          "Vull parlar d'una col·laboració.",
          "Quines àrees de negoci està desenvolupant MICRORETAILX?",
          "Amb qui he de contactar per a una proposta comercial?"
        ],
        eu: [
          "Lankidetza bati buruz hitz egin nahi dut.",
          "Zer negozio-arlo garatzen ari da MICRORETAILX?",
          "Norekin jarri behar dut harremanetan merkataritza-proposamen baterako?"
        ],
        zh: [
          "我想讨论合作。",
          "MICRORETAILX 正在开发哪些业务领域？",
          "商业提案应该联系谁？"
        ],
        hi: [
          "मैं साझेदारी पर चर्चा करना चाहता हूँ।",
          "MICRORETAILX किन व्यावसायिक क्षेत्रों को विकसित कर रहा है?",
          "वाणिज्यिक प्रस्ताव के लिए मुझे किससे संपर्क करना चाहिए?"
        ],
        ru: [
          "Я хочу обсудить партнёрство.",
          "Какие направления бизнеса развивает MICRORETAILX?",
          "С кем связаться по коммерческому предложению?"
        ],
        fr: [
          "Je souhaite discuter d’un partenariat.",
          "Quels domaines d’activité MICRORETAILX développe-t-elle ?",
          "Qui contacter pour une proposition commerciale ?"
        ],
        ja: [
          "提携について相談したいです。",
          "MICRORETAILXはどの事業領域を開発していますか？",
          "商業提案は誰に連絡すればよいですか？"
        ]
      }
    },
    suppliers: {
      id: "suppliers",
      copy: {
        en: { label: "SUPPLIERS", description: "Suppliers, sourcing and procurement enquiries." },
        es: { label: "PROVEEDORES", description: "Proveedores, sourcing y consultas de compras." },
        ar: { label: "الموردون", description: "الموردون والتوريد والمشتريات." },
        ca: { label: "PROVEÏDORS", description: "Proveïdors, aprovisionament i consultes de compres." },
        eu: { label: "HORNITZAILEAK", description: "Hornitzaileak, hornikuntza eta erosketa-kontsultak." },
        zh: { label: "供应商", description: "供应商、采购与寻源咨询。" },
        hi: { label: "आपूर्तिकर्ता", description: "आपूर्तिकर्ता, सोर्सिंग और खरीद संबंधी पूछताछ।" },
        ru: { label: "ПОСТАВЩИКИ", description: "Поставщики, закупки и снабжение." },
        fr: { label: "FOURNISSEURS", description: "Fournisseurs, sourcing et achats." },
        ja: { label: "サプライヤー", description: "サプライヤー、調達、購買に関するお問い合わせ。" }
      },
      starters: {
        en: [
          "I want to become a supplier.",
          "What information should a supplier provide?",
          "How does the supplier contact process work?"
        ],
        es: [
          "Quiero ser proveedor.",
          "¿Qué información debe aportar un proveedor?",
          "¿Cómo funciona el proceso de contacto con proveedores?"
        ],
        ar: [
          "أريد أن أصبح مورداً.",
          "ما المعلومات التي يجب أن يقدمها المورد؟",
          "كيف تعمل عملية التواصل مع الموردين؟"
        ],
        ca: [
          "Vull ser proveïdor.",
          "Quina informació ha d'aportar un proveïdor?",
          "Com funciona el procés de contacte amb proveïdors?"
        ],
        eu: [
          "Hornitzaile izan nahi dut.",
          "Zer informazio eman behar du hornitzaile batek?",
          "Nola funtzionatzen du hornitzaileekin harremanetan jartzeko prozesuak?"
        ],
        zh: [
          "我想成为供应商。",
          "供应商需要提供哪些信息？",
          "供应商联系流程是怎样的？"
        ],
        hi: [
          "मैं आपूर्तिकर्ता बनना चाहता हूँ।",
          "आपूर्तिकर्ता को कौन-सी जानकारी देनी चाहिए?",
          "आपूर्तिकर्ता संपर्क प्रक्रिया कैसे काम करती है?"
        ],
        ru: [
          "Я хочу стать поставщиком.",
          "Какую информацию должен предоставить поставщик?",
          "Как устроен процесс связи с поставщиками?"
        ],
        fr: [
          "Je souhaite devenir fournisseur.",
          "Quelles informations un fournisseur doit-il fournir ?",
          "Comment fonctionne le processus de prise de contact fournisseur ?"
        ],
        ja: [
          "サプライヤーになりたいです。",
          "サプライヤーはどのような情報を提出する必要がありますか？",
          "サプライヤーの問い合わせ手続きはどのようになっていますか？"
        ]
      }
    },
    technology: {
      id: "technology",
      copy: {
        en: { label: "TECHNOLOGY", description: "AI, software, infrastructure and product technology." },
        es: { label: "TECNOLOGÍA", description: "IA, software, infraestructura y tecnología de producto." },
        ar: { label: "التقنية", description: "الذكاء الاصطناعي والبرمجيات والبنية التحتية وتقنية المنتجات." },
        ca: { label: "TECNOLOGIA", description: "IA, programari, infraestructura i tecnologia de producte." },
        eu: { label: "TEKNOLOGIA", description: "IA, softwarea, azpiegitura eta produktu-teknologia." },
        zh: { label: "技术", description: "AI、软件、基础设施与产品技术。" },
        hi: { label: "प्रौद्योगिकी", description: "AI, सॉफ्टवेयर, अवसंरचना और उत्पाद प्रौद्योगिकी।" },
        ru: { label: "ТЕХНОЛОГИИ", description: "ИИ, ПО, инфраструктура и продуктовые технологии." },
        fr: { label: "TECHNOLOGIE", description: "IA, logiciels, infrastructure et technologie produit." },
        ja: { label: "テクノロジー", description: "AI、ソフトウェア、インフラ、製品技術。" }
      },
      starters: {
        en: [
          "What can MICROLABSX AI do?",
          "Tell me about MICRORETAILX technology.",
          "What AI systems are being developed?"
        ],
        es: [
          "¿Qué puede hacer MICROLABSX AI?",
          "Háblame de la tecnología de MICRORETAILX.",
          "¿Qué sistemas de IA se están desarrollando?"
        ],
        ar: [
          "ماذا يستطيع MICROLABSX AI أن يفعل؟",
          "حدثني عن تقنية MICRORETAILX.",
          "ما أنظمة الذكاء الاصطناعي التي يجري تطويرها؟"
        ],
        ca: [
          "Què pot fer MICROLABSX AI?",
          "Parla'm de la tecnologia de MICRORETAILX.",
          "Quins sistemes d'IA s'estan desenvolupant?"
        ],
        eu: [
          "Zer egin dezake MICROLABSX AIek?",
          "Azaldu MICRORETAILXen teknologia.",
          "Zer IA sistema ari dira garatzen?"
        ],
        zh: [
          "MICROLABSX AI 能做什么？",
          "介绍一下 MICRORETAILX 的技术。",
          "正在开发哪些 AI 系统？"
        ],
        hi: [
          "MICROLABSX AI क्या कर सकता है?",
          "MICRORETAILX की तकनीक के बारे में बताइए।",
          "कौन-से AI सिस्टम विकसित किए जा रहे हैं?"
        ],
        ru: [
          "Что умеет MICROLABSX AI?",
          "Расскажите о технологиях MICRORETAILX.",
          "Какие системы ИИ разрабатываются?"
        ],
        fr: [
          "Que peut faire MICROLABSX AI ?",
          "Parlez-moi de la technologie de MICRORETAILX.",
          "Quels systèmes d’IA sont en cours de développement ?"
        ],
        ja: [
          "MICROLABSX AIは何ができますか？",
          "MICRORETAILXの技術について教えてください。",
          "どのようなAIシステムを開発していますか？"
        ]
      }
    },
    company: {
      id: "company",
      copy: {
        en: { label: "COMPANY", description: "Company, policies, privacy and institutional information." },
        es: { label: "EMPRESA", description: "Empresa, políticas, privacidad e información institucional." },
        ar: { label: "الشركة", description: "معلومات الشركة والسياسات والخصوصية والمعلومات المؤسسية." },
        ca: { label: "EMPRESA", description: "Empresa, polítiques, privacitat i informació institucional." },
        eu: { label: "ENPRESA", description: "Enpresa, politikak, pribatutasuna eta informazio instituzionala." },
        zh: { label: "公司", description: "公司、政策、隐私与机构信息。" },
        hi: { label: "कंपनी", description: "कंपनी, नीतियाँ, गोपनीयता और संस्थागत जानकारी।" },
        ru: { label: "КОМПАНИЯ", description: "Компания, политики, конфиденциальность и институциональная информация." },
        fr: { label: "ENTREPRISE", description: "Entreprise, politiques, confidentialité et informations institutionnelles." },
        ja: { label: "会社情報", description: "会社、ポリシー、プライバシー、組織情報。" }
      },
      starters: {
        en: [
          "Tell me about the company.",
          "Where can I read the privacy policy?",
          "Where can I find legal information?"
        ],
        es: [
          "Háblame de la empresa.",
          "¿Dónde puedo leer la política de privacidad?",
          "¿Dónde encuentro la información legal?"
        ],
        ar: [
          "حدثني عن الشركة.",
          "أين يمكنني قراءة سياسة الخصوصية؟",
          "أين أجد المعلومات القانونية؟"
        ],
        ca: [
          "Parla'm de l'empresa.",
          "On puc llegir la política de privacitat?",
          "On puc trobar la informació legal?"
        ],
        eu: [
          "Azaldu enpresari buruz.",
          "Non irakur dezaket pribatutasun-politika?",
          "Non aurki dezaket lege-informazioa?"
        ],
        zh: [
          "介绍一下公司。",
          "在哪里可以阅读隐私政策？",
          "在哪里可以找到法律信息？"
        ],
        hi: [
          "कंपनी के बारे में बताइए।",
          "मैं गोपनीयता नीति कहाँ पढ़ सकता हूँ?",
          "कानूनी जानकारी कहाँ मिल सकती है?"
        ],
        ru: [
          "Расскажите о компании.",
          "Где прочитать политику конфиденциальности?",
          "Где найти юридическую информацию?"
        ],
        fr: [
          "Parlez-moi de l’entreprise.",
          "Où puis-je lire la politique de confidentialité ?",
          "Où puis-je trouver les informations juridiques ?"
        ],
        ja: [
          "会社について教えてください。",
          "プライバシーポリシーはどこで読めますか？",
          "法的情報はどこにありますか？"
        ]
      }
    }
  };

  function language() {
    const raw = String(document.documentElement.lang || "en")
      .toLowerCase()
      .split("-")[0];

    return ["en", "es", "ca", "eu", "zh", "hi", "ar", "ru", "fr", "ja"].includes(raw) ? raw : "en";
  }

  function raw(id) {
    return departments[id] || departments.general;
  }

  function get(id) {
    const item = raw(id);
    const lang = language();
    const text = item.copy[lang] || item.copy.en;

    return {
      id: item.id,
      label: text.label,
      description: text.description
    };
  }

  function starters(id) {
    const item = raw(id);
    const lang = language();
    return item.starters[lang] || item.starters.en;
  }

  window.__mxMICROLABSX AIDepartments = {
    list: () => Object.keys(departments).map(get),
    get,
    starters
  };
})();

(function () {
  "use strict";

  const POLICY_VERSION = "2026-09-01";
  const DISPLAY_DATE = "01-09-2026";

  /*
   * Section 17 is part of the Privacy Policy itself, not an independent
   * after-render notice. Every supported language carries the same substantive
   * clauses. The English version remains controlling where the policy says so.
   */
  const COPY = {
    en: `17. GLOBAL PRIVACY, GARFIX AI AND OPTIONAL CONVERSATION MEMORY

Policy update and effective date: 01-09-2026

This Section 17 forms part of the MICRORETAILX Privacy Policy and clarifies the privacy rules applicable to GARFIX AI and to visitors in jurisdictions with mandatory privacy legislation.

CORPORATE AND GOVERNING-LAW FRAMEWORK. MICRORETAILX LLC is organized under the laws of the State of Delaware, United States. To the maximum extent permitted by law, Delaware law governs the contractual interpretation of this Privacy Policy. This choice of law does not waive, restrict or replace any mandatory privacy, consumer-protection or data-subject rights that apply to an individual under the law of their jurisdiction.

GARFIX AI. The “Zero Data” statements in the main Policy describe passive browsing of the informational Website. GARFIX is an optional interactive service and must process the message, relevant conversation context and any content deliberately submitted by the visitor in order to generate a response. Such information may be processed through MICRORETAILX infrastructure and the AI inference providers required to answer the request.

OPTIONAL CONVERSATION MEMORY. Conversation Memory is disabled by default and requires an affirmative opt-in. When enabled, MICRORETAILX may retain chat text, session identifier, department, language, response metadata and limited operational information for up to 30 days for conversational continuity, security, debugging and service improvement. Disabling Conversation Memory stops new persistent memory storage; retained conversations remain subject to the stated retention period and applicable deletion rights.

DATA MINIMIZATION. Uploaded image bytes are not retained in the GARFIX conversation-memory database, although images may be processed transiently by infrastructure and AI inference providers to answer the specific request. The GARFIX memory store does not intentionally retain raw IP addresses or browser fingerprints.

REGIONAL PRIVACY FRAMEWORKS. Where applicable, processing is designed to account for the EU General Data Protection Regulation (GDPR) and applicable ePrivacy rules; the UK GDPR and Data Protection Act 2018; the Delaware Personal Data Privacy Act; the California Consumer Privacy Act as amended by the CPRA; and other mandatory privacy laws that may apply, including relevant laws in Switzerland, Brazil, Canada, Australia, Japan and Singapore. References to these frameworks do not mean that every statute applies to every visitor or activity; applicability depends on the relevant legal thresholds, territorial scope and exemptions.

LEGAL BASES AND CONSENT. Where EEA, UK or equivalent law applies, processing will rely on an appropriate lawful basis according to the purpose and context. Optional Conversation Memory is based on the user's affirmative choice where consent is the applicable basis. Consent may be withdrawn by switching Memory off, without affecting processing that was lawful before withdrawal.

NO SALE OR TARGETED ADVERTISING. MICRORETAILX does not sell GARFIX conversation data, does not rent it to data brokers and does not use Conversation Memory for cross-context behavioural advertising or targeted advertising.

INTERNATIONAL TRANSFERS. Where personal data is transferred internationally and transfer safeguards are legally required, MICRORETAILX will rely on an available lawful mechanism appropriate to the transfer, which may include adequacy decisions, Standard Contractual Clauses, the UK International Data Transfer Addendum or another legally recognized safeguard.

PRIVACY RIGHTS. Depending on applicable law, individuals may have rights of access, deletion, correction, portability, restriction, objection, withdrawal of consent, opt-out and/or appeal. Requests may be submitted to legal@microretailx.com. Identity or authority may be verified where reasonably necessary and permitted by law.

AUTOMATED DECISIONS AND CHILDREN. Conversation Memory is not intended to make solely automated decisions producing legal or similarly significant effects about visitors. GARFIX is not directed to children, and MICRORETAILX does not knowingly use Conversation Memory to build profiles of children.

MANDATORY LAW PREVAILS. If any provision of this Policy conflicts with a non-waivable privacy or consumer right applicable to a visitor, the mandatory rule prevails to the extent of that conflict. The English version remains the controlling version to the extent permitted by applicable law; translations are provided for convenience.`,

    es: `17. PRIVACIDAD GLOBAL, GARFIX AI Y MEMORIA DE CONVERSACIÓN OPCIONAL

Actualización y entrada en vigor: 01-09-2026

Esta Sección 17 forma parte de la Política de privacidad de MICRORETAILX y aclara las reglas aplicables a GARFIX AI y a visitantes sujetos a normativa obligatoria de privacidad.

MARCO CORPORATIVO Y LEY APLICABLE. MICRORETAILX LLC está organizada bajo las leyes del Estado de Delaware, Estados Unidos. En la máxima medida permitida, la ley de Delaware rige la interpretación contractual de esta Política. Esta elección no elimina, limita ni sustituye derechos obligatorios de privacidad, consumo o protección de datos que correspondan al usuario por la ley de su jurisdicción.

GARFIX AI. Las referencias a “Zero Data” de la Política principal describen la navegación pasiva del sitio informativo. GARFIX es un servicio interactivo opcional y necesita tratar el mensaje, el contexto relevante de la conversación y el contenido enviado voluntariamente para generar una respuesta. Esta información puede ser procesada por la infraestructura de MICRORETAILX y por los proveedores de inferencia de IA necesarios para responder.

MEMORIA DE CONVERSACIÓN OPCIONAL. Está desactivada por defecto y exige una activación afirmativa. Si se activa, MICRORETAILX puede conservar texto del chat, identificador de sesión, departamento, idioma, metadatos de respuesta e información operativa limitada durante un máximo de 30 días para continuidad conversacional, seguridad, depuración y mejora del servicio. Desactivarla detiene el nuevo almacenamiento persistente; las conversaciones ya conservadas siguen sujetas al plazo indicado y a los derechos de supresión aplicables.

MINIMIZACIÓN DE DATOS. Los bytes de imágenes subidas no se guardan en la base de datos de memoria de GARFIX, aunque las imágenes pueden procesarse transitoriamente por la infraestructura y los proveedores de inferencia de IA para responder a la solicitud concreta. La memoria de GARFIX no conserva intencionadamente direcciones IP en bruto ni huellas del navegador.

MARCOS REGIONALES DE PRIVACIDAD. Cuando resulten aplicables, el tratamiento se diseña teniendo en cuenta el Reglamento General de Protección de Datos de la UE (RGPD) y las reglas ePrivacy aplicables; UK GDPR y Data Protection Act 2018; Delaware Personal Data Privacy Act; California Consumer Privacy Act modificada por CPRA; y otras normas obligatorias de privacidad que puedan resultar aplicables, incluidas las de Suiza, Brasil, Canadá, Australia, Japón y Singapur. La mención de estos marcos no significa que todas las normas sean aplicables a cada visitante o actividad; su aplicación depende de los umbrales legales, ámbito territorial y exenciones pertinentes.

BASES JURÍDICAS Y CONSENTIMIENTO. Cuando sea aplicable el RGPD, UK GDPR o una norma equivalente, se utilizará una base jurídica adecuada según la finalidad y el contexto. La Memoria de conversación opcional se basa en la elección afirmativa del usuario cuando el consentimiento sea la base aplicable. El consentimiento puede retirarse desactivando la Memoria, sin afectar a tratamientos anteriores que fueran lícitos.

SIN VENTA NI PUBLICIDAD DIRIGIDA. MICRORETAILX no vende datos de conversaciones de GARFIX, no los alquila a intermediarios de datos y no utiliza la Memoria para publicidad comportamental entre contextos ni publicidad dirigida.

TRANSFERENCIAS INTERNACIONALES. Cuando una transferencia internacional requiera garantías legales, MICRORETAILX utilizará un mecanismo válido adecuado al caso, que podrá incluir decisiones de adecuación, Cláusulas Contractuales Tipo, el UK International Data Transfer Addendum u otra garantía reconocida legalmente.

DERECHOS DE PRIVACIDAD. Según la ley aplicable, pueden existir derechos de acceso, supresión, rectificación, portabilidad, limitación, oposición, retirada del consentimiento, exclusión voluntaria y/o recurso. Las solicitudes pueden dirigirse a legal@microretailx.com. Podrá verificarse la identidad o representación cuando sea razonablemente necesario y esté permitido.

DECISIONES AUTOMATIZADAS Y MENORES. La Memoria no está destinada a adoptar decisiones exclusivamente automatizadas con efectos jurídicos o de importancia similar sobre visitantes. GARFIX no está dirigido a menores y MICRORETAILX no utiliza conscientemente la Memoria para crear perfiles de menores.

PREVALENCIA DE LA NORMA OBLIGATORIA. Si una cláusula entra en conflicto con un derecho obligatorio e irrenunciable aplicable al visitante, prevalecerá la norma obligatoria en la medida del conflicto. La versión inglesa seguirá siendo la versión de control en la medida permitida por la ley; las traducciones se ofrecen por comodidad.`,

    ca: `17. PRIVACITAT GLOBAL, GARFIX AI I MEMÒRIA DE CONVERSA OPCIONAL

Actualització i entrada en vigor: 01-09-2026

Aquesta Secció 17 forma part de la Política de privacitat de MICRORETAILX i aclareix les normes de privacitat aplicables a GARFIX AI i als visitants en jurisdiccions amb legislació obligatòria de privacitat.

MARC CORPORATIU I LLEI APLICABLE. MICRORETAILX LLC està constituïda d'acord amb les lleis de l'Estat de Delaware, Estats Units. En la màxima mesura permesa per la llei, el dret de Delaware regeix la interpretació contractual d'aquesta Política de privacitat. Aquesta elecció de llei no renuncia, limita ni substitueix cap dret imperatiu de privacitat, protecció del consumidor o protecció de dades que correspongui a una persona segons la legislació de la seva jurisdicció.

GARFIX AI. Les declaracions “Zero Data” de la Política principal descriuen la navegació passiva pel lloc web informatiu. GARFIX és un servei interactiu opcional i ha de processar el missatge, el context rellevant de la conversa i qualsevol contingut enviat deliberadament pel visitant per generar una resposta. Aquesta informació pot ser processada mitjançant la infraestructura de MICRORETAILX i els proveïdors d'inferència d'IA necessaris per respondre a la sol·licitud.

MEMÒRIA DE CONVERSA OPCIONAL. La Memòria de conversa està desactivada per defecte i requereix una activació afirmativa. Quan s'activa, MICRORETAILX pot conservar el text del xat, l'identificador de sessió, el departament, l'idioma, les metadades de resposta i informació operativa limitada durant un màxim de 30 dies per a continuïtat de la conversa, seguretat, depuració i millora del servei. Desactivar la Memòria atura el nou emmagatzematge persistent; les converses conservades continuen subjectes al termini indicat i als drets de supressió aplicables.

MINIMITZACIÓ DE DADES. Els bytes de les imatges pujades no es conserven a la base de dades de memòria de converses de GARFIX, encara que les imatges poden ser processades transitòriament per la infraestructura i els proveïdors d'inferència d'IA per respondre a la sol·licitud concreta. El magatzem de memòria de GARFIX no conserva intencionadament adreces IP en brut ni empremtes del navegador.

MARCS REGIONALS DE PRIVACITAT. Quan siguin aplicables, els tractaments es dissenyen tenint en compte el Reglament General de Protecció de Dades de la UE (RGPD) i les normes ePrivacy aplicables; el UK GDPR i la Data Protection Act 2018; la Delaware Personal Data Privacy Act; la California Consumer Privacy Act modificada per la CPRA; i altres lleis imperatives de privacitat que puguin ser aplicables, incloses les normes pertinents de Suïssa, Brasil, Canadà, Austràlia, Japó i Singapur. La referència a aquests marcs no significa que cada norma sigui aplicable a tots els visitants o activitats; l'aplicabilitat depèn dels llindars legals, l'abast territorial i les exempcions corresponents.

BASES JURÍDIQUES I CONSENTIMENT. Quan siguin aplicables el dret de l'EEE, del Regne Unit o una norma equivalent, el tractament es basarà en una base jurídica adequada segons la finalitat i el context. La Memòria de conversa opcional es basa en l'elecció afirmativa de l'usuari quan el consentiment sigui la base aplicable. El consentiment es pot retirar desactivant la Memòria, sense afectar els tractaments que fossin lícits abans de la retirada.

SENSE VENDA NI PUBLICITAT DIRIGIDA. MICRORETAILX no ven les dades de conversa de GARFIX, no les lloga a intermediaris de dades i no utilitza la Memòria de conversa per a publicitat comportamental entre contextos ni publicitat dirigida.

TRANSFERÈNCIES INTERNACIONALS. Quan les dades personals es transfereixin internacionalment i siguin legalment exigibles garanties de transferència, MICRORETAILX utilitzarà un mecanisme lícit disponible i adequat a la transferència, que pot incloure decisions d'adequació, Clàusules Contractuals Tipus, l'UK International Data Transfer Addendum o una altra garantia legalment reconeguda.

DRETS DE PRIVACITAT. Segons la legislació aplicable, les persones poden tenir drets d'accés, supressió, rectificació, portabilitat, limitació, oposició, retirada del consentiment, exclusió voluntària i/o recurs. Les sol·licituds es poden enviar a legal@microretailx.com. La identitat o l'autoritat de representació es poden verificar quan sigui raonablement necessari i legalment permès.

DECISIONS AUTOMATITZADES I MENORS. La Memòria de conversa no està destinada a adoptar decisions exclusivament automatitzades que produeixin efectes jurídics o de significació similar sobre els visitants. GARFIX no està dirigit a menors i MICRORETAILX no utilitza conscientment la Memòria de conversa per crear perfils de menors.

PREVALENÇA DE LA NORMA IMPERATIVA. Si alguna disposició d'aquesta Política entra en conflicte amb un dret irrenunciable de privacitat o del consumidor aplicable a un visitant, preval la norma imperativa en la mesura del conflicte. La versió anglesa continua sent la versió de control en la mesura permesa per la legislació aplicable; les traduccions es proporcionen per comoditat.`,

    fr: `17. CONFIDENTIALITÉ MONDIALE, GARFIX AI ET MÉMOIRE DE CONVERSATION FACULTATIVE

Mise à jour et entrée en vigueur : 01-09-2026

La présente Section 17 fait partie de la Politique de confidentialité de MICRORETAILX et précise les règles de confidentialité applicables à GARFIX AI ainsi qu'aux visiteurs relevant de juridictions imposant des règles obligatoires en matière de vie privée.

CADRE SOCIÉTAIRE ET DROIT APPLICABLE. MICRORETAILX LLC est constituée selon les lois de l'État du Delaware, États-Unis. Dans toute la mesure permise par la loi, le droit du Delaware régit l'interprétation contractuelle de la présente Politique de confidentialité. Ce choix de loi ne vaut ni renonciation, ni limitation, ni remplacement des droits impératifs en matière de vie privée, de protection des consommateurs ou de protection des données dont une personne bénéficie en vertu du droit de sa juridiction.

GARFIX AI. Les déclarations « Zero Data » de la Politique principale décrivent la consultation passive du site web informatif. GARFIX est un service interactif facultatif qui doit traiter le message, le contexte pertinent de la conversation et tout contenu délibérément soumis par le visiteur afin de générer une réponse. Ces informations peuvent être traitées via l'infrastructure de MICRORETAILX et les fournisseurs d'inférence d'IA nécessaires pour répondre à la demande.

MÉMOIRE DE CONVERSATION FACULTATIVE. La Mémoire de conversation est désactivée par défaut et nécessite une adhésion affirmative. Lorsqu'elle est activée, MICRORETAILX peut conserver le texte du chat, l'identifiant de session, le département, la langue, les métadonnées de réponse et des informations opérationnelles limitées pendant une durée maximale de 30 jours à des fins de continuité conversationnelle, de sécurité, de débogage et d'amélioration du service. La désactivation de la Mémoire de conversation arrête tout nouveau stockage persistant ; les conversations déjà conservées restent soumises à la période de conservation indiquée et aux droits de suppression applicables.

MINIMISATION DES DONNÉES. Les octets des images téléchargées ne sont pas conservés dans la base de données de mémoire de conversation GARFIX, bien que les images puissent être traitées temporairement par l'infrastructure et les fournisseurs d'inférence d'IA afin de répondre à la demande spécifique. Le stockage mémoire de GARFIX ne conserve pas intentionnellement les adresses IP brutes ni les empreintes de navigateur.

CADRES RÉGIONAUX DE PROTECTION DE LA VIE PRIVÉE. Lorsqu'ils sont applicables, les traitements sont conçus pour tenir compte du Règlement général sur la protection des données de l'UE (RGPD) et des règles ePrivacy applicables ; du UK GDPR et du Data Protection Act 2018 ; du Delaware Personal Data Privacy Act ; du California Consumer Privacy Act tel que modifié par le CPRA ; ainsi que d'autres lois impératives sur la vie privée susceptibles de s'appliquer, notamment les règles pertinentes en Suisse, au Brésil, au Canada, en Australie, au Japon et à Singapour. La référence à ces cadres ne signifie pas que chaque texte s'applique à chaque visiteur ou activité ; l'applicabilité dépend des seuils juridiques, du champ territorial et des exemptions pertinents.

BASES JURIDIQUES ET CONSENTEMENT. Lorsque le droit de l'EEE, du Royaume-Uni ou un droit équivalent s'applique, le traitement reposera sur une base juridique appropriée compte tenu de la finalité et du contexte. La Mémoire de conversation facultative repose sur le choix affirmatif de l'utilisateur lorsque le consentement constitue la base applicable. Le consentement peut être retiré en désactivant la Mémoire, sans affecter les traitements licites effectués avant ce retrait.

AUCUNE VENTE NI PUBLICITÉ CIBLÉE. MICRORETAILX ne vend pas les données de conversation de GARFIX, ne les loue pas à des courtiers en données et n'utilise pas la Mémoire de conversation à des fins de publicité comportementale intercontextuelle ou de publicité ciblée.

TRANSFERTS INTERNATIONAUX. Lorsque des données personnelles sont transférées à l'international et que des garanties de transfert sont légalement requises, MICRORETAILX s'appuiera sur un mécanisme licite disponible et adapté au transfert, pouvant notamment comprendre des décisions d'adéquation, des clauses contractuelles types, l'UK International Data Transfer Addendum ou une autre garantie légalement reconnue.

DROITS EN MATIÈRE DE VIE PRIVÉE. Selon le droit applicable, les personnes peuvent disposer de droits d'accès, d'effacement, de rectification, de portabilité, de limitation, d'opposition, de retrait du consentement, d'opt-out et/ou de recours. Les demandes peuvent être adressées à legal@microretailx.com. L'identité ou le pouvoir de représentation peut être vérifié lorsque cela est raisonnablement nécessaire et autorisé par la loi.

DÉCISIONS AUTOMATISÉES ET ENFANTS. La Mémoire de conversation n'est pas destinée à prendre des décisions exclusivement automatisées produisant des effets juridiques ou des effets d'importance similaire à l'égard des visiteurs. GARFIX ne s'adresse pas aux enfants et MICRORETAILX n'utilise pas sciemment la Mémoire de conversation pour établir des profils d'enfants.

PRIMAUTÉ DU DROIT IMPÉRATIF. Si une disposition de la présente Politique entre en conflit avec un droit impératif et non renonçable en matière de vie privée ou de protection du consommateur applicable à un visiteur, la règle impérative prévaut dans la mesure du conflit. La version anglaise demeure la version de contrôle dans la mesure permise par le droit applicable ; les traductions sont fournies à titre de commodité.`,

    ar: `17. الخصوصية العالمية وGARFIX AI وذاكرة المحادثة الاختيارية

تاريخ التحديث والنفاذ: 01-09-2026

يشكل هذا القسم 17 جزءاً من سياسة الخصوصية الخاصة بـ MICRORETAILX ويوضح قواعد الخصوصية المطبقة على GARFIX AI وعلى الزوار في الولايات القضائية التي تفرض تشريعات إلزامية لحماية الخصوصية.

الإطار المؤسسي والقانون الحاكم. تأسست MICRORETAILX LLC وفق قوانين ولاية ديلاوير في الولايات المتحدة. وبالحد الأقصى الذي يسمح به القانون، يحكم قانون ديلاوير التفسير التعاقدي لسياسة الخصوصية هذه. ولا يؤدي هذا الاختيار إلى التنازل عن أي حقوق إلزامية للخصوصية أو حماية المستهلك أو أصحاب البيانات، ولا إلى تقييدها أو استبدالها، متى كانت مقررة للفرد بموجب قانون ولايته القضائية.

GARFIX AI. تصف عبارات “Zero Data” الواردة في السياسة الرئيسية التصفح السلبي للموقع المعلوماتي. أما GARFIX فهو خدمة تفاعلية اختيارية ويحتاج إلى معالجة الرسالة وسياق المحادثة ذي الصلة وأي محتوى يقدمه الزائر عمداً من أجل إنشاء الرد. وقد تتم معالجة هذه المعلومات عبر بنية MICRORETAILX التحتية ومزودي استدلال الذكاء الاصطناعي اللازمين للإجابة عن الطلب.

ذاكرة المحادثة الاختيارية. تكون ذاكرة المحادثة معطلة افتراضياً وتتطلب اشتراكاً إيجابياً وصريحاً. وعند تفعيلها، قد تحتفظ MICRORETAILX بنص المحادثة ومعرف الجلسة والقسم واللغة وبيانات الاستجابة الوصفية ومعلومات تشغيلية محدودة لمدة تصل إلى 30 يوماً لأغراض استمرارية المحادثة والأمان والتصحيح وتحسين الخدمة. ويؤدي تعطيل ذاكرة المحادثة إلى وقف التخزين الدائم الجديد، بينما تظل المحادثات المحفوظة خاضعة لفترة الاحتفاظ المعلنة وحقوق الحذف المطبقة.

تقليل البيانات. لا تُحفظ البايتات الأصلية للصور المرفوعة في قاعدة بيانات ذاكرة محادثات GARFIX، مع إمكانية معالجة الصور مؤقتاً بواسطة البنية التحتية ومزودي استدلال الذكاء الاصطناعي للإجابة عن الطلب المحدد. ولا يحتفظ مخزن ذاكرة GARFIX عمداً بعناوين IP الخام أو بصمات المتصفح.

أطر الخصوصية الإقليمية. حيثما ينطبق ذلك، يُصمم المعالجة مع مراعاة اللائحة العامة لحماية البيانات في الاتحاد الأوروبي (GDPR) وقواعد ePrivacy المطبقة؛ وUK GDPR وقانون Data Protection Act 2018؛ وقانون Delaware Personal Data Privacy Act؛ وقانون California Consumer Privacy Act بصيغته المعدلة بموجب CPRA؛ وغيرها من قوانين الخصوصية الإلزامية التي قد تنطبق، بما في ذلك القوانين ذات الصلة في سويسرا والبرازيل وكندا وأستراليا واليابان وسنغافورة. ولا تعني الإشارة إلى هذه الأطر أن كل قانون ينطبق على كل زائر أو نشاط؛ إذ يعتمد الانطباق على الحدود القانونية والنطاق الإقليمي والاستثناءات ذات الصلة.

الأسس القانونية والموافقة. عندما ينطبق قانون المنطقة الاقتصادية الأوروبية أو المملكة المتحدة أو قانون مماثل، ستعتمد المعالجة على أساس قانوني مناسب وفقاً للغرض والسياق. وتعتمد ذاكرة المحادثة الاختيارية على الاختيار الإيجابي للمستخدم عندما تكون الموافقة هي الأساس القانوني المطبق. ويمكن سحب الموافقة بإيقاف الذاكرة دون التأثير في المعالجة التي كانت مشروعة قبل السحب.

عدم البيع أو الإعلانات الموجهة. لا تبيع MICRORETAILX بيانات محادثات GARFIX، ولا تؤجرها لوسطاء البيانات، ولا تستخدم ذاكرة المحادثة للإعلانات السلوكية عبر السياقات أو للإعلانات الموجهة.

التحويلات الدولية. عندما تُنقل البيانات الشخصية دولياً وتكون ضمانات النقل مطلوبة قانوناً، ستعتمد MICRORETAILX على آلية قانونية متاحة ومناسبة للنقل، وقد تشمل قرارات الملاءمة أو البنود التعاقدية القياسية أو UK International Data Transfer Addendum أو أي ضمان آخر معترف به قانوناً.

حقوق الخصوصية. وفقاً للقانون المطبق، قد يتمتع الأفراد بحقوق الوصول والحذف والتصحيح وقابلية النقل والتقييد والاعتراض وسحب الموافقة والانسحاب و/أو الاستئناف. ويمكن إرسال الطلبات إلى legal@microretailx.com. وقد يتم التحقق من الهوية أو الصفة التمثيلية عندما يكون ذلك ضرورياً بصورة معقولة ومسموحاً به قانوناً.

القرارات المؤتمتة والأطفال. لا تهدف ذاكرة المحادثة إلى اتخاذ قرارات مؤتمتة حصراً تُحدث آثاراً قانونية أو آثاراً مماثلة في الأهمية على الزوار. ولا يستهدف GARFIX الأطفال، ولا تستخدم MICRORETAILX عن علم ذاكرة المحادثة لإنشاء ملفات تعريف للأطفال.

أولوية القانون الإلزامي. إذا تعارض أي حكم من هذه السياسة مع حق إلزامي وغير قابل للتنازل في الخصوصية أو حماية المستهلك ينطبق على الزائر، فتسود القاعدة الإلزامية في حدود ذلك التعارض. وتظل النسخة الإنجليزية هي النسخة المرجعية بالقدر الذي يسمح به القانون المطبق، وتُقدم الترجمات للتيسير فقط.`,

    ru: `17. ГЛОБАЛЬНАЯ КОНФИДЕНЦИАЛЬНОСТЬ, GARFIX AI И ДОБРОВОЛЬНАЯ ПАМЯТЬ ДИАЛОГА

Дата обновления и вступления в силу: 01-09-2026

Настоящий раздел 17 является частью Политики конфиденциальности MICRORETAILX и разъясняет правила конфиденциальности, применимые к GARFIX AI и к посетителям в юрисдикциях с обязательным законодательством о защите частной жизни.

КОРПОРАТИВНАЯ СТРУКТУРА И ПРИМЕНИМОЕ ПРАВО. MICRORETAILX LLC учреждена в соответствии с законодательством штата Делавэр, США. В максимально допустимой законом степени право Делавэра регулирует договорное толкование настоящей Политики конфиденциальности. Такой выбор права не отменяет, не ограничивает и не заменяет обязательные права на конфиденциальность, защиту потребителей или права субъектов данных, предоставленные физическому лицу законодательством его юрисдикции.

GARFIX AI. Положения «Zero Data» основной Политики описывают пассивный просмотр информационного веб-сайта. GARFIX является необязательным интерактивным сервисом и для формирования ответа должен обрабатывать сообщение, релевантный контекст разговора и любой контент, намеренно предоставленный посетителем. Такая информация может обрабатываться посредством инфраструктуры MICRORETAILX и поставщиков ИИ-инференса, необходимых для ответа на запрос.

ДОБРОВОЛЬНАЯ ПАМЯТЬ ДИАЛОГА. Память диалога по умолчанию отключена и требует явного согласия на включение. При включении MICRORETAILX может хранить текст чата, идентификатор сессии, отдел, язык, метаданные ответа и ограниченную операционную информацию до 30 дней для обеспечения непрерывности разговора, безопасности, отладки и улучшения сервиса. Отключение памяти прекращает новое постоянное хранение; ранее сохраненные разговоры продолжают подпадать под заявленный срок хранения и применимые права на удаление.

МИНИМИЗАЦИЯ ДАННЫХ. Байты загруженных изображений не сохраняются в базе данных памяти разговоров GARFIX, хотя изображения могут временно обрабатываться инфраструктурой и поставщиками ИИ-инференса для ответа на конкретный запрос. Хранилище памяти GARFIX намеренно не сохраняет необработанные IP-адреса или отпечатки браузера.

РЕГИОНАЛЬНЫЕ РЕЖИМЫ КОНФИДЕНЦИАЛЬНОСТИ. Где применимо, обработка проектируется с учетом Общего регламента ЕС по защите данных (GDPR) и применимых правил ePrivacy; UK GDPR и Data Protection Act 2018; Delaware Personal Data Privacy Act; California Consumer Privacy Act с поправками CPRA; а также иных обязательных законов о конфиденциальности, которые могут применяться, включая соответствующее законодательство Швейцарии, Бразилии, Канады, Австралии, Японии и Сингапура. Упоминание этих режимов не означает, что каждый закон применяется к каждому посетителю или действию; применимость зависит от соответствующих правовых порогов, территориального охвата и исключений.

ПРАВОВЫЕ ОСНОВАНИЯ И СОГЛАСИЕ. Если применяется право ЕЭЗ, Великобритании или эквивалентное право, обработка будет опираться на надлежащее правовое основание с учетом цели и контекста. Добровольная Память диалога основывается на утвердительном выборе пользователя, когда применимым основанием является согласие. Согласие может быть отозвано путем отключения Памяти без ущерба для обработки, которая была законной до отзыва.

ОТСУТСТВИЕ ПРОДАЖИ И ТАРГЕТИРОВАННОЙ РЕКЛАМЫ. MICRORETAILX не продает данные разговоров GARFIX, не передает их в аренду брокерам данных и не использует Память диалога для поведенческой рекламы между контекстами или таргетированной рекламы.

МЕЖДУНАРОДНЫЕ ПЕРЕДАЧИ. Если персональные данные передаются на международном уровне и законом требуются гарантии передачи, MICRORETAILX будет использовать доступный законный механизм, подходящий для такой передачи, включая, в зависимости от обстоятельств, решения об адекватности, Стандартные договорные положения, UK International Data Transfer Addendum или иные юридически признанные гарантии.

ПРАВА В ОБЛАСТИ КОНФИДЕНЦИАЛЬНОСТИ. В зависимости от применимого права физические лица могут иметь права на доступ, удаление, исправление, переносимость, ограничение обработки, возражение, отзыв согласия, отказ и/или обжалование. Запросы могут направляться на legal@microretailx.com. Личность или полномочия представителя могут быть проверены, когда это обоснованно необходимо и разрешено законом.

АВТОМАТИЗИРОВАННЫЕ РЕШЕНИЯ И ДЕТИ. Память диалога не предназначена для принятия исключительно автоматизированных решений, создающих юридические или аналогично значимые последствия для посетителей. GARFIX не предназначен для детей, и MICRORETAILX сознательно не использует Память диалога для создания профилей детей.

ПРЕИМУЩЕСТВО ОБЯЗАТЕЛЬНОГО ПРАВА. Если какое-либо положение настоящей Политики противоречит обязательному и неотчуждаемому праву на конфиденциальность или защиту потребителей, применимому к посетителю, обязательная норма имеет преимущественную силу в пределах такого противоречия. Английская версия остается контролирующей в той мере, в какой это допускается применимым правом; переводы предоставляются для удобства.`,

    hi: `17. वैश्विक गोपनीयता, GARFIX AI और वैकल्पिक बातचीत मेमोरी

अपडेट और प्रभावी तिथि: 01-09-2026

यह धारा 17 MICRORETAILX गोपनीयता नीति का हिस्सा है और GARFIX AI तथा उन न्यायक्षेत्रों के आगंतुकों पर लागू गोपनीयता नियमों को स्पष्ट करती है जहाँ अनिवार्य गोपनीयता कानून लागू होते हैं।

कॉर्पोरेट और लागू-कानून ढाँचा। MICRORETAILX LLC संयुक्त राज्य अमेरिका के डेलावेयर राज्य के कानूनों के तहत संगठित है। कानून द्वारा अनुमत अधिकतम सीमा तक, इस गोपनीयता नीति की संविदात्मक व्याख्या डेलावेयर कानून द्वारा नियंत्रित होती है। कानून का यह चुनाव किसी व्यक्ति को उसकी अपनी न्यायिक व्यवस्था के कानून के तहत प्राप्त अनिवार्य गोपनीयता, उपभोक्ता-सुरक्षा या डेटा-विषय अधिकारों को त्यागता, सीमित या प्रतिस्थापित नहीं करता।

GARFIX AI। मुख्य नीति में “Zero Data” संबंधी कथन सूचना-आधारित वेबसाइट के निष्क्रिय ब्राउज़िंग को वर्णित करते हैं। GARFIX एक वैकल्पिक इंटरैक्टिव सेवा है और उत्तर उत्पन्न करने के लिए संदेश, बातचीत का प्रासंगिक संदर्भ और आगंतुक द्वारा जानबूझकर प्रस्तुत की गई सामग्री को संसाधित करना आवश्यक है। ऐसी जानकारी MICRORETAILX की अवसंरचना तथा अनुरोध का उत्तर देने के लिए आवश्यक AI inference प्रदाताओं के माध्यम से संसाधित हो सकती है।

वैकल्पिक बातचीत मेमोरी। Conversation Memory डिफ़ॉल्ट रूप से बंद रहती है और इसे सक्रिय करने के लिए सकारात्मक opt-in आवश्यक है। सक्रिय होने पर MICRORETAILX चैट टेक्स्ट, सत्र पहचानकर्ता, विभाग, भाषा, प्रतिक्रिया मेटाडेटा और सीमित परिचालन जानकारी को बातचीत की निरंतरता, सुरक्षा, डिबगिंग और सेवा-सुधार के लिए अधिकतम 30 दिनों तक रख सकता है। Conversation Memory बंद करने से नया स्थायी मेमोरी संग्रह रुक जाता है; पहले से रखी गई बातचीत घोषित अवधारण अवधि और लागू विलोपन अधिकारों के अधीन रहती है।

डेटा न्यूनतमकरण। अपलोड की गई छवियों के मूल बाइट GARFIX conversation-memory डेटाबेस में नहीं रखे जाते, हालाँकि विशिष्ट अनुरोध का उत्तर देने के लिए छवियों को अवसंरचना और AI inference प्रदाताओं द्वारा अस्थायी रूप से संसाधित किया जा सकता है। GARFIX मेमोरी स्टोर जानबूझकर कच्चे IP पते या ब्राउज़र फिंगरप्रिंट नहीं रखता।

क्षेत्रीय गोपनीयता ढाँचे। जहाँ लागू हो, प्रसंस्करण को यूरोपीय संघ के General Data Protection Regulation (GDPR) और लागू ePrivacy नियमों; UK GDPR और Data Protection Act 2018; Delaware Personal Data Privacy Act; CPRA द्वारा संशोधित California Consumer Privacy Act; तथा लागू हो सकने वाले अन्य अनिवार्य गोपनीयता कानूनों, जिनमें स्विट्ज़रलैंड, ब्राज़ील, कनाडा, ऑस्ट्रेलिया, जापान और सिंगापुर के प्रासंगिक कानून शामिल हैं, को ध्यान में रखकर डिज़ाइन किया जाता है। इन ढाँचों का उल्लेख यह नहीं दर्शाता कि प्रत्येक कानून प्रत्येक आगंतुक या गतिविधि पर लागू होता है; लागू होना संबंधित कानूनी सीमाओं, क्षेत्रीय दायरे और छूटों पर निर्भर करता है।

कानूनी आधार और सहमति। जहाँ EEA, UK या समकक्ष कानून लागू होता है, प्रसंस्करण उद्देश्य और संदर्भ के अनुसार उपयुक्त कानूनी आधार पर निर्भर करेगा। जहाँ सहमति लागू कानूनी आधार है, वैकल्पिक Conversation Memory उपयोगकर्ता की सकारात्मक पसंद पर आधारित है। Memory बंद करके सहमति वापस ली जा सकती है, और इससे वापसी से पहले वैध रूप से किए गए प्रसंस्करण पर कोई प्रभाव नहीं पड़ेगा।

कोई बिक्री या लक्षित विज्ञापन नहीं। MICRORETAILX GARFIX बातचीत डेटा नहीं बेचता, उसे डेटा ब्रोकरों को किराए पर नहीं देता और Conversation Memory का उपयोग cross-context behavioral advertising या लक्षित विज्ञापन के लिए नहीं करता।

अंतरराष्ट्रीय हस्तांतरण। जहाँ व्यक्तिगत डेटा अंतरराष्ट्रीय स्तर पर स्थानांतरित किया जाता है और हस्तांतरण संबंधी सुरक्षा उपाय कानून द्वारा आवश्यक हैं, MICRORETAILX उपलब्ध और उपयुक्त वैध तंत्र पर निर्भर करेगा, जिसमें adequacy decisions, Standard Contractual Clauses, UK International Data Transfer Addendum या अन्य कानूनी रूप से मान्यता प्राप्त सुरक्षा उपाय शामिल हो सकते हैं।

गोपनीयता अधिकार। लागू कानून के अनुसार व्यक्तियों को पहुँच, विलोपन, सुधार, पोर्टेबिलिटी, प्रतिबंध, आपत्ति, सहमति की वापसी, opt-out और/या अपील के अधिकार मिल सकते हैं। अनुरोध legal@microretailx.com पर भेजे जा सकते हैं। जहाँ उचित रूप से आवश्यक और कानून द्वारा अनुमत हो, पहचान या प्रतिनिधित्व के अधिकार का सत्यापन किया जा सकता है।

स्वचालित निर्णय और बच्चे। Conversation Memory का उद्देश्य केवल स्वचालित निर्णय लेना नहीं है जो आगंतुकों पर कानूनी या समान रूप से महत्वपूर्ण प्रभाव उत्पन्न करें। GARFIX बच्चों के लिए निर्देशित नहीं है, और MICRORETAILX जानबूझकर बच्चों की प्रोफ़ाइल बनाने के लिए Conversation Memory का उपयोग नहीं करता।

अनिवार्य कानून की प्रधानता। यदि इस नीति का कोई प्रावधान किसी आगंतुक पर लागू अपरिहार्य गोपनीयता या उपभोक्ता अधिकार से टकराता है, तो उस टकराव की सीमा तक अनिवार्य नियम को प्रधानता मिलेगी। लागू कानून द्वारा अनुमत सीमा तक अंग्रेज़ी संस्करण नियंत्रणकारी संस्करण रहेगा; अनुवाद केवल सुविधा के लिए उपलब्ध कराए जाते हैं।`,

    zh: `17. 全球隐私、GARFIX AI 与可选对话记忆

更新及生效日期：01-09-2026

本第17节构成 MICRORETAILX 隐私政策的一部分，并说明适用于 GARFIX AI 以及受强制性隐私立法管辖的访客的隐私规则。

公司架构与适用法律。MICRORETAILX LLC 依据美国特拉华州法律设立。在法律允许的最大范围内，特拉华州法律适用于本隐私政策的合同解释。该法律选择不会放弃、限制或取代个人依据其所在司法管辖区法律享有的任何强制性隐私权、消费者保护权或数据主体权利。

GARFIX AI。主政策中的“Zero Data”声明描述的是对信息型网站的被动浏览。GARFIX 是一项可选的交互式服务，为生成回复，必须处理消息、相关对话上下文以及访客主动提交的任何内容。此类信息可能通过 MICRORETAILX 基础设施以及回答请求所必需的 AI 推理提供商进行处理。

可选对话记忆。Conversation Memory 默认关闭，必须由用户主动选择启用。启用后，MICRORETAILX 可保存聊天文本、会话标识符、部门、语言、回复元数据以及有限的运行信息，最长保存 30 天，用于保持对话连续性、安全、调试和服务改进。关闭 Conversation Memory 将停止新的持久化记忆存储；已保留的对话仍受所述保留期限和适用删除权约束。

数据最小化。上传图片的原始字节不会保存在 GARFIX 对话记忆数据库中，但为回答具体请求，图片可能由基础设施和 AI 推理提供商进行临时处理。GARFIX 记忆存储不会有意保存原始 IP 地址或浏览器指纹。

区域隐私框架。在适用情况下，处理活动的设计会考虑欧盟《通用数据保护条例》(GDPR) 及适用的 ePrivacy 规则；UK GDPR 和 Data Protection Act 2018；Delaware Personal Data Privacy Act；经 CPRA 修订的 California Consumer Privacy Act；以及其他可能适用的强制性隐私法律，包括瑞士、巴西、加拿大、澳大利亚、日本和新加坡的相关法律。提及这些框架并不意味着每一项法规都适用于每一位访客或每一种活动；是否适用取决于相关法律门槛、地域范围和豁免。

法律依据与同意。当 EEA、英国或同等法律适用时，处理将根据目的和背景依赖适当的法律依据。在同意构成适用法律依据的情况下，可选 Conversation Memory 以用户的主动选择为基础。用户可以通过关闭 Memory 撤回同意，而不会影响撤回之前合法进行的处理。

不出售或定向广告。MICRORETAILX 不出售 GARFIX 对话数据，不将其出租给数据经纪商，也不会使用 Conversation Memory 进行跨情境行为广告或定向广告。

国际传输。当个人数据被跨境传输且法律要求提供传输保障时，MICRORETAILX 将依赖适用于该传输的可用合法机制，其中可能包括充分性决定、标准合同条款、UK International Data Transfer Addendum 或其他法律认可的保障措施。

隐私权利。根据适用法律，个人可能享有访问、删除、更正、可携带、限制、反对、撤回同意、退出和/或申诉等权利。请求可发送至 legal@microretailx.com。在合理必要且法律允许的情况下，可能会核实身份或代表权限。

自动化决定与儿童。Conversation Memory 并非用于作出仅由自动化方式作出的、对访客产生法律效果或类似重大影响的决定。GARFIX 并非面向儿童，MICRORETAILX 也不会明知而使用 Conversation Memory 为儿童建立个人画像。

强制性法律优先。如果本政策的任何规定与适用于访客且不可放弃的隐私权或消费者权利发生冲突，则强制性规则在冲突范围内优先适用。在适用法律允许的范围内，英文版本仍为控制版本；翻译仅为便利而提供。`,

    eu: `17. PRIBATUTASUN GLOBALA, GARFIX AI ETA AUKERAKO ELKARRIZKETA-MEMORIA

Eguneratze- eta indarreko data: 01-09-2026

17. atal hau MICRORETAILXen Pribatutasun Politikaren parte da, eta GARFIX AIri nahiz derrigorrezko pribatutasun-legedia duten jurisdikzioetako bisitariei aplikatzen zaizkien pribatutasun-arauak argitzen ditu.

ENPRESA-ESPARRUA ETA APLIKATU BEHARREKO LEGEA. MICRORETAILX LLC Ameriketako Estatu Batuetako Delaware estatuaren legeen arabera eratuta dago. Legeak ahalbidetzen duen gehieneko neurrian, Delawareko legeak Pribatutasun Politika honen kontratu-interpretazioa arautzen du. Lege-aukeraketa horrek ez ditu uko egiten, mugatzen edo ordezkatzen pertsona bati bere jurisdikzioko legeak aitortzen dizkion nahitaezko pribatutasun-, kontsumitzaile-babeseko edo datu-subjektuaren eskubideak.

GARFIX AI. Politika nagusiko “Zero Data” adierazpenek informazio-webgunearen nabigazio pasiboa deskribatzen dute. GARFIX aukerako zerbitzu interaktiboa da eta erantzuna sortzeko mezua, elkarrizketaren testuinguru garrantzitsua eta bisitariak nahita bidalitako edozein eduki prozesatu behar ditu. Informazio hori MICRORETAILXen azpiegituraren eta eskaerari erantzuteko behar diren AI inferentzia-hornitzaileen bidez prozesatu ahal izango da.

AUKERAKO ELKARRIZKETA-MEMORIA. Elkarrizketa-memoria lehenespenez desgaituta dago eta berariazko aktibazio positiboa behar du. Aktibatuta dagoenean, MICRORETAILXek txat-testua, saio-identifikatzailea, departamentua, hizkuntza, erantzun-metadatuak eta informazio operatibo mugatua gehienez 30 egunez gorde ditzake elkarrizketaren jarraitutasunerako, segurtasunerako, arazketarako eta zerbitzua hobetzeko. Memoria desgaitzeak biltegiratze iraunkor berria geldiarazten du; aurretik gordetako elkarrizketek adierazitako atxikipen-epearen eta aplikatu beharreko ezabatze-eskubideen menpe jarraitzen dute.

DATUEN MINIMIZAZIOA. Igotako irudien jatorrizko byteak ez dira GARFIXen elkarrizketa-memoriaren datu-basean gordetzen, nahiz eta irudiak aldi baterako prozesatu ahal izan azpiegiturak eta AI inferentzia-hornitzaileek eskaera zehatzari erantzuteko. GARFIXen memoria-biltegiak ez ditu nahita IP helbide gordinak edo nabigatzailearen hatz-markak gordetzen.

ESKUALDEKO PRIBATUTASUN-ESPARRUAK. Aplikagarriak direnean, tratamendua Europar Batasuneko Datuak Babesteko Erregelamendu Orokorra (GDPR) eta ePrivacy arau aplikagarriak; UK GDPR eta Data Protection Act 2018; Delaware Personal Data Privacy Act; CPRAk aldatutako California Consumer Privacy Act; eta aplika daitezkeen beste pribatutasun-lege nahitaezko batzuk kontuan hartuta diseinatzen da, Suitza, Brasil, Kanada, Australia, Japonia eta Singapurreko arau garrantzitsuak barne. Esparru horien aipamenak ez du esan nahi lege bakoitza bisitari edo jarduera guztiei aplikatzen zaienik; aplikagarritasuna dagokien legezko atalaseen, lurralde-eremuaren eta salbuespenen araberakoa da.

OINARRI JURIDIKOAK ETA BAIMENA. EEEko, Erresuma Batuko edo baliokidea den legea aplikatzen denean, tratamenduak helburuaren eta testuinguruaren araberako oinarri juridiko egokia izango du. Baimena oinarri aplikagarria denean, aukerako Elkarrizketa-memoria erabiltzailearen hautu positiboan oinarritzen da. Baimena Memoria desaktibatuz kendu daiteke, kendu aurretik legezkoa zen tratamenduari eragin gabe.

SALMENTARIK EDO PUBLIZITATE ZUZENDURIK EZ. MICRORETAILXek ez ditu GARFIXen elkarrizketa-datuak saltzen, ez dizkie datu-artekariei alokatzen eta ez du Elkarrizketa-memoria testuinguruen arteko portaera-publizitaterako edo publizitate zuzendurako erabiltzen.

NAZIOARTEKO TRANSFERENTZIAK. Datu pertsonalak nazioartean transferitzen direnean eta transferentzia-bermeak legez beharrezkoak direnean, MICRORETAILXek transferentziarako egokia den eta eskuragarri dagoen legezko mekanismo bat erabiliko du; horren barruan egon daitezke egokitasun-erabakiak, Kontratu Klausula Estandarrak, UK International Data Transfer Addendum edo legez aitortutako beste berme bat.

PRIBATUTASUN-ESKUBIDEAK. Aplikatu beharreko legearen arabera, pertsonek sarbide-, ezabatze-, zuzenketa-, eramangarritasun-, murrizketa-, aurka egiteko-, baimena kentzeko-, opt-out eta/edo errekurtso-eskubideak izan ditzakete. Eskaerak legal@microretailx.com helbidera bidali daitezke. Identitatea edo ordezkaritza-ahalmena egiaztatu ahal izango da arrazoiz beharrezkoa denean eta legeak baimentzen duenean.

ERABAKI AUTOMATIZATUAK ETA HAURRAK. Elkarrizketa-memoria ez dago soilik automatizatutako erabakiak hartzeko pentsatuta, bisitariengan ondorio juridikoak edo antzeko garrantzia duten ondorioak sortzen dituztenean. GARFIX ez dago haurrei zuzenduta, eta MICRORETAILXek ez du jakinaren gainean Elkarrizketa-memoria erabiltzen haurren profilak sortzeko.

NAHITAEZKO LEGEAREN NAGUSITASUNA. Politika honetako edozein xedapen bisitari bati aplikatzen zaion eta uko egin ezin zaion pribatutasun- edo kontsumitzaile-eskubide batekin kontraesanean badago, nahitaezko arauak izango du lehentasuna gatazkaren neurrian. Ingelesezko bertsioak kontrol-bertsioa izaten jarraitzen du aplikatu beharreko legeak baimentzen duen neurrian; itzulpenak erosotasunerako ematen dira.`,

    ja: `17. グローバルプライバシー、GARFIX AI、および任意の会話メモリ

更新および発効日：01-09-2026

本第17条は MICRORETAILX のプライバシーポリシーの一部を構成し、GARFIX AI および強行的なプライバシー法制が適用される法域の訪問者に適用されるプライバシールールを明確にするものです。

会社の法的枠組みおよび準拠法。MICRORETAILX LLC は、米国デラウェア州法に基づき設立されています。法令で認められる最大限の範囲において、本プライバシーポリシーの契約上の解釈にはデラウェア州法が適用されます。ただし、この準拠法の選択は、個人がその所在法域の法律に基づいて有する強行的なプライバシー権、消費者保護上の権利またはデータ主体の権利を放棄、制限または置き換えるものではありません。

GARFIX AI。主要ポリシーにおける「Zero Data」の記載は、情報提供型ウェブサイトを受動的に閲覧する場合について説明するものです。GARFIX は任意のインタラクティブサービスであり、回答を生成するため、メッセージ、関連する会話コンテキスト、および訪問者が意図的に送信したコンテンツを処理する必要があります。これらの情報は、MICRORETAILX のインフラおよび要求への回答に必要な AI 推論プロバイダーを通じて処理される場合があります。

任意の会話メモリ。Conversation Memory はデフォルトで無効になっており、有効化には明示的なオプトインが必要です。有効化した場合、MICRORETAILX は、会話の継続性、セキュリティ、デバッグおよびサービス改善のため、チャット本文、セッション識別子、部門、言語、応答メタデータおよび限定的な運用情報を最長30日間保持する場合があります。Conversation Memory を無効化すると、新たな永続的メモリ保存は停止されますが、既に保持されている会話には、明示された保持期間および適用される削除権が引き続き適用されます。

データ最小化。アップロードされた画像の元データ（バイト列）は GARFIX の会話メモリデータベースには保持されません。ただし、特定の要求に回答するため、画像がインフラおよび AI 推論プロバイダーによって一時的に処理される場合があります。GARFIX のメモリストアは、未加工の IP アドレスまたはブラウザフィンガープリントを意図的に保持しません。

地域別プライバシー法制。適用される場合、処理は、EU 一般データ保護規則（GDPR）および適用される ePrivacy 規則、UK GDPR および Data Protection Act 2018、Delaware Personal Data Privacy Act、CPRA により改正された California Consumer Privacy Act、ならびにスイス、ブラジル、カナダ、オーストラリア、日本およびシンガポールの関連法令を含むその他の強行的なプライバシー法を考慮して設計されます。これらの法制への言及は、すべての法令がすべての訪問者または活動に適用されることを意味するものではありません。適用の有無は、関連する法的基準、地域的適用範囲および例外によって決まります。

法的根拠および同意。EEA、英国またはこれらと同等の法令が適用される場合、処理は、その目的および状況に応じた適切な法的根拠に基づいて行われます。同意が適用される法的根拠である場合、任意の Conversation Memory は利用者による明示的な選択に基づきます。利用者は Memory を無効化することで同意を撤回できますが、撤回前に適法に行われた処理には影響しません。

販売およびターゲティング広告の不存在。MICRORETAILX は GARFIX の会話データを販売せず、データブローカーに貸与せず、Conversation Memory をクロスコンテキスト行動広告またはターゲティング広告に使用しません。

国際移転。個人データが国際的に移転され、法令上移転保護措置が必要な場合、MICRORETAILX は、当該移転に適した利用可能な適法な仕組みに依拠します。これには、十分性認定、標準契約条項（SCC）、UK International Data Transfer Addendum その他法的に認められた保護措置が含まれる場合があります。

プライバシー上の権利。適用法令に応じて、個人は、アクセス、削除、訂正、データポータビリティ、処理制限、異議申立て、同意撤回、オプトアウトおよび／または不服申立ての権利を有する場合があります。請求は legal@microretailx.com まで送付できます。合理的に必要で、かつ法令で認められる場合、本人確認または代理権の確認を行うことがあります。

自動化された意思決定および児童。Conversation Memory は、訪問者に法的効果またはこれと同程度に重大な効果を生じさせる、完全に自動化された意思決定を行うことを目的としていません。GARFIX は児童を対象としておらず、MICRORETAILX は Conversation Memory を使用して児童のプロファイルを意図的に作成しません。

強行法規の優先。本ポリシーのいずれかの規定が、訪問者に適用され放棄できないプライバシー権または消費者権利と抵触する場合、その抵触する範囲において強行規定が優先します。適用法令で認められる範囲において英語版が優先する版となり、翻訳は便宜のためにのみ提供されます。`
  };

  function extendPrivacyPolicy() {
    if (!window.MX_PAGE || typeof window.MX_PAGE !== "object") return;

    window.MX_PAGE.policyVersion = POLICY_VERSION;
    const dictionaries = window.MX_PAGE.i18n || {};

    for (const [lang, appendix] of Object.entries(COPY)) {
      const dict = dictionaries[lang];
      if (!dict || typeof dict["card.terms"] !== "string") continue;

      let main = dict["card.terms"];

      /*
       * The first date is the "last updated" date. Preserve the original
       * 01-01-2026 effective date immediately below it.
       */
      main = main.replace("01-01-2026", DISPLAY_DATE);

      if (!main.includes(appendix)) {
        dict["card.terms"] = `${main.trimEnd()}\n\n${appendix}`;
      }
    }
  }

  extendPrivacyPolicy();
})();
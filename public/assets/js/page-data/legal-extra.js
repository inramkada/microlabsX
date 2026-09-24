(() => {
  "use strict";

  const page = document.body?.dataset?.page;
  if (!page || !window.MX_PAGE) return;

  const register = (lang, common, pages) => {
    const current = pages?.[page];
    if (!current) return;

    window.MX_PAGE.titleMap = {
      ...(window.MX_PAGE.titleMap || {}),
      [lang]: current.title
    };

    window.MX_PAGE.descriptionMap = {
      ...(window.MX_PAGE.descriptionMap || {}),
      [lang]: current.description
    };

    window.MX_PAGE.i18n = window.MX_PAGE.i18n || {};
    window.MX_PAGE.i18n[lang] = {
      ...common,
      "card.terms": current.body
    };
  };


  register("he", {
    "nav.about": "מידע",
    "nav.home": "בית",
    "nav.verticals": "תחומים",
    "nav.contact": "יצירת קשר",
    "footer.terms": "תנאים",
    "footer.privacy": "פרטיות",
    "footer.cookies": "עוגיות",
    "footer.legal": "מידע משפטי",
    "cookie.prefs": "העדפות עוגיות",
    "reader.toggle": "מצב קריאה",
    "cmp.title": "פרטיות ועוגיות",
    "cmp.desc": "אנו מכבדים את פרטיותך. אתר זה אינו משתמש בעוגיות לפרסום או למעקב. עוגיות הכרחיות פעילות תמיד לצורכי אבטחה ותפקוד בסיסי. ניתן לאשר או לדחות עוגיות אופציונליות.",
    "cmp.necessary": "הכרחיות",
    "cmp.necessary.desc": "אבטחה ותפקוד בסיסי.",
    "cmp.analytics": "אנליטיקה",
    "cmp.analytics.desc": "אופציונלי: נתוני שימוש אנונימיים לשיפור האתר.",
    "cmp.marketing": "שיווק",
    "cmp.marketing.desc": "אופציונלי: התאמה אישית ומדידת קמפיינים.",
    "cmp.noproviders": "אין ספקים פעילים",
    "cmp.reject": "לדחות הכל",
    "cmp.accept": "לאשר הכל",
    "cmp.save": "לשמור העדפות"
  }, {
    terms: {
      title: "תנאי שימוש גלובליים — MICRORETAILX",
      description: "תנאי השימוש הגלובליים והמסגרת המשפטית של MICRORETAILX.",
      body: `MICRORETAILX – תנאי שימוש גלובליים

MICRORETAILX LLC (דלאוור, ארצות הברית)
MICRORETAILX GROUP – מסגרת פעילות גלובלית

עדכון אחרון: 01-01-2026
תאריך תחילה: 01-01-2026

משרד רשום וסוכן רשום:
Corporation Trust Center
1209 Orange Street
Wilmington, DE 19801
United States of America

1. הגדרות

• "MICRORETAILX", "אנחנו", "אותנו", "שלנו" מתייחסים ל-MICRORETAILX LLC, חברה בערבון מוגבל שהתאגדה כדין ופועלת לפי דיני מדינת דלאוור, ארצות הברית.
• "האתר" מתייחס לאתר זה ולכל עמוד, תת-דומיין, ממשק, רכיב אינטראקטיבי, קוד מקור, המחשה ותוכן הקשורים אליו ומונגשים באמצעותו.
• "MICRORETAILX GROUP" מתייחס למסגרת רעיונית ואסטרטגית המשמשת לתיאור יוזמות קיימות ו/או עתידיות, ואינו מהווה ישות משפטית נפרדת אלא אם צוין כך במפורש בכתב.
• "Verticals" פירושו תחומים נושאיים המשמשים אך ורק כמסגרת סיווג רעיונית ואסטרטגית.
• "תוכן" כולל כל טקסט, גרפיקה, עיצוב, קוד מקור, המחשה, סימולציה, מודלים, תהליכי עבודה ותיעוד.
• "הגשות" פירושן כל תגובה, רעיון, הצעה או חומר שנמסרו על ידך.

2. מפעיל, היקף וקבלה

תנאים אלה מסדירים את הגישה שלך לאתר ואת השימוש בו. בגישה לאתר או בשימוש בו, אתה מאשר שקראת והבנת תנאים אלה, מסכים להיות מחויב להם משפטית ומצהיר שיש לך הכשירות המשפטית לעשות זאת.

3. זהות המפעיל, כתובת משפטית והודעות

אתר זה מופעל ונשלט באופן בלעדי על ידי MICRORETAILX LLC, חברה בערבון מוגבל מדלאוור.

סוכן רשום: Corporation Trust Center, 1209 Orange Street, Wilmington, DE 19801, USA.

תקשורת משפטית ותקשורת ציות יש לשלוח לכתובת: legal@microretailx.com.

כל התייחסות ל-"nodes", "labs", "regions" או "verticals" לא תפורש כיוצרת סניף, משרד, חברה בת, נציגות או זיקה לצורכי מס בכל תחום שיפוט מחוץ למדינת דלאוור.

4. מודל פעילות גלובלי; ללא שותפות; ללא שליחות

MICRORETAILX פועלת באופן גלובלי באמצעות יוזמות רעיוניות, מחקריות ואסטרטגיות. אלא אם הוסכם במפורש בחוזה כתוב החתום בידי MICRORETAILX LLC:

(i) אין באתר דבר היוצר שותפות, מיזם משותף, יחסי עבודה או יחסי שליחות;

(ii) אין צד המוסמך לחייב את MICRORETAILX LLC;

(iii) למונחים תיאוריים כגון "group", "network" או "ecosystem" אין משמעות משפטית כשלעצמם.

השימוש באתר אינו יוצר מוסד קבע או נוכחות חייבת במס דומה בכל תחום שיפוט.

5. מעמד האתר; אין הצעה; אין התחייבות

האתר מסופק אך ורק למטרות מידע, רעיון ובחינה. שום דבר המופיע בו אינו מהווה הצעה, שידול, הצעת השקעה, תמריץ או פעילות מפוקחת מכל סוג בכל תחום שיפוט.

6. מסגרת VERTICALS (רעיונית ולא תפעולית)

כל התייחסות ל-verticals מייצגת מסגרת רעיונית בלבד ואינה מרמזת על קיומן של יחידות עסקיות פעילות, מוצרים, שירותים, פעילויות מורשות או פעילות מפוקחת.

7. אסטרטגיית ZERO DATA (פרטיות כברירת מחדל)

האתר מתוכנן לפי אסטרטגיית Zero Data: אין חשבונות משתמשים, אין פרופיילינג ואין טכנולוגיות מעקב של צד שלישי המופעלות כברירת מחדל, למעט כאשר הדבר בלתי נמנע עקב פרוטוקולי אינטרנט סטנדרטיים או נדרש לפי דין חל.

8. עוגיות והסכמה

כברירת מחדל נעשה שימוש רק בעוגיות הכרחיות בהחלט או במזהים טכניים מקבילים. טכנולוגיות אופציונליות יופעלו רק לאחר הסכמה מפורשת של המשתמש כאשר הדין מחייב זאת.

עוגיות הכרחיות ו/או מזהים טכניים עשויים להיות מוגדרים על ידי רשתות מסירת תוכן, ספקי אירוח ושכבות אבטחה אך ורק לצורך איזון עומסים, מניעת שימוש לרעה, צמצום פעילות בוטים ומסירת תוכן מאובטחת.

9. אירוח, מסירה ואבטחה

האתר מאוחסן על תשתית של צדדים שלישיים. יומנים טכניים ומטא-נתונים מוגבלים עשויים להיות מעובדים אך ורק לצורכי אבטחה, שלמות, מניעת שימוש לרעה ומסירת תוכן אמינה.

עיבוד כזה אינו משנה את אופיו המידעי של האתר ואינו מהווה פעילות מסחרית, פרופיילינג או מיקוד לתחום שיפוט מסוים.

עצם נגישות האתר אינה מהווה פעילות מסחרית, מיקוד או נוכחות מפוקחת בכל תחום שיפוט.

10. הגנת מידע גלובלית וציות רגולטורי

MICRORETAILX LLC מתכננת ומפעילה את האתר בהתאם לעקרונות מקובלים בינלאומית של הגנת מידע ופרטיות, ובהם פרטיות בתכנון, מזעור נתונים, הגבלת מטרה, שקיפות, אבטחה ואחריותיות.

האתר הוא בעיקרו אינפורמטיבי ורעיוני. הוא אינו מציע חשבונות משתמשים, אינו דורש הרשמה ואינו מבצע פרופיילינג, מעקב התנהגותי או עיבוד לצורכי פרסום.

מסירת התוכן והפעילות הטכנית נשענות על ספקי תשתית המפוזרים ברחבי העולם. ככל שמתבצע עיבוד נלווה של מטא-נתונים טכניים כגון כתובות IP או נתוני חיבור, הוא מוגבל בקפדנות למה שנדרש לצורכי אבטחה, שלמות, מניעת שימוש לרעה ומסירת תוכן אמינה.

כל עיבוד כזה מתבצע בכפוף לאמצעים חוזיים, טכניים וארגוניים מתאימים, לרבות הסכמי עיבוד נתונים ומנגנוני העברה בינלאומיים מוכרים כאשר רלוונטי. במקרים המתאימים נעשה שימוש בסעיפים חוזיים סטנדרטיים (SCCs) או במנגנוני העברת נתונים בינלאומיים חוקיים מקבילים. MICRORETAILX LLC אינה אוספת, שומרת או מנצלת במכוון מידע אישי למטרות מסחריות, פרופיילינג או שיווק.

גישה זו נועדה להתיישר עם העקרונות של מסגרות מרכזיות להגנת מידע ופרטיות ברחבי העולם.

עצם נגישות האתר מתחום שיפוט מסוים אינה מהווה כשלעצמה מיקוד, התבססות, רישוי, הרשאה או פעילות מפוקחת באותו תחום שיפוט.

MICRORETAILX LLC אינה מכוונת באופן פעיל למשתמשים, לקוחות, משקיעים, רגולטורים או רשויות בתחום שיפוט מסוים.

11. שימוש מותר; התנהגות אסורה

אין לבצע איסוף נתונים אוטומטי, הנדסה לאחור, חילוץ אלגוריתמים, אימון מודלי בינה מלאכותית, הפרעה לתשתית או שימוש לרעה באתר, אלא אם הדבר מותר במפורש לפי דין קוגנטי.

12. שימור ואכיפה

MICRORETAILX LLC שומרת לעצמה את הזכות ליישם אמצעים טכניים, ארגוניים ומשפטיים להגנת האתר ולשימור ראיות לשימוש לרעה או לפעילות בלתי חוקית.

13. קניין רוחני; סודות מסחריים

כל הזכויות, הבעלות והעניין באתר ובתוכנו הם קניינה הבלעדי של MICRORETAILX LLC ומוגנים לפי דיני קניין רוחני וסודות מסחריים החלים ברחבי העולם.

14. סודיות של חומרים שאינם ציבוריים

אין לחשוף, להפיץ או לשכפל חומר שאינו ציבורי או שמוגבל בגישה ללא אישור מוקדם בכתב מאת MICRORETAILX LLC.

15. הגשות ומשוב

בהגשת חומרים כלשהם אתה מעניק ל-MICRORETAILX LLC רישיון עולמי, ללא תמלוגים, לא בלעדי וללא הגבלת זמן להשתמש, לשכפל, להתאים ולשלב הגשות אלה למטרות עסקיות לגיטימיות.

רישיון זה חל רק על הגשות שלא התבקשו ואינו גובר, מגביל או מחליף כל הסכם כתוב נפרד שנחתם עם MICRORETAILX LLC.

16. נמל מבטחים לפי DIGITAL MILLENNIUM COPYRIGHT ACT (DMCA)

MICRORETAILX LLC מכבדת זכויות קניין רוחני ומצפה מהמשתמשים לעשות זאת גם כן. בהתאם ל-Digital Millennium Copyright Act ‏(17 U.S.C. § 512), יושם ההליך הבא לדיווח על הפרת זכויות יוצרים נטענת:

• הודעה. אם אתה סבור שתוכן או הגשה הזמינים באתר מפרים זכויות יוצרים שלך, ניתן לשלוח הודעה בכתב לסוכן המיועד שלנו בכתובת legal@microretailx.com. כדי שתהיה תקפה, על ההודעה לעמוד באופן מהותי בדרישות 17 U.S.C. § 512(c)(3), לרבות: (i) חתימה פיזית או אלקטרונית של בעל זכויות היוצרים או נציג מורשה; (ii) זיהוי היצירה המוגנת שנטען כי הופרה; (iii) זיהוי החומר המפר לכאורה ומיקומו; (iv) פרטי התקשרות של המתלונן; ו-(v) הצהרה בדבר אמונה בתום לב שהשימוש אינו מורשה.

• הסרה. עם קבלת הודעה תקפה, MICRORETAILX LLC שומרת לעצמה את הזכות להסיר את החומר המפר לכאורה או לחסום את הגישה אליו, לפי שיקול דעתה הבלעדי וללא הודעה מוקדמת.

• הודעה נגדית. כאשר רלוונטי, ניתן להגיש הודעה נגדית בהתאם ל-DMCA. MICRORETAILX LLC רשאית להשיב את החומר אם הדין מחייב זאת.

• הגבלה. הליך זה חל אך ורק על ענייני זכויות יוצרים לפי DMCA. לכל פנייה משפטית, רגולטורית או פנייה בנושאי ציות אחרת, יש לעיין בסעיף הקשר הכללי של תנאים אלה.

17. קישורים חיצוניים; שירותי צד שלישי

האתר עשוי לכלול קישורים לשירותים של צדדים שלישיים. MICRORETAILX LLC אינה נושאת באחריות לתוכן, לפרקטיקות או למדיניות של צדדים שלישיים. הגישה היא על אחריותך בלבד.

18. כתבי ויתור; אין הסתמכות

האתר אינו מספק ייעוץ משפטי, מס, פיננסי או מקצועי.

אין לפרש דבר באתר כהנחיה רגולטורית, כהצהרת ציות או כהבטחה להתאמה למשטר משפטי או רגולטורי מקומי מסוים.

הצהרות צופות פני עתיד כרוכות מטבען באי-ודאות ואינן מבטיחות תוצאות עתידיות.

19. זמינות; "כמות שהוא"

האתר מסופק "כמות שהוא" ו"כפי שזמין", ללא אחריות מכל סוג, מפורשת או משתמעת.

20. הגבלת אחריות

במידה המרבית המותרת לפי הדין החל, MICRORETAILX LLC לא תישא באחריות לכל נזק ישיר או עקיף הנובע מהשימוש באתר.

21. שיפוי

אתה מסכים לשפות ולפטור את MICRORETAILX LLC מכל תביעה, חבות, נזק או הוצאה הנובעים משימוש בלתי חוקי שלך באתר או מהפרת תנאים אלה.

22. ציות; בקרות יצוא; סנקציות

אתה מסכים לציית לדיני בקרת יצוא וסנקציות החלים, לרבות תקנות ה-Export Administration Regulations ‏(EAR) של ארצות הברית ומשטרי Office of Foreign Assets Control ‏(OFAC), ובמקרים המתאימים למסגרות סנקציות רלוונטיות של האו"ם, האיחוד האירופי או מסגרות בינלאומיות אחרות.

23. תקשורת אלקטרונית; הודעות

כל הודעה ותקשורת משפטית יש לשלוח לכתובת: legal@microretailx.com.

24. שינויים בתנאים אלה

MICRORETAILX LLC רשאית לשנות תנאים אלה בכל עת. המשך השימוש באתר מהווה קבלה של התנאים המתוקנים.

25. דין חל; סמכות שיפוט בלעדית; שפה

תנאים אלה כפופים לדיני מדינת דלאוור, ארצות הברית. כל מחלוקת תהיה נתונה לסמכות השיפוט הבלעדית של בתי המשפט המדינתיים או הפדרליים הממוקמים בדלאוור.

הגרסה באנגלית גוברת; התרגומים ניתנים לנוחות בלבד.

26. הפרדה; ההסכם המלא

אם הוראה כלשהי תיקבע כבלתי תקפה או בלתי אכיפה, יתר ההוראות יישארו בתוקף מלא. תנאים אלה מהווים את מלוא ההסכם בנוגע לשימוש באתר.

27. יצירת קשר

תקשורת משפטית וציות: legal@microretailx.com
`
    },

    privacy: {
      title: "מדיניות פרטיות — MICRORETAILX",
      description: "מדיניות הפרטיות הגלובלית ומסגרת הגנת המידע של MICRORETAILX.",
      body: `MICRORETAILX — מדיניות פרטיות

MICRORETAILX LLC (דלאוור, ארצות הברית)
MICRORETAILX GROUP – מסגרת פעילות גלובלית

עדכון אחרון: 01-01-2026
תאריך תחילה: 01-01-2026

משרד רשום וסוכן רשום:
Corporation Trust Center
1209 Orange Street
Wilmington, DE 19801
United States of America

1. היקף ומטרה

מדיניות פרטיות זו מתארת כיצד MICRORETAILX LLC ("MICRORETAILX", "אנחנו", "אותנו", "שלנו") מתכננת ומפעילה אתר זה מנקודת מבט של הגנת מידע ופרטיות.

האתר הוא אינפורמטיבי ורעיוני בלבד. הוא אינו מספק חשבונות משתמשים, אינו דורש הרשמה ואינו מציע מוצרים או שירותים למכירה.

2. אסטרטגיית ZERO DATA (פרטיות בתכנון)

אתר זה תוכנן במכוון כסביבת Zero Data.

MICRORETAILX LLC אינה אוספת, מבקשת, דורשת, שומרת, ממנפת או מנצלת במכוון מידע אישי של מבקרים. לא נוצרים פרופילי משתמשים, מזהים או מערכי נתונים התנהגותיים.

עקרונות הפרטיות משולבים בתכנון וכברירת מחדל, לרבות מזעור נתונים, הגבלת מטרה, שקיפות, אבטחה ואחריותיות.

3. אין חשבונות משתמשים; אין הרשמה

האתר אינו מציע חשבונות משתמשים, אזורי התחברות, טפסי הרשמה או מערכות חברות.

מבקרים אינם נדרשים למסור מידע אישי כדי לגשת לתוכן האתר.

4. אין פרופיילינג; אין מעקב; אין פרסום

האתר אינו מיישם:

• פרופיילינג התנהגותי או מבוסס תחומי עניין
• טכנולוגיות פרסום או שיווק
• פלטפורמות אנליטיקה או כלי מדידת קהל
• מנגנוני מעקב בין אתרים או בין שירותים

MICRORETAILX LLC אינה מבצעת קבלת החלטות אוטומטית, פרופיילינג או ניתוח התנהגותי של מבקרים.

5. מטא-נתונים טכניים ונתוני יומן

כמו ברוב שירותי האינטרנט, מטא-נתונים טכניים מוגבלים עשויים להיות מעובדים באופן נלווה בעת גישה לאתר, כגון כתובות IP, כותרות בקשה, חותמות זמן או מידע ברמת הפרוטוקול.

מטא-נתונים אלה מעובדים אך ורק לצרכים טכניים ואבטחתיים, לרבות:

• הבטחת מסירת תוכן מאובטחת ואמינה
• הגנה מפני שימוש לרעה, גישה אוטומטית והתקפות
• שמירה על שלמות וזמינות הרשת

מטא-נתונים אלה אינם משמשים לזיהוי, פרופיילינג, שיווק או אנליטיקה ונשמרים רק למשך הזמן המינימלי הדרוש.

6. ספקי תשתית של צד שלישי

האתר נמסר באמצעות ספקי תשתית של צדדים שלישיים, לרבות רשתות מסירת תוכן (CDN), שירותי DNS ופלטפורמות אירוח סטטי, כגון Cloudflare, Inc. ו-GitHub, Inc.

ספקים אלה עשויים לעבד מטא-נתונים טכניים מוגבלים אך ורק כדי לבצע פונקציות תשתית, אבטחה ומסירה בשם MICRORETAILX LLC.

MICRORETAILX LLC אינה מפעילה תכונות אנליטיקה, מעקב, פרסום או ניטור התנהגותי שמוצעות על ידי ספקים אלה.

7. העברות מידע בינלאומיות

כאשר מטא-נתונים טכניים מעובדים באמצעות תשתית המפוזרת ברחבי העולם, העיבוד עשוי לכלול העברות מידע בינלאומיות.

העברות כאלה מבוצעות בכפוף לאמצעי הגנה טכניים וארגוניים מתאימים, ובמקרים המתאימים מסתמכות על מנגנוני העברה בינלאומיים מוכרים כגון סעיפים חוזיים סטנדרטיים (SCCs) או מסגרות חוקיות מקבילות.

MICRORETAILX LLC אינה משתמשת בהעברות בינלאומיות לניצול מסחרי של מידע אישי.

8. עוגיות, מזהים טכניים ואבטחת תשתית

כברירת מחדל אתר זה אינו משתמש בעוגיות שיווק, פרסום, אנליטיקה, מיקוד או מעקב התנהגותי.

גילוי טכני. האתר מסתמך באופן בלעדי על מזהים טכניים הכרחיים בהחלט לצורך תשתית ליבה ופעולות אבטחה. אלה עשויים לכלול מזהים המוגדרים או מעובדים על ידי רשתות מסירת תוכן (CDN), ספקי DNS, פלטפורמות אירוח ושכבות אבטחה.

מזהים אלה משמשים אך ורק למטרות הבאות:

• אבטחה ומניעת שימוש לרעה: הפעלת חומות אש ליישומי אינטרנט (WAF), מערכות לצמצום בוטים, הגבלת קצב והגנות ברמת הרשת למניעת גישה בלתי מורשית, שימוש אוטומטי לרעה והתקפות מניעת שירות.

• מסירת תוכן וזמינות: מסירה מאובטחת ויעילה של תוכן באמצעות CDN גלובליים, מאזני עומס ותשתית מבוזרת, לשם ביצועים, חוסן וזמינות.

מזהים טכניים אלה אינם מאפשרים פרופיילינג, ניטור התנהגותי, פרסום או פעילות שיווקית ואינם משמשים לזיהוי או למעקב אחר יחידים בין אתרים או שירותים.

כאשר מעובדים מטא-נתונים טכניים כגון כתובות IP או כותרות בקשה, הם מטופלים אך ורק לצורכי אבטחה, שלמות ותפעול ורק למשך הזמן המינימלי הדרוש.

מזהים אלה פטורים בדרך כלל מדרישות הסכמה לפי מסגרות הגנת מידע ו-ePrivacy החלות, מאחר שהם הכרחיים בהחלט למתן האתר, לאבטחתו ולפעולתו התקינה.

9. זכויות נושאי המידע

בהתחשב באופי האתר ובהיעדר איסוף מכוון של מידע אישי, רבות מזכויות נושאי המידע עשויות שלא להיות רלוונטיות בפועל.

כאשר הדין החל מחייב זאת, יחידים רשאים לפנות ל-MICRORETAILX LLC כדי לברר לגבי עיבוד אפשרי של מידע הקשור ליומני גישה טכניים.

בקשות ניתן לשלוח אל: legal@microretailx.com

MICRORETAILX LLC שומרת לעצמה את הזכות לאמת בקשות ולהגביל מענה כאשר הדין מתיר זאת.

10. אבטחת מידע

MICRORETAILX LLC מיישמת אמצעים טכניים וארגוניים מתאימים כדי להגן על האתר והתשתית מפני גישה בלתי מורשית, שימוש לרעה, שינוי או השמדה.

אמצעי האבטחה כוללים, בין היתר, הצפנה בתעבורה, כותרות אבטחה מחמירות, בקרות גישה והגנות ברמת הרשת.

11. הצהרת SECURITY-BY-DESIGN

אתר זה תוכנן במכוון בארכיטקטורה שבה אבטחה ופרטיות בתכנון נמצאות בעדיפות ראשונה. התכנון הטכני נועד למזער חשיפת מידע, לצמצם את שטח התקיפה ולמנוע עיבוד מידע מיותר, ובכך להגן על משתמשים כברירת מחדל במקום להסתמך על בקרות מאוחרות או על מנגנוני הסכמה.

אמצעי האבטחה מיושמים כחלק מתשתית הליבה וממודל התפעול של האתר, ולא כתכונות אופציונליות.

12. אין מיקוד; אין התבססות

MICRORETAILX LLC אינה מכוונת באופן פעיל למשתמשים, לקוחות, משקיעים או רשויות בתחום שיפוט מסוים.

עצם נגישות האתר מתחום שיפוט מסוים אינה מהווה מיקוד, התבססות, רישוי, הרשאה או פעילות מפוקחת באותו תחום שיפוט.

13. פרטיות ילדים

האתר אינו מיועד לילדים ו-MICRORETAILX LLC אינה אוספת ביודעין מידע אישי מקטינים.

14. שינויים במדיניות פרטיות זו

MICRORETAILX LLC רשאית לעדכן מדיניות פרטיות זו מעת לעת. השינויים ייכנסו לתוקף עם פרסומם באתר.

15. דין חל ושפה

מדיניות פרטיות זו כפופה לדיני מדינת דלאוור, ארצות הברית.

הגרסה באנגלית גוברת. התרגומים ניתנים לנוחות מידע בלבד ואין להם תוקף חוזי או משפטי.

16. יצירת קשר

לפניות בנושאי פרטיות, משפט או ציות:
legal@microretailx.com
`
    },

    cookies: {
      title: "מדיניות עוגיות — MICRORETAILX",
      description: "מדיניות העוגיות הגלובלית והמסגרת הטכנית של MICRORETAILX.",
      body: `MICRORETAILX — מדיניות עוגיות

MICRORETAILX LLC (דלאוור, ארצות הברית)
MICRORETAILX GROUP – מסגרת פעילות גלובלית

עדכון אחרון: 21-08-2026
תאריך תחילה: 01-01-2026

משרד רשום וסוכן רשום:
Corporation Trust Center
1209 Orange Street
Wilmington, DE 19801
United States of America

1. היקף ומטרה

מדיניות עוגיות זו מסבירה כיצד ניתן להשתמש בעוגיות ובמזהים טכניים דומים בקשר לאתר זה, המופעל על ידי MICRORETAILX LLC ("MICRORETAILX", "אנחנו", "אותנו", "שלנו").

האתר הוא אינפורמטיבי ורעיוני בלבד ויש לקרוא מדיניות זו יחד עם מדיניות הפרטיות ותנאי השימוש הגלובליים, המהווים יחד את המסגרת המשפטית של האתר.

2. אסטרטגיית ZERO DATA

האתר תוכנן ומופעל במכוון לפי אסטרטגיית Zero Data.

MICRORETAILX LLC אינה משתמשת בעוגיות או בטכנולוגיות דומות כדי:
• לזהות משתמשים יחידים
• ליצור פרופילי משתמשים
• לבצע מעקב התנהגותי או מבוסס תחומי עניין
• לספק פרסום או שיווק
• למנף מידע אישי

האתר אינו מציע חשבונות משתמשים, מערכות הרשמה או שירותים אינטראקטיביים הדורשים מידע אישי.

3. עוגיות הכרחיות בהחלט ומזהים טכניים

כברירת מחדל האתר מסתמך באופן בלעדי על עוגיות הכרחיות בהחלט ו/או מזהים טכניים מקבילים הנדרשים לתשתית הליבה, לאבטחה ולזמינות.

מזהים כאלה עשויים להיות מוגדרים או מעובדים על ידי:
• רשתות מסירת תוכן (CDN)
• ספקי DNS ואירוח
• שכבות אבטחה, שלמות וזמינות

מזהים אלה משמשים אך ורק למטרות כגון:
• איזון עומסים וחלוקת תעבורה
• מניעת שימוש לרעה והגבלת קצב
• צמצום פעילות בוטים והגנה מפני גישה אוטומטית
• מסירת תוכן מאובטחת ואמינה

עוגיות ומזהים אלה חיוניים לפעולתו התקינה של האתר ולא ניתן להשביתם בלי לפגוע באבטחתו או בזמינותו.

אחסון מקומי שבו משתמש האתר

בנוסף לעוגיות הכרחיות בהחלט, האתר שומר מספר מצומצם של העדפות טכניות ישירות באחסון המקומי של הדפדפן. רשומות אלה הן צד ראשון בלבד, לעולם אינן מועברות ל-MICRORETAILX LLC או לצד שלישי ונשארות במכשיר עד שהמבקר מסיר אותן.

• mx_consent — שומר את בחירות העוגיות של המבקר, יחד עם גרסת ההיקף, גרסת המדיניות וחותמת הזמן של ההחלטה. מטרה: לכבד את הבחירה ולתעד מתי ובאיזו גרסה של מדיניות זו ניתנה.
• mx_lang — שומר את שפת התצוגה שבחר המבקר. מטרה: לשמור אותה שפה בין עמודים וביקורים.
• mx_a11y — שומר העדפות נגישות כגון גודל טקסט, ניגודיות וגופן קריא. מטרה: לשמר את הגדרות הקריאה שנבחרו.
• mx_reader_immersive — שומר האם מצב קריאה immersive פעיל. מטרה: לשמר את פריסת הקריאה שנבחרה.

רשומות אלה אינן מכילות מזהים, מידע אישי או מידע התנהגותי. ניתן להסירן בכל עת מהגדרות הדפדפן או באמצעות בקרת העדפות העוגיות הזמינה בתחתית כל עמוד.

4. אין אנליטיקה; אין שיווק; אין מעקב

האתר אינו מיישם:
• כלי אנליטיקה או מדידת קהל
• עוגיות שיווק או פרסום
• מערכות התאמה אישית או המלצה
• מנגנוני מעקב בין אתרים או בין שירותים

MICRORETAILX LLC אינה מבצעת קבלת החלטות אוטומטית או פרופיילינג המבוססים על הגישה לאתר.

5. טכנולוגיות אופציונליות והסכמה

עוגיות אופציונליות או טכנולוגיות דומות אינן מופעלות כברירת מחדל.

אם טכנולוגיות אופציונליות יוכנסו בעתיד, הן יופעלו רק:
• לאחר הסכמה מפורשת של המשתמש, וכן
• כאשר הסכמה כזו נדרשת לפי הדין החל.

כאשר רלוונטי, העדפות ההסכמה מנוהלות באמצעות ממשק ההסכמה של האתר.

6. מטא-נתונים טכניים ונתוני יומן

כמקובל בשירותי אינטרנט, מטא-נתונים טכניים מוגבלים עשויים להיות מעובדים באופן נלווה בעת גישה לאתר, כגון כתובות IP, כותרות בקשה, חותמות זמן או מידע ברמת הפרוטוקול.

מטא-נתונים אלה מעובדים אך ורק לצרכים טכניים ואבטחתיים, לרבות:
• הגנת תשתית ומניעת שימוש לרעה
• זיהוי וצמצום פעילות אוטומטית או זדונית
• הבטחת זמינות, שלמות וחוסן האתר

מטא-נתונים אלה אינם משמשים לזיהוי, פרופיילינג, אנליטיקה או שיווק ונשמרים רק למשך הזמן המינימלי הדרוש.

7. הקשר בינלאומי ותשתית

ניתן לגשת לאתר מכל העולם והוא נשען על תשתית טכנית מבוזרת.

כאשר מטא-נתונים טכניים מעובדים באמצעות מערכות מבוזרות גלובלית, העיבוד עשוי לכלול העברות מידע בינלאומיות.

העברות כאלה מבוצעות תחת אמצעי הגנה טכניים וארגוניים מתאימים ובמקרים המתאימים מסתמכות על מנגנוני העברת מידע בינלאומיים מוכרים.

8. אין מיקוד; אין כוונה תחומית

MICRORETAILX LLC אינה מכוונת באופן פעיל למשתמשים או לקהלים בתחום שיפוט מסוים.

עצם נגישות האתר מכל תחום שיפוט אינה מהווה מיקוד, התבססות, רישוי, הרשאה או פעילות מפוקחת באותו תחום שיפוט.

9. שינויים במדיניות עוגיות זו

MICRORETAILX LLC רשאית לעדכן מדיניות עוגיות זו מעת לעת. כל שינוי ייכנס לתוקף עם פרסומו באתר.

10. דין חל ושפה

מדיניות עוגיות זו כפופה לדיני מדינת דלאוור, ארצות הברית.

הגרסה באנגלית גוברת. התרגומים ניתנים לנוחות מידע בלבד ואין להם תוקף משפטי.

11. יצירת קשר

לפניות הקשורות לעוגיות, פרטיות או ציות:
legal@microretailx.com
`
    },

    legal: {
      title: "הודעה משפטית — MICRORETAILX",
      description: "זיהוי תאגידי ומידע משפטי עבור MICRORETAILX LLC.",
      body: `MICRORETAILX — הודעה משפטית

MICRORETAILX LLC (דלאוור, ארצות הברית)
MICRORETAILX GROUP – מסגרת פעילות גלובלית

עדכון אחרון: 01-01-2026
תאריך תחילה: 01-01-2026

משרד רשום וסוכן רשום:
Corporation Trust Center
1209 Orange Street
Wilmington, DE 19801
United States of America

1. מסגרת משפטית; היררכיית מסמכים; קשר למדיניות אחרות

הודעה משפטית זו מהווה חלק מהמסגרת המשפטית המסדירה את הגישה לאתר ואת השימוש בו.

מסמכים נוספים עשויים לחול בהתאם לאופי האינטראקציה של המבקר עם האתר, ובהם:
• תנאי שימוש
• מדיניות פרטיות
• מדיניות עוגיות (וכל הגדרת העדפות עוגיות / CMP המוצגת באתר)

במקרה של סתירה בין מסמכים יחול סדר הקדימות הבא:
(i) הודעה משפטית זו, (ii) תנאי השימוש, (iii) מדיניות הפרטיות ו-(iv) מדיניות העוגיות, אלא אם דין קוגנטי מחייב אחרת בנושא מסוים.

אם הוראה כלשהי בהודעה משפטית זו תימצא בלתי תקפה או בלתי אכיפה, יתר ההוראות יישארו בתוקף מלא.

MICRORETAILX LLC רשאית לעיין, לעדכן ולשפר מסגרת משפטית זו מעת לעת כדי לשקף תקנים רגולטוריים מתפתחים, הנחיות פיקוח, נהלי אבטחה ושינויים תפעוליים.

2. זיהוי מפעיל האתר

אתר זה ("האתר") מופעל ונשלט באופן בלעדי על ידי MICRORETAILX LLC, חברה בערבון מוגבל שהתאגדה כדין ופועלת לפי דיני מדינת דלאוור, ארצות הברית.

כל התייחסות ל-"MICRORETAILX GROUP", "group", "network", "ecosystem", "labs", "nodes", "regions" או מונחים דומים היא תיאורית ורעיונית בלבד ואינה מרמזת על קיומה של ישות משפטית נפרדת, סניף, חברה בת, שותפות, מיזם משותף, שליחות או מוסד קבע, אלא אם צוין אחרת במפורש בהסכם כתוב.

3. מטרת האתר

האתר מסופק למטרות מידע, רעיון ובחינה בלבד.

הוא אינו מהווה ולא יפורש כ:
• הצעה או שידול למוצרים או לשירותים
• הצעת השקעה, קידום פיננסי או תקשורת מפוקחת
• ייעוץ משפטי, מס, פיננסי או מקצועי
• פעילות מפוקחת או מורשית בכל תחום שיפוט

האתר אינו מאפשר עסקאות, הרשמות, חשבונות משתמשים או מתן שירותים.

4. אין הסתמכות; אין ייעוץ

כל התוכן המונגש באתר מסופק למטרות מידע כללי בלבד.

MICRORETAILX LLC אינה מציגה מצגים או התחייבויות בנוגע לדיוק, לשלמות או להתאמת התוכן למטרה מסוימת. כל הסתמכות על תוכן האתר היא על אחריות המבקר בלבד.

5. קניין רוחני

אלא אם צוין אחרת במפורש, כל התוכן באתר, לרבות טקסט, גרפיקה, עיצוב, פריסה, קוד מקור, סימולציות, המחשות, מודלים ותיעוד, הוא קניינה הבלעדי של MICRORETAILX LLC.

תוכן זה מוגן לפי דיני קניין רוחני, זכויות יוצרים וסודות מסחריים החלים ברחבי העולם.

אין להעתיק, לשכפל, להפיץ, לשנות או לנצל תוכן ללא אישור מוקדם בכתב מאת MICRORETAILX LLC, למעט כאשר דין קוגנטי מתיר זאת.

6. שימוש מקובל

מבקרים מסכימים שלא:
• לעשות שימוש לרעה באתר או להפריע לאתר או לתשתית שלו
• לנסות גישה בלתי מורשית או לעקוף אמצעי אבטחה
• לבצע scraping, הנדסה לאחור או חילוץ אוטומטי
• להשתמש באתר למטרות בלתי חוקיות או אסורות

MICRORETAILX LLC שומרת לעצמה את הזכות לנקוט אמצעים טכניים, משפטיים וארגוניים מתאימים להגנת האתר ושלמותו.

7. קישורים לצדדים שלישיים

האתר עשוי לכלול קישורים לאתרים או לשירותים של צדדים שלישיים.

MICRORETAILX LLC אינה נושאת באחריות לתוכן, לזמינות, לאבטחה או לפרקטיקות של צדדים שלישיים. הגישה למשאבי צד שלישי היא על אחריות המבקר בלבד.

8. זמינות וכתב ויתור

האתר מסופק על בסיס "כמות שהוא" ו"כפי שזמין".

MICRORETAILX LLC אינה מתחייבת שהאתר יפעל ללא הפרעה, ללא שגיאות או ללא פגיעויות. במידה המרבית המותרת לפי הדין החל, כל אחריות מפורשת או משתמעת נשללת.

9. הגבלת אחריות

במידה המרבית המותרת לפי הדין החל, MICRORETAILX LLC לא תישא באחריות לנזק ישיר, עקיף, מקרי, תוצאתי או מיוחד הנובע מהשימוש באתר או מאי-היכולת להשתמש בו או הקשור לכך.

10. אין מיקוד; אין פרופיילינג כברירת מחדל; אין התבססות

MICRORETAILX LLC אינה מכוונת באופן פעיל למשתמשים או לקהלים בתחום שיפוט מסוים.

עצם נגישות האתר מתחום שיפוט מסוים אינה מהווה מיקוד, התבססות, רישוי, הרשאה או פעילות מפוקחת באותו תחום שיפוט.

אלא אם נחשף במפורש בשכבת המדיניות החלה, ובמקרים הנדרשים הופעל על ידי המבקר באמצעות הגדרה מפורשת או מנגנון הסכמה, MICRORETAILX LLC אינה עוסקת ב:
• פרסום התנהגותי או מיקוד שיווקי
• פרופיילינג משתמשים למטרות פרסום
• קבלת החלטות אוטומטית המייצרת השפעות משפטיות או השפעות משמעותיות דומות

11. דין חל וסמכות שיפוט

הודעה משפטית זו כפופה לדיני מדינת דלאוור, ארצות הברית.

כל מחלוקת הנובעת מהאתר או מהודעה משפטית זו או הקשורה אליהם תהיה כפופה לסמכות השיפוט הבלעדית של בתי המשפט המדינתיים או הפדרליים במדינת דלאוור, מבלי לגרוע מכללי הגנת צרכן קוגנטיים העשויים לחול בתחום שיפוט מסוים.

12. שפה

הגרסה באנגלית של הודעה משפטית זו גוברת. כל תרגום ניתן לנוחות מידע בלבד ואין לו תוקף משפטי.

13. יצירת קשר

לפניות משפטיות או בנושאי ציות:
legal@microretailx.com
`
    }
  });


  register("de", {
    "nav.about": "Info",
    "nav.home": "Start",
    "nav.verticals": "Bereiche",
    "nav.contact": "Kontakt",
    "footer.terms": "Bedingungen",
    "footer.privacy": "Datenschutz",
    "footer.cookies": "Cookies",
    "footer.legal": "Rechtliches",
    "cookie.prefs": "Cookie-Einstellungen",
    "reader.toggle": "Lesemodus",
    "cmp.title": "Datenschutz & Cookies",
    "cmp.desc": "Wir respektieren Ihre Privatsphäre. Diese Website verwendet keine Werbe- oder Tracking-Cookies. Notwendige Cookies sind für Sicherheit und Grundfunktionen immer aktiv. Optionale Cookies können akzeptiert oder abgelehnt werden.",
    "cmp.necessary": "Notwendig",
    "cmp.necessary.desc": "Sicherheit und Grundfunktionen.",
    "cmp.analytics": "Analyse",
    "cmp.analytics.desc": "Optional: anonyme Nutzungsdaten zur Verbesserung der Website.",
    "cmp.marketing": "Marketing",
    "cmp.marketing.desc": "Optional: Personalisierung und Kampagnenmessung.",
    "cmp.noproviders": "Keine aktiven Anbieter",
    "cmp.reject": "Alle ablehnen",
    "cmp.accept": "Alle akzeptieren",
    "cmp.save": "Einstellungen speichern"
  }, {
    terms: {
      title: "Globale Nutzungsbedingungen — MICRORETAILX",
      description: "Globale Nutzungsbedingungen und rechtlicher Rahmen von MICRORETAILX.",
      body: `MICRORETAILX – GLOBALE NUTZUNGSBEDINGUNGEN

MICRORETAILX LLC (Delaware, Vereinigte Staaten)
MICRORETAILX GROUP – Globaler Betriebsrahmen

Letzte Aktualisierung: 01-01-2026
Gültig ab: 01-01-2026

Eingetragener Sitz und Registered Agent:
Corporation Trust Center
1209 Orange Street
Wilmington, DE 19801
United States of America

1. DEFINITIONEN

• „MICRORETAILX“, „wir“, „uns“, „unser“ bezeichnet MICRORETAILX LLC, eine nach dem Recht des US-Bundesstaats Delaware ordnungsgemäß gegründete und bestehende Limited Liability Company.
• „Website“ bezeichnet diese Website sowie alle damit verbundenen Seiten, Subdomains, Schnittstellen, interaktiven Elemente, Quellcodes, Visualisierungen und Inhalte, die über sie bereitgestellt werden.
• „MICRORETAILX GROUP“ bezeichnet einen konzeptionellen und strategischen Rahmen zur Beschreibung gegenwärtiger und/oder künftiger Initiativen und stellt keine eigenständige juristische Person dar, sofern dies nicht ausdrücklich schriftlich festgelegt ist.
• „Verticals“ bezeichnet Themenbereiche, die ausschließlich als konzeptioneller und strategischer Klassifizierungsrahmen dienen.
• „Inhalte“ umfassen sämtliche Texte, Grafiken, Designs, Quellcodes, Visualisierungen, Simulationen, Modelle, Arbeitsabläufe und Dokumentationen.
• „Einreichungen“ bezeichnet Kommentare, Ideen, Vorschläge oder Materialien, die von Ihnen übermittelt werden.

2. BETREIBER, GELTUNGSBEREICH UND ANNAHME

Diese Bedingungen regeln Ihren Zugriff auf die Website und deren Nutzung. Durch den Zugriff oder die Nutzung bestätigen Sie, dass Sie diese Bedingungen gelesen und verstanden haben, ihnen rechtsverbindlich zustimmen und über die hierfür erforderliche Rechtsfähigkeit verfügen.

3. IDENTITÄT DES BETREIBERS, RECHTSANSCHRIFT UND MITTEILUNGEN

Diese Website wird ausschließlich von MICRORETAILX LLC, einer Limited Liability Company nach dem Recht von Delaware, betrieben und kontrolliert.

Registered Agent: Corporation Trust Center, 1209 Orange Street, Wilmington, DE 19801, USA.

Rechtliche Mitteilungen und Compliance-Kommunikation sind an legal@microretailx.com zu senden.

Verweise auf „nodes“, „labs“, „regions“ oder „verticals“ sind nicht so auszulegen, dass dadurch außerhalb des Staates Delaware eine Niederlassung, Geschäftsstelle, Tochtergesellschaft, Vertretung oder steuerliche Anknüpfung entsteht.

4. GLOBALES BETRIEBSMODELL; KEINE PARTNERSCHAFT; KEINE VERTRETUNG

MICRORETAILX ist global über konzeptionelle, explorative und strategische Initiativen tätig. Sofern nicht ausdrücklich in einem von MICRORETAILX LLC unterzeichneten schriftlichen Vertrag vereinbart:

(i) begründet nichts auf der Website eine Partnerschaft, ein Joint Venture, ein Arbeits- oder Vertretungsverhältnis;

(ii) ist keine Partei berechtigt, MICRORETAILX LLC rechtlich zu binden;

(iii) haben beschreibende Begriffe wie „group“, „network“ oder „ecosystem“ keine eigenständige rechtliche Bedeutung.

Die Nutzung der Website begründet keine Betriebsstätte oder vergleichbare steuerpflichtige Präsenz in irgendeiner Rechtsordnung.

5. STATUS DER WEBSITE; KEIN ANGEBOT; KEINE VERPFLICHTUNG

Die Website wird ausschließlich zu Informations-, Konzept- und Explorationszwecken bereitgestellt. Nichts auf der Website stellt in irgendeiner Rechtsordnung ein Angebot, eine Aufforderung, einen Investitionsvorschlag, einen Anreiz oder eine regulierte Tätigkeit dar.

6. VERTICAL-RAHMEN (KONZEPTIONELL UND NICHT OPERATIV)

Verweise auf Verticals stellen ausschließlich einen konzeptionellen Rahmen dar und implizieren nicht das Bestehen operativer Geschäftsbereiche, Produkte, Dienstleistungen, lizenzierter Tätigkeiten oder regulierter Geschäftsvorgänge.

7. ZERO-DATA-STRATEGIE (PRIVACY BY DESIGN)

Die Website ist nach einer Zero-Data-Strategie konzipiert: keine Benutzerkonten, kein Profiling und keine standardmäßig aktivierten Tracking-Technologien Dritter, außer soweit dies durch übliche Internetprotokolle technisch unvermeidbar oder nach geltendem Recht erforderlich ist.

8. COOKIES UND EINWILLIGUNG

Standardmäßig werden nur technisch unbedingt erforderliche Cookies oder gleichwertige technische Kennungen eingesetzt. Optionale Technologien werden nur nach ausdrücklicher Einwilligung des Nutzers aktiviert, soweit dies rechtlich erforderlich ist.

Unbedingt erforderliche Cookies und/oder technische Kennungen können durch Content Delivery Networks, Hosting-Anbieter und Sicherheitsschichten ausschließlich zu Zwecken des Lastenausgleichs, der Missbrauchsprävention, Bot-Abwehr und sicheren Inhaltsbereitstellung gesetzt werden.

9. HOSTING, BEREITSTELLUNG UND SICHERHEIT

Die Website wird auf Infrastruktur Dritter gehostet. Begrenzte technische Protokolle und Metadaten können ausschließlich zu Sicherheits-, Integritäts-, Missbrauchspräventions- und zuverlässigen Bereitstellungszwecken verarbeitet werden.

Eine solche Verarbeitung ändert den informativen Charakter der Website nicht und stellt weder eine kommerzielle Tätigkeit noch Profiling oder rechtsordnungsspezifisches Targeting dar.

Die bloße Zugänglichkeit der Website begründet keine kommerzielle Tätigkeit, kein Targeting und keine regulierte Präsenz in einer Rechtsordnung.

10. GLOBALER DATENSCHUTZ UND REGULATORISCHE COMPLIANCE

MICRORETAILX LLC gestaltet und betreibt diese Website im Einklang mit international anerkannten Datenschutzgrundsätzen, darunter Privacy by Design, Datenminimierung, Zweckbindung, Transparenz, Sicherheit und Rechenschaftspflicht.

Die Website ist in erster Linie informativ und konzeptionell. Sie bietet keine Benutzerkonten, verlangt keine Registrierung und führt kein Profiling, kein verhaltensbezogenes Tracking und keine werbebezogene Datenverarbeitung durch.

Die Inhaltsbereitstellung und der technische Betrieb stützen sich auf weltweit verteilte Infrastrukturanbieter. Soweit technische Metadaten wie IP-Adressen oder Verbindungsdaten beiläufig verarbeitet werden, ist diese Verarbeitung strikt auf das für Sicherheit, Integrität, Missbrauchsprävention und zuverlässige Inhaltsbereitstellung Erforderliche beschränkt.

Eine solche Verarbeitung erfolgt unter geeigneten vertraglichen, technischen und organisatorischen Schutzmaßnahmen, einschließlich Datenverarbeitungsvereinbarungen und anerkannter internationaler Übermittlungsmechanismen, soweit anwendbar. Gegebenenfalls werden Standardvertragsklauseln (SCCs) oder gleichwertige rechtmäßige internationale Datenübermittlungsmechanismen verwendet. MICRORETAILX LLC erhebt, speichert oder verwertet personenbezogene Daten nicht absichtlich zu kommerziellen, Profiling- oder Marketingzwecken.

Dieser Ansatz soll mit den Grundsätzen wesentlicher globaler Datenschutzrahmen in verschiedenen Rechtsordnungen im Einklang stehen.

Die bloße Zugänglichkeit der Website aus einer bestimmten Rechtsordnung stellt für sich genommen kein Targeting, keine Niederlassung, Lizenzierung, Genehmigung oder regulierte Tätigkeit in dieser Rechtsordnung dar.

MICRORETAILX LLC richtet sich nicht aktiv an Nutzer, Kunden, Investoren, Regulierungsbehörden oder sonstige Behörden in einer bestimmten Rechtsordnung.

11. ZULÄSSIGE NUTZUNG; VERBOTENES VERHALTEN

Sie dürfen kein Data Scraping, Reverse Engineering, Extrahieren von Algorithmen, Training von KI-Modellen, Eingriffe in die Infrastruktur oder sonstigen Missbrauch der Website vornehmen, soweit dies nicht ausdrücklich durch zwingendes Recht gestattet ist.

12. BEWEISSICHERUNG UND DURCHSETZUNG

MICRORETAILX LLC behält sich das Recht vor, technische, organisatorische und rechtliche Maßnahmen zum Schutz der Website und zur Sicherung von Beweisen für Missbrauch oder rechtswidrige Aktivitäten zu ergreifen.

13. GEISTIGES EIGENTUM; GESCHÄFTSGEHEIMNISSE

Sämtliche Rechte, Titel und Ansprüche an der Website und ihren Inhalten stehen ausschließlich MICRORETAILX LLC zu und sind weltweit durch anwendbare Gesetze zum geistigen Eigentum und zu Geschäftsgeheimnissen geschützt.

14. VERTRAULICHKEIT NICHT ÖFFENTLICHER MATERIALIEN

Nicht öffentliche oder zugangsbeschränkte Materialien dürfen ohne vorherige schriftliche Genehmigung von MICRORETAILX LLC weder offengelegt, verbreitet noch vervielfältigt werden.

15. EINREICHUNGEN UND FEEDBACK

Mit der Übermittlung von Materialien gewähren Sie MICRORETAILX LLC eine weltweite, gebührenfreie, nicht ausschließliche und unbefristete Lizenz, diese Einreichungen für legitime Geschäftszwecke zu verwenden, zu vervielfältigen, anzupassen und zu integrieren.

Diese Lizenz gilt nur für unaufgefordert übermittelte Inhalte und ersetzt, beschränkt oder überschreibt keine gesonderte schriftliche Vereinbarung mit MICRORETAILX LLC.

16. DIGITAL MILLENNIUM COPYRIGHT ACT (DMCA) SAFE HARBOR

MICRORETAILX LLC respektiert geistige Eigentumsrechte und erwartet dies auch von Nutzern. Gemäß dem Digital Millennium Copyright Act (17 U.S.C. § 512) gilt für Meldungen mutmaßlicher Urheberrechtsverletzungen folgendes Verfahren:

• Mitteilung. Wenn Sie der Ansicht sind, dass auf der Website verfügbare Inhalte oder Einreichungen Ihr Urheberrecht verletzen, können Sie unserem benannten Ansprechpartner unter legal@microretailx.com eine schriftliche Mitteilung senden. Damit diese wirksam ist, muss sie im Wesentlichen den Anforderungen von 17 U.S.C. § 512(c)(3) entsprechen, einschließlich: (i) physischer oder elektronischer Unterschrift des Rechteinhabers oder seines bevollmächtigten Vertreters; (ii) Identifizierung des urheberrechtlich geschützten Werks; (iii) Identifizierung des mutmaßlich rechtsverletzenden Materials und seines Fundorts; (iv) Kontaktdaten der beschwerdeführenden Partei; und (v) Erklärung in gutem Glauben, dass die Nutzung nicht autorisiert ist.

• Entfernung. Nach Eingang einer gültigen Mitteilung behält sich MICRORETAILX LLC vor, das mutmaßlich rechtsverletzende Material nach eigenem Ermessen und ohne vorherige Ankündigung zu entfernen oder den Zugriff darauf zu sperren.

• Gegendarstellung. Soweit anwendbar, kann eine Gegendarstellung gemäß DMCA eingereicht werden. MICRORETAILX LLC kann das Material wiederherstellen, wenn dies gesetzlich erforderlich ist.

• Beschränkung. Dieses Verfahren gilt ausschließlich für urheberrechtliche Angelegenheiten nach dem DMCA. Für andere rechtliche, regulatorische oder Compliance-Anfragen gilt der allgemeine Kontaktabschnitt dieser Bedingungen.

17. EXTERNE LINKS; DIENSTE DRITTER

Die Website kann Links zu Diensten Dritter enthalten. MICRORETAILX LLC übernimmt keine Verantwortung für Inhalte, Praktiken oder Richtlinien Dritter. Der Zugriff erfolgt auf eigenes Risiko.

18. HAFTUNGSAUSSCHLÜSSE; KEIN VERTRAUEN

Die Website bietet keine Rechts-, Steuer-, Finanz- oder sonstige professionelle Beratung.

Nichts auf der Website ist als regulatorische Anleitung, Compliance-Zusage oder Gewährleistung der Konformität mit einem bestimmten lokalen Rechts- oder Regulierungsregime auszulegen.

Zukunftsgerichtete Aussagen sind naturgemäß unsicher und garantieren keine zukünftigen Ergebnisse.

19. VERFÜGBARKEIT; „AS IS“

Die Website wird „wie besehen“ und „wie verfügbar“ ohne ausdrückliche oder stillschweigende Gewährleistungen jeglicher Art bereitgestellt.

20. HAFTUNGSBESCHRÄNKUNG

Soweit gesetzlich zulässig, haftet MICRORETAILX LLC nicht für direkte oder indirekte Schäden, die aus der Nutzung der Website entstehen.

21. FREISTELLUNG

Sie verpflichten sich, MICRORETAILX LLC von Ansprüchen, Haftungen, Schäden oder Aufwendungen freizustellen, die aus Ihrer rechtswidrigen Nutzung der Website oder einem Verstoß gegen diese Bedingungen entstehen.

22. COMPLIANCE; EXPORTKONTROLLEN; SANKTIONEN

Sie verpflichten sich zur Einhaltung anwendbarer Exportkontroll- und Sanktionsgesetze, einschließlich der US Export Administration Regulations (EAR) und der Regelungen des Office of Foreign Assets Control (OFAC) sowie, soweit anwendbar, einschlägiger Sanktionsrahmen der Vereinten Nationen, der Europäischen Union oder anderer internationaler Organisationen.

23. ELEKTRONISCHE KOMMUNIKATION; MITTEILUNGEN

Alle rechtlichen Mitteilungen und Kommunikationen sind an legal@microretailx.com zu senden.

24. ÄNDERUNGEN DIESER BEDINGUNGEN

MICRORETAILX LLC kann diese Bedingungen jederzeit ändern. Die weitere Nutzung der Website gilt als Annahme der geänderten Bedingungen.

25. ANWENDBARES RECHT; AUSSCHLIESSLICHER GERICHTSSTAND; SPRACHE

Diese Bedingungen unterliegen dem Recht des Staates Delaware, Vereinigte Staaten. Streitigkeiten unterliegen der ausschließlichen Zuständigkeit der staatlichen oder bundesstaatlichen Gerichte in Delaware.

Die englische Fassung ist maßgeblich; Übersetzungen werden nur zur Information und Bequemlichkeit bereitgestellt.

26. SALVATORISCHE KLAUSEL; GESAMTE VEREINBARUNG

Sollte eine Bestimmung unwirksam oder nicht durchsetzbar sein, bleiben die übrigen Bestimmungen vollständig wirksam. Diese Bedingungen bilden die gesamte Vereinbarung über die Nutzung der Website.

27. KONTAKT

Rechtliche und Compliance-Kommunikation: legal@microretailx.com
`
    },

    privacy: {
      title: "Datenschutzerklärung — MICRORETAILX",
      description: "Globale Datenschutzerklärung und Datenschutzrahmen von MICRORETAILX.",
      body: `MICRORETAILX — DATENSCHUTZERKLÄRUNG

MICRORETAILX LLC (Delaware, Vereinigte Staaten)
MICRORETAILX GROUP – Globaler Betriebsrahmen

Letzte Aktualisierung: 01-01-2026
Gültig ab: 01-01-2026

Eingetragener Sitz und Registered Agent:
Corporation Trust Center
1209 Orange Street
Wilmington, DE 19801
United States of America

1. GELTUNGSBEREICH UND ZWECK

Diese Datenschutzerklärung beschreibt, wie MICRORETAILX LLC („MICRORETAILX“, „wir“, „uns“, „unser“) diese Website aus Sicht von Datenschutz und Privatsphäre gestaltet und betreibt.

Die Website ist ausschließlich informativer und konzeptioneller Natur. Sie bietet keine Benutzerkonten, verlangt keine Registrierung und bietet keine Produkte oder Dienstleistungen zum Verkauf an.

2. ZERO-DATA-STRATEGIE (PRIVACY BY DESIGN)

Diese Website ist bewusst als Zero-Data-Umgebung konzipiert.

MICRORETAILX LLC erhebt, fordert, verlangt, speichert, monetarisiert oder verwertet nicht absichtlich personenbezogene Daten von Besuchern. Es werden keine Nutzerprofile, Kennungen oder verhaltensbezogenen Datensätze erstellt.

Datenschutzgrundsätze sind bereits durch Gestaltung und Standardeinstellungen integriert, darunter Datenminimierung, Zweckbindung, Transparenz, Sicherheit und Rechenschaftspflicht.

3. KEINE BENUTZERKONTEN; KEINE REGISTRIERUNG

Die Website bietet keine Benutzerkonten, Login-Bereiche, Registrierungsformulare oder Mitgliedschaftssysteme.

Besucher müssen keine personenbezogenen Daten übermitteln, um auf die Inhalte der Website zuzugreifen.

4. KEIN PROFILING; KEIN TRACKING; KEINE WERBUNG

Die Website verwendet keine:

• verhaltens- oder interessenbasierte Profilbildung
• Werbe- oder Marketingtechnologien
• Analyseplattformen oder Reichweitenmessung
• website- oder dienstübergreifende Trackingmechanismen

MICRORETAILX LLC führt keine automatisierte Entscheidungsfindung, Profilbildung oder Verhaltensanalyse von Besuchern durch.

5. TECHNISCHE METADATEN UND PROTOKOLLDATEN

Wie bei den meisten Internetdiensten können beim Zugriff auf die Website beiläufig begrenzte technische Metadaten verarbeitet werden, etwa IP-Adressen, Request-Header, Zeitstempel oder Informationen auf Protokollebene.

Diese Metadaten werden ausschließlich zu technischen und Sicherheitszwecken verarbeitet, insbesondere:

• sichere und zuverlässige Inhaltsbereitstellung
• Schutz vor Missbrauch, automatisiertem Zugriff und Angriffen
• Aufrechterhaltung von Netzwerkintegrität und Verfügbarkeit

Diese Metadaten werden nicht zur Identifizierung, Profilbildung, für Marketing oder Analysen verwendet und nur so lange gespeichert, wie dies unbedingt erforderlich ist.

6. INFRASTRUKTURANBIETER DRITTER

Die Website wird über Infrastruktur Dritter bereitgestellt, darunter Content Delivery Networks (CDNs), DNS-Dienste und Plattformen für statisches Hosting wie Cloudflare, Inc. und GitHub, Inc.

Diese Anbieter können begrenzte technische Metadaten ausschließlich verarbeiten, um im Auftrag von MICRORETAILX LLC Infrastruktur-, Sicherheits- und Bereitstellungsfunktionen auszuführen.

MICRORETAILX LLC aktiviert keine von solchen Anbietern angebotenen Analyse-, Tracking-, Werbe- oder Verhaltensüberwachungsfunktionen.

7. INTERNATIONALE DATENÜBERMITTLUNGEN

Soweit technische Metadaten über weltweit verteilte Infrastruktur verarbeitet werden, kann dies internationale Datenübermittlungen umfassen.

Solche Übermittlungen erfolgen unter geeigneten technischen und organisatorischen Schutzmaßnahmen und stützen sich, soweit anwendbar, auf anerkannte internationale Übermittlungsmechanismen wie Standardvertragsklauseln (SCCs) oder gleichwertige rechtmäßige Rahmenwerke.

MICRORETAILX LLC nutzt internationale Übermittlungen nicht zur kommerziellen Verwertung personenbezogener Daten.

8. COOKIES, TECHNISCHE KENNUNGEN UND INFRASTRUKTURSICHERHEIT

Standardmäßig verwendet diese Website keine Marketing-, Werbe-, Analyse-, Targeting- oder verhaltensbezogenen Tracking-Cookies.

Technischer Hinweis. Die Website stützt sich ausschließlich auf technisch unbedingt erforderliche Kennungen für Kerninfrastruktur und Sicherheitsvorgänge. Dazu können Kennungen gehören, die durch Content Delivery Networks (CDNs), DNS-Anbieter, Hosting-Plattformen und Sicherheitsschichten gesetzt oder verarbeitet werden.

Diese Kennungen werden ausschließlich für folgende Zwecke verwendet:

• Sicherheit und Missbrauchsprävention: Betrieb von Web Application Firewalls (WAF), Bot-Abwehrsystemen, Rate Limiting und Schutzmaßnahmen auf Netzwerkebene zur Abwehr unbefugter Zugriffe, automatisierten Missbrauchs und Denial-of-Service-Angriffen.

• Inhaltsbereitstellung und Verfügbarkeit: sichere und effiziente Bereitstellung von Inhalten über globale CDNs, Load Balancer und verteilte Infrastruktur zur Gewährleistung von Leistung, Ausfallsicherheit und Verfügbarkeit.

Diese technischen Kennungen ermöglichen kein Nutzerprofiling, keine Verhaltensüberwachung, keine Werbung und keine Marketingaktivitäten und werden nicht verwendet, um Personen über Websites oder Dienste hinweg zu identifizieren oder zu verfolgen.

Soweit technische Metadaten wie IP-Adressen oder Request-Header verarbeitet werden, erfolgt dies ausschließlich zu Sicherheits-, Integritäts- und Betriebszwecken und nur für die erforderliche Mindestdauer.

Solche Kennungen sind nach anwendbaren Datenschutz- und ePrivacy-Rahmenwerken grundsätzlich von Einwilligungspflichten ausgenommen, da sie für Bereitstellung, Sicherheit und ordnungsgemäße Funktion der Website unbedingt erforderlich sind.

9. RECHTE BETROFFENER PERSONEN

Aufgrund der Art der Website und des Fehlens einer beabsichtigten Erhebung personenbezogener Daten sind viele Betroffenenrechte praktisch möglicherweise nicht einschlägig.

Soweit nach geltendem Recht erforderlich, können sich Personen an MICRORETAILX LLC wenden, um sich nach möglicher Datenverarbeitung im Zusammenhang mit technischen Zugriffsprotokollen zu erkundigen.

Anfragen können an legal@microretailx.com gerichtet werden.

MICRORETAILX LLC behält sich das Recht vor, Anfragen zu verifizieren und Antworten soweit gesetzlich zulässig zu beschränken.

10. DATENSICHERHEIT

MICRORETAILX LLC setzt geeignete technische und organisatorische Maßnahmen ein, um Website und Infrastruktur vor unbefugtem Zugriff, Missbrauch, Veränderung oder Zerstörung zu schützen.

Zu den Sicherheitsmaßnahmen gehören unter anderem Transportverschlüsselung, strenge Security Header, Zugriffskontrollen und Schutzmaßnahmen auf Netzwerkebene.

11. SECURITY-BY-DESIGN-ERKLÄRUNG

Diese Website ist bewusst mit einer Security-first- und Privacy-by-Design-Architektur entwickelt. Die technische Gestaltung soll die Datenexposition minimieren, die Angriffsfläche reduzieren und unnötige Datenverarbeitung verhindern, sodass Nutzer standardmäßig geschützt werden und nicht erst durch nachgelagerte Kontrollen oder Einwilligungsmechanismen.

Sicherheitsmaßnahmen sind Teil der Kerninfrastruktur und des Betriebsmodells der Website und keine optionalen Funktionen.

12. KEIN TARGETING; KEINE NIEDERLASSUNG

MICRORETAILX LLC richtet sich nicht aktiv an Nutzer, Kunden, Investoren oder Behörden in einer bestimmten Rechtsordnung.

Die bloße Zugänglichkeit der Website aus einer Rechtsordnung stellt kein Targeting, keine Niederlassung, Lizenzierung, Genehmigung oder regulierte Tätigkeit in dieser Rechtsordnung dar.

13. DATENSCHUTZ VON KINDERN

Die Website richtet sich nicht an Kinder und MICRORETAILX LLC erhebt wissentlich keine personenbezogenen Daten von Minderjährigen.

14. ÄNDERUNGEN DIESER DATENSCHUTZERKLÄRUNG

MICRORETAILX LLC kann diese Datenschutzerklärung von Zeit zu Zeit aktualisieren. Änderungen werden mit ihrer Veröffentlichung auf der Website wirksam.

15. ANWENDBARES RECHT UND SPRACHE

Diese Datenschutzerklärung unterliegt dem Recht des Staates Delaware, Vereinigte Staaten.

Die englische Fassung ist maßgeblich. Übersetzungen werden nur zur Information bereitgestellt und haben keine vertragliche oder rechtliche Wirkung.

16. KONTAKT

Für Fragen zu Datenschutz, Recht oder Compliance:
legal@microretailx.com
`
    },

    cookies: {
      title: "Cookie-Richtlinie — MICRORETAILX",
      description: "Globale Cookie-Richtlinie und technischer Rahmen von MICRORETAILX.",
      body: `MICRORETAILX — COOKIE-RICHTLINIE

MICRORETAILX LLC (Delaware, Vereinigte Staaten)
MICRORETAILX GROUP – Globaler Betriebsrahmen

Letzte Aktualisierung: 21-08-2026
Gültig ab: 01-01-2026

Eingetragener Sitz und Registered Agent:
Corporation Trust Center
1209 Orange Street
Wilmington, DE 19801
United States of America

1. GELTUNGSBEREICH UND ZWECK

Diese Cookie-Richtlinie erläutert, wie Cookies und ähnliche technische Kennungen im Zusammenhang mit dieser von MICRORETAILX LLC („MICRORETAILX“, „wir“, „uns“, „unser“) betriebenen Website verwendet werden können.

Die Website ist ausschließlich informativer und konzeptioneller Natur und ist zusammen mit der Datenschutzerklärung und den globalen Nutzungsbedingungen zu lesen, die gemeinsam den rechtlichen Rahmen der Website bilden.

2. ZERO-DATA-STRATEGIE

Diese Website ist bewusst nach einer Zero-Data-Strategie konzipiert und betrieben.

MICRORETAILX LLC verwendet Cookies oder ähnliche Technologien nicht, um:
• einzelne Nutzer zu identifizieren
• Nutzerprofile zu erstellen
• verhaltens- oder interessenbasiertes Tracking durchzuführen
• Werbung oder Marketing auszuliefern
• personenbezogene Daten zu monetarisieren

Die Website bietet keine Benutzerkonten, Registrierungssysteme oder interaktiven Dienste, die personenbezogene Daten erfordern.

3. UNBEDINGT ERFORDERLICHE COOKIES UND TECHNISCHE KENNUNGEN

Standardmäßig stützt sich die Website ausschließlich auf unbedingt erforderliche Cookies und/oder gleichwertige technische Kennungen, die für Kerninfrastruktur, Sicherheit und Verfügbarkeit erforderlich sind.

Solche Kennungen können gesetzt oder verarbeitet werden durch:
• Content Delivery Networks (CDNs)
• DNS- und Hosting-Anbieter
• Sicherheits-, Integritäts- und Verfügbarkeitsschichten

Diese Kennungen werden ausschließlich zu Zwecken eingesetzt wie:
• Lastenausgleich und Verteilung des Datenverkehrs
• Missbrauchsprävention und Rate Limiting
• Bot-Abwehr und Schutz vor automatisiertem Zugriff
• sichere und zuverlässige Inhaltsbereitstellung

Diese Cookies und Kennungen sind für das ordnungsgemäße Funktionieren der Website unerlässlich und können nicht deaktiviert werden, ohne Sicherheit oder Verfügbarkeit zu beeinträchtigen.

VON DIESER WEBSITE VERWENDETER LOCAL STORAGE

Zusätzlich zu unbedingt erforderlichen Cookies speichert die Website eine kleine Anzahl technischer Einstellungen direkt im lokalen Speicher des Browsers. Diese Einträge sind ausschließlich First-Party, werden niemals an MICRORETAILX LLC oder Dritte übermittelt und verbleiben auf dem Gerät, bis der Besucher sie entfernt.

• mx_consent — speichert die Cookie-Auswahl des Besuchers zusammen mit Scope-Version, Richtlinienversion und Zeitstempel der Entscheidung. Zweck: die Auswahl zu respektieren und nachzuweisen, wann und unter welcher Version dieser Richtlinie sie getroffen wurde.
• mx_lang — speichert die vom Besucher gewählte Anzeigesprache. Zweck: dieselbe Sprache über Seiten und Besuche hinweg beizubehalten.
• mx_a11y — speichert Barrierefreiheitseinstellungen wie Textgröße, Kontrast und lesefreundliche Schriftart. Zweck: die gewählten Leseeinstellungen zu erhalten.
• mx_reader_immersive — speichert, ob der immersive Lesemodus aktiv ist. Zweck: das gewählte Leselayout zu erhalten.

Diese Einträge enthalten keine Kennungen, personenbezogenen Daten oder Verhaltensinformationen. Sie können jederzeit über die Browsereinstellungen oder über die Cookie-Einstellungen im Footer jeder Seite entfernt werden.

4. KEINE ANALYSE; KEIN MARKETING; KEIN TRACKING

Die Website verwendet keine:
• Analyse- oder Reichweitenmessungswerkzeuge
• Marketing- oder Werbe-Cookies
• Personalisierungs- oder Empfehlungssysteme
• website- oder dienstübergreifende Trackingmechanismen

MICRORETAILX LLC führt keine automatisierte Entscheidungsfindung oder Profilbildung auf Grundlage des Websitezugriffs durch.

5. OPTIONALE TECHNOLOGIEN UND EINWILLIGUNG

Optionale Cookies oder ähnliche Technologien sind standardmäßig nicht aktiviert.

Sollten künftig optionale Technologien eingeführt werden, werden sie nur aktiviert:
• nach ausdrücklicher Einwilligung des Nutzers und
• soweit eine solche Einwilligung nach geltendem Recht erforderlich ist.

Soweit anwendbar, werden Einwilligungseinstellungen über die Consent-Oberfläche der Website verwaltet.

6. TECHNISCHE METADATEN UND PROTOKOLLDATEN

Wie bei Internetdiensten üblich, können beim Zugriff auf die Website beiläufig begrenzte technische Metadaten verarbeitet werden, etwa IP-Adressen, Request-Header, Zeitstempel oder Informationen auf Protokollebene.

Diese Metadaten werden ausschließlich zu technischen und Sicherheitszwecken verarbeitet, darunter:
• Schutz der Infrastruktur und Missbrauchsprävention
• Erkennung und Eindämmung automatisierter oder bösartiger Aktivitäten
• Gewährleistung von Verfügbarkeit, Integrität und Resilienz der Website

Diese Metadaten werden nicht zur Identifizierung, Profilbildung, Analyse oder für Marketingzwecke verwendet und nur für die erforderliche Mindestdauer gespeichert.

7. INTERNATIONALER KONTEXT UND INFRASTRUKTUR

Die Website ist weltweit zugänglich und stützt sich auf verteilte technische Infrastruktur.

Soweit technische Metadaten über global verteilte Systeme verarbeitet werden, kann dies internationale Datenübermittlungen umfassen.

Solche Übermittlungen erfolgen unter geeigneten technischen und organisatorischen Schutzmaßnahmen und stützen sich, soweit anwendbar, auf anerkannte internationale Übermittlungsmechanismen.

8. KEIN TARGETING; KEINE RECHTSORDNUNGSSPEZIFISCHE ABSICHT

MICRORETAILX LLC richtet sich nicht aktiv an Nutzer oder Zielgruppen in einer bestimmten Rechtsordnung.

Die bloße Zugänglichkeit der Website aus einer Rechtsordnung stellt kein Targeting, keine Niederlassung, Lizenzierung, Genehmigung oder regulierte Tätigkeit in dieser Rechtsordnung dar.

9. ÄNDERUNGEN DIESER COOKIE-RICHTLINIE

MICRORETAILX LLC kann diese Cookie-Richtlinie von Zeit zu Zeit aktualisieren. Änderungen werden mit Veröffentlichung auf der Website wirksam.

10. ANWENDBARES RECHT UND SPRACHE

Diese Cookie-Richtlinie unterliegt dem Recht des Staates Delaware, Vereinigte Staaten.

Die englische Fassung ist maßgeblich. Übersetzungen werden nur zur Information bereitgestellt und haben keine rechtliche Wirkung.

11. KONTAKT

Für Fragen zu Cookies, Datenschutz oder Compliance:
legal@microretailx.com
`
    },

    legal: {
      title: "Rechtlicher Hinweis — MICRORETAILX",
      description: "Unternehmensidentifikation und rechtliche Informationen zu MICRORETAILX LLC.",
      body: `MICRORETAILX — RECHTLICHER HINWEIS

MICRORETAILX LLC (Delaware, Vereinigte Staaten)
MICRORETAILX GROUP – Globaler Betriebsrahmen

Letzte Aktualisierung: 01-01-2026
Gültig ab: 01-01-2026

Eingetragener Sitz und Registered Agent:
Corporation Trust Center
1209 Orange Street
Wilmington, DE 19801
United States of America

1. RECHTLICHER RAHMEN; DOKUMENTENHIERARCHIE; VERHÄLTNIS ZU ANDEREN RICHTLINIEN

Dieser rechtliche Hinweis ist Bestandteil des rechtlichen Rahmens für Zugriff und Nutzung der Website.

Je nach Art der Interaktion des Besuchers mit der Website können zusätzliche Dokumente gelten, darunter:
• Nutzungsbedingungen
• Datenschutzerklärung
• Cookie-Richtlinie (einschließlich der auf der Website angezeigten Cookie-Einstellungen / CMP-Einstellungen)

Bei Widersprüchen zwischen Dokumenten gilt folgende Rangfolge:
(i) dieser rechtliche Hinweis, (ii) die Nutzungsbedingungen, (iii) die Datenschutzerklärung und (iv) die Cookie-Richtlinie, sofern zwingendes Recht für ein bestimmtes Thema nichts anderes verlangt.

Sollte eine Bestimmung dieses rechtlichen Hinweises unwirksam oder nicht durchsetzbar sein, bleiben die übrigen Bestimmungen vollständig in Kraft.

MICRORETAILX LLC kann diesen rechtlichen Rahmen von Zeit zu Zeit überprüfen, aktualisieren und verbessern, um sich entwickelnde regulatorische Standards, Aufsichtshinweise, Sicherheitspraktiken und betriebliche Änderungen widerzuspiegeln.

2. IDENTIFIZIERUNG DES WEBSITE-BETREIBERS

Diese Website („Website“) wird ausschließlich von MICRORETAILX LLC, einer nach dem Recht des Staates Delaware, Vereinigte Staaten, ordnungsgemäß gegründeten und bestehenden Limited Liability Company, betrieben und kontrolliert.

Verweise auf „MICRORETAILX GROUP“, „group“, „network“, „ecosystem“, „labs“, „nodes“, „regions“ oder ähnliche Begriffe sind rein beschreibender und konzeptioneller Natur und implizieren keine eigenständige juristische Person, Niederlassung, Tochtergesellschaft, Partnerschaft, Joint Venture, Vertretung oder Betriebsstätte, sofern dies nicht ausdrücklich in einer schriftlichen Vereinbarung anders festgelegt ist.

3. ZWECK DER WEBSITE

Die Website wird ausschließlich zu Informations-, Konzept- und Explorationszwecken bereitgestellt.

Sie stellt weder dar noch ist sie auszulegen als:
• Angebot oder Aufforderung zum Erwerb von Produkten oder Dienstleistungen
• Investitionsvorschlag, Finanzwerbung oder regulierte Kommunikation
• Rechts-, Steuer-, Finanz- oder sonstige professionelle Beratung
• regulierte oder lizenzpflichtige Tätigkeit in irgendeiner Rechtsordnung

Die Website ermöglicht keine Transaktionen, Registrierungen, Benutzerkonten oder Erbringung von Dienstleistungen.

4. KEIN VERTRAUEN; KEINE BERATUNG

Sämtliche auf der Website bereitgestellten Inhalte dienen ausschließlich allgemeinen Informationszwecken.

MICRORETAILX LLC übernimmt keine Zusicherung oder Gewähr für Richtigkeit, Vollständigkeit oder Eignung der Inhalte für einen bestimmten Zweck. Jegliches Vertrauen auf Inhalte der Website erfolgt auf eigenes Risiko des Besuchers.

5. GEISTIGES EIGENTUM

Sofern nicht ausdrücklich anders angegeben, sind sämtliche Inhalte der Website, einschließlich Texte, Grafiken, Design, Layout, Quellcode, Simulationen, Visualisierungen, Modelle und Dokumentationen, ausschließliches Eigentum von MICRORETAILX LLC.

Diese Inhalte sind weltweit durch anwendbare Gesetze über geistiges Eigentum, Urheberrecht und Geschäftsgeheimnisse geschützt.

Inhalte dürfen ohne vorherige schriftliche Genehmigung von MICRORETAILX LLC nicht kopiert, vervielfältigt, verbreitet, verändert oder verwertet werden, soweit zwingendes Recht nichts anderes erlaubt.

6. ZULÄSSIGE NUTZUNG

Besucher verpflichten sich, Folgendes zu unterlassen:
• Missbrauch oder Beeinträchtigung der Website oder ihrer Infrastruktur
• Versuche unbefugten Zugriffs oder der Umgehung von Sicherheitsmaßnahmen
• Scraping, Reverse Engineering oder automatisierte Extraktion
• Nutzung der Website für rechtswidrige oder verbotene Zwecke

MICRORETAILX LLC behält sich das Recht vor, geeignete technische, rechtliche und organisatorische Maßnahmen zum Schutz der Website und ihrer Integrität zu ergreifen.

7. LINKS DRITTER

Die Website kann Links zu Websites oder Diensten Dritter enthalten.

MICRORETAILX LLC übernimmt keine Verantwortung für Inhalte, Verfügbarkeit, Sicherheit oder Praktiken Dritter. Der Zugriff auf Ressourcen Dritter erfolgt auf eigenes Risiko des Besuchers.

8. VERFÜGBARKEIT UND HAFTUNGSAUSSCHLUSS

Die Website wird „wie besehen“ und „wie verfügbar“ bereitgestellt.

MICRORETAILX LLC gewährleistet nicht, dass die Website unterbrechungsfrei, fehlerfrei oder frei von Schwachstellen ist. Soweit gesetzlich zulässig, werden sämtliche ausdrücklichen oder stillschweigenden Gewährleistungen ausgeschlossen.

9. HAFTUNGSBESCHRÄNKUNG

Soweit gesetzlich zulässig, haftet MICRORETAILX LLC nicht für direkte, indirekte, beiläufige, Folge- oder besondere Schäden, die aus der Nutzung oder der Unmöglichkeit der Nutzung der Website entstehen oder damit zusammenhängen.

10. KEIN TARGETING; STANDARDMÄSSIG KEIN PROFILING; KEINE NIEDERLASSUNG

MICRORETAILX LLC richtet sich nicht aktiv an Nutzer oder Zielgruppen in einer bestimmten Rechtsordnung.

Die bloße Zugänglichkeit der Website aus einer Rechtsordnung stellt kein Targeting, keine Niederlassung, Lizenzierung, Genehmigung oder regulierte Tätigkeit in dieser Rechtsordnung dar.

Sofern nicht ausdrücklich in der jeweils geltenden Richtlinie offengelegt und, soweit erforderlich, vom Besucher über ausdrückliche Einstellungen oder Einwilligungsmechanismen aktiviert, betreibt MICRORETAILX LLC keine:
• verhaltensbezogene Werbung oder Marketing-Targeting
• Nutzerprofilbildung zu Werbezwecken
• automatisierte Entscheidungsfindung mit rechtlichen oder ähnlich erheblichen Auswirkungen

11. ANWENDBARES RECHT UND GERICHTSSTAND

Dieser rechtliche Hinweis unterliegt dem Recht des Staates Delaware, Vereinigte Staaten.

Streitigkeiten, die aus oder im Zusammenhang mit der Website oder diesem rechtlichen Hinweis entstehen, unterliegen der ausschließlichen Zuständigkeit der staatlichen oder bundesstaatlichen Gerichte im Staat Delaware, unbeschadet zwingender Verbraucherschutzvorschriften, die in einer bestimmten Rechtsordnung anwendbar sein können.

12. SPRACHE

Die englische Fassung dieses rechtlichen Hinweises ist maßgeblich. Übersetzungen werden ausschließlich zur Information bereitgestellt und haben keine rechtliche Wirkung.

13. KONTAKT

Für rechtliche oder Compliance-Anfragen:
legal@microretailx.com
`
    }
  });


  register("it", {
    "nav.about": "Info",
    "nav.home": "Home",
    "nav.verticals": "Verticali",
    "nav.contact": "Contatti",
    "footer.terms": "Termini",
    "footer.privacy": "Privacy",
    "footer.cookies": "Cookie",
    "footer.legal": "Note legali",
    "cookie.prefs": "Preferenze cookie",
    "reader.toggle": "Modalità lettura",
    "cmp.title": "Privacy e cookie",
    "cmp.desc": "Rispettiamo la tua privacy. Questo sito non utilizza cookie pubblicitari o di tracciamento. I cookie necessari sono sempre attivi per sicurezza e funzionalità di base. Puoi accettare o rifiutare i cookie opzionali.",
    "cmp.necessary": "Necessari",
    "cmp.necessary.desc": "Sicurezza e funzionalità di base.",
    "cmp.analytics": "Analitica",
    "cmp.analytics.desc": "Opzionale: dati di utilizzo anonimi per migliorare il sito.",
    "cmp.marketing": "Marketing",
    "cmp.marketing.desc": "Opzionale: personalizzazione e misurazione delle campagne.",
    "cmp.noproviders": "Nessun fornitore attivo",
    "cmp.reject": "Rifiuta tutto",
    "cmp.accept": "Accetta tutto",
    "cmp.save": "Salva preferenze"
  }, {
    terms: {
      title: "Termini globali di utilizzo — MICRORETAILX",
      description: "Termini globali di utilizzo e quadro giuridico di MICRORETAILX.",
      body: `MICRORETAILX – TERMINI GLOBALI DI UTILIZZO

MICRORETAILX LLC (Delaware, Stati Uniti)
MICRORETAILX GROUP – Quadro operativo globale

Ultimo aggiornamento: 01-01-2026
Data di efficacia: 01-01-2026

Sede legale e Registered Agent:
Corporation Trust Center
1209 Orange Street
Wilmington, DE 19801
United States of America

1. DEFINIZIONI

• “MICRORETAILX”, “noi”, “ci”, “nostro” indica MICRORETAILX LLC, società a responsabilità limitata debitamente costituita ed esistente ai sensi delle leggi dello Stato del Delaware, Stati Uniti d’America.
• “Sito” indica questo sito web e qualsiasi pagina, sottodominio, interfaccia, elemento interattivo, codice sorgente, visualizzazione e contenuto associato reso disponibile attraverso di esso.
• “MICRORETAILX GROUP” indica un quadro concettuale e strategico usato per descrivere iniziative attuali e/o future e non costituisce un’entità giuridica separata salvo espressa indicazione scritta.
• “Verticals” indica ambiti tematici utilizzati esclusivamente come quadro concettuale e strategico di classificazione.
• “Contenuto” comprende testi, grafica, design, codice sorgente, visualizzazioni, simulazioni, modelli, flussi di lavoro e documentazione.
• “Contributi” indica qualsiasi commento, idea, proposta o materiale inviato dall’utente.

2. OPERATORE, AMBITO E ACCETTAZIONE

I presenti Termini regolano l’accesso e l’utilizzo del Sito. Accedendo o utilizzando il Sito, l’utente riconosce di aver letto e compreso i presenti Termini, accetta di esserne legalmente vincolato e dichiara di avere la capacità giuridica necessaria.

3. IDENTITÀ DELL’OPERATORE, INDIRIZZO LEGALE E COMUNICAZIONI

Questo Sito è gestito e controllato esclusivamente da MICRORETAILX LLC, società a responsabilità limitata del Delaware.

Registered Agent: Corporation Trust Center, 1209 Orange Street, Wilmington, DE 19801, USA.

Le comunicazioni legali e di compliance devono essere inviate a: legal@microretailx.com.

Qualsiasi riferimento a “nodes”, “labs”, “regions” o “verticals” non deve essere interpretato come creazione di una filiale, ufficio, controllata, presenza rappresentativa o collegamento fiscale in una giurisdizione diversa dallo Stato del Delaware.

4. MODELLO OPERATIVO GLOBALE; NESSUNA PARTNERSHIP; NESSUNA AGENZIA

MICRORETAILX opera globalmente attraverso iniziative concettuali, esplorative e strategiche. Salvo diverso accordo espresso in un contratto scritto firmato da MICRORETAILX LLC:

(i) nulla nel Sito crea una partnership, joint venture, rapporto di lavoro o di agenzia;

(ii) nessuna parte è autorizzata a vincolare MICRORETAILX LLC;

(iii) termini descrittivi quali “group”, “network” o “ecosystem” non hanno di per sé significato giuridico.

L’utilizzo del Sito non crea una stabile organizzazione o analoga presenza fiscalmente rilevante in alcuna giurisdizione.

5. NATURA DEL SITO; NESSUNA OFFERTA; NESSUN IMPEGNO

Il Sito è fornito esclusivamente a scopo informativo, concettuale ed esplorativo. Nulla di quanto contenuto costituisce un’offerta, una sollecitazione, una proposta di investimento, un incentivo o un’attività regolamentata di qualsiasi tipo in alcuna giurisdizione.

6. QUADRO VERTICAL (CONCETTUALE E NON OPERATIVO)

Qualsiasi riferimento ai verticals rappresenta un quadro puramente concettuale e non implica l’esistenza di unità aziendali operative, prodotti, servizi, attività autorizzate o operazioni regolamentate.

7. STRATEGIA ZERO DATA (PRIVACY BY DESIGN)

Il Sito è progettato secondo una strategia Zero Data: nessun account utente, nessuna profilazione e nessuna tecnologia di tracciamento di terze parti attiva per impostazione predefinita, salvo quanto strettamente inevitabile per i protocolli Internet standard o richiesto dalla legge applicabile.

8. COOKIE E CONSENSO

Per impostazione predefinita vengono utilizzati solo cookie strettamente necessari o identificatori tecnici equivalenti. Le tecnologie opzionali vengono attivate solo dopo il consenso esplicito dell’utente quando richiesto dalla legge.

Cookie strettamente necessari e/o identificatori tecnici possono essere impostati da reti di distribuzione dei contenuti, provider di hosting e livelli di sicurezza esclusivamente per bilanciamento del carico, prevenzione degli abusi, mitigazione dei bot e distribuzione sicura dei contenuti.

9. HOSTING, DISTRIBUZIONE E SICUREZZA

Il Sito è ospitato su infrastrutture di terzi. Log tecnici e metadati limitati possono essere trattati esclusivamente per sicurezza, integrità, prevenzione degli abusi e distribuzione affidabile dei contenuti.

Tale trattamento non modifica la natura informativa del Sito né costituisce attività commerciale, profilazione o targeting specifico per giurisdizione.

La mera accessibilità del Sito non costituisce attività commerciale, targeting o presenza regolamentata in alcuna giurisdizione.

10. PROTEZIONE GLOBALE DEI DATI E CONFORMITÀ NORMATIVA

MICRORETAILX LLC progetta e gestisce questo Sito in conformità con principi di protezione dei dati e privacy riconosciuti a livello internazionale, inclusi privacy by design, minimizzazione dei dati, limitazione della finalità, trasparenza, sicurezza e responsabilizzazione.

Il Sito è principalmente informativo e concettuale. Non offre account utente, non richiede registrazione e non effettua profilazione, tracciamento comportamentale o trattamento a fini pubblicitari.

La distribuzione dei contenuti e il funzionamento tecnico si basano su fornitori di infrastrutture distribuiti globalmente. Qualora avvenga un trattamento incidentale di metadati tecnici, come indirizzi IP o dati di connessione, tale trattamento è strettamente limitato a quanto necessario per sicurezza, integrità, prevenzione degli abusi e distribuzione affidabile dei contenuti.

Qualsiasi trattamento di questo tipo viene effettuato con adeguate garanzie contrattuali, tecniche e organizzative, inclusi accordi sul trattamento dei dati e meccanismi riconosciuti di trasferimento internazionale ove applicabili. Quando pertinente, si fa affidamento su clausole contrattuali standard (SCC) o meccanismi equivalenti leciti di trasferimento internazionale. MICRORETAILX LLC non raccoglie, conserva o sfrutta intenzionalmente dati personali a fini commerciali, di profilazione o marketing.

Questo approccio mira ad allinearsi ai principi dei principali quadri globali di protezione dei dati e privacy in più giurisdizioni.

La mera accessibilità del Sito da una determinata giurisdizione non costituisce, di per sé, targeting, stabilimento, licenza, autorizzazione o attività regolamentata in tale giurisdizione.

MICRORETAILX LLC non si rivolge attivamente a utenti, clienti, investitori, autorità di regolamentazione o altre autorità in alcuna giurisdizione specifica.

11. USO CONSENTITO; CONDOTTE VIETATE

Non è consentito effettuare scraping di dati, reverse engineering, estrazione di algoritmi, addestramento di modelli di intelligenza artificiale, interferenza con l’infrastruttura o uso improprio del Sito, salvo ove espressamente consentito da norme imperative.

12. CONSERVAZIONE E TUTELA

MICRORETAILX LLC si riserva il diritto di adottare misure tecniche, organizzative e legali per proteggere il Sito e preservare prove di uso improprio o attività illecite.

13. PROPRIETÀ INTELLETTUALE; SEGRETI COMMERCIALI

Tutti i diritti, titoli e interessi relativi al Sito e al suo Contenuto sono di proprietà esclusiva di MICRORETAILX LLC e sono protetti dalle leggi applicabili in materia di proprietà intellettuale e segreti commerciali in tutto il mondo.

14. RISERVATEZZA DEI MATERIALI NON PUBBLICI

Materiali non pubblici o ad accesso limitato non possono essere divulgati, distribuiti o riprodotti senza previa autorizzazione scritta di MICRORETAILX LLC.

15. CONTRIBUTI E FEEDBACK

Inviando qualsiasi materiale, l’utente concede a MICRORETAILX LLC una licenza mondiale, gratuita, non esclusiva e perpetua per utilizzare, riprodurre, adattare e incorporare tali contributi per legittime finalità aziendali.

Questa licenza si applica esclusivamente ai contributi non sollecitati e non prevale, limita o sostituisce eventuali accordi scritti separati stipulati con MICRORETAILX LLC.

16. DIGITAL MILLENNIUM COPYRIGHT ACT (DMCA) SAFE HARBOR

MICRORETAILX LLC rispetta i diritti di proprietà intellettuale e si aspetta lo stesso dagli utenti. In conformità al Digital Millennium Copyright Act (17 U.S.C. § 512), è prevista la seguente procedura per segnalare presunte violazioni del copyright:

• Notifica. Se ritieni che un Contenuto o Contributo disponibile sul Sito violi il tuo copyright, puoi inviare una notifica scritta al nostro Agente designato all’indirizzo legal@microretailx.com. Per essere efficace, la notifica deve essere sostanzialmente conforme ai requisiti di 17 U.S.C. § 512(c)(3), inclusi: (i) firma fisica o elettronica del titolare del copyright o dell’agente autorizzato; (ii) identificazione dell’opera protetta che si ritiene violata; (iii) identificazione del materiale presumibilmente illecito e della sua posizione; (iv) dati di contatto della parte reclamante; e (v) dichiarazione in buona fede che l’uso non è autorizzato.

• Rimozione. Al ricevimento di una notifica valida, MICRORETAILX LLC si riserva il diritto di rimuovere o disabilitare l’accesso al materiale presumibilmente illecito, a propria esclusiva discrezione e senza preavviso.

• Contro-notifica. Ove applicabile, può essere presentata una contro-notifica ai sensi del DMCA. MICRORETAILX LLC può ripristinare il materiale se legalmente tenuta a farlo.

• Limitazione. Questa procedura si applica esclusivamente a questioni di copyright ai sensi del DMCA. Per qualsiasi altra questione legale, regolamentare o di compliance, fare riferimento alla sezione generale di contatto dei presenti Termini.

17. LINK ESTERNI; SERVIZI DI TERZI

Il Sito può contenere link a servizi di terzi. MICRORETAILX LLC non assume alcuna responsabilità per contenuti, pratiche o politiche di terzi. L’accesso avviene a proprio rischio.

18. ESCLUSIONI DI RESPONSABILITÀ; NESSUN AFFIDAMENTO

Il Sito non fornisce consulenza legale, fiscale, finanziaria o professionale.

Nulla nel Sito deve essere interpretato come guida normativa, dichiarazione di conformità o garanzia di conformità a uno specifico regime giuridico o regolamentare locale.

Le dichiarazioni previsionali sono intrinsecamente incerte e non garantiscono risultati futuri.

19. DISPONIBILITÀ; “COSÌ COM’È”

Il Sito è fornito “così com’è” e “come disponibile”, senza garanzie di alcun tipo, espresse o implicite.

20. LIMITAZIONE DI RESPONSABILITÀ

Nella misura massima consentita dalla legge applicabile, MICRORETAILX LLC non sarà responsabile per danni diretti o indiretti derivanti dall’utilizzo del Sito.

21. MANLEVA

L’utente accetta di manlevare e tenere indenne MICRORETAILX LLC da qualsiasi pretesa, responsabilità, danno o spesa derivante dall’uso illecito del Sito o dalla violazione dei presenti Termini.

22. COMPLIANCE; CONTROLLI ALL’ESPORTAZIONE; SANZIONI

L’utente accetta di rispettare le leggi applicabili in materia di controllo delle esportazioni e sanzioni, incluse le U.S. Export Administration Regulations (EAR) e i regimi dell’Office of Foreign Assets Control (OFAC), nonché, ove applicabile, i pertinenti regimi sanzionatori delle Nazioni Unite, dell’Unione europea o altri quadri internazionali.

23. COMUNICAZIONI ELETTRONICHE; AVVISI

Tutte le comunicazioni e gli avvisi legali devono essere inviati a: legal@microretailx.com.

24. MODIFICHE AI PRESENTI TERMINI

MICRORETAILX LLC può modificare i presenti Termini in qualsiasi momento. Il proseguimento dell’utilizzo del Sito costituisce accettazione dei Termini modificati.

25. LEGGE APPLICABILE; GIURISDIZIONE ESCLUSIVA; LINGUA

I presenti Termini sono regolati dalle leggi dello Stato del Delaware, Stati Uniti d’America. Qualsiasi controversia sarà soggetta alla giurisdizione esclusiva dei tribunali statali o federali situati nel Delaware.

Prevale la versione inglese; le traduzioni sono fornite esclusivamente per comodità informativa.

26. SEPARABILITÀ; INTERO ACCORDO

Qualora una disposizione sia ritenuta invalida o inapplicabile, le restanti disposizioni rimarranno pienamente valide ed efficaci. I presenti Termini costituiscono l’intero accordo relativo all’uso del Sito.

27. CONTATTI

Comunicazioni legali e di compliance: legal@microretailx.com
`
    },

    privacy: {
      title: "Informativa sulla privacy — MICRORETAILX",
      description: "Informativa globale sulla privacy e quadro di protezione dei dati di MICRORETAILX.",
      body: `MICRORETAILX — INFORMATIVA SULLA PRIVACY

MICRORETAILX LLC (Delaware, Stati Uniti)
MICRORETAILX GROUP – Quadro operativo globale

Ultimo aggiornamento: 01-01-2026
Data di efficacia: 01-01-2026

Sede legale e Registered Agent:
Corporation Trust Center
1209 Orange Street
Wilmington, DE 19801
United States of America

1. AMBITO E FINALITÀ

Questa Informativa sulla privacy descrive come MICRORETAILX LLC (“MICRORETAILX”, “noi”, “ci”, “nostro”) progetta e gestisce il Sito dal punto di vista della protezione dei dati e della privacy.

Il Sito ha natura strettamente informativa e concettuale. Non offre account utente, non richiede registrazione e non offre prodotti o servizi in vendita.

2. STRATEGIA ZERO DATA (PRIVACY BY DESIGN)

Il Sito è intenzionalmente progettato come ambiente Zero Data.

MICRORETAILX LLC non raccoglie, richiede, conserva, monetizza o sfrutta intenzionalmente dati personali dei visitatori. Non vengono creati profili utente, identificatori o set di dati comportamentali.

I principi di privacy sono integrati nella progettazione e per impostazione predefinita, inclusi minimizzazione dei dati, limitazione della finalità, trasparenza, sicurezza e responsabilizzazione.

3. NESSUN ACCOUNT UTENTE; NESSUNA REGISTRAZIONE

Il Sito non offre account utente, aree di accesso, moduli di registrazione o sistemi di adesione.

I visitatori non sono tenuti a fornire dati personali per accedere ai contenuti del Sito.

4. NESSUNA PROFILAZIONE; NESSUN TRACCIAMENTO; NESSUNA PUBBLICITÀ

Il Sito non implementa:

• profilazione comportamentale o basata sugli interessi
• tecnologie pubblicitarie o di marketing
• piattaforme di analisi o strumenti di misurazione del pubblico
• meccanismi di tracciamento tra siti o servizi

MICRORETAILX LLC non effettua decisioni automatizzate, profilazione o analisi comportamentale dei visitatori.

5. METADATI TECNICI E DATI DI LOG

Come avviene per la maggior parte dei servizi Internet, durante l’accesso al Sito possono essere trattati incidentalmente metadati tecnici limitati, come indirizzi IP, intestazioni delle richieste, timestamp o informazioni a livello di protocollo.

Tali metadati sono trattati esclusivamente per finalità tecniche e di sicurezza, tra cui:

• garantire la distribuzione sicura e affidabile dei contenuti
• proteggere da abusi, accessi automatizzati e attacchi
• mantenere integrità e disponibilità della rete

Questi metadati non vengono utilizzati per identificazione, profilazione, marketing o analisi e sono conservati solo per il periodo minimo necessario.

6. FORNITORI DI INFRASTRUTTURA DI TERZI

Il Sito è distribuito tramite fornitori di infrastruttura di terzi, incluse reti di distribuzione dei contenuti (CDN), servizi DNS e piattaforme di hosting statico, come Cloudflare, Inc. e GitHub, Inc.

Tali fornitori possono trattare metadati tecnici limitati esclusivamente per svolgere funzioni di infrastruttura, sicurezza e distribuzione per conto di MICRORETAILX LLC.

MICRORETAILX LLC non abilita funzioni di analisi, tracciamento, pubblicità o monitoraggio comportamentale offerte da tali fornitori.

7. TRASFERIMENTI INTERNAZIONALI DI DATI

Quando i metadati tecnici sono trattati tramite infrastrutture distribuite globalmente, il trattamento può comportare trasferimenti internazionali di dati.

Tali trasferimenti avvengono con adeguate garanzie tecniche e organizzative e, ove applicabile, si basano su meccanismi riconosciuti di trasferimento internazionale, come clausole contrattuali standard (SCC) o quadri equivalenti leciti.

MICRORETAILX LLC non utilizza i trasferimenti internazionali per sfruttare commercialmente dati personali.

8. COOKIE, IDENTIFICATORI TECNICI E SICUREZZA DELL’INFRASTRUTTURA

Per impostazione predefinita, questo Sito non utilizza cookie di marketing, pubblicità, analisi, targeting o tracciamento comportamentale.

Informativa tecnica. Il Sito si basa esclusivamente su identificatori tecnici strettamente necessari per l’infrastruttura principale e le operazioni di sicurezza. Questi possono includere identificatori impostati o trattati da reti di distribuzione dei contenuti (CDN), provider DNS, piattaforme di hosting e livelli di sicurezza.

Tali identificatori sono usati esclusivamente per:

• Sicurezza e prevenzione degli abusi: funzionamento di web application firewall (WAF), sistemi di mitigazione dei bot, rate limiting e protezioni a livello di rete per impedire accessi non autorizzati, abusi automatizzati e attacchi denial-of-service.

• Distribuzione dei contenuti e disponibilità: distribuzione sicura ed efficiente dei contenuti tramite CDN globali, bilanciatori di carico e infrastrutture distribuite, garantendo prestazioni, resilienza e disponibilità.

Questi identificatori tecnici non consentono profilazione, monitoraggio comportamentale, pubblicità o attività di marketing e non vengono utilizzati per identificare o tracciare persone tra siti o servizi.

Quando trattati, i metadati tecnici, come indirizzi IP o intestazioni delle richieste, sono gestiti esclusivamente per finalità di sicurezza, integrità e operative e solo per il periodo minimo necessario.

Tali identificatori sono generalmente esenti da requisiti di consenso ai sensi dei quadri applicabili di protezione dei dati ed ePrivacy, poiché strettamente necessari per la fornitura, la sicurezza e il corretto funzionamento del Sito.

9. DIRITTI DEGLI INTERESSATI

Considerata la natura del Sito e l’assenza di raccolta intenzionale di dati personali, molti diritti degli interessati possono non essere applicabili nella pratica.

Quando richiesto dalla legge, gli interessati possono contattare MICRORETAILX LLC per informazioni su un eventuale trattamento di dati relativo ai log tecnici di accesso.

Le richieste possono essere inviate a: legal@microretailx.com

MICRORETAILX LLC si riserva il diritto di verificare le richieste e limitare le risposte ove consentito dalla legge.

10. SICUREZZA DEI DATI

MICRORETAILX LLC adotta misure tecniche e organizzative adeguate per proteggere il Sito e la sua infrastruttura da accessi non autorizzati, uso improprio, alterazione o distruzione.

Le misure di sicurezza includono, tra l’altro, cifratura durante il trasporto, rigide intestazioni di sicurezza, controlli di accesso e protezioni a livello di rete.

11. DICHIARAZIONE SECURITY-BY-DESIGN

Il Sito è intenzionalmente progettato con un’architettura security-first e privacy-by-design. Il progetto tecnico mira a ridurre al minimo l’esposizione dei dati, ridurre la superficie di attacco e impedire trattamenti non necessari, proteggendo quindi gli utenti per impostazione predefinita anziché affidarsi a controlli successivi o meccanismi di consenso.

Le misure di sicurezza sono implementate come parte dell’infrastruttura principale e del modello operativo del Sito, non come funzionalità opzionali.

12. NESSUN TARGETING; NESSUNO STABILIMENTO

MICRORETAILX LLC non si rivolge attivamente a utenti, clienti, investitori o autorità in una giurisdizione specifica.

La mera accessibilità del Sito da una determinata giurisdizione non costituisce targeting, stabilimento, licenza, autorizzazione o attività regolamentata in tale giurisdizione.

13. PRIVACY DEI MINORI

Il Sito non è rivolto ai minori e MICRORETAILX LLC non raccoglie consapevolmente dati personali di minori.

14. MODIFICHE ALLA PRESENTE INFORMATIVA

MICRORETAILX LLC può aggiornare periodicamente la presente Informativa sulla privacy. Le modifiche diventano efficaci al momento della pubblicazione sul Sito.

15. LEGGE APPLICABILE E LINGUA

La presente Informativa sulla privacy è regolata dalle leggi dello Stato del Delaware, Stati Uniti d’America.

Prevale la versione inglese. Le traduzioni sono fornite esclusivamente per comodità informativa e non hanno effetto contrattuale o legale.

16. CONTATTI

Per richieste relative a privacy, questioni legali o compliance:
legal@microretailx.com
`
    },

    cookies: {
      title: "Politica sui cookie — MICRORETAILX",
      description: "Politica globale sui cookie e quadro tecnico di MICRORETAILX.",
      body: `MICRORETAILX — POLITICA SUI COOKIE

MICRORETAILX LLC (Delaware, Stati Uniti)
MICRORETAILX GROUP – Quadro operativo globale

Ultimo aggiornamento: 21-08-2026
Data di efficacia: 01-01-2026

Sede legale e Registered Agent:
Corporation Trust Center
1209 Orange Street
Wilmington, DE 19801
United States of America

1. AMBITO E FINALITÀ

Questa Politica sui cookie spiega come cookie e identificatori tecnici simili possono essere utilizzati in relazione a questo Sito, gestito da MICRORETAILX LLC (“MICRORETAILX”, “noi”, “ci”, “nostro”).

Il Sito ha natura strettamente informativa e concettuale e deve essere letto insieme all’Informativa sulla privacy e ai Termini globali di utilizzo, che insieme costituiscono il quadro giuridico del Sito.

2. STRATEGIA ZERO DATA

Il Sito è intenzionalmente progettato e gestito secondo una strategia Zero Data.

MICRORETAILX LLC non utilizza cookie o tecnologie simili per:
• identificare singoli utenti
• creare profili utente
• effettuare tracciamento comportamentale o basato sugli interessi
• fornire pubblicità o marketing
• monetizzare dati personali

Il Sito non offre account utente, sistemi di registrazione o servizi interattivi che richiedano dati personali.

3. COOKIE STRETTAMENTE NECESSARI E IDENTIFICATORI TECNICI

Per impostazione predefinita, il Sito si basa esclusivamente su cookie strettamente necessari e/o identificatori tecnici equivalenti richiesti per l’infrastruttura principale, la sicurezza e la disponibilità.

Tali identificatori possono essere impostati o trattati da:
• reti di distribuzione dei contenuti (CDN)
• provider DNS e di hosting
• livelli di sicurezza, integrità e disponibilità

Questi identificatori sono utilizzati esclusivamente per scopi quali:
• bilanciamento del carico e distribuzione del traffico
• prevenzione degli abusi e rate limiting
• mitigazione dei bot e protezione dall’accesso automatizzato
• distribuzione sicura e affidabile dei contenuti

Questi cookie e identificatori sono essenziali per il corretto funzionamento del Sito e non possono essere disabilitati senza comprometterne sicurezza o disponibilità.

LOCAL STORAGE UTILIZZATO DAL SITO

Oltre ai cookie strettamente necessari, il Sito memorizza un numero limitato di preferenze tecniche direttamente nel local storage del browser. Queste voci sono esclusivamente first-party, non vengono mai trasmesse a MICRORETAILX LLC o a terzi e rimangono sul dispositivo finché il visitatore non le rimuove.

• mx_consent — registra le scelte relative ai cookie effettuate dal visitatore, insieme alla versione dell’ambito, alla versione della policy e al timestamp della decisione. Finalità: rispettare la scelta e documentare quando e in quale versione della policy è stata effettuata.
• mx_lang — registra la lingua di visualizzazione scelta dal visitatore. Finalità: mantenere la stessa lingua tra pagine e visite.
• mx_a11y — registra preferenze di accessibilità quali dimensione del testo, contrasto e carattere leggibile. Finalità: conservare le impostazioni di lettura selezionate.
• mx_reader_immersive — registra se è attiva la modalità di lettura immersiva. Finalità: conservare il layout di lettura selezionato.

Queste voci non contengono identificatori, dati personali o informazioni comportamentali. Possono essere rimosse in qualsiasi momento dalle impostazioni del browser o tramite il controllo delle preferenze cookie disponibile nel footer di ogni pagina.

4. NESSUNA ANALISI; NESSUN MARKETING; NESSUN TRACCIAMENTO

Il Sito non implementa:
• strumenti di analisi o misurazione del pubblico
• cookie di marketing o pubblicitari
• sistemi di personalizzazione o raccomandazione
• meccanismi di tracciamento tra siti o servizi

MICRORETAILX LLC non effettua decisioni automatizzate o profilazione basate sull’accesso al Sito.

5. TECNOLOGIE OPZIONALI E CONSENSO

Cookie opzionali o tecnologie simili non sono abilitati per impostazione predefinita.

Qualora in futuro vengano introdotte tecnologie opzionali, saranno attivate solo:
• dopo il consenso esplicito dell’utente e
• quando tale consenso è richiesto dalla legge applicabile.

Ove applicabile, le preferenze di consenso sono gestite tramite l’interfaccia di consenso del Sito.

6. METADATI TECNICI E DATI DI LOG

Come standard per i servizi Internet, durante l’accesso al Sito possono essere trattati incidentalmente metadati tecnici limitati, quali indirizzi IP, intestazioni delle richieste, timestamp o informazioni a livello di protocollo.

Tali metadati sono trattati esclusivamente per finalità tecniche e di sicurezza, tra cui:
• protezione dell’infrastruttura e prevenzione degli abusi
• rilevamento e mitigazione di attività automatizzate o malevole
• garanzia di disponibilità, integrità e resilienza del Sito

Questi metadati non vengono utilizzati per identificazione, profilazione, analisi o marketing e sono conservati solo per il periodo minimo necessario.

7. CONTESTO INTERNAZIONALE E INFRASTRUTTURA

Il Sito può essere accessibile globalmente e si basa su infrastrutture tecniche distribuite.

Quando metadati tecnici vengono trattati tramite sistemi distribuiti globalmente, tale trattamento può comportare trasferimenti internazionali di dati.

Tali trasferimenti sono effettuati con adeguate garanzie tecniche e organizzative e, ove applicabile, si basano su meccanismi riconosciuti di trasferimento internazionale.

8. NESSUN TARGETING; NESSUNA INTENZIONE GIURISDIZIONALE

MICRORETAILX LLC non si rivolge attivamente a utenti o pubblico in alcuna giurisdizione specifica.

La mera accessibilità del Sito da qualsiasi giurisdizione non costituisce targeting, stabilimento, licenza, autorizzazione o attività regolamentata in tale giurisdizione.

9. MODIFICHE ALLA PRESENTE POLITICA SUI COOKIE

MICRORETAILX LLC può aggiornare periodicamente questa Politica sui cookie. Le modifiche diventano efficaci al momento della pubblicazione sul Sito.

10. LEGGE APPLICABILE E LINGUA

La presente Politica sui cookie è regolata dalle leggi dello Stato del Delaware, Stati Uniti d’America.

Prevale la versione inglese. Le traduzioni sono fornite esclusivamente per comodità informativa e non hanno effetto legale.

11. CONTATTI

Per richieste relative a cookie, privacy o compliance:
legal@microretailx.com
`
    },

    legal: {
      title: "Avviso legale — MICRORETAILX",
      description: "Identificazione societaria e informazioni legali relative a MICRORETAILX LLC.",
      body: `MICRORETAILX — AVVISO LEGALE

MICRORETAILX LLC (Delaware, Stati Uniti)
MICRORETAILX GROUP – Quadro operativo globale

Ultimo aggiornamento: 01-01-2026
Data di efficacia: 01-01-2026

Sede legale e Registered Agent:
Corporation Trust Center
1209 Orange Street
Wilmington, DE 19801
United States of America

1. QUADRO GIURIDICO; GERARCHIA DEI DOCUMENTI; RAPPORTO CON ALTRE POLICY

Questo Avviso legale fa parte del quadro giuridico che regola l’accesso e l’utilizzo del Sito.

Ulteriori documenti possono applicarsi in base alla natura dell’interazione del visitatore con il Sito, inclusi:
• Termini di utilizzo
• Informativa sulla privacy
• Politica sui cookie (e qualsiasi impostazione Preferenze cookie / CMP mostrata sul Sito)

In caso di conflitto tra documenti, si applica il seguente ordine di prevalenza:
(i) questo Avviso legale, (ii) i Termini di utilizzo, (iii) l’Informativa sulla privacy e (iv) la Politica sui cookie, salvo che una norma imperativa richieda diversamente per una materia specifica.

Se una disposizione del presente Avviso legale viene ritenuta invalida o inapplicabile, le restanti disposizioni rimangono pienamente valide ed efficaci.

MICRORETAILX LLC può riesaminare, aggiornare e migliorare periodicamente questo quadro giuridico per riflettere l’evoluzione degli standard normativi, delle linee guida di vigilanza, delle pratiche di sicurezza e dei cambiamenti operativi.

2. IDENTIFICAZIONE DELL’OPERATORE DEL SITO

Questo sito web (il “Sito”) è gestito e controllato esclusivamente da MICRORETAILX LLC, società a responsabilità limitata debitamente costituita ed esistente ai sensi delle leggi dello Stato del Delaware, Stati Uniti d’America.

Qualsiasi riferimento a “MICRORETAILX GROUP”, “group”, “network”, “ecosystem”, “labs”, “nodes”, “regions” o termini simili è puramente descrittivo e concettuale e non implica l’esistenza di un’entità giuridica separata, filiale, controllata, partnership, joint venture, agenzia o stabile organizzazione, salvo espressa diversa indicazione in un accordo scritto.

3. FINALITÀ DEL SITO

Il Sito è fornito esclusivamente a scopo informativo, concettuale ed esplorativo.

Non costituisce e non deve essere interpretato come:
• offerta o sollecitazione di prodotti o servizi
• proposta di investimento, promozione finanziaria o comunicazione regolamentata
• consulenza legale, fiscale, finanziaria o professionale
• attività regolamentata o soggetta a licenza in alcuna giurisdizione

Il Sito non consente transazioni, registrazioni, account utente o erogazione di servizi.

4. NESSUN AFFIDAMENTO; NESSUNA CONSULENZA

Tutti i contenuti disponibili sul Sito sono forniti esclusivamente a fini informativi generali.

MICRORETAILX LLC non rilascia dichiarazioni o garanzie circa accuratezza, completezza o idoneità dei contenuti a uno scopo particolare. Qualsiasi affidamento sui contenuti del Sito avviene a rischio del visitatore.

5. PROPRIETÀ INTELLETTUALE

Salvo espressa diversa indicazione, tutti i contenuti del Sito, inclusi a titolo esemplificativo testi, grafica, design, layout, codice sorgente, simulazioni, visualizzazioni, modelli e documentazione, sono di proprietà esclusiva di MICRORETAILX LLC.

Tali contenuti sono protetti in tutto il mondo dalle leggi applicabili in materia di proprietà intellettuale, copyright e segreti commerciali.

Nessun contenuto può essere copiato, riprodotto, distribuito, modificato o sfruttato senza previa autorizzazione scritta di MICRORETAILX LLC, salvo ove consentito da norme imperative.

6. USO ACCETTABILE

I visitatori accettano di non:
• utilizzare impropriamente o interferire con il Sito o la sua infrastruttura
• tentare accessi non autorizzati o aggirare misure di sicurezza
• effettuare scraping, reverse engineering o estrazione automatizzata
• utilizzare il Sito per finalità illecite o vietate

MICRORETAILX LLC si riserva il diritto di adottare adeguate misure tecniche, legali e organizzative per proteggere il Sito e la sua integrità.

7. LINK DI TERZI

Il Sito può contenere link a siti web o servizi di terzi.

MICRORETAILX LLC non assume responsabilità per contenuti, disponibilità, sicurezza o pratiche di terzi. L’accesso a risorse di terzi avviene a rischio del visitatore.

8. DISPONIBILITÀ ED ESCLUSIONE DI RESPONSABILITÀ

Il Sito è fornito “così com’è” e “come disponibile”.

MICRORETAILX LLC non garantisce che il Sito sia ininterrotto, privo di errori o vulnerabilità. Nella misura massima consentita dalla legge applicabile, sono escluse tutte le garanzie espresse o implicite.

9. LIMITAZIONE DI RESPONSABILITÀ

Nella misura massima consentita dalla legge applicabile, MICRORETAILX LLC non sarà responsabile per danni diretti, indiretti, incidentali, consequenziali o speciali derivanti o connessi all’uso o all’impossibilità di utilizzare il Sito.

10. NESSUN TARGETING; NESSUNA PROFILAZIONE PREDEFINITA; NESSUNO STABILIMENTO

MICRORETAILX LLC non si rivolge attivamente a utenti o pubblico in alcuna giurisdizione specifica.

La mera accessibilità del Sito da una determinata giurisdizione non costituisce targeting, stabilimento, licenza, autorizzazione o attività regolamentata in tale giurisdizione.

Salvo espressa informativa nel livello di policy applicabile e, ove richiesto, attivazione da parte del visitatore tramite impostazioni esplicite o meccanismi di consenso, MICRORETAILX LLC non effettua:
• pubblicità comportamentale o targeting di marketing
• profilazione degli utenti a fini pubblicitari
• decisioni automatizzate che producano effetti giuridici o effetti analogamente significativi

11. LEGGE APPLICABILE E GIURISDIZIONE

Il presente Avviso legale è regolato dalle leggi dello Stato del Delaware, Stati Uniti d’America.

Qualsiasi controversia derivante da o connessa al Sito o al presente Avviso legale sarà soggetta alla giurisdizione esclusiva dei tribunali statali o federali situati nello Stato del Delaware, senza pregiudizio per eventuali norme imperative di protezione dei consumatori applicabili in una specifica giurisdizione.

12. LINGUA

Prevale la versione inglese del presente Avviso legale. Le traduzioni sono fornite esclusivamente per comodità informativa e non hanno effetto legale.

13. CONTATTI

Per richieste legali o di compliance:
legal@microretailx.com
`
    }
  });


  register("pt", {
    "nav.about": "Info",
    "nav.home": "Início",
    "nav.verticals": "Verticais",
    "nav.contact": "Contacto",
    "footer.terms": "Termos",
    "footer.privacy": "Privacidade",
    "footer.cookies": "Cookies",
    "footer.legal": "Legal",
    "cookie.prefs": "Preferências de cookies",
    "reader.toggle": "Modo de leitura",
    "cmp.title": "Privacidade e cookies",
    "cmp.desc": "Respeitamos a sua privacidade. Este site não utiliza cookies de publicidade ou rastreio. Os cookies necessários estão sempre ativos para segurança e funcionalidade básica. Pode aceitar ou rejeitar cookies opcionais.",
    "cmp.necessary": "Necessários",
    "cmp.necessary.desc": "Segurança e funcionalidade essencial.",
    "cmp.analytics": "Analítica",
    "cmp.analytics.desc": "Opcional: dados de utilização anónimos para melhorar o site.",
    "cmp.marketing": "Marketing",
    "cmp.marketing.desc": "Opcional: personalização e medição de campanhas.",
    "cmp.noproviders": "Sem fornecedores ativos",
    "cmp.reject": "Rejeitar tudo",
    "cmp.accept": "Aceitar tudo",
    "cmp.save": "Guardar preferências"
  }, {
    terms: {
      title: "Termos globais de utilização — MICRORETAILX",
      description: "Termos globais de utilização e enquadramento jurídico da MICRORETAILX.",
      body: `MICRORETAILX – TERMOS GLOBAIS DE UTILIZAÇÃO

MICRORETAILX LLC (Delaware, Estados Unidos)
MICRORETAILX GROUP – Enquadramento operacional global

Última atualização: 01-01-2026
Data de entrada em vigor: 01-01-2026

Sede registada e Registered Agent:
Corporation Trust Center
1209 Orange Street
Wilmington, DE 19801
United States of America

1. DEFINIÇÕES

• “MICRORETAILX”, “nós”, “nos”, “nosso” refere-se à MICRORETAILX LLC, uma sociedade de responsabilidade limitada devidamente constituída e existente ao abrigo das leis do Estado do Delaware, Estados Unidos da América.
• “Website” refere-se a este website e a qualquer página, subdomínio, interface, elemento interativo, código-fonte, visualização e conteúdo associado disponibilizado através do mesmo.
• “MICRORETAILX GROUP” refere-se a um enquadramento conceptual e estratégico utilizado para descrever iniciativas atuais e/ou futuras e não constitui uma entidade jurídica separada, salvo indicação expressa por escrito.
• “Verticals” significa domínios temáticos utilizados exclusivamente como enquadramento conceptual e estratégico de classificação.
• “Conteúdo” inclui todo o texto, gráficos, design, código-fonte, visualizações, simulações, modelos, fluxos de trabalho e documentação.
• “Submissões” significa qualquer comentário, ideia, proposta ou material enviado por si.

2. OPERADOR, ÂMBITO E ACEITAÇÃO

Estes Termos regulam o seu acesso e utilização do Website. Ao aceder ou utilizar o Website, reconhece que leu e compreendeu estes Termos, aceita ficar juridicamente vinculado aos mesmos e declara ter capacidade jurídica para o fazer.

3. IDENTIDADE DO OPERADOR, MORADA LEGAL E COMUNICAÇÕES

Este Website é operado e controlado exclusivamente pela MICRORETAILX LLC, uma sociedade de responsabilidade limitada do Delaware.

Registered Agent: Corporation Trust Center, 1209 Orange Street, Wilmington, DE 19801, USA.

As comunicações jurídicas e de compliance devem ser enviadas para: legal@microretailx.com.

Qualquer referência a “nodes”, “labs”, “regions” ou “verticals” não deve ser interpretada como criação de sucursal, escritório, subsidiária, presença representativa ou nexo fiscal em qualquer jurisdição fora do Estado do Delaware.

4. MODELO OPERACIONAL GLOBAL; SEM PARCERIA; SEM AGÊNCIA

A MICRORETAILX opera globalmente através de iniciativas conceptuais, exploratórias e estratégicas. Salvo acordo expresso em contrato escrito assinado pela MICRORETAILX LLC:

(i) nada no Website cria parceria, joint venture, relação laboral ou de agência;

(ii) nenhuma parte está autorizada a vincular juridicamente a MICRORETAILX LLC;

(iii) termos descritivos como “group”, “network” ou “ecosystem” não têm significado jurídico autónomo.

A utilização do Website não cria estabelecimento estável nem presença tributável semelhante em qualquer jurisdição.

5. NATUREZA DO WEBSITE; SEM OFERTA; SEM COMPROMISSO

O Website é disponibilizado estritamente para fins informativos, conceptuais e exploratórios. Nada do seu conteúdo constitui uma oferta, solicitação, proposta de investimento, incentivo ou atividade regulada de qualquer natureza em qualquer jurisdição.

6. ENQUADRAMENTO VERTICAL (CONCEPTUAL E NÃO OPERACIONAL)

Qualquer referência a verticals representa um enquadramento puramente conceptual e não implica a existência de unidades de negócio operacionais, produtos, serviços, atividades licenciadas ou operações reguladas.

7. ESTRATÉGIA ZERO DATA (PRIVACY BY DESIGN)

O Website foi concebido segundo uma Estratégia Zero Data: sem contas de utilizador, sem profiling e sem tecnologias de rastreio de terceiros ativadas por defeito, salvo quando estritamente inevitável devido a protocolos standard da Internet ou exigido pela legislação aplicável.

8. COOKIES E CONSENTIMENTO

Por defeito, apenas são utilizados cookies estritamente necessários ou identificadores técnicos equivalentes. Tecnologias opcionais só são ativadas após consentimento explícito do utilizador quando legalmente exigido.

Cookies estritamente necessários e/ou identificadores técnicos podem ser definidos por redes de distribuição de conteúdos, fornecedores de alojamento e camadas de segurança exclusivamente para balanceamento de carga, prevenção de abuso, mitigação de bots e distribuição segura de conteúdos.

9. ALOJAMENTO, DISTRIBUIÇÃO E SEGURANÇA

O Website está alojado em infraestrutura de terceiros. Registos técnicos e metadados limitados podem ser tratados exclusivamente para segurança, integridade, prevenção de abuso e distribuição fiável de conteúdos.

Esse tratamento não altera a natureza informativa do Website nem constitui atividade comercial, profiling ou targeting específico de uma jurisdição.

A mera acessibilidade do Website não constitui atividade comercial, targeting ou presença regulada em qualquer jurisdição.

10. PROTEÇÃO GLOBAL DE DADOS E CONFORMIDADE REGULATÓRIA

A MICRORETAILX LLC concebe e opera este Website em conformidade com princípios de proteção de dados e privacidade reconhecidos internacionalmente, incluindo privacy by design, minimização de dados, limitação da finalidade, transparência, segurança e responsabilização.

O Website é principalmente informativo e conceptual. Não oferece contas de utilizador, não exige registo e não realiza profiling, rastreio comportamental ou tratamento baseado em publicidade.

A distribuição de conteúdos e a operação técnica dependem de fornecedores de infraestrutura globalmente distribuídos. Na medida em que possa ocorrer tratamento incidental de metadados técnicos, como endereços IP ou dados de ligação, esse tratamento é estritamente limitado ao necessário para segurança, integridade, prevenção de abuso e distribuição fiável de conteúdos.

Qualquer tratamento deste tipo é realizado com salvaguardas contratuais, técnicas e organizativas adequadas, incluindo acordos de tratamento de dados e mecanismos reconhecidos de transferência internacional, quando aplicável. Quando aplicável, recorre-se a cláusulas contratuais-tipo (SCC) ou mecanismos equivalentes e lícitos de transferência internacional. A MICRORETAILX LLC não recolhe, armazena nem explora intencionalmente dados pessoais para fins comerciais, de profiling ou marketing.

Esta abordagem pretende alinhar-se com os princípios dos principais regimes globais de proteção de dados e privacidade em múltiplas jurisdições.

A mera acessibilidade do Website a partir de uma determinada jurisdição não constitui, por si só, targeting, estabelecimento, licenciamento, autorização ou atividade regulada nessa jurisdição.

A MICRORETAILX LLC não se dirige ativamente a utilizadores, clientes, investidores, reguladores ou autoridades em qualquer jurisdição específica.

11. UTILIZAÇÃO PERMITIDA; CONDUTA PROIBIDA

Não pode realizar scraping de dados, engenharia inversa, extração de algoritmos, treino de modelos de inteligência artificial, interferência com a infraestrutura ou utilização indevida do Website, salvo quando expressamente permitido por legislação imperativa.

12. PRESERVAÇÃO E EXECUÇÃO

A MICRORETAILX LLC reserva-se o direito de implementar medidas técnicas, organizativas e jurídicas para proteger o Website e preservar provas de utilização indevida ou atividade ilícita.

13. PROPRIEDADE INTELECTUAL; SEGREDOS COMERCIAIS

Todos os direitos, títulos e interesses relativos ao Website e ao seu Conteúdo são propriedade exclusiva da MICRORETAILX LLC e estão protegidos pelas leis aplicáveis de propriedade intelectual e segredos comerciais em todo o mundo.

14. CONFIDENCIALIDADE DE MATERIAIS NÃO PÚBLICOS

Materiais não públicos ou de acesso restrito não podem ser divulgados, distribuídos ou reproduzidos sem autorização prévia por escrito da MICRORETAILX LLC.

15. SUBMISSÕES E FEEDBACK

Ao enviar quaisquer materiais, concede à MICRORETAILX LLC uma licença mundial, gratuita, não exclusiva e perpétua para utilizar, reproduzir, adaptar e incorporar essas submissões para fins empresariais legítimos.

Esta licença aplica-se apenas a submissões não solicitadas e não substitui, limita ou prevalece sobre qualquer acordo escrito separado celebrado com a MICRORETAILX LLC.

16. DIGITAL MILLENNIUM COPYRIGHT ACT (DMCA) SAFE HARBOR

A MICRORETAILX LLC respeita os direitos de propriedade intelectual e espera que os utilizadores façam o mesmo. Em conformidade com o Digital Millennium Copyright Act (17 U.S.C. § 512), foi implementado o seguinte procedimento para comunicar alegadas infrações de direitos de autor:

• Notificação. Se considerar que qualquer Conteúdo ou Submissão disponível no Website infringe os seus direitos de autor, pode enviar uma notificação escrita ao nosso Agente Designado em legal@microretailx.com. Para ser eficaz, a notificação deve cumprir substancialmente os requisitos de 17 U.S.C. § 512(c)(3), incluindo: (i) assinatura física ou eletrónica do titular dos direitos de autor ou agente autorizado; (ii) identificação da obra protegida alegadamente infringida; (iii) identificação do material alegadamente infrator e respetiva localização; (iv) dados de contacto da parte reclamante; e (v) declaração de boa-fé de que a utilização não é autorizada.

• Remoção. Após receção de uma notificação válida, a MICRORETAILX LLC reserva-se o direito de remover ou desativar o acesso ao material alegadamente infrator, a seu exclusivo critério e sem aviso prévio.

• Contra-notificação. Quando aplicável, pode ser apresentada uma contra-notificação ao abrigo do DMCA. A MICRORETAILX LLC pode repor o material se legalmente obrigada a fazê-lo.

• Limitação. Este procedimento aplica-se exclusivamente a matérias de direitos de autor abrangidas pelo DMCA. Para quaisquer outras questões jurídicas, regulatórias ou de compliance, consulte a secção geral de contacto destes Termos.

17. LINKS EXTERNOS; SERVIÇOS DE TERCEIROS

O Website pode conter links para serviços de terceiros. A MICRORETAILX LLC não assume responsabilidade pelo conteúdo, práticas ou políticas de terceiros. O acesso é feito por sua conta e risco.

18. ISENÇÕES; SEM CONFIANÇA

O Website não presta aconselhamento jurídico, fiscal, financeiro ou profissional.

Nada no Website deve ser interpretado como orientação regulatória, declaração de compliance ou garantia de conformidade com qualquer regime jurídico ou regulatório local específico.

Quaisquer declarações prospetivas são inerentemente incertas e não garantem resultados futuros.

19. DISPONIBILIDADE; “TAL COMO ESTÁ”

O Website é fornecido “tal como está” e “conforme disponível”, sem garantias de qualquer tipo, expressas ou implícitas.

20. LIMITAÇÃO DE RESPONSABILIDADE

Na máxima extensão permitida pela legislação aplicável, a MICRORETAILX LLC não será responsável por quaisquer danos diretos ou indiretos decorrentes da utilização do Website.

21. INDEMNIZAÇÃO

Concorda em indemnizar e isentar a MICRORETAILX LLC de quaisquer reclamações, responsabilidades, danos ou despesas decorrentes da sua utilização ilícita do Website ou violação destes Termos.

22. COMPLIANCE; CONTROLOS DE EXPORTAÇÃO; SANÇÕES

Concorda em cumprir as leis aplicáveis de controlo de exportações e sanções, incluindo os U.S. Export Administration Regulations (EAR) e os regimes do Office of Foreign Assets Control (OFAC), bem como, quando aplicável, os quadros de sanções relevantes das Nações Unidas, União Europeia ou outros regimes internacionais.

23. COMUNICAÇÕES ELETRÓNICAS; AVISOS

Todos os avisos e comunicações jurídicas devem ser enviados para: legal@microretailx.com.

24. ALTERAÇÕES A ESTES TERMOS

A MICRORETAILX LLC pode modificar estes Termos a qualquer momento. A utilização continuada do Website constitui aceitação dos Termos revistos.

25. LEI APLICÁVEL; JURISDIÇÃO EXCLUSIVA; LÍNGUA

Estes Termos são regidos pelas leis do Estado do Delaware, Estados Unidos da América. Qualquer litígio ficará sujeito à jurisdição exclusiva dos tribunais estaduais ou federais situados no Delaware.

A versão inglesa prevalece; as traduções são fornecidas apenas para conveniência informativa.

26. SEPARABILIDADE; ACORDO INTEGRAL

Se qualquer disposição for considerada inválida ou inexequível, as restantes disposições permanecerão em pleno vigor e efeito. Estes Termos constituem o acordo integral relativo à utilização do Website.

27. CONTACTO

Comunicações jurídicas e de compliance: legal@microretailx.com
`
    },

    privacy: {
      title: "Política de privacidade — MICRORETAILX",
      description: "Política global de privacidade e enquadramento de proteção de dados da MICRORETAILX.",
      body: `MICRORETAILX — POLÍTICA DE PRIVACIDADE

MICRORETAILX LLC (Delaware, Estados Unidos)
MICRORETAILX GROUP – Enquadramento operacional global

Última atualização: 01-01-2026
Data de entrada em vigor: 01-01-2026

Sede registada e Registered Agent:
Corporation Trust Center
1209 Orange Street
Wilmington, DE 19801
United States of America

1. ÂMBITO E FINALIDADE

Esta Política de Privacidade descreve como a MICRORETAILX LLC (“MICRORETAILX”, “nós”, “nos”, “nosso”) concebe e opera este Website do ponto de vista da proteção de dados e privacidade.

O Website tem natureza estritamente informativa e conceptual. Não disponibiliza contas de utilizador, não exige registo e não oferece produtos ou serviços para venda.

2. ESTRATÉGIA ZERO DATA (PRIVACY BY DESIGN)

Este Website foi intencionalmente concebido como um ambiente Zero Data.

A MICRORETAILX LLC não recolhe, solicita, exige, armazena, monetiza ou explora intencionalmente dados pessoais de visitantes. Não são criados perfis de utilizador, identificadores ou conjuntos de dados comportamentais.

Os princípios de privacidade são incorporados por design e por defeito, incluindo minimização de dados, limitação da finalidade, transparência, segurança e responsabilização.

3. SEM CONTAS DE UTILIZADOR; SEM REGISTO

O Website não oferece contas de utilizador, áreas de login, formulários de registo ou sistemas de adesão.

Os visitantes não são obrigados a fornecer dados pessoais para aceder ao conteúdo do Website.

4. SEM PROFILING; SEM RASTREIO; SEM PUBLICIDADE

O Website não implementa:

• profiling comportamental ou baseado em interesses
• tecnologias de publicidade ou marketing
• plataformas de analítica ou ferramentas de medição de audiência
• mecanismos de rastreio entre sites ou serviços

A MICRORETAILX LLC não realiza decisões automatizadas, profiling ou análise comportamental dos visitantes.

5. METADADOS TÉCNICOS E DADOS DE LOG

Como na maioria dos serviços de Internet, metadados técnicos limitados podem ser tratados incidentalmente ao aceder ao Website, como endereços IP, cabeçalhos de pedido, timestamps ou informações ao nível do protocolo.

Estes metadados são tratados estritamente para fins técnicos e de segurança, incluindo:

• garantir distribuição de conteúdos segura e fiável
• proteção contra abusos, acessos automatizados e ataques
• manutenção da integridade e disponibilidade da rede

Estes metadados não são utilizados para identificação, profiling, marketing ou analítica e são conservados apenas durante o período mínimo necessário.

6. FORNECEDORES DE INFRAESTRUTURA DE TERCEIROS

O Website é disponibilizado através de fornecedores de infraestrutura de terceiros, incluindo redes de distribuição de conteúdos (CDNs), serviços DNS e plataformas de alojamento estático, como Cloudflare, Inc. e GitHub, Inc.

Estes fornecedores podem tratar metadados técnicos limitados exclusivamente para desempenhar funções de infraestrutura, segurança e distribuição em nome da MICRORETAILX LLC.

A MICRORETAILX LLC não ativa funcionalidades de analítica, rastreio, publicidade ou monitorização comportamental oferecidas por esses fornecedores.

7. TRANSFERÊNCIAS INTERNACIONAIS DE DADOS

Quando metadados técnicos são tratados através de infraestrutura globalmente distribuída, esse tratamento pode envolver transferências internacionais de dados.

Tais transferências são realizadas com salvaguardas técnicas e organizativas adequadas e, quando aplicável, baseiam-se em mecanismos reconhecidos de transferência internacional, como cláusulas contratuais-tipo (SCC) ou enquadramentos legais equivalentes.

A MICRORETAILX LLC não utiliza transferências internacionais para exploração comercial de dados pessoais.

8. COOKIES, IDENTIFICADORES TÉCNICOS E SEGURANÇA DA INFRAESTRUTURA

Por defeito, este Website não utiliza cookies de marketing, publicidade, analítica, targeting ou rastreio comportamental.

Divulgação técnica. O Website depende exclusivamente de identificadores técnicos estritamente necessários para operações essenciais de infraestrutura e segurança. Estes podem incluir identificadores definidos ou tratados por redes de distribuição de conteúdos (CDNs), fornecedores DNS, plataformas de alojamento e camadas de segurança.

Esses identificadores são utilizados apenas para:

• Segurança e prevenção de abuso: operação de web application firewalls (WAF), sistemas de mitigação de bots, limitação de taxa e proteções ao nível da rede para impedir acesso não autorizado, abuso automatizado e ataques de negação de serviço.

• Distribuição de conteúdos e disponibilidade: distribuição segura e eficiente de conteúdos através de CDNs globais, balanceadores de carga e infraestrutura distribuída, garantindo desempenho, resiliência e disponibilidade.

Estes identificadores técnicos não permitem profiling de utilizadores, monitorização comportamental, publicidade ou atividades de marketing e não são utilizados para identificar ou rastrear pessoas entre websites ou serviços.

Quando tratados, quaisquer metadados técnicos, como endereços IP ou cabeçalhos de pedido, são processados estritamente para fins de segurança, integridade e operação, e apenas pelo período mínimo necessário.

Estes identificadores estão geralmente isentos de requisitos de consentimento ao abrigo dos regimes aplicáveis de proteção de dados e ePrivacy, por serem estritamente necessários para a disponibilização, segurança e correto funcionamento do Website.

9. DIREITOS DOS TITULARES DOS DADOS

Dada a natureza do Website e a ausência de recolha intencional de dados pessoais, muitos direitos dos titulares podem não ser aplicáveis na prática.

Quando exigido pela legislação aplicável, as pessoas podem contactar a MICRORETAILX LLC para solicitar informação sobre eventual tratamento de dados relacionado com registos técnicos de acesso.

Os pedidos podem ser enviados para: legal@microretailx.com

A MICRORETAILX LLC reserva-se o direito de verificar pedidos e limitar respostas quando permitido pela lei.

10. SEGURANÇA DOS DADOS

A MICRORETAILX LLC implementa medidas técnicas e organizativas adequadas para proteger o Website e a sua infraestrutura contra acesso não autorizado, utilização indevida, alteração ou destruição.

As medidas de segurança incluem, entre outras, cifragem em trânsito, cabeçalhos de segurança rigorosos, controlos de acesso e proteções ao nível da rede.

11. DECLARAÇÃO SECURITY-BY-DESIGN

Este Website foi intencionalmente concebido com uma arquitetura security-first e privacy-by-design. O seu design técnico visa minimizar a exposição de dados, reduzir a superfície de ataque e evitar tratamento desnecessário de dados, protegendo os utilizadores por defeito em vez de depender de controlos posteriores ou mecanismos de consentimento.

As medidas de segurança são implementadas como parte da infraestrutura essencial e do modelo operacional do Website, e não como funcionalidades opcionais.

12. SEM TARGETING; SEM ESTABELECIMENTO

A MICRORETAILX LLC não se dirige ativamente a utilizadores, clientes, investidores ou autoridades em qualquer jurisdição específica.

A mera acessibilidade do Website a partir de uma determinada jurisdição não constitui targeting, estabelecimento, licenciamento, autorização ou atividade regulada nessa jurisdição.

13. PRIVACIDADE DE MENORES

O Website não se destina a crianças e a MICRORETAILX LLC não recolhe conscientemente dados pessoais de menores.

14. ALTERAÇÕES A ESTA POLÍTICA DE PRIVACIDADE

A MICRORETAILX LLC pode atualizar esta Política de Privacidade periodicamente. As alterações entram em vigor no momento da publicação no Website.

15. LEI APLICÁVEL E LÍNGUA

Esta Política de Privacidade é regida pelas leis do Estado do Delaware, Estados Unidos da América.

A versão inglesa prevalece. As traduções são fornecidas apenas para conveniência informativa e não têm efeito contratual ou jurídico.

16. CONTACTO

Para questões relacionadas com privacidade, assuntos jurídicos ou compliance:
legal@microretailx.com
`
    },

    cookies: {
      title: "Política de cookies — MICRORETAILX",
      description: "Política global de cookies e enquadramento técnico da MICRORETAILX.",
      body: `MICRORETAILX — POLÍTICA DE COOKIES

MICRORETAILX LLC (Delaware, Estados Unidos)
MICRORETAILX GROUP – Enquadramento operacional global

Última atualização: 21-08-2026
Data de entrada em vigor: 01-01-2026

Sede registada e Registered Agent:
Corporation Trust Center
1209 Orange Street
Wilmington, DE 19801
United States of America

1. ÂMBITO E FINALIDADE

Esta Política de Cookies explica como cookies e identificadores técnicos semelhantes podem ser utilizados em ligação com este Website, operado pela MICRORETAILX LLC (“MICRORETAILX”, “nós”, “nos”, “nosso”).

Este Website tem natureza estritamente informativa e conceptual e deve ser lido em conjunto com a Política de Privacidade e os Termos Globais de Utilização, que em conjunto constituem o enquadramento jurídico do Website.

2. ESTRATÉGIA ZERO DATA

Este Website foi intencionalmente concebido e operado segundo uma Estratégia Zero Data.

A MICRORETAILX LLC não utiliza cookies ou tecnologias semelhantes para:
• identificar utilizadores individuais
• criar perfis de utilizador
• realizar rastreio comportamental ou baseado em interesses
• apresentar publicidade ou marketing
• monetizar dados pessoais

O Website não oferece contas de utilizador, sistemas de registo ou serviços interativos que exijam dados pessoais.

3. COOKIES E IDENTIFICADORES TÉCNICOS ESTRITAMENTE NECESSÁRIOS

Por defeito, o Website depende exclusivamente de cookies estritamente necessários e/ou identificadores técnicos equivalentes exigidos para a infraestrutura essencial, segurança e disponibilidade.

Estes identificadores podem ser definidos ou tratados por:
• redes de distribuição de conteúdos (CDNs)
• fornecedores de DNS e alojamento
• camadas de segurança, integridade e disponibilidade

São utilizados exclusivamente para fins como:
• balanceamento de carga e distribuição de tráfego
• prevenção de abuso e limitação de taxa
• mitigação de bots e proteção contra acesso automatizado
• distribuição segura e fiável de conteúdos

Estes cookies e identificadores são essenciais para o correto funcionamento do Website e não podem ser desativados sem comprometer a sua segurança ou disponibilidade.

ARMAZENAMENTO LOCAL UTILIZADO POR ESTE WEBSITE

Além de cookies estritamente necessários, o Website armazena um pequeno número de preferências técnicas diretamente no local storage do navegador. Estas entradas são exclusivamente first-party, nunca são transmitidas à MICRORETAILX LLC nem a terceiros e permanecem no dispositivo até serem removidas pelo visitante.

• mx_consent — regista as escolhas de cookies do visitante, juntamente com a versão de âmbito, a versão da política e o timestamp da decisão. Finalidade: respeitar a escolha e documentar quando e sob que versão da política foi efetuada.
• mx_lang — regista o idioma de apresentação selecionado pelo visitante. Finalidade: manter o mesmo idioma entre páginas e visitas.
• mx_a11y — regista preferências de acessibilidade como tamanho do texto, contraste e tipo de letra legível. Finalidade: preservar as definições de leitura escolhidas.
• mx_reader_immersive — regista se o modo de leitura imersiva está ativo. Finalidade: preservar o layout de leitura selecionado.

Estas entradas não contêm identificadores, dados pessoais nem informação comportamental. Podem ser removidas a qualquer momento nas definições do navegador ou através do controlo de preferências de cookies disponível no rodapé de todas as páginas.

4. SEM ANALÍTICA; SEM MARKETING; SEM RASTREIO

O Website não implementa:
• ferramentas de analítica ou medição de audiência
• cookies de marketing ou publicidade
• sistemas de personalização ou recomendação
• mecanismos de rastreio entre websites ou serviços

A MICRORETAILX LLC não realiza decisões automatizadas ou profiling com base no acesso ao Website.

5. TECNOLOGIAS OPCIONAIS E CONSENTIMENTO

Cookies opcionais ou tecnologias semelhantes não estão ativos por defeito.

Se no futuro forem introduzidas tecnologias opcionais, apenas serão ativadas:
• após consentimento explícito do utilizador; e
• quando esse consentimento for exigido pela legislação aplicável.

Quando aplicável, as preferências de consentimento são geridas através da interface de consentimento do Website.

6. METADADOS TÉCNICOS E DADOS DE LOG

Como é normal nos serviços de Internet, metadados técnicos limitados podem ser tratados incidentalmente ao aceder ao Website, como endereços IP, cabeçalhos de pedido, timestamps ou informação ao nível do protocolo.

Estes metadados são tratados estritamente para fins técnicos e de segurança, incluindo:
• proteção da infraestrutura e prevenção de abuso
• deteção e mitigação de atividade automatizada ou maliciosa
• garantia de disponibilidade, integridade e resiliência do Website

Estes metadados não são utilizados para identificação, profiling, analítica ou marketing e são conservados apenas durante o período mínimo necessário.

7. CONTEXTO INTERNACIONAL E INFRAESTRUTURA

O Website pode ser acedido globalmente e depende de infraestrutura técnica distribuída.

Quando metadados técnicos são tratados através de sistemas globalmente distribuídos, esse tratamento pode envolver transferências internacionais de dados.

Tais transferências são efetuadas sob salvaguardas técnicas e organizativas adequadas e, quando aplicável, baseiam-se em mecanismos reconhecidos de transferência internacional.

8. SEM TARGETING; SEM INTENÇÃO JURISDICIONAL

A MICRORETAILX LLC não se dirige ativamente a utilizadores ou públicos em qualquer jurisdição específica.

A mera acessibilidade do Website a partir de qualquer jurisdição não constitui targeting, estabelecimento, licenciamento, autorização ou atividade regulada nessa jurisdição.

9. ALTERAÇÕES A ESTA POLÍTICA DE COOKIES

A MICRORETAILX LLC pode atualizar periodicamente esta Política de Cookies. Quaisquer alterações entram em vigor no momento da publicação no Website.

10. LEI APLICÁVEL E LÍNGUA

Esta Política de Cookies é regida pelas leis do Estado do Delaware, Estados Unidos da América.

A versão inglesa prevalece. As traduções são fornecidas apenas para conveniência informativa e não têm efeito jurídico.

11. CONTACTO

Para questões relacionadas com cookies, privacidade ou compliance:
legal@microretailx.com
`
    },

    legal: {
      title: "Aviso legal — MICRORETAILX",
      description: "Identificação societária e informação jurídica da MICRORETAILX LLC.",
      body: `MICRORETAILX — AVISO LEGAL

MICRORETAILX LLC (Delaware, Estados Unidos)
MICRORETAILX GROUP – Enquadramento operacional global

Última atualização: 01-01-2026
Data de entrada em vigor: 01-01-2026

Sede registada e Registered Agent:
Corporation Trust Center
1209 Orange Street
Wilmington, DE 19801
United States of America

1. ENQUADRAMENTO JURÍDICO; HIERARQUIA DE DOCUMENTOS; RELAÇÃO COM OUTRAS POLÍTICAS

Este Aviso Legal faz parte do enquadramento jurídico que regula o acesso e utilização do Website.

Documentos adicionais podem aplicar-se dependendo da natureza da interação do visitante com o Website, incluindo:
• Termos de Utilização
• Política de Privacidade
• Política de Cookies (e quaisquer definições de Preferências de Cookies / CMP apresentadas no Website)

Em caso de conflito entre documentos, aplica-se a seguinte ordem de prevalência:
(i) este Aviso Legal, (ii) os Termos de Utilização, (iii) a Política de Privacidade e (iv) a Política de Cookies, salvo se legislação imperativa exigir de outro modo para uma matéria específica.

Se qualquer disposição deste Aviso Legal for considerada inválida ou inexequível, as restantes disposições permanecerão em pleno vigor e efeito.

A MICRORETAILX LLC pode rever, atualizar e melhorar periodicamente este enquadramento jurídico para refletir a evolução de normas regulatórias, orientações de supervisão, práticas de segurança e alterações operacionais.

2. IDENTIFICAÇÃO DO OPERADOR DO WEBSITE

Este website (o “Website”) é operado e controlado exclusivamente pela MICRORETAILX LLC, uma sociedade de responsabilidade limitada devidamente constituída e existente ao abrigo das leis do Estado do Delaware, Estados Unidos da América.

Qualquer referência a “MICRORETAILX GROUP”, “group”, “network”, “ecosystem”, “labs”, “nodes”, “regions” ou termos semelhantes é puramente descritiva e conceptual e não implica a existência de entidade jurídica separada, sucursal, subsidiária, parceria, joint venture, agência ou estabelecimento estável, salvo indicação expressa em contrário num acordo escrito.

3. FINALIDADE DO WEBSITE

O Website é disponibilizado exclusivamente para fins informativos, conceptuais e exploratórios.

Não constitui, nem deve ser interpretado como:
• oferta ou solicitação de produtos ou serviços
• proposta de investimento, promoção financeira ou comunicação regulada
• aconselhamento jurídico, fiscal, financeiro ou profissional
• atividade regulada ou licenciada em qualquer jurisdição

O Website não permite transações, registos, contas de utilizador ou prestação de serviços.

4. SEM CONFIANÇA; SEM ACONSELHAMENTO

Todo o conteúdo disponibilizado no Website é fornecido exclusivamente para fins de informação geral.

A MICRORETAILX LLC não presta declarações ou garantias quanto à exatidão, integralidade ou adequação do conteúdo a qualquer finalidade específica. Qualquer confiança no conteúdo do Website é por conta e risco do visitante.

5. PROPRIEDADE INTELECTUAL

Salvo indicação expressa em contrário, todo o conteúdo do Website, incluindo, sem limitação, texto, gráficos, design, layout, código-fonte, simulações, visualizações, modelos e documentação, é propriedade exclusiva da MICRORETAILX LLC.

Esse conteúdo é protegido pelas leis aplicáveis de propriedade intelectual, direitos de autor e segredos comerciais em todo o mundo.

Nenhum conteúdo pode ser copiado, reproduzido, distribuído, modificado ou explorado sem autorização prévia por escrito da MICRORETAILX LLC, salvo quando permitido por legislação imperativa.

6. UTILIZAÇÃO ACEITÁVEL

Os visitantes concordam em não:
• utilizar indevidamente ou interferir com o Website ou a sua infraestrutura
• tentar acesso não autorizado ou contornar medidas de segurança
• realizar scraping, engenharia inversa ou extração automatizada
• utilizar o Website para fins ilícitos ou proibidos

A MICRORETAILX LLC reserva-se o direito de adotar medidas técnicas, jurídicas e organizativas adequadas para proteger o Website e a sua integridade.

7. LINKS DE TERCEIROS

O Website pode conter links para websites ou serviços de terceiros.

A MICRORETAILX LLC não assume responsabilidade pelo conteúdo, disponibilidade, segurança ou práticas de terceiros. O acesso a recursos de terceiros é da exclusiva responsabilidade do visitante.

8. DISPONIBILIDADE E ISENÇÃO DE RESPONSABILIDADE

O Website é disponibilizado “tal como está” e “conforme disponível”.

A MICRORETAILX LLC não garante que o Website funcione sem interrupções, erros ou vulnerabilidades. Na máxima extensão permitida pela legislação aplicável, são excluídas todas as garantias expressas ou implícitas.

9. LIMITAÇÃO DE RESPONSABILIDADE

Na máxima extensão permitida pela legislação aplicável, a MICRORETAILX LLC não será responsável por quaisquer danos diretos, indiretos, incidentais, consequenciais ou especiais decorrentes ou relacionados com a utilização, ou impossibilidade de utilização, do Website.

10. SEM TARGETING; SEM PROFILING POR DEFEITO; SEM ESTABELECIMENTO

A MICRORETAILX LLC não se dirige ativamente a utilizadores ou públicos em qualquer jurisdição específica.

A mera acessibilidade do Website a partir de uma determinada jurisdição não constitui targeting, estabelecimento, licenciamento, autorização ou atividade regulada nessa jurisdição.

Salvo divulgação expressa na camada de política aplicável e, quando exigido, ativação pelo visitante através de definições explícitas ou mecanismos de consentimento, a MICRORETAILX LLC não realiza:
• publicidade comportamental ou targeting de marketing
• profiling de utilizadores para fins publicitários
• decisões automatizadas que produzam efeitos jurídicos ou efeitos igualmente significativos

11. LEI APLICÁVEL E JURISDIÇÃO

Este Aviso Legal é regido pelas leis do Estado do Delaware, Estados Unidos da América.

Qualquer litígio decorrente ou relacionado com o Website ou este Aviso Legal ficará sujeito à jurisdição exclusiva dos tribunais estaduais ou federais localizados no Estado do Delaware, sem prejuízo de quaisquer normas imperativas de proteção do consumidor que possam ser aplicáveis numa jurisdição específica.

12. LÍNGUA

A versão inglesa deste Aviso Legal prevalece. Quaisquer traduções são fornecidas apenas para conveniência informativa e não têm efeito jurídico.

13. CONTACTO

Para questões jurídicas ou de compliance:
legal@microretailx.com
`
    }
  });


  register("nl", {
    "nav.about": "Info",
    "nav.home": "Home",
    "nav.verticals": "Verticalen",
    "nav.contact": "Contact",
    "footer.terms": "Voorwaarden",
    "footer.privacy": "Privacy",
    "footer.cookies": "Cookies",
    "footer.legal": "Juridisch",
    "cookie.prefs": "Cookievoorkeuren",
    "reader.toggle": "Leesmodus",
    "cmp.title": "Privacy & cookies",
    "cmp.desc": "We respecteren uw privacy. Deze site gebruikt geen advertentie- of trackingcookies. Noodzakelijke cookies zijn altijd actief voor beveiliging en basisfunctionaliteit. Optionele cookies kunt u accepteren of weigeren.",
    "cmp.necessary": "Noodzakelijk",
    "cmp.necessary.desc": "Beveiliging en kernfunctionaliteit.",
    "cmp.analytics": "Analyse",
    "cmp.analytics.desc": "Optioneel: anonieme gebruiksgegevens om de site te verbeteren.",
    "cmp.marketing": "Marketing",
    "cmp.marketing.desc": "Optioneel: personalisatie en campagnemeting.",
    "cmp.noproviders": "Geen actieve providers",
    "cmp.reject": "Alles weigeren",
    "cmp.accept": "Alles accepteren",
    "cmp.save": "Voorkeuren opslaan"
  }, {
    terms: {
      title: "Wereldwijde gebruiksvoorwaarden — MICRORETAILX",
      description: "Wereldwijde gebruiksvoorwaarden en juridisch kader van MICRORETAILX.",
      body: `MICRORETAILX – WERELDWIJDE GEBRUIKSVOORWAARDEN

MICRORETAILX LLC (Delaware, Verenigde Staten)
MICRORETAILX GROUP – Wereldwijd operationeel kader

Laatst bijgewerkt: 01-01-2026
Ingangsdatum: 01-01-2026

Statutaire zetel en Registered Agent:
Corporation Trust Center
1209 Orange Street
Wilmington, DE 19801
United States of America

1. DEFINITIES

• “MICRORETAILX”, “wij”, “ons” en “onze” verwijzen naar MICRORETAILX LLC, een limited liability company die rechtsgeldig is opgericht en bestaat naar het recht van de staat Delaware, Verenigde Staten van Amerika.
• “Website” verwijst naar deze website en alle bijbehorende pagina’s, subdomeinen, interfaces, interactieve elementen, broncode, visualisaties en inhoud die via de website beschikbaar worden gesteld.
• “MICRORETAILX GROUP” verwijst naar een conceptueel en strategisch kader dat wordt gebruikt om huidige en/of toekomstige initiatieven te beschrijven en vormt geen afzonderlijke rechtspersoon, tenzij dit uitdrukkelijk schriftelijk wordt aangegeven.
• “Verticals” betekent thematische domeinen die uitsluitend worden gebruikt als conceptueel en strategisch classificatiekader.
• “Inhoud” omvat alle tekst, grafische elementen, ontwerp, broncode, visualisaties, simulaties, modellen, workflows en documentatie.
• “Inzendingen” betekent elke opmerking, idee, voorstel of materiaal dat door u wordt ingediend.

2. EXPLOITANT, TOEPASSINGSGEBIED EN AANVAARDING

Deze Voorwaarden regelen uw toegang tot en gebruik van de Website. Door de Website te bezoeken of te gebruiken erkent u dat u deze Voorwaarden hebt gelezen en begrepen, ermee instemt er juridisch aan gebonden te zijn en verklaart u dat u daartoe rechtsbekwaam bent.

3. IDENTITEIT VAN DE EXPLOITANT, JURIDISCH ADRES EN KENNISGEVINGEN

Deze Website wordt uitsluitend geëxploiteerd en beheerd door MICRORETAILX LLC, een limited liability company uit Delaware.

Registered Agent: Corporation Trust Center, 1209 Orange Street, Wilmington, DE 19801, USA.

Juridische en compliancecommunicatie moet worden verzonden naar: legal@microretailx.com.

Verwijzingen naar “nodes”, “labs”, “regions” of “verticals” mogen niet worden uitgelegd als het oprichten van een filiaal, kantoor, dochteronderneming, vertegenwoordiging of fiscale nexus in een rechtsgebied buiten de staat Delaware.

4. WERELDWIJD BEDRIJFSMODEL; GEEN PARTNERSCHAP; GEEN VERTEGENWOORDIGING

MICRORETAILX opereert wereldwijd via conceptuele, verkennende en strategische initiatieven. Tenzij uitdrukkelijk anders overeengekomen in een schriftelijke overeenkomst die door MICRORETAILX LLC is ondertekend:

(i) creëert niets op de Website een partnerschap, joint venture, arbeidsrelatie of agentschap;

(ii) is geen enkele partij bevoegd MICRORETAILX LLC juridisch te binden;

(iii) hebben beschrijvende termen zoals “group”, “network” of “ecosystem” op zichzelf geen juridische betekenis.

Het gebruik van de Website creëert geen vaste inrichting of vergelijkbare belastbare aanwezigheid in enig rechtsgebied.

5. STATUS VAN DE WEBSITE; GEEN AANBOD; GEEN VERBINTENIS

De Website wordt uitsluitend aangeboden voor informatieve, conceptuele en verkennende doeleinden. Niets op de Website vormt in enig rechtsgebied een aanbod, uitnodiging, investeringsvoorstel, aansporing of gereguleerde activiteit.

6. VERTICAL-KADER (CONCEPTUEEL EN NIET-OPERATIONEEL)

Elke verwijzing naar verticals vertegenwoordigt uitsluitend een conceptueel kader en impliceert niet het bestaan van operationele bedrijfseenheden, producten, diensten, vergunde activiteiten of gereguleerde activiteiten.

7. ZERO DATA-STRATEGIE (PRIVACY BY DESIGN)

De Website is ontworpen volgens een Zero Data-strategie: geen gebruikersaccounts, geen profilering en standaard geen trackingtechnologieën van derden, behalve wanneer dit strikt onvermijdelijk is als gevolg van standaard internetprotocollen of vereist is op grond van toepasselijk recht.

8. COOKIES EN TOESTEMMING

Standaard worden uitsluitend strikt noodzakelijke cookies of gelijkwaardige technische identificatoren gebruikt. Optionele technologieën worden alleen geactiveerd na uitdrukkelijke toestemming van de gebruiker wanneer dit wettelijk vereist is.

Strikt noodzakelijke cookies en/of technische identificatoren kunnen door content delivery networks, hostingproviders en beveiligingslagen uitsluitend worden ingesteld voor load balancing, misbruikpreventie, botmitigatie en veilige contentlevering.

9. HOSTING, LEVERING EN BEVEILIGING

De Website wordt gehost op infrastructuur van derden. Beperkte technische logs en metadata kunnen uitsluitend worden verwerkt voor beveiliging, integriteit, misbruikpreventie en betrouwbare contentlevering.

Een dergelijke verwerking verandert het informatieve karakter van de Website niet en vormt geen commerciële activiteit, profilering of rechtsgebiedspecifieke targeting.

De enkele toegankelijkheid van de Website vormt geen commerciële activiteit, targeting of gereguleerde aanwezigheid in enig rechtsgebied.

10. WERELDWIJDE GEGEVENSBESCHERMING EN REGELGEVENDE NALEVING

MICRORETAILX LLC ontwerpt en exploiteert deze Website in overeenstemming met internationaal erkende beginselen voor gegevensbescherming en privacy, waaronder privacy by design, gegevensminimalisatie, doelbinding, transparantie, beveiliging en verantwoordingsplicht.

De Website is hoofdzakelijk informatief en conceptueel. Zij biedt geen gebruikersaccounts, vereist geen registratie en voert geen profilering, gedragstracking of advertentiegerichte verwerking uit.

Contentlevering en technische werking steunen op wereldwijd verspreide infrastructuurproviders. Voor zover incidentele verwerking van technische metadata zoals IP-adressen of verbindingsgegevens plaatsvindt, is die verwerking strikt beperkt tot wat noodzakelijk is voor beveiliging, integriteit, misbruikpreventie en betrouwbare contentlevering.

Elke dergelijke verwerking vindt plaats onder passende contractuele, technische en organisatorische waarborgen, waaronder gegevensverwerkingsovereenkomsten en erkende internationale doorgiftemechanismen waar van toepassing. Waar van toepassing wordt gebruikgemaakt van standaardcontractbepalingen (SCC’s) of gelijkwaardige rechtmatige mechanismen voor internationale gegevensoverdracht. MICRORETAILX LLC verzamelt, bewaart of exploiteert niet bewust persoonsgegevens voor commerciële, profilerings- of marketingdoeleinden.

Deze aanpak is bedoeld om aan te sluiten bij de beginselen van belangrijke wereldwijde kaders voor gegevensbescherming en privacy in meerdere rechtsgebieden.

De enkele toegankelijkheid van de Website vanuit een bepaald rechtsgebied vormt op zichzelf geen targeting, vestiging, vergunningverlening, toestemming of gereguleerde activiteit in dat rechtsgebied.

MICRORETAILX LLC richt zich niet actief op gebruikers, klanten, investeerders, toezichthouders of autoriteiten in een specifiek rechtsgebied.

11. TOEGESTAAN GEBRUIK; VERBODEN GEDRAG

U mag niet overgaan tot datascraping, reverse engineering, algoritme-extractie, training van artificiële-intelligentiemodellen, verstoring van infrastructuur of misbruik van de Website, behalve voor zover dit uitdrukkelijk is toegestaan door dwingend recht.

12. BEWARING EN HANDHAVING

MICRORETAILX LLC behoudt zich het recht voor technische, organisatorische en juridische maatregelen te nemen om de Website te beschermen en bewijs van misbruik of onrechtmatige activiteiten te bewaren.

13. INTELLECTUELE EIGENDOM; BEDRIJFSGEHEIMEN

Alle rechten, titels en belangen in de Website en de Inhoud zijn exclusief eigendom van MICRORETAILX LLC en worden wereldwijd beschermd door toepasselijke wetgeving inzake intellectuele eigendom en bedrijfsgeheimen.

14. VERTROUWELIJKHEID VAN NIET-OPENBARE MATERIALEN

Niet-openbare of beperkte materialen mogen niet worden openbaar gemaakt, verspreid of gereproduceerd zonder voorafgaande schriftelijke toestemming van MICRORETAILX LLC.

15. INZENDINGEN EN FEEDBACK

Door materiaal in te dienen verleent u MICRORETAILX LLC een wereldwijde, royaltyvrije, niet-exclusieve en eeuwigdurende licentie om dergelijke inzendingen voor legitieme bedrijfsdoeleinden te gebruiken, reproduceren, aanpassen en integreren.

Deze licentie geldt uitsluitend voor ongevraagde inzendingen en vervangt, beperkt of overschrijft geen afzonderlijke schriftelijke overeenkomst die met MICRORETAILX LLC is gesloten.

16. DIGITAL MILLENNIUM COPYRIGHT ACT (DMCA) SAFE HARBOR

MICRORETAILX LLC respecteert intellectuele-eigendomsrechten en verwacht hetzelfde van gebruikers. Overeenkomstig de Digital Millennium Copyright Act (17 U.S.C. § 512) geldt de volgende procedure voor het melden van vermeende auteursrechtinbreuk:

• Kennisgeving. Als u van mening bent dat Inhoud of een Inzending op de Website inbreuk maakt op uw auteursrecht, kunt u een schriftelijke kennisgeving sturen naar onze aangewezen contactpersoon via legal@microretailx.com. Om geldig te zijn moet deze kennisgeving in wezen voldoen aan de eisen van 17 U.S.C. § 512(c)(3), waaronder: (i) een fysieke of elektronische handtekening van de auteursrechthebbende of bevoegde vertegenwoordiger; (ii) identificatie van het auteursrechtelijk beschermde werk; (iii) identificatie en locatie van het vermeend inbreukmakende materiaal; (iv) contactgegevens van de klagende partij; en (v) een verklaring te goeder trouw dat het gebruik niet is toegestaan.

• Verwijdering. Na ontvangst van een geldige kennisgeving behoudt MICRORETAILX LLC zich het recht voor het vermeend inbreukmakende materiaal naar eigen goeddunken en zonder voorafgaande kennisgeving te verwijderen of de toegang ertoe uit te schakelen.

• Tegenkennisgeving. Waar van toepassing kan overeenkomstig de DMCA een tegenkennisgeving worden ingediend. MICRORETAILX LLC kan het materiaal herstellen indien dit wettelijk vereist is.

• Beperking. Deze procedure geldt uitsluitend voor auteursrechtelijke kwesties onder de DMCA. Voor andere juridische, regelgevende of compliancevragen verwijzen wij naar het algemene contactgedeelte van deze Voorwaarden.

17. EXTERNE LINKS; DIENSTEN VAN DERDEN

De Website kan links bevatten naar diensten van derden. MICRORETAILX LLC aanvaardt geen verantwoordelijkheid voor inhoud, praktijken of beleid van derden. Toegang is op eigen risico.

18. DISCLAIMERS; GEEN VERTROUWEN

De Website verstrekt geen juridisch, fiscaal, financieel of professioneel advies.

Niets op de Website mag worden uitgelegd als regelgevende richtlijn, complianceverklaring of garantie van conformiteit met een specifiek lokaal juridisch of regelgevend regime.

Toekomstgerichte verklaringen zijn per definitie onzeker en garanderen geen toekomstige resultaten.

19. BESCHIKBAARHEID; “AS IS”

De Website wordt aangeboden “zoals zij is” en “zoals beschikbaar”, zonder enige uitdrukkelijke of impliciete garantie.

20. BEPERKING VAN AANSPRAKELIJKHEID

Voor zover toegestaan door toepasselijk recht is MICRORETAILX LLC niet aansprakelijk voor directe of indirecte schade die voortvloeit uit het gebruik van de Website.

21. VRIJWARING

U stemt ermee in MICRORETAILX LLC te vrijwaren tegen aanspraken, aansprakelijkheden, schade of kosten die voortvloeien uit uw onrechtmatig gebruik van de Website of schending van deze Voorwaarden.

22. NALEVING; EXPORTCONTROLES; SANCTIES

U stemt ermee in toepasselijke exportcontrole- en sanctiewetgeving na te leven, waaronder de Amerikaanse Export Administration Regulations (EAR) en regimes van het Office of Foreign Assets Control (OFAC), en waar van toepassing relevante sanctiekaders van de Verenigde Naties, de Europese Unie of andere internationale organisaties.

23. ELEKTRONISCHE COMMUNICATIE; KENNISGEVINGEN

Alle juridische kennisgevingen en communicatie moeten worden verzonden naar: legal@microretailx.com.

24. WIJZIGINGEN VAN DEZE VOORWAARDEN

MICRORETAILX LLC kan deze Voorwaarden op elk moment wijzigen. Voortgezet gebruik van de Website geldt als aanvaarding van de gewijzigde Voorwaarden.

25. TOEPASSELIJK RECHT; EXCLUSIEVE BEVOEGDHEID; TAAL

Deze Voorwaarden worden beheerst door het recht van de staat Delaware, Verenigde Staten van Amerika. Geschillen vallen onder de exclusieve bevoegdheid van de staats- of federale rechtbanken in Delaware.

De Engelse versie prevaleert; vertalingen worden uitsluitend voor informatief gemak verstrekt.

26. SCHEIDBAARHEID; VOLLEDIGE OVEREENKOMST

Indien een bepaling ongeldig of onafdwingbaar wordt geacht, blijven de overige bepalingen volledig van kracht. Deze Voorwaarden vormen de volledige overeenkomst met betrekking tot het gebruik van de Website.

27. CONTACT

Juridische en compliancecommunicatie: legal@microretailx.com
`
    },

    privacy: {
      title: "Privacybeleid — MICRORETAILX",
      description: "Wereldwijd privacybeleid en kader voor gegevensbescherming van MICRORETAILX.",
      body: `MICRORETAILX — PRIVACYBELEID

MICRORETAILX LLC (Delaware, Verenigde Staten)
MICRORETAILX GROUP – Wereldwijd operationeel kader

Laatst bijgewerkt: 01-01-2026
Ingangsdatum: 01-01-2026

Statutaire zetel en Registered Agent:
Corporation Trust Center
1209 Orange Street
Wilmington, DE 19801
United States of America

1. TOEPASSINGSGEBIED EN DOEL

Dit Privacybeleid beschrijft hoe MICRORETAILX LLC (“MICRORETAILX”, “wij”, “ons”, “onze”) deze Website ontwerpt en exploiteert vanuit het perspectief van gegevensbescherming en privacy.

De Website is strikt informatief en conceptueel van aard. Zij biedt geen gebruikersaccounts, vereist geen registratie en biedt geen producten of diensten te koop aan.

2. ZERO DATA-STRATEGIE (PRIVACY BY DESIGN)

Deze Website is bewust ontworpen als een Zero Data-omgeving.

MICRORETAILX LLC verzamelt, vraagt, vereist, bewaart, monetariseert of exploiteert niet bewust persoonsgegevens van bezoekers. Er worden geen gebruikersprofielen, identificatoren of gedragsdatasets gecreëerd.

Privacybeginselen zijn ingebed in het ontwerp en standaardinstellingen, waaronder gegevensminimalisatie, doelbinding, transparantie, beveiliging en verantwoordingsplicht.

3. GEEN GEBRUIKERSACCOUNTS; GEEN REGISTRATIE

De Website biedt geen gebruikersaccounts, inloggebieden, registratieformulieren of lidmaatschapssystemen.

Bezoekers hoeven geen persoonsgegevens te verstrekken om toegang te krijgen tot de inhoud van de Website.

4. GEEN PROFILERING; GEEN TRACKING; GEEN ADVERTENTIES

De Website implementeert geen:

• gedrags- of interessegebaseerde profilering
• advertentie- of marketingtechnologieën
• analyseplatforms of tools voor publieksmeting
• trackingmechanismen tussen websites of diensten

MICRORETAILX LLC verricht geen geautomatiseerde besluitvorming, profilering of gedragsanalyse van bezoekers.

5. TECHNISCHE METADATA EN LOGGEGEVENS

Zoals bij de meeste internetdiensten kunnen bij toegang tot de Website incidenteel beperkte technische metadata worden verwerkt, zoals IP-adressen, requestheaders, tijdstempels of informatie op protocolniveau.

Deze metadata worden uitsluitend verwerkt voor technische en beveiligingsdoeleinden, waaronder:

• veilige en betrouwbare contentlevering
• bescherming tegen misbruik, geautomatiseerde toegang en aanvallen
• behoud van netwerkintegriteit en beschikbaarheid

Deze metadata worden niet gebruikt voor identificatie, profilering, marketing of analyse en worden slechts gedurende de minimaal noodzakelijke periode bewaard.

6. INFRASTRUCTUURPROVIDERS VAN DERDEN

De Website wordt geleverd via infrastructuurproviders van derden, waaronder content delivery networks (CDN’s), DNS-diensten en platforms voor statische hosting, zoals Cloudflare, Inc. en GitHub, Inc.

Deze providers kunnen beperkte technische metadata uitsluitend verwerken om infrastructuur-, beveiligings- en leveringsfuncties uit te voeren namens MICRORETAILX LLC.

MICRORETAILX LLC activeert geen analyse-, tracking-, advertentie- of gedragsmonitoringfuncties die door dergelijke providers worden aangeboden.

7. INTERNATIONALE GEGEVENSOVERDRACHTEN

Wanneer technische metadata via wereldwijd verspreide infrastructuur worden verwerkt, kan deze verwerking internationale gegevensoverdrachten omvatten.

Dergelijke overdrachten vinden plaats onder passende technische en organisatorische waarborgen en steunen, waar van toepassing, op erkende mechanismen voor internationale gegevensoverdracht, zoals standaardcontractbepalingen (SCC’s) of gelijkwaardige rechtmatige kaders.

MICRORETAILX LLC gebruikt internationale overdrachten niet voor commerciële exploitatie van persoonsgegevens.

8. COOKIES, TECHNISCHE IDENTIFICATOREN EN INFRASTRUCTUURBEVEILIGING

Standaard gebruikt deze Website geen marketing-, advertentie-, analyse-, targeting- of gedragstrackingcookies.

Technische toelichting. De Website steunt uitsluitend op strikt noodzakelijke technische identificatoren die vereist zijn voor kerninfrastructuur en beveiligingsactiviteiten. Dit kan identificatoren omvatten die worden ingesteld of verwerkt door content delivery networks (CDN’s), DNS-providers, hostingplatforms en beveiligingslagen.

Deze identificatoren worden uitsluitend gebruikt voor:

• Beveiliging en misbruikpreventie: werking van web application firewalls (WAF), botmitigatiesystemen, rate limiting en netwerkbeveiliging om ongeautoriseerde toegang, geautomatiseerd misbruik en denial-of-service-aanvallen te voorkomen.

• Contentlevering en beschikbaarheid: veilige en efficiënte levering van inhoud via wereldwijde CDN’s, load balancers en verspreide infrastructuur om prestaties, veerkracht en beschikbaarheid te waarborgen.

Deze technische identificatoren maken geen gebruikersprofilering, gedragsmonitoring, advertenties of marketingactiviteiten mogelijk en worden niet gebruikt om personen over websites of diensten heen te identificeren of volgen.

Voor zover technische metadata zoals IP-adressen of requestheaders worden verwerkt, gebeurt dit uitsluitend voor beveiligings-, integriteits- en operationele doeleinden en alleen gedurende de minimaal noodzakelijke periode.

Dergelijke identificatoren zijn doorgaans vrijgesteld van toestemmingsvereisten onder toepasselijke gegevensbeschermings- en ePrivacykaders omdat zij strikt noodzakelijk zijn voor de levering, beveiliging en goede werking van de Website.

9. RECHTEN VAN BETROKKENEN

Gezien de aard van de Website en het ontbreken van bewuste verzameling van persoonsgegevens zijn veel rechten van betrokkenen in de praktijk mogelijk niet van toepassing.

Waar vereist door toepasselijk recht kunnen personen contact opnemen met MICRORETAILX LLC om informatie te vragen over mogelijke gegevensverwerking in verband met technische toegangslogs.

Verzoeken kunnen worden ingediend via: legal@microretailx.com

MICRORETAILX LLC behoudt zich het recht voor verzoeken te verifiëren en reacties te beperken voor zover wettelijk toegestaan.

10. GEGEVENSBEVEILIGING

MICRORETAILX LLC implementeert passende technische en organisatorische maatregelen om de Website en infrastructuur te beschermen tegen ongeautoriseerde toegang, misbruik, wijziging of vernietiging.

Beveiligingsmaatregelen omvatten onder meer transportversleuteling, strikte security headers, toegangscontroles en netwerkbeveiliging.

11. SECURITY-BY-DESIGN-VERKLARING

Deze Website is bewust ontworpen met een security-first- en privacy-by-designarchitectuur. Het technische ontwerp beoogt blootstelling van gegevens te minimaliseren, het aanvalsoppervlak te verkleinen en onnodige gegevensverwerking te voorkomen, zodat gebruikers standaard worden beschermd in plaats van afhankelijk te zijn van maatregelen achteraf of toestemmingsmechanismen.

Beveiligingsmaatregelen zijn onderdeel van de kerninfrastructuur en het operationele model van de Website, niet van optionele functies.

12. GEEN TARGETING; GEEN VESTIGING

MICRORETAILX LLC richt zich niet actief op gebruikers, klanten, investeerders of autoriteiten in enig specifiek rechtsgebied.

De enkele toegankelijkheid van de Website vanuit een rechtsgebied vormt geen targeting, vestiging, vergunningverlening, toestemming of gereguleerde activiteit in dat rechtsgebied.

13. PRIVACY VAN KINDEREN

De Website is niet gericht op kinderen en MICRORETAILX LLC verzamelt niet bewust persoonsgegevens van minderjarigen.

14. WIJZIGINGEN VAN DIT PRIVACYBELEID

MICRORETAILX LLC kan dit Privacybeleid van tijd tot tijd bijwerken. Wijzigingen worden van kracht zodra zij op de Website worden gepubliceerd.

15. TOEPASSELIJK RECHT EN TAAL

Dit Privacybeleid wordt beheerst door het recht van de staat Delaware, Verenigde Staten van Amerika.

De Engelse versie prevaleert. Vertalingen worden uitsluitend voor informatief gemak verstrekt en hebben geen contractuele of juridische werking.

16. CONTACT

Voor vragen over privacy, juridische zaken of compliance:
legal@microretailx.com
`
    },

    cookies: {
      title: "Cookiebeleid — MICRORETAILX",
      description: "Wereldwijd cookiebeleid en technisch kader van MICRORETAILX.",
      body: `MICRORETAILX — COOKIEBELEID

MICRORETAILX LLC (Delaware, Verenigde Staten)
MICRORETAILX GROUP – Wereldwijd operationeel kader

Laatst bijgewerkt: 21-08-2026
Ingangsdatum: 01-01-2026

Statutaire zetel en Registered Agent:
Corporation Trust Center
1209 Orange Street
Wilmington, DE 19801
United States of America

1. TOEPASSINGSGEBIED EN DOEL

Dit Cookiebeleid legt uit hoe cookies en vergelijkbare technische identificatoren kunnen worden gebruikt in verband met deze Website, die wordt geëxploiteerd door MICRORETAILX LLC (“MICRORETAILX”, “wij”, “ons”, “onze”).

Deze Website is strikt informatief en conceptueel van aard en moet worden gelezen in samenhang met het Privacybeleid en de Wereldwijde Gebruiksvoorwaarden, die samen het juridische kader van de Website vormen.

2. ZERO DATA-STRATEGIE

Deze Website is bewust ontworpen en geëxploiteerd volgens een Zero Data-strategie.

MICRORETAILX LLC gebruikt geen cookies of vergelijkbare technologieën om:
• individuele gebruikers te identificeren
• gebruikersprofielen te creëren
• gedrags- of interessegebaseerde tracking uit te voeren
• advertenties of marketing te leveren
• persoonsgegevens te monetariseren

De Website biedt geen gebruikersaccounts, registratiesystemen of interactieve diensten waarvoor persoonsgegevens vereist zijn.

3. STRIKT NOODZAKELIJKE COOKIES EN TECHNISCHE IDENTIFICATOREN

Standaard steunt de Website uitsluitend op strikt noodzakelijke cookies en/of gelijkwaardige technische identificatoren die vereist zijn voor kerninfrastructuur, beveiliging en beschikbaarheid.

Dergelijke identificatoren kunnen worden ingesteld of verwerkt door:
• content delivery networks (CDN’s)
• DNS- en hostingproviders
• beveiligings-, integriteits- en beschikbaarheidslagen

Deze identificatoren worden uitsluitend gebruikt voor doeleinden zoals:
• load balancing en verkeersverdeling
• misbruikpreventie en rate limiting
• botmitigatie en bescherming tegen geautomatiseerde toegang
• veilige en betrouwbare contentlevering

Deze cookies en identificatoren zijn essentieel voor de goede werking van de Website en kunnen niet worden uitgeschakeld zonder beveiliging of beschikbaarheid te verminderen.

LOKALE OPSLAG DIE DOOR DEZE WEBSITE WORDT GEBRUIKT

Naast strikt noodzakelijke cookies bewaart de Website een klein aantal technische voorkeuren rechtstreeks in de lokale opslag van de browser. Deze items zijn uitsluitend first-party, worden nooit naar MICRORETAILX LLC of derden verzonden en blijven op het apparaat totdat de bezoeker ze verwijdert.

• mx_consent — registreert de cookiekeuzes van de bezoeker samen met de scopeversie, beleidsversie en tijdstempel van de beslissing. Doel: de keuze respecteren en vastleggen wanneer en onder welke versie van dit beleid deze is gemaakt.
• mx_lang — registreert de door de bezoeker geselecteerde weergavetaal. Doel: dezelfde taal tussen pagina’s en bezoeken behouden.
• mx_a11y — registreert toegankelijkheidsvoorkeuren zoals tekstgrootte, contrast en leesbaar lettertype. Doel: de gekozen leesinstellingen behouden.
• mx_reader_immersive — registreert of de immersieve leesmodus actief is. Doel: de gekozen leesindeling behouden.

Deze items bevatten geen identificatoren, persoonsgegevens of gedragsinformatie. Ze kunnen op elk moment worden verwijderd via de browserinstellingen of via de cookievoorkeuren in de footer van elke pagina.

4. GEEN ANALYSE; GEEN MARKETING; GEEN TRACKING

De Website implementeert geen:
• analyse- of publieksmeettools
• marketing- of advertentiecookies
• personalisatie- of aanbevelingssystemen
• trackingmechanismen tussen websites of diensten

MICRORETAILX LLC voert geen geautomatiseerde besluitvorming of profilering uit op basis van toegang tot de Website.

5. OPTIONELE TECHNOLOGIEËN EN TOESTEMMING

Optionele cookies of vergelijkbare technologieën zijn standaard niet actief.

Indien in de toekomst optionele technologieën worden geïntroduceerd, worden deze alleen geactiveerd:
• na uitdrukkelijke toestemming van de gebruiker; en
• wanneer dergelijke toestemming door toepasselijk recht is vereist.

Waar van toepassing worden toestemmingsvoorkeuren beheerd via de toestemmingsinterface van de Website.

6. TECHNISCHE METADATA EN LOGGEGEVENS

Zoals gebruikelijk bij internetdiensten kunnen bij toegang tot de Website incidenteel beperkte technische metadata worden verwerkt, zoals IP-adressen, requestheaders, tijdstempels of informatie op protocolniveau.

Deze metadata worden uitsluitend verwerkt voor technische en beveiligingsdoeleinden, waaronder:
• bescherming van de infrastructuur en misbruikpreventie
• detectie en beperking van geautomatiseerde of kwaadaardige activiteiten
• waarborging van beschikbaarheid, integriteit en veerkracht van de Website

Deze metadata worden niet gebruikt voor identificatie, profilering, analyse of marketing en worden slechts gedurende de minimaal noodzakelijke periode bewaard.

7. INTERNATIONALE CONTEXT EN INFRASTRUCTUUR

De Website kan wereldwijd worden bezocht en steunt op verspreide technische infrastructuur.

Wanneer technische metadata via wereldwijd verspreide systemen worden verwerkt, kan dit internationale gegevensoverdrachten omvatten.

Dergelijke overdrachten vinden plaats onder passende technische en organisatorische waarborgen en steunen, waar van toepassing, op erkende internationale doorgiftemechanismen.

8. GEEN TARGETING; GEEN RECHTSGEBIEDSPECIFIEKE BEDOELING

MICRORETAILX LLC richt zich niet actief op gebruikers of doelgroepen in een specifiek rechtsgebied.

De enkele toegankelijkheid van de Website vanuit enig rechtsgebied vormt geen targeting, vestiging, vergunningverlening, toestemming of gereguleerde activiteit in dat rechtsgebied.

9. WIJZIGINGEN VAN DIT COOKIEBELEID

MICRORETAILX LLC kan dit Cookiebeleid van tijd tot tijd bijwerken. Wijzigingen worden van kracht zodra zij op de Website worden gepubliceerd.

10. TOEPASSELIJK RECHT EN TAAL

Dit Cookiebeleid wordt beheerst door het recht van de staat Delaware, Verenigde Staten van Amerika.

De Engelse versie prevaleert. Vertalingen worden uitsluitend voor informatief gemak verstrekt en hebben geen juridische werking.

11. CONTACT

Voor vragen over cookies, privacy of compliance:
legal@microretailx.com
`
    },

    legal: {
      title: "Juridische kennisgeving — MICRORETAILX",
      description: "Bedrijfsidentificatie en juridische informatie voor MICRORETAILX LLC.",
      body: `MICRORETAILX — JURIDISCHE KENNISGEVING

MICRORETAILX LLC (Delaware, Verenigde Staten)
MICRORETAILX GROUP – Wereldwijd operationeel kader

Laatst bijgewerkt: 01-01-2026
Ingangsdatum: 01-01-2026

Statutaire zetel en Registered Agent:
Corporation Trust Center
1209 Orange Street
Wilmington, DE 19801
United States of America

1. JURIDISCH KADER; DOCUMENTHIËRARCHIE; VERHOUDING TOT ANDERE BELEIDSDOCUMENTEN

Deze Juridische kennisgeving maakt deel uit van het juridische kader dat de toegang tot en het gebruik van de Website regelt.

Afhankelijk van de aard van de interactie van de bezoeker met de Website kunnen aanvullende documenten van toepassing zijn, waaronder:
• Gebruiksvoorwaarden
• Privacybeleid
• Cookiebeleid (en eventuele Cookievoorkeuren / CMP-instellingen die op de Website worden weergegeven)

Bij strijdigheid tussen documenten geldt de volgende volgorde:
(i) deze Juridische kennisgeving, (ii) de Gebruiksvoorwaarden, (iii) het Privacybeleid en (iv) het Cookiebeleid, tenzij dwingend recht voor een specifiek onderwerp anders vereist.

Indien een bepaling van deze Juridische kennisgeving ongeldig of onafdwingbaar blijkt, blijven de overige bepalingen volledig van kracht.

MICRORETAILX LLC kan dit juridische kader van tijd tot tijd herzien, bijwerken en verbeteren om veranderende regelgevingsnormen, richtlijnen van toezichthouders, beveiligingspraktijken en operationele wijzigingen weer te geven.

2. IDENTIFICATIE VAN DE WEBSITE-EXPLOITANT

Deze website (de “Website”) wordt uitsluitend geëxploiteerd en beheerd door MICRORETAILX LLC, een limited liability company die rechtsgeldig is opgericht en bestaat naar het recht van de staat Delaware, Verenigde Staten van Amerika.

Elke verwijzing naar “MICRORETAILX GROUP”, “group”, “network”, “ecosystem”, “labs”, “nodes”, “regions” of vergelijkbare termen is uitsluitend beschrijvend en conceptueel en impliceert niet het bestaan van een afzonderlijke rechtspersoon, filiaal, dochteronderneming, partnerschap, joint venture, agentschap of vaste inrichting, tenzij uitdrukkelijk anders vermeld in een schriftelijke overeenkomst.

3. DOEL VAN DE WEBSITE

De Website wordt uitsluitend aangeboden voor informatieve, conceptuele en verkennende doeleinden.

Zij vormt niet en mag niet worden uitgelegd als:
• een aanbod of uitnodiging voor producten of diensten
• een investeringsvoorstel, financiële promotie of gereguleerde communicatie
• juridisch, fiscaal, financieel of professioneel advies
• een gereguleerde of vergunningsplichtige activiteit in enig rechtsgebied

De Website maakt geen transacties, registraties, gebruikersaccounts of dienstverlening mogelijk.

4. GEEN VERTROUWEN; GEEN ADVIES

Alle inhoud op de Website wordt uitsluitend ter algemene informatie verstrekt.

MICRORETAILX LLC doet geen uitspraken of garanties over de juistheid, volledigheid of geschiktheid van de inhoud voor een bepaald doel. Elk vertrouwen op de inhoud van de Website is voor eigen risico van de bezoeker.

5. INTELLECTUELE EIGENDOM

Tenzij uitdrukkelijk anders vermeld, is alle inhoud van de Website, waaronder tekst, grafische elementen, ontwerp, lay-out, broncode, simulaties, visualisaties, modellen en documentatie, exclusief eigendom van MICRORETAILX LLC.

Deze inhoud wordt wereldwijd beschermd door toepasselijke wetgeving inzake intellectuele eigendom, auteursrecht en bedrijfsgeheimen.

Geen inhoud mag zonder voorafgaande schriftelijke toestemming van MICRORETAILX LLC worden gekopieerd, gereproduceerd, verspreid, gewijzigd of geëxploiteerd, behalve waar dwingend recht dit toestaat.

6. AANVAARDBAAR GEBRUIK

Bezoekers stemmen ermee in niet:
• de Website of infrastructuur te misbruiken of te verstoren
• ongeautoriseerde toegang te proberen of beveiligingsmaatregelen te omzeilen
• scraping, reverse engineering of geautomatiseerde extractie uit te voeren
• de Website voor onwettige of verboden doeleinden te gebruiken

MICRORETAILX LLC behoudt zich het recht voor passende technische, juridische en organisatorische maatregelen te nemen om de Website en haar integriteit te beschermen.

7. LINKS VAN DERDEN

De Website kan links bevatten naar websites of diensten van derden.

MICRORETAILX LLC aanvaardt geen verantwoordelijkheid voor inhoud, beschikbaarheid, beveiliging of praktijken van derden. Toegang tot bronnen van derden is voor eigen risico van de bezoeker.

8. BESCHIKBAARHEID EN DISCLAIMER

De Website wordt aangeboden “zoals zij is” en “zoals beschikbaar”.

MICRORETAILX LLC garandeert niet dat de Website ononderbroken, foutloos of vrij van kwetsbaarheden is. Voor zover toegestaan door toepasselijk recht worden alle uitdrukkelijke of impliciete garanties uitgesloten.

9. BEPERKING VAN AANSPRAKELIJKHEID

Voor zover toegestaan door toepasselijk recht is MICRORETAILX LLC niet aansprakelijk voor directe, indirecte, incidentele, gevolg- of bijzondere schade die voortvloeit uit of verband houdt met het gebruik of de onmogelijkheid tot gebruik van de Website.

10. GEEN TARGETING; STANDAARD GEEN PROFILERING; GEEN VESTIGING

MICRORETAILX LLC richt zich niet actief op gebruikers of doelgroepen in een specifiek rechtsgebied.

De enkele toegankelijkheid van de Website vanuit een bepaald rechtsgebied vormt geen targeting, vestiging, vergunningverlening, toestemming of gereguleerde activiteit in dat rechtsgebied.

Tenzij uitdrukkelijk bekendgemaakt in de toepasselijke beleidslaag en, waar vereist, door de bezoeker geactiveerd via expliciete instellingen of toestemmingsmechanismen, verricht MICRORETAILX LLC geen:
• gedragsgerichte advertenties of marketingtargeting
• gebruikersprofilering voor advertentiedoeleinden
• geautomatiseerde besluitvorming met juridische of vergelijkbaar significante gevolgen

11. TOEPASSELIJK RECHT EN BEVOEGDHEID

Deze Juridische kennisgeving wordt beheerst door het recht van de staat Delaware, Verenigde Staten van Amerika.

Geschillen die voortvloeien uit of verband houden met de Website of deze Juridische kennisgeving vallen onder de exclusieve bevoegdheid van de staats- of federale rechtbanken in de staat Delaware, onverminderd dwingende consumentenbeschermingsregels die in een specifiek rechtsgebied van toepassing kunnen zijn.

12. TAAL

De Engelse versie van deze Juridische kennisgeving prevaleert. Vertalingen worden uitsluitend voor informatief gemak verstrekt en hebben geen juridische werking.

13. CONTACT

Voor juridische of compliancevragen:
legal@microretailx.com
`
    }
  });


  register("id", {
    "nav.about": "Info",
    "nav.home": "Beranda",
    "nav.verticals": "Vertikal",
    "nav.contact": "Kontak",
    "footer.terms": "Ketentuan",
    "footer.privacy": "Privasi",
    "footer.cookies": "Cookie",
    "footer.legal": "Legal",
    "cookie.prefs": "Preferensi cookie",
    "reader.toggle": "Mode baca",
    "cmp.title": "Privasi & cookie",
    "cmp.desc": "Kami menghormati privasi Anda. Situs ini tidak menggunakan cookie iklan atau pelacakan. Cookie yang diperlukan selalu aktif untuk keamanan dan fungsi dasar. Anda dapat menerima atau menolak cookie opsional.",
    "cmp.necessary": "Diperlukan",
    "cmp.necessary.desc": "Keamanan dan fungsi inti.",
    "cmp.analytics": "Analitik",
    "cmp.analytics.desc": "Opsional: data penggunaan anonim untuk meningkatkan situs.",
    "cmp.marketing": "Pemasaran",
    "cmp.marketing.desc": "Opsional: personalisasi dan pengukuran kampanye.",
    "cmp.noproviders": "Tidak ada penyedia aktif",
    "cmp.reject": "Tolak semua",
    "cmp.accept": "Terima semua",
    "cmp.save": "Simpan preferensi"
  }, {
    terms: {
      title: "Ketentuan Penggunaan Global — MICRORETAILX",
      description: "Ketentuan penggunaan global dan kerangka hukum MICRORETAILX.",
      body: `MICRORETAILX – KETENTUAN PENGGUNAAN GLOBAL

MICRORETAILX LLC (Delaware, Amerika Serikat)
MICRORETAILX GROUP – Kerangka Operasional Global

Terakhir diperbarui: 01-01-2026
Tanggal berlaku: 01-01-2026

Kantor Terdaftar dan Registered Agent:
Corporation Trust Center
1209 Orange Street
Wilmington, DE 19801
United States of America

1. DEFINISI

• “MICRORETAILX”, “kami”, “kita”, “milik kami” merujuk pada MICRORETAILX LLC, sebuah limited liability company yang didirikan dan berlaku secara sah berdasarkan hukum Negara Bagian Delaware, Amerika Serikat.
• “Situs” merujuk pada situs web ini dan halaman, subdomain, antarmuka, elemen interaktif, kode sumber, visualisasi, serta konten terkait yang disediakan melaluinya.
• “MICRORETAILX GROUP” merujuk pada kerangka konseptual dan strategis yang digunakan untuk menjelaskan inisiatif saat ini dan/atau masa depan dan bukan merupakan badan hukum terpisah kecuali secara tegas dinyatakan secara tertulis.
• “Verticals” berarti ranah tematik yang digunakan semata-mata sebagai kerangka klasifikasi konseptual dan strategis.
• “Konten” mencakup seluruh teks, grafis, desain, kode sumber, visualisasi, simulasi, model, alur kerja, dan dokumentasi.
• “Kiriman” berarti komentar, ide, usulan, atau materi apa pun yang Anda kirimkan.

2. OPERATOR, RUANG LINGKUP, DAN PENERIMAAN

Ketentuan ini mengatur akses dan penggunaan Anda atas Situs. Dengan mengakses atau menggunakan Situs, Anda menyatakan telah membaca dan memahami Ketentuan ini, setuju untuk terikat secara hukum, dan menyatakan memiliki kapasitas hukum untuk melakukannya.

3. IDENTITAS OPERATOR, ALAMAT HUKUM, DAN PEMBERITAHUAN

Situs ini dioperasikan dan dikendalikan secara eksklusif oleh MICRORETAILX LLC, sebuah limited liability company Delaware.

Registered Agent: Corporation Trust Center, 1209 Orange Street, Wilmington, DE 19801, USA.

Komunikasi hukum dan kepatuhan harus dikirim ke: legal@microretailx.com.

Setiap referensi terhadap “nodes”, “labs”, “regions”, atau “verticals” tidak boleh ditafsirkan sebagai pembentukan cabang, kantor, anak perusahaan, kehadiran perwakilan, atau nexus pajak di yurisdiksi mana pun di luar Negara Bagian Delaware.

4. MODEL OPERASIONAL GLOBAL; TANPA KEMITRAAN; TANPA AGENSI

MICRORETAILX beroperasi secara global melalui inisiatif konseptual, eksploratif, dan strategis. Kecuali disepakati secara tegas dalam kontrak tertulis yang ditandatangani MICRORETAILX LLC:

(i) tidak ada bagian Situs yang menciptakan kemitraan, joint venture, hubungan kerja, atau hubungan keagenan;

(ii) tidak ada pihak yang berwenang mengikat MICRORETAILX LLC;

(iii) istilah deskriptif seperti “group”, “network”, atau “ecosystem” tidak memiliki arti hukum tersendiri.

Penggunaan Situs tidak menciptakan permanent establishment atau kehadiran kena pajak serupa di yurisdiksi mana pun.

5. STATUS SITUS; TANPA PENAWARAN; TANPA KOMITMEN

Situs disediakan semata-mata untuk tujuan informasi, konseptual, dan eksploratif. Tidak ada bagian di dalamnya yang merupakan penawaran, ajakan, proposal investasi, insentif, atau aktivitas yang diatur dalam yurisdiksi mana pun.

6. KERANGKA VERTICAL (KONSEPTUAL DAN NON-OPERASIONAL)

Setiap referensi terhadap verticals hanya mewakili kerangka konseptual dan tidak menyiratkan keberadaan unit bisnis operasional, produk, layanan, aktivitas berlisensi, atau operasi yang diatur.

7. STRATEGI ZERO DATA (PRIVACY BY DESIGN)

Situs dirancang berdasarkan Strategi Zero Data: tanpa akun pengguna, tanpa profiling, dan tanpa teknologi pelacakan pihak ketiga yang aktif secara default, kecuali bila secara ketat tidak terhindarkan karena protokol internet standar atau diwajibkan oleh hukum yang berlaku.

8. COOKIE DAN PERSETUJUAN

Secara default, hanya cookie yang benar-benar diperlukan atau pengenal teknis setara yang digunakan. Teknologi opsional hanya diaktifkan setelah persetujuan eksplisit pengguna jika diwajibkan secara hukum.

Cookie yang benar-benar diperlukan dan/atau pengenal teknis dapat ditetapkan oleh content delivery network, penyedia hosting, dan lapisan keamanan semata-mata untuk load balancing, pencegahan penyalahgunaan, mitigasi bot, dan pengiriman konten yang aman.

9. HOSTING, PENGIRIMAN, DAN KEAMANAN

Situs di-host pada infrastruktur pihak ketiga. Log teknis dan metadata terbatas dapat diproses semata-mata untuk keamanan, integritas, pencegahan penyalahgunaan, dan pengiriman konten yang andal.

Pemrosesan tersebut tidak mengubah sifat informatif Situs dan tidak merupakan aktivitas komersial, profiling, atau targeting khusus yurisdiksi.

Aksesibilitas Situs semata tidak merupakan aktivitas komersial, targeting, atau kehadiran yang diatur dalam yurisdiksi mana pun.

10. PERLINDUNGAN DATA GLOBAL DAN KEPATUHAN REGULASI

MICRORETAILX LLC merancang dan mengoperasikan Situs sesuai dengan prinsip perlindungan data dan privasi yang diakui secara internasional, termasuk privacy by design, minimisasi data, pembatasan tujuan, transparansi, keamanan, dan akuntabilitas.

Situs terutama bersifat informatif dan konseptual. Situs tidak menyediakan akun pengguna, tidak mewajibkan pendaftaran, serta tidak melakukan profiling, pelacakan perilaku, atau pemrosesan berbasis iklan.

Pengiriman konten dan operasi teknis bergantung pada penyedia infrastruktur yang tersebar secara global. Sejauh terjadi pemrosesan insidental metadata teknis seperti alamat IP atau data koneksi, pemrosesan tersebut dibatasi secara ketat pada hal yang diperlukan untuk keamanan, integritas, pencegahan penyalahgunaan, dan pengiriman konten yang andal.

Setiap pemrosesan tersebut dilakukan berdasarkan perlindungan kontraktual, teknis, dan organisasi yang memadai, termasuk perjanjian pemrosesan data dan mekanisme transfer internasional yang diakui jika berlaku. Jika berlaku, pemrosesan mengandalkan standard contractual clauses (SCC) atau mekanisme transfer data internasional yang sah dan setara. MICRORETAILX LLC tidak dengan sengaja mengumpulkan, menyimpan, atau mengeksploitasi data pribadi untuk tujuan komersial, profiling, atau pemasaran.

Pendekatan ini dimaksudkan agar selaras dengan prinsip kerangka perlindungan data dan privasi global utama di berbagai yurisdiksi.

Aksesibilitas Situs dari yurisdiksi tertentu, dengan sendirinya, tidak merupakan targeting, pendirian, lisensi, otorisasi, atau aktivitas yang diatur di yurisdiksi tersebut.

MICRORETAILX LLC tidak secara aktif menargetkan pengguna, pelanggan, investor, regulator, atau otoritas di yurisdiksi tertentu.

11. PENGGUNAAN YANG DIIZINKAN; PERILAKU YANG DILARANG

Anda tidak boleh melakukan data scraping, reverse engineering, ekstraksi algoritme, pelatihan model kecerdasan buatan, gangguan terhadap infrastruktur, atau penyalahgunaan Situs, kecuali sejauh secara tegas diizinkan oleh hukum yang bersifat wajib.

12. PELestarian DAN PENEGAKAN

MICRORETAILX LLC berhak menerapkan langkah teknis, organisasi, dan hukum untuk melindungi Situs dan menjaga bukti penyalahgunaan atau aktivitas melawan hukum.

13. KEKAYAAN INTELEKTUAL; RAHASIA DAGANG

Seluruh hak, kepemilikan, dan kepentingan atas Situs dan Kontennya merupakan milik eksklusif MICRORETAILX LLC dan dilindungi oleh hukum kekayaan intelektual serta rahasia dagang yang berlaku di seluruh dunia.

14. KERAHASIAAN MATERI NON-PUBLIK

Materi non-publik atau terbatas tidak boleh diungkapkan, didistribusikan, atau direproduksi tanpa izin tertulis sebelumnya dari MICRORETAILX LLC.

15. KIRIMAN DAN UMPAN BALIK

Dengan mengirimkan materi apa pun, Anda memberikan kepada MICRORETAILX LLC lisensi global, bebas royalti, non-eksklusif, dan tanpa batas waktu untuk menggunakan, mereproduksi, mengadaptasi, dan menggabungkan kiriman tersebut untuk tujuan bisnis yang sah.

Lisensi ini hanya berlaku untuk kiriman yang tidak diminta dan tidak mengesampingkan, membatasi, atau menggantikan perjanjian tertulis terpisah dengan MICRORETAILX LLC.

16. DIGITAL MILLENNIUM COPYRIGHT ACT (DMCA) SAFE HARBOR

MICRORETAILX LLC menghormati hak kekayaan intelektual dan mengharapkan pengguna melakukan hal yang sama. Sesuai Digital Millennium Copyright Act (17 U.S.C. § 512), prosedur berikut berlaku untuk pelaporan dugaan pelanggaran hak cipta:

• Pemberitahuan. Jika Anda meyakini Konten atau Kiriman yang tersedia di Situs melanggar hak cipta Anda, Anda dapat mengirim pemberitahuan tertulis kepada Agen yang Ditunjuk melalui legal@microretailx.com. Agar efektif, pemberitahuan harus secara substansial memenuhi persyaratan 17 U.S.C. § 512(c)(3), termasuk: (i) tanda tangan fisik atau elektronik pemilik hak cipta atau agen yang berwenang; (ii) identifikasi karya berhak cipta yang diklaim dilanggar; (iii) identifikasi dan lokasi materi yang diduga melanggar; (iv) informasi kontak pihak pengadu; dan (v) pernyataan dengan itikad baik bahwa penggunaan tidak diizinkan.

• Penghapusan. Setelah menerima pemberitahuan yang sah, MICRORETAILX LLC berhak menghapus atau menonaktifkan akses ke materi yang diduga melanggar, atas kebijakannya sendiri dan tanpa pemberitahuan sebelumnya.

• Pemberitahuan Tandingan. Jika berlaku, pemberitahuan tandingan dapat diajukan sesuai DMCA. MICRORETAILX LLC dapat memulihkan materi jika diwajibkan secara hukum.

• Batasan. Prosedur ini berlaku khusus untuk masalah hak cipta berdasarkan DMCA. Untuk pertanyaan hukum, regulasi, atau kepatuhan lainnya, lihat bagian kontak umum dalam Ketentuan ini.

17. TAUTAN EKSTERNAL; LAYANAN PIHAK KETIGA

Situs dapat berisi tautan ke layanan pihak ketiga. MICRORETAILX LLC tidak bertanggung jawab atas konten, praktik, atau kebijakan pihak ketiga. Akses dilakukan atas risiko Anda sendiri.

18. PENAFIAN; TANPA KETERGANTUNGAN

Situs tidak memberikan nasihat hukum, pajak, keuangan, atau profesional.

Tidak ada bagian Situs yang boleh ditafsirkan sebagai panduan regulasi, pernyataan kepatuhan, atau jaminan kesesuaian dengan rezim hukum atau regulasi lokal tertentu.

Pernyataan berwawasan ke depan secara inheren mengandung ketidakpastian dan tidak menjamin hasil di masa depan.

19. KETERSEDIAAN; “SEBAGAIMANA ADANYA”

Situs disediakan “sebagaimana adanya” dan “sebagaimana tersedia”, tanpa jaminan apa pun, baik tersurat maupun tersirat.

20. BATASAN TANGGUNG JAWAB

Sejauh maksimum yang diizinkan oleh hukum yang berlaku, MICRORETAILX LLC tidak bertanggung jawab atas kerugian langsung maupun tidak langsung yang timbul dari penggunaan Situs.

21. GANTI RUGI

Anda setuju untuk mengganti rugi dan membebaskan MICRORETAILX LLC dari klaim, tanggung jawab, kerugian, atau biaya yang timbul dari penggunaan Situs secara melawan hukum atau pelanggaran Ketentuan ini.

22. KEPATUHAN; KONTROL EKSPOR; SANKSI

Anda setuju mematuhi hukum kontrol ekspor dan sanksi yang berlaku, termasuk U.S. Export Administration Regulations (EAR) dan rezim Office of Foreign Assets Control (OFAC), serta, jika berlaku, kerangka sanksi yang relevan dari Perserikatan Bangsa-Bangsa, Uni Eropa, atau kerangka internasional lainnya.

23. KOMUNIKASI ELEKTRONIK; PEMBERITAHUAN

Semua pemberitahuan dan komunikasi hukum harus dikirim ke: legal@microretailx.com.

24. PERUBAHAN KETENTUAN INI

MICRORETAILX LLC dapat mengubah Ketentuan ini kapan saja. Penggunaan Situs secara berkelanjutan merupakan penerimaan atas Ketentuan yang telah direvisi.

25. HUKUM YANG BERLAKU; YURISDIKSI EKSKLUSIF; BAHASA

Ketentuan ini diatur oleh hukum Negara Bagian Delaware, Amerika Serikat. Setiap sengketa tunduk pada yurisdiksi eksklusif pengadilan negara bagian atau federal yang berlokasi di Delaware.

Versi bahasa Inggris yang berlaku; terjemahan disediakan hanya untuk kemudahan informasi.

26. KETERPISAHAN; KESELURUHAN PERJANJIAN

Jika suatu ketentuan dianggap tidak sah atau tidak dapat dilaksanakan, ketentuan lainnya tetap berlaku sepenuhnya. Ketentuan ini merupakan keseluruhan perjanjian mengenai penggunaan Situs.

27. KONTAK

Komunikasi hukum dan kepatuhan: legal@microretailx.com
`
    },

    privacy: {
      title: "Kebijakan Privasi — MICRORETAILX",
      description: "Kebijakan privasi global dan kerangka perlindungan data MICRORETAILX.",
      body: `MICRORETAILX — KEBIJAKAN PRIVASI

MICRORETAILX LLC (Delaware, Amerika Serikat)
MICRORETAILX GROUP – Kerangka Operasional Global

Terakhir diperbarui: 01-01-2026
Tanggal berlaku: 01-01-2026

Kantor Terdaftar dan Registered Agent:
Corporation Trust Center
1209 Orange Street
Wilmington, DE 19801
United States of America

1. RUANG LINGKUP DAN TUJUAN

Kebijakan Privasi ini menjelaskan bagaimana MICRORETAILX LLC (“MICRORETAILX”, “kami”, “kita”, “milik kami”) merancang dan mengoperasikan Situs ini dari perspektif perlindungan data dan privasi.

Situs bersifat murni informatif dan konseptual. Situs tidak menyediakan akun pengguna, tidak mewajibkan pendaftaran, dan tidak menawarkan produk atau layanan untuk dijual.

2. STRATEGI ZERO DATA (PRIVACY BY DESIGN)

Situs ini sengaja dirancang sebagai lingkungan Zero Data.

MICRORETAILX LLC tidak dengan sengaja mengumpulkan, meminta, mewajibkan, menyimpan, memonetisasi, atau mengeksploitasi data pribadi pengunjung. Tidak ada profil pengguna, pengenal, atau kumpulan data perilaku yang dibuat.

Prinsip privasi diterapkan melalui desain dan secara default, termasuk minimisasi data, pembatasan tujuan, transparansi, keamanan, dan akuntabilitas.

3. TANPA AKUN PENGGUNA; TANPA PENDAFTARAN

Situs tidak menawarkan akun pengguna, area login, formulir pendaftaran, atau sistem keanggotaan.

Pengunjung tidak diwajibkan menyerahkan data pribadi untuk mengakses konten Situs.

4. TANPA PROFILING; TANPA PELACAKAN; TANPA IKLAN

Situs tidak menerapkan:

• profiling berbasis perilaku atau minat
• teknologi periklanan atau pemasaran
• platform analitik atau alat pengukuran audiens
• mekanisme pelacakan lintas situs atau lintas layanan

MICRORETAILX LLC tidak melakukan pengambilan keputusan otomatis, profiling, atau analisis perilaku pengunjung.

5. METADATA TEKNIS DAN DATA LOG

Seperti kebanyakan layanan internet, metadata teknis terbatas dapat diproses secara insidental saat mengakses Situs, seperti alamat IP, header permintaan, timestamp, atau informasi tingkat protokol.

Metadata tersebut diproses secara ketat untuk tujuan teknis dan keamanan, termasuk:

• memastikan pengiriman konten yang aman dan andal
• melindungi dari penyalahgunaan, akses otomatis, dan serangan
• menjaga integritas dan ketersediaan jaringan

Metadata ini tidak digunakan untuk identifikasi, profiling, pemasaran, atau analitik dan disimpan hanya selama periode minimum yang diperlukan.

6. PENYEDIA INFRASTRUKTUR PIHAK KETIGA

Situs dikirimkan melalui penyedia infrastruktur pihak ketiga, termasuk content delivery network (CDN), layanan DNS, dan platform hosting statis, seperti Cloudflare, Inc. dan GitHub, Inc.

Penyedia tersebut dapat memproses metadata teknis terbatas semata-mata untuk menjalankan fungsi infrastruktur, keamanan, dan pengiriman atas nama MICRORETAILX LLC.

MICRORETAILX LLC tidak mengaktifkan fitur analitik, pelacakan, iklan, atau pemantauan perilaku yang ditawarkan oleh penyedia tersebut.

7. TRANSFER DATA INTERNASIONAL

Jika metadata teknis diproses melalui infrastruktur yang tersebar secara global, pemrosesan tersebut dapat melibatkan transfer data internasional.

Transfer tersebut dilakukan dengan perlindungan teknis dan organisasi yang sesuai dan, jika berlaku, mengandalkan mekanisme transfer internasional yang diakui, seperti standard contractual clauses (SCC) atau kerangka hukum setara.

MICRORETAILX LLC tidak menggunakan transfer internasional untuk eksploitasi komersial data pribadi.

8. COOKIE, PENGENAL TEKNIS, DAN KEAMANAN INFRASTRUKTUR

Secara default, Situs tidak menggunakan cookie pemasaran, iklan, analitik, targeting, atau pelacakan perilaku.

Pengungkapan Teknis. Situs bergantung secara eksklusif pada pengenal teknis yang benar-benar diperlukan untuk infrastruktur inti dan operasi keamanan. Ini dapat mencakup pengenal yang ditetapkan atau diproses oleh content delivery network (CDN), penyedia DNS, platform hosting, dan lapisan keamanan.

Pengenal ini digunakan hanya untuk:

• Keamanan dan Pencegahan Penyalahgunaan: pengoperasian web application firewall (WAF), sistem mitigasi bot, rate limiting, dan perlindungan tingkat jaringan untuk mencegah akses tidak sah, penyalahgunaan otomatis, dan serangan denial-of-service.

• Pengiriman Konten dan Ketersediaan: pengiriman konten yang aman dan efisien melalui CDN global, load balancer, dan infrastruktur terdistribusi untuk memastikan performa, ketahanan, dan ketersediaan.

Pengenal teknis ini tidak memungkinkan profiling pengguna, pemantauan perilaku, iklan, atau aktivitas pemasaran dan tidak digunakan untuk mengidentifikasi atau melacak individu lintas situs atau layanan.

Jika diproses, metadata teknis seperti alamat IP atau header permintaan ditangani secara ketat untuk tujuan keamanan, integritas, dan operasional dan hanya selama periode minimum yang diperlukan.

Pengenal tersebut pada umumnya dikecualikan dari persyaratan persetujuan berdasarkan kerangka perlindungan data dan ePrivacy yang berlaku karena benar-benar diperlukan untuk penyediaan, keamanan, dan fungsi Situs yang semestinya.

9. HAK SUBJEK DATA

Mengingat sifat Situs dan tidak adanya pengumpulan data pribadi secara sengaja, banyak hak subjek data mungkin secara praktis tidak berlaku.

Jika diwajibkan oleh hukum yang berlaku, individu dapat menghubungi MICRORETAILX LLC untuk menanyakan kemungkinan pemrosesan data terkait log akses teknis.

Permintaan dapat dikirim ke: legal@microretailx.com

MICRORETAILX LLC berhak memverifikasi permintaan dan membatasi tanggapan sejauh diizinkan oleh hukum.

10. KEAMANAN DATA

MICRORETAILX LLC menerapkan langkah teknis dan organisasi yang sesuai untuk melindungi Situs dan infrastrukturnya dari akses tidak sah, penyalahgunaan, perubahan, atau penghancuran.

Langkah keamanan antara lain mencakup enkripsi selama transit, header keamanan yang ketat, kontrol akses, dan perlindungan tingkat jaringan.

11. PERNYATAAN SECURITY-BY-DESIGN

Situs ini sengaja direkayasa dengan arsitektur security-first dan privacy-by-design. Desain teknisnya bertujuan meminimalkan paparan data, mengurangi permukaan serangan, dan mencegah pemrosesan data yang tidak perlu, sehingga melindungi pengguna secara default alih-alih bergantung pada kontrol atau mekanisme persetujuan setelah kejadian.

Langkah keamanan diterapkan sebagai bagian dari infrastruktur inti dan model operasional Situs, bukan sebagai fitur opsional.

12. TANPA TARGETING; TANPA PENDIRIAN

MICRORETAILX LLC tidak secara aktif menargetkan pengguna, pelanggan, investor, atau otoritas di yurisdiksi tertentu.

Aksesibilitas Situs dari yurisdiksi tertentu semata tidak merupakan targeting, pendirian, lisensi, otorisasi, atau aktivitas yang diatur di yurisdiksi tersebut.

13. PRIVASI ANAK

Situs tidak ditujukan untuk anak-anak dan MICRORETAILX LLC tidak dengan sengaja mengumpulkan data pribadi dari anak di bawah umur.

14. PERUBAHAN KEBIJAKAN PRIVASI INI

MICRORETAILX LLC dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. Perubahan berlaku saat dipublikasikan di Situs.

15. HUKUM YANG BERLAKU DAN BAHASA

Kebijakan Privasi ini diatur oleh hukum Negara Bagian Delaware, Amerika Serikat.

Versi bahasa Inggris yang berlaku. Terjemahan disediakan hanya untuk kemudahan informasi dan tidak memiliki efek kontraktual atau hukum.

16. KONTAK

Untuk pertanyaan terkait privasi, hukum, atau kepatuhan:
legal@microretailx.com
`
    },

    cookies: {
      title: "Kebijakan Cookie — MICRORETAILX",
      description: "Kebijakan cookie global dan kerangka teknis MICRORETAILX.",
      body: `MICRORETAILX — KEBIJAKAN COOKIE

MICRORETAILX LLC (Delaware, Amerika Serikat)
MICRORETAILX GROUP – Kerangka Operasional Global

Terakhir diperbarui: 21-08-2026
Tanggal berlaku: 01-01-2026

Kantor Terdaftar dan Registered Agent:
Corporation Trust Center
1209 Orange Street
Wilmington, DE 19801
United States of America

1. RUANG LINGKUP DAN TUJUAN

Kebijakan Cookie ini menjelaskan bagaimana cookie dan pengenal teknis serupa dapat digunakan sehubungan dengan Situs ini, yang dioperasikan oleh MICRORETAILX LLC (“MICRORETAILX”, “kami”, “kita”, “milik kami”).

Situs ini murni bersifat informatif dan konseptual dan harus dibaca bersama Kebijakan Privasi dan Ketentuan Penggunaan Global, yang bersama-sama membentuk kerangka hukum Situs.

2. STRATEGI ZERO DATA

Situs ini sengaja dirancang dan dioperasikan berdasarkan Strategi Zero Data.

MICRORETAILX LLC tidak menggunakan cookie atau teknologi serupa untuk:
• mengidentifikasi pengguna individual
• membuat profil pengguna
• melakukan pelacakan berbasis perilaku atau minat
• menyampaikan iklan atau pemasaran
• memonetisasi data pribadi

Situs tidak menyediakan akun pengguna, sistem pendaftaran, atau layanan interaktif yang memerlukan data pribadi.

3. COOKIE YANG BENAR-BENAR DIPERLUKAN DAN PENGENAL TEKNIS

Secara default, Situs bergantung secara eksklusif pada cookie yang benar-benar diperlukan dan/atau pengenal teknis setara yang diperlukan untuk infrastruktur inti, keamanan, dan ketersediaan.

Pengenal tersebut dapat ditetapkan atau diproses oleh:
• content delivery network (CDN)
• penyedia DNS dan hosting
• lapisan keamanan, integritas, dan ketersediaan

Pengenal ini digunakan secara eksklusif untuk tujuan seperti:
• load balancing dan distribusi lalu lintas
• pencegahan penyalahgunaan dan rate limiting
• mitigasi bot dan perlindungan terhadap akses otomatis
• pengiriman konten yang aman dan andal

Cookie dan pengenal ini penting untuk fungsi Situs yang semestinya dan tidak dapat dinonaktifkan tanpa mengganggu keamanan atau ketersediaannya.

LOCAL STORAGE YANG DIGUNAKAN SITUS INI

Selain cookie yang benar-benar diperlukan, Situs menyimpan sejumlah kecil preferensi teknis langsung di penyimpanan lokal browser. Entri ini hanya first-party, tidak pernah dikirimkan ke MICRORETAILX LLC atau pihak ketiga, dan tetap berada di perangkat sampai pengunjung menghapusnya.

• mx_consent — mencatat pilihan cookie pengunjung bersama versi scope, versi kebijakan, dan timestamp keputusan. Tujuan: menghormati pilihan dan mencatat kapan serta berdasarkan versi kebijakan mana pilihan tersebut dibuat.
• mx_lang — mencatat bahasa tampilan yang dipilih pengunjung. Tujuan: menjaga bahasa yang sama antarhalaman dan kunjungan.
• mx_a11y — mencatat preferensi aksesibilitas seperti ukuran teks, kontras, dan jenis huruf yang mudah dibaca. Tujuan: mempertahankan pengaturan membaca yang dipilih.
• mx_reader_immersive — mencatat apakah mode baca imersif aktif. Tujuan: mempertahankan tata letak membaca yang dipilih.

Entri tersebut tidak memuat pengenal, data pribadi, atau informasi perilaku. Entri dapat dihapus kapan saja melalui pengaturan browser atau kontrol preferensi cookie yang tersedia di footer setiap halaman.

4. TANPA ANALITIK; TANPA PEMASARAN; TANPA PELACAKAN

Situs tidak menerapkan:
• alat analitik atau pengukuran audiens
• cookie pemasaran atau iklan
• sistem personalisasi atau rekomendasi
• mekanisme pelacakan lintas situs atau lintas layanan

MICRORETAILX LLC tidak melakukan pengambilan keputusan otomatis atau profiling berdasarkan akses ke Situs.

5. TEKNOLOGI OPSIONAL DAN PERSETUJUAN

Cookie opsional atau teknologi serupa tidak diaktifkan secara default.

Jika teknologi opsional diperkenalkan di masa depan, teknologi tersebut hanya akan diaktifkan:
• setelah persetujuan eksplisit pengguna; dan
• jika persetujuan tersebut diwajibkan oleh hukum yang berlaku.

Jika berlaku, preferensi persetujuan dikelola melalui antarmuka persetujuan Situs.

6. METADATA TEKNIS DAN DATA LOG

Sebagaimana umum pada layanan internet, metadata teknis terbatas dapat diproses secara insidental saat mengakses Situs, seperti alamat IP, header permintaan, timestamp, atau informasi tingkat protokol.

Metadata tersebut diproses secara ketat untuk tujuan teknis dan keamanan, termasuk:
• perlindungan infrastruktur dan pencegahan penyalahgunaan
• deteksi dan mitigasi aktivitas otomatis atau berbahaya
• memastikan ketersediaan, integritas, dan ketahanan Situs

Metadata tersebut tidak digunakan untuk identifikasi, profiling, analitik, atau pemasaran dan disimpan hanya selama periode minimum yang diperlukan.

7. KONTEKS INTERNASIONAL DAN INFRASTRUKTUR

Situs dapat diakses secara global dan bergantung pada infrastruktur teknis terdistribusi.

Jika metadata teknis diproses melalui sistem yang tersebar secara global, pemrosesan tersebut dapat melibatkan transfer data internasional.

Transfer tersebut dilakukan berdasarkan perlindungan teknis dan organisasi yang sesuai dan, jika berlaku, mengandalkan mekanisme transfer internasional yang diakui.

8. TANPA TARGETING; TANPA MAKSUD YURISDIKSIONAL

MICRORETAILX LLC tidak secara aktif menargetkan pengguna atau audiens di yurisdiksi tertentu.

Aksesibilitas Situs dari yurisdiksi mana pun semata tidak merupakan targeting, pendirian, lisensi, otorisasi, atau aktivitas yang diatur di yurisdiksi tersebut.

9. PERUBAHAN KEBIJAKAN COOKIE INI

MICRORETAILX LLC dapat memperbarui Kebijakan Cookie ini dari waktu ke waktu. Setiap perubahan mulai berlaku saat dipublikasikan di Situs.

10. HUKUM YANG BERLAKU DAN BAHASA

Kebijakan Cookie ini diatur oleh hukum Negara Bagian Delaware, Amerika Serikat.

Versi bahasa Inggris yang berlaku. Terjemahan disediakan hanya untuk kemudahan informasi dan tidak memiliki efek hukum.

11. KONTAK

Untuk pertanyaan terkait cookie, privasi, atau kepatuhan:
legal@microretailx.com
`
    },

    legal: {
      title: "Pemberitahuan Hukum — MICRORETAILX",
      description: "Identifikasi perusahaan dan informasi hukum MICRORETAILX LLC.",
      body: `MICRORETAILX — PEMBERITAHUAN HUKUM

MICRORETAILX LLC (Delaware, Amerika Serikat)
MICRORETAILX GROUP – Kerangka Operasional Global

Terakhir diperbarui: 01-01-2026
Tanggal berlaku: 01-01-2026

Kantor Terdaftar dan Registered Agent:
Corporation Trust Center
1209 Orange Street
Wilmington, DE 19801
United States of America

1. KERANGKA HUKUM; HIERARKI DOKUMEN; HUBUNGAN DENGAN KEBIJAKAN LAIN

Pemberitahuan Hukum ini merupakan bagian dari kerangka hukum yang mengatur akses dan penggunaan Situs.

Dokumen tambahan dapat berlaku tergantung sifat interaksi pengunjung dengan Situs, termasuk:
• Ketentuan Penggunaan
• Kebijakan Privasi
• Kebijakan Cookie (dan setiap pengaturan Preferensi Cookie / CMP yang ditampilkan di Situs)

Jika terdapat konflik antar dokumen, berlaku urutan prioritas berikut:
(i) Pemberitahuan Hukum ini, (ii) Ketentuan Penggunaan, (iii) Kebijakan Privasi, dan (iv) Kebijakan Cookie, kecuali hukum yang bersifat wajib mengharuskan lain untuk topik tertentu.

Jika suatu ketentuan dalam Pemberitahuan Hukum ini dinyatakan tidak sah atau tidak dapat dilaksanakan, ketentuan lainnya tetap berlaku sepenuhnya.

MICRORETAILX LLC dapat meninjau, memperbarui, dan meningkatkan kerangka hukum ini dari waktu ke waktu untuk mencerminkan perkembangan standar regulasi, panduan pengawasan, praktik keamanan, dan perubahan operasional.

2. IDENTIFIKASI OPERATOR SITUS

Situs web ini (“Situs”) dioperasikan dan dikendalikan secara eksklusif oleh MICRORETAILX LLC, sebuah limited liability company yang didirikan dan berlaku secara sah berdasarkan hukum Negara Bagian Delaware, Amerika Serikat.

Setiap referensi terhadap “MICRORETAILX GROUP”, “group”, “network”, “ecosystem”, “labs”, “nodes”, “regions”, atau istilah serupa bersifat deskriptif dan konseptual semata dan tidak menyiratkan keberadaan badan hukum terpisah, cabang, anak perusahaan, kemitraan, joint venture, agensi, atau permanent establishment, kecuali dinyatakan lain secara tegas dalam perjanjian tertulis.

3. TUJUAN SITUS

Situs disediakan hanya untuk tujuan informasi, konseptual, dan eksploratif.

Situs tidak merupakan dan tidak boleh ditafsirkan sebagai:
• penawaran atau ajakan atas produk atau layanan
• proposal investasi, promosi keuangan, atau komunikasi yang diatur
• nasihat hukum, pajak, keuangan, atau profesional
• aktivitas yang diatur atau berlisensi dalam yurisdiksi mana pun

Situs tidak memungkinkan transaksi, pendaftaran, akun pengguna, atau penyediaan layanan.

4. TANPA KETERGANTUNGAN; TANPA NASIHAT

Seluruh konten yang tersedia di Situs disediakan hanya untuk tujuan informasi umum.

MICRORETAILX LLC tidak memberikan pernyataan atau jaminan mengenai akurasi, kelengkapan, atau kesesuaian konten untuk tujuan tertentu. Setiap ketergantungan pada konten Situs dilakukan atas risiko pengunjung sendiri.

5. KEKAYAAN INTELEKTUAL

Kecuali dinyatakan lain secara tegas, seluruh konten Situs, termasuk namun tidak terbatas pada teks, grafis, desain, tata letak, kode sumber, simulasi, visualisasi, model, dan dokumentasi, merupakan milik eksklusif MICRORETAILX LLC.

Konten tersebut dilindungi oleh hukum kekayaan intelektual, hak cipta, dan rahasia dagang yang berlaku di seluruh dunia.

Tidak ada konten yang boleh disalin, direproduksi, didistribusikan, diubah, atau dieksploitasi tanpa izin tertulis sebelumnya dari MICRORETAILX LLC, kecuali jika diizinkan oleh hukum yang bersifat wajib.

6. PENGGUNAAN YANG DAPAT DITERIMA

Pengunjung setuju untuk tidak:
• menyalahgunakan atau mengganggu Situs atau infrastrukturnya
• mencoba akses tanpa izin atau menghindari langkah keamanan
• melakukan scraping, reverse engineering, atau ekstraksi otomatis
• menggunakan Situs untuk tujuan yang melawan hukum atau dilarang

MICRORETAILX LLC berhak mengambil langkah teknis, hukum, dan organisasi yang sesuai untuk melindungi Situs dan integritasnya.

7. TAUTAN PIHAK KETIGA

Situs dapat berisi tautan ke situs web atau layanan pihak ketiga.

MICRORETAILX LLC tidak bertanggung jawab atas konten, ketersediaan, keamanan, atau praktik pihak ketiga. Akses ke sumber daya pihak ketiga dilakukan atas risiko pengunjung sendiri.

8. KETERSEDIAAN DAN PENAFIAN

Situs disediakan “sebagaimana adanya” dan “sebagaimana tersedia”.

MICRORETAILX LLC tidak menjamin Situs akan tersedia tanpa gangguan, bebas kesalahan, atau bebas kerentanan. Sejauh maksimum yang diizinkan oleh hukum yang berlaku, seluruh jaminan tersurat maupun tersirat dikesampingkan.

9. BATASAN TANGGUNG JAWAB

Sejauh maksimum yang diizinkan hukum yang berlaku, MICRORETAILX LLC tidak bertanggung jawab atas kerugian langsung, tidak langsung, insidental, konsekuensial, atau khusus yang timbul dari atau sehubungan dengan penggunaan atau ketidakmampuan menggunakan Situs.

10. TANPA TARGETING; TANPA PROFILING SECARA DEFAULT; TANPA PENDIRIAN

MICRORETAILX LLC tidak secara aktif menargetkan pengguna atau audiens di yurisdiksi tertentu.

Aksesibilitas Situs dari yurisdiksi tertentu semata tidak merupakan targeting, pendirian, lisensi, otorisasi, atau aktivitas yang diatur di yurisdiksi tersebut.

Kecuali diungkapkan secara tegas dalam lapisan kebijakan yang berlaku dan, jika diwajibkan, diaktifkan oleh pengunjung melalui pengaturan eksplisit atau mekanisme persetujuan, MICRORETAILX LLC tidak melakukan:
• iklan perilaku atau targeting pemasaran
• profiling pengguna untuk tujuan periklanan
• pengambilan keputusan otomatis yang menghasilkan efek hukum atau dampak signifikan serupa

11. HUKUM YANG BERLAKU DAN YURISDIKSI

Pemberitahuan Hukum ini diatur oleh hukum Negara Bagian Delaware, Amerika Serikat.

Setiap sengketa yang timbul dari atau sehubungan dengan Situs atau Pemberitahuan Hukum ini tunduk pada yurisdiksi eksklusif pengadilan negara bagian atau federal yang berlokasi di Negara Bagian Delaware, tanpa mengurangi aturan perlindungan konsumen wajib yang mungkin berlaku di yurisdiksi tertentu.

12. BAHASA

Versi bahasa Inggris dari Pemberitahuan Hukum ini yang berlaku. Terjemahan disediakan hanya untuk kemudahan informasi dan tidak memiliki efek hukum.

13. KONTAK

Untuk pertanyaan hukum atau kepatuhan:
legal@microretailx.com
`
    }
  });


  register("ko", {
    "nav.about": "정보",
    "nav.home": "홈",
    "nav.verticals": "사업 영역",
    "nav.contact": "문의",
    "footer.terms": "이용약관",
    "footer.privacy": "개인정보",
    "footer.cookies": "쿠키",
    "footer.legal": "법적 고지",
    "cookie.prefs": "쿠키 설정",
    "reader.toggle": "읽기 모드",
    "cmp.title": "개인정보 및 쿠키",
    "cmp.desc": "당사는 귀하의 개인정보를 존중합니다. 이 사이트는 광고 또는 추적 쿠키를 사용하지 않습니다. 보안 및 기본 기능에 필요한 쿠키는 항상 활성화됩니다. 선택적 쿠키는 허용하거나 거부할 수 있습니다.",
    "cmp.necessary": "필수",
    "cmp.necessary.desc": "보안 및 핵심 기능.",
    "cmp.analytics": "분석",
    "cmp.analytics.desc": "선택 사항: 사이트 개선을 위한 익명 사용 데이터.",
    "cmp.marketing": "마케팅",
    "cmp.marketing.desc": "선택 사항: 개인화 및 캠페인 측정.",
    "cmp.noproviders": "활성 공급자 없음",
    "cmp.reject": "모두 거부",
    "cmp.accept": "모두 허용",
    "cmp.save": "설정 저장"
  }, {
    terms: {
      title: "글로벌 이용약관 — MICRORETAILX",
      description: "MICRORETAILX의 글로벌 이용약관 및 법적 프레임워크.",
      body: `MICRORETAILX – 글로벌 이용약관

MICRORETAILX LLC (미국 델라웨어)
MICRORETAILX GROUP – 글로벌 운영 프레임워크

최종 업데이트: 01-01-2026
시행일: 01-01-2026

등록 사무소 및 Registered Agent:
Corporation Trust Center
1209 Orange Street
Wilmington, DE 19801
United States of America

1. 정의

• “MICRORETAILX”, “당사”, “당사의”는 미국 델라웨어주 법률에 따라 적법하게 설립되고 존속하는 유한책임회사인 MICRORETAILX LLC를 의미합니다.
• “웹사이트”는 이 웹사이트와 이를 통해 제공되는 관련 페이지, 하위 도메인, 인터페이스, 상호작용 요소, 소스 코드, 시각화 및 콘텐츠를 의미합니다.
• “MICRORETAILX GROUP”은 현재 및/또는 향후 이니셔티브를 설명하기 위해 사용하는 개념적·전략적 프레임워크를 의미하며, 서면으로 명시적으로 정하지 않는 한 별도의 법적 실체를 구성하지 않습니다.
• “Verticals”는 개념적·전략적 분류 프레임워크로만 사용되는 주제별 영역을 의미합니다.
• “콘텐츠”에는 모든 텍스트, 그래픽, 디자인, 소스 코드, 시각화, 시뮬레이션, 모델, 워크플로 및 문서가 포함됩니다.
• “제출물”은 사용자가 제출하는 모든 의견, 아이디어, 제안 또는 자료를 의미합니다.

2. 운영자, 적용 범위 및 동의

본 약관은 웹사이트에 대한 접근과 이용을 규율합니다. 웹사이트에 접근하거나 이용함으로써 사용자는 본 약관을 읽고 이해했으며 법적으로 구속되는 것에 동의하고, 이에 동의할 법적 능력이 있음을 진술합니다.

3. 운영자 신원, 법적 주소 및 통지

본 웹사이트는 델라웨어 유한책임회사인 MICRORETAILX LLC가 독점적으로 운영하고 관리합니다.

Registered Agent: Corporation Trust Center, 1209 Orange Street, Wilmington, DE 19801, USA.

법률 및 컴플라이언스 관련 연락은 legal@microretailx.com으로 보내야 합니다.

“nodes”, “labs”, “regions” 또는 “verticals”에 대한 언급은 델라웨어주 외의 어떠한 관할에서도 지점, 사무소, 자회사, 대표 사무소 또는 과세상 연결점을 만드는 것으로 해석되지 않습니다.

4. 글로벌 운영 모델; 파트너십 없음; 대리관계 없음

MICRORETAILX는 개념적, 탐색적 및 전략적 이니셔티브를 통해 전 세계적으로 활동합니다. MICRORETAILX LLC가 서명한 서면 계약에서 명시적으로 달리 합의하지 않는 한:

(i) 웹사이트의 어떠한 내용도 파트너십, 합작투자, 고용 또는 대리관계를 형성하지 않습니다.

(ii) 어떠한 당사자도 MICRORETAILX LLC를 법적으로 구속할 권한이 없습니다.

(iii) “group”, “network”, “ecosystem”과 같은 설명적 용어는 그 자체로 법적 의미를 갖지 않습니다.

웹사이트 이용은 어떠한 관할에서도 고정사업장 또는 유사한 과세 대상 존재를 만들지 않습니다.

5. 웹사이트의 성격; 제안 없음; 약정 없음

웹사이트는 오직 정보 제공, 개념 제시 및 탐색을 목적으로 제공됩니다. 여기에 포함된 어떠한 내용도 어떠한 관할에서든 제안, 권유, 투자 제안, 유인 또는 규제 대상 활동을 구성하지 않습니다.

6. VERTICAL 프레임워크(개념적·비운영)

Verticals에 대한 모든 언급은 순수한 개념적 프레임워크를 나타내며 실제 운영 사업부, 제품, 서비스, 허가 활동 또는 규제 대상 운영의 존재를 의미하지 않습니다.

7. ZERO DATA 전략(PRIVACY BY DESIGN)

웹사이트는 Zero Data 전략에 따라 설계되었습니다. 표준 인터넷 프로토콜상 엄격히 불가피하거나 관련 법률상 필요한 경우를 제외하고 사용자 계정, 프로파일링 및 제3자 추적 기술은 기본적으로 활성화되지 않습니다.

8. 쿠키 및 동의

기본적으로 엄격히 필요한 쿠키 또는 이에 상응하는 기술적 식별자만 사용됩니다. 선택적 기술은 법률상 필요한 경우 사용자의 명시적 동의를 받은 후에만 활성화됩니다.

엄격히 필요한 쿠키 및/또는 기술적 식별자는 로드 밸런싱, 남용 방지, 봇 완화 및 안전한 콘텐츠 제공만을 목적으로 콘텐츠 전송 네트워크, 호스팅 제공업체 및 보안 계층에서 설정될 수 있습니다.

9. 호스팅, 제공 및 보안

웹사이트는 제3자 인프라에서 호스팅됩니다. 제한된 기술 로그 및 메타데이터는 보안, 무결성, 남용 방지 및 안정적인 콘텐츠 제공을 위해서만 처리될 수 있습니다.

이러한 처리는 웹사이트의 정보 제공 성격을 변경하지 않으며 상업 활동, 프로파일링 또는 특정 관할 대상 타기팅을 구성하지 않습니다.

단순히 웹사이트에 접근할 수 있다는 사실만으로 어떠한 관할에서도 상업 활동, 타기팅 또는 규제상 존재가 성립하지 않습니다.

10. 글로벌 데이터 보호 및 규제 준수

MICRORETAILX LLC는 privacy by design, 데이터 최소화, 목적 제한, 투명성, 보안 및 책임성을 포함한 국제적으로 인정되는 데이터 보호 및 개인정보 보호 원칙에 따라 본 웹사이트를 설계하고 운영합니다.

웹사이트는 주로 정보 제공 및 개념적 성격을 가집니다. 사용자 계정을 제공하지 않고 등록을 요구하지 않으며 프로파일링, 행동 추적 또는 광고 기반 처리를 수행하지 않습니다.

콘텐츠 제공 및 기술 운영은 전 세계에 분산된 인프라 제공업체에 의존합니다. IP 주소나 연결 데이터와 같은 기술 메타데이터가 부수적으로 처리되는 경우, 그 처리는 보안, 무결성, 남용 방지 및 안정적인 콘텐츠 제공에 필요한 범위로 엄격히 제한됩니다.

이러한 처리는 적용 가능한 경우 데이터 처리 계약 및 인정된 국제 이전 메커니즘을 포함한 적절한 계약적, 기술적 및 조직적 보호조치에 따라 수행됩니다. 해당되는 경우 표준계약조항(SCC) 또는 이에 상응하는 적법한 국제 데이터 이전 메커니즘에 의존합니다. MICRORETAILX LLC는 상업적, 프로파일링 또는 마케팅 목적으로 개인정보를 의도적으로 수집, 저장 또는 활용하지 않습니다.

이 접근 방식은 여러 관할의 주요 글로벌 데이터 보호 및 개인정보 보호 프레임워크의 원칙과 일치하도록 설계되었습니다.

특정 관할에서 웹사이트에 접근할 수 있다는 사실만으로 해당 관할을 대상으로 하는 행위, 설립, 허가, 승인 또는 규제 활동을 구성하지 않습니다.

MICRORETAILX LLC는 특정 관할의 사용자, 고객, 투자자, 규제기관 또는 공공기관을 적극적으로 대상으로 하지 않습니다.

11. 허용된 사용; 금지 행위

강행법규에서 명시적으로 허용하는 경우를 제외하고 데이터 스크래핑, 리버스 엔지니어링, 알고리즘 추출, 인공지능 모델 학습, 인프라 방해 또는 웹사이트 오용을 해서는 안 됩니다.

12. 보존 및 집행

MICRORETAILX LLC는 웹사이트를 보호하고 오용 또는 불법 행위의 증거를 보존하기 위해 기술적, 조직적 및 법적 조치를 시행할 권리를 보유합니다.

13. 지적재산권; 영업비밀

웹사이트와 그 콘텐츠에 관한 모든 권리, 소유권 및 이익은 MICRORETAILX LLC의 독점적 재산이며 전 세계적으로 적용되는 지적재산권 및 영업비밀 법률의 보호를 받습니다.

14. 비공개 자료의 기밀성

비공개 또는 제한 자료는 MICRORETAILX LLC의 사전 서면 승인 없이 공개, 배포 또는 복제할 수 없습니다.

15. 제출물 및 피드백

자료를 제출함으로써 사용자는 MICRORETAILX LLC에 정당한 사업 목적을 위해 해당 제출물을 사용, 복제, 수정 및 통합할 수 있는 전 세계적, 로열티 없는, 비독점적이고 영구적인 라이선스를 부여합니다.

이 라이선스는 요청하지 않은 제출물에만 적용되며 MICRORETAILX LLC와 체결한 별도의 서면 계약을 대체, 제한 또는 무효화하지 않습니다.

16. DIGITAL MILLENNIUM COPYRIGHT ACT (DMCA) SAFE HARBOR

MICRORETAILX LLC는 지적재산권을 존중하며 사용자도 동일하게 행동하기를 기대합니다. Digital Millennium Copyright Act(17 U.S.C. § 512)에 따라 저작권 침해 주장 신고에는 다음 절차가 적용됩니다.

• 통지. 웹사이트의 콘텐츠 또는 제출물이 귀하의 저작권을 침해한다고 판단하는 경우 legal@microretailx.com으로 당사의 지정 담당자에게 서면 통지를 제출할 수 있습니다. 효력이 있으려면 해당 통지는 17 U.S.C. § 512(c)(3)의 요건을 실질적으로 충족해야 하며, 여기에는 (i) 저작권자 또는 위임받은 대리인의 물리적 또는 전자적 서명, (ii) 침해되었다고 주장하는 저작물의 식별, (iii) 침해 의심 자료와 위치의 식별, (iv) 신고자의 연락처 정보, (v) 사용이 허가되지 않았다는 선의의 믿음에 관한 진술이 포함됩니다.

• 삭제. 유효한 통지를 수령한 경우 MICRORETAILX LLC는 단독 재량으로 사전 통지 없이 침해 의심 자료를 삭제하거나 접근을 차단할 권리를 보유합니다.

• 반론 통지. 해당되는 경우 DMCA에 따라 반론 통지를 제출할 수 있습니다. 법률상 요구되는 경우 MICRORETAILX LLC는 자료를 복원할 수 있습니다.

• 제한. 이 절차는 DMCA에 따른 저작권 관련 사안에만 적용됩니다. 그 밖의 법률, 규제 또는 컴플라이언스 문의는 본 약관의 일반 연락처 조항을 참조하십시오.

17. 외부 링크; 제3자 서비스

웹사이트에는 제3자 서비스 링크가 포함될 수 있습니다. MICRORETAILX LLC는 제3자의 콘텐츠, 관행 또는 정책에 대해 책임을 지지 않습니다. 접근은 사용자의 책임입니다.

18. 면책; 비의존

웹사이트는 법률, 세무, 금융 또는 전문 자문을 제공하지 않습니다.

웹사이트의 어떠한 내용도 규제 지침, 컴플라이언스 진술 또는 특정 지역 법률·규제 체계에 대한 적합성 보장으로 해석되어서는 안 됩니다.

미래예측진술은 본질적으로 불확실하며 미래의 결과를 보장하지 않습니다.

19. 가용성; “있는 그대로”

웹사이트는 명시적 또는 묵시적 보증 없이 “있는 그대로” 및 “이용 가능한 상태로” 제공됩니다.

20. 책임의 제한

관련 법률이 허용하는 최대 범위에서 MICRORETAILX LLC는 웹사이트 사용으로 발생하는 직접 또는 간접 손해에 책임을 지지 않습니다.

21. 면책 및 배상

사용자는 웹사이트의 불법적 사용 또는 본 약관 위반으로 발생하는 청구, 책임, 손해 또는 비용으로부터 MICRORETAILX LLC를 면책하고 보호하는 데 동의합니다.

22. 준수; 수출 통제; 제재

사용자는 미국 Export Administration Regulations(EAR) 및 Office of Foreign Assets Control(OFAC) 제도를 포함한 관련 수출 통제 및 제재 법률과, 해당되는 경우 유엔, 유럽연합 또는 기타 국제 제재 프레임워크를 준수하는 데 동의합니다.

23. 전자 통신; 통지

모든 법적 통지 및 연락은 legal@microretailx.com으로 보내야 합니다.

24. 약관 변경

MICRORETAILX LLC는 언제든지 본 약관을 수정할 수 있습니다. 웹사이트를 계속 이용하면 수정된 약관을 수락한 것으로 간주됩니다.

25. 준거법; 전속 관할; 언어

본 약관은 미국 델라웨어주 법률의 적용을 받습니다. 모든 분쟁은 델라웨어에 위치한 주 또는 연방 법원의 전속 관할에 따릅니다.

영문본이 우선하며 번역본은 정보 제공 및 편의를 위해서만 제공됩니다.

26. 분리가능성; 완전합의

어떤 조항이 무효 또는 집행 불가능한 것으로 판단되더라도 나머지 조항은 완전한 효력을 유지합니다. 본 약관은 웹사이트 이용에 관한 완전한 합의를 구성합니다.

27. 연락처

법률 및 컴플라이언스 연락: legal@microretailx.com
`
    },

    privacy: {
      title: "개인정보 처리방침 — MICRORETAILX",
      description: "MICRORETAILX의 글로벌 개인정보 보호정책 및 데이터 보호 프레임워크.",
      body: `MICRORETAILX — 개인정보 처리방침

MICRORETAILX LLC (미국 델라웨어)
MICRORETAILX GROUP – 글로벌 운영 프레임워크

최종 업데이트: 01-01-2026
시행일: 01-01-2026

등록 사무소 및 Registered Agent:
Corporation Trust Center
1209 Orange Street
Wilmington, DE 19801
United States of America

1. 범위 및 목적

본 개인정보 처리방침은 MICRORETAILX LLC(“MICRORETAILX”, “당사”)가 데이터 보호 및 개인정보 보호 관점에서 본 웹사이트를 어떻게 설계하고 운영하는지 설명합니다.

웹사이트는 엄격히 정보 제공 및 개념적 성격을 가집니다. 사용자 계정을 제공하지 않고 등록을 요구하지 않으며 제품이나 서비스를 판매하지 않습니다.

2. ZERO DATA 전략(PRIVACY BY DESIGN)

본 웹사이트는 의도적으로 Zero Data 환경으로 설계되었습니다.

MICRORETAILX LLC는 방문자의 개인정보를 의도적으로 수집, 요청, 요구, 저장, 수익화 또는 활용하지 않습니다. 사용자 프로필, 식별자 또는 행동 데이터셋을 생성하지 않습니다.

데이터 최소화, 목적 제한, 투명성, 보안 및 책임성을 포함한 개인정보 보호 원칙은 설계 및 기본 설정에 내장되어 있습니다.

3. 사용자 계정 없음; 등록 없음

웹사이트는 사용자 계정, 로그인 영역, 등록 양식 또는 멤버십 시스템을 제공하지 않습니다.

방문자는 웹사이트 콘텐츠에 접근하기 위해 개인정보를 제출할 필요가 없습니다.

4. 프로파일링 없음; 추적 없음; 광고 없음

웹사이트는 다음을 구현하지 않습니다:

• 행동 또는 관심 기반 프로파일링
• 광고 또는 마케팅 기술
• 분석 플랫폼 또는 이용자 측정 도구
• 사이트 또는 서비스 간 추적 메커니즘

MICRORETAILX LLC는 방문자에 대한 자동화된 의사결정, 프로파일링 또는 행동 분석을 수행하지 않습니다.

5. 기술 메타데이터 및 로그 데이터

대부분의 인터넷 서비스와 마찬가지로 웹사이트 접근 시 IP 주소, 요청 헤더, 타임스탬프 또는 프로토콜 수준 정보와 같은 제한된 기술 메타데이터가 부수적으로 처리될 수 있습니다.

이러한 메타데이터는 다음과 같은 기술 및 보안 목적에만 엄격히 사용됩니다:

• 안전하고 안정적인 콘텐츠 제공
• 남용, 자동화된 접근 및 공격으로부터의 보호
• 네트워크 무결성과 가용성 유지

이 메타데이터는 식별, 프로파일링, 마케팅 또는 분석 목적으로 사용되지 않으며 필요한 최소 기간 동안만 보관됩니다.

6. 제3자 인프라 제공업체

웹사이트는 Cloudflare, Inc. 및 GitHub, Inc.와 같은 콘텐츠 전송 네트워크(CDN), DNS 서비스 및 정적 호스팅 플랫폼을 포함한 제3자 인프라 제공업체를 통해 제공됩니다.

이들 제공업체는 MICRORETAILX LLC를 대신하여 인프라, 보안 및 제공 기능을 수행하기 위해서만 제한된 기술 메타데이터를 처리할 수 있습니다.

MICRORETAILX LLC는 해당 제공업체가 제공하는 분석, 추적, 광고 또는 행동 모니터링 기능을 활성화하지 않습니다.

7. 국제 데이터 이전

기술 메타데이터가 전 세계에 분산된 인프라를 통해 처리되는 경우 국제 데이터 이전이 수반될 수 있습니다.

그러한 이전은 적절한 기술적·조직적 보호조치 하에 수행되며, 해당되는 경우 표준계약조항(SCC) 또는 이에 상응하는 합법적 프레임워크와 같은 인정된 국제 데이터 이전 메커니즘에 의존합니다.

MICRORETAILX LLC는 국제 이전을 개인정보의 상업적 활용에 사용하지 않습니다.

8. 쿠키, 기술적 식별자 및 인프라 보안

기본적으로 본 웹사이트는 마케팅, 광고, 분석, 타기팅 또는 행동 추적 쿠키를 사용하지 않습니다.

기술 고지. 웹사이트는 핵심 인프라 및 보안 운영에 필요한 엄격히 필수적인 기술적 식별자에만 의존합니다. 여기에는 콘텐츠 전송 네트워크(CDN), DNS 제공업체, 호스팅 플랫폼 및 보안 계층에서 설정 또는 처리하는 식별자가 포함될 수 있습니다.

이러한 식별자는 오직 다음 목적에만 사용됩니다:

• 보안 및 남용 방지: 무단 접근, 자동화된 남용 및 서비스 거부 공격을 방지하기 위한 웹 애플리케이션 방화벽(WAF), 봇 완화 시스템, 속도 제한 및 네트워크 수준 보호의 운영.

• 콘텐츠 제공 및 가용성: 글로벌 CDN, 로드 밸런서 및 분산 인프라를 통한 안전하고 효율적인 콘텐츠 제공으로 성능, 복원력 및 가용성을 보장.

이러한 기술적 식별자는 사용자 프로파일링, 행동 모니터링, 광고 또는 마케팅 활동을 가능하게 하지 않으며 웹사이트나 서비스 간에 개인을 식별하거나 추적하는 데 사용되지 않습니다.

IP 주소 또는 요청 헤더와 같은 기술 메타데이터가 처리되는 경우 보안, 무결성 및 운영 목적에만 엄격히 사용되며 필요한 최소 기간 동안만 처리됩니다.

이러한 식별자는 웹사이트 제공, 보안 및 정상 운영에 엄격히 필요하므로 관련 데이터 보호 및 ePrivacy 프레임워크에 따라 일반적으로 동의 요건에서 면제됩니다.

9. 정보주체의 권리

웹사이트의 성격과 의도적인 개인정보 수집이 없다는 점을 고려할 때 많은 정보주체 권리는 실제로 적용되지 않을 수 있습니다.

관련 법률에서 요구하는 경우 개인은 기술적 접근 로그와 관련된 잠재적 데이터 처리에 대해 MICRORETAILX LLC에 문의할 수 있습니다.

요청은 legal@microretailx.com으로 제출할 수 있습니다.

MICRORETAILX LLC는 법률이 허용하는 범위에서 요청을 확인하고 답변을 제한할 권리를 보유합니다.

10. 데이터 보안

MICRORETAILX LLC는 웹사이트 및 인프라를 무단 접근, 오용, 변경 또는 파괴로부터 보호하기 위해 적절한 기술적·조직적 조치를 시행합니다.

보안 조치에는 전송 암호화, 엄격한 보안 헤더, 접근 제어 및 네트워크 수준 보호 등이 포함됩니다.

11. SECURITY-BY-DESIGN 선언

본 웹사이트는 security-first 및 privacy-by-design 아키텍처로 의도적으로 설계되었습니다. 기술 설계는 데이터 노출을 최소화하고 공격 표면을 줄이며 불필요한 데이터 처리를 방지하여 사후 통제나 동의 메커니즘에 의존하기보다 기본적으로 사용자를 보호하는 것을 목표로 합니다.

보안 조치는 선택 기능이 아니라 웹사이트의 핵심 인프라 및 운영 모델의 일부로 구현됩니다.

12. 타기팅 없음; 설립 없음

MICRORETAILX LLC는 특정 관할의 사용자, 고객, 투자자 또는 기관을 적극적으로 대상으로 하지 않습니다.

특정 관할에서 웹사이트에 접근할 수 있다는 사실만으로 해당 관할에서 타기팅, 설립, 라이선스, 승인 또는 규제 활동이 성립하지 않습니다.

13. 아동의 개인정보 보호

웹사이트는 아동을 대상으로 하지 않으며 MICRORETAILX LLC는 미성년자의 개인정보를 고의로 수집하지 않습니다.

14. 개인정보 처리방침 변경

MICRORETAILX LLC는 본 개인정보 처리방침을 수시로 업데이트할 수 있습니다. 변경 사항은 웹사이트에 게시되는 즉시 효력이 발생합니다.

15. 준거법 및 언어

본 개인정보 처리방침은 미국 델라웨어주 법률의 적용을 받습니다.

영문본이 우선합니다. 번역은 정보 제공 편의를 위해서만 제공되며 계약상 또는 법적 효력이 없습니다.

16. 연락처

개인정보, 법률 또는 컴플라이언스 관련 문의:
legal@microretailx.com
`
    },

    cookies: {
      title: "쿠키 정책 — MICRORETAILX",
      description: "MICRORETAILX의 글로벌 쿠키 정책 및 기술 프레임워크.",
      body: `MICRORETAILX — 쿠키 정책

MICRORETAILX LLC (미국 델라웨어)
MICRORETAILX GROUP – 글로벌 운영 프레임워크

최종 업데이트: 21-08-2026
시행일: 01-01-2026

등록 사무소 및 Registered Agent:
Corporation Trust Center
1209 Orange Street
Wilmington, DE 19801
United States of America

1. 범위 및 목적

본 쿠키 정책은 MICRORETAILX LLC(“MICRORETAILX”, “당사”)가 운영하는 본 웹사이트와 관련하여 쿠키 및 유사한 기술적 식별자가 어떻게 사용될 수 있는지 설명합니다.

본 웹사이트는 엄격히 정보 제공 및 개념적 성격이며, 웹사이트의 법적 프레임워크를 함께 구성하는 개인정보 처리방침 및 글로벌 이용약관과 함께 읽어야 합니다.

2. ZERO DATA 전략

본 웹사이트는 의도적으로 Zero Data 전략에 따라 설계되고 운영됩니다.

MICRORETAILX LLC는 쿠키 또는 유사 기술을 다음 목적으로 사용하지 않습니다:
• 개별 사용자 식별
• 사용자 프로필 생성
• 행동 또는 관심 기반 추적
• 광고 또는 마케팅 제공
• 개인정보 수익화

웹사이트는 개인정보를 요구하는 사용자 계정, 등록 시스템 또는 상호작용 서비스를 제공하지 않습니다.

3. 엄격히 필요한 쿠키 및 기술적 식별자

기본적으로 웹사이트는 핵심 인프라, 보안 및 가용성에 필요한 엄격히 필수적인 쿠키 및/또는 이에 상응하는 기술적 식별자에만 의존합니다.

이러한 식별자는 다음에 의해 설정 또는 처리될 수 있습니다:
• 콘텐츠 전송 네트워크(CDN)
• DNS 및 호스팅 제공업체
• 보안, 무결성 및 가용성 계층

이 식별자는 다음과 같은 목적에만 사용됩니다:
• 로드 밸런싱 및 트래픽 분산
• 남용 방지 및 속도 제한
• 봇 완화 및 자동 접근 보호
• 안전하고 안정적인 콘텐츠 제공

이러한 쿠키와 식별자는 웹사이트의 정상 작동에 필수적이며 보안이나 가용성을 저해하지 않고는 비활성화할 수 없습니다.

본 웹사이트에서 사용하는 LOCAL STORAGE

엄격히 필요한 쿠키 외에도 웹사이트는 소수의 기술적 환경설정을 브라우저의 로컬 저장소에 직접 저장합니다. 이러한 항목은 first-party에 한하며 MICRORETAILX LLC나 제3자에게 전송되지 않고 방문자가 제거할 때까지 기기에 남아 있습니다.

• mx_consent — 방문자의 쿠키 선택과 함께 scope 버전, 정책 버전 및 결정 타임스탬프를 기록합니다. 목적: 선택을 존중하고 해당 정책의 어떤 버전에서 언제 선택했는지 증빙.
• mx_lang — 방문자가 선택한 표시 언어를 기록합니다. 목적: 페이지와 방문 간에 동일한 언어 유지.
• mx_a11y — 텍스트 크기, 대비, 읽기 쉬운 글꼴 등의 접근성 환경설정을 기록합니다. 목적: 선택한 읽기 설정 유지.
• mx_reader_immersive — 몰입형 읽기 모드 활성 여부를 기록합니다. 목적: 선택한 읽기 레이아웃 유지.

이 항목에는 식별자, 개인정보 또는 행동 정보가 포함되지 않습니다. 브라우저 설정이나 모든 페이지의 푸터에 있는 쿠키 설정을 통해 언제든 제거할 수 있습니다.

4. 분석 없음; 마케팅 없음; 추적 없음

웹사이트는 다음을 구현하지 않습니다:
• 분석 또는 이용자 측정 도구
• 마케팅 또는 광고 쿠키
• 개인화 또는 추천 시스템
• 사이트 또는 서비스 간 추적 메커니즘

MICRORETAILX LLC는 웹사이트 접근을 기반으로 자동화된 의사결정이나 프로파일링을 수행하지 않습니다.

5. 선택적 기술 및 동의

선택적 쿠키 또는 유사 기술은 기본적으로 활성화되지 않습니다.

향후 선택적 기술이 도입될 경우 다음 조건에서만 활성화됩니다:
• 사용자의 명시적 동의를 받은 후; 그리고
• 관련 법률에 따라 그러한 동의가 필요한 경우.

해당되는 경우 동의 환경설정은 웹사이트의 동의 인터페이스를 통해 관리됩니다.

6. 기술 메타데이터 및 로그 데이터

인터넷 서비스의 일반적인 특성상 웹사이트 접근 시 IP 주소, 요청 헤더, 타임스탬프 또는 프로토콜 수준 정보와 같은 제한된 기술 메타데이터가 부수적으로 처리될 수 있습니다.

이 메타데이터는 다음과 같은 기술 및 보안 목적에만 엄격히 처리됩니다:
• 인프라 보호 및 남용 방지
• 자동화 또는 악성 활동 탐지 및 완화
• 웹사이트의 가용성, 무결성 및 복원력 보장

이 메타데이터는 식별, 프로파일링, 분석 또는 마케팅 목적으로 사용되지 않으며 필요한 최소 기간 동안만 보관됩니다.

7. 국제적 맥락 및 인프라

웹사이트는 전 세계에서 접근할 수 있으며 분산된 기술 인프라에 의존합니다.

기술 메타데이터가 전 세계에 분산된 시스템을 통해 처리되는 경우 국제 데이터 이전이 수반될 수 있습니다.

이러한 이전은 적절한 기술적·조직적 보호조치 하에 수행되며 해당되는 경우 인정된 국제 이전 메커니즘에 의존합니다.

8. 타기팅 없음; 관할 의도 없음

MICRORETAILX LLC는 특정 관할의 사용자 또는 대상을 적극적으로 타기팅하지 않습니다.

어떤 관할에서 웹사이트에 접근할 수 있다는 사실만으로 그 관할에서 타기팅, 설립, 라이선스, 승인 또는 규제 활동이 성립하지 않습니다.

9. 쿠키 정책 변경

MICRORETAILX LLC는 본 쿠키 정책을 수시로 업데이트할 수 있습니다. 변경 사항은 웹사이트에 게시되는 즉시 효력이 발생합니다.

10. 준거법 및 언어

본 쿠키 정책은 미국 델라웨어주 법률의 적용을 받습니다.

영문본이 우선합니다. 번역은 정보 제공 편의를 위해서만 제공되며 법적 효력이 없습니다.

11. 연락처

쿠키, 개인정보 또는 컴플라이언스 관련 문의:
legal@microretailx.com
`
    },

    legal: {
      title: "법적 고지 — MICRORETAILX",
      description: "MICRORETAILX LLC의 기업 식별 및 법적 정보.",
      body: `MICRORETAILX — 법적 고지

MICRORETAILX LLC (미국 델라웨어)
MICRORETAILX GROUP – 글로벌 운영 프레임워크

최종 업데이트: 01-01-2026
시행일: 01-01-2026

등록 사무소 및 Registered Agent:
Corporation Trust Center
1209 Orange Street
Wilmington, DE 19801
United States of America

1. 법적 프레임워크; 문서 우선순위; 다른 정책과의 관계

본 법적 고지는 웹사이트 접근 및 이용을 규율하는 법적 프레임워크의 일부입니다.

방문자의 웹사이트 상호작용 성격에 따라 다음과 같은 추가 문서가 적용될 수 있습니다:
• 이용약관
• 개인정보 처리방침
• 쿠키 정책(및 웹사이트에 표시되는 쿠키 설정 / CMP 설정)

문서 간 충돌이 있는 경우 다음 우선순위가 적용됩니다:
(i) 본 법적 고지, (ii) 이용약관, (iii) 개인정보 처리방침, (iv) 쿠키 정책. 단 특정 사안에 대해 강행법규가 달리 요구하는 경우는 제외합니다.

본 법적 고지의 조항이 무효 또는 집행 불가능하다고 판단되더라도 나머지 조항은 완전한 효력을 유지합니다.

MICRORETAILX LLC는 변화하는 규제 기준, 감독 지침, 보안 관행 및 운영 변경을 반영하기 위해 이 법적 프레임워크를 수시로 검토, 업데이트 및 개선할 수 있습니다.

2. 웹사이트 운영자 식별

본 웹사이트(“웹사이트”)는 미국 델라웨어주 법률에 따라 적법하게 설립되고 존속하는 유한책임회사 MICRORETAILX LLC가 독점적으로 운영하고 관리합니다.

“MICRORETAILX GROUP”, “group”, “network”, “ecosystem”, “labs”, “nodes”, “regions” 또는 유사 용어에 대한 언급은 순수하게 설명적·개념적이며, 서면 계약에서 명시적으로 달리 정하지 않는 한 별도의 법적 실체, 지점, 자회사, 파트너십, 합작투자, 대리관계 또는 고정사업장의 존재를 의미하지 않습니다.

3. 웹사이트의 목적

웹사이트는 정보 제공, 개념 제시 및 탐색 목적으로만 제공됩니다.

웹사이트는 다음을 구성하지 않으며 그렇게 해석되어서도 안 됩니다:
• 제품 또는 서비스의 제안 또는 권유
• 투자 제안, 금융 프로모션 또는 규제 대상 커뮤니케이션
• 법률, 세무, 금융 또는 전문 자문
• 어떠한 관할에서의 규제 또는 허가 대상 활동

웹사이트는 거래, 등록, 사용자 계정 또는 서비스 제공을 가능하게 하지 않습니다.

4. 비의존; 자문 아님

웹사이트에서 제공되는 모든 콘텐츠는 일반적인 정보 제공 목적에 한합니다.

MICRORETAILX LLC는 특정 목적에 대한 콘텐츠의 정확성, 완전성 또는 적합성에 관해 어떠한 진술이나 보증도 하지 않습니다. 웹사이트 콘텐츠에 대한 의존은 방문자 본인의 책임입니다.

5. 지적재산권

명시적으로 달리 기재되지 않는 한, 텍스트, 그래픽, 디자인, 레이아웃, 소스 코드, 시뮬레이션, 시각화, 모델 및 문서를 포함한 웹사이트의 모든 콘텐츠는 MICRORETAILX LLC의 독점적 재산입니다.

해당 콘텐츠는 전 세계적으로 적용되는 지적재산권, 저작권 및 영업비밀 법률의 보호를 받습니다.

강행법규에서 허용하는 경우를 제외하고 MICRORETAILX LLC의 사전 서면 승인 없이 콘텐츠를 복사, 복제, 배포, 수정 또는 활용할 수 없습니다.

6. 허용되는 사용

방문자는 다음 행위를 하지 않는 데 동의합니다:
• 웹사이트 또는 인프라를 오용하거나 방해
• 무단 접근 또는 보안조치 우회 시도
• 스크래핑, 리버스 엔지니어링 또는 자동화된 추출
• 불법 또는 금지된 목적으로 웹사이트 사용

MICRORETAILX LLC는 웹사이트와 그 무결성을 보호하기 위해 적절한 기술적, 법적 및 조직적 조치를 취할 권리를 보유합니다.

7. 제3자 링크

웹사이트에는 제3자 웹사이트 또는 서비스 링크가 포함될 수 있습니다.

MICRORETAILX LLC는 제3자의 콘텐츠, 가용성, 보안 또는 관행에 책임을 지지 않습니다. 제3자 자원에 대한 접근은 방문자 본인의 책임입니다.

8. 가용성 및 면책

웹사이트는 “있는 그대로” 및 “이용 가능한 상태로” 제공됩니다.

MICRORETAILX LLC는 웹사이트가 중단 없이, 오류 없이 또는 취약점 없이 제공될 것을 보장하지 않습니다. 적용 법률이 허용하는 최대 범위에서 명시적 또는 묵시적 모든 보증을 부인합니다.

9. 책임 제한

관련 법률이 허용하는 최대 범위에서 MICRORETAILX LLC는 웹사이트의 사용 또는 이용 불능으로 발생하거나 이와 관련된 직접, 간접, 부수, 결과적 또는 특별 손해에 책임을 지지 않습니다.

10. 타기팅 없음; 기본 프로파일링 없음; 설립 없음

MICRORETAILX LLC는 특정 관할의 사용자 또는 대상을 적극적으로 타기팅하지 않습니다.

특정 관할에서 웹사이트에 접근할 수 있다는 사실만으로 해당 관할에서 타기팅, 설립, 라이선스, 승인 또는 규제 활동이 성립하지 않습니다.

적용 정책 계층에서 명시적으로 공개되고 필요한 경우 방문자가 명시적 설정 또는 동의 메커니즘을 통해 활성화하지 않는 한 MICRORETAILX LLC는 다음을 수행하지 않습니다:
• 행동 기반 광고 또는 마케팅 타기팅
• 광고 목적의 사용자 프로파일링
• 법적 또는 이에 준하는 중대한 효과를 발생시키는 자동화된 의사결정

11. 준거법 및 관할

본 법적 고지는 미국 델라웨어주 법률의 적용을 받습니다.

웹사이트 또는 본 법적 고지에서 발생하거나 이와 관련된 모든 분쟁은 특정 관할에서 적용될 수 있는 강행 소비자보호 규정을 침해하지 않는 범위에서 델라웨어주에 위치한 주 또는 연방 법원의 전속 관할에 따릅니다.

12. 언어

본 법적 고지는 영문본이 우선합니다. 번역본은 정보 제공 편의를 위해서만 제공되며 법적 효력이 없습니다.

13. 연락처

법률 또는 컴플라이언스 문의:
legal@microretailx.com
`
    }
  });


  register("th", {
    "nav.about": "ข้อมูล",
    "nav.home": "หน้าแรก",
    "nav.verticals": "กลุ่มธุรกิจ",
    "nav.contact": "ติดต่อ",
    "footer.terms": "ข้อกำหนด",
    "footer.privacy": "ความเป็นส่วนตัว",
    "footer.cookies": "คุกกี้",
    "footer.legal": "กฎหมาย",
    "cookie.prefs": "การตั้งค่าคุกกี้",
    "reader.toggle": "โหมดอ่าน",
    "cmp.title": "ความเป็นส่วนตัวและคุกกี้",
    "cmp.desc": "เราเคารพความเป็นส่วนตัวของคุณ เว็บไซต์นี้ไม่ใช้คุกกี้โฆษณาหรือติดตาม คุกกี้ที่จำเป็นจะเปิดใช้งานเสมอเพื่อความปลอดภัยและการทำงานพื้นฐาน คุณสามารถยอมรับหรือปฏิเสธคุกกี้เสริมได้",
    "cmp.necessary": "จำเป็น",
    "cmp.necessary.desc": "ความปลอดภัยและฟังก์ชันหลัก",
    "cmp.analytics": "การวิเคราะห์",
    "cmp.analytics.desc": "ไม่บังคับ: ข้อมูลการใช้งานแบบไม่ระบุตัวตนเพื่อปรับปรุงเว็บไซต์",
    "cmp.marketing": "การตลาด",
    "cmp.marketing.desc": "ไม่บังคับ: การปรับเนื้อหาและการวัดผลแคมเปญ",
    "cmp.noproviders": "ไม่มีผู้ให้บริการที่ใช้งานอยู่",
    "cmp.reject": "ปฏิเสธทั้งหมด",
    "cmp.accept": "ยอมรับทั้งหมด",
    "cmp.save": "บันทึกการตั้งค่า"
  }, {
    terms: {
      title: "ข้อกำหนดการใช้งานทั่วโลก — MICRORETAILX",
      description: "ข้อกำหนดการใช้งานทั่วโลกและกรอบกฎหมายของ MICRORETAILX",
      body: `MICRORETAILX – ข้อกำหนดการใช้งานทั่วโลก

MICRORETAILX LLC (เดลาแวร์ สหรัฐอเมริกา)
MICRORETAILX GROUP – กรอบการดำเนินงานทั่วโลก

อัปเดตล่าสุด: 01-01-2026
วันที่มีผลบังคับใช้: 01-01-2026

สำนักงานจดทะเบียนและ Registered Agent:
Corporation Trust Center
1209 Orange Street
Wilmington, DE 19801
United States of America

1. คำจำกัดความ

• “MICRORETAILX”, “เรา”, “ของเรา” หมายถึง MICRORETAILX LLC บริษัทจำกัดความรับผิดที่จัดตั้งและดำรงอยู่โดยชอบด้วยกฎหมายของรัฐเดลาแวร์ สหรัฐอเมริกา
• “เว็บไซต์” หมายถึงเว็บไซต์นี้และหน้า โดเมนย่อย อินเทอร์เฟซ องค์ประกอบเชิงโต้ตอบ ซอร์สโค้ด ภาพข้อมูล และเนื้อหาที่เกี่ยวข้องซึ่งเผยแพร่ผ่านเว็บไซต์
• “MICRORETAILX GROUP” หมายถึงกรอบเชิงแนวคิดและกลยุทธ์ที่ใช้เพื่ออธิบายโครงการปัจจุบันและ/หรือในอนาคต และไม่ถือเป็นนิติบุคคลแยกต่างหาก เว้นแต่จะระบุไว้อย่างชัดแจ้งเป็นลายลักษณ์อักษร
• “Verticals” หมายถึงขอบเขตตามหัวข้อที่ใช้เพื่อการจัดหมวดหมู่เชิงแนวคิดและกลยุทธ์เท่านั้น
• “เนื้อหา” รวมถึงข้อความ กราฟิก การออกแบบ ซอร์สโค้ด ภาพข้อมูล การจำลอง แบบจำลอง เวิร์กโฟลว์ และเอกสารทั้งหมด
• “สิ่งที่ส่งมา” หมายถึงความคิดเห็น แนวคิด ข้อเสนอ หรือเอกสารใด ๆ ที่คุณส่งให้เรา

2. ผู้ดำเนินการ ขอบเขต และการยอมรับ

ข้อกำหนดนี้ใช้บังคับต่อการเข้าถึงและการใช้เว็บไซต์ของคุณ เมื่อเข้าถึงหรือใช้เว็บไซต์ คุณรับรองว่าได้อ่านและเข้าใจข้อกำหนดนี้ ยินยอมผูกพันตามกฎหมาย และมีความสามารถตามกฎหมายในการให้ความยินยอมดังกล่าว

3. ตัวตนของผู้ดำเนินการ ที่อยู่ตามกฎหมาย และการแจ้ง

เว็บไซต์นี้ดำเนินการและควบคุมโดย MICRORETAILX LLC ซึ่งเป็นบริษัทจำกัดความรับผิดของเดลาแวร์แต่เพียงผู้เดียว

Registered Agent: Corporation Trust Center, 1209 Orange Street, Wilmington, DE 19801, USA.

การติดต่อด้านกฎหมายและ compliance ต้องส่งไปที่: legal@microretailx.com

การอ้างถึง “nodes”, “labs”, “regions” หรือ “verticals” ไม่ให้ตีความว่าเป็นการจัดตั้งสาขา สำนักงาน บริษัทลูก ตัวแทน หรือจุดเชื่อมโยงทางภาษีในเขตอำนาจใดนอกเหนือจากรัฐเดลาแวร์

4. รูปแบบการดำเนินงานทั่วโลก; ไม่มีห้างหุ้นส่วน; ไม่มีตัวแทน

MICRORETAILX ดำเนินงานทั่วโลกผ่านโครงการเชิงแนวคิด สำรวจ และกลยุทธ์ เว้นแต่จะตกลงไว้อย่างชัดแจ้งในสัญญาเป็นลายลักษณ์อักษรที่ลงนามโดย MICRORETAILX LLC:

(i) ไม่มีสิ่งใดบนเว็บไซต์ก่อให้เกิดห้างหุ้นส่วน กิจการร่วมค้า ความสัมพันธ์การจ้างงาน หรือความสัมพันธ์ตัวแทน

(ii) ไม่มีฝ่ายใดมีอำนาจผูกพัน MICRORETAILX LLC

(iii) คำอธิบาย เช่น “group”, “network” หรือ “ecosystem” ไม่มีความหมายทางกฎหมายในตัวเอง

การใช้เว็บไซต์ไม่ก่อให้เกิดสถานประกอบการถาวรหรือสถานะที่ต้องเสียภาษีในลักษณะเดียวกันในเขตอำนาจใด

5. สถานะของเว็บไซต์; ไม่ใช่ข้อเสนอ; ไม่มีข้อผูกพัน

เว็บไซต์จัดทำขึ้นเพื่อวัตถุประสงค์ด้านข้อมูล แนวคิด และการสำรวจเท่านั้น ไม่มีสิ่งใดในเว็บไซต์ที่เป็นข้อเสนอ การเชิญชวน ข้อเสนอการลงทุน การจูงใจ หรือกิจกรรมที่อยู่ภายใต้การกำกับดูแลในเขตอำนาจใด

6. กรอบ VERTICAL (เชิงแนวคิดและไม่ใช่การดำเนินงาน)

การอ้างถึง verticals เป็นเพียงกรอบเชิงแนวคิดและไม่ได้หมายความว่ามีหน่วยธุรกิจที่ดำเนินงานจริง ผลิตภัณฑ์ บริการ กิจกรรมที่มีใบอนุญาต หรือการดำเนินงานที่อยู่ภายใต้การกำกับดูแล

7. กลยุทธ์ ZERO DATA (PRIVACY BY DESIGN)

เว็บไซต์ได้รับการออกแบบภายใต้กลยุทธ์ Zero Data: ไม่มีบัญชีผู้ใช้ ไม่มี profiling และไม่มีเทคโนโลยีติดตามของบุคคลที่สามที่เปิดใช้งานโดยค่าเริ่มต้น เว้นแต่จะหลีกเลี่ยงไม่ได้ตามโปรโตคอลอินเทอร์เน็ตมาตรฐานหรือกฎหมายที่ใช้บังคับกำหนด

8. คุกกี้และความยินยอม

โดยค่าเริ่มต้นจะใช้เฉพาะคุกกี้ที่จำเป็นอย่างยิ่งหรือรหัสทางเทคนิคที่เทียบเท่า เทคโนโลยีเสริมจะเปิดใช้งานหลังจากได้รับความยินยอมโดยชัดแจ้งจากผู้ใช้เมื่อกฎหมายกำหนดเท่านั้น

คุกกี้ที่จำเป็นและ/หรือรหัสทางเทคนิคอาจถูกตั้งค่าโดยเครือข่ายส่งเนื้อหา ผู้ให้บริการโฮสติ้ง และชั้นความปลอดภัยเพื่อการกระจายโหลด ป้องกันการใช้ในทางที่ผิด ลดการทำงานของบอต และส่งเนื้อหาอย่างปลอดภัยเท่านั้น

9. โฮสติ้ง การส่งเนื้อหา และความปลอดภัย

เว็บไซต์โฮสต์อยู่บนโครงสร้างพื้นฐานของบุคคลที่สาม อาจมีการประมวลผลบันทึกทางเทคนิคและเมตาดาต้าที่จำกัดเพื่อความปลอดภัย ความสมบูรณ์ ป้องกันการใช้ในทางที่ผิด และการส่งเนื้อหาที่เชื่อถือได้เท่านั้น

การประมวลผลดังกล่าวไม่เปลี่ยนลักษณะเชิงข้อมูลของเว็บไซต์ และไม่ถือเป็นกิจกรรมเชิงพาณิชย์ profiling หรือการกำหนดเป้าหมายเฉพาะเขตอำนาจ

การที่เว็บไซต์สามารถเข้าถึงได้เพียงอย่างเดียวไม่ถือเป็นกิจกรรมเชิงพาณิชย์ การกำหนดเป้าหมาย หรือการมีสถานะที่อยู่ภายใต้การกำกับดูแลในเขตอำนาจใด

10. การคุ้มครองข้อมูลทั่วโลกและการปฏิบัติตามกฎระเบียบ

MICRORETAILX LLC ออกแบบและดำเนินงานเว็บไซต์ตามหลักการคุ้มครองข้อมูลและความเป็นส่วนตัวที่ได้รับการยอมรับในระดับสากล รวมถึง privacy by design การลดข้อมูลให้น้อยที่สุด การจำกัดวัตถุประสงค์ ความโปร่งใส ความปลอดภัย และความรับผิดชอบ

เว็บไซต์มีลักษณะเป็นข้อมูลและแนวคิดเป็นหลัก ไม่มีบัญชีผู้ใช้ ไม่ต้องลงทะเบียน และไม่มี profiling การติดตามพฤติกรรม หรือการประมวลผลเพื่อการโฆษณา

การส่งเนื้อหาและการดำเนินงานทางเทคนิคอาศัยผู้ให้บริการโครงสร้างพื้นฐานที่กระจายอยู่ทั่วโลก หากมีการประมวลผลเมตาดาต้าทางเทคนิค เช่น ที่อยู่ IP หรือข้อมูลการเชื่อมต่อโดยบังเอิญ การประมวลผลดังกล่าวจำกัดเฉพาะที่จำเป็นต่อความปลอดภัย ความสมบูรณ์ การป้องกันการใช้ในทางที่ผิด และการส่งเนื้อหาที่เชื่อถือได้

การประมวลผลดังกล่าวดำเนินการภายใต้มาตรการคุ้มครองตามสัญญา เทคนิค และองค์กรที่เหมาะสม รวมถึงข้อตกลงประมวลผลข้อมูลและกลไกโอนข้อมูลระหว่างประเทศที่ได้รับการยอมรับเมื่อเกี่ยวข้อง หากใช้บังคับ จะอาศัยข้อสัญญามาตรฐาน (SCC) หรือกลไกโอนข้อมูลระหว่างประเทศที่ชอบด้วยกฎหมายในลักษณะเทียบเท่า MICRORETAILX LLC ไม่ตั้งใจเก็บ รักษา หรือใช้ประโยชน์จากข้อมูลส่วนบุคคลเพื่อการค้า profiling หรือการตลาด

แนวทางนี้มุ่งให้สอดคล้องกับหลักการของกรอบคุ้มครองข้อมูลและความเป็นส่วนตัวที่สำคัญในหลายเขตอำนาจ

การเข้าถึงเว็บไซต์จากเขตอำนาจใดเพียงอย่างเดียวไม่ถือเป็นการกำหนดเป้าหมาย การจัดตั้ง การออกใบอนุญาต การอนุญาต หรือกิจกรรมที่อยู่ภายใต้การกำกับดูแลในเขตอำนาจนั้น

MICRORETAILX LLC ไม่กำหนดเป้าหมายผู้ใช้ ลูกค้า นักลงทุน หน่วยงานกำกับดูแล หรือหน่วยงานรัฐในเขตอำนาจใดเป็นการเฉพาะ

11. การใช้ที่อนุญาต; การกระทำต้องห้าม

คุณต้องไม่ทำ data scraping, reverse engineering, ดึงอัลกอริทึม ฝึกโมเดลปัญญาประดิษฐ์ รบกวนโครงสร้างพื้นฐาน หรือใช้เว็บไซต์ในทางที่ผิด เว้นแต่กฎหมายบังคับจะอนุญาตไว้อย่างชัดแจ้ง

12. การเก็บรักษาและการบังคับใช้

MICRORETAILX LLC ขอสงวนสิทธิ์ใช้มาตรการด้านเทคนิค องค์กร และกฎหมายเพื่อปกป้องเว็บไซต์และเก็บรักษาหลักฐานการใช้ในทางที่ผิดหรือกิจกรรมที่ผิดกฎหมาย

13. ทรัพย์สินทางปัญญา; ความลับทางการค้า

สิทธิ กรรมสิทธิ์ และผลประโยชน์ทั้งหมดในเว็บไซต์และเนื้อหาเป็นทรัพย์สินแต่เพียงผู้เดียวของ MICRORETAILX LLC และได้รับการคุ้มครองโดยกฎหมายทรัพย์สินทางปัญญาและความลับทางการค้าที่ใช้บังคับทั่วโลก

14. การรักษาความลับของวัสดุที่ไม่เปิดเผยต่อสาธารณะ

ห้ามเปิดเผย แจกจ่าย หรือทำซ้ำวัสดุที่ไม่เปิดเผยต่อสาธารณะหรือถูกจำกัดการเข้าถึงโดยไม่ได้รับอนุญาตเป็นลายลักษณ์อักษรล่วงหน้าจาก MICRORETAILX LLC

15. สิ่งที่ส่งมาและข้อเสนอแนะ

เมื่อส่งวัสดุใด ๆ คุณให้สิทธิ์แก่ MICRORETAILX LLC แบบทั่วโลก ปลอดค่าลิขสิทธิ์ ไม่ผูกขาด และถาวร เพื่อใช้ ทำซ้ำ ปรับเปลี่ยน และรวมสิ่งที่ส่งมาเพื่อวัตถุประสงค์ทางธุรกิจที่ชอบด้วยกฎหมาย

สิทธิ์นี้ใช้เฉพาะสิ่งที่ส่งมาโดยไม่ได้รับการร้องขอ และไม่แทนที่ จำกัด หรือเพิกถอนข้อตกลงเป็นลายลักษณ์อักษรอื่นใดกับ MICRORETAILX LLC

16. DIGITAL MILLENNIUM COPYRIGHT ACT (DMCA) SAFE HARBOR

MICRORETAILX LLC เคารพสิทธิในทรัพย์สินทางปัญญาและคาดหวังให้ผู้ใช้ปฏิบัติเช่นเดียวกัน ตาม Digital Millennium Copyright Act (17 U.S.C. § 512) มีขั้นตอนต่อไปนี้สำหรับการรายงานการละเมิดลิขสิทธิ์ที่ถูกกล่าวหา:

• การแจ้ง หากคุณเชื่อว่าเนื้อหาหรือสิ่งที่ส่งมาบนเว็บไซต์ละเมิดลิขสิทธิ์ของคุณ คุณสามารถส่งหนังสือแจ้งไปยังผู้รับผิดชอบที่กำหนดของเราได้ที่ legal@microretailx.com หนังสือแจ้งต้องเป็นไปตามข้อกำหนดของ 17 U.S.C. § 512(c)(3) โดยสาระสำคัญ ซึ่งรวมถึง: (i) ลายมือชื่อจริงหรืออิเล็กทรอนิกส์ของเจ้าของลิขสิทธิ์หรือตัวแทนที่ได้รับอนุญาต; (ii) การระบุผลงานที่อ้างว่าถูกละเมิด; (iii) การระบุวัสดุที่อ้างว่าละเมิดและตำแหน่ง; (iv) ข้อมูลติดต่อของผู้ร้อง; และ (v) คำแถลงโดยสุจริตว่าการใช้งานไม่ได้รับอนุญาต

• การนำออก เมื่อได้รับการแจ้งที่ถูกต้อง MICRORETAILX LLC ขอสงวนสิทธิ์นำวัสดุที่ถูกกล่าวหาว่าละเมิดออกหรือปิดกั้นการเข้าถึงตามดุลพินิจของตนโดยไม่ต้องแจ้งล่วงหน้า

• การแจ้งโต้แย้ง เมื่อใช้บังคับ สามารถยื่นการแจ้งโต้แย้งตาม DMCA ได้ MICRORETAILX LLC อาจคืนวัสดุหากกฎหมายกำหนด

• ข้อจำกัด ขั้นตอนนี้ใช้เฉพาะเรื่องลิขสิทธิ์ภายใต้ DMCA สำหรับเรื่องกฎหมาย กฎระเบียบ หรือ compliance อื่น โปรดดูส่วนการติดต่อทั่วไปของข้อกำหนดนี้

17. ลิงก์ภายนอก; บริการของบุคคลที่สาม

เว็บไซต์อาจมีลิงก์ไปยังบริการของบุคคลที่สาม MICRORETAILX LLC ไม่รับผิดชอบต่อเนื้อหา แนวปฏิบัติ หรือนโยบายของบุคคลที่สาม การเข้าถึงเป็นความเสี่ยงของคุณเอง

18. ข้อจำกัดความรับผิด; ไม่ควรพึ่งพา

เว็บไซต์ไม่ได้ให้คำแนะนำด้านกฎหมาย ภาษี การเงิน หรือวิชาชีพ

ไม่มีสิ่งใดบนเว็บไซต์ที่ควรตีความว่าเป็นแนวทางด้านกฎระเบียบ คำรับรองด้าน compliance หรือการรับประกันว่าสอดคล้องกับกฎหมายหรือระบบกำกับดูแลท้องถิ่นใดโดยเฉพาะ

ข้อความคาดการณ์อนาคตมีความไม่แน่นอนโดยธรรมชาติและไม่รับประกันผลลัพธ์ในอนาคต

19. ความพร้อมใช้งาน; “ตามสภาพ”

เว็บไซต์ให้บริการ “ตามสภาพ” และ “ตามที่มีอยู่” โดยไม่มีการรับประกันใด ไม่ว่าโดยชัดแจ้งหรือโดยปริยาย

20. การจำกัดความรับผิด

ในขอบเขตสูงสุดที่กฎหมายอนุญาต MICRORETAILX LLC จะไม่รับผิดชอบต่อความเสียหายโดยตรงหรือโดยอ้อมที่เกิดจากการใช้เว็บไซต์

21. การชดใช้ค่าเสียหาย

คุณตกลงชดใช้และทำให้ MICRORETAILX LLC พ้นจากข้อเรียกร้อง ความรับผิด ความเสียหาย หรือค่าใช้จ่ายที่เกิดจากการใช้เว็บไซต์โดยผิดกฎหมายหรือการละเมิดข้อกำหนดนี้

22. COMPLIANCE; การควบคุมการส่งออก; มาตรการคว่ำบาตร

คุณตกลงปฏิบัติตามกฎหมายควบคุมการส่งออกและมาตรการคว่ำบาตรที่ใช้บังคับ รวมถึง U.S. Export Administration Regulations (EAR) และระบอบของ Office of Foreign Assets Control (OFAC) และเมื่อใช้บังคับ กรอบมาตรการคว่ำบาตรที่เกี่ยวข้องของสหประชาชาติ สหภาพยุโรป หรือกรอบระหว่างประเทศอื่น

23. การสื่อสารอิเล็กทรอนิกส์; การแจ้ง

การแจ้งและการสื่อสารทางกฎหมายทั้งหมดต้องส่งไปที่: legal@microretailx.com

24. การเปลี่ยนแปลงข้อกำหนดนี้

MICRORETAILX LLC อาจแก้ไขข้อกำหนดนี้ได้ทุกเมื่อ การใช้เว็บไซต์ต่อไปถือเป็นการยอมรับข้อกำหนดที่แก้ไขแล้ว

25. กฎหมายที่ใช้บังคับ; เขตอำนาจศาลแต่เพียงผู้เดียว; ภาษา

ข้อกำหนดนี้อยู่ภายใต้กฎหมายของรัฐเดลาแวร์ สหรัฐอเมริกา ข้อพิพาทใด ๆ อยู่ภายใต้เขตอำนาจแต่เพียงผู้เดียวของศาลรัฐหรือศาลรัฐบาลกลางที่ตั้งอยู่ในเดลาแวร์

ฉบับภาษาอังกฤษมีผลเหนือกว่า การแปลจัดทำขึ้นเพื่อความสะดวกด้านข้อมูลเท่านั้น

26. การแยกข้อกำหนด; ข้อตกลงทั้งหมด

หากบทบัญญัติใดถูกตัดสินว่าไม่ชอบด้วยกฎหมายหรือไม่สามารถบังคับใช้ได้ บทบัญญัติที่เหลือยังคงมีผลเต็มที่ ข้อกำหนดนี้เป็นข้อตกลงทั้งหมดเกี่ยวกับการใช้เว็บไซต์

27. ติดต่อ

การติดต่อด้านกฎหมายและ compliance: legal@microretailx.com
`
    },

    privacy: {
      title: "นโยบายความเป็นส่วนตัว — MICRORETAILX",
      description: "นโยบายความเป็นส่วนตัวทั่วโลกและกรอบคุ้มครองข้อมูลของ MICRORETAILX",
      body: `MICRORETAILX — นโยบายความเป็นส่วนตัว

MICRORETAILX LLC (เดลาแวร์ สหรัฐอเมริกา)
MICRORETAILX GROUP – กรอบการดำเนินงานทั่วโลก

อัปเดตล่าสุด: 01-01-2026
วันที่มีผลบังคับใช้: 01-01-2026

สำนักงานจดทะเบียนและ Registered Agent:
Corporation Trust Center
1209 Orange Street
Wilmington, DE 19801
United States of America

1. ขอบเขตและวัตถุประสงค์

นโยบายความเป็นส่วนตัวนี้อธิบายว่า MICRORETAILX LLC (“MICRORETAILX”, “เรา”, “ของเรา”) ออกแบบและดำเนินงานเว็บไซต์นี้อย่างไรจากมุมมองด้านการคุ้มครองข้อมูลและความเป็นส่วนตัว

เว็บไซต์มีลักษณะเป็นข้อมูลและแนวคิดเท่านั้น ไม่มีบัญชีผู้ใช้ ไม่ต้องลงทะเบียน และไม่ได้เสนอผลิตภัณฑ์หรือบริการเพื่อขาย

2. กลยุทธ์ ZERO DATA (PRIVACY BY DESIGN)

เว็บไซต์นี้ได้รับการออกแบบโดยเจตนาให้เป็นสภาพแวดล้อม Zero Data

MICRORETAILX LLC ไม่ตั้งใจเก็บ ขอ กำหนดให้ส่ง จัดเก็บ สร้างรายได้จาก หรือใช้ประโยชน์จากข้อมูลส่วนบุคคลของผู้เยี่ยมชม ไม่มีการสร้างโปรไฟล์ผู้ใช้ ตัวระบุ หรือชุดข้อมูลพฤติกรรม

หลักการความเป็นส่วนตัวถูกฝังไว้โดยการออกแบบและโดยค่าเริ่มต้น รวมถึงการลดข้อมูลให้น้อยที่สุด การจำกัดวัตถุประสงค์ ความโปร่งใส ความปลอดภัย และความรับผิดชอบ

3. ไม่มีบัญชีผู้ใช้; ไม่มีการลงทะเบียน

เว็บไซต์ไม่มีบัญชีผู้ใช้ พื้นที่เข้าสู่ระบบ แบบฟอร์มลงทะเบียน หรือระบบสมาชิก

ผู้เยี่ยมชมไม่จำเป็นต้องส่งข้อมูลส่วนบุคคลเพื่อเข้าถึงเนื้อหาของเว็บไซต์

4. ไม่มี PROFILING; ไม่มีการติดตาม; ไม่มีโฆษณา

เว็บไซต์ไม่ใช้:

• profiling ตามพฤติกรรมหรือความสนใจ
• เทคโนโลยีโฆษณาหรือการตลาด
• แพลตฟอร์มวิเคราะห์หรือเครื่องมือวัดผู้ชม
• กลไกติดตามข้ามเว็บไซต์หรือบริการ

MICRORETAILX LLC ไม่ดำเนินการตัดสินใจอัตโนมัติ profiling หรือวิเคราะห์พฤติกรรมของผู้เยี่ยมชม

5. เมตาดาต้าทางเทคนิคและข้อมูล LOG

เช่นเดียวกับบริการอินเทอร์เน็ตส่วนใหญ่ เมตาดาต้าทางเทคนิคที่จำกัดอาจถูกประมวลผลโดยบังเอิญเมื่อเข้าถึงเว็บไซต์ เช่น ที่อยู่ IP ส่วนหัวคำขอ เวลา หรือข้อมูลระดับโปรโตคอล

เมตาดาต้าดังกล่าวถูกประมวลผลอย่างเคร่งครัดเพื่อวัตถุประสงค์ด้านเทคนิคและความปลอดภัย รวมถึง:

• การส่งเนื้อหาที่ปลอดภัยและเชื่อถือได้
• การป้องกันการใช้ในทางที่ผิด การเข้าถึงอัตโนมัติ และการโจมตี
• การรักษาความสมบูรณ์และความพร้อมใช้งานของเครือข่าย

เมตาดาต้านี้ไม่ถูกใช้เพื่อระบุตัวบุคคล profiling การตลาด หรือการวิเคราะห์ และถูกเก็บไว้เฉพาะระยะเวลาขั้นต่ำที่จำเป็น

6. ผู้ให้บริการโครงสร้างพื้นฐานของบุคคลที่สาม

เว็บไซต์ให้บริการผ่านผู้ให้บริการโครงสร้างพื้นฐานของบุคคลที่สาม รวมถึงเครือข่ายส่งเนื้อหา (CDN) บริการ DNS และแพลตฟอร์มโฮสติ้งแบบสแตติก เช่น Cloudflare, Inc. และ GitHub, Inc.

ผู้ให้บริการเหล่านี้อาจประมวลผลเมตาดาต้าทางเทคนิคที่จำกัดเพื่อทำหน้าที่ด้านโครงสร้างพื้นฐาน ความปลอดภัย และการส่งเนื้อหาในนาม MICRORETAILX LLC เท่านั้น

MICRORETAILX LLC ไม่เปิดใช้ฟังก์ชันวิเคราะห์ ติดตาม โฆษณา หรือเฝ้าดูพฤติกรรมที่ผู้ให้บริการเหล่านี้เสนอ

7. การโอนข้อมูลระหว่างประเทศ

เมื่อเมตาดาต้าทางเทคนิคถูกประมวลผลผ่านโครงสร้างพื้นฐานที่กระจายทั่วโลก การประมวลผลอาจเกี่ยวข้องกับการโอนข้อมูลระหว่างประเทศ

การโอนดังกล่าวดำเนินการภายใต้มาตรการคุ้มครองด้านเทคนิคและองค์กรที่เหมาะสม และเมื่อใช้บังคับ อาศัยกลไกโอนข้อมูลระหว่างประเทศที่ได้รับการยอมรับ เช่น ข้อสัญญามาตรฐาน (SCC) หรือกรอบกฎหมายที่เทียบเท่า

MICRORETAILX LLC ไม่ใช้การโอนระหว่างประเทศเพื่อแสวงหาประโยชน์เชิงพาณิชย์จากข้อมูลส่วนบุคคล

8. คุกกี้ ตัวระบุทางเทคนิค และความปลอดภัยของโครงสร้างพื้นฐาน

โดยค่าเริ่มต้น เว็บไซต์ไม่ใช้คุกกี้ด้านการตลาด โฆษณา การวิเคราะห์ การกำหนดเป้าหมาย หรือการติดตามพฤติกรรม

คำชี้แจงทางเทคนิค เว็บไซต์อาศัยเฉพาะตัวระบุทางเทคนิคที่จำเป็นอย่างยิ่งต่อโครงสร้างพื้นฐานหลักและการดำเนินงานด้านความปลอดภัย ซึ่งอาจรวมตัวระบุที่ตั้งค่าหรือประมวลผลโดยเครือข่ายส่งเนื้อหา (CDN) ผู้ให้บริการ DNS แพลตฟอร์มโฮสติ้ง และชั้นความปลอดภัย

ตัวระบุเหล่านี้ใช้เพื่อ:

• ความปลอดภัยและการป้องกันการใช้ในทางที่ผิด: การทำงานของ web application firewall (WAF), ระบบลดบอต, rate limiting และการป้องกันระดับเครือข่ายเพื่อป้องกันการเข้าถึงโดยไม่ได้รับอนุญาต การใช้ระบบอัตโนมัติในทางที่ผิด และการโจมตี denial-of-service

• การส่งเนื้อหาและความพร้อมใช้งาน: การส่งเนื้อหาอย่างปลอดภัยและมีประสิทธิภาพผ่าน CDN ทั่วโลก load balancer และโครงสร้างพื้นฐานแบบกระจายเพื่อให้มีประสิทธิภาพ ความยืดหยุ่น และความพร้อมใช้งาน

ตัวระบุทางเทคนิคเหล่านี้ไม่เปิดให้ profiling ผู้ใช้ เฝ้าติดตามพฤติกรรม โฆษณา หรือทำการตลาด และไม่ถูกใช้เพื่อระบุหรือติดตามบุคคลข้ามเว็บไซต์หรือบริการ

หากมีการประมวลผลเมตาดาต้าทางเทคนิค เช่น ที่อยู่ IP หรือส่วนหัวคำขอ จะทำเพื่อความปลอดภัย ความสมบูรณ์ และการดำเนินงานเท่านั้น และเป็นระยะเวลาขั้นต่ำที่จำเป็น

โดยทั่วไปตัวระบุเหล่านี้ได้รับการยกเว้นจากข้อกำหนดความยินยอมภายใต้กรอบคุ้มครองข้อมูลและ ePrivacy ที่ใช้บังคับ เนื่องจากจำเป็นอย่างยิ่งต่อการให้บริการ ความปลอดภัย และการทำงานที่ถูกต้องของเว็บไซต์

9. สิทธิของเจ้าของข้อมูล

ด้วยลักษณะของเว็บไซต์และการไม่มีการเก็บข้อมูลส่วนบุคคลโดยเจตนา สิทธิของเจ้าของข้อมูลหลายประการอาจไม่เกี่ยวข้องในทางปฏิบัติ

เมื่อกฎหมายที่ใช้บังคับกำหนด บุคคลสามารถติดต่อ MICRORETAILX LLC เพื่อสอบถามเกี่ยวกับการประมวลผลข้อมูลที่อาจเกี่ยวข้องกับบันทึกการเข้าถึงทางเทคนิค

ส่งคำขอได้ที่: legal@microretailx.com

MICRORETAILX LLC ขอสงวนสิทธิ์ตรวจสอบคำขอและจำกัดคำตอบเมื่อกฎหมายอนุญาต

10. ความปลอดภัยของข้อมูล

MICRORETAILX LLC ใช้มาตรการด้านเทคนิคและองค์กรที่เหมาะสมเพื่อปกป้องเว็บไซต์และโครงสร้างพื้นฐานจากการเข้าถึงโดยไม่ได้รับอนุญาต การใช้ในทางที่ผิด การเปลี่ยนแปลง หรือการทำลาย

มาตรการความปลอดภัยรวมถึงการเข้ารหัสระหว่างการส่ง ส่วนหัวความปลอดภัยที่เข้มงวด การควบคุมการเข้าถึง และการป้องกันระดับเครือข่าย

11. คำแถลง SECURITY-BY-DESIGN

เว็บไซต์นี้ได้รับการออกแบบโดยเจตนาด้วยสถาปัตยกรรม security-first และ privacy-by-design การออกแบบทางเทคนิคมีเป้าหมายเพื่อลดการเปิดเผยข้อมูล ลดพื้นผิวการโจมตี และป้องกันการประมวลผลข้อมูลที่ไม่จำเป็น เพื่อคุ้มครองผู้ใช้โดยค่าเริ่มต้นแทนที่จะพึ่งพาการควบคุมภายหลังหรือกลไกความยินยอม

มาตรการความปลอดภัยเป็นส่วนหนึ่งของโครงสร้างพื้นฐานหลักและรูปแบบการดำเนินงานของเว็บไซต์ ไม่ใช่ฟังก์ชันเสริม

12. ไม่มีการกำหนดเป้าหมาย; ไม่มีการจัดตั้ง

MICRORETAILX LLC ไม่กำหนดเป้าหมายผู้ใช้ ลูกค้า นักลงทุน หรือหน่วยงานในเขตอำนาจใดโดยเฉพาะ

การเข้าถึงเว็บไซต์จากเขตอำนาจใดเพียงอย่างเดียวไม่ถือเป็นการกำหนดเป้าหมาย การจัดตั้ง การออกใบอนุญาต การอนุญาต หรือกิจกรรมที่อยู่ภายใต้การกำกับดูแลในเขตอำนาจนั้น

13. ความเป็นส่วนตัวของเด็ก

เว็บไซต์ไม่ได้มุ่งเป้าไปที่เด็ก และ MICRORETAILX LLC ไม่เก็บข้อมูลส่วนบุคคลจากผู้เยาว์โดยรู้อยู่แล้ว

14. การเปลี่ยนแปลงนโยบายความเป็นส่วนตัว

MICRORETAILX LLC อาจปรับปรุงนโยบายความเป็นส่วนตัวนี้เป็นระยะ การเปลี่ยนแปลงมีผลเมื่อเผยแพร่บนเว็บไซต์

15. กฎหมายที่ใช้บังคับและภาษา

นโยบายความเป็นส่วนตัวนี้อยู่ภายใต้กฎหมายของรัฐเดลาแวร์ สหรัฐอเมริกา

ฉบับภาษาอังกฤษมีผลเหนือกว่า การแปลมีไว้เพื่อความสะดวกด้านข้อมูลเท่านั้นและไม่มีผลทางสัญญาหรือกฎหมาย

16. ติดต่อ

สำหรับข้อสงสัยเกี่ยวกับความเป็นส่วนตัว กฎหมาย หรือ compliance:
legal@microretailx.com
`
    },

    cookies: {
      title: "นโยบายคุกกี้ — MICRORETAILX",
      description: "นโยบายคุกกี้ทั่วโลกและกรอบทางเทคนิคของ MICRORETAILX",
      body: `MICRORETAILX — นโยบายคุกกี้

MICRORETAILX LLC (เดลาแวร์ สหรัฐอเมริกา)
MICRORETAILX GROUP – กรอบการดำเนินงานทั่วโลก

อัปเดตล่าสุด: 21-08-2026
วันที่มีผลบังคับใช้: 01-01-2026

สำนักงานจดทะเบียนและ Registered Agent:
Corporation Trust Center
1209 Orange Street
Wilmington, DE 19801
United States of America

1. ขอบเขตและวัตถุประสงค์

นโยบายคุกกี้นี้อธิบายว่าคุกกี้และตัวระบุทางเทคนิคที่คล้ายกันอาจใช้กับเว็บไซต์นี้ซึ่งดำเนินการโดย MICRORETAILX LLC (“MICRORETAILX”, “เรา”, “ของเรา”) อย่างไร

เว็บไซต์มีลักษณะเป็นข้อมูลและแนวคิดเท่านั้น และควรอ่านร่วมกับนโยบายความเป็นส่วนตัวและข้อกำหนดการใช้งานทั่วโลก ซึ่งรวมกันเป็นกรอบกฎหมายของเว็บไซต์

2. กลยุทธ์ ZERO DATA

เว็บไซต์นี้ได้รับการออกแบบและดำเนินการโดยเจตนาภายใต้กลยุทธ์ Zero Data

MICRORETAILX LLC ไม่ใช้คุกกี้หรือเทคโนโลยีที่คล้ายกันเพื่อ:
• ระบุผู้ใช้รายบุคคล
• สร้างโปรไฟล์ผู้ใช้
• ติดตามพฤติกรรมหรือความสนใจ
• ส่งโฆษณาหรือการตลาด
• สร้างรายได้จากข้อมูลส่วนบุคคล

เว็บไซต์ไม่มีบัญชีผู้ใช้ ระบบลงทะเบียน หรือบริการเชิงโต้ตอบที่ต้องใช้ข้อมูลส่วนบุคคล

3. คุกกี้ที่จำเป็นอย่างยิ่งและตัวระบุทางเทคนิค

โดยค่าเริ่มต้น เว็บไซต์อาศัยเฉพาะคุกกี้ที่จำเป็นอย่างยิ่งและ/หรือตัวระบุทางเทคนิคที่เทียบเท่าซึ่งจำเป็นต่อโครงสร้างพื้นฐานหลัก ความปลอดภัย และความพร้อมใช้งาน

ตัวระบุเหล่านี้อาจถูกตั้งค่าหรือประมวลผลโดย:
• เครือข่ายส่งเนื้อหา (CDN)
• ผู้ให้บริการ DNS และโฮสติ้ง
• ชั้นความปลอดภัย ความสมบูรณ์ และความพร้อมใช้งาน

ตัวระบุเหล่านี้ใช้เฉพาะเพื่อ:
• การกระจายโหลดและการจราจร
• ป้องกันการใช้ในทางที่ผิดและ rate limiting
• ลดการทำงานของบอตและป้องกันการเข้าถึงอัตโนมัติ
• ส่งเนื้อหาอย่างปลอดภัยและเชื่อถือได้

คุกกี้และตัวระบุเหล่านี้จำเป็นต่อการทำงานที่ถูกต้องของเว็บไซต์และไม่สามารถปิดใช้งานได้โดยไม่กระทบต่อความปลอดภัยหรือความพร้อมใช้งาน

LOCAL STORAGE ที่เว็บไซต์นี้ใช้

นอกเหนือจากคุกกี้ที่จำเป็น เว็บไซต์ยังจัดเก็บการตั้งค่าทางเทคนิคจำนวนเล็กน้อยโดยตรงใน local storage ของเบราว์เซอร์ รายการเหล่านี้เป็น first-party เท่านั้น ไม่ถูกส่งไปยัง MICRORETAILX LLC หรือบุคคลที่สาม และอยู่ในอุปกรณ์จนกว่าผู้เยี่ยมชมจะลบออก

• mx_consent — บันทึกตัวเลือกคุกกี้ของผู้เยี่ยมชมพร้อมเวอร์ชัน scope เวอร์ชันนโยบาย และ timestamp ของการตัดสินใจ วัตถุประสงค์: เคารพตัวเลือกและบันทึกว่าให้ไว้เมื่อใดและภายใต้นโยบายเวอร์ชันใด
• mx_lang — บันทึกภาษาที่ผู้เยี่ยมชมเลือก วัตถุประสงค์: รักษาภาษาเดียวกันข้ามหน้าและการเข้าชม
• mx_a11y — บันทึกการตั้งค่าการเข้าถึง เช่น ขนาดข้อความ ความคมชัด และแบบอักษรที่อ่านง่าย วัตถุประสงค์: รักษาการตั้งค่าการอ่าน
• mx_reader_immersive — บันทึกว่าโหมดอ่านแบบ immersive ทำงานอยู่หรือไม่ วัตถุประสงค์: รักษารูปแบบการอ่าน

รายการเหล่านี้ไม่มีตัวระบุ ข้อมูลส่วนบุคคล หรือข้อมูลพฤติกรรม สามารถลบได้ทุกเมื่อผ่านการตั้งค่าเบราว์เซอร์หรือการควบคุมการตั้งค่าคุกกี้ในส่วนท้ายของทุกหน้า

4. ไม่มีการวิเคราะห์; ไม่มีการตลาด; ไม่มีการติดตาม

เว็บไซต์ไม่ใช้:
• เครื่องมือวิเคราะห์หรือวัดผู้ชม
• คุกกี้การตลาดหรือโฆษณา
• ระบบปรับแต่งหรือแนะนำ
• กลไกติดตามข้ามเว็บไซต์หรือบริการ

MICRORETAILX LLC ไม่ดำเนินการตัดสินใจอัตโนมัติหรือ profiling โดยอาศัยการเข้าถึงเว็บไซต์

5. เทคโนโลยีเสริมและความยินยอม

คุกกี้เสริมหรือเทคโนโลยีที่คล้ายกันไม่ได้เปิดใช้งานโดยค่าเริ่มต้น

หากมีการนำเทคโนโลยีเสริมมาใช้ในอนาคต จะเปิดใช้งานเฉพาะ:
• หลังจากได้รับความยินยอมโดยชัดแจ้งจากผู้ใช้; และ
• เมื่อกฎหมายที่ใช้บังคับกำหนดให้ต้องได้รับความยินยอม

เมื่อเกี่ยวข้อง การตั้งค่าความยินยอมจะจัดการผ่านอินเทอร์เฟซความยินยอมของเว็บไซต์

6. เมตาดาต้าทางเทคนิคและข้อมูล LOG

ตามปกติของบริการอินเทอร์เน็ต เมตาดาต้าทางเทคนิคที่จำกัดอาจถูกประมวลผลโดยบังเอิญเมื่อเข้าถึงเว็บไซต์ เช่น ที่อยู่ IP ส่วนหัวคำขอ เวลา หรือข้อมูลระดับโปรโตคอล

เมตาดาต้าดังกล่าวประมวลผลเพื่อวัตถุประสงค์ด้านเทคนิคและความปลอดภัยเท่านั้น ได้แก่:
• ปกป้องโครงสร้างพื้นฐานและป้องกันการใช้ในทางที่ผิด
• ตรวจจับและลดกิจกรรมอัตโนมัติหรือเป็นอันตราย
• รับรองความพร้อมใช้งาน ความสมบูรณ์ และความยืดหยุ่นของเว็บไซต์

เมตาดาต้านี้ไม่ถูกใช้เพื่อระบุตัวบุคคล profiling การวิเคราะห์ หรือการตลาด และเก็บไว้เพียงระยะเวลาขั้นต่ำที่จำเป็น

7. บริบทระหว่างประเทศและโครงสร้างพื้นฐาน

เว็บไซต์สามารถเข้าถึงได้ทั่วโลกและอาศัยโครงสร้างพื้นฐานทางเทคนิคแบบกระจาย

หากเมตาดาต้าทางเทคนิคประมวลผลผ่านระบบที่กระจายทั่วโลก อาจมีการโอนข้อมูลระหว่างประเทศ

การโอนดังกล่าวดำเนินการภายใต้มาตรการคุ้มครองทางเทคนิคและองค์กรที่เหมาะสม และเมื่อใช้บังคับ อาศัยกลไกโอนข้อมูลระหว่างประเทศที่ได้รับการยอมรับ

8. ไม่มีการกำหนดเป้าหมาย; ไม่มีเจตนาเฉพาะเขตอำนาจ

MICRORETAILX LLC ไม่กำหนดเป้าหมายผู้ใช้หรือผู้ชมในเขตอำนาจใดโดยเฉพาะ

การที่เว็บไซต์เข้าถึงได้จากเขตอำนาจใดเพียงอย่างเดียวไม่ถือเป็นการกำหนดเป้าหมาย การจัดตั้ง การออกใบอนุญาต การอนุญาต หรือกิจกรรมที่อยู่ภายใต้การกำกับดูแลในเขตอำนาจนั้น

9. การเปลี่ยนแปลงนโยบายคุกกี้

MICRORETAILX LLC อาจปรับปรุงนโยบายคุกกี้นี้เป็นระยะ การเปลี่ยนแปลงมีผลเมื่อเผยแพร่บนเว็บไซต์

10. กฎหมายที่ใช้บังคับและภาษา

นโยบายคุกกี้นี้อยู่ภายใต้กฎหมายของรัฐเดลาแวร์ สหรัฐอเมริกา

ฉบับภาษาอังกฤษมีผลเหนือกว่า การแปลมีไว้เพื่อความสะดวกด้านข้อมูลเท่านั้นและไม่มีผลทางกฎหมาย

11. ติดต่อ

สำหรับข้อสงสัยเกี่ยวกับคุกกี้ ความเป็นส่วนตัว หรือ compliance:
legal@microretailx.com
`
    },

    legal: {
      title: "ประกาศทางกฎหมาย — MICRORETAILX",
      description: "ข้อมูลระบุตัวบริษัทและข้อมูลทางกฎหมายของ MICRORETAILX LLC",
      body: `MICRORETAILX — ประกาศทางกฎหมาย

MICRORETAILX LLC (เดลาแวร์ สหรัฐอเมริกา)
MICRORETAILX GROUP – กรอบการดำเนินงานทั่วโลก

อัปเดตล่าสุด: 01-01-2026
วันที่มีผลบังคับใช้: 01-01-2026

สำนักงานจดทะเบียนและ Registered Agent:
Corporation Trust Center
1209 Orange Street
Wilmington, DE 19801
United States of America

1. กรอบกฎหมาย; ลำดับความสำคัญของเอกสาร; ความสัมพันธ์กับนโยบายอื่น

ประกาศทางกฎหมายนี้เป็นส่วนหนึ่งของกรอบกฎหมายที่กำกับการเข้าถึงและใช้เว็บไซต์

เอกสารเพิ่มเติมอาจใช้บังคับตามลักษณะการโต้ตอบของผู้เยี่ยมชมกับเว็บไซต์ รวมถึง:
• ข้อกำหนดการใช้งาน
• นโยบายความเป็นส่วนตัว
• นโยบายคุกกี้ (รวมถึงการตั้งค่าคุกกี้ / CMP ที่แสดงบนเว็บไซต์)

หากเอกสารขัดแย้งกัน ให้ใช้ลำดับความสำคัญดังนี้:
(i) ประกาศทางกฎหมายนี้, (ii) ข้อกำหนดการใช้งาน, (iii) นโยบายความเป็นส่วนตัว และ (iv) นโยบายคุกกี้ เว้นแต่กฎหมายบังคับกำหนดเป็นอย่างอื่นสำหรับเรื่องใดโดยเฉพาะ

หากข้อกำหนดใดในประกาศนี้ถูกตัดสินว่าไม่ชอบด้วยกฎหมายหรือไม่สามารถบังคับใช้ได้ ข้อกำหนดที่เหลือยังคงมีผลเต็มที่

MICRORETAILX LLC อาจทบทวน ปรับปรุง และพัฒนากรอบกฎหมายนี้เป็นระยะเพื่อสะท้อนมาตรฐานกำกับดูแล แนวทางของหน่วยงานกำกับ แนวปฏิบัติด้านความปลอดภัย และการเปลี่ยนแปลงด้านการดำเนินงาน

2. การระบุตัวผู้ดำเนินการเว็บไซต์

เว็บไซต์นี้ (“เว็บไซต์”) ดำเนินการและควบคุมโดย MICRORETAILX LLC ซึ่งเป็นบริษัทจำกัดความรับผิดที่จัดตั้งและดำรงอยู่โดยชอบด้วยกฎหมายของรัฐเดลาแวร์ สหรัฐอเมริกา แต่เพียงผู้เดียว

การอ้างถึง “MICRORETAILX GROUP”, “group”, “network”, “ecosystem”, “labs”, “nodes”, “regions” หรือคำคล้ายกันเป็นเพียงคำอธิบายและแนวคิด และไม่ได้หมายความว่ามีนิติบุคคลแยก สาขา บริษัทลูก ห้างหุ้นส่วน กิจการร่วมค้า ตัวแทน หรือสถานประกอบการถาวร เว้นแต่จะระบุไว้อย่างชัดแจ้งในข้อตกลงเป็นลายลักษณ์อักษร

3. วัตถุประสงค์ของเว็บไซต์

เว็บไซต์จัดทำขึ้นเพื่อวัตถุประสงค์ด้านข้อมูล แนวคิด และการสำรวจเท่านั้น

เว็บไซต์ไม่ถือเป็นและไม่ควรตีความว่าเป็น:
• ข้อเสนอหรือการเชิญชวนผลิตภัณฑ์หรือบริการ
• ข้อเสนอการลงทุน การส่งเสริมทางการเงิน หรือการสื่อสารที่อยู่ภายใต้การกำกับดูแล
• คำแนะนำด้านกฎหมาย ภาษี การเงิน หรือวิชาชีพ
• กิจกรรมที่อยู่ภายใต้การกำกับหรือใบอนุญาตในเขตอำนาจใด

เว็บไซต์ไม่อนุญาตธุรกรรม การลงทะเบียน บัญชีผู้ใช้ หรือการให้บริการ

4. ไม่ควรพึ่งพา; ไม่ใช่คำแนะนำ

เนื้อหาทั้งหมดบนเว็บไซต์จัดทำขึ้นเพื่อข้อมูลทั่วไปเท่านั้น

MICRORETAILX LLC ไม่รับรองหรือรับประกันความถูกต้อง ความครบถ้วน หรือความเหมาะสมของเนื้อหาเพื่อวัตถุประสงค์ใด การพึ่งพาเนื้อหาของเว็บไซต์เป็นความเสี่ยงของผู้เยี่ยมชมเอง

5. ทรัพย์สินทางปัญญา

เว้นแต่ระบุไว้เป็นอย่างอื่นโดยชัดแจ้ง เนื้อหาทั้งหมดของเว็บไซต์ รวมถึงข้อความ กราฟิก การออกแบบ เค้าโครง ซอร์สโค้ด การจำลอง ภาพข้อมูล แบบจำลอง และเอกสาร เป็นทรัพย์สินแต่เพียงผู้เดียวของ MICRORETAILX LLC

เนื้อหาดังกล่าวได้รับการคุ้มครองทั่วโลกตามกฎหมายทรัพย์สินทางปัญญา ลิขสิทธิ์ และความลับทางการค้าที่ใช้บังคับ

ห้ามคัดลอก ทำซ้ำ แจกจ่าย แก้ไข หรือใช้ประโยชน์จากเนื้อหาโดยไม่ได้รับอนุญาตเป็นลายลักษณ์อักษรล่วงหน้าจาก MICRORETAILX LLC เว้นแต่กฎหมายบังคับจะอนุญาต

6. การใช้ที่ยอมรับได้

ผู้เยี่ยมชมตกลงว่าจะไม่:
• ใช้เว็บไซต์หรือโครงสร้างพื้นฐานในทางที่ผิดหรือรบกวน
• พยายามเข้าถึงโดยไม่ได้รับอนุญาตหรือหลีกเลี่ยงมาตรการความปลอดภัย
• ทำ scraping, reverse engineering หรือการดึงข้อมูลอัตโนมัติ
• ใช้เว็บไซต์เพื่อวัตถุประสงค์ที่ผิดกฎหมายหรือต้องห้าม

MICRORETAILX LLC ขอสงวนสิทธิ์ใช้มาตรการทางเทคนิค กฎหมาย และองค์กรที่เหมาะสมเพื่อปกป้องเว็บไซต์และความสมบูรณ์ของระบบ

7. ลิงก์ของบุคคลที่สาม

เว็บไซต์อาจมีลิงก์ไปยังเว็บไซต์หรือบริการของบุคคลที่สาม

MICRORETAILX LLC ไม่รับผิดชอบต่อเนื้อหา ความพร้อมใช้งาน ความปลอดภัย หรือแนวปฏิบัติของบุคคลที่สาม การเข้าถึงทรัพยากรของบุคคลที่สามเป็นความเสี่ยงของผู้เยี่ยมชมเอง

8. ความพร้อมใช้งานและข้อจำกัดความรับผิด

เว็บไซต์ให้บริการ “ตามสภาพ” และ “ตามที่มีอยู่”

MICRORETAILX LLC ไม่รับประกันว่าเว็บไซต์จะไม่หยุดชะงัก ปราศจากข้อผิดพลาด หรือปราศจากช่องโหว่ ในขอบเขตสูงสุดที่กฎหมายอนุญาต ขอปฏิเสธการรับประกันทั้งหมดไม่ว่าโดยชัดแจ้งหรือโดยปริยาย

9. การจำกัดความรับผิด

ในขอบเขตสูงสุดที่กฎหมายอนุญาต MICRORETAILX LLC ไม่รับผิดชอบต่อความเสียหายโดยตรง โดยอ้อม โดยบังเอิญ ที่เป็นผลตามมา หรือพิเศษ ซึ่งเกิดจากหรือเกี่ยวข้องกับการใช้หรือไม่สามารถใช้เว็บไซต์

10. ไม่มีการกำหนดเป้าหมาย; ไม่มี PROFILING โดยค่าเริ่มต้น; ไม่มีการจัดตั้ง

MICRORETAILX LLC ไม่กำหนดเป้าหมายผู้ใช้หรือผู้ชมในเขตอำนาจใดโดยเฉพาะ

การเข้าถึงเว็บไซต์จากเขตอำนาจใดเพียงอย่างเดียวไม่ถือเป็นการกำหนดเป้าหมาย การจัดตั้ง การออกใบอนุญาต การอนุญาต หรือกิจกรรมที่อยู่ภายใต้การกำกับดูแลในเขตอำนาจนั้น

เว้นแต่เปิดเผยไว้อย่างชัดแจ้งในนโยบายที่ใช้บังคับ และเมื่อจำเป็น ได้รับการเปิดใช้งานโดยผู้เยี่ยมชมผ่านการตั้งค่าหรือกลไกความยินยอมโดยชัดแจ้ง MICRORETAILX LLC จะไม่ดำเนินการ:
• โฆษณาตามพฤติกรรมหรือการกำหนดเป้าหมายทางการตลาด
• profiling ผู้ใช้เพื่อวัตถุประสงค์โฆษณา
• การตัดสินใจอัตโนมัติที่ก่อให้เกิดผลทางกฎหมายหรือผลกระทบสำคัญในลักษณะเดียวกัน

11. กฎหมายที่ใช้บังคับและเขตอำนาจ

ประกาศทางกฎหมายนี้อยู่ภายใต้กฎหมายของรัฐเดลาแวร์ สหรัฐอเมริกา

ข้อพิพาทใดที่เกิดจากหรือเกี่ยวข้องกับเว็บไซต์หรือประกาศนี้ อยู่ภายใต้เขตอำนาจแต่เพียงผู้เดียวของศาลรัฐหรือศาลรัฐบาลกลางที่ตั้งอยู่ในรัฐเดลาแวร์ โดยไม่กระทบต่อกฎคุ้มครองผู้บริโภคที่เป็นกฎหมายบังคับซึ่งอาจใช้ในเขตอำนาจใดโดยเฉพาะ

12. ภาษา

ฉบับภาษาอังกฤษของประกาศทางกฎหมายนี้มีผลเหนือกว่า การแปลมีไว้เพื่อความสะดวกด้านข้อมูลเท่านั้นและไม่มีผลทางกฎหมาย

13. ติดต่อ

สำหรับข้อสงสัยด้านกฎหมายหรือ compliance:
legal@microretailx.com
`
    }
  });


  register("vi", {
    "nav.about": "Thông tin",
    "nav.home": "Trang chủ",
    "nav.verticals": "Lĩnh vực",
    "nav.contact": "Liên hệ",
    "footer.terms": "Điều khoản",
    "footer.privacy": "Quyền riêng tư",
    "footer.cookies": "Cookie",
    "footer.legal": "Pháp lý",
    "cookie.prefs": "Tùy chọn cookie",
    "reader.toggle": "Chế độ đọc",
    "cmp.title": "Quyền riêng tư & Cookie",
    "cmp.desc": "Chúng tôi tôn trọng quyền riêng tư của bạn. Trang web này không sử dụng cookie quảng cáo hoặc theo dõi. Cookie cần thiết luôn được bật để bảo mật và cung cấp chức năng cơ bản. Bạn có thể chấp nhận hoặc từ chối cookie tùy chọn.",
    "cmp.necessary": "Cần thiết",
    "cmp.necessary.desc": "Bảo mật và chức năng cốt lõi.",
    "cmp.analytics": "Phân tích",
    "cmp.analytics.desc": "Tùy chọn: dữ liệu sử dụng ẩn danh để cải thiện trang web.",
    "cmp.marketing": "Tiếp thị",
    "cmp.marketing.desc": "Tùy chọn: cá nhân hóa và đo lường chiến dịch.",
    "cmp.noproviders": "Không có nhà cung cấp đang hoạt động",
    "cmp.reject": "Từ chối tất cả",
    "cmp.accept": "Chấp nhận tất cả",
    "cmp.save": "Lưu tùy chọn"
  }, {
    terms: {
      title: "Điều khoản sử dụng toàn cầu — MICRORETAILX",
      description: "Điều khoản sử dụng toàn cầu và khuôn khổ pháp lý của MICRORETAILX.",
      body: `MICRORETAILX – ĐIỀU KHOẢN SỬ DỤNG TOÀN CẦU

MICRORETAILX LLC (Delaware, Hoa Kỳ)
MICRORETAILX GROUP – Khuôn khổ hoạt động toàn cầu

Cập nhật lần cuối: 01-01-2026
Ngày có hiệu lực: 01-01-2026

Văn phòng đăng ký và Registered Agent:
Corporation Trust Center
1209 Orange Street
Wilmington, DE 19801
United States of America

1. ĐỊNH NGHĨA

• “MICRORETAILX”, “chúng tôi”, “của chúng tôi” chỉ MICRORETAILX LLC, một công ty trách nhiệm hữu hạn được thành lập hợp pháp và tồn tại theo pháp luật Bang Delaware, Hoa Kỳ.
• “Trang web” chỉ trang web này và mọi trang, tên miền phụ, giao diện, thành phần tương tác, mã nguồn, hình ảnh trực quan và nội dung liên quan được cung cấp thông qua trang web.
• “MICRORETAILX GROUP” chỉ một khuôn khổ mang tính khái niệm và chiến lược dùng để mô tả các sáng kiến hiện tại và/hoặc tương lai, và không cấu thành một pháp nhân riêng biệt trừ khi được nêu rõ bằng văn bản.
• “Verticals” là các lĩnh vực chủ đề chỉ được dùng như một khuôn khổ phân loại mang tính khái niệm và chiến lược.
• “Nội dung” bao gồm toàn bộ văn bản, đồ họa, thiết kế, mã nguồn, hình ảnh trực quan, mô phỏng, mô hình, quy trình làm việc và tài liệu.
• “Nội dung gửi” là mọi bình luận, ý tưởng, đề xuất hoặc tài liệu do bạn gửi.

2. ĐƠN VỊ VẬN HÀNH, PHẠM VI VÀ CHẤP NHẬN

Các Điều khoản này điều chỉnh việc bạn truy cập và sử dụng Trang web. Bằng việc truy cập hoặc sử dụng Trang web, bạn xác nhận đã đọc, hiểu và đồng ý bị ràng buộc về mặt pháp lý bởi các Điều khoản này, đồng thời tuyên bố rằng bạn có năng lực pháp lý để làm như vậy.

3. DANH TÍNH ĐƠN VỊ VẬN HÀNH, ĐỊA CHỈ PHÁP LÝ VÀ THÔNG BÁO

Trang web này được vận hành và kiểm soát độc quyền bởi MICRORETAILX LLC, một công ty trách nhiệm hữu hạn tại Delaware.

Registered Agent: Corporation Trust Center, 1209 Orange Street, Wilmington, DE 19801, USA.

Mọi liên hệ pháp lý và tuân thủ phải được gửi tới: legal@microretailx.com.

Mọi tham chiếu tới “nodes”, “labs”, “regions” hoặc “verticals” không được hiểu là tạo ra chi nhánh, văn phòng, công ty con, hiện diện đại diện hoặc mối liên hệ thuế tại bất kỳ khu vực tài phán nào ngoài Bang Delaware.

4. MÔ HÌNH HOẠT ĐỘNG TOÀN CẦU; KHÔNG HỢP DANH; KHÔNG ĐẠI LÝ

MICRORETAILX hoạt động toàn cầu thông qua các sáng kiến mang tính khái niệm, thăm dò và chiến lược. Trừ khi có thỏa thuận rõ ràng trong hợp đồng bằng văn bản do MICRORETAILX LLC ký:

(i) không nội dung nào trên Trang web tạo ra quan hệ hợp danh, liên doanh, lao động hoặc đại lý;

(ii) không bên nào được phép ràng buộc MICRORETAILX LLC;

(iii) các thuật ngữ mô tả như “group”, “network” hoặc “ecosystem” không có ý nghĩa pháp lý độc lập.

Việc sử dụng Trang web không tạo ra cơ sở thường trú hoặc hiện diện chịu thuế tương tự tại bất kỳ khu vực tài phán nào.

5. TÌNH TRẠNG TRANG WEB; KHÔNG PHẢI CHÀO BÁN; KHÔNG CAM KẾT

Trang web chỉ được cung cấp cho mục đích thông tin, khái niệm và thăm dò. Không nội dung nào ở đây cấu thành chào bán, chào mời, đề xuất đầu tư, khuyến khích hoặc hoạt động được quản lý dưới bất kỳ hình thức nào tại bất kỳ khu vực tài phán nào.

6. KHUÔN KHỔ VERTICAL (KHÁI NIỆM VÀ KHÔNG VẬN HÀNH)

Mọi tham chiếu đến verticals chỉ thể hiện một khuôn khổ khái niệm và không hàm ý sự tồn tại của đơn vị kinh doanh đang hoạt động, sản phẩm, dịch vụ, hoạt động được cấp phép hoặc hoạt động chịu sự quản lý.

7. CHIẾN LƯỢC ZERO DATA (PRIVACY BY DESIGN)

Trang web được thiết kế theo Chiến lược Zero Data: không có tài khoản người dùng, không profiling và không có công nghệ theo dõi của bên thứ ba được bật mặc định, trừ trường hợp không thể tránh khỏi do các giao thức Internet tiêu chuẩn hoặc theo yêu cầu của pháp luật áp dụng.

8. COOKIE VÀ SỰ ĐỒNG Ý

Theo mặc định, chỉ cookie thực sự cần thiết hoặc định danh kỹ thuật tương đương được sử dụng. Công nghệ tùy chọn chỉ được bật sau khi có sự đồng ý rõ ràng của người dùng khi pháp luật yêu cầu.

Cookie thực sự cần thiết và/hoặc định danh kỹ thuật có thể được đặt bởi mạng phân phối nội dung, nhà cung cấp hosting và lớp bảo mật chỉ nhằm cân bằng tải, ngăn chặn lạm dụng, giảm bot và phân phối nội dung an toàn.

9. HOSTING, PHÂN PHỐI VÀ BẢO MẬT

Trang web được lưu trữ trên hạ tầng của bên thứ ba. Nhật ký kỹ thuật và metadata hạn chế có thể được xử lý chỉ nhằm mục đích bảo mật, toàn vẹn, ngăn chặn lạm dụng và phân phối nội dung đáng tin cậy.

Việc xử lý đó không làm thay đổi bản chất thông tin của Trang web và không cấu thành hoạt động thương mại, profiling hoặc nhắm mục tiêu theo khu vực tài phán.

Việc Trang web chỉ đơn thuần có thể truy cập không cấu thành hoạt động thương mại, nhắm mục tiêu hoặc hiện diện được quản lý tại bất kỳ khu vực tài phán nào.

10. BẢO VỆ DỮ LIỆU TOÀN CẦU VÀ TUÂN THỦ QUY ĐỊNH

MICRORETAILX LLC thiết kế và vận hành Trang web này phù hợp với các nguyên tắc bảo vệ dữ liệu và quyền riêng tư được công nhận quốc tế, bao gồm privacy by design, tối thiểu hóa dữ liệu, giới hạn mục đích, minh bạch, bảo mật và trách nhiệm giải trình.

Trang web chủ yếu mang tính thông tin và khái niệm. Trang web không cung cấp tài khoản người dùng, không yêu cầu đăng ký và không thực hiện profiling, theo dõi hành vi hoặc xử lý dựa trên quảng cáo.

Việc phân phối nội dung và vận hành kỹ thuật dựa vào các nhà cung cấp hạ tầng phân tán toàn cầu. Trong phạm vi có xử lý ngẫu nhiên metadata kỹ thuật như địa chỉ IP hoặc dữ liệu kết nối, việc xử lý đó được giới hạn nghiêm ngặt ở những gì cần thiết cho bảo mật, toàn vẹn, ngăn chặn lạm dụng và phân phối nội dung đáng tin cậy.

Mọi hoạt động xử lý như vậy được thực hiện theo các biện pháp bảo vệ hợp đồng, kỹ thuật và tổ chức thích hợp, bao gồm thỏa thuận xử lý dữ liệu và cơ chế chuyển dữ liệu quốc tế được công nhận khi áp dụng. Khi phù hợp, việc xử lý dựa trên các điều khoản hợp đồng tiêu chuẩn (SCC) hoặc cơ chế chuyển dữ liệu quốc tế hợp pháp tương đương. MICRORETAILX LLC không cố ý thu thập, lưu trữ hoặc khai thác dữ liệu cá nhân cho mục đích thương mại, profiling hoặc tiếp thị.

Cách tiếp cận này nhằm phù hợp với các nguyên tắc của những khuôn khổ bảo vệ dữ liệu và quyền riêng tư lớn trên toàn cầu ở nhiều khu vực tài phán.

Việc Trang web chỉ đơn thuần có thể truy cập từ một khu vực tài phán nhất định, tự nó, không cấu thành nhắm mục tiêu, thành lập, cấp phép, cho phép hoặc hoạt động được quản lý tại khu vực đó.

MICRORETAILX LLC không chủ động nhắm tới người dùng, khách hàng, nhà đầu tư, cơ quan quản lý hoặc cơ quan công quyền tại bất kỳ khu vực tài phán cụ thể nào.

11. SỬ DỤNG ĐƯỢC PHÉP; HÀNH VI BỊ CẤM

Bạn không được thực hiện data scraping, reverse engineering, trích xuất thuật toán, huấn luyện mô hình trí tuệ nhân tạo, can thiệp hạ tầng hoặc sử dụng sai Trang web, trừ khi được pháp luật bắt buộc cho phép rõ ràng.

12. BẢO TOÀN VÀ THỰC THI

MICRORETAILX LLC bảo lưu quyền áp dụng biện pháp kỹ thuật, tổ chức và pháp lý để bảo vệ Trang web và bảo toàn bằng chứng về hành vi lạm dụng hoặc bất hợp pháp.

13. SỞ HỮU TRÍ TUỆ; BÍ MẬT THƯƠNG MẠI

Mọi quyền, quyền sở hữu và lợi ích đối với Trang web và Nội dung thuộc sở hữu độc quyền của MICRORETAILX LLC và được bảo vệ bởi pháp luật sở hữu trí tuệ và bí mật thương mại áp dụng trên toàn thế giới.

14. BẢO MẬT TÀI LIỆU KHÔNG CÔNG KHAI

Tài liệu không công khai hoặc hạn chế không được tiết lộ, phân phối hoặc sao chép nếu không có sự cho phép trước bằng văn bản của MICRORETAILX LLC.

15. NỘI DUNG GỬI VÀ PHẢN HỒI

Bằng việc gửi bất kỳ tài liệu nào, bạn cấp cho MICRORETAILX LLC giấy phép toàn cầu, miễn phí bản quyền, không độc quyền và vĩnh viễn để sử dụng, sao chép, điều chỉnh và tích hợp nội dung gửi cho mục đích kinh doanh hợp pháp.

Giấy phép này chỉ áp dụng cho nội dung gửi không được yêu cầu và không thay thế, giới hạn hoặc ghi đè bất kỳ thỏa thuận bằng văn bản riêng biệt nào với MICRORETAILX LLC.

16. DIGITAL MILLENNIUM COPYRIGHT ACT (DMCA) SAFE HARBOR

MICRORETAILX LLC tôn trọng quyền sở hữu trí tuệ và kỳ vọng người dùng cũng như vậy. Theo Digital Millennium Copyright Act (17 U.S.C. § 512), quy trình sau áp dụng cho việc báo cáo vi phạm bản quyền bị cáo buộc:

• Thông báo. Nếu bạn cho rằng Nội dung hoặc Nội dung gửi trên Trang web vi phạm bản quyền của mình, bạn có thể gửi thông báo bằng văn bản tới đại diện được chỉ định của chúng tôi tại legal@microretailx.com. Để có hiệu lực, thông báo phải đáp ứng về cơ bản các yêu cầu của 17 U.S.C. § 512(c)(3), bao gồm: (i) chữ ký vật lý hoặc điện tử của chủ sở hữu bản quyền hoặc đại diện được ủy quyền; (ii) xác định tác phẩm có bản quyền bị cho là vi phạm; (iii) xác định tài liệu bị cáo buộc vi phạm và vị trí của nó; (iv) thông tin liên hệ của bên khiếu nại; và (v) tuyên bố thiện chí rằng việc sử dụng không được cho phép.

• Gỡ bỏ. Khi nhận được thông báo hợp lệ, MICRORETAILX LLC bảo lưu quyền gỡ bỏ hoặc vô hiệu hóa quyền truy cập vào tài liệu bị cáo buộc vi phạm theo toàn quyền quyết định và không cần báo trước.

• Phản thông báo. Khi áp dụng, có thể gửi phản thông báo theo DMCA. MICRORETAILX LLC có thể khôi phục tài liệu nếu pháp luật yêu cầu.

• Giới hạn. Quy trình này chỉ áp dụng cho vấn đề bản quyền theo DMCA. Đối với các yêu cầu pháp lý, quy định hoặc tuân thủ khác, vui lòng tham khảo phần liên hệ chung của Điều khoản này.

17. LIÊN KẾT NGOÀI; DỊCH VỤ BÊN THỨ BA

Trang web có thể chứa liên kết tới dịch vụ của bên thứ ba. MICRORETAILX LLC không chịu trách nhiệm về nội dung, thực tiễn hoặc chính sách của bên thứ ba. Việc truy cập do bạn tự chịu rủi ro.

18. TUYÊN BỐ MIỄN TRỪ; KHÔNG DỰA VÀO

Trang web không cung cấp tư vấn pháp lý, thuế, tài chính hoặc chuyên môn.

Không nội dung nào trên Trang web được hiểu là hướng dẫn quản lý, tuyên bố tuân thủ hoặc bảo đảm phù hợp với bất kỳ chế độ pháp lý hoặc quản lý địa phương cụ thể nào.

Các tuyên bố hướng tới tương lai vốn không chắc chắn và không bảo đảm kết quả trong tương lai.

19. TÍNH SẴN CÓ; “NGUYÊN TRẠNG”

Trang web được cung cấp “nguyên trạng” và “như sẵn có”, không có bảo đảm nào dù rõ ràng hay ngụ ý.

20. GIỚI HẠN TRÁCH NHIỆM

Trong phạm vi tối đa pháp luật áp dụng cho phép, MICRORETAILX LLC không chịu trách nhiệm về bất kỳ thiệt hại trực tiếp hoặc gián tiếp nào phát sinh từ việc sử dụng Trang web.

21. BỒI THƯỜNG

Bạn đồng ý bồi thường và bảo vệ MICRORETAILX LLC khỏi mọi yêu cầu, trách nhiệm, thiệt hại hoặc chi phí phát sinh từ việc sử dụng Trang web bất hợp pháp hoặc vi phạm Điều khoản này.

22. TUÂN THỦ; KIỂM SOÁT XUẤT KHẨU; TRỪNG PHẠT

Bạn đồng ý tuân thủ pháp luật về kiểm soát xuất khẩu và trừng phạt áp dụng, bao gồm U.S. Export Administration Regulations (EAR) và các chế độ của Office of Foreign Assets Control (OFAC), và khi áp dụng, các khuôn khổ trừng phạt liên quan của Liên Hợp Quốc, Liên minh Châu Âu hoặc các khuôn khổ quốc tế khác.

23. LIÊN LẠC ĐIỆN TỬ; THÔNG BÁO

Mọi thông báo và liên hệ pháp lý phải được gửi tới: legal@microretailx.com.

24. THAY ĐỔI ĐIỀU KHOẢN NÀY

MICRORETAILX LLC có thể sửa đổi Điều khoản này bất cứ lúc nào. Việc tiếp tục sử dụng Trang web đồng nghĩa với việc chấp nhận Điều khoản đã sửa đổi.

25. LUẬT ÁP DỤNG; THẨM QUYỀN ĐỘC QUYỀN; NGÔN NGỮ

Điều khoản này được điều chỉnh bởi pháp luật Bang Delaware, Hoa Kỳ. Mọi tranh chấp thuộc thẩm quyền độc quyền của các tòa án bang hoặc liên bang tại Delaware.

Bản tiếng Anh được ưu tiên; bản dịch chỉ được cung cấp để thuận tiện về thông tin.

26. KHẢ NĂNG TÁCH RỜI; TOÀN BỘ THỎA THUẬN

Nếu bất kỳ điều khoản nào bị coi là vô hiệu hoặc không thể thi hành, các điều khoản còn lại vẫn có đầy đủ hiệu lực. Điều khoản này tạo thành toàn bộ thỏa thuận liên quan đến việc sử dụng Trang web.

27. LIÊN HỆ

Liên hệ pháp lý và tuân thủ: legal@microretailx.com
`
    },

    privacy: {
      title: "Chính sách quyền riêng tư — MICRORETAILX",
      description: "Chính sách quyền riêng tư toàn cầu và khuôn khổ bảo vệ dữ liệu của MICRORETAILX.",
      body: `MICRORETAILX — CHÍNH SÁCH QUYỀN RIÊNG TƯ

MICRORETAILX LLC (Delaware, Hoa Kỳ)
MICRORETAILX GROUP – Khuôn khổ hoạt động toàn cầu

Cập nhật lần cuối: 01-01-2026
Ngày có hiệu lực: 01-01-2026

Văn phòng đăng ký và Registered Agent:
Corporation Trust Center
1209 Orange Street
Wilmington, DE 19801
United States of America

1. PHẠM VI VÀ MỤC ĐÍCH

Chính sách quyền riêng tư này mô tả cách MICRORETAILX LLC (“MICRORETAILX”, “chúng tôi”) thiết kế và vận hành Trang web này từ góc độ bảo vệ dữ liệu và quyền riêng tư.

Trang web mang tính thông tin và khái niệm nghiêm ngặt. Trang web không cung cấp tài khoản người dùng, không yêu cầu đăng ký và không cung cấp sản phẩm hoặc dịch vụ để bán.

2. CHIẾN LƯỢC ZERO DATA (PRIVACY BY DESIGN)

Trang web này được chủ ý thiết kế như một môi trường Zero Data.

MICRORETAILX LLC không cố ý thu thập, yêu cầu, bắt buộc, lưu trữ, kiếm tiền từ hoặc khai thác dữ liệu cá nhân của khách truy cập. Không tạo hồ sơ người dùng, định danh hoặc tập dữ liệu hành vi.

Các nguyên tắc quyền riêng tư được tích hợp theo thiết kế và mặc định, bao gồm tối thiểu hóa dữ liệu, giới hạn mục đích, minh bạch, bảo mật và trách nhiệm giải trình.

3. KHÔNG CÓ TÀI KHOẢN NGƯỜI DÙNG; KHÔNG ĐĂNG KÝ

Trang web không cung cấp tài khoản người dùng, khu vực đăng nhập, biểu mẫu đăng ký hoặc hệ thống thành viên.

Khách truy cập không bắt buộc phải cung cấp dữ liệu cá nhân để truy cập nội dung Trang web.

4. KHÔNG PROFILING; KHÔNG THEO DÕI; KHÔNG QUẢNG CÁO

Trang web không triển khai:

• profiling hành vi hoặc dựa trên sở thích
• công nghệ quảng cáo hoặc tiếp thị
• nền tảng phân tích hoặc công cụ đo lường đối tượng
• cơ chế theo dõi giữa các trang web hoặc dịch vụ

MICRORETAILX LLC không thực hiện quyết định tự động, profiling hoặc phân tích hành vi của khách truy cập.

5. METADATA KỸ THUẬT VÀ DỮ LIỆU NHẬT KÝ

Giống như hầu hết dịch vụ Internet, metadata kỹ thuật hạn chế có thể được xử lý ngẫu nhiên khi truy cập Trang web, chẳng hạn địa chỉ IP, header yêu cầu, timestamp hoặc thông tin cấp giao thức.

Metadata đó được xử lý nghiêm ngặt cho mục đích kỹ thuật và bảo mật, bao gồm:

• bảo đảm phân phối nội dung an toàn và đáng tin cậy
• bảo vệ khỏi lạm dụng, truy cập tự động và tấn công
• duy trì tính toàn vẹn và sẵn có của mạng

Metadata này không được dùng để nhận dạng, profiling, tiếp thị hoặc phân tích và chỉ được lưu trong thời gian tối thiểu cần thiết.

6. NHÀ CUNG CẤP HẠ TẦNG BÊN THỨ BA

Trang web được phân phối qua các nhà cung cấp hạ tầng bên thứ ba, bao gồm mạng phân phối nội dung (CDN), dịch vụ DNS và nền tảng hosting tĩnh như Cloudflare, Inc. và GitHub, Inc.

Các nhà cung cấp này có thể xử lý metadata kỹ thuật hạn chế chỉ để thực hiện chức năng hạ tầng, bảo mật và phân phối thay mặt MICRORETAILX LLC.

MICRORETAILX LLC không bật các tính năng phân tích, theo dõi, quảng cáo hoặc giám sát hành vi do các nhà cung cấp đó cung cấp.

7. CHUYỂN DỮ LIỆU QUỐC TẾ

Khi metadata kỹ thuật được xử lý qua hạ tầng phân tán toàn cầu, việc xử lý có thể liên quan đến chuyển dữ liệu quốc tế.

Các việc chuyển đó được thực hiện theo các biện pháp bảo vệ kỹ thuật và tổ chức phù hợp và, khi áp dụng, dựa vào cơ chế chuyển dữ liệu quốc tế được công nhận như các điều khoản hợp đồng tiêu chuẩn (SCC) hoặc khuôn khổ hợp pháp tương đương.

MICRORETAILX LLC không sử dụng chuyển dữ liệu quốc tế để khai thác thương mại dữ liệu cá nhân.

8. COOKIE, ĐỊNH DANH KỸ THUẬT VÀ BẢO MẬT HẠ TẦNG

Theo mặc định, Trang web không sử dụng cookie tiếp thị, quảng cáo, phân tích, nhắm mục tiêu hoặc theo dõi hành vi.

Công bố kỹ thuật. Trang web chỉ dựa vào các định danh kỹ thuật thực sự cần thiết cho hạ tầng cốt lõi và hoạt động bảo mật. Điều này có thể bao gồm định danh được đặt hoặc xử lý bởi mạng phân phối nội dung (CDN), nhà cung cấp DNS, nền tảng hosting và lớp bảo mật.

Các định danh này chỉ được dùng cho:

• Bảo mật và ngăn chặn lạm dụng: vận hành tường lửa ứng dụng web (WAF), hệ thống giảm bot, rate limiting và bảo vệ cấp mạng nhằm ngăn truy cập trái phép, lạm dụng tự động và tấn công từ chối dịch vụ.

• Phân phối nội dung và tính sẵn có: phân phối nội dung an toàn và hiệu quả qua CDN toàn cầu, load balancer và hạ tầng phân tán nhằm bảo đảm hiệu năng, khả năng phục hồi và tính sẵn có.

Các định danh kỹ thuật này không cho phép profiling người dùng, giám sát hành vi, quảng cáo hoặc hoạt động tiếp thị và không được dùng để xác định hoặc theo dõi cá nhân giữa các trang web hoặc dịch vụ.

Khi được xử lý, metadata kỹ thuật như địa chỉ IP hoặc header yêu cầu chỉ được xử lý nghiêm ngặt cho mục đích bảo mật, toàn vẹn và vận hành, và chỉ trong thời gian tối thiểu cần thiết.

Các định danh này nhìn chung được miễn yêu cầu đồng ý theo các khuôn khổ bảo vệ dữ liệu và ePrivacy áp dụng vì thực sự cần thiết cho việc cung cấp, bảo mật và vận hành đúng Trang web.

9. QUYỀN CỦA CHỦ THỂ DỮ LIỆU

Do tính chất Trang web và việc không cố ý thu thập dữ liệu cá nhân, nhiều quyền của chủ thể dữ liệu có thể không áp dụng trên thực tế.

Khi pháp luật áp dụng yêu cầu, cá nhân có thể liên hệ MICRORETAILX LLC để hỏi về khả năng xử lý dữ liệu liên quan tới nhật ký truy cập kỹ thuật.

Yêu cầu có thể gửi tới: legal@microretailx.com

MICRORETAILX LLC bảo lưu quyền xác minh yêu cầu và giới hạn phản hồi trong phạm vi pháp luật cho phép.

10. BẢO MẬT DỮ LIỆU

MICRORETAILX LLC thực hiện các biện pháp kỹ thuật và tổ chức thích hợp để bảo vệ Trang web và hạ tầng khỏi truy cập trái phép, lạm dụng, thay đổi hoặc phá hủy.

Các biện pháp bảo mật bao gồm mã hóa khi truyền, header bảo mật nghiêm ngặt, kiểm soát truy cập và bảo vệ cấp mạng.

11. TUYÊN BỐ SECURITY-BY-DESIGN

Trang web được chủ ý xây dựng với kiến trúc security-first và privacy-by-design. Thiết kế kỹ thuật nhằm tối thiểu hóa việc lộ dữ liệu, giảm bề mặt tấn công và ngăn xử lý dữ liệu không cần thiết, qua đó bảo vệ người dùng theo mặc định thay vì dựa vào biện pháp kiểm soát sau đó hoặc cơ chế đồng ý.

Các biện pháp bảo mật được triển khai như một phần của hạ tầng cốt lõi và mô hình vận hành của Trang web, không phải tính năng tùy chọn.

12. KHÔNG NHẮM MỤC TIÊU; KHÔNG THÀNH LẬP

MICRORETAILX LLC không chủ động nhắm tới người dùng, khách hàng, nhà đầu tư hoặc cơ quan tại bất kỳ khu vực tài phán cụ thể nào.

Việc Trang web có thể truy cập từ một khu vực tài phán nhất định không cấu thành nhắm mục tiêu, thành lập, cấp phép, cho phép hoặc hoạt động được quản lý tại khu vực đó.

13. QUYỀN RIÊNG TƯ CỦA TRẺ EM

Trang web không hướng tới trẻ em và MICRORETAILX LLC không cố ý thu thập dữ liệu cá nhân từ người chưa thành niên.

14. THAY ĐỔI CHÍNH SÁCH QUYỀN RIÊNG TƯ

MICRORETAILX LLC có thể cập nhật Chính sách quyền riêng tư này theo thời gian. Thay đổi có hiệu lực khi được đăng trên Trang web.

15. LUẬT ÁP DỤNG VÀ NGÔN NGỮ

Chính sách quyền riêng tư này được điều chỉnh bởi pháp luật Bang Delaware, Hoa Kỳ.

Bản tiếng Anh được ưu tiên. Bản dịch chỉ được cung cấp để thuận tiện về thông tin và không có hiệu lực hợp đồng hoặc pháp lý.

16. LIÊN HỆ

Đối với yêu cầu về quyền riêng tư, pháp lý hoặc tuân thủ:
legal@microretailx.com
`
    },

    cookies: {
      title: "Chính sách Cookie — MICRORETAILX",
      description: "Chính sách cookie toàn cầu và khuôn khổ kỹ thuật của MICRORETAILX.",
      body: `MICRORETAILX — CHÍNH SÁCH COOKIE

MICRORETAILX LLC (Delaware, Hoa Kỳ)
MICRORETAILX GROUP – Khuôn khổ hoạt động toàn cầu

Cập nhật lần cuối: 21-08-2026
Ngày có hiệu lực: 01-01-2026

Văn phòng đăng ký và Registered Agent:
Corporation Trust Center
1209 Orange Street
Wilmington, DE 19801
United States of America

1. PHẠM VI VÀ MỤC ĐÍCH

Chính sách Cookie này giải thích cách cookie và các định danh kỹ thuật tương tự có thể được sử dụng liên quan tới Trang web này, do MICRORETAILX LLC (“MICRORETAILX”, “chúng tôi”) vận hành.

Trang web chỉ mang tính thông tin và khái niệm và phải được đọc cùng Chính sách quyền riêng tư và Điều khoản sử dụng toàn cầu, cùng nhau tạo thành khuôn khổ pháp lý của Trang web.

2. CHIẾN LƯỢC ZERO DATA

Trang web được chủ ý thiết kế và vận hành theo Chiến lược Zero Data.

MICRORETAILX LLC không sử dụng cookie hoặc công nghệ tương tự để:
• nhận dạng người dùng cá nhân
• tạo hồ sơ người dùng
• thực hiện theo dõi hành vi hoặc dựa trên sở thích
• cung cấp quảng cáo hoặc tiếp thị
• kiếm tiền từ dữ liệu cá nhân

Trang web không cung cấp tài khoản người dùng, hệ thống đăng ký hoặc dịch vụ tương tác yêu cầu dữ liệu cá nhân.

3. COOKIE THỰC SỰ CẦN THIẾT VÀ ĐỊNH DANH KỸ THUẬT

Theo mặc định, Trang web chỉ dựa vào cookie thực sự cần thiết và/hoặc định danh kỹ thuật tương đương cần thiết cho hạ tầng cốt lõi, bảo mật và tính sẵn có.

Các định danh này có thể được đặt hoặc xử lý bởi:
• mạng phân phối nội dung (CDN)
• nhà cung cấp DNS và hosting
• lớp bảo mật, toàn vẹn và tính sẵn có

Các định danh này chỉ được dùng cho các mục đích như:
• cân bằng tải và phân phối lưu lượng
• ngăn chặn lạm dụng và rate limiting
• giảm bot và bảo vệ khỏi truy cập tự động
• phân phối nội dung an toàn và đáng tin cậy

Cookie và định danh này cần thiết cho hoạt động đúng của Trang web và không thể tắt nếu không làm suy giảm bảo mật hoặc tính sẵn có.

LOCAL STORAGE ĐƯỢC TRANG WEB NÀY SỬ DỤNG

Ngoài cookie thực sự cần thiết, Trang web lưu một số lượng nhỏ tùy chọn kỹ thuật trực tiếp trong local storage của trình duyệt. Các mục này chỉ là first-party, không bao giờ được truyền tới MICRORETAILX LLC hoặc bên thứ ba và vẫn ở trên thiết bị cho tới khi khách truy cập xóa.

• mx_consent — ghi lại lựa chọn cookie của khách truy cập cùng phiên bản scope, phiên bản chính sách và timestamp của quyết định. Mục đích: tôn trọng lựa chọn và ghi nhận thời điểm cùng phiên bản chính sách khi lựa chọn được đưa ra.
• mx_lang — ghi lại ngôn ngữ hiển thị được chọn. Mục đích: duy trì cùng ngôn ngữ giữa các trang và các lần truy cập.
• mx_a11y — ghi lại tùy chọn trợ năng như cỡ chữ, độ tương phản và kiểu chữ dễ đọc. Mục đích: duy trì cài đặt đọc đã chọn.
• mx_reader_immersive — ghi lại việc chế độ đọc immersive có hoạt động hay không. Mục đích: duy trì bố cục đọc đã chọn.

Các mục này không chứa định danh, dữ liệu cá nhân hoặc thông tin hành vi. Chúng có thể được xóa bất cứ lúc nào trong cài đặt trình duyệt hoặc qua bộ điều khiển tùy chọn cookie có ở footer của mọi trang.

4. KHÔNG PHÂN TÍCH; KHÔNG TIẾP THỊ; KHÔNG THEO DÕI

Trang web không triển khai:
• công cụ phân tích hoặc đo lường đối tượng
• cookie tiếp thị hoặc quảng cáo
• hệ thống cá nhân hóa hoặc đề xuất
• cơ chế theo dõi giữa các trang web hoặc dịch vụ

MICRORETAILX LLC không thực hiện quyết định tự động hoặc profiling dựa trên quyền truy cập Trang web.

5. CÔNG NGHỆ TÙY CHỌN VÀ SỰ ĐỒNG Ý

Cookie tùy chọn hoặc công nghệ tương tự không được bật mặc định.

Nếu công nghệ tùy chọn được đưa vào trong tương lai, chúng chỉ được kích hoạt:
• sau khi có sự đồng ý rõ ràng của người dùng; và
• khi pháp luật áp dụng yêu cầu sự đồng ý đó.

Khi phù hợp, tùy chọn đồng ý được quản lý qua giao diện đồng ý của Trang web.

6. METADATA KỸ THUẬT VÀ DỮ LIỆU NHẬT KÝ

Như thông lệ đối với dịch vụ Internet, metadata kỹ thuật hạn chế có thể được xử lý ngẫu nhiên khi truy cập Trang web, như địa chỉ IP, header yêu cầu, timestamp hoặc thông tin cấp giao thức.

Metadata đó được xử lý nghiêm ngặt cho mục đích kỹ thuật và bảo mật, bao gồm:
• bảo vệ hạ tầng và ngăn lạm dụng
• phát hiện và giảm hoạt động tự động hoặc độc hại
• bảo đảm tính sẵn có, toàn vẹn và khả năng phục hồi của Trang web

Metadata này không được dùng để nhận dạng, profiling, phân tích hoặc tiếp thị và chỉ được lưu trong thời gian tối thiểu cần thiết.

7. BỐI CẢNH QUỐC TẾ VÀ HẠ TẦNG

Trang web có thể được truy cập trên toàn cầu và dựa vào hạ tầng kỹ thuật phân tán.

Khi metadata kỹ thuật được xử lý qua các hệ thống phân tán toàn cầu, việc xử lý có thể liên quan tới chuyển dữ liệu quốc tế.

Các việc chuyển đó được thực hiện theo biện pháp bảo vệ kỹ thuật và tổ chức thích hợp và, khi áp dụng, dựa vào cơ chế chuyển dữ liệu quốc tế được công nhận.

8. KHÔNG NHẮM MỤC TIÊU; KHÔNG CÓ Ý ĐỊNH THEO KHU VỰC TÀI PHÁN

MICRORETAILX LLC không chủ động nhắm tới người dùng hoặc đối tượng tại bất kỳ khu vực tài phán cụ thể nào.

Việc Trang web chỉ đơn thuần có thể truy cập từ bất kỳ khu vực tài phán nào không cấu thành nhắm mục tiêu, thành lập, cấp phép, cho phép hoặc hoạt động được quản lý tại khu vực đó.

9. THAY ĐỔI CHÍNH SÁCH COOKIE

MICRORETAILX LLC có thể cập nhật Chính sách Cookie này theo thời gian. Mọi thay đổi có hiệu lực khi được đăng trên Trang web.

10. LUẬT ÁP DỤNG VÀ NGÔN NGỮ

Chính sách Cookie này được điều chỉnh bởi pháp luật Bang Delaware, Hoa Kỳ.

Bản tiếng Anh được ưu tiên. Bản dịch chỉ được cung cấp để thuận tiện về thông tin và không có hiệu lực pháp lý.

11. LIÊN HỆ

Đối với yêu cầu về cookie, quyền riêng tư hoặc tuân thủ:
legal@microretailx.com
`
    },

    legal: {
      title: "Thông báo pháp lý — MICRORETAILX",
      description: "Thông tin nhận dạng doanh nghiệp và thông tin pháp lý của MICRORETAILX LLC.",
      body: `MICRORETAILX — THÔNG BÁO PHÁP LÝ

MICRORETAILX LLC (Delaware, Hoa Kỳ)
MICRORETAILX GROUP – Khuôn khổ hoạt động toàn cầu

Cập nhật lần cuối: 01-01-2026
Ngày có hiệu lực: 01-01-2026

Văn phòng đăng ký và Registered Agent:
Corporation Trust Center
1209 Orange Street
Wilmington, DE 19801
United States of America

1. KHUÔN KHỔ PHÁP LÝ; THỨ BẬC TÀI LIỆU; QUAN HỆ VỚI CÁC CHÍNH SÁCH KHÁC

Thông báo pháp lý này là một phần của khuôn khổ pháp lý điều chỉnh việc truy cập và sử dụng Trang web.

Tài liệu bổ sung có thể áp dụng tùy theo tính chất tương tác của khách truy cập với Trang web, bao gồm:
• Điều khoản sử dụng
• Chính sách quyền riêng tư
• Chính sách Cookie (và mọi cài đặt Tùy chọn Cookie / CMP hiển thị trên Trang web)

Nếu có xung đột giữa các tài liệu, thứ tự ưu tiên sau được áp dụng:
(i) Thông báo pháp lý này, (ii) Điều khoản sử dụng, (iii) Chính sách quyền riêng tư và (iv) Chính sách Cookie, trừ khi pháp luật bắt buộc yêu cầu khác đối với một vấn đề cụ thể.

Nếu bất kỳ điều khoản nào của Thông báo pháp lý này bị xác định là vô hiệu hoặc không thể thi hành, các điều khoản còn lại vẫn có đầy đủ hiệu lực.

MICRORETAILX LLC có thể xem xét, cập nhật và cải thiện khuôn khổ pháp lý này theo thời gian để phản ánh các tiêu chuẩn quản lý đang phát triển, hướng dẫn giám sát, thực tiễn bảo mật và thay đổi vận hành.

2. NHẬN DẠNG ĐƠN VỊ VẬN HÀNH TRANG WEB

Trang web này (“Trang web”) được vận hành và kiểm soát độc quyền bởi MICRORETAILX LLC, một công ty trách nhiệm hữu hạn được thành lập hợp pháp và tồn tại theo pháp luật Bang Delaware, Hoa Kỳ.

Mọi tham chiếu tới “MICRORETAILX GROUP”, “group”, “network”, “ecosystem”, “labs”, “nodes”, “regions” hoặc thuật ngữ tương tự chỉ mang tính mô tả và khái niệm, và không hàm ý sự tồn tại của một pháp nhân riêng biệt, chi nhánh, công ty con, hợp danh, liên doanh, đại lý hoặc cơ sở thường trú trừ khi được nêu rõ khác đi trong một thỏa thuận bằng văn bản.

3. MỤC ĐÍCH CỦA TRANG WEB

Trang web được cung cấp chỉ cho mục đích thông tin, khái niệm và thăm dò.

Trang web không cấu thành và không được hiểu là:
• chào bán hoặc chào mời sản phẩm hay dịch vụ
• đề xuất đầu tư, quảng bá tài chính hoặc truyền thông được quản lý
• tư vấn pháp lý, thuế, tài chính hoặc chuyên môn
• hoạt động được quản lý hoặc cấp phép tại bất kỳ khu vực tài phán nào

Trang web không cho phép giao dịch, đăng ký, tài khoản người dùng hoặc cung cấp dịch vụ.

4. KHÔNG DỰA VÀO; KHÔNG TƯ VẤN

Tất cả nội dung được cung cấp trên Trang web chỉ nhằm mục đích thông tin chung.

MICRORETAILX LLC không đưa ra tuyên bố hoặc bảo đảm về tính chính xác, đầy đủ hoặc phù hợp của nội dung cho bất kỳ mục đích cụ thể nào. Việc dựa vào nội dung Trang web là rủi ro của khách truy cập.

5. SỞ HỮU TRÍ TUỆ

Trừ khi được nêu rõ khác đi, mọi nội dung trên Trang web, bao gồm nhưng không giới hạn ở văn bản, đồ họa, thiết kế, bố cục, mã nguồn, mô phỏng, hình ảnh trực quan, mô hình và tài liệu, thuộc sở hữu độc quyền của MICRORETAILX LLC.

Nội dung đó được bảo vệ trên toàn thế giới bởi pháp luật về sở hữu trí tuệ, bản quyền và bí mật thương mại áp dụng.

Không nội dung nào được sao chép, tái tạo, phân phối, sửa đổi hoặc khai thác nếu không có sự cho phép trước bằng văn bản của MICRORETAILX LLC, trừ khi pháp luật bắt buộc cho phép.

6. SỬ DỤNG CHẤP NHẬN ĐƯỢC

Khách truy cập đồng ý không:
• sử dụng sai hoặc can thiệp Trang web hay hạ tầng
• cố truy cập trái phép hoặc vượt qua biện pháp bảo mật
• thực hiện scraping, reverse engineering hoặc trích xuất tự động
• sử dụng Trang web cho mục đích bất hợp pháp hoặc bị cấm

MICRORETAILX LLC bảo lưu quyền áp dụng biện pháp kỹ thuật, pháp lý và tổ chức phù hợp để bảo vệ Trang web và tính toàn vẹn.

7. LIÊN KẾT BÊN THỨ BA

Trang web có thể chứa liên kết tới trang web hoặc dịch vụ của bên thứ ba.

MICRORETAILX LLC không chịu trách nhiệm về nội dung, tính sẵn có, bảo mật hoặc thực tiễn của bên thứ ba. Việc truy cập nguồn lực bên thứ ba do khách truy cập tự chịu rủi ro.

8. TÍNH SẴN CÓ VÀ TUYÊN BỐ MIỄN TRỪ

Trang web được cung cấp “nguyên trạng” và “như sẵn có”.

MICRORETAILX LLC không bảo đảm rằng Trang web sẽ không bị gián đoạn, không có lỗi hoặc không có lỗ hổng. Trong phạm vi tối đa pháp luật áp dụng cho phép, mọi bảo đảm rõ ràng hoặc ngụ ý đều bị loại trừ.

9. GIỚI HẠN TRÁCH NHIỆM

Trong phạm vi tối đa pháp luật áp dụng cho phép, MICRORETAILX LLC không chịu trách nhiệm về thiệt hại trực tiếp, gián tiếp, ngẫu nhiên, hệ quả hoặc đặc biệt phát sinh từ hoặc liên quan tới việc sử dụng hoặc không thể sử dụng Trang web.

10. KHÔNG NHẮM MỤC TIÊU; KHÔNG PROFILING MẶC ĐỊNH; KHÔNG THÀNH LẬP

MICRORETAILX LLC không chủ động nhắm tới người dùng hoặc đối tượng tại bất kỳ khu vực tài phán cụ thể nào.

Việc Trang web chỉ đơn thuần có thể truy cập từ một khu vực tài phán nhất định không cấu thành nhắm mục tiêu, thành lập, cấp phép, cho phép hoặc hoạt động được quản lý tại khu vực đó.

Trừ khi được công bố rõ ràng trong lớp chính sách áp dụng và, khi cần, được khách truy cập bật thông qua cài đặt rõ ràng hoặc cơ chế đồng ý, MICRORETAILX LLC không thực hiện:
• quảng cáo hành vi hoặc nhắm mục tiêu tiếp thị
• profiling người dùng cho mục đích quảng cáo
• quyết định tự động tạo ra hiệu lực pháp lý hoặc tác động đáng kể tương tự

11. LUẬT ÁP DỤNG VÀ THẨM QUYỀN

Thông báo pháp lý này được điều chỉnh bởi pháp luật Bang Delaware, Hoa Kỳ.

Mọi tranh chấp phát sinh từ hoặc liên quan tới Trang web hoặc Thông báo pháp lý này thuộc thẩm quyền độc quyền của các tòa án bang hoặc liên bang tại Bang Delaware, không ảnh hưởng tới bất kỳ quy tắc bảo vệ người tiêu dùng bắt buộc nào có thể áp dụng tại một khu vực tài phán cụ thể.

12. NGÔN NGỮ

Bản tiếng Anh của Thông báo pháp lý này được ưu tiên. Mọi bản dịch chỉ được cung cấp để thuận tiện về thông tin và không có hiệu lực pháp lý.

13. LIÊN HỆ

Đối với yêu cầu pháp lý hoặc tuân thủ:
legal@microretailx.com
`
    }
  });

  // EXTRA_LOCALES
})();
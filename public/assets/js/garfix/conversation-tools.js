(function () {
  "use strict";

  const sessions = window.__mxGarfixSessions;
  const departments = window.__mxGarfixDepartments;
  const conversation = window.__garfix?.conversation;
  const messages = document.getElementById("mx-garfix-messages");
  const footer = document.getElementById("mx-garfix-session-footer");
  const footnote = document.getElementById("mx-garfix-footnote");

  if (!sessions || !conversation || !messages || !footer) return;

  const COPY_SVG = `
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <rect x="8" y="8" width="11" height="11" rx="2" fill="none" stroke="currentColor" stroke-width="1.5"/>
      <path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    </svg>`;

  function language() {
    const raw = String(document.documentElement.lang || "en")
      .toLowerCase()
      .split("-")[0];
    return ["en", "es", "ca", "eu", "zh", "hi", "ar", "ru", "fr", "ja"].includes(raw) ? raw : "en";
  }

  function copy(key) {
    const table = {
      en: {
        start: "Start chat",
        end: "End chat",
        copy: "Copy response",
        copied: "Copied",
        copyFailed: "Could not copy. Select the text and copy it manually."
      },
      es: {
        start: "Iniciar chat",
        end: "Finalizar chat",
        copy: "Copiar respuesta",
        copied: "Copiado",
        copyFailed: "No se pudo copiar. Selecciona el texto y cópialo manualmente."
      },
      ar: {
        start: "بدء المحادثة",
        end: "إنهاء المحادثة",
        copy: "نسخ الرد",
        copied: "تم النسخ",
        copyFailed: "تعذر النسخ. حدد النص وانسخه يدوياً."
      },
      ca: {
        start: "Inicia el xat",
        end: "Finalitza el xat",
        copy: "Copia la resposta",
        copied: "Copiat",
        copyFailed: "No s'ha pogut copiar. Selecciona el text i copia'l manualment."
      },
      eu: {
        start: "Hasi txata",
        end: "Amaitu txata",
        copy: "Kopiatu erantzuna",
        copied: "Kopiatuta",
        copyFailed: "Ezin izan da kopiatu. Hautatu testua eta kopiatu eskuz."
      },
      zh: {
        start: "开始聊天",
        end: "结束聊天",
        copy: "复制回答",
        copied: "已复制",
        copyFailed: "无法复制。请选择文本并手动复制。"
      },
      hi: {
        start: "चैट शुरू करें",
        end: "चैट समाप्त करें",
        copy: "उत्तर कॉपी करें",
        copied: "कॉपी हो गया",
        copyFailed: "कॉपी नहीं हो सका। टेक्स्ट चुनकर मैन्युअली कॉपी करें।"
      },
      ru: {
        start: "Начать чат",
        end: "Завершить чат",
        copy: "Копировать ответ",
        copied: "Скопировано",
        copyFailed: "Не удалось скопировать. Выделите текст и скопируйте вручную."
      },
      fr: {
        start: "Démarrer le chat",
        end: "Terminer le chat",
        copy: "Copier la réponse",
        copied: "Copié",
        copyFailed: "Impossible de copier. Sélectionnez le texte et copiez-le manuellement."
      },
      ja: {
        start: "チャットを開始",
        end: "チャットを終了",
        copy: "回答をコピー",
        copied: "コピーしました",
        copyFailed: "コピーできませんでした。テキストを選択して手動でコピーしてください。"
      }
    };

    return table[language()]?.[key] || table.en[key] || key;
  }

  function escapeHtml(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  const copyTimers = new WeakMap();
  let toastTimer;
  function copyFeedback(button, success) {
    let toast = document.getElementById("mx-garfix-copy-status");
    if (!toast) {
      toast = document.createElement("div");
      toast.id = "mx-garfix-copy-status";
      toast.setAttribute("role", "status");
      toast.setAttribute("aria-live", "polite");
      document.body.append(toast);
    }
    clearTimeout(toastTimer);
    toast.textContent = copy(success ? "copied" : "copyFailed");
    toast.hidden = false;
    toastTimer = setTimeout(() => { toast.hidden = true; }, 3000);
    if (!button) return;
    clearTimeout(copyTimers.get(button));
    button.classList.toggle("is-copied", success);
    button.setAttribute("aria-label", copy(success ? "copied" : "copyFailed"));
    button.setAttribute("title", copy(success ? "copied" : "copyFailed"));
    copyTimers.set(button, setTimeout(() => {
      button.classList.remove("is-copied");
      button.setAttribute("aria-label", copy("copy"));
      button.setAttribute("title", copy("copy"));
    }, 3000));
  }

  function fallbackCopy(value) {
    const active = document.activeElement;
    const selection = window.getSelection();
    const ranges = selection ? Array.from({ length: selection.rangeCount }, (_, i) => selection.getRangeAt(i).cloneRange()) : [];
    const field = document.createElement("textarea");
    field.value = value;
    field.setAttribute("readonly", "");
    field.className = "mx-garfix-copy-buffer";
    document.body.append(field);
    try {
      field.focus({ preventScroll: true });
      field.select();
      field.setSelectionRange(0, value.length);
      return document.execCommand("copy") === true;
    } catch (_) { return false; }
    finally {
      field.remove();
      active?.focus?.({ preventScroll: true });
      if (selection) {
        selection.removeAllRanges();
        ranges.forEach(range => selection.addRange(range));
      }
    }
  }

  async function copyText(text, button) {
    const value = String(text || "").trim();
    if (!value) { copyFeedback(button, false); return false; }
    let success = false;
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(value);
        success = true;
      }
    } catch (_) { /* Try the user-initiated compatibility path below. */ }
    if (!success) success = fallbackCopy(value);
    copyFeedback(button, success);
    return success;
  }

  function messageText(node) {
    return String(
      node?.querySelector?.(".mx-garfix-message-text")?.textContent || ""
    ).trim();
  }

  function decorateMessage(node) {
    if (!node?.matches?.('.mx-garfix-message[data-role="assistant"]')) return;

    const text = messageText(node);
    const meta = node.querySelector(".mx-garfix-message-meta");
    if (!text || !meta || meta.querySelector(".mx-garfix-copy")) return;

    const button = document.createElement("button");
    button.type = "button";
    button.className = "mx-garfix-copy";
    button.setAttribute("aria-label", copy("copy"));
    button.setAttribute("title", copy("copy"));
    button.innerHTML = COPY_SVG;
    button.addEventListener("click", () => copyText(messageText(node), button));
    meta.prepend(button);
  }

  function decorateAll() {
    messages
      .querySelectorAll('.mx-garfix-message[data-role="assistant"]')
      .forEach(decorateMessage);
  }

  const decorateObserver = new MutationObserver(() => {
    clearTimeout(decorateObserver._timer);
    decorateObserver._timer = setTimeout(decorateAll, 180);
  });

  decorateObserver.observe(messages, {
    childList: true,
    subtree: true,
    characterData: true
  });

  function renderLifecycle() {
    const active = Boolean(sessions.current?.());

    footer.hidden = false;
    footer.replaceChildren();

    const button = document.createElement("button");
    button.type = "button";
    button.className = "mx-garfix-session-end mx-garfix-session-lifecycle";
    button.classList.toggle("is-start", !active);
    button.textContent = copy(active ? "end" : "start");

    button.addEventListener("click", () => {
      if (sessions.current?.()) {
        sessions.end?.();
      } else {
        sessions.start?.("general");
      }
    });

    footer.appendChild(button);
  }

  function formatDate(value) {
    const date = new Date(value || Date.now());
    if (!Number.isFinite(date.getTime())) return "";

    const locale = ({
      en: "en-GB",
      es: "es-ES",
      ca: "ca-ES",
      eu: "eu-ES",
      zh: "zh-CN",
      hi: "hi-IN",
      ar: "ar-MA",
      ru: "ru-RU",
      fr: "fr-FR",
      ja: "ja-JP"
    })[language()] || "en-GB";

    return new Intl.DateTimeFormat(locale, {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    }).format(date);
  }

  function downloadPdf() {
    const entries = conversation.messages?.() || [];
    if (!entries.length) return false;

    const active = sessions.current?.();
    const department = active
      ? departments?.get?.(active.department)
      : null;

    const startedAt = active?.startedAt || entries[0]?.timestamp || new Date().toISOString();
    const title = `MICROLABSX-AI-${new Date(startedAt).toISOString().slice(0, 10)}`;
    const direction = document.documentElement.dir === "rtl" ? "rtl" : "ltr";

    const rows = entries.map(entry => {
      const role = entry.role === "assistant"
        ? "MICROLABSX AI"
        : entry.role === "user"
          ? "USER"
          : "SYSTEM";

      return `
        <article class="message ${escapeHtml(entry.role)}" dir="auto">
          <div class="meta"><strong>${escapeHtml(role)}</strong><time>${escapeHtml(formatDate(entry.timestamp))}</time></div>
          <div class="text">${escapeHtml(entry.text).replaceAll("\n", "<br>")}</div>
        </article>`;
    }).join("");

    const popup = window.open("", "_blank", "width=900,height=720");
    if (!popup) return false;

    try { popup.opener = null; } catch (_) {}

    popup.document.open();
    popup.document.write(`<!doctype html>
<html lang="${escapeHtml(language())}" dir="${direction}">
<head>
<meta charset="utf-8">
<title>${escapeHtml(title)}</title>
<style>
  @page{size:A4;margin:18mm}
  *{box-sizing:border-box}
  body{margin:0;font-family:Arial,Helvetica,sans-serif;color:#111;background:#fff;font-size:11pt;line-height:1.45}
  header{padding-bottom:14px;margin-bottom:18px;border-bottom:1px solid #ddd}
  h1{margin:0;font-size:17pt;letter-spacing:.04em}
  header p{margin:5px 0 0;color:#666;font-size:9pt}
  .message{margin:0 0 14px;padding:10px 12px;border:1px solid #ddd;border-radius:10px;break-inside:avoid}
  .message.user{margin-inline-start:15%;background:#f7f7f7}
  .message.assistant{margin-inline-end:15%}
  .meta{display:flex;justify-content:space-between;gap:12px;margin-bottom:6px;color:#666;font-size:8pt}
  .meta strong{color:#111;font-size:8.5pt}
  .text{white-space:normal;overflow-wrap:anywhere}
  footer{margin-top:22px;padding-top:10px;border-top:1px solid #ddd;color:#777;font-size:8pt;text-align:center;letter-spacing:.08em}
</style>
</head>
<body>
<header>
  <h1>MICROLABSX AI</h1>
  <p>${escapeHtml(department?.label || "MICRORETAILX")} · ${escapeHtml(formatDate(startedAt))}</p>
</header>
${rows}
<footer>MICROLABSX AI BY MICROSTUDIOX</footer>
<script>window.addEventListener('load',()=>setTimeout(()=>window.print(),180),{once:true});<\/script>
</body>
</html>`);
    popup.document.close();
    popup.focus();
    return true;
  }

  sessions.downloadPdf = downloadPdf;

  function enforceBrand() {
    if (footnote) footnote.textContent = "MICROLABSX AI BY MICROSTUDIOX";
  }

  window.addEventListener("mx:garfix-session-change", renderLifecycle);

  new MutationObserver(() => {
    renderLifecycle();
    decorateAll();
    setTimeout(enforceBrand, 0);
  }).observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["lang", "dir"]
  });

  decorateAll();
  renderLifecycle();
  enforceBrand();
})();


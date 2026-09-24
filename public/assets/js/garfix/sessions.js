(function () {
  "use strict";

  const CURRENT_KEY = "mx_garfix_current_session_v1";
  const ARCHIVE_KEY = "mx_garfix_saved_sessions_v1";
  const MAX_ARCHIVE = 20;

  const departments = window.__mxGarfixDepartments;
  const core = window.__garfix?.conversation;
  const root = document.getElementById("mx-garfix");
  const body = document.getElementById("mx-garfix-body");
  const messages = document.getElementById("mx-garfix-messages");
  const input = document.getElementById("mx-garfix-input");
  const composer = root?.querySelector(".mx-garfix-composer");

  if (!departments || !core || !root || !body || !messages || !input || !composer) return;

  let currentSession = readJson(CURRENT_KEY, null);
  let viewingArchive = null;
  let saveTimer = null;

  function readJson(key, fallback) {
    try {
      const parsed = JSON.parse(localStorage.getItem(key) || "null");
      return parsed ?? fallback;
    } catch (_) {
      return fallback;
    }
  }

  function writeJson(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (_) {}
  }

  function removeKey(key) {
    try { localStorage.removeItem(key); } catch (_) {}
  }

  function archive() {
    const value = readJson(ARCHIVE_KEY, []);
    return Array.isArray(value) ? value : [];
  }

  function saveArchive(items) {
    writeJson(ARCHIVE_KEY, items.slice(0, MAX_ARCHIVE));
  }

  function id() {
    if (crypto?.randomUUID) return crypto.randomUUID();
    return `gx-${Date.now()}-${Math.random().toString(16).slice(2)}`;
  }

  function language() {
    const raw = String(document.documentElement.lang || "en")
      .toLowerCase()
      .split("-")[0];
    return ["en", "es", "ca", "eu", "zh", "hi", "ar", "ru", "fr", "ja"].includes(raw) ? raw : "en";
  }

  function copy(key) {
    const table = {
      en: {
        choose: "Choose a department",
        chooseHint: "MICROLABSX AI will route the conversation before it starts.",
        end: "End chat",
        newChat: "New chat",
        saved: "Saved chats",
        empty: "No saved chats yet",
        started: "Started",
        ended: "Ended",
        open: "Open"
      },
      es: {
        choose: "Elige un departamento",
        chooseHint: "MICROLABSX AI encaminará la conversación antes de empezar.",
        end: "Finalizar chat",
        newChat: "Nuevo chat",
        saved: "Chats guardados",
        empty: "Aún no hay chats guardados",
        started: "Inicio",
        ended: "Finalizado",
        open: "Abrir"
      },
      ar: {
        choose: "اختر القسم",
        chooseHint: "سيوجّه MICROLABSX AI المحادثة إلى القسم المناسب قبل أن تبدأ.",
        end: "إنهاء المحادثة",
        newChat: "محادثة جديدة",
        saved: "المحادثات المحفوظة",
        empty: "لا توجد محادثات محفوظة بعد",
        started: "بدأت",
        ended: "انتهت",
        open: "فتح"
      },
      ca: {
        choose: "Tria un departament",
        chooseHint: "MICROLABSX AI dirigirà la conversa abans que comenci.",
        end: "Finalitza el xat",
        newChat: "Xat nou",
        saved: "Xats desats",
        empty: "Encara no hi ha xats desats",
        started: "Inici",
        ended: "Finalitzat",
        open: "Obre"
      },
      eu: {
        choose: "Aukeratu sail bat",
        chooseHint: "MICROLABSX AIk elkarrizketa sail egokira bideratuko du hasi aurretik.",
        end: "Amaitu txata",
        newChat: "Txat berria",
        saved: "Gordetako txatak",
        empty: "Oraindik ez dago gordetako txatik",
        started: "Hasiera",
        ended: "Amaituta",
        open: "Ireki"
      },
      zh: {
        choose: "选择部门",
        chooseHint: "MICROLABSX AI 会在对话开始前将其分配到合适的部门。",
        end: "结束聊天",
        newChat: "新聊天",
        saved: "已保存的聊天",
        empty: "暂无已保存的聊天",
        started: "开始",
        ended: "结束",
        open: "打开"
      },
      hi: {
        choose: "एक विभाग चुनें",
        chooseHint: "MICROLABSX AI बातचीत शुरू होने से पहले उसे उचित विभाग में भेजेगा।",
        end: "चैट समाप्त करें",
        newChat: "नई चैट",
        saved: "सहेजी गई चैट",
        empty: "अभी कोई सहेजी गई चैट नहीं है",
        started: "शुरू",
        ended: "समाप्त",
        open: "खोलें"
      },
      ru: {
        choose: "Выберите отдел",
        chooseHint: "MICROLABSX AI направит разговор в нужный отдел до его начала.",
        end: "Завершить чат",
        newChat: "Новый чат",
        saved: "Сохранённые чаты",
        empty: "Сохранённых чатов пока нет",
        started: "Начало",
        ended: "Завершено",
        open: "Открыть"
      },
      fr: {
        choose: "Choisissez un service",
        chooseHint: "MICROLABSX AI orientera la conversation avant son démarrage.",
        end: "Terminer le chat",
        newChat: "Nouveau chat",
        saved: "Chats enregistrés",
        empty: "Aucun chat enregistré pour le moment",
        started: "Démarré",
        ended: "Terminé",
        open: "Ouvrir"
      },
      ja: {
        choose: "部門を選択",
        chooseHint: "MICROLABSX AI が会話の開始前に適切な部門へ振り分けます。",
        end: "チャットを終了",
        newChat: "新しいチャット",
        saved: "保存済みチャット",
        empty: "保存済みチャットはまだありません",
        started: "開始",
        ended: "終了",
        open: "開く"
      }
    };

    const active = language();
    return table[active]?.[key] || table.en[key] || key;
  }

  function locale() {
    return ({ en: "en-GB", es: "es-ES", ca: "ca-ES", eu: "eu-ES", zh: "zh-CN", hi: "hi-IN", ar: "ar-MA", ru: "ru-RU", fr: "fr-FR", ja: "ja-JP" })[language()] || "en-GB";
  }

  function formatDate(iso) {
    const date = new Date(iso);
    if (!Number.isFinite(date.getTime())) return "";

    return new Intl.DateTimeFormat(locale(), {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    }).format(date);
  }

  const router = document.createElement("section");
  router.className = "mx-garfix-router";
  router.id = "mx-garfix-router";

  const sessionBar = document.createElement("section");
  sessionBar.className = "mx-garfix-sessionbar";
  sessionBar.id = "mx-garfix-sessionbar";

  const quickPrompts = document.createElement("section");
  quickPrompts.className = "mx-garfix-quick-prompts";
  quickPrompts.id = "mx-garfix-quick-prompts";

  const sessionFooter = document.createElement("section");
  sessionFooter.className = "mx-garfix-session-footer";
  sessionFooter.id = "mx-garfix-session-footer";
  sessionFooter.hidden = true;

  body.insertBefore(router, messages);
  body.insertBefore(sessionBar, messages);
  body.insertBefore(quickPrompts, messages);
  composer.insertBefore(sessionFooter, composer.firstChild);

  function renderRouter() {
    router.replaceChildren();

    const intro = document.createElement("div");
    intro.className = "mx-garfix-router-copy";

    const title = document.createElement("strong");
    title.dir = "auto";
    title.textContent = copy("choose");

    const hint = document.createElement("span");
    hint.dir = "auto";
    hint.textContent = copy("chooseHint");

    intro.append(title, hint);

    const grid = document.createElement("div");
    grid.className = "mx-garfix-departments";

    for (const item of departments.list()) {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "mx-garfix-department";
      button.dataset.department = item.id;

      const label = document.createElement("strong");
      label.dir = "auto";
      label.textContent = item.label;

      const description = document.createElement("span");
      description.dir = "auto";
      description.textContent = item.description;

      button.append(label, description);
      button.addEventListener("click", () => start(item.id));
      grid.appendChild(button);
    }

    router.append(intro, grid);
  }

  function renderSessionBar() {
    if (currentSession) {
      const item = departments.get(currentSession.department);
      sessionBar.innerHTML = `
        <div class="mx-garfix-session-meta">
          <strong dir="auto"></strong>
          <span dir="auto"></span>
        </div>`;
      sessionBar.querySelector("strong").textContent = item.label;
      sessionBar.querySelector("span").textContent = `${copy("started")} · ${formatDate(currentSession.startedAt)}`;
      return;
    }

    if (viewingArchive) {
      const item = departments.get(viewingArchive.department);
      sessionBar.innerHTML = `
        <div class="mx-garfix-session-meta">
          <strong dir="auto"></strong>
          <span dir="auto"></span>
        </div>
        <button type="button" class="mx-garfix-session-action"></button>`;
      sessionBar.querySelector("strong").textContent = item.label;
      sessionBar.querySelector("span").textContent = `${copy("ended")} · ${formatDate(viewingArchive.endedAt || viewingArchive.startedAt)}`;
      const button = sessionBar.querySelector("button");
      button.textContent = copy("newChat");
      button.addEventListener("click", newChat);
      return;
    }

    sessionBar.replaceChildren();
  }

  function renderSessionFooter() {
    if (!currentSession) {
      sessionFooter.hidden = true;
      sessionFooter.replaceChildren();
      return;
    }

    sessionFooter.hidden = false;
    sessionFooter.innerHTML = `
      <span class="mx-garfix-session-footer-time" dir="auto"></span>
      <button type="button" class="mx-garfix-session-end"></button>`;

    sessionFooter.querySelector("span").textContent = `${copy("started")} · ${formatDate(currentSession.startedAt)}`;
    const button = sessionFooter.querySelector("button");
    button.textContent = copy("end");
    button.addEventListener("click", end);
  }

  function renderPrompts() {
    quickPrompts.replaceChildren();
    if (!currentSession) return;

    const hasUserMessage = core.messages().some(item => item.role === "user");
    if (hasUserMessage) return;

    for (const prompt of departments.starters(currentSession.department)) {
      const button = document.createElement("button");
      button.type = "button";
      button.dir = "auto";
      button.textContent = prompt;
      button.addEventListener("click", () => {
        input.value = prompt;
        input.dispatchEvent(new Event("input", { bubbles: true }));
        input.focus({ preventScroll: true });
      });
      quickPrompts.appendChild(button);
    }
  }

  function renderState() {
    root.dataset.sessionActive = currentSession ? "1" : "0";
    root.dataset.sessionView = currentSession
      ? "active"
      : viewingArchive
        ? "archive"
        : "router";

    router.hidden = Boolean(currentSession || viewingArchive);
    sessionBar.hidden = !(currentSession || viewingArchive);
    renderSessionBar();
    renderSessionFooter();
    renderPrompts();
    renderSavedChats();

    window.dispatchEvent(new CustomEvent("mx:garfix-session-change", {
      detail: {
        active: Boolean(currentSession),
        viewingArchive: Boolean(viewingArchive)
      }
    }));
  }

  function snapshotCurrent() {
    if (!currentSession) return;
    currentSession = {
      ...currentSession,
      messages: core.messages()
    };
    writeJson(CURRENT_KEY, currentSession);
  }

  function scheduleSave() {
    if (!currentSession) return;
    clearTimeout(saveTimer);
    saveTimer = setTimeout(() => {
      snapshotCurrent();
      renderPrompts();
    }, 250);
  }

  function start(department) {
    const item = departments.get(department);
    viewingArchive = null;
    currentSession = {
      id: id(),
      department: item.id,
      startedAt: new Date().toISOString(),
      endedAt: null,
      messages: []
    };

    writeJson(CURRENT_KEY, currentSession);
    core.reset();
    renderState();
    input.focus({ preventScroll: true });
    return true;
  }

  function end() {
    if (!currentSession) return false;

    snapshotCurrent();

    const finished = {
      ...currentSession,
      endedAt: new Date().toISOString()
    };

    const items = archive().filter(item => item.id !== finished.id);
    items.unshift(finished);
    saveArchive(items);

    viewingArchive = finished;
    currentSession = null;
    removeKey(CURRENT_KEY);
    renderState();
    return true;
  }

  function newChat() {
    viewingArchive = null;
    currentSession = null;
    removeKey(CURRENT_KEY);
    core.restore([]);
    renderState();
    return true;
  }

  function openSaved(sessionId) {
    const saved = archive().find(item => item.id === sessionId);
    if (!saved) return false;

    viewingArchive = saved;
    currentSession = null;
    removeKey(CURRENT_KEY);
    core.restore(saved.messages || []);
    renderState();
    window.__mxGarfixSettings?.close?.();
    return true;
  }

  function exportSession() {
    if (currentSession) {
      snapshotCurrent();
      return currentSession;
    }
    return viewingArchive;
  }

  function canDownload() {
    return Boolean(currentSession || viewingArchive);
  }

  function download() {
    const session = exportSession();
    if (!session) return false;

    const department = departments.get(session.department);
    const lines = [
      "MICROLABSX AI",
      `${department.label}`,
      `${copy("started")}: ${formatDate(session.startedAt)}`,
      session.endedAt ? `${copy("ended")}: ${formatDate(session.endedAt)}` : "",
      ""
    ].filter(Boolean);

    for (const message of session.messages || []) {
      const role = message.role === "assistant"
        ? "MICROLABSX AI"
        : message.role === "user"
          ? "USER"
          : "SYSTEM";

      lines.push(`[${formatDate(message.timestamp)}] ${role}`);
      lines.push(String(message.text || "").trim());
      lines.push("");
    }

    const blob = new Blob(["\uFEFF" + lines.join("\n")], {
      type: "text/plain;charset=utf-8"
    });

    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    const stamp = new Date(session.startedAt || Date.now())
      .toISOString()
      .replace(/[:T]/g, "-")
      .slice(0, 16);

    anchor.href = url;
    anchor.download = `garfix-${session.department}-${stamp}.txt`;
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    return true;
  }

  function renderSavedChats() {
    const slot = document.getElementById("mx-garfix-session-settings-slot");
    if (!slot) return;

    const items = archive();
    slot.innerHTML = `
      <div class="mx-garfix-saved-head"><strong dir="auto"></strong></div>
      <div class="mx-garfix-saved-list"></div>`;
    slot.querySelector(".mx-garfix-saved-head strong").textContent = copy("saved");

    const list = slot.querySelector(".mx-garfix-saved-list");

    if (!items.length) {
      const empty = document.createElement("p");
      empty.className = "mx-garfix-saved-empty";
      empty.dir = "auto";
      empty.textContent = copy("empty");
      list.appendChild(empty);
      return;
    }

    for (const item of items) {
      const department = departments.get(item.department);
      const row = document.createElement("button");
      row.type = "button";
      row.className = "mx-garfix-saved-row";

      const text = document.createElement("span");
      const strong = document.createElement("strong");
      strong.dir = "auto";
      strong.textContent = department.label;
      const small = document.createElement("small");
      small.dir = "auto";
      small.textContent = formatDate(item.startedAt);
      text.append(strong, small);

      const action = document.createElement("b");
      action.dir = "auto";
      action.textContent = copy("open");

      row.append(text, action);
      row.addEventListener("click", () => openSaved(item.id));
      list.appendChild(row);
    }
  }

  const observer = new MutationObserver(scheduleSave);
  observer.observe(messages, {
    childList: true,
    subtree: true,
    characterData: true
  });

  window.addEventListener("mx:garfix-settings-open", renderSavedChats);

  new MutationObserver(() => {
    renderRouter();
    renderState();
  }).observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["lang", "dir"]
  });

  window.__mxGarfixSessions = {
    current: () => currentSession ? { ...currentSession } : null,
    start,
    end,
    newChat,
    saved: () => archive().map(item => ({ ...item })),
    openSaved,
    canDownload,
    download
  };

  renderRouter();

  if (currentSession && Array.isArray(currentSession.messages) && currentSession.messages.length) {
    core.restore(currentSession.messages);
  }

  renderState();
})();

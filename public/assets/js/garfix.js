(function () {
  "use strict";

  const API =
    "https://api.microretailx.com/v1/chat";

  const VISION_API =
    "https://api.microretailx.com/v1/vision";

  const LOCK_KEY =
    "mx_garfix_lock_v1";

  const SUPPORTED_LANGS =
    new Set([
      "ca",
      "es",
      "en",
      "fr",
      "ar",
      "zh",
      "hi",
      "ja",
      "ru",
      "eu"
    ]);


  const I18N = window.__mxGarfixI18N;

  if (!I18N || typeof I18N !== "object") {
    throw new Error("GARFIX translations unavailable");
  }


  const state = {
    open: false,
    sending: false,
    lock: null,
    timer: null,
    welcomed: false,
    thinkingNode: null,
    image: null,
    history: []
  };


  function currentLang() {
    const raw =
      String(
        document.documentElement.lang ||
        ""
      )
        .trim()
        .toLowerCase()
        .split("-")[0];

    return SUPPORTED_LANGS.has(raw)
      ? raw
      : "en";
  }


  function tr(key) {
    const lang =
      currentLang();

    return (
      I18N[lang]?.[key] ??
      I18N.en[key] ??
      key
    );
  }


  function createUI() {
    const root =
      document.createElement("div");

    root.className =
      "mx-garfix";

    root.id =
      "mx-garfix";

    root.dataset.open =
      "0";

    root.dataset.locked =
      "0";


    root.innerHTML = `
      <section
        class="mx-garfix-panel"
        id="mx-garfix-panel"
        role="dialog"
        aria-modal="false"
        aria-label="Garfix"
      >
        <header class="mx-garfix-head">
          <div class="mx-garfix-identity">
            <div
              class="mx-garfix-mark"
              aria-hidden="true"
            >
              <img
                src="/assets/images/garfix/garfix-labs.svg"
                alt=""
              />
            </div>

            <div class="mx-garfix-name">
              <strong>GARFIX · LABS</strong>
              <span
                id="mx-garfix-subtitle"
              ></span>
            </div>
          </div>

          <button
            class="mx-garfix-close"
            id="mx-garfix-close"
            type="button"
            aria-label="Close"
          >×</button>
        </header>

        <div
          class="mx-garfix-body"
          id="mx-garfix-body"
          aria-live="polite"
          aria-relevant="additions text"
        >
          <div
            class="mx-garfix-lock"
            id="mx-garfix-lock"
            role="status"
          >
            <div
              class="mx-garfix-lock-top"
            >
              <span
                class="mx-garfix-lock-label"
                id="mx-garfix-lock-label"
              ></span>

              <span
                class="mx-garfix-lock-level"
                id="mx-garfix-lock-level"
              ></span>
            </div>

            <p
              class="mx-garfix-lock-message"
              id="mx-garfix-lock-message"
            ></p>

            <div
              class="mx-garfix-lock-return"
              id="mx-garfix-lock-return"
            ></div>

            <div
              class="mx-garfix-lock-time"
              id="mx-garfix-lock-time"
              dir="ltr"
              aria-live="off"
            >00:00</div>

            <div
              class="mx-garfix-lock-track"
              aria-hidden="true"
            >
              <div
                class="mx-garfix-lock-progress"
                id="mx-garfix-lock-progress"
              ></div>
            </div>
          </div>

          <div
            id="mx-garfix-messages"
          ></div>
        </div>

        <footer
          class="mx-garfix-composer"
        >
          <div
            class="mx-garfix-attachment"
            id="mx-garfix-attachment"
            hidden
          >
            <img
              class="mx-garfix-attachment-image"
              id="mx-garfix-attachment-image"
              alt=""
            />

            <div class="mx-garfix-attachment-meta">
              <strong
                id="mx-garfix-attachment-name"
              ></strong>

              <span
                id="mx-garfix-attachment-size"
              ></span>
            </div>

            <button
              class="mx-garfix-attachment-remove"
              id="mx-garfix-attachment-remove"
              type="button"
              aria-label="Remove image"
            >×</button>
          </div>

          <form
            class="mx-garfix-form"
            id="mx-garfix-form"
          >
            <input
              id="mx-garfix-file"
              type="file"
              accept="image/jpeg,image/png,image/webp"
              hidden
            />

            <button
              class="mx-garfix-attach"
              id="mx-garfix-attach"
              type="button"
              aria-label="Attach image"
              title="Attach image"
            >📎</button>

            <textarea
              class="mx-garfix-input"
              id="mx-garfix-input"
              rows="1"
              maxlength="2000"
              autocomplete="off"
              spellcheck="true"
            ></textarea>

            <button
              class="mx-garfix-send"
              id="mx-garfix-send"
              type="submit"
              aria-label="Send"
            >↑</button>
          </form>

          <div
            class="mx-garfix-footnote"
            id="mx-garfix-footnote"
          ></div>
        </footer>
      </section>

      <button
        class="mx-garfix-launcher"
        id="mx-garfix-launcher"
        type="button"
        aria-expanded="false"
        aria-controls="mx-garfix-panel"
      >
        <span
          class="mx-garfix-launcher-dot"
          aria-hidden="true"
        ></span>

        <span>GARFIX</span>

        <span
          class="mx-garfix-launcher-time"
          id="mx-garfix-launcher-time"
          dir="ltr"
        ></span>
      </button>
    `;

    document.body.appendChild(
      root
    );

    return root;
  }


  const root =
    createUI();

  const launcher =
    document.getElementById(
      "mx-garfix-launcher"
    );

  const launcherTime =
    document.getElementById(
      "mx-garfix-launcher-time"
    );

  const closeButton =
    document.getElementById(
      "mx-garfix-close"
    );

  const subtitle =
    document.getElementById(
      "mx-garfix-subtitle"
    );

  const body =
    document.getElementById(
      "mx-garfix-body"
    );

  const messages =
    document.getElementById(
      "mx-garfix-messages"
    );

  const form =
    document.getElementById(
      "mx-garfix-form"
    );

  const input =
    document.getElementById(
      "mx-garfix-input"
    );

  const attachButton =
    document.getElementById(
      "mx-garfix-attach"
    );

  const fileInput =
    document.getElementById(
      "mx-garfix-file"
    );

  const attachment =
    document.getElementById(
      "mx-garfix-attachment"
    );

  const attachmentImage =
    document.getElementById(
      "mx-garfix-attachment-image"
    );

  const attachmentName =
    document.getElementById(
      "mx-garfix-attachment-name"
    );

  const attachmentSize =
    document.getElementById(
      "mx-garfix-attachment-size"
    );

  const attachmentRemove =
    document.getElementById(
      "mx-garfix-attachment-remove"
    );

  const sendButton =
    document.getElementById(
      "mx-garfix-send"
    );

  const footnote =
    document.getElementById(
      "mx-garfix-footnote"
    );

  const lockLabel =
    document.getElementById(
      "mx-garfix-lock-label"
    );

  const lockLevel =
    document.getElementById(
      "mx-garfix-lock-level"
    );

  const lockMessage =
    document.getElementById(
      "mx-garfix-lock-message"
    );

  const lockReturn =
    document.getElementById(
      "mx-garfix-lock-return"
    );

  const lockTime =
    document.getElementById(
      "mx-garfix-lock-time"
    );

  const lockProgress =
    document.getElementById(
      "mx-garfix-lock-progress"
    );


  function syncLanguage() {
    subtitle.textContent =
      tr("subtitle");

    launcher.setAttribute(
      "aria-label",
      tr("open")
    );

    closeButton.setAttribute(
      "aria-label",
      tr("close")
    );

    sendButton.setAttribute(
      "aria-label",
      tr("send")
    );

    footnote.textContent =
      tr("footnote");

    input.placeholder =
      state.lock
        ? tr(
            "blockedPlaceholder"
          )
        : tr(
            "placeholder"
          );

    if (state.lock) {
      renderLockStatic();
    }
  }


  function openPanel() {
    state.open =
      true;

    root.dataset.open =
      "1";
    document.body.classList.add("mx-garfix-open");

    launcher.setAttribute(
      "aria-expanded",
      "true"
    );

    const sessionRuntime =
      window.__mxGarfixSessions;

    const activeSession =
      sessionRuntime?.current?.();

    if (
      !state.welcomed &&
      (!sessionRuntime || activeSession)
    ) {
      appendMessage(
        "assistant",
        tr("welcome")
      );

      state.welcomed =
        true;
    }

    setTimeout(
      () => {
        if (!state.lock) {
          input.focus({
            preventScroll:
              true
          });
        }
      },
      100
    );
  }


  function closePanel() {
    state.open =
      false;

    root.dataset.open =
      "0";
    document.body.classList.remove("mx-garfix-open");

    launcher.setAttribute(
      "aria-expanded",
      "false"
    );

    launcher.focus({
      preventScroll:
        true
    });
  }


  function togglePanel() {
    state.open
      ? closePanel()
      : openPanel();
  }


  function appendMessage(
    role,
    text,
    timestamp = null
  ) {
    const node =
      document.createElement(
        "div"
      );

    node.className =
      "mx-garfix-message";

    node.dataset.role =
      role;

    const parsedTime =
      timestamp
        ? new Date(timestamp)
        : new Date();

    const safeTime =
      Number.isFinite(parsedTime.getTime())
        ? parsedTime
        : new Date();

    const iso =
      safeTime.toISOString();

    node.dataset.timestamp =
      iso;

    const content =
      document.createElement(
        "span"
      );

    content.className =
      "mx-garfix-message-text";

    content.textContent =
      String(
        text ?? ""
      );

    const meta =
      document.createElement(
        "span"
      );

    meta.className =
      "mx-garfix-message-meta";

    const time =
      document.createElement(
        "time"
      );

    time.className =
      "mx-garfix-message-time";

    time.dateTime =
      iso;

    time.textContent =
      new Intl.DateTimeFormat(
        currentLang(),
        {
          hour: "2-digit",
          minute: "2-digit"
        }
      ).format(safeTime);

    meta.appendChild(time);
    node.append(content, meta);

    messages.appendChild(
      node
    );

    requestAnimationFrame(
      scrollToBottom
    );

    return node;
  }


  function appendThinking() {
    removeThinking();

    const node =
      document.createElement(
        "div"
      );

    node.className =
      "mx-garfix-message";

    node.dataset.role =
      "assistant";

    const dots =
      document.createElement(
        "span"
      );

    dots.className =
      "mx-garfix-thinking";

    for (
      let i = 0;
      i < 3;
      i += 1
    ) {
      dots.appendChild(
        document.createElement(
          "i"
        )
      );
    }

    node.appendChild(
      dots
    );

    messages.appendChild(
      node
    );

    state.thinkingNode =
      node;

    requestAnimationFrame(
      scrollToBottom
    );
  }


  function removeThinking() {
    if (
      state.thinkingNode
    ) {
      state.thinkingNode.remove();

      state.thinkingNode =
        null;
    }
  }


  function scrollToBottom() {
    body.scrollTop =
      body.scrollHeight;
  }


  function autoSizeInput() {
    input.style.height =
      "auto";

    input.style.height =
      Math.min(
        input.scrollHeight,
        120
      ) + "px";
  }


  function setSending(
    sending
  ) {
    state.sending =
      Boolean(
        sending
      );

    const locked =
      Boolean(
        state.lock
      );

    input.disabled =
      locked;

    sendButton.disabled =
      state.sending ||
      locked;

    attachButton.disabled =
      state.sending ||
      locked;

    attachmentRemove.disabled =
      state.sending ||
      locked;

    if (
      state.sending &&
      !locked &&
      state.open
    ) {
      requestAnimationFrame(
        () =>
          input.focus({
            preventScroll:
              true
          })
      );
    }
  }


  function parseStoredLock() {
    try {
      const raw =
        localStorage.getItem(
          LOCK_KEY
        );

      if (!raw) {
        return null;
      }

      const parsed =
        JSON.parse(
          raw
        );

      if (
        !parsed ||
        typeof parsed !==
          "object"
      ) {
        return null;
      }

      const until =
        Number(
          parsed.until
        );

      if (
        !Number.isFinite(
          until
        ) ||
        until <= Date.now()
      ) {
        localStorage.removeItem(
          LOCK_KEY
        );

        return null;
      }

      return parsed;

    } catch (_) {
      return null;
    }
  }


  function storeLock(
    lock
  ) {
    try {
      localStorage.setItem(
        LOCK_KEY,
        JSON.stringify(
          lock
        )
      );
    } catch (_) {
      // Security UX only.
      // Server remains authoritative.
    }
  }


  function clearStoredLock() {
    try {
      localStorage.removeItem(
        LOCK_KEY
      );
    } catch (_) {}
  }


  function activateLock(
    lock,
    persist = true
  ) {
    stopTimer();

    state.lock =
      lock;

    root.dataset.locked =
      "1";

    input.disabled =
      true;

    sendButton.disabled =
      true;

    input.placeholder =
      tr(
        "blockedPlaceholder"
      );

    if (persist) {
      storeLock(
        lock
      );
    }

    renderLockStatic();

    tickLock();

    requestAnimationFrame(
      scrollToBottom
    );
  }


  function renderLockStatic() {
    if (!state.lock) {
      return;
    }

    const daily =
      state.lock.type ===
      "daily";

    lockLabel.textContent =
      daily
        ? tr("finance")
        : tr("protection");

    lockMessage.textContent =
      daily
        ? tr("dailyMessage")
        : tr("rateMessage");

    lockReturn.textContent =
      tr("returns");

    const level =
      Number(
        state.lock.level
      ) || 0;

    lockLevel.textContent =
      daily
        ? "FINANCE"
        : `${tr("level")} ${level}`;
  }


  function tickLock() {
    stopTimer();

    if (!state.lock) {
      return;
    }

    const now =
      Date.now();

    const remainingMs =
      state.lock.until -
      now;

    if (
      remainingMs <= 0
    ) {
      finishLock();

      return;
    }

    const remainingSeconds =
      Math.max(
        1,
        Math.ceil(
          remainingMs /
          1000
        )
      );

    const formatted =
      formatDuration(
        remainingSeconds
      );

    lockTime.textContent =
      formatted;

    launcherTime.textContent =
      formatted;

    const total =
      Math.max(
        1,
        Number(
          state.lock.duration
        ) || remainingSeconds
      );

    const progress =
      Math.max(
        0,
        Math.min(
          1,
          remainingSeconds /
          total
        )
      );

    lockProgress.style.transform =
      `scaleX(${progress})`;

    const delay =
      Math.max(
        120,
        1000 -
        (
          Date.now() %
          1000
        ) +
        20
      );

    state.timer =
      setTimeout(
        tickLock,
        delay
      );
  }


  function finishLock() {
    stopTimer();

    state.lock =
      null;

    root.dataset.locked =
      "0";

    launcherTime.textContent =
      "";

    lockProgress.style.transform =
      "scaleX(0)";

    clearStoredLock();

    input.disabled =
      false;

    sendButton.disabled =
      false;

    input.placeholder =
      tr(
        "placeholder"
      );

    if (state.open) {
      appendMessage(
        "system",
        tr("back")
      );

      input.focus({
        preventScroll:
          true
      });
    }
  }


  function stopTimer() {
    if (state.timer) {
      clearTimeout(
        state.timer
      );

      state.timer =
        null;
    }
  }


  function formatDuration(
    seconds
  ) {
    const safe =
      Math.max(
        0,
        Math.floor(
          seconds
        )
      );

    const h =
      Math.floor(
        safe /
        3600
      );

    const m =
      Math.floor(
        (
          safe %
          3600
        ) /
        60
      );

    const s =
      safe %
      60;

    const locale =
      currentLang();

    const two =
      new Intl.NumberFormat(
        locale,
        {
          minimumIntegerDigits:
            2,

          useGrouping:
            false
        }
      );

    if (h > 0) {
      const hour =
        new Intl.NumberFormat(
          locale,
          {
            useGrouping:
              false
          }
        ).format(h);

      return (
        `${hour}:` +
        `${two.format(m)}:` +
        `${two.format(s)}`
      );
    }

    return (
      `${two.format(m)}:` +
      `${two.format(s)}`
    );
  }


  function lockFromRateLimit(
    error
  ) {
    const retryAfter =
      Math.max(
        1,
        Number(
          error.retryAfter
        ) || 60
      );

    const parsedUntil =
      Date.parse(
        error.blockedUntil ||
        ""
      );

    const until =
      Number.isFinite(
        parsedUntil
      )
        ? parsedUntil
        : Date.now() +
          retryAfter *
          1000;

    return {
      type:
        "rate",

      until,

      startedAt:
        Date.now(),

      duration:
        retryAfter,

      level:
        Number(
          error.cooldownLevel
        ) || 1
    };
  }


  function lockFromDailyLimit(
    error
  ) {
    const retryAfter =
      Math.max(
        1,
        Number(
          error.retryAfter
        ) || 60
      );

    const parsedUntil =
      Date.parse(
        error.resetAt ||
        ""
      );

    const until =
      Number.isFinite(
        parsedUntil
      )
        ? parsedUntil
        : Date.now() +
          retryAfter *
          1000;

    return {
      type:
        "daily",

      until,

      startedAt:
        Date.now(),

      duration:
        retryAfter,

      level:
        0
    };
  }



  const IMAGE_TARGET_BYTES =
    3.6 * 1024 * 1024;

  const IMAGE_SOURCE_MAX_BYTES =
    25 * 1024 * 1024;

  const IMAGE_MAX_DIMENSION =
    1920;

  const IMAGE_TYPES =
    new Set([
      "image/jpeg",
      "image/png",
      "image/webp"
    ]);


  function readBlobAsDataUrl(
    blob
  ) {
    return new Promise(
      (resolve, reject) => {
        const reader =
          new FileReader();

        reader.onload =
          () =>
            resolve(
              String(
                reader.result || ""
              )
            );

        reader.onerror =
          () =>
            reject(
              new Error(
                "image_read_failed"
              )
            );

        reader.readAsDataURL(
          blob
        );
      }
    );
  }


  function canvasToBlob(
    canvas,
    type,
    quality
  ) {
    return new Promise(
      resolve => {
        canvas.toBlob(
          resolve,
          type,
          quality
        );
      }
    );
  }


  async function compressImage(
    file
  ) {
    const objectUrl =
      URL.createObjectURL(
        file
      );

    try {
      const image =
        await new Promise(
          (resolve, reject) => {
            const node =
              new Image();

            node.onload =
              () =>
                resolve(node);

            node.onerror =
              () =>
                reject(
                  new Error(
                    "image_decode_failed"
                  )
                );

            node.src =
              objectUrl;
          }
        );


      const largest =
        Math.max(
          image.naturalWidth,
          image.naturalHeight
        );

      const scale =
        Math.min(
          1,
          IMAGE_MAX_DIMENSION /
            largest
        );

      const width =
        Math.max(
          1,
          Math.round(
            image.naturalWidth *
            scale
          )
        );

      const height =
        Math.max(
          1,
          Math.round(
            image.naturalHeight *
            scale
          )
        );


      const canvas =
        document.createElement(
          "canvas"
        );

      canvas.width =
        width;

      canvas.height =
        height;


      const context =
        canvas.getContext(
          "2d",
          {
            alpha: true
          }
        );

      if (!context) {
        throw new Error(
          "image_canvas_failed"
        );
      }


      context.drawImage(
        image,
        0,
        0,
        width,
        height
      );


      let blob =
        await canvasToBlob(
          canvas,
          "image/webp",
          0.88
        );


      if (
        blob &&
        blob.size >
          IMAGE_TARGET_BYTES
      ) {
        blob =
          await canvasToBlob(
            canvas,
            "image/webp",
            0.68
          );
      }


      if (
        !blob ||
        blob.size >
          IMAGE_TARGET_BYTES
      ) {
        throw new Error(
          "image_too_large"
        );
      }


      return blob;

    } finally {
      URL.revokeObjectURL(
        objectUrl
      );
    }
  }


  async function prepareImage(
    file
  ) {
    if (
      !file ||
      !IMAGE_TYPES.has(
        file.type
      )
    ) {
      throw new Error(
        "unsupported_image"
      );
    }


    if (
      file.size >
      IMAGE_SOURCE_MAX_BYTES
    ) {
      throw new Error(
        "image_too_large"
      );
    }


    const blob =
      file.size >
        IMAGE_TARGET_BYTES
        ? await compressImage(
            file
          )
        : file;


    const dataUrl =
      await readBlobAsDataUrl(
        blob
      );


    const comma =
      dataUrl.indexOf(
        ","
      );

    if (comma < 0) {
      throw new Error(
        "invalid_image"
      );
    }


    return {
      name:
        file.name ||
        "image",

      mime:
        blob.type ||
        file.type,

      size:
        blob.size,

      data:
        dataUrl.slice(
          comma + 1
        ),

      preview:
        dataUrl
    };
  }


  function clearImage() {
    state.image =
      null;

    attachment.hidden =
      true;

    attachmentImage.removeAttribute(
      "src"
    );

    attachmentName.textContent =
      "";

    attachmentSize.textContent =
      "";

    fileInput.value =
      "";
  }


  function showImage(
    image
  ) {
    state.image =
      image;

    attachmentImage.src =
      image.preview;

    attachmentName.textContent =
      image.name;

    attachmentSize.textContent =
      (
        image.size /
        1024 /
        1024
      ).toFixed(2) +
      " MB";

    attachment.hidden =
      false;
  }


  async function selectImage() {
    const file =
      fileInput.files?.[0];

    if (!file) {
      return;
    }


    attachButton.disabled =
      true;


    try {
      const image =
        await prepareImage(
          file
        );

      showImage(
        image
      );

    } catch (_) {
      clearImage();

      appendMessage(
        "system",
        currentLang() === "es"
          ? "No he podido adjuntar esa imagen. Usa JPEG, PNG o WebP."
          : "I couldn't attach that image. Use JPEG, PNG or WebP."
      );

    } finally {
      if (
        !state.sending &&
        !state.lock
      ) {
        attachButton.disabled =
          false;
      }
    }
  }


  const HISTORY_MAX_MESSAGES =
    8;

  const HISTORY_MAX_CHARS =
    6000;


  function trimConversationHistory() {
    while (
      state.history.length >
      HISTORY_MAX_MESSAGES
    ) {
      state.history.shift();
    }


    let total =
      state.history.reduce(
        (sum, item) =>
          sum +
          String(
            item.content || ""
          ).length,
        0
      );


    while (
      total >
        HISTORY_MAX_CHARS &&
      state.history.length > 2
    ) {
      const removed =
        state.history.shift();

      total -=
        String(
          removed?.content || ""
        ).length;
    }


    /*
     * Avoid beginning with an orphan
     * assistant message after trimming.
     */
    while (
      state.history.length &&
      state.history[0].role ===
        "assistant"
    ) {
      state.history.shift();
    }
  }


  function commitConversationTurn(
    userContent,
    assistantContent
  ) {
    const userText =
      String(
        userContent || ""
      ).trim();

    const assistantText =
      String(
        assistantContent || ""
      ).trim();


    if (
      !userText ||
      !assistantText
    ) {
      return;
    }


    state.history.push(
      {
        role:
          "user",

        content:
          userText
      },
      {
        role:
          "assistant",

        content:
          assistantText
      }
    );


    trimConversationHistory();
  }


  function imageHistoryText(
    text,
    image
  ) {
    const description =
      image?.name
        ? `[Image attached: ${image.name}]`
        : "[Image attached]";

    const prompt =
      String(
        text || ""
      ).trim();


    return prompt
      ? `${description}\n${prompt}`
      : `${description}\nAnalyze this image in the context of our conversation.`;
  }

  async function sendMessage() {
    if (
      state.sending ||
      state.lock
    ) {
      return;
    }

    const text =
      input.value.trim();

    const selectedImage =
      state.image;

    if (
      !text &&
      !selectedImage
    ) {
      return;
    }


    /*
     * Snapshot before the current user
     * turn is committed.
     */
    const historySnapshot =
      state.history.map(
        item => ({
          role:
            item.role,

          content:
            item.content
        })
      );


    const currentHistoryText =
      selectedImage
        ? imageHistoryText(
            text,
            selectedImage
          )
        : text;


    appendMessage(
      "user",
      text ||
        `📎 ${selectedImage.name}`
    );


    const pageContextEnabled =
      window.__mxGarfixSettings?.get?.("pageContext") !== false;

    const visiblePageText =
      pageContextEnabled
        ? String(
            document.getElementById("mx-main")?.innerText ||
            document.getElementById("legal-scroll-area")?.innerText ||
            ""
          )
            .replace(/\s+/g, " ")
            .trim()
            .slice(0, 900)
        : "";

    const activeGarfixSession =
      window.__mxGarfixSessions?.current?.() ||
      null;

    const requestContext = {
      site: "microlabsx.com",
      vertical: "microlabsx",
      projectType: "non-commercial R&D",
      technologyProvider: "MICROSTUDIOX",
      assistantMode: "technology-preview",
      internalDataAccess: false,
      internalDataDisclosure: false,
      dataPolicy:
        "Do not claim access to, provide, reveal, infer or fabricate internal MICROLABSX project data. GARFIX · LABS is currently a conversational technology preview only.",
      conversationPurpose:
        "Allow open general conversation so visitors can evaluate MICROSTUDIOX conversational technology.",
      language:
        currentLang(),

      department:
        activeGarfixSession?.department ||
        "general",

      sessionId:
        activeGarfixSession?.id ||
        null,

      siteControl:
        window.__mxGarfixPowers?.authorizationContext?.() || {
          authorized: false,
          setting: "siteActions",
          capabilities: [],
          scope: "microlabsx.com only",
          requiresExplicitUserAuthorization: true
        },

      commerce:
        window.MXCommerce?.context?.() ||
        null,

      cart:
        window.MXCart?.getCart?.() ||
        null,

      ...(pageContextEnabled
        ? {
            page:
              (
                location.pathname +
                location.search +
                location.hash
              ).slice(0, 200),

            title:
              document.title
                .slice(0, 300),

            visibleText:
              visiblePageText
          }
        : {})
    };


    const requestUrl =
      selectedImage
        ? VISION_API
        : API;


    const requestAccept =
      selectedImage
        ? "application/json"
        : "text/event-stream";


    const requestPayload =
      selectedImage
        ? {
            message:
              text,

            messages:
              historySnapshot,

            image: {
              mime:
                selectedImage.mime,

              data:
                selectedImage.data
            },

            context:
              requestContext
          }
        : {
            messages: [
              ...historySnapshot,

              {
                role:
                  "user",

                content:
                  text
              }
            ],

            stream:
              true,

            context:
              requestContext
          };


    if (selectedImage) {
      clearImage();
    }


    input.value =
      "";

    autoSizeInput();

    setSending(
      true
    );

    appendThinking();


    try {
      const legalQuestion = await window.__mxGarfixLegal?.prepare?.(text) ?? text;
      if (selectedImage) requestPayload.message = legalQuestion;
      else requestPayload.messages[requestPayload.messages.length - 1].content = legalQuestion;

      const humanGate =
        window.__mxGarfixTurnstile;


      const humanProtectedRequest =
        requestUrl === API;


      const browserId =
        humanGate?.getBrowserId?.() ||
        "";


      let humanSession =
        humanGate?.getSessionToken?.() ||
        "";


      let turnstileToken =
        null;


      /*
       * No signed session:
       * perform Turnstile once.
       */
      if (
        humanProtectedRequest &&
        !humanSession
      ) {

        turnstileToken =
          await humanGate?.getToken?.();


        if (
          !turnstileToken
        ) {

          throw new Error(
            "turnstile_unavailable"
          );
        }


        requestPayload.turnstileToken =
          turnstileToken;
      }


      const buildRequestHeaders =
        () => {

          const headers = {
            "Content-Type":
              "application/json",

            Accept:
              requestAccept,

            "X-Garfix-Client":
              "microretailx-web/1.0"
          };


          if (
            humanProtectedRequest &&
            browserId
          ) {

            headers[
              "X-Garfix-Browser-Id"
            ] =
              browserId;
          }


          if (
            humanProtectedRequest &&
            humanSession
          ) {

            headers[
              "X-Garfix-Human-Session"
            ] =
              humanSession;
          }


          if (
            humanProtectedRequest &&
            requestUrl === VISION_API &&
            turnstileToken
          ) {

            headers[
              "X-Garfix-Turnstile"
            ] =
              turnstileToken;
          }


          return headers;
        };


      const sendRequest =
        () =>
          fetch(
            requestUrl,
            {
              method:
                "POST",

              headers:
                buildRequestHeaders(),

              body:
                JSON.stringify(
                  requestPayload
                )
            }
          );


      let response =
        await sendRequest();


      /*
       * Server is authoritative.
       *
       * An expired, invalid or forged
       * signed session produces 403.
       * Clear it, run Turnstile and retry.
       */
      if (
        humanProtectedRequest &&
        response.status === 403 &&
        !turnstileToken
      ) {

        let verificationCode =
          "";


        try {

          const verificationBody =
            await response
              .clone()
              .json();


          verificationCode =
            String(
              verificationBody
                ?.error
                ?.code ||
              ""
            );

        } catch (_) {}


        if (
          verificationCode ===
            "verification_required" ||
          verificationCode ===
            "verification_failed"
        ) {

          humanGate?.clearSession?.();

          humanSession =
            "";


          turnstileToken =
            await humanGate?.getToken?.();


          if (
            !turnstileToken
          ) {

            throw new Error(
              "turnstile_unavailable"
            );
          }


          requestPayload.turnstileToken =
            turnstileToken;


          response =
            await sendRequest();
        }
      }


      /*
       * After successful Siteverify the
       * Worker returns a new signed token
       * in X-Garfix-Human-Session.
       */
      if (
        humanProtectedRequest &&
        response.ok
      ) {

        const issuedHumanSession =
          response.headers.get(
            "X-Garfix-Human-Session"
          );


        if (
          issuedHumanSession
        ) {

          humanGate
            ?.storeSessionToken?.(
              issuedHumanSession
            );

          humanSession =
            issuedHumanSession;
        }
      }


      const contentType =
        response.headers.get(
          "Content-Type"
        ) || "";


      if (!response.ok) {
        let data =
          null;

        try {
          data =
            await response.json();
        } catch (_) {}

        removeThinking();

        const error =
          data?.error ||
          {};

        if (
          response.status === 429 &&
          error.code ===
            "rate_limited"
        ) {
          activateLock(
            lockFromRateLimit(
              error
            )
          );

          return;
        }

        if (
          response.status === 503 &&
          error.code ===
            "daily_budget_exhausted"
        ) {
          activateLock(
            lockFromDailyLimit(
              error
            )
          );

          return;
        }

        if (
          typeof error.message ===
            "string" &&
          error.message
        ) {
          appendMessage(
            "system",
            error.message
          );

          return;
        }

        appendMessage(
          "system",
          tr("invalid")
        );

        return;
      }


      if (
        !contentType.includes(
          "text/event-stream"
        ) ||
        !response.body
      ) {
        let data =
          null;

        try {
          data =
            await response.json();
        } catch (_) {}

        removeThinking();

        if (
          data?.ok === true &&
          typeof data.reply ===
            "string"
        ) {
          appendMessage(
            "assistant",
            data.reply
          );

          commitConversationTurn(
            currentHistoryText,
            data.reply
          );

          window.dispatchEvent(
            new CustomEvent(
              "mx:garfix-response-complete",
              { detail: { text: data.reply } }
            )
          );

          return;
        }

        appendMessage(
          "system",
          tr("invalid")
        );

        return;
      }


      const reader =
        response.body.getReader();

      const decoder =
        new TextDecoder();

      let buffer =
        "";

      let assistantNode =
        null;

      let streamedText =
        "";

      let streamError =
        null;

      let actionHandled =
        false;


      const processEvent =
        block => {

          const lines =
            block.split(
              /\r?\n/
            );

          let event =
            "message";

          const dataLines =
            [];


          for (const line of lines) {

            if (
              line.startsWith(
                "event:"
              )
            ) {
              event =
                line.slice(6).trim();

              continue;
            }

            if (
              line.startsWith(
                "data:"
              )
            ) {
              dataLines.push(
                line.slice(5).trimStart()
              );
            }
          }


          if (
            dataLines.length ===
              0
          ) {
            return;
          }


          let payload =
            null;

          try {
            payload =
              JSON.parse(
                dataLines.join(
                  "\n"
                )
              );
          } catch (_) {
            return;
          }


          if (
            event ===
              "delta" &&
            typeof payload?.text ===
              "string" &&
            payload.text
          ) {

            if (!assistantNode) {
              removeThinking();

              assistantNode =
                appendMessage(
                  "assistant",
                  ""
                );
            }

            streamedText +=
              payload.text;

            const streamedNode =
              assistantNode.querySelector(
                ".mx-garfix-message-text"
              );

            if (streamedNode) {
              streamedNode.textContent =
                streamedText;
            }

            requestAnimationFrame(
              scrollToBottom
            );

            return;
          }


          if (
            event ===
              "action"
          ) {
            const action =
              payload?.action &&
              typeof payload.action === "object"
                ? payload.action
                : payload;

            const announcement =
              String(payload?.say || "")
                .trim();

            if (!announcement) {
              window.dispatchEvent(
                new CustomEvent(
                  "mx:garfix-action-result",
                  {
                    detail: {
                      action,
                      executed: false,
                      reason: "announcement_required"
                    }
                  }
                )
              );
              return;
            }

            actionHandled =
              true;

            const authorized =
              window.__mxGarfixPowers?.enabled?.() === true;

            const permissionText =
              currentLang() === "es"
                ? "De acuerdo. Para hacerlo necesito tu autorización. Abre Configuración y activa ‘Permitir a GARFIX controlar esta web’. Cuando lo hagas, podré operar los controles compatibles de MICROLABSX."
                : currentLang() === "ar"
                  ? "حسنًا. لتنفيذ ذلك أحتاج إلى إذنك. افتح الإعدادات وفعّل خيار «السماح لـ GARFIX بالتحكم في هذا الموقع». بعد ذلك يمكنني تشغيل عناصر MICROLABSX المدعومة."
                  : "Understood. To do that I need your authorization. Open Settings and enable ‘Allow GARFIX to control this site’. Once enabled, I can operate supported MICROLABSX controls.";

            if (!authorized) {
              appendMessage(
                "assistant",
                permissionText
              );

              window.dispatchEvent(
                new CustomEvent(
                  "mx:garfix-response-complete",
                  { detail: { text: permissionText } }
                )
              );

              window.__mxGarfixSettings?.open?.();

              window.dispatchEvent(
                new CustomEvent(
                  "mx:garfix-action-result",
                  {
                    detail: {
                      action,
                      executed: false,
                      reason: "authorization_required"
                    }
                  }
                )
              );
              return;
            }

            appendMessage(
              "assistant",
              announcement
            );

            window.dispatchEvent(
              new CustomEvent(
                "mx:garfix-response-complete",
                { detail: { text: announcement } }
              )
            );

            const executed =
              window.__mxGarfixPowers?.execute?.(action) === true;

            window.dispatchEvent(
              new CustomEvent(
                "mx:garfix-action-result",
                { detail: { action, executed } }
              )
            );
            return;
          }


          if (
            event ===
              "error"
          ) {
            streamError =
              payload;
          }
        };


      while (true) {
        const {
          done,
          value
        } =
          await reader.read();

        if (done) {
          break;
        }

        buffer +=
          decoder.decode(
            value,
            {
              stream:
                true
            }
          );

        const blocks =
          buffer.split(
            /\r?\n\r?\n/
          );

        buffer =
          blocks.pop() ||
          "";

        for (const block of blocks) {
          processEvent(
            block
          );
        }
      }


      buffer +=
        decoder.decode();

      if (buffer.trim()) {
        processEvent(
          buffer
        );
      }

      removeThinking();


      if (streamError) {
        appendMessage(
          "system",
          typeof streamError.message ===
            "string" &&
          streamError.message
            ? streamError.message
            : tr("invalid")
        );

        return;
      }


      if (
        (
          !assistantNode ||
          !streamedText.trim()
        ) &&
        !actionHandled
      ) {
        appendMessage(
          "system",
          tr("invalid")
        );

        return;
      }


      commitConversationTurn(
        currentHistoryText,
        streamedText
      );

      window.dispatchEvent(
        new CustomEvent(
          "mx:garfix-response-complete",
          { detail: { text: streamedText } }
        )
      );


      requestAnimationFrame(
        scrollToBottom
      );

      return;

    } catch (_) {
      removeThinking();

      appendMessage(
        "system",
        tr("network")
      );

    } finally {
      window.__mxGarfixLegal?.cancel?.();
      if (!state.lock) {
        setSending(
          false
        );
      }
    }
  }


  launcher.addEventListener(
    "click",
    togglePanel
  );


  closeButton.addEventListener(
    "click",
    closePanel
  );


  attachButton.addEventListener(
    "click",
    () => {
      if (
        !state.sending &&
        !state.lock
      ) {
        fileInput.click();
      }
    }
  );


  fileInput.addEventListener(
    "change",
    selectImage
  );


  attachmentRemove.addEventListener(
    "click",
    clearImage
  );

  form.addEventListener(
    "submit",
    event => {
      event.preventDefault();

      sendMessage();
    }
  );


  input.addEventListener(
    "input",
    autoSizeInput
  );


  input.addEventListener(
    "keydown",
    event => {
      if (
        event.key === "Enter" &&
        !event.shiftKey &&
        !event.isComposing
      ) {
        event.preventDefault();

        sendMessage();
      }
    }
  );


  document.addEventListener(
    "keydown",
    event => {
      if (
        event.key === "Escape" &&
        state.open
      ) {
        closePanel();
      }
    }
  );


  /*
   * microretailX already changes
   * <html lang=""> and dir when
   * the visitor switches language.
   *
   * Watching those attributes lets
   * Garfix follow the site instantly
   * without coupling itself to
   * landing.js internals.
   */
  const htmlObserver =
    new MutationObserver(
      mutations => {
        const changed =
          mutations.some(
            mutation =>
              mutation.type ===
                "attributes" &&
              (
                mutation.attributeName ===
                  "lang" ||
                mutation.attributeName ===
                  "dir"
              )
          );

        if (changed) {
          syncLanguage();
        }
      }
    );


  htmlObserver.observe(
    document.documentElement,
    {
      attributes:
        true,

      attributeFilter: [
        "lang",
        "dir"
      ]
    }
  );


  /*
   * Cross-tab synchronization.
   * If another microretailX tab
   * receives a cooldown, this tab
   * immediately displays it too.
   */
  window.addEventListener(
    "storage",
    event => {
      if (
        event.key !==
        LOCK_KEY
      ) {
        return;
      }

      const lock =
        parseStoredLock();

      if (lock) {
        activateLock(
          lock,
          false
        );

      } else if (
        state.lock
      ) {
        finishLock();
      }
    }
  );


  /*
   * Public debug surface.
   * Contains no credentials,
   * IPs or private information.
   */
  window.__garfix = {
    open:
      openPanel,

    close:
      closePanel,

    status:
      () => ({
        open:
          state.open,

        locked:
          Boolean(
            state.lock
          ),

        lockType:
          state.lock?.type ??
          null,

        level:
          state.lock?.level ??
          null,

        blockedUntil:
          state.lock
            ? new Date(
                state.lock.until
              ).toISOString()
            : null
      }),

    conversation: {
      messages:
        () =>
          [...messages.querySelectorAll(
            ".mx-garfix-message"
          )]
            .map(node => {
              const text =
                node.querySelector(
                  ".mx-garfix-message-text"
                )?.textContent || "";

              if (!text.trim()) {
                return null;
              }

              return {
                role:
                  node.dataset.role ||
                  "system",

                text:
                  text.trim(),

                timestamp:
                  node.dataset.timestamp ||
                  new Date().toISOString()
              };
            })
            .filter(Boolean),

      history:
        () =>
          state.history.map(item => ({
            role:
              item.role,

            content:
              item.content
          })),

      reset:
        () => {
          messages.replaceChildren();
          state.history = [];
          state.welcomed = false;
          removeThinking();
          clearImage();

          if (state.open) {
            appendMessage(
              "assistant",
              tr("welcome")
            );

            state.welcomed =
              true;
          }
        },

      restore:
        entries => {
          const safeEntries =
            Array.isArray(entries)
              ? entries
                  .map(entry => ({
                    role:
                      ["user", "assistant", "system"]
                        .includes(entry?.role)
                        ? entry.role
                        : "system",

                    text:
                      String(entry?.text || "")
                        .trim(),

                    timestamp:
                      entry?.timestamp ||
                      null
                  }))
                  .filter(entry => entry.text)
              : [];

          messages.replaceChildren();
          state.history = [];
          state.welcomed =
            safeEntries.length > 0;
          removeThinking();
          clearImage();

          for (const entry of safeEntries) {
            appendMessage(
              entry.role,
              entry.text,
              entry.timestamp
            );
          }

          for (
            let index = 0;
            index < safeEntries.length - 1;
            index += 1
          ) {
            const user =
              safeEntries[index];

            const assistant =
              safeEntries[index + 1];

            if (
              user.role === "user" &&
              assistant.role === "assistant"
            ) {
              state.history.push(
                {
                  role: "user",
                  content: user.text
                },
                {
                  role: "assistant",
                  content: assistant.text
                }
              );
            }
          }

          trimConversationHistory();
          requestAnimationFrame(
            scrollToBottom
          );
        }
    }
  };


  syncLanguage();


  const existingLock =
    parseStoredLock();

  if (existingLock) {
    activateLock(
      existingLock,
      false
    );
  }


  /* GARFIX MOBILE VISUAL VIEWPORT */
  function syncGarfixVisualViewport() {
    const vv = window.visualViewport;

    if (!vv) {
      document.documentElement.style.removeProperty(
        "--gx-visual-height"
      );
      document.documentElement.style.removeProperty(
        "--gx-visual-top"
      );
      return;
    }

    document.documentElement.style.setProperty(
      "--gx-visual-height",
      vv.height + "px"
    );

    document.documentElement.style.setProperty(
      "--gx-visual-top",
      vv.offsetTop + "px"
    );
  }

  if (window.visualViewport) {
    window.visualViewport.addEventListener(
      "resize",
      syncGarfixVisualViewport,
      { passive: true }
    );

    window.visualViewport.addEventListener(
      "scroll",
      syncGarfixVisualViewport,
      { passive: true }
    );
  }

  window.addEventListener(
    "orientationchange",
    syncGarfixVisualViewport,
    { passive: true }
  );

  syncGarfixVisualViewport();

})();



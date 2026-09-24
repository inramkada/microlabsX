(function () {
  "use strict";

  const SITE_KEY =
    "0x4AAAAAAEpAfhJjyzOOAkBa";

  const API_WAIT_MS =
    10000;

  const TOKEN_WAIT_MS =
    60000;

  /*
   * GARFIX signed human session.
   *
   * The browser identifier is random.
   * The actual authorization token is
   * opaque to the client and signed by
   * the GARFIX Worker.
   */

  const BROWSER_ID_KEY =
    "mx_garfix_browser_id_v1";

  const HUMAN_SESSION_KEY =
    "mx_garfix_human_session_token_v1";


  let volatileBrowserId =
    "";

  let widgetId =
    null;

  let hasIssuedToken =
    false;

  let pending =
    null;

  let containerNode =
    null;


  function browserBase64Url(
    bytes
  ) {

    let binary =
      "";

    for (
      const byte of bytes
    ) {
      binary +=
        String.fromCharCode(
          byte
        );
    }

    return btoa(
      binary
    )
      .replace(
        /\+/g,
        "-"
      )
      .replace(
        /\//g,
        "_"
      )
      .replace(
        /=+$/g,
        ""
      );
  }


  function createBrowserId() {

    const bytes =
      new Uint8Array(
        32
      );

    crypto.getRandomValues(
      bytes
    );

    return browserBase64Url(
      bytes
    );
  }


  function getBrowserId() {

    try {

      let browserId =
        sessionStorage.getItem(
          BROWSER_ID_KEY
        ) || "";


      if (
        !/^[A-Za-z0-9_-]{32,128}$/
          .test(
            browserId
          )
      ) {

        browserId =
          createBrowserId();

        sessionStorage.setItem(
          BROWSER_ID_KEY,
          browserId
        );
      }


      return browserId;

    } catch (_) {

      if (
        !volatileBrowserId
      ) {
        volatileBrowserId =
          createBrowserId();
      }

      return volatileBrowserId;
    }
  }


  function getSessionToken() {

    try {

      const token =
        (
          sessionStorage.getItem(
            HUMAN_SESSION_KEY
          ) || ""
        ).trim();


      if (
        !token ||
        token.length > 4096
      ) {
        return "";
      }


      return token;

    } catch (_) {

      return "";
    }
  }


  function storeSessionToken(
    token
  ) {

    if (
      typeof token !== "string" ||
      !token.trim() ||
      token.length > 4096
    ) {
      clearSession();
      return;
    }


    try {

      sessionStorage.setItem(
        HUMAN_SESSION_KEY,
        token.trim()
      );

    } catch (_) {}
  }


  function clearSession() {

    try {

      sessionStorage.removeItem(
        HUMAN_SESSION_KEY
      );

    } catch (_) {}
  }

  function showContainer() {
    if (containerNode) {
      containerNode.hidden =
        false;
    }
  }


  function hideContainer() {
    if (containerNode) {
      containerNode.hidden =
        true;
    }
  }


  function waitForApi() {
    if (
      window.turnstile?.render &&
      window.turnstile?.execute
    ) {
      return Promise.resolve();
    }

    return new Promise(
      (resolve, reject) => {
        const startedAt =
          Date.now();

        const timer =
          setInterval(
            () => {
              if (
                window.turnstile?.render &&
                window.turnstile?.execute
              ) {
                clearInterval(timer);
                resolve();
                return;
              }

              if (
                Date.now() -
                startedAt >=
                API_WAIT_MS
              ) {
                clearInterval(timer);

                reject(
                  new Error(
                    "turnstile_api_unavailable"
                  )
                );
              }
            },
            50
          );
      }
    );
  }


  function ensureContainer() {
    let container =
      document.getElementById(
        "mx-garfix-turnstile"
      );

    if (container) {
      containerNode =
        container;

      return container;
    }

    const composer =
      document.querySelector(
        ".mx-garfix-composer"
      );

    if (!composer) {
      throw new Error(
        "turnstile_container_unavailable"
      );
    }

    container =
      document.createElement(
        "div"
      );

    container.id =
      "mx-garfix-turnstile";

    container.className =
      "mx-garfix-turnstile";

    containerNode =
      container;

    const form =
      composer.querySelector(
        ".mx-garfix-form"
      );

    if (form) {
      composer.insertBefore(
        container,
        form
      );
    } else {
      composer.appendChild(
        container
      );
    }

    return container;
  }


  function settle(
    type,
    value
  ) {
    if (!pending) {
      return;
    }

    const current =
      pending;

    pending =
      null;

    clearTimeout(
      current.timer
    );

    if (
      type === "resolve"
    ) {
      current.resolve(
        value
      );
    } else {
      current.reject(
        value
      );
    }
  }


  async function ensureWidget() {
    if (
      widgetId !== null
    ) {
      return widgetId;
    }

    await waitForApi();

    const container =
      ensureContainer();

    widgetId =
      window.turnstile.render(
        container,
        {
          sitekey:
            SITE_KEY,

          action:
            "garfix_ai",

          execution:
            "execute",

          appearance:
            "interaction-only",

          theme:
            "dark",

          size:
            "flexible",

          language:
            "auto",

          retry:
            "auto",

          callback(token) {
            hasIssuedToken =
              true;

            hideContainer();

            settle(
              "resolve",
              token
            );
          },

          "error-callback"(code) {
            hasIssuedToken =
              false;

            hideContainer();

            settle(
              "reject",
              new Error(
                "turnstile_error:" +
                String(
                  code ||
                  "unknown"
                )
              )
            );
          },

          "expired-callback"() {
            hasIssuedToken =
              false;

            hideContainer();

            settle(
              "reject",
              new Error(
                "turnstile_expired"
              )
            );
          },

          "timeout-callback"() {
            hasIssuedToken =
              false;

            hideContainer();

            settle(
              "reject",
              new Error(
                "turnstile_timeout"
              )
            );
          }
        }
      );

    return widgetId;
  }


  async function getToken() {
    const id =
      await ensureWidget();

    if (pending) {
      throw new Error(
        "turnstile_already_running"
      );
    }

    if (hasIssuedToken) {
      window.turnstile.reset(
        id
      );

      hasIssuedToken =
        false;
    }

    showContainer();

    return new Promise(
      (resolve, reject) => {
        const timer =
          setTimeout(
            () => {
              hideContainer();

              settle(
                "reject",
                new Error(
                  "turnstile_token_timeout"
                )
              );
            },
            TOKEN_WAIT_MS
          );

        pending = {
          resolve,
          reject,
          timer
        };

        try {
          window.turnstile.execute(
            id
          );
        } catch (error) {
          hideContainer();

          settle(
            "reject",
            error
          );
        }
      }
    );
  }


  window.__mxGarfixTurnstile =
    Object.freeze({
      getToken,
      getBrowserId,
      getSessionToken,
      storeSessionToken,
      clearSession
    });

})();
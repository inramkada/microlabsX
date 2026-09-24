(() => {
  "use strict";

  const mq = window.matchMedia("(max-width:760px)");

  const mobile = () => mq.matches;

  const lang =
    document.getElementById("lang-switch");

  const langTrigger =
    lang?.querySelector(".lang-trigger");

  const dropdowns =
    Array.from(
      document.querySelectorAll(
        "#mx-header .nav-dropdown"
      )
    );


  const getNavTrigger = (dropdown) =>
    dropdown.querySelector(
      ":scope > .navdrop-trigger"
    );


  const pointInside = (element, x, y) => {

    if (!element) return false;

    const r =
      element.getBoundingClientRect();

    return (
      x >= r.left &&
      x <= r.right &&
      y >= r.top &&
      y <= r.bottom
    );
  };


  function closeLanguage(){

    if (!lang) return;

    lang.classList.remove("is-open");

    langTrigger?.setAttribute(
      "aria-expanded",
      "false"
    );
  }


  function closeDropdown(dropdown){

    dropdown.classList.remove("is-open");

    getNavTrigger(dropdown)
      ?.setAttribute(
        "aria-expanded",
        "false"
      );
  }


  function closeEverything(except = null){

    if (lang && lang !== except){
      closeLanguage();
    }

    dropdowns.forEach(dropdown => {

      if (dropdown !== except){
        closeDropdown(dropdown);
      }

    });

    syncLock();
  }


  function syncLock(){

    if (!mobile()){

      document.body.classList.remove(
        "mx-sheet-open"
      );

      return;
    }

    const open =
      lang?.classList.contains("is-open") ||
      dropdowns.some(
        d => d.classList.contains("is-open")
      );

    document.body.classList.toggle(
      "mx-sheet-open",
      !!open
    );
  }


  function toggleLanguage(){

    if (!lang) return;

    const opening =
      !lang.classList.contains("is-open");

    closeEverything(
      opening ? lang : null
    );

    lang.classList.toggle(
      "is-open",
      opening
    );

    langTrigger?.setAttribute(
      "aria-expanded",
      opening ? "true" : "false"
    );

    syncLock();
  }


  function toggleDropdown(dropdown){

    const opening =
      !dropdown.classList.contains(
        "is-open"
      );

    closeEverything(
      opening ? dropdown : null
    );

    dropdown.classList.toggle(
      "is-open",
      opening
    );

    getNavTrigger(dropdown)
      ?.setAttribute(
        "aria-expanded",
        opening ? "true" : "false"
      );

    syncLock();
  }


  /*
   * IMPORTANTE:
   *
   * Capturamos el evento en document ANTES
   * de que los listeners antiguos puedan tocarlo.
   */

  function processPoint(event, x, y){

    if (!mobile()) return false;


    /* GLOBO */

    if (
      langTrigger &&
      pointInside(langTrigger, x, y)
    ){

      event.preventDefault();
      event.stopImmediatePropagation();

      toggleLanguage();

      return true;
    }


    /* INFO / VERTICALS */

    for (const dropdown of dropdowns){

      const trigger =
        getNavTrigger(dropdown);

      if (
        trigger &&
        pointInside(trigger, x, y)
      ){

        event.preventDefault();
        event.stopImmediatePropagation();

        toggleDropdown(dropdown);

        return true;
      }
    }


    /*
     * Si estamos dentro de un panel abierto,
     * NO interferimos: dejamos funcionar
     * enlaces y botones de idiomas.
     */

    if (
      lang?.classList.contains("is-open") &&
      pointInside(
        document.getElementById("lang-rail"),
        x,
        y
      )
    ){
      return false;
    }


    for (const dropdown of dropdowns){

      if (
        dropdown.classList.contains("is-open") &&
        pointInside(
          dropdown.querySelector(
            ":scope > .nav-dropdown-menu"
          ),
          x,
          y
        )
      ){
        return false;
      }
    }


    closeEverything();

    return false;
  }


  let lastTouch = 0;


  document.addEventListener(
    "touchstart",
    event => {

      if (!mobile()) return;
      if (!event.touches.length) return;

      const touch =
        event.touches[0];

      const handled =
        processPoint(
          event,
          touch.clientX,
          touch.clientY
        );

      if (handled){
        lastTouch = Date.now();
      }

    },
    {
      capture:true,
      passive:false
    }
  );


  document.addEventListener(
    "click",
    event => {

      if (!mobile()) return;

      /*
       * Evitar doble ejecución después
       * del touchstart.
       */

      const recentlyTouched =
        Date.now() - lastTouch < 700;


      const x = event.clientX;
      const y = event.clientY;


      /*
       * Si el click posterior cae en un trigger,
       * lo bloqueamos para que JS antiguo no
       * vuelva a cerrarlo.
       */

      const triggerHit =
        (
          langTrigger &&
          pointInside(langTrigger,x,y)
        ) ||
        dropdowns.some(dropdown =>
          pointInside(
            getNavTrigger(dropdown),
            x,
            y
          )
        );


      if (recentlyTouched && triggerHit){

        event.preventDefault();
        event.stopImmediatePropagation();

        return;
      }


      processPoint(
        event,
        x,
        y
      );

    },
    true
  );


  window.addEventListener(
    "resize",
    syncLock
  );

})();
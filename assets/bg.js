(() => {
  "use strict";

  const canvas = document.getElementById("bg");
  const ctx = canvas.getContext("2d", { alpha: false, desynchronized: true });

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const isMobile = /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);
  const cores = navigator.hardwareConcurrency || 4;

  // Quality knobs (tuned for "premium", not noisy)
  const QUALITY = {
    // DPR cap: higher = sharper but heavier
    dprCap: isMobile ? 1.6 : 2.2,
    // Particle counts
    baseParticles: prefersReducedMotion ? 120 : (isMobile ? 220 : Math.min(900, cores * 220)),
    // Motion
    speed: prefersReducedMotion ? 0.18 : (isMobile ? 0.30 : 0.36),
    // Connections
    connectDist: prefersReducedMotion ? 85 : (isMobile ? 110 : 140),
    maxLinksPerParticle: prefersReducedMotion ? 1 : (isMobile ? 2 : 3),
    // X pulse timing
    pulseEverySec: prefersReducedMotion ? 9999 : 8.5,  // effectively off in reduced motion
    pulseDurationSec: 2.1,
    // Dither/noise (helps banding on blacks)
    noiseStrength: prefersReducedMotion ? 0 : 0.020,   // 0.02 = subtle
  };

  let w = 0, h = 0, dpr = 1;
  let rafId = 0;

  // Pointer (very subtle influence)
  const pointer = { x: -1e9, y: -1e9, vx: 0, vy: 0 };

  // Particles
  const parts = [];
  const links = [];

  // Time
  let lastT = performance.now();
  let tSec = 0;

  // X pulse state
  let nextPulseAt = 2.0;
  let pulseT = 0; // 0..1 within pulse duration

  // Utility
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  const lerp = (a, b, t) => a + (b - a) * t;
  const smoothstep = (e0, e1, x) => {
    const t = clamp((x - e0) / (e1 - e0), 0, 1);
    return t * t * (3 - 2 * t);
  };

  function resize() {
    const cssW = Math.max(1, window.innerWidth);
    const cssH = Math.max(1, window.innerHeight);

    dpr = Math.min(window.devicePixelRatio || 1, QUALITY.dprCap);
    w = Math.floor(cssW * dpr);
    h = Math.floor(cssH * dpr);

    canvas.width = w;
    canvas.height = h;
    canvas.style.width = cssW + "px";
    canvas.style.height = cssH + "px";

    // Re-init particles for new area (keeps quality stable)
    initParticles(true);
  }

  function initParticles(keepSome = false) {
    const targetN = QUALITY.baseParticles;

    if (!keepSome) parts.length = 0;

    // If keeping some, trim or add
    if (keepSome && parts.length > 0) {
      while (parts.length > targetN) parts.pop();
    } else {
      parts.length = 0;
    }

    while (parts.length < targetN) {
      parts.push(makeParticle(Math.random() * w, Math.random() * h, true));
    }
  }

  function makeParticle(x, y, randomVel) {
    const angle = Math.random() * Math.PI * 2;
    const sp = (0.25 + Math.random() * 0.75) * QUALITY.speed * dpr;
    return {
      x, y,
      vx: randomVel ? Math.cos(angle) * sp : 0,
      vy: randomVel ? Math.sin(angle) * sp : 0,
      r: (0.8 + Math.random() * 1.6) * dpr,       // tiny points
      phase: Math.random() * 10,
    };
  }

  function onMove(clientX, clientY, isTouch = false) {
    const x = clientX * dpr;
    const y = clientY * dpr;

    // Velocity estimate
    const dx = x - pointer.x;
    const dy = y - pointer.y;
    pointer.vx = lerp(pointer.vx, dx, 0.25);
    pointer.vy = lerp(pointer.vy, dy, 0.25);

    pointer.x = x;
    pointer.y = y;

    // For touch, reduce influence (less "gamey")
    if (isTouch) {
      pointer.vx *= 0.35;
      pointer.vy *= 0.35;
    }
  }

  window.addEventListener("mousemove", (e) => onMove(e.clientX, e.clientY, false), { passive: true });
  window.addEventListener("touchmove", (e) => {
    if (!e.touches || !e.touches[0]) return;
    onMove(e.touches[0].clientX, e.touches[0].clientY, true);
  }, { passive: true });

  window.addEventListener("resize", resize, { passive: true });

  // Build an "X" as 2 diagonals (four segments total for nicer pulse)
  function getXSegments() {
    // X bounds (centered, hero-scale)
    const cx = w * 0.50;
    const cy = h * 0.52;

    const size = Math.min(w, h) * (isMobile ? 0.22 : 0.26);
    const thick = 1.5 * dpr; // visual thickness baseline

    const p1 = { x: cx - size, y: cy - size };
    const p2 = { x: cx + size, y: cy + size };
    const p3 = { x: cx + size, y: cy - size };
    const p4 = { x: cx - size, y: cy + size };

    // Split each diagonal into 2 segments for a more "alive" pulse
    const mid12 = { x: (p1.x + p2.x) * 0.5, y: (p1.y + p2.y) * 0.5 };
    const mid34 = { x: (p3.x + p4.x) * 0.5, y: (p3.y + p4.y) * 0.5 };

    return {
      thick,
      segs: [
        [p1, mid12], [mid12, p2],
        [p3, mid34], [mid34, p4],
      ]
    };
  }

  function distancePointToSegment(px, py, ax, ay, bx, by) {
    const abx = bx - ax, aby = by - ay;
    const apx = px - ax, apy = py - ay;
    const abLen2 = abx * abx + aby * aby + 1e-9;
    let t = (apx * abx + apy * aby) / abLen2;
    t = clamp(t, 0, 1);
    const cx = ax + t * abx, cy = ay + t * aby;
    const dx = px - cx, dy = py - cy;
    return Math.sqrt(dx * dx + dy * dy);
  }

  function tick(dt) {
    tSec += dt;

    // Pulse scheduling
    if (!prefersReducedMotion && tSec >= nextPulseAt) {
      nextPulseAt = tSec + QUALITY.pulseEverySec;
      pulseT = 0;
    }

    const pulseDur = QUALITY.pulseDurationSec;
    if (pulseT < 1) {
      pulseT = clamp(pulseT + dt / pulseDur, 0, 1);
    }

    // Pointer influence (subtle)
    const pv = Math.sqrt(pointer.vx * pointer.vx + pointer.vy * pointer.vy);
    const pInfluence = clamp(pv / (60 * dpr), 0, 1);

    // Move particles
    for (const p of parts) {
      // Gentle drift + micro wobble
      const wob = Math.sin(tSec * 0.6 + p.phase) * 0.12 * dpr;
      p.x += (p.vx + wob) * (dt * 60);
      p.y += (p.vy - wob) * (dt * 60);

      // Very subtle pointer repulsion (premium: barely noticeable)
      const dx = p.x - pointer.x;
      const dy = p.y - pointer.y;
      const dist2 = dx * dx + dy * dy;
      const r2 = (170 * dpr) * (170 * dpr);
      if (dist2 < r2) {
        const dist = Math.sqrt(dist2) + 1e-6;
        const force = (1 - dist / (170 * dpr)) * (0.18 + 0.25 * pInfluence);
        p.x += (dx / dist) * force * (dt * 60) * dpr;
        p.y += (dy / dist) * force * (dt * 60) * dpr;
      }

      // Wrap
      if (p.x < -20 * dpr) p.x = w + 20 * dpr;
      if (p.x > w + 20 * dpr) p.x = -20 * dpr;
      if (p.y < -20 * dpr) p.y = h + 20 * dpr;
      if (p.y > h + 20 * dpr) p.y = -20 * dpr;
    }

    // Build links (naive O(n^2) trimmed by limits; OK at these counts)
    links.length = 0;
    const maxD = QUALITY.connectDist * dpr;
    const maxD2 = maxD * maxD;

    for (let i = 0; i < parts.length; i++) {
      const a = parts[i];
      let linksMade = 0;

      for (let j = i + 1; j < parts.length; j++) {
        if (linksMade >= QUALITY.maxLinksPerParticle) break;

        const b = parts[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const d2 = dx * dx + dy * dy;
        if (d2 > maxD2) continue;

        linksMade++;
        links.push({ ax: a.x, ay: a.y, bx: b.x, by: b.y, d2 });
      }
    }
  }

  function draw() {
    // Background black
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, w, h);

    // Subtle dither/noise overlay (prevents banding, makes blacks look premium)
    if (QUALITY.noiseStrength > 0) {
      // tiny noise tiles: cheap and effective
      const ns = QUALITY.noiseStrength;
      const step = Math.max(3, Math.floor(6 * dpr)); // coarse enough to be invisible
      ctx.globalAlpha = 1;
      for (let y = 0; y < h; y += step) {
        for (let x = 0; x < w; x += step) {
          const v = (Math.random() - 0.5) * ns;
          // Add just a hair of grey noise
          const c = Math.floor((v + 0.5) * 8); // 0..8
          ctx.fillStyle = `rgb(${c},${c},${c})`;
          ctx.fillRect(x, y, step, step);
        }
      }
      ctx.globalCompositeOperation = "screen";
      ctx.globalAlpha = 0.12;
      ctx.fillStyle = "rgba(255,255,255,0.03)";
      ctx.fillRect(0, 0, w, h);
      ctx.globalCompositeOperation = "source-over";
      ctx.globalAlpha = 1;
    }

    // Draw links
    // Premium rule: low alpha, no spaghetti.
    for (const L of links) {
      const d = Math.sqrt(L.d2);
      const a = 1 - (d / (QUALITY.connectDist * dpr));
      const alpha = 0.06 * a; // subtle

      ctx.strokeStyle = `rgba(255,255,255,${alpha})`;
      ctx.lineWidth = 1 * dpr;
      ctx.beginPath();
      ctx.moveTo(L.ax, L.ay);
      ctx.lineTo(L.bx, L.by);
      ctx.stroke();
    }

    // Draw particles
    for (const p of parts) {
      // slight breathing (very subtle)
      const breathe = 0.85 + 0.15 * Math.sin(tSec * 0.8 + p.phase);
      const alpha = 0.22 * breathe;

      ctx.fillStyle = `rgba(255,255,255,${alpha})`;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    }

    // Draw the X pulse (subliminal, not always on)
    if (!prefersReducedMotion) {
      const { thick, segs } = getXSegments();

      // Pulse envelope: fade in -> peak -> fade out
      // t: 0..1
      const t = pulseT;
      const env = Math.sin(Math.PI * t); // 0..1..0
      const strength = env * 0.85;

      // Only show when in pulse window
      if (strength > 0.02) {
        // "Energy head" moving along segments
        const head = smoothstep(0.10, 0.95, t);

        // Base line (very faint)
        ctx.lineCap = "round";
        ctx.lineJoin = "round";

        // Soft glow: draw twice (cheap bloom)
        for (let pass = 0; pass < 2; pass++) {
          const glow = pass === 0 ? 1 : 0;
          const lw = (glow ? (thick * 4.2) : (thick * 1.6));
          const a = glow ? (0.035 * strength) : (0.12 * strength);

          ctx.strokeStyle = `rgba(255,255,255,${a})`;
          ctx.lineWidth = lw;
          ctx.beginPath();
          for (const [A, B] of segs) {
            ctx.moveTo(A.x, A.y);
            ctx.lineTo(B.x, B.y);
          }
          ctx.stroke();
        }

        // Energy head highlight: a small bright spot traveling
        // We traverse segments in order; map head (0..1) to segment position
        const totalSegs = segs.length;
        const pos = head * totalSegs;
        const si = Math.min(totalSegs - 1, Math.floor(pos));
        const st = pos - si;

        const [A, B] = segs[si];
        const hx = lerp(A.x, B.x, st);
        const hy = lerp(A.y, B.y, st);

        // Highlight radius
        const hr = (10 + 16 * strength) * dpr;

        // Radial glow (manual gradient)
        const grd = ctx.createRadialGradient(hx, hy, 0, hx, hy, hr);
        grd.addColorStop(0, `rgba(255,255,255,${0.30 * strength})`);
        grd.addColorStop(0.35, `rgba(255,255,255,${0.10 * strength})`);
        grd.addColorStop(1, `rgba(255,255,255,0)`);
        ctx.fillStyle = grd;
        ctx.beginPath();
        ctx.arc(hx, hy, hr, 0, Math.PI * 2);
        ctx.fill();

        // Subtle "flow field" bias near the X (makes it feel integrated)
        // We tint nearby links slightly brighter during pulse, without redrawing everything:
        // (Cheap trick: overlay a faint mask around X.)
        const maskA = 0.10 * strength;
        if (maskA > 0.01) {
          ctx.globalAlpha = maskA;
          ctx.globalCompositeOperation = "lighter";

          // Draw a low-alpha stroke on the X to "pull" attention
          ctx.strokeStyle = "rgba(255,255,255,0.10)";
          ctx.lineWidth = thick * 6.5;
          ctx.beginPath();
          for (const [AA, BB] of segs) {
            ctx.moveTo(AA.x, AA.y);
            ctx.lineTo(BB.x, BB.y);
          }
          ctx.stroke();

          ctx.globalCompositeOperation = "source-over";
          ctx.globalAlpha = 1;
        }
      }
    }
  }

  function frame(now) {
    const dt = Math.min(0.033, Math.max(0.001, (now - lastT) / 1000));
    lastT = now;

    tick(dt);
    draw();

    rafId = requestAnimationFrame(frame);
  }

  function start() {
    resize();
    lastT = performance.now();

    // Kick off pulse schedule
    nextPulseAt = 1.8;
    pulseT = 1; // not active initially

    cancelAnimationFrame(rafId);
    rafId = requestAnimationFrame(frame);
  }

  // If reduced motion: render a static frame
  if (prefersReducedMotion) {
    resize();
    draw();
  } else {
    start();
  }
})();

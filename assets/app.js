const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d", { alpha: false });

let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

const mouse = { x: -1000, y: -1000 };
function setPointer(x, y) { mouse.x = x; mouse.y = y; }

window.addEventListener("mousemove", e => setPointer(e.clientX, e.clientY), { passive: true });
window.addEventListener("touchmove", e => {
  if (!e.touches || !e.touches[0]) return;
  setPointer(e.touches[0].clientX, e.touches[0].clientY);
}, { passive: true });

window.addEventListener("resize", () => {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
});

function isMobile() {
  return /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);
}

const MOBILE_MODE = isMobile();
const REDUCED_MOTION = window.matchMedia &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const CORES = navigator.hardwareConcurrency || 4;
const BASE_PARTICLES_DESKTOP = 1250;
const BASE_PARTICLES_MOBILE = 500;

const NUM_PARTICLES = REDUCED_MOTION
  ? Math.min(220, MOBILE_MODE ? 140 : 220)
  : (MOBILE_MODE ? BASE_PARTICLES_MOBILE : Math.min(BASE_PARTICLES_DESKTOP, CORES * 420));

const MAX_CONNECTIONS = REDUCED_MOTION ? 2 : (MOBILE_MODE ? 4 : 10);
const SPEED = REDUCED_MOTION ? 0.35 : 0.5;

const xZoneMargin = 42;
const X_SAT_THRESHOLD = MOBILE_MODE ? 30 : 80;

const particles = [];
const deathMarkers = [];

function inXZone(x, y) {
  const d1 = Math.abs(y - (x * height / width));
  const d2 = Math.abs(y - (height - x * height / width));
  return (d1 < xZoneMargin || d2 < xZoneMargin);
}

function randomHex() {
  return "#" + Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, "0");
}

function createParticle() {
  let x, y;
  do {
    x = Math.random() * width;
    y = Math.random() * height;
  } while (inXZone(x, y));

  return {
    x, y,
    ox: x, oy: y,
    vx: (Math.random() - 0.5) * SPEED,
    vy: (Math.random() - 0.5) * SPEED,
    radius: 1.5,
    inX: false,
    prevInX: false,
    hexCode: randomHex()
  };
}

for (let i = 0; i < NUM_PARTICLES; i++) particles.push(createParticle());

function drawConnections() {
  const MAX_DIST = 100;
  const MAX_DIST2 = MAX_DIST * MAX_DIST;

  for (let i = 0; i < particles.length; i++) {
    let connections = 0;
    const pi = particles[i];
    for (let j = i + 1; j < particles.length && connections < MAX_CONNECTIONS; j++) {
      const pj = particles[j];
      const dx = pi.x - pj.x;
      const dy = pi.y - pj.y;
      const dist2 = dx * dx + dy * dy;
      if (dist2 < MAX_DIST2) {
        const dist = Math.sqrt(dist2);
        ctx.strokeStyle = `rgba(0,255,102,${1 - dist / MAX_DIST})`;
        ctx.beginPath();
        ctx.moveTo(pi.x, pi.y);
        ctx.lineTo(pj.x, pj.y);
        ctx.stroke();
        connections++;
      }
    }
  }
}

function addDeathMarker(x, y) {
  deathMarkers.push({
    x, y,
    createdAt: performance.now(),
    angle: Math.random() * Math.PI * 2
  });
}

function drawDeathMarkers(now) {
  const LIFETIME = 650;
  for (let i = deathMarkers.length - 1; i >= 0; i--) {
    const m = deathMarkers[i];
    const age = now - m.createdAt;
    if (age > LIFETIME) {
      deathMarkers.splice(i, 1);
      continue;
    }
    const t = age / LIFETIME;
    const alpha = 1 - t;
    const rays = 4;
    const len = 2 + (8 * t);

    ctx.save();
    ctx.strokeStyle = `rgba(255,255,255,${alpha * 0.4})`;
    ctx.lineWidth = 0.8;

    for (let k = 0; k < rays; k++) {
      const a = m.angle + (Math.PI * 2 * k / rays);
      const x2 = m.x + Math.cos(a) * len;
      const y2 = m.y + Math.sin(a) * len;
      ctx.beginPath();
      ctx.moveTo(m.x, m.y);
      ctx.lineTo(x2, y2);
      ctx.stroke();
    }
    ctx.restore();
  }
}

function animate() {
  const now = performance.now();
  let inXCount = 0;

  for (const p of particles) {
    p.prevInX = p.inX;
    p.inX = inXZone(p.x, p.y);
    if (p.inX) inXCount++;
  }

  const centerX = width / 2;
  const centerY = height / 2;
  const saturated = inXCount >= X_SAT_THRESHOLD;

  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, width, height);

  ctx.strokeStyle = "rgba(0,255,102,0.12)";
  ctx.lineWidth = 1.7;
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(width, height);
  ctx.moveTo(width, 0);
  ctx.lineTo(0, height);
  ctx.stroke();

  drawConnections();
  if (!REDUCED_MOTION) drawDeathMarkers(now);

  for (const p of particles) {
    const dxm = p.x - mouse.x;
    const dym = p.y - mouse.y;
    const distm2 = dxm * dxm + dym * dym;
    if (distm2 < 10000 && distm2 > 0.0001) {
      const distm = Math.sqrt(distm2);
      const force = (100 - distm) * 0.007;
      p.vx += (dxm / distm) * force;
      p.vy += (dym / distm) * force;
    }

    if (p.inX && !p.prevInX && !REDUCED_MOTION) addDeathMarker(p.x, p.y);

    if (p.inX && saturated) {
      const dx = p.x - centerX;
      const dy = p.y - centerY;
      const d = Math.sqrt(dx * dx + dy * dy) || 1;
      p.vx += (dx / d) * 1.2;
      p.vy += (dy / d) * 1.2;
    }

    if (p.inX && !REDUCED_MOTION) {
      p.vx += Math.sin(now * 0.1 + p.x) * 0.4;
      p.vy += Math.cos(now * 0.1 + p.y) * 0.4;
      p.radius = 3.3 + Math.sin(now * 0.05 + p.x + p.y) * 1.4;
      if (Math.random() < 0.4) p.hexCode = randomHex();
      ctx.font = "12px monospace";
      ctx.fillStyle = "white";
      ctx.fillText(p.hexCode, p.x + 10, p.y + 6);
    } else {
      p.radius = 1.5;
    }

    p.vx += (p.ox - p.x) * 0.002;
    p.vy += (p.oy - p.y) * 0.002;

    if (!REDUCED_MOTION) {
      p.vx += (Math.random() - 0.5) * 0.05;
      p.vy += (Math.random() - 0.5) * 0.05;
    }

    p.x += p.vx;
    p.y += p.vy;

    p.vx *= 0.97;
    p.vy *= 0.97;

    if (p.x < 0 || p.x > width) p.vx *= -1;
    if (p.y < 0 || p.y > height) p.vy *= -1;

    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fill();
  }

  requestAnimationFrame(animate);
}

animate();

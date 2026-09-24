const loading = document.getElementById('loading');

function markFallback(message) {
  document.documentElement.classList.remove('webgl-loading');
  document.documentElement.classList.add('webgl-unavailable');
  if (loading) {
    loading.textContent = message;
    loading.classList.remove('hidden');
  }
}

function hasWebGL() {
  try {
    const canvas = document.createElement('canvas');
    const gl =
      canvas.getContext('webgl2', { powerPreference: 'high-performance' }) ||
      canvas.getContext('webgl', { powerPreference: 'high-performance' });
    if (!gl) return false;
    gl.getExtension('WEBGL_lose_context')?.loseContext();
    return true;
  } catch {
    return false;
  }
}

async function startVisualEngine() {
  if (!hasWebGL()) {
    markFallback('Interactive specimen view unavailable on this device.');
    return;
  }

  document.documentElement.classList.add('webgl-loading');

  try {
    await import('./lab-hero.js');
    document.documentElement.classList.remove('webgl-loading');
    document.documentElement.classList.add('webgl-ready');
  } catch (error) {
    console.error('[microLabsX] WebGL engine failed to initialize', error);
    markFallback('Interactive specimen view could not be initialized.');
  }
}

function scheduleVisualEngine() {
  const launch = () => void startVisualEngine();

  // Guarantee HTML/CSS get the first paint before downloading Three.js + the 3D engine.
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      if ('requestIdleCallback' in window) {
        window.requestIdleCallback(launch, { timeout: 700 });
      } else {
        setTimeout(launch, 0);
      }
    });
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', scheduleVisualEngine, { once: true });
} else {
  scheduleVisualEngine();
}

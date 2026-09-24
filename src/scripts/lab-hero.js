import * as THREE from 'three';
    import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
    import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
    import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
    import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';

    const MODEL_URL = '/assets/models/tardigrade.glb';
    const SECOND_MODEL_URL = '/assets/models/crypto-specimen.glb';

    const app = document.getElementById('app');
    const loading = document.getElementById('loading');
    const transitionDim = document.getElementById('transitionDim');

    console.assert(Boolean(app), '#app element exists');
    console.assert(Boolean(loading), '#loading element exists');
    console.assert(Boolean(transitionDim), '#transitionDim element exists');
    console.assert(typeof THREE.WebGLRenderer === 'function', 'THREE.WebGLRenderer available');
    console.assert(typeof GLTFLoader === 'function', 'GLTFLoader available');
    console.assert(typeof EffectComposer === 'function', 'EffectComposer available');

    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x000000, 4, 9);

    const camera = new THREE.PerspectiveCamera(32, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.set(0, 0.25, 4.8);

    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const getPixelRatioCap = () => window.innerWidth <= 768 ? 1.5 : 2;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
      failIfMajorPerformanceCaveat: false
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, getPixelRatioCap()));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 1);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    app.prepend(renderer.domElement);

    const composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));
    const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 0.95, 0.6, 0.15);
    composer.addPass(bloomPass);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.92);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 1.35);
    keyLight.position.set(2.2, 3, 4.5);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xff6666, 0.55);
    fillLight.position.set(-3, 0.5, 2.5);
    scene.add(fillLight);

    const rimLight = new THREE.PointLight(0xff2222, 18, 10, 2);
    rimLight.position.set(0, 0.2, 1.6);
    scene.add(rimLight);

    const sceneRoot = new THREE.Group();
    scene.add(sceneRoot);

    function createDotTexture() {
      const size = 96;
      const canvas = document.createElement('canvas');
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext('2d');
      const cx = size * 0.5;
      const cy = size * 0.5;
      const gradient = ctx.createRadialGradient(cx, cy, size * 0.04, cx, cy, size * 0.5);
      gradient.addColorStop(0.0, 'rgba(255,255,255,1.0)');
      gradient.addColorStop(0.12, 'rgba(255,255,255,0.98)');
      gradient.addColorStop(0.26, 'rgba(255,248,248,0.82)');
      gradient.addColorStop(0.48, 'rgba(255,128,128,0.28)');
      gradient.addColorStop(0.78, 'rgba(255,48,48,0.08)');
      gradient.addColorStop(1.0, 'rgba(255,0,0,0.0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, size, size);
      const texture = new THREE.CanvasTexture(canvas);
      texture.colorSpace = THREE.SRGBColorSpace;
      texture.needsUpdate = true;
      return texture;
    }

    const xDotsUniforms = {
      uTime: { value: 0 },
      uScan: { value: 0 },
      uPulseBand: { value: 1 },
      uPulseGain: { value: 0 },
      uOpacity: { value: 0.84 },
      uTexture: { value: createDotTexture() }
    };

    const xDotsMaterial = new THREE.ShaderMaterial({
      uniforms: xDotsUniforms,
      transparent: true,
      depthWrite: false,
      depthTest: true,
      blending: THREE.AdditiveBlending,
      vertexShader: `
        attribute float aSeed;
        attribute float aPath;
        attribute float aLayer;
        attribute float aCenterBias;
        attribute float aAccent;
        attribute float aScanCoord;
        attribute float aSizeJitter;
        varying float vSeed;
        varying float vPath;
        varying float vLayer;
        varying float vCenterBias;
        varying float vAccent;
        varying float vScanCoord;
        varying float vSizeJitter;
        uniform float uTime;
        uniform float uPulseGain;

        void main() {
          vSeed = aSeed;
          vPath = aPath;
          vLayer = aLayer;
          vCenterBias = aCenterBias;
          vAccent = aAccent;
          vScanCoord = aScanCoord;
          vSizeJitter = aSizeJitter;

          vec3 p = position;
          float haloDamp = 1.0 - aLayer * 0.58;
          float driftA = sin(uTime * 0.58 + aSeed * 6.2831);
          float driftB = cos(uTime * 0.41 + aSeed * 11.0);
          p.z += driftA * 0.010 * haloDamp;
          p.x += driftB * 0.0030 * aLayer;
          p.y += driftA * 0.0025 * aLayer;

          vec4 mvPosition = modelViewMatrix * vec4(p, 1.0);
          float baseSize = mix(3.8, 8.9, 1.0 - aLayer);
          float localPulse = 0.93 + sin(uTime * 1.10 + aSeed * 13.0) * 0.08;
          float premium = mix(0.95, 1.42, aCenterBias);
          float syncBoost = 1.0 + uPulseGain * (0.16 + aCenterBias * 0.20 + aAccent * 0.32);
          float jitter = mix(0.85, 1.28, aSizeJitter);
          gl_PointSize = baseSize * localPulse * premium * syncBoost * jitter * (4.15 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        uniform sampler2D uTexture;
        uniform float uTime;
        uniform float uScan;
        uniform float uPulseBand;
        uniform float uPulseGain;
        uniform float uOpacity;
        varying float vSeed;
        varying float vPath;
        varying float vLayer;
        varying float vCenterBias;
        varying float vAccent;
        varying float vScanCoord;
        varying float vSizeJitter;

        void main() {
          vec4 tex = texture2D(uTexture, gl_PointCoord);
          float pulse = 0.64 + 0.36 * sin(uTime * 1.55 + vSeed * 18.0);
          float scan = 1.0 - smoothstep(0.0, 0.090, abs(vScanCoord - uScan));
          float scanCore = 1.0 - smoothstep(0.0, 0.024, abs(vScanCoord - uScan));
          float scanTrail = smoothstep(-0.16, 0.0, vScanCoord - uScan) * (1.0 - smoothstep(0.0, 0.12, vScanCoord - uScan));

          float centerDistance = abs(vPath - 0.5) * 2.0;
          float syncRing = 1.0 - smoothstep(0.0, 0.11, abs(centerDistance - uPulseBand));
          float syncCore = 1.0 - smoothstep(0.0, 0.040, abs(centerDistance - uPulseBand));
          float centerGlow = pow(vCenterBias, 1.5) * (0.18 + uPulseGain * 0.72);
          float halo = 1.0 - vLayer;

          vec3 deep = vec3(0.08, 0.006, 0.010);
          vec3 base = mix(vec3(0.22, 0.015, 0.020), vec3(0.70, 0.052, 0.060), vCenterBias);
          vec3 laser = vec3(1.0, 0.12, 0.08);
          vec3 hot = vec3(1.0, 0.32, 0.17);
          vec3 pearl = vec3(1.0, 0.52, 0.30);
          vec3 color = mix(deep, base, 0.86 + vAccent * 0.14);
          color += base * centerGlow * 0.65;
          color += laser * (scan * 0.88 + scanTrail * 0.24);
          color += hot * scanCore * (0.48 + halo * 0.35);
          color += laser * syncRing * uPulseGain * (0.42 + vAccent * 0.20);
          color += pearl * syncCore * uPulseGain * (0.16 + vCenterBias * 0.22);

          float alpha = tex.a * uOpacity;
          alpha *= (0.14 + pulse * 0.14 + vCenterBias * 0.25 + scan * 0.76 + scanCore * 0.34);
          alpha += tex.a * syncRing * uPulseGain * (0.08 + vAccent * 0.06 + vCenterBias * 0.10);
          alpha += tex.a * centerGlow * 0.12;
          alpha *= mix(0.52, 1.0, halo);
          alpha *= mix(0.90, 1.10, vSizeJitter);

          gl_FragColor = vec4(color, alpha);
        }
      `
    });

    function createXDots() {
      const positions = [];
      const seeds = [];
      const path = [];
      const layers = [];
      const centerBias = [];
      const accent = [];
      const scanCoords = [];
      const sizeJitter = [];
      const countPerStroke = 154;
      const width = 3.74;
      const height = 2.44;

      for (let stroke = 0; stroke < 2; stroke++) {
        for (let i = 0; i < countPerStroke; i++) {
          const t = i / (countPerStroke - 1);
          const x = THREE.MathUtils.lerp(-width / 2, width / 2, t);
          const y = stroke === 0
            ? THREE.MathUtils.lerp(-height / 2, height / 2, t)
            : THREE.MathUtils.lerp(height / 2, -height / 2, t);
          const center = 1.0 - Math.min(1.0, Math.abs(t - 0.5) * 2.0);

          const pushPoint = (jx, jy, jz, layer, accentWeight = 0.0, sizeWeight = Math.random()) => {
            const px = x + jx;
            const py = y + jy;
            positions.push(px, py, -0.86 + jz);
            seeds.push(Math.random());
            path.push(t);
            layers.push(layer);
            centerBias.push(center);
            accent.push(accentWeight);
            scanCoords.push(THREE.MathUtils.clamp((py + height * 0.5) / height, 0, 1));
            sizeJitter.push(sizeWeight);
          };

          pushPoint((Math.random() - 0.5) * 0.008, (Math.random() - 0.5) * 0.008, (Math.random() - 0.5) * 0.007, 0.0, 0.28 + center * 0.56, 0.55 + center * 0.30);

          if (i % 2 === 0) {
            pushPoint((Math.random() - 0.5) * 0.028, (Math.random() - 0.5) * 0.028, -0.010 - Math.random() * 0.018, 1.0, 0.05 + center * 0.10, Math.random() * 0.85);
          }

          if (i % 3 === 0) {
            const orbit = (stroke === 0 ? 1 : -1) * (0.012 + Math.random() * 0.014);
            pushPoint(orbit, -orbit * 0.60, -0.010 - Math.random() * 0.020, 0.72, 0.10 + center * 0.16, 0.35 + Math.random() * 0.55);
          }

          if (center > 0.76 && i % 2 === 0) {
            pushPoint((Math.random() - 0.5) * 0.050, (Math.random() - 0.5) * 0.050, 0.008 + Math.random() * 0.018, 0.18, 0.90, 0.72 + Math.random() * 0.28);
          }
        }
      }

      for (let i = 0; i < 34; i++) {
        const angle = (i / 34) * Math.PI * 2.0;
        const radius = 0.028 + Math.random() * 0.080;
        const px = Math.cos(angle) * radius;
        const py = Math.sin(angle) * radius * 0.92 - 0.02;
        positions.push(px, py, -0.80 + Math.random() * 0.038);
        seeds.push(Math.random());
        path.push(0.5 + (Math.random() - 0.5) * 0.040);
        layers.push(0.08 + Math.random() * 0.16);
        centerBias.push(1.0);
        accent.push(1.0);
        scanCoords.push(THREE.MathUtils.clamp((py + height * 0.5) / height, 0, 1));
        sizeJitter.push(0.80 + Math.random() * 0.20);
      }

      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
      geometry.setAttribute('aSeed', new THREE.Float32BufferAttribute(seeds, 1));
      geometry.setAttribute('aPath', new THREE.Float32BufferAttribute(path, 1));
      geometry.setAttribute('aLayer', new THREE.Float32BufferAttribute(layers, 1));
      geometry.setAttribute('aCenterBias', new THREE.Float32BufferAttribute(centerBias, 1));
      geometry.setAttribute('aAccent', new THREE.Float32BufferAttribute(accent, 1));
      geometry.setAttribute('aScanCoord', new THREE.Float32BufferAttribute(scanCoords, 1));
      geometry.setAttribute('aSizeJitter', new THREE.Float32BufferAttribute(sizeJitter, 1));

      const points = new THREE.Points(geometry, xDotsMaterial);
      points.renderOrder = 0;
      points.position.y = -0.02;
      sceneRoot.add(points);

      console.assert(positions.length / 3 > countPerStroke * 2, 'Premium X dots geometry generated');
      return points;
    }

    const xDots = createXDots();

    const scanUniforms = {
      uScanY: { value: 0 },
      uScanWidth: { value: 0.16 },
      uScanGlow: { value: 1.05 }
    };

    const creatureUniforms = {
      uCreatureTime: { value: 0 },
      uLegMotion: { value: 1.0 },
      uHoverBoost: { value: 0.0 },
      uHeadTurn: { value: 0.0 },
      uTwerk: { value: 0.0 },
      uCrypto: { value: 0.0 }
    };

    let modelRoot = null;
    let wireframeRoot = null;
    let mixer = null;
    const wireframeMaterials = [];
    let scanMinY = -1;
    let scanMaxY = 1;
    let modelBaseY = 0;
    let modelBaseScale = 1;
    let wireframeTargetOpacity = 0;
    let wireframeCurrentOpacity = 0;
    let displayMaterials = [];

    let scanPhase = 0;
    let prevScanPhase = 0;
    let glitchPhase = 0;
    let headlineEl = null;
    let headlineEraseProgress = 0;
    let headlineEraseStarted = false;
    let headlineEraseStartPhase = 0;

    const pointerTarget = new THREE.Vector2(0, 0);
    const pointerCurrent = new THREE.Vector2(0, 0);
    const pointerNdc = new THREE.Vector2(999, 999);
    const raycaster = new THREE.Raycaster();
    headlineEl = document.querySelector('.headline-wrap');

    let dragActive = false;
    let dragLastX = 0;
    let dragLastY = 0;
    let dragYaw = 0.22;
    let dragPitch = -0.05;
    let yawVelocity = 0;
    let pitchVelocity = 0;
    let clickCount = 0;
    let activeModelKind = 'tardigrade';
    let transitionState = 'idle';
    let transitionTimer = 0;
    let pendingModelSwap = false;
    let animationStarted = false;
    let transitionDarkness = 0;

    function applyCreatureMotion(material, includeScan = false) {
      material.onBeforeCompile = shader => {
        shader.uniforms.uCreatureTime = creatureUniforms.uCreatureTime;
        shader.uniforms.uLegMotion = creatureUniforms.uLegMotion;
        shader.uniforms.uHoverBoost = creatureUniforms.uHoverBoost;
        shader.uniforms.uHeadTurn = creatureUniforms.uHeadTurn;
        shader.uniforms.uTwerk = creatureUniforms.uTwerk;
        shader.uniforms.uCrypto = creatureUniforms.uCrypto;

        if (includeScan) {
          shader.uniforms.uScanY = scanUniforms.uScanY;
          shader.uniforms.uScanWidth = scanUniforms.uScanWidth;
          shader.uniforms.uScanGlow = scanUniforms.uScanGlow;
        }

        shader.vertexShader = `
          varying vec3 vWorldPosition;
          uniform float uCreatureTime;
          uniform float uLegMotion;
          uniform float uHoverBoost;
          uniform float uHeadTurn;
          uniform float uTwerk;
          uniform float uCrypto;
        ` + shader.vertexShader.replace(
          '#include <begin_vertex>',
          `
          #include <begin_vertex>
          vec3 localP = transformed;
          float sideMask = smoothstep(0.16, 0.48, abs(localP.x));
          float lowerMask = 1.0 - smoothstep(-0.10, 0.26, localP.y);
          float segmentMask = 0.45 + 0.55 * smoothstep(0.02, 0.95, abs(localP.z));
          float legMask = sideMask * lowerMask * segmentMask;
          float clawMask = smoothstep(0.26, 0.58, abs(localP.x)) * (1.0 - smoothstep(-0.24, 0.08, localP.y));
          float sideSign = sign(localP.x + 0.00001);
          float gait = uCreatureTime * 5.2 + localP.z * 7.5 + sideSign * 1.35;
          float gait2 = uCreatureTime * 6.4 - localP.z * 5.8 + sideSign * 0.8;
          float crypto = clamp(uCrypto, 0.0, 1.0);
          float motionAmp = uLegMotion * (1.0 + uHoverBoost * 0.45) * (1.0 - crypto * 0.82);
          vec3 radialDir = normalize(vec3(localP.x * 1.15, min(localP.y, 0.0) - 0.02, localP.z * 0.55 + 0.0001));
          transformed.y += sin(gait) * 0.028 * legMask * motionAmp;
          transformed.x += sideSign * (0.018 * sin(gait) + 0.010 * cos(gait2)) * legMask * motionAmp;
          transformed.z += cos(gait2) * 0.022 * legMask * motionAmp;
          transformed += radialDir * (sin(gait2) * 0.014 * clawMask * motionAmp);

          float rearMask = smoothstep(-0.62, -0.12, localP.z) * (1.0 - smoothstep(0.08, 0.46, localP.y));
          float booty = sin(uCreatureTime * 10.6 + localP.y * 6.0) * 0.028 * rearMask * uTwerk;
          transformed.x += booty * sideSign;
          transformed.y += abs(booty) * 0.22;
          transformed.z += cos(uCreatureTime * 10.6 + localP.x * 4.0) * 0.010 * rearMask * uTwerk;

          float bodyMask = 1.0 - smoothstep(0.54, 0.98, abs(localP.z));
          float curlMask = mix(bodyMask, 1.0, legMask * 0.8);
          transformed.x *= 1.0 - crypto * (0.10 + legMask * 0.10);
          transformed.z *= 1.0 - crypto * (0.16 + bodyMask * 0.12);
          transformed.y += abs(localP.x) * crypto * 0.055 * curlMask;
          transformed -= radialDir * crypto * (0.055 * legMask + 0.018 * clawMask);
          transformed.z -= crypto * 0.05 * (bodyMask + legMask * 0.4);
          transformed.y += sin(uCreatureTime * 18.0 + localP.z * 3.5) * 0.004 * crypto;

          float headMask = smoothstep(0.10, 0.52, localP.z) * smoothstep(-0.02, 0.30, localP.y);
          float headTurnAngle = uHeadTurn * 1.38 * headMask * (1.0 - crypto * 0.72);
          vec3 headPivot = vec3(0.0, 0.05, 0.22);
          vec3 headLocal = transformed - headPivot;
          float headC = cos(headTurnAngle);
          float headS = sin(headTurnAngle);
          vec2 headZX = vec2(headLocal.z, headLocal.x);
          headLocal.z = headZX.x * headC - headZX.y * headS;
          headLocal.x = headZX.x * headS + headZX.y * headC;
          transformed = headLocal + headPivot;
          transformed.y += headMask * uHeadTurn * 0.014;
          transformed.z -= headMask * crypto * 0.06;

          vWorldPosition = (modelMatrix * vec4(transformed, 1.0)).xyz;
          `
        );

        if (includeScan) {
          shader.fragmentShader = `
            varying vec3 vWorldPosition;
            uniform float uScanY;
            uniform float uScanWidth;
            uniform float uScanGlow;
          ` + shader.fragmentShader.replace(
            '#include <dithering_fragment>',
            `
            float scanBand = 1.0 - smoothstep(0.0, uScanWidth, abs(vWorldPosition.y - uScanY));
            float innerBand = 1.0 - smoothstep(0.0, uScanWidth * 0.35, abs(vWorldPosition.y - uScanY));
            gl_FragColor.rgb += vec3(1.0, 0.03, 0.03) * scanBand * uScanGlow;
            gl_FragColor.rgb += vec3(1.0, 0.18, 0.18) * innerBand * (uScanGlow * 0.85);
            #include <dithering_fragment>
            `
          );
        }
      };
      material.needsUpdate = true;
      return material;
    }

    function addScanEffect(material) {
      return applyCreatureMotion(material, true);
    }

    function makeDisplayMaterial(sourceMaterial) {
      const material = new THREE.MeshPhysicalMaterial({
        color: sourceMaterial?.color ? sourceMaterial.color.clone() : new THREE.Color(0xffffff),
        map: sourceMaterial?.map || null,
        normalMap: sourceMaterial?.normalMap || null,
        roughnessMap: sourceMaterial?.roughnessMap || null,
        metalnessMap: sourceMaterial?.metalnessMap || null,
        aoMap: sourceMaterial?.aoMap || null,
        emissiveMap: sourceMaterial?.emissiveMap || null,
        transparent: sourceMaterial?.transparent || false,
        opacity: sourceMaterial?.opacity ?? 1,
        side: THREE.DoubleSide,
        roughness: sourceMaterial?.roughness ?? 0.7,
        metalness: sourceMaterial?.metalness ?? 0.12,
        clearcoat: 0.12,
        clearcoatRoughness: 0.82,
        envMapIntensity: 1.0
      });

      if (sourceMaterial?.emissive) {
        material.emissive.copy(sourceMaterial.emissive);
        material.emissiveIntensity = sourceMaterial.emissiveIntensity ?? 1;
      } else {
        material.emissive.setRGB(0.02, 0.02, 0.02);
        material.emissiveIntensity = 0.5;
      }

      displayMaterials.push(material);
      return addScanEffect(material);
    }

    function createWireframeMaterial() {
      const material = new THREE.MeshBasicMaterial({
        color: new THREE.Color(0xbec6d1),
        wireframe: true,
        transparent: true,
        opacity: 0,
        depthWrite: false,
        depthTest: true,
        blending: THREE.NormalBlending,
        toneMapped: false,
        polygonOffset: true,
        polygonOffsetFactor: -0.5,
        polygonOffsetUnits: -0.5
      });
      wireframeMaterials.push(material);
      return applyCreatureMotion(material, false);
    }

    function fitModelToView(object) {
      const box = new THREE.Box3().setFromObject(object);
      const size = new THREE.Vector3();
      const center = new THREE.Vector3();
      box.getSize(size);
      box.getCenter(center);

      const maxDim = Math.max(size.x, size.y, size.z);
      const targetSize = 2.4;
      const scale = targetSize / (maxDim || 1);
      object.scale.setScalar(scale);

      const scaledCenter = center.clone().multiplyScalar(scale);
      object.position.sub(scaledCenter);
      object.position.y -= 0.1;

      const fittedBox = new THREE.Box3().setFromObject(object);
      scanMinY = fittedBox.min.y - 0.12;
      scanMaxY = fittedBox.max.y + 0.12;

      console.assert(Number.isFinite(scanMinY), 'scanMinY is finite');
      console.assert(Number.isFinite(scanMaxY), 'scanMaxY is finite');
      console.assert(scanMaxY > scanMinY, 'scanMaxY is larger than scanMinY');
    }

    function registerStressClick() {
      if (transitionState === 'compressing' || transitionState === 'compressing-return' || transitionState === 'expanding') return;

      glitchPhase = Math.min(1, glitchPhase + 0.18);

      if (activeModelKind === 'crypto' && transitionState === 'holding') {
        clickCount += 1;
        if (clickCount >= 10) {
          clickCount = 0;
          transitionState = 'compressing-return';
          transitionTimer = 0;
          pendingModelSwap = false;
          loading.textContent = '';
          loading.classList.add('hidden');
        }
        return;
      }

      if (activeModelKind === 'tardigrade' && transitionState === 'idle') {
        clickCount += 1;
        if (clickCount >= 5) {
          clickCount = 0;
          transitionState = 'compressing';
          transitionTimer = 0;
          pendingModelSwap = false;
          loading.textContent = '';
          loading.classList.add('hidden');
        }
      }
    }

    function updateSyncedHeadline(phase, glitchAmount, elapsed) {
      if (!headlineEl) return;
      const sweepIntensity = Math.max(0.1, 1.0 - Math.abs(phase - 0.5) * 2.0);
      const combined = Math.min(1, sweepIntensity + glitchAmount * 0.9);

      if (!headlineEraseStarted && elapsed >= 3.0) {
        headlineEraseStarted = true;
        headlineEraseStartPhase = phase;
      }

      if (!headlineEraseStarted) {
        headlineEraseProgress = 0;
      } else {
        const phaseDelta = ((phase - headlineEraseStartPhase) + 1) % 1;
        headlineEraseProgress = Math.max(headlineEraseProgress, THREE.MathUtils.smoothstep(phaseDelta, 0.05, 0.95));
      }

      headlineEl.style.setProperty('--headline-progress', phase.toFixed(4));
      headlineEl.style.setProperty('--headline-intensity', combined.toFixed(4));
      headlineEl.style.setProperty('--headline-erase', headlineEraseProgress.toFixed(4));
    }

    function disposeCurrentModel() {
      if (wireframeRoot) {
        sceneRoot.remove(wireframeRoot);
        wireframeRoot.traverse(child => {
          if (child.isMesh) {
            child.geometry?.dispose?.();
            if (Array.isArray(child.material)) child.material.forEach(mat => mat?.dispose?.());
            else child.material?.dispose?.();
          }
        });
        wireframeRoot = null;
      }

      if (modelRoot) {
        sceneRoot.remove(modelRoot);
        modelRoot.traverse(child => {
          if (child.isMesh) {
            child.geometry?.dispose?.();
            if (Array.isArray(child.material)) child.material.forEach(mat => mat?.dispose?.());
            else child.material?.dispose?.();
          }
        });
        modelRoot = null;
      }

      wireframeMaterials.length = 0;
      displayMaterials.length = 0;
      mixer = null;
    }

    function installModel(gltf, kind) {
      activeModelKind = kind;
      modelRoot = gltf.scene;
      console.assert(Boolean(modelRoot), 'GLB scene exists');

      if (gltf.animations && gltf.animations.length > 0) {
        mixer = new THREE.AnimationMixer(modelRoot);
        for (const clip of gltf.animations) {
          mixer.clipAction(clip).play();
        }
      }

      let meshCount = 0;
      modelRoot.traverse(child => {
        if (child.isMesh) {
          meshCount += 1;
          child.castShadow = false;
          child.receiveShadow = false;
          if (Array.isArray(child.material)) child.material = child.material.map(mat => makeDisplayMaterial(mat));
          else child.material = makeDisplayMaterial(child.material);
        }
      });

      console.assert(meshCount > 0, 'GLB contains at least one mesh');
      fitModelToView(modelRoot);
      modelBaseY = modelRoot.position.y;
      modelBaseScale = modelRoot.scale.x;
      sceneRoot.add(modelRoot);

      wireframeRoot = modelRoot.clone(true);
      wireframeRoot.visible = true;
      wireframeRoot.renderOrder = 8;
      wireframeRoot.scale.multiplyScalar(1.0012);
      wireframeRoot.traverse(child => {
        if (child.isMesh) {
          child.material = createWireframeMaterial();
          child.renderOrder = 8;
        }
      });
      sceneRoot.add(wireframeRoot);

      console.assert(wireframeMaterials.length > 0, 'Wireframe materials created');
    }

    function loadModelFromUrl(url, label, kind, { replaceExisting = false, onLoaded = null } = {}) {
      const gltfLoader = new GLTFLoader();
      loading.textContent = label || '';
      if (label) loading.classList.remove('hidden');
      else loading.classList.add('hidden');

      gltfLoader.load(
        url,
        gltf => {
          if (replaceExisting) disposeCurrentModel();
          installModel(gltf, kind);
          loading.classList.add('hidden');
          if (!animationStarted) {
            animationStarted = true;
            queueAnimationFrame();
          }
          if (typeof onLoaded === 'function') onLoaded();
        },
        xhr => {
          if (label && xhr.total > 0) {
            const percent = Math.round((xhr.loaded / xhr.total) * 100);
            loading.textContent = `${label} ${percent}%`;
          }
        },
        error => {
          loading.innerHTML = kind === 'crypto'
            ? 'Could not load the cryptobiosis GLB model.'
            : 'Could not load the embedded GLB model.';
          console.error(error);
        }
      );
    }

    function loadModel() {
      headlineEraseStarted = false;
      headlineEraseProgress = 0;
      headlineEraseStartPhase = 0;
      clickCount = 0;
      transitionState = 'idle';
      transitionTimer = 0;
      pendingModelSwap = false;
      if (headlineEl) headlineEl.style.setProperty('--headline-erase', '0');
      loadModelFromUrl(MODEL_URL, '', 'tardigrade');
    }

    window.addEventListener('pointerdown', event => {
      dragActive = true;
      dragLastX = event.clientX;
      dragLastY = event.clientY;
      document.body.style.cursor = 'grabbing';
    });

    window.addEventListener('pointermove', event => {
      const prevX = dragLastX;
      const prevY = dragLastY;
      pointerTarget.x = (event.clientX / window.innerWidth) * 2 - 1;
      pointerTarget.y = (event.clientY / window.innerHeight) * 2 - 1;
      pointerNdc.copy(pointerTarget);

      const moveDx = event.clientX - prevX;
      const moveDy = event.clientY - prevY;

      if (dragActive) {
        const dx = moveDx;
        const dy = moveDy;
        dragYaw += dx * 0.0085;
        dragPitch = THREE.MathUtils.clamp(dragPitch + dy * 0.0042, -0.55, 0.45);
        yawVelocity = dx * 0.0018;
        pitchVelocity = dy * 0.0012;
      }

      dragLastX = event.clientX;
      dragLastY = event.clientY;
    });

    window.addEventListener('pointerup', () => {
      dragActive = false;
      document.body.style.cursor = '';
    });


    window.addEventListener('click', event => {
      if (event.target && event.target.closest && event.target.closest('.explore-btn')) return;
      registerStressClick();
    });

    window.addEventListener('pointerleave', () => {
      dragActive = false;
      pointerTarget.set(0, 0);
      pointerNdc.set(999, 999);
      document.body.style.cursor = '';
    });

    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      composer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, getPixelRatioCap()));
      bloomPass.resolution.set(window.innerWidth, window.innerHeight);
    });

    const clock = new THREE.Clock();
    let hasLoggedFirstFrame = false;
    let frameHandle = 0;
    let elapsed = 0;

    function queueAnimationFrame() {
      if (!document.hidden && frameHandle === 0) {
        frameHandle = requestAnimationFrame(animate);
      }
    }

    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        if (frameHandle !== 0) cancelAnimationFrame(frameHandle);
        frameHandle = 0;
        return;
      }
      if (animationStarted) {
        clock.getDelta();
        queueAnimationFrame();
      }
    });

    function animate() {
      frameHandle = 0;
      if (document.hidden) return;

      const delta = Math.min(clock.getDelta(), 0.05);
      elapsed += delta * (reducedMotionQuery.matches ? 0.35 : 1);
      prevScanPhase = scanPhase;
      scanPhase = (elapsed * 0.19) % 1;
      const headlinePhase = (elapsed * 0.92) % 1;

      glitchPhase = Math.max(0, glitchPhase - delta * 1.25);

      let stateScaleFactor = activeModelKind === 'crypto' ? 0.92 : 1.0;
      let stateLegFactor = activeModelKind === 'crypto' ? 0.10 : 1.0;
      let stateCrypto = activeModelKind === 'crypto' ? 1.0 : 0.0;
      let headTrackFactor = activeModelKind === 'crypto' ? 0.0 : 1.0;
      let hoverFactor = activeModelKind === 'crypto' ? 0.45 : 1.0;
      let targetDarkness = activeModelKind === 'crypto' ? 0.48 : 0.0;

      if (transitionState === 'compressing') {
        transitionTimer += delta;
        const t = THREE.MathUtils.clamp(transitionTimer / 1.0, 0, 1);
        const ease = THREE.MathUtils.smoothstep(t, 0, 1);
        stateScaleFactor = THREE.MathUtils.lerp(1.0, 0.82, ease);
        stateLegFactor = THREE.MathUtils.lerp(1.0, 0.08, ease);
        stateCrypto = ease;
        headTrackFactor = 1.0 - ease * 0.85;
        hoverFactor = 1.0 - ease * 0.55;
        targetDarkness = THREE.MathUtils.lerp(0.0, 0.82, ease);
        if (t >= 1 && !pendingModelSwap) {
          pendingModelSwap = true;
          loadModelFromUrl(SECOND_MODEL_URL, '', 'crypto', {
            replaceExisting: true,
            onLoaded: () => {
              transitionState = 'holding';
              transitionTimer = 0;
              pendingModelSwap = false;
              clickCount = 0;
            }
          });
        }
      } else if (transitionState === 'holding') {
        transitionTimer += delta;
        stateScaleFactor = 0.92;
        stateLegFactor = 0.08;
        stateCrypto = 1.0;
        headTrackFactor = 0.0;
        hoverFactor = 0.45;
        targetDarkness = 0.48;
      } else if (transitionState === 'compressing-return') {
        transitionTimer += delta;
        const t = THREE.MathUtils.clamp(transitionTimer / 0.8, 0, 1);
        const ease = THREE.MathUtils.smoothstep(t, 0, 1);
        stateScaleFactor = THREE.MathUtils.lerp(0.92, 0.76, ease);
        stateLegFactor = THREE.MathUtils.lerp(0.08, 0.02, ease);
        stateCrypto = 1.0;
        headTrackFactor = 0.0;
        hoverFactor = 0.35;
        targetDarkness = THREE.MathUtils.lerp(0.46, 0.86, ease);
        if (t >= 1 && !pendingModelSwap) {
          pendingModelSwap = true;
          loadModelFromUrl(MODEL_URL, '', 'tardigrade', {
            replaceExisting: true,
            onLoaded: () => {
              transitionState = 'expanding';
              transitionTimer = 0;
              pendingModelSwap = false;
              glitchPhase = 0.35;
            }
          });
        }
      } else if (transitionState === 'expanding') {
        transitionTimer += delta;
        const t = THREE.MathUtils.clamp(transitionTimer / 1.15, 0, 1);
        const ease = THREE.MathUtils.smoothstep(t, 0, 1);
        stateScaleFactor = THREE.MathUtils.lerp(0.82, 1.0, ease);
        stateLegFactor = THREE.MathUtils.lerp(0.08, 1.0, ease);
        stateCrypto = 1.0 - ease;
        headTrackFactor = THREE.MathUtils.lerp(0.15, 1.0, ease);
        hoverFactor = THREE.MathUtils.lerp(0.55, 1.0, ease);
        targetDarkness = THREE.MathUtils.lerp(0.68, 0.0, ease);
        if (t >= 1) {
          transitionState = 'idle';
          transitionTimer = 0;
          pendingModelSwap = false;
          loading.classList.add('hidden');
        }
      }

      const scanT = scanPhase;
      scanUniforms.uScanY.value = THREE.MathUtils.lerp(scanMinY, scanMaxY, scanT);
      creatureUniforms.uCreatureTime.value = elapsed;
      creatureUniforms.uLegMotion.value = stateLegFactor;
      creatureUniforms.uCrypto.value = stateCrypto;
      updateSyncedHeadline(headlinePhase, glitchPhase, elapsed);

      transitionDarkness = THREE.MathUtils.lerp(transitionDarkness, targetDarkness, 0.12);
      if (transitionDim) {
        transitionDim.style.opacity = transitionDarkness.toFixed(3);
      }
      const lightFactor = 1.0 - transitionDarkness * 0.72;
      ambientLight.intensity = 0.92 * (1.0 - transitionDarkness * 0.52);
      keyLight.intensity = 1.35 * (1.0 - transitionDarkness * 0.78);
      fillLight.intensity = 0.55 * (1.0 - transitionDarkness * 0.84);

      pointerCurrent.lerp(pointerTarget, 0.08);

      if (!dragActive) {
        dragYaw += yawVelocity;
        dragPitch = THREE.MathUtils.clamp(dragPitch + pitchVelocity, -0.55, 0.45);
        yawVelocity *= 0.92;
        pitchVelocity *= 0.88;
      }

      if (mixer) {
        mixer.update(delta);
      }

      if (modelRoot) {
        const isCryptoModel = activeModelKind === 'crypto';
        const hoverLift = (wireframeCurrentOpacity / 0.42) * 0.06 * hoverFactor;
        const floatY = Math.sin(elapsed * 1.35) * (isCryptoModel ? 0.022 : 0.05) + Math.sin(elapsed * 0.42) * (isCryptoModel ? 0.012 : 0.025);
        const idleYaw = Math.sin(elapsed * 0.42) * (isCryptoModel ? 0.015 : 0.035);
        const idleRoll = Math.sin(elapsed * 1.1) * (isCryptoModel ? 0.008 : 0.018);
        const idlePitch = Math.cos(elapsed * 0.86) * (isCryptoModel ? 0.005 : 0.012);
        const baseScale = modelBaseScale * (1 + Math.sin(elapsed * 2.0) * (isCryptoModel ? 0.002 : 0.005)) * stateScaleFactor;
        const targetYaw = dragYaw + idleYaw;
        const rearViewBlend = isCryptoModel ? 0.0 : THREE.MathUtils.smoothstep(-Math.cos(targetYaw), 0.45, 0.92);

        creatureUniforms.uHeadTurn.value = THREE.MathUtils.lerp(creatureUniforms.uHeadTurn.value, 0.0, 0.18);
        creatureUniforms.uTwerk.value = THREE.MathUtils.lerp(creatureUniforms.uTwerk.value, 0.0, 0.18);

        const targetRotationY = isCryptoModel
          ? (targetYaw + Math.PI)
          : targetYaw;
        const targetRotationX = isCryptoModel
          ? (dragPitch * 0.45 + idlePitch * 0.55 - pointerCurrent.y * 0.014)
          : (dragPitch + idlePitch - pointerCurrent.y * 0.045 * headTrackFactor);
        const targetRotationZ = isCryptoModel
          ? (idleRoll * 0.55 + glitchPhase * 0.003)
          : (idleRoll + glitchPhase * 0.012);

        modelRoot.scale.x = THREE.MathUtils.lerp(modelRoot.scale.x, baseScale, 0.08);
        modelRoot.scale.y = THREE.MathUtils.lerp(modelRoot.scale.y, baseScale * (isCryptoModel ? 0.97 : 1.0), 0.08);
        modelRoot.scale.z = THREE.MathUtils.lerp(modelRoot.scale.z, baseScale * (isCryptoModel ? 0.95 : 1.0), 0.08);
        modelRoot.position.x = THREE.MathUtils.lerp(modelRoot.position.x, 0, 0.05);
        modelRoot.position.y = THREE.MathUtils.lerp(modelRoot.position.y, modelBaseY + floatY + hoverLift - (1.0 - stateScaleFactor) * 0.18 + (isCryptoModel ? 0.02 : 0.0), 0.08);
        modelRoot.rotation.y = THREE.MathUtils.lerp(modelRoot.rotation.y, targetRotationY, 0.08);
        modelRoot.rotation.x = THREE.MathUtils.lerp(modelRoot.rotation.x, targetRotationX, 0.07);
        modelRoot.rotation.z = THREE.MathUtils.lerp(modelRoot.rotation.z, targetRotationZ, 0.07);

        const emissiveBoost = isCryptoModel ? 0.30 : (0.34 + glitchPhase * 0.10 - transitionDarkness * 0.08 + rearViewBlend * 0.04);
        for (const mat of displayMaterials) {
          if (mat.emissiveIntensity !== undefined) mat.emissiveIntensity = emissiveBoost;
        }
      }

      if (wireframeRoot && modelRoot) {
        wireframeRoot.rotation.copy(modelRoot.rotation);
        wireframeRoot.position.copy(modelRoot.position);
        const wireScaleMul = 1.0012 + Math.sin(elapsed * 2.0) * 0.0007;
        wireframeRoot.scale.set(
          modelRoot.scale.x * wireScaleMul,
          modelRoot.scale.y * wireScaleMul,
          modelRoot.scale.z * wireScaleMul
        );

        raycaster.setFromCamera(pointerNdc, camera);
        const intersects = raycaster.intersectObject(modelRoot, true);
        const isHoveringModel = intersects.length > 0;
        wireframeTargetOpacity = isHoveringModel ? 0.18 : 0.0;
        wireframeCurrentOpacity = THREE.MathUtils.lerp(wireframeCurrentOpacity, wireframeTargetOpacity + glitchPhase * 0.08, isHoveringModel ? 0.11 : 0.07);

        for (const mat of wireframeMaterials) {
          mat.opacity = Math.min(0.22, wireframeCurrentOpacity);
        }
      }

      creatureUniforms.uHoverBoost.value = THREE.MathUtils.lerp(
        creatureUniforms.uHoverBoost.value,
        wireframeCurrentOpacity / 0.42,
        0.08
      );

      xDotsUniforms.uTime.value = elapsed;
      xDotsUniforms.uScan.value = scanPhase;
      xDotsUniforms.uPulseBand.value = Math.abs(scanPhase - 0.5) * 2.0;
      xDotsUniforms.uPulseGain.value = Math.pow(Math.max(0.0, 1.0 - Math.abs(scanPhase - 0.5) * 2.0), 1.45);

      const pulse = 1 + xDotsUniforms.uPulseGain.value * 0.014 + Math.sin(scanPhase * Math.PI * 2.0) * 0.003 + glitchPhase * 0.003;
      xDots.scale.set(pulse, pulse * 0.999, 1);
      xDots.rotation.z = Math.sin(scanPhase * Math.PI * 2.0) * 0.003 + glitchPhase * 0.006;

      const rimBase = activeModelKind === 'crypto' ? 9.2 : 12.0;
      rimLight.intensity = rimBase * (1.0 - transitionDarkness * 0.32) + Math.sin(elapsed * 6) * (activeModelKind === 'crypto' ? 0.8 : 1.5);
      composer.render();

      if (!hasLoggedFirstFrame) {
        hasLoggedFirstFrame = true;
        console.info('[microLabsX] first WebGL frame rendered.');
      }

      queueAnimationFrame();
    }

    loadModel();

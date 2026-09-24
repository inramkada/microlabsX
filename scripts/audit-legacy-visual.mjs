import fs from 'node:fs';

const path = 'legacy/index-v1.html';
const src = fs.readFileSync(path, 'utf8');

function clean(s) {
  return s
    .replace(/data:model\/gltf-binary;base64,[A-Za-z0-9+/=]+/g, '<GLB_DATA_URI>')
    .replace(/[A-Za-z0-9+/=]{1200,}/g, '<LONG_EMBEDDED_DATA>');
}

const terms = [
  'UnrealBloomPass',
  'bloomPass',
  'AmbientLight',
  'DirectionalLight',
  'PointLight',
  'HemisphereLight',
  'SpotLight',
  'toneMapping',
  'toneMappingExposure',
  'outputColorSpace',
  'outputEncoding',
  'MeshPhysicalMaterial',
  'MeshStandardMaterial',
  'MeshPhongMaterial',
  'MeshLambertMaterial',
  'MeshBasicMaterial',
  'emissiveIntensity',
  'envMapIntensity',
  'roughness',
  'metalness',
  'clearcoat',
  'wireframe',
  'ShaderMaterial',
  'uScanGlow',
  'scanBand',
  'xDots',
  'createXDots',
  'uPulseGain',
  'registerStressClick',
  'renderer.render',
  'composer.render'
];

console.log('LEGACY_VISUAL_AUDIT_BEGIN');
console.log('bytes=' + Buffer.byteLength(src));

for (const term of terms) {
  let from = 0;
  let count = 0;
  while (count < 8) {
    const idx = src.indexOf(term, from);
    if (idx < 0) break;
    const snippet = clean(src.slice(Math.max(0, idx - 1000), Math.min(src.length, idx + 2600)));
    console.log('\n### TERM ' + term + ' #' + (count + 1) + ' @ ' + idx);
    console.log(snippet);
    from = idx + term.length;
    count++;
  }
  if (count === 0) console.log('\n### TERM ' + term + ' NOT_FOUND');
}

const regexes = [
  ['LIGHT_CTOR', /new\s+THREE\.(?:AmbientLight|DirectionalLight|PointLight|HemisphereLight|SpotLight)\([^;]{0,400}\)/g],
  ['BLOOM_CTOR', /new\s+UnrealBloomPass\([^;]{0,600}\)/g],
  ['TONE', /renderer\.(?:toneMapping|toneMappingExposure|outputColorSpace|outputEncoding)[^;]{0,300};/g],
  ['MATERIAL', /new\s+THREE\.Mesh(?:Physical|Standard|Phong|Lambert|Basic)Material\(\{[\s\S]{0,3500}?\}\)/g]
];

for (const [label, rx] of regexes) {
  console.log('\n### REGEX ' + label);
  let match;
  let n = 0;
  while ((match = rx.exec(src)) && n < 30) {
    console.log(clean(match[0]));
    n++;
  }
  if (!n) console.log('NOT_FOUND');
}

console.log('\nLEGACY_VISUAL_AUDIT_END');

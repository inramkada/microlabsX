import fs from 'node:fs';

const html = fs.readFileSync('legacy/index-v1.html', 'utf8');
const current = fs.readFileSync('src/scripts/lab-hero.js', 'utf8');

function clean(s) {
  return s
    .replace(/data:model\/gltf-binary;base64,[A-Za-z0-9+/=]+/g, '<GLB_DATA_URI>')
    .replace(/[A-Za-z0-9+/=]{1200,}/g, '<LONG_EMBEDDED_DATA>');
}

console.log('LEGACY_RUNTIME_AUDIT_BEGIN');
console.log('legacy_bytes=' + Buffer.byteLength(html));

const importMapMatch = html.match(/<script\s+type=["']importmap["'][^>]*>([\s\S]*?)<\/script>/i);
if (importMapMatch) {
  console.log('\n### IMPORTMAP');
  console.log(clean(importMapMatch[1]).slice(0,12000));
} else {
  console.log('\n### IMPORTMAP NOT_FOUND');
}

const scripts = [...html.matchAll(/<script([^>]*)>([\s\S]*?)<\/script>/gi)];
const moduleScript = scripts
  .map(m => ({attrs:m[1], body:m[2]}))
  .find(x => /type=["']module["']/i.test(x.attrs) && x.body.includes("import * as THREE"));

if (!moduleScript) throw new Error('Legacy Three module script not found');

let legacy = moduleScript.body;

// Replace only the two giant embedded models with the v2 external URLs.
legacy = legacy.replace(
  /const MODEL_URL\s*=\s*['"]data:model\/gltf-binary;base64,[A-Za-z0-9+/=]+['"]\s*;/,
  "const MODEL_URL = '/assets/models/tardigrade.glb';"
);
legacy = legacy.replace(
  /const SECOND_MODEL_URL\s*=\s*['"]data:model\/gltf-binary;base64,[A-Za-z0-9+/=]+['"]\s*;/,
  "const SECOND_MODEL_URL = '/assets/models/crypto-specimen.glb';"
);

// Normalize the script-tag indentation only.
const lines = legacy.replace(/^\n+|\n+$/g,'').split('\n');
const indents = lines.filter(l=>l.trim()).map(l => (l.match(/^\s*/)?.[0].length || 0));
const minIndent = indents.length ? Math.min(...indents) : 0;
legacy = lines.map(l => l.slice(Math.min(minIndent,l.length))).join('\n') + '\n';

fs.writeFileSync('/tmp/legacy-module.js', legacy, 'utf8');

console.log('\n### MODULE_SIZE');
console.log('legacy_module_bytes=' + Buffer.byteLength(legacy));
console.log('current_module_bytes=' + Buffer.byteLength(current));

const terms = [
  'renderer.outputColorSpace',
  'toneMapping',
  'const bloomPass',
  'const ambientLight',
  'const keyLight',
  'const fillLight',
  'const rimLight',
  'uScanGlow',
  'function makeDisplayMaterial',
  'const emissiveBoost',
  'wireframeTargetOpacity',
  'const pulse =',
  'rimLight.intensity',
  'composer.render'
];

for (const term of terms) {
  console.log('\n### TERM ' + term);
  for (const [label, src] of [['LEGACY', legacy], ['CURRENT', current]]) {
    const idx=src.indexOf(term);
    console.log('---' + label + ' @ ' + idx + '---');
    if(idx>=0) console.log(clean(src.slice(Math.max(0,idx-550),Math.min(src.length,idx+1800))));
    else console.log('NOT_FOUND');
  }
}

console.log('\nLEGACY_RUNTIME_AUDIT_END');

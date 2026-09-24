import { readFileSync, readdirSync, statSync } from 'node:fs';
import { extname, join, relative, resolve } from 'node:path';

const dist = resolve('dist');
const limits = {
  '.html': 160 * 1024,
  '.css': 300 * 1024,
  '.js': 950 * 1024,
};
const modelLimits = {
  'assets/models/tardigrade.glb': 10 * 1024 * 1024,
  'assets/models/crypto-specimen.glb': 20 * 1024 * 1024,
};

const errors = [];
const measured = [];

function walk(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full);
      continue;
    }

    const rel = relative(dist, full).replaceAll('\\', '/');
    const size = statSync(full).size;
    measured.push([rel, size]);

    const ext = extname(entry.name);
    if (limits[ext] && size > limits[ext]) {
      errors.push(`${rel} is ${size.toLocaleString()} bytes; limit is ${limits[ext].toLocaleString()}`);
    }

    if (modelLimits[rel] && size > modelLimits[rel]) {
      errors.push(`${rel} exceeded its model budget (${size.toLocaleString()} bytes)`);
    }

    if (rel.endsWith('.html') || rel.endsWith('.js') || rel.endsWith('.css')) {
      const text = readFileSync(full, 'utf8');
      if (/data:model\/gltf-binary;base64,/i.test(text)) {
        errors.push(`${rel} contains an embedded GLB data URI`);
      }
    }

    if (rel.startsWith('legacy/')) {
      errors.push(`${rel} leaked legacy source into dist`);
    }
  }
}

walk(dist);

measured
  .sort((a, b) => b[1] - a[1])
  .slice(0, 12)
  .forEach(([file, size]) => console.log(`[budget] ${file}: ${(size / 1024).toFixed(1)} KiB`));

if (errors.length) {
  console.error('[microLabsX budgets] failed:');
  for (const error of errors) console.error(` - ${error}`);
  process.exit(1);
}

console.log('[microLabsX budgets] dist OK');

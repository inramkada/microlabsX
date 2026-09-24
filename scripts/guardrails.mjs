import { readFileSync, readdirSync, statSync } from 'node:fs';
import { extname, join, relative, resolve } from 'node:path';

const root = resolve('.');
const scanRoots = ['src', 'public'];
const textExtensions = new Set(['.astro', '.css', '.html', '.js', '.json', '.mjs', '.ts']);
const limits = {
  '.astro': 128 * 1024,
  '.css': 256 * 1024,
  '.html': 256 * 1024,
  '.js': 256 * 1024,
  '.mjs': 128 * 1024,
  '.ts': 256 * 1024,
};

const errors = [];

function walk(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full);
      continue;
    }

    const rel = relative(root, full).replaceAll('\\', '/');
    const ext = extname(entry.name);
    const size = statSync(full).size;

    if (limits[ext] && size > limits[ext]) {
      errors.push(`${rel} is ${size.toLocaleString()} bytes; limit is ${limits[ext].toLocaleString()}`);
    }

    if (textExtensions.has(ext)) {
      const text = readFileSync(full, 'utf8');
      if (/data:model\/gltf-binary;base64,/i.test(text)) {
        errors.push(`${rel} contains an embedded GLB data URI`);
      }
      if (/https?:\/\/[^"'\s)]+\.js\b/i.test(text)) {
        errors.push(`${rel} loads JavaScript from an external origin`);
      }
    }

    if (rel.startsWith('public/legacy/') || rel.startsWith('src/legacy/')) {
      errors.push(`${rel} exposes legacy source to the production build`);
    }
  }
}

for (const dir of scanRoots) walk(resolve(dir));

if (errors.length) {
  console.error('[microLabsX guardrails] failed:');
  for (const error of errors) console.error(` - ${error}`);
  process.exit(1);
}

console.log('[microLabsX guardrails] source tree OK');

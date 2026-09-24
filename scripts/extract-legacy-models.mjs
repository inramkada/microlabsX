import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';

const sourcePath = resolve('legacy/index-v1.html');
const output = {
  MODEL_URL: resolve('public/assets/models/tardigrade.glb'),
  SECOND_MODEL_URL: resolve('public/assets/models/crypto-specimen.glb'),
};

const html = readFileSync(sourcePath, 'utf8');

for (const [constantName, targetPath] of Object.entries(output)) {
  const re = new RegExp(
    "const\\s+" + constantName + "\\s*=\\s*['\"]data:model\\/gltf-binary;base64,([^'\"]+)['\"]"
  );
  const match = html.match(re);

  if (!match?.[1]) {
    throw new Error(`Could not extract ${constantName} from legacy source`);
  }

  const binary = Buffer.from(match[1], 'base64');
  mkdirSync(dirname(targetPath), { recursive: true });
  writeFileSync(targetPath, binary);
  console.log(`[microLabsX] extracted ${constantName}: ${binary.length.toLocaleString()} bytes`);
}

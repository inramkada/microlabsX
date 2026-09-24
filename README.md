# microLabsX v2

Experimental systems for biology, automation and machine intelligence.

## What changed

The original site stored two GLB models and the complete Three.js scene inside a single ~35 MB HTML file. v2 keeps the original visual behavior while separating application code from binary assets and moving the site to Astro.

The untouched original source is preserved at `legacy/index-v1.html`.

## Architecture

- Astro 7 static site
- Three.js 0.186
- WebGL scene migrated from the original implementation
- GLB assets extracted at build time from the preserved legacy source
- Cloudflare-compatible security headers
- GitHub Actions build validation

## Local development

```bash
npm install
npm run dev
```

`npm run prepare:legacy` extracts the embedded legacy models into `public/assets/models/`. Generated GLB files are ignored by Git.

## Safety

The production `main` branch remains unchanged during the v2 migration. Do not switch the production deployment to this branch until CI and visual QA pass.

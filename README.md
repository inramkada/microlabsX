# microLabsX v2

Experimental systems for biology, automation and machine intelligence.

## Architecture

microLabsX v2 replaces the original monolithic page with a static Astro shell and an isolated Three.js/WebGL visual engine.

- Astro 7 static output
- Three.js 0.162.0 visual engine loaded after first paint (pinned to the legacy v1 rendering runtime for visual fidelity)
- original tardigrade and cryptobiosis GLB specimens preserved
- legacy GLB data extracted at build time instead of shipping base64 inside HTML
- WebGL render loop pauses while the document is hidden
- reduced-motion and mobile DPR safeguards
- no third-party runtime JavaScript
- Cloudflare-compatible security headers and cache policy
- source and build-size guardrails in CI
- reproducible dependency tree enforced by package-lock + npm ci

The untouched v1 source remains under `legacy/` only as migration input. It is never copied into `dist/`.

## Runtime boundary

The initial document is HTML + CSS + lightweight UI. The Three.js bundle is dynamically imported only after the browser has painted the shell. The secondary specimen is not fetched until the existing interaction requests it.

Three core and Three addons are split into independent cacheable chunks.

## Commands

```bash
npm ci
npm run dev
npm run verify
```

`npm run verify` runs source guardrails, model extraction, Astro validation/build and output-size budgets.

## Production safety

Production `main` remains unchanged during the v2 migration. Merge only after CI, visual QA and deployment-header verification pass.


## Legacy visual master

`legacy/index-v1.html` is the visual reference for the tardigrade scene. The WebGL runtime is intentionally pinned to Three.js 0.162.0 because that is the exact version used by the reference. The specimen material, lighting and bloom remain legacy-faithful; strong scan emphasis is reduced on the specimen so the background X remains the primary pulse/energy element.

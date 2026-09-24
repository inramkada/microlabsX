import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://microlabsx.com',
  output: 'static',
  trailingSlash: 'always',
  build: {
    format: 'directory',
    inlineStylesheets: 'never',
  },
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('/node_modules/three/')) return 'three';
          },
        },
      },
    },
  },
});

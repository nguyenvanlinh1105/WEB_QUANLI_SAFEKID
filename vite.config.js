import { defineConfig } from 'vite';

export default defineConfig({
  root: './',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
  envPrefix: 'VITE_',
  server: {
    port: 5173,
  },
});
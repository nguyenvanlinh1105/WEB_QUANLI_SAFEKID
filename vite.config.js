import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

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
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: 'assets/dashboard/dashboard.html',
          dest: 'assets/dashboard'
        }
      ]
    })
  ]
});
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
          src: 'assest/dashboard/dashboard.html',
          dest: 'assest/dashboard'
        },
        {
          src: 'assest/css/*',
          dest: 'assest/css'
        }
      ]
    })
  ]
});
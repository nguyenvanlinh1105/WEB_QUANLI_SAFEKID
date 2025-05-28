import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import { createHtmlPlugin } from 'vite-plugin-html-template';


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
        },
         {
          src: 'assest/img/*',
          dest: 'assest/img'
        }
      ]
    }),
    createHtmlPlugin({
      pages: [
        {
          entry: 'assest/dashboard/dashboard.html',
          filename: 'assest/dashboard/dashboard.html',
          injectOptions: {
            data: {
              VITE_FIREBASE_API_KEY: process.env.VITE_FIREBASE_API_KEY
            }
          }
        }
      ]
    })
  ]
});
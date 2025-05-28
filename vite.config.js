import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import { createHtmlPlugin } from 'vite-plugin-html';

export default defineConfig({
  root: './',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      external: ['fsevents']
    }
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
              VITE_FIREBASE_API_KEY: process.env.VITE_FIREBASE_API_KEY,
              VITE_FIREBASE_AUTH_DOMAIN: process.env.VITE_FIREBASE_AUTH_DOMAIN,
              VITE_FIREBASE_DATABASE_URL: process.env.VITE_FIREBASE_DATABASE_URL,
              VITE_FIREBASE_PROJECT_ID: process.env.VITE_FIREBASE_PROJECT_ID,
              VITE_FIREBASE_STORAGE_BUCKET: process.env.VITE_FIREBASE_STORAGE_BUCKET,
              VITE_FIREBASE_MESSAGING_SENDER_ID: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
              VITE_FIREBASE_APP_ID: process.env.VITE_FIREBASE_APP_ID,
              VITE_FIREBASE_MEASUREMENT_ID: process.env.VITE_FIREBASE_MEASUREMENT_ID,
              VITE_GOOGLE_MAPS_API_KEY: process.env.VITE_GOOGLE_MAPS_API_KEY,
              VITE_OPENCAGE_API_KEY: process.env.VITE_OPENCAGE_API_KEY
            }
          }
        }
      ]
    })
  ]
});
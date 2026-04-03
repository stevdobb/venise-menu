import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [vue(),
    VitePWA({
          registerType: 'autoUpdate',
          injectRegister: 'auto',
          devOptions: {
            enabled: true
          },
          manifest: {
            name: 'Venise',
            short_name: 'Venise',
            description: 'Venise',
            theme_color: '#0f5eb6',
            "icons": [
              {
                "src": "/venise-menu/pwa/icon-48x48.png",
                "sizes": "48x48",
                "type": "image/png"
              },
              {
                "src": "/venise-menu/pwa/icon-72x72.png",
                "sizes": "72x72",
                "type": "image/png"
              },
              {
                "src": "/venise-menu/pwa/icon-96x96.png",
                "sizes": "96x96",
                "type": "image/png"
              },
              {
                "src": "/venise-menu/pwa/icon-128x128.png",
                "sizes": "128x128",
                "type": "image/png"
              },
              {
                "src": "/venise-menu/pwa/icon-144x144.png",
                "sizes": "144x144",
                "type": "image/png"
              },
              {
                "src": "/venise-menu/pwa/icon-152x152.png",
                "sizes": "152x152",
                "type": "image/png"
              },
              {
                "src": "/venise-menu/pwa/icon-192x192.png",
                "sizes": "192x192",
                "type": "image/png"
              },
              {
                "src": "/venise-menu/pwa/icon-256x256.png",
                "sizes": "256x256",
                "type": "image/png"
              },
              {
                "src": "/venise-menu/pwa/icon-384x384.png",
                "sizes": "384x384",
                "type": "image/png"
              },
              {
                "src": "/venise-menu/pwa/icon-512x512.png",
                "sizes": "512x512",
                "type": "image/png"
              }
            ],
          },
          //manifest: false,
          workbox: {
            clientsClaim: true,
            skipWaiting: true,
            cleanupOutdatedCaches: true,
            globPatterns: ["**/*.{js,css,html,ico,png,jpg,jpeg,svg,webmanifest,pdf}"]
          },
        }),
      ],
  base: "/venise-menu/",
  build: {
    rollupOptions: {
      input: "./index.html",
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});

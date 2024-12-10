import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  plugins: [vue()],
  base: '/venise-menu/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Zorg ervoor dat @ verwijst naar ./src
    },
  }
});

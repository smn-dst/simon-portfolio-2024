import { defineConfig } from "vite";
import glsl from "vite-plugin-glsl";
import path from 'path';

export default defineConfig({
  plugins: [glsl()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/styles/tailwind.scss";`
      }
    }
  },
  server: {
    port: 1111,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
});

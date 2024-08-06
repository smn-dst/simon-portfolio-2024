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
  },
  build: {
    outDir: 'dist', // Ensure this matches your Vercel settings
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        about: path.resolve(__dirname, 'about.html'),
        agori: path.resolve(__dirname, 'agori.html'),
        artdam: path.resolve(__dirname, 'artdam.html'),
        bryte: path.resolve(__dirname, 'bryte.html'),
        opteven: path.resolve(__dirname, 'opteven.html'),
        projects: path.resolve(__dirname, 'projects.html'),
        proxinnov: path.resolve(__dirname, 'proxinnov.html'),
        solware: path.resolve(__dirname, 'solware.html')
      }
    }
  }
});

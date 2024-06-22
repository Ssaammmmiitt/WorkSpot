import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path';

const root = resolve(__dirname);
const outDir = resolve(__dirname, 'dist');


// https://vitejs.dev/config/
export default defineConfig({
  root,
  plugins: [react()],
  envDir: resolve(__dirname),
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html')
      },
    },
  },
  server: {

    proxy: {
      '/user': 'http://localhost:3000/',
    },
  },
});
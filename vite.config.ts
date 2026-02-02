import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './',
  define: {
    // Inject environment variables for the Gemini API
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY),
  },
  resolve: {
    alias: {
      '@': '.',
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json']
  },
  build: {
    outDir: 'build',
    emptyOutDir: true,
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: './index.html',
      },
    },
  },
  server: {
    port: 3000,
    host: true,
    fs: {
      allow: ['.'],
    },
  },
});
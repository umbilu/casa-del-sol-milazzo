import { defineConfig } from 'vite';

export default defineConfig({
  define: {
    // Inject environment variables so they are accessible via process.env
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY),
  },
  resolve: {
    alias: {
      // Maps the '@' alias to the current directory
      '@': '.',
    },
    // Ensure .tsx and .ts files are prioritized in resolution
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json']
  },
  build: {
    outDir: 'build',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: './index.html',
      },
    },
  },
  server: {
    port: 3000,
    fs: {
      allow: ['.'],
    },
  },
});
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: { '.keep': 'text' },
    },
  },
  server: {
    proxy: {
      // Proxy sitemap.xml to backend so it works in development
      '/sitemap.xml': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
    },
  },
  build: {
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        // Use function form so we can split both vendor AND lesson-data into
        // stable, separately-cacheable chunks. Without this, all 5.4 MB of
        // lesson JSON gets inlined into each language's lazy page chunk.
        manualChunks(id) {
          // ── Vendor splits ────────────────────────────────────────
          if (id.includes('node_modules/react-dom') || id.includes('node_modules/react/') || id.includes('node_modules/react-router')) {
            return 'vendor-react';
          }
          if (id.includes('node_modules/react-hot-toast') || id.includes('node_modules/lucide-react') || id.includes('node_modules/framer-motion')) {
            return 'vendor-ui';
          }
          if (id.includes('node_modules/@tanstack/react-query')) {
            return 'vendor-query';
          }

          // ── Lesson data splits (5.4 MB total, ~114 JSON files) ───
          // Each language's lesson JSON is placed in its own chunk so:
          //  1. It is downloaded only when that language's page is visited.
          //  2. It gets its own cache fingerprint — UI changes don't bust
          //     the lesson-data cache and vice-versa.
          if (id.includes('/module/student/javascript/data')) return 'learn-data-js';
          if (id.includes('/module/student/typescript/data')) return 'learn-data-ts';
          if (id.includes('/module/student/react/data'))       return 'learn-data-react';
          if (id.includes('/module/student/python/data'))      return 'learn-data-python';
          if (id.includes('/module/student/css/data'))         return 'learn-data-css';
          if (id.includes('/module/student/html/data'))        return 'learn-data-html';
          if (id.includes('/module/student/nodejs/data'))      return 'learn-data-node';
          if (id.includes('/module/student/django/data'))      return 'learn-data-django';
          if (id.includes('/module/student/flask/data'))          return 'learn-data-flask';
          if (id.includes('/module/student/fastapi/data'))        return 'learn-data-fastapi';
          if (id.includes('/module/student/interview-prep/data')) return 'learn-data-interview';
          if (id.includes('/module/student/blockchain/data'))     return 'learn-data-blockchain';
        },
      },
    },
  },
})

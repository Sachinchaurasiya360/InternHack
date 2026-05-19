import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import prerender from '@prerenderer/rollup-plugin'
import path from 'path'

// Routes to prerender to static HTML at build time. Only include pages that
// render the same content for every visitor (no auth, no per-user data).
const PRERENDER_ROUTES = [
  '/',
  '/login',
  '/register',
  '/forgot-password',
  '/for-recruiters',
  '/terms',
  '/privacy',
  '/refund',
  '/learn',
  '/learn/javascript',
  '/learn/python',
  '/learn/html',
  '/learn/css',
  '/learn/react',
  '/learn/typescript',
  '/learn/nodejs',
  '/learn/fastapi',
  '/learn/flask',
  '/learn/django',
  '/learn/blockchain',
  '/learn/data-analytics',
  '/learn/interview',
  '/learn/dsa',
  '/learn/dsa/patterns',
  '/learn/dsa/companies',
  '/learn/aptitude',
  '/learn/aptitude/companies',
  '/learn/sql',
  '/learn/sql/playground',
  '/learn/exam-prep',
]

// Vercel's build container is missing Chrome's system libs (libnspr4.so, etc.),
// so puppeteer can't launch and the prerender plugin hard-fails the build.
// Skip the plugin on Vercel and rely on local prerendering (or skip SEO snapshot
// for that deploy). Override via SKIP_PRERENDER=1 to disable elsewhere.
const skipPrerender =
  process.env.SKIP_PRERENDER === '1' || process.env.VERCEL === '1'

// Dev-only: Vite Node process proxies `/sitemap.xml`; in Docker Compose the API hostname is `server`.
const dockerInternalApiOrigin =
  process.env.DOCKER_INTERNAL_API_ORIGIN ?? 'http://127.0.0.1:3000'
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    ...(skipPrerender
      ? []
      : [
          prerender({
            routes: PRERENDER_ROUTES,
            renderer: '@prerenderer/renderer-puppeteer',
            rendererOptions: {
              // Give React.lazy() chunks and react-helmet enough time to commit
              // <title>, meta, and JSON-LD before snapshotting. Serial rendering
              // avoids chunk-load races that cause sporadic empty captures.
              renderAfterTime: 4500,
              maxConcurrentRoutes: 1,
              headless: true,
              timeout: 30000,
            },
          }),
        ]),
  ],
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
    headers: {
      'Cross-Origin-Opener-Policy': 'same-origin-allow-popups',
      'Cross-Origin-Embedder-Policy': 'unsafe-none',
    },
    proxy: {
      // Proxy sitemap.xml to backend so it works in development
      '/sitemap.xml': {
        target: dockerInternalApiOrigin,
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
          //  2. It gets its own cache fingerprint, UI changes don't bust
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

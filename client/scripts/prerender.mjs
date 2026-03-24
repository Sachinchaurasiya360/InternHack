/**
 * Build-time prerendering for SEO.
 *
 * Renders public routes with Puppeteer after `vite build` and saves the
 * fully-rendered HTML so search engines (and AI crawlers) see real content
 * instead of an empty <div id="root"></div>.
 *
 * Run: node scripts/prerender.mjs
 * (Automatically called via `npm run build:seo`)
 */

import puppeteer from "puppeteer";
import { createServer } from "http";
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, "..", "dist");

// ── Public routes to prerender ──────────────────────────────────────
const ROUTES = [
  "/",
  "/jobs",
  "/companies",
  "/blog",
  "/learn",
  "/ats-score",
  "/grants",
  "/opensource",
  "/for-recruiters",
  "/internships",
  "/external-jobs",
  "/login",
  "/register",
  "/terms",
  "/privacy",
  "/contact",
];

// ── Tiny static file server ─────────────────────────────────────────
function startServer(port) {
  return new Promise((resolve) => {
    const mimeTypes = {
      ".html": "text/html",
      ".js": "text/javascript",
      ".css": "text/css",
      ".json": "application/json",
      ".png": "image/png",
      ".svg": "image/svg+xml",
      ".woff2": "font/woff2",
    };

    const server = createServer((req, res) => {
      let filePath = join(DIST, req.url === "/" ? "index.html" : req.url);

      // SPA fallback — serve index.html for routes without file extension
      if (!filePath.includes(".") || !existsSync(filePath)) {
        filePath = join(DIST, "index.html");
      }

      try {
        const data = readFileSync(filePath);
        const ext = "." + filePath.split(".").pop();
        res.writeHead(200, { "Content-Type": mimeTypes[ext] || "application/octet-stream" });
        res.end(data);
      } catch {
        // SPA fallback
        const html = readFileSync(join(DIST, "index.html"));
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(html);
      }
    });

    server.listen(port, () => resolve(server));
  });
}

async function main() {
  if (!existsSync(DIST)) {
    console.error("dist/ folder not found. Run `vite build` first.");
    process.exit(1);
  }

  const PORT = 4173;
  const server = await startServer(PORT);
  console.log(`Static server running on http://localhost:${PORT}`);

  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  let rendered = 0;

  for (const route of ROUTES) {
    try {
      const page = await browser.newPage();

      // Block analytics & external requests to speed up rendering
      await page.setRequestInterception(true);
      page.on("request", (req) => {
        const url = req.url();
        if (
          url.includes("googletagmanager") ||
          url.includes("google-analytics") ||
          url.includes("fonts.googleapis")
        ) {
          req.abort();
        } else {
          req.continue();
        }
      });

      await page.goto(`http://localhost:${PORT}${route}`, {
        waitUntil: "networkidle0",
        timeout: 15000,
      });

      // Wait a bit for React to finish rendering + Helmet to inject head tags
      await page.waitForFunction(() => document.title !== "", { timeout: 5000 }).catch(() => {});

      const html = await page.content();
      await page.close();

      // Determine output path
      const outDir = route === "/" ? DIST : join(DIST, route);
      const outFile = join(outDir, "index.html");

      if (!existsSync(outDir)) {
        mkdirSync(outDir, { recursive: true });
      }
      writeFileSync(outFile, html, "utf-8");
      rendered++;
      console.log(`  [${rendered}/${ROUTES.length}] ${route}`);
    } catch (err) {
      console.warn(`  SKIP ${route}: ${err.message}`);
    }
  }

  await browser.close();
  server.close();
  console.log(`\nPrerendered ${rendered}/${ROUTES.length} routes.`);
}

main().catch((err) => {
  console.error("Prerender failed:", err);
  process.exit(1);
});

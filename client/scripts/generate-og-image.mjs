/**
 * Generate OG image (1200x630) for social media sharing.
 *
 * Uses Puppeteer to render an HTML template and screenshot it.
 * Run: node scripts/generate-og-image.mjs
 *
 * Requires: npm i -D puppeteer (already added for prerendering)
 */

import puppeteer from "puppeteer";
import { writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUTPUT = join(__dirname, "..", "public", "og-image.png");

const HTML = /* html */ `
<!DOCTYPE html>
<html>
<head>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      width: 1200px;
      height: 630px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #030712;
      font-family: 'Inter', 'Segoe UI', system-ui, sans-serif;
      overflow: hidden;
      position: relative;
    }
    .orb {
      position: absolute;
      border-radius: 50%;
      filter: blur(80px);
      opacity: 0.3;
    }
    .orb-1 { width: 400px; height: 400px; top: -100px; right: -80px; background: #6366f1; }
    .orb-2 { width: 350px; height: 350px; bottom: -80px; left: -60px; background: #3b82f6; }
    .content {
      position: relative;
      z-index: 1;
      text-align: center;
      padding: 0 80px;
    }
    .logo-row {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 16px;
      margin-bottom: 32px;
    }
    .logo-box {
      width: 64px;
      height: 64px;
      background: #18181b;
      border: 2px solid #27272a;
      border-radius: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .logo-text {
      font-size: 28px;
      font-weight: 800;
      color: white;
      letter-spacing: -0.02em;
    }
    .logo-text span { color: #3b82f6; }
    .brand {
      font-size: 32px;
      font-weight: 700;
      color: white;
      letter-spacing: -0.02em;
    }
    h1 {
      font-size: 56px;
      font-weight: 800;
      color: white;
      line-height: 1.1;
      letter-spacing: -0.03em;
      margin-bottom: 20px;
    }
    h1 em {
      font-style: normal;
      background: linear-gradient(135deg, #6366f1, #3b82f6);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .sub {
      font-size: 22px;
      color: #9ca3af;
      line-height: 1.5;
      max-width: 700px;
      margin: 0 auto;
    }
    .tags {
      margin-top: 28px;
      display: flex;
      gap: 12px;
      justify-content: center;
      flex-wrap: wrap;
    }
    .tag {
      padding: 8px 18px;
      background: rgba(99,102,241,0.15);
      border: 1px solid rgba(99,102,241,0.3);
      border-radius: 8px;
      color: #a5b4fc;
      font-size: 14px;
      font-weight: 600;
    }
  </style>
</head>
<body>
  <div class="orb orb-1"></div>
  <div class="orb orb-2"></div>
  <div class="content">
    <div class="logo-row">
      <div class="logo-box">
        <span class="logo-text">I<span>H</span></span>
      </div>
      <span class="brand">InternHack</span>
    </div>
    <h1>AI-Powered Internship &<br/><em>Career Platform for Students</em></h1>
    <p class="sub">Score your resume with AI, browse curated internships,<br/>learn to code, and connect with top recruiters.</p>
    <div class="tags">
      <span class="tag">AI ATS Scorer</span>
      <span class="tag">Resume Builder</span>
      <span class="tag">Coding Tutorials</span>
      <span class="tag">DSA Practice</span>
      <span class="tag">Job Board</span>
    </div>
  </div>
</body>
</html>
`;

async function main() {
  const browser = await puppeteer.launch({ headless: true, args: ["--no-sandbox"] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 630 });
  await page.setContent(HTML, { waitUntil: "networkidle0" });
  const buffer = await page.screenshot({ type: "png" });
  writeFileSync(OUTPUT, buffer);
  await browser.close();
  console.log(`OG image saved to ${OUTPUT}`);
}

main().catch((err) => {
  console.error("Failed to generate OG image:", err);
  process.exit(1);
});

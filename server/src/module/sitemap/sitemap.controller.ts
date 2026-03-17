import type { Request, Response } from "express";
import { SitemapService } from "./sitemap.service.js";

const sitemapService = new SitemapService();

export class SitemapController {
  async getSitemap(_req: Request, res: Response) {
    try {
      const xml = await sitemapService.generateSitemap();
      res.setHeader("Content-Type", "application/xml; charset=utf-8");
      res.setHeader("Cache-Control", "public, max-age=3600, s-maxage=3600");
      res.send(xml);
    } catch (err) {
      console.error("[Sitemap] Generation failed:", err);
      res.status(500).send("Sitemap generation failed");
    }
  }
}

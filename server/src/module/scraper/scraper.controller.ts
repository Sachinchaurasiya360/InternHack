import type { Request, Response, NextFunction } from "express";
import { ScraperService } from "./scraper.service.js";

const scraperService = new ScraperService();

export class ScraperController {
  /** GET /api/scraped-jobs */
  async getScrapedJobs(req: Request, res: Response, next: NextFunction) {
    try {
      const page = Number(req.query["page"]) || 1;
      const limit = Math.min(Number(req.query["limit"]) || 12, 50);
      const search = req.query["search"] ? String(req.query["search"]) : undefined;
      const location = req.query["location"] ? String(req.query["location"]) : undefined;
      const source = req.query["source"] ? String(req.query["source"]) : undefined;

      const result = await scraperService.getScrapedJobs({
        page,
        limit,
        search,
        location,
        source,
      });

      res.json(result);
    } catch (err) {
      next(err);
    }
  }

  /** GET /api/scraped-jobs/stats */
  async getStats(_req: Request, res: Response, next: NextFunction) {
    try {
      const stats = await scraperService.getStats();
      res.json(stats);
    } catch (err) {
      next(err);
    }
  }

  /** GET /api/scraped-jobs/sources */
  async getSources(_req: Request, res: Response) {
    const sources = scraperService.getSources();
    res.json({ sources });
  }

  /** GET /api/scraped-jobs/:id */
  async getScrapedJobById(req: Request, res: Response, next: NextFunction) {
    try {
      const id = Number(String(req.params["id"]));
      if (isNaN(id)) {
        res.status(400).json({ message: "Invalid ID" });
        return;
      }

      const job = await scraperService.getScrapedJobById(id);
      if (!job) {
        res.status(404).json({ message: "Scraped job not found" });
        return;
      }

      res.json({ job });
    } catch (err) {
      next(err);
    }
  }

  /** POST /api/scraped-jobs/trigger - Manually trigger scraping */
  async triggerScrape(_req: Request, res: Response, next: NextFunction) {
    try {
      const { results } = await scraperService.runAllScrapers();
      res.json({ message: "Scrape completed", results });
    } catch (err) {
      next(err);
    }
  }

  /** Get the service instance to start/stop cron */
  getService() {
    return scraperService;
  }
}

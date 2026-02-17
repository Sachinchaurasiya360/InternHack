import { Router } from "express";
import { ScraperController } from "./scraper.controller.js";
import { authMiddleware } from "../../middleware/auth.middleware.js";
import { requireRole } from "../../middleware/role.middleware.js";

const controller = new ScraperController();
export const scraperRouter = Router();

// Public endpoints
scraperRouter.get("/", (req, res, next) => controller.getScrapedJobs(req, res, next));
scraperRouter.get("/sources", (req, res) => controller.getSources(req, res));
scraperRouter.get("/stats", (req, res, next) => controller.getStats(req, res, next));
scraperRouter.get("/:id", (req, res, next) => controller.getScrapedJobById(req, res, next));

// Protected: Only recruiters can manually trigger scraping
scraperRouter.post(
  "/trigger",
  authMiddleware,
  requireRole("RECRUITER"),
  (req, res, next) => controller.triggerScrape(req, res, next)
);

// Export controller for cron initialization
export { controller as scraperController };

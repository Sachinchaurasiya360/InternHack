import type { Request, Response, NextFunction } from "express";
import { PortfolioService } from "./portfolio.service.js";

const service = new PortfolioService();

export class PortfolioController {
  async getBySlug(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const slug = req.params.slug as string;
      const portfolio = await service.getPortfolio(slug);
      if (!portfolio) {
        res.status(404).json({ error: "Portfolio not found" });
        return;
      }
      res.json(portfolio);
    } catch (err) {
      next(err);
    }
  }
}

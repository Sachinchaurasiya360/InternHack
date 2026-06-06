// server/src/module/student/github-analytics.controller.ts
import { type Request, type Response, type NextFunction } from "express";
import { GithubAnalyticsService } from "./github-analytics.service.js";

const service = new GithubAnalyticsService();

export class GithubAnalyticsController {
  async getAnalytics(req: Request, res: Response, next: NextFunction) {
    try {
      if (!req.user) {
        return res.status(401).json({ message: "Authentication required" });
      }
      const analytics = await service.getAnalytics(req.user.id);
      res.json(analytics);
    } catch (err) {
      next(err);
    }
  }
}

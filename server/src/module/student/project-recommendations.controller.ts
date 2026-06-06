// server/src/module/student/project-recommendations.controller.ts
import type { Request, Response } from "express";
import { ProjectRecommendationService } from "./project-recommendations.service.js";

const service = new ProjectRecommendationService();

export class ProjectRecommendationController {
  async getRecommendations(req: Request, res: Response) {
    try {
      const userId = (req as any).user.id;
      const forceRefresh = req.query.refresh === "true";
      const data = await service.getRecommendations(userId, forceRefresh);
      res.json(data);
    } catch (error: any) {
      res.status(400).json({ error: error.message || "Failed to generate project recommendations" });
    }
  }
}

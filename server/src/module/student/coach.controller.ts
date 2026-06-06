// server/src/module/student/coach.controller.ts
import type { Request, Response } from "express";
import { CoachService } from "./coach.service.js";

const service = new CoachService();

export class CoachController {
  async getRecommendations(req: Request, res: Response) {
    try {
      const userId = (req as any).user.id;
      const data = await service.getRecommendations(userId);
      res.json(data);
    } catch (error: any) {
      res.status(400).json({ error: error.message || "Failed to fetch recommendations" });
    }
  }

  async generateRoadmap(req: Request, res: Response) {
    try {
      const userId = (req as any).user.id;
      const { repoId } = req.body;
      if (!repoId) throw new Error("repoId is required");
      const data = await service.generateRoadmap(userId, Number(repoId));
      res.json(data);
    } catch (error: any) {
      res.status(400).json({ error: error.message || "Failed to generate roadmap" });
    }
  }

  async getFeedback(req: Request, res: Response) {
    try {
      const userId = (req as any).user.id;
      const { repoId, codePatch } = req.body;
      if (!repoId) throw new Error("repoId is required");
      if (!codePatch) throw new Error("codePatch is required");
      const data = await service.getFeedback(userId, Number(repoId), codePatch);
      res.json(data);
    } catch (error: any) {
      res.status(400).json({ error: error.message || "Failed to get review feedback" });
    }
  }
}

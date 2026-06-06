// server/src/module/student/career-intelligence.controller.ts
import type { Request, Response } from "express";
import { CareerIntelligenceService } from "./career-intelligence.service.js";

const service = new CareerIntelligenceService();

export class CareerIntelligenceController {
  async getCareerIntelligence(req: Request, res: Response) {
    try {
      const userId = (req as any).user.id;
      const forceRefresh = req.query.refresh === "true";
      const data = await service.getCareerIntelligence(userId, forceRefresh);
      res.json(data);
    } catch (error: any) {
      res.status(400).json({ error: error.message || "Failed to fetch career intelligence" });
    }
  }

  async getGoals(req: Request, res: Response) {
    try {
      const userId = (req as any).user.id;
      const data = await service.getGoals(userId);
      res.json(data);
    } catch (error: any) {
      res.status(400).json({ error: error.message || "Failed to fetch career goals" });
    }
  }

  async saveGoals(req: Request, res: Response) {
    try {
      const userId = (req as any).user.id;
      const goalsData = req.body;
      const data = await service.saveGoals(userId, goalsData);
      res.json(data);
    } catch (error: any) {
      res.status(400).json({ error: error.message || "Failed to save career goals" });
    }
  }
}

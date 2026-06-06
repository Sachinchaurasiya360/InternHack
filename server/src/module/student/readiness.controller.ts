// server/src/module/student/readiness.controller.ts
import type { Request, Response } from "express";
import { ReadinessService } from "./readiness.service.js";

const service = new ReadinessService();

export class ReadinessController {
  async getReadiness(req: Request, res: Response) {
    try {
      const userId = (req as any).user.id;
      const forceRefresh = req.query.refresh === "true";
      const data = await service.getReadiness(userId, forceRefresh);
      res.json(data);
    } catch (error: any) {
      res.status(400).json({ error: error.message || "Failed to generate Internship Readiness metrics" });
    }
  }
}

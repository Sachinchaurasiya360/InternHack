// server/src/module/student/gap-analysis.controller.ts
import type { Request, Response } from "express";
import { GapAnalysisService } from "./gap-analysis.service.js";

const service = new GapAnalysisService();

export class GapAnalysisController {
  async getGapAnalysis(req: Request, res: Response) {
    try {
      const userId = (req as any).user.id;
      const forceRefresh = req.query.refresh === "true";
      const targetRole = req.query.targetRole as string | undefined;
      const data = await service.getGapAnalysis(userId, forceRefresh, targetRole);
      res.json(data);
    } catch (error: any) {
      res.status(400).json({ error: error.message || "Failed to generate gap analysis" });
    }
  }
}

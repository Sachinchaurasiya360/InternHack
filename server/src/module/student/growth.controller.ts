// server/src/module/student/growth.controller.ts
import type { Request, Response } from "express";
import { GrowthService } from "./growth.service.js";

const service = new GrowthService();

export class GrowthController {
  async getGrowth(req: Request, res: Response) {
    try {
      const userId = (req as any).user.id;
      const forceRefresh = req.query.refresh === "true";
      const data = await service.getGrowth(userId, forceRefresh);
      res.json(data);
    } catch (error: any) {
      res.status(400).json({ error: error.message || "Failed to generate Developer Growth metrics" });
    }
  }
}

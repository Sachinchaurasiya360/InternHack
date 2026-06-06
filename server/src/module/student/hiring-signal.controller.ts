// server/src/module/student/hiring-signal.controller.ts
import type { Request, Response } from "express";
import { HiringSignalService } from "./hiring-signal.service.js";

const service = new HiringSignalService();

export class HiringSignalController {
  async getHiringSignal(req: Request, res: Response) {
    try {
      const userId = (req as any).user.id;
      const forceRefresh = req.query.refresh === "true";
      const data = await service.getHiringSignal(userId, forceRefresh);
      res.json(data);
    } catch (error: any) {
      res.status(400).json({ error: error.message || "Failed to generate Hiring Signal metrics" });
    }
  }
}

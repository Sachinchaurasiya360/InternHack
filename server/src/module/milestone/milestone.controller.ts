import type { Request, Response, NextFunction } from "express";
import { MilestoneService } from "./milestone.service.js";

export class MilestoneController {
  constructor(private service: MilestoneService) {}

  async reportMilestone(req: Request, res: Response, next: NextFunction) {
    try {
      const studentId = req.user!.id;
      const { type, key } = req.body;
      const result = await this.service.reportMilestone(studentId, type, key);
      res.json({ success: true, ...result });
    } catch (err: any) {
      if (err?.message?.startsWith("Invalid")) {
        res.status(400).json({ error: err.message });
        return;
      }
      next(err);
    }
  }
}

// server/src/module/student/contributions.controller.ts
import { type Request, type Response, type NextFunction } from "express";
import { ContributionsService } from "./contributions.service.js";

const service = new ContributionsService();

export class ContributionsController {
  async getDashboard(req: Request, res: Response, next: NextFunction) {
    try {
      if (!req.user) return res.status(401).json({ message: "Authentication required" });
      const dashboard = await service.getDashboard(req.user.id);
      res.json(dashboard);
    } catch (err) {
      next(err);
    }
  }
}

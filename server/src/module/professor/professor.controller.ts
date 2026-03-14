import type { Request, Response, NextFunction } from "express";
import { ProfessorService } from "./professor.service.js";
import { prisma } from "../../database/db.js";
import { getPlanTier } from "../../config/usage-limits.js";

const service = new ProfessorService();

export class ProfessorController {
  async list(req: Request, res: Response, next: NextFunction) {
    try {
      const page = Math.max(1, parseInt(req.query["page"] as string) || 1);
      const limit = Math.min(50, Math.max(1, parseInt(req.query["limit"] as string) || 24));
      const search = (req.query["search"] as string) || undefined;
      const college = (req.query["college"] as string) || undefined;
      const department = (req.query["department"] as string) || undefined;

      // Check if user has premium subscription
      let isPremium = false;
      if (req.user?.id) {
        const user = await prisma.user.findUnique({
          where: { id: req.user.id },
          select: { subscriptionPlan: true, subscriptionStatus: true, subscriptionEndDate: true },
        });
        if (user) {
          isPremium = getPlanTier(user.subscriptionPlan, user.subscriptionStatus, user.subscriptionEndDate) === "PREMIUM";
        }
      }

      const result = await service.list({ page, limit, search, college, department }, isPremium);
      res.json(result);
    } catch (err) {
      next(err);
    }
  }

  async stats(_req: Request, res: Response, next: NextFunction) {
    try {
      const result = await service.stats();
      res.json(result);
    } catch (err) {
      next(err);
    }
  }
}

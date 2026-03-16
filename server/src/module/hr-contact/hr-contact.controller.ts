import type { Request, Response, NextFunction } from "express";
import { HrContactService } from "./hr-contact.service.js";
import { prisma } from "../../database/db.js";
import { getPlanTier } from "../../config/usage-limits.js";

const service = new HrContactService();

export class HrContactController {
  async list(req: Request, res: Response, next: NextFunction) {
    try {
      const page = Math.max(1, parseInt(req.query["page"] as string) || 1);
      const limit = Math.min(50, Math.max(1, parseInt(req.query["limit"] as string) || 24));
      const search = (req.query["search"] as string) || undefined;
      const company = (req.query["company"] as string) || undefined;

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

      const result = await service.list({ page, limit, search, company }, isPremium);
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

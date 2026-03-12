import type { Request, Response, NextFunction } from "express";
import type { BadgeService } from "./badge.service.js";
import {
  createBadgeSchema,
  updateBadgeSchema,
  badgeQuerySchema,
  checkBadgesSchema,
} from "./badge.validation.js";

export class BadgeController {
  constructor(private readonly badgeService: BadgeService) {}

  // ==================== PUBLIC ====================

  async listBadges(_req: Request, res: Response, next: NextFunction) {
    try {
      const badges = await this.badgeService.listBadges();
      res.json({ badges });
    } catch (err) {
      next(err);
    }
  }

  async getStudentBadgesById(req: Request, res: Response, next: NextFunction) {
    try {
      const id = parseInt(String(req.params["id"]), 10);
      if (isNaN(id)) { res.status(400).json({ message: "Invalid student ID" }); return; }

      const badges = await this.badgeService.getStudentBadges(id);
      res.json({ badges });
    } catch (err) {
      next(err);
    }
  }

  // ==================== STUDENT ====================

  async getMyBadges(req: Request, res: Response, next: NextFunction) {
    try {
      if (!req.user) { res.status(401).json({ message: "Authentication required" }); return; }

      const badges = await this.badgeService.getStudentBadges(req.user.id);
      res.json({ badges });
    } catch (err) {
      next(err);
    }
  }

  async checkBadges(req: Request, res: Response, next: NextFunction) {
    try {
      if (!req.user) { res.status(401).json({ message: "Authentication required" }); return; }

      const result = checkBadgesSchema.safeParse(req.body);
      if (!result.success) {
        res.status(400).json({ message: "Validation failed", errors: result.error.flatten() });
        return;
      }

      const awarded = await this.badgeService.checkAndAwardBadges(
        req.user.id,
        result.data.trigger,
        result.data.context as Record<string, unknown> | undefined,
      );
      res.json({ awarded, count: awarded.length });
    } catch (err) {
      next(err);
    }
  }

  // ==================== ADMIN ====================

  async listAllBadges(req: Request, res: Response, next: NextFunction) {
    try {
      const query = badgeQuerySchema.parse(req.query);
      const data = await this.badgeService.listAllBadges(query.page, query.limit);
      res.json(data);
    } catch (err) {
      next(err);
    }
  }

  async createBadge(req: Request, res: Response, next: NextFunction) {
    try {
      const result = createBadgeSchema.safeParse(req.body);
      if (!result.success) {
        res.status(400).json({ message: "Validation failed", errors: result.error.flatten() });
        return;
      }

      const badge = await this.badgeService.createBadge(result.data);
      res.status(201).json({ message: "Badge created", badge });
    } catch (err) {
      next(err);
    }
  }

  async updateBadge(req: Request, res: Response, next: NextFunction) {
    try {
      const id = parseInt(String(req.params["id"]), 10);
      if (isNaN(id)) { res.status(400).json({ message: "Invalid badge ID" }); return; }

      const result = updateBadgeSchema.safeParse(req.body);
      if (!result.success) {
        res.status(400).json({ message: "Validation failed", errors: result.error.flatten() });
        return;
      }

      const badge = await this.badgeService.updateBadge(id, result.data);
      res.json({ message: "Badge updated", badge });
    } catch (err) {
      if (err instanceof Error && err.message === "Badge not found") {
        res.status(404).json({ message: err.message }); return;
      }
      next(err);
    }
  }

  async deleteBadge(req: Request, res: Response, next: NextFunction) {
    try {
      const id = parseInt(String(req.params["id"]), 10);
      if (isNaN(id)) { res.status(400).json({ message: "Invalid badge ID" }); return; }

      await this.badgeService.deleteBadge(id);
      res.json({ message: "Badge deleted" });
    } catch (err) {
      if (err instanceof Error && err.message === "Badge not found") {
        res.status(404).json({ message: err.message }); return;
      }
      next(err);
    }
  }
}

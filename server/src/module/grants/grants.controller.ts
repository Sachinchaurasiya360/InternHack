import type { Request, Response, NextFunction } from "express";
import { isPremiumUser } from "../../utils/premium.utils.js";
import { grantsService } from "./grants.service.js";
import { createTrackedGrantSchema, updateTrackedGrantSchema } from "./grants.validation.js";

const PREMIUM_MESSAGE =
  "The synced application tracker is a premium feature. Upgrade to track grant applications across devices with deadline reminders.";

export class GrantsController {
  listTracked = async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.user) { res.status(401).json({ message: "Authentication required" }); return; }
      if (!(await isPremiumUser(req.user.id))) {
        res.status(403).json({ message: PREMIUM_MESSAGE, upgradeUrl: "/student/checkout" });
        return;
      }
      const tracked = await grantsService.listTracked(req.user.id);
      res.json({ tracked });
    } catch (err) { next(err); }
  };

  addTracked = async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.user) { res.status(401).json({ message: "Authentication required" }); return; }
      if (!(await isPremiumUser(req.user.id))) {
        res.status(403).json({ message: PREMIUM_MESSAGE, upgradeUrl: "/student/checkout" });
        return;
      }
      const parsed = createTrackedGrantSchema.safeParse(req.body);
      if (!parsed.success) {
        res.status(400).json({ message: "Validation failed", errors: parsed.error.flatten() });
        return;
      }
      const created = await grantsService.addTracked(req.user.id, parsed.data);
      if (!created) {
        res.status(409).json({ message: "You are already tracking this grant" });
        return;
      }
      res.status(201).json({ tracked: created });
    } catch (err) { next(err); }
  };

  updateTracked = async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.user) { res.status(401).json({ message: "Authentication required" }); return; }
      if (!(await isPremiumUser(req.user.id))) {
        res.status(403).json({ message: PREMIUM_MESSAGE, upgradeUrl: "/student/checkout" });
        return;
      }
      const id = parseInt(String(req.params["id"]), 10);
      if (Number.isNaN(id)) { res.status(400).json({ message: "Invalid tracked grant ID" }); return; }
      const parsed = updateTrackedGrantSchema.safeParse(req.body);
      if (!parsed.success) {
        res.status(400).json({ message: "Validation failed", errors: parsed.error.flatten() });
        return;
      }
      const updated = await grantsService.updateTracked(req.user.id, id, parsed.data);
      if (!updated) { res.status(404).json({ message: "Tracked grant not found" }); return; }
      res.json({ success: true });
    } catch (err) { next(err); }
  };

  deleteTracked = async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.user) { res.status(401).json({ message: "Authentication required" }); return; }
      if (!(await isPremiumUser(req.user.id))) {
        res.status(403).json({ message: PREMIUM_MESSAGE, upgradeUrl: "/student/checkout" });
        return;
      }
      const id = parseInt(String(req.params["id"]), 10);
      if (Number.isNaN(id)) { res.status(400).json({ message: "Invalid tracked grant ID" }); return; }
      const deleted = await grantsService.deleteTracked(req.user.id, id);
      if (!deleted) { res.status(404).json({ message: "Tracked grant not found" }); return; }
      res.json({ success: true });
    } catch (err) { next(err); }
  };
}

export const grantsController = new GrantsController();

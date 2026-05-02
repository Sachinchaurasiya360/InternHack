import type { Request, Response, NextFunction } from "express";
import { isPremiumUser } from "../../utils/premium.utils.js";
import { jobFeedService } from "./job-feed.service.js";
import { updatePreferencesSchema, feedQuerySchema } from "./job-feed.validation.js";

export class JobFeedController {
  getFeed = async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.user) { res.status(401).json({ message: "Authentication required" }); return; }
      if (!(await isPremiumUser(req.user.id))) {
        res.status(403).json({ message: "InternHack AI is a premium feature. Upgrade to access personalized job recommendations.", upgradeUrl: "/student/checkout" });
        return;
      }
      const query = feedQuerySchema.parse(req.query);
      const result = await jobFeedService.getFeed(req.user.id, query.page, query.limit);
      res.json(result);
    } catch (err) { next(err); }
  };

  getPreferences = async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.user) { res.status(401).json({ message: "Authentication required" }); return; }
      if (!(await isPremiumUser(req.user.id))) {
        res.status(403).json({ message: "InternHack AI is a premium feature.", upgradeUrl: "/student/checkout" });
        return;
      }
      const pref = await jobFeedService.getPreferences(req.user.id);
      res.json(pref || {});
    } catch (err) { next(err); }
  };

  updatePreferences = async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.user) { res.status(401).json({ message: "Authentication required" }); return; }
      if (!(await isPremiumUser(req.user.id))) {
        res.status(403).json({ message: "InternHack AI is a premium feature.", upgradeUrl: "/student/checkout" });
        return;
      }
      const parsed = updatePreferencesSchema.safeParse(req.body);
      if (!parsed.success) {
        res.status(400).json({ message: "Validation failed", errors: parsed.error.flatten() });
        return;
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const pref = await jobFeedService.updatePreferences(req.user.id, parsed.data as any);
      res.json(pref);
    } catch (err) { next(err); }
  };

  dismiss = async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.user) { res.status(401).json({ message: "Authentication required" }); return; }
      const matchId = parseInt(String(req.params["matchId"]));
      if (isNaN(matchId)) { res.status(400).json({ message: "Invalid match ID" }); return; }
      await jobFeedService.dismiss(req.user.id, matchId);
      res.json({ success: true });
    } catch (err) { next(err); }
  };

  save = async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.user) { res.status(401).json({ message: "Authentication required" }); return; }
      const matchId = parseInt(String(req.params["matchId"]));
      if (isNaN(matchId)) { res.status(400).json({ message: "Invalid match ID" }); return; }
      await jobFeedService.save(req.user.id, matchId);
      res.json({ success: true });
    } catch (err) { next(err); }
  };

  markSeen = async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.user) { res.status(401).json({ message: "Authentication required" }); return; }
      const matchId = parseInt(String(req.params["matchId"]));
      if (isNaN(matchId)) { res.status(400).json({ message: "Invalid match ID" }); return; }
      await jobFeedService.markSeen(req.user.id, matchId);
      res.json({ success: true });
    } catch (err) { next(err); }
  };

  getSaved = async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.user) { res.status(401).json({ message: "Authentication required" }); return; }
      if (!(await isPremiumUser(req.user.id))) {
        res.status(403).json({ message: "InternHack AI is a premium feature.", upgradeUrl: "/student/checkout" });
        return;
      }
      const saved = await jobFeedService.getSaved(req.user.id);
      res.json(saved);
    } catch (err) { next(err); }
  };

  getStats = async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.user) { res.status(401).json({ message: "Authentication required" }); return; }
      // Stats endpoint is free (teaser to drive upgrades)
      const stats = await jobFeedService.getStats(req.user.id);
      res.json(stats);
    } catch (err) { next(err); }
  };
}

export const jobFeedController = new JobFeedController();

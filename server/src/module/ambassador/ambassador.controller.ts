import type { Request, Response, NextFunction } from "express";
import { AmbassadorService } from "./ambassador.service.js";

const ambassadorService = new AmbassadorService();

function paramId(req: Request): number {
  return parseInt(req.params["id"] as string, 10);
}

function paramStr(req: Request, key: string): string | undefined {
  const v = req.query[key];
  return typeof v === "string" ? v : undefined;
}

function paramInt(req: Request, key: string, def: number): number {
  const v = req.query[key];
  return typeof v === "string" ? parseInt(v, 10) || def : def;
}

export class AmbassadorController {
  // ─── Eligibility ─────────────────────────────────────────────

  async checkEligibility(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await ambassadorService.checkEligibility(req.user!.id);
      res.json(result);
    } catch (err) {
      next(err);
    }
  }

  async apply(req: Request, res: Response, next: NextFunction) {
    try {
      const ambassador = await ambassadorService.applyForAmbassador(req.user!.id);
      res.status(201).json({ message: "Application submitted", ambassador });
    } catch (err) {
      next(err);
    }
  }

  async autoEnroll(req: Request, res: Response, next: NextFunction) {
    try {
      const ambassador = await ambassadorService.autoEnrollAndGrant(req.user!.id);
      res.status(201).json({ message: "Auto-enrolled as ambassador", ambassador });
    } catch (err) {
      next(err);
    }
  }

  async getMyStatus(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await ambassadorService.getMyAmbassadorStatus(req.user!.id);
      res.json(result);
    } catch (err) {
      next(err);
    }
  }

  // ─── Referral Links ──────────────────────────────────────────

  async generateReferralLink(req: Request, res: Response, next: NextFunction) {
    try {
      const status = await ambassadorService.getMyAmbassadorStatus(req.user!.id);
      if (!status.ambassador || status.ambassador.status !== "APPROVED") {
        res.status(403).json({ message: "Only approved ambassadors can generate referral links" });
        return;
      }
      const link = await ambassadorService.generateReferralLink(
        status.ambassador.id,
        req.body.label,
      );
      res.status(201).json(link);
    } catch (err) {
      next(err);
    }
  }

  async getMyReferralLinks(req: Request, res: Response, next: NextFunction) {
    try {
      const links = await ambassadorService.getAmbassadorReferralLinks(req.user!.id);
      res.json({ links });
    } catch (err) {
      next(err);
    }
  }

  // ─── Social Shares ───────────────────────────────────────────

  async submitShare(req: Request, res: Response, next: NextFunction) {
    try {
      const status = await ambassadorService.getMyAmbassadorStatus(req.user!.id);
      if (!status.ambassador || status.ambassador.status !== "APPROVED") {
        res.status(403).json({ message: "Only approved ambassadors can submit shares" });
        return;
      }
      const share = await ambassadorService.submitShare(
        status.ambassador.id,
        req.body.platform,
        req.body.url,
        req.body.description,
      );
      res.status(201).json(share);
    } catch (err) {
      next(err);
    }
  }

  async listShares(req: Request, res: Response, next: NextFunction) {
    try {
      const status = await ambassadorService.getMyAmbassadorStatus(req.user!.id);
      if (!status.ambassador) {
        res.json({ shares: [] });
        return;
      }
      const shares = await ambassadorService.listShares(status.ambassador.id);
      res.json({ shares });
    } catch (err) {
      next(err);
    }
  }

  // ─── Admin: Ambassador Management ───────────────────────────

  async listAmbassadors(req: Request, res: Response, next: NextFunction) {
    try {
      const { ambassadorQuerySchema } = await import("./ambassador.validation.js");
      const parsed = ambassadorQuerySchema.safeParse(req.query);
      if (!parsed.success) {
        res.status(400).json({ message: "Invalid query params", errors: parsed.error.flatten() });
        return;
      }
      const result = await ambassadorService.listAmbassadors(parsed.data);
      res.json(result);
    } catch (err) {
      next(err);
    }
  }

  async getAmbassadorDetail(req: Request, res: Response, next: NextFunction) {
    try {
      const ambassador = await ambassadorService.getAmbassadorDetail(paramId(req));
      if (!ambassador) {
        res.status(404).json({ message: "Ambassador not found" });
        return;
      }
      res.json(ambassador);
    } catch (err) {
      next(err);
    }
  }

  async reviewAmbassador(req: Request, res: Response, next: NextFunction) {
    try {
      const ambassador = await ambassadorService.reviewAmbassador(
        paramId(req),
        req.body.status,
        req.user!.id,
        req.body.adminNotes,
      );
      res.json({ message: `Ambassador ${req.body.status.toLowerCase()}`, ambassador });
    } catch (err) {
      next(err);
    }
  }

  async listSharesAdmin(req: Request, res: Response, next: NextFunction) {
    try {
      const shares = await ambassadorService.listShares(paramId(req));
      res.json({ shares });
    } catch (err) {
      next(err);
    }
  }

  async reviewShare(req: Request, res: Response, next: NextFunction) {
    try {
      const shareId = paramId(req);
      const existing = await ambassadorService.getShareById(shareId);
      if (!existing) {
        res.status(404).json({ message: "Share not found" });
        return;
      }
      const share = await ambassadorService.reviewShare(
        shareId,
        req.body.status,
        req.user!.id,
        req.body.adminNotes,
      );
      res.json({ message: `Share ${req.body.status.toLowerCase()}`, share });
    } catch (err) {
      next(err);
    }
  }

  // ─── Admin: Spotlight ───────────────────────────────────────

  async listSpotlights(req: Request, res: Response, next: NextFunction) {
    try {
      const spotlights = await ambassadorService.listSpotlights(
        paramStr(req, "month"),
        typeof req.query["year"] === "string" ? parseInt(req.query["year"], 10) : undefined,
      );
      res.json({ spotlights });
    } catch (err) {
      next(err);
    }
  }

  async createSpotlight(req: Request, res: Response, next: NextFunction) {
    try {
      const spotlight = await ambassadorService.createSpotlight(req.body);
      res.status(201).json(spotlight);
    } catch (err) {
      next(err);
    }
  }

  async updateSpotlight(req: Request, res: Response, next: NextFunction) {
    try {
      const spotlight = await ambassadorService.updateSpotlight(paramId(req), req.body);
      res.json(spotlight);
    } catch (err) {
      next(err);
    }
  }

  async deleteSpotlight(req: Request, res: Response, next: NextFunction) {
    try {
      await ambassadorService.deleteSpotlight(paramId(req));
      res.json({ message: "Spotlight deleted" });
    } catch (err) {
      next(err);
    }
  }

  // ─── Public: Spotlights ─────────────────────────────────────

  async getPublicSpotlights(req: Request, res: Response, next: NextFunction) {
    try {
      const spotlights = await ambassadorService.listSpotlights(
        paramStr(req, "month"),
        typeof req.query["year"] === "string" ? parseInt(req.query["year"], 10) : undefined,
      );
      const active = spotlights.filter((s: { isActive: boolean }) => s.isActive);
      res.json({ spotlights: active });
    } catch (err) {
      next(err);
    }
  }

  // ─── Referrer Leaderboard ────────────────────────────────────

  async getTopReferrers(req: Request, res: Response, next: NextFunction) {
    try {
      const month = paramStr(req, "month");
      const yearRaw = req.query["year"];
      const year = typeof yearRaw === "string" && /^\d{4}$/.test(yearRaw) ? parseInt(yearRaw, 10) : undefined;
      const top = await ambassadorService.getTopReferrers(month, year);
      res.json({ topReferrers: top });
    } catch (err) {
      next(err);
    }
  }
}

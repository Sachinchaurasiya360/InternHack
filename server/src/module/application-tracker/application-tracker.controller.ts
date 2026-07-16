import type { Request, Response, NextFunction } from "express";
import { applicationTrackerService } from "./application-tracker.service.js";
import {
  addApplicationEventSchema,
  createTrackedApplicationSchema,
  trackerQuerySchema,
  updateTrackedApplicationSchema,
} from "./application-tracker.validation.js";

function parseId(value: string | string[] | undefined): number | null {
  const raw = Array.isArray(value) ? value[0] : value;
  if (!raw) return null;
  const clean = raw.replace(/^(tracked|legacy)-/, "");
  const id = Number(clean);
  return Number.isInteger(id) && id > 0 ? id : null;
}

export class ApplicationTrackerController {
  list = async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.user) { res.status(401).json({ message: "Authentication required" }); return; }
      const parsed = trackerQuerySchema.safeParse(req.query);
      if (!parsed.success) { res.status(400).json({ message: "Validation failed", errors: parsed.error.flatten() }); return; }
      const result = await applicationTrackerService.list(req.user.id, parsed.data);
      res.json(result);
    } catch (err) { next(err); }
  };

  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.user) { res.status(401).json({ message: "Authentication required" }); return; }
      const parsed = createTrackedApplicationSchema.safeParse(req.body);
      if (!parsed.success) { res.status(400).json({ message: "Validation failed", errors: parsed.error.flatten() }); return; }
      const application = await applicationTrackerService.create(req.user.id, parsed.data);
      res.status(201).json({ application });
    } catch (err) { next(err); }
  };

  update = async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.user) { res.status(401).json({ message: "Authentication required" }); return; }
      const id = parseId(req.params["id"]);
      if (!id) { res.status(400).json({ message: "Invalid application ID" }); return; }
      const parsed = updateTrackedApplicationSchema.safeParse(req.body);
      if (!parsed.success) { res.status(400).json({ message: "Validation failed", errors: parsed.error.flatten() }); return; }
      const application = await applicationTrackerService.update(req.user.id, id, parsed.data);
      if (!application) { res.status(404).json({ message: "Application not found" }); return; }
      res.json({ application });
    } catch (err) { next(err); }
  };

  delete = async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.user) { res.status(401).json({ message: "Authentication required" }); return; }
      const id = parseId(req.params["id"]);
      if (!id) { res.status(400).json({ message: "Invalid application ID" }); return; }
      const deleted = await applicationTrackerService.delete(req.user.id, id);
      if (!deleted) { res.status(404).json({ message: "Application not found" }); return; }
      res.json({ success: true });
    } catch (err) { next(err); }
  };

  addEvent = async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.user) { res.status(401).json({ message: "Authentication required" }); return; }
      const id = parseId(req.params["id"]);
      if (!id) { res.status(400).json({ message: "Invalid application ID" }); return; }
      const parsed = addApplicationEventSchema.safeParse(req.body);
      if (!parsed.success) { res.status(400).json({ message: "Validation failed", errors: parsed.error.flatten() }); return; }
      const application = await applicationTrackerService.addEvent(req.user.id, id, parsed.data);
      if (!application) { res.status(404).json({ message: "Application not found" }); return; }
      res.json({ application });
    } catch (err) { next(err); }
  };

  stats = async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.user) { res.status(401).json({ message: "Authentication required" }); return; }
      const stats = await applicationTrackerService.stats(req.user.id);
      res.json(stats);
    } catch (err) { next(err); }
  };
}

export const applicationTrackerController = new ApplicationTrackerController();

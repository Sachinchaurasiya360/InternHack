import type { Request, Response, NextFunction } from "express";
import type { OutreachService } from "./outreach.service.js";
import { createLogSchema, updateLogSchema } from "./outreach.validation.js";

export class OutreachController {
  constructor(private readonly outreachService: OutreachService) {}

  async getTemplates(req: Request, res: Response, next: NextFunction) {
    try {
      const templates = await this.outreachService.getTemplates();
      res.json({ templates });
    } catch (err) {
      next(err);
    }
  }

  async getLogs(req: Request, res: Response, next: NextFunction) {
    try {
      if (!req.user) { res.status(401).json({ message: "Authentication required" }); return; }
      const logs = await this.outreachService.getLogs(req.user.id);
      res.json({ logs });
    } catch (err) {
      next(err);
    }
  }

  async createLog(req: Request, res: Response, next: NextFunction) {
    try {
      if (!req.user) { res.status(401).json({ message: "Authentication required" }); return; }
      const result = createLogSchema.safeParse(req.body);
      if (!result.success) { res.status(400).json({ message: "Validation failed", errors: result.error.flatten() }); return; }
      const log = await this.outreachService.createLog(req.user.id, result.data);
      res.status(201).json({ message: "Log created", log });
    } catch (err) {
      next(err);
    }
  }

  async updateLog(req: Request, res: Response, next: NextFunction) {
    try {
      if (!req.user) { res.status(401).json({ message: "Authentication required" }); return; }
      const result = updateLogSchema.safeParse(req.body);
      if (!result.success) { res.status(400).json({ message: "Validation failed", errors: result.error.flatten() }); return; }
      const log = await this.outreachService.updateLog(Number(req.params.id), req.user.id, result.data);
      res.json({ message: "Log updated", log });
    } catch (err) {
      next(err);
    }
  }

  async deleteLog(req: Request, res: Response, next: NextFunction) {
    try {
      if (!req.user) { res.status(401).json({ message: "Authentication required" }); return; }
      await this.outreachService.deleteLog(Number(req.params.id), req.user.id);
      res.json({ message: "Log deleted" });
    } catch (err) {
      next(err);
    }
  }
}
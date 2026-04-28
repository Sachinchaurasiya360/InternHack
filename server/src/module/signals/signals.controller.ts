import type { Request, Response, NextFunction } from "express";
import { SignalsService } from "./signals.service.js";
import {
  signalsListSchema,
  signalCreateSchema,
  signalUpdateSchema,
} from "./signals.validation.js";

const service = new SignalsService();

export class SignalsController {
  /** GET /api/signals */
  async list(req: Request, res: Response, next: NextFunction) {
    try {
      const parsed = signalsListSchema.safeParse(req.query);
      if (!parsed.success) {
        res.status(400).json({ message: "Invalid query", errors: parsed.error.flatten() });
        return;
      }
      const result = await service.getSignals(parsed.data);
      res.json(result);
    } catch (err) {
      next(err);
    }
  }

  /** GET /api/signals/sources */
  getSources(_req: Request, res: Response) {
    res.json({ sources: service.getSources() });
  }

  /** GET /api/signals/stats */
  async getStats(_req: Request, res: Response, next: NextFunction) {
    try {
      res.json(await service.getStats());
    } catch (err) {
      next(err);
    }
  }

  /** GET /api/signals/:id */
  async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const id = Number(String(req.params["id"]));
      if (!Number.isFinite(id)) {
        res.status(400).json({ message: "Invalid ID" });
        return;
      }
      const signal = await service.getSignalById(id);
      if (!signal) {
        res.status(404).json({ message: "Signal not found" });
        return;
      }
      res.json({ signal });
    } catch (err) {
      next(err);
    }
  }

  /** POST /api/signals/trigger (admin-only) */
  async trigger(_req: Request, res: Response, next: NextFunction) {
    try {
      const { results } = await service.ingestAll();
      res.json({ message: "Ingest completed", results });
    } catch (err) {
      next(err);
    }
  }

  /** POST /api/signals (admin-only), manual entry */
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const parsed = signalCreateSchema.safeParse(req.body);
      if (!parsed.success) {
        res.status(400).json({ message: "Invalid payload", errors: parsed.error.flatten() });
        return;
      }
      const signal = await service.createManual(parsed.data);
      res.status(201).json({ signal });
    } catch (err) {
      next(err);
    }
  }

  /** PATCH /api/signals/:id (admin-only) */
  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const id = Number(String(req.params["id"]));
      if (!Number.isFinite(id)) {
        res.status(400).json({ message: "Invalid ID" });
        return;
      }
      const parsed = signalUpdateSchema.safeParse(req.body);
      if (!parsed.success) {
        res.status(400).json({ message: "Invalid payload", errors: parsed.error.flatten() });
        return;
      }
      const signal = await service.updateSignal(id, parsed.data);
      res.json({ signal });
    } catch (err) {
      next(err);
    }
  }

  /** DELETE /api/signals/:id (admin-only) */
  async remove(req: Request, res: Response, next: NextFunction) {
    try {
      const id = Number(String(req.params["id"]));
      if (!Number.isFinite(id)) {
        res.status(400).json({ message: "Invalid ID" });
        return;
      }
      await service.deleteSignal(id);
      res.json({ message: "Signal deleted" });
    } catch (err) {
      next(err);
    }
  }

  /** POST /api/signals/cleanup (admin-only) */
  async cleanup(_req: Request, res: Response, next: NextFunction) {
    try {
      const { removed } = await service.cleanupNoise();
      res.json({ message: "Cleanup complete", removed });
    } catch (err) {
      next(err);
    }
  }

  /** GET /api/signals/logs (admin-only) */
  async getLogs(_req: Request, res: Response, next: NextFunction) {
    try {
      const logs = await service.getRecentLogs(50);
      res.json({ logs });
    } catch (err) {
      next(err);
    }
  }

  getService() {
    return service;
  }
}

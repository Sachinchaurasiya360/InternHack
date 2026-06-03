import { Router } from "express";
import { SignalsController } from "./signals.controller.js";
import { authMiddleware } from "../../middleware/auth.middleware.js";
import { requireRole } from "../../middleware/role.middleware.js";
import { cacheMiddleware } from "../../middleware/cache.middleware.js";

const controller = new SignalsController();
export const signalsRouter = Router();

// Public reads
signalsRouter.get("/", cacheMiddleware(120, "signals:list"), (req, res, next) => controller.list(req, res, next));
signalsRouter.get("/sources", (req, res) => controller.getSources(req, res));
signalsRouter.get("/stats", cacheMiddleware(300, "signals:stats"), (req, res, next) => controller.getStats(req, res, next));

// Admin-only, must appear BEFORE /:id to avoid route conflicts
signalsRouter.get(
  "/logs",
  authMiddleware,
  requireRole("ADMIN"),
  (req, res, next) => controller.getLogs(req, res, next),
);
signalsRouter.post(
  "/trigger",
  authMiddleware,
  requireRole("ADMIN"),
  (req, res, next) => controller.trigger(req, res, next),
);
signalsRouter.post(
  "/cleanup",
  authMiddleware,
  requireRole("ADMIN"),
  (req, res, next) => controller.cleanup(req, res, next),
);
signalsRouter.post(
  "/",
  authMiddleware,
  requireRole("ADMIN"),
  (req, res, next) => controller.create(req, res, next),
);
signalsRouter.patch(
  "/:id",
  authMiddleware,
  requireRole("ADMIN"),
  (req, res, next) => controller.update(req, res, next),
);
signalsRouter.delete(
  "/:id",
  authMiddleware,
  requireRole("ADMIN"),
  (req, res, next) => controller.remove(req, res, next),
);

signalsRouter.get("/:id", cacheMiddleware(300, "signals:detail"), (req, res, next) => controller.getById(req, res, next));

export { controller as signalsController };

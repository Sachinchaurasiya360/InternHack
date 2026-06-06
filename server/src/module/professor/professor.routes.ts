import { Router } from "express";
import { ProfessorController } from "./professor.controller.js";
import { authMiddleware, optionalAuthMiddleware } from "../../middleware/auth.middleware.js";
import { requireRole } from "../../middleware/role.middleware.js";

const controller = new ProfessorController();
export const professorRouter = Router();

professorRouter.get("/stats", (_req, res, next) => controller.stats(_req, res, next));
professorRouter.get("/", optionalAuthMiddleware, (req, res, next) => controller.list(req, res, next));

professorRouter.post(
  "/",
  authMiddleware,
  requireRole("ADMIN"),
  (req, res, next) => controller.create(req, res, next),
);

professorRouter.patch(
  "/:id",
  authMiddleware,
  requireRole("ADMIN"),
  (req, res, next) => controller.update(req, res, next),
);

professorRouter.delete(
  "/:id",
  authMiddleware,
  requireRole("ADMIN"),
  (req, res, next) => controller.delete(req, res, next),
);

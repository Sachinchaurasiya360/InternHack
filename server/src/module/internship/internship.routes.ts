import { Router } from "express";
import { InternshipController } from "./internship.controller.js";
import { authMiddleware } from "../../middleware/auth.middleware.js";
import { requireRole } from "../../middleware/role.middleware.js";

const controller = new InternshipController();
export const internshipRouter = Router();

internshipRouter.get("/stats", (req, res, next) => controller.stats(req, res, next));
internshipRouter.get("/", (req, res, next) => controller.list(req, res, next));

// Admin routes
internshipRouter.post(
  "/",
  authMiddleware,
  requireRole("ADMIN"),
  (req, res, next) => controller.create(req, res, next)
);

internshipRouter.put(
  "/:id",
  authMiddleware,
  requireRole("ADMIN"),
  (req, res, next) => controller.update(req, res, next)
);

import { Router } from "express";
import { ProfessorController } from "./professor.controller.js";
import { optionalAuthMiddleware } from "../../middleware/auth.middleware.js";

const controller = new ProfessorController();
export const professorRouter = Router();

professorRouter.get("/stats", (_req, res, next) => controller.stats(_req, res, next));
professorRouter.get("/", optionalAuthMiddleware, (req, res, next) => controller.list(req, res, next));

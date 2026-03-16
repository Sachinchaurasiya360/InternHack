import { Router } from "express";
import { HrContactController } from "./hr-contact.controller.js";
import { optionalAuthMiddleware } from "../../middleware/auth.middleware.js";

const controller = new HrContactController();
export const hrContactRouter = Router();

hrContactRouter.get("/stats", (_req, res, next) => controller.stats(_req, res, next));
hrContactRouter.get("/", optionalAuthMiddleware, (req, res, next) => controller.list(req, res, next));

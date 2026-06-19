import { Router } from "express";
import { OutreachController } from "./outreach.controller.js";
import { OutreachService } from "./outreach.service.js";
import { authMiddleware } from "../../middleware/auth.middleware.js";
import { requireRole } from "../../middleware/role.middleware.js";

const outreachService = new OutreachService();
const outreachController = new OutreachController(outreachService);

export const outreachRouter = Router();

outreachRouter.use(authMiddleware, requireRole("STUDENT"));

outreachRouter.get("/templates", (req, res, next) => outreachController.getTemplates(req, res, next));
outreachRouter.get("/logs", (req, res, next) => outreachController.getLogs(req, res, next));
outreachRouter.post("/logs", (req, res, next) => outreachController.createLog(req, res, next));
outreachRouter.patch("/logs/:id", (req, res, next) => outreachController.updateLog(req, res, next));
outreachRouter.delete("/logs/:id", (req, res, next) => outreachController.deleteLog(req, res, next));
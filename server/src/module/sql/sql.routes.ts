import { Router } from "express";
import { SqlController } from "./sql.controller.js";
import { SqlService } from "./sql.service.js";
import { authMiddleware } from "../../middleware/auth.middleware.js";
import { requireRole } from "../../middleware/role.middleware.js";

const sqlService = new SqlService();
const sqlController = new SqlController(sqlService);

export const sqlRouter = Router();

sqlRouter.post("/progress", authMiddleware, requireRole("STUDENT"), (req, res, next) => sqlController.saveProgress(req, res, next));
sqlRouter.get("/progress", authMiddleware, requireRole("STUDENT"), (req, res, next) => sqlController.getProgress(req, res, next));

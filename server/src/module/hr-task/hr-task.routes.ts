import { Router } from "express";
import { HRTaskController } from "./hr-task.controller.js";
import { HRTaskService } from "./hr-task.service.js";
import { authMiddleware } from "../../middleware/auth.middleware.js";
import { requirePermission } from "../../middleware/permission.middleware.js";

const taskService = new HRTaskService();
const taskController = new HRTaskController(taskService);

export const hrTaskRouter = Router();

hrTaskRouter.use(authMiddleware);

hrTaskRouter.post("/", requirePermission("TASK_MANAGE", "HR_WRITE"), (req, res) => taskController.create(req, res));
hrTaskRouter.get("/my", requirePermission("TASK_VIEW", "HR_READ"), (req, res) => taskController.getMyTasks(req, res));
hrTaskRouter.get("/team", requirePermission("TASK_MANAGE", "HR_READ"), (req, res) => taskController.getTeamTasks(req, res));
hrTaskRouter.get("/:id", requirePermission("TASK_VIEW", "HR_READ"), (req, res) => taskController.getById(req, res));
hrTaskRouter.put("/:id", requirePermission("TASK_MANAGE", "HR_WRITE"), (req, res) => taskController.update(req, res));
hrTaskRouter.patch("/:id/status", requirePermission("TASK_VIEW", "TASK_MANAGE"), (req, res) => taskController.updateStatus(req, res));
hrTaskRouter.post("/:id/comments", requirePermission("TASK_VIEW", "TASK_MANAGE"), (req, res) => taskController.addComment(req, res));

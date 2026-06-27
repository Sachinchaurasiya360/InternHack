import { Router } from "express";
import { DepartmentController } from "./department.controller.js";
import { DepartmentService } from "./department.service.js";
import { authMiddleware } from "../../middleware/auth.middleware.js";
import { requirePermission } from "../../middleware/permission.middleware.js";

const departmentService = new DepartmentService();
const departmentController = new DepartmentController(departmentService);

export const departmentRouter = Router();

departmentRouter.use(authMiddleware);

departmentRouter.post("/", requirePermission("HR_WRITE", "HR_ADMIN"), (req, res) => departmentController.create(req, res));
departmentRouter.get("/", requirePermission("HR_READ", "EMPLOYEE_READ"), (req, res) => departmentController.getAll(req, res));
departmentRouter.get("/org-chart", requirePermission("HR_READ", "EMPLOYEE_READ"), (req, res) => departmentController.getOrgChart(req, res));
departmentRouter.get("/:id", requirePermission("HR_READ", "EMPLOYEE_READ"), (req, res) => departmentController.getById(req, res));
departmentRouter.put("/:id", requirePermission("HR_WRITE", "HR_ADMIN"), (req, res) => departmentController.update(req, res));
departmentRouter.delete("/:id", requirePermission("HR_ADMIN"), (req, res) => departmentController.delete(req, res));

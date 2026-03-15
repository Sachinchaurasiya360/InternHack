import { Router } from "express";
import { EmployeeController } from "./employee.controller.js";
import { EmployeeService } from "./employee.service.js";
import { authMiddleware } from "../../middleware/auth.middleware.js";
import { requirePermission } from "../../middleware/permission.middleware.js";

const employeeService = new EmployeeService();
const employeeController = new EmployeeController(employeeService);

export const employeeRouter = Router();

employeeRouter.use(authMiddleware);

employeeRouter.post("/", requirePermission("EMPLOYEE_WRITE", "HR_ADMIN"), (req, res) => employeeController.create(req, res));
employeeRouter.get("/", requirePermission("EMPLOYEE_READ", "HR_READ"), (req, res) => employeeController.getAll(req, res));
employeeRouter.get("/:id", requirePermission("EMPLOYEE_READ", "HR_READ"), (req, res) => employeeController.getById(req, res));
employeeRouter.put("/:id", requirePermission("EMPLOYEE_WRITE", "HR_ADMIN"), (req, res) => employeeController.update(req, res));
employeeRouter.patch("/:id/status", requirePermission("HR_WRITE", "HR_ADMIN"), (req, res) => employeeController.updateStatus(req, res));
employeeRouter.get("/:id/timeline", requirePermission("EMPLOYEE_READ", "HR_READ"), (req, res) => employeeController.getTimeline(req, res));

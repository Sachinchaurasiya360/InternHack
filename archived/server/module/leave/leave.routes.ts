import { Router } from "express";
import { LeaveController } from "./leave.controller.js";
import { LeaveService } from "./leave.service.js";
import { authMiddleware } from "../../middleware/auth.middleware.js";
import { requirePermission } from "../../middleware/permission.middleware.js";

const leaveService = new LeaveService();
const leaveController = new LeaveController(leaveService);

export const leaveRouter = Router();

leaveRouter.use(authMiddleware);

// Employee endpoints
leaveRouter.post("/", requirePermission("HR_READ", "EMPLOYEE_READ"), (req, res) => leaveController.createRequest(req, res));
leaveRouter.get("/my", requirePermission("HR_READ", "EMPLOYEE_READ"), (req, res) => leaveController.getMyRequests(req, res));
leaveRouter.get("/balance", requirePermission("HR_READ", "EMPLOYEE_READ"), (req, res) => leaveController.getBalance(req, res));
leaveRouter.get("/calendar", requirePermission("HR_READ", "EMPLOYEE_READ"), (req, res) => leaveController.getCalendar(req, res));

// Manager endpoints
leaveRouter.get("/team", requirePermission("LEAVE_APPROVE", "HR_READ"), (req, res) => leaveController.getTeamRequests(req, res));
leaveRouter.patch("/:id/approve", requirePermission("LEAVE_APPROVE", "LEAVE_ADMIN"), (req, res) => leaveController.approve(req, res));
leaveRouter.patch("/:id/reject", requirePermission("LEAVE_APPROVE", "LEAVE_ADMIN"), (req, res) => leaveController.reject(req, res));

// Admin endpoints
leaveRouter.get("/all", requirePermission("LEAVE_ADMIN", "HR_ADMIN"), (req, res) => leaveController.getAllRequests(req, res));
leaveRouter.post("/allocate", requirePermission("LEAVE_ADMIN", "HR_ADMIN"), (req, res) => leaveController.allocateBalances(req, res));
leaveRouter.get("/policies", requirePermission("HR_READ", "LEAVE_ADMIN"), (req, res) => leaveController.getPolicies(req, res));
leaveRouter.post("/policies", requirePermission("LEAVE_ADMIN", "HR_ADMIN"), (req, res) => leaveController.createPolicy(req, res));
leaveRouter.put("/policies/:id", requirePermission("LEAVE_ADMIN", "HR_ADMIN"), (req, res) => leaveController.updatePolicy(req, res));
leaveRouter.get("/holidays", requirePermission("HR_READ", "EMPLOYEE_READ"), (req, res) => leaveController.getHolidays(req, res));
leaveRouter.post("/holidays", requirePermission("LEAVE_ADMIN", "HR_ADMIN"), (req, res) => leaveController.createHoliday(req, res));

import { Router } from "express";
import { ReimbursementController } from "./reimbursement.controller.js";
import { ReimbursementService } from "./reimbursement.service.js";
import { authMiddleware } from "../../middleware/auth.middleware.js";
import { requirePermission } from "../../middleware/permission.middleware.js";

const reimbursementService = new ReimbursementService();
const reimbursementController = new ReimbursementController(reimbursementService);

export const reimbursementRouter = Router();

reimbursementRouter.use(authMiddleware);

// Employee routes
reimbursementRouter.post("/", requirePermission("HR_READ", "PAYROLL_VIEW"), (req, res) => reimbursementController.create(req, res));
reimbursementRouter.get("/my", requirePermission("HR_READ", "PAYROLL_VIEW"), (req, res) => reimbursementController.getMyReimbursements(req, res));
reimbursementRouter.patch("/:id", requirePermission("HR_READ", "PAYROLL_VIEW"), (req, res) => reimbursementController.update(req, res));
reimbursementRouter.patch("/:id/submit", requirePermission("HR_READ", "PAYROLL_VIEW"), (req, res) => reimbursementController.submit(req, res));

// Manager/Admin routes
reimbursementRouter.get("/", requirePermission("PAYROLL_VIEW", "PAYROLL_MANAGE"), (req, res) => reimbursementController.getAll(req, res));
reimbursementRouter.get("/:id", requirePermission("PAYROLL_VIEW", "PAYROLL_MANAGE"), (req, res) => reimbursementController.getById(req, res));
reimbursementRouter.patch("/:id/approve", requirePermission("PAYROLL_MANAGE", "HR_ADMIN"), (req, res) => reimbursementController.approve(req, res));
reimbursementRouter.patch("/:id/reject", requirePermission("PAYROLL_MANAGE", "HR_ADMIN"), (req, res) => reimbursementController.reject(req, res));
reimbursementRouter.patch("/mark-paid", requirePermission("PAYROLL_MANAGE", "HR_ADMIN"), (req, res) => reimbursementController.markPaid(req, res));

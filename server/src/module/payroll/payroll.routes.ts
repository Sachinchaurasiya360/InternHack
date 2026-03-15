import { Router } from "express";
import { PayrollController } from "./payroll.controller.js";
import { PayrollService } from "./payroll.service.js";
import { authMiddleware } from "../../middleware/auth.middleware.js";
import { requirePermission } from "../../middleware/permission.middleware.js";

const payrollService = new PayrollService();
const payrollController = new PayrollController(payrollService);

export const payrollRouter = Router();

payrollRouter.use(authMiddleware);

payrollRouter.post("/run", requirePermission("PAYROLL_MANAGE", "HR_ADMIN"), (req, res) => payrollController.runPayroll(req, res));
payrollRouter.get("/records", requirePermission("PAYROLL_VIEW", "PAYROLL_MANAGE"), (req, res) => payrollController.getRecords(req, res));
payrollRouter.get("/records/:id", requirePermission("PAYROLL_VIEW", "PAYROLL_MANAGE"), (req, res) => payrollController.getById(req, res));
payrollRouter.patch("/approve", requirePermission("PAYROLL_MANAGE", "HR_ADMIN"), (req, res) => payrollController.approveRecords(req, res));
payrollRouter.get("/my", requirePermission("PAYROLL_VIEW", "HR_READ"), (req, res) => payrollController.getMyPayslips(req, res));
payrollRouter.post("/contractor-payments", requirePermission("PAYROLL_MANAGE", "HR_ADMIN"), (req, res) => payrollController.createContractorPayment(req, res));
payrollRouter.get("/contractor-payments", requirePermission("PAYROLL_VIEW", "PAYROLL_MANAGE"), (req, res) => payrollController.getContractorPayments(req, res));
payrollRouter.patch("/contractor-payments/:id/approve", requirePermission("PAYROLL_MANAGE", "HR_ADMIN"), (req, res) => payrollController.approveContractorPayment(req, res));

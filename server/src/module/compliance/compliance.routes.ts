import { Router } from "express";
import { ComplianceController } from "./compliance.controller.js";
import { ComplianceService } from "./compliance.service.js";
import { authMiddleware } from "../../middleware/auth.middleware.js";
import { requirePermission } from "../../middleware/permission.middleware.js";

const complianceService = new ComplianceService();
const complianceController = new ComplianceController(complianceService);

export const complianceRouter = Router();

complianceRouter.use(authMiddleware);

complianceRouter.post("/", requirePermission("COMPLIANCE_MANAGE", "HR_ADMIN"), (req, res) => complianceController.create(req, res));
complianceRouter.get("/", requirePermission("COMPLIANCE_VIEW", "HR_READ"), (req, res) => complianceController.getAll(req, res));
complianceRouter.get("/expiring", requirePermission("COMPLIANCE_VIEW", "HR_READ"), (req, res) => complianceController.getExpiring(req, res));
complianceRouter.get("/categories", requirePermission("COMPLIANCE_VIEW", "HR_READ"), (req, res) => complianceController.getCategories(req, res));
complianceRouter.get("/:id", requirePermission("COMPLIANCE_VIEW", "HR_READ"), (req, res) => complianceController.getById(req, res));
complianceRouter.put("/:id", requirePermission("COMPLIANCE_MANAGE", "HR_ADMIN"), (req, res) => complianceController.update(req, res));
complianceRouter.delete("/:id", requirePermission("COMPLIANCE_MANAGE", "HR_ADMIN"), (req, res) => complianceController.delete(req, res));
complianceRouter.post("/:id/acknowledge", requirePermission("COMPLIANCE_VIEW", "HR_READ"), (req, res) => complianceController.acknowledge(req, res));

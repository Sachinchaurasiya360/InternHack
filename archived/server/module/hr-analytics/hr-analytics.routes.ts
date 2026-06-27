import { Router } from "express";
import { HRAnalyticsController } from "./hr-analytics.controller.js";
import { HRAnalyticsService } from "./hr-analytics.service.js";
import { authMiddleware } from "../../middleware/auth.middleware.js";
import { requirePermission } from "../../middleware/permission.middleware.js";

const analyticsService = new HRAnalyticsService();
const analyticsController = new HRAnalyticsController(analyticsService);

export const hrAnalyticsRouter = Router();

hrAnalyticsRouter.use(authMiddleware);

hrAnalyticsRouter.get("/dashboard", requirePermission("ANALYTICS_VIEW", "HR_ADMIN"), (req, res) => analyticsController.getDashboard(req, res));
hrAnalyticsRouter.get("/headcount/department", requirePermission("ANALYTICS_VIEW", "HR_READ"), (req, res) => analyticsController.getHeadcountByDepartment(req, res));
hrAnalyticsRouter.get("/headcount/type", requirePermission("ANALYTICS_VIEW", "HR_READ"), (req, res) => analyticsController.getHeadcountByType(req, res));
hrAnalyticsRouter.get("/attrition", requirePermission("ANALYTICS_VIEW", "HR_ADMIN"), (req, res) => analyticsController.getAttritionRate(req, res));
hrAnalyticsRouter.get("/leave", requirePermission("ANALYTICS_VIEW", "HR_READ"), (req, res) => analyticsController.getLeaveAnalytics(req, res));
hrAnalyticsRouter.get("/attendance", requirePermission("ANALYTICS_VIEW", "HR_READ"), (req, res) => analyticsController.getAttendanceAnalytics(req, res));
hrAnalyticsRouter.get("/payroll", requirePermission("ANALYTICS_VIEW", "PAYROLL_VIEW"), (req, res) => analyticsController.getPayrollSummary(req, res));
hrAnalyticsRouter.get("/reimbursement", requirePermission("ANALYTICS_VIEW", "PAYROLL_VIEW"), (req, res) => analyticsController.getReimbursementSummary(req, res));

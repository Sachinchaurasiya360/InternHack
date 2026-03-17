import { Router } from "express";
import { AttendanceController } from "./attendance.controller.js";
import { AttendanceService } from "./attendance.service.js";
import { authMiddleware } from "../../middleware/auth.middleware.js";
import { requirePermission } from "../../middleware/permission.middleware.js";

const attendanceService = new AttendanceService();
const attendanceController = new AttendanceController(attendanceService);

export const attendanceRouter = Router();

attendanceRouter.use(authMiddleware);

attendanceRouter.post("/check-in", requirePermission("ATTENDANCE_VIEW", "HR_READ"), (req, res) => attendanceController.checkIn(req, res));
attendanceRouter.post("/check-out", requirePermission("ATTENDANCE_VIEW", "HR_READ"), (req, res) => attendanceController.checkOut(req, res));
attendanceRouter.get("/my", requirePermission("ATTENDANCE_VIEW", "HR_READ"), (req, res) => attendanceController.getMyAttendance(req, res));
attendanceRouter.get("/today", requirePermission("ATTENDANCE_VIEW", "HR_READ"), (req, res) => attendanceController.getToday(req, res));
attendanceRouter.post("/regularize", requirePermission("ATTENDANCE_MANAGE", "HR_ADMIN"), (req, res) => attendanceController.regularize(req, res));
attendanceRouter.get("/team", requirePermission("ATTENDANCE_VIEW", "ATTENDANCE_MANAGE"), (req, res) => attendanceController.getTeamAttendance(req, res));
attendanceRouter.get("/report", requirePermission("ATTENDANCE_MANAGE", "HR_ADMIN"), (req, res) => attendanceController.getReport(req, res));

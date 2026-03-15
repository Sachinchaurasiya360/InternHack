import type { Request, Response } from "express";
import type { AttendanceService } from "./attendance.service.js";
import { checkInSchema, checkOutSchema, regularizeSchema, attendanceQuerySchema } from "./attendance.validation.js";

export class AttendanceController {
  constructor(private readonly attendanceService: AttendanceService) {}

  async checkIn(req: Request, res: Response) {
    try {
      const result = checkInSchema.safeParse(req.body);
      if (!result.success) return res.status(400).json({ message: "Validation failed", errors: result.error.flatten() });

      const record = await this.attendanceService.checkIn(result.data.employeeId, result.data.notes);
      return res.status(201).json({ message: "Checked in successfully", record });
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === "Employee not found") return res.status(404).json({ message: error.message });
        if (error.message === "Already checked in today") return res.status(409).json({ message: error.message });
      }
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async checkOut(req: Request, res: Response) {
    try {
      const result = checkOutSchema.safeParse(req.body);
      if (!result.success) return res.status(400).json({ message: "Validation failed", errors: result.error.flatten() });

      const record = await this.attendanceService.checkOut(result.data.employeeId, result.data.notes);
      return res.json({ message: "Checked out successfully", record });
    } catch (error) {
      if (error instanceof Error) {
        const msg = error.message;
        if (msg === "No check-in found for today" || msg === "Must check in before checking out")
          return res.status(400).json({ message: msg });
        if (msg === "Already checked out today") return res.status(409).json({ message: msg });
      }
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async getMyAttendance(req: Request, res: Response) {
    try {
      const employeeId = Number(req.query["employeeId"]);
      if (isNaN(employeeId)) return res.status(400).json({ message: "employeeId required" });

      const query = attendanceQuerySchema.parse(req.query);
      const data = await this.attendanceService.getMyAttendance(employeeId, query);
      return res.json(data);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async getToday(req: Request, res: Response) {
    try {
      const employeeId = Number(req.query["employeeId"]);
      if (isNaN(employeeId)) return res.status(400).json({ message: "employeeId required" });

      const record = await this.attendanceService.getToday(employeeId);
      return res.json({ record });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async getTeamAttendance(req: Request, res: Response) {
    try {
      const managerId = Number(req.query["managerId"]);
      if (isNaN(managerId)) return res.status(400).json({ message: "managerId required" });

      const date = req.query["date"] as string | undefined;
      const team = await this.attendanceService.getTeamAttendance(managerId, date);
      return res.json({ team });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async regularize(req: Request, res: Response) {
    try {
      const result = regularizeSchema.safeParse(req.body);
      if (!result.success) return res.status(400).json({ message: "Validation failed", errors: result.error.flatten() });

      const record = await this.attendanceService.regularize(result.data);
      return res.json({ message: "Attendance regularized", record });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async getReport(req: Request, res: Response) {
    try {
      const query = attendanceQuerySchema.parse(req.query);
      const data = await this.attendanceService.getReport(query);
      return res.json(data);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }
}

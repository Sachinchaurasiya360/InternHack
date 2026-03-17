import type { Request, Response } from "express";
import type { LeaveService } from "./leave.service.js";
import {
  createLeaveRequestSchema, approveLeaveSchema, rejectLeaveSchema,
  createLeavePolicySchema, updateLeavePolicySchema, leaveQuerySchema,
  allocateBalanceSchema, createHolidaySchema,
} from "./leave.validation.js";

export class LeaveController {
  constructor(private readonly leaveService: LeaveService) {}

  async createRequest(req: Request, res: Response) {
    try {
      if (!req.user) return res.status(401).json({ message: "Authentication required" });

      const result = createLeaveRequestSchema.safeParse(req.body);
      if (!result.success) return res.status(400).json({ message: "Validation failed", errors: result.error.flatten() });

      const employeeId = Number(req.query["employeeId"] ?? req.user.id);
      const request = await this.leaveService.createRequest(employeeId, result.data);
      return res.status(201).json({ message: "Leave request submitted", request });
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === "Employee not found") return res.status(404).json({ message: error.message });
        if (error.message.startsWith("Insufficient")) return res.status(400).json({ message: error.message });
      }
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async getMyRequests(req: Request, res: Response) {
    try {
      const employeeId = Number(req.query["employeeId"]);
      if (isNaN(employeeId)) return res.status(400).json({ message: "employeeId query param required" });

      const query = leaveQuerySchema.parse(req.query);
      const data = await this.leaveService.getMyRequests(employeeId, query);
      return res.json(data);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async getTeamRequests(req: Request, res: Response) {
    try {
      const managerId = Number(req.query["managerId"]);
      if (isNaN(managerId)) return res.status(400).json({ message: "managerId query param required" });

      const query = leaveQuerySchema.parse(req.query);
      const data = await this.leaveService.getTeamRequests(managerId, query);
      return res.json(data);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async getAllRequests(req: Request, res: Response) {
    try {
      const query = leaveQuerySchema.parse(req.query);
      const data = await this.leaveService.getAllRequests(query);
      return res.json(data);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async approve(req: Request, res: Response) {
    try {
      const id = Number(req.params["id"]);
      if (isNaN(id)) return res.status(400).json({ message: "Invalid request ID" });

      const approverId = Number(req.body.approverId ?? req.user?.id);
      const result = approveLeaveSchema.safeParse(req.body);
      if (!result.success) return res.status(400).json({ message: "Validation failed", errors: result.error.flatten() });

      const request = await this.leaveService.approve(id, approverId, result.data.approverNote);
      return res.json({ message: "Leave approved", request });
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === "Leave request not found") return res.status(404).json({ message: error.message });
        if (error.message === "Request is not pending") return res.status(400).json({ message: error.message });
      }
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async reject(req: Request, res: Response) {
    try {
      const id = Number(req.params["id"]);
      if (isNaN(id)) return res.status(400).json({ message: "Invalid request ID" });

      const approverId = Number(req.body.approverId ?? req.user?.id);
      const result = rejectLeaveSchema.safeParse(req.body);
      if (!result.success) return res.status(400).json({ message: "Validation failed", errors: result.error.flatten() });

      const request = await this.leaveService.reject(id, approverId, result.data.approverNote);
      return res.json({ message: "Leave rejected", request });
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === "Leave request not found") return res.status(404).json({ message: error.message });
        if (error.message === "Request is not pending") return res.status(400).json({ message: error.message });
      }
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async getBalance(req: Request, res: Response) {
    try {
      const employeeId = Number(req.query["employeeId"]);
      if (isNaN(employeeId)) return res.status(400).json({ message: "employeeId required" });

      const year = req.query["year"] ? Number(req.query["year"]) : undefined;
      const balances = await this.leaveService.getBalance(employeeId, year);
      return res.json({ balances });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async getCalendar(req: Request, res: Response) {
    try {
      const { startDate, endDate, departmentId } = req.query;
      if (!startDate || !endDate) return res.status(400).json({ message: "startDate and endDate required" });

      const leaves = await this.leaveService.getCalendar(
        startDate as string, endDate as string,
        departmentId ? Number(departmentId) : undefined,
      );
      return res.json({ leaves });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async allocateBalances(req: Request, res: Response) {
    try {
      const result = allocateBalanceSchema.safeParse(req.body);
      if (!result.success) return res.status(400).json({ message: "Validation failed", errors: result.error.flatten() });

      const balances = await this.leaveService.allocateBalances(result.data);
      return res.json({ message: `Balances allocated for ${balances.length} employees`, count: balances.length });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async getPolicies(_req: Request, res: Response) {
    try {
      const policies = await this.leaveService.getPolicies();
      return res.json({ policies });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async createPolicy(req: Request, res: Response) {
    try {
      const result = createLeavePolicySchema.safeParse(req.body);
      if (!result.success) return res.status(400).json({ message: "Validation failed", errors: result.error.flatten() });

      const policy = await this.leaveService.createPolicy(result.data);
      return res.status(201).json({ message: "Policy created", policy });
    } catch (error) {
      if (error instanceof Error && error.message.includes("Unique constraint"))
        return res.status(409).json({ message: "Policy for this leave type already exists" });
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async updatePolicy(req: Request, res: Response) {
    try {
      const id = Number(req.params["id"]);
      if (isNaN(id)) return res.status(400).json({ message: "Invalid policy ID" });

      const result = updateLeavePolicySchema.safeParse(req.body);
      if (!result.success) return res.status(400).json({ message: "Validation failed", errors: result.error.flatten() });

      const policy = await this.leaveService.updatePolicy(id, result.data);
      return res.json({ message: "Policy updated", policy });
    } catch (error) {
      if (error instanceof Error && error.message === "Leave policy not found")
        return res.status(404).json({ message: error.message });
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async getHolidays(req: Request, res: Response) {
    try {
      const year = req.query["year"] ? Number(req.query["year"]) : undefined;
      const holidays = await this.leaveService.getHolidays(year);
      return res.json({ holidays });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async createHoliday(req: Request, res: Response) {
    try {
      const result = createHolidaySchema.safeParse(req.body);
      if (!result.success) return res.status(400).json({ message: "Validation failed", errors: result.error.flatten() });

      const holiday = await this.leaveService.createHoliday(result.data);
      return res.status(201).json({ message: "Holiday created", holiday });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }
}

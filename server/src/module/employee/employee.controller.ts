import type { Request, Response } from "express";
import type { EmployeeService } from "./employee.service.js";
import { createEmployeeSchema, updateEmployeeSchema, updateStatusSchema, employeeQuerySchema } from "./employee.validation.js";

export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  async create(req: Request, res: Response) {
    try {
      if (!req.user) return res.status(401).json({ message: "Authentication required" });

      const result = createEmployeeSchema.safeParse(req.body);
      if (!result.success) return res.status(400).json({ message: "Validation failed", errors: result.error.flatten() });

      const employee = await this.employeeService.create(result.data);
      return res.status(201).json({ message: "Employee created successfully", employee });
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === "Department not found") return res.status(404).json({ message: error.message });
        if (error.message.includes("Unique constraint")) return res.status(409).json({ message: "Employee code or email already exists" });
      }
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const query = employeeQuerySchema.parse(req.query);
      const data = await this.employeeService.getAll(query);
      return res.json(data);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async getById(req: Request, res: Response) {
    try {
      const id = Number(req.params["id"]);
      if (isNaN(id)) return res.status(400).json({ message: "Invalid employee ID" });

      const employee = await this.employeeService.getById(id);
      return res.json({ employee });
    } catch (error) {
      if (error instanceof Error && error.message === "Employee not found")
        return res.status(404).json({ message: error.message });
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const id = Number(req.params["id"]);
      if (isNaN(id)) return res.status(400).json({ message: "Invalid employee ID" });

      const result = updateEmployeeSchema.safeParse(req.body);
      if (!result.success) return res.status(400).json({ message: "Validation failed", errors: result.error.flatten() });

      const employee = await this.employeeService.update(id, result.data);
      return res.json({ message: "Employee updated successfully", employee });
    } catch (error) {
      if (error instanceof Error && error.message === "Employee not found")
        return res.status(404).json({ message: error.message });
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async updateStatus(req: Request, res: Response) {
    try {
      const id = Number(req.params["id"]);
      if (isNaN(id)) return res.status(400).json({ message: "Invalid employee ID" });

      const result = updateStatusSchema.safeParse(req.body);
      if (!result.success) return res.status(400).json({ message: "Validation failed", errors: result.error.flatten() });

      const { status, ...extra } = result.data;
      const employee = await this.employeeService.updateStatus(id, status, extra);
      return res.json({ message: "Status updated successfully", employee });
    } catch (error) {
      if (error instanceof Error && error.message === "Employee not found")
        return res.status(404).json({ message: error.message });
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async getTimeline(req: Request, res: Response) {
    try {
      const id = Number(req.params["id"]);
      if (isNaN(id)) return res.status(400).json({ message: "Invalid employee ID" });

      const timeline = await this.employeeService.getTimeline(id);
      return res.json({ timeline });
    } catch (error) {
      if (error instanceof Error && error.message === "Employee not found")
        return res.status(404).json({ message: error.message });
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }
}

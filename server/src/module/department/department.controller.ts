import type { Request, Response } from "express";
import type { DepartmentService } from "./department.service.js";
import { createDepartmentSchema, updateDepartmentSchema } from "./department.validation.js";

export class DepartmentController {
  constructor(private readonly departmentService: DepartmentService) {}

  async create(req: Request, res: Response) {
    try {
      if (!req.user) return res.status(401).json({ message: "Authentication required" });

      const result = createDepartmentSchema.safeParse(req.body);
      if (!result.success) return res.status(400).json({ message: "Validation failed", errors: result.error.flatten() });

      const department = await this.departmentService.create(result.data);
      return res.status(201).json({ message: "Department created successfully", department });
    } catch (error) {
      if (error instanceof Error && error.message.includes("Unique constraint"))
        return res.status(409).json({ message: "Department name already exists" });
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const includeInactive = req.query["includeInactive"] === "true";
      const departments = await this.departmentService.getAll(includeInactive);
      return res.json({ departments });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async getById(req: Request, res: Response) {
    try {
      const id = Number(req.params["id"]);
      if (isNaN(id)) return res.status(400).json({ message: "Invalid department ID" });

      const department = await this.departmentService.getById(id);
      return res.json({ department });
    } catch (error) {
      if (error instanceof Error && error.message === "Department not found")
        return res.status(404).json({ message: error.message });
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const id = Number(req.params["id"]);
      if (isNaN(id)) return res.status(400).json({ message: "Invalid department ID" });

      const result = updateDepartmentSchema.safeParse(req.body);
      if (!result.success) return res.status(400).json({ message: "Validation failed", errors: result.error.flatten() });

      const department = await this.departmentService.update(id, result.data);
      return res.json({ message: "Department updated successfully", department });
    } catch (error) {
      if (error instanceof Error && error.message === "Department not found")
        return res.status(404).json({ message: error.message });
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const id = Number(req.params["id"]);
      if (isNaN(id)) return res.status(400).json({ message: "Invalid department ID" });

      await this.departmentService.delete(id);
      return res.json({ message: "Department deleted successfully" });
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === "Department not found") return res.status(404).json({ message: error.message });
        if (error.message.startsWith("Cannot delete")) return res.status(409).json({ message: error.message });
      }
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async getOrgChart(_req: Request, res: Response) {
    try {
      const orgChart = await this.departmentService.getOrgChart();
      return res.json({ orgChart });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }
}

import type { Request, Response } from "express";
import type { ComplianceService } from "./compliance.service.js";
import { createComplianceDocSchema, updateComplianceDocSchema, complianceQuerySchema } from "./compliance.validation.js";

export class ComplianceController {
  constructor(private readonly complianceService: ComplianceService) {}

  async create(req: Request, res: Response) {
    try {
      const result = createComplianceDocSchema.safeParse(req.body);
      if (!result.success) return res.status(400).json({ message: "Validation failed", errors: result.error.flatten() });

      const document = await this.complianceService.create(result.data);
      return res.status(201).json({ message: "Compliance document created", document });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const query = complianceQuerySchema.parse(req.query);
      const data = await this.complianceService.getAll(query);
      return res.json(data);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async getById(req: Request, res: Response) {
    try {
      const id = Number(req.params["id"]);
      if (isNaN(id)) return res.status(400).json({ message: "Invalid document ID" });

      const document = await this.complianceService.getById(id);
      return res.json({ document });
    } catch (error) {
      if (error instanceof Error && error.message === "Compliance document not found")
        return res.status(404).json({ message: error.message });
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const id = Number(req.params["id"]);
      if (isNaN(id)) return res.status(400).json({ message: "Invalid document ID" });

      const result = updateComplianceDocSchema.safeParse(req.body);
      if (!result.success) return res.status(400).json({ message: "Validation failed", errors: result.error.flatten() });

      const document = await this.complianceService.update(id, result.data);
      return res.json({ message: "Document updated", document });
    } catch (error) {
      if (error instanceof Error && error.message === "Compliance document not found")
        return res.status(404).json({ message: error.message });
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const id = Number(req.params["id"]);
      if (isNaN(id)) return res.status(400).json({ message: "Invalid document ID" });

      await this.complianceService.delete(id);
      return res.json({ message: "Document deleted" });
    } catch (error) {
      if (error instanceof Error && error.message === "Compliance document not found")
        return res.status(404).json({ message: error.message });
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async acknowledge(req: Request, res: Response) {
    try {
      const id = Number(req.params["id"]);
      if (isNaN(id)) return res.status(400).json({ message: "Invalid document ID" });

      const employeeId = Number(req.body.employeeId);
      if (isNaN(employeeId)) return res.status(400).json({ message: "employeeId required" });

      const document = await this.complianceService.acknowledge(id, employeeId);
      return res.json({ message: "Document acknowledged", document });
    } catch (error) {
      if (error instanceof Error && (error.message === "Compliance document not found" || error.message === "Already acknowledged"))
        return res.status(400).json({ message: error.message });
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async getExpiring(req: Request, res: Response) {
    try {
      const days = Number(req.query["days"]) || 30;
      const documents = await this.complianceService.getExpiring(days);
      return res.json({ documents });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async getCategories(req: Request, res: Response) {
    try {
      const categories = await this.complianceService.getCategories();
      return res.json({ categories });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }
}

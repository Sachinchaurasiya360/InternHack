import type { Request, Response } from "express";
import type { ReimbursementService } from "./reimbursement.service.js";
import { createReimbursementSchema, updateReimbursementSchema, approveReimbursementSchema, reimbursementQuerySchema } from "./reimbursement.validation.js";

export class ReimbursementController {
  constructor(private readonly reimbursementService: ReimbursementService) {}

  async create(req: Request, res: Response) {
    try {
      const result = createReimbursementSchema.safeParse(req.body);
      if (!result.success) return res.status(400).json({ message: "Validation failed", errors: result.error.flatten() });

      const record = await this.reimbursementService.create(result.data);
      return res.status(201).json({ message: "Reimbursement created", record });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const query = reimbursementQuerySchema.parse(req.query);
      const data = await this.reimbursementService.getAll(query);
      return res.json(data);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async getById(req: Request, res: Response) {
    try {
      const id = Number(req.params["id"]);
      if (isNaN(id)) return res.status(400).json({ message: "Invalid reimbursement ID" });

      const record = await this.reimbursementService.getById(id);
      return res.json({ record });
    } catch (error) {
      if (error instanceof Error && error.message === "Reimbursement not found")
        return res.status(404).json({ message: error.message });
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async getMyReimbursements(req: Request, res: Response) {
    try {
      const employeeId = Number(req.query["employeeId"]);
      if (isNaN(employeeId)) return res.status(400).json({ message: "employeeId required" });

      const reimbursements = await this.reimbursementService.getMyReimbursements(employeeId);
      return res.json({ reimbursements });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const id = Number(req.params["id"]);
      if (isNaN(id)) return res.status(400).json({ message: "Invalid reimbursement ID" });

      const result = updateReimbursementSchema.safeParse(req.body);
      if (!result.success) return res.status(400).json({ message: "Validation failed", errors: result.error.flatten() });

      const record = await this.reimbursementService.update(id, result.data);
      return res.json({ message: "Reimbursement updated", record });
    } catch (error) {
      if (error instanceof Error && (error.message === "Reimbursement not found" || error.message.startsWith("Only")))
        return res.status(400).json({ message: error.message });
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async submit(req: Request, res: Response) {
    try {
      const id = Number(req.params["id"]);
      if (isNaN(id)) return res.status(400).json({ message: "Invalid reimbursement ID" });

      const record = await this.reimbursementService.submit(id);
      return res.json({ message: "Reimbursement submitted", record });
    } catch (error) {
      if (error instanceof Error && (error.message === "Reimbursement not found" || error.message.startsWith("Only")))
        return res.status(400).json({ message: error.message });
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async approve(req: Request, res: Response) {
    try {
      const id = Number(req.params["id"]);
      if (isNaN(id)) return res.status(400).json({ message: "Invalid reimbursement ID" });

      const body = approveReimbursementSchema.safeParse(req.body);
      const record = await this.reimbursementService.approve(id, body.data?.approverNote);
      return res.json({ message: "Reimbursement approved", record });
    } catch (error) {
      if (error instanceof Error && (error.message === "Reimbursement not found" || error.message.startsWith("Only")))
        return res.status(400).json({ message: error.message });
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async reject(req: Request, res: Response) {
    try {
      const id = Number(req.params["id"]);
      if (isNaN(id)) return res.status(400).json({ message: "Invalid reimbursement ID" });

      const body = approveReimbursementSchema.safeParse(req.body);
      const record = await this.reimbursementService.reject(id, body.data?.approverNote);
      return res.json({ message: "Reimbursement rejected", record });
    } catch (error) {
      if (error instanceof Error && (error.message === "Reimbursement not found" || error.message.startsWith("Only")))
        return res.status(400).json({ message: error.message });
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async markPaid(req: Request, res: Response) {
    try {
      const { ids } = req.body;
      if (!Array.isArray(ids) || ids.length === 0) return res.status(400).json({ message: "ids array required" });

      const result = await this.reimbursementService.markPaid(ids);
      return res.json({ message: `${result.count} reimbursements marked as paid` });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }
}

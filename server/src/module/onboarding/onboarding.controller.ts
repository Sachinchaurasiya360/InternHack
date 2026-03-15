import type { Request, Response } from "express";
import type { OnboardingService } from "./onboarding.service.js";
import { createOnboardingSchema, updateOnboardingItemSchema, onboardingQuerySchema } from "./onboarding.validation.js";

export class OnboardingController {
  constructor(private readonly onboardingService: OnboardingService) {}

  async create(req: Request, res: Response) {
    try {
      const result = createOnboardingSchema.safeParse(req.body);
      if (!result.success) return res.status(400).json({ message: "Validation failed", errors: result.error.flatten() });

      const checklist = await this.onboardingService.create(result.data);
      return res.status(201).json({ message: "Onboarding checklist created", checklist });
    } catch (error) {
      if (error instanceof Error && error.message.startsWith("Onboarding checklist already"))
        return res.status(409).json({ message: error.message });
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const query = onboardingQuerySchema.parse(req.query);
      const data = await this.onboardingService.getAll(query);
      return res.json(data);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async getByEmployeeId(req: Request, res: Response) {
    try {
      const employeeId = Number(req.params["employeeId"]);
      if (isNaN(employeeId)) return res.status(400).json({ message: "Invalid employee ID" });

      const checklist = await this.onboardingService.getByEmployeeId(employeeId);
      return res.json({ checklist });
    } catch (error) {
      if (error instanceof Error && error.message === "Onboarding checklist not found")
        return res.status(404).json({ message: error.message });
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async updateItem(req: Request, res: Response) {
    try {
      const employeeId = Number(req.params["employeeId"]);
      if (isNaN(employeeId)) return res.status(400).json({ message: "Invalid employee ID" });

      const result = updateOnboardingItemSchema.safeParse(req.body);
      if (!result.success) return res.status(400).json({ message: "Validation failed", errors: result.error.flatten() });

      const checklist = await this.onboardingService.updateItem(employeeId, result.data.itemIndex, result.data.completed, result.data.note);
      return res.json({ message: "Item updated", checklist });
    } catch (error) {
      if (error instanceof Error && (error.message === "Onboarding checklist not found" || error.message === "Invalid item index"))
        return res.status(400).json({ message: error.message });
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const employeeId = Number(req.params["employeeId"]);
      if (isNaN(employeeId)) return res.status(400).json({ message: "Invalid employee ID" });

      await this.onboardingService.delete(employeeId);
      return res.json({ message: "Onboarding checklist deleted" });
    } catch (error) {
      if (error instanceof Error && error.message === "Onboarding checklist not found")
        return res.status(404).json({ message: error.message });
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }
}

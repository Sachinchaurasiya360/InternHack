import type { Request, Response } from "express";
import type { InterviewService } from "./interview.service.js";
import { createInterviewSchema, updateInterviewSchema, interviewFeedbackSchema, interviewQuerySchema } from "./interview.validation.js";

export class InterviewController {
  constructor(private readonly interviewService: InterviewService) {}

  async create(req: Request, res: Response) {
    try {
      if (!req.user) return res.status(401).json({ message: "Authentication required" });

      const result = createInterviewSchema.safeParse(req.body);
      if (!result.success) return res.status(400).json({ message: "Validation failed", errors: result.error.flatten() });

      const interview = await this.interviewService.create(req.user.id, result.data);
      return res.status(201).json({ message: "Interview scheduled", interview });
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === "Application not found") return res.status(404).json({ message: error.message });
        if (error.message === "Not authorized") return res.status(403).json({ message: error.message });
      }
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      if (!req.user) return res.status(401).json({ message: "Authentication required" });
      const query = interviewQuerySchema.parse(req.query);
      const data = await this.interviewService.getAll(req.user.id, query);
      return res.json(data);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async getById(req: Request, res: Response) {
    try {
      if (!req.user) return res.status(401).json({ message: "Authentication required" });
      const id = Number(req.params["id"]);
      if (isNaN(id)) return res.status(400).json({ message: "Invalid interview ID" });

      const interview = await this.interviewService.getById(req.user.id, id);
      return res.json({ interview });
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === "Interview not found") return res.status(404).json({ message: error.message });
        if (error.message === "Not authorized") return res.status(403).json({ message: error.message });
      }
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async update(req: Request, res: Response) {
    try {
      if (!req.user) return res.status(401).json({ message: "Authentication required" });
      const id = Number(req.params["id"]);
      if (isNaN(id)) return res.status(400).json({ message: "Invalid interview ID" });

      const result = updateInterviewSchema.safeParse(req.body);
      if (!result.success) return res.status(400).json({ message: "Validation failed", errors: result.error.flatten() });

      const interview = await this.interviewService.update(req.user.id, id, result.data);
      return res.json({ message: "Interview updated", interview });
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === "Interview not found") return res.status(404).json({ message: error.message });
        if (error.message === "Not authorized") return res.status(403).json({ message: error.message });
      }
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      if (!req.user) return res.status(401).json({ message: "Authentication required" });
      const id = Number(req.params["id"]);
      if (isNaN(id)) return res.status(400).json({ message: "Invalid interview ID" });

      await this.interviewService.delete(req.user.id, id);
      return res.json({ message: "Interview cancelled" });
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === "Interview not found") return res.status(404).json({ message: error.message });
        if (error.message === "Not authorized") return res.status(403).json({ message: error.message });
      }
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async addFeedback(req: Request, res: Response) {
    try {
      if (!req.user) return res.status(401).json({ message: "Authentication required" });
      const id = Number(req.params["id"]);
      if (isNaN(id)) return res.status(400).json({ message: "Invalid interview ID" });

      const result = interviewFeedbackSchema.safeParse(req.body);
      if (!result.success) return res.status(400).json({ message: "Validation failed", errors: result.error.flatten() });

      const interview = await this.interviewService.addFeedback(req.user.id, id, result.data);
      return res.json({ message: "Feedback submitted", interview });
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === "Interview not found") return res.status(404).json({ message: error.message });
        if (error.message === "Not authorized") return res.status(403).json({ message: error.message });
      }
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async getForApplication(req: Request, res: Response) {
    try {
      if (!req.user) return res.status(401).json({ message: "Authentication required" });
      const applicationId = Number(req.params["applicationId"]);
      if (isNaN(applicationId)) return res.status(400).json({ message: "Invalid application ID" });

      const interviews = await this.interviewService.getForApplication(req.user.id, applicationId);
      return res.json({ interviews });
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === "Application not found") return res.status(404).json({ message: error.message });
        if (error.message === "Not authorized") return res.status(403).json({ message: error.message });
      }
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async getCalendar(req: Request, res: Response) {
    try {
      if (!req.user) return res.status(401).json({ message: "Authentication required" });
      const { startDate, endDate } = req.query;
      if (!startDate || !endDate) return res.status(400).json({ message: "startDate and endDate required" });

      const interviews = await this.interviewService.getCalendar(req.user.id, startDate as string, endDate as string);
      return res.json({ interviews });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }
}

import type { Request, Response } from "express";
import { createJobSchema, updateJobSchema, updateJobStatusSchema, jobQuerySchema } from "./types.validation.js";
import { JobService } from "./job.service.js";

export class JobController {
  constructor(private readonly jobService: JobService) {}

  async createJob(req: Request, res: Response) {
    try {
      const result = createJobSchema.safeParse(req.body);
      if (!result.success) {
        return res.status(400).json({ message: "Validation failed", errors: result.error.flatten() });
      }

      if (!req.user) {
        return res.status(401).json({ message: "Authentication required" });
      }

      const job = await this.jobService.createJob({ ...result.data, recruiterId: req.user.id });
      return res.status(201).json({ message: "Job created successfully", job });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async getJobs(req: Request, res: Response) {
    try {
      const query = jobQuerySchema.parse(req.query);
      const data = await this.jobService.getJobs(query);
      return res.status(200).json(data);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async getJobById(req: Request, res: Response) {
    try {
      const id = parseInt(String(req.params["id"]), 10);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid job ID" });
      }

      const job = await this.jobService.getJobById(id);
      if (!job) {
        return res.status(404).json({ message: "Job not found" });
      }

      return res.status(200).json({ job });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async getRecruiterJobs(req: Request, res: Response) {
    try {
      if (!req.user) {
        return res.status(401).json({ message: "Authentication required" });
      }

      const query = jobQuerySchema.parse(req.query);
      const data = await this.jobService.getRecruiterJobs(req.user.id, query);
      return res.status(200).json(data);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async updateJob(req: Request, res: Response) {
    try {
      const id = parseInt(String(req.params["id"]), 10);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid job ID" });
      }

      const result = updateJobSchema.safeParse(req.body);
      if (!result.success) {
        return res.status(400).json({ message: "Validation failed", errors: result.error.flatten() });
      }

      if (!req.user) {
        return res.status(401).json({ message: "Authentication required" });
      }

      const job = await this.jobService.updateJob(id, req.user.id, result.data);
      return res.status(200).json({ message: "Job updated successfully", job });
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === "Job not found") return res.status(404).json({ message: error.message });
        if (error.message === "Not authorized") return res.status(403).json({ message: error.message });
      }
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async updateJobStatus(req: Request, res: Response) {
    try {
      const id = parseInt(String(req.params["id"]), 10);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid job ID" });
      }

      const result = updateJobStatusSchema.safeParse(req.body);
      if (!result.success) {
        return res.status(400).json({ message: "Validation failed", errors: result.error.flatten() });
      }

      if (!req.user) {
        return res.status(401).json({ message: "Authentication required" });
      }

      const job = await this.jobService.updateJobStatus(id, req.user.id, result.data.status);
      return res.status(200).json({ message: "Job status updated", job });
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === "Job not found") return res.status(404).json({ message: error.message });
        if (error.message === "Not authorized") return res.status(403).json({ message: error.message });
      }
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async deleteJob(req: Request, res: Response) {
    try {
      const id = parseInt(String(req.params["id"]), 10);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid job ID" });
      }

      if (!req.user) {
        return res.status(401).json({ message: "Authentication required" });
      }

      await this.jobService.deleteJob(id, req.user.id);
      return res.status(200).json({ message: "Job deleted successfully" });
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === "Job not found") return res.status(404).json({ message: error.message });
        if (error.message === "Not authorized") return res.status(403).json({ message: error.message });
      }
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }
}

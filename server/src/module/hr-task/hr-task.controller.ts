import type { Request, Response } from "express";
import type { HRTaskService } from "./hr-task.service.js";
import { createTaskSchema, updateTaskSchema, updateTaskStatusSchema, taskCommentSchema, taskQuerySchema } from "./hr-task.validation.js";

export class HRTaskController {
  constructor(private readonly taskService: HRTaskService) {}

  async create(req: Request, res: Response) {
    try {
      if (!req.user) return res.status(401).json({ message: "Authentication required" });

      const result = createTaskSchema.safeParse(req.body);
      if (!result.success) return res.status(400).json({ message: "Validation failed", errors: result.error.flatten() });

      const creatorId = Number(req.body.creatorId ?? req.user.id);
      const task = await this.taskService.create(creatorId, result.data);
      return res.status(201).json({ message: "Task created", task });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async getMyTasks(req: Request, res: Response) {
    try {
      if (!req.user || !req.user.id) return res.status(401).json({ message: "Authentication required" });
      const employeeId = Number(req.user.id);

      const query = taskQuerySchema.parse(req.query);
      const data = await this.taskService.getMyTasks(employeeId, query);
      return res.json(data);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async getTeamTasks(req: Request, res: Response) {
    try {
      if (!req.user || !req.user.id) return res.status(401).json({ message: "Authentication required" });
      const managerId = Number(req.user.id);

      const query = taskQuerySchema.parse(req.query);
      const data = await this.taskService.getTeamTasks(managerId, query);
      return res.json(data);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async getById(req: Request, res: Response) {
    try {
      const id = Number(req.params["id"]);
      if (isNaN(id)) return res.status(400).json({ message: "Invalid task ID" });

      const task = await this.taskService.getById(id);
      return res.json({ task });
    } catch (error) {
      if (error instanceof Error && error.message === "Task not found")
        return res.status(404).json({ message: error.message });
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const id = Number(req.params["id"]);
      if (isNaN(id)) return res.status(400).json({ message: "Invalid task ID" });

      const result = updateTaskSchema.safeParse(req.body);
      if (!result.success) return res.status(400).json({ message: "Validation failed", errors: result.error.flatten() });

      const task = await this.taskService.update(id, result.data);
      return res.json({ message: "Task updated", task });
    } catch (error) {
      if (error instanceof Error && error.message === "Task not found")
        return res.status(404).json({ message: error.message });
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async updateStatus(req: Request, res: Response) {
    try {
      const id = Number(req.params["id"]);
      if (isNaN(id)) return res.status(400).json({ message: "Invalid task ID" });

      const result = updateTaskStatusSchema.safeParse(req.body);
      if (!result.success) return res.status(400).json({ message: "Validation failed", errors: result.error.flatten() });

      const task = await this.taskService.updateStatus(id, result.data.status);
      return res.json({ message: "Status updated", task });
    } catch (error) {
      if (error instanceof Error && error.message === "Task not found")
        return res.status(404).json({ message: error.message });
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async addComment(req: Request, res: Response) {
    try {
      if (!req.user || !req.user.id) return res.status(401).json({ message: "Authentication required" });
      
      const id = Number(req.params["id"]);
      if (isNaN(id)) return res.status(400).json({ message: "Invalid task ID" });

      const result = taskCommentSchema.safeParse(req.body);
      if (!result.success) return res.status(400).json({ message: "Validation failed", errors: result.error.flatten() });

      // Override userId with the authenticated user's ID to prevent IDOR
      const commentData = { ...result.data, userId: Number(req.user.id) };

      const task = await this.taskService.addComment(id, commentData);
      return res.json({ message: "Comment added", task });
    } catch (error) {
      if (error instanceof Error && error.message === "Task not found")
        return res.status(404).json({ message: error.message });
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }
}

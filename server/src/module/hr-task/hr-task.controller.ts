import type { Request, Response } from "express";
import { validateRequestData } from "../../utils/validation.utils.js";
import type { HRTaskService } from "./hr-task.service.js";
import { createTaskSchema, updateTaskSchema, updateTaskStatusSchema, taskCommentSchema, taskQuerySchema } from "./hr-task.validation.js";
import { prisma } from "../../database/db.js";

export class HRTaskController {
  constructor(private readonly taskService: HRTaskService) {}

  private async getEmployeeIdOrAdmin(req: Request): Promise<{ employeeId: number; isAdmin: boolean } | null> {
    if (!req.user || !req.user.id) return null;
    if (req.user.role === "ADMIN") return { employeeId: 0, isAdmin: true };
    const employee = await prisma.employee.findUnique({ where: { userId: req.user.id } });
    if (!employee) return null;
    return { employeeId: employee.id, isAdmin: false };
  }

  async create(req: Request, res: Response) {
    try {
      const context = await this.getEmployeeIdOrAdmin(req);
      if (!context) return res.status(403).json({ message: "Employee record not found" });

      const result = createTaskSchema.safeParse(req.body);
      if (!result.success) return res.status(400).json({ message: "Validation failed", errors: result.error.flatten() });

      const creatorId = Number(req.body.creatorId ?? context.employeeId);
      if (creatorId === 0) return res.status(400).json({ message: "Admin must specify creatorId in request body" });
      const task = await this.taskService.create(creatorId, result.data);
      return res.status(201).json({ message: "Task created", task });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async getMyTasks(req: Request, res: Response) {
    try {
      const context = await this.getEmployeeIdOrAdmin(req);
      if (!context) return res.status(403).json({ message: "Employee record not found" });

      const query = validateRequestData(res, taskQuerySchema, req.query);
      if (!query) return;
      if (context.isAdmin) {
        const data = await this.taskService.getAllTasks(query);
        return res.json(data);
      }
      const data = await this.taskService.getMyTasks(context.employeeId, query);
      return res.json(data);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async getTeamTasks(req: Request, res: Response) {
    try {
      const context = await this.getEmployeeIdOrAdmin(req);
      if (!context) return res.status(403).json({ message: "Employee record not found" });

      const query = validateRequestData(res, taskQuerySchema, req.query);
      if (!query) return;
      if (context.isAdmin) {
        const data = await this.taskService.getAllTasks(query);
        return res.json(data);
      }
      const data = await this.taskService.getTeamTasks(context.employeeId, query);
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

      const context = await this.getEmployeeIdOrAdmin(req);
      if (!context) return res.status(403).json({ message: "Employee record not found" });

      const task = await this.taskService.getById(id, context);
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

      const context = await this.getEmployeeIdOrAdmin(req);
      if (!context) return res.status(403).json({ message: "Employee record not found" });

      const task = await this.taskService.update(id, result.data, context);
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

      const context = await this.getEmployeeIdOrAdmin(req);
      if (!context) return res.status(403).json({ message: "Employee record not found" });

      const task = await this.taskService.updateStatus(id, result.data.status, context);
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
      const id = Number(req.params["id"]);
      if (isNaN(id)) return res.status(400).json({ message: "Invalid task ID" });

      const result = taskCommentSchema.safeParse(req.body);
      if (!result.success) return res.status(400).json({ message: "Validation failed", errors: result.error.flatten() });

      const context = await this.getEmployeeIdOrAdmin(req);
      if (!context) return res.status(403).json({ message: "Employee record not found" });

      // Override userId with the authenticated user's ID
      const commentData = { ...result.data, userId: Number(req.user!.id) };

      const task = await this.taskService.addComment(id, commentData, context);
      return res.json({ message: "Comment added", task });
    } catch (error) {
      if (error instanceof Error && error.message === "Task not found")
        return res.status(404).json({ message: error.message });
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }
}

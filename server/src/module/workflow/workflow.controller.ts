import type { Request, Response } from "express";
import type { WorkflowService } from "./workflow.service.js";
import { createWorkflowSchema, updateWorkflowSchema, triggerWorkflowSchema, advanceWorkflowSchema, workflowQuerySchema } from "./workflow.validation.js";

export class WorkflowController {
  constructor(private readonly workflowService: WorkflowService) {}

  // ── Definitions ──

  async createDefinition(req: Request, res: Response) {
    try {
      const result = createWorkflowSchema.safeParse(req.body);
      if (!result.success) return res.status(400).json({ message: "Validation failed", errors: result.error.flatten() });

      const definition = await this.workflowService.createDefinition(result.data);
      return res.status(201).json({ message: "Workflow created", definition });
    } catch (error) {
      if (error instanceof Error && error.message.includes("Unique constraint"))
        return res.status(409).json({ message: "Workflow name already exists" });
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async getDefinitions(_req: Request, res: Response) {
    try {
      const definitions = await this.workflowService.getDefinitions();
      return res.json({ definitions });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async getDefinitionById(req: Request, res: Response) {
    try {
      const id = Number(req.params["id"]);
      if (isNaN(id)) return res.status(400).json({ message: "Invalid workflow ID" });

      const definition = await this.workflowService.getDefinitionById(id);
      return res.json({ definition });
    } catch (error) {
      if (error instanceof Error && error.message === "Workflow definition not found")
        return res.status(404).json({ message: error.message });
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async updateDefinition(req: Request, res: Response) {
    try {
      const id = Number(req.params["id"]);
      if (isNaN(id)) return res.status(400).json({ message: "Invalid workflow ID" });

      const result = updateWorkflowSchema.safeParse(req.body);
      if (!result.success) return res.status(400).json({ message: "Validation failed", errors: result.error.flatten() });

      const definition = await this.workflowService.updateDefinition(id, result.data);
      return res.json({ message: "Workflow updated", definition });
    } catch (error) {
      if (error instanceof Error && error.message === "Workflow definition not found")
        return res.status(404).json({ message: error.message });
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async deleteDefinition(req: Request, res: Response) {
    try {
      const id = Number(req.params["id"]);
      if (isNaN(id)) return res.status(400).json({ message: "Invalid workflow ID" });

      await this.workflowService.deleteDefinition(id);
      return res.json({ message: "Workflow deleted" });
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === "Workflow definition not found")
          return res.status(404).json({ message: error.message });
        if (error.message.startsWith("Cannot delete"))
          return res.status(400).json({ message: error.message });
      }
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  // ── Instances ──

  async triggerWorkflow(req: Request, res: Response) {
    try {
      const result = triggerWorkflowSchema.safeParse(req.body);
      if (!result.success) return res.status(400).json({ message: "Validation failed", errors: result.error.flatten() });

      const instance = await this.workflowService.triggerWorkflow(result.data.workflowName, result.data.entityType, result.data.entityId);
      return res.status(201).json({ message: "Workflow triggered", instance });
    } catch (error) {
      if (error instanceof Error && (error.message === "Workflow not found" || error.message === "Workflow is not active"))
        return res.status(400).json({ message: error.message });
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async getInstances(req: Request, res: Response) {
    try {
      const query = workflowQuerySchema.parse(req.query);
      const data = await this.workflowService.getInstances(query);
      return res.json(data);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async getInstanceById(req: Request, res: Response) {
    try {
      const id = Number(req.params["id"]);
      if (isNaN(id)) return res.status(400).json({ message: "Invalid instance ID" });

      const instance = await this.workflowService.getInstanceById(id);
      return res.json({ instance });
    } catch (error) {
      if (error instanceof Error && error.message === "Workflow instance not found")
        return res.status(404).json({ message: error.message });
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async advanceStep(req: Request, res: Response) {
    try {
      const id = Number(req.params["id"]);
      if (isNaN(id)) return res.status(400).json({ message: "Invalid instance ID" });

      const result = advanceWorkflowSchema.safeParse(req.body);
      if (!result.success) return res.status(400).json({ message: "Validation failed", errors: result.error.flatten() });

      const instance = await this.workflowService.advanceStep(id, result.data.action, result.data.note, req.user?.id);
      return res.json({ message: "Step advanced", instance });
    } catch (error) {
      if (error instanceof Error && (error.message === "Workflow instance not found" || error.message === "Workflow is not active"))
        return res.status(400).json({ message: error.message });
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async cancelInstance(req: Request, res: Response) {
    try {
      const id = Number(req.params["id"]);
      if (isNaN(id)) return res.status(400).json({ message: "Invalid instance ID" });

      const instance = await this.workflowService.cancelInstance(id);
      return res.json({ message: "Workflow cancelled", instance });
    } catch (error) {
      if (error instanceof Error && (error.message === "Workflow instance not found" || error.message.startsWith("Only")))
        return res.status(400).json({ message: error.message });
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }
}

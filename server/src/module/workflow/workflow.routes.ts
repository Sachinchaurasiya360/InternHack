import { Router } from "express";
import { WorkflowController } from "./workflow.controller.js";
import { WorkflowService } from "./workflow.service.js";
import { authMiddleware } from "../../middleware/auth.middleware.js";
import { requirePermission } from "../../middleware/permission.middleware.js";

const workflowService = new WorkflowService();
const workflowController = new WorkflowController(workflowService);

export const workflowRouter = Router();

workflowRouter.use(authMiddleware);

// Definitions
workflowRouter.post("/definitions", requirePermission("WORKFLOW_MANAGE", "HR_ADMIN"), (req, res) => workflowController.createDefinition(req, res));
workflowRouter.get("/definitions", requirePermission("WORKFLOW_VIEW", "HR_READ"), (req, res) => workflowController.getDefinitions(req, res));
workflowRouter.get("/definitions/:id", requirePermission("WORKFLOW_VIEW", "HR_READ"), (req, res) => workflowController.getDefinitionById(req, res));
workflowRouter.put("/definitions/:id", requirePermission("WORKFLOW_MANAGE", "HR_ADMIN"), (req, res) => workflowController.updateDefinition(req, res));
workflowRouter.delete("/definitions/:id", requirePermission("WORKFLOW_MANAGE", "HR_ADMIN"), (req, res) => workflowController.deleteDefinition(req, res));

// Instances
workflowRouter.post("/trigger", requirePermission("WORKFLOW_MANAGE", "HR_WRITE"), (req, res) => workflowController.triggerWorkflow(req, res));
workflowRouter.get("/instances", requirePermission("WORKFLOW_VIEW", "HR_READ"), (req, res) => workflowController.getInstances(req, res));
workflowRouter.get("/instances/:id", requirePermission("WORKFLOW_VIEW", "HR_READ"), (req, res) => workflowController.getInstanceById(req, res));
workflowRouter.patch("/instances/:id/advance", requirePermission("WORKFLOW_MANAGE", "HR_WRITE"), (req, res) => workflowController.advanceStep(req, res));
workflowRouter.patch("/instances/:id/cancel", requirePermission("WORKFLOW_MANAGE", "HR_ADMIN"), (req, res) => workflowController.cancelInstance(req, res));

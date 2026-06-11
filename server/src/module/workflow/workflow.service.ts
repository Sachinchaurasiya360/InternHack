import { prisma } from "../../database/db.js";
import type { Prisma, WorkflowStatus } from "@prisma/client";

interface WorkflowQuery {
  page: number;
  limit: number;
  status?: WorkflowStatus | undefined;
  entityType?: string | undefined;
}

interface StepHistoryEntry {
  step: number;
  action: string;
  note?: string | undefined;
  performedBy?: number | undefined;
  performedAt: string;
}

function readJsonArray(value: Prisma.JsonValue, fieldName: string): unknown[] {
  const parsed = typeof value === "string" ? JSON.parse(value) : value;
  if (!Array.isArray(parsed)) {
    throw new Error(`Invalid workflow data: ${fieldName} must be an array`);
  }
  return parsed;
}

function toInputJson(value: unknown): Prisma.InputJsonValue {
  return value as Prisma.InputJsonValue;
}

export class WorkflowService {
  // ── Definitions ──

  async createDefinition(data: { name: string; description?: string | undefined; triggerEvent: string; steps: unknown[]; isActive: boolean }) {
    return prisma.workflowDefinition.create({
      data: {
        name: data.name,
        description: data.description ?? null,
        triggerEvent: data.triggerEvent,
        steps: toInputJson(data.steps),
        isActive: data.isActive,
      },
    });
  }

  async getDefinitions() {
    return prisma.workflowDefinition.findMany({ orderBy: { createdAt: "desc" } });
  }

  async getDefinitionById(id: number) {
    const definition = await prisma.workflowDefinition.findUnique({ where: { id } });
    if (!definition) throw new Error("Workflow definition not found");
    return definition;
  }

  async updateDefinition(id: number, data: { name?: string | undefined; description?: string | undefined; triggerEvent?: string | undefined; steps?: unknown[] | undefined; isActive?: boolean | undefined }) {
    const definition = await prisma.workflowDefinition.findUnique({ where: { id } });
    if (!definition) throw new Error("Workflow definition not found");

    const updateData: Record<string, unknown> = { ...data };
    if (data.steps !== undefined) updateData.steps = toInputJson(data.steps);

    return prisma.workflowDefinition.update({ where: { id }, data: updateData });
  }

  async deleteDefinition(id: number) {
    const definition = await prisma.workflowDefinition.findUnique({ where: { id } });
    if (!definition) throw new Error("Workflow definition not found");

    const activeInstances = await prisma.workflowInstance.count({ where: { definitionId: id, status: "ACTIVE" } });
    if (activeInstances > 0) throw new Error("Cannot delete workflow with active instances");

    return prisma.workflowDefinition.delete({ where: { id } });
  }

  // ── Instances ──

  async triggerWorkflow(workflowName: string, entityType: string, entityId: number) {
    const definition = await prisma.workflowDefinition.findUnique({ where: { name: workflowName } });
    if (!definition) throw new Error("Workflow not found");
    if (!definition.isActive) throw new Error("Workflow is not active");

    return prisma.workflowInstance.create({
      data: {
        definitionId: definition.id,
        entityType,
        entityId,
        currentStep: 0,
        status: "ACTIVE",
        stepHistory: [],
      },
      include: { definition: { select: { name: true, steps: true } } },
    });
  }

  async getInstances(query: WorkflowQuery) {
    const where: Prisma.workflowInstanceWhereInput = {};
    if (query.status) where.status = query.status;
    if (query.entityType) where.entityType = query.entityType;

    const [instances, total] = await Promise.all([
      prisma.workflowInstance.findMany({
        where,
        include: { definition: { select: { name: true, triggerEvent: true } } },
        orderBy: { createdAt: "desc" },
        skip: (query.page - 1) * query.limit,
        take: query.limit,
      }),
      prisma.workflowInstance.count({ where }),
    ]);

    return { instances, pagination: { page: query.page, limit: query.limit, total, totalPages: Math.ceil(total / query.limit) } };
  }

  async getInstanceById(id: number) {
    const instance = await prisma.workflowInstance.findUnique({
      where: { id },
      include: { definition: true },
    });
    if (!instance) throw new Error("Workflow instance not found");
    return instance;
  }

  async advanceStep(id: number, action: string, note?: string | undefined, performedBy?: number | undefined) {
    const instance = await prisma.workflowInstance.findUnique({
      where: { id },
      include: { definition: true },
    });
    if (!instance) throw new Error("Workflow instance not found");
    if (instance.status !== "ACTIVE") throw new Error("Workflow is not active");

    let validatedPerformedBy: number | undefined = undefined;
    if (performedBy !== undefined) {
      const userExists = await prisma.user.findUnique({
        where: { id: performedBy },
        select: { id: true },
      });
      if (!userExists) {
        throw new Error(`User with id ${performedBy} does not exist`);
      }
      validatedPerformedBy = performedBy;
    }

    let steps: unknown[];
    let history: StepHistoryEntry[];
    try {
      steps = readJsonArray(instance.definition.steps, "definition steps");
      history = readJsonArray(instance.stepHistory, "step history") as StepHistoryEntry[];
    } catch {
      throw new Error("Invalid workflow data: failed to parse definition steps or history");
    }

    history.push({
      step: instance.currentStep,
      action,
      note,
      performedBy: validatedPerformedBy,
      performedAt: new Date().toISOString(),
    });

    const nextStep = instance.currentStep + 1;
    const isComplete = action === "REJECT" || nextStep >= steps.length;

    return prisma.workflowInstance.update({
      where: { id },
      data: {
        currentStep: isComplete ? instance.currentStep : nextStep,
        status: action === "REJECT" ? "CANCELLED" : isComplete ? "COMPLETED" : "ACTIVE",
        stepHistory: toInputJson(history),
      },
    });
  }

  async cancelInstance(id: number) {
    const instance = await prisma.workflowInstance.findUnique({ where: { id } });
    if (!instance) throw new Error("Workflow instance not found");
    if (instance.status !== "ACTIVE") throw new Error("Only active workflows can be cancelled");

    return prisma.workflowInstance.update({ where: { id }, data: { status: "CANCELLED" } });
  }
}

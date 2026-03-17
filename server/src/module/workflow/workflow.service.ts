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

export class WorkflowService {
  // ── Definitions ──

  async createDefinition(data: { name: string; description?: string | undefined; triggerEvent: string; steps: unknown[]; isActive: boolean }) {
    return prisma.workflowDefinition.create({
      data: {
        name: data.name,
        description: data.description ?? null,
        triggerEvent: data.triggerEvent,
        steps: JSON.stringify(data.steps),
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
    if (data.steps) updateData.steps = JSON.stringify(data.steps);

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
        stepHistory: JSON.stringify([]),
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

    const steps = JSON.parse(instance.definition.steps as string) as unknown[];
    const history = JSON.parse(instance.stepHistory as string) as StepHistoryEntry[];

    history.push({
      step: instance.currentStep,
      action,
      note,
      performedBy,
      performedAt: new Date().toISOString(),
    });

    const nextStep = instance.currentStep + 1;
    const isComplete = action === "REJECT" || nextStep >= steps.length;

    return prisma.workflowInstance.update({
      where: { id },
      data: {
        currentStep: isComplete ? instance.currentStep : nextStep,
        status: action === "REJECT" ? "CANCELLED" : isComplete ? "COMPLETED" : "ACTIVE",
        stepHistory: JSON.stringify(history),
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

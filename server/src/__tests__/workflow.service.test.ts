import { beforeEach, describe, expect, it, vi } from "vitest";
import { prisma } from "../database/db.js";
import { WorkflowService } from "../module/workflow/workflow.service.js";

vi.mock("../database/db.js", () => ({
  prisma: {
    user: { findUnique: vi.fn() },
    workflowDefinition: {
      create: vi.fn(),
      findUnique: vi.fn(),
      findMany: vi.fn(),
      update: vi.fn(),
      delete: vi.fn(),
    },
    workflowInstance: {
      create: vi.fn(),
      findUnique: vi.fn(),
      findMany: vi.fn(),
      count: vi.fn(),
      update: vi.fn(),
    },
  },
}));

const WORKFLOW_STEPS = [
  { name: "Manager approval", type: "APPROVAL" },
  { name: "HR approval", type: "APPROVAL" },
];

function activeInstance(steps: unknown = WORKFLOW_STEPS, stepHistory: unknown = []) {
  return {
    id: 1,
    definitionId: 10,
    entityType: "leave",
    entityId: 99,
    currentStep: 0,
    status: "ACTIVE",
    stepHistory,
    createdAt: new Date("2026-06-01T00:00:00.000Z"),
    updatedAt: new Date("2026-06-01T00:00:00.000Z"),
    definition: {
      id: 10,
      name: "Leave approval",
      description: null,
      triggerEvent: "LEAVE_REQUESTED",
      steps,
      isActive: true,
      createdAt: new Date("2026-06-01T00:00:00.000Z"),
      updatedAt: new Date("2026-06-01T00:00:00.000Z"),
    },
  };
}

describe("WorkflowService Json handling", () => {
  let service: WorkflowService;

  beforeEach(() => {
    vi.clearAllMocks();
    service = new WorkflowService();
    vi.mocked(prisma.user.findUnique).mockResolvedValue({ id: 42 } as any);
    vi.mocked(prisma.workflowInstance.update).mockImplementation(({ data }: any) => Promise.resolve(data) as any);
  });

  it("advances workflows using Prisma Json arrays without reparsing them as strings", async () => {
    vi.mocked(prisma.workflowInstance.findUnique).mockResolvedValue(activeInstance() as any);

    const result = await service.advanceStep(1, "APPROVE", "Looks good", 42);

    expect(result).toMatchObject({
      currentStep: 1,
      status: "ACTIVE",
    });
    expect(prisma.workflowInstance.update).toHaveBeenCalledWith({
      where: { id: 1 },
      data: expect.objectContaining({
        currentStep: 1,
        status: "ACTIVE",
        stepHistory: [
          expect.objectContaining({
            step: 0,
            action: "APPROVE",
            note: "Looks good",
            performedBy: 42,
          }),
        ],
      }),
    });
  });

  it("still advances legacy rows that stored Json fields as stringified arrays", async () => {
    vi.mocked(prisma.workflowInstance.findUnique).mockResolvedValue(
      activeInstance(JSON.stringify(WORKFLOW_STEPS), JSON.stringify([])) as any,
    );

    await service.advanceStep(1, "APPROVE");

    expect(prisma.workflowInstance.update).toHaveBeenCalledWith({
      where: { id: 1 },
      data: expect.objectContaining({
        currentStep: 1,
        status: "ACTIVE",
        stepHistory: [
          expect.objectContaining({
            step: 0,
            action: "APPROVE",
          }),
        ],
      }),
    });
  });
});

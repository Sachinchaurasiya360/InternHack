import type { TrackedGrantStatus } from "@prisma/client";
import { prisma } from "../../database/db.js";

function parseDeadline(deadline?: string | null): Date | null {
  if (!deadline) return null;
  const parsed = new Date(deadline);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
}

export class GrantsService {
  async listTracked(userId: number) {
    return prisma.trackedGrant.findMany({
      where: { userId },
      orderBy: { createdAt: "desc" },
    });
  }

  /** Returns null on a duplicate (userId, grantName, organization) instead of throwing. */
  async addTracked(
    userId: number,
    data: { grantName: string; organization: string; deadline?: string | null },
  ) {
    try {
      return await prisma.trackedGrant.create({
        data: {
          userId,
          grantName: data.grantName,
          organization: data.organization,
          deadline: parseDeadline(data.deadline),
        },
      });
    } catch (err: any) {
      if (err?.code === "P2002") return null;
      throw err;
    }
  }

  /** Ownership-scoped update — returns false if no row matched (wrong id or not owned). */
  async updateTracked(
    userId: number,
    id: number,
    data: { status?: TrackedGrantStatus; notes?: string; deadline?: string | null },
  ) {
    const result = await prisma.trackedGrant.updateMany({
      where: { id, userId },
      data: {
        ...(data.status !== undefined ? { status: data.status } : {}),
        ...(data.notes !== undefined ? { notes: data.notes } : {}),
        ...(data.deadline !== undefined ? { deadline: parseDeadline(data.deadline) } : {}),
      },
    });
    return result.count > 0;
  }

  async deleteTracked(userId: number, id: number) {
    const result = await prisma.trackedGrant.deleteMany({ where: { id, userId } });
    return result.count > 0;
  }
}

export const grantsService = new GrantsService();

import { prisma } from "../../database/db.js";
import type { HackathonParticipationStatus } from "@prisma/client";

export class HackathonService {
  async listHackathons() {
    const hackathons = await prisma.hackathon.findMany({
      orderBy: { startDate: "asc" },
    });
    return { hackathons };
  }

  async upsertParticipation(userId: number, hackathonId: number, status: HackathonParticipationStatus) {
    const participation = await prisma.hackathonParticipation.upsert({
      where: { userId_hackathonId: { userId, hackathonId } },
      update: { status },
      create: { userId, hackathonId, status },
    });
    return participation;
  }

  async removeParticipation(userId: number, hackathonId: number) {
    await prisma.hackathonParticipation.deleteMany({
      where: { userId, hackathonId },
    });
  }

  async getMyParticipations(userId: number) {
    const participations = await prisma.hackathonParticipation.findMany({
      where: { userId },
      include: { hackathon: true },
      orderBy: { createdAt: "desc" },
    });
    return { participations };
  }
}

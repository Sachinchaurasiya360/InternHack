import { prisma } from "../../database/db.js";

export class OpensourceProgramService {
  async listPrograms(activeOnly = true) {
    return prisma.ossProgram.findMany({
      where: activeOnly ? { active: true } : undefined,
      orderBy: { name: "asc" },
    });
  }

  async getProgram(slug: string) {
    return prisma.ossProgram.findUnique({ where: { slug } });
  }

  async createProgram(data: Record<string, unknown>) {
    return prisma.ossProgram.create({ data: data as any });
  }

  async updateProgram(id: number, data: Record<string, unknown>) {
    return prisma.ossProgram.update({ where: { id }, data: data as any });
  }

  async deleteProgram(id: number) {
    return prisma.ossProgram.delete({ where: { id } });
  }

  async toggleProgram(userId: number, slug: string, tracked: boolean) {
    const program = await prisma.ossProgram.findUnique({
      where: { slug },
      select: { id: true },
    });
    if (!program) throw new Error("Program not found");

    if (tracked) {
      await prisma.programInterest.upsert({
        where: { userId_programId: { userId, programId: program.id } },
        create: { userId, programId: program.id, active: true },
        update: { active: true },
      });
    } else {
      await prisma.programInterest.updateMany({
        where: { userId, programId: program.id, active: true },
        data: { active: false },
      });
    }

    return this.#getTrackedSlugs(userId);
  }

  async getTrackedPrograms(userId: number) {
    const interests = await prisma.programInterest.findMany({
      where: { userId, active: true },
      select: { programId: true },
    });

    if (interests.length === 0) return [];

    return prisma.ossProgram.findMany({
      where: {
        id: { in: interests.map((i) => i.programId) },
        active: true,
      },
    });
  }

  async #getTrackedSlugs(userId: number): Promise<string[]> {
    const interests = await prisma.programInterest.findMany({
      where: { userId, active: true },
      select: { program: { select: { slug: true } } },
    });
    return interests.map((i) => i.program.slug);
  }
}

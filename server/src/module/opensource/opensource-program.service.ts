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
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { trackedPrograms: true },
    });
    if (!user) throw new Error("User not found");

    let programs = user.trackedPrograms;
    if (tracked && !programs.includes(slug)) {
      programs = [...programs, slug];
    } else if (!tracked) {
      programs = programs.filter((s) => s !== slug);
    }

    await prisma.user.update({
      where: { id: userId },
      data: { trackedPrograms: programs },
    });

    return programs;
  }

  async getTrackedPrograms(userId: number) {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { trackedPrograms: true },
    });
    if (!user) return [];

    return prisma.ossProgram.findMany({
      where: { slug: { in: user.trackedPrograms }, active: true },
    });
  }
}

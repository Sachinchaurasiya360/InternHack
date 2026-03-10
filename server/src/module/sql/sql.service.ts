import { prisma } from "../../database/db.js";

export class SqlService {
  async saveProgress(studentId: number, exerciseId: string, solved: boolean, code?: string) {
    return prisma.studentSqlProgress.upsert({
      where: { studentId_exerciseId: { studentId, exerciseId } },
      update: { solved, code, solvedAt: solved ? new Date() : undefined },
      create: { studentId, exerciseId, solved, code },
    });
  }

  async getProgress(studentId: number): Promise<Record<string, { solved: boolean; code: string | null }>> {
    const rows = await prisma.studentSqlProgress.findMany({
      where: { studentId },
      select: { exerciseId: true, solved: true, code: true },
    });

    const map: Record<string, { solved: boolean; code: string | null }> = {};
    for (const r of rows) {
      map[r.exerciseId] = { solved: r.solved, code: r.code };
    }
    return map;
  }
}

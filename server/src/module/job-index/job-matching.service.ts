import { prisma } from "../../database/db.js";

interface MatchScores {
  score: number;
  skillMatch: number;
  locationMatch: number;
  salaryMatch: number;
  vectorScore: number;
}

export class JobMatchingService {
  computeMatch(
    pref: {
      desiredSkills: string[];
      profileSkills: string[];
      desiredLocations: string[];
      workMode: string[];
      minSalary: number | null;
      dismissedJobIds: number[];
    },
    job: {
      id: number;
      skills: string[];
      location: string;
      workMode: string | null;
      salaryMin: number | null;
      salaryMax: number | null;
      createdAt: Date;
    },
    vectorSimilarity: number,
  ): MatchScores {
    const skillMatch = this.computeSkillMatch(pref, job);
    const locationMatch = this.computeLocationMatch(pref, job);
    const salaryMatch = this.computeSalaryMatch(pref, job);

    const score =
      0.4 * vectorSimilarity +
      0.3 * skillMatch +
      0.15 * locationMatch +
      0.1 * salaryMatch +
      0.05 * this.freshnessBoost(job.createdAt);

    return {
      score: Math.min(1, Math.max(0, score)),
      skillMatch,
      locationMatch,
      salaryMatch,
      vectorScore: vectorSimilarity,
    };
  }

  private computeSkillMatch(
    pref: { desiredSkills: string[]; profileSkills: string[] },
    job: { skills: string[] },
  ): number {
    const userSkills = new Set(
      [...pref.desiredSkills, ...pref.profileSkills].map((s) => s.toLowerCase()),
    );
    if (userSkills.size === 0) return 0.5;
    const jobSkills = job.skills.map((s) => s.toLowerCase());
    const overlap = jobSkills.filter((s) => userSkills.has(s)).length;
    return Math.min(1, overlap / Math.max(1, Math.min(userSkills.size, 5)));
  }

  private computeLocationMatch(
    pref: { desiredLocations: string[]; workMode: string[] },
    job: { location: string; workMode: string | null },
  ): number {
    if (pref.desiredLocations.length === 0 && pref.workMode.length === 0) return 0.5;
    if (pref.workMode.includes("REMOTE") && job.workMode === "REMOTE") return 1.0;
    const match = pref.desiredLocations.some((loc) =>
      job.location.toLowerCase().includes(loc.toLowerCase()),
    );
    return match ? 1.0 : 0.0;
  }

  private computeSalaryMatch(
    pref: { minSalary: number | null },
    job: { salaryMin: number | null; salaryMax: number | null },
  ): number {
    if (!pref.minSalary || !job.salaryMax) return 0.5;
    if (job.salaryMax >= pref.minSalary) return 1.0;
    if (job.salaryMin && job.salaryMin >= pref.minSalary * 0.8) return 0.5;
    return 0.0;
  }

  private freshnessBoost(createdAt: Date): number {
    const ageHours = (Date.now() - createdAt.getTime()) / 3600000;
    return Math.max(0, 1 - ageHours / 168);
  }

  async generateMatches(hoursBack = 6): Promise<number> {
    const cutoff = new Date(Date.now() - hoursBack * 3600000);

    const users = await prisma.userJobPreference.findMany({
      where: { hasEmbedding: true },
      select: {
        userId: true,
        desiredSkills: true,
        profileSkills: true,
        desiredLocations: true,
        workMode: true,
        minSalary: true,
        dismissedJobIds: true,
      },
    });

    let matchCount = 0;

    for (const pref of users) {
      try {
        // Vector search: top 20 most similar new jobs
        const results = await prisma.$queryRawUnsafe<Array<{ id: number; similarity: number }>>(
          `SELECT ji.id, 1 - (ji.embedding <=> up.embedding) AS similarity
           FROM "jobIndex" ji, "userJobPreference" up
           WHERE up."userId" = $1
             AND ji."isActive" = true
             AND ji."hasEmbedding" = true
             AND ji."createdAt" >= $2
             AND ji.id NOT IN (
               SELECT "jobIndexId" FROM "jobMatch" WHERE "userId" = $1
             )
           ORDER BY ji.embedding <=> up.embedding
           LIMIT 20`,
          pref.userId,
          cutoff,
        );

        for (const row of results) {
          const job = await prisma.jobIndex.findUnique({ where: { id: row.id } });
          if (!job) continue;

          const scores = this.computeMatch(pref, job, row.similarity);
          if (scores.score < 0.3) continue;
          if (pref.dismissedJobIds.includes(job.id)) continue;

          await prisma.jobMatch.upsert({
            where: { userId_jobIndexId: { userId: pref.userId, jobIndexId: job.id } },
            create: { userId: pref.userId, jobIndexId: job.id, ...scores },
            update: scores,
          });
          matchCount++;
        }
      } catch (err) {
        // pgvector may not be set up yet — skip vector matching for this user
        console.error(`[Matching] Failed for user ${pref.userId}:`, err);
      }
    }

    return matchCount;
  }
}

export const jobMatchingService = new JobMatchingService();

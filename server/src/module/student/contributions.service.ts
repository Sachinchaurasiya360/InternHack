// server/src/module/student/contributions.service.ts
import { prisma } from "../../database/db.js";
import { BadgeService } from "../badge/badge.service.js";

export class ContributionsService {
  private badgeService = new BadgeService();

  async getDashboard(userId: number) {
    // 1. PR stats from repoRequest (approved = merged, pending = open)
    const [approvedRequests, pendingRequests] = await Promise.all([
      prisma.repoRequest.findMany({ where: { userId, status: "APPROVED" }, select: { id: true, name: true, url: true } }),
      prisma.repoRequest.findMany({ where: { userId, status: "PENDING" }, select: { id: true } }),
    ]);

    const totalPRs = approvedRequests.length;
    const mergedPRs = approvedRequests.length; // treated as merged for now
    const openPRs = pendingRequests.length;
    const repositoriesContributed = approvedRequests.map((r) => ({ id: r.id, name: r.name, url: r.url }));

    // 2. Issues solved – placeholder (no issue model), set to 0
    const issuesSolved = 0;

    // 3. First PR progress (reuse existing logic)
    const firstPrProgress = await prisma.studentFirstPrProgress.findUnique({
      where: { userId },
      select: { completedStepIds: true },
    });
    const firstPrCompletedSteps = firstPrProgress?.completedStepIds ?? [];

    // 4. Badges – fetch badge records for the user
    const badges = await this.badgeService.getStudentBadges(userId);

    // 5. Contribution heatmap data – reuse opensource service method if needed (omitted for brevity)

    return {
      totalPRs,
      mergedPRs,
      openPRs,
      issuesSolved,
      repositoriesContributed,
      firstPrProgress: firstPrCompletedSteps,
      badges,
    };
  }
}

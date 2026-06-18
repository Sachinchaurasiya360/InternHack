import { prisma } from "../../database/db.js";

export class UserService {
  async calculateOssTier(userId: number): Promise<string | null> {
    const userSummary = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        repoRequests: {
          where: { status: "APPROVED" },
          select: { id: true },
        },
        firstPrProgress: {
          select: { completedStepIds: true },
        },
        guideFeedbacks: {
          select: { guideId: true },
        },
        studentBadges: {
          select: {
            badge: {
              select: { slug: true },
            },
          },
        },
      },
    });

    if (!userSummary) return null;

    const repoContributions = userSummary.repoRequests.length;
    const firstPr = userSummary.firstPrProgress[0] ?? null;
    const isFirstPrRoadmapCompleted = (firstPr?.completedStepIds.length ?? 0) >= 7;
    const completedGuidesCount = new Set(userSummary.guideFeedbacks.map(g => g.guideId)).size;
    const badges = userSummary.studentBadges;

    const isAmbassador = badges.some(b => b.badge.slug === "verified_ambassador");
    const isProgramParticipant = badges.some(b =>
      ["gsoc_participant", "outreachy_participant", "lfx_participant", "gsoc"].includes(b.badge.slug.toLowerCase()),
    );

    let tier: string | null = null;

    if (isAmbassador) tier = "Ambassador";
    else if (isProgramParticipant && repoContributions >= 10) tier = "OSS Leader";
    else if (repoContributions >= 5 && completedGuidesCount >= 3) tier = "Active Contributor";
    else if (isFirstPrRoadmapCompleted && repoContributions >= 1) tier = "Contributor";
    else if (completedGuidesCount >= 1) tier = "First Steps";

    await prisma.user.update({
      where: { id: userId },
      data: { ossTier: tier },
    });

    return tier;
  }
}

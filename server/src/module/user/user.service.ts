import { prisma } from "../../database/db.js";

export class UserService {
  async calculateOssTier(userId: number): Promise<string | null> {
    const [approvedRequests, firstPrProgress, guideFeedbacks, badges] = await Promise.all([
      prisma.repoRequest.count({
        where: { userId, status: "APPROVED" }
      }),
      prisma.studentFirstPrProgress.findUnique({
        where: { userId },
        select: { completedStepIds: true }
      }),
      prisma.guideFeedback.groupBy({
        by: ["guideId"],
        where: { userId }
      }),
      prisma.studentBadge.findMany({
        where: { studentId: userId },
        include: { badge: true }
      })
    ]);

    const completedGuidesCount = guideFeedbacks.length;
    const repoContributions = approvedRequests;
    const isFirstPrRoadmapCompleted = (firstPrProgress?.completedStepIds.length ?? 0) >= 7;

    const isAmbassador = badges.some(b => b.badge.slug === "verified_ambassador");
    const isProgramParticipant = badges.some(b => 
      ["gsoc_participant", "outreachy_participant", "lfx_participant", "gsoc"].includes(b.badge.slug.toLowerCase())
    );

    // Tier Priority (Highest to Lowest)
    if (isAmbassador) return "Ambassador";
    
    if (isProgramParticipant && repoContributions >= 10) {
      return "OSS Leader";
    }
    
    if (repoContributions >= 5 && completedGuidesCount >= 3) {
      return "Active Contributor";
    }
    
    if (isFirstPrRoadmapCompleted && repoContributions >= 1) {
      return "Contributor";
    }
    
    if (completedGuidesCount >= 1) {
      return "First Steps";
    }

    return null;
  }
}

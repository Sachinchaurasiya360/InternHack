import { prisma } from "../../database/db.js";

export interface StudyBuddyDetails {
  id: number;
  name: string;
  profilePic: string | null;
  college: string | null;
  experienceLevel: string;
  percentComplete: number;
  completedTopics: number;
  currentStreak: number;
  matchedAt: Date;
}

export class StudyBuddyService {
  /**
   * Retrieves the study buddy preference for a user on a specific roadmap.
   */
  async getPreference(userId: number, roadmapId: number) {
    return prisma.roadmapStudyBuddyPreference.findUnique({
      where: {
        userId_roadmapId: { userId, roadmapId },
      },
    });
  }

  /**
   * Upserts the study buddy preference.
   */
  async upsertPreference(userId: number, roadmapId: number, preferSameCollege: boolean, enabled: boolean) {
    return prisma.roadmapStudyBuddyPreference.upsert({
      where: {
        userId_roadmapId: { userId, roadmapId },
      },
      update: {
        preferSameCollege,
        enabled,
      },
      create: {
        userId,
        roadmapId,
        preferSameCollege,
        enabled,
      },
    });
  }

  /**
   * Returns details of the active buddy for the user on a specific roadmap.
   */
  async getActiveBuddyDetails(userId: number, roadmapId: number): Promise<StudyBuddyDetails | null> {
    const pair = await prisma.roadmapStudyBuddyPair.findFirst({
      where: {
        roadmapId,
        active: true,
        OR: [
          { studentAId: userId },
          { studentBId: userId },
        ],
      },
      include: {
        studentA: {
          select: {
            id: true,
            name: true,
            profilePic: true,
            college: true,
            roadmapEnrollments: {
              where: { roadmapId },
              include: { topicProgress: true, roadmap: { select: { topicCount: true } } },
            },
          },
        },
        studentB: {
          select: {
            id: true,
            name: true,
            profilePic: true,
            college: true,
            roadmapEnrollments: {
              where: { roadmapId },
              include: { topicProgress: true, roadmap: { select: { topicCount: true } } },
            },
          },
        },
      },
    });

    if (!pair) return null;

    const isA = pair.studentAId === userId;
    const buddyUser = isA ? pair.studentB : pair.studentA;
    const buddyEnrollment = buddyUser.roadmapEnrollments[0];

    if (!buddyEnrollment) return null;

    const completedTopics = buddyEnrollment.topicProgress.filter((p) => p.status === "COMPLETED").length;
    const totalCount = buddyEnrollment.roadmap.topicCount;
    const percentComplete = totalCount === 0 ? 0 : Math.round((completedTopics / totalCount) * 100);

    return {
      id: buddyUser.id,
      name: buddyUser.name,
      profilePic: buddyUser.profilePic,
      college: buddyUser.college,
      experienceLevel: buddyEnrollment.experienceLevel,
      percentComplete,
      completedTopics,
      currentStreak: buddyEnrollment.currentStreak,
      matchedAt: pair.matchedAt,
    };
  }

  /**
   * Opt in the user to matching pool, then immediately triggers match search.
   */
  async optIn(userId: number, roadmapId: number, preferSameCollege: boolean) {
    // 1. Verify roadmap enrollment
    const enrollment = await prisma.roadmapEnrollment.findUnique({
      where: {
        userId_roadmapId: { userId, roadmapId },
      },
    });

    if (!enrollment) {
      throw Object.assign(new Error("You must be enrolled in the roadmap to opt in to Study Buddy"), { status: 400 });
    }

    // 2. Upsert preference
    await this.upsertPreference(userId, roadmapId, preferSameCollege, true);

    // 3. Search and pair if possible
    return this.findAndCreateMatch(userId, roadmapId);
  }

  /**
   * Leave matching pool and deactivate any active pairing.
   */
  async optOut(userId: number, roadmapId: number) {
    // 1. Set preference disabled
    await this.upsertPreference(userId, roadmapId, false, false);

    // 2. Deactivate active pair and trigger rematch for buddy
    const buddyId = await this.deactivatePairAndRematchBuddy(userId, roadmapId);
    if (buddyId) {
      await this.findAndCreateMatch(buddyId, roadmapId);
    }
  }

  /**
   * Deactivate current buddy pair, then trigger matchmaking for both parties.
   */
  async rematch(userId: number, roadmapId: number) {
    // 1. Verify enrollment
    const enrollment = await prisma.roadmapEnrollment.findUnique({
      where: {
        userId_roadmapId: { userId, roadmapId },
      },
    });
    if (!enrollment) {
      throw Object.assign(new Error("Enrollment not found"), { status: 404 });
    }

    // 2. Deactivate current pair and find buddy
    const buddyId = await this.deactivatePairAndRematchBuddy(userId, roadmapId);

    // 3. Match user A
    const matchForA = await this.findAndCreateMatch(userId, roadmapId);

    // 4. Match buddy B if they were disconnected
    if (buddyId) {
      await this.findAndCreateMatch(buddyId, roadmapId);
    }

    return matchForA;
  }

  /**
   * Deactivates the active pair for this user and triggers search for the disconnected partner.
   * Returns the disconnected partner's ID if any.
   */
  private async deactivatePairAndRematchBuddy(userId: number, roadmapId: number): Promise<number | null> {
    const activePair = await prisma.roadmapStudyBuddyPair.findFirst({
      where: {
        roadmapId,
        active: true,
        OR: [
          { studentAId: userId },
          { studentBId: userId },
        ],
      },
    });

    if (!activePair) return null;

    const buddyId = activePair.studentAId === userId ? activePair.studentBId : activePair.studentAId;

    await prisma.roadmapStudyBuddyPair.update({
      where: { id: activePair.id },
      data: { active: false },
    });

    return buddyId;
  }

  /**
   * Implementation of matching algorithm.
   */
  async findAndCreateMatch(userId: number, roadmapId: number) {
    return prisma.$transaction(async (tx) => {
      // 1. Check if user already has an active pairing
      const existingPair = await tx.roadmapStudyBuddyPair.findFirst({
        where: {
          roadmapId,
          active: true,
          OR: [
            { studentAId: userId },
            { studentBId: userId },
          ],
        },
      });
      if (existingPair) return existingPair;

      // 2. Fetch user enrollment & preferences
      const userEnrollment = await tx.roadmapEnrollment.findUnique({
        where: {
          userId_roadmapId: { userId, roadmapId },
        },
        include: {
          topicProgress: true,
          roadmap: { select: { topicCount: true } },
          user: { select: { college: true } },
        },
      });
      if (!userEnrollment) return null;

      const preference = await tx.roadmapStudyBuddyPreference.findUnique({
        where: {
          userId_roadmapId: { userId, roadmapId },
        },
      });
      if (!preference || !preference.enabled) return null;

      const preferSameCollege = preference.preferSameCollege;
      const userCollege = userEnrollment.user.college;
      const completedA = userEnrollment.topicProgress.filter((p) => p.status === "COMPLETED").length;
      const totalTopics = userEnrollment.roadmap.topicCount;
      const pctA = totalTopics === 0 ? 0 : Math.round((completedA / totalTopics) * 100);

      // 3. Find immediate past buddy ID to exclude if possible
      const lastPair = await tx.roadmapStudyBuddyPair.findFirst({
        where: {
          roadmapId,
          active: false,
          OR: [
            { studentAId: userId },
            { studentBId: userId },
          ],
        },
        orderBy: { updatedAt: "desc" },
      });
      const lastBuddyId = lastPair
        ? (lastPair.studentAId === userId ? lastPair.studentBId : lastPair.studentAId)
        : null;

      // 4. Fetch all active pairs to know who is already paired
      const activePairs = await tx.roadmapStudyBuddyPair.findMany({
        where: { roadmapId, active: true },
      });
      const pairedUserIds = new Set(activePairs.flatMap((p) => [p.studentAId, p.studentBId]));

      // Double-check if the user themselves became paired concurrently
      if (pairedUserIds.has(userId)) {
        const currentActivePair = await tx.roadmapStudyBuddyPair.findFirst({
          where: {
            roadmapId,
            active: true,
            OR: [
              { studentAId: userId },
              { studentBId: userId },
            ],
          },
        });
        return currentActivePair;
      }

      // 5. Query candidate roadmap enrollments in same roadmap
      const candidates = await tx.roadmapEnrollment.findMany({
        where: {
          roadmapId,
          status: "ACTIVE",
          userId: { not: userId },
          user: {
            isActive: true,
            studyBuddyPreferences: {
              some: {
                roadmapId,
                enabled: true,
              },
            },
          },
        },
        include: {
          topicProgress: true,
          roadmap: { select: { topicCount: true } },
          user: {
            select: {
              id: true,
              name: true,
              college: true,
              studyBuddyPreferences: {
                where: { roadmapId },
              },
            },
          },
        },
      });

      // Filter out candidates that are already paired
      let eligibleCandidates = candidates.filter((c) => !pairedUserIds.has(c.userId));

      if (eligibleCandidates.length === 0) return null;

      // Filter out immediate past buddy IF there are other eligible candidates
      const nonPastCandidates = eligibleCandidates.filter((c) => c.userId !== lastBuddyId);
      if (nonPastCandidates.length > 0) {
        eligibleCandidates = nonPastCandidates;
      }

      // 6. Score candidates
      const scored = eligibleCandidates.map((cand) => {
        let score = 0;

        // College match (Boost: +10 pts)
        const candCollege = cand.user.college;
        const candPref = cand.user.studyBuddyPreferences[0];
        const hasCollegeMatch =
          userCollege &&
          candCollege &&
          userCollege.toLowerCase().trim() === candCollege.toLowerCase().trim();

        if (hasCollegeMatch && (preferSameCollege || (candPref && candPref.preferSameCollege))) {
          score += 10;
        }

        // Progress percentage match (Boost: up to 50 pts)
        const completedB = cand.topicProgress.filter((p) => p.status === "COMPLETED").length;
        const pctB = cand.roadmap.topicCount === 0 ? 0 : Math.round((completedB / cand.roadmap.topicCount) * 100);
        const pctDiff = Math.abs(pctA - pctB);
        score += (1 - pctDiff / 100) * 50;

        // Topic count match (Boost: up to 30 pts)
        const countDiff = Math.abs(completedA - completedB);
        score += Math.max(0, 30 - countDiff * 2);

        // Experience level match (Boost: +20 pts)
        if (userEnrollment.experienceLevel === cand.experienceLevel) {
          score += 20;
        }

        return { candidate: cand, score };
      });

      // Sort descending by score
      scored.sort((a, b) => b.score - a.score);

      const bestMatch = scored[0]?.candidate;
      if (!bestMatch) return null;

      // 7. Create pair (prevent duplicate check and self-pairing)
      if (userId === bestMatch.userId) return null;

      // Re-verify that candidate is not already paired concurrently
      const isBuddyStillAvailable = await tx.roadmapStudyBuddyPair.findFirst({
        where: {
          roadmapId,
          active: true,
          OR: [
            { studentAId: bestMatch.userId },
            { studentBId: bestMatch.userId },
          ],
        },
      });
      if (isBuddyStillAvailable) {
        return null;
      }

      return tx.roadmapStudyBuddyPair.create({
        data: {
          roadmapId,
          studentAId: userId,
          studentBId: bestMatch.userId,
          active: true,
        },
      });
    }, { timeout: 30000 });
  }
}

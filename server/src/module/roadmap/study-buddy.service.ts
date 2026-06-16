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
      select: {
        studentAId: true,
        studentBId: true,
        matchedAt: true,
      },
    });

    if (!pair) return null;

    const buddyId = pair.studentAId === userId ? pair.studentBId : pair.studentAId;

    const buddyUser = await prisma.user.findUnique({
      where: { id: buddyId },
      select: {
        id: true,
        name: true,
        profilePic: true,
        college: true,
        roadmapEnrollments: {
          where: { roadmapId },
          select: {
            experienceLevel: true,
            currentStreak: true,
            roadmap: { select: { topicCount: true } },
            topicProgress: {
              where: { status: "COMPLETED" },
              select: { id: true },
            },
          },
        },
      },
    });

    if (!buddyUser) return null;

    const buddyEnrollment = buddyUser.roadmapEnrollments[0];
    if (!buddyEnrollment) return null;

    const completedTopics = buddyEnrollment.topicProgress.length;
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
    // 1. Check if user already has an active pairing (outside transaction)
    const existingPair = await prisma.roadmapStudyBuddyPair.findFirst({
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

    // 2. Fetch user enrollment & preferences (outside transaction)
    const userEnrollment = await prisma.roadmapEnrollment.findUnique({
      where: {
        userId_roadmapId: { userId, roadmapId },
      },
      select: {
        experienceLevel: true,
        roadmap: { select: { topicCount: true } },
        user: { select: { college: true } },
        _count: {
          select: {
            topicProgress: {
              where: { status: "COMPLETED" },
            },
          },
        },
      },
    });
    if (!userEnrollment) return null;

    const preference = await prisma.roadmapStudyBuddyPreference.findUnique({
      where: {
        userId_roadmapId: { userId, roadmapId },
      },
    });
    if (!preference || !preference.enabled) return null;

    const preferSameCollege = preference.preferSameCollege;
    const userCollege = userEnrollment.user.college;
    const completedA = userEnrollment._count.topicProgress;
    const totalTopics = userEnrollment.roadmap.topicCount;
    const pctA = totalTopics === 0 ? 0 : Math.round((completedA / totalTopics) * 100);

    // 3. Find immediate past buddy ID to exclude if possible (outside transaction)
    const lastPair = await prisma.roadmapStudyBuddyPair.findFirst({
      where: {
        roadmapId,
        active: false,
        OR: [
          { studentAId: userId },
          { studentBId: userId },
        ],
      },
      orderBy: { updatedAt: "desc" },
      select: { studentAId: true, studentBId: true },
    });
    const lastBuddyId = lastPair
      ? (lastPair.studentAId === userId ? lastPair.studentBId : lastPair.studentAId)
      : null;

    // 4. Fetch all active pairs to know who is already paired (outside transaction)
    const activePairs = await prisma.roadmapStudyBuddyPair.findMany({
      where: { roadmapId, active: true },
      select: { studentAId: true, studentBId: true },
    });
    const pairedUserIds = new Set(activePairs.flatMap((p) => [p.studentAId, p.studentBId]));

    // Double-check if the user themselves became paired concurrently
    if (pairedUserIds.has(userId)) {
      const currentActivePair = await prisma.roadmapStudyBuddyPair.findFirst({
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

    // 5. Query candidate roadmap enrollments in same roadmap (outside transaction, using filtered _count)
    const candidates = await prisma.roadmapEnrollment.findMany({
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
      select: {
        userId: true,
        experienceLevel: true,
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
        _count: {
          select: {
            topicProgress: {
              where: { status: "COMPLETED" },
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
      const completedB = cand._count.topicProgress;
      const pctB = totalTopics === 0 ? 0 : Math.round((completedB / totalTopics) * 100);
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

    // 7. Short transaction for matching / creation
    return prisma.$transaction(async (tx) => {
      // Re-verify that current user hasn't been paired concurrently
      const userActivePair = await tx.roadmapStudyBuddyPair.findFirst({
        where: {
          roadmapId,
          active: true,
          OR: [
            { studentAId: userId },
            { studentBId: userId },
          ],
        },
      });
      if (userActivePair) return userActivePair;

      for (const item of scored) {
        const bestMatch = item.candidate;
        if (userId === bestMatch.userId) continue;

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

        if (!isBuddyStillAvailable) {
          try {
            return await tx.roadmapStudyBuddyPair.create({
              data: {
                roadmapId,
                studentAId: userId,
                studentBId: bestMatch.userId,
                active: true,
              },
            });
          } catch (error: any) {
            // Unhandled unique-violation race: P2002
            if (error.code === "P2002") {
              // Check if user themselves got paired concurrently
              const concurrentUserPair = await tx.roadmapStudyBuddyPair.findFirst({
                where: {
                  roadmapId,
                  active: true,
                  OR: [
                    { studentAId: userId },
                    { studentBId: userId },
                  ],
                },
              });
              if (concurrentUserPair) {
                return concurrentUserPair;
              }
              // Buddy got paired, try the next one in the sorted candidate list
              continue;
            }
            throw error;
          }
        }
      }

      return null;
    }, { timeout: 5000 });
  }
}

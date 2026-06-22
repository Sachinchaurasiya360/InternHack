import { prisma } from "../../database/db.js";
import type { MockInterviewTopic, peerMockInterview } from "@prisma/client";

export interface ScoredPair {
  u1: any;
  u2: any;
  score: number;
}

export class PeerMockInterviewService {
  /**
   * Retrieves the peer mock interview preferences for a user.
   */
  async getPreference(userId: number) {
    return prisma.peerMockInterviewPreference.findUnique({
      where: { userId },
    });
  }

  /**
   * Creates or updates the mock interview preferences.
   * If disabling, cancels active scheduled pairings and notifies the partners.
   */
  async upsertPreference(userId: number, topic: MockInterviewTopic, availability: string[], enabled: boolean) {
    const preference = await prisma.peerMockInterviewPreference.upsert({
      where: { userId },
      update: { topic, availability, enabled },
      create: { userId, topic, availability, enabled },
    });

    if (!enabled) {
      // Find upcoming pairings
      const upcoming = await prisma.peerMockInterview.findMany({
        where: {
          status: "SCHEDULED",
          OR: [
            { studentAId: userId },
            { studentBId: userId },
          ],
        },
        include: {
          studentA: { select: { id: true, name: true, email: true } },
          studentB: { select: { id: true, name: true, email: true } },
        }
      });

      for (const pairing of upcoming) {
        await prisma.peerMockInterview.update({
          where: { id: pairing.id },
          data: { status: "CANCELLED" },
        });

        // Notify partner
        const partner = pairing.studentAId === userId ? pairing.studentB : pairing.studentA;
        const canceller = pairing.studentAId === userId ? pairing.studentA : pairing.studentB;
        try {
          const emailUtils = await import("../../utils/email.utils.js");
          const html = `<h3>Upcoming Mock Interview Cancelled</h3>
            <p>Your upcoming mock interview with <strong>${canceller.name}</strong> has been cancelled because they opted out of mock interviews.</p>
            <p>You will be paired with a new student in the next weekly matching cycle.</p>`;
          await emailUtils.sendEmail({ to: partner.email, subject: "Upcoming Mock Interview Cancelled", html });
        } catch (err) {
          console.error("Failed to send cancellation email:", err);
        }
      }
    }

    return preference;
  }

  /**
   * Retrieves the active SCHEDULED mock interview for a user.
   */
  async getUpcomingPairing(userId: number) {
    return prisma.peerMockInterview.findFirst({
      where: {
        status: "SCHEDULED",
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
            email: true,
            profilePic: true,
            college: true,
            linkedinUrl: true,
          }
        },
        studentB: {
          select: {
            id: true,
            name: true,
            email: true,
            profilePic: true,
            college: true,
            linkedinUrl: true,
          }
        },
        assignedProblem: true,
      }
    });
  }

  /**
   * Retrieves full details for a mock interview pairing.
   */
  async getPairingDetails(userId: number, pairingId: number) {
    const pairing = await prisma.peerMockInterview.findUnique({
      where: { id: pairingId },
      include: {
        studentA: {
          select: {
            id: true,
            name: true,
            email: true,
            profilePic: true,
            college: true,
            linkedinUrl: true,
          }
        },
        studentB: {
          select: {
            id: true,
            name: true,
            email: true,
            profilePic: true,
            college: true,
            linkedinUrl: true,
          }
        },
        assignedProblem: true,
      }
    });

    if (!pairing) {
      throw Object.assign(new Error("Pairing not found"), { status: 404 });
    }

    if (pairing.studentAId !== userId && pairing.studentBId !== userId) {
      throw Object.assign(new Error("Unauthorized access to pairing"), { status: 403 });
    }

    return pairing;
  }

  /**
   * Marks a scheduled mock interview as completed.
   */
  async markCompleted(userId: number, pairingId: number) {
    const pairing = await this.getPairingDetails(userId, pairingId);

    if (pairing.status !== "SCHEDULED") {
      throw Object.assign(new Error("Interview is not in scheduled state"), { status: 400 });
    }

    const updated = await prisma.peerMockInterview.update({
      where: { id: pairingId },
      data: {
        status: "COMPLETED",
        completedAt: new Date(),
      },
    });

    // Award badges
    try {
      const badgeServiceClass = await import("../badge/badge.service.js").then(m => m.BadgeService);
      const badgeService = new badgeServiceClass();
      await badgeService.checkAndAwardBadges(pairing.studentAId, "mock_interview");
      await badgeService.checkAndAwardBadges(pairing.studentBId, "mock_interview");
    } catch (err) {
      console.error("Failed to check and award badges:", err);
    }

    // Send notifications
    try {
      const emailUtils = await import("../../utils/email.utils.js");
      const html = `<h3>Mock Interview Completed!</h3><p>Your practice mock interview session has been marked as completed. Please rate your session and provide feedback to your partner.</p>`;
      await emailUtils.sendEmail({ to: pairing.studentA.email, subject: "Mock Interview Completed", html });
      await emailUtils.sendEmail({ to: pairing.studentB.email, subject: "Mock Interview Completed", html });
    } catch (err) {
      console.error("Failed to send completion emails:", err);
    }

    return updated;
  }

  /**
   * Submits a rating/feedback from one student to their partner.
   */
  async submitRating(userId: number, pairingId: number, rating: number, feedback?: string) {
    const pairing = await this.getPairingDetails(userId, pairingId);

    const isStudentA = pairing.studentAId === userId;
    const updateData: any = {};
    if (isStudentA) {
      updateData.ratingAForB = rating;
      updateData.feedbackAForB = feedback || null;
    } else {
      updateData.ratingBForA = rating;
      updateData.feedbackBForA = feedback || null;
    }

    return prisma.peerMockInterview.update({
      where: { id: pairingId },
      data: updateData,
    });
  }

  /**
   * Core pairing engine. Finds compatible opted-in students, computes compatibility
   * scores, pairs them greedily, assigns problems for DSA, and dispatches email confirmations.
   */
  async runMatchingJob() {
    // 1. Get all active preferences
    const prefs = await prisma.peerMockInterviewPreference.findMany({
      where: { enabled: true },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            college: true,
            roadmapEnrollments: {
              where: { status: "ACTIVE" },
              select: {
                roadmapId: true,
                experienceLevel: true,
                roadmap: { select: { topicCount: true } },
                _count: {
                  select: {
                    topicProgress: {
                      where: { status: "COMPLETED" },
                    }
                  }
                }
              }
            }
          }
        }
      }
    });

    // 2. Filter out users who already have a SCHEDULED pairing
    const scheduledPairings = await prisma.peerMockInterview.findMany({
      where: { status: "SCHEDULED" },
      select: { studentAId: true, studentBId: true },
    });
    const pairedUserIds = new Set<number>();
    for (const p of scheduledPairings) {
      pairedUserIds.add(p.studentAId);
      pairedUserIds.add(p.studentBId);
    }

    const pool = prefs.filter(p => !pairedUserIds.has(p.userId));

    // Group by topic
    const byTopic: Record<MockInterviewTopic, typeof pool> = {
      DSA: [],
      SYSTEM_DESIGN: [],
      FRONTEND: [],
    };

    for (const item of pool) {
      byTopic[item.topic].push(item);
    }

    const matchesCreated: peerMockInterview[] = [];

    // Process each topic group separately
    for (const topic of Object.keys(byTopic) as MockInterviewTopic[]) {
      const candidates = byTopic[topic];
      if (candidates.length < 2) continue;

      // Find all past matches to apply penalty
      const pastPairings = await prisma.peerMockInterview.findMany({
        where: {
          topic,
          status: { in: ["COMPLETED", "CANCELLED"] },
        },
        select: { studentAId: true, studentBId: true },
      });

      const arePastPartners = (u1: number, u2: number) => {
        return pastPairings.some(
          p => (p.studentAId === u1 && p.studentBId === u2) || (p.studentAId === u2 && p.studentBId === u1)
        );
      };

      const pairsList: ScoredPair[] = [];

      for (let i = 0; i < candidates.length; i++) {
        for (let j = i + 1; j < candidates.length; j++) {
          const c1 = candidates[i];
          const c2 = candidates[j];

          let score = 0;

          // Topic match is guaranteed because they are grouped by topic
          score += 40;

          // Check roadmap compatibility
          const r1 = c1.user.roadmapEnrollments;
          const r2 = c2.user.roadmapEnrollments;

          let bestRoadmapScore = 0;

          for (const enroll1 of r1) {
            for (const enroll2 of r2) {
              if (enroll1.roadmapId === enroll2.roadmapId) {
                let roadmapScore = 50; // roadmap match

                // Progress match
                const total1 = enroll1.roadmap.topicCount;
                const completed1 = enroll1._count.topicProgress;
                const pct1 = total1 === 0 ? 0 : Math.round((completed1 / total1) * 100);

                const total2 = enroll2.roadmap.topicCount;
                const completed2 = enroll2._count.topicProgress;
                const pct2 = total2 === 0 ? 0 : Math.round((completed2 / total2) * 100);

                const pctDiff = Math.abs(pct1 - pct2);
                roadmapScore += (1 - pctDiff / 100) * 30;

                // Experience level match
                if (enroll1.experienceLevel === enroll2.experienceLevel) {
                  roadmapScore += 20;
                }

                if (roadmapScore > bestRoadmapScore) {
                  bestRoadmapScore = roadmapScore;
                }
              }
            }
          }

          score += bestRoadmapScore;

          // Availability match
          const hasAvailabilityMatch = c1.availability.some(slot => c2.availability.includes(slot));
          if (hasAvailabilityMatch) {
            score += 10;
          }

          // Past partner penalty
          if (arePastPartners(c1.userId, c2.userId)) {
            score -= 50;
          }

          pairsList.push({ u1: c1, u2: c2, score });
        }
      }

      // Sort descending by score
      pairsList.sort((a, b) => b.score - a.score);

      const matchedIds = new Set<number>();

      for (const pair of pairsList) {
        if (matchedIds.has(pair.u1.userId) || matchedIds.has(pair.u2.userId)) continue;

        // Assign problem if DSA
        let assignedProblemId: number | null = null;
        if (topic === "DSA") {
          const expLevel = pair.u1.user.roadmapEnrollments[0]?.experienceLevel || "SOME";
          const difficultyMap: Record<string, string> = {
            NEW: "Easy",
            SOME: "Medium",
            EXPERIENCED: "Hard",
          };
          const difficulty = difficultyMap[expLevel] || "Medium";

          const problems = await prisma.dsaProblem.findMany({
            where: { difficulty },
            select: { id: true },
            take: 10,
          });

          if (problems.length > 0) {
            const randomProblem = problems[Math.floor(Math.random() * problems.length)];
            assignedProblemId = randomProblem.id;
          }
        }

        const match = await prisma.peerMockInterview.create({
          data: {
            topic,
            studentAId: pair.u1.userId,
            studentBId: pair.u2.userId,
            assignedProblemId,
            status: "SCHEDULED",
          },
          include: {
            studentA: { select: { id: true, name: true, email: true } },
            studentB: { select: { id: true, name: true, email: true } },
            assignedProblem: true,
          }
        });

        matchedIds.add(pair.u1.userId);
        matchedIds.add(pair.u2.userId);
        matchesCreated.push(match);

        // Send match notifications
        try {
          const emailUtils = await import("../../utils/email.utils.js");
          const problemInfo = match.assignedProblem
            ? `<p>Assigned DSA Problem: <a href="https://www.internhack.xyz/learn/dsa/problem/${match.assignedProblem.slug}">${match.assignedProblem.title}</a></p>`
            : "";
          
          const htmlA = `<h3>You've been matched!</h3>
            <p>You have been matched with <strong>${pair.u2.user.name}</strong> for a ${topic} practice mock interview.</p>
            <p>Their college: ${pair.u2.user.college || "N/A"}</p>
            ${problemInfo}
            <p>Please reach out to coordinate a time.</p>`;

          const htmlB = `<h3>You've been matched!</h3>
            <p>You have been matched with <strong>${pair.u1.user.name}</strong> for a ${topic} practice mock interview.</p>
            <p>Their college: ${pair.u1.user.college || "N/A"}</p>
            ${problemInfo}
            <p>Please reach out to coordinate a time.</p>`;

          await emailUtils.sendEmail({ to: pair.u1.user.email, subject: `Peer Mock Interview Match - ${topic}`, html: htmlA });
          await emailUtils.sendEmail({ to: pair.u2.user.email, subject: `Peer Mock Interview Match - ${topic}`, html: htmlB });
        } catch (err) {
          console.error("Failed to send match notifications:", err);
        }
      }
    }

    return matchesCreated;
  }
}

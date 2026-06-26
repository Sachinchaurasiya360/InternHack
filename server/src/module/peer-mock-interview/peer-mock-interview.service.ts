import { prisma } from "../../database/db.js";
import type { MockInterviewTopic, peerMockInterview } from "@prisma/client";

export interface ScoredPair {
  u1: any;
  u2: any;
  score: number;
}

/**
 * Format a date for emails in UTC with an explicit label. Server-side
 * `toLocaleString()` renders in the server's timezone (UTC on Vercel) with no
 * indication, which is ambiguous for recipients; this makes the zone explicit.
 */
function formatUtc(d: Date): string {
  return (
    d.toLocaleString("en-US", {
      timeZone: "UTC",
      dateStyle: "medium",
      timeStyle: "short",
    }) + " UTC"
  );
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
          status: { in: ["SCHEDULED", "PENDING_SCHEDULE"] },
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
        const updateResult = await prisma.peerMockInterview.updateMany({
          where: { id: pairing.id, status: pairing.status },
          data: { status: "CANCELLED" },
        });

        if (updateResult.count === 0) {
          continue;
        }

        // Notify partner
        const partner = pairing.studentAId === userId ? pairing.studentB : pairing.studentA;
        const canceller = pairing.studentAId === userId ? pairing.studentA : pairing.studentB;
        if (!partner || !canceller) continue;
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
    // Note: matching runs on the scheduled match cron. We deliberately do not
    // fire runMatchingJob() here: on Vercel serverless the function can freeze
    // after responding, so a fire-and-forget job would not reliably finish, and
    // running the full matching engine inline would make this endpoint slow.

    return preference;
  }

  /**
   * Retrieves the active SCHEDULED mock interview for a user.
   */
  async getUpcomingPairing(userId: number) {
    return prisma.peerMockInterview.findFirst({
      where: {
        OR: [
          {
            status: { in: ["PENDING_SCHEDULE", "SCHEDULED"] },
            OR: [
              { studentAId: userId },
              { studentBId: userId },
            ],
          },
          {
            status: "COMPLETED",
            OR: [
              { studentAId: userId, ratingAForB: null },
              { studentBId: userId, ratingBForA: null },
            ],
          },
        ],
      },
      orderBy: {
        createdAt: "desc",
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
      if (pairing.studentAId) {
        await badgeService.checkAndAwardBadges(pairing.studentAId, "mock_interview");
      }
      if (pairing.studentBId) {
        await badgeService.checkAndAwardBadges(pairing.studentBId, "mock_interview");
      }
    } catch (err) {
      console.error("Failed to check and award badges:", err);
    }

    // Send notifications
    try {
      const emailUtils = await import("../../utils/email.utils.js");
      const html = `<h3>Mock Interview Completed!</h3><p>Your practice mock interview session has been marked as completed. Please rate your session and provide feedback to your partner.</p>`;
      if (pairing.studentA?.email) {
        await emailUtils.sendEmail({ to: pairing.studentA.email, subject: "Mock Interview Completed", html });
      }
      if (pairing.studentB?.email) {
        await emailUtils.sendEmail({ to: pairing.studentB.email, subject: "Mock Interview Completed", html });
      }
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

    if (pairing.status !== "COMPLETED") {
      throw Object.assign(new Error("Interview is not in completed state"), { status: 400 });
    }

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
   * Propose a time for the mock interview.
   */
  async proposeTime(userId: number, pairingId: number, proposedTime: Date) {
    const pairing = await this.getPairingDetails(userId, pairingId);
    if (pairing.status !== "PENDING_SCHEDULE") {
      throw Object.assign(new Error("Interview is not pending schedule"), { status: 400 });
    }
    if (proposedTime <= new Date()) {
      throw Object.assign(new Error("Proposed time must be in the future"), { status: 400 });
    }

    const updated = await prisma.peerMockInterview.update({
      where: { id: pairingId },
      data: {
        proposedTime,
        proposedById: userId,
      },
      include: {
        studentA: true,
        studentB: true,
      }
    });

    const partner = pairing.studentAId === userId ? updated.studentB : updated.studentA;
    const proposer = pairing.studentAId === userId ? updated.studentA : updated.studentB;

    if (partner?.email && proposer?.name) {
      try {
        const emailUtils = await import("../../utils/email.utils.js");
        const html = `<h3>New Time Proposed</h3>
          <p><strong>${proposer.name}</strong> has proposed a time for your upcoming practice session:</p>
          <p><strong>${formatUtc(proposedTime)}</strong></p>
          <p>Please log in to your dashboard to accept or reject this proposed time.</p>`;
        await emailUtils.sendEmail({ to: partner.email, subject: "Mock Interview Time Proposed", html });
      } catch (err) {
        console.error("Failed to send proposal email:", err);
      }
    }

    return updated;
  }

  /**
   * Accept a proposed time for the mock interview.
   */
  async acceptTime(userId: number, pairingId: number, meetingLink?: string) {
    const pairing = await this.getPairingDetails(userId, pairingId);
    if (pairing.status !== "PENDING_SCHEDULE") {
      throw Object.assign(new Error("Interview is not pending schedule"), { status: 400 });
    }
    if (!pairing.proposedTime || !pairing.proposedById) {
      throw Object.assign(new Error("No time has been proposed"), { status: 400 });
    }
    if (pairing.proposedById === userId) {
      throw Object.assign(new Error("You cannot accept your own proposed time"), { status: 400 });
    }

    if (new Date(pairing.proposedTime) < new Date()) {
      await prisma.peerMockInterview.update({
        where: { id: pairingId },
        data: { proposedTime: null, proposedById: null },
      });
      throw Object.assign(new Error("The proposed time has already passed. Please propose a new time."), { status: 400 });
    }

    const updated = await prisma.peerMockInterview.update({
      where: { id: pairingId },
      data: {
        scheduledAt: pairing.proposedTime,
        schedulingConfirmed: true,
        status: "SCHEDULED",
        meetingLink,
      },
      include: {
        studentA: true,
        studentB: true,
      }
    });

    const emailUtils = await import("../../utils/email.utils.js");
    const html = `<h3>Mock Interview Scheduled!</h3>
      <p>Your mock interview has been scheduled for <strong>${formatUtc(pairing.proposedTime)}</strong>.</p>
      ${meetingLink ? `<p>Meeting Link: <a href="${meetingLink}">${meetingLink}</a></p>` : ""}
      <p>Please mark your calendar!</p>`;

    try {
      if (updated.studentA?.email) await emailUtils.sendEmail({ to: updated.studentA.email, subject: "Mock Interview Scheduled", html });
      if (updated.studentB?.email) await emailUtils.sendEmail({ to: updated.studentB.email, subject: "Mock Interview Scheduled", html });
    } catch (err) {
      console.error("Failed to send scheduled emails:", err);
    }

    return updated;
  }

  /**
   * Reject a proposed time for the mock interview.
   */
  async rejectTime(userId: number, pairingId: number) {
    const pairing = await this.getPairingDetails(userId, pairingId);
    if (pairing.status !== "PENDING_SCHEDULE") {
      throw Object.assign(new Error("Interview is not pending schedule"), { status: 400 });
    }
    if (!pairing.proposedTime || !pairing.proposedById) {
      throw Object.assign(new Error("No time has been proposed"), { status: 400 });
    }
    if (pairing.proposedById === userId) {
      throw Object.assign(new Error("You cannot reject your own proposed time"), { status: 400 });
    }

    const proposer = pairing.studentAId === pairing.proposedById ? pairing.studentA : pairing.studentB;
    const rejecter = pairing.studentAId === userId ? pairing.studentA : pairing.studentB;

    const updated = await prisma.peerMockInterview.update({
      where: { id: pairingId },
      data: {
        proposedTime: null,
        proposedById: null,
      },
    });

    if (proposer?.email && rejecter?.name) {
      try {
        const emailUtils = await import("../../utils/email.utils.js");
        const html = `<h3>Proposed Time Rejected</h3>
          <p><strong>${rejecter.name}</strong> was unable to meet at your proposed time.</p>
          <p>Please log in to your dashboard to propose a different time, or reach out to them directly.</p>`;
        await emailUtils.sendEmail({ to: proposer.email, subject: "Mock Interview Time Rejected", html });
      } catch (err) {
        console.error("Failed to send rejection email:", err);
      }
    }

    return updated;
  }

  /**
   * Core pairing engine. Finds compatible opted-in students, computes compatibility
   * scores, pairs them greedily, assigns problems for DSA, and dispatches email confirmations.
   */
  async runMatchingJob() {
    const { withAdvisoryLock } = await import("../../utils/cron-lock.js");
    const result = await withAdvisoryLock("peer_mock_interview_match_service", async () => {
      // 1. Get active preferences for actively-enrolled PREMIUM users only.
      // The candidate pool must match what the API gates on (requirePremium /
      // getPlanTier), otherwise a lapsed user gets matched by the cron and then
      // hits 403 viewing their own pairing. This mirrors getPlanTier's PREMIUM
      // condition at the query level (plan in {MONTHLY,YEARLY} + ACTIVE + not
      // past subscriptionEndDate).
      const prefs = await prisma.peerMockInterviewPreference.findMany({
        where: {
          enabled: true,
          user: {
            subscriptionStatus: "ACTIVE",
            subscriptionPlan: { in: ["MONTHLY", "YEARLY"] },
            OR: [
              { subscriptionEndDate: null },
              { subscriptionEndDate: { gt: new Date() } },
            ],
            roadmapEnrollments: {
              some: { status: "ACTIVE" },
            },
          },
        },
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

    // 2. Filter out users who already have a SCHEDULED or PENDING_SCHEDULE pairing
    const scheduledPairings = await prisma.peerMockInterview.findMany({
      where: { status: { in: ["SCHEDULED", "PENDING_SCHEDULE"] } },
      select: { studentAId: true, studentBId: true },
    });
    const pairedUserIds = new Set<number>();
    for (const p of scheduledPairings) {
      if (p.studentAId) pairedUserIds.add(p.studentAId);
      if (p.studentBId) pairedUserIds.add(p.studentBId);
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

        const sharedAvailability = pair.u1.availability.filter((slot: string) => pair.u2.availability.includes(slot));

        const match = await prisma.peerMockInterview.create({
          data: {
            topic,
            studentAId: pair.u1.userId,
            studentBId: pair.u2.userId,
            assignedProblemId,
            status: "PENDING_SCHEDULE",
            sharedAvailability,
            scheduledAt: null,
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
            <p>Log in to your dashboard to propose a time to meet.</p>`;

          const htmlB = `<h3>You've been matched!</h3>
            <p>You have been matched with <strong>${pair.u1.user.name}</strong> for a ${topic} practice mock interview.</p>
            <p>Their college: ${pair.u1.user.college || "N/A"}</p>
            ${problemInfo}
            <p>Log in to your dashboard to propose a time to meet.</p>`;

          await emailUtils.sendEmail({ to: pair.u1.user.email, subject: `Peer Mock Interview Match - ${topic}`, html: htmlA });
          await emailUtils.sendEmail({ to: pair.u2.user.email, subject: `Peer Mock Interview Match - ${topic}`, html: htmlB });
        } catch (err) {
          console.error("Failed to send match notifications:", err);
        }
      }
    }
    return matchesCreated;
    });
    return result ?? [];
  }
}

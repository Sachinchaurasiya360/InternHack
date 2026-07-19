import { prisma } from "../../database/db.js";
import type { MockInterviewTopic } from "@prisma/client";
import { getGenericPrepMaterial } from "./peer-mock-interview.prep.js";
import { getPlanTier, type PlanTier } from "../../config/usage-limits.js";
import { cacheGet, cacheSet, cacheDel } from "../../utils/cache.js";
import {
  escapeHtml,
  peerMockMatchedEmailHtml,
  peerMockScheduledEmailHtml,
  peerMockTimeProposedEmailHtml,
  peerMockTimeRejectedEmailHtml,
  peerMockDeclinedEmailHtml,
  peerMockCancelledEmailHtml,
  peerMockCompletedEmailHtml,
} from "../../utils/email-templates.js";
import { generateICS } from "../../utils/calendar.utils.js";

/**
 * Skill tests that signal readiness for each interview topic. A candidate with
 * a verified skill from this list ranks first for that topic. Extend when
 * admins add new skill tests.
 */
const TOPIC_RELEVANT_SKILLS: Record<MockInterviewTopic, string[]> = {
  DSA: ["javascript", "python", "java", "cpp", "c++"],
  SYSTEM_DESIGN: ["sql", "python", "typescript", "javascript"],
  FRONTEND: ["react", "javascript", "typescript"],
  BACKEND: ["python", "sql", "typescript", "javascript", "java"],
  // Behavioral rounds have no technical skill test; ranking falls back to
  // roadmap progress and availability.
  BEHAVIORAL: [],
  DEVOPS: ["python", "sql"],
  DATA_SCIENCE: ["python", "sql"],
  // Free-text topics can't map to a skill test; the custom-topic match bonus
  // takes the skill slot instead (see computeRankedMatches).
  OTHER: [],
};

/**
 * Two OTHER students naming the same free-text topic ("Android" == "android ")
 * get the equivalent of the verified-skill bonus, since no skill test can back
 * a custom topic. Different custom topics still rank (the student sees the
 * candidate's topic on the card and decides), just far lower.
 */
const CUSTOM_TOPIC_MATCH_BONUS = 80;

function normalizeCustomTopic(value?: string | null): string {
  return (value ?? "").trim().toLowerCase().replace(/\s+/g, " ");
}

// Score weights. Skill verification (80 + up to 40 closeness) intentionally
// outweighs the full roadmap block (50 + 30 + 20) so verified candidates rank
// first, per product decision.
const SKILL_VERIFIED_BONUS = 80;
const SKILL_CLOSENESS_MAX = 40;
const ROADMAP_MATCH_BONUS = 50;
const PROGRESS_CLOSENESS_MAX = 30;
const EXPERIENCE_MATCH_BONUS = 20;
const AVAILABILITY_BONUS = 10;
const PAST_PARTNER_PENALTY = 50;
const MAX_MATCH_SCORE =
  SKILL_VERIFIED_BONUS +
  SKILL_CLOSENESS_MAX +
  ROADMAP_MATCH_BONUS +
  PROGRESS_CLOSENESS_MAX +
  EXPERIENCE_MATCH_BONUS +
  AVAILABILITY_BONUS;

/**
 * Seed account shown as a last-resort match when the real candidate pool is
 * empty. The platform is early-stage with very few opted-in students, so a
 * topic with no other candidates would otherwise dead-end new users straight
 * to the expert-session upsell; this guarantees at least one live match.
 */
const FALLBACK_SEED_EMAIL = "mrsachinchaurasiya@gmail.com";

/** Free students can view and pair with this many top matches; the rest are premium-locked. */
const FREE_TIER_VISIBLE_MATCHES = 2;
/** Short TTL: the pool shifts whenever someone opts in or pairs up. */
const MATCH_LIST_TTL_SECONDS = 60;
// Keyed per viewer, so no response is ever shared across users or tiers (the
// viewer's own tier shapes the cached payload).
const matchListCacheKey = (userId: number) => `peer-match:list:${userId}`;

type MatchStrength = "STRONG" | "GOOD" | "FAIR";

// The number shown to students is rescaled into a 52-98 band: a raw "0% match"
// (possible when two students share nothing but the topic) kills confidence in
// the pairing, so even the weakest candidate reads above 50%. Raw scores still
// drive the ranking order and the free-tier gate; only the display changes.
const DISPLAY_PERCENT_MIN = 52;
const DISPLAY_PERCENT_MAX = 98;

function scoreRatio(score: number): number {
  return Math.max(0, Math.min(1, score / MAX_MATCH_SCORE));
}

function toDisplayPercent(score: number): number {
  return Math.round(
    DISPLAY_PERCENT_MIN + scoreRatio(score) * (DISPLAY_PERCENT_MAX - DISPLAY_PERCENT_MIN),
  );
}

function matchStrengthOf(score: number): MatchStrength {
  const ratio = scoreRatio(score);
  if (ratio >= 0.55) return "STRONG";
  if (ratio >= 0.3) return "GOOD";
  return "FAIR";
}

interface RankedCandidate {
  userId: number;
  name: string;
  college: string | null;
  profilePic: string | null;
  availability: string[];
  email: string;
  score: number;
  customTopic: string | null;
  sharedAvailability: string[];
  hasRoadmapMatch: boolean;
  verifiedSkills: { skillName: string; score: number }[];
}

interface RankedMatchesResult {
  optedIn: boolean;
  activePairing: boolean;
  tier: PlanTier;
  topic?: MockInterviewTopic;
  viewer?: {
    userId: number;
    name: string;
    email: string;
    availability: string[];
    experienceLevel: string | null;
    customTopic: string | null;
  };
  ranked: RankedCandidate[];
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

/**
 * Topic-specific preparation block for the pairing emails. DSA pairs get their
 * assigned problem link; every other topic embeds its practice prompt and
 * requirements (from the same prep bank the dashboard shows) so the pair can
 * start preparing straight from the inbox. Prep content is static server-side
 * text, so it is safe to interpolate into HTML.
 */
const INTERVIEW_PREP_LIBRARY_LINK =
  `<p>For more practice, browse the <a href="https://www.internhack.xyz/learn/interview">Interview Preparation</a> section on the Learn page: 300+ curated questions across JS, React, Node, Python, SQL, system design, and behavioral.</p>`;

/**
 * Whether this pairing's status still has a live round ahead of it, where
 * withholding the exact question list from the interviewee still matters.
 * Once a session is over (completed or cancelled), there's nothing left to
 * protect, so both partners get the full material for review.
 */
function isRoundStillLive(status: string): boolean {
  return status === "PENDING_SCHEDULE" || status === "SCHEDULED";
}

/**
 * Topic-specific preparation block for the pairing emails. DSA pairs get their
 * assigned problem link; every other topic embeds its practice prompt and
 * requirements (from the same prep bank the dashboard shows) so the pair can
 * start preparing straight from the inbox. Prep content is static server-side
 * text, so it is safe to interpolate into HTML.
 *
 * `isDesignatedInterviewer` gates the exact question list: studentA interviews
 * first, so only they get the full set pre-session. Handing the same fixed
 * list to both sides would let the interviewee read the answer key before
 * their own round, which is what this split prevents.
 */
function buildPrepEmailSection(
  topic: MockInterviewTopic,
  assignedProblem: { slug: string; title: string } | null,
  isDesignatedInterviewer: boolean,
): string {
  if (assignedProblem) {
    return `<p>Assigned DSA problem: <a href="https://www.internhack.xyz/learn/dsa/problem/${assignedProblem.slug}">${assignedProblem.title}</a></p>
      <p>Attempt it before the session: one of you interviews while the other solves, then swap roles.</p>
      ${INTERVIEW_PREP_LIBRARY_LINK}`;
  }
  if (topic === "OTHER") {
    return `<p>You picked a custom topic, so there is no assigned material: agree on the questions and format together before the session.</p>
      ${INTERVIEW_PREP_LIBRARY_LINK}`;
  }
  const prep = getGenericPrepMaterial(topic);
  if (!prep) return "";
  const topicLabel = topic.replace(/_/g, " ");
  if (!isDesignatedInterviewer) {
    return `<p>You're the candidate for this ${topicLabel} round.</p>
      <p>Your partner is interviewing you first and holds the exact question list, so it stays a real interview instead of a rehearsed script. Study the ${topicLabel} fundamentals broadly, then swap so you interview them next.</p>
      <p>The full question set unlocks on your dashboard once the session is marked complete, for review.</p>
      ${INTERVIEW_PREP_LIBRARY_LINK}`;
  }
  return `<p>Your ${topicLabel} practice prompt:</p>
    <p><strong>${prep.prompt}</strong></p>
    <ul>${prep.requirements.map((r) => `<li>${r}</li>`).join("")}</ul>
    <p>Follow-up questions are on the preparation card in your dashboard. You're interviewing first this round, ask these to your partner, then swap.</p>
    ${INTERVIEW_PREP_LIBRARY_LINK}`;
}

export class PeerMockInterviewService {
  /**
   * Attaches the prep material this viewer should see for a pairing.
   *
   * DSA already has an intentional swap-roles flow (both solve the assigned
   * problem, then take turns interviewing), so both sides see the same
   * problem. For every other topic the prep bank is a small, static, fixed
   * list per topic: showing it to both partners before the round is the
   * equivalent of handing out the exam paper early. So studentA interviews
   * first and is the only one who gets the exact question list pre-session;
   * studentB gets topic-level guidance instead. Once the round is over
   * (completed or cancelled) there's nothing left to protect, so both get the
   * full material back for review.
   */
  private attachPreparationMaterial(pairing: any, viewerUserId: number) {
    if (!pairing) return null;
    let preparationMaterial = null;
    if (pairing.topic === "DSA" && pairing.assignedProblem) {
      preparationMaterial = {
        type: "DSA",
        dsaProblem: pairing.assignedProblem
      };
    } else {
      const genericPrep = getGenericPrepMaterial(pairing.topic as MockInterviewTopic);
      if (genericPrep) {
        const isDesignatedInterviewer = viewerUserId === pairing.studentAId;
        if (!isRoundStillLive(pairing.status) || isDesignatedInterviewer) {
          preparationMaterial = {
            type: pairing.topic,
            generic: genericPrep,
          };
        } else {
          const topicLabel = String(pairing.topic).replace(/_/g, " ");
          preparationMaterial = {
            type: pairing.topic,
            redacted: true,
            generic: { prompt: genericPrep.prompt },
            note: `Your partner is interviewing you first this round and holds the exact ${topicLabel} question list, so it stays a real interview. Study the fundamentals broadly, you'll get the full set to review once the session is marked complete.`,
          };
        }
      }
    }
    return { ...pairing, preparationMaterial };
  }

  private async invalidateMatchCaches(...userIds: number[]) {
    await Promise.all(userIds.map((id) => cacheDel(matchListCacheKey(id))));
  }

  /**
   * Looks up the fallback seed account for when the real candidate pool is
   * empty. Bypasses the topic filter (that's exactly why the pool came up
   * empty) but still excludes the viewer themselves and anyone already paired.
   */
  private async getFallbackCandidate(
    userId: number,
    pairedUserIds: Set<number>,
    viewerAvailability: string[],
  ): Promise<RankedCandidate | null> {
    const seedPref = await prisma.peerMockInterviewPreference.findFirst({
      where: { enabled: true, user: { email: FALLBACK_SEED_EMAIL } },
      include: {
        user: { select: { id: true, name: true, email: true, college: true, profilePic: true } },
      },
    });
    if (!seedPref || seedPref.userId === userId || pairedUserIds.has(seedPref.userId)) {
      return null;
    }

    return {
      userId: seedPref.userId,
      name: seedPref.user.name,
      college: seedPref.user.college,
      profilePic: seedPref.user.profilePic,
      availability: seedPref.availability,
      email: seedPref.user.email,
      score: 0,
      customTopic: seedPref.customTopic ?? null,
      sharedAvailability: viewerAvailability.filter((slot) => seedPref.availability.includes(slot)),
      hasRoadmapMatch: false,
      verifiedSkills: [],
    };
  }

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
  async upsertPreference(
    userId: number,
    topic: MockInterviewTopic,
    availability: string[],
    enabled: boolean,
    prep?: { targetRole?: string; experienceLevel?: string; focusAreas?: string[]; customTopic?: string },
  ) {
    const prepFields = {
      targetRole: prep?.targetRole,
      experienceLevel: prep?.experienceLevel,
      focusAreas: prep?.focusAreas ?? [],
      // Only OTHER carries free text; clear it when switching back to a listed
      // topic so a stale custom topic never influences matching.
      customTopic: topic === "OTHER" ? prep?.customTopic ?? null : null,
    };
    const preference = await prisma.peerMockInterviewPreference.upsert({
      where: { userId },
      update: { topic, availability, enabled, ...prepFields },
      create: { userId, topic, availability, enabled, ...prepFields },
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
          const html = peerMockCancelledEmailHtml({ recipientName: partner.name, cancellerName: canceller.name });
          await emailUtils.sendEmail({ to: partner.email, subject: "Upcoming Mock Interview Cancelled", html });
        } catch (err) {
          console.error("Failed to send cancellation email:", err);
        }
      }
    }
    // Matching is live: the student browses /matches and pairs instantly, so
    // there is no batch job to trigger here. Drop any cached match list since
    // topic/availability changes shift the ranking.
    await this.invalidateMatchCaches(userId);

    return preference;
  }

  /**
   * Retrieves the active SCHEDULED mock interview for a user.
   */
  async getUpcomingPairing(userId: number) {
    const pairing = await prisma.peerMockInterview.findFirst({
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
    return this.attachPreparationMaterial(pairing, userId);
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

    return this.attachPreparationMaterial(pairing, userId);
  }

  /**
   * Retrieves all completed or cancelled mock interviews for a user (history).
   */
  async getHistoryPairings(userId: number) {
    const pairings = await prisma.peerMockInterview.findMany({
      where: {
        OR: [
          { studentAId: userId },
          { studentBId: userId },
        ],
        status: { in: ["COMPLETED", "CANCELLED"] }
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

    return pairings.map(p => this.attachPreparationMaterial(p, userId));
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

    // Send notifications
    try {
      const emailUtils = await import("../../utils/email.utils.js");
      if (pairing.studentA?.email) {
        const html = peerMockCompletedEmailHtml({ recipientName: pairing.studentA.name });
        await emailUtils.sendEmail({ to: pairing.studentA.email, subject: "Mock Interview Completed", html });
      }
      if (pairing.studentB?.email) {
        const html = peerMockCompletedEmailHtml({ recipientName: pairing.studentB.name });
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
        const html = peerMockTimeProposedEmailHtml({
          recipientName: partner.name,
          proposerName: proposer.name,
          whenUtc: formatUtc(proposedTime),
        });
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

    // Prefer an auto-generated Google Meet link over a manually-supplied one.
    // createGoogleMeetEvent returns null (rather than throwing) when the
    // calendar integration isn't configured, so this falls back to whatever
    // link the accepting student pasted in, and to no link at all if neither
    // is available.
    let resolvedMeetingLink = meetingLink;
    const attendeeEmails = [pairing.studentA?.email, pairing.studentB?.email].filter(
      (email): email is string => !!email,
    );
    try {
      const { createGoogleMeetEvent } = await import("../../utils/google-calendar.utils.js");
      const event = await createGoogleMeetEvent({
        summary: `InternHack Mock Interview (${pairing.customTopic || pairing.topic})`,
        description: "Peer mock interview practice session, scheduled via InternHack.",
        startTime: new Date(pairing.proposedTime),
        attendeeEmails,
      });
      if (event) {
        resolvedMeetingLink = event.meetingLink;
      }
    } catch (err) {
      console.error("Failed to create Google Calendar event, falling back to manual link:", err);
    }

    const updated = await prisma.peerMockInterview.update({
      where: { id: pairingId },
      data: {
        scheduledAt: pairing.proposedTime,
        schedulingConfirmed: true,
        status: "SCHEDULED",
        meetingLink: resolvedMeetingLink,
      },
      include: {
        studentA: true,
        studentB: true,
      }
    });

    const emailUtils = await import("../../utils/email.utils.js");
    const topicLabel = pairing.customTopic
      ? escapeHtml(pairing.customTopic)
      : pairing.topic
        ? pairing.topic.replace(/_/g, " ")
        : "practice";
    const prepHtmlForA = buildPrepEmailSection(pairing.topic as MockInterviewTopic, pairing.assignedProblem ?? null, true);
    const prepHtmlForB = buildPrepEmailSection(pairing.topic as MockInterviewTopic, pairing.assignedProblem ?? null, false);
    const whenUtc = formatUtc(pairing.proposedTime);

    // Attached directly to the email so the invite works regardless of
    // whether the Google Calendar integration is configured (createGoogleMeetEvent
    // above only adds the event to the dedicated InternHack calendar, it does
    // not put anything on the students' own calendars).
    const icsContent = generateICS({
      uid: `peer-mock-interview-${pairingId}`,
      title: `InternHack Mock Interview (${topicLabel})`,
      description: `Peer mock interview practice session, scheduled via InternHack.${resolvedMeetingLink ? ` Meeting link: ${resolvedMeetingLink}` : ""}`,
      start: new Date(pairing.proposedTime),
      end: new Date(new Date(pairing.proposedTime).getTime() + 60 * 60 * 1000),
      ...(resolvedMeetingLink ? { location: resolvedMeetingLink } : {}),
    });
    const icsAttachment = {
      filename: "mock-interview.ics",
      content: Buffer.from(icsContent, "utf-8"),
      contentType: "text/calendar; charset=utf-8; method=PUBLISH",
    };

    try {
      if (updated.studentA?.email) {
        const html = peerMockScheduledEmailHtml({
          recipientName: updated.studentA.name,
          partnerName: updated.studentB?.name ?? "your partner",
          topicLabel,
          whenUtc,
          meetingLink: resolvedMeetingLink,
          prepHtml: prepHtmlForA,
        });
        await emailUtils.sendEmail({ to: updated.studentA.email, subject: "Mock Interview Scheduled", html, attachments: [icsAttachment] });
      }
      if (updated.studentB?.email) {
        const html = peerMockScheduledEmailHtml({
          recipientName: updated.studentB.name,
          partnerName: updated.studentA?.name ?? "your partner",
          topicLabel,
          whenUtc,
          meetingLink: resolvedMeetingLink,
          prepHtml: prepHtmlForB,
        });
        await emailUtils.sendEmail({ to: updated.studentB.email, subject: "Mock Interview Scheduled", html, attachments: [icsAttachment] });
      }
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
        const html = peerMockTimeRejectedEmailHtml({ recipientName: proposer.name, rejecterName: rejecter.name });
        await emailUtils.sendEmail({ to: proposer.email, subject: "Mock Interview Time Rejected", html });
      } catch (err) {
        console.error("Failed to send rejection email:", err);
      }
    }

    return updated;
  }

  /**
   * Decline a pairing that has not been scheduled yet. Either participant can
   * decline; both students return to the live matching pool.
   */
  async declinePairing(userId: number, pairingId: number) {
    const pairing = await this.getPairingDetails(userId, pairingId);
    if (pairing.status !== "PENDING_SCHEDULE") {
      throw Object.assign(new Error("Only pairings that are not scheduled yet can be declined"), { status: 400 });
    }

    // Status guard in the where clause so a concurrent accept/decline cannot
    // double-transition the pairing.
    const updateResult = await prisma.peerMockInterview.updateMany({
      where: { id: pairingId, status: "PENDING_SCHEDULE" },
      data: { status: "CANCELLED" },
    });
    if (updateResult.count === 0) {
      throw Object.assign(new Error("Pairing is no longer pending"), { status: 409 });
    }

    const otherId = pairing.studentAId === userId ? pairing.studentBId : pairing.studentAId;
    const decliner = pairing.studentAId === userId ? pairing.studentA : pairing.studentB;
    const other = pairing.studentAId === userId ? pairing.studentB : pairing.studentA;

    if (other?.email && decliner?.name) {
      try {
        const emailUtils = await import("../../utils/email.utils.js");
        const html = peerMockDeclinedEmailHtml({ recipientName: other.name, declinerName: decliner.name });
        await emailUtils.sendEmail({ to: other.email, subject: "Mock Interview Pairing Declined", html });
      } catch (err) {
        console.error("Failed to send decline email:", err);
      }
    }

    await this.invalidateMatchCaches(userId, ...(otherId ? [otherId] : []));

    return { ...pairing, status: "CANCELLED" };
  }

  /**
   * Computes the viewer's ranked candidate list. Shared by the match-list
   * endpoint (display) and selectMatch (authorization: a free user may only
   * pair within their visible top matches).
   */
  private async computeRankedMatches(userId: number): Promise<RankedMatchesResult> {
    const enrollmentSelect = {
      where: { status: "ACTIVE" as const },
      select: {
        roadmapId: true,
        experienceLevel: true,
        roadmap: { select: { topicCount: true } },
        _count: {
          select: {
            topicProgress: { where: { status: "COMPLETED" as const } },
          },
        },
      },
    };

    const viewerPref = await prisma.peerMockInterviewPreference.findUnique({
      where: { userId },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            subscriptionPlan: true,
            subscriptionStatus: true,
            subscriptionEndDate: true,
            roadmapEnrollments: enrollmentSelect,
          },
        },
      },
    });

    if (!viewerPref || !viewerPref.enabled) {
      return { optedIn: false, activePairing: false, tier: "FREE", ranked: [] };
    }

    const tier = getPlanTier(
      viewerPref.user.subscriptionPlan,
      viewerPref.user.subscriptionStatus,
      viewerPref.user.subscriptionEndDate,
    );
    const topic = viewerPref.topic;
    const viewer = {
      userId,
      name: viewerPref.user.name,
      email: viewerPref.user.email,
      availability: viewerPref.availability,
      experienceLevel: viewerPref.user.roadmapEnrollments[0]?.experienceLevel ?? null,
      customTopic: viewerPref.customTopic ?? null,
    };

    // One query covers both "is the viewer already paired" and "which
    // candidates are already paired".
    const activePairings = await prisma.peerMockInterview.findMany({
      where: { status: { in: ["SCHEDULED", "PENDING_SCHEDULE"] } },
      select: { studentAId: true, studentBId: true },
    });
    const pairedUserIds = new Set<number>();
    for (const p of activePairings) {
      if (p.studentAId) pairedUserIds.add(p.studentAId);
      if (p.studentBId) pairedUserIds.add(p.studentBId);
    }
    if (pairedUserIds.has(userId)) {
      return { optedIn: true, activePairing: true, tier, topic, viewer, ranked: [] };
    }

    // Candidate pool: opted-in students on the same topic with an active
    // roadmap enrollment. Deliberately not premium-gated: the feature is open
    // to all students, premium only widens how many matches are unlocked.
    const pool = await prisma.peerMockInterviewPreference.findMany({
      where: {
        enabled: true,
        topic,
        userId: { not: userId },
        user: {
          roadmapEnrollments: { some: { status: "ACTIVE" } },
        },
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            college: true,
            profilePic: true,
            roadmapEnrollments: enrollmentSelect,
          },
        },
      },
    });
    const candidates = pool.filter((p) => !pairedUserIds.has(p.userId));
    if (candidates.length === 0) {
      const fallback = await this.getFallbackCandidate(userId, pairedUserIds, viewerPref.availability);
      return { optedIn: true, activePairing: false, tier, topic, viewer, ranked: fallback ? [fallback] : [] };
    }

    // Verified skills relevant to the topic, for the viewer and all candidates
    // in one batch.
    const relevantSkills = TOPIC_RELEVANT_SKILLS[topic] ?? [];
    const verifiedSkills = relevantSkills.length
      ? await prisma.verifiedSkill.findMany({
          where: {
            skillName: { in: relevantSkills },
            studentId: { in: [userId, ...candidates.map((c) => c.userId)] },
          },
          select: { studentId: true, skillName: true, score: true },
        })
      : [];
    const skillsByStudent = new Map<number, { skillName: string; score: number }[]>();
    for (const vs of verifiedSkills) {
      const list = skillsByStudent.get(vs.studentId) ?? [];
      list.push({ skillName: vs.skillName, score: vs.score });
      skillsByStudent.set(vs.studentId, list);
    }
    const viewerSkills = skillsByStudent.get(userId) ?? [];

    // Past partners of the viewer (completed or cancelled, including declines)
    // are penalised so fresh partners rank first.
    const pastPairings = await prisma.peerMockInterview.findMany({
      where: {
        status: { in: ["COMPLETED", "CANCELLED"] },
        OR: [{ studentAId: userId }, { studentBId: userId }],
      },
      select: { studentAId: true, studentBId: true },
    });
    const pastPartnerIds = new Set<number>();
    for (const p of pastPairings) {
      const partnerId = p.studentAId === userId ? p.studentBId : p.studentAId;
      if (partnerId) pastPartnerIds.add(partnerId);
    }

    const viewerEnrollments = viewerPref.user.roadmapEnrollments;

    const viewerCustomTopic = normalizeCustomTopic(viewerPref.customTopic);

    const ranked: RankedCandidate[] = candidates.map((candidate) => {
      let score = 0;

      // For OTHER, agreeing on the same free-text topic is the strongest
      // signal, standing in for the verified-skill bonus.
      if (
        topic === "OTHER" &&
        viewerCustomTopic &&
        normalizeCustomTopic(candidate.customTopic) === viewerCustomTopic
      ) {
        score += CUSTOM_TOPIC_MATCH_BONUS;
      }

      // First priority: the candidate holds a verified skill relevant to the
      // topic, with a closeness bonus when the viewer verified the same skill.
      const candidateSkills = skillsByStudent.get(candidate.userId) ?? [];
      if (candidateSkills.length > 0) {
        score += SKILL_VERIFIED_BONUS;
        let bestCloseness = 0;
        for (const mine of viewerSkills) {
          const theirs = candidateSkills.find((s) => s.skillName === mine.skillName);
          if (theirs) {
            const closeness = SKILL_CLOSENESS_MAX * (1 - Math.abs(mine.score - theirs.score) / 100);
            bestCloseness = Math.max(bestCloseness, closeness);
          }
        }
        score += bestCloseness;
      }

      // Roadmap compatibility, best across shared roadmaps (as before).
      let bestRoadmapScore = 0;
      for (const mine of viewerEnrollments) {
        for (const theirs of candidate.user.roadmapEnrollments) {
          if (mine.roadmapId !== theirs.roadmapId) continue;
          let roadmapScore = ROADMAP_MATCH_BONUS;

          const myTotal = mine.roadmap.topicCount;
          const myPct = myTotal === 0 ? 0 : Math.round((mine._count.topicProgress / myTotal) * 100);
          const theirTotal = theirs.roadmap.topicCount;
          const theirPct = theirTotal === 0 ? 0 : Math.round((theirs._count.topicProgress / theirTotal) * 100);
          roadmapScore += (1 - Math.abs(myPct - theirPct) / 100) * PROGRESS_CLOSENESS_MAX;

          if (mine.experienceLevel === theirs.experienceLevel) {
            roadmapScore += EXPERIENCE_MATCH_BONUS;
          }
          bestRoadmapScore = Math.max(bestRoadmapScore, roadmapScore);
        }
      }
      score += bestRoadmapScore;

      const sharedAvailability = viewerPref.availability.filter((slot) =>
        candidate.availability.includes(slot),
      );
      if (sharedAvailability.length > 0) {
        score += AVAILABILITY_BONUS;
      }

      if (pastPartnerIds.has(candidate.userId)) {
        score -= PAST_PARTNER_PENALTY;
      }

      return {
        userId: candidate.userId,
        name: candidate.user.name,
        college: candidate.user.college,
        profilePic: candidate.user.profilePic,
        availability: candidate.availability,
        email: candidate.user.email,
        score,
        customTopic: candidate.customTopic ?? null,
        sharedAvailability,
        hasRoadmapMatch: bestRoadmapScore > 0,
        verifiedSkills: candidateSkills,
      };
    });

    // Deterministic order: score desc, then userId for stable ties.
    ranked.sort((a, b) => b.score - a.score || a.userId - b.userId);

    return { optedIn: true, activePairing: false, tier, topic, viewer, ranked };
  }

  /**
   * Live match list for the peer page. Free students get their top matches
   * fully rendered and the rest as locked placeholders; premium unlocks all.
   * Locked entries intentionally carry no identifying data (the blur happens
   * server-side, not just in CSS).
   */
  async getLiveMatches(userId: number) {
    const cacheKey = matchListCacheKey(userId);
    const cached = await cacheGet(cacheKey);
    if (cached) return cached as never;

    const result = await this.computeRankedMatches(userId);
    const { optedIn, activePairing, tier, topic, viewer, ranked } = result;
    const customTopic = viewer?.customTopic ?? null;

    if (!optedIn || activePairing) {
      return { optedIn, activePairing, tier, topic, customTopic, matches: [], lockedMatches: [], totalCandidates: 0 };
    }

    const visibleCount = tier === "PREMIUM" ? ranked.length : FREE_TIER_VISIBLE_MATCHES;
    const response = {
      optedIn: true,
      activePairing: false,
      tier,
      topic,
      customTopic,
      matches: ranked.slice(0, visibleCount).map((c) => ({
        userId: c.userId,
        name: c.name,
        college: c.college,
        profilePic: c.profilePic,
        matchPercent: toDisplayPercent(c.score),
        matchStrength: matchStrengthOf(c.score),
        customTopic: c.customTopic,
        sharedAvailability: c.sharedAvailability,
        hasRoadmapMatch: c.hasRoadmapMatch,
        verifiedSkills: c.verifiedSkills,
      })),
      lockedMatches: ranked.slice(visibleCount).map((c) => ({
        nameInitial: (c.name || "?").charAt(0).toUpperCase(),
        matchStrength: matchStrengthOf(c.score),
      })),
      totalCandidates: ranked.length,
    };

    await cacheSet(cacheKey, response, MATCH_LIST_TTL_SECONDS);
    return response;
  }

  /**
   * Instantly pair the viewer with a candidate from their live match list.
   * Free-tier viewers may only pick from their visible top matches.
   */
  async selectMatch(userId: number, candidateUserId: number) {
    // Recompute fresh (no cache) so the tier gate and availability checks run
    // against current data.
    const { optedIn, activePairing, tier, topic, viewer, ranked } =
      await this.computeRankedMatches(userId);

    if (!optedIn || !viewer || !topic) {
      throw Object.assign(new Error("Enable peer mock interview matching first"), { status: 400 });
    }
    if (activePairing) {
      throw Object.assign(new Error("You already have an active pairing"), { status: 409 });
    }

    const index = ranked.findIndex((c) => c.userId === candidateUserId);
    if (index === -1) {
      throw Object.assign(new Error("This student is no longer available for matching"), { status: 404 });
    }
    if (tier !== "PREMIUM" && index >= FREE_TIER_VISIBLE_MATCHES) {
      throw Object.assign(
        new Error("Upgrade to Premium to pair beyond your top matches"),
        { status: 403 },
      );
    }
    const candidate = ranked[index]!;

    // Assign a DSA problem sized to the viewer's experience level, outside the
    // transaction to keep it short.
    let assignedProblemId: number | null = null;
    if (topic === "DSA") {
      const difficultyMap: Record<string, string> = {
        NEW: "Easy",
        SOME: "Medium",
        EXPERIENCED: "Hard",
      };
      const difficulty = difficultyMap[viewer.experienceLevel ?? "SOME"] || "Medium";
      const problems = await prisma.dsaProblem.findMany({
        where: { difficulty },
        select: { id: true },
        take: 10,
      });
      if (problems.length > 0) {
        assignedProblemId = problems[Math.floor(Math.random() * problems.length)]!.id;
      }
    }

    // The pairing records what the pair actually practices: the shared custom
    // topic when both named the same thing, otherwise both topics combined so
    // neither student's intent is lost.
    let pairingCustomTopic: string | null = null;
    if (topic === "OTHER") {
      const sameTopic =
        normalizeCustomTopic(viewer.customTopic) === normalizeCustomTopic(candidate.customTopic);
      pairingCustomTopic = sameTopic
        ? viewer.customTopic
        : [viewer.customTopic, candidate.customTopic].filter(Boolean).join(" / ") || null;
    }

    // Re-check inside the transaction that neither student got paired in the
    // meantime (two students can select concurrently).
    const match = await prisma.$transaction(async (tx) => {
      const conflict = await tx.peerMockInterview.findFirst({
        where: {
          status: { in: ["SCHEDULED", "PENDING_SCHEDULE"] },
          OR: [
            { studentAId: { in: [userId, candidateUserId] } },
            { studentBId: { in: [userId, candidateUserId] } },
          ],
        },
        select: { id: true },
      });
      if (conflict) {
        throw Object.assign(new Error("One of you was just paired with someone else"), { status: 409 });
      }

      return tx.peerMockInterview.create({
        data: {
          topic,
          customTopic: pairingCustomTopic,
          studentAId: userId,
          studentBId: candidateUserId,
          assignedProblemId,
          status: "PENDING_SCHEDULE",
          sharedAvailability: candidate.sharedAvailability,
          scheduledAt: null,
        },
        include: {
          studentA: { select: { id: true, name: true, email: true } },
          studentB: { select: { id: true, name: true, email: true } },
          assignedProblem: true,
        },
      });
    });

    await this.invalidateMatchCaches(userId, candidateUserId);

    try {
      const emailUtils = await import("../../utils/email.utils.js");
      // The viewer is always studentA (see the create() call above), so they
      // interview first and are the only one who gets the exact question list.
      const prepInfoForViewer = buildPrepEmailSection(topic, match.assignedProblem, true);
      const prepInfoForCandidate = buildPrepEmailSection(topic, match.assignedProblem, false);
      // The custom topic is student-entered free text headed into HTML email.
      const topicLabel = pairingCustomTopic ? escapeHtml(pairingCustomTopic) : topic.replace(/_/g, " ");

      const htmlForViewer = peerMockMatchedEmailHtml({
        recipientName: viewer.name,
        partnerName: candidate.name,
        partnerCollege: candidate.college,
        topicLabel,
        prepHtml: prepInfoForViewer,
      });
      const htmlForCandidate = peerMockMatchedEmailHtml({
        recipientName: candidate.name,
        partnerName: viewer.name,
        topicLabel,
        prepHtml: prepInfoForCandidate,
      });

      await emailUtils.sendEmail({ to: viewer.email, subject: `Peer Mock Interview Match - ${topicLabel}`, html: htmlForViewer });
      await emailUtils.sendEmail({ to: candidate.email, subject: `Peer Mock Interview Match - ${topicLabel}`, html: htmlForCandidate });
    } catch (err) {
      console.error("Failed to send match notifications:", err);
    }

    return this.attachPreparationMaterial(match, userId);
  }
}

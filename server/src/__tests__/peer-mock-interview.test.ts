import { describe, it, expect, vi, beforeEach } from "vitest";
import { PeerMockInterviewService } from "../module/peer-mock-interview/peer-mock-interview.service.js";
import { getGenericPrepMaterial } from "../module/peer-mock-interview/peer-mock-interview.prep.js";
import { prisma } from "../database/db.js";
import { sendEmail } from "../utils/email.utils.js";

vi.mock("../database/db.js", () => {
  const mockPrisma = {
    $transaction: vi.fn(async (cb) => cb(mockPrisma)),
    peerMockInterviewPreference: {
      findUnique: vi.fn(),
      findFirst: vi.fn(),
      upsert: vi.fn(),
      findMany: vi.fn(),
    },
    peerMockInterview: {
      findFirst: vi.fn(),
      findMany: vi.fn(),
      findUnique: vi.fn(),
      create: vi.fn(),
      update: vi.fn(),
      updateMany: vi.fn(),
    },
    dsaProblem: {
      findMany: vi.fn(),
    },
    roadmapEnrollment: {
      findUnique: vi.fn(),
      findMany: vi.fn(),
    },
    verifiedSkill: {
      findMany: vi.fn(),
    },
    $queryRaw: vi.fn().mockResolvedValue([{ locked: true }]),
  };
  return { prisma: mockPrisma };
});

vi.mock("../utils/email.utils.js", () => ({
  sendEmail: vi.fn().mockResolvedValue(undefined),
  sendEmailBatch: vi.fn().mockResolvedValue(undefined),
}));

vi.mock("../utils/cache.js", () => ({
  cacheGet: vi.fn().mockResolvedValue(null),
  cacheSet: vi.fn().mockResolvedValue(undefined),
  cacheDel: vi.fn().mockResolvedValue(undefined),
  cacheDelPattern: vi.fn().mockResolvedValue(undefined),
}));

describe("PeerMockInterviewService", () => {
  let service: PeerMockInterviewService;

  beforeEach(() => {
    vi.clearAllMocks();
    service = new PeerMockInterviewService();
  });

  describe("getPreference", () => {
    it("should fetch peer mock interview preference for user", async () => {
      const mockPref = { id: 1, userId: 1, topic: "DSA", availability: ["WEEKENDS"], enabled: true };
      vi.mocked(prisma.peerMockInterviewPreference.findUnique).mockResolvedValue(mockPref as any);

      const res = await service.getPreference(1);
      expect(prisma.peerMockInterviewPreference.findUnique).toHaveBeenCalledWith({
        where: { userId: 1 },
      });
      expect(res).toEqual(mockPref);
    });
  });

  describe("upsertPreference", () => {
    it("should upsert preferences", async () => {
      const mockPref = { id: 1, userId: 1, topic: "DSA", availability: ["WEEKENDS"], enabled: true };
      vi.mocked(prisma.peerMockInterviewPreference.upsert).mockResolvedValue(mockPref as any);
      vi.mocked(prisma.peerMockInterview.findMany).mockResolvedValue([]);

      const res = await service.upsertPreference(1, "DSA", ["WEEKENDS"], true);
      const prepFields = { targetRole: undefined, experienceLevel: undefined, focusAreas: [], customTopic: null };
      expect(prisma.peerMockInterviewPreference.upsert).toHaveBeenCalledWith({
        where: { userId: 1 },
        update: { topic: "DSA", availability: ["WEEKENDS"], enabled: true, ...prepFields },
        create: { userId: 1, topic: "DSA", availability: ["WEEKENDS"], enabled: true, ...prepFields },
      });
      expect(res).toEqual(mockPref);
    });

    it("should cancel upcoming pairings when disabling preferences", async () => {
      const mockPref = { id: 1, userId: 1, topic: "DSA", availability: ["WEEKENDS"], enabled: false };
      vi.mocked(prisma.peerMockInterviewPreference.upsert).mockResolvedValue(mockPref as any);

      const mockPairing = {
        id: 5,
        studentAId: 1,
        studentBId: 2,
        status: "SCHEDULED",
        studentA: { id: 1, name: "Student A", email: "a@test.com" },
        studentB: { id: 2, name: "Student B", email: "b@test.com" },
      };

      vi.mocked(prisma.peerMockInterview.findMany).mockResolvedValue([mockPairing] as any);
      vi.mocked(prisma.peerMockInterview.updateMany).mockResolvedValue({ count: 1 } as any);

      const res = await service.upsertPreference(1, "DSA", ["WEEKENDS"], false);
      expect(prisma.peerMockInterview.findMany).toHaveBeenCalledWith({
        where: {
          status: { in: ["SCHEDULED", "PENDING_SCHEDULE"] },
          OR: [
            { studentAId: 1 },
            { studentBId: 1 },
          ],
        },
        include: {
          studentA: { select: { id: true, name: true, email: true } },
          studentB: { select: { id: true, name: true, email: true } },
        }
      });
      expect(prisma.peerMockInterview.updateMany).toHaveBeenCalledWith({
        where: { id: 5, status: "SCHEDULED" },
        data: { status: "CANCELLED" },
      });
      expect(res).toEqual(mockPref);
    });

    it("should cancel PENDING_SCHEDULE pairings when disabling preferences", async () => {
      const mockPref = { id: 1, userId: 1, topic: "DSA", availability: ["WEEKENDS"], enabled: false };
      vi.mocked(prisma.peerMockInterviewPreference.upsert).mockResolvedValue(mockPref as any);

      const mockPairing = {
        id: 6,
        studentAId: 1,
        studentBId: 2,
        status: "PENDING_SCHEDULE",
        studentA: { id: 1, name: "Student A", email: "a@test.com" },
        studentB: { id: 2, name: "Student B", email: "b@test.com" },
      };

      vi.mocked(prisma.peerMockInterview.findMany).mockResolvedValue([mockPairing] as any);
      vi.mocked(prisma.peerMockInterview.updateMany).mockResolvedValue({ count: 1 } as any);

      await service.upsertPreference(1, "DSA", ["WEEKENDS"], false);
      expect(prisma.peerMockInterview.updateMany).toHaveBeenCalledWith({
        where: { id: 6, status: "PENDING_SCHEDULE" },
        data: { status: "CANCELLED" },
      });
    });
  });

  describe("getUpcomingPairing", () => {
    it("should return upcoming pairing for user", async () => {
      const mockPairing = { id: 5, studentAId: 1, studentBId: 2, status: "SCHEDULED" };
      vi.mocked(prisma.peerMockInterview.findFirst).mockResolvedValue(mockPairing as any);

      const res = await service.getUpcomingPairing(1);
      expect(prisma.peerMockInterview.findFirst).toHaveBeenCalledWith({
        where: {
          OR: [
            {
              status: { in: ["PENDING_SCHEDULE", "SCHEDULED"] },
              OR: [
                { studentAId: 1 },
                { studentBId: 1 },
              ],
            },
            {
              status: "COMPLETED",
              OR: [
                { studentAId: 1, ratingAForB: null },
                { studentBId: 1, ratingBForA: null },
              ],
            },
          ],
        },
        orderBy: {
          createdAt: "desc",
        },
        include: {
          studentA: expect.any(Object),
          studentB: expect.any(Object),
          assignedProblem: true,
        }
      });
      expect(res).toEqual({ ...mockPairing, preparationMaterial: null });
    });

    it("should give studentA (the round-1 interviewer) the full question list for a live generic-topic pairing", async () => {
      const mockPairing = { id: 5, studentAId: 1, studentBId: 2, status: "PENDING_SCHEDULE", topic: "SYSTEM_DESIGN" };
      vi.mocked(prisma.peerMockInterview.findFirst).mockResolvedValue(mockPairing as any);

      const res: any = await service.getUpcomingPairing(1);
      expect(res.preparationMaterial.redacted).toBeUndefined();
      expect(res.preparationMaterial.generic.requirements.length).toBeGreaterThan(0);
    });

    it("should redact the exact question list for studentB while the round is still live", async () => {
      const mockPairing = { id: 5, studentAId: 1, studentBId: 2, status: "PENDING_SCHEDULE", topic: "SYSTEM_DESIGN" };
      vi.mocked(prisma.peerMockInterview.findFirst).mockResolvedValue(mockPairing as any);

      const res: any = await service.getUpcomingPairing(2);
      expect(res.preparationMaterial.redacted).toBe(true);
      expect(res.preparationMaterial.generic.requirements).toBeUndefined();
      expect(res.preparationMaterial.note).toBeDefined();
    });

    it("should reveal the full question list to both once the pairing is completed", async () => {
      const mockPairing = { id: 5, studentAId: 1, studentBId: 2, status: "COMPLETED", topic: "SYSTEM_DESIGN" };
      vi.mocked(prisma.peerMockInterview.findFirst).mockResolvedValue(mockPairing as any);

      const res: any = await service.getUpcomingPairing(2);
      expect(res.preparationMaterial.redacted).toBeUndefined();
      expect(res.preparationMaterial.generic.requirements.length).toBeGreaterThan(0);
    });
  });

  describe("getHistoryPairings", () => {
    it("should return history pairings for user with generic prep material", async () => {
      const mockPairing1 = { id: 1, studentAId: 1, studentBId: 2, status: "COMPLETED", topic: "SYSTEM_DESIGN" };
      const mockPairing2 = { id: 2, studentAId: 2, studentBId: 1, status: "CANCELLED", topic: "DSA", assignedProblem: { id: 1, title: "Test", slug: "test", difficulty: "EASY" } };
      
      vi.mocked(prisma.peerMockInterview.findMany).mockResolvedValue([mockPairing1, mockPairing2] as any);

      const res = await service.getHistoryPairings(1);
      
      expect(prisma.peerMockInterview.findMany).toHaveBeenCalledWith({
        where: {
          OR: [{ studentAId: 1 }, { studentBId: 1 }],
          status: { in: ["COMPLETED", "CANCELLED"] },
        },
        orderBy: { createdAt: "desc" },
        include: expect.any(Object),
      });

      expect(res.length).toBe(2);
      expect(res[0].preparationMaterial.type).toBe("SYSTEM_DESIGN");
      expect(res[0].preparationMaterial.generic.prompt).toBeDefined();
      
      expect(res[1].preparationMaterial.type).toBe("DSA");
      expect(res[1].preparationMaterial.dsaProblem.title).toBe("Test");
    });
  });

  describe("markCompleted", () => {
    it("should mark scheduled pairing as completed", async () => {
      const mockPairing = {
        id: 5,
        studentAId: 1,
        studentBId: 2,
        status: "SCHEDULED",
        studentA: { id: 1, name: "A", email: "a@test.com" },
        studentB: { id: 2, name: "B", email: "b@test.com" },
      };
      vi.mocked(prisma.peerMockInterview.findUnique).mockResolvedValue(mockPairing as any);
      vi.mocked(prisma.peerMockInterview.update).mockResolvedValue({ ...mockPairing, status: "COMPLETED" } as any);

      const res = await service.markCompleted(1, 5);
      expect(prisma.peerMockInterview.update).toHaveBeenCalledWith({
        where: { id: 5 },
        data: { status: "COMPLETED", completedAt: expect.any(Date) },
      });
      expect(res.status).toEqual("COMPLETED");
    });
  });

  describe("submitRating", () => {
    it("should update rating and feedback for student A", async () => {
      const mockPairing = {
        id: 5,
        studentAId: 1,
        studentBId: 2,
        status: "COMPLETED",
        studentA: { id: 1, name: "A", email: "a@test.com" },
        studentB: { id: 2, name: "B", email: "b@test.com" },
      };
      vi.mocked(prisma.peerMockInterview.findUnique).mockResolvedValue(mockPairing as any);
      vi.mocked(prisma.peerMockInterview.update).mockResolvedValue(mockPairing as any);

      await service.submitRating(1, 5, 5, "Great job!");
      expect(prisma.peerMockInterview.update).toHaveBeenCalledWith({
        where: { id: 5 },
        data: { ratingAForB: 5, feedbackAForB: "Great job!" },
      });
    });
  });

  describe("proposeTime", () => {
    it("should propose a time and notify partner", async () => {
      const futureDate = new Date(Date.now() + 86400000);
      const mockPairing = {
        id: 5,
        studentAId: 1,
        studentBId: 2,
        status: "PENDING_SCHEDULE",
        studentA: { id: 1, name: "A", email: "a@test.com" },
        studentB: { id: 2, name: "B", email: "b@test.com" },
      };
      vi.mocked(prisma.peerMockInterview.findUnique).mockResolvedValue(mockPairing as any);
      vi.mocked(prisma.peerMockInterview.update).mockResolvedValue({ ...mockPairing, proposedTime: futureDate, proposedById: 1 } as any);

      await service.proposeTime(1, 5, futureDate);
      expect(prisma.peerMockInterview.update).toHaveBeenCalledWith(expect.objectContaining({
        where: { id: 5 },
        data: { proposedTime: futureDate, proposedById: 1 }
      }));
    });
  });

  describe("acceptTime", () => {
    it("should accept proposed time and set to SCHEDULED", async () => {
      const futureDate = new Date(Date.now() + 86400000);
      const mockPairing = {
        id: 5,
        studentAId: 1,
        studentBId: 2,
        status: "PENDING_SCHEDULE",
        proposedTime: futureDate,
        proposedById: 1,
        studentA: { id: 1, name: "A", email: "a@test.com" },
        studentB: { id: 2, name: "B", email: "b@test.com" },
      };
      vi.mocked(prisma.peerMockInterview.findUnique).mockResolvedValue(mockPairing as any);
      vi.mocked(prisma.peerMockInterview.update).mockResolvedValue({ ...mockPairing, status: "SCHEDULED", scheduledAt: futureDate } as any);

      await service.acceptTime(2, 5, "https://meet.google.com/test");
      expect(prisma.peerMockInterview.update).toHaveBeenCalledWith(expect.objectContaining({
        where: { id: 5 },
        data: { status: "SCHEDULED", scheduledAt: futureDate, schedulingConfirmed: true, meetingLink: "https://meet.google.com/test" }
      }));
    });

    it("should reject expired proposed time", async () => {
      const pastDate = new Date(Date.now() - 86400000);
      const mockPairing = {
        id: 5,
        studentAId: 1,
        studentBId: 2,
        status: "PENDING_SCHEDULE",
        proposedTime: pastDate,
        proposedById: 1,
        studentA: { id: 1, name: "A", email: "a@test.com" },
        studentB: { id: 2, name: "B", email: "b@test.com" },
      };
      vi.mocked(prisma.peerMockInterview.findUnique).mockResolvedValue(mockPairing as any);
      vi.mocked(prisma.peerMockInterview.update).mockResolvedValue({ ...mockPairing, proposedTime: null, proposedById: null } as any);

      await expect(service.acceptTime(2, 5, "https://meet.google.com/test")).rejects.toThrow("The proposed time has already passed");
      expect(prisma.peerMockInterview.update).toHaveBeenCalledWith(expect.objectContaining({
        where: { id: 5 },
        data: { proposedTime: null, proposedById: null }
      }));
    });
  });

  describe("rejectTime", () => {
    it("should reset proposed time", async () => {
      const futureDate = new Date(Date.now() + 86400000);
      const mockPairing = {
        id: 5,
        studentAId: 1,
        studentBId: 2,
        status: "PENDING_SCHEDULE",
        proposedTime: futureDate,
        proposedById: 1,
        studentA: { id: 1, name: "A", email: "a@test.com" },
        studentB: { id: 2, name: "B", email: "b@test.com" },
      };
      vi.mocked(prisma.peerMockInterview.findUnique).mockResolvedValue(mockPairing as any);
      vi.mocked(prisma.peerMockInterview.update).mockResolvedValue({ ...mockPairing, proposedTime: null, proposedById: null } as any);

      await service.rejectTime(2, 5);
      expect(prisma.peerMockInterview.update).toHaveBeenCalledWith(expect.objectContaining({
        where: { id: 5 },
        data: { proposedTime: null, proposedById: null }
      }));
    });
  });

  const enrollment = {
    roadmapId: 10,
    experienceLevel: "SOME",
    roadmap: { topicCount: 10 },
    _count: { topicProgress: 4 },
  };

  const viewerPref = (tier: "FREE" | "PREMIUM") => ({
    userId: 1,
    topic: "DSA",
    availability: ["WEEKENDS"],
    enabled: true,
    user: {
      id: 1,
      name: "Alice",
      email: "alice@test.com",
      subscriptionPlan: tier === "PREMIUM" ? "MONTHLY" : "NONE",
      subscriptionStatus: tier === "PREMIUM" ? "ACTIVE" : "INACTIVE",
      subscriptionEndDate: null,
      roadmapEnrollments: [enrollment],
    },
  });

  const poolCandidate = (id: number, name: string) => ({
    userId: id,
    topic: "DSA",
    availability: ["WEEKENDS"],
    enabled: true,
    user: {
      id,
      name,
      email: `${name.toLowerCase()}@test.com`,
      college: "Test College",
      profilePic: null,
      roadmapEnrollments: [enrollment],
    },
  });

  describe("getLiveMatches", () => {
    it("should report optedIn false when the user has no enabled preference", async () => {
      vi.mocked(prisma.peerMockInterviewPreference.findUnique).mockResolvedValue(null);

      const res: any = await service.getLiveMatches(1);
      expect(res.optedIn).toBe(false);
      expect(res.matches).toEqual([]);
    });

    it("should rank skill-verified candidates first and lock beyond top 2 for free tier", async () => {
      vi.mocked(prisma.peerMockInterviewPreference.findUnique).mockResolvedValue(viewerPref("FREE") as any);
      vi.mocked(prisma.peerMockInterview.findMany)
        .mockResolvedValueOnce([]) // active pairings
        .mockResolvedValueOnce([]); // past partners
      vi.mocked(prisma.peerMockInterviewPreference.findMany).mockResolvedValue([
        poolCandidate(2, "Bob"),
        poolCandidate(3, "Carol"),
        poolCandidate(4, "Dave"),
      ] as any);
      vi.mocked(prisma.verifiedSkill.findMany).mockResolvedValue([
        { studentId: 3, skillName: "javascript", score: 90 },
      ] as any);

      const res: any = await service.getLiveMatches(1);

      expect(res.tier).toBe("FREE");
      expect(res.totalCandidates).toBe(3);
      // Carol holds a verified DSA-relevant skill, so she outranks Bob/Dave.
      expect(res.matches[0].userId).toBe(3);
      expect(res.matches).toHaveLength(2);
      // Locked entries must carry no identifying data.
      expect(res.lockedMatches).toHaveLength(1);
      expect(res.lockedMatches[0]).toEqual({
        nameInitial: expect.any(String),
        matchStrength: expect.any(String),
      });
    });

    it("should unlock the full list for premium users", async () => {
      vi.mocked(prisma.peerMockInterviewPreference.findUnique).mockResolvedValue(viewerPref("PREMIUM") as any);
      vi.mocked(prisma.peerMockInterview.findMany)
        .mockResolvedValueOnce([])
        .mockResolvedValueOnce([]);
      vi.mocked(prisma.peerMockInterviewPreference.findMany).mockResolvedValue([
        poolCandidate(2, "Bob"),
        poolCandidate(3, "Carol"),
        poolCandidate(4, "Dave"),
      ] as any);
      vi.mocked(prisma.verifiedSkill.findMany).mockResolvedValue([]);

      const res: any = await service.getLiveMatches(1);
      expect(res.tier).toBe("PREMIUM");
      expect(res.matches).toHaveLength(3);
      expect(res.lockedMatches).toHaveLength(0);
    });

    it("should rank same-custom-topic candidates first for OTHER", async () => {
      const otherViewer = { ...viewerPref("PREMIUM"), topic: "OTHER", customTopic: "Android" };
      vi.mocked(prisma.peerMockInterviewPreference.findUnique).mockResolvedValue(otherViewer as any);
      vi.mocked(prisma.peerMockInterview.findMany)
        .mockResolvedValueOnce([])
        .mockResolvedValueOnce([]);
      vi.mocked(prisma.peerMockInterviewPreference.findMany).mockResolvedValue([
        // Different roadmap so only the custom-topic bonus separates them.
        { ...poolCandidate(2, "Bob"), topic: "OTHER", customTopic: "Blockchain" },
        { ...poolCandidate(3, "Carol"), topic: "OTHER", customTopic: "  android " },
      ] as any);
      vi.mocked(prisma.verifiedSkill.findMany).mockResolvedValue([]);

      const res: any = await service.getLiveMatches(1);

      // Carol named the same topic (normalized), so she outranks Bob.
      expect(res.customTopic).toBe("Android");
      expect(res.matches[0].userId).toBe(3);
      expect(res.matches[0].customTopic).toBe("  android ");
      expect(res.matches[1].userId).toBe(2);
    });

    it("should never display a match percent of 50 or below, even with zero compatibility", async () => {
      vi.mocked(prisma.peerMockInterviewPreference.findUnique).mockResolvedValue(viewerPref("PREMIUM") as any);
      vi.mocked(prisma.peerMockInterview.findMany)
        .mockResolvedValueOnce([])
        .mockResolvedValueOnce([]);
      // Different roadmap, no shared availability, no verified skills: raw score 0.
      vi.mocked(prisma.peerMockInterviewPreference.findMany).mockResolvedValue([
        {
          ...poolCandidate(2, "Bob"),
          availability: ["WEEKDAYS_MORNING"],
          user: {
            ...poolCandidate(2, "Bob").user,
            roadmapEnrollments: [{ ...enrollment, roadmapId: 99 }],
          },
        },
      ] as any);
      vi.mocked(prisma.verifiedSkill.findMany).mockResolvedValue([]);

      const res: any = await service.getLiveMatches(1);
      expect(res.matches[0].matchPercent).toBeGreaterThan(50);
      expect(res.matches[0].matchStrength).toBe("FAIR");
    });

    it("should fall back to the seed account when the topic pool is empty", async () => {
      const sdViewer = { ...viewerPref("FREE"), topic: "SYSTEM_DESIGN" };
      vi.mocked(prisma.peerMockInterviewPreference.findUnique).mockResolvedValue(sdViewer as any);
      // Only the active-pairings check runs before the empty-pool fallback kicks
      // in; the past-partners lookup is never reached, so only one queued call.
      vi.mocked(prisma.peerMockInterview.findMany).mockResolvedValueOnce([]); // active pairings
      vi.mocked(prisma.peerMockInterviewPreference.findMany).mockResolvedValue([]); // empty topic pool
      vi.mocked(prisma.peerMockInterviewPreference.findFirst).mockResolvedValue({
        userId: 99,
        customTopic: null,
        availability: ["WEEKENDS"],
        user: { id: 99, name: "Seed Student", email: "mrsachinchaurasiya@gmail.com", college: "Test College", profilePic: null },
      } as any);

      const res: any = await service.getLiveMatches(1);

      expect(prisma.peerMockInterviewPreference.findFirst).toHaveBeenCalledWith({
        where: { enabled: true, user: { email: "mrsachinchaurasiya@gmail.com" } },
        include: { user: expect.any(Object) },
      });
      expect(res.totalCandidates).toBe(1);
      expect(res.matches).toHaveLength(1);
      expect(res.matches[0].userId).toBe(99);
      expect(res.matches[0].name).toBe("Seed Student");
    });

    it("should not fall back to the seed account itself, or one already paired", async () => {
      vi.mocked(prisma.peerMockInterviewPreference.findUnique).mockResolvedValue(viewerPref("FREE") as any);
      vi.mocked(prisma.peerMockInterview.findMany).mockResolvedValueOnce([]);
      vi.mocked(prisma.peerMockInterviewPreference.findMany).mockResolvedValue([]);
      // Seed account resolves to the viewer's own userId (e.g. the viewer IS the seed account).
      vi.mocked(prisma.peerMockInterviewPreference.findFirst).mockResolvedValue({
        userId: 1,
        customTopic: null,
        availability: [],
        user: { id: 1, name: "Alice", email: "mrsachinchaurasiya@gmail.com", college: null, profilePic: null },
      } as any);

      const res: any = await service.getLiveMatches(1);
      expect(res.matches).toEqual([]);
      expect(res.totalCandidates).toBe(0);
    });

    it("should report an active pairing instead of matches", async () => {
      vi.mocked(prisma.peerMockInterviewPreference.findUnique).mockResolvedValue(viewerPref("PREMIUM") as any);
      vi.mocked(prisma.peerMockInterview.findMany).mockResolvedValueOnce([
        { studentAId: 1, studentBId: 7 },
      ] as any);

      const res: any = await service.getLiveMatches(1);
      expect(res.activePairing).toBe(true);
      expect(res.matches).toEqual([]);
    });
  });

  describe("selectMatch", () => {
    it("should instantly create a pairing with the selected candidate", async () => {
      vi.mocked(prisma.peerMockInterviewPreference.findUnique).mockResolvedValue(viewerPref("PREMIUM") as any);
      vi.mocked(prisma.peerMockInterview.findMany)
        .mockResolvedValueOnce([])
        .mockResolvedValueOnce([]);
      vi.mocked(prisma.peerMockInterviewPreference.findMany).mockResolvedValue([
        poolCandidate(2, "Bob"),
      ] as any);
      vi.mocked(prisma.verifiedSkill.findMany).mockResolvedValue([]);
      vi.mocked(prisma.dsaProblem.findMany).mockResolvedValue([{ id: 101 }] as any);
      vi.mocked(prisma.peerMockInterview.findFirst).mockResolvedValue(null); // conflict re-check in tx
      vi.mocked(prisma.peerMockInterview.create).mockResolvedValue({
        id: 99,
        topic: "DSA",
        studentA: { id: 1, name: "Alice", email: "alice@test.com" },
        studentB: { id: 2, name: "Bob", email: "bob@test.com" },
        assignedProblem: { id: 101, title: "Two Sum", slug: "two-sum", difficulty: "Medium" },
      } as any);

      const res: any = await service.selectMatch(1, 2);

      expect(prisma.peerMockInterview.create).toHaveBeenCalledWith({
        data: {
          topic: "DSA",
          customTopic: null,
          studentAId: 1,
          studentBId: 2,
          assignedProblemId: 101,
          status: "PENDING_SCHEDULE",
          sharedAvailability: ["WEEKENDS"],
          scheduledAt: null,
        },
        include: {
          studentA: { select: { id: true, name: true, email: true } },
          studentB: { select: { id: true, name: true, email: true } },
          assignedProblem: true,
        },
      });
      expect(res.id).toBe(99);
      expect(res.preparationMaterial.type).toBe("DSA");
    });

    it("should block free users from pairing beyond their top matches", async () => {
      vi.mocked(prisma.peerMockInterviewPreference.findUnique).mockResolvedValue(viewerPref("FREE") as any);
      vi.mocked(prisma.peerMockInterview.findMany)
        .mockResolvedValueOnce([])
        .mockResolvedValueOnce([]);
      vi.mocked(prisma.peerMockInterviewPreference.findMany).mockResolvedValue([
        poolCandidate(2, "Bob"),
        poolCandidate(3, "Carol"),
        poolCandidate(4, "Dave"),
      ] as any);
      // Bob and Carol hold verified skills so Dave ranks third (locked).
      vi.mocked(prisma.verifiedSkill.findMany).mockResolvedValue([
        { studentId: 2, skillName: "javascript", score: 80 },
        { studentId: 3, skillName: "python", score: 85 },
      ] as any);

      await expect(service.selectMatch(1, 4)).rejects.toThrow("Upgrade to Premium");
      expect(prisma.peerMockInterview.create).not.toHaveBeenCalled();
    });

    it("should give the round-1 interviewer the full practice prompt and redact it for the interviewee in the pairing emails", async () => {
      const sdViewer = { ...viewerPref("PREMIUM"), topic: "SYSTEM_DESIGN" };
      vi.mocked(prisma.peerMockInterviewPreference.findUnique).mockResolvedValue(sdViewer as any);
      vi.mocked(prisma.peerMockInterview.findMany)
        .mockResolvedValueOnce([])
        .mockResolvedValueOnce([]);
      vi.mocked(prisma.peerMockInterviewPreference.findMany).mockResolvedValue([
        { ...poolCandidate(2, "Bob"), topic: "SYSTEM_DESIGN" },
      ] as any);
      vi.mocked(prisma.verifiedSkill.findMany).mockResolvedValue([]);
      vi.mocked(prisma.peerMockInterview.findFirst).mockResolvedValue(null);
      vi.mocked(prisma.peerMockInterview.create).mockResolvedValue({
        id: 100,
        topic: "SYSTEM_DESIGN",
        assignedProblem: null,
        studentA: { id: 1, name: "Alice", email: "alice@test.com" },
        studentB: { id: 2, name: "Bob", email: "bob@test.com" },
      } as any);

      // userId 1 (Alice) initiates the pairing, so she is studentA / the
      // round-1 interviewer; Bob (studentB) is the round-1 candidate.
      await service.selectMatch(1, 2);

      // No DSA problem lookup for a non-DSA topic.
      expect(prisma.dsaProblem.findMany).not.toHaveBeenCalled();
      const prep = getGenericPrepMaterial("SYSTEM_DESIGN")!;
      const calls = vi.mocked(sendEmail).mock.calls;
      expect(calls).toHaveLength(2);

      const viewerEmail = calls.find(([args]) => (args as any).to === "alice@test.com")![0] as any;
      const candidateEmail = calls.find(([args]) => (args as any).to === "bob@test.com")![0] as any;

      expect(viewerEmail.subject).toContain("SYSTEM DESIGN");
      expect(viewerEmail.html).toContain(prep.prompt);
      expect(viewerEmail.html).toContain(prep.requirements[0]);

      // Bob is interviewed first, so his email must not leak the exact
      // question list, that would defeat the point of a mock interview.
      expect(candidateEmail.subject).toContain("SYSTEM DESIGN");
      expect(candidateEmail.html).not.toContain(prep.requirements[0]);
      expect(candidateEmail.html).toContain("interviewing you first");
    });

    it("should record the shared custom topic on an OTHER pairing and use it in emails", async () => {
      const otherViewer = { ...viewerPref("PREMIUM"), topic: "OTHER", customTopic: "Android" };
      vi.mocked(prisma.peerMockInterviewPreference.findUnique).mockResolvedValue(otherViewer as any);
      vi.mocked(prisma.peerMockInterview.findMany)
        .mockResolvedValueOnce([])
        .mockResolvedValueOnce([]);
      vi.mocked(prisma.peerMockInterviewPreference.findMany).mockResolvedValue([
        { ...poolCandidate(2, "Bob"), topic: "OTHER", customTopic: "android" },
      ] as any);
      vi.mocked(prisma.verifiedSkill.findMany).mockResolvedValue([]);
      vi.mocked(prisma.peerMockInterview.findFirst).mockResolvedValue(null);
      vi.mocked(prisma.peerMockInterview.create).mockResolvedValue({
        id: 101,
        topic: "OTHER",
        customTopic: "Android",
        assignedProblem: null,
        studentA: { id: 1, name: "Alice", email: "alice@test.com" },
        studentB: { id: 2, name: "Bob", email: "bob@test.com" },
      } as any);

      await service.selectMatch(1, 2);

      expect(prisma.peerMockInterview.create).toHaveBeenCalledWith(
        expect.objectContaining({
          data: expect.objectContaining({ topic: "OTHER", customTopic: "Android" }),
        }),
      );
      const calls = vi.mocked(sendEmail).mock.calls;
      expect(calls).toHaveLength(2);
      for (const [args] of calls) {
        expect((args as any).subject).toContain("Android");
        expect((args as any).html).toContain("custom topic");
      }
    });

    it("should reject a candidate who is no longer in the pool", async () => {
      vi.mocked(prisma.peerMockInterviewPreference.findUnique).mockResolvedValue(viewerPref("PREMIUM") as any);
      vi.mocked(prisma.peerMockInterview.findMany)
        .mockResolvedValueOnce([])
        .mockResolvedValueOnce([]);
      vi.mocked(prisma.peerMockInterviewPreference.findMany).mockResolvedValue([] as any);
      vi.mocked(prisma.verifiedSkill.findMany).mockResolvedValue([]);

      await expect(service.selectMatch(1, 42)).rejects.toThrow("no longer available");
    });
  });

  describe("declinePairing", () => {
    it("should cancel a pending pairing and notify the partner", async () => {
      const mockPairing = {
        id: 5,
        studentAId: 1,
        studentBId: 2,
        status: "PENDING_SCHEDULE",
        topic: "DSA",
        studentA: { id: 1, name: "A", email: "a@test.com" },
        studentB: { id: 2, name: "B", email: "b@test.com" },
      };
      vi.mocked(prisma.peerMockInterview.findUnique).mockResolvedValue(mockPairing as any);
      vi.mocked(prisma.peerMockInterview.updateMany).mockResolvedValue({ count: 1 } as any);

      const res: any = await service.declinePairing(1, 5);
      expect(prisma.peerMockInterview.updateMany).toHaveBeenCalledWith({
        where: { id: 5, status: "PENDING_SCHEDULE" },
        data: { status: "CANCELLED" },
      });
      expect(res.status).toBe("CANCELLED");
    });

    it("should refuse to decline a scheduled pairing", async () => {
      const mockPairing = {
        id: 5,
        studentAId: 1,
        studentBId: 2,
        status: "SCHEDULED",
        topic: "DSA",
        studentA: { id: 1, name: "A", email: "a@test.com" },
        studentB: { id: 2, name: "B", email: "b@test.com" },
      };
      vi.mocked(prisma.peerMockInterview.findUnique).mockResolvedValue(mockPairing as any);

      await expect(service.declinePairing(1, 5)).rejects.toThrow("can be declined");
      expect(prisma.peerMockInterview.updateMany).not.toHaveBeenCalled();
    });
  });

  describe("getGenericPrepMaterial", () => {
    it("should provide prep material for every topic except DSA", () => {
      // DSA gets a concrete assigned problem instead of generic prep.
      const genericTopics = [
        "SYSTEM_DESIGN",
        "FRONTEND",
        "BACKEND",
        "BEHAVIORAL",
        "DEVOPS",
        "DATA_SCIENCE",
      ] as const;
      for (const topic of genericTopics) {
        const prep = getGenericPrepMaterial(topic);
        expect(prep, `missing prep material for ${topic}`).not.toBeNull();
        expect(prep!.prompt.length).toBeGreaterThan(0);
        expect(prep!.requirements.length).toBeGreaterThan(0);
        expect(prep!.followUpQuestions.length).toBeGreaterThan(0);
      }
      expect(getGenericPrepMaterial("DSA")).toBeNull();
    });
  });
});

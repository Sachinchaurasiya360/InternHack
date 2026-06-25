import { describe, it, expect, vi, beforeEach } from "vitest";
import { PeerMockInterviewService } from "../module/peer-mock-interview/peer-mock-interview.service.js";
import { prisma } from "../database/db.js";

vi.mock("../database/db.js", () => {
  const mockPrisma = {
    $transaction: vi.fn(async (cb) => cb(mockPrisma)),
    peerMockInterviewPreference: {
      findUnique: vi.fn(),
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
  };
  return { prisma: mockPrisma };
});

vi.mock("../utils/email.utils.js", () => ({
  sendEmail: vi.fn().mockResolvedValue(undefined),
  sendEmailBatch: vi.fn().mockResolvedValue(undefined),
}));

vi.mock("../module/badge/badge.service.js", () => {
  return {
    BadgeService: class {
      checkAndAwardBadges = vi.fn().mockResolvedValue([]);
    },
  };
});

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
      expect(prisma.peerMockInterviewPreference.upsert).toHaveBeenCalledWith({
        where: { userId: 1 },
        update: { topic: "DSA", availability: ["WEEKENDS"], enabled: true },
        create: { userId: 1, topic: "DSA", availability: ["WEEKENDS"], enabled: true },
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
      expect(res).toEqual(mockPairing);
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

  describe("runMatchingJob", () => {
    it("should match eligible users in the pool", async () => {
      const mockPrefs = [
        {
          userId: 1,
          topic: "DSA",
          availability: ["WEEKENDS"],
          user: {
            id: 1,
            name: "Alice",
            email: "alice@test.com",
            college: "Harvard",
            roadmapEnrollments: [
              {
                roadmapId: 10,
                experienceLevel: "BEGINNER",
                roadmap: { topicCount: 10 },
                _count: { topicProgress: 4 },
              }
            ]
          }
        },
        {
          userId: 2,
          topic: "DSA",
          availability: ["WEEKENDS"],
          user: {
            id: 2,
            name: "Bob",
            email: "bob@test.com",
            college: "Harvard",
            roadmapEnrollments: [
              {
                roadmapId: 10,
                experienceLevel: "BEGINNER",
                roadmap: { topicCount: 10 },
                _count: { topicProgress: 4 },
              }
            ]
          }
        }
      ];

      vi.mocked(prisma.peerMockInterviewPreference.findMany).mockResolvedValue(mockPrefs as any);
      vi.mocked(prisma.peerMockInterview.findMany).mockResolvedValue([]);
      vi.mocked(prisma.dsaProblem.findMany).mockResolvedValue([{ id: 101, title: "Two Sum" }] as any);
      vi.mocked(prisma.peerMockInterview.create).mockResolvedValue({ id: 99 } as any);

      const res = await service.runMatchingJob();
      expect(prisma.peerMockInterview.create).toHaveBeenCalledWith({
        data: {
          topic: "DSA",
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
        }
      });
      expect(res.length).toEqual(1);
    });
  });
});

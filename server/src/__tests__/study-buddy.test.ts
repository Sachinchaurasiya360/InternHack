import { describe, it, expect, vi, beforeEach } from "vitest";
import { StudyBuddyService } from "../module/roadmap/study-buddy.service.js";
import { prisma } from "../database/db.js";

// Mock the prisma dependency
vi.mock("../database/db.js", () => {
  const mockPrisma = {
    $transaction: vi.fn(async (cb) => cb(mockPrisma)),
    roadmapStudyBuddyPreference: {
      findUnique: vi.fn(),
      upsert: vi.fn(),
    },
    roadmapStudyBuddyPair: {
      findFirst: vi.fn(),
      findMany: vi.fn(),
      create: vi.fn(),
      update: vi.fn(),
    },
    roadmapEnrollment: {
      findUnique: vi.fn(),
      findMany: vi.fn(),
    },
    user: {
      findUnique: vi.fn(),
    },
  };
  return { prisma: mockPrisma };
});

describe("StudyBuddyService", () => {
  let service: StudyBuddyService;

  beforeEach(() => {
    vi.clearAllMocks();
    service = new StudyBuddyService();
  });

  describe("getPreference", () => {
    it("should fetch unique study buddy preference for user", async () => {
      const mockPref = { id: 1, userId: 1, roadmapId: 10, enabled: true, preferSameCollege: false };
      vi.mocked(prisma.roadmapStudyBuddyPreference.findUnique).mockResolvedValue(mockPref as any);

      const res = await service.getPreference(1, 10);
      expect(prisma.roadmapStudyBuddyPreference.findUnique).toHaveBeenCalledWith({
        where: { userId_roadmapId: { userId: 1, roadmapId: 10 } },
      });
      expect(res).toEqual(mockPref);
    });
  });

  describe("upsertPreference", () => {
    it("should upsert preference record", async () => {
      const mockPref = { id: 1, userId: 1, roadmapId: 10, enabled: true, preferSameCollege: true };
      vi.mocked(prisma.roadmapStudyBuddyPreference.upsert).mockResolvedValue(mockPref as any);

      const res = await service.upsertPreference(1, 10, true, true);
      expect(prisma.roadmapStudyBuddyPreference.upsert).toHaveBeenCalledWith({
        where: { userId_roadmapId: { userId: 1, roadmapId: 10 } },
        update: { preferSameCollege: true, enabled: true },
        create: { userId: 1, roadmapId: 10, preferSameCollege: true, enabled: true },
      });
      expect(res).toEqual(mockPref);
    });
  });

  describe("getActiveBuddyDetails", () => {
    it("should return null if no active pairing exists", async () => {
      vi.mocked(prisma.roadmapStudyBuddyPair.findFirst).mockResolvedValue(null);
      const res = await service.getActiveBuddyDetails(1, 10);
      expect(res).toBeNull();
    });

    it("should fetch and compile details for the active buddy (user is studentA)", async () => {
      const mockPair = {
        id: 5,
        roadmapId: 10,
        studentAId: 1,
        studentBId: 2,
        matchedAt: new Date(),
        active: true,
      };

      const mockBuddyUser = {
        id: 2,
        name: "Buddy User",
        profilePic: "pic.jpg",
        college: "Stanford University",
        roadmapEnrollments: [
          {
            experienceLevel: "BEGINNER",
            currentStreak: 5,
            roadmap: { topicCount: 10 },
            topicProgress: [
              { id: 1 },
              { id: 2 },
            ],
          },
        ],
      };

      vi.mocked(prisma.roadmapStudyBuddyPair.findFirst).mockResolvedValue(mockPair as any);
      vi.mocked(prisma.user.findUnique).mockResolvedValue(mockBuddyUser as any);

      const res = await service.getActiveBuddyDetails(1, 10);
      expect(res).toEqual({
        id: 2,
        name: "Buddy User",
        profilePic: "pic.jpg",
        college: "Stanford University",
        experienceLevel: "BEGINNER",
        percentComplete: 20, // 2 completed out of 10 total topics = 20%
        completedTopics: 2,
        currentStreak: 5,
        matchedAt: mockPair.matchedAt,
      });
    });

    it("should fetch and compile details for the active buddy (user is studentB)", async () => {
      const mockPair = {
        id: 5,
        roadmapId: 10,
        studentAId: 3,
        studentBId: 1,
        matchedAt: new Date(),
        active: true,
      };

      const mockBuddyUser = {
        id: 3,
        name: "Other Buddy",
        profilePic: null,
        college: null,
        roadmapEnrollments: [
          {
            experienceLevel: "ADVANCED",
            currentStreak: 0,
            roadmap: { topicCount: 5 },
            topicProgress: [
              { id: 1 },
              { id: 2 },
              { id: 3 },
            ],
          },
        ],
      };

      vi.mocked(prisma.roadmapStudyBuddyPair.findFirst).mockResolvedValue(mockPair as any);
      vi.mocked(prisma.user.findUnique).mockResolvedValue(mockBuddyUser as any);

      const res = await service.getActiveBuddyDetails(1, 10);
      expect(res).toEqual({
        id: 3,
        name: "Other Buddy",
        profilePic: null,
        college: null,
        experienceLevel: "ADVANCED",
        percentComplete: 60, // 3 completed out of 5 total topics = 60%
        completedTopics: 3,
        currentStreak: 0,
        matchedAt: mockPair.matchedAt,
      });
    });
  });

  describe("optIn", () => {
    it("should throw a 400 error if user is not enrolled in the roadmap", async () => {
      vi.mocked(prisma.roadmapEnrollment.findUnique).mockResolvedValue(null);

      await expect(service.optIn(1, 10, false)).rejects.toThrow(
        "You must be enrolled in the roadmap to opt in to Study Buddy"
      );
    });

    it("should upsert preferences and trigger search if enrolled", async () => {
      const mockEnrollment = { id: 100, userId: 1, roadmapId: 10 };
      const mockPref = { id: 1, userId: 1, roadmapId: 10, enabled: true };
      const mockPair = { id: 5, active: true };

      vi.mocked(prisma.roadmapEnrollment.findUnique).mockResolvedValue(mockEnrollment as any);
      vi.mocked(prisma.roadmapStudyBuddyPreference.upsert).mockResolvedValue(mockPref as any);

      // Spy on findAndCreateMatch
      const findSpy = vi.spyOn(service, "findAndCreateMatch").mockResolvedValue(mockPair as any);

      const res = await service.optIn(1, 10, true);

      expect(prisma.roadmapEnrollment.findUnique).toHaveBeenCalledWith({
        where: { userId_roadmapId: { userId: 1, roadmapId: 10 } },
      });
      expect(prisma.roadmapStudyBuddyPreference.upsert).toHaveBeenCalledWith({
        where: { userId_roadmapId: { userId: 1, roadmapId: 10 } },
        update: { preferSameCollege: true, enabled: true },
        create: { userId: 1, roadmapId: 10, preferSameCollege: true, enabled: true },
      });
      expect(findSpy).toHaveBeenCalledWith(1, 10);
      expect(res).toEqual(mockPair);
    });
  });

  describe("optOut", () => {
    it("should disable preferences, deactivate active pairing, and trigger rematch for buddy", async () => {
      const mockPref = { id: 1, userId: 1, roadmapId: 10, enabled: false };
      const mockActivePair = { id: 5, studentAId: 1, studentBId: 2, active: true };

      vi.mocked(prisma.roadmapStudyBuddyPreference.upsert).mockResolvedValue(mockPref as any);
      vi.mocked(prisma.roadmapStudyBuddyPair.findFirst).mockResolvedValue(mockActivePair as any);
      vi.mocked(prisma.roadmapStudyBuddyPair.update).mockResolvedValue({ ...mockActivePair, active: false } as any);

      const findSpy = vi.spyOn(service, "findAndCreateMatch").mockResolvedValue(null);

      await service.optOut(1, 10);

      expect(prisma.roadmapStudyBuddyPreference.upsert).toHaveBeenCalledWith({
        where: { userId_roadmapId: { userId: 1, roadmapId: 10 } },
        update: { preferSameCollege: false, enabled: false },
        create: { userId: 1, roadmapId: 10, preferSameCollege: false, enabled: false },
      });
      expect(prisma.roadmapStudyBuddyPair.update).toHaveBeenCalledWith({
        where: { id: 5 },
        data: { active: false },
      });
      expect(findSpy).toHaveBeenCalledWith(2, 10);
    });
  });

  describe("rematch", () => {
    it("should throw 404 if enrollment does not exist", async () => {
      vi.mocked(prisma.roadmapEnrollment.findUnique).mockResolvedValue(null);

      await expect(service.rematch(1, 10)).rejects.toThrow("Enrollment not found");
    });

    it("should deactivate current pair, trigger findAndCreateMatch for user and buddy", async () => {
      const mockEnrollment = { id: 100, userId: 1, roadmapId: 10 };
      const mockActivePair = { id: 5, studentAId: 1, studentBId: 2, active: true };

      vi.mocked(prisma.roadmapEnrollment.findUnique).mockResolvedValue(mockEnrollment as any);
      vi.mocked(prisma.roadmapStudyBuddyPair.findFirst).mockResolvedValue(mockActivePair as any);
      vi.mocked(prisma.roadmapStudyBuddyPair.update).mockResolvedValue({ ...mockActivePair, active: false } as any);

      const findSpy = vi.spyOn(service, "findAndCreateMatch").mockResolvedValue({ id: 9 } as any);

      const res = await service.rematch(1, 10);

      // Verify pair was deactivated
      expect(prisma.roadmapStudyBuddyPair.update).toHaveBeenCalledWith({
        where: { id: 5 },
        data: { active: false },
      });
      // Verify findAndCreateMatch was called for both student A and B
      expect(findSpy).toHaveBeenCalledWith(1, 10);
      expect(findSpy).toHaveBeenCalledWith(2, 10);
      expect(res).toEqual({ id: 9 });
    });
  });

  describe("findAndCreateMatch", () => {
    it("should return existing active pairing if user is already paired", async () => {
      const mockActivePair = { id: 5, studentAId: 1, studentBId: 2, active: true };
      vi.mocked(prisma.roadmapStudyBuddyPair.findFirst).mockResolvedValue(mockActivePair as any);

      const res = await service.findAndCreateMatch(1, 10);
      expect(res).toEqual(mockActivePair);
    });

    it("should match candidates based on scoring algorithm and create pairing", async () => {
      // User has no active pair
      vi.mocked(prisma.roadmapStudyBuddyPair.findFirst).mockResolvedValue(null);
      vi.mocked(prisma.roadmapStudyBuddyPair.findFirst)
        .mockResolvedValueOnce(null) // for user's existing active pair check
        .mockResolvedValueOnce(null); // for user's last deactivated pair check (lastPair)

      // User's own enrollment, with 4 completed topics out of 10
      const mockUserEnrollment = {
        userId: 1,
        roadmapId: 10,
        experienceLevel: "BEGINNER",
        roadmap: { topicCount: 10 },
        _count: {
          topicProgress: 4,
        },
        user: { college: "Harvard" },
      };
      vi.mocked(prisma.roadmapEnrollment.findUnique).mockResolvedValue(mockUserEnrollment as any);

      // User's preferences
      const mockPref = { enabled: true, preferSameCollege: true };
      vi.mocked(prisma.roadmapStudyBuddyPreference.findUnique).mockResolvedValue(mockPref as any);

      // Candidates
      const mockCandidates = [
        {
          userId: 2,
          experienceLevel: "BEGINNER",
          roadmap: { topicCount: 10 },
          _count: {
            topicProgress: 4,
          }, // 4 completed (perfect progress match)
          user: {
            id: 2,
            name: "Perfect Match College",
            college: "Harvard",
            studyBuddyPreferences: [{ preferSameCollege: true }],
          },
        },
        {
          userId: 3,
          experienceLevel: "ADVANCED",
          roadmap: { topicCount: 10 },
          _count: {
            topicProgress: 1,
          }, // 1 completed
          user: {
            id: 3,
            name: "Weak Match",
            college: "Yale",
            studyBuddyPreferences: [{ preferSameCollege: false }],
          },
        },
      ];
      vi.mocked(prisma.roadmapEnrollment.findMany).mockResolvedValue(mockCandidates as any);

      const mockCreatedPair = { id: 77, studentAId: 1, studentBId: 2, active: true };
      vi.mocked(prisma.roadmapStudyBuddyPair.create).mockResolvedValue(mockCreatedPair as any);

      const res = await service.findAndCreateMatch(1, 10);

      expect(prisma.roadmapEnrollment.findMany).toHaveBeenCalledWith(
        expect.objectContaining({
          take: 50,
          where: expect.objectContaining({
            roadmapId: 10,
            user: expect.objectContaining({
              studentAPairs: {
                none: {
                  roadmapId: 10,
                  active: true,
                },
              },
              studentBPairs: {
                none: {
                  roadmapId: 10,
                  active: true,
                },
              },
            }),
          }),
        }),
      );

      expect(prisma.roadmapStudyBuddyPair.create).toHaveBeenCalledWith({
        data: {
          roadmapId: 10,
          studentAId: 1,
          studentBId: 2,
          active: true,
        },
      });
      expect(res).toEqual(mockCreatedPair);
    });

    it("should handle concurrent match creation race (P2002) and return existing pair", async () => {
      vi.mocked(prisma.roadmapStudyBuddyPair.findFirst)
        .mockResolvedValueOnce(null) // existing pair check
        .mockResolvedValueOnce(null) // lastPair
        .mockResolvedValueOnce(null) // tx userActivePair
        .mockResolvedValueOnce(null) // candidate availability
        .mockResolvedValueOnce({
          id: 99,
          roadmapId: 10,
          studentAId: 1,
          studentBId: 2,
          active: true,
        } as any); // concurrent pair lookup

      vi.mocked(prisma.roadmapEnrollment.findUnique).mockResolvedValue({
        experienceLevel: "BEGINNER",
        roadmap: { topicCount: 10 },
        user: { college: "Harvard" },
        _count: { topicProgress: 4 },
      } as any);

      vi.mocked(prisma.roadmapStudyBuddyPreference.findUnique).mockResolvedValue({
        enabled: true,
        preferSameCollege: false,
      } as any);

      vi.mocked(prisma.roadmapEnrollment.findMany).mockResolvedValue([
        {
          userId: 2,
          experienceLevel: "BEGINNER",
          _count: { topicProgress: 4 },
          user: {
            college: "Harvard",
            studyBuddyPreferences: [{}],
          },
        },
      ] as any);

      vi.mocked(prisma.roadmapStudyBuddyPair.create).mockRejectedValue({
        code: "P2002",
      });

      const result = await service.findAndCreateMatch(1, 10);

      expect(result).toEqual({
        id: 99,
        roadmapId: 10,
        studentAId: 1,
        studentBId: 2,
        active: true,
      });
    });
    it("should avoid rematching the most recent buddy when other candidates exist", async () => {
      vi.mocked(prisma.roadmapStudyBuddyPair.findFirst)
        .mockResolvedValueOnce(null) // existing pair check
        .mockResolvedValueOnce({
          studentAId: 1,
          studentBId: 2,
        } as any) // lastPair -> buddy 2
        .mockResolvedValueOnce(null) // tx userActivePair
        .mockResolvedValueOnce(null); // candidate availability

      vi.mocked(prisma.roadmapEnrollment.findUnique).mockResolvedValue({
        experienceLevel: "BEGINNER",
        roadmap: { topicCount: 10 },
        user: { college: "Harvard" },
        _count: { topicProgress: 4 },
      } as any);

      vi.mocked(prisma.roadmapStudyBuddyPreference.findUnique).mockResolvedValue({
        enabled: true,
        preferSameCollege: false,
      } as any);

      vi.mocked(prisma.roadmapEnrollment.findMany).mockResolvedValue([
        {
          userId: 2, // previous buddy
          experienceLevel: "BEGINNER",
          _count: { topicProgress: 4 },
          user: {
            college: "Harvard",
            studyBuddyPreferences: [{}],
          },
        },
        {
          userId: 3, // new candidate
          experienceLevel: "BEGINNER",
          _count: { topicProgress: 4 },
          user: {
            college: "Harvard",
            studyBuddyPreferences: [{}],
          },
        },
      ] as any);

      const createdPair = {
        id: 100,
        roadmapId: 10,
        studentAId: 1,
        studentBId: 3,
        active: true,
      };

      vi.mocked(prisma.roadmapStudyBuddyPair.create).mockResolvedValue(
        createdPair as any,
      );

      const result = await service.findAndCreateMatch(1, 10);

      expect(prisma.roadmapEnrollment.findMany).toHaveBeenCalledWith(
        expect.objectContaining({
          take: 50,
          where: expect.objectContaining({
            roadmapId: 10,
            user: expect.objectContaining({
              studentAPairs: {
                none: {
                  roadmapId: 10,
                  active: true,
                },
              },
              studentBPairs: {
                none: {
                  roadmapId: 10,
                  active: true,
                },
              },
            }),
          }),
        }),
      );

      expect(prisma.roadmapStudyBuddyPair.create).toHaveBeenCalledWith({
        data: {
          roadmapId: 10,
          studentAId: 1,
          studentBId: 3,
          active: true,
        },
      });

      expect(result).toEqual(createdPair);
    });
  });
});

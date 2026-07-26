import { vi, describe, it, expect, beforeEach } from 'vitest';
import { getRecommendations, invalidateRecommendations } from '../recommendation.service.js';
import { prisma } from '../../../database/db.js';

// --- MOCK PRISMA DEPENDENCIES ---
vi.mock('../../../database/db.js', () => ({
  prisma: {
    userRecommendation: {
      findUnique: vi.fn(),
      upsert: vi.fn(),
      updateMany: vi.fn(),
    },
    dsaSubmission: { findMany: vi.fn() },
    studentAptitudeProgress: { findMany: vi.fn() },
    skillTestAttempt: { findMany: vi.fn() },
    roadmapTopicProgress: { findMany: vi.fn() },
  },
}));

describe('Recommendation Service', () => {
  const userId = 123;

  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('getRecommendations', () => {
    it('1. returns cached recommendations if they are less than 30 minutes old', async () => {
      const recentDate = new Date(Date.now() - 10 * 60 * 1000); // 10 minutes ago
      const mockCached = {
        userId,
        lastRefreshedAt: recentDate,
        weakAreas: [{ type: 'dsa', topic: 'arrays', reason: 'Low pass rate' }],
      };

      vi.mocked((prisma as any).userRecommendation.findUnique).mockResolvedValue(mockCached as any);

      const result = await getRecommendations(userId);

      // It should NOT call the calculation methods or upsert
      expect(prisma.dsaSubmission.findMany).not.toHaveBeenCalled();
      expect((prisma as any).userRecommendation.upsert).not.toHaveBeenCalled();
      
      expect(result.weakAreas).toEqual(mockCached.weakAreas);
      expect(result.lastRefreshedAt).toEqual(recentDate);
    });

    it('2. generates fresh recommendations for a user with history and expired cache', async () => {
      // Mock an expired cache (40 minutes ago)
      const expiredDate = new Date(Date.now() - 40 * 60 * 1000);
      vi.mocked((prisma as any).userRecommendation.findUnique).mockResolvedValue({
        userId,
        lastRefreshedAt: expiredDate,
        weakAreas: [],
      } as any);

      // Mock DSA: 1 passed out of 4 total -> 25% pass rate (Trigger weak area)
      vi.mocked(prisma.dsaSubmission.findMany).mockResolvedValue([
        { total: 4, passed: 1, problem: { tags: ['graphs'] } }
      ] as any);

      // Mock Aptitude: 1 correct out of 3 total -> 33% correct (Trigger weak area)
      vi.mocked(prisma.studentAptitudeProgress.findMany).mockResolvedValue([
        { correct: true, question: { topic: { category: { name: 'Algebra' } } } },
        { correct: false, question: { topic: { category: { name: 'Algebra' } } } },
        { correct: false, question: { topic: { category: { name: 'Algebra' } } } },
      ] as any);

      // Mock Skill Test: Failed attempt
      vi.mocked(prisma.skillTestAttempt.findMany).mockResolvedValue([
        { passed: false, score: 45, test: { skillName: 'React', passThreshold: 70 } }
      ] as any);

      // Mock Roadmap: Topic stuck in progress
      vi.mocked(prisma.roadmapTopicProgress.findMany).mockResolvedValue([
        { status: 'IN_PROGRESS', topic: { title: 'System Design', slug: 'sys-design' } }
      ] as any);

      // Mock Upsert returning the new refresh date
      const newRefreshDate = new Date();
      vi.mocked((prisma as any).userRecommendation.upsert).mockResolvedValue({
        lastRefreshedAt: newRefreshDate,
      } as any);

      const result = await getRecommendations(userId);

      // Verify Upsert was called with the compiled weak areas
      expect((prisma as any).userRecommendation.upsert).toHaveBeenCalled();
      
      expect(result.weakAreas).toHaveLength(4);
      expect(result.weakAreas).toEqual(expect.arrayContaining([
        expect.objectContaining({ type: 'dsa', topic: 'graphs', score: 25 }),
        expect.objectContaining({ type: 'aptitude', topic: 'Algebra', score: 33 }),
        expect.objectContaining({ type: 'skill', topic: 'React', score: 45 }),
        expect.objectContaining({ type: 'roadmap', topic: 'System Design' }),
      ]));
    });

    it('3. returns empty weak areas for a user with absolutely no history', async () => {
      // Mock no cache
      vi.mocked((prisma as any).userRecommendation.findUnique).mockResolvedValue(null);

      // Mock empty candidate sets across the board
      vi.mocked(prisma.dsaSubmission.findMany).mockResolvedValue([]);
      vi.mocked(prisma.studentAptitudeProgress.findMany).mockResolvedValue([]);
      vi.mocked(prisma.skillTestAttempt.findMany).mockResolvedValue([]);
      vi.mocked(prisma.roadmapTopicProgress.findMany).mockResolvedValue([]);

      vi.mocked((prisma as any).userRecommendation.upsert).mockResolvedValue({
        lastRefreshedAt: new Date(),
      } as any);

      const result = await getRecommendations(userId);

      expect(result.weakAreas).toEqual([]);
    });
  });

  describe('invalidateRecommendations', () => {
    it('forces a refresh by setting lastRefreshedAt to epoch zero', async () => {
      await invalidateRecommendations(userId);

      expect((prisma as any).userRecommendation.updateMany).toHaveBeenCalledWith({
        where: { userId },
        data: { lastRefreshedAt: new Date(0) },
      });
    });
  });
});
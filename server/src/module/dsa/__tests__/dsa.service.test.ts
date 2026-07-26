import { vi, describe, it, expect, beforeEach, afterEach } from 'vitest';
import { DsaService } from '../dsa.service.js';
import { prisma } from '../../../database/db.js';

// --- MOCK PRISMA DEPENDENCIES ---
vi.mock('../../../database/db.js', () => ({
  prisma: {
    dsaProblem: {
      findUnique: vi.fn(),
      findMany: vi.fn(),
      count: vi.fn(),
    },
    studentDsaProgress: {
      findUnique: vi.fn(),
      findMany: vi.fn(),
      count: vi.fn(),
      create: vi.fn(),
      update: vi.fn(),
      delete: vi.fn(),
    },
    dsaBookmark: {
      findUnique: vi.fn(),
      findMany: vi.fn(),
      create: vi.fn(),
      delete: vi.fn(),
    },
    dsaProblemLabel: {
      findMany: vi.fn(),
    },
    dsaTopic: {
      findUnique: vi.fn(),
    },
  },
}));

describe('DSA Service', () => {
  let dsaService: DsaService;

  beforeEach(() => {
    dsaService = new DsaService();
    vi.clearAllMocks();
  });

  describe('Progress Tracking (toggleProblem)', () => {
    it('successfully upserts progress when marking a problem as solved (new progress)', async () => {
      vi.mocked(prisma.dsaProblem.findUnique).mockResolvedValue({ id: 1 } as any);
      vi.mocked(prisma.studentDsaProgress.findUnique).mockResolvedValue(null);
      vi.mocked(prisma.studentDsaProgress.create).mockResolvedValue({ problemId: 1, solved: true } as any);

      const result = await dsaService.toggleProblem(123, 1);

      expect(prisma.studentDsaProgress.create).toHaveBeenCalledWith({
        data: { studentId: 123, problemId: 1, solved: true },
      });
      expect(result).toEqual({ problemId: 1, solved: true });
    });

    it('successfully updates progress when marking a problem as unsolved but retaining notes', async () => {
      vi.mocked(prisma.dsaProblem.findUnique).mockResolvedValue({ id: 1 } as any);
      vi.mocked(prisma.studentDsaProgress.findUnique).mockResolvedValue({
        id: 99,
        solved: true,
        notes: 'Needs review', // Notes exist, so it should update, not delete
      } as any);
      vi.mocked(prisma.studentDsaProgress.update).mockResolvedValue({ problemId: 1, solved: false } as any);

      const result = await dsaService.toggleProblem(123, 1);

      expect(prisma.studentDsaProgress.update).toHaveBeenCalledWith({
        where: { id: 99 },
        data: { solved: false },
      });
      expect(result).toEqual({ problemId: 1, solved: false });
    });

    it('successfully removes progress row when marking as unsolved with no notes', async () => {
      vi.mocked(prisma.dsaProblem.findUnique).mockResolvedValue({ id: 1 } as any);
      vi.mocked(prisma.studentDsaProgress.findUnique).mockResolvedValue({
        id: 99,
        solved: true,
        notes: null, // No notes, so the row can be safely deleted
      } as any);

      const result = await dsaService.toggleProblem(123, 1);

      expect(prisma.studentDsaProgress.delete).toHaveBeenCalledWith({
        where: { id: 99 },
      });
      expect(result).toEqual({ problemId: 1, solved: false });
    });
  });

  describe('Bookmark Functionality (toggleBookmark)', () => {
    it('toggles a bookmark on (creates bookmark record)', async () => {
      vi.mocked(prisma.dsaProblem.findUnique).mockResolvedValue({ id: 1 } as any);
      vi.mocked(prisma.dsaBookmark.findUnique).mockResolvedValue(null);

      const result = await dsaService.toggleBookmark(123, 1);

      expect(prisma.dsaBookmark.create).toHaveBeenCalledWith({
        data: { studentId: 123, problemId: 1 },
      });
      expect(result).toEqual({ problemId: 1, bookmarked: true });
    });

    it('toggles a bookmark off (removes bookmark record)', async () => {
      vi.mocked(prisma.dsaProblem.findUnique).mockResolvedValue({ id: 1 } as any);
      vi.mocked(prisma.dsaBookmark.findUnique).mockResolvedValue({ id: 77 } as any);

      const result = await dsaService.toggleBookmark(123, 1);

      expect(prisma.dsaBookmark.delete).toHaveBeenCalledWith({
        where: { id: 77 },
      });
      expect(result).toEqual({ problemId: 1, bookmarked: false });
    });
  });

  describe('Paginated Problem Lists (getTopicBySlug)', () => {
    it('returns the correct total count, pagination metadata, and viewer progress/bookmark flags', async () => {
      // 1. Mock the Topic
      vi.mocked(prisma.dsaTopic.findUnique).mockResolvedValue({ id: 1, name: 'Arrays', slug: 'arrays' } as any);
      
      // 2. Mock 2 total problems being returned
      const mockProblems = [
        { id: 10, title: 'Two Sum' },
        { id: 11, title: 'Three Sum' },
      ];
      vi.mocked(prisma.dsaProblem.findMany).mockResolvedValue(mockProblems as any);
      
      // 3. Mock 25 total problems in the DB (to test pagination math: 25 items / limit 10 = 3 pages)
      vi.mocked(prisma.dsaProblem.count).mockResolvedValue(25);
      
      // 4. Mock viewer progress: User solved problem 10, bookmarked problem 11
      vi.mocked(prisma.studentDsaProgress.findMany).mockResolvedValue([
        { problemId: 10, solved: true, notes: null }
      ] as any);
      vi.mocked(prisma.dsaBookmark.findMany).mockResolvedValue([
        { problemId: 11 }
      ] as any);
      vi.mocked((prisma as any).dsaProblemLabel.findMany).mockResolvedValue([]);
      vi.mocked(prisma.studentDsaProgress.count).mockResolvedValue(1);

      // Execute request for Page 1, Limit 10
      const result = await dsaService.getTopicBySlug('arrays', 123, 1, 10);

      // Assert Pagination & Metadata
      expect(result.totalProblems).toBe(25);
      expect(result.totalPages).toBe(3); // Math.ceil(25 / 10)
      expect(result.page).toBe(1);
      expect(result.totalSolved).toBe(1);

      // Assert viewer progress flags correctly mapped to individual problems
      expect(result.problems[0].id).toBe(10);
      expect(result.problems[0].solved).toBe(true);
      expect(result.problems[0].bookmarked).toBe(false);

      expect(result.problems[1].id).toBe(11);
      expect(result.problems[1].solved).toBe(false);
      expect(result.problems[1].bookmarked).toBe(true);
    });
  });
});
import { describe, it, expect, vi, beforeEach } from "vitest";
import { NotesService } from "../module/notes/notes.service.js";
import { prisma } from "../database/db.js";
import { NoteContentType } from "@prisma/client";

vi.mock("../database/db.js", () => ({
  prisma: {
    studentNote: {
      findMany: vi.fn(),
      findUnique: vi.fn(),
      upsert: vi.fn(),
      delete: vi.fn(),
      deleteMany: vi.fn(),
    },
    dsaProblem: {
      findUnique: vi.fn(),
      findMany: vi.fn(),
    },
    roadmapTopic: {
      findUnique: vi.fn(),
      findMany: vi.fn(),
    },
    aptitudeQuestion: {
      findUnique: vi.fn(),
      findMany: vi.fn(),
    },
  },
}));

describe("NotesService", () => {
  let notesService: NotesService;

  beforeEach(() => {
    vi.clearAllMocks();
    notesService = new NotesService();
  });

  describe("getNotes", () => {
    it("should fetch and enrich notes for a user", async () => {
      const mockNotes = [
        {
          id: 1,
          userId: 1,
          contentType: NoteContentType.DSA_PROBLEM,
          contentId: "10",
          note: "DSA note test",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ];

      vi.mocked(prisma.studentNote.findMany).mockResolvedValue(mockNotes as any);
      vi.mocked(prisma.dsaProblem.findMany).mockResolvedValue([
        { id: 10, title: "Two Sum", slug: "two-sum" },
      ] as any);

      const result = await notesService.getNotes(1);

      expect(result).toHaveLength(1);
      expect(result[0].title).toBe("Two Sum");
      expect(result[0].url).toBe("/learn/dsa/problem/two-sum");
      expect(prisma.studentNote.findMany).toHaveBeenCalledWith({
        where: { userId: 1 },
        orderBy: { updatedAt: "desc" },
      });
    });

    it("should filter notes by contentType and search query", async () => {
      vi.mocked(prisma.studentNote.findMany).mockResolvedValue([]);

      await notesService.getNotes(1, {
        contentType: NoteContentType.ROADMAP_TOPIC,
        search: "hooks",
      });

      expect(prisma.studentNote.findMany).toHaveBeenCalledWith({
        where: {
          userId: 1,
          contentType: NoteContentType.ROADMAP_TOPIC,
          note: {
            contains: "hooks",
            mode: "insensitive",
          },
        },
        orderBy: { updatedAt: "desc" },
      });
    });
  });

  describe("saveNote", () => {
    it("should save the note if the content exists", async () => {
      vi.mocked(prisma.dsaProblem.findUnique).mockResolvedValue({ id: 10 } as any);
      vi.mocked(prisma.studentNote.upsert).mockResolvedValue({
        id: 1,
        userId: 1,
        contentType: NoteContentType.DSA_PROBLEM,
        contentId: "10",
        note: "Hello",
      } as any);

      const result = await notesService.saveNote(1, NoteContentType.DSA_PROBLEM, "10", "Hello");

      expect(result.note).toBe("Hello");
      expect(prisma.studentNote.upsert).toHaveBeenCalled();
    });

    it("should throw an error if the content does not exist", async () => {
      vi.mocked(prisma.dsaProblem.findUnique).mockResolvedValue(null);

      await expect(
        notesService.saveNote(1, NoteContentType.DSA_PROBLEM, "999", "Hello")
      ).rejects.toThrow("Problem not found");

      expect(prisma.studentNote.upsert).not.toHaveBeenCalled();
    });

    it("should reject malformed numeric contentId", async () => {
      await expect(
        notesService.saveNote(1, NoteContentType.DSA_PROBLEM, "12abc", "Hello")
      ).rejects.toThrow("Problem not found");

      expect(prisma.studentNote.upsert).not.toHaveBeenCalled();
    });

    it("should delete the note if the text is empty", async () => {
      vi.mocked(prisma.dsaProblem.findUnique).mockResolvedValue({ id: 10 } as any);

      const result = await notesService.saveNote(1, NoteContentType.DSA_PROBLEM, "10", "   ");

      expect(result.note).toBe("");
      expect(prisma.studentNote.delete).toHaveBeenCalled();
      expect(prisma.studentNote.upsert).not.toHaveBeenCalled();
    });
  });

  describe("deleteNote", () => {
    it("should delete the note", async () => {
      const result = await notesService.deleteNote(1, NoteContentType.DSA_PROBLEM, "10");
      expect(result.success).toBe(true);
      expect(prisma.studentNote.delete).toHaveBeenCalled();
    });

    it("should propagate non-P2025 delete failures", async () => {
      const dbError = new Error("Database connection lost");
      (dbError as any).code = "SOME_OTHER_ERROR";
      vi.mocked(prisma.studentNote.delete).mockRejectedValueOnce(dbError);

      await expect(
        notesService.deleteNote(1, NoteContentType.DSA_PROBLEM, "10")
      ).rejects.toThrow("Database connection lost");
    });
  });
});

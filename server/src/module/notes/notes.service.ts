import { prisma } from "../../database/db.js";
import { NoteContentType } from "@prisma/client";

export class NotesService {
  async getNotes(userId: number, filters?: { contentType?: NoteContentType; search?: string }) {
    const where: any = { userId };

    if (filters?.contentType) {
      where.contentType = filters.contentType;
    }

    if (filters?.search) {
      where.note = {
        contains: filters.search,
        mode: "insensitive",
      };
    }

    const notes = await prisma.studentNote.findMany({
      where,
      orderBy: { updatedAt: "desc" },
    });

    return this.enrichNotes(notes);
  }

  async getNote(userId: number, contentType: NoteContentType, contentId: string) {
    const note = await prisma.studentNote.findUnique({
      where: {
        userId_contentType_contentId: {
          userId,
          contentType,
          contentId,
        },
      },
    });

    if (!note) return null;
    const enriched = await this.enrichNotes([note]);
    return enriched[0] || null;
  }

  async saveNote(userId: number, contentType: NoteContentType, contentId: string, noteText: string) {
    await this.validateContentExistence(contentType, contentId);

    const trimmedNote = noteText.trim();

    if (!trimmedNote) {
      // If note is empty, delete it and return empty object
      try {
        await prisma.studentNote.delete({
          where: {
            userId_contentType_contentId: {
              userId,
              contentType,
              contentId,
            },
          },
        });
      } catch (err) {
        // Ignore delete error if note didn't exist
      }
      return { contentType, contentId, note: "" };
    }

    const saved = await prisma.studentNote.upsert({
      where: {
        userId_contentType_contentId: {
          userId,
          contentType,
          contentId,
        },
      },
      update: {
        note: trimmedNote,
      },
      create: {
        userId,
        contentType,
        contentId,
        note: trimmedNote,
      },
    });

    return saved;
  }

  async deleteNote(userId: number, contentType: NoteContentType, contentId: string) {
    try {
      await prisma.studentNote.delete({
        where: {
          userId_contentType_contentId: {
            userId,
            contentType,
            contentId,
          },
        },
      });
    } catch (err) {
      // Ignore if note didn't exist
    }
    return { success: true };
  }

  private async validateContentExistence(contentType: NoteContentType, contentId: string) {
    if (contentType === NoteContentType.DSA_PROBLEM) {
      const id = parseInt(contentId, 10);
      if (isNaN(id)) throw new Error("Problem not found");
      const problem = await prisma.dsaProblem.findUnique({ where: { id } });
      if (!problem) throw new Error("Problem not found");
    } else if (contentType === NoteContentType.ROADMAP_TOPIC) {
      const id = parseInt(contentId, 10);
      if (isNaN(id)) throw new Error("Topic not found");
      const topic = await prisma.roadmapTopic.findUnique({ where: { id } });
      if (!topic) throw new Error("Topic not found");
    } else if (contentType === NoteContentType.APTITUDE_QUESTION) {
      const id = parseInt(contentId, 10);
      if (isNaN(id)) throw new Error("Question not found");
      const question = await prisma.aptitudeQuestion.findUnique({ where: { id } });
      if (!question) throw new Error("Question not found");
    }
  }

  private async enrichNotes(notes: any[]) {
    if (notes.length === 0) return [];

    const dsaIds = notes
      .filter((n) => n.contentType === NoteContentType.DSA_PROBLEM)
      .map((n) => parseInt(n.contentId, 10))
      .filter((id) => !isNaN(id));

    const roadmapIds = notes
      .filter((n) => n.contentType === NoteContentType.ROADMAP_TOPIC)
      .map((n) => parseInt(n.contentId, 10))
      .filter((id) => !isNaN(id));

    const aptitudeIds = notes
      .filter((n) => n.contentType === NoteContentType.APTITUDE_QUESTION)
      .map((n) => parseInt(n.contentId, 10))
      .filter((id) => !isNaN(id));

    const [dsaProblems, roadmapTopics, aptitudeQuestions] = await Promise.all([
      dsaIds.length > 0
        ? prisma.dsaProblem.findMany({
            where: { id: { in: dsaIds } },
            select: { id: true, title: true, slug: true },
          })
        : [],
      roadmapIds.length > 0
        ? prisma.roadmapTopic.findMany({
            where: { id: { in: roadmapIds } },
            select: { id: true, title: true, slug: true, section: { select: { roadmap: { select: { slug: true } } } } },
          })
        : [],
      aptitudeIds.length > 0
        ? prisma.aptitudeQuestion.findMany({
            where: { id: { in: aptitudeIds } },
            select: { id: true, question: true, topic: { select: { slug: true } } },
          })
        : [],
    ]);

    const dsaMap = new Map(dsaProblems.map((p) => [p.id, p]));
    const roadmapMap = new Map(roadmapTopics.map((t) => [t.id, t]));
    const aptitudeMap = new Map(aptitudeQuestions.map((q) => [q.id, q]));

    return notes.map((note) => {
      let title = note.contentId;
      let url = "";

      if (note.contentType === NoteContentType.DSA_PROBLEM) {
        const p = dsaMap.get(parseInt(note.contentId, 10));
        if (p) {
          title = p.title;
          url = `/learn/dsa/problems/${p.slug}`;
        }
      } else if (note.contentType === NoteContentType.ROADMAP_TOPIC) {
        const t = roadmapMap.get(parseInt(note.contentId, 10));
        if (t) {
          title = t.title;
          url = `/learn/roadmap/${t.section.roadmap.slug}/topics/${t.slug}`;
        }
      } else if (note.contentType === NoteContentType.APTITUDE_QUESTION) {
        const q = aptitudeMap.get(parseInt(note.contentId, 10));
        if (q) {
          const text = q.question.replace(/<[^>]*>/g, "");
          title = text.length > 50 ? text.substring(0, 50) + "..." : text;
          url = `/learn/aptitude/${q.topic.slug}/practice`;
        }
      } else if (note.contentType === NoteContentType.INTERVIEW_QUESTION) {
        title = note.contentId
          .split("-")
          .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ");
        // We'll let client build the full URL if sectionSlug isn't stored,
        // or return a basic route template that client can resolve.
        url = `/learn/interview`;
      }

      return {
        ...note,
        title,
        url,
      };
    });
  }
}

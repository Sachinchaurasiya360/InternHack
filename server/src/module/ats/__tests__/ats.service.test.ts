import { describe, it, expect, vi, beforeEach } from "vitest";
import { Worker } from "worker_threads";
import { AtsService } from "../ats.service.js";
import { prisma } from "../../../database/db.js";
import { getBufferFromS3, getS3KeyFromUrl } from "../../../utils/s3.utils.js";
import { getProviderForService } from "../../../lib/ai-provider-registry.js";
import { readFile } from "fs/promises";

// ─── Module mocks (Vitest hoists these before imports) ────────────────────────

vi.mock("../../../database/db.js", () => ({
  prisma: {
    user: { findUnique: vi.fn() },
    atsScore: {
      findFirst: vi.fn(),
      create: vi.fn(),
      findMany: vi.fn(),
    },
  },
}));

vi.mock("../../../utils/s3.utils.js", () => ({
  getBufferFromS3: vi.fn(),
  getS3KeyFromUrl: vi.fn(),
}));

vi.mock("../../../lib/ai-provider-registry.js", () => ({
  getProviderForService: vi.fn(),
}));

vi.mock("../../../lib/ai-request-logger.js", () => ({
  logAIRequest: vi.fn(),
}));

vi.mock("fs/promises", () => ({
  readFile: vi.fn(),
}));

// worker_threads is mocked so the Worker constructor never actually spawns a
// thread. extractPdfText is spied on per-test (see mockValidPdf / mockPdfError)
// so tests stay focused on the service logic above the PDF extraction layer.
vi.mock("worker_threads", () => ({ Worker: vi.fn() }));

// ─── Fixtures ─────────────────────────────────────────────────────────────────

const STUDENT_ID = 42;
const RESUME_URL = "https://s3.amazonaws.com/intern-bucket/resume.pdf";

const VALID_RESUME_TEXT = `
  Jane Doe | jane@example.com | linkedin.com/in/janedoe
  EXPERIENCE
  Frontend Engineer at StartupCo (2022-2024)
  - Built React dashboards cutting load time by 40% for 50,000 users
  - Led TypeScript migration across 30+ components, reducing type errors by 90%
  SKILLS
  TypeScript, React, Node.js, PostgreSQL, Docker, AWS, GraphQL, REST APIs
  EDUCATION
  B.Tech Computer Science, IIT Bombay, 2022 — CGPA 8.7
`;

const VALID_AI_JSON = JSON.stringify({
  overallScore: 72,
  categoryScores: {
    formatting: 80,
    keywords: 70,
    experience: 75,
    skills: 68,
    education: 72,
    impact: 65,
  },
  suggestions: [
    "Add quantified metrics to experience bullets",
    "Highlight Docker usage more prominently",
  ],
  keywordAnalysis: {
    found: ["React", "TypeScript", "Node.js"],
    partial: ["AWS"],
    missing: ["Kubernetes", "CI/CD"],
  },
});

const MOCK_ATS_ROW = {
  id: 1,
  studentId: STUDENT_ID,
  resumeUrl: RESUME_URL,
  jobTitle: null,
  jobDescription: null,
  overallScore: 72,
  categoryScores: {},
  suggestions: [],
  keywordAnalysis: {},
  rawResponse: {},
  createdAt: new Date("2024-01-15T10:00:00Z"),
  updatedAt: new Date("2024-01-15T10:00:00Z"),
  student: null,
};

// ─── Setup helpers ────────────────────────────────────────────────────────────

function mockUserOwnsResume(url = RESUME_URL) {
  vi.mocked(prisma.user.findUnique).mockResolvedValue({ resumes: [url] } as any);
}

function mockCacheMiss() {
  vi.mocked(prisma.atsScore.findFirst).mockResolvedValue(null);
}

// Spy on the private extractPdfText method so tests control returned text
// without spawning a real worker thread.
function mockValidPdf(service: AtsService, text = VALID_RESUME_TEXT) {
  vi.spyOn(service as any, "extractPdfText").mockResolvedValue(text);
}

function mockValidAI(jsonStr = VALID_AI_JSON) {
  vi.mocked(getProviderForService).mockReturnValue({
    generateText: vi.fn().mockResolvedValue({ text: jsonStr }),
  } as any);
}

// ─── Tests ────────────────────────────────────────────────────────────────────

describe("AtsService", () => {
  let service: AtsService;

  beforeEach(() => {
    vi.clearAllMocks();
    service = new AtsService();

    // Safe defaults — individual tests override what they need
    vi.mocked(getS3KeyFromUrl).mockReturnValue("intern-bucket/resume.pdf");
    vi.mocked(getBufferFromS3).mockResolvedValue(Buffer.from("pdf-binary-data"));

    // Worker mock that resolves with text on the message event
    vi.mocked(Worker).mockImplementation(function () {
      const workerMock = {
        on: vi.fn().mockImplementation((event: string, cb: (...args: any[]) => void) => {
          if (event === "message") setTimeout(() => cb({ text: VALID_RESUME_TEXT }), 0);
          return workerMock;
        }),
        terminate: vi.fn().mockResolvedValue(undefined),
      };
      return workerMock as any;
    } as any);

    mockValidPdf(service);
    mockValidAI();
  });

  // ── scoreResume ─────────────────────────────────────────────────────────────

  describe("scoreResume", () => {
    it("throws 'User not found' when student does not exist in DB", async () => {
      vi.mocked(prisma.user.findUnique).mockResolvedValue(null);

      await expect(
        service.scoreResume(STUDENT_ID, { resumeUrl: RESUME_URL }),
      ).rejects.toThrow("User not found");
    });

    it("throws when resume URL does not belong to the student (IDOR guard)", async () => {
      vi.mocked(prisma.user.findUnique).mockResolvedValue({
        resumes: ["https://s3.amazonaws.com/intern-bucket/someone-else.pdf"],
      } as any);

      await expect(
        service.scoreResume(STUDENT_ID, { resumeUrl: RESUME_URL }),
      ).rejects.toThrow("Resume does not belong to this user");
    });

    it("returns cached row without calling AI on cache hit within TTL", async () => {
      mockUserOwnsResume();
      vi.mocked(prisma.atsScore.findFirst).mockResolvedValue(MOCK_ATS_ROW as any);

      const result = await service.scoreResume(STUDENT_ID, { resumeUrl: RESUME_URL });

      expect(result).toEqual(MOCK_ATS_ROW);
      expect(getProviderForService).not.toHaveBeenCalled();
      expect(prisma.atsScore.create).not.toHaveBeenCalled();
    });

    it("strips query params from presigned URL before ownership check", async () => {
      const presignedUrl = `${RESUME_URL}?X-Amz-Signature=abc123&X-Amz-Expires=3600`;
      mockUserOwnsResume(RESUME_URL);
      vi.mocked(prisma.atsScore.findFirst).mockResolvedValue(MOCK_ATS_ROW as any);

      await expect(
        service.scoreResume(STUDENT_ID, { resumeUrl: presignedUrl }),
      ).resolves.toBeDefined();
    });

    it("throws when extracted PDF text is under 50 characters", async () => {
      mockUserOwnsResume();
      mockCacheMiss();
      vi.spyOn(service as any, "extractPdfText").mockResolvedValue("too short");

      await expect(
        service.scoreResume(STUDENT_ID, { resumeUrl: RESUME_URL }),
      ).rejects.toThrow("Could not extract sufficient text from the resume PDF");
    });

    it("creates and returns a new AtsScore row on cache miss without job context", async () => {
      mockUserOwnsResume();
      mockCacheMiss();
      vi.mocked(prisma.atsScore.create).mockResolvedValue(MOCK_ATS_ROW as any);

      const result = await service.scoreResume(STUDENT_ID, { resumeUrl: RESUME_URL });

      expect(prisma.atsScore.create).toHaveBeenCalledOnce();
      expect(result.overallScore).toBe(72);
    });

    it("includes job title and description in the AI prompt when provided", async () => {
      const mockGenerateText = vi.fn().mockResolvedValue({ text: VALID_AI_JSON });
      vi.mocked(getProviderForService).mockReturnValue({
        generateText: mockGenerateText,
      } as any);
      mockUserOwnsResume();
      mockCacheMiss();
      vi.mocked(prisma.atsScore.create).mockResolvedValue(MOCK_ATS_ROW as any);

      await service.scoreResume(STUDENT_ID, {
        resumeUrl: RESUME_URL,
        jobTitle: "Senior Frontend Engineer",
        jobDescription: "React, TypeScript, and system design experience required",
      });

      const prompt = mockGenerateText.mock.calls[0][0] as string;
      expect(prompt).toContain("Senior Frontend Engineer");
      expect(prompt).toContain("React, TypeScript, and system design experience required");
    });

    it("fetches buffer from S3 when URL resolves to an S3 key", async () => {
      vi.spyOn(service as any, "extractPdfText").mockRestore();

      await (service as any).extractPdfText(RESUME_URL);

      expect(getS3KeyFromUrl).toHaveBeenCalledWith(RESUME_URL);
      expect(getBufferFromS3).toHaveBeenCalledWith("intern-bucket/resume.pdf");
    });

    it("reads from local filesystem when URL starts with /uploads/", async () => {
      vi.spyOn(service as any, "extractPdfText").mockRestore();
      const localUrl = "/uploads/resume-12345.pdf";
      vi.mocked(getS3KeyFromUrl).mockReturnValue(null);
      vi.mocked(readFile).mockResolvedValue(Buffer.from("local-pdf-data") as any);

      await (service as any).extractPdfText(localUrl);

      expect(readFile).toHaveBeenCalled();
    });

    it("throws 'Invalid resume URL format' for non-S3 non-upload URLs", async () => {
      vi.spyOn(service as any, "extractPdfText").mockRestore();
      const badUrl = "ftp://example.com/resume.pdf";
      vi.mocked(getS3KeyFromUrl).mockReturnValue(null);

      await expect(
        (service as any).extractPdfText(badUrl),
      ).rejects.toThrow("Invalid resume URL format");
    });

    it("throws when AI returns completely unparseable text", async () => {
      mockUserOwnsResume();
      mockCacheMiss();
      vi.mocked(getProviderForService).mockReturnValue({
        generateText: vi.fn().mockResolvedValue({ text: "GARBLED OUTPUT @@###!!!" }),
      } as any);

      await expect(
        service.scoreResume(STUDENT_ID, { resumeUrl: RESUME_URL }),
      ).rejects.toThrow();
    });

    it("parses AI response correctly when JSON is wrapped in a markdown code block", async () => {
      mockUserOwnsResume();
      mockCacheMiss();
      vi.mocked(getProviderForService).mockReturnValue({
        generateText: vi
          .fn()
          .mockResolvedValue({ text: `\`\`\`json\n${VALID_AI_JSON}\n\`\`\`` }),
      } as any);
      vi.mocked(prisma.atsScore.create).mockResolvedValue(MOCK_ATS_ROW as any);

      await expect(
        service.scoreResume(STUDENT_ID, { resumeUrl: RESUME_URL }),
      ).resolves.toBeDefined();
    });

    it("handles AI JSON with trailing commas before parsing", async () => {
      const trailingCommaJson = `{
        "overallScore": 65,
        "categoryScores": {
          "formatting": 70, "keywords": 60, "experience": 65,
          "skills": 60, "education": 70, "impact": 55,
        },
        "suggestions": ["Fix formatting",],
        "keywordAnalysis": { "found": [], "partial": [], "missing": [], }
      }`;
      mockUserOwnsResume();
      mockCacheMiss();
      vi.mocked(getProviderForService).mockReturnValue({
        generateText: vi.fn().mockResolvedValue({ text: trailingCommaJson }),
      } as any);
      vi.mocked(prisma.atsScore.create).mockResolvedValue(MOCK_ATS_ROW as any);

      await expect(
        service.scoreResume(STUDENT_ID, { resumeUrl: RESUME_URL }),
      ).resolves.toBeDefined();
    });

    it("clamps overallScore to 100 when AI returns an out-of-range value", async () => {
      const outOfRangeJson = JSON.stringify({
        overallScore: 150,
        categoryScores: {
          formatting: 50, keywords: 50, experience: 50,
          skills: 50, education: 50, impact: 50,
        },
        suggestions: [],
        keywordAnalysis: { found: [], partial: [], missing: [] },
      });
      mockUserOwnsResume();
      mockCacheMiss();
      vi.mocked(getProviderForService).mockReturnValue({
        generateText: vi.fn().mockResolvedValue({ text: outOfRangeJson }),
      } as any);
      (vi.mocked(prisma.atsScore.create) as any).mockImplementation(
        async (args: any) =>
          ({ ...MOCK_ATS_ROW, overallScore: args.data.overallScore }),
      );

      const result = await service.scoreResume(STUDENT_ID, { resumeUrl: RESUME_URL });

      expect(result.overallScore).toBe(100);
    });

    it("falls back to default category scores (50 each) when AI omits categoryScores", async () => {
      const noCategoryJson = JSON.stringify({
        overallScore: 55,
        suggestions: [],
        keywordAnalysis: { found: [], partial: [], missing: [] },
      });
      mockUserOwnsResume();
      mockCacheMiss();
      vi.mocked(getProviderForService).mockReturnValue({
        generateText: vi.fn().mockResolvedValue({ text: noCategoryJson }),
      } as any);
      (vi.mocked(prisma.atsScore.create) as any).mockImplementation(
        async (args: any) =>
          ({ ...MOCK_ATS_ROW, categoryScores: args.data.categoryScores }),
      );

      const result = await service.scoreResume(STUDENT_ID, { resumeUrl: RESUME_URL });
      const scores = result.categoryScores as Record<string, number>;

      expect(scores.formatting).toBe(50);
      expect(scores.keywords).toBe(50);
    });

    it("limits suggestions array to a maximum of 10 items", async () => {
      const tooManyJson = JSON.stringify({
        overallScore: 60,
        categoryScores: {
          formatting: 60, keywords: 60, experience: 60,
          skills: 60, education: 60, impact: 60,
        },
        suggestions: Array.from({ length: 12 }, (_, i) => `Suggestion ${i + 1}`),
        keywordAnalysis: { found: [], partial: [], missing: [] },
      });
      mockUserOwnsResume();
      mockCacheMiss();
      vi.mocked(getProviderForService).mockReturnValue({
        generateText: vi.fn().mockResolvedValue({ text: tooManyJson }),
      } as any);
      (vi.mocked(prisma.atsScore.create) as any).mockImplementation(
        async (args: any) =>
          ({ ...MOCK_ATS_ROW, suggestions: args.data.suggestions }),
      );

      const result = await service.scoreResume(STUDENT_ID, { resumeUrl: RESUME_URL });

      expect((result.suggestions as string[]).length).toBeLessThanOrEqual(10);
    });
  });

  // ── getScoreHistory ─────────────────────────────────────────────────────────

  describe("getScoreHistory", () => {
    it("returns scores in oldest-first order for charting", async () => {
      const rows = [
        { id: 3, overallScore: 80, createdAt: new Date("2024-03-01") },
        { id: 2, overallScore: 70, createdAt: new Date("2024-02-01") },
        { id: 1, overallScore: 60, createdAt: new Date("2024-01-01") },
      ];
      vi.mocked(prisma.atsScore.findMany).mockResolvedValue(rows as any);

      const result = await service.getScoreHistory(STUDENT_ID);

      expect(result[0].id).toBe(1);
      expect(result[2].id).toBe(3);
    });

    it("returns an empty array when the student has no score history", async () => {
      vi.mocked(prisma.atsScore.findMany).mockResolvedValue([]);

      expect(await service.getScoreHistory(STUDENT_ID)).toEqual([]);
    });

    it("queries with the correct studentId filter", async () => {
      vi.mocked(prisma.atsScore.findMany).mockResolvedValue([]);

      await service.getScoreHistory(STUDENT_ID);

      expect(prisma.atsScore.findMany).toHaveBeenCalledWith(
        expect.objectContaining({ where: { studentId: STUDENT_ID } }),
      );
    });

    it("limits query to 30 rows", async () => {
      vi.mocked(prisma.atsScore.findMany).mockResolvedValue([]);

      await service.getScoreHistory(STUDENT_ID);

      expect(prisma.atsScore.findMany).toHaveBeenCalledWith(
        expect.objectContaining({ take: 30 }),
      );
    });
  });

  // ── applySuggestions ────────────────────────────────────────────────────────

  describe("applySuggestions", () => {
    const INPUT = {
      resumeUrl: RESUME_URL,
      suggestions: ["Add metrics to experience", "Include Docker in skills"],
    };

    it("throws 'User not found' when student does not exist", async () => {
      vi.mocked(prisma.user.findUnique).mockResolvedValue(null);

      await expect(
        service.applySuggestions(STUDENT_ID, INPUT),
      ).rejects.toThrow("User not found");
    });

    it("throws when resume does not belong to the student", async () => {
      vi.mocked(prisma.user.findUnique).mockResolvedValue({
        resumes: ["https://s3.amazonaws.com/intern-bucket/not-mine.pdf"],
      } as any);

      await expect(
        service.applySuggestions(STUDENT_ID, INPUT),
      ).rejects.toThrow("Resume does not belong to this user");
    });

    it("throws when PDF text extraction yields insufficient content", async () => {
      mockUserOwnsResume();
      vi.spyOn(service as any, "extractPdfText").mockResolvedValue("tiny");

      await expect(
        service.applySuggestions(STUDENT_ID, INPUT),
      ).rejects.toThrow("Could not extract sufficient text from the resume PDF");
    });

    it("returns reply and updatedLatex on success", async () => {
      mockUserOwnsResume();
      const latex =
        "\\documentclass{article}\\begin{document}improved resume\\end{document}";
      vi.mocked(getProviderForService).mockReturnValue({
        generateText: vi.fn().mockResolvedValue({
          text: `<reply>Applied all suggestions.</reply><latex>${latex}</latex>`,
        }),
      } as any);

      const result = await service.applySuggestions(STUDENT_ID, INPUT);

      expect(result.reply).toBe("Applied all suggestions.");
      expect(result.updatedLatex).toBe(latex);
    });

    it("includes each suggestion in the AI prompt", async () => {
      const mockGenerateText = vi.fn().mockResolvedValue({
        text: "<reply>Done.</reply><latex>\\documentclass{article}</latex>",
      });
      mockUserOwnsResume();
      vi.mocked(getProviderForService).mockReturnValue({
        generateText: mockGenerateText,
      } as any);

      await service.applySuggestions(STUDENT_ID, INPUT);

      const prompt = mockGenerateText.mock.calls[0][0] as string;
      expect(prompt).toContain("Add metrics to experience");
      expect(prompt).toContain("Include Docker in skills");
    });

    it("falls back to raw AI text when <latex> tag is absent from response", async () => {
      mockUserOwnsResume();
      vi.mocked(getProviderForService).mockReturnValue({
        generateText: vi.fn().mockResolvedValue({
          text: "<reply>Partial.</reply>no latex tag here",
        }),
      } as any);

      const result = await service.applySuggestions(STUDENT_ID, INPUT);

      expect(result.updatedLatex).toBeTruthy();
    });
  });
});

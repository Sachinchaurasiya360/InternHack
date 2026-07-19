import { describe, it, expect, vi, beforeEach } from "vitest";
import { readFile } from "fs/promises";
import { AtsService } from "../ats.service.js";
import { prisma } from "../../../database/db.js";
import { getBufferFromS3, getS3KeyFromUrl } from "../../../utils/s3.utils.js";
import { getProviderForService } from "../../../lib/ai-provider-registry.js";

// ─── Module mocks (Vitest hoists these before imports) ────────────────────────

vi.mock("../../../database/db.js", () => ({
  prisma: {
    user: { findUnique: vi.fn() },
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

// ─── Fixtures ─────────────────────────────────────────────────────────────────

const STUDENT_ID = 42;
const RESUME_URL = "https://s3.amazonaws.com/intern-bucket/resume.pdf";
const IP_HASH = "abc123def4567890";
const GUEST_RESUME_URL = `https://internhack-uploads.s3.ap-south-1.amazonaws.com/guest-resumes/${IP_HASH}/resume.pdf`;
const OTHER_GUEST_URL = "https://internhack-uploads.s3.ap-south-1.amazonaws.com/guest-resumes/otherhash/resume.pdf";

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

// ─── Setup helpers ────────────────────────────────────────────────────────────

function mockUserOwnsResume(url = RESUME_URL) {
  vi.mocked(prisma.user.findUnique).mockResolvedValue({ resumes: [url] } as any);
}

// The current service sends the PDF as an inline attachment to the AI
// provider (generateWithInlinePdf) rather than extracting text first, so
// every AI-provider mock exposes that method instead of generateText.
function mockValidAI(jsonStr = VALID_AI_JSON) {
  vi.mocked(getProviderForService).mockReturnValue({
    generateWithInlinePdf: vi.fn().mockResolvedValue({ text: jsonStr }),
  } as any);
}

describe("AtsService", () => {
  let service: AtsService;

  beforeEach(() => {
    vi.clearAllMocks();
    service = new AtsService();

    // Safe defaults — individual tests override what they need
    vi.mocked(getS3KeyFromUrl).mockReturnValue("intern-bucket/resume.pdf");
    vi.mocked(getBufferFromS3).mockResolvedValue(Buffer.from("pdf-binary-data"));

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

    it("strips query params from presigned URL before ownership check", async () => {
      const presignedUrl = `${RESUME_URL}?X-Amz-Signature=abc123&X-Amz-Expires=3600`;
      mockUserOwnsResume(RESUME_URL);

      await expect(
        service.scoreResume(STUDENT_ID, { resumeUrl: presignedUrl }),
      ).resolves.toBeDefined();
    });

    it("scores the resume via the AI provider and returns the result", async () => {
      mockUserOwnsResume();

      const result = await service.scoreResume(STUDENT_ID, { resumeUrl: RESUME_URL });

      expect(getProviderForService).toHaveBeenCalledWith("ATS_SCORE");
      expect(result.overallScore).toBe(72);
      expect(result.resumeUrl).toBe(RESUME_URL);
    });

    it("sends the resume PDF as a base64 inline attachment, not extracted text", async () => {
      mockUserOwnsResume();
      const mockGenerateWithInlinePdf = vi.fn().mockResolvedValue({ text: VALID_AI_JSON });
      vi.mocked(getProviderForService).mockReturnValue({
        generateWithInlinePdf: mockGenerateWithInlinePdf,
      } as any);

      await service.scoreResume(STUDENT_ID, { resumeUrl: RESUME_URL });

      expect(mockGenerateWithInlinePdf).toHaveBeenCalledWith(
        Buffer.from("pdf-binary-data").toString("base64"),
        expect.any(String),
      );
    });

    it("includes job title and description in the AI prompt when provided", async () => {
      const mockGenerateWithInlinePdf = vi.fn().mockResolvedValue({ text: VALID_AI_JSON });
      vi.mocked(getProviderForService).mockReturnValue({
        generateWithInlinePdf: mockGenerateWithInlinePdf,
      } as any);
      mockUserOwnsResume();

      await service.scoreResume(STUDENT_ID, {
        resumeUrl: RESUME_URL,
        jobTitle: "Senior Frontend Engineer",
        jobDescription: "React, TypeScript, and system design experience required",
      });

      const prompt = mockGenerateWithInlinePdf.mock.calls[0]![1] as string;
      expect(prompt).toContain("Senior Frontend Engineer");
      expect(prompt).toContain("React, TypeScript, and system design experience required");
    });

    it("fetches buffer from S3 when URL resolves to an S3 key", async () => {
      await (service as any).getResumeBuffer(RESUME_URL);

      expect(getS3KeyFromUrl).toHaveBeenCalledWith(RESUME_URL);
      expect(getBufferFromS3).toHaveBeenCalledWith("intern-bucket/resume.pdf");
    });

    it("reads from local filesystem when URL starts with /uploads/", async () => {
      const localUrl = "/uploads/resume-12345.pdf";
      vi.mocked(getS3KeyFromUrl).mockReturnValue(null);
      vi.mocked(readFile).mockResolvedValue(Buffer.from("local-pdf-data") as any);

      await (service as any).getResumeBuffer(localUrl);

      expect(readFile).toHaveBeenCalled();
    });

    it("throws 'Invalid resume URL format' for non-S3 non-upload URLs", async () => {
      const badUrl = "ftp://example.com/resume.pdf";
      vi.mocked(getS3KeyFromUrl).mockReturnValue(null);

      await expect((service as any).getResumeBuffer(badUrl)).rejects.toThrow(
        "Invalid resume URL format",
      );
    });

    it("throws when AI returns completely unparseable text", async () => {
      mockUserOwnsResume();
      vi.mocked(getProviderForService).mockReturnValue({
        generateWithInlinePdf: vi.fn().mockResolvedValue({ text: "GARBLED OUTPUT @@###!!!" }),
      } as any);

      await expect(
        service.scoreResume(STUDENT_ID, { resumeUrl: RESUME_URL }),
      ).rejects.toThrow();
    });

    it("parses AI response correctly when JSON is wrapped in a markdown code block", async () => {
      mockUserOwnsResume();
      vi.mocked(getProviderForService).mockReturnValue({
        generateWithInlinePdf: vi
          .fn()
          .mockResolvedValue({ text: `\`\`\`json\n${VALID_AI_JSON}\n\`\`\`` }),
      } as any);

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
      vi.mocked(getProviderForService).mockReturnValue({
        generateWithInlinePdf: vi.fn().mockResolvedValue({ text: trailingCommaJson }),
      } as any);

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
      vi.mocked(getProviderForService).mockReturnValue({
        generateWithInlinePdf: vi.fn().mockResolvedValue({ text: outOfRangeJson }),
      } as any);

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
      vi.mocked(getProviderForService).mockReturnValue({
        generateWithInlinePdf: vi.fn().mockResolvedValue({ text: noCategoryJson }),
      } as any);

      const result = await service.scoreResume(STUDENT_ID, { resumeUrl: RESUME_URL });
      const scores = result.categoryScores as unknown as Record<string, number>;

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
      vi.mocked(getProviderForService).mockReturnValue({
        generateWithInlinePdf: vi.fn().mockResolvedValue({ text: tooManyJson }),
      } as any);

      const result = await service.scoreResume(STUDENT_ID, { resumeUrl: RESUME_URL });

      expect((result.suggestions as string[]).length).toBeLessThanOrEqual(10);
    });
  });

  // ── scoreResumeGuest ────────────────────────────────────────────────────────

  describe("scoreResumeGuest", () => {
    it("rejects resume URL outside caller guest prefix", async () => {
      vi.mocked(getS3KeyFromUrl).mockReturnValue("guest-resumes/otherhash/resume.pdf");

      await expect(
        service.scoreResumeGuest(IP_HASH, { resumeUrl: OTHER_GUEST_URL }),
      ).rejects.toThrow("Invalid resume URL for guest scoring");
    });

    it("returns AI result without persisting to database", async () => {
      vi.mocked(getS3KeyFromUrl).mockReturnValue(`guest-resumes/${IP_HASH}/resume.pdf`);
      mockValidAI();

      const result = await service.scoreResumeGuest(IP_HASH, { resumeUrl: GUEST_RESUME_URL });

      expect(result.overallScore).toBe(72);
      expect(result.studentId).toBe(0);
      expect(result.id).toBe(0);
      expect(prisma.user.findUnique).not.toHaveBeenCalled();
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

    it("returns reply and updatedLatex on success", async () => {
      mockUserOwnsResume();
      const latex =
        "\\documentclass{article}\\begin{document}improved resume\\end{document}";
      vi.mocked(getProviderForService).mockReturnValue({
        generateWithInlinePdf: vi.fn().mockResolvedValue({
          text: `<reply>Applied all suggestions.</reply><latex>${latex}</latex>`,
        }),
      } as any);

      const result = await service.applySuggestions(STUDENT_ID, INPUT);

      expect(result.reply).toBe("Applied all suggestions.");
      expect(result.updatedLatex).toBe(latex);
    });

    it("includes each suggestion in the AI prompt", async () => {
      const mockGenerateWithInlinePdf = vi.fn().mockResolvedValue({
        text: "<reply>Done.</reply><latex>\\documentclass{article}</latex>",
      });
      mockUserOwnsResume();
      vi.mocked(getProviderForService).mockReturnValue({
        generateWithInlinePdf: mockGenerateWithInlinePdf,
      } as any);

      await service.applySuggestions(STUDENT_ID, INPUT);

      const prompt = mockGenerateWithInlinePdf.mock.calls[0]![1] as string;
      expect(prompt).toContain("Add metrics to experience");
      expect(prompt).toContain("Include Docker in skills");
    });

    it("falls back to raw AI text when <latex> tag is absent from response", async () => {
      mockUserOwnsResume();
      vi.mocked(getProviderForService).mockReturnValue({
        generateWithInlinePdf: vi.fn().mockResolvedValue({
          text: "<reply>Partial.</reply>no latex tag here",
        }),
      } as any);

      const result = await service.applySuggestions(STUDENT_ID, INPUT);

      expect(result.updatedLatex).toBeTruthy();
    });
  });
});

import { describe, it, expect, vi, beforeEach } from "vitest";
import { AtsService } from "../ats.service.js";
import { getBufferFromS3, getS3KeyFromUrl } from "../../../utils/s3.utils.js";
import { getProviderForService } from "../../../lib/ai-provider-registry.js";

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

vi.mock("worker_threads", () => ({ Worker: vi.fn() }));

const IP_HASH = "abc123def4567890";
const GUEST_RESUME_URL = `https://internhack-uploads.s3.ap-south-1.amazonaws.com/guest-resumes/${IP_HASH}/resume.pdf`;
const OTHER_GUEST_URL = `https://internhack-uploads.s3.ap-south-1.amazonaws.com/guest-resumes/otherhash/resume.pdf`;

const VALID_RESUME_TEXT = `
  Jane Doe | jane@example.com
  Software Engineer with 5 years of experience building web applications.
  Skills: TypeScript, React, Node.js, PostgreSQL, AWS, Docker, Kubernetes.
  Experience at Acme Corp building scalable microservices handling 1M requests daily.
  Education: B.S. Computer Science, State University, GPA 3.8.
`.repeat(2);

const AI_RESPONSE = JSON.stringify({
  overallScore: 78,
  categoryScores: {
    formatting: 80,
    keywords: 75,
    experience: 82,
    skills: 70,
    education: 85,
    impact: 76,
  },
  suggestions: ["Add more metrics", "Include job-specific keywords"],
  keywordAnalysis: {
    found: ["TypeScript", "React"],
    partial: ["AWS"],
    missing: ["GraphQL"],
  },
});

describe("AtsService.scoreResumeGuest", () => {
  const service = new AtsService();

  beforeEach(() => {
    vi.clearAllMocks();
    vi.spyOn(service as unknown as { extractPdfText: (url: string) => Promise<string> }, "extractPdfText")
      .mockResolvedValue(VALID_RESUME_TEXT);
  });

  it("rejects resume URL outside caller guest prefix", async () => {
    vi.mocked(getS3KeyFromUrl).mockReturnValue(`guest-resumes/otherhash/resume.pdf`);

    await expect(
      service.scoreResumeGuest(IP_HASH, { resumeUrl: OTHER_GUEST_URL }),
    ).rejects.toThrow("Invalid resume URL for guest scoring");
  });

  it("returns AI result without persisting to database", async () => {
    const { prisma } = await import("../../../database/db.js");

    vi.mocked(getS3KeyFromUrl).mockReturnValue(`guest-resumes/${IP_HASH}/resume.pdf`);
    vi.mocked(getProviderForService).mockReturnValue({
      generateText: vi.fn().mockResolvedValue({ text: AI_RESPONSE }),
    } as never);

    const result = await service.scoreResumeGuest(IP_HASH, { resumeUrl: GUEST_RESUME_URL });

    expect(result.overallScore).toBe(78);
    expect(result.studentId).toBe(0);
    expect(result.id).toBe(0);
    expect(prisma.atsScore.create).not.toHaveBeenCalled();
  });
});

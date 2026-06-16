import { describe, it, expect } from "vitest";
import { generateRoadmapPdf, generateCertificatePdf } from "../module/roadmap/pdf/index.js";

describe("Roadmap PDF Module", () => {
  it("should generate a roadmap PDF buffer successfully (light theme)", async () => {
    const mockInput = {
      theme: "light" as const,
      user: { name: "Test User" },
      roadmap: {
        title: "Test Roadmap",
        shortDescription: "A short description of test roadmap",
        estimatedHours: 40,
        outcomes: ["Outcome 1", "Outcome 2"],
        prerequisites: ["Prereq 1"],
      },
      enrollment: {
        hoursPerWeek: 10,
        preferredDays: ["Monday", "Wednesday"],
        startDate: new Date("2026-06-01"),
        targetEndDate: new Date("2026-07-01"),
        experienceLevel: "NEW",
        goal: "JOB_READY",
      },
      weeklyPlan: [
        { week: 1, topicSlugs: ["topic-1"], totalHours: 10 },
      ],
      sections: [
        {
          title: "Section 1",
          summary: "Summary of section 1",
          orderIndex: 0,
          topics: [
            {
              slug: "topic-1",
              title: "Topic 1",
              summary: "Summary of topic 1",
              contentMd: "Some markdown text\n\n- Bullet 1\n- Bullet 2",
              estimatedHours: 10,
              difficulty: 2,
              miniProject: "Build a simple app",
              selfCheck: "Check if it runs",
              resources: [
                { kind: "Video", title: "Resource 1", url: "https://example.com/res1", source: "YouTube" },
              ],
            },
          ],
        },
      ],
    };

    const buffer = await generateRoadmapPdf(mockInput);
    expect(buffer).toBeInstanceOf(Buffer);
    expect(buffer.length).toBeGreaterThan(0);
  });

  it("should generate a roadmap PDF buffer successfully (dark theme)", async () => {
    const mockInput = {
      theme: "dark" as const,
      user: { name: "Test User" },
      roadmap: {
        title: "Test Roadmap",
        shortDescription: "A short description of test roadmap",
        estimatedHours: 40,
        outcomes: ["Outcome 1"],
        prerequisites: [],
      },
      enrollment: {
        hoursPerWeek: 10,
        preferredDays: ["Monday"],
        startDate: new Date("2026-06-01"),
        targetEndDate: new Date("2026-07-01"),
        experienceLevel: "SOME",
        goal: "CURIOUS",
      },
      weeklyPlan: [],
      sections: [],
    };

    const buffer = await generateRoadmapPdf(mockInput);
    expect(buffer).toBeInstanceOf(Buffer);
    expect(buffer.length).toBeGreaterThan(0);
  });

  it("should generate a completion certificate PDF buffer successfully", async () => {
    const mockInput = {
      theme: "light" as const,
      userName: "Test User",
      roadmapTitle: "Test Fullstack Roadmap",
      completedAt: new Date("2026-06-15"),
    };

    const buffer = await generateCertificatePdf(mockInput);
    expect(buffer).toBeInstanceOf(Buffer);
    expect(buffer.length).toBeGreaterThan(0);
  });
});

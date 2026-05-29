import fs from "fs/promises";
import { generateRoadmapPdf } from "../src/module/roadmap/roadmap.pdf.js";

async function main() {
  const input = {
    theme: "light",
    user: { name: "Test User" },
    roadmap: {
      title: "Full Stack Roadmap",
      shortDescription: "A short guided plan",
      estimatedHours: 120,
      outcomes: ["Build apps", "Deploy services"],
      prerequisites: ["Basic JS", "HTML/CSS"],
    },
    enrollment: {
      hoursPerWeek: 6,
      preferredDays: ["Mon", "Wed", "Sat"],
      startDate: new Date(),
      targetEndDate: new Date(Date.now() + 1000 * 60 * 60 * 24 * 90),
      experienceLevel: "SOME",
      goal: "JOB_READY",
    },
    weeklyPlan: [
      { week: 1, topicSlugs: ["intro-js", "dom"], totalHours: 6 },
      { week: 2, topicSlugs: ["node-basics"], totalHours: 6 },
    ],
    sections: [
      {
        title: "Getting Started",
        summary: "Introductory topics",
        orderIndex: 0,
        topics: [
          { slug: "intro-js", title: "Intro to JS", summary: "Variables, types", estimatedHours: 4, difficulty: 1, miniProject: null, selfCheck: null, resources: [] },
          { slug: "dom", title: "DOM Basics", summary: "Manipulating DOM", estimatedHours: 2, difficulty: 1, miniProject: null, selfCheck: null, resources: [] },
        ],
      },
      {
        title: "Backend Basics",
        summary: "Node and servers",
        orderIndex: 1,
        topics: [
          { slug: "node-basics", title: "Node.js Basics", summary: "Server-side JS", estimatedHours: 6, difficulty: 2, miniProject: null, selfCheck: null, resources: [] },
        ],
      },
    ],
  };

  const buf = await generateRoadmapPdf(input as any);
  await fs.writeFile("/workspaces/InternHack/test-roadmap.pdf", buf);
  console.log("Wrote /workspaces/InternHack/test-roadmap.pdf");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

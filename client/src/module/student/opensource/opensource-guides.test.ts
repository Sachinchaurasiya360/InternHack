import { describe, expect, it } from "vitest";
import openSourceGuide from "./data/open-source-guide.json";
import gitCheatsheet from "./data/git-cheatsheet.json";
import cicdGuide from "./data/cicd-guide.json";
import codebaseGuide from "./data/codebase-guide.json";
import gsocProposalGuide from "./data/gsoc-proposal-guide.json";
import hackathonGuide from "./data/hackathon-guide.json";
import communicationTemplates from "./data/communication-templates.json";

interface GuideStep {
  id: string;
  title: string;
  estimatedMinutes: number;
}

interface RawGuide {
  [key: string]: unknown;
}

function getSteps(data: RawGuide, key: string): GuideStep[] {
  const arr = data[key];
  if (!Array.isArray(arr)) return [];
  return arr as GuideStep[];
}

interface GuideEntry {
  name: string;
  key: string;
  steps: GuideStep[];
}

const GUIDES: GuideEntry[] = [
  { name: "Open Source Guide", key: "openSourceRoadmap", steps: getSteps(openSourceGuide as RawGuide, "openSourceRoadmap") },
  { name: "Git Cheatsheet", key: "gitCheatsheet", steps: getSteps(gitCheatsheet as RawGuide, "gitCheatsheet") },
  { name: "CI/CD Guide", key: "cicdGuide", steps: getSteps(cicdGuide as RawGuide, "cicdGuide") },
  { name: "Codebase Guide", key: "codebaseGuide", steps: getSteps(codebaseGuide as RawGuide, "codebaseGuide") },
  { name: "GSoC Proposal Guide", key: "gsocProposalRoadmap", steps: getSteps(gsocProposalGuide as RawGuide, "gsocProposalRoadmap") },
  { name: "Hackathon Guide", key: "hackathonGuide", steps: getSteps(hackathonGuide as RawGuide, "hackathonGuide") },
  { name: "Communication Templates", key: "communicationGuide", steps: getSteps(communicationTemplates as RawGuide, "communicationGuide") },
];

describe("Open Source Guides — structural schema validation", () => {
  describe("each guide has a non-empty steps array", () => {
    for (const guide of GUIDES) {
      it(`${guide.name} has a non-empty array at key "${guide.key}"`, () => {
        expect(Array.isArray(guide.steps)).toBe(true);
        expect(guide.steps.length).toBeGreaterThan(0);
      });
    }
  });

  describe("each step has a valid id", () => {
    for (const guide of GUIDES) {
      if (!Array.isArray(guide.steps) || guide.steps.length === 0) continue;

      it(`${guide.name}: every step has a non-empty string id`, () => {
        for (const step of guide.steps) {
          expect(typeof step.id).toBe("string");
          expect(step.id.length).toBeGreaterThan(0);
        }
      });
    }
  });

  describe("each step has a non-empty title", () => {
    for (const guide of GUIDES) {
      if (guide.steps.length === 0) continue;

      it(`${guide.name}: every step has a non-empty title`, () => {
        for (const step of guide.steps) {
          expect(typeof step.title).toBe("string");
          expect(step.title.trim().length).toBeGreaterThan(0);
        }
      });
    }
  });

  describe("each step has a valid estimatedMinutes", () => {
    for (const guide of GUIDES) {
      if (guide.steps.length === 0) continue;

      it(`${guide.name}: every step has a valid estimatedMinutes number`, () => {
        for (const step of guide.steps) {
          expect(typeof step.estimatedMinutes).toBe("number");
          expect(Number.isFinite(step.estimatedMinutes)).toBe(true);
          expect(step.estimatedMinutes).toBeGreaterThan(0);
        }
      });
    }
  });

  describe("step IDs are unique across all guides", () => {
    it("no duplicate step IDs across any guide", () => {
      const idRegistry = new Map<string, string[]>();

      for (const guide of GUIDES) {
        for (const step of guide.steps) {
          if (!step.id) continue;
          const existing = idRegistry.get(step.id) ?? [];
          existing.push(guide.name);
          idRegistry.set(step.id, existing);
        }
      }

      const duplicates = Array.from(idRegistry.entries()).filter(
        ([, guides]) => guides.length > 1,
      );

      if (duplicates.length > 0) {
        const message = duplicates
          .map(([id, guides]) => `"${id}" appears in: ${guides.join(", ")}`)
          .join("\n");
        expect.fail(`Duplicate step IDs found:\n${message}`);
      }
    });
  });
});

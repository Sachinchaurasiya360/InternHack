import firstPrData from "./data/open-source-guide.json";
import gitData from "./data/git-cheatsheet.json";
import gsocData from "./data/gsoc-proposal-guide.json";
import cicdData from "./data/cicd-guide.json";
import codebaseData from "./data/codebase-guide.json";
import communicationData from "./data/communication-templates.json";

export interface OpenSourceGuideStep {
  step: number;
  id: string;
  title: string;
  description: string;
  estimatedMinutes?: number;
}

export interface OpenSourceGuideDefinition {
  id: string;
  title: string;
  storageKey: string;
  basePath: string;
  steps: OpenSourceGuideStep[];
  usesServerProgress?: boolean;
}

export interface GuideProgressMeta {
  stepId: string;
  updatedAt: number;
}

const metaKey = (storageKey: string) => `${storageKey}-meta`;

export const OPEN_SOURCE_GUIDES: OpenSourceGuideDefinition[] = [
  {
    id: "first-pr",
    title: "First PR Roadmap",
    storageKey: "first-pr-roadmap-completed",
    basePath: "/student/opensource/first-pr",
    steps: firstPrData.openSourceRoadmap as OpenSourceGuideStep[],
    usesServerProgress: true,
  },
  {
    id: "git-guide",
    title: "Git Cheatsheet",
    storageKey: "git-cheatsheet-completed",
    basePath: "/student/opensource/git-guide",
    steps: gitData.gitCheatsheet as OpenSourceGuideStep[],
  },
  {
    id: "gsoc-proposal",
    title: "GSoC Proposal Guide",
    storageKey: "gsoc-proposal-roadmap-completed",
    basePath: "/student/opensource/gsoc-proposal",
    steps: gsocData.gsocProposalRoadmap as OpenSourceGuideStep[],
  },
  {
    id: "cicd",
    title: "CI/CD Basics",
    storageKey: "cicd-guide-completed",
    basePath: "/student/opensource/cicd",
    steps: cicdData.cicdGuide as OpenSourceGuideStep[],
  },
  {
    id: "read-codebase",
    title: "Read a Codebase",
    storageKey: "read-codebase-completed",
    basePath: "/student/opensource/read-codebase",
    steps: codebaseData.codebaseGuide as OpenSourceGuideStep[],
  },
  {
    id: "communication",
    title: "Communication Templates",
    storageKey: "comm-templates-completed",
    basePath: "/student/opensource/communication",
    steps: communicationData.communicationGuide as OpenSourceGuideStep[],
  },
];

export function readGuideCompletedIds(storageKey: string): string[] {
  try {
    const stored = localStorage.getItem(storageKey);
    const parsed = stored ? JSON.parse(stored) : [];
    return Array.isArray(parsed) ? parsed.filter((id): id is string => typeof id === "string") : [];
  } catch {
    return [];
  }
}

export function readGuideProgressMeta(storageKey: string): GuideProgressMeta | null {
  try {
    const stored = localStorage.getItem(metaKey(storageKey));
    const parsed = stored ? JSON.parse(stored) : null;
    if (
      parsed &&
      typeof parsed.stepId === "string" &&
      typeof parsed.updatedAt === "number"
    ) {
      return parsed;
    }
  } catch {
    return null;
  }

  return null;
}

export function markGuideProgressTouched(storageKey: string, stepId: string) {
  try {
    localStorage.setItem(
      metaKey(storageKey),
      JSON.stringify({ stepId, updatedAt: Date.now() }),
    );
  } catch {
    /* progress recency is a convenience hint */
  }
}

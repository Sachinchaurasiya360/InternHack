import firstPrData from "./data/open-source-guide.json";
import gitData from "./data/git-cheatsheet.json";
import communicationData from "./data/communication-templates.json";
import codebaseData from "./data/codebase-guide.json";
import cicdData from "./data/cicd-guide.json";
import gsocProposalData from "./data/gsoc-proposal-guide.json";

type GuideStep = {
  id: string;
  estimatedMinutes?: number;
};

export type LearningPathItemSlug =
  | "first-pr"
  | "git-guide"
  | "communication"
  | "repo-discovery"
  | "read-codebase"
  | "cicd"
  | "gsoc-proposal"
  | "gsoc-orgs"
  | "github-oauth"
  | "leaderboard"
  | "mentor-program";

export type LearningPathId = "first-contributor" | "gsoc-ready" | "oss-regular";

export type LearningPathItem = {
  slug: LearningPathItemSlug;
  title: string;
  description: string;
  href: string;
  estimatedMinutes: number;
  kind: "guide" | "milestone";
  completion:
    | { type: "first-pr"; totalSteps: number }
    | { type: "localStorageSet"; storageKey: string; totalSteps: number }
    | { type: "milestone"; milestone: LearningPathItemSlug };
};

export type LearningPath = {
  id: LearningPathId;
  title: string;
  description: string;
  estimatedMinutes: number;
  slugs: LearningPathItemSlug[];
  items: LearningPathItem[];
};

export const LEARNING_PATH_SELECTED_KEY = "selectedPath";
export const LEARNING_PATH_MILESTONES_KEY = "learningPathMilestones";
export const LEARNING_PATH_PROGRESS_EVENT = "learning-path-progress";

const GUIDE_STORAGE_KEYS = {
  git: "git-cheatsheet-completed",
  communication: "comm-templates-completed",
  codebase: "read-codebase-completed",
  cicd: "cicd-guide-completed",
  gsocProposal: "gsoc-proposal-roadmap-completed",
} as const;

function sumMinutes(steps: GuideStep[]) {
  return steps.reduce((sum, step) => sum + (step.estimatedMinutes ?? 0), 0);
}

const firstPrSteps = firstPrData.openSourceRoadmap as GuideStep[];
const gitSteps = gitData.gitCheatsheet as GuideStep[];
const communicationSteps = communicationData.communicationGuide as GuideStep[];
const codebaseSteps = codebaseData.codebaseGuide as GuideStep[];
const cicdSteps = cicdData.cicdGuide as GuideStep[];
const gsocProposalSteps = gsocProposalData.gsocProposalRoadmap as GuideStep[];

const ITEMS: Record<LearningPathItemSlug, LearningPathItem> = {
  "first-pr": {
    slug: "first-pr",
    title: "First PR Roadmap",
    description: "Complete the contributor workflow from issue to merged pull request.",
    href: "/student/opensource/first-pr",
    estimatedMinutes: sumMinutes(firstPrSteps),
    kind: "guide",
    completion: { type: "first-pr", totalSteps: firstPrSteps.length },
  },
  "git-guide": {
    slug: "git-guide",
    title: "Git Cheatsheet",
    description: "Practice the Git commands and PR hygiene used by open-source contributors.",
    href: "/student/opensource/git-guide",
    estimatedMinutes: sumMinutes(gitSteps),
    kind: "guide",
    completion: { type: "localStorageSet", storageKey: GUIDE_STORAGE_KEYS.git, totalSteps: gitSteps.length },
  },
  communication: {
    slug: "communication",
    title: "Communication Templates",
    description: "Use maintainer-friendly templates for issues, PRs, and review replies.",
    href: "/student/opensource/communication",
    estimatedMinutes: sumMinutes(communicationSteps),
    kind: "guide",
    completion: { type: "localStorageSet", storageKey: GUIDE_STORAGE_KEYS.communication, totalSteps: communicationSteps.length },
  },
  "repo-discovery": {
    slug: "repo-discovery",
    title: "Repo Discovery",
    description: "Find beginner-friendly repositories that match your skills.",
    href: "/student/opensource",
    estimatedMinutes: 20,
    kind: "milestone",
    completion: { type: "milestone", milestone: "repo-discovery" },
  },
  "read-codebase": {
    slug: "read-codebase",
    title: "Read Codebase Guide",
    description: "Build a repeatable method for navigating unfamiliar projects.",
    href: "/student/opensource/read-codebase",
    estimatedMinutes: sumMinutes(codebaseSteps),
    kind: "guide",
    completion: { type: "localStorageSet", storageKey: GUIDE_STORAGE_KEYS.codebase, totalSteps: codebaseSteps.length },
  },
  cicd: {
    slug: "cicd",
    title: "CI/CD Guide",
    description: "Understand failing checks, CI logs, and contribution pipelines.",
    href: "/student/opensource/cicd",
    estimatedMinutes: sumMinutes(cicdSteps),
    kind: "guide",
    completion: { type: "localStorageSet", storageKey: GUIDE_STORAGE_KEYS.cicd, totalSteps: cicdSteps.length },
  },
  "gsoc-proposal": {
    slug: "gsoc-proposal",
    title: "GSoC Proposal Guide",
    description: "Plan, write, and review a strong GSoC proposal.",
    href: "/student/opensource/gsoc-proposal",
    estimatedMinutes: sumMinutes(gsocProposalSteps),
    kind: "guide",
    completion: { type: "localStorageSet", storageKey: GUIDE_STORAGE_KEYS.gsocProposal, totalSteps: gsocProposalSteps.length },
  },
  "gsoc-orgs": {
    slug: "gsoc-orgs",
    title: "GSoC Orgs",
    description: "Shortlist organizations and project ideas for your proposal.",
    href: "/student/opensource/gsoc",
    estimatedMinutes: 30,
    kind: "milestone",
    completion: { type: "milestone", milestone: "gsoc-orgs" },
  },
  "github-oauth": {
    slug: "github-oauth",
    title: "GitHub OAuth Connect",
    description: "Connect your GitHub profile so contribution signals can power your profile.",
    href: "/student/profile",
    estimatedMinutes: 10,
    kind: "milestone",
    completion: { type: "milestone", milestone: "github-oauth" },
  },
  leaderboard: {
    slug: "leaderboard",
    title: "Leaderboard",
    description: "Review contribution analytics and benchmark your open-source activity.",
    href: "/student/opensource/analytics",
    estimatedMinutes: 15,
    kind: "milestone",
    completion: { type: "milestone", milestone: "leaderboard" },
  },
  "mentor-program": {
    slug: "mentor-program",
    title: "Mentor Program",
    description: "Track open-source programs and mentor-led opportunities.",
    href: "/student/opensource/programs",
    estimatedMinutes: 25,
    kind: "milestone",
    completion: { type: "milestone", milestone: "mentor-program" },
  },
};

function buildPath(id: LearningPathId, title: string, description: string, slugs: LearningPathItemSlug[]): LearningPath {
  const items = slugs.map((slug) => ITEMS[slug]);
  return {
    id,
    title,
    description,
    slugs,
    items,
    estimatedMinutes: items.reduce((sum, item) => sum + item.estimatedMinutes, 0),
  };
}

export const LEARNING_PATHS: LearningPath[] = [
  buildPath(
    "first-contributor",
    "First Contributor (Beginner)",
    "A sequential starter track from contribution basics to choosing your first repository.",
    ["first-pr", "git-guide", "communication", "repo-discovery"],
  ),
  buildPath(
    "gsoc-ready",
    "GSoC Ready (Intermediate)",
    "A preparation path for reading projects, understanding pipelines, and drafting proposals.",
    ["first-pr", "read-codebase", "cicd", "gsoc-proposal", "gsoc-orgs"],
  ),
  buildPath(
    "oss-regular",
    "OSS Regular (Advanced)",
    "A full open-source routine covering every guide, profile connection, analytics, and programs.",
    ["first-pr", "git-guide", "communication", "read-codebase", "cicd", "gsoc-proposal", "github-oauth", "leaderboard", "mentor-program"],
  ),
];

export function getLearningPathById(id: string | null): LearningPath {
  return LEARNING_PATHS.find((path) => path.id === id) ?? LEARNING_PATHS[0];
}

export function notifyLearningPathProgressChanged() {
  window.dispatchEvent(new Event(LEARNING_PATH_PROGRESS_EVENT));
}

export function readStoredSet(storageKey: string): Set<string> {
  try {
    const parsed = JSON.parse(localStorage.getItem(storageKey) ?? "[]");
    return Array.isArray(parsed) ? new Set(parsed.filter((item): item is string => typeof item === "string")) : new Set();
  } catch {
    return new Set();
  }
}

export function readLearningPathMilestones(): Set<string> {
  return readStoredSet(LEARNING_PATH_MILESTONES_KEY);
}

export function markLearningPathMilestone(slug: LearningPathItemSlug) {
  const milestones = readLearningPathMilestones();
  if (milestones.has(slug)) return;
  milestones.add(slug);
  try {
    localStorage.setItem(LEARNING_PATH_MILESTONES_KEY, JSON.stringify([...milestones]));
  } catch {
    return;
  }
  notifyLearningPathProgressChanged();
}

export function inferLearningPathId(pathname: string): LearningPathId | null {
  if (pathname.includes("/gsoc") || pathname.includes("/read-codebase") || pathname.includes("/cicd")) return "gsoc-ready";
  if (pathname.includes("/analytics") || pathname.includes("/programs") || pathname.includes("/profile")) return "oss-regular";
  if (pathname.includes("/opensource")) return "first-contributor";
  return null;
}

export function isLearningPathItemComplete(
  item: LearningPathItem,
  firstPrCompletedStepIds: Set<string>,
  milestones: Set<string>,
) {
  if (item.completion.type === "first-pr") return firstPrCompletedStepIds.size >= item.completion.totalSteps;
  if (item.completion.type === "milestone") return milestones.has(item.completion.milestone);
  return readStoredSet(item.completion.storageKey).size >= item.completion.totalSteps;
}

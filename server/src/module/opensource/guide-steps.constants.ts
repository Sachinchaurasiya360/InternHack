/**
 * Canonical step IDs for each open-source guide, mirrored from the client guide
 * definitions in `client/src/module/student/opensource/data/*.json`.
 *
 * These are the source of truth the server uses to authorize certificate
 * issuance. Certificates are self-attested (a user checks off steps), so the
 * server cannot prove real effort, but it MUST verify that the exact set of
 * documented steps has been recorded before issuing. Counting the length of a
 * client-supplied array is not enough: a caller can submit arbitrary strings to
 * inflate the count. Validating against these IDs closes that bypass.
 *
 * If a guide's steps change on the client, update the matching list here.
 */

// open-source-guide.json -> guideData.openSourceRoadmap (stored in StudentFirstPrProgress)
export const FIRST_PR_STEP_IDS: readonly string[] = [
  "understanding-open-source",
  "preparing-environment",
  "understanding-git-github",
  "finding-projects",
  "start-small",
  "reading-project-docs",
  "first-contribution",
  "code-reviews",
  "real-contributions",
];

// guideSlug (storageKey) -> canonical step IDs (stored in GuideProgress)
export const GUIDE_STEP_IDS: Record<string, readonly string[]> = {
  "git-cheatsheet-completed": [
    "fork-clone-workflow",
    "branching-strategy",
    "stage-commit",
    "sync-upstream",
    "push-and-pr",
    "handle-conflicts",
    "advanced-git",
  ],
  "read-codebase-completed": [
    "mental-model",
    "folder-structure",
    "trace-the-flow",
    "read-tests-first",
    "understand-data-model",
    "debugging-as-reading",
    "common-patterns",
    "git-blame-history",
  ],
  "hackathon-guide-completed": [
    "winning-first-hackathon",
    "picking-the-right-project",
    "rapid-prototyping-stacks",
    "building-a-compelling-demo",
    "pitching-to-judges",
    "finding-teammates",
    "overnight-survival",
    "portfolio-value",
    "hackathon-calendar",
    "post-hackathon",
  ],
  "comm-templates-completed": [
    "claiming-an-issue",
    "writing-pr-description",
    "responding-to-review",
    "writing-bug-reports",
    "proposing-features",
    "asking-for-help",
  ],
  "cicd-guide-completed": [
    "what-is-cicd",
    "lint-errors",
    "test-failures",
    "type-errors",
    "build-errors",
    "reading-ci-logs",
  ],
  "gsoc-proposal-roadmap-completed": [
    "understanding-gsoc",
    "choosing-organization",
    "understanding-project",
    "communicating-with-community",
    "early-contributions",
    "proposal-structure",
    "writing-proposal",
    "common-mistakes",
    "refining-submitting",
  ],
};

/** Certificate guide name (sent by the client) -> where its progress lives. */
export const CERTIFICATE_GUIDES: Record<
  string,
  { type: "first-pr" } | { type: "guide"; slug: string }
> = {
  "First Pull Request Roadmap": { type: "first-pr" },
  "Git for Open Source": { type: "guide", slug: "git-cheatsheet-completed" },
  "Reading a Codebase": { type: "guide", slug: "read-codebase-completed" },
  "Hackathon Preparation Guide": { type: "guide", slug: "hackathon-guide-completed" },
  "Communication Templates": { type: "guide", slug: "comm-templates-completed" },
  "CI/CD Basics": { type: "guide", slug: "cicd-guide-completed" },
  "GSoC Proposal Guide": { type: "guide", slug: "gsoc-proposal-roadmap-completed" },
};

/** True only if every canonical step id is present in the completed set. */
export function hasCompletedAllSteps(
  requiredStepIds: readonly string[],
  completedStepIds: string[],
): boolean {
  const done = new Set(completedStepIds);
  return requiredStepIds.every((id) => done.has(id));
}

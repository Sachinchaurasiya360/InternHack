import GuideListPage, { type GuideProgressAdapter } from "./components/GuideListPage";
import { fetchFirstPRProgress, patchFirstPRProgress } from "./api/opensource.api";
import guideData from "./data/open-source-guide.json";

interface Step {
  step: number;
  id: string;
  title: string;
  description: string;
  estimatedMinutes?: number;
}

const STEPS: Step[] = guideData.openSourceRoadmap as Step[];

// First PR progress is server-backed per step, unlike the other guides which
// sync a full id array through the guide-progress API.
const firstPrAdapter: GuideProgressAdapter = {
  load: fetchFirstPRProgress,
  persist: (stepId, completed) => patchFirstPRProgress(stepId, completed),
  reset: (completedIds) => Promise.all(completedIds.map((id) => patchFirstPRProgress(id, false))),
};

export default function FirstPRRoadmapPage() {
  return (
    <GuideListPage
      steps={STEPS}
      adapter={firstPrAdapter}
      basePath="/student/opensource/first-pr"
      eyebrow="opensource / first-pr"
      title="Your first contribution."
      titleAccent="contribution."
      subtitle="A step-by-step journey from zero to your first merged pull request on GitHub."
      seoTitle="First Pull Request Guide - Open Source for Beginners"
      seoDescription="Step-by-step roadmap to making your first pull request on GitHub. Learn git workflow, finding issues, and contributing to open source projects."
      seoKeywords="first pull request, open source contribution, GitHub beginner, git workflow, contribute to open source"
      ogImage="/og/og-first-pr.png"
      certificateGuideName="First PR Roadmap"
      certificateName="First Pull Request Roadmap"
      completionHeadline="You're an open source contributor!"
      completionSubtitle={`You've completed all ${STEPS.length} steps. Time to find your next issue!`}
      completionAccentWord="contributor"
    />
  );
}

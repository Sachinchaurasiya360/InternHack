import GuideListPage from "./components/GuideListPage";
import GSoCProposalAIReview from "./GSoCProposalAIReview";
import guideData from "./data/gsoc-proposal-guide.json";

interface Step {
  step: number;
  id: string;
  title: string;
  description: string;
  estimatedMinutes?: number;
  level: string;
}

const STEPS: Step[] = guideData.gsocProposalRoadmap as Step[];

export default function GSoCProposalPage() {
  return (
    <GuideListPage
      steps={STEPS}
      storageKey="gsoc-proposal-roadmap-completed"
      basePath="/student/opensource/gsoc-proposal"
      title="GSoC Proposal Guide"
      titleAccent="Proposal"
      subtitle="A mentor-guided journey from understanding GSoC to writing a proposal that gets accepted"
      seoTitle="GSoC Proposal Writing Guide - Step by Step"
      seoDescription="Learn how to write a winning Google Summer of Code proposal. Covers project selection, timeline planning, and proposal structure."
      seoKeywords="GSoC proposal guide, Google Summer of Code, GSoC tips, open source proposal, GSoC application"
      ogImage="/og/og-gsoc-proposal.png"
      certificateGuideName="GSoC Proposal Guide"
      completionHeadline="You've completed the guide!"
      completionSubtitle="Now start writing your proposal and share a draft with your mentor at least 7 days before the deadline."
      completionAccentWord="guide"
    >
      <GSoCProposalAIReview />
    </GuideListPage>
  );
}

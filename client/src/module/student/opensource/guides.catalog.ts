import firstPrData from "./data/open-source-guide.json";
import gitData from "./data/git-cheatsheet.json";
import communicationData from "./data/communication-templates.json";
import codebaseData from "./data/codebase-guide.json";
import cicdData from "./data/cicd-guide.json";
import gsocProposalData from "./data/gsoc-proposal-guide.json";
import hackathonData from "./data/hackathon-guide.json";

type CatalogStep = { estimatedMinutes?: number };

export interface GuideCatalogEntry {
  slug: string;
  href: string;
  title: string;
  desc: string;
  steps: number;
  minutes: number;
}

function fromSteps(
  slug: string,
  title: string,
  desc: string,
  steps: CatalogStep[],
): GuideCatalogEntry {
  return {
    slug,
    href: `/student/opensource/${slug}`,
    title,
    desc,
    steps: steps.length,
    minutes: steps.reduce((sum, s) => sum + (s.estimatedMinutes ?? 0), 0),
  };
}

/** Every guide in the open source section, with counts derived from the guide data. */
export const GUIDE_CATALOG: GuideCatalogEntry[] = [
  fromSteps("first-pr", "First PR Roadmap", "From zero to your first merged pull request.", firstPrData.openSourceRoadmap),
  fromSteps("git-guide", "Git for Open Source", "Fork-to-PR workflow with copy-paste commands.", gitData.gitCheatsheet),
  fromSteps("communication", "Communication Templates", "Issues, PRs, reviews, and bug reports.", communicationData.communicationGuide),
  fromSteps("read-codebase", "Read a Codebase", "Navigate unfamiliar projects with a repeatable method.", codebaseData.codebaseGuide),
  fromSteps("cicd", "CI/CD Basics", "Fix failing lint, test, and build checks.", cicdData.cicdGuide),
  fromSteps("gsoc-proposal", "GSoC Proposal Guide", "Plan, write, and review a winning proposal.", gsocProposalData.gsocProposalRoadmap),
  fromSteps("hackathon-prep", "Hackathon Prep", "Pick, build, demo, and pitch under pressure.", hackathonData.hackathonGuide),
];

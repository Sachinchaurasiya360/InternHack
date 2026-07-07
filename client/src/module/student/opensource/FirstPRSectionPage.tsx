import GuideSectionPage from "./components/GuideSectionPage";
import { firstPrAdapter } from "./first-pr.adapter";
import guideData from "./data/open-source-guide.json";

interface Resource {
  title: string;
  url: string;
  type: string;
}
interface Command {
  label: string;
  code: string;
}
interface Step {
  step: number;
  id: string;
  title: string;
  description: string;
  estimatedMinutes?: number;
  mentor_guidance: string;
  details: string[];
  commands: Command[];
  resources: Resource[];
  tips: string[];
  videoUrl?: string;
}

const STEPS: Step[] = guideData.openSourceRoadmap as Step[];

export default function FirstPRSectionPage() {
  return (
    <GuideSectionPage
      steps={STEPS}
      adapter={firstPrAdapter}
      basePath="/student/opensource/first-pr"
      seoSuffix="First PR Guide"
    />
  );
}

import GuideSectionPage from "./components/GuideSectionPage";
import data from "./data/hackathon-guide.json";

export default function HackathonGuideSectionPage() {
  return (
    <GuideSectionPage
      steps={data.hackathonGuide}
      storageKey="hackathon-guide-completed"
      basePath="/student/opensource/hackathon-prep"
      seoSuffix="Hackathon Prep Guide"
    />
  );
}

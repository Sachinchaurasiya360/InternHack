import GuideSectionPage from "./components/GuideSectionPage";
import data from "./data/communication-templates.json";

export default function CommTemplatesSectionPage() {
  return (
    <GuideSectionPage
      steps={data.communicationGuide}
      storageKey="comm-templates-completed"
      basePath="/student/opensource/communication"
      seoSuffix="Communication Guide"
    />
  );
}

import GuideSectionPage from "./components/GuideSectionPage";
import data from "./data/cicd-guide.json";

export default function CICDGuideSectionPage() {
  return (
    <GuideSectionPage
      steps={data.cicdGuide}
      storageKey="cicd-guide-completed"
      basePath="/student/opensource/cicd"
      seoSuffix="CI/CD Guide"
    />
  );
}

import GuideSectionPage from "./components/GuideSectionPage";
import data from "./data/codebase-guide.json";

export default function ReadCodebaseSectionPage() {
  return (
    <GuideSectionPage
      steps={data.codebaseGuide}
      storageKey="read-codebase-completed"
      basePath="/student/opensource/read-codebase"
      seoSuffix="Codebase Guide"
    />
  );
}

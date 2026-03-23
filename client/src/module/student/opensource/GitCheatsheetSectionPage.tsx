import GuideSectionPage from "./components/GuideSectionPage";
import data from "./data/git-cheatsheet.json";

export default function GitCheatsheetSectionPage() {
  return (
    <GuideSectionPage
      steps={data.gitCheatsheet}
      storageKey="git-cheatsheet-completed"
      basePath="/student/opensource/git-guide"
      seoSuffix="Git Cheatsheet"
    />
  );
}

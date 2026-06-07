import { GitBranch } from "lucide-react";
import GuideListPage from "./components/GuideListPage";
import data from "./data/git-cheatsheet.json";

export default function GitCheatsheetPage() {
  return (
    <GuideListPage
      steps={data.gitCheatsheet}
      storageKey="git-cheatsheet-completed"
      basePath="/student/opensource/git-guide"
      title="Git for Open Source"
      titleAccent="Open Source"
      subtitle="The complete fork-to-PR workflow with every command you need to contribute, zero fluff"
      seoTitle="Git for Open Source - Interactive Cheatsheet"
      seoDescription="Master the Git workflow for open source: fork, clone, branch, commit, rebase, resolve conflicts, and submit pull requests. With copy-paste commands and real examples."
      seoKeywords="git open source, fork clone workflow, git cheatsheet, git rebase, merge conflicts, pull request git"
      icon={GitBranch}
      iconColor="text-orange-500"
    />
  );
}

import { MessageSquare } from "lucide-react";
import GuideListPage from "./components/GuideListPage";
import data from "./data/communication-templates.json";

export default function CommTemplatesPage() {
  return (
    <GuideListPage
      steps={data.communicationGuide}
      storageKey="comm-templates-completed"
      basePath="/student/opensource/communication"
      title="Communication Templates"
      titleAccent="Templates"
      subtitle="Ready-to-use templates for issues, PRs, code reviews, and community interactions written by maintainers"
      seoTitle="Open Source Communication Templates"
      seoDescription="Copy-paste templates for claiming issues, writing PR descriptions, responding to code reviews, filing bug reports, and proposing features in open source projects."
      seoKeywords="open source communication, PR description template, bug report template, issue comment, code review response"
      icon={MessageSquare}
      iconColor="text-violet-500"
    />
  );
}

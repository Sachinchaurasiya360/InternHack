import { BookOpen } from "lucide-react";
import GuideListPage from "./components/GuideListPage";
import data from "./data/codebase-guide.json";

export default function ReadCodebasePage() {
  return (
    <GuideListPage
      steps={data.codebaseGuide}
      storageKey="read-codebase-completed"
      basePath="/student/opensource/read-codebase"
      title="Reading a Codebase"
      titleAccent="Codebase"
      subtitle="A senior engineer's systematic approach to understanding any unfamiliar codebase in hours, not weeks"
      seoTitle="How to Read a Codebase - Open Source Guide"
      seoDescription="Learn how to navigate and understand any unfamiliar codebase systematically. Trace features, read tests, understand data models, and use debugging as a reading tool."
      seoKeywords="read codebase, understand code, navigate code, code reading, open source contribution"
      icon={BookOpen}
      iconColor="text-emerald-500"
    />
  );
}

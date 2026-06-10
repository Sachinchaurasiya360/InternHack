import { Rocket } from "lucide-react";
import GuideListPage from "./components/GuideListPage";
import data from "./data/hackathon-guide.json";

export default function HackathonGuidePage() {
  return (
    <GuideListPage
      steps={data.hackathonGuide}
      storageKey="hackathon-guide-completed"
      basePath="/student/opensource/hackathon-prep"
      title="Hackathon Preparation Guide"
      titleAccent="Hackathon"
      subtitle="Learn how to win your first hackathon: pick the right project, build fast, demo confidently, and turn your project into a career asset"
      seoTitle="Hackathon Preparation Guide for Students"
      seoDescription="Complete hackathon prep guide: find teammates, pick the right project, rapid prototyping stacks, build a compelling demo, pitch to judges, and turn your project into a portfolio piece."
      seoKeywords="hackathon guide, hackathon prep, winning hackathon, hackathon demo, hackathon pitching, hackathon tips, student hackathon"
      ogImage="/og/og-hackathon.png"
      icon={Rocket}
      iconColor="text-orange-500"
    />
  );
}

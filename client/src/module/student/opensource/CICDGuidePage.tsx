import { Settings } from "lucide-react";
import GuideListPage from "./components/GuideListPage";
import data from "./data/cicd-guide.json";

export default function CICDGuidePage() {
  return (
    <GuideListPage
      steps={data.cicdGuide}
      storageKey="cicd-guide-completed"
      basePath="/student/opensource/cicd"
      title="CI/CD Basics"
      titleAccent="CI/CD"
      subtitle="Why your PR has a red X, what it means, and how to fix it. Lint errors, test failures, build errors, and more"
      seoTitle="CI/CD Basics for Open Source Contributors"
      seoDescription="Learn to fix CI/CD failures in open source: lint errors, test failures, type check errors, and build errors. Read CI logs and debug pipeline issues like a pro."
      seoKeywords="CI/CD open source, fix CI failure, lint errors, test failure, GitHub Actions, build errors"
      icon={Settings}
      iconColor="text-cyan-500"
    />
  );
}

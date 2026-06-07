import { useState } from "react";

const PROGRESS_KEY = "oss_guide_progress";
const DISMISS_KEY = "oss_guide_dismissed";

interface GuideProgress {
  slug: string;
  title: string;
  step: number;
  totalSteps: number;
  stepTitle: string;
  basePath: string;
  sectionSlug?: string;
}

const GUIDE_META: Record<string, { title: string; basePath: string }> = {
  "first-pr": { title: "Your First Contribution", basePath: "/student/opensource/first-pr" },
  "git-guide": { title: "Git for Open Source", basePath: "/student/opensource/git-guide" },
  "gsoc-proposal": { title: "GSoC Proposal Guide", basePath: "/student/opensource/gsoc-proposal" },
  "read-codebase": { title: "Read a Codebase", basePath: "/student/opensource/read-codebase" },
  "communication": { title: "Communication Templates", basePath: "/student/opensource/communication" },
  "cicd": { title: "CI / CD Basics", basePath: "/student/opensource/cicd" },
};

export function useGuideProgress() {
  const [progress] = useState<GuideProgress[]>(() => {
    try {
      const stored = localStorage.getItem(PROGRESS_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  const saveProgress = (slug: string, step: number, totalSteps: number, stepTitle: string, sectionSlug?: string) => {
    const meta = GUIDE_META[slug];
    if (!meta) return;
    try {
      const existing: GuideProgress[] = JSON.parse(localStorage.getItem(PROGRESS_KEY) || "[]");
      const updated: GuideProgress[] = [
        { slug, ...meta, step, totalSteps, stepTitle, sectionSlug },
        ...existing.filter((g: GuideProgress) => g.slug !== slug),
      ];
      localStorage.setItem(PROGRESS_KEY, JSON.stringify(updated));
    } catch { /* ignore */ }
  };

  const current: GuideProgress | null = (() => {
    if (progress.length === 0) return null;
    const dismissed = localStorage.getItem(DISMISS_KEY);
    if (dismissed) {
      try {
        const until = parseInt(dismissed, 10);
        if (Date.now() < until) return null;
        localStorage.removeItem(DISMISS_KEY);
      } catch {
        localStorage.removeItem(DISMISS_KEY);
      }
    }
    const inProgress = progress.filter((g) => g.step < g.totalSteps);
    return inProgress.length > 0 ? inProgress[0] : null;
  })();

  const dismiss = () => {
    try {
      localStorage.setItem(DISMISS_KEY, String(Date.now() + 24 * 60 * 60 * 1000));
    } catch { /* ignore */ }
  };

  return { current, saveProgress, dismiss };
}

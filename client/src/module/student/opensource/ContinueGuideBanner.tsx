import { useMemo, useState } from "react";
import { Link } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { ArrowRight, BookOpen, X } from "lucide-react";
import { useAuthStore } from "../../../lib/auth.store";
import { fetchFirstPRProgress } from "./api/opensource.api";
import {
  OPEN_SOURCE_GUIDES,
  readGuideCompletedIds,
  readGuideProgressMeta,
  type OpenSourceGuideDefinition,
} from "./guide-progress";

const DISMISS_KEY = "oss_continue_banner_dismissed_until";
const DISMISS_MS = 24 * 60 * 60 * 1000;

interface ResumeGuide {
  guide: OpenSourceGuideDefinition;
  currentStep: OpenSourceGuideDefinition["steps"][number];
  completedCount: number;
  updatedAt: number;
}

function getDismissedUntil() {
  try {
    return Number(localStorage.getItem(DISMISS_KEY) ?? 0);
  } catch {
    return 0;
  }
}

function buildResumeGuide(
  guide: OpenSourceGuideDefinition,
  completedIds: string[],
): ResumeGuide | null {
  const completed = new Set(completedIds);
  const completedCount = guide.steps.filter((step) => completed.has(step.id)).length;

  if (completedCount === 0 || completedCount >= guide.steps.length) {
    return null;
  }

  const meta = readGuideProgressMeta(guide.storageKey);
  const metaStep = meta ? guide.steps.find((step) => step.id === meta.stepId) : null;
  const currentStep = metaStep && !completed.has(metaStep.id)
    ? metaStep
    : guide.steps.find((step) => !completed.has(step.id));

  if (!currentStep) {
    return null;
  }

  return {
    guide,
    currentStep,
    completedCount,
    updatedAt: meta?.updatedAt ?? 0,
  };
}

export function ContinueGuideBanner() {
  const { user } = useAuthStore();
  const [now, setNow] = useState(() => Date.now());
  const [dismissedUntil, setDismissedUntil] = useState(getDismissedUntil);

  const firstPrQuery = useQuery({
    queryKey: ["opensource", "first-pr-progress", "continue-banner"],
    queryFn: fetchFirstPRProgress,
    enabled: user?.role === "STUDENT",
    staleTime: 2 * 60 * 1000,
    retry: false,
  });

  const resumeGuide = useMemo(() => {
    const candidates = OPEN_SOURCE_GUIDES
      .map((guide) => {
        const completedIds = guide.usesServerProgress
          ? firstPrQuery.data ?? []
          : readGuideCompletedIds(guide.storageKey);
        return buildResumeGuide(guide, completedIds);
      })
      .filter((guide): guide is ResumeGuide => Boolean(guide))
      .sort((a, b) => {
        if (b.updatedAt !== a.updatedAt) return b.updatedAt - a.updatedAt;
        return b.completedCount - a.completedCount;
      });

    return candidates[0] ?? null;
  }, [firstPrQuery.data]);

  if (!resumeGuide || now < dismissedUntil) {
    return null;
  }

  const handleDismiss = () => {
    const nextDismissedUntil = Date.now() + DISMISS_MS;
    setNow(Date.now());
    setDismissedUntil(nextDismissedUntil);
    try {
      localStorage.setItem(DISMISS_KEY, String(nextDismissedUntil));
    } catch {
      /* dismissing is optional state */
    }
  };

  return (
    <div className="sticky top-0 z-30 mb-5 rounded-md border border-lime-200 bg-lime-50/95 px-3 py-2 shadow-sm backdrop-blur dark:border-lime-900/70 dark:bg-lime-950/80">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex min-w-0 items-center gap-2 text-sm text-lime-950 dark:text-lime-100">
          <BookOpen className="h-4 w-4 shrink-0 text-lime-700 dark:text-lime-300" />
          <span className="truncate">
            <span className="font-semibold">Continue:</span>{" "}
            {resumeGuide.guide.title} - Step {resumeGuide.currentStep.step} of{" "}
            {resumeGuide.guide.steps.length}: {resumeGuide.currentStep.title}
          </span>
        </div>

        <div className="flex shrink-0 items-center gap-2 self-end sm:self-auto">
          <Link
            to={`${resumeGuide.guide.basePath}/${resumeGuide.currentStep.id}`}
            className="inline-flex items-center gap-1 rounded-md bg-lime-700 px-2.5 py-1.5 text-xs font-semibold text-white no-underline transition-colors hover:bg-lime-800 dark:bg-lime-500 dark:text-lime-950 dark:hover:bg-lime-400"
          >
            Continue
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
          <button
            type="button"
            onClick={handleDismiss}
            className="inline-flex h-7 w-7 items-center justify-center rounded-md text-lime-800 transition-colors hover:bg-lime-100 dark:text-lime-200 dark:hover:bg-lime-900"
            aria-label="Dismiss continue guide reminder"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

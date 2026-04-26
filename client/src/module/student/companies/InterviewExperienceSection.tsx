import { Link } from "react-router";
import { useQuery } from "@tanstack/react-query";
import {
  ArrowUp,
  Plus,
  MessageCircle,
  CheckCircle2,
  XCircle,
  Zap,
  ArrowUpRight,
} from "lucide-react";
import { queryKeys } from "../../../lib/query-keys";
import {
  getCompanyInterviewSummary,
  getCompanyTopQuestions,
  listExperiences,
} from "../interviews/interviews-api";
import type {
  InterviewCompanySummary,
  InterviewListResponse,
  InterviewTopQuestion,
} from "../../../lib/types";

function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-stone-500">
      <span className="h-1.5 w-1.5 bg-lime-400" />
      {children}
    </div>
  );
}

function formatPercent(v: number): string {
  return `${String(Math.round(v * 100))}%`;
}

interface Props {
  slug: string;
  companyName: string;
  canContribute: boolean;
  isInsideLayout: boolean;
}

export default function InterviewExperienceSection({
  slug,
  companyName,
  canContribute,
  isInsideLayout,
}: Props) {
  const { data: summary } = useQuery<InterviewCompanySummary>({
    queryKey: queryKeys.interviews.companySummary(slug),
    queryFn: () => getCompanyInterviewSummary(slug),
    staleTime: 5 * 60 * 1000,
  });

  const { data: topQuestionsData } = useQuery<{ questions: InterviewTopQuestion[] }>({
    queryKey: queryKeys.interviews.topQuestions(slug),
    queryFn: () => getCompanyTopQuestions(slug, 15),
    staleTime: 10 * 60 * 1000,
  });

  const { data: experiencesData, isLoading } = useQuery<InterviewListResponse>({
    queryKey: queryKeys.interviews.list({ companySlug: slug, sort: "upvotes", limit: 6 }),
    queryFn: () =>
      listExperiences({ companySlug: slug, sort: "upvotes", limit: 6, status: "APPROVED" }),
    staleTime: 5 * 60 * 1000,
  });

  const experiences = experiencesData?.experiences ?? [];
  const topQuestions = topQuestionsData?.questions ?? [];
  const sharePath = isInsideLayout
    ? `/student/interviews/share?company=${slug}`
    : `/student/interviews/share?company=${slug}`;
  const basePath = isInsideLayout ? "/student/interviews" : "/student/interviews";

  return (
    <div
      id="interviews"
      className="bg-white dark:bg-stone-900 rounded-md border border-stone-200 dark:border-white/10 p-6 sm:p-8 scroll-mt-24"
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5">
        <div className="flex items-center gap-3">
          <Kicker>interview experiences</Kicker>
          {summary && summary.total > 0 ? (
            <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
              {summary.total} total
            </span>
          ) : null}
        </div>
        {canContribute ? (
          <Link
            to={sharePath}
            className="inline-flex items-center gap-2 px-3 py-2 bg-stone-900 dark:bg-stone-50 text-stone-50 dark:text-stone-900 text-xs font-bold uppercase tracking-widest rounded-md hover:bg-stone-800 dark:hover:bg-stone-200 transition-colors cursor-pointer whitespace-nowrap no-underline"
          >
            <Plus className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Share</span> experience
          </Link>
        ) : null}
      </div>

      {/* Summary stats */}
      {summary && summary.total > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          <div className="border border-stone-200 dark:border-white/10 rounded-md p-3 bg-stone-50 dark:bg-stone-950">
            <div className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
              Experiences
            </div>
            <div className="text-xl font-bold text-stone-900 dark:text-stone-50 tabular-nums mt-1">
              {summary.total}
            </div>
          </div>
          <div className="border border-stone-200 dark:border-white/10 rounded-md p-3 bg-stone-50 dark:bg-stone-950">
            <div className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
              Selection rate
            </div>
            <div className="text-xl font-bold text-stone-900 dark:text-stone-50 tabular-nums mt-1">
              {summary.selectionRate !== null ? formatPercent(summary.selectionRate) : "-"}
            </div>
          </div>
          <div className="border border-stone-200 dark:border-white/10 rounded-md p-3 bg-stone-50 dark:bg-stone-950">
            <div className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
              Avg rounds
            </div>
            <div className="text-xl font-bold text-stone-900 dark:text-stone-50 tabular-nums mt-1">
              {summary.avgRounds !== null ? summary.avgRounds.toFixed(1) : "-"}
            </div>
          </div>
          <div className="border border-stone-200 dark:border-white/10 rounded-md p-3 bg-stone-50 dark:bg-stone-950">
            <div className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
              Most difficult
            </div>
            <div className="text-xl font-bold text-stone-900 dark:text-stone-50 mt-1">
              {summary.byDifficulty.sort((a, b) => b.count - a.count)[0]?.difficulty ?? "-"}
            </div>
          </div>
        </div>
      ) : null}

      {/* Top questions */}
      {topQuestions.length > 0 ? (
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <Zap className="w-4 h-4 text-lime-600 dark:text-lime-400" />
            <h3 className="text-sm font-semibold text-stone-900 dark:text-stone-50">
              Most-asked questions
            </h3>
          </div>
          <ol className="space-y-2 list-decimal list-inside">
            {topQuestions.slice(0, 10).map((q, i) => (
              <li key={i} className="text-sm text-stone-700 dark:text-stone-300 pl-1">
                <span className="leading-relaxed">{q.prompt}</span>
                <span className="ml-2 text-[10px] font-mono uppercase tracking-widest text-stone-500">
                  asked {q.count}x
                </span>
              </li>
            ))}
          </ol>
        </div>
      ) : null}

      {/* Experiences list */}
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="h-28 rounded-md bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-white/10 animate-pulse"
            />
          ))}
        </div>
      ) : experiences.length === 0 ? (
        <div className="py-14 text-center border border-dashed border-stone-300 dark:border-white/10 rounded-md">
          <div className="inline-flex flex-col items-center gap-3">
            <div className="w-12 h-12 rounded-md border border-stone-200 dark:border-white/10 bg-stone-50 dark:bg-stone-950 flex items-center justify-center text-stone-400">
              <MessageCircle className="w-5 h-5" />
            </div>
            <p className="text-sm text-stone-700 dark:text-stone-300 font-medium">
              No interview experiences yet
            </p>
            <p className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
              be the first to share {companyName}'s process
            </p>
          </div>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {experiences.map((e) => (
              <Link
                key={e.id}
                to={`/student/interviews/${String(e.id)}`}
                className="no-underline group flex items-start gap-3 bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-white/10 rounded-md p-4 hover:border-stone-400 dark:hover:border-white/30 transition-colors"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div className="text-sm font-bold text-stone-900 dark:text-stone-50 truncate">
                      {e.role}
                    </div>
                    <ArrowUpRight className="w-4 h-4 shrink-0 text-stone-400 group-hover:text-stone-900 dark:group-hover:text-stone-50 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                  <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-0.5 text-[10px] font-mono uppercase tracking-widest text-stone-500">
                    <span>{String(e.interviewYear)}</span>
                    <span>{e.difficulty}</span>
                    <span
                      className={`inline-flex items-center gap-1 ${
                        e.outcome === "SELECTED"
                          ? "text-lime-700 dark:text-lime-400"
                          : e.outcome === "REJECTED"
                          ? "text-red-600 dark:text-red-400"
                          : ""
                      }`}
                    >
                      {e.outcome === "SELECTED" ? (
                        <CheckCircle2 className="w-3 h-3" />
                      ) : e.outcome === "REJECTED" ? (
                        <XCircle className="w-3 h-3" />
                      ) : null}
                      {e.outcome}
                    </span>
                  </div>
                  <div className="mt-2 text-[10px] font-mono uppercase tracking-widest text-stone-500 inline-flex items-center gap-1">
                    <ArrowUp className="w-3 h-3" />
                    {e.upvotes}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-5 text-right">
            <Link
              to={`${basePath}?companySlug=${slug}`}
              className="inline-flex items-center gap-1 text-xs font-mono uppercase tracking-widest text-stone-500 hover:text-stone-900 dark:hover:text-stone-50 transition-colors no-underline"
            >
              See all experiences at {companyName}
              <ArrowUpRight className="w-3 h-3" />
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

import React, { useState } from "react";
import { Link } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import {
  BookOpen,
  Trophy,
  ArrowRight,
  Bookmark,
  Star,
  GitFork,
  Compass,
  BarChart3,
  Plus,
  GitPullRequest,
  GitBranch,
  MessageSquare,
  Settings,
  Award,
  Rocket,
  FileText,
  Users,
  Layers,
  Code2,
  CheckCircle2,
  CalendarDays,
  type LucideIcon,
} from "lucide-react";
import { Button } from "../../../components/ui/button";
import { useAuthStore } from "../../../lib/auth.store";
import { queryKeys } from "../../../lib/query-keys";
import api from "../../../lib/axios";
import { useLearningPath } from "./learning-paths.context";
import { LEARNING_PATHS } from "./learning-paths.data";
import { GUIDE_CATALOG } from "./guides.catalog";
import { formatCount } from "./_shared/repo-utils";
import { SuggestRepoModal } from "./SuggestRepoModal";
import type { OpenSourceRepo } from "../../../lib/types";

const GUIDE_ICONS: Record<string, LucideIcon> = {
  "first-pr": GitPullRequest,
  "git-guide": GitBranch,
  communication: MessageSquare,
  "read-codebase": BookOpen,
  cicd: Settings,
  "gsoc-proposal": Award,
  "hackathon-prep": Rocket,
};

type ProgramLink = {
  href: string;
  icon: LucideIcon;
  label: string;
  title: string;
  desc: string;
};

const PROGRAM_LINKS: ProgramLink[] = [
  { href: "/student/opensource/programs", icon: CalendarDays, label: "tracker", title: "Program Deadlines", desc: "Timelines and application tracking for every program." },
  { href: "/student/opensource/gsoc", icon: Trophy, label: "gsoc", title: "GSoC Organizations", desc: "Browse orgs, tech stacks, and past projects." },
  { href: "/student/opensource/outreachy-orgs", icon: Users, label: "outreachy", title: "Outreachy", desc: "Paid remote internships in open source." },
  { href: "/student/opensource/lfx-projects", icon: Layers, label: "lfx", title: "LFX Mentorship", desc: "Linux Foundation mentorship projects." },
  { href: "/student/opensource/season-of-docs", icon: FileText, label: "docs", title: "Season of Docs", desc: "Technical writing with open source orgs." },
  { href: "/student/opensource/mlh", icon: Code2, label: "mlh", title: "MLH Fellowship", desc: "12-week remote engineering fellowship." },
];

// Shorten "First Contributor (Beginner)" into name + level for the path switcher.
function splitPathTitle(title: string): { name: string; level: string | null } {
  const match = title.match(/^(.*?)\s*\((.+)\)$/);
  return match ? { name: match[1], level: match[2] } : { name: title, level: null };
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
      <div className="h-1 w-1 bg-lime-400" />
      {children}
    </div>
  );
}

export const RecommendedRepoRow = React.memo(function RecommendedRepoRow({
  repo,
}: {
  repo: OpenSourceRepo;
}) {
  return (
    <div className="flex items-center justify-between p-4 border border-stone-200 dark:border-white/10 rounded-md bg-white dark:bg-stone-900/40 hover:border-stone-400 dark:hover:border-white/20 transition-all">
      <div className="min-w-0 flex-1">
        <h4 className="text-sm font-bold text-stone-900 dark:text-stone-50 truncate">
          {repo.owner}/{repo.name}
        </h4>
        <p className="text-xs text-stone-500 dark:text-stone-400 mt-1 line-clamp-1">
          {repo.description}
        </p>
        <div className="flex items-center gap-3 mt-2 text-[10px] font-mono text-stone-400">
          <span className="px-1.5 py-0.5 bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 rounded-md font-semibold">
            {repo.language}
          </span>
          <span className="flex items-center gap-0.5">
            <Star className="w-3 h-3 text-stone-400" />
            {repo.stars.toLocaleString()}
          </span>
          <span className="flex items-center gap-0.5">
            <GitFork className="w-3 h-3 text-stone-400" />
            {repo.forks.toLocaleString()}
          </span>
        </div>
      </div>
      <Button asChild size="sm" variant="ghost" className="rounded-md shrink-0 ml-4">
        <a href={repo.url} target="_blank" rel="noopener noreferrer">
          Contribute <ArrowRight className="w-3.5 h-3.5 ml-1" />
        </a>
      </Button>
    </div>
  );
});

export default function OpenSourceDashboardPage() {
  const { user } = useAuthStore();
  const { selectedPath, selectedPathId, setSelectedPathId, progress, nextIncompleteItem } =
    useLearningPath();
  const [showSuggestModal, setShowSuggestModal] = useState(false);

  const { data: recommendedData, isLoading: recommendedLoading } = useQuery({
    queryKey: ["opensource", "recommended"],
    queryFn: () => api.get("/opensource/recommended").then((r) => r.data.repos as OpenSourceRepo[]),
    staleTime: 5 * 60 * 1000,
    retry: false,
  });

  const { data: globalStats } = useQuery({
    queryKey: queryKeys.opensource.stats(),
    queryFn: () =>
      api
        .get<{
          totalRepos: number;
          totalStars: number;
          trendingCount: number;
          languageCount: number;
        }>("/opensource/stats")
        .then((r) => r.data),
    staleTime: 5 * 60 * 1000,
  });

  // Saved repos live in localStorage, written by the Discover page.
  const [savedRepoCount] = useState<number>(() => {
    try {
      const saved = JSON.parse(localStorage.getItem("oss_bookmarks") ?? "[]");
      return Array.isArray(saved) ? saved.length : 0;
    } catch {
      return 0;
    }
  });

  const getGreeting = () => {
    const hours = new Date().getHours();
    if (hours < 12) return "Good morning";
    if (hours < 17) return "Good afternoon";
    return "Good evening";
  };
  const greeting = getGreeting();
  const firstName = user?.name?.trim().split(/\s+/)[0] || null;
  const underlinedWord = firstName ? `${firstName}.` : `${greeting.split(" ")[1]}.`;

  const completedItems = progress.completedCount;
  const totalItems = progress.totalCount;
  const progressPercent = totalItems > 0 ? Math.round((completedItems / totalItems) * 100) : 0;
  const pathComplete = totalItems > 0 && completedItems === totalItems;

  const recommended = (recommendedData ?? []).slice(0, 3);

  return (
    <div className="pb-16 bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-50 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 py-8 space-y-10">

        {/* ── Header ─────────────────────────────────────── */}
        <div>
          <div className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400 mb-2">
            <motion.span
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              className="h-1 w-1 bg-lime-400"
            />
            learning / open source
          </div>
          <div className="flex items-end justify-between gap-4 flex-wrap">
            <div>
              <h1 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight text-stone-900 dark:text-stone-50 leading-none">
                {firstName ? `${greeting}, ` : `${greeting.split(" ")[0]} `}
                <span className="relative inline-block">
                  <span className="relative z-10">{underlinedWord}</span>
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
                    aria-hidden
                    className="absolute bottom-0.5 left-0 right-0 h-2.5 sm:h-3 bg-lime-400 origin-left z-0"
                  />
                </span>
              </h1>
              <p className="mt-3 text-sm text-stone-600 dark:text-stone-400 max-w-2xl">
                Pick up where you left off, and find a repo worth contributing to.
              </p>
            </div>
            <div className="flex items-center gap-4 text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
              {globalStats && (
                <>
                  <span>
                    <span className="text-stone-900 dark:text-stone-50">{globalStats.totalRepos}</span> repos
                  </span>
                  <span className="h-1 w-1 bg-stone-300 dark:bg-stone-700" />
                  <span>
                    <span className="text-stone-900 dark:text-stone-50">{formatCount(globalStats.totalStars)}</span> stars
                  </span>
                  <span className="h-1 w-1 bg-stone-300 dark:bg-stone-700" />
                  <span>
                    <span className="text-lime-600 dark:text-lime-400">{globalStats.trendingCount}</span> trending
                  </span>
                </>
              )}
            </div>
          </div>
        </div>

        {/* ── Continue learning ──────────────────────────── */}
        <section aria-label="Continue learning" className="space-y-3">
          <SectionLabel>continue learning</SectionLabel>
          <div className="border border-stone-200 dark:border-white/10 bg-white dark:bg-stone-900 rounded-md shadow-xs">
            <div className="p-6 grid grid-cols-1 md:grid-cols-5 gap-6">
              <div className="md:col-span-3 space-y-4">
                <div className="flex flex-wrap gap-2" role="group" aria-label="Choose a learning path">
                  {LEARNING_PATHS.map((path) => {
                    const { name, level } = splitPathTitle(path.title);
                    const selected = path.id === selectedPathId;
                    return (
                      <button
                        key={path.id}
                        type="button"
                        aria-pressed={selected}
                        onClick={() => setSelectedPathId(path.id)}
                        className={`px-2.5 py-1.5 rounded-md border text-[10px] font-mono uppercase tracking-widest cursor-pointer transition-colors ${
                          selected
                            ? "border-lime-500/60 bg-lime-400/10 text-lime-700 dark:text-lime-400"
                            : "border-stone-200 dark:border-white/10 bg-transparent text-stone-500 dark:text-stone-400 hover:border-stone-400 dark:hover:border-white/25"
                        }`}
                      >
                        {name}
                        {level && <span className="ml-1.5 opacity-60">{level}</span>}
                      </button>
                    );
                  })}
                </div>

                {pathComplete ? (
                  <div>
                    <h2 className="text-lg font-bold tracking-tight text-stone-900 dark:text-stone-50 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-lime-500" />
                      Path complete
                    </h2>
                    <p className="text-sm text-stone-600 dark:text-stone-400 mt-2">
                      You finished every item in {splitPathTitle(selectedPath.title).name}. Switch
                      paths above, or put it into practice on a real repo.
                    </p>
                  </div>
                ) : (
                  <div>
                    <h2 className="text-lg font-bold tracking-tight text-stone-900 dark:text-stone-50">
                      {nextIncompleteItem?.title}
                    </h2>
                    <p className="text-sm text-stone-600 dark:text-stone-400 mt-2 line-clamp-2">
                      {nextIncompleteItem?.description}
                    </p>
                  </div>
                )}

                <Button
                  asChild
                  variant="primary"
                  className="rounded-md bg-lime-500 hover:bg-lime-400 text-stone-950 font-bold border-none"
                >
                  <Link to={pathComplete ? "/student/opensource/discover" : nextIncompleteItem?.href ?? "/student/opensource/first-pr"}>
                    {pathComplete ? "Discover repos" : "Continue"}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>

              <div className="md:col-span-2 flex flex-col justify-center gap-3 md:border-l md:border-stone-200 md:dark:border-white/10 md:pl-6">
                <div className="flex items-baseline justify-between">
                  <span className="text-3xl font-bold tabular-nums text-stone-900 dark:text-stone-50">
                    {progressPercent}%
                  </span>
                  <span className="text-xs font-mono text-stone-500">
                    {completedItems} / {totalItems} items
                  </span>
                </div>
                <div className="w-full bg-stone-100 dark:bg-stone-800 rounded-md h-2 overflow-hidden">
                  <div
                    className="bg-lime-500 h-full rounded-md transition-all duration-500"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
                <p className="text-[10px] font-mono uppercase tracking-widest text-stone-400 dark:text-stone-500">
                  {pathComplete
                    ? "all items complete"
                    : `~${progress.remainingMinutes} min remaining in this path`}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Guides ─────────────────────────────────────── */}
        <section aria-label="Guides" className="space-y-3">
          <SectionLabel>guides / {String(GUIDE_CATALOG.length).padStart(2, "0")} tracks</SectionLabel>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-l border-stone-200 dark:border-white/10">
            {GUIDE_CATALOG.map((guide, i) => {
              const Icon = GUIDE_ICONS[guide.slug] ?? BookOpen;
              return (
                <Link
                  key={guide.href}
                  to={guide.href}
                  className="group flex flex-col gap-3 p-4 bg-white dark:bg-stone-900 border-r border-b border-stone-200 dark:border-white/10 no-underline hover:bg-stone-50 dark:hover:bg-stone-800 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400 group-hover:text-lime-500">
                      / {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="w-8 h-8 rounded-md bg-stone-100 dark:bg-white/5 group-hover:bg-lime-400/10 flex items-center justify-center transition-colors">
                      <Icon className="w-4 h-4 text-stone-700 dark:text-stone-300 group-hover:text-lime-600 dark:group-hover:text-lime-400" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-sm font-bold tracking-tight text-stone-900 dark:text-stone-50">
                      {guide.title}
                    </p>
                    <p className="text-xs text-stone-600 dark:text-stone-400 line-clamp-2 leading-relaxed">
                      {guide.desc}
                    </p>
                    <span className="text-[10px] font-mono text-stone-400 dark:text-stone-500 mt-1">
                      ~{guide.minutes} min &middot; {guide.steps} steps
                    </span>
                  </div>
                </Link>
              );
            })}
            <div className="hidden lg:flex flex-col justify-center gap-1 p-4 border-r border-b border-stone-200 dark:border-white/10 bg-stone-50 dark:bg-stone-950">
              <p className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
                certificate
              </p>
              <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                Finish a guide to earn a shareable certificate.
              </p>
            </div>
          </div>
        </section>

        {/* ── Contribute ─────────────────────────────────── */}
        <section aria-label="Contribute" className="space-y-3">
          <SectionLabel>contribute</SectionLabel>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            <div className="md:col-span-3 p-6 border border-stone-200 dark:border-white/10 bg-white dark:bg-stone-900 rounded-md shadow-xs flex flex-col space-y-4">
              <div className="flex items-center justify-between">
                <SectionLabel>recommended for you</SectionLabel>
                <Link
                  to="/student/opensource/discover"
                  className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400 hover:text-lime-500 transition-colors no-underline"
                >
                  Browse all &rarr;
                </Link>
              </div>

              <div className="flex-1 space-y-3">
                {recommendedLoading ? (
                  <div className="space-y-3">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="h-20 bg-stone-100 dark:bg-stone-800 rounded-md animate-pulse" />
                    ))}
                  </div>
                ) : recommended.length > 0 ? (
                  recommended.map((repo) => <RecommendedRepoRow key={repo.id} repo={repo} />)
                ) : (
                  <div className="flex flex-col items-center justify-center text-center py-8 gap-3">
                    <Compass className="w-6 h-6 text-stone-300 dark:text-stone-600" />
                    <p className="text-sm text-stone-500 dark:text-stone-400 max-w-xs">
                      No recommendations yet. Add skills to your profile, or browse the full
                      catalog to find a good first issue.
                    </p>
                    <Button asChild size="sm" variant="outline" className="rounded-md">
                      <Link to="/student/opensource/discover">Browse repos</Link>
                    </Button>
                  </div>
                )}
              </div>
            </div>

            <div className="md:col-span-2 flex flex-col gap-3">
              {[
                {
                  key: "discover",
                  label: "discover",
                  title: "Browse the repo catalog",
                  icon: Compass,
                  to: "/student/opensource/discover",
                },
                {
                  key: "saved",
                  label: "saved",
                  title: `${savedRepoCount} saved ${savedRepoCount === 1 ? "repo" : "repos"}`,
                  icon: Bookmark,
                  to: "/student/opensource/discover",
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.key}
                    to={item.to}
                    className="group flex items-center gap-3 p-4 bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md no-underline hover:border-stone-400 dark:hover:border-white/25 transition-colors"
                  >
                    <div className="w-9 h-9 rounded-md bg-stone-100 dark:bg-white/5 group-hover:bg-lime-400/10 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-stone-700 dark:text-stone-300 group-hover:text-lime-600 dark:group-hover:text-lime-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5 mb-0.5">
                        <div className="h-1 w-1 bg-lime-400" />
                        <p className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
                          {item.label}
                        </p>
                      </div>
                      <p className="text-sm font-bold text-stone-900 dark:text-stone-50 truncate">
                        {item.title}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-stone-400 dark:text-stone-500 group-hover:text-lime-500 group-hover:translate-x-0.5 transition-all shrink-0" />
                  </Link>
                );
              })}

              <button
                type="button"
                onClick={() => setShowSuggestModal(true)}
                className="group flex items-center gap-3 p-4 bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md cursor-pointer hover:border-stone-400 dark:hover:border-white/25 transition-colors text-left"
              >
                <div className="w-9 h-9 rounded-md bg-stone-100 dark:bg-white/5 group-hover:bg-lime-400/10 flex items-center justify-center shrink-0">
                  <Plus className="w-4 h-4 text-stone-700 dark:text-stone-300 group-hover:text-lime-600 dark:group-hover:text-lime-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <div className="h-1 w-1 bg-lime-400" />
                    <p className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
                      suggest
                    </p>
                  </div>
                  <p className="text-sm font-bold text-stone-900 dark:text-stone-50">
                    Know a great repo? Submit it
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-stone-400 dark:text-stone-500 group-hover:text-lime-500 group-hover:translate-x-0.5 transition-all shrink-0" />
              </button>
            </div>
          </div>
        </section>

        {/* ── Programs ───────────────────────────────────── */}
        <section aria-label="Programs" className="space-y-3">
          <SectionLabel>programs and fellowships</SectionLabel>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-stone-200 dark:border-white/10">
            {PROGRAM_LINKS.map((program) => {
              const Icon = program.icon;
              return (
                <Link
                  key={program.href}
                  to={program.href}
                  className="group flex items-center gap-3 p-4 bg-white dark:bg-stone-900 border-r border-b border-stone-200 dark:border-white/10 no-underline hover:bg-stone-50 dark:hover:bg-stone-800 transition-colors"
                >
                  <div className="w-9 h-9 rounded-md bg-stone-100 dark:bg-white/5 group-hover:bg-lime-400/10 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-stone-700 dark:text-stone-300 group-hover:text-lime-600 dark:group-hover:text-lime-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <div className="h-1 w-1 bg-lime-400" />
                      <p className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
                        {program.label}
                      </p>
                    </div>
                    <p className="text-sm font-bold text-stone-900 dark:text-stone-50 truncate">
                      {program.title}
                    </p>
                    <p className="text-xs text-stone-500 dark:text-stone-400 truncate">
                      {program.desc}
                    </p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-stone-400 dark:text-stone-500 group-hover:text-lime-500 group-hover:translate-x-0.5 transition-all shrink-0" />
                </Link>
              );
            })}
          </div>
        </section>

        {/* ── Your activity ──────────────────────────────── */}
        <section aria-label="Your activity" className="space-y-3">
          <SectionLabel>your activity</SectionLabel>

          <Link
            to="/student/opensource/analytics"
            className="group flex items-center gap-3 p-4 bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md no-underline hover:bg-stone-900 dark:hover:bg-stone-800 transition-colors"
          >
            <div className="w-9 h-9 rounded-md bg-stone-100 dark:bg-white/5 group-hover:bg-white/10 dark:group-hover:bg-lime-400/10 flex items-center justify-center shrink-0">
              <BarChart3 className="w-4 h-4 text-stone-700 dark:text-stone-300 group-hover:text-lime-400" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5 mb-0.5">
                <div className="h-1 w-1 bg-lime-400" />
                <p className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400 group-hover:text-lime-400">
                  analytics
                </p>
              </div>
              <p className="text-sm font-bold text-stone-900 dark:text-stone-50 group-hover:text-stone-50 dark:group-hover:text-white">
                Contribution trends, heatmap, and Hacktoberfest progress
              </p>
            </div>
            <ArrowRight className="w-4 h-4 text-stone-400 dark:text-stone-500 group-hover:text-lime-400 group-hover:translate-x-0.5 transition-all shrink-0" />
          </Link>
        </section>
      </div>

      <SuggestRepoModal open={showSuggestModal} onClose={() => setShowSuggestModal(false)} />
    </div>
  );
}

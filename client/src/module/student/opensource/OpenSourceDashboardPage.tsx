import React, { useState } from "react";
import { Link } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import {
  Flame,
  BookOpen,
  Trophy,
  ArrowRight,
  Bookmark,
  Activity,
  Star,
  GitFork,
  Compass,
  GraduationCap,
  BarChart3,
} from "lucide-react";
import { Button } from "../../../components/ui/button";
import { useAuthStore } from "../../../lib/auth.store";
import { queryKeys } from "../../../lib/query-keys";
import api from "../../../lib/axios";
import { useLearningPath } from "./learning-paths.context";
import type { OpenSourceRepo, OpenSourceStreak, RepoRequest } from "../../../lib/types";

// ─── Child Components (React.memo) ───────────────────────────

// Repository Card Component
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
            <Star className="w-3 h-3 text-amber-400" />
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

// ─── Main Component ──────────────────────────────────────────

export default function OpenSourceDashboardPage() {
  const { user } = useAuthStore();
  const { progress, nextIncompleteItem } = useLearningPath();

  // Streak state
  const { data: streakData } = useQuery({
    queryKey: queryKeys.opensource.streak(),
    queryFn: () => api.get("/opensource/streak").then((r) => r.data.streak as OpenSourceStreak),
    staleTime: 60000,
    retry: false,
  });

  const { data: myRequestsData } = useQuery({
    queryKey: queryKeys.opensource.myRequests(),
    queryFn: () => api.get("/opensource/requests/mine").then((r) => r.data.requests as RepoRequest[]),
    enabled: !!user,
    staleTime: 2 * 60 * 1000,
  });

  // Recommended Repos
  const { data: recommendedData, isLoading: recommendedLoading } = useQuery({
    queryKey: ["opensource", "recommended"],
    queryFn: () => api.get("/opensource/recommended").then((r) => r.data.repos as OpenSourceRepo[]),
    staleTime: 5 * 60 * 1000,
    retry: false,
  });

  // Local storage bookmarks for statistics card
  const [bookmarks] = useState<number[]>(() => {
    try {
      const saved = localStorage.getItem("oss_bookmarks");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Determine dynamic time-of-day greeting
  const getGreeting = () => {
    const hours = new Date().getHours();
    if (hours < 12) return "Good morning";
    if (hours < 17) return "Good afternoon";
    return "Good evening";
  };

  // Extract student's first name
  const studentFirstName = user?.name ? user.name.split(" ")[0] : "Priya";

  // Learning Progress variables
  const totalSteps = progress.totalCount || 4;
  const completedSteps = progress.completedCount || 0;
  const progressPercent = Math.round((completedSteps / totalSteps) * 100) || 0;

  // Final list of recommended repos
  const displayRecommended = recommendedData?.slice(0, 3) || [
    {
      id: 1,
      name: "cal.com",
      owner: "calcom",
      description: "Scheduling infrastructure for everyone. Self-hosted or hosted on our platform.",
      language: "TypeScript",
      stars: 28450,
      forks: 4810,
      openIssues: 152,
      url: "https://github.com/calcom/cal.com",
      difficulty: "BEGINNER",
      domain: "WEB",
      techStack: ["React", "Next.js"],
      tags: ["good-first-issue"],
      highlights: [],
      trending: true,
      hacktoberfest: true,
      lastUpdated: "",
      createdAt: "",
      updatedAt: "",
      healthScore: 85,
    },
    {
      id: 2,
      name: "infisical",
      owner: "infisical",
      description: "Open source secret management platform: sync secrets across your team, devices, and infra.",
      language: "TypeScript",
      stars: 12320,
      forks: 1120,
      openIssues: 98,
      url: "https://github.com/infisical/infisical",
      difficulty: "INTERMEDIATE",
      domain: "SECURITY",
      techStack: ["Node.js", "TypeScript"],
      tags: ["good-first-issue"],
      highlights: [],
      trending: true,
      hacktoberfest: true,
      lastUpdated: "",
      createdAt: "",
      updatedAt: "",
      healthScore: 78,
    },
    {
      id: 3,
      name: "trigger.dev",
      owner: "triggerdotdev",
      description: "Background jobs framework for TypeScript/JavaScript developers.",
      language: "TypeScript",
      stars: 8140,
      forks: 590,
      openIssues: 74,
      url: "https://github.com/triggerdotdev/trigger.dev",
      difficulty: "BEGINNER",
      domain: "WEB",
      techStack: ["Next.js", "React"],
      tags: ["good-first-issue"],
      highlights: [],
      trending: true,
      hacktoberfest: true,
      lastUpdated: "",
      createdAt: "",
      updatedAt: "",
      healthScore: 80,
    },
  ];

  return (
    <div className="pb-16 bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-50 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 py-8 space-y-6">

        {/* Editorial header */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className="h-1 w-1 bg-lime-400" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
              learning / open source
            </span>
          </div>
          <div className="flex items-end justify-between gap-4 flex-wrap">
            <div>
              <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight text-stone-900 dark:text-stone-50 leading-none">
                {getGreeting()},{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">{studentFirstName}.</span>
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
                Welcome back to your open source dashboard. Pick up where you left off, discover
                new repos, and keep your streak alive.
              </p>
            </div>
            <div className="flex items-center gap-4 text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
              <span className="inline-flex items-center gap-1.5">
                <Flame className="w-3.5 h-3.5 text-lime-500 fill-lime-500" />
                <span className="text-lime-600 dark:text-lime-400">
                  {streakData?.currentStreak ?? 5}
                </span>{" "}
                day streak
              </span>
            </div>
          </div>
        </div>

        {/* Explore (quick links to the open source sections) */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-stone-500">
            <div className="h-1 w-1 bg-lime-400" />
            explore
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              { label: "discover", title: "Discover Repos", href: "/student/opensource/discover", icon: Compass },
              { label: "guides", title: "Open Source Guides", href: "/student/opensource/discover#guides", icon: BookOpen },
              { label: "gsoc", title: "GSoC Orgs", href: "/student/opensource/gsoc", icon: Trophy },
              { label: "programs", title: "Programs", href: "/student/opensource/programs", icon: GraduationCap },
              { label: "analytics", title: "Analytics", href: "/student/opensource/analytics", icon: BarChart3 },
            ].map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.title}
                  to={link.href}
                  className="group flex items-center gap-3 p-4 bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md no-underline hover:border-stone-400 dark:hover:border-white/25 transition-colors"
                >
                  <div className="w-9 h-9 rounded-md bg-stone-100 dark:bg-white/5 group-hover:bg-lime-400/10 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-stone-700 dark:text-stone-300 group-hover:text-lime-600 dark:group-hover:text-lime-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <div className="h-1 w-1 bg-lime-400" />
                      <p className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
                        {link.label}
                      </p>
                    </div>
                    <p className="text-sm font-bold text-stone-900 dark:text-stone-50 truncate">
                      {link.title}
                    </p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-stone-400 dark:text-stone-500 group-hover:text-lime-500 group-hover:translate-x-0.5 transition-all shrink-0" />
                </Link>
              );
            })}
          </div>
        </div>

        {/* Continue Learning & Recommended for You Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Continue Learning Card */}
          <div className="p-6 border border-stone-200 dark:border-white/10 bg-white dark:bg-stone-900 rounded-md shadow-xs flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-stone-500">
                <div className="h-1.5 w-1.5 bg-lime-400 rounded-md" />
                continue learning
              </div>
              <h3 className="text-lg font-bold tracking-tight text-stone-900 dark:text-stone-50 mt-2">
                {nextIncompleteItem?.title || "First PR Roadmap"}
              </h3>
              <p className="text-sm text-stone-600 dark:text-stone-400 mt-2 line-clamp-2">
                {nextIncompleteItem?.description || "Master the end-to-end contributor workflow from picking your issue to having your PR merged."}
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <div className="flex items-center justify-between text-xs font-mono text-stone-500">
                <span>Progress: {progressPercent}%</span>
                <span>
                  {completedSteps} / {totalSteps} Steps Complete
                </span>
              </div>
              <div className="w-full bg-stone-100 dark:bg-stone-800 rounded-md h-2 relative overflow-hidden">
                <div
                  className="bg-lime-500 h-full rounded-md transition-all duration-500"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
              <div className="flex justify-end pt-2">
                <Button
                  asChild
                  variant="primary"
                  className="rounded-md bg-lime-500 hover:bg-lime-400 text-stone-950 font-bold border-none"
                >
                  <Link to={nextIncompleteItem?.href || "/student/opensource/first-pr"}>
                    Continue Next Step <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Recommended for You Card */}
          <div className="p-6 border border-stone-200 dark:border-white/10 bg-white dark:bg-stone-900 rounded-md shadow-xs flex flex-col space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-stone-500">
                <div className="h-1.5 w-1.5 bg-lime-400 rounded-md" />
                recommended for you
              </div>
              <Link
                to="/student/opensource/discover"
                className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400 hover:text-lime-500 transition-colors"
              >
                Browse all &rarr;
              </Link>
            </div>

            <div className="flex-1 space-y-3">
              {recommendedLoading ? (
                <div className="text-center py-8 text-stone-400 text-xs">
                  Loading recommendations...
                </div>
              ) : (
                displayRecommended.map((repo) => (
                  <RecommendedRepoRow key={repo.id} repo={repo as OpenSourceRepo} />
                ))
              )}
            </div>
          </div>
        </div>

        {/* Your Stats */}
        <div className="p-6 border border-stone-200 dark:border-white/10 bg-white dark:bg-stone-900 rounded-md shadow-xs flex flex-col space-y-4">
            <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-stone-500">
              <div className="h-1.5 w-1.5 bg-lime-400 rounded-md" />
              your stats
            </div>

            <div className="grid grid-cols-2 gap-4 flex-1">
              
              {/* Box 1 */}
              <div className="p-4 bg-stone-100/70 dark:bg-stone-800/60 rounded-md border border-stone-200/50 dark:border-white/5 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-stone-500">
                    Guides Complete
                  </span>
                  <BookOpen className="w-4 h-4 text-stone-400 dark:text-stone-500" />
                </div>
                <p className="text-2xl font-bold text-stone-900 dark:text-stone-50 mt-2">
                  {completedSteps}
                </p>
              </div>

              {/* Box 2 */}
              <div className="p-4 bg-stone-100/70 dark:bg-stone-800/60 rounded-md border border-stone-200/50 dark:border-white/5 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-stone-500">
                    Bookmarked Repos
                  </span>
                  <Bookmark className="w-4 h-4 text-stone-400 dark:text-stone-500" />
                </div>
                <p className="text-2xl font-bold text-stone-900 dark:text-stone-50 mt-2">
                  {bookmarks.length}
                </p>
              </div>

              {/* Box 3 */}
              <div className="p-4 bg-stone-100/70 dark:bg-stone-800/60 rounded-md border border-stone-200/50 dark:border-white/5 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-stone-500">
                    Current Streak
                  </span>
                  <Flame className="w-4 h-4 text-lime-500" />
                </div>
                <p className="text-2xl font-bold text-lime-500 mt-2">
                  {streakData?.currentStreak ?? 5} days
                </p>
              </div>

              {/* Box 4 */}
              <div className="p-4 bg-stone-100/70 dark:bg-stone-800/60 rounded-md border border-stone-200/50 dark:border-white/5 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-stone-500">
                    Contributions
                  </span>
                  <Activity className="w-4 h-4 text-stone-400 dark:text-stone-500" />
                </div>
                <p className="text-2xl font-bold text-stone-900 dark:text-stone-50 mt-2">
                  {myRequestsData?.filter((r) => r.status === "APPROVED").length ?? 3}
                </p>
              </div>

          </div>
        </div>

      </div>
    </div>
  );
}


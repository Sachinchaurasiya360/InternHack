import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import { useQuery } from "@tanstack/react-query";
import {
  Flame,
  BookOpen,
  GitPullRequest,
  Trophy,
  ArrowRight,
  Bookmark,
  Activity,
  Clock,
  Trash2,
  Check,
  Star,
  GitFork,
  AlertCircle,
} from "lucide-react";
import { Button } from "../../../components/ui/button";
import { useAuthStore } from "../../../lib/auth.store";
import { queryKeys } from "../../../lib/query-keys";
import api from "../../../lib/axios";
import { useLearningPath } from "./learning-paths.context";
import type { OpenSourceRepo, OpenSourceStreak, RepoRequest } from "../../../lib/types";

// Active Issue Type
interface ActiveIssue {
  id: number;
  repo: string;
  title: string;
  number: number;
  url: string;
  claimedAt: string;
}

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

// Active Issue Row Component
export const ActiveIssueRow = React.memo(function ActiveIssueRow({
  issue,
  onComplete,
  onAbandon,
}: {
  issue: ActiveIssue;
  onComplete: (id: number) => void;
  onAbandon: (id: number) => void;
}) {
  const [timeAgoStr, setTimeAgoStr] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      const elapsed = Date.now() - new Date(issue.claimedAt).getTime();
      const hrs = Math.floor(elapsed / 3600000);
      if (hrs < 24) {
        setTimeAgoStr(hrs <= 0 ? "Just now" : `${hrs}h ago`);
      } else {
        const days = Math.floor(hrs / 24);
        setTimeAgoStr(`${days}d ago`);
      }
    }, 0);
    return () => clearTimeout(timer);
  }, [issue.claimedAt]);

  return (
    <div className="p-4 border border-stone-200 dark:border-white/10 rounded-md bg-white dark:bg-stone-900/40 hover:border-stone-300 dark:hover:border-white/15 transition-all">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono text-stone-400 font-bold uppercase tracking-wider">
              {issue.repo}
            </span>
            <span className="text-[10px] font-mono text-lime-500 font-bold">
              #{issue.number}
            </span>
          </div>
          <h4 className="text-sm font-semibold text-stone-900 dark:text-stone-50 mt-1 line-clamp-2">
            {issue.title}
          </h4>
          <span className="inline-flex items-center gap-1 mt-2 text-[10px] text-stone-400 font-mono">
            <Clock className="w-3 h-3 text-stone-400" />
            Claimed {timeAgoStr || "Recently"}
          </span>
        </div>
        <div className="flex items-center gap-1.5 shrink-0">
          <Button
            size="sm"
            variant="ghost"
            onClick={() => onComplete(issue.id)}
            className="rounded-md h-7 w-7 p-0 text-stone-500 hover:text-lime-500 hover:bg-lime-500/10"
            title="Mark Completed"
          >
            <Check className="w-4 h-4" />
          </Button>
          <Button
            size="sm"
            variant="ghost"
            onClick={() => onAbandon(issue.id)}
            className="rounded-md h-7 w-7 p-0 text-stone-500 hover:text-destructive hover:bg-destructive/10"
            title="Abandon Issue"
          >
            <Trash2 className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
});

// Deadline Timer Component
export const DeadlineCountdownRow = React.memo(function DeadlineCountdownRow({
  title,
  targetDate,
}: {
  title: string;
  targetDate: number;
}) {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const updateTimer = () => {
      const difference = targetDate - Date.now();
      if (difference <= 0) {
        setTimeLeft("Deadline passed");
        return;
      }
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="flex items-center justify-between p-3 border border-stone-200 dark:border-white/10 rounded-md bg-stone-50 dark:bg-stone-900/60 shadow-inner">
      <div className="min-w-0">
        <p className="text-xs font-bold text-stone-800 dark:text-stone-200 truncate">
          {title}
        </p>
        <span className="text-[10px] text-stone-400">Applications/Submissions</span>
      </div>
      <span className="text-xs font-mono font-bold text-lime-600 dark:text-lime-400 whitespace-nowrap bg-lime-500/10 px-2.5 py-1 rounded-md">
        {timeLeft}
      </span>
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

  // Active issues tracker with localStorage persistence
  const [activeIssues, setActiveIssues] = useState<ActiveIssue[]>(() => {
    try {
      const saved = localStorage.getItem("oss_active_issues");
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error("Failed to parse active issues", e);
    }

    // Default seeded active issues
    return [
      {
        id: 1,
        repo: "calcom/cal.com",
        title: "Fix: Mobile responsive layout overflow on bookings page",
        number: 14032,
        url: "https://github.com/calcom/cal.com/issues/14032",
        claimedAt: new Date(Date.now() - 24 * 3600 * 1000).toISOString(),
      },
      {
        id: 2,
        repo: "infisical/infisical",
        title: "Feature: Add copy-to-clipboard button for environment variables",
        number: 4321,
        url: "https://github.com/infisical/infisical/issues/4321",
        claimedAt: new Date(Date.now() - 6 * 3600 * 1000).toISOString(),
      },
    ];
  });

  // Sync active issues to localStorage
  useEffect(() => {
    try {
      localStorage.setItem("oss_active_issues", JSON.stringify(activeIssues));
    } catch (e) {
      console.warn("Failed to save active issues", e);
    }
  }, [activeIssues]);

  // Active issue handlers
  const handleCompleteIssue = (id: number) => {
    setActiveIssues((prev) => prev.filter((issue) => issue.id !== id));
    // Proactively increment approved contributions or trigger complete message
    // In our front-end only implementation, we just clear and show a toast
    alert("Amazing work! The issue has been marked as completed.");
  };

  const handleAbandonIssue = (id: number) => {
    setActiveIssues((prev) => prev.filter((issue) => issue.id !== id));
  };

  // Determine dynamic time-of-day greeting
  const getGreeting = () => {
    const hours = new Date().getHours();
    if (hours < 12) return "Good morning";
    if (hours < 17) return "Good afternoon";
    return "Good evening";
  };

  // Extract student's first name
  const studentFirstName = user?.name ? user.name.split(" ")[0] : "Priya";

  // Tab items
  const tabs = [
    { name: "Dashboard", href: "/student/opensource", active: true },
    { name: "Discover Repos", href: "/student/opensource/discover" },
    { name: "Guides", href: "/student/opensource/discover#guides" },
    { name: "GSoC Orgs", href: "/student/opensource/gsoc" },
    { name: "Programs", href: "/student/opensource/programs" },
    { name: "Analytics", href: "/student/opensource/analytics" },
  ];

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

  // Community pulse mock feed
  const pulseFeed = [
    {
      id: 1,
      text: "Sarah K. submitted a PR to Twenty (+50 XP)",
      time: "10m ago",
      icon: <GitPullRequest className="w-3.5 h-3.5 text-lime-500" />,
    },
    {
      id: 2,
      text: "Alex M. started GSoC proposal draft",
      time: "1h ago",
      icon: <Trophy className="w-3.5 h-3.5 text-amber-500" />,
    },
    {
      id: 3,
      text: "Vikram R. reached a 10-day contribution streak!",
      time: "3h ago",
      icon: <Flame className="w-3.5 h-3.5 text-orange-500" />,
    },
  ];

  // Deadlines dates
  const [gsocDeadline] = useState(() => Date.now() + 15 * 86400 * 1000 + 4 * 3600 * 1000);
  const [lfxDeadline] = useState(() => Date.now() + 32 * 86400 * 1000 + 12 * 3600 * 1000);

  return (
    <div className="pb-16 bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-50 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 py-8 space-y-6">
        
        {/* Navigation Tab Bar (Top) */}
        <div className="flex items-center gap-2 border-b border-stone-200 dark:border-white/10 pb-4 overflow-x-auto whitespace-nowrap">
          {tabs.map((tab) => (
            <Link
              key={tab.name}
              to={tab.href}
              className={`px-4 py-2 text-sm font-semibold transition-colors rounded-md ${
                tab.active
                  ? "bg-lime-500 text-stone-950 font-bold shadow-sm"
                  : "text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-50 hover:bg-stone-200/50 dark:hover:bg-white/5"
              }`}
            >
              {tab.name}
            </Link>
          ))}
        </div>

        {/* Greeting & Streak (Full Width) */}
        <div className="p-6 border border-stone-200 dark:border-white/10 bg-white dark:bg-stone-900 rounded-md shadow-xs flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-2xl" role="img" aria-label="wave">
              👋
            </span>
            <div>
              <h2 className="text-xl font-bold tracking-tight">
                {getGreeting()}, {studentFirstName}
              </h2>
              <p className="text-sm text-stone-500 dark:text-stone-400 mt-0.5">
                Welcome back to your open-source central dashboard.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-stone-100 dark:bg-stone-800/80 px-4 py-2.5 rounded-md border border-stone-200/50 dark:border-white/5 shrink-0">
            <Flame className="w-5 h-5 text-lime-500 fill-lime-500 animate-pulse" />
            <span className="text-sm font-bold text-stone-800 dark:text-stone-200">
              <span className="text-lime-500 font-extrabold">{streakData?.currentStreak ?? 5}-day</span> streak — keep it up!
            </span>
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

        {/* Active Issues & Program Countdown Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Active Issues Card */}
          <div className="p-6 border border-stone-200 dark:border-white/10 bg-white dark:bg-stone-900 rounded-md shadow-xs flex flex-col space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-stone-500">
                <div className="h-1.5 w-1.5 bg-lime-400 rounded-md" />
                active issues ({activeIssues.length})
              </div>
            </div>

            <div className="flex-1 space-y-3">
              {activeIssues.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-10 text-center space-y-3 border border-dashed border-stone-200 dark:border-white/10 rounded-md bg-stone-50/50 dark:bg-stone-900/10">
                  <AlertCircle className="w-8 h-8 text-stone-400" />
                  <div>
                    <p className="text-sm font-semibold text-stone-600 dark:text-stone-300">
                      No tracked issues
                    </p>
                    <p className="text-xs text-stone-400 mt-1">
                      Go to repo discovery and label issues to track them.
                    </p>
                  </div>
                  <Button asChild size="sm" variant="ghost" className="rounded-md">
                    <Link to="/student/opensource/discover">
                      Find issues <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </Link>
                  </Button>
                </div>
              ) : (
                activeIssues.map((issue) => (
                  <ActiveIssueRow
                    key={issue.id}
                    issue={issue}
                    onComplete={handleCompleteIssue}
                    onAbandon={handleAbandonIssue}
                  />
                ))
              )}
            </div>
          </div>

          {/* Program Countdown Card */}
          <div className="p-6 border border-stone-200 dark:border-white/10 bg-white dark:bg-stone-900 rounded-md shadow-xs flex flex-col space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-stone-500">
                <div className="h-1.5 w-1.5 bg-lime-400 rounded-md" />
                program countdown
              </div>
              <Link
                to="/student/opensource/programs"
                className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400 hover:text-lime-500 transition-colors"
              >
                Track program deadlines &rarr;
              </Link>
            </div>

            <div className="flex-1 space-y-3">
              <DeadlineCountdownRow title="GSoC 2026 Submission deadline" targetDate={gsocDeadline} />
              <DeadlineCountdownRow title="LFX Fall Mentorship deadline" targetDate={lfxDeadline} />
            </div>
          </div>
        </div>

        {/* Community Pulse & Your Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Community Pulse Card */}
          <div className="p-6 border border-stone-200 dark:border-white/10 bg-white dark:bg-stone-900 rounded-md shadow-xs flex flex-col space-y-4">
            <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-stone-500">
              <div className="h-1.5 w-1.5 bg-lime-400 rounded-md" />
              community pulse
            </div>

            <div className="flex-1 space-y-4 pt-1">
              {pulseFeed.map((item) => (
                <div key={item.id} className="flex items-start gap-3">
                  <div className="mt-0.5 p-1 bg-stone-100 dark:bg-stone-800 rounded-md shrink-0 border border-stone-200/30 dark:border-white/5">
                    {item.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm text-stone-700 dark:text-stone-300 font-medium">
                      {item.text}
                    </p>
                    <span className="text-[10px] font-mono text-stone-400 mt-1 block">
                      {item.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Your Stats Card */}
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
    </div>
  );
}

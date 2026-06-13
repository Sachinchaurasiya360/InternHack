import React, { useState, useEffect, type ReactNode } from "react";
import { Link } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import {
  Flame,
  BookOpen,
  GitPullRequest,
  Trophy,
  ArrowRight,
  ArrowUpRight,
  Bookmark,
  Activity,
  Clock,
  Trash2,
  Check,
  Star,
  GitFork,
  AlertCircle,
  CalendarClock,
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

// ─── Motion ──────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.07 } } };

// ─── Shared chrome ───────────────────────────────────────────
const CARD =
  "rounded-xl border border-stone-200 dark:border-white/10 bg-white dark:bg-stone-900";

// Mono section eyebrow with the signature lime tick, plus an optional action.
function SectionLabel({ children, action }: { children: ReactNode; action?: ReactNode }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.2em] text-stone-500">
        <span className="h-1.5 w-1.5 bg-lime-400" />
        {children}
      </div>
      {action}
    </div>
  );
}

function ActionLink({ to, children }: { to: string; children: ReactNode }) {
  return (
    <Link
      to={to}
      className="group inline-flex items-center gap-1 text-[10px] font-mono uppercase tracking-[0.15em] text-stone-400 hover:text-lime-600 dark:hover:text-lime-400 transition-colors no-underline"
    >
      {children}
      <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </Link>
  );
}

// ─── Child Components (React.memo) ───────────────────────────

// Repository Card Component
export const RecommendedRepoRow = React.memo(function RecommendedRepoRow({
  repo,
}: {
  repo: OpenSourceRepo;
}) {
  return (
    <a
      href={repo.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-3.5 rounded-lg border border-stone-200 dark:border-white/10 bg-stone-50/60 dark:bg-stone-950/40 p-3.5 no-underline transition-all hover:border-lime-400/60 dark:hover:border-lime-400/40 hover:bg-white dark:hover:bg-stone-800/60"
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-stone-900 dark:bg-stone-700 text-sm font-bold text-stone-50">
        {(repo.name?.[0] ?? "?").toUpperCase()}
      </div>
      <div className="min-w-0 flex-1">
        <h4 className="truncate text-sm font-bold text-stone-900 dark:text-stone-50">
          {repo.owner}/{repo.name}
        </h4>
        <p className="mt-0.5 line-clamp-1 text-xs text-stone-500 dark:text-stone-400">
          {repo.description}
        </p>
        <div className="mt-1.5 flex items-center gap-2.5 text-[10px] font-mono text-stone-400">
          <span className="rounded bg-stone-200/70 dark:bg-stone-800 px-1.5 py-0.5 font-semibold text-stone-600 dark:text-stone-300">
            {repo.language}
          </span>
          <span className="flex items-center gap-1">
            <Star className="h-3 w-3 text-stone-400" />
            {repo.stars.toLocaleString()}
          </span>
          <span className="flex items-center gap-1">
            <GitFork className="h-3 w-3 text-stone-400" />
            {repo.forks.toLocaleString()}
          </span>
        </div>
      </div>
      <ArrowRight className="h-4 w-4 shrink-0 text-stone-300 dark:text-stone-600 transition-all group-hover:translate-x-0.5 group-hover:text-lime-500" />
    </a>
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
    <div className="group relative rounded-lg border border-stone-200 dark:border-white/10 bg-stone-50/60 dark:bg-stone-950/40 p-4 transition-all hover:border-stone-300 dark:hover:border-white/20">
      <span className="absolute left-0 top-4 bottom-4 w-0.5 rounded-r bg-lime-400/70" />
      <div className="flex items-start justify-between gap-4 pl-2.5">
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 text-[10px] font-mono">
            <span className="font-bold uppercase tracking-wider text-stone-400">{issue.repo}</span>
            <span className="font-bold text-lime-600 dark:text-lime-400">#{issue.number}</span>
          </div>
          <h4 className="mt-1 line-clamp-2 text-sm font-semibold text-stone-900 dark:text-stone-50">
            {issue.title}
          </h4>
          <span className="mt-2 inline-flex items-center gap-1 text-[10px] font-mono text-stone-400">
            <Clock className="h-3 w-3" />
            Claimed {timeAgoStr || "Recently"}
          </span>
        </div>
        <div className="flex shrink-0 items-center gap-1.5">
          <Button
            size="sm"
            variant="ghost"
            onClick={() => onComplete(issue.id)}
            className="h-7 w-7 rounded-md p-0 text-stone-500 hover:bg-lime-500/10 hover:text-lime-600 dark:hover:text-lime-400"
            title="Mark Completed"
          >
            <Check className="h-4 w-4" />
          </Button>
          <Button
            size="sm"
            variant="ghost"
            onClick={() => onAbandon(issue.id)}
            className="h-7 w-7 rounded-md p-0 text-stone-500 hover:bg-destructive/10 hover:text-destructive"
            title="Abandon Issue"
          >
            <Trash2 className="h-4 w-4" />
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
    <div className="flex items-center justify-between gap-3 rounded-lg border border-stone-200 dark:border-white/10 bg-stone-50/60 dark:bg-stone-950/40 p-3.5">
      <div className="flex min-w-0 items-center gap-2.5">
        <CalendarClock className="h-4 w-4 shrink-0 text-stone-400" />
        <div className="min-w-0">
          <p className="truncate text-xs font-bold text-stone-800 dark:text-stone-200">{title}</p>
          <span className="text-[10px] text-stone-400">Applications and submissions</span>
        </div>
      </div>
      <span className="whitespace-nowrap rounded-md bg-lime-400/15 px-2.5 py-1 text-xs font-mono font-bold tabular-nums text-lime-700 dark:text-lime-300">
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

  // Editorial date stamp for the hero
  const todayLabel = new Date().toLocaleDateString(undefined, {
    weekday: "long",
    month: "short",
    day: "numeric",
  });

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
      icon: <GitPullRequest className="h-3.5 w-3.5 text-lime-600 dark:text-lime-400" />,
    },
    {
      id: 2,
      text: "Alex M. started GSoC proposal draft",
      time: "1h ago",
      icon: <Trophy className="h-3.5 w-3.5 text-stone-500" />,
    },
    {
      id: 3,
      text: "Vikram R. reached a 10-day contribution streak!",
      time: "3h ago",
      icon: <Flame className="h-3.5 w-3.5 text-lime-600 dark:text-lime-400" />,
    },
  ];

  // Deadlines dates
  const [gsocDeadline] = useState(() => Date.now() + 15 * 86400 * 1000 + 4 * 3600 * 1000);
  const [lfxDeadline] = useState(() => Date.now() + 32 * 86400 * 1000 + 12 * 3600 * 1000);

  const stats = [
    { label: "Guides Complete", value: String(completedSteps), icon: BookOpen, accent: false },
    { label: "Bookmarked Repos", value: String(bookmarks.length), icon: Bookmark, accent: false },
    { label: "Current Streak", value: `${streakData?.currentStreak ?? 5}`, suffix: "d", icon: Flame, accent: true },
    {
      label: "Contributions",
      value: String(myRequestsData?.filter((r) => r.status === "APPROVED").length ?? 3),
      icon: Activity,
      accent: false,
    },
  ];

  return (
    <div className="bg-stone-50 pb-16 text-stone-900 transition-colors dark:bg-stone-950 dark:text-stone-50">
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="mx-auto max-w-6xl space-y-6 px-4 py-8 sm:px-8"
      >
        {/* ── Tab navigation ── */}
        <motion.nav
          variants={fadeUp}
          className="flex items-center gap-1 overflow-x-auto border-b border-stone-200 whitespace-nowrap dark:border-white/10"
        >
          {tabs.map((tab) => (
            <Link
              key={tab.name}
              to={tab.href}
              className={`relative px-3.5 pb-3.5 pt-1 text-sm font-semibold no-underline transition-colors ${
                tab.active
                  ? "text-stone-900 dark:text-stone-50"
                  : "text-stone-500 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-50"
              }`}
            >
              {tab.name}
              {tab.active && (
                <span className="absolute inset-x-2 -bottom-px h-0.5 rounded-full bg-lime-400" />
              )}
            </Link>
          ))}
        </motion.nav>

        {/* ── Hero: greeting + streak ── */}
        <motion.section
          variants={fadeUp}
          className="relative overflow-hidden rounded-2xl border border-stone-800 bg-stone-900 p-6 sm:p-8"
        >
          {/* dotted texture */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
              backgroundSize: "26px 26px",
            }}
          />
          {/* lime corner glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 -top-24 h-56 w-56 rounded-full bg-lime-400/20 blur-3xl"
          />
          <div className="relative flex flex-wrap items-end justify-between gap-6">
            <div className="min-w-0">
              <div className="mb-4 flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.2em] text-stone-400">
                <span className="h-1.5 w-1.5 animate-pulse bg-lime-400" />
                {todayLabel}
              </div>
              <h1 className="text-3xl font-bold leading-none tracking-tight text-white sm:text-4xl">
                {getGreeting()},{" "}
                <span className="text-lime-400">{studentFirstName}.</span>
              </h1>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-stone-400">
                Welcome back to your open source command center. Pick up where you left off and keep
                the momentum going.
              </p>
            </div>

            {/* Streak stat block */}
            <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-sm">
              <Flame className="h-7 w-7 fill-lime-400 text-lime-400" />
              <div>
                <div className="text-2xl font-bold leading-none tabular-nums text-white">
                  {streakData?.currentStreak ?? 5}
                  <span className="ml-1 text-sm font-semibold text-lime-400">day</span>
                </div>
                <div className="mt-1 text-[10px] font-mono uppercase tracking-[0.15em] text-stone-400">
                  Current streak
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* ── Continue Learning + Recommended ── */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Continue Learning */}
          <motion.div
            variants={fadeUp}
            className={`${CARD} relative flex flex-col justify-between overflow-hidden p-6`}
          >
            <span aria-hidden className="absolute inset-x-0 top-0 h-0.5 bg-lime-400" />
            <div>
              <SectionLabel>continue learning</SectionLabel>
              <h3 className="mt-3 text-lg font-bold tracking-tight text-stone-900 dark:text-stone-50">
                {nextIncompleteItem?.title || "First PR Roadmap"}
              </h3>
              <p className="mt-2 line-clamp-2 text-sm text-stone-600 dark:text-stone-400">
                {nextIncompleteItem?.description ||
                  "Master the end to end contributor workflow, from picking your issue to having your PR merged."}
              </p>
            </div>

            <div className="space-y-3 pt-6">
              <div className="flex items-center justify-between text-xs font-mono text-stone-500">
                <span className="tabular-nums">{progressPercent}% complete</span>
                <span className="tabular-nums">
                  {completedSteps} / {totalSteps} steps
                </span>
              </div>
              <div className="relative h-2 w-full overflow-hidden rounded-full bg-stone-100 dark:bg-stone-800">
                <motion.div
                  className="h-full rounded-full bg-lime-400"
                  initial={{ width: 0 }}
                  animate={{ width: `${progressPercent}%` }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                />
              </div>
              <div className="flex justify-end pt-2">
                <Button
                  asChild
                  variant="primary"
                  className="rounded-lg border-none bg-lime-500 font-bold text-stone-950 hover:bg-lime-400"
                >
                  <Link to={nextIncompleteItem?.href || "/student/opensource/first-pr"}>
                    Continue next step <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Recommended for You */}
          <motion.div variants={fadeUp} className={`${CARD} flex flex-col space-y-4 p-6`}>
            <SectionLabel action={<ActionLink to="/student/opensource/discover">Browse all</ActionLink>}>
              recommended for you
            </SectionLabel>
            <div className="flex-1 space-y-2.5">
              {recommendedLoading ? (
                <div className="space-y-2.5">
                  {[0, 1, 2].map((i) => (
                    <div
                      key={i}
                      className="h-17 animate-pulse rounded-lg border border-stone-200 bg-stone-100/60 dark:border-white/10 dark:bg-stone-800/40"
                    />
                  ))}
                </div>
              ) : (
                displayRecommended.map((repo) => (
                  <RecommendedRepoRow key={repo.id} repo={repo as OpenSourceRepo} />
                ))
              )}
            </div>
          </motion.div>
        </div>

        {/* ── Active Issues + Program Countdown ── */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Active Issues */}
          <motion.div variants={fadeUp} className={`${CARD} flex flex-col space-y-4 p-6`}>
            <SectionLabel>active issues ({activeIssues.length})</SectionLabel>
            <div className="flex-1 space-y-2.5">
              {activeIssues.length === 0 ? (
                <div className="flex flex-col items-center justify-center space-y-3 rounded-lg border border-dashed border-stone-200 bg-stone-50/50 py-10 text-center dark:border-white/10 dark:bg-stone-900/10">
                  <AlertCircle className="h-8 w-8 text-stone-300 dark:text-stone-600" />
                  <div>
                    <p className="text-sm font-semibold text-stone-600 dark:text-stone-300">
                      No tracked issues
                    </p>
                    <p className="mt-1 text-xs text-stone-400">
                      Go to repo discovery and label issues to track them.
                    </p>
                  </div>
                  <Button asChild size="sm" variant="ghost" className="rounded-md">
                    <Link to="/student/opensource/discover">
                      Find issues <ArrowRight className="ml-1 h-3.5 w-3.5" />
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
          </motion.div>

          {/* Program Countdown */}
          <motion.div variants={fadeUp} className={`${CARD} flex flex-col space-y-4 p-6`}>
            <SectionLabel
              action={<ActionLink to="/student/opensource/programs">Track deadlines</ActionLink>}
            >
              program countdown
            </SectionLabel>
            <div className="flex-1 space-y-2.5">
              <DeadlineCountdownRow title="GSoC 2026 Submission deadline" targetDate={gsocDeadline} />
              <DeadlineCountdownRow title="LFX Fall Mentorship deadline" targetDate={lfxDeadline} />
            </div>
          </motion.div>
        </div>

        {/* ── Community Pulse + Your Stats ── */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Community Pulse */}
          <motion.div variants={fadeUp} className={`${CARD} flex flex-col space-y-4 p-6`}>
            <SectionLabel>community pulse</SectionLabel>
            <div className="flex-1 space-y-1">
              {pulseFeed.map((item, i) => (
                <div
                  key={item.id}
                  className={`flex items-start gap-3 py-2.5 ${
                    i !== pulseFeed.length - 1
                      ? "border-b border-stone-100 dark:border-white/5"
                      : ""
                  }`}
                >
                  <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-stone-200/60 bg-stone-50 dark:border-white/5 dark:bg-stone-800">
                    {item.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-stone-700 dark:text-stone-300">
                      {item.text}
                    </p>
                    <span className="mt-0.5 block text-[10px] font-mono text-stone-400">
                      {item.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Your Stats */}
          <motion.div variants={fadeUp} className={`${CARD} flex flex-col space-y-4 p-6`}>
            <SectionLabel>your stats</SectionLabel>
            <div className="grid flex-1 grid-cols-2 gap-px overflow-hidden rounded-lg border border-stone-200 bg-stone-200 dark:border-white/10 dark:bg-white/10">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className="flex flex-col justify-between bg-white p-4 dark:bg-stone-900"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-stone-500">
                        {stat.label}
                      </span>
                      <Icon
                        className={`h-4 w-4 ${
                          stat.accent ? "text-lime-500" : "text-stone-400 dark:text-stone-500"
                        }`}
                      />
                    </div>
                    <p
                      className={`mt-3 text-3xl font-bold tabular-nums ${
                        stat.accent ? "text-lime-500" : "text-stone-900 dark:text-stone-50"
                      }`}
                    >
                      {stat.value}
                      {stat.suffix && (
                        <span className="ml-0.5 text-base font-semibold text-stone-400">
                          {stat.suffix}
                        </span>
                      )}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

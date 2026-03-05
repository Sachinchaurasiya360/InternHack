import { useState, useMemo } from "react";
import { Link } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Star,
  GitFork,
  CircleDot,
  ExternalLink,
  X,
  ChevronDown,
  TrendingUp,
  Filter,
  Code2,
  Sparkles,
  Globe,
  Flame,
  ArrowUpRight,
  BookOpen,
  Trophy,
  GraduationCap,
  GitPullRequest,
  MessagesSquare,
  ChevronRight,
  Award,
  Loader2,
  AlertCircle,
} from "lucide-react";
import api from "../../../lib/axios";
import { queryKeys } from "../../../lib/query-keys";
import type { OpenSourceRepo, Pagination } from "../../../lib/types";
import {
  REPO_DOMAINS,
  DIFFICULTY_OPTIONS,
  SORT_OPTIONS,
  LANGUAGE_COLORS,
} from "./reposData";

// ─── Helpers ────────────────────────────────────────────────────
function formatCount(n: number): string {
  if (n >= 1000) return `${(n / 1000).toFixed(1).replace(/\.0$/, "")}k`;
  return String(n);
}

function difficultyBadge(d: OpenSourceRepo["difficulty"]) {
  const map = {
    BEGINNER: { label: "Beginner", cls: "bg-emerald-50 text-emerald-700 ring-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-400 dark:ring-emerald-700" },
    INTERMEDIATE: { label: "Intermediate", cls: "bg-amber-50 text-amber-700 ring-amber-200 dark:bg-amber-900/30 dark:text-amber-400 dark:ring-amber-700" },
    ADVANCED: { label: "Advanced", cls: "bg-rose-50 text-rose-700 ring-rose-200 dark:bg-rose-900/30 dark:text-rose-400 dark:ring-rose-700" },
  };
  return map[d];
}

// ─── Guidance Cards Data ─────────────────────────────────────────
const GUIDANCE_CARDS = [
  {
    to: "/student/opensource/guidance",
    icon: <BookOpen className="w-5 h-5" />,
    title: "Contribution Guide",
    desc: "Fork, clone, branch, commit, PR — step by step",
    gradient: "from-purple-500 to-violet-600",
    hoverBorder: "hover:border-purple-300 dark:hover:border-purple-600",
  },
  {
    to: "/student/opensource/first-pr",
    icon: <GitPullRequest className="w-5 h-5" />,
    title: "First PR Roadmap",
    desc: "Guided checklist to land your first pull request",
    gradient: "from-pink-500 to-rose-600",
    hoverBorder: "hover:border-pink-300 dark:hover:border-pink-600",
  },
  {
    to: "/student/opensource/gsoc",
    icon: <Trophy className="w-5 h-5" />,
    title: "GSoC Repos",
    desc: "Organizations accepted into Google Summer of Code",
    gradient: "from-amber-500 to-orange-500",
    hoverBorder: "hover:border-amber-300 dark:hover:border-amber-600",
  },
  {
    to: "/student/opensource/gsoc-proposal",
    icon: <Award className="w-5 h-5" />,
    title: "GSoC Proposal Guide",
    desc: "Write a winning proposal in 8 steps",
    gradient: "from-red-500 to-orange-600",
    hoverBorder: "hover:border-red-300 dark:hover:border-red-600",
  },
  {
    to: "/student/opensource/programs",
    icon: <GraduationCap className="w-5 h-5" />,
    title: "Program Tracker",
    desc: "Deadlines for GSoC, LFX, MLH, Outreachy & more",
    gradient: "from-emerald-500 to-teal-600",
    hoverBorder: "hover:border-emerald-300 dark:hover:border-emerald-600",
  },
  {
    to: "/student/opensource/guidance#community",
    icon: <MessagesSquare className="w-5 h-5" />,
    title: "Community",
    desc: "Connect with maintainers and fellow contributors",
    gradient: "from-indigo-500 to-blue-600",
    hoverBorder: "hover:border-indigo-300 dark:hover:border-indigo-600",
  },
];

// ─── Guidance Section ────────────────────────────────────────────
function OpenSourceGuidanceSection() {
  return (
    <section className="mb-8">
      <div className="rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 overflow-hidden">
        {/* Header strip */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-gray-100 dark:border-gray-800 bg-gradient-to-r from-purple-50/80 to-indigo-50/80 dark:from-purple-950/30 dark:to-indigo-950/30">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center">
              <Sparkles className="w-3.5 h-3.5 text-white" />
            </div>
            <h2 className="text-sm font-bold text-gray-900 dark:text-white">Open Source Guidance</h2>
          </div>
          <Link
            to="/student/opensource/guidance"
            className="flex items-center gap-1 text-[11px] font-semibold text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 transition-colors no-underline"
          >
            View all
            <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-gray-100 dark:bg-gray-800">
          {GUIDANCE_CARDS.map((card) => (
            <Link
              key={card.to}
              to={card.to}
              className={`flex items-start gap-3 p-4 bg-white dark:bg-gray-900 transition-all no-underline group ${card.hoverBorder} hover:bg-gray-50/50 dark:hover:bg-gray-800/50`}
            >
              <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${card.gradient} flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform`}>
                <span className="text-white">{card.icon}</span>
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-semibold text-gray-900 dark:text-white mb-0.5 group-hover:text-purple-700 dark:group-hover:text-purple-400 transition-colors">
                  {card.title}
                </p>
                <p className="text-[11px] text-gray-400 dark:text-gray-500 leading-snug line-clamp-2">
                  {card.desc}
                </p>
              </div>
              <ChevronRight className="w-3.5 h-3.5 text-gray-300 dark:text-gray-600 mt-1 shrink-0 group-hover:text-purple-500 transition-colors" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Skeleton Card ───────────────────────────────────────────────
function RepoCardSkeleton() {
  return (
    <div className="rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 p-5 animate-pulse">
      <div className="flex items-start gap-3 mb-3">
        <div className="h-10 w-10 rounded-xl bg-gray-100 dark:bg-gray-800" />
        <div className="flex-1">
          <div className="h-4 w-3/4 rounded bg-gray-100 dark:bg-gray-800 mb-2" />
          <div className="h-3 w-1/2 rounded bg-gray-100 dark:bg-gray-800" />
        </div>
      </div>
      <div className="h-3 w-full rounded bg-gray-100 dark:bg-gray-800 mb-2" />
      <div className="h-3 w-2/3 rounded bg-gray-100 dark:bg-gray-800 mb-4" />
      <div className="flex gap-1.5 mb-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-5 w-14 rounded-md bg-gray-100 dark:bg-gray-800" />
        ))}
      </div>
      <div className="flex gap-4 pt-3 border-t border-gray-50 dark:border-gray-800">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-3 w-12 rounded bg-gray-100 dark:bg-gray-800" />
        ))}
      </div>
    </div>
  );
}

// ─── Component ──────────────────────────────────────────────────
export default function RepoDiscoveryPage() {
  const [search, setSearch] = useState("");
  const [selectedDomain, setSelectedDomain] = useState("ALL");
  const [selectedDifficulty, setSelectedDifficulty] = useState("ALL");
  const [sortKey, setSortKey] = useState("stars");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedRepo, setSelectedRepo] = useState<OpenSourceRepo | null>(null);
  const [page, setPage] = useState(1);

  // Build query params
  const queryParams = useMemo(() => {
    const params: Record<string, string | number> = { page, limit: 12, sortBy: sortKey, sortOrder: "desc" };
    if (search.trim()) params.search = search.trim();
    if (selectedDomain !== "ALL") params.domain = selectedDomain;
    if (selectedDifficulty !== "ALL") params.difficulty = selectedDifficulty;
    const sortOpt = SORT_OPTIONS.find((s) => s.key === sortKey);
    if (sortOpt) params.sortOrder = sortOpt.order;
    return params;
  }, [search, selectedDomain, selectedDifficulty, sortKey, page]);

  // Fetch repos from API
  const { data, isLoading, isError } = useQuery({
    queryKey: queryKeys.opensource.list(queryParams),
    queryFn: async () => {
      const res = await api.get<{ repos: OpenSourceRepo[]; pagination: Pagination }>("/opensource", { params: queryParams });
      return res.data;
    },
    placeholderData: (prev) => prev,
  });

  const repos = data?.repos ?? [];
  const pagination = data?.pagination;

  // Stats from current dataset
  const stats = useMemo(() => {
    if (!pagination) return null;
    const totalStars = repos.reduce((s, r) => s + r.stars, 0);
    const trendingCount = repos.filter((r) => r.trending).length;
    return {
      totalRepos: pagination.total,
      totalStars: formatCount(totalStars),
      trendingCount,
      languages: [...new Set(repos.map((r) => r.language))].length,
    };
  }, [repos, pagination]);

  // Reset to page 1 when filters change
  const updateFilter = (setter: (v: string) => void, value: string) => {
    setter(value);
    setPage(1);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* ── Hero ────────────────────────────────────────────── */}
      <section className="relative overflow-hidden rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm mb-8">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-purple-50 to-indigo-50 opacity-60 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-[350px] h-[350px] rounded-full bg-gradient-to-tr from-cyan-50 to-emerald-50 opacity-60 blur-3xl" />
        </div>

        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        <div className="relative z-10 py-12 px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-200 dark:border-purple-700 bg-purple-50 dark:bg-purple-900/30 px-4 py-1.5 text-sm text-purple-700 dark:text-purple-400">
              <Sparkles className="w-4 h-4 text-purple-500" />
              Open Source Discovery
            </div>
            <h1 className="mb-3 font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight text-gray-950 dark:text-white">
              Discover &amp; Contribute
            </h1>
            <p className="mx-auto mb-6 max-w-2xl text-base text-gray-500 leading-relaxed">
              Find beginner-friendly open-source projects, explore trending repositories, and make your first contribution today.
            </p>

            {stats && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap items-center justify-center gap-3"
              >
                {[
                  { icon: <Code2 size={14} />, label: `${stats.totalRepos} Repos` },
                  { icon: <Star size={14} />, label: `${stats.totalStars} Stars` },
                  { icon: <Flame size={14} />, label: `${stats.trendingCount} Trending` },
                  { icon: <Globe size={14} />, label: `${stats.languages} Languages` },
                ].map((s) => (
                  <span
                    key={s.label}
                    className="flex items-center gap-1.5 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-1 text-xs text-gray-600 dark:text-gray-400 shadow-sm"
                  >
                    {s.icon}
                    {s.label}
                  </span>
                ))}
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* ── Open Source Guidance ────────────────────────────── */}
      <OpenSourceGuidanceSection />

      {/* ── Search + Controls ───────────────────────────────── */}
      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="relative flex-1 max-w-xl">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="text"
            value={search}
            onChange={(e) => { setSearch(e.target.value); setPage(1); }}
            placeholder="Search repos, languages, tags..."
            className="w-full rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 py-2.5 pl-10 pr-4 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 outline-none transition shadow-sm focus:border-purple-300 focus:ring-2 focus:ring-purple-500/20"
          />
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`flex items-center gap-2 rounded-xl border px-4 py-2.5 text-sm transition ${
              showFilters
                ? "border-purple-300 bg-purple-50 text-purple-700 dark:border-purple-600 dark:bg-purple-900/30 dark:text-purple-400"
                : "border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 shadow-sm"
            }`}
          >
            <Filter size={16} />
            Filters
          </button>

          <div className="relative group">
            <button className="flex items-center gap-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-2.5 text-sm text-gray-600 dark:text-gray-300 transition shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700">
              <TrendingUp size={16} />
              {SORT_OPTIONS.find((s) => s.key === sortKey)?.label ?? "Sort"}
              <ChevronDown size={14} />
            </button>
            <div className="absolute right-0 top-full z-20 mt-1 hidden min-w-[180px] rounded-xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 p-1 shadow-xl group-hover:block">
              {SORT_OPTIONS.map((opt) => (
                <button
                  key={opt.key}
                  onClick={() => updateFilter(setSortKey, opt.key)}
                  className={`block w-full rounded-lg px-3 py-2 text-left text-sm transition ${
                    sortKey === opt.key
                      ? "bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 font-medium"
                      : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Filter bar ─────────────────────────────────────── */}
      <AnimatePresence>
        {showFilters && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="mb-6 overflow-hidden"
          >
            <div className="rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 p-5 shadow-sm">
              <div className="mb-4">
                <p className="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">Domain</p>
                <div className="flex flex-wrap gap-2">
                  {REPO_DOMAINS.map((d) => (
                    <button
                      key={d.key}
                      onClick={() => updateFilter(setSelectedDomain, d.key)}
                      className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition ${
                        selectedDomain === d.key
                          ? "bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 ring-1 ring-purple-200 dark:ring-purple-700"
                          : "bg-gray-50 dark:bg-gray-800 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-700 dark:hover:text-gray-300"
                      }`}
                    >
                      <span>{d.icon}</span>
                      {d.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">Difficulty</p>
                <div className="flex flex-wrap gap-2">
                  {DIFFICULTY_OPTIONS.map((d) => (
                    <button
                      key={d.key}
                      onClick={() => updateFilter(setSelectedDifficulty, d.key)}
                      className={`rounded-full px-3 py-1.5 text-xs font-medium transition ${
                        selectedDifficulty === d.key
                          ? "bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 ring-1 ring-purple-200 dark:ring-purple-700"
                          : "bg-gray-50 dark:bg-gray-800 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-700 dark:hover:text-gray-300"
                      }`}
                    >
                      {d.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Results count ──────────────────────────────────── */}
      {pagination && (
        <p className="mb-6 text-sm text-gray-400">
          Showing <span className="text-gray-900 dark:text-white font-medium">{repos.length}</span> of {pagination.total} repositories
        </p>
      )}

      {/* ── Loading State ──────────────────────────────────── */}
      {isLoading && (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <RepoCardSkeleton key={i} />
          ))}
        </div>
      )}

      {/* ── Error State ────────────────────────────────────── */}
      {isError && (
        <div className="flex flex-col items-center justify-center py-24 text-center">
          <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-red-50 dark:bg-red-900/20">
            <AlertCircle size={32} className="text-red-400" />
          </div>
          <h3 className="mb-2 text-lg font-semibold text-gray-700 dark:text-gray-300">Failed to load repositories</h3>
          <p className="max-w-md text-sm text-gray-400">
            There was an error fetching the repositories. Please try again later.
          </p>
        </div>
      )}

      {/* ── Empty State ────────────────────────────────────── */}
      {!isLoading && !isError && repos.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col items-center justify-center py-24 text-center"
        >
          <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-gray-50 dark:bg-gray-800">
            <Search size={32} className="text-gray-300 dark:text-gray-600" />
          </div>
          <h3 className="mb-2 text-lg font-semibold text-gray-700 dark:text-gray-300">No repositories found</h3>
          <p className="max-w-md text-sm text-gray-400">
            Try adjusting your search or filters to discover more projects.
          </p>
        </motion.div>
      )}

      {/* ── Cards grid ─────────────────────────────────────── */}
      {!isLoading && !isError && repos.length > 0 && (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {repos.map((repo, i) => (
              <motion.div
                layout
                key={repo.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: i * 0.04, duration: 0.35 }}
                onClick={() => setSelectedRepo(repo)}
                className="group relative cursor-pointer rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 p-5 shadow-sm transition-all hover:shadow-md hover:border-purple-200 dark:hover:border-purple-700"
              >
                {repo.trending && (
                  <div className="absolute -top-2.5 right-4 flex items-center gap-1 rounded-full bg-gradient-to-r from-orange-500 to-rose-500 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white shadow-md">
                    <Flame size={10} />
                    Trending
                  </div>
                )}

                <div className="mb-3 flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-purple-50 to-indigo-50 text-lg font-bold text-purple-600 border border-purple-100">
                    {repo.owner[0].toUpperCase()}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="truncate text-base font-semibold text-gray-900 dark:text-white group-hover:text-purple-700 dark:group-hover:text-purple-400 transition-colors">
                      {repo.owner}/<span className="text-purple-600">{repo.name}</span>
                    </h3>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span
                        className="inline-block h-2.5 w-2.5 rounded-full"
                        style={{ backgroundColor: LANGUAGE_COLORS[repo.language] ?? "#888" }}
                      />
                      <span className="text-xs text-gray-500">{repo.language}</span>
                      <span className={`ml-auto rounded-full px-2 py-0.5 text-[10px] font-medium ring-1 ${difficultyBadge(repo.difficulty).cls}`}>
                        {difficultyBadge(repo.difficulty).label}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="mb-4 line-clamp-2 text-sm text-gray-500">
                  {repo.description}
                </p>

                <div className="mb-4 flex flex-wrap gap-1.5">
                  {repo.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-gray-50 dark:bg-gray-800 px-2 py-0.5 text-[10px] text-gray-500"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 border-t border-gray-50 dark:border-gray-800 pt-3 text-xs text-gray-400">
                  <span className="flex items-center gap-1">
                    <Star size={13} className="text-amber-500" />
                    {formatCount(repo.stars)}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork size={13} className="text-cyan-500" />
                    {formatCount(repo.forks)}
                  </span>
                  <span className="flex items-center gap-1">
                    <CircleDot size={13} className="text-emerald-500" />
                    {formatCount(repo.openIssues)} issues
                  </span>
                  <ArrowUpRight
                    size={14}
                    className="ml-auto text-gray-300 transition group-hover:text-purple-500"
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}

      {/* ── Pagination ─────────────────────────────────────── */}
      {pagination && pagination.totalPages > 1 && (
        <div className="mt-8 flex items-center justify-center gap-2">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page <= 1}
            className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-3.5 py-2 text-sm text-gray-600 dark:text-gray-300 transition hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-40 disabled:pointer-events-none"
          >
            Previous
          </button>
          <div className="flex items-center gap-1">
            {Array.from({ length: Math.min(5, pagination.totalPages) }, (_, i) => {
              let pageNum: number;
              if (pagination.totalPages <= 5) {
                pageNum = i + 1;
              } else if (page <= 3) {
                pageNum = i + 1;
              } else if (page >= pagination.totalPages - 2) {
                pageNum = pagination.totalPages - 4 + i;
              } else {
                pageNum = page - 2 + i;
              }
              return (
                <button
                  key={pageNum}
                  onClick={() => setPage(pageNum)}
                  className={`w-9 h-9 rounded-lg text-sm font-medium transition ${
                    page === pageNum
                      ? "bg-purple-600 text-white shadow-sm"
                      : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                >
                  {pageNum}
                </button>
              );
            })}
          </div>
          <button
            onClick={() => setPage((p) => Math.min(pagination.totalPages, p + 1))}
            disabled={page >= pagination.totalPages}
            className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-3.5 py-2 text-sm text-gray-600 dark:text-gray-300 transition hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-40 disabled:pointer-events-none"
          >
            Next
          </button>
        </div>
      )}

      {/* ── Detail Modal ─────────────────────────────────────── */}
      <AnimatePresence>
        {selectedRepo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm p-4"
            onClick={() => setSelectedRepo(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-6 shadow-2xl md:p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedRepo(null)}
                className="absolute right-4 top-4 rounded-full bg-gray-50 dark:bg-gray-800 p-2 text-gray-400 transition hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-700 dark:hover:text-gray-300"
              >
                <X size={18} />
              </button>

              <div className="mb-6 flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-50 to-indigo-50 text-2xl font-bold text-purple-600 border border-purple-100">
                  {selectedRepo.owner[0].toUpperCase()}
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                    {selectedRepo.owner}/{selectedRepo.name}
                  </h2>
                  <div className="mt-1 flex flex-wrap items-center gap-2">
                    <span
                      className="inline-block h-3 w-3 rounded-full"
                      style={{ backgroundColor: LANGUAGE_COLORS[selectedRepo.language] ?? "#888" }}
                    />
                    <span className="text-sm text-gray-500">{selectedRepo.language}</span>
                    <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ${difficultyBadge(selectedRepo.difficulty).cls}`}>
                      {difficultyBadge(selectedRepo.difficulty).label}
                    </span>
                    {selectedRepo.trending && (
                      <span className="flex items-center gap-1 rounded-full bg-gradient-to-r from-orange-500 to-rose-500 px-2 py-0.5 text-[10px] font-bold uppercase text-white">
                        <Flame size={10} /> Trending
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <p className="mb-6 text-sm leading-relaxed text-gray-600">
                {selectedRepo.description}
              </p>

              <div className="mb-6 grid grid-cols-3 gap-3">
                {[
                  { label: "Stars", value: formatCount(selectedRepo.stars), icon: <Star size={16} className="text-amber-500" /> },
                  { label: "Forks", value: formatCount(selectedRepo.forks), icon: <GitFork size={16} className="text-cyan-500" /> },
                  { label: "Open Issues", value: formatCount(selectedRepo.openIssues), icon: <CircleDot size={16} className="text-emerald-500" /> },
                ].map((s) => (
                  <div key={s.label} className="rounded-xl border border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-800 p-3 text-center">
                    <div className="flex items-center justify-center gap-1.5 mb-1">{s.icon}<span className="text-lg font-bold text-gray-900 dark:text-white">{s.value}</span></div>
                    <p className="text-[10px] uppercase tracking-wider text-gray-400">{s.label}</p>
                  </div>
                ))}
              </div>

              {selectedRepo.techStack.length > 0 && (
                <div className="mb-5">
                  <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-400">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedRepo.techStack.map((t) => (
                      <span key={t} className="rounded-lg bg-purple-50 dark:bg-purple-900/30 px-2.5 py-1 text-xs text-purple-700 dark:text-purple-400 ring-1 ring-purple-100 dark:ring-purple-700">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {selectedRepo.issueTypes.length > 0 && (
                <div className="mb-5">
                  <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-400">Issue Labels</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedRepo.issueTypes.map((t) => (
                      <span key={t} className="rounded-lg bg-emerald-50 dark:bg-emerald-900/30 px-2.5 py-1 text-xs text-emerald-700 dark:text-emerald-400 ring-1 ring-emerald-100 dark:ring-emerald-700">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {selectedRepo.highlights.length > 0 && (
                <div className="mb-6">
                  <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-400">Why Contribute?</h4>
                  <ul className="space-y-1.5">
                    {selectedRepo.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                        <Sparkles size={14} className="mt-0.5 shrink-0 text-purple-500" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mb-6">
                <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-400">Tags</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedRepo.tags.map((tag) => (
                    <span key={tag} className="rounded-md bg-gray-50 dark:bg-gray-800 px-2.5 py-1 text-xs text-gray-500">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href={selectedRepo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-gray-950 dark:bg-white py-3 text-sm font-semibold text-white dark:text-gray-950 transition hover:bg-gray-800 dark:hover:bg-gray-200 no-underline"
              >
                <ExternalLink size={16} />
                View on GitHub
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

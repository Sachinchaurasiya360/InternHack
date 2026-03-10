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
  ArrowRight,
  BookOpen,
  Trophy,
  GraduationCap,
  GitPullRequest,
  ChevronRight,
  Award,
  AlertCircle,
  BarChart3,
} from "lucide-react";
import api from "../../../lib/axios";
import { queryKeys } from "../../../lib/query-keys";
import { SEO } from "../../../components/SEO";
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
    to: "/student/opensource/first-pr",
    icon: GitPullRequest,
    title: "Your First Contribution",
    desc: "10-step guide from zero to your first merged pull request",
  },
  {
    to: "/student/opensource/gsoc",
    icon: Trophy,
    title: "GSoC Repos",
    desc: "Organizations accepted into Google Summer of Code",
  },
  {
    to: "/student/opensource/gsoc-proposal",
    icon: Award,
    title: "GSoC Proposal Guide",
    desc: "Write a winning proposal in 8 steps",
  },
  {
    to: "/student/opensource/programs",
    icon: GraduationCap,
    title: "Program Tracker",
    desc: "Deadlines for GSoC, LFX, MLH, Outreachy & more",
  },
];

// ─── Skeleton Card ───────────────────────────────────────────────
function RepoCardSkeleton() {
  return (
    <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-5 animate-pulse">
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
      <div className="flex gap-4 pt-3 border-t border-gray-100 dark:border-gray-800">
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

  const activeFilters =
    (selectedDomain !== "ALL" ? 1 : 0) +
    (selectedDifficulty !== "ALL" ? 1 : 0);

  return (
    <div className="min-h-screen">
      <SEO title="Open Source - InternHack" description="Discover beginner-friendly open-source projects and make your first contribution" />

      {/* Hero */}
      <section className="relative overflow-hidden pt-4 pb-16 px-6">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-125 h-125 rounded-full bg-linear-to-br from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20 opacity-60 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-100 h-100 rounded-full bg-linear-to-tr from-cyan-50 to-teal-50 dark:from-cyan-900/20 dark:to-teal-900/20 opacity-60 blur-3xl" />
        </div>

        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto text-center mt-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight text-gray-950 dark:text-white mb-4"
          >
            Discover & <span className="text-gradient-accent">Contribute</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-500 dark:text-gray-500 max-w-xl mx-auto mb-10 leading-relaxed"
          >
            Find beginner-friendly open-source projects, explore trending repos, and make your first contribution today.
          </motion.p>

          {/* Search */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="relative max-w-lg mx-auto"
          >
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-gray-500" />
            <input
              type="text"
              value={search}
              onChange={(e) => { setSearch(e.target.value); setPage(1); }}
              placeholder="Search repos, languages, tags..."
              className="w-full pl-11 pr-5 py-3.5 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-300 transition-all shadow-sm"
            />
          </motion.div>

          {stats && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex items-center justify-center gap-4 mt-6"
            >
              <span className="text-gray-400 dark:text-gray-500 text-sm">{stats.totalRepos} repos</span>
              <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600" />
              <span className="text-gray-400 dark:text-gray-500 text-sm">{stats.totalStars} stars</span>
              <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600" />
              <span className="text-gray-400 dark:text-gray-500 text-sm">{stats.trendingCount} trending</span>
              <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600" />
              <span className="text-gray-400 dark:text-gray-500 text-sm">{stats.languages} languages</span>
            </motion.div>
          )}
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Guidance Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {GUIDANCE_CARDS.map((card, i) => (
            <motion.div
              key={card.to}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.06, duration: 0.4 }}
            >
              <Link
                to={card.to}
                className="group flex items-center gap-3 p-4 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-lg hover:shadow-gray-100 dark:hover:shadow-gray-900 transition-all duration-300 no-underline"
              >
                <div className="w-10 h-10 rounded-xl bg-gray-950 dark:bg-white flex items-center justify-center shrink-0">
                  <card.icon className="w-4.5 h-4.5 text-white dark:text-gray-950" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-gray-950 dark:text-white truncate">{card.title}</p>
                  <p className="text-[11px] text-gray-400 dark:text-gray-500 truncate">{card.desc}</p>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-300 dark:text-gray-600 group-hover:text-gray-500 dark:group-hover:text-gray-400 transition-colors shrink-0" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Filter bar */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          {/* Domain chips */}
          <div className="flex flex-wrap gap-2">
            {REPO_DOMAINS.map((d) => (
              <button
                key={d.key}
                onClick={() => updateFilter(setSelectedDomain, d.key === selectedDomain ? "ALL" : d.key)}
                className={`px-3.5 py-2 rounded-xl text-sm font-medium transition-all border ${
                  selectedDomain === d.key
                    ? "bg-gray-950 dark:bg-white text-white dark:text-gray-950 border-gray-950 dark:border-white"
                    : "bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
                }`}
              >
                {d.label}
              </button>
            ))}
          </div>

          {/* More filters toggle */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-sm font-medium transition-all border ${
              activeFilters > 0
                ? "bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 border-purple-200 dark:border-purple-800"
                : "bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
            }`}
          >
            <Filter className="w-3.5 h-3.5" />
            Filters
            {activeFilters > 0 && (
              <span className="w-5 h-5 rounded-full bg-purple-500 text-white text-xs flex items-center justify-center">
                {activeFilters}
              </span>
            )}
            <ChevronDown className={`w-3.5 h-3.5 transition-transform ${showFilters ? "rotate-180" : ""}`} />
          </button>

          {/* Sort */}
          <div className="relative group">
            <button className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-sm font-medium border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400 transition-all hover:bg-gray-50 dark:hover:bg-gray-800">
              <TrendingUp className="w-3.5 h-3.5" />
              {SORT_OPTIONS.find((s) => s.key === sortKey)?.label ?? "Sort"}
              <ChevronDown className="w-3.5 h-3.5" />
            </button>
            <div className="absolute right-0 top-full z-20 mt-1 hidden min-w-44 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-1 shadow-xl group-hover:block">
              {SORT_OPTIONS.map((opt) => (
                <button
                  key={opt.key}
                  onClick={() => updateFilter(setSortKey, opt.key)}
                  className={`block w-full rounded-lg px-3 py-2 text-left text-sm transition ${
                    sortKey === opt.key
                      ? "bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 font-medium"
                      : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Analytics link */}
          <Link
            to="/student/opensource/analytics"
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-sm font-medium border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all no-underline ml-auto"
          >
            <BarChart3 className="w-3.5 h-3.5" />
            Analytics
          </Link>
        </div>

        {/* Expanded filters */}
        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden mb-6"
            >
              <div className="flex flex-wrap gap-4 p-4 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700">
                <div>
                  <label className="text-xs font-medium text-gray-500 dark:text-gray-500 mb-2 block">Difficulty</label>
                  <select
                    value={selectedDifficulty}
                    onChange={(e) => updateFilter(setSelectedDifficulty, e.target.value)}
                    className="px-3 py-2 rounded-xl text-sm border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                  >
                    {DIFFICULTY_OPTIONS.map((d) => (
                      <option key={d.key} value={d.key}>{d.label}</option>
                    ))}
                  </select>
                </div>

                {activeFilters > 0 && (
                  <div className="flex items-end">
                    <button
                      onClick={() => {
                        setSelectedDomain("ALL");
                        setSelectedDifficulty("ALL");
                        setSearch("");
                        setPage(1);
                      }}
                      className="px-3 py-2 text-sm text-gray-400 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 underline underline-offset-2"
                    >
                      Clear all
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Results count */}
        <div className="flex items-center justify-between mb-5">
          <p className="text-sm text-gray-500 dark:text-gray-500">
            {pagination ? (
              <>
                <span className="font-semibold text-gray-900 dark:text-white">{pagination.total}</span> repositor{pagination.total !== 1 ? "ies" : "y"}
                {selectedDomain !== "ALL" && <> in <span className="font-semibold text-gray-900 dark:text-white">{REPO_DOMAINS.find((d) => d.key === selectedDomain)?.label}</span></>}
                {search && <> matching "<span className="font-semibold text-gray-900 dark:text-white">{search}</span>"</>}
              </>
            ) : (
              "Loading..."
            )}
          </p>
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <RepoCardSkeleton key={i} />
            ))}
          </div>
        )}

        {/* Error State */}
        {isError && (
          <div className="text-center py-24 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700">
            <AlertCircle className="w-10 h-10 text-gray-300 dark:text-gray-600 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-1">Failed to load repositories</h3>
            <p className="text-sm text-gray-400 dark:text-gray-500">There was an error fetching the repositories. Please try again later.</p>
          </div>
        )}

        {/* Empty State */}
        {!isLoading && !isError && repos.length === 0 && (
          <div className="text-center py-24 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700">
            <Search className="w-10 h-10 text-gray-300 dark:text-gray-600 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-1">No repositories found</h3>
            <p className="text-sm text-gray-400 dark:text-gray-500">Try adjusting your search or filters to discover more projects.</p>
          </div>
        )}

        {/* Cards grid */}
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
                  transition={{ delay: i * 0.04, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -4 }}
                  className="h-full"
                >
                  <button
                    onClick={() => setSelectedRepo(repo)}
                    className="group relative flex flex-col h-full w-full text-left bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-lg hover:shadow-gray-100 dark:hover:shadow-gray-900 transition-all duration-300 cursor-pointer"
                  >
                    {repo.trending && (
                      <div className="absolute -top-2.5 right-4 flex items-center gap-1 rounded-full bg-orange-500 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white shadow-md">
                        <Flame size={10} />
                        Trending
                      </div>
                    )}

                    <div className="flex flex-col flex-1 p-6">
                      {/* Header */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 flex items-center justify-center shrink-0 text-sm font-bold text-gray-500 dark:text-gray-400">
                            {repo.owner[0].toUpperCase()}
                          </div>
                          <span className="text-xs font-medium text-gray-500 dark:text-gray-500">{repo.owner}</span>
                        </div>
                        <span className={`rounded-full px-2 py-0.5 text-[10px] font-medium ring-1 ${difficultyBadge(repo.difficulty).cls}`}>
                          {difficultyBadge(repo.difficulty).label}
                        </span>
                      </div>

                      {/* Name */}
                      <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2 leading-snug group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                        {repo.name}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-gray-500 dark:text-gray-500 line-clamp-2 leading-relaxed mb-4 flex-1">
                        {repo.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        <span className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-gray-50 dark:bg-gray-800 text-xs font-medium text-gray-600 dark:text-gray-400">
                          <span
                            className="inline-block h-2 w-2 rounded-full"
                            style={{ backgroundColor: LANGUAGE_COLORS[repo.language] ?? "#888" }}
                          />
                          {repo.language}
                        </span>
                        {repo.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 rounded-md bg-gray-50 dark:bg-gray-800 text-[10px] text-gray-500 dark:text-gray-400"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>

                      {/* Bottom stats + CTA */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-800">
                        <div className="flex items-center gap-3 text-xs text-gray-400">
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
                            {formatCount(repo.openIssues)}
                          </span>
                        </div>
                        <span className="flex items-center gap-1 text-sm font-medium text-gray-400 dark:text-gray-500 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                          Details
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                        </span>
                      </div>
                    </div>
                  </button>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}

        {/* Pagination */}
        {pagination && pagination.totalPages > 1 && (
          <div className="mt-8 flex items-center justify-center gap-2">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page <= 1}
              className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-3.5 py-2 text-sm text-gray-600 dark:text-gray-300 transition hover:bg-gray-50 dark:hover:bg-gray-800 disabled:opacity-40 disabled:pointer-events-none"
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
                        ? "bg-gray-950 dark:bg-white text-white dark:text-gray-950 shadow-sm"
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
              className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-3.5 py-2 text-sm text-gray-600 dark:text-gray-300 transition hover:bg-gray-50 dark:hover:bg-gray-800 disabled:opacity-40 disabled:pointer-events-none"
            >
              Next
            </button>
          </div>
        )}
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedRepo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
            onClick={() => setSelectedRepo(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl w-full max-w-2xl max-h-[85vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal header */}
              <div className="sticky top-0 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 px-6 py-4 rounded-t-2xl flex items-center justify-between z-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 flex items-center justify-center text-sm font-bold text-gray-500 dark:text-gray-400">
                    {selectedRepo.owner[0].toUpperCase()}
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-gray-900 dark:text-white">
                      {selectedRepo.owner}/{selectedRepo.name}
                    </h2>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span
                        className="inline-block h-2.5 w-2.5 rounded-full"
                        style={{ backgroundColor: LANGUAGE_COLORS[selectedRepo.language] ?? "#888" }}
                      />
                      <span className="text-sm text-gray-500 dark:text-gray-500">{selectedRepo.language}</span>
                    </div>
                  </div>
                </div>
                <button onClick={() => setSelectedRepo(null)} className="w-8 h-8 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center justify-center transition-colors">
                  <X className="w-4 h-4 text-gray-500 dark:text-gray-500" />
                </button>
              </div>

              <div className="px-6 py-6 space-y-6">
                {/* Status badges */}
                <div className="flex flex-wrap gap-3">
                  <span className={`rounded-full px-2.5 py-1 text-xs font-medium ring-1 ${difficultyBadge(selectedRepo.difficulty).cls}`}>
                    {difficultyBadge(selectedRepo.difficulty).label}
                  </span>
                  {selectedRepo.trending && (
                    <span className="flex items-center gap-1 rounded-full bg-orange-500 px-2.5 py-1 text-[10px] font-bold uppercase text-white">
                      <Flame size={10} /> Trending
                    </span>
                  )}
                </div>

                {/* Description */}
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-1.5">
                    <BookOpen className="w-4 h-4 text-gray-400 dark:text-gray-500" />
                    About
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{selectedRepo.description}</p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: "Stars", value: formatCount(selectedRepo.stars), icon: <Star size={16} className="text-amber-500" /> },
                    { label: "Forks", value: formatCount(selectedRepo.forks), icon: <GitFork size={16} className="text-cyan-500" /> },
                    { label: "Open Issues", value: formatCount(selectedRepo.openIssues), icon: <CircleDot size={16} className="text-emerald-500" /> },
                  ].map((s) => (
                    <div key={s.label} className="rounded-xl bg-gray-50 dark:bg-gray-800 p-3 text-center">
                      <div className="flex items-center justify-center gap-1.5 mb-1">{s.icon}<span className="text-lg font-bold text-gray-900 dark:text-white">{s.value}</span></div>
                      <p className="text-[10px] uppercase tracking-wider text-gray-400">{s.label}</p>
                    </div>
                  ))}
                </div>

                {/* Tech Stack */}
                {selectedRepo.techStack.length > 0 && (
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-1.5">
                      <Code2 className="w-4 h-4 text-gray-400 dark:text-gray-500" />
                      Tech Stack
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedRepo.techStack.map((t) => (
                        <span key={t} className="px-2.5 py-1 rounded-lg bg-purple-50 dark:bg-purple-900/30 text-xs text-purple-700 dark:text-purple-400 ring-1 ring-purple-100 dark:ring-purple-700">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Issue Labels */}
                {selectedRepo.issueTypes.length > 0 && (
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Issue Labels</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedRepo.issueTypes.map((t) => (
                        <span key={t} className="px-2.5 py-1 rounded-lg bg-emerald-50 dark:bg-emerald-900/30 text-xs text-emerald-700 dark:text-emerald-400 ring-1 ring-emerald-100 dark:ring-emerald-700">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Highlights */}
                {selectedRepo.highlights.length > 0 && (
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-purple-500" />
                      Why Contribute?
                    </h3>
                    <div className="space-y-2">
                      {selectedRepo.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-sm text-gray-600 dark:text-gray-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5 shrink-0" />
                          {h}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tags */}
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedRepo.tags.map((tag) => (
                      <span key={tag} className="px-2.5 py-1 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 text-xs font-medium text-gray-600 dark:text-gray-400">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* View on GitHub */}
                <a
                  href={selectedRepo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-gray-950 dark:bg-white text-white dark:text-gray-950 text-sm font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors no-underline"
                >
                  View on GitHub
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

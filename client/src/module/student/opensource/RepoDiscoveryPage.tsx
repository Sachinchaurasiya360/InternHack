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
  Wand2,
  Flame,
  ArrowRight,
  BookOpen,
  AlertCircle,
  BarChart3,
  Plus,
} from "lucide-react";
import api from "../../../lib/axios";
import { queryKeys } from "../../../lib/query-keys";
import { SEO } from "../../../components/SEO";
import { canonicalUrl } from "../../../lib/seo.utils";
import { PaginationControls } from "../../../components/ui/PaginationControls";
import type { OpenSourceRepo, Pagination } from "../../../lib/types";
import { useAuthStore } from "../../../lib/auth.store";
import { REPO_DOMAINS, DIFFICULTY_OPTIONS, SORT_OPTIONS, LANGUAGE_COLORS } from "./reposData";
import { formatCount, difficultyBadge } from "./_shared/repo-utils";
import { RepoCard, RepoCardSkeleton } from "./RepoCard";
import { GuidanceCards } from "./GuidanceCards";
import { SuggestRepoModal } from "./SuggestRepoModal";



// ─── Component ──────────────────────────────────────────────────
export default function RepoDiscoveryPage() {
  const [search, setSearch] = useState("");
  const [selectedDomain, setSelectedDomain] = useState("ALL");
  const [selectedDifficulty, setSelectedDifficulty] = useState("ALL");
  const [sortKey, setSortKey] = useState("stars");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedRepo, setSelectedRepo] = useState<OpenSourceRepo | null>(null);
  const [page, setPage] = useState(1);
  const [showSuggestModal, setShowSuggestModal] = useState(false);
  const { user } = useAuthStore();

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
      <SEO
        title="Open Source Projects - Find Beginner-Friendly Repos"
        description="Discover beginner-friendly open-source projects, track trending repos, and make your first contribution. Curated by engineers for students."
        keywords="open source, first contribution, good first issue, github, beginner friendly, GSoC, hacktoberfest"
        canonicalUrl={canonicalUrl("/student/opensource")}
      />

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
        {/* Analytics Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="mb-6"
        >
          <Link
            to="/student/opensource/analytics"
            className="group flex items-center gap-4 p-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl no-underline hover:border-purple-300 dark:hover:border-purple-700 hover:shadow-lg hover:shadow-purple-100/50 dark:hover:shadow-purple-900/20 transition-all duration-300"
          >
            <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-900/30 flex items-center justify-center shrink-0">
              <BarChart3 className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-gray-950 dark:text-white">Open Source Analytics</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Track your contributions, PRs, and open-source activity</p>
            </div>
            <ArrowRight className="w-5 h-5 text-gray-400 dark:text-gray-500 group-hover:translate-x-1 transition-transform shrink-0" />
          </Link>
        </motion.div>

        {/* Guidance Cards */}
        <GuidanceCards />

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
            {/* Suggest a Repo card */}
            {page === 1 && (
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4 }}
                className="h-full"
              >
                <button
                  onClick={() => {
                    if (!user) { window.location.href = "/login"; return; }
                    setShowSuggestModal(true);
                  }}
                  className="group relative flex flex-col items-center justify-center h-full w-full min-h-55 text-center bg-white dark:bg-gray-900 rounded-2xl border-2 border-dashed border-gray-300 dark:border-gray-600 hover:border-purple-400 dark:hover:border-purple-500 hover:shadow-lg hover:shadow-purple-100/50 dark:hover:shadow-purple-900/20 transition-all duration-300 cursor-pointer p-6"
                >
                  <div className="w-14 h-14 rounded-2xl bg-purple-50 dark:bg-purple-900/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Plus className="w-7 h-7 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="text-base font-bold text-gray-900 dark:text-white mb-1">Suggest a Repository</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-500 leading-relaxed max-w-50">
                    Know a great open-source project? Submit it for review.
                  </p>
                </button>
              </motion.div>
            )}

            <AnimatePresence mode="popLayout">
              {repos.map((repo, i) => (
                <RepoCard key={repo.id} repo={repo} index={i} onSelect={setSelectedRepo} />
              ))}
            </AnimatePresence>
          </div>
        )}

        {/* Pagination */}
        {pagination && (
          <PaginationControls
            currentPage={page}
            totalPages={pagination.totalPages}
            onPageChange={setPage}
          />
        )}
      </div>

      {/* Suggest Repo Modal */}
      <AnimatePresence>
        <SuggestRepoModal open={showSuggestModal} onClose={() => setShowSuggestModal(false)} />
      </AnimatePresence>

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
                      <Wand2 className="w-4 h-4 text-purple-500" />
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

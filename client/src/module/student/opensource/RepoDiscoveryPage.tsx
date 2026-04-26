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

const ghostBtnCls =
  "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-bold text-stone-700 dark:text-stone-300 bg-white dark:bg-stone-900 border border-stone-300 dark:border-white/15 hover:bg-stone-50 dark:hover:bg-white/5 transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";

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

  const queryParams = useMemo(() => {
    const params: Record<string, string | number> = { page, limit: 12, sortBy: sortKey, sortOrder: "desc" };
    if (search.trim()) params.search = search.trim();
    if (selectedDomain !== "ALL") params.domain = selectedDomain;
    if (selectedDifficulty !== "ALL") params.difficulty = selectedDifficulty;
    const sortOpt = SORT_OPTIONS.find((s) => s.key === sortKey);
    if (sortOpt) params.sortOrder = sortOpt.order;
    return params;
  }, [search, selectedDomain, selectedDifficulty, sortKey, page]);

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

  const updateFilter = (setter: (v: string) => void, value: string) => {
    setter(value);
    setPage(1);
  };

  const activeFilters =
    (selectedDomain !== "ALL" ? 1 : 0) +
    (selectedDifficulty !== "ALL" ? 1 : 0);

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-950">
      <SEO
        title="Open Source Projects, Find Beginner-Friendly Repos"
        description="Discover beginner-friendly open-source projects, track trending repos, and make your first contribution. Curated by engineers for students."
        keywords="open source, first contribution, good first issue, github, beginner friendly, GSoC, hacktoberfest"
        canonicalUrl={canonicalUrl("/student/opensource")}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-8 py-8">
        {/* Editorial header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <div className="h-1 w-1 bg-lime-400"></div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
              learning / open source
            </span>
          </div>
          <div className="flex items-end justify-between gap-4 flex-wrap">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-50 mb-1.5 leading-tight">
                Find a repo, ship your{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">first PR.</span>
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
                    aria-hidden
                    className="absolute bottom-0.5 left-0 right-0 h-2.5 sm:h-3 bg-lime-400 origin-left z-0"
                  />
                </span>
              </h1>
              <p className="text-sm text-stone-600 dark:text-stone-400 max-w-2xl">
                Beginner-friendly open-source projects, curated by engineers for students.
              </p>
            </div>
            {stats && (
              <div className="flex items-center gap-4 text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
                <span>
                  <span className="text-stone-900 dark:text-stone-50">{stats.totalRepos}</span> repos
                </span>
                <span className="h-1 w-1 bg-stone-300 dark:bg-stone-700" />
                <span>
                  <span className="text-stone-900 dark:text-stone-50">{stats.totalStars}</span> stars
                </span>
                <span className="h-1 w-1 bg-stone-300 dark:bg-stone-700" />
                <span>
                  <span className="text-lime-600 dark:text-lime-400">{stats.trendingCount}</span> trending
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Search bar */}
        <div className="mb-6 relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400 dark:text-stone-500" />
          <input
            type="text"
            value={search}
            onChange={(e) => { setSearch(e.target.value); setPage(1); }}
            placeholder="Search repos, languages, tags..."
            className="w-full pl-10 pr-4 py-3 bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md text-stone-900 dark:text-stone-50 placeholder-stone-400 dark:placeholder-stone-500 text-sm focus:outline-none focus:border-stone-400 dark:focus:border-white/25 transition-colors"
          />
        </div>

        {/* Analytics + Suggest strip */}
        <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 gap-0 border-t border-l border-stone-200 dark:border-white/10">
          <Link
            to="/student/opensource/analytics"
            className="group flex items-center gap-3 p-4 bg-white dark:bg-stone-900 border-r border-b border-stone-200 dark:border-white/10 no-underline hover:bg-stone-900 dark:hover:bg-stone-50 transition-colors"
          >
            <div className="w-9 h-9 rounded-md bg-stone-100 dark:bg-white/5 group-hover:bg-white/10 dark:group-hover:bg-stone-900/10 flex items-center justify-center shrink-0">
              <BarChart3 className="w-4 h-4 text-stone-700 dark:text-stone-300 group-hover:text-lime-400" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5 mb-0.5">
                <div className="h-1 w-1 bg-lime-400"></div>
                <p className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400 group-hover:text-lime-400">
                  analytics
                </p>
              </div>
              <p className="text-sm font-bold text-stone-900 dark:text-stone-50 group-hover:text-stone-50 dark:group-hover:text-stone-900">
                Track your contributions
              </p>
            </div>
            <ArrowRight className="w-4 h-4 text-stone-400 dark:text-stone-500 group-hover:text-lime-400 group-hover:translate-x-0.5 transition-all shrink-0" />
          </Link>

          <button
            type="button"
            onClick={() => {
              if (!user) { window.location.href = "/login"; return; }
              setShowSuggestModal(true);
            }}
            className="group flex items-center gap-3 p-4 bg-white dark:bg-stone-900 border-r border-b border-stone-200 dark:border-white/10 cursor-pointer hover:bg-stone-900 dark:hover:bg-stone-50 transition-colors text-left"
          >
            <div className="w-9 h-9 rounded-md bg-stone-100 dark:bg-white/5 group-hover:bg-white/10 dark:group-hover:bg-stone-900/10 flex items-center justify-center shrink-0">
              <Plus className="w-4 h-4 text-stone-700 dark:text-stone-300 group-hover:text-lime-400" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5 mb-0.5">
                <div className="h-1 w-1 bg-lime-400"></div>
                <p className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400 group-hover:text-lime-400">
                  suggest
                </p>
              </div>
              <p className="text-sm font-bold text-stone-900 dark:text-stone-50 group-hover:text-stone-50 dark:group-hover:text-stone-900">
                Know a great repo? Submit it
              </p>
            </div>
            <ArrowRight className="w-4 h-4 text-stone-400 dark:text-stone-500 group-hover:text-lime-400 group-hover:translate-x-0.5 transition-all shrink-0" />
          </button>
        </div>

        {/* Guidance Cards */}
        <GuidanceCards />

        {/* Filter bar */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          {/* Domain chips */}
          {REPO_DOMAINS.map((d) => {
            const active = selectedDomain === d.key;
            return (
              <button
                key={d.key}
                type="button"
                onClick={() => updateFilter(setSelectedDomain, d.key === selectedDomain ? "ALL" : d.key)}
                className={`inline-flex items-center px-3 py-1.5 rounded-md text-xs font-bold border transition-colors cursor-pointer ${
                  active
                    ? "bg-stone-900 dark:bg-stone-50 text-stone-50 dark:text-stone-900 border-stone-900 dark:border-stone-50"
                    : "bg-white dark:bg-stone-900 text-stone-700 dark:text-stone-300 border-stone-200 dark:border-white/10 hover:border-stone-400 dark:hover:border-white/25"
                }`}
              >
                {d.label}
              </button>
            );
          })}

          {/* More filters toggle */}
          <button
            type="button"
            onClick={() => setShowFilters(!showFilters)}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-bold border transition-colors cursor-pointer ${
              activeFilters > 0
                ? "bg-lime-400 text-stone-950 border-lime-400 hover:bg-lime-300"
                : "bg-white dark:bg-stone-900 text-stone-700 dark:text-stone-300 border-stone-200 dark:border-white/10 hover:border-stone-400 dark:hover:border-white/25"
            }`}
          >
            <Filter className="w-3 h-3" />
            Filters
            {activeFilters > 0 && (
              <span className="inline-flex items-center justify-center h-4 min-w-4 px-1 rounded-md bg-stone-950 text-lime-400 text-[10px] font-mono">
                {activeFilters}
              </span>
            )}
            <ChevronDown className={`w-3 h-3 transition-transform ${showFilters ? "rotate-180" : ""}`} />
          </button>

          {/* Sort dropdown */}
          <div className="relative group">
            <button type="button" className={ghostBtnCls}>
              <TrendingUp className="w-3 h-3" />
              {SORT_OPTIONS.find((s) => s.key === sortKey)?.label ?? "Sort"}
              <ChevronDown className="w-3 h-3" />
            </button>
            <div className="absolute right-0 top-full z-20 mt-1 hidden min-w-44 rounded-md border border-stone-200 dark:border-white/10 bg-white dark:bg-stone-900 p-1 shadow-xl group-hover:block">
              {SORT_OPTIONS.map((opt) => (
                <button
                  key={opt.key}
                  type="button"
                  onClick={() => updateFilter(setSortKey, opt.key)}
                  className={`w-full text-left px-2.5 py-1.5 rounded-md text-xs transition-colors cursor-pointer ${
                    sortKey === opt.key
                      ? "bg-stone-900 dark:bg-stone-50 text-lime-400"
                      : "text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-white/5"
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
              <div className="flex flex-wrap gap-4 p-4 bg-white dark:bg-stone-900 rounded-md border border-stone-200 dark:border-white/10">
                <div>
                  <label className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400 mb-1.5 block">
                    difficulty
                  </label>
                  <select
                    value={selectedDifficulty}
                    onChange={(e) => updateFilter(setSelectedDifficulty, e.target.value)}
                    className="px-3 py-2 rounded-md text-sm border border-stone-200 dark:border-white/15 bg-white dark:bg-stone-800 text-stone-700 dark:text-stone-100 focus:outline-none focus:border-stone-400 dark:focus:border-white/25"
                  >
                    {DIFFICULTY_OPTIONS.map((d) => (
                      <option key={d.key} value={d.key}>{d.label}</option>
                    ))}
                  </select>
                </div>

                {activeFilters > 0 && (
                  <div className="flex items-end">
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedDomain("ALL");
                        setSelectedDifficulty("ALL");
                        setSearch("");
                        setPage(1);
                      }}
                      className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-50 transition-colors bg-transparent border-0 cursor-pointer py-2"
                    >
                      / clear all
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Results count */}
        <div className="flex items-center justify-between mb-4">
          <p className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
            {pagination ? (
              <>
                <span className="text-stone-900 dark:text-stone-50">{pagination.total}</span>
                {" "}repositor{pagination.total !== 1 ? "ies" : "y"}
                {selectedDomain !== "ALL" && <> / <span className="text-stone-900 dark:text-stone-50">{REPO_DOMAINS.find((d) => d.key === selectedDomain)?.label}</span></>}
                {search && <> / matching "<span className="text-stone-900 dark:text-stone-50">{search}</span>"</>}
              </>
            ) : (
              "loading..."
            )}
          </p>
        </div>

        {/* Loading */}
        {isLoading && (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <RepoCardSkeleton key={i} />
            ))}
          </div>
        )}

        {/* Error */}
        {isError && (
          <div className="text-center py-16 bg-white dark:bg-stone-900 rounded-md border border-stone-200 dark:border-white/10">
            <div className="w-12 h-12 rounded-md bg-stone-100 dark:bg-white/5 flex items-center justify-center mx-auto mb-3">
              <AlertCircle className="w-5 h-5 text-stone-400 dark:text-stone-500" />
            </div>
            <h3 className="text-base font-bold text-stone-900 dark:text-stone-50 mb-1">Failed to load repositories</h3>
            <p className="text-sm text-stone-500 dark:text-stone-400">There was an error fetching the list. Please try again later.</p>
          </div>
        )}

        {/* Empty */}
        {!isLoading && !isError && repos.length === 0 && (
          <div className="text-center py-16 bg-white dark:bg-stone-900 rounded-md border border-stone-200 dark:border-white/10">
            <div className="w-12 h-12 rounded-md bg-stone-100 dark:bg-white/5 flex items-center justify-center mx-auto mb-3">
              <Search className="w-5 h-5 text-stone-400 dark:text-stone-500" />
            </div>
            <h3 className="text-base font-bold text-stone-900 dark:text-stone-50 mb-1">No repositories found</h3>
            <p className="text-sm text-stone-500 dark:text-stone-400">Try adjusting your search or filters.</p>
          </div>
        )}

        {/* Cards grid */}
        {!isLoading && !isError && repos.length > 0 && (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/50 backdrop-blur-sm"
            onClick={() => setSelectedRepo(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="bg-white dark:bg-stone-900 rounded-md border border-stone-200 dark:border-white/10 shadow-2xl w-full max-w-2xl max-h-[85vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal header */}
              <div className="sticky top-0 bg-white dark:bg-stone-900 border-b border-stone-200 dark:border-white/10 px-5 py-3.5 flex items-center justify-between z-10">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-9 h-9 rounded-md bg-stone-100 dark:bg-white/5 border border-stone-200 dark:border-white/10 flex items-center justify-center shrink-0 text-sm font-bold text-stone-700 dark:text-stone-200">
                    {selectedRepo.owner[0].toUpperCase()}
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <div className="h-1 w-1 bg-lime-400"></div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
                        repository
                      </span>
                    </div>
                    <h2 className="text-base font-bold text-stone-900 dark:text-stone-50 truncate">
                      {selectedRepo.owner}/{selectedRepo.name}
                    </h2>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedRepo(null)}
                  className="w-8 h-8 rounded-md flex items-center justify-center text-stone-500 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-white/5 cursor-pointer"
                  aria-label="Close"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="px-5 py-5 space-y-5">
                {/* Status row */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className={`rounded-md px-2 py-0.5 text-[11px] font-medium ring-1 ${difficultyBadge(selectedRepo.difficulty).cls}`}>
                    {difficultyBadge(selectedRepo.difficulty).label}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-md px-2 py-0.5 text-[11px] font-medium bg-stone-100 dark:bg-white/5 text-stone-700 dark:text-stone-300">
                    <span
                      className="inline-block h-2 w-2 rounded-full"
                      style={{ backgroundColor: LANGUAGE_COLORS[selectedRepo.language] ?? "#888" }}
                    />
                    {selectedRepo.language}
                  </span>
                  {selectedRepo.trending && (
                    <span className="inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-[10px] font-mono uppercase tracking-widest bg-stone-900 dark:bg-stone-50 text-lime-400">
                      <Flame size={10} /> trending
                    </span>
                  )}
                </div>

                {/* Description */}
                <div>
                  <div className="flex items-center gap-1.5 mb-2">
                    <div className="h-1 w-1 bg-lime-400"></div>
                    <p className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
                      about
                    </p>
                  </div>
                  <p className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed flex items-start gap-2">
                    <BookOpen className="w-4 h-4 text-stone-400 dark:text-stone-500 shrink-0 mt-0.5" />
                    <span>{selectedRepo.description}</span>
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-0 border-t border-l border-stone-200 dark:border-white/10">
                  {[
                    { label: "stars", value: formatCount(selectedRepo.stars), icon: Star },
                    { label: "forks", value: formatCount(selectedRepo.forks), icon: GitFork },
                    { label: "issues", value: formatCount(selectedRepo.openIssues), icon: CircleDot },
                  ].map((s) => (
                    <div
                      key={s.label}
                      className="p-3 border-r border-b border-stone-200 dark:border-white/10 bg-white dark:bg-stone-900 text-center"
                    >
                      <div className="flex items-center justify-center gap-1.5 mb-1">
                        <s.icon className="w-3.5 h-3.5 text-lime-600 dark:text-lime-400" />
                        <span className="text-lg font-bold tracking-tight text-stone-900 dark:text-stone-50">{s.value}</span>
                      </div>
                      <p className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">{s.label}</p>
                    </div>
                  ))}
                </div>

                {/* Tech Stack */}
                {selectedRepo.techStack.length > 0 && (
                  <div>
                    <div className="flex items-center gap-1.5 mb-2">
                      <div className="h-1 w-1 bg-lime-400"></div>
                      <p className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400 inline-flex items-center gap-1.5">
                        <Code2 className="w-3 h-3" />
                        tech stack
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedRepo.techStack.map((t) => (
                        <span key={t} className="px-2 py-0.5 rounded-md bg-stone-100 dark:bg-white/5 text-xs text-stone-700 dark:text-stone-300">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Issue Labels */}
                {selectedRepo.issueTypes.length > 0 && (
                  <div>
                    <div className="flex items-center gap-1.5 mb-2">
                      <div className="h-1 w-1 bg-lime-400"></div>
                      <p className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
                        issue labels
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedRepo.issueTypes.map((t) => (
                        <span key={t} className="px-2 py-0.5 rounded-md bg-stone-100 dark:bg-white/5 text-xs text-stone-700 dark:text-stone-300">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Highlights */}
                {selectedRepo.highlights.length > 0 && (
                  <div>
                    <div className="flex items-center gap-1.5 mb-2">
                      <div className="h-1 w-1 bg-lime-400"></div>
                      <p className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400 inline-flex items-center gap-1.5">
                        <Wand2 className="w-3 h-3" />
                        why contribute
                      </p>
                    </div>
                    <div className="space-y-1.5">
                      {selectedRepo.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-2 text-sm text-stone-700 dark:text-stone-300">
                          <span className="h-1 w-1 bg-lime-400 mt-2 shrink-0" />
                          {h}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tags */}
                <div>
                  <div className="flex items-center gap-1.5 mb-2">
                    <div className="h-1 w-1 bg-lime-400"></div>
                    <p className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
                      tags
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedRepo.tags.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 rounded-md bg-stone-100 dark:bg-white/5 text-[11px] font-mono text-stone-600 dark:text-stone-400">
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
                  className="group flex items-center justify-center gap-2 w-full py-3 rounded-md bg-lime-400 hover:bg-lime-300 text-stone-950 text-sm font-bold transition-colors no-underline"
                >
                  View on GitHub
                  <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

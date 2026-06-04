import { useState, useMemo, useRef, useEffect } from "react";
import { Link, useSearchParams } from "react-router";
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
  Share2,
  Check,
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
import { useRecentlyViewedRepos } from "./useRecentlyViewedRepos";
import { RecentlyViewedSection } from "./_shared/RecentlyViewedSection";

const ghostBtnCls =
  "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-bold text-stone-700 dark:text-stone-300 bg-white dark:bg-stone-900 border border-stone-300 dark:border-white/15 hover:bg-stone-50 dark:hover:bg-white/5 transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";


export default function RepoDiscoveryPage() {
  // CONFLICT 1 RESOLVED: single useSearchParams declaration
  const [searchParams, setSearchParams] = useSearchParams();

  // Initialize filter states directly from the URL
  const search = searchParams.get("q") || "";
  const selectedDomain = searchParams.get("domain") || "ALL";
  const selectedDifficulty = searchParams.get("difficulty") || "ALL";
  const selectedLanguage = searchParams.get("language") || "ALL";
  const sortKey = searchParams.get("sort") || "stars";
  const page = Number(searchParams.get("page")) || 1;
  const trendingOnly = searchParams.get("trending") === "true";

  // Debounced search state & ref
  const [inputValue, setInputValue] = useState(search);
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (inputValue !== search) {
        setSearchParams(
          (prev) => {
            const newParams = new URLSearchParams(prev);
            if (inputValue.trim() === "") newParams.delete("q");
            else newParams.set("q", inputValue);
            newParams.set("page", "1");
            return newParams;
          },
          { replace: true }
        );
      }
    }, 400);
    return () => clearTimeout(timer);
  }, [inputValue, search, setSearchParams]);

  // Keyboard shortcut to focus search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement).tagName;
      if (e.key === "/" && tag !== "INPUT" && tag !== "TEXTAREA" && tag !== "SELECT") {
        e.preventDefault();
        searchRef.current?.focus();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Local UI states
  const [showFilters, setShowFilters] = useState(false);
  const [selectedRepo, setSelectedRepo] = useState<OpenSourceRepo | null>(null);
  const [showSuggestModal, setShowSuggestModal] = useState(false);
  const [copiedShareUrl, setCopiedShareUrl] = useState(false);
  const { user } = useAuthStore();
  // CONFLICT 2 RESOLVED: keep both recently-viewed AND deep-linking, unified into one handler
  const { recentlyViewed, addRepo } = useRecentlyViewedRepos();

  const handleOpenRepo = (repo: OpenSourceRepo) => {
    addRepo(repo);
    setSelectedRepo(repo);
    setSearchParams((prev) => {
      const params = new URLSearchParams(prev);
      params.set("repo", String(repo.id));
      return params;
    }, { replace: true });
  };

  const handleCloseRepo = () => {
    setSelectedRepo(null);
    setSearchParams((prev) => {
      const params = new URLSearchParams(prev);
      params.delete("repo");
      return params;
    }, { replace: true });
    setCopiedShareUrl(false);
  };

  // Deep-link support: load a repo from URL on first render
  const initialRepoId = searchParams.get("repo");
  const { data: deepLinkData, isError: deepLinkError } = useQuery({
    queryKey: ["repo-deep-link", initialRepoId],
    queryFn: () => api.get(`/opensource/${initialRepoId}`).then((res) => res.data.repo),
    enabled: !!initialRepoId && !selectedRepo,
    staleTime: 10 * 60 * 1000,
    retry: false,
  });

  useEffect(() => {
    if (deepLinkData) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setSelectedRepo(deepLinkData);
    }
  }, [deepLinkData]);

  useEffect(() => {
    if (deepLinkError) {
      setSearchParams((prev) => {
        const params = new URLSearchParams(prev);
        params.delete("repo");
        return params;
      }, { replace: true });
    }
  }, [deepLinkError, setSearchParams]);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedShareUrl(true);
    setTimeout(() => setCopiedShareUrl(false), 1500);
  };

  const queryParams = useMemo(() => {
    const params: Record<string, string | number> = { page, limit: 12, sort: sortKey, sortOrder: "desc" };

    if (search.trim()) params.search = search.trim();
    if (selectedDomain !== "ALL") params.domain = selectedDomain;
    if (selectedDifficulty !== "ALL") params.difficulty = selectedDifficulty;
    if (selectedLanguage !== "ALL") params.language = selectedLanguage;
    if (trendingOnly) params.trending = "true";

    const sortOpt = SORT_OPTIONS.find((s) => s.key === sortKey);
    if (sortOpt) params.sortOrder = sortOpt.order;

    return params;
  }, [search, selectedDomain, selectedDifficulty, selectedLanguage, sortKey, trendingOnly, page]);

  const { data, isLoading, isError } = useQuery({
    queryKey: queryKeys.opensource.list(queryParams),
    queryFn: async () => {
      const res = await api.get<{ repos: OpenSourceRepo[]; pagination: Pagination }>("/opensource", { params: queryParams });
      return res.data;
    },
    placeholderData: (prev) => prev,
    staleTime: 5 * 60 * 1000,
  });

  const { data: languagesData } = useQuery({
    queryKey: ["opensource-languages"],
    queryFn: () => api.get("/opensource/languages").then((r) => r.data.languages as string[]),
    staleTime: 10 * 60 * 1000,
  });

  const languages = useMemo(() => {
    return languagesData || (Object.keys(LANGUAGE_COLORS) as string[]);
  }, [languagesData]);

  const repos = useMemo(() => data?.repos ?? [], [data?.repos]);
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

  const updateFilter = (key: string, value: string | number) => {
    setSearchParams(
      (prev) => {
        const newParams = new URLSearchParams(prev);

        if (value === "ALL" || value === "") {
          newParams.delete(key);
        } else {
          newParams.set(key, String(value));
        }

        if (key !== "page") {
          newParams.set("page", "1");
        }

        return newParams;
      },
      { replace: true }
    );
  };

  const activeFilters =
    (selectedDomain !== "ALL" ? 1 : 0) +
    (selectedDifficulty !== "ALL" ? 1 : 0) +
    (selectedLanguage !== "ALL" ? 1 : 0);

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-950">
      {selectedRepo ? (
        <SEO
          title={`${selectedRepo.owner}/${selectedRepo.name} — Open Source on InternHack`}
          description={
            selectedRepo.description
              ? selectedRepo.description.slice(0, 160)
              : `Contribute to ${selectedRepo.owner}/${selectedRepo.name} on InternHack. Discover beginner-friendly open-source projects curated for students.`
          }
          canonicalUrl={canonicalUrl(`/student/opensource?repo=${selectedRepo.id}`)}
        />
      ) : (
        <SEO
          title="Open Source Projects, Find Beginner-Friendly Repos"
          description="Discover beginner-friendly open-source projects, track trending repos, and make your first contribution. Curated by engineers for students."
          keywords="open source, first contribution, good first issue, github, beginner friendly, GSoC, hacktoberfest"
          canonicalUrl={canonicalUrl("/student/opensource")}
        />
      )}

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
            ref={searchRef}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Search repos, languages, tags..."
            className="w-full pl-10 pr-10 py-3 bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md text-stone-900 dark:text-stone-50 placeholder-stone-400 dark:placeholder-stone-500 text-sm focus:outline-none focus:border-stone-400 dark:focus:border-white/25 transition-colors"
          />
          <kbd className="absolute right-3 top-1/2 -translate-y-1/2 hidden sm:inline-flex items-center gap-1 px-1.5 py-0.5 rounded border border-stone-200 dark:border-white/10 text-[10px] font-mono text-stone-400 dark:text-stone-500 bg-stone-50 dark:bg-stone-800">
            /
          </kbd>
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

        {/* CONFLICT 3 RESOLVED: keep both Recently Viewed AND Recommended */}
        <RecentlyViewedSection repos={recentlyViewed} onSelect={handleOpenRepo} />

        {user?.role === "STUDENT" && (
          <RecommendedSection onSelect={handleOpenRepo} />
        )}

        {/* Filter bar */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          {/* Domain chips */}
          {REPO_DOMAINS.map((d) => {
            const active = selectedDomain === d.key;
            return (
              <button
                key={d.key}
                type="button"
                onClick={() => updateFilter("domain", d.key === selectedDomain ? "ALL" : d.key)}
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

          {/* Trending toggle */}
          <button
            type="button"
            onClick={() => updateFilter("trending", trendingOnly ? "" : "true")}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-mono uppercase tracking-widest rounded-md border transition-colors cursor-pointer ${
              trendingOnly
                ? "bg-lime-50 dark:bg-lime-400/10 text-lime-700 dark:text-lime-400 border-lime-200 dark:border-lime-400/30"
                : "text-stone-500 border-stone-200 dark:border-white/10 hover:border-stone-400 dark:hover:border-white/25"
            }`}
          >
            <Flame className="w-3 h-3" />
            Trending
          </button>

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
                  onClick={() => updateFilter("sort", opt.key)}
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
                    onChange={(e) => updateFilter("difficulty", e.target.value)}
                    className="px-3 py-2 rounded-md text-sm border border-stone-200 dark:border-white/15 bg-white dark:bg-stone-800 text-stone-700 dark:text-stone-100 focus:outline-none focus:border-stone-400 dark:focus:border-white/25"
                  >
                    {DIFFICULTY_OPTIONS.map((d) => (
                      <option key={d.key} value={d.key}>{d.label}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400 mb-1.5 block">
                    language
                  </label>
                  {/* CONFLICT 5 RESOLVED: was updateFilter(setSelectedLanguage, ...) — now correct string key */}
                  <select
                    value={selectedLanguage}
                    onChange={(e) => updateFilter("language", e.target.value)}
                    className="px-3 py-2 rounded-md text-sm border border-stone-200 dark:border-white/15 bg-white dark:bg-stone-800 text-stone-700 dark:text-stone-100 focus:outline-none focus:border-stone-400 dark:focus:border-white/25"
                  >
                    <option value="ALL">All Languages</option>
                    {languages.map((lang) => (
                      <option key={lang} value={lang}>
                        {lang}
                      </option>
                    ))}
                  </select>
                </div>

                {activeFilters > 0 && (
                  <div className="flex items-end">
                    <button
                      type="button"
                      onClick={() => {
                        setSearchParams(new URLSearchParams(), { replace: true });
                        setInputValue("");
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
                {selectedLanguage !== "ALL" && <> / <span className="text-stone-900 dark:text-stone-50">{selectedLanguage}</span></>}
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
        {/* CONFLICT 4 RESOLVED: unified handler is handleOpenRepo (tracks recently viewed + deep link) */}
        {!isLoading && !isError && repos.length > 0 && (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {repos.map((repo, i) => (
                <RepoCard key={repo.id} repo={repo} index={i} onSelect={handleOpenRepo} />
              ))}
            </AnimatePresence>
          </div>
        )}

        {/* Pagination */}
        {pagination && (
          <PaginationControls
            currentPage={page}
            totalPages={pagination.totalPages}
            onPageChange={(newPage) => updateFilter("page", newPage)}
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
            onClick={handleCloseRepo}
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
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleShare}
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs font-bold transition-all border ${
                      copiedShareUrl
                        ? "bg-lime-400 text-stone-950 border-lime-400"
                        : "bg-white dark:bg-stone-800 text-stone-700 dark:text-stone-300 border-stone-200 dark:border-white/10 hover:bg-stone-50 dark:hover:bg-white/5"
                    }`}
                  >
                    {copiedShareUrl ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Share2 className="w-3.5 h-3.5" />
                        Share
                      </>
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={handleCloseRepo}
                    className="w-8 h-8 rounded-md flex items-center justify-center text-stone-500 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-white/5 cursor-pointer"
                    aria-label="Close"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
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

function RecommendedSection({ onSelect }: { onSelect: (repo: OpenSourceRepo) => void }) {
  const { data, isLoading } = useQuery({
    queryKey: queryKeys.opensource.list({ recommended: "true" }),
    queryFn: async () => {
      const res = await api.get<{ repos: OpenSourceRepo[] }>("/opensource/recommended");
      return res.data;
    },
    staleTime: 10 * 60 * 1000,
  });

  if (isLoading) {
    return (
      <div className="mb-10">
        <div className="flex items-center gap-2 mb-4">
          <div className="h-4 w-32 bg-stone-200 dark:bg-white/10 rounded animate-pulse" />
        </div>
        <div className="flex gap-4 overflow-x-hidden">
          {[1, 2, 3].map((i) => (
            <div key={i} className="min-w-[280px] sm:min-w-[320px]">
              <RepoCardSkeleton />
            </div>
          ))}
        </div>
      </div>
    );
  }

  const repos = data?.repos || [];
  if (repos.length === 0) return null;

  return (
    <div className="mb-10 group/rec">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Wand2 className="w-4 h-4 text-lime-600 dark:text-lime-400" />
          <h2 className="text-sm font-bold text-stone-900 dark:text-stone-50 uppercase tracking-tight">
            Recommended for you
          </h2>
          <div className="h-px w-8 bg-stone-200 dark:bg-white/10 group-hover/rec:w-16 transition-all" />
        </div>
        <span className="text-[10px] font-mono text-stone-400 dark:text-stone-500 uppercase tracking-widest">
          Based on your stack
        </span>
      </div>

      <div className="relative -mx-4 px-4 overflow-x-auto no-scrollbar pb-4">
        <div className="flex gap-4 min-w-full">
          {repos.map((repo, i) => (
            <div key={repo.id} className="min-w-[280px] sm:min-w-[320px] max-w-[320px]">
              <RepoCard repo={repo} index={i} onSelect={onSelect} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

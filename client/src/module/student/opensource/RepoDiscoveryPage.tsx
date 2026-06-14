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
  Copy,
  Bookmark,
  GitPullRequest,
} from "lucide-react";

import api from "../../../lib/axios";
import { useCopyToClipboard } from "../../../hooks/useCopyToClipboard";
import { queryKeys } from "../../../lib/query-keys";
import { SEO } from "../../../components/SEO";
import toast from "../../../components/ui/toast";
import { canonicalUrl } from "../../../lib/seo.utils";
import { PaginationControls } from "../../../components/ui/PaginationControls";
import type { OpenSourceRepo, Pagination, RepoRequest } from "../../../lib/types";
import { useAuthStore } from "../../../lib/auth.store";
import { REPO_DOMAINS, DIFFICULTY_OPTIONS, SORT_OPTIONS, LANGUAGE_COLORS } from "./reposData";
import { formatCount, difficultyBadge } from "./_shared/repo-utils";
import { RepoCard, RepoCardSkeleton } from "./RepoCard";
import { GuidanceCards } from "./GuidanceCards";
import { SuggestRepoModal } from "./SuggestRepoModal";
import { useRecentlyViewedRepos } from "./useRecentlyViewedRepos";
import { Button } from "../../../components/ui/button";
import { useCoachStore } from "./stores/coach.store";
import { markLearningPathMilestone } from "./learning-paths.data";

const BOOKMARK_KEY = "oss_bookmarks";

const getBookmarks = (): number[] => {
  try {
    const saved = localStorage.getItem(BOOKMARK_KEY);
    if (!saved) return [];
    const parsed = JSON.parse(saved);
    if (Array.isArray(parsed) && parsed.every((id) => typeof id === "number")) {
      return parsed;
    }
    return [];
  } catch {
    return [];
  }
};

const saveBookmarks = (ids: number[]) => {
  try {
    localStorage.setItem(BOOKMARK_KEY, JSON.stringify(ids));
  } catch (error) {
    console.warn("Failed to save bookmarks to localStorage", error);
  }
};

const STATUS_STYLE: Record<string, string> = {
  PENDING: "bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400 border-amber-200 dark:border-amber-800",
  APPROVED: "bg-lime-50 dark:bg-lime-900/20 text-lime-700 dark:text-lime-400 border-lime-200 dark:border-lime-800",
  REJECTED: "bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 border-red-200 dark:border-red-800",
};

// skill language map
const SKILL_LANGUAGE_MAP: Record<string, string[]> = {
  react: ["JavaScript", "TypeScript"],
  nextjs: ["JavaScript", "TypeScript"],
  javascript: ["JavaScript"],
  typescript: ["TypeScript"],
  nodejs: ["JavaScript", "TypeScript"],
  express: ["JavaScript", "TypeScript"],
  python: ["Python"],
  django: ["Python"],
  flask: ["Python"],
  fastapi: ["Python"],
  java: ["Java"],
  spring: ["Java"],
  golang: ["Go"],
  go: ["Go"],
  cpp: ["C++"],
  cplusplus: ["C++"],
  c: ["C"],
  rust: ["Rust"],
  php: ["PHP"],
  laravel: ["PHP"],
};

export default function RepoDiscoveryPage() {
  useEffect(() => {
    markLearningPathMilestone("repo-discovery");
  }, []);

  const [searchParams, setSearchParams] = useSearchParams();
  const triggerCoach = useCoachStore((s) => s.triggerCoach);

  // Initialize filter states directly from the URL
  const search = searchParams.get("q") || "";
  const selectedDomain = searchParams.get("domain") || "ALL";
  const selectedDifficulty = searchParams.get("difficulty") || "ALL";
  const selectedLanguage = searchParams.getAll("language") || "ALL";
  const sortKey = searchParams.get("sort") || "stars";
  const page = Number(searchParams.get("page")) || 1;
  const trendingOnly = searchParams.get("trending") === "true";
  const hacktoberfestOnly = searchParams.get("hacktoberfest") === "true";
  const highlyActiveOnly = searchParams.get("highlyActive") === "true";
  const showHacktoberfestFilter = true;

  // Debounced search state & ref
  const [inputValue, setInputValue] = useState(search);
  const searchRef = useRef<HTMLInputElement>(null);
  const sortDropdownRef = useRef<HTMLDivElement>(null);

  const [showFilters, setShowFilters] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);
  const [selectedRepo, setSelectedRepo] = useState<OpenSourceRepo | null>(null);

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

  // Keyboard shortcut & click outside bindings
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement).tagName;
      if (e.key === "/" && tag !== "INPUT" && tag !== "TEXTAREA" && tag !== "SELECT") {
        e.preventDefault();
        searchRef.current?.focus();
      }
      if (e.key === "Escape") {
        setSortOpen(false);
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (sortDropdownRef.current && !sortDropdownRef.current.contains(e.target as Node)) {
        setSortOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const [showSuggestModal, setShowSuggestModal] = useState(false);
  const [showAllSubmissions, setShowAllSubmissions] = useState(false);
  const [copiedShareUrl, setCopiedShareUrl] = useState(false);
  const [bookmarks, setBookmarks] = useState<number[]>(() => getBookmarks());
  const [showSaved, setShowSaved] = useState(false);
  const { copied: copiedCloneUrl, copy: copyCloneUrl } = useCopyToClipboard();
  const { user } = useAuthStore();

  const languageMode = searchParams.get("languageMode") || "manual";

  const inferredLanguages = useMemo(() => {
    if (!user?.skills?.length) return [];

    const normalizedSkills = user.skills.map((skill) =>
      skill.toLowerCase().replace(/[^a-z]/g, "")
    );

    const langs = new Set<string>();

    normalizedSkills.forEach((skill) => {
      const mapped = SKILL_LANGUAGE_MAP[skill];
      if (mapped) {
        mapped.forEach((lang) => langs.add(lang));
      }
    });

    return Array.from(langs);
  }, [user]);

  const { addRepo } = useRecentlyViewedRepos();

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
    staleTime: 0,
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
      toast.error("Could not load the linked repository. It may not exist or has been removed.");
      setSearchParams((prev) => {
        const params = new URLSearchParams(prev);
        params.delete("repo");
        return params;
      }, { replace: true });
    }
  }, [deepLinkError, setSearchParams]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (showSaved && bookmarks.length === 0) setShowSaved(false);
  }, [bookmarks, showSaved]);

  const toggleBookmark = (id: number) => {
    const isBookmarking = !bookmarks.includes(id);

    setBookmarks((prev) => {
      const next = isBookmarking ? [...prev, id] : prev.filter((b) => b !== id);
      saveBookmarks(next);
      return next;
    });

    if (isBookmarking) {
      const repo = data?.repos?.find((r) => r.id === id);
      if (repo) {
        triggerCoach({
          trigger: "REPO_BOOKMARKED",
          context: {
            skills: user?.skills || [],
            bookmarkedRepos: [
              {
                name: repo.name,
                language: repo.language,
                domain: repo.domain || undefined,
              },
            ],
          },
        });
      }
    }
  };

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

    if (languageMode === "auto") {
      if (inferredLanguages.length > 0) {
        params.language = inferredLanguages[0];
      }
    } else if (selectedLanguage.length > 0) {
      params.language = selectedLanguage[0];
    }

    if (trendingOnly) params.trending = "true";
    if (hacktoberfestOnly) params.hacktoberfest = "true";
    if (highlyActiveOnly) params.highlyActive = "true";

    const sortOpt = SORT_OPTIONS.find((s) => s.key === sortKey);
    if (sortOpt) params.sortOrder = sortOpt.order;

    return params;
  }, [search, selectedDomain, selectedDifficulty, selectedLanguage, languageMode, inferredLanguages, sortKey, trendingOnly, hacktoberfestOnly, highlyActiveOnly, page]);

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

  const {
    data: myRequestsData,
    isLoading: isMyRequestsLoading,
    isError: isMyRequestsError,
    refetch: refetchMyRequests,
  } = useQuery({
    queryKey: queryKeys.opensource.myRequests(),
    queryFn: () => api.get("/opensource/requests/mine").then((r) => r.data.requests as RepoRequest[]),
    enabled: !!user,
    staleTime: 2 * 60 * 1000,
  });

  const myRequests = myRequestsData;

  const languages = useMemo(() => {
    return languagesData || (Object.keys(LANGUAGE_COLORS) as string[]);
  }, [languagesData]);

  const { data: bookmarkedData, isLoading: isLoadingBookmarks } = useQuery({
    queryKey: ["opensource-bookmarked", bookmarks],
    queryFn: () =>
      api
        .get("/opensource", { params: { ids: bookmarks.join(","), limit: 100 } })
        .then((r) => r.data.repos as OpenSourceRepo[]),
    enabled: showSaved && bookmarks.length > 0,
    staleTime: 5 * 60 * 1000,
  });

  const pagination = data?.pagination;
  const displayedRepos = showSaved ? (bookmarkedData ?? []) : (data?.repos ?? []);

  // Global stats fetched independently so the header strip stays accurate
  // regardless of active filters or page (replaces the old useMemo approach).
  const { data: globalStats } = useQuery({
    queryKey: queryKeys.opensource.stats(),
    queryFn: () =>
      api
        .get<{
          totalRepos: number;
          totalStars: number;
          trendingCount: number;
          languageCount: number;
          domainBreakdown: { domain: string; count: number }[];
        }>("/opensource/stats")
        .then((r) => r.data),
    staleTime: 5 * 60 * 1000,
  });

  const stats = globalStats
    ? {
      totalRepos: globalStats.totalRepos,
      totalStars: formatCount(globalStats.totalStars),
      trendingCount: globalStats.trendingCount,
      languages: globalStats.languageCount,
    }
    : null;

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
    (selectedLanguage.length > 0 ? 1 : 0);

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
              <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight text-stone-900 dark:text-stone-50 leading-none">
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
            className="group flex items-center gap-3 p-4 bg-white dark:bg-stone-900 border-r border-b border-stone-200 dark:border-white/10 no-underline hover:bg-stone-900 dark:hover:bg-stone-800 transition-colors"
          >
            <div className="w-9 h-9 rounded-md bg-stone-100 dark:bg-white/5 group-hover:bg-white/10 dark:group-hover:bg-lime-400/10 flex items-center justify-center shrink-0">
              <BarChart3 className="w-4 h-4 text-stone-700 dark:text-stone-300 group-hover:text-lime-400" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5 mb-0.5">
                <div className="h-1 w-1 bg-lime-400"></div>
                <p className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400 group-hover:text-lime-400">
                  analytics
                </p>
              </div>
              <p className="text-sm font-bold text-stone-900 dark:text-stone-50 group-hover:text-stone-50 dark:group-hover:text-white">
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
            className="group flex items-center gap-3 p-4 bg-white dark:bg-stone-900 border-r border-b border-stone-200 dark:border-white/10 cursor-pointer hover:bg-stone-900 dark:hover:bg-stone-800 transition-colors text-left"
          >
            <div className="w-9 h-9 rounded-md bg-stone-100 dark:bg-white/5 group-hover:bg-white/10 dark:group-hover:bg-lime-400/10 flex items-center justify-center shrink-0">
              <Plus className="w-4 h-4 text-stone-700 dark:text-stone-300 group-hover:text-lime-400" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5 mb-0.5">
                <div className="h-1 w-1 bg-lime-400"></div>
                <p className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400 group-hover:text-lime-400">
                  suggest
                </p>
              </div>
              <p className="text-sm font-bold text-stone-900 dark:text-stone-50 group-hover:text-stone-50 dark:group-hover:text-white">
                Know a great repo? Submit it
              </p>
            </div>
            <ArrowRight className="w-4 h-4 text-stone-400 dark:text-stone-500 group-hover:text-lime-400 group-hover:translate-x-0.5 transition-all shrink-0" />
          </button>
        </div>

        {/* My Submissions */}
        {!!user && (
          <div className="mb-8">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-stone-500">
                <div className="h-1 w-1 bg-lime-400" />
                my submissions
              </div>
            </div>

            {isMyRequestsLoading && (
              <div className="space-y-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="h-10 bg-stone-100 dark:bg-stone-800 rounded-md animate-pulse"
                  />
                ))}
              </div>
            )}

            {!isMyRequestsLoading && isMyRequestsError && (
              <div className="flex items-center justify-between py-2 px-1">
                <p className="text-sm text-red-500">Failed to load submissions</p>
                <button
                  type="button"
                  onClick={() => refetchMyRequests()}
                  className="text-[10px] font-mono uppercase tracking-widest text-stone-400 hover:text-lime-500 transition-colors cursor-pointer border-0 bg-transparent"
                >
                  Retry ↻
                </button>
              </div>
            )}

            {!isMyRequestsLoading && !isMyRequestsError && myRequests?.length === 0 && (
              <p className="text-sm text-stone-400 dark:text-stone-500 py-2">
                You haven't suggested any repos yet.
              </p>
            )}

            {!isMyRequestsLoading && !isMyRequestsError && myRequests && myRequests.length > 0 && (
              <div className="space-y-2">
                {(showAllSubmissions ? myRequests : myRequests.slice(0, 3)).map(
                  (req) => (
                    <div
                      key={req.id}
                      className="flex items-center justify-between px-3 py-2 border border-stone-200 dark:border-white/10 rounded-md bg-white dark:bg-stone-900"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <span className="text-sm text-stone-700 dark:text-stone-300 truncate font-medium">
                          {req.owner}/{req.name}
                        </span>
                        <span className="text-xs text-stone-400 shrink-0">
                          {new Date(req.createdAt).toLocaleDateString("en-GB", {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                          })}
                        </span>
                      </div>
                      <span
                        className={`text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded-md border shrink-0 ml-3 ${STATUS_STYLE[req.status] ?? STATUS_STYLE.PENDING
                          }`}
                      >
                        {req.status}
                      </span>
                    </div>
                  )
                )}

                {myRequests.length > 3 && (
                  <button
                    type="button"
                    onClick={() => setShowAllSubmissions((v) => !v)}
                    className="text-[10px] font-mono uppercase tracking-widest text-stone-400 hover:text-lime-500 transition-colors cursor-pointer border-0 bg-transparent mt-1"
                  >
                    {showAllSubmissions
                      ? "Show less ↑"
                      : `Show all ${myRequests.length} →`}
                  </button>
                )}
              </div>
            )}
          </div>
        )}

        {/* Guidance Cards */}
        <GuidanceCards />


        {/* Filter bar */}
        <div className="flex items-center gap-2 mb-4 overflow-x-auto no-scrollbar pb-1 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap">
          {/* Domain chips */}
          {REPO_DOMAINS.map((d) => {
            const active = selectedDomain === d.key;
            return (
              <button
                key={d.key}
                type="button"
                onClick={() => updateFilter("domain", d.key === selectedDomain ? "ALL" : d.key)}
                className={`inline-flex items-center px-3 py-2.5 rounded-md text-xs font-bold border transition-colors cursor-pointer ${
                  active
                    ? "bg-stone-900 dark:bg-stone-50 text-stone-50 dark:text-stone-900 border-stone-900 dark:border-stone-50"
                    : "bg-white dark:bg-stone-900 text-stone-700 dark:text-stone-300 border-stone-200 dark:border-white/10 hover:border-stone-400 dark:hover:border-white/25"
                }`}
              >
                {d.label}
              </button>
            );
          })}

          {/* Saved toggle */}
          <button
            type="button"
            onClick={() => setShowSaved((v) => !v)}
            className={`inline-flex items-center gap-1.5 px-3 py-2.5 text-[10px] font-mono uppercase tracking-widest rounded-md border transition-colors cursor-pointer ${
              showSaved
                ? "bg-lime-50 dark:bg-lime-400/10 text-lime-700 dark:text-lime-400 border-lime-200 dark:border-lime-400/30"
                : "text-stone-500 border-stone-200 dark:border-white/10 hover:border-stone-400"
            }`}
          >
            <Bookmark className="w-3 h-3" />
            Saved {bookmarks.length > 0 && `(${bookmarks.length})`}
          </button>

          {/* Trending toggle */}
          <button
            type="button"
            onClick={() => updateFilter("trending", trendingOnly ? "" : "true")}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-mono uppercase tracking-widest rounded-md border transition-colors cursor-pointer ${trendingOnly
              ? "bg-lime-50 dark:bg-lime-400/10 text-lime-700 dark:text-lime-400 border-lime-200 dark:border-lime-400/30"
              : "text-stone-500 border-stone-200 dark:border-white/10 hover:border-stone-400 dark:hover:border-white/25"
              }`}
          >
            <Flame className="w-3 h-3" />
            Trending
          </button>

          {showHacktoberfestFilter && (
            <button
              type="button"
              onClick={() => updateFilter("hacktoberfest", hacktoberfestOnly ? "" : "true")}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-mono uppercase tracking-widest rounded-md border transition-colors cursor-pointer ${hacktoberfestOnly
                ? "bg-orange-50 dark:bg-orange-500/10 text-orange-700 dark:text-orange-400 border-orange-200 dark:border-orange-500/30"
                : "text-stone-500 border-stone-200 dark:border-white/10 hover:border-stone-400 dark:hover:border-white/25"
                }`}
            >
              <GitPullRequest className="w-3 h-3" />
              Hacktoberfest
            </button>
          )}

          {/* Highly Active toggle */}
          <button
            type="button"
            onClick={() => updateFilter("highlyActive", highlyActiveOnly ? "" : "true")}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-mono uppercase tracking-widest rounded-md border transition-colors cursor-pointer ${highlyActiveOnly
              ? "bg-lime-50 dark:bg-lime-400/10 text-lime-700 dark:text-lime-400 border-lime-200 dark:border-lime-400/30"
              : "text-stone-500 border-stone-200 dark:border-white/10 hover:border-stone-400 dark:hover:border-white/25"
              }`}
          >
            <div
              className={`h-1.5 w-1.5 rounded-full ${highlyActiveOnly ? "bg-lime-500" : "bg-stone-400"
                }`}
            />
            Highly Active
          </button>

          {inferredLanguages.length > 0 && (
            <button
              type="button"
              onClick={() => {
                setSearchParams((prev) => {
                  const params = new URLSearchParams(prev);
                  const isActive = languageMode === "auto";

                  if (isActive) {
                    params.delete("languageMode");
                    params.delete("language");
                  } else {
                    params.set("languageMode", "auto");
                    params.delete("language");
                    inferredLanguages.forEach((lang) => {
                      params.append("language", lang);
                    });
                  }

                  params.set("page", "1");
                  return params;
                }, { replace: true });
              }}
              className={`inline-flex items-center px-3 py-1.5 rounded-md text-xs font-bold border transition-colors cursor-pointer ${languageMode === "auto"
                ? "bg-stone-900 dark:bg-stone-50 text-stone-50 dark:text-stone-900 border-stone-900 dark:border-stone-50"
                : "bg-white dark:bg-stone-900 text-stone-700 dark:text-stone-300 border-stone-200 dark:border-white/10 hover:border-stone-400 dark:hover:border-white/25"
                }`}
            >
              My Languages
            </button>
          )}

          {/* More filters toggle */}
          <button
            type="button"
            onClick={() => setShowFilters(!showFilters)}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-bold border transition-colors cursor-pointer ${activeFilters > 0
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
          <div className="relative" ref={sortDropdownRef}>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={() => setSortOpen(!sortOpen)}
              aria-haspopup="listbox"
              aria-expanded={sortOpen}
            >
              <TrendingUp className="w-3 h-3" />
              {SORT_OPTIONS.find((s) => s.key === sortKey)?.label ?? "Sort"}
              <ChevronDown className={`w-3 h-3 transition-transform ${sortOpen ? "rotate-180" : ""}`} />
            </Button>
            <AnimatePresence>
              {sortOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 top-full z-20 mt-1 min-w-44 rounded-md border border-stone-200 dark:border-white/10 bg-white dark:bg-stone-900 p-1 shadow-xl origin-top"
                  role="listbox"
                >
                  {SORT_OPTIONS.map((opt) => (
                    <Button
                      key={opt.key}
                      type="button"
                      variant="ghost"
                      size="sm"
                      role="option"
                      aria-selected={sortKey === opt.key}
                      onClick={() => {
                        updateFilter("sort", opt.key);
                        setSortOpen(false);
                      }}
                      className={`w-full justify-start text-left px-2.5 py-1.5 rounded-md text-xs font-normal transition-colors cursor-pointer ${sortKey === opt.key
                        ? "bg-stone-900 dark:bg-stone-50 text-lime-400 hover:bg-stone-900 dark:hover:bg-stone-50 hover:text-lime-400"
                        : "text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-white/5"
                        }`}
                    >
                      {opt.label}
                    </Button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Expanded filters */}
        {/* Mobile filter bottom sheet */}
<AnimatePresence>
  {showFilters && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-40 bg-stone-950/50 sm:hidden"
      onClick={() => setShowFilters(false)}
    >
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ type: "spring", damping: 30, stiffness: 300 }}
        className="absolute bottom-0 left-0 right-0 bg-white dark:bg-stone-900 rounded-t-xl p-5 pb-8 border-t border-stone-200 dark:border-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-10 h-1 bg-stone-200 dark:bg-stone-700 rounded-full mx-auto mb-5" />
        <p className="text-[10px] font-mono uppercase tracking-widest text-stone-500 mb-4">Filters</p>
        <div className="flex flex-col gap-4">
          <div>
            <label className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400 mb-1.5 block">difficulty</label>
            <select
              value={selectedDifficulty}
              onChange={(e) => updateFilter("difficulty", e.target.value)}
              className="w-full px-3 py-3 rounded-md text-sm border border-stone-200 dark:border-white/15 bg-white dark:bg-stone-800 text-stone-700 dark:text-stone-100 focus:outline-none"
            >
              {DIFFICULTY_OPTIONS.map((d) => (
                <option key={d.key} value={d.key}>{d.label}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400 mb-1.5 block">language</label>
            <select
              value={selectedLanguage}
              onChange={(e) => {
                const value = e.target.value;
                setSearchParams((prev) => {
                  const params = new URLSearchParams(prev);
                  params.delete("language");
                  if (value !== "ALL") params.append("language", value);
                  params.set("page", "1");
                  return params;
                }, { replace: true });
              }}
              className="w-full px-3 py-3 rounded-md text-sm border border-stone-200 dark:border-white/15 bg-white dark:bg-stone-800 text-stone-700 dark:text-stone-100 focus:outline-none"
            >
              <option value="ALL">All Languages</option>
              {languages.map((lang) => (
                <option key={lang} value={lang}>{lang}</option>
              ))}
            </select>
          </div>
          {activeFilters > 0 && (
            <button
              type="button"
              onClick={() => { setSearchParams(new URLSearchParams(), { replace: true }); setInputValue(""); setShowFilters(false); }}
              className="text-sm text-red-500 font-medium py-2 text-left"
            >
              Clear all filters
            </button>
          )}
        </div>
      </motion.div>
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
                {selectedLanguage.length > 0 && <> / <span className="text-stone-900 dark:text-stone-50">{selectedLanguage.join(", ")}</span></>}
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
        {!isLoading && !isLoadingBookmarks && !isError && displayedRepos.length === 0 && (
          <div className="text-center py-16 bg-white dark:bg-stone-900 rounded-md border border-stone-200 dark:border-white/10">
            <div className="w-12 h-12 rounded-md bg-stone-100 dark:bg-white/5 flex items-center justify-center mx-auto mb-3">
              <Search className="w-5 h-5 text-stone-400 dark:text-stone-500" />
            </div>
            <h3 className="text-base font-bold text-stone-900 dark:text-stone-50 mb-1">No repositories found</h3>
            <p className="text-sm text-stone-500 dark:text-stone-400">Try adjusting your search or filters.</p>
          </div>
        )}

        {/* Cards grid */}
        {!isLoading && !isError && displayedRepos.length > 0 && (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {displayedRepos.map((repo, i) => (
                <RepoCard
                  key={repo.id}
                  repo={repo}
                  index={i}
                  onSelect={handleOpenRepo}
                  bookmarked={bookmarks.includes(repo.id)}
                  onToggleBookmark={() => toggleBookmark(repo.id)}
                />
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
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs font-bold transition-all border ${copiedShareUrl
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

                {/* Quick actions */}
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={selectedRepo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center gap-2 py-3 rounded-md bg-lime-400 hover:bg-lime-300 text-stone-950 text-sm font-bold transition-colors no-underline"
                  >
                    Open on GitHub
                    <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </a>
                  <button
                    type="button"
                    onClick={() => copyCloneUrl(`${selectedRepo.url}.git`)}
                    className={`flex items-center justify-center gap-2 py-3 rounded-md text-sm font-bold transition-colors cursor-pointer ${copiedCloneUrl
                      ? "bg-green-500 text-white"
                      : "bg-stone-100 dark:bg-white/10 hover:bg-stone-200 dark:hover:bg-white/20 text-stone-700 dark:text-stone-300"
                      }`}
                  >
                    {copiedCloneUrl ? (
                      <>
                        <Check className="w-4 h-4" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        Copy Clone URL
                      </>
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}


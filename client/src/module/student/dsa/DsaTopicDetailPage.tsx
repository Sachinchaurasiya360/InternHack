import React, { useState, useRef, useLayoutEffect } from "react";
import { useWindowVirtualizer } from "@tanstack/react-virtual";
import { useParams, Link, Navigate, useNavigate } from "react-router";
import {
  useQuery,
  useMutation,
  useQueryClient,
  keepPreviousData,
} from "@tanstack/react-query";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Circle,
  ExternalLink,
  Bookmark,
  BookmarkCheck,
  BookOpen,
  TrendingUp,
  Search,
} from "lucide-react";
import toast from "@/components/ui/toast";
import api from "../../../lib/axios";
import { queryKeys } from "../../../lib/query-keys";
import type { DsaTopicDetail, DsaProblem, User } from "../../../lib/types";
import type { UseMutationResult } from "@tanstack/react-query";
import { useAuthStore } from "../../../lib/auth.store";
import { SEO } from "../../../components/SEO";
import { canonicalUrl, SITE_URL } from "../../../lib/seo.utils";
import { breadcrumbSchema } from "../../../lib/structured-data";
import { LoadingScreen } from "../../../components/LoadingScreen";
import { Button } from "../../../components/ui/button";
import { DIFF_COLOR } from "../../../lib/difficulty-styles";
import { useDsaLabels } from "./components/useDsaLabels";
import { DsaLabelFilter } from "./components/DsaLabelFilter";

type DiffFilter = "All" | "Easy" | "Medium" | "Hard";

export default function DsaTopicDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const { user } = useAuthStore();
  const queryClient = useQueryClient();
  const [filter, setFilter] = useState<DiffFilter>("All");
  const [search, setSearch] = useState("");
  const page = 1; // virtual scroll replaces server-side pagination
  const [selectedLabels, setSelectedLabels] = useState<string[]>([]);

  const { allLabels, getLabels } = useDsaLabels(!!user);
  const toggleLabelFilter = (label: string) =>
    setSelectedLabels((prev) =>
      prev.includes(label) ? prev.filter((l) => l !== label) : [...prev, label],
    );

  const diffParam = filter === "All" ? undefined : filter;
  const searchParam = search.trim() || undefined;

  const { data: topic, isLoading } = useQuery({
    queryKey: queryKeys.dsa.topic(slug!, page, {
      difficulty: diffParam,
      search: searchParam,
    }),
    queryFn: () => {
      const params = new URLSearchParams();
      params.set("page", String(page));
      params.set("limit", "200"); // covers all current topics; virtualizer handles render performance
      if (diffParam) params.set("difficulty", diffParam);
      if (searchParam) params.set("search", searchParam);
      return api
        .get<DsaTopicDetail>(`/dsa/topics/${slug}?${params}`)
        .then((r) => r.data);
    },
    enabled: !!slug,
    placeholderData: keepPreviousData,
    staleTime: 15 * 24 * 60 * 60 * 1000,
  });

  const toggleMutation = useMutation({
    mutationFn: (problemId: number) =>
      api
        .post<{
          problemId: number;
          solved: boolean;
        }>(`/dsa/problems/${problemId}/toggle`)
        .then((r) => r.data),
    onMutate: async (problemId) => {
      const key = queryKeys.dsa.topic(slug!, page, {
        difficulty: diffParam,
        search: searchParam,
      });
      await queryClient.cancelQueries({ queryKey: key });
      const prev = queryClient.getQueryData<DsaTopicDetail>(key);
      if (prev) {
        const updated = {
          ...prev,
          problems: prev.problems.map((p) =>
            p.id === problemId ? { ...p, solved: !p.solved } : p,
          ),
        };
        const delta = updated.problems.find((p) => p.id === problemId)!.solved
          ? 1
          : -1;
        updated.totalSolved = prev.totalSolved + delta;
        queryClient.setQueryData(key, updated);
      }
      return { prev };
    },
    onError: (_err, _problemId, context) => {
      if (context?.prev)
        queryClient.setQueryData(
          queryKeys.dsa.topic(slug!, page, {
            difficulty: diffParam,
            search: searchParam,
          }),
          context.prev,
        );
      toast.error("Failed to update progress");
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.dsa.topics() });
      queryClient.invalidateQueries({ queryKey: queryKeys.dsa.progress() });
    },
  });

  const bookmarkMutation = useMutation({
    mutationFn: (problemId: number) =>
      api
        .post<{
          problemId: number;
          bookmarked: boolean;
        }>(`/dsa/problems/${problemId}/bookmark`)
        .then((r) => r.data),
    onMutate: async (problemId) => {
      const key = queryKeys.dsa.topic(slug!, page, {
        difficulty: diffParam,
        search: searchParam,
      });
      await queryClient.cancelQueries({ queryKey: key });
      const prev = queryClient.getQueryData<DsaTopicDetail>(key);
      if (prev) {
        queryClient.setQueryData(key, {
          ...prev,
          problems: prev.problems.map((p) =>
            p.id === problemId ? { ...p, bookmarked: !p.bookmarked } : p,
          ),
        });
      }
      return { prev };
    },
    onError: (_err, _problemId, context) => {
      if (context?.prev)
        queryClient.setQueryData(
          queryKeys.dsa.topic(slug!, page, {
            difficulty: diffParam,
            search: searchParam,
          }),
          context.prev,
        );
      toast.error("Failed to update bookmark");
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.dsa.bookmarks() });
    },
  });

  // Client-side label filter layered on top of the server's difficulty/search
  // filtering. A problem matches when it carries any selected label (union).
  const filteredProblems = React.useMemo(() => {
    const all = topic?.problems ?? [];
    if (selectedLabels.length === 0) return all;
    return all.filter((p) => {
      const labels = getLabels(p.id).length
        ? getLabels(p.id)
        : (p.labels ?? []);
      return selectedLabels.some((sel) => labels.includes(sel));
    });
  }, [topic?.problems, selectedLabels, getLabels]);

  const listRef = useRef<HTMLDivElement>(null);
  const [scrollMargin, setScrollMargin] = useState(0);
  useLayoutEffect(() => {
    setScrollMargin(listRef.current?.offsetTop ?? 0);
  }, []);

  const virtualizer = useWindowVirtualizer({
    count: filteredProblems.length,
    estimateSize: () => 76,
    overscan: 8,
    scrollMargin,
  });

  if (!user && topic && topic.orderIndex >= 5) {
    return <Navigate to="/learn/dsa" replace />;
  }

  if (isLoading) return <LoadingScreen />;

  if (!topic) {
    return (
      <div className="bg-stone-50 dark:bg-stone-950 min-h-[calc(100vh-4rem)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 py-16 text-center">
          <p className="text-sm text-stone-500 dark:text-stone-400">
            Topic not found.
          </p>
        </div>
      </div>
    );
  }

  const pct =
    topic.totalProblems > 0
      ? Math.round((topic.totalSolved / topic.totalProblems) * 100)
      : 0;
  const topicNum =
    topic.orderIndex >= 0
      ? String(topic.orderIndex + 1).padStart(2, "0")
      : "00";

  const diffTabs: DiffFilter[] = ["All", "Easy", "Medium", "Hard"];

  return (
    <div className="bg-stone-50 dark:bg-stone-950 min-h-[calc(100vh-4rem)]">
      <SEO
        title={`${topic.name}, DSA Practice`}
        description={`Practice ${topic.name} problems with difficulty tracking, bookmarks, and notes.`}
        keywords={`${topic.name}, DSA, data structures, algorithms, practice problems`}
        canonicalUrl={canonicalUrl(`/learn/dsa/${slug}`)}
        structuredData={[
          breadcrumbSchema([
            { name: "Home", url: SITE_URL },
            { name: "Learn", url: `${SITE_URL}/learn` },
            { name: "DSA", url: `${SITE_URL}/learn/dsa` },
            { name: topic.name, url: `${SITE_URL}/learn/dsa/${slug}` },
          ]),
        ]}
      />

      <div className="max-w-6xl mx-auto px-3 sm:px-8 py-8">
        {/* Editorial header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <div className="flex items-center gap-2 mb-2">
            <div className="h-1 w-1 bg-lime-400"></div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
              dsa / topic {topicNum}
            </span>
          </div>
          <div className="flex items-end justify-between gap-4 flex-wrap">
            <div className="min-w-0 flex-1">
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-50 mb-1.5 wrap-break-word">
                {topic.name}
              </h1>
              {topic.description && (
                <p className="text-sm text-stone-600 dark:text-stone-400 max-w-2xl">
                  {topic.description}
                </p>
              )}
            </div>
            {user && (
              <div className="flex items-center gap-2 sm:gap-3 text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400 flex-wrap">
                <span>
                  <span className="text-stone-900 dark:text-stone-50 tabular-nums">
                    {topic.totalSolved}
                  </span>
                  <span className="text-stone-400 dark:text-stone-600">
                    {" "}
                    / {topic.totalProblems} solved
                  </span>
                </span>
                <span className="h-1 w-1 bg-stone-300 dark:bg-stone-700" />
                <span className="text-lime-600 dark:text-lime-400 tabular-nums">
                  {pct}% complete
                </span>
              </div>
            )}
          </div>

          {user && (
            <div className="mt-4 w-full h-0.5 bg-stone-200 dark:bg-white/10 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${pct}%` }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className={`h-full ${pct === 100 ? "bg-lime-400" : "bg-stone-900 dark:bg-stone-50"}`}
              />
            </div>
          )}
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-0 border-t border-l border-stone-200 dark:border-white/10 mb-8"
        >
          {[
            { icon: BookOpen, value: topic.totalProblems, label: "problems" },
            { icon: TrendingUp, value: topic.totalSolved, label: "solved" },
            { icon: CheckCircle2, value: `${pct}%`, label: "overall" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="flex items-start gap-3 p-3 sm:p-4 bg-white dark:bg-stone-900 border-r border-b border-stone-200 dark:border-white/10"
            >
              <div className="w-8 h-8 rounded-md bg-stone-100 dark:bg-white/5 flex items-center justify-center shrink-0">
                <stat.icon className="w-4 h-4 text-lime-600 dark:text-lime-400" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-xl font-bold tracking-tight text-stone-900 dark:text-stone-50 tabular-nums">
                  {stat.value}
                </span>
                <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400 truncate">
                  / {stat.label}
                </span>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Filters + search */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-6 space-y-3"
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
            <input
              type="text"
              placeholder="Search problems..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              className="w-full pl-11 pr-4 py-3 bg-white dark:bg-stone-900 border border-stone-300 dark:border-white/10 rounded-md focus:outline-none focus:border-lime-400 transition-colors text-sm text-stone-900 dark:text-stone-50 placeholder-stone-400 dark:placeholder-stone-600"
            />
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 mr-1">
              difficulty /
            </span>
            {diffTabs.map((d) => {
              const active = filter === d;
              return (
                <button
                  key={d}
                  onClick={() => {
                    setFilter(d);
                  }}
                  className={`px-3 py-1.5 rounded-md text-xs font-medium border transition-colors cursor-pointer ${
                    active
                      ? "bg-stone-900 dark:bg-stone-50 text-stone-50 dark:text-stone-900 border-stone-900 dark:border-stone-50"
                      : "bg-transparent text-stone-600 dark:text-stone-400 border-stone-300 dark:border-white/10 hover:border-stone-500 dark:hover:border-white/30 hover:text-stone-900 dark:hover:text-stone-50"
                  }`}
                >
                  {d}
                </button>
              );
            })}
          </div>

          {user && allLabels.length > 0 && (
            <DsaLabelFilter
              allLabels={allLabels}
              selected={selectedLabels}
              onToggle={toggleLabelFilter}
              onClear={() => setSelectedLabels([])}
            />
          )}
        </motion.div>

        {/* Section header */}
        <div className="flex items-center gap-2 mb-3">
          <div className="h-1 w-1 bg-lime-400"></div>
          <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
            problems /{" "}
            {selectedLabels.length > 0
              ? `${filteredProblems.length} of ${topic.problems.length}`
              : topic.problems.length}
          </span>
        </div>

        {/* Problem list — virtualized for performance with dynamic height measurement */}
        {filteredProblems.length === 0 ? (
          <div className="py-20 text-center border border-dashed border-stone-300 dark:border-white/10 rounded-md">
            <Search className="w-8 h-8 text-stone-400 mx-auto mb-3" />
            <p className="text-sm text-stone-600 dark:text-stone-400">
              No problems found.
            </p>
            <p className="text-[10px] font-mono uppercase tracking-widest text-stone-500 mt-2">
              try a different filter
            </p>
          </div>
        ) : (
          <div ref={listRef}>
            <div
              style={{
                height: `${virtualizer.getTotalSize()}px`,
                width: "100%",
                position: "relative",
              }}
            >
              {virtualizer.getVirtualItems().map((virtualItem) => {
                const problem = filteredProblems[virtualItem.index];
                return (
                  <div
                    key={problem.id}
                    data-index={virtualItem.index}
                    ref={virtualizer.measureElement}
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      transform: `translateY(${
                        virtualItem.start - virtualizer.options.scrollMargin
                      }px)`,
                    }}
                  >
                    <div className="pb-2">
                      <DsaProblemCard
                        problem={problem}
                        pIdx={virtualItem.index}
                        user={user}
                        toggleMutation={toggleMutation}
                        bookmarkMutation={bookmarkMutation}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export const DsaProblemCard = React.memo(function DsaProblemCard({
  problem,
  pIdx,
  user,
  toggleMutation,
  bookmarkMutation,
}: {
  problem: DsaProblem;
  pIdx: number;
  user: User | null;
  toggleMutation: UseMutationResult<unknown, Error, number>;
  bookmarkMutation: UseMutationResult<unknown, Error, number>;
}) {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: Math.min(pIdx, 10) * 0.02 }}
      className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md overflow-hidden hover:border-stone-400 dark:hover:border-white/25 transition-colors"
    >
      <div
        className="flex items-center gap-2 sm:gap-3 px-3 py-3 sm:px-5 sm:py-4 cursor-pointer"
        onClick={() => navigate(`/learn/dsa/problem/${problem.slug}`)}
      >
        {user && (
          <Button
            variant="ghost"
            mode="icon"
            aria-label="Toggle completion"
            size="sm"
            onClick={(e) => {
              e.stopPropagation();
              toggleMutation.mutate(problem.id);
            }}
            className="shrink-0"
          >
            {problem.solved ? (
              <CheckCircle2 className="w-5 h-5 text-lime-500" />
            ) : (
              <Circle className="w-5 h-5 text-stone-300 dark:text-stone-600 hover:text-stone-400 dark:hover:text-stone-500 transition-colors" />
            )}
          </Button>
        )}

        <div className="flex-1 min-w-0">
          <Link
            to={`/learn/dsa/problem/${problem.slug}`}
            onClick={(e) => e.stopPropagation()}
            className={`text-sm font-bold tracking-tight no-underline hover:underline wrap-break-word ${
              problem.solved
                ? "text-stone-400 dark:text-stone-500 line-through"
                : "text-stone-900 dark:text-stone-50"
            }`}
          >
            {problem.title}
          </Link>
          <div className="flex items-center gap-1.5 mt-1 flex-wrap">
            <span
              className={`text-[10px] font-mono uppercase tracking-widest ${
                DIFF_COLOR[problem.difficulty] || "text-stone-500"
              }`}
            >
              / {problem.difficulty.toLowerCase()}
            </span>
            {problem.acceptanceRate && (
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-md bg-stone-100 dark:bg-white/5 text-stone-600 dark:text-stone-400 tabular-nums">
                {problem.acceptanceRate}
              </span>
            )}
            {problem.companies?.slice(0, 2).map((c) => (
              <span
                key={c}
                className="text-[10px] font-mono px-1.5 py-0.5 rounded-md bg-stone-100 dark:bg-white/5 text-stone-600 dark:text-stone-400 capitalize"
              >
                {c}
              </span>
            ))}
          </div>
        </div>

        {problem.leetcodeUrl && (
          <a
            href={problem.leetcodeUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="w-7 h-7 rounded-md bg-stone-100 dark:bg-white/5 hidden sm:flex items-center justify-center text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-50 hover:bg-stone-200 dark:hover:bg-white/10 transition-colors shrink-0 no-underline"
            title="LeetCode"
          >
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        )}

        {user && (
          <Button
            variant="ghost"
            mode="icon"
            aria-label="Toggle bookmark"
            size="sm"
            onClick={(e) => {
              e.stopPropagation();
              bookmarkMutation.mutate(problem.id);
            }}
            className="shrink-0"
          >
            {problem.bookmarked ? (
              <BookmarkCheck className="w-4 h-4 text-lime-500" />
            ) : (
              <Bookmark className="w-4 h-4 text-stone-300 dark:text-stone-600 hover:text-stone-400 dark:hover:text-stone-500 transition-colors" />
            )}
          </Button>
        )}
      </div>
    </motion.div>
  );
});


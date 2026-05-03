import { useMemo, useState } from "react";
import { Link } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import {
  Search,
  Building2,
  ArrowUpRight,
  MessageCircle,
  Plus,
  Users,
  ArrowUp,
  Clock,
} from "lucide-react";
import { SEO } from "../../../components/SEO";
import { queryKeys } from "../../../lib/query-keys";
import type {
  InterviewCompanyListResponse,
  InterviewListResponse,
} from "../../../lib/types";
import { listExperiences, listInterviewCompanies } from "./interviews-api";

function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-stone-500">
      <span className="h-1.5 w-1.5 bg-lime-400" />
      {children}
    </div>
  );
}

function timeAgo(iso: string): string {
  const diffMs = Date.now() - new Date(iso).getTime();
  const days = Math.round(diffMs / 86_400_000);
  if (days < 1) return "today";
  if (days < 30) return `${String(days)}d ago`;
  const months = Math.round(days / 30);
  return `${String(months)}mo ago`;
}

type View = "companies" | "recent";

export default function InterviewsDirectoryPage() {
  const [view, setView] = useState<View>("companies");
  const [search, setSearch] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [page, setPage] = useState(1);

  const submitSearch = () => {
    setSearch(searchInput.trim());
    setPage(1);
  };

  const companiesQueryParams = useMemo(() => {
    const p: Record<string, string | number> = { page, limit: 24 };
    if (search) p["search"] = search;
    return p;
  }, [page, search]);

  const recentQueryParams = useMemo(() => {
    const p: Record<string, string | number | boolean> = {
      page,
      limit: 12,
      sort: "recent",
    };
    if (search) p["search"] = search;
    return p;
  }, [page, search]);

  const { data: companiesData, isLoading: companiesLoading } = useQuery<InterviewCompanyListResponse>({
    queryKey: queryKeys.interviews.companies(companiesQueryParams),
    queryFn: () => listInterviewCompanies({ page, limit: 24, search: search || undefined }),
    enabled: view === "companies",
    staleTime: 5 * 60 * 1000,
  });

  const { data: recentData, isLoading: recentLoading } = useQuery<InterviewListResponse>({
    queryKey: queryKeys.interviews.list(recentQueryParams),
    queryFn: () => listExperiences({ page, limit: 12, sort: "recent", search: search || undefined }),
    enabled: view === "recent",
    staleTime: 5 * 60 * 1000,
  });

  const totalPages =
    view === "companies"
      ? companiesData?.pagination.totalPages ?? 1
      : recentData?.pagination.totalPages ?? 1;
  const companies = companiesData?.companies ?? [];
  const recent = recentData?.experiences ?? [];
  const isLoading = view === "companies" ? companiesLoading : recentLoading;

  return (
    <div className="pb-16">
      <SEO title="Interview experiences" noIndex />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10"
      >
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div>
            <Kicker>discover / interview experiences</Kicker>
            <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight text-stone-900 dark:text-stone-50 leading-none">
              Real interviews.{" "}
              <span className="relative inline-block">
                <span className="relative z-10">Real questions.</span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
                  aria-hidden
                  className="absolute bottom-1 left-0 right-0 h-3 md:h-4 bg-lime-400 origin-left z-0"
                />
              </span>
            </h1>
            <p className="mt-3 text-sm text-stone-500 max-w-lg">
              Students share what actually got asked, which rounds they faced, and what worked. Filter by company to prep for your next interview.
            </p>
          </div>
          <Link
            to="/student/interviews/share"
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-lime-400 hover:bg-lime-500 text-stone-900 rounded-md text-sm font-semibold transition-colors border-0 cursor-pointer no-underline shrink-0"
          >
            <Plus className="w-4 h-4" />
            Share yours
          </Link>
        </div>
      </motion.div>

      {/* Tabs */}
      <div className="mb-6 flex flex-wrap gap-2 border-b border-stone-200 dark:border-white/10">
        {(
          [
            { id: "companies", label: "By company" },
            { id: "recent", label: "Recent" },
          ] as { id: View; label: string }[]
        ).map((t) => (
          <button
            key={t.id}
            onClick={() => {
              setView(t.id);
              setPage(1);
            }}
            className={`px-4 py-2.5 text-sm font-semibold border-b-2 -mb-px transition-colors cursor-pointer bg-transparent ${
              view === t.id
                ? "border-lime-400 text-stone-900 dark:text-stone-50"
                : "border-transparent text-stone-500 hover:text-stone-700 dark:hover:text-stone-300"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Search */}
      <div className="flex flex-wrap items-center gap-3 mb-8">
        <div className="flex-1 min-w-0 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
          <input
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && submitSearch()}
            placeholder="Search by company or role..."
            className="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md text-sm text-stone-900 dark:text-stone-50 placeholder:text-stone-400 focus:outline-none focus:border-lime-400 transition-colors"
          />
        </div>
        <button
          onClick={submitSearch}
          className="px-4 py-2.5 bg-stone-900 dark:bg-stone-50 text-stone-50 dark:text-stone-900 rounded-md text-sm font-semibold transition-colors border-0 cursor-pointer"
        >
          Search
        </button>
      </div>

      {/* Content */}
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="h-36 rounded-md bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 animate-pulse"
            />
          ))}
        </div>
      ) : view === "companies" ? (
        companies.length === 0 ? (
          <EmptyState onShare />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {companies.map((c) => (
              <Link
                key={c.id}
                to={`/student/companies/${c.slug}#interviews`}
                className="no-underline group flex items-start gap-3 bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md p-5 hover:border-stone-400 dark:hover:border-white/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-md bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-white/10 flex items-center justify-center shrink-0 text-sm font-bold text-stone-700 dark:text-stone-300 overflow-hidden">
                  {c.logo ? (
                    <img src={c.logo} alt="" className="w-full h-full object-cover" />
                  ) : (
                    c.name.charAt(0).toUpperCase()
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-sm font-bold text-stone-900 dark:text-stone-50 truncate">
                      {c.name}
                    </h3>
                    <ArrowUpRight className="w-4 h-4 shrink-0 text-stone-400 group-hover:text-stone-900 dark:group-hover:text-stone-50 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                  <div className="text-xs text-stone-500 mt-0.5 truncate">
                    {c.city} · {c.industry}
                  </div>
                  <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-[10px] font-mono uppercase tracking-widest text-stone-500">
                    <span className="inline-flex items-center gap-1 text-stone-700 dark:text-stone-300">
                      <Users className="w-3 h-3" />
                      {c.experienceCount} experience{c.experienceCount === 1 ? "" : "s"}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {timeAgo(c.latestAt)}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )
      ) : recent.length === 0 ? (
        <EmptyState onShare />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {recent.map((e) => (
            <Link
              key={e.id}
              to={`/student/interviews/${String(e.id)}`}
              className="no-underline group flex flex-col bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md p-5 hover:border-stone-400 dark:hover:border-white/30 transition-colors h-full"
            >
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 rounded-md bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-white/10 flex items-center justify-center shrink-0 text-sm font-bold text-stone-700 dark:text-stone-300 overflow-hidden">
                  {e.company?.logo ? (
                    <img src={e.company.logo} alt="" className="w-full h-full object-cover" />
                  ) : (
                    (e.company?.name ?? e.companyName ?? "?").charAt(0).toUpperCase()
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-sm font-bold text-stone-900 dark:text-stone-50 truncate">
                    {e.company?.name ?? e.companyName ?? "Unknown"} · {e.role}
                  </h3>
                  <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-0.5 text-[10px] font-mono uppercase tracking-widest text-stone-500">
                    <span>{String(e.interviewYear)}</span>
                    <span>{e.difficulty}</span>
                    <span
                      className={
                        e.outcome === "SELECTED"
                          ? "text-lime-700 dark:text-lime-400"
                          : e.outcome === "REJECTED"
                          ? "text-red-600 dark:text-red-400"
                          : ""
                      }
                    >
                      {e.outcome}
                    </span>
                  </div>
                </div>
                <div className="inline-flex flex-col items-center gap-0.5 px-2 py-1 rounded-md border border-stone-200 dark:border-white/10 text-xs font-bold tabular-nums text-stone-700 dark:text-stone-300">
                  <ArrowUp className="w-3 h-3" />
                  {e.upvotes}
                </div>
              </div>
              {e.tips ? (
                <p className="text-sm text-stone-600 dark:text-stone-400 line-clamp-2 flex-1">
                  {e.tips}
                </p>
              ) : (
                <p className="text-sm text-stone-500 italic line-clamp-2 flex-1">
                  {e.totalRounds} round{e.totalRounds === 1 ? "" : "s"}, view details
                </p>
              )}
              <div className="pt-3 border-t border-stone-200 dark:border-white/10 mt-3 flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-stone-500">
                <span className="inline-flex items-center gap-1">
                  <Building2 className="w-3 h-3" />
                  {e.company?.city ?? "—"}
                </span>
                <span>{timeAgo(e.createdAt)}</span>
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 ? (
        <div className="flex items-center justify-center gap-3 mt-10">
          <button
            disabled={page === 1}
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            className="px-4 py-2 rounded-md text-xs font-mono uppercase tracking-widest text-stone-600 dark:text-stone-400 border border-stone-200 dark:border-white/10 hover:border-stone-400 dark:hover:border-white/30 disabled:opacity-40 disabled:cursor-not-allowed transition-colors bg-transparent cursor-pointer"
          >
            Prev
          </button>
          <span className="text-xs font-mono uppercase tracking-widest text-stone-500">
            {page} / {totalPages}
          </span>
          <button
            disabled={page >= totalPages}
            onClick={() => setPage((p) => p + 1)}
            className="px-4 py-2 rounded-md text-xs font-mono uppercase tracking-widest text-stone-600 dark:text-stone-400 border border-stone-200 dark:border-white/10 hover:border-stone-400 dark:hover:border-white/30 disabled:opacity-40 disabled:cursor-not-allowed transition-colors bg-transparent cursor-pointer"
          >
            Next
          </button>
        </div>
      ) : null}
    </div>
  );
}

function EmptyState({ onShare }: { onShare: boolean }) {
  return (
    <div className="text-center py-20 bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md">
      <div className="w-16 h-16 mx-auto bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-white/10 rounded-md flex items-center justify-center mb-4">
        <MessageCircle className="w-7 h-7 text-stone-500" />
      </div>
      <p className="text-stone-500 text-sm mb-4 max-w-xs mx-auto leading-relaxed">
        No interview experiences yet. Be the first to share what a company asked you.
      </p>
      {onShare ? (
        <Link
          to="/student/interviews/share"
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-lime-400 hover:bg-lime-500 text-stone-900 rounded-md text-sm font-semibold transition-colors border-0 cursor-pointer no-underline"
        >
          <Plus className="w-4 h-4" />
          Share yours
        </Link>
      ) : null}
    </div>
  );
}

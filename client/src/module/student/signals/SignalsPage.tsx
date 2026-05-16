import { useMemo, useState } from "react";
import { Link } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import {
  Search,
  Radar,
  DollarSign,
  Clock,
  MapPin,
  ArrowUpRight,
  Briefcase,
  AlertCircle,
} from "lucide-react";
import { SEO } from "../../../components/SEO";
import { Button } from "../../../components/ui/button";
import { queryKeys } from "../../../lib/query-keys";
import type {
  FundingSignal,
  FundingSignalListResponse,
} from "../../../lib/types";
import { querySignals, type SignalKind } from "./signals-api";

const KIND_TABS: { id: SignalKind; label: string }[] = [
  { id: "all", label: "All" },
  { id: "funding", label: "Funding" },
  { id: "hiring", label: "Hiring" },
];

const PAGE_COPY: Record<
  SignalKind,
  { seoTitle: string; kicker: string; description: string }
> = {
  all: {
    seoTitle: "Company Signals",
    kicker: "discover / company signals",
    description:
      "Funding rounds and founders posting roles directly, before listings hit LinkedIn. Sourced from Y Combinator, TechCrunch Venture, Hacker News, and manual curation.",
  },
  funding: {
    seoTitle: "Funding Signals",
    kicker: "discover / funding signals",
    description:
      "Startups that just raised money, often hiring next. Sourced from Y Combinator, TechCrunch Venture, Exa Funding, and manual curation.",
  },
  hiring: {
    seoTitle: "Hiring Signals",
    kicker: "discover / hiring signals",
    description:
      "Founders and teams posting open roles directly, especially from Hacker News Who is Hiring and YC launches.",
  },
};

function timeAgo(iso: string): string {
  const diffMs = Date.now() - new Date(iso).getTime();
  const hours = Math.round(diffMs / 3_600_000);
  if (hours < 1) return "just now";
  if (hours < 24) return `${String(hours)}h ago`;
  const days = Math.round(hours / 24);
  if (days < 30) return `${String(days)}d ago`;
  const months = Math.round(days / 30);
  return `${String(months)}mo ago`;
}

function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-stone-500"
    >
      <span className="h-1.5 w-1.5 bg-lime-400" />
      {children}
    </motion.div>
  );
}

export default function SignalsPage() {
  const [kind, setKind] = useState<SignalKind>("all");
  const [search, setSearch] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [source, setSource] = useState("");
  const [sort, setSort] = useState<"recent" | "amount">("recent");
  const [page, setPage] = useState(1);

  const copy = PAGE_COPY[kind];
  const showAmountSort = kind !== "hiring";

  const queryParams = useMemo(() => {
    const params: Record<string, string | number | boolean> = {
      page,
      limit: 12,
      sort,
      kind,
    };
    if (search) params["search"] = search;
    if (source) params["source"] = source;
    return params;
  }, [page, search, source, sort, kind]);

  const { data, isLoading, isError, refetch } = useQuery<FundingSignalListResponse>({
    queryKey: queryKeys.signals.list(queryParams),
    queryFn: () =>
      querySignals({
        page,
        limit: 12,
        sort,
        kind,
        search: search || undefined,
        source: source || undefined,
      }),
    staleTime: 5 * 60 * 1000,
  });

  const signals = data?.signals ?? [];
  const totalPages = data?.pagination.totalPages ?? 1;
  const hasActiveFilters = Boolean(search || source);

  const submitSearch = () => {
    setSearch(searchInput.trim());
    setPage(1);
  };

  const clearFilters = () => {
    setSearch("");
    setSearchInput("");
    setSource("");
    setPage(1);
  };

  const changeKind = (next: SignalKind) => {
    setKind(next);
    setPage(1);
    if (next === "hiring" && sort === "amount") {
      setSort("recent");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      className="pb-16"
    >
      <SEO title={copy.seoTitle} noIndex />

      <div className="mb-10">
        <Kicker>{copy.kicker}</Kicker>
        <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight text-stone-900 dark:text-stone-50 leading-none">
          {kind === "hiring" ? (
            <>
              Find roles{" "}
              <span className="relative inline-block">
                <span className="relative z-10">before the crowd.</span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
                  aria-hidden
                  className="absolute bottom-1 left-0 right-0 h-3 md:h-4 bg-lime-400 origin-left z-0"
                />
              </span>
            </>
          ) : (
            <>
              Catch companies{" "}
              <span className="relative inline-block">
                <span className="relative z-10">early.</span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
                  aria-hidden
                  className="absolute bottom-1 left-0 right-0 h-3 md:h-4 bg-lime-400 origin-left z-0"
                />
              </span>
            </>
          )}
        </h1>
        <p className="mt-3 text-sm text-stone-500 max-w-lg">{copy.description}</p>
      </div>

      {/* Kind tabs */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05 }}
        role="tablist"
        aria-label="Signal type"
        className="flex flex-wrap gap-2 mb-6"
      >
        {KIND_TABS.map((tab) => {
          const active = kind === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => changeKind(tab.id)}
              className={`px-4 py-2 rounded-md text-xs font-mono uppercase tracking-widest border transition-colors cursor-pointer ${
                active
                  ? "bg-lime-400 border-lime-400 text-stone-900"
                  : "bg-white dark:bg-stone-900 border-stone-200 dark:border-white/10 text-stone-600 dark:text-stone-400 hover:border-stone-400 dark:hover:border-white/30"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </motion.div>

      {/* Search + filters */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex flex-wrap items-center gap-3 mb-8"
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="flex-1 min-w-0 relative"
        >
          <label htmlFor="signals-search" className="sr-only">
            Search signals
          </label>
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400"
            aria-hidden
          />
          <input
            id="signals-search"
            type="search"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && submitSearch()}
            placeholder="Search by company or description..."
            className="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md text-sm text-stone-900 dark:text-stone-50 placeholder:text-stone-400 focus:outline-none focus:border-lime-400 dark:focus:border-lime-400 transition-colors"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <label htmlFor="signals-source" className="sr-only">
            Filter by source
          </label>
          <select
            id="signals-source"
            value={source}
            onChange={(e) => {
              setSource(e.target.value);
              setPage(1);
            }}
            className="px-3 py-2.5 bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md text-sm text-stone-900 dark:text-stone-50 focus:outline-none focus:border-lime-400 transition-colors"
          >
            <option value="">All sources</option>
            <option value="yc-launches">YC Launches</option>
            <option value="techcrunch">TechCrunch</option>
            <option value="hn-hiring">HN Hiring</option>
            <option value="exa-funding">Exa Funding</option>
            <option value="manual">Manual</option>
          </select>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
        >
          <label htmlFor="signals-sort" className="sr-only">
            Sort signals
          </label>
          <select
            id="signals-sort"
            value={sort}
            onChange={(e) => setSort(e.target.value as "recent" | "amount")}
            className="px-3 py-2.5 bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md text-sm text-stone-900 dark:text-stone-50 focus:outline-none focus:border-lime-400 transition-colors"
          >
            <option value="recent">Most recent</option>
            {showAmountSort ? <option value="amount">Largest raise</option> : null}
          </select>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Button type="button" onClick={submitSearch} size="sm">
            Search
          </Button>
        </motion.div>
      </motion.div>

      {/* Results */}
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="h-44 rounded-md bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 animate-pulse"
            />
          ))}
        </div>
      ) : isError ? (
        <div className="text-center py-16 bg-white dark:bg-stone-900 border border-red-200 dark:border-red-900/40 rounded-md">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-16 h-16 mx-auto bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/40 rounded-md flex items-center justify-center mb-4"
          >
            <AlertCircle className="w-7 h-7 text-red-500" aria-hidden />
          </motion.div>
          <p className="text-stone-900 dark:text-stone-50 text-sm font-semibold mb-1">
            Could not load signals
          </p>
          <p className="text-stone-500 text-sm max-w-xs mx-auto leading-relaxed mb-5">
            Something went wrong while fetching the feed. Please try again.
          </p>
          <Button type="button" variant="secondary" size="sm" onClick={() => void refetch()}>
            Retry
          </Button>
        </div>
      ) : signals.length === 0 ? (
        <div className="text-center py-16 bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md">
          <div className="w-16 h-16 mx-auto bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-white/10 rounded-md flex items-center justify-center mb-4">
            <Radar className="w-7 h-7 text-stone-500" aria-hidden />
          </div>
          <p className="text-stone-900 dark:text-stone-50 text-sm font-semibold mb-1">
            No signals match your filters
          </p>
          <p className="text-stone-500 text-sm max-w-xs mx-auto leading-relaxed mb-5">
            {hasActiveFilters
              ? "Try clearing filters or switching the signal type tab."
              : "Check back after the next ingest run, usually every few hours."}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {hasActiveFilters ? (
              <Button type="button" variant="secondary" size="sm" onClick={clearFilters}>
                Clear filters
              </Button>
            ) : null}
            <Button asChild variant="ghost" size="sm">
              <Link to="/student/companies">Browse companies</Link>
            </Button>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {signals.map((s) => (
            <SignalCard key={s.id} signal={s} />
          ))}
        </div>
      )}

      {/* Pagination */}
      {!isLoading && !isError && totalPages > 1 ? (
        <div className="flex items-center justify-center gap-3 mt-10">
          <button
            type="button"
            disabled={page === 1}
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            className="px-4 py-2 rounded-md text-xs font-mono uppercase tracking-widest text-stone-600 dark:text-stone-400 border border-stone-200 dark:border-white/10 hover:border-stone-400 dark:hover:border-white/30 hover:text-stone-900 dark:hover:text-stone-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors bg-transparent cursor-pointer"
          >
            Prev
          </button>
          <span className="text-xs font-mono uppercase tracking-widest text-stone-500">
            {page} / {totalPages}
          </span>
          <button
            type="button"
            disabled={page >= totalPages}
            onClick={() => setPage((p) => p + 1)}
            className="px-4 py-2 rounded-md text-xs font-mono uppercase tracking-widest text-stone-600 dark:text-stone-400 border border-stone-200 dark:border-white/10 hover:border-stone-400 dark:hover:border-white/30 hover:text-stone-900 dark:hover:text-stone-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors bg-transparent cursor-pointer"
          >
            Next
          </button>
        </div>
      ) : null}
    </motion.div>
  );
}

interface SignalCardProps {
  signal: FundingSignal;
}

const SignalCard = ({ signal }: SignalCardProps) => {
  const initial = signal.companyName.trim().charAt(0).toUpperCase() || "?";
  const showHiringBadge =
    signal.hiringSignal && !signal.fundingAmount && !signal.fundingRound;

  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className="group relative flex flex-col bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md p-5 hover:border-stone-400 dark:hover:border-white/30 transition-colors h-full"
    >
      <Link
        to={`/student/signals/${String(signal.id)}`}
        className="absolute inset-0 rounded-md no-underline"
        aria-label={`View ${signal.companyName} details`}
      />

      <div className="flex items-start justify-between gap-3 mb-3 relative pointer-events-none">
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-10 h-10 rounded-md bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-white/10 flex items-center justify-center shrink-0 text-sm font-bold text-stone-700 dark:text-stone-300">
            {signal.logoUrl ? (
              <img src={signal.logoUrl} alt="" className="w-full h-full object-cover rounded-md" />
            ) : (
              initial
            )}
          </div>
          <div className="min-w-0">
            <h3 className="text-sm font-bold text-stone-900 dark:text-stone-50 truncate leading-tight">
              {signal.companyName}
            </h3>
            <div className="flex items-center gap-1.5 text-xs text-stone-500 mt-0.5">
              <Clock className="w-3 h-3" aria-hidden />
              {timeAgo(signal.announcedAt)}
            </div>
          </div>
        </div>
        <a
          href={signal.sourceUrl}
          target="_blank"
          rel="noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="relative pointer-events-auto p-1 -m-1 text-stone-400 hover:text-stone-900 dark:hover:text-stone-50 transition-colors"
          title="Open original source"
        >
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
        </a>
      </div>

      {signal.description ? (
        <p className="text-sm text-stone-600 dark:text-stone-400 line-clamp-3 mb-4 flex-1 relative pointer-events-none">
          {signal.description}
        </p>
      ) : (
        <div className="flex-1" />
      )}

      <div className="pt-3 border-t border-stone-200 dark:border-white/10 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-mono uppercase tracking-widest text-stone-500 relative pointer-events-none">
        {signal.fundingRound ? <span>{signal.fundingRound}</span> : null}
        {signal.fundingAmount ? (
          <span className="inline-flex items-center gap-1 text-lime-600 dark:text-lime-400">
            <DollarSign className="w-3 h-3" aria-hidden />
            {signal.fundingAmount}
          </span>
        ) : null}
        {showHiringBadge ? (
          <span className="inline-flex items-center gap-1 text-lime-600 dark:text-lime-400">
            <Briefcase className="w-3 h-3" aria-hidden />
            Hiring
          </span>
        ) : null}
        {signal.hqLocation ? (
          <span className="inline-flex items-center gap-1">
            <MapPin className="w-3 h-3" aria-hidden />
            {signal.hqLocation}
          </span>
        ) : null}
      </div>
    </motion.div>
  );
};

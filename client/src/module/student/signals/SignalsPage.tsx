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
} from "lucide-react";
import { SEO } from "../../../components/SEO";
import { queryKeys } from "../../../lib/query-keys";
import type {
  FundingSignal,
  FundingSignalListResponse,
  FundingSignalSource,
} from "../../../lib/types";
import { getSignalSources, querySignals, type SignalKind } from "./signals-api";

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
    <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-stone-500">
      <span className="h-1.5 w-1.5 bg-lime-400" />
      {children}
    </div>
  );
}

export default function SignalsPage() {
  const kind: SignalKind = "all";
  const [search, setSearch] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [source, setSource] = useState("");
  const [sort, setSort] = useState<"recent" | "amount">("recent");
  const [page, setPage] = useState(1);

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

  const { data, isLoading } = useQuery<FundingSignalListResponse>({
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

  const { data: sourcesData } = useQuery<{ sources: FundingSignalSource[] }>({
    queryKey: queryKeys.signals.sources(),
    queryFn: () => getSignalSources(),
    staleTime: 60 * 60 * 1000,
  });

  const signals = data?.signals ?? [];
  const totalPages = data?.pagination.totalPages ?? 1;
  const sources = sourcesData?.sources ?? [];

  const sourceLabel = (id: string) => sources.find((s) => s.id === id)?.name ?? id;

  const submitSearch = () => {
    setSearch(searchInput.trim());
    setPage(1);
  };

  return (
    <div className="pb-16">
      <SEO title="Funding Signals" noIndex />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10"
      >
        <Kicker>discover / funding signals</Kicker>
        <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight text-stone-900 dark:text-stone-50 leading-none">
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
        </h1>
        <p className="mt-3 text-sm text-stone-500 max-w-lg">
          Startups that just raised money, and founders posting roles directly, before the listings hit LinkedIn. Sourced from Y Combinator, TechCrunch Venture, Hacker News, and manual curation.
        </p>
      </motion.div>

      {/* Search + filters */}
      <div className="flex flex-wrap items-center gap-3 mb-8">
        <div className="flex-1 min-w-0 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
          <input
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && submitSearch()}
            placeholder="Search by company or description..."
            className="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md text-sm text-stone-900 dark:text-stone-50 placeholder:text-stone-400 focus:outline-none focus:border-lime-400 dark:focus:border-lime-400 transition-colors"
          />
        </div>
        <select
          value={source}
          onChange={(e) => {
            setSource(e.target.value);
            setPage(1);
          }}
          className="px-3 py-2.5 bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md text-sm text-stone-900 dark:text-stone-50 focus:outline-none focus:border-lime-400 transition-colors"
        >
          <option value="">All sources</option>
          {sources.map((s) => (
            <option key={s.id} value={s.id}>
              {s.name}
            </option>
          ))}
        </select>
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value as "recent" | "amount")}
          className="px-3 py-2.5 bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md text-sm text-stone-900 dark:text-stone-50 focus:outline-none focus:border-lime-400 transition-colors"
        >
          <option value="recent">Most recent</option>
          <option value="amount">Largest raise</option>
        </select>
        <button
          onClick={submitSearch}
          className="px-4 py-2.5 bg-lime-400 hover:bg-lime-500 text-stone-900 rounded-md text-sm font-semibold transition-colors border-0 cursor-pointer"
        >
          Search
        </button>
      </div>

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
      ) : signals.length === 0 ? (
        <div className="text-center py-16 bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md">
          <div className="w-16 h-16 mx-auto bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-white/10 rounded-md flex items-center justify-center mb-4">
            <Radar className="w-7 h-7 text-stone-500" />
          </div>
          <p className="text-stone-500 text-sm max-w-xs mx-auto leading-relaxed">
            No signals match your filters yet. Try clearing them or check back after the next ingest run.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {signals.map((s) => (
            <SignalCard key={s.id} signal={s} sourceLabel={sourceLabel} />
          ))}
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 ? (
        <div className="flex items-center justify-center gap-3 mt-10">
          <button
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
            disabled={page >= totalPages}
            onClick={() => setPage((p) => p + 1)}
            className="px-4 py-2 rounded-md text-xs font-mono uppercase tracking-widest text-stone-600 dark:text-stone-400 border border-stone-200 dark:border-white/10 hover:border-stone-400 dark:hover:border-white/30 hover:text-stone-900 dark:hover:text-stone-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors bg-transparent cursor-pointer"
          >
            Next
          </button>
        </div>
      ) : null}
    </div>
  );
}

interface SignalCardProps {
  signal: FundingSignal;
  sourceLabel: (id: string) => string;
}

const SignalCard = ({ signal, sourceLabel }: SignalCardProps) => {
  const initial = signal.companyName.trim().charAt(0).toUpperCase() || "?";
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
              <Clock className="w-3 h-3" />
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

      <div className="pt-3 border-t border-stone-200 dark:border-white/10 flex flex-wrap items-center gap-x-4 gap-y-1 text-[10px] font-mono uppercase tracking-widest text-stone-500 relative pointer-events-none">
        <span>{sourceLabel(signal.source)}</span>
        {signal.fundingRound ? <span>{signal.fundingRound}</span> : null}
        {signal.fundingAmount ? (
          <span className="inline-flex items-center gap-1 text-lime-600 dark:text-lime-400">
            <DollarSign className="w-3 h-3" />
            {signal.fundingAmount}
          </span>
        ) : null}
        {signal.hqLocation ? (
          <span className="inline-flex items-center gap-1">
            <MapPin className="w-3 h-3" />
            {signal.hqLocation}
          </span>
        ) : null}
        {signal.hiringSignal ? (
          <span className="inline-flex items-center gap-1 text-stone-900 dark:text-stone-50">
            <Briefcase className="w-3 h-3" />
            Likely hiring
          </span>
        ) : null}
      </div>
    </motion.div>
  );
};

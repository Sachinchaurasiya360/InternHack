import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import {
  Search,
  MapPin,
  DollarSign,
  ChevronDown,
  Globe,
  Filter,
  ArrowUpRight,
} from "lucide-react";
import { LocationDropdown } from "../../components/ui/LocationDropdown";
import { PaginationControls } from "../../components/ui/PaginationControls";
import { Navbar } from "../../components/Navbar";
import { SEO } from "../../components/SEO";
import { canonicalUrl } from "../../lib/seo.utils";
import { queryKeys } from "../../lib/query-keys";
import api from "../../lib/axios";
import type { ScrapedJob, ScrapedJobSource, Pagination } from "../../lib/types";
import { Button } from "../../components/ui/button";
import toast from "@/components/ui/toast";
import { getSourceBadgeColor, getSourceLabel } from "./scraped-jobs.utils";

const cardBase =
  "group relative flex flex-col bg-white dark:bg-stone-900 p-6 rounded-md border border-stone-200 dark:border-white/10 hover:border-stone-400 dark:hover:border-white/30 transition-colors h-full no-underline";

function CompanyMark({ label }: { label: string }) {
  return (
    <div className="w-10 h-10 rounded-md bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-white/10 flex items-center justify-center shrink-0 text-stone-900 dark:text-stone-50 text-sm font-bold">
      {label?.charAt(0)?.toUpperCase() || "?"}
    </div>
  );
}

function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-stone-500 mb-2">
      <span className="h-1.5 w-1.5 bg-lime-400" />
      {children}
    </div>
  );
}

export default function ScrapedJobsPage() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [debouncedLocation, setDebouncedLocation] = useState("");
  const [source, setSource] = useState("");
  const [page, setPage] = useState(1);
  const timerRef = useRef<ReturnType<typeof setTimeout>>(undefined);
  const sourcesErrorShown = useRef(false);

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      setDebouncedSearch(search);
      setDebouncedLocation(location);
      setPage(1);
    }, 400);
    return () => clearTimeout(timerRef.current);
  }, [search, location]);

  const flushSearch = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setDebouncedSearch(search);
    setDebouncedLocation(location);
    setPage(1);
  };

  const {
    data: sourcesData,
    isError: sourcesError,
    isLoading: sourcesLoading,
  } = useQuery({
    queryKey: queryKeys.scrapedJobs.sources(),
    queryFn: async () => {
      const res = await api.get("/scraped-jobs/sources");
      return res.data.sources as ScrapedJobSource[];
    },
    staleTime: 30 * 60 * 1000,
  });

  const sources = sourcesData ?? [];

  useEffect(() => {
    if (sourcesError && !sourcesErrorShown.current) {
      sourcesErrorShown.current = true;
      toast.error("Failed to load job sources");
    }
    if (!sourcesError) {
      sourcesErrorShown.current = false;
    }
  }, [sourcesError]);

  const { data, isLoading, isFetching, isError, refetch } = useQuery({
    queryKey: queryKeys.scrapedJobs.list({
      page,
      search: debouncedSearch,
      location: debouncedLocation,
      source,
    }),
    queryFn: async () => {
      const params = new URLSearchParams({ page: String(page), limit: "12" });
      if (debouncedSearch) params.set("search", debouncedSearch);
      if (debouncedLocation) params.set("location", debouncedLocation);
      if (source) params.set("source", source);
      const res = await api.get(`/scraped-jobs?${params}`);
      return res.data as { jobs: ScrapedJob[]; pagination: Pagination };
    },
    placeholderData: keepPreviousData,
    retry: 1,
  });

  const jobs = data?.jobs ?? [];
  const pagination = data?.pagination;

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-50">
      <SEO
        title="External Job Listings"
        description="Browse aggregated job listings from top job boards. Find remote and on-site opportunities from Remotive, Arbeitnow, Adzuna, and more."
        keywords="external jobs, remote jobs, job aggregator, job listings, Remotive, Arbeitnow, developer jobs"
        canonicalUrl={canonicalUrl("/external-jobs")}
      />
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-12">
        <Kicker>job aggregator</Kicker>
        <div className="flex items-center gap-3 mb-2">
          <Globe className="w-8 h-8 text-stone-600 dark:text-stone-400" />
          <h1 className="text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
            External Job Listings
          </h1>
        </div>
        <p className="text-stone-500 mb-8">
          Jobs scraped from top job boards across the web, updated every 6 hours
        </p>

        <div className="flex flex-wrap items-center gap-3 mb-8">
          <div className="flex-1 min-w-0 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && flushSearch()}
              className="w-full pl-12 pr-4 py-3 border border-stone-200 dark:border-white/10 rounded-md bg-white dark:bg-stone-900 text-sm text-stone-900 dark:text-stone-50 placeholder-stone-400 focus:outline-none focus:border-lime-400 focus:ring-2 focus:ring-lime-400/20"
              placeholder="Search by title, company, or keywords..."
            />
          </div>
          <LocationDropdown
            id="job-location-filter"
            value={location}
            onChange={setLocation}
            onSearch={flushSearch}
            placeholder="Location"
            className="w-full sm:w-52"
          />
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400 pointer-events-none" />
            <select
              value={source}
              onChange={(e) => {
                setSource(e.target.value);
                setPage(1);
              }}
              disabled={sourcesLoading && !sources.length}
              className="pl-10 pr-8 py-3 border border-stone-200 dark:border-white/10 rounded-md focus:outline-none focus:border-lime-400 focus:ring-2 focus:ring-lime-400/20 text-sm appearance-none bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-50 w-full sm:w-44 disabled:opacity-60"
            >
              <option value="">
                {sourcesError ? "Sources unavailable" : "All Sources"}
              </option>
              {sources.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.name}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400 pointer-events-none" />
          </div>
          <Button variant="mono" size="lg" onClick={flushSearch} className="rounded-md">
            Search
          </Button>
        </div>

        {isError ? (
          <div className="text-center py-16 bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md">
            <p className="text-stone-600 dark:text-stone-400 mb-4">
              Failed to load external jobs. Please try again.
            </p>
            <Button variant="mono" onClick={() => refetch()}>
              Retry
            </Button>
          </div>
        ) : isLoading ? (
          <div className="flex items-center justify-center py-16">
            <div className="w-8 h-8 border-2 border-stone-300 dark:border-stone-700 border-t-lime-400 rounded-full animate-spin" />
          </div>
        ) : jobs.length === 0 ? (
          <div className="text-center py-16">
            <Globe className="w-12 h-12 text-stone-300 dark:text-stone-600 mx-auto mb-4" />
            <p className="text-stone-600 dark:text-stone-400 mb-2">No external jobs found</p>
            <p className="text-sm text-stone-500">Try different search criteria or check back later</p>
          </div>
        ) : (
          <>
            <div className="relative">
              {isFetching && !isLoading && (
                <div className="absolute inset-0 bg-stone-50/70 dark:bg-stone-950/70 z-10 flex items-center justify-center rounded-md">
                  <div className="w-6 h-6 border-2 border-stone-300 dark:border-stone-700 border-t-lime-400 rounded-full animate-spin" />
                </div>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {jobs.map((job, i) => (
                  <motion.div
                    key={job.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.03 }}
                  >
                    <Link to={`/external-jobs/${String(job.id)}`} className={cardBase}>
                      <span
                        className={`absolute top-4 right-4 text-[10px] px-2 py-0.5 rounded font-medium shrink-0 ${getSourceBadgeColor(job.source)}`}
                      >
                        {getSourceLabel(job.source, sources)}
                      </span>
                      <div className="flex items-start gap-3 mb-3 pr-16">
                        <CompanyMark label={job.company || "?"} />
                        <div className="flex-1 min-w-0">
                          <h3 className="text-base font-bold tracking-tight text-stone-900 dark:text-stone-50 line-clamp-1">
                            {job.title}
                          </h3>
                          <span className="text-xs font-mono uppercase tracking-widest text-stone-500 mt-0.5 block truncate">
                            {job.company}
                          </span>
                        </div>
                      </div>
                      <p className="text-sm text-stone-600 dark:text-stone-400 line-clamp-2 mb-4 leading-relaxed">
                        {job.description}
                      </p>
                      <div className="flex flex-wrap gap-3 text-xs text-stone-500 mb-3">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {job.location}
                        </span>
                        {job.salary && (
                          <span className="flex items-center gap-1">
                            <DollarSign className="w-3 h-3" />
                            {job.salary}
                          </span>
                        )}
                      </div>
                      {job.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {job.tags.slice(0, 4).map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-0.5 bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 rounded text-[10px] font-mono uppercase tracking-wider"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                      <div className="mt-auto flex items-center justify-between pt-3 border-t border-stone-100 dark:border-white/5">
                        <span className="text-[11px] font-mono uppercase tracking-widest text-stone-500">
                          view role
                        </span>
                        <ArrowUpRight className="w-4 h-4 text-stone-400 group-hover:text-lime-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            {pagination && pagination.totalPages > 1 && (
              <PaginationControls
                className="mt-8"
                currentPage={page}
                totalPages={pagination.totalPages}
                onPageChange={setPage}
                showingInfo={{ total: pagination.total, limit: pagination.limit }}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
}

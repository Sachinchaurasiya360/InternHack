import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import {
  Search,
  MapPin,
  IndianRupee,
  Clock,
  X,
  Landmark,
  ArrowUpRight,
} from "lucide-react";
import { PaginationControls } from "../../../components/ui/PaginationControls";
import { Navbar } from "../../../components/Navbar";
import { SEO } from "../../../components/SEO";
import { canonicalUrl } from "../../../lib/seo.utils";
import api from "../../../lib/axios";
import { queryKeys } from "../../../lib/query-keys";
import type {
  ExternalJob,
  Job,
  Pagination,
  ScrapedJob,
} from "../../../lib/types";
import JobCard from "./component/jobcard";

const FILTER_TAGS = [
  "Frontend",
  "Backend",
  "Full Stack",
  "Python",
  "Java",
  "DevOps",
  "AI",
  "Cloud",
  "Data Science",
] as const;

const SALARY_HAS_CURRENCY = /[₹$€£¥]|\b(USD|EUR|GBP|INR|JPY|CAD|AUD)\b/i;

function MetaChip({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider text-stone-600 dark:text-stone-400 border border-stone-200 dark:border-white/10 rounded-md">
      <span className="text-stone-400">{icon}</span>
      {children}
    </span>
  );
}

export default function JobBrowsePage() {
  const isInsideLayout = useLocation().pathname.startsWith("/student/");
  const [search, setSearch] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [debouncedLocation, setDebouncedLocation] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [hideExpired, setHideExpired] = useState(true);
  const [page, setPage] = useState(1);
  const [extPage, setExtPage] = useState(1);
  const [scrPage, setScrPage] = useState(1);
  const timerRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      setDebouncedSearch(search);
      setDebouncedLocation(locationFilter);
      setPage(1);
    }, 400);
    return () => clearTimeout(timerRef.current);
  }, [search, locationFilter]);

  useEffect(() => {
    setPage(1);
  }, [hideExpired]);

  const { data, isLoading, isFetching } = useQuery({
    queryKey: queryKeys.jobs.list({
      page,
      search: debouncedSearch,
      location: debouncedLocation,
      tags: selectedTags.join(","),
      includeExpired: !hideExpired,
    }),
    queryFn: async () => {
      const params = new URLSearchParams({ page: String(page), limit: "12" });
      if (debouncedSearch) params.set("search", debouncedSearch);
      if (debouncedLocation) params.set("location", debouncedLocation);
      if (selectedTags.length) params.set("tags", selectedTags.join(","));
      params.set("includeExpired", String(!hideExpired));
      const res = await api.get(`/jobs?${params}`);
      return res.data as { jobs: Job[]; pagination: Pagination };
    },
    placeholderData: keepPreviousData,
  });

  const { data: extData } = useQuery({
    queryKey: [
      "public-external-jobs",
      {
        page: extPage,
        search: debouncedSearch,
        location: debouncedLocation,
        tags: selectedTags.join(","),
      },
    ],
    queryFn: async () => {
      const params = new URLSearchParams({
        page: String(extPage),
        limit: "12",
      });
      if (debouncedSearch) params.set("search", debouncedSearch);
      if (debouncedLocation) params.set("location", debouncedLocation);
      if (selectedTags.length) params.set("tags", selectedTags.join(","));
      const res = await api.get(`/external-jobs?${params}`);
      return res.data as {
        jobs: ExternalJob[];
        total: number;
        totalPages: number;
        page: number;
      };
    },
    placeholderData: keepPreviousData,
  });

  const { data: scrData } = useQuery({
    queryKey: [
      "public-scraped-jobs",
      {
        page: scrPage,
        search: debouncedSearch,
        location: debouncedLocation,
        tags: selectedTags.join(","),
      },
    ],
    queryFn: async () => {
      const params = new URLSearchParams({
        page: String(scrPage),
        limit: "12",
      });
      if (debouncedSearch) params.set("search", debouncedSearch);
      if (debouncedLocation) params.set("location", debouncedLocation);
      const res = await api.get(`/scraped-jobs?${params}`);
      return res.data as { jobs: ScrapedJob[]; pagination: Pagination };
    },
    placeholderData: keepPreviousData,
  });

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
    );
    setPage(1);
    setExtPage(1);
    setScrPage(1);
  };

  const clearAll = () => {
    setSearch("");
    setLocationFilter("");
    setSelectedTags([]);
    setPage(1);
    setExtPage(1);
    setScrPage(1);
  };

  const hasFilters = search || locationFilter || selectedTags.length > 0;

  const submitSearch = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setDebouncedSearch(search);
    setDebouncedLocation(locationFilter);
    setPage(1);
    setExtPage(1);
    setScrPage(1);
  };

  const filteredExtJobs = extData?.jobs ?? [];
  const scrapedJobs = scrData?.jobs ?? [];
  const scrapedPagination = scrData?.pagination;

  const internalTotal = data?.pagination?.total;
  const externalTotal = extData?.total;
  const scrapedTotal = scrData?.pagination?.total;

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-50 relative">
      <SEO
        title="Browse Jobs & Internships"
        description="Find your next internship or job opportunity. Browse curated listings from top companies, filter by location and role, and apply directly."
        keywords="internship jobs, student jobs, browse jobs, job listings, job opportunities, apply jobs, campus hiring"
        canonicalUrl={canonicalUrl("/jobs")}
      />

      {!isInsideLayout && <Navbar />}

      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.04] dark:opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(120,113,108,0.25) 1px, transparent 1px)",
          backgroundSize: "120px 100%",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 pt-8 pb-20">
        {/* Editorial header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-6 mb-10 flex flex-wrap items-end justify-between gap-4 border-b border-stone-200 dark:border-white/10 pb-8"
        >
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-stone-500">
              <span className="h-1.5 w-1.5 bg-lime-400" />
              browse / jobs
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight text-stone-900 dark:text-stone-50 leading-none">
              Find your next{" "}
              <span className="relative inline-block">
                <span className="relative z-10">role.</span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
                  aria-hidden
                  className="absolute bottom-1 left-0 right-0 h-3 md:h-4 bg-lime-400 origin-left z-0"
                />
              </span>
            </h1>
            <p className="mt-3 text-sm text-stone-500 max-w-md">
              Open positions from partner companies plus curated external
              listings, updated daily.
            </p>
          </div>
          <div className="flex items-center gap-4 text-[10px] font-mono uppercase tracking-widest text-stone-500">
            {typeof internalTotal === "number" && (
              <span>
                internal{" "}
                <span className="text-stone-900 dark:text-stone-50 text-sm font-bold tabular-nums ml-1">
                  {internalTotal}
                </span>
              </span>
            )}
            {typeof externalTotal === "number" && (
              <span>
                external{" "}
                <span className="text-stone-900 dark:text-stone-50 text-sm font-bold tabular-nums ml-1">
                  {externalTotal}
                </span>
              </span>
            )}
            {typeof scrapedTotal === "number" && (
              <span>
                scraped{" "}
                <span className="text-stone-900 dark:text-stone-50 text-sm font-bold tabular-nums ml-1">
                  {scrapedTotal}
                </span>
              </span>
            )}
          </div>
        </motion.div>

        {/* Gov internships strip */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="mb-6"
        >
          <Link
            to={isInsideLayout ? "/student/internships" : "/internships"}
            className="group flex items-center gap-4 px-5 py-4 bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md hover:border-stone-400 dark:hover:border-white/30 transition-colors no-underline"
          >
            <div className="w-9 h-9 rounded-md bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-white/10 flex items-center justify-center shrink-0">
              <Landmark className="w-4 h-4 text-stone-600 dark:text-stone-400" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-stone-900 dark:text-stone-50">
                Top 100 Internships in India 2026
              </p>
              <p className="text-[10px] font-mono uppercase tracking-widest text-stone-500 mt-0.5">
                government / psus / iits / tech giants
              </p>
            </div>
            <ArrowUpRight className="w-4 h-4 text-stone-400 group-hover:text-lime-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all shrink-0" />
          </Link>
        </motion.div>

        {/* Search + filters */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-10 space-y-4"
        >
          <form
            onSubmit={(e) => {
              e.preventDefault();
              submitSearch();
            }}
            className="flex flex-col sm:flex-row gap-2"
          >
            <div className="flex-1 relative">
              <button
                type="submit"
                aria-label="Search"
                className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-md text-stone-400 hover:text-stone-900 dark:hover:text-stone-50 hover:bg-stone-100 dark:hover:bg-white/5 transition-colors cursor-pointer border-0 bg-transparent"
              >
                <Search className="w-4 h-4" />
              </button>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-white dark:bg-stone-900 border border-stone-300 dark:border-white/10 rounded-md focus:outline-none focus:border-lime-400 transition-colors text-sm text-stone-900 dark:text-stone-50 placeholder-stone-400 dark:placeholder-stone-600"
                placeholder="Search by title, company, or keyword..."
              />
            </div>
            <div className="relative sm:w-60">
              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
              <input
                type="text"
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-white dark:bg-stone-900 border border-stone-300 dark:border-white/10 rounded-md focus:outline-none focus:border-lime-400 transition-colors text-sm text-stone-900 dark:text-stone-50 placeholder-stone-400 dark:placeholder-stone-600"
                placeholder="Location"
              />
            </div>
          </form>

          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 mr-1">
              filter /
            </span>
            {FILTER_TAGS.map((tag, i) => {
              const active = selectedTags.includes(tag);
              return (
                <motion.button
                  key={tag}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.02, duration: 0.2 }}
                  onClick={() => toggleTag(tag)}
                  className={`px-3 py-1.5 rounded-md text-xs font-medium border transition-colors cursor-pointer ${
                    active
                      ? "bg-stone-900 dark:bg-stone-50 text-stone-50 dark:text-stone-900 border-stone-900 dark:border-stone-50"
                      : "bg-transparent text-stone-600 dark:text-stone-400 border-stone-300 dark:border-white/10 hover:border-stone-500 dark:hover:border-white/30 hover:text-stone-900 dark:hover:text-stone-50"
                  }`}
                >
                  {tag}
                </motion.button>
              );
            })}

            <label className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-stone-300 dark:border-white/10 hover:border-stone-500 dark:hover:border-white/30 transition-colors cursor-pointer select-none">
              <input
                type="checkbox"
                checked={hideExpired}
                onChange={(e) => setHideExpired(e.target.checked)}
                className="w-4 h-4 rounded bg-white dark:bg-stone-900 border border-stone-300 dark:border-white/20"
              />
              <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
                Hide expired
              </span>
            </label>
            <AnimatePresence>
              {hasFilters && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.15 }}
                  onClick={clearAll}
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md text-xs font-mono uppercase tracking-widest text-stone-500 hover:text-red-500 transition-colors border-0 bg-transparent cursor-pointer"
                >
                  <X className="w-3 h-3" /> clear
                </motion.button>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* External / curated jobs */}
        {filteredExtJobs.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-14"
          >
            <div className="flex items-end justify-between gap-4 mb-6">
              <div>
                <div className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-stone-500">
                  <span className="h-1 w-1 bg-lime-400" />
                  external / curated
                </div>
                <h2 className="mt-2 text-2xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
                  Latest opportunities
                </h2>
              </div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 hidden sm:block">
                updated daily
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredExtJobs.map((job, i) => (
                <motion.div
                  key={`ext-${job.id}`}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.03 }}
                >
                  <JobCard
                    to={job.slug ? `/jobs/ext/${job.slug}` : "#"}
                    company={job.company || "?"}
                    title={job.role || "Open Role"}
                    badge="external"
                    description={job.description}
                    tags={job.tags}
                    metaChips={
                      <>
                        {job.location && (
                          <MetaChip icon={<MapPin className="w-3 h-3" />}>
                            {job.location}
                          </MetaChip>
                        )}
                        {job.salary && (
                          <MetaChip icon={<IndianRupee className="w-3 h-3" />}>
                            {job.salary}
                          </MetaChip>
                        )}
                      </>
                    }
                  />
                </motion.div>
              ))}
            </div>
            {extData && extData.totalPages > 1 && (
              <PaginationControls
                currentPage={extPage}
                totalPages={extData.totalPages}
                onPageChange={setExtPage}
              />
            )}
          </motion.div>
        )}

        {/* Scraped / sourced jobs */}
        {scrapedJobs.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-14"
          >
            <div className="flex items-end justify-between gap-4 mb-6">
              <div>
                <div className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-stone-500">
                  <span className="h-1 w-1 bg-lime-400" />
                  sourced / partners
                </div>
                <h2 className="mt-2 text-2xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
                  Tech roles from job boards
                </h2>
              </div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 hidden sm:block">
                refreshed every 6h
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {scrapedJobs.map((job, i) => (
                <motion.div
                  key={`scr-${job.id}`}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.03 }}
                >
                  <JobCard
                    href={job.applicationUrl}
                    company={job.company || "?"}
                    title={job.title || "Open Role"}
                    badge={job.source}
                    description={job.description}
                    tags={job.tags}
                    metaChips={
                      <>
                        {job.location && (
                          <MetaChip icon={<MapPin className="w-3 h-3" />}>
                            {job.location}
                          </MetaChip>
                        )}
                        {job.salary && (
                          <MetaChip icon={<IndianRupee className="w-3 h-3" />}>
                            {job.salary}
                          </MetaChip>
                        )}
                      </>
                    }
                  />
                </motion.div>
              ))}
            </div>
            {scrapedPagination && scrapedPagination.totalPages > 1 && (
              <PaginationControls
                currentPage={scrPage}
                totalPages={scrapedPagination.totalPages}
                onPageChange={setScrPage}
              />
            )}
          </motion.div>
        )}

        {/* Internal jobs */}
        <div className="flex items-end justify-between gap-4 mb-6">
          <div>
            <div className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-stone-500">
              <span className="h-1 w-1 bg-lime-400" />
              internal / live
            </div>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
              Partner roles
            </h2>
          </div>
        </div>

        {isLoading ? (
          <div className="py-20 text-center">
            <div className="inline-flex flex-col items-center gap-3">
              <div className="w-6 h-6 border-2 border-stone-300 dark:border-stone-700 border-t-lime-400 rounded-full animate-spin" />
              <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
                loading roles...
              </span>
            </div>
          </div>
        ) : (data?.jobs ?? []).length === 0 ? (
          
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    className="py-20 text-center border border-dashed border-stone-300 dark:border-white/10 rounded-md flex flex-col items-center gap-4"
  >
    <div className="w-14 h-14 bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md flex items-center justify-center">
      <Search className="w-6 h-6 text-stone-400 dark:text-stone-600" />
    </div>
    <div>
      <p className="text-sm font-bold text-stone-900 dark:text-stone-50">
        No jobs match your filters
      </p>
      <p className="text-xs font-mono uppercase tracking-widest text-stone-500 mt-2">
        try adjusting your search or filters
      </p>
    </div>
    {hasFilters && (
      <button
        type="button"
        onClick={clearAll}
        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md text-xs font-bold bg-stone-900 dark:bg-stone-50 text-stone-50 dark:text-stone-900 hover:bg-stone-800 dark:hover:bg-stone-200 transition-colors border-0 cursor-pointer"
      >
        <X className="w-3.5 h-3.5" /> Clear filters
      </button>
    )}
  </motion.div>
) : (
          <>
            <div className="relative">
              {isFetching && (
                <div className="absolute inset-0 bg-stone-50/70 dark:bg-stone-950/70 z-10 flex items-center justify-center rounded-md">
                  <div className="w-6 h-6 border-2 border-stone-300 dark:border-stone-700 border-t-lime-400 rounded-full animate-spin" />
                </div>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {(data?.jobs ?? []).map((job, i) => (
                  <motion.div
                    key={job.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.03 }}
                  >
                    <JobCard
                      to={`/jobs/${job.id}`}
                      company={job.company || "C"}
                      title={job.title}
                      description={job.description}
                      tags={job.tags}
                      rightMeta={
                        job._count
                          ? `${job._count.applications} applied`
                          : undefined
                      }
                      metaChips={
                        <>
                          {job.location && (
                            <MetaChip icon={<MapPin className="w-3 h-3" />}>
                              {job.location}
                            </MetaChip>
                          )}
                          {job.salary && (
                            <MetaChip
                              icon={<IndianRupee className="w-3 h-3" />}
                            >
                              {job.salary}
                            </MetaChip>
                          )}
                          {job.deadline &&
                            (new Date(job.deadline) < new Date() ? (
                              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono uppercase tracking-wider text-red-600 dark:text-red-400 border border-red-200 dark:border-red-900/40 rounded-md">
                                <Clock className="w-3 h-3" /> expired
                              </span>
                            ) : (
                              <MetaChip icon={<Clock className="w-3 h-3" />}>
                                {new Date(job.deadline).toLocaleDateString()}
                              </MetaChip>
                            ))}
                        </>
                      }
                    />
                  </motion.div>
                ))}
              </div>
            </div>

            {data?.pagination && (
              <PaginationControls
                currentPage={page}
                totalPages={data.pagination.totalPages}
                onPageChange={setPage}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
}

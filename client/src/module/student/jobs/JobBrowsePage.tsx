import React, { useState, useEffect, useRef } from "react";
import { useDebounce } from "../../../hooks/useDebounce";
import { Link, useLocation, useSearchParams } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import {
  Search,
  MapPin,
  IndianRupee,
  Wallet,
  Clock,
  X,
  Landmark,
  ArrowUpRight,
} from "lucide-react";
import { PaginationControls } from "../../../components/ui/PaginationControls";
import { ResultCount } from "../../../components/ui/ResultCount";
import { Navbar } from "../../../components/Navbar";
import { Footer } from "../../../components/Footer";
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

const cardBase =
  "group relative flex flex-col bg-white dark:bg-stone-900 p-5 rounded-md border border-stone-200 dark:border-white/10 hover:border-stone-400 dark:hover:border-white/30 transition-colors h-full no-underline";

function CompanyMark({ label }: { label: string }) {
  return (
    <div className="w-10 h-10 rounded-md bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-white/10 flex items-center justify-center shrink-0 text-stone-900 dark:text-stone-50 text-sm font-bold">
      {label?.charAt(0)?.toUpperCase() || "?"}
    </div>
  );
}

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

const ExternalJobCard = React.memo(function ExternalJobCard({ job }: { job: ExternalJob }) {
  const salaryHasCurrency = job.salary ? SALARY_HAS_CURRENCY.test(job.salary) : false;
  const SalaryIcon = salaryHasCurrency ? Wallet : IndianRupee;
  return (
    <Link to={job.slug ? `/jobs/ext/${job.slug}` : "#"} className={cardBase}>
      <span className="absolute top-4 right-4 text-[10px] font-mono uppercase tracking-widest text-stone-500 inline-flex items-center gap-1.5">
        <span className="h-1 w-1 bg-lime-400" />
        external
      </span>
      <div className="flex items-start gap-3 mb-3 pr-16">
        <CompanyMark label={job.company || "?"} />
        <div className="flex-1 min-w-0">
          <h3 className="text-base font-bold tracking-tight text-stone-900 dark:text-stone-50 line-clamp-1 leading-tight">
            {job.role || "Open Role"}
          </h3>
          <span className="text-xs font-mono uppercase tracking-widest text-stone-500 mt-0.5 block truncate">
            {job.company || "company"}
          </span>
        </div>
      </div>
      {job.description && (
        <p className="text-sm text-stone-600 dark:text-stone-400 line-clamp-2 mb-4 leading-relaxed">
          {job.description}
        </p>
      )}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {job.location && <MetaChip icon={<MapPin className="w-3 h-3" />}>{job.location}</MetaChip>}
        {job.salary && <MetaChip icon={<SalaryIcon className="w-3 h-3" />}>{job.salary}</MetaChip>}
      </div>
      {job.tags.length > 0 && (
        <div className="flex flex-wrap gap-1 mb-4">
          {job.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="px-2 py-0.5 bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 rounded text-[10px] font-mono uppercase tracking-wider">
              {tag}
            </span>
          ))}
        </div>
      )}
      <div className="mt-auto flex items-center justify-between pt-3 border-t border-stone-100 dark:border-white/5">
        <span className="text-[11px] font-mono uppercase tracking-widest text-stone-500">view role</span>
        <ArrowUpRight className="w-4 h-4 text-stone-400 group-hover:text-lime-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
      </div>
    </Link>
  );
});

const ScrapedJobCard = React.memo(function ScrapedJobCard({ job }: { job: ScrapedJob }) {
  const salaryHasCurrency = job.salary ? SALARY_HAS_CURRENCY.test(job.salary) : false;
  const SalaryIcon = salaryHasCurrency ? Wallet : IndianRupee;
  return (
    <a href={job.applicationUrl} target="_blank" rel="noopener noreferrer" className={cardBase}>
      <span className="absolute top-4 right-4 text-[10px] font-mono uppercase tracking-widest text-stone-500 inline-flex items-center gap-1.5">
        <span className="h-1 w-1 bg-lime-400" />
        {job.source}
      </span>
      <div className="flex items-start gap-3 mb-3 pr-20">
        <CompanyMark label={job.company || "?"} />
        <div className="flex-1 min-w-0">
          <h3 className="text-base font-bold tracking-tight text-stone-900 dark:text-stone-50 line-clamp-1 leading-tight">
            {job.title || "Open Role"}
          </h3>
          <span className="text-xs font-mono uppercase tracking-widest text-stone-500 mt-0.5 block truncate">
            {job.company || "company"}
          </span>
        </div>
      </div>
      {job.description && (
        <p className="text-sm text-stone-600 dark:text-stone-400 line-clamp-2 mb-4 leading-relaxed">
          {job.description}
        </p>
      )}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {job.location && <MetaChip icon={<MapPin className="w-3 h-3" />}>{job.location}</MetaChip>}
        {job.salary && <MetaChip icon={<SalaryIcon className="w-3 h-3" />}>{job.salary}</MetaChip>}
      </div>
      {job.tags.length > 0 && (
        <div className="flex flex-wrap gap-1 mb-4">
          {job.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="px-2 py-0.5 bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 rounded text-[10px] font-mono uppercase tracking-wider">
              {tag}
            </span>
          ))}
        </div>
      )}
      <div className="mt-auto flex items-center justify-between pt-3 border-t border-stone-100 dark:border-white/5">
        <span className="text-[11px] font-mono uppercase tracking-widest text-stone-500">view role</span>
        <ArrowUpRight className="w-4 h-4 text-stone-400 group-hover:text-lime-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
      </div>
    </a>
  );
});

export default function JobBrowsePage() {
  const isInsideLayout = useLocation().pathname.startsWith("/student/");
  const [searchParams, setSearchParams] = useSearchParams();

  const [search, setSearch] = useState(() => searchParams.get("search") ?? "");
  const [locationFilter, setLocationFilter] = useState(
    () => searchParams.get("location") ?? "",
  );
  const [debouncedSearch, setDebouncedSearch] = useState(
    () => searchParams.get("search") ?? "",
  );
  const [debouncedLocation, setDebouncedLocation] = useState(
    () => searchParams.get("location") ?? "",
  );
  const [selectedTags, setSelectedTags] = useState<string[]>(
    () => searchParams.get("tags")?.split(",").filter(Boolean) ?? [],
  );
  const [page, setPage] = useState(1);
  const [extPage, setExtPage] = useState(1);
  const [scrPage, setScrPage] = useState(1);
  const [salaryMin, setSalaryMin] = useState("");
  const [salaryMax, setSalaryMax] = useState("");
  const debouncedSalaryMin = useDebounce(salaryMin, 500);
  const debouncedSalaryMax = useDebounce(salaryMax, 500);
  const [hideExpired, setHideExpired] = useState(true);

  const [showSuggestions, setShowSuggestions] = useState(false);
  const [activeSuggestion, setActiveSuggestion] = useState(-1);

  const timerRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      setDebouncedSearch(search);
      setDebouncedLocation(locationFilter);
      setPage(1);

      const next = new URLSearchParams(searchParams);
      if (search) next.set("search", search);
      else next.delete("search");
      if (locationFilter) next.set("location", locationFilter);
      else next.delete("location");
      setSearchParams(next, { replace: true });
    }, 400);
    return () => clearTimeout(timerRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, locationFilter]);

  const { data, isLoading, isFetching } = useQuery({
    queryKey: queryKeys.jobs.list({
      page,
      search: debouncedSearch,
      location: debouncedLocation,
      tags: selectedTags.join(","),
      includeExpired: !hideExpired,
      salaryMin: debouncedSalaryMin || undefined,
      salaryMax: debouncedSalaryMax || undefined,
    }),
    queryFn: async () => {
      const params = new URLSearchParams({
        page: String(page),
        limit: "12",
      });
      if (debouncedSearch) params.set("search", debouncedSearch);
      if (debouncedLocation) params.set("location", debouncedLocation);
      if (selectedTags.length) params.set("tags", selectedTags.join(","));
      params.set("includeExpired", String(!hideExpired));
      if (debouncedSalaryMin) params.set("salaryMin", debouncedSalaryMin);
      if (debouncedSalaryMax) params.set("salaryMax", debouncedSalaryMax);
      const res = await api.get(`/jobs?${params}`);
      return res.data as { jobs: Job[]; pagination: Pagination };
    },
    staleTime: 60_000,
    placeholderData: keepPreviousData,
  });

  const { data: extData } = useQuery({
    queryKey: queryKeys.jobs.list({
      _src: "ext",
      page: extPage,
      search: debouncedSearch,
      location: debouncedLocation,
      tags: selectedTags.join(","),
    }),
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
    staleTime: 60_000,
    placeholderData: keepPreviousData,
  });

  const { data: scrData } = useQuery({
    queryKey: queryKeys.jobs.list({
      _src: "scr",
      page: scrPage,
      search: debouncedSearch,
      location: debouncedLocation,
      tags: selectedTags.join(","),
    }),
    queryFn: async () => {
      const params = new URLSearchParams({
        page: String(scrPage),
        limit: "12",
      });
      if (debouncedSearch) params.set("search", debouncedSearch);
      if (debouncedLocation) params.set("location", debouncedLocation);
      if (selectedTags.length) params.set("tags", selectedTags.join(","));
      const res = await api.get(`/scraped-jobs?${params}`);
      return res.data as { jobs: ScrapedJob[]; pagination: Pagination };
    },
    staleTime: 60_000,
    placeholderData: keepPreviousData,
  });

  const toggleTag = (tag: string) => {
    const updated = selectedTags.includes(tag)
      ? selectedTags.filter((t) => t !== tag)
      : [...selectedTags, tag];
    setSelectedTags(updated);
    const next = new URLSearchParams(searchParams);
    if (updated.length > 0) next.set("tags", updated.join(","));
    else next.delete("tags");
    setSearchParams(next, { replace: true });
    setPage(1);
    setExtPage(1);
    setScrPage(1);
  };

  const clearAll = () => {
    setSearch("");
    setLocationFilter("");
    setDebouncedSearch("");
    setDebouncedLocation("");
    setSelectedTags([]);
    setSalaryMin("");
    setSalaryMax("");
    setSearchParams({});
    setPage(1);
    setExtPage(1);
    setScrPage(1);
  };

  const hasFilters = search || locationFilter || selectedTags.length > 0 || salaryMin || salaryMax;
  const selectSuggestion = (location: string) => {
    setLocationFilter(location);
    setShowSuggestions(false);
    setActiveSuggestion(-1);
  };
  const submitSearch = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setDebouncedSearch(search);
    setDebouncedLocation(locationFilter);
    setPage(1);
    setExtPage(1);
    setScrPage(1);
    const next = new URLSearchParams(searchParams);
    if (search) next.set("search", search); else next.delete("search");
    if (locationFilter) next.set("location", locationFilter); else next.delete("location");
    setSearchParams(next, { replace: true });
  };
  const filteredExtJobs = React.useMemo(() => extData?.jobs ?? [], [extData?.jobs]);
  const scrapedJobs = React.useMemo(() => scrData?.jobs ?? [], [scrData?.jobs]);
  const scrapedPagination = scrData?.pagination;
  const allLocations = React.useMemo<string[]>(
    () =>
      Array.from(
        new Set(
          [
            ...(data?.jobs ?? []).map((job) => job.location),
            ...(filteredExtJobs ?? []).map((job) => job.location),
            ...(scrapedJobs ?? []).map((job) => job.location),
          ].filter((loc): loc is string => Boolean(loc))
        )
      ),
    [data?.jobs, filteredExtJobs, scrapedJobs]
  );

  const locationSuggestions = locationFilter.trim()
    ? allLocations
      .filter((location) =>
        location.toLowerCase().includes(locationFilter.toLowerCase())
      )
      .sort((a, b) => {
        const aStarts = a
          .toLowerCase()
          .startsWith(locationFilter.toLowerCase());

        const bStarts = b
          .toLowerCase()
          .startsWith(locationFilter.toLowerCase());

        if (aStarts && !bStarts) return -1;
        if (!aStarts && bStarts) return 1;

        return a.localeCompare(b);
      })
      .slice(0, 6)
    : [];

  const internalTotal = data?.pagination?.total;
  const externalTotal = extData?.total;
  const scrapedTotal = scrData?.pagination?.total;

  const allEmpty =
    !isLoading &&
    filteredExtJobs.length === 0 &&
    scrapedJobs.length === 0 &&
    (data?.jobs ?? []).length === 0;

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
          <div className="flex items-center gap-4 text-xs font-mono uppercase tracking-widest text-stone-500">
            {typeof internalTotal === "number" && internalTotal > 0 && (
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
              <p className="text-xs font-mono uppercase tracking-widest text-stone-500 mt-0.5">
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
            onSubmit={(e) => { e.preventDefault(); submitSearch(); }}
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
                onChange={(e) => {
                  setLocationFilter(e.target.value);
                  setShowSuggestions(true);
                  setActiveSuggestion(-1);
                }}
                onFocus={() => setShowSuggestions(true)}
                onKeyDown={(e) => {
                  if (!locationSuggestions.length) return;

                  if (e.key === "ArrowDown") {
                    e.preventDefault();
                    setActiveSuggestion((prev) =>
                      prev < locationSuggestions.length - 1 ? prev + 1 : prev
                    );
                  }

                  if (e.key === "ArrowUp") {
                    e.preventDefault();
                    setActiveSuggestion((prev) =>
                      prev > 0 ? prev - 1 : 0
                    );
                  }

                  if (e.key === "Enter" && activeSuggestion >= 0) {
                    e.preventDefault();
                    selectSuggestion(locationSuggestions[activeSuggestion]);
                  }
                }}
                className="w-full pl-11 pr-4 py-3 bg-white dark:bg-stone-900 border border-stone-300 dark:border-white/10 rounded-md focus:outline-none focus:border-lime-400 transition-colors text-sm text-stone-900 dark:text-stone-50 placeholder-stone-400 dark:placeholder-stone-600"
                placeholder="Location"
              />

              {showSuggestions && locationSuggestions.length > 0 && (
                <div className="absolute top-full left-0 right-0 z-50 mt-1 bg-white dark:bg-stone-900 border border-stone-300 dark:border-white/10 rounded-md shadow-lg overflow-hidden">
                  {locationSuggestions.map((location, index) => (
                    <button
                      key={location}
                      type="button"
                      onClick={() => selectSuggestion(location)}
                      className={`w-full text-left px-4 py-3 text-sm transition-colors ${activeSuggestion === index
                          ? "bg-stone-100 dark:bg-stone-800"
                          : "hover:bg-stone-100 dark:hover:bg-stone-800"
                        }`}
                    >
                      {location}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </form>

          {/* Salary range inputs */}
          <div className="flex items-center gap-2 flex-wrap mt-2">
            <span className="text-xs font-mono uppercase tracking-widest text-stone-500 mr-1 flex items-center gap-1">
              <IndianRupee className="w-3 h-3" />
              salary /
            </span>
            <div className="flex items-center gap-2">
              <div className="relative">
                <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-xs text-stone-400 pointer-events-none font-mono">min</span>
                <input
                  id="salary-min-input"
                  type="number"
                  min={0}
                  value={salaryMin}
                  onChange={(e) => { setSalaryMin(e.target.value); setPage(1); }}
                  className="w-28 pl-9 pr-2 py-1.5 bg-white dark:bg-stone-900 border border-stone-300 dark:border-white/10 rounded-md focus:outline-none focus:border-lime-400 transition-colors text-xs text-stone-900 dark:text-stone-50 placeholder-stone-400 dark:placeholder-stone-600 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  placeholder="0"
                />
              </div>
              <span className="text-stone-400 text-xs">—</span>
              <div className="relative">
                <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-xs text-stone-400 pointer-events-none font-mono">max</span>
                <input
                  id="salary-max-input"
                  type="number"
                  min={0}
                  value={salaryMax}
                  onChange={(e) => { setSalaryMax(e.target.value); setPage(1); }}
                  className="w-28 pl-9 pr-2 py-1.5 bg-white dark:bg-stone-900 border border-stone-300 dark:border-white/10 rounded-md focus:outline-none focus:border-lime-400 transition-colors text-xs text-stone-900 dark:text-stone-50 placeholder-stone-400 dark:placeholder-stone-600 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  placeholder="∞"
                />
              </div>
              <span className="text-xs font-mono text-stone-400">LPA</span>
            </div>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs font-mono uppercase tracking-widest text-stone-500 mr-1">
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
                  className={`px-3 py-1.5 rounded-md text-xs font-medium border transition-colors cursor-pointer ${active
                      ? "bg-stone-900 dark:bg-stone-50 text-stone-50 dark:text-stone-900 border-stone-900 dark:border-stone-50"
                      : "bg-transparent text-stone-600 dark:text-stone-400 border-stone-300 dark:border-white/10 hover:border-stone-500 dark:hover:border-white/30 hover:text-stone-900 dark:hover:text-stone-50"
                    }`}
                >
                  {tag}
                </motion.button>
              );
            })}

            <label
              className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-md border transition-colors cursor-pointer select-none ${hideExpired
                  ? "bg-lime-50 dark:bg-lime-400/10 text-lime-700 dark:text-lime-400 border-lime-200 dark:border-lime-400/30"
                  : "bg-transparent text-stone-600 dark:text-stone-400 border-stone-300 dark:border-white/10 hover:border-stone-500 dark:hover:border-white/30"
                }`}
            >
              <input
                type="checkbox"
                checked={hideExpired}
                onChange={(e) => setHideExpired(e.target.checked)}
                className="w-4 h-4 rounded bg-white dark:bg-stone-900 border border-stone-300 dark:border-white/20 accent-lime-400"
              />
              <span
                className={`text-xs font-mono uppercase tracking-widest ${hideExpired ? "text-lime-700 dark:text-lime-400" : "text-stone-500"
                  }`}
              >
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
                <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-stone-500">
                  <span className="h-1 w-1 bg-lime-400" />
                  external / curated
                </div>
                <h2 className="mt-2 text-2xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
                  Latest opportunities
                </h2>
              </div>
              <span className="text-xs font-mono uppercase tracking-widest text-stone-500 hidden sm:block">updated daily</span>
            </div>
            {extData && <ResultCount currentCount={filteredExtJobs.length} totalCount={extData.total} />}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredExtJobs.map((job, i) => (
                <motion.div key={`ext-${job.id}`} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.04 }}>
                  <ExternalJobCard job={job} />
                </motion.div>
              ))}
            </div>
            {extData && extData.totalPages > 1 && (
              <PaginationControls currentPage={extPage} totalPages={extData.totalPages} onPageChange={setExtPage} />
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
                <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-stone-500">
                  <span className="h-1 w-1 bg-lime-400" />
                  sourced / partners
                </div>
                <h2 className="mt-2 text-2xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
                  Tech roles from job boards
                </h2>
              </div>
              <span className="text-xs font-mono uppercase tracking-widest text-stone-500 hidden sm:block">refreshed every 6h</span>
            </div>
            {scrapedPagination && <ResultCount currentCount={scrapedJobs.length} totalCount={scrapedPagination.total} />}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {scrapedJobs.map((job, i) => (
                <motion.div key={`scr-${job.id}`} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.04 }}>
                  <ScrapedJobCard job={job} />
                </motion.div>
              ))}
            </div>
            {scrapedPagination && scrapedPagination.totalPages > 1 && (
              <PaginationControls currentPage={scrPage} totalPages={scrapedPagination.totalPages} onPageChange={setScrPage} />
            )}
          </motion.div>
        )}

        {/* Global empty state — shown when ALL three sources return nothing */}
        {allEmpty && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="py-24 text-center border border-dashed border-stone-300 dark:border-white/10 rounded-md flex flex-col items-center gap-4 mb-14"
          >
            <div className="w-14 h-14 bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md flex items-center justify-center">
              <Search className="w-6 h-6 text-stone-400 dark:text-stone-600" />
            </div>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
              No results found
            </h2>
          </motion.div>
        )}
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
          <motion.div className="py-20 text-center border border-dashed border-stone-300 dark:border-white/10 rounded-md flex flex-col items-center gap-4">
            <div>
              <p className="text-sm font-bold text-stone-900 dark:text-stone-50">No jobs match your filters</p>
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
            <div className="flex items-end justify-between gap-4 mb-6">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-stone-500">
                  <span className="h-1 w-1 bg-lime-400" />
                  internal / live
                </div>
              </div>
            </div>

            {isLoading ? (
              <div className="py-20 text-center">
                <div className="inline-flex flex-col items-center gap-3">
                  <div className="w-6 h-6 border-2 border-stone-300 dark:border-stone-700 border-t-lime-400 rounded-full animate-spin" />
                  <span className="text-xs font-mono uppercase tracking-widest text-stone-500">loading roles...</span>
                </div>
              </div>
            ) : (
              <>
                {data?.pagination && <ResultCount currentCount={(data.jobs ?? []).length} totalCount={data.pagination.total} />}
                <div className="relative">
                  {isFetching && (
                    <div className="absolute inset-0 bg-stone-50/70 dark:bg-stone-950/70 z-10 flex items-center justify-center rounded-md">
                      <div className="w-6 h-6 border-2 border-stone-300 dark:border-stone-700 border-t-lime-400 rounded-full animate-spin" />
                    </div>
                  )}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {(data?.jobs ?? []).map((job, i) => (
                      <motion.div key={job.id} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.03 }}>
                        <JobCard
                          to={`/jobs/${job.id}`}
                          company={job.company || "C"}
                          title={job.title}
                          description={job.description}
                          tags={job.tags}
                          rightMeta={job._count ? `${job._count.applications} applied` : undefined}
                          metaChips={
                            <>
                              <MetaChip icon={<MapPin className="w-3 h-3" />}>{job.location}</MetaChip>
                              <MetaChip icon={<IndianRupee className="w-3 h-3" />}>{job.salary}</MetaChip>
                              {job.deadline && (
                                new Date(job.deadline) < new Date() ? (
                                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono uppercase tracking-wider text-red-600 dark:text-red-400 border border-red-200 dark:border-red-900/40 rounded-md">
                                    <Clock className="w-3 h-3" /> expired
                                  </span>
                                ) : (
                                  <MetaChip icon={<Clock className="w-3 h-3" />}>
                                    {new Date(job.deadline).toLocaleDateString()}
                                  </MetaChip>
                                )
                              )}
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
          </>
        )}
      </div>
      <Footer />
    </div>
  );
}

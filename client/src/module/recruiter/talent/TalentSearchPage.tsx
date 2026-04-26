import { useState, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router";
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import {
  Search as SearchIcon,
  SlidersHorizontal,
  Users,
  ChevronDown,
  X,
  Bookmark,
} from "lucide-react";
import { PaginationControls } from "../../../components/ui/PaginationControls";
import { Button } from "../../../components/ui/button";
import api from "../../../lib/axios";
import { queryKeys } from "../../../lib/query-keys";
import type { Pagination } from "../../../lib/types";
import TalentCard, { type TalentResult } from "./TalentCard";
import { SEO } from "../../../components/SEO";

interface TalentFilters {
  search: string;
  skills: string;
  verifiedSkills: string;
  college: string;
  graduationYearMin: string;
  graduationYearMax: string;
  minAtsScore: number;
  location: string;
  jobStatus: string;
}

const defaultFilters: TalentFilters = {
  search: "",
  skills: "",
  verifiedSkills: "",
  college: "",
  graduationYearMin: "",
  graduationYearMax: "",
  minAtsScore: 0,
  location: "",
  jobStatus: "",
};

const JOB_STATUS_OPTIONS = [
  { key: "", label: "All" },
  { key: "LOOKING", label: "Looking" },
  { key: "OPEN_TO_OFFER", label: "Open to offers" },
  { key: "NO_OFFER", label: "Not looking" },
];

interface TalentSearchResponse {
  students: TalentResult[];
  pagination: Pagination;
}

const inputClass =
  "w-full px-3 py-2 rounded-md bg-white dark:bg-stone-950 border border-stone-200 dark:border-white/10 text-sm text-stone-900 dark:text-stone-100 placeholder:text-stone-400 dark:placeholder:text-stone-500 focus:outline-none focus:border-stone-900 dark:focus:border-stone-50 transition-colors";

const labelClass =
  "block text-[10px] font-mono uppercase tracking-widest text-stone-500 mb-1.5";

export default function TalentSearchPage() {
  const [filters, setFilters] = useState<TalentFilters>(defaultFilters);
  const [appliedFilters, setAppliedFilters] = useState<TalentFilters>(defaultFilters);
  const [page, setPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);

  const { data: savedIdsData } = useQuery({
    queryKey: queryKeys.savedCandidates.ids(),
    queryFn: async () => {
      const res = await api.get("/recruiter/saved-candidates/ids");
      return (res.data?.ids ?? []) as number[];
    },
    staleTime: 1000 * 60,
  });

  const savedSet = useMemo(() => new Set(savedIdsData ?? []), [savedIdsData]);

  const { data, isLoading } = useQuery({
    queryKey: queryKeys.recruiter.talentSearch({ ...appliedFilters, page }),
    queryFn: async () => {
      const params = new URLSearchParams({ page: String(page), limit: "12" });
      if (appliedFilters.search) params.set("search", appliedFilters.search);
      if (appliedFilters.skills) params.set("skills", appliedFilters.skills);
      if (appliedFilters.verifiedSkills) params.set("verifiedSkills", appliedFilters.verifiedSkills);
      if (appliedFilters.college) params.set("college", appliedFilters.college);
      if (appliedFilters.graduationYearMin) params.set("graduationYearMin", appliedFilters.graduationYearMin);
      if (appliedFilters.graduationYearMax) params.set("graduationYearMax", appliedFilters.graduationYearMax);
      if (appliedFilters.minAtsScore > 0) params.set("minAtsScore", String(appliedFilters.minAtsScore));
      if (appliedFilters.location) params.set("location", appliedFilters.location);
      if (appliedFilters.jobStatus) params.set("jobStatus", appliedFilters.jobStatus);

      const res = await api.get(`/recruiter/talent-search?${params}`);
      return res.data as TalentSearchResponse;
    },
    placeholderData: keepPreviousData,
  });

  const applyFilters = useCallback(() => {
    setAppliedFilters({ ...filters });
    setPage(1);
  }, [filters]);

  const clearFilters = useCallback(() => {
    setFilters(defaultFilters);
    setAppliedFilters(defaultFilters);
    setPage(1);
  }, []);

  const updateFilter = <K extends keyof TalentFilters>(key: K, value: TalentFilters[K]) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const setJobStatus = (status: string) => {
    const next = { ...filters, jobStatus: status };
    setFilters(next);
    setAppliedFilters(next);
    setPage(1);
  };

  const students = data?.students ?? [];
  const pagination = data?.pagination ?? null;

  const activeFilterCount = useMemo(() => {
    return Object.entries(appliedFilters).filter(([k, v]) => {
      if (k === "minAtsScore") return (v as number) > 0;
      if (k === "search" || k === "jobStatus") return false;
      return v !== "";
    }).length;
  }, [appliedFilters]);

  return (
    <div className="max-w-7xl mx-auto">
      <SEO title="Talent Search" noIndex />

      {/* Editorial header */}
      <header className="mt-6 mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="h-1 w-1 bg-lime-400" />
          <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
            recruiter / talent search
          </span>
        </div>

        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
              Find{" "}
              <span className="relative inline-block">
                candidates.
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.25, duration: 0.5, ease: "easeOut" }}
                  className="absolute -bottom-0.5 left-0 right-0 h-0.75 bg-lime-400 origin-left"
                />
              </span>
            </h1>
            <p className="mt-2 text-sm text-stone-600 dark:text-stone-400 max-w-xl">
              Filter by verified skills, college, graduation year, and ATS score. Save anyone worth following up.
            </p>
          </div>

          <Button asChild variant="secondary" size="sm">
            <Link to="/recruiters/saved" className="no-underline inline-flex items-center gap-2">
              <Bookmark className="w-4 h-4" />
              Saved
            </Link>
          </Button>
        </div>

        {/* Stat strip */}
        <div className="mt-6 grid grid-cols-3 gap-px bg-stone-200 dark:bg-white/10 border border-stone-200 dark:border-white/10 rounded-md overflow-hidden">
          <Stat label="candidates" value={pagination?.total ?? 0} />
          <Stat label="showing" value={students.length} />
          <Stat label="page" value={`${pagination?.page ?? page} / ${pagination?.totalPages ?? 1}`} />
        </div>
      </header>

      {/* Search bar */}
      <div className="mb-4 flex items-center gap-2">
        <div className="relative flex-1">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
          <input
            type="text"
            value={filters.search}
            onChange={(e) => updateFilter("search", e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && applyFilters()}
            placeholder="Search by name, email, or skill"
            className="w-full pl-9 pr-3 py-2.5 rounded-md bg-white dark:bg-stone-950 border border-stone-200 dark:border-white/10 text-sm text-stone-900 dark:text-stone-100 placeholder:text-stone-400 dark:placeholder:text-stone-500 focus:outline-none focus:border-stone-900 dark:focus:border-stone-50 transition-colors"
          />
        </div>
        <Button variant="primary" size="md" onClick={applyFilters}>
          Search
        </Button>
      </div>

      {/* Filter chips row */}
      <div className="mb-6 flex flex-wrap items-center gap-1.5">
        {JOB_STATUS_OPTIONS.map((opt) => {
          const active = appliedFilters.jobStatus === opt.key;
          return (
            <button
              key={opt.key}
              onClick={() => setJobStatus(opt.key)}
              className={`px-3 py-1.5 rounded-md text-xs font-medium border transition-colors ${
                active
                  ? "bg-stone-900 dark:bg-stone-50 text-stone-50 dark:text-stone-900 border-stone-900 dark:border-stone-50"
                  : "bg-white dark:bg-stone-950 text-stone-600 dark:text-stone-400 border-stone-200 dark:border-white/10 hover:border-stone-400 dark:hover:border-white/30"
              }`}
            >
              {opt.label}
            </button>
          );
        })}

        <span className="mx-1 h-5 w-px bg-stone-200 dark:bg-white/10" />

        <button
          onClick={() => setShowFilters((v) => !v)}
          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium border transition-colors ${
            activeFilterCount > 0
              ? "bg-lime-400 text-stone-900 border-lime-400"
              : "bg-white dark:bg-stone-950 text-stone-600 dark:text-stone-400 border-stone-200 dark:border-white/10 hover:border-stone-400 dark:hover:border-white/30"
          }`}
        >
          <SlidersHorizontal className="w-3.5 h-3.5" />
          Filters
          {activeFilterCount > 0 && (
            <span className="ml-1 inline-flex items-center justify-center w-4 h-4 rounded-sm bg-stone-900 text-lime-400 text-[10px] font-mono">
              {activeFilterCount}
            </span>
          )}
          <ChevronDown className={`w-3.5 h-3.5 transition-transform ${showFilters ? "rotate-180" : ""}`} />
        </button>

        {(activeFilterCount > 0 || appliedFilters.search) && (
          <button
            onClick={clearFilters}
            className="inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-mono uppercase tracking-wider text-stone-500 hover:text-stone-900 dark:hover:text-stone-50 transition-colors"
          >
            <X className="w-3 h-3" />
            Clear
          </button>
        )}
      </div>

      {/* Expanded filter panel */}
      <AnimatePresence>
        {showFilters && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden mb-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-5 bg-white dark:bg-stone-950 border border-stone-200 dark:border-white/10 rounded-md">
              <div>
                <label className={labelClass}>skills</label>
                <input
                  type="text"
                  value={filters.skills}
                  onChange={(e) => updateFilter("skills", e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && applyFilters()}
                  className={inputClass}
                  placeholder="React, Node.js"
                />
                <p className="mt-1 text-[10px] font-mono text-stone-400">comma-separated</p>
              </div>

              <div>
                <label className={labelClass}>verified skills</label>
                <input
                  type="text"
                  value={filters.verifiedSkills}
                  onChange={(e) => updateFilter("verifiedSkills", e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && applyFilters()}
                  className={inputClass}
                  placeholder="javascript, react"
                />
                <p className="mt-1 text-[10px] font-mono text-stone-400">test-verified only</p>
              </div>

              <div>
                <label className={labelClass}>college</label>
                <input
                  type="text"
                  value={filters.college}
                  onChange={(e) => updateFilter("college", e.target.value)}
                  className={inputClass}
                  placeholder="e.g. IIT Delhi"
                />
              </div>

              <div>
                <label className={labelClass}>location</label>
                <input
                  type="text"
                  value={filters.location}
                  onChange={(e) => updateFilter("location", e.target.value)}
                  className={inputClass}
                  placeholder="e.g. Bangalore"
                />
              </div>

              <div>
                <label className={labelClass}>graduation year</label>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="number"
                    value={filters.graduationYearMin}
                    onChange={(e) => updateFilter("graduationYearMin", e.target.value)}
                    className={inputClass}
                    placeholder="From"
                    min={2000}
                    max={2040}
                  />
                  <input
                    type="number"
                    value={filters.graduationYearMax}
                    onChange={(e) => updateFilter("graduationYearMax", e.target.value)}
                    className={inputClass}
                    placeholder="To"
                    min={2000}
                    max={2040}
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className={labelClass + " mb-0"}>min ats score</span>
                  <span className="text-xs font-mono tabular-nums text-stone-900 dark:text-stone-50">
                    {filters.minAtsScore}
                  </span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={100}
                  step={5}
                  value={filters.minAtsScore}
                  onChange={(e) => updateFilter("minAtsScore", Number(e.target.value))}
                  className="w-full h-1 bg-stone-200 dark:bg-white/10 rounded appearance-none cursor-pointer accent-lime-400"
                />
                <div className="flex justify-between text-[10px] font-mono text-stone-400 mt-1">
                  <span>0</span>
                  <span>50</span>
                  <span>100</span>
                </div>
              </div>

              <div className="flex items-end sm:col-span-2 gap-2">
                <Button variant="primary" size="sm" onClick={applyFilters} className="flex-1">
                  Apply filters
                </Button>
                {activeFilterCount > 0 && (
                  <Button variant="ghost" size="sm" onClick={clearFilters}>
                    Clear
                  </Button>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Results */}
      {isLoading ? (
        <LoadingSkeleton />
      ) : students.length === 0 ? (
        <EmptyState />
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {students.map((student, i) => (
              <TalentCard
                key={student.id}
                student={student}
                index={i}
                saved={savedSet.has(student.id)}
              />
            ))}
          </div>

          {pagination && pagination.totalPages > 1 && (
            <PaginationControls
              currentPage={page}
              totalPages={pagination.totalPages}
              onPageChange={setPage}
              showingInfo={{ total: pagination.total, limit: 12 }}
            />
          )}
        </>
      )}
    </div>
  );
}

function Stat({ label, value }: { label: string; value: number | string }) {
  return (
    <div className="bg-white dark:bg-stone-950 px-4 py-3">
      <div className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
        {label}
      </div>
      <div className="mt-0.5 text-lg font-bold tabular-nums text-stone-900 dark:text-stone-50">
        {value}
      </div>
    </div>
  );
}

function LoadingSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="bg-white dark:bg-stone-950 border border-stone-200 dark:border-white/10 rounded-md p-5 animate-pulse"
        >
          <div className="flex items-start gap-3 mb-4">
            <div className="w-11 h-11 rounded-md bg-stone-100 dark:bg-stone-900" />
            <div className="flex-1 space-y-2">
              <div className="h-3.5 bg-stone-100 dark:bg-stone-900 rounded w-3/4" />
              <div className="h-2.5 bg-stone-100 dark:bg-stone-900 rounded w-1/2" />
            </div>
          </div>
          <div className="space-y-2 mb-4">
            <div className="h-2.5 bg-stone-100 dark:bg-stone-900 rounded w-full" />
            <div className="h-2.5 bg-stone-100 dark:bg-stone-900 rounded w-2/3" />
          </div>
          <div className="flex gap-1.5">
            <div className="h-5 w-14 bg-stone-100 dark:bg-stone-900 rounded" />
            <div className="h-5 w-12 bg-stone-100 dark:bg-stone-900 rounded" />
            <div className="h-5 w-16 bg-stone-100 dark:bg-stone-900 rounded" />
          </div>
        </div>
      ))}
    </div>
  );
}

function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center border border-dashed border-stone-200 dark:border-white/10 rounded-md bg-white dark:bg-stone-950">
      <div className="w-12 h-12 rounded-md bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-white/10 flex items-center justify-center mb-4">
        <Users className="w-5 h-5 text-stone-400" />
      </div>
      <h3 className="text-base font-semibold text-stone-900 dark:text-stone-50 mb-1">
        No candidates found
      </h3>
      <p className="text-sm text-stone-500 max-w-xs">
        Try loosening the filters or searching by a broader skill.
      </p>
    </div>
  );
}

import { useState, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import {
  Search,
  SlidersHorizontal,
  Users,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  X,
} from "lucide-react";
import api from "../../../lib/axios";
import { queryKeys } from "../../../lib/query-keys";
import type { Pagination } from "../../../lib/types";
import TalentCard, { type TalentResult } from "./TalentCard";

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
  { key: "", label: "All Status" },
  { key: "LOOKING", label: "Looking" },
  { key: "OPEN_TO_OFFER", label: "Open to offers" },
  { key: "NO_OFFER", label: "Not looking" },
];

interface TalentSearchResponse {
  students: TalentResult[];
  pagination: Pagination;
}

export default function TalentSearchPage() {
  const [filters, setFilters] = useState<TalentFilters>(defaultFilters);
  const [appliedFilters, setAppliedFilters] = useState<TalentFilters>(defaultFilters);
  const [page, setPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);

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

  const inputClass =
    "w-full px-3.5 py-2.5 border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-900 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-300 dark:focus:border-purple-700 transition-all";

  return (
    <div className="-m-8">
      {/* ── Hero Header ── */}
      <div className="relative overflow-hidden bg-[#fafafa] dark:bg-gray-950">
        {/* Gradient orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-150 h-150 rounded-full bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-900/30 dark:to-indigo-900/30 opacity-60 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-125 h-125 rounded-full bg-gradient-to-tr from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 opacity-60 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 rounded-full border border-black/3 dark:border-white/3" />
        </div>

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-8 pt-16 pb-12 text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-900 border border-black/10 dark:border-gray-700 shadow-sm rounded-full text-xs font-medium mb-8"
          >
            <Search className="w-3.5 h-3.5 text-purple-500" />
            <span className="text-gray-600 dark:text-gray-400">Talent Discovery Platform</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold mb-5 leading-tight tracking-tight text-gray-950 dark:text-white"
          >
            Find Top{" "}
            <span className="bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
              Talent
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Discover skilled students, filter by verified skills, ATS scores, and location — connect with the best candidates for your team.
          </motion.p>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="relative max-w-2xl mx-auto"
          >
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={filters.search}
              onChange={(e) => updateFilter("search", e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && applyFilters()}
              placeholder="Search by name, email, or skills..."
              className="w-full pl-13 pr-28 py-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl text-base text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-300 dark:focus:border-purple-700 shadow-lg shadow-gray-200/50 dark:shadow-gray-950/50 transition-all"
            />
            <button
              onClick={applyFilters}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 px-6 py-2.5 bg-gray-950 dark:bg-white text-white dark:text-gray-950 text-sm font-semibold rounded-xl hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
            >
              Search
            </button>
          </motion.div>

          {/* Stats */}
          {pagination && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-gray-200/60 dark:border-gray-700/60 max-w-md mx-auto"
            >
              <div>
                <div className="text-3xl font-bold text-gray-950 dark:text-white tabular-nums">{pagination.total}</div>
                <div className="text-gray-400 text-sm mt-0.5">Candidates</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-950 dark:text-white tabular-nums">{pagination.totalPages}</div>
                <div className="text-gray-400 text-sm mt-0.5">Pages</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-950 dark:text-white tabular-nums">{students.length}</div>
                <div className="text-gray-400 text-sm mt-0.5">Showing</div>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* ── Filters + Results ── */}
      <div className="bg-[#fafafa] dark:bg-gray-950 min-h-screen">
        <div className="max-w-6xl mx-auto px-8 py-10">
          {/* Filter Bar */}
          <div className="flex flex-wrap items-center gap-2.5 mb-8">
            {JOB_STATUS_OPTIONS.map((opt) => (
              <button
                key={opt.key}
                onClick={() => setJobStatus(opt.key)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all border ${
                  appliedFilters.jobStatus === opt.key
                    ? "bg-gray-950 dark:bg-white text-white dark:text-gray-950 border-gray-950 dark:border-white shadow-md"
                    : "bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400 border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-sm"
                }`}
              >
                {opt.label}
              </button>
            ))}

            <div className="w-px h-6 bg-gray-200 dark:bg-gray-700 mx-1" />

            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium transition-all border ${
                activeFilterCount > 0
                  ? "bg-purple-600 text-white border-purple-600 shadow-md shadow-purple-200 dark:shadow-purple-900/30"
                  : "bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400 border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-sm"
              }`}
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              Filters
              {activeFilterCount > 0 && (
                <span className="w-5 h-5 rounded-md text-xs font-bold flex items-center justify-center bg-white/20">
                  {activeFilterCount}
                </span>
              )}
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${showFilters ? "rotate-180" : ""}`} />
            </button>

            {(activeFilterCount > 0 || appliedFilters.search) && (
              <button
                onClick={clearFilters}
                className="flex items-center gap-1 px-3 py-2 text-xs text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors font-medium"
              >
                <X className="w-3 h-3" />
                Clear all
              </button>
            )}
          </div>

          {/* Expanded Filters */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden mb-8"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-6 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm">
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wider">Skills</label>
                    <input
                      type="text"
                      value={filters.skills}
                      onChange={(e) => updateFilter("skills", e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && applyFilters()}
                      className={inputClass}
                      placeholder="React, Node.js..."
                    />
                    <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">Comma-separated</p>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wider">Verified Skills</label>
                    <input
                      type="text"
                      value={filters.verifiedSkills}
                      onChange={(e) => updateFilter("verifiedSkills", e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && applyFilters()}
                      className={inputClass}
                      placeholder="javascript, react..."
                    />
                    <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">Test-verified only</p>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wider">College</label>
                    <input
                      type="text"
                      value={filters.college}
                      onChange={(e) => updateFilter("college", e.target.value)}
                      className={inputClass}
                      placeholder="e.g. IIT Delhi"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wider">Location</label>
                    <input
                      type="text"
                      value={filters.location}
                      onChange={(e) => updateFilter("location", e.target.value)}
                      className={inputClass}
                      placeholder="e.g. Bangalore"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wider">Graduation Year</label>
                    <div className="grid grid-cols-2 gap-2">
                      <input type="number" value={filters.graduationYearMin} onChange={(e) => updateFilter("graduationYearMin", e.target.value)} className={inputClass} placeholder="From" min={2000} max={2040} />
                      <input type="number" value={filters.graduationYearMax} onChange={(e) => updateFilter("graduationYearMax", e.target.value)} className={inputClass} placeholder="To" min={2000} max={2040} />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Min ATS Score</label>
                      <span className="text-sm font-bold text-gray-900 dark:text-white tabular-nums">{filters.minAtsScore}</span>
                    </div>
                    <input
                      type="range" min={0} max={100} step={5}
                      value={filters.minAtsScore}
                      onChange={(e) => updateFilter("minAtsScore", Number(e.target.value))}
                      className="w-full h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full appearance-none cursor-pointer accent-purple-600 dark:accent-purple-400 mt-2"
                    />
                    <div className="flex justify-between text-xs text-gray-300 dark:text-gray-600 mt-1 font-medium">
                      <span>0</span><span>50</span><span>100</span>
                    </div>
                  </div>

                  <div className="flex items-end sm:col-span-2 lg:col-span-2">
                    <div className="flex gap-2 w-full">
                      <button
                        onClick={applyFilters}
                        className="flex-1 py-2.5 bg-gray-950 dark:bg-white text-white dark:text-gray-950 text-sm font-semibold rounded-xl hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
                      >
                        Apply Filters
                      </button>
                      {activeFilterCount > 0 && (
                        <button onClick={clearFilters} className="px-4 py-2.5 text-sm text-gray-400 hover:text-gray-700 dark:hover:text-white transition-colors font-medium">
                          Clear
                        </button>
                      )}
                    </div>
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
              <div className="flex items-center justify-between mb-6">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold text-gray-900 dark:text-white">{pagination?.total ?? 0}</span> candidate{(pagination?.total ?? 0) !== 1 ? "s" : ""} found
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                {students.map((student, i) => (
                  <TalentCard key={student.id} student={student} index={i} />
                ))}
              </div>

              {pagination && pagination.totalPages > 1 && (
                <div className="flex items-center justify-center gap-2 mt-12">
                  <button
                    onClick={() => setPage(Math.max(1, page - 1))}
                    disabled={page === 1}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" /> Prev
                  </button>
                  {Array.from({ length: Math.min(5, pagination.totalPages) }, (_, i) => {
                    let pageNum: number;
                    if (pagination.totalPages <= 5) pageNum = i + 1;
                    else if (page <= 3) pageNum = i + 1;
                    else if (page >= pagination.totalPages - 2) pageNum = pagination.totalPages - 4 + i;
                    else pageNum = page - 2 + i;
                    return (
                      <button
                        key={pageNum}
                        onClick={() => setPage(pageNum)}
                        className={`w-10 h-10 text-sm font-medium rounded-xl transition-colors ${
                          pageNum === page
                            ? "bg-gray-950 dark:bg-white text-white dark:text-gray-950"
                            : "text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                        }`}
                      >
                        {pageNum}
                      </button>
                    );
                  })}
                  <button
                    onClick={() => setPage(Math.min(pagination.totalPages, page + 1))}
                    disabled={page === pagination.totalPages}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                  >
                    Next <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Loading Skeleton                                                   */
/* ------------------------------------------------------------------ */

function LoadingSkeleton() {
  return (
    <div>
      <div className="h-5 w-48 bg-gray-200 dark:bg-gray-800 rounded-lg mb-6 animate-pulse" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-6 animate-pulse">
            <div className="flex items-start gap-4 mb-5">
              <div className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-gray-800" />
              <div className="flex-1 space-y-2.5">
                <div className="h-4 bg-gray-100 dark:bg-gray-800 rounded-lg w-3/4" />
                <div className="h-3 bg-gray-100 dark:bg-gray-800 rounded-lg w-1/2" />
              </div>
            </div>
            <div className="space-y-2 mb-5">
              <div className="h-3 bg-gray-100 dark:bg-gray-800 rounded-lg w-full" />
              <div className="h-3 bg-gray-100 dark:bg-gray-800 rounded-lg w-2/3" />
            </div>
            <div className="flex gap-1.5">
              <div className="h-6 w-16 bg-gray-100 dark:bg-gray-800 rounded-lg" />
              <div className="h-6 w-14 bg-gray-100 dark:bg-gray-800 rounded-lg" />
              <div className="h-6 w-20 bg-gray-100 dark:bg-gray-800 rounded-lg" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Empty State                                                        */
/* ------------------------------------------------------------------ */

function EmptyState() {
  return (
    <div className="relative flex flex-col items-center justify-center py-24 text-center">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-60 h-60 rounded-full bg-purple-100 dark:bg-purple-900/20 opacity-40 blur-3xl" />
        <div className="absolute bottom-10 left-10 w-40 h-40 rounded-full bg-indigo-100 dark:bg-indigo-900/20 opacity-40 blur-3xl" />
      </div>
      <div className="relative z-10">
        <div className="w-16 h-16 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-sm flex items-center justify-center mb-5">
          <Users className="w-7 h-7 text-gray-400 dark:text-gray-500" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">No candidates found</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 max-w-xs leading-relaxed">
          Try adjusting your filters or broadening your search criteria to discover more talent.
        </p>
      </div>
    </div>
  );
}

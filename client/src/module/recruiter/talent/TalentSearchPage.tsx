import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import {
  Search,
  SlidersHorizontal,
  X,
  Users,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import api from "../../../lib/axios";
import type { Pagination } from "../../../lib/types";
import TalentCard, { type TalentResult } from "./TalentCard";

interface TalentFilters {
  search: string;
  skills: string;
  college: string;
  graduationYearMin: string;
  graduationYearMax: string;
  minAtsScore: number;
  location: string;
}

const defaultFilters: TalentFilters = {
  search: "",
  skills: "",
  college: "",
  graduationYearMin: "",
  graduationYearMax: "",
  minAtsScore: 0,
  location: "",
};

interface TalentSearchResponse {
  students: TalentResult[];
  pagination: Pagination;
}

export default function TalentSearchPage() {
  const [filters, setFilters] = useState<TalentFilters>(defaultFilters);
  const [appliedFilters, setAppliedFilters] = useState<TalentFilters>(defaultFilters);
  const [page, setPage] = useState(1);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const { data, isLoading } = useQuery({
    queryKey: ["recruiter", "talent-search", appliedFilters, page],
    queryFn: async () => {
      const params = new URLSearchParams({ page: String(page), limit: "12" });

      if (appliedFilters.search) params.set("search", appliedFilters.search);
      if (appliedFilters.skills) params.set("skills", appliedFilters.skills);
      if (appliedFilters.college) params.set("college", appliedFilters.college);
      if (appliedFilters.graduationYearMin)
        params.set("graduationYearMin", appliedFilters.graduationYearMin);
      if (appliedFilters.graduationYearMax)
        params.set("graduationYearMax", appliedFilters.graduationYearMax);
      if (appliedFilters.minAtsScore > 0)
        params.set("minAtsScore", String(appliedFilters.minAtsScore));
      if (appliedFilters.location) params.set("location", appliedFilters.location);

      const res = await api.get(`/recruiter/talent-search?${params}`);
      return res.data as TalentSearchResponse;
    },
  });

  const applyFilters = useCallback(() => {
    setAppliedFilters({ ...filters });
    setPage(1);
    setSidebarOpen(false);
  }, [filters]);

  const clearFilters = useCallback(() => {
    setFilters(defaultFilters);
    setAppliedFilters(defaultFilters);
    setPage(1);
  }, []);

  const updateFilter = <K extends keyof TalentFilters>(key: K, value: TalentFilters[K]) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const students = data?.students ?? [];
  const pagination = data?.pagination ?? null;

  return (
    <div>
      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Talent Search</h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1">
          Discover and connect with top student talent
        </p>
      </div>

      {/* Mobile Filter Toggle */}
      <button
        onClick={() => setSidebarOpen(true)}
        className="lg:hidden flex items-center gap-2 mb-4 px-4 py-2.5 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
      >
        <SlidersHorizontal className="w-4 h-4" />
        Filters
      </button>

      <div className="flex gap-6">
        {/* Sidebar — Desktop */}
        <div className="hidden lg:block w-72 flex-shrink-0">
          <FilterPanel
            filters={filters}
            updateFilter={updateFilter}
            onApply={applyFilters}
            onClear={clearFilters}
          />
        </div>

        {/* Sidebar — Mobile overlay */}
        <AnimatePresence>
          {sidebarOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black z-40 lg:hidden"
                onClick={() => setSidebarOpen(false)}
              />
              <motion.div
                initial={{ x: -320 }}
                animate={{ x: 0 }}
                exit={{ x: -320 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="fixed inset-y-0 left-0 w-80 bg-white dark:bg-gray-900 z-50 lg:hidden overflow-y-auto shadow-xl"
              >
                <div className="flex items-center justify-between p-4 border-b border-gray-100 dark:border-gray-800">
                  <h2 className="font-semibold text-gray-900 dark:text-white">Filters</h2>
                  <button
                    onClick={() => setSidebarOpen(false)}
                    className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <div className="p-4">
                  <FilterPanel
                    filters={filters}
                    updateFilter={updateFilter}
                    onApply={applyFilters}
                    onClear={clearFilters}
                  />
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Results */}
        <div className="flex-1 min-w-0">
          {isLoading ? (
            <LoadingSkeleton />
          ) : students.length === 0 ? (
            <EmptyState />
          ) : (
            <>
              {/* Result count */}
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                Showing{" "}
                <span className="font-medium text-gray-900 dark:text-white">
                  {students.length}
                </span>{" "}
                of{" "}
                <span className="font-medium text-gray-900 dark:text-white">
                  {pagination?.total ?? 0}
                </span>{" "}
                candidates
              </p>

              {/* Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {students.map((student, i) => (
                  <TalentCard key={student.id} student={student} index={i} />
                ))}
              </div>

              {/* Pagination */}
              {pagination && pagination.totalPages > 1 && (
                <div className="flex items-center justify-center gap-3 mt-8">
                  <button
                    onClick={() => setPage(Math.max(1, page - 1))}
                    disabled={page === 1}
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    Previous
                  </button>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Page {page} of {pagination.totalPages}
                  </span>
                  <button
                    onClick={() => setPage(Math.min(pagination.totalPages, page + 1))}
                    disabled={page === pagination.totalPages}
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                  >
                    Next
                    <ChevronRight className="w-4 h-4" />
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
/*  Filter Panel                                                       */
/* ------------------------------------------------------------------ */

interface FilterPanelProps {
  filters: TalentFilters;
  updateFilter: <K extends keyof TalentFilters>(key: K, value: TalentFilters[K]) => void;
  onApply: () => void;
  onClear: () => void;
}

function FilterPanel({ filters, updateFilter, onApply, onClear }: FilterPanelProps) {
  const inputClass =
    "w-full px-3 py-2.5 border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-900 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/20 transition-colors";
  const labelClass = "block text-xs font-medium text-gray-500 dark:text-gray-400 mb-1.5 uppercase tracking-wide";

  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm p-5 space-y-5">
      {/* Search */}
      <div>
        <label className={labelClass}>Search</label>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            value={filters.search}
            onChange={(e) => updateFilter("search", e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && onApply()}
            className={`${inputClass} pl-10`}
            placeholder="Name or email..."
          />
        </div>
      </div>

      {/* Skills */}
      <div>
        <label className={labelClass}>Skills</label>
        <input
          type="text"
          value={filters.skills}
          onChange={(e) => updateFilter("skills", e.target.value)}
          className={inputClass}
          placeholder="React, Node.js, Python..."
        />
        <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">Comma-separated</p>
      </div>

      {/* College */}
      <div>
        <label className={labelClass}>College</label>
        <input
          type="text"
          value={filters.college}
          onChange={(e) => updateFilter("college", e.target.value)}
          className={inputClass}
          placeholder="e.g. IIT Delhi"
        />
      </div>

      {/* Graduation Year Range */}
      <div>
        <label className={labelClass}>Graduation Year</label>
        <div className="grid grid-cols-2 gap-2">
          <input
            type="number"
            value={filters.graduationYearMin}
            onChange={(e) => updateFilter("graduationYearMin", e.target.value)}
            className={inputClass}
            placeholder="Min"
            min={2000}
            max={2040}
          />
          <input
            type="number"
            value={filters.graduationYearMax}
            onChange={(e) => updateFilter("graduationYearMax", e.target.value)}
            className={inputClass}
            placeholder="Max"
            min={2000}
            max={2040}
          />
        </div>
      </div>

      {/* Min ATS Score */}
      <div>
        <label className={labelClass}>
          Min ATS Score:{" "}
          <span className="text-gray-900 dark:text-white font-semibold">
            {filters.minAtsScore}
          </span>
        </label>
        <input
          type="range"
          min={0}
          max={100}
          step={5}
          value={filters.minAtsScore}
          onChange={(e) => updateFilter("minAtsScore", Number(e.target.value))}
          className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full appearance-none cursor-pointer accent-black dark:accent-white"
        />
        <div className="flex justify-between text-xs text-gray-400 dark:text-gray-500 mt-1">
          <span>0</span>
          <span>50</span>
          <span>100</span>
        </div>
      </div>

      {/* Location */}
      <div>
        <label className={labelClass}>Location</label>
        <input
          type="text"
          value={filters.location}
          onChange={(e) => updateFilter("location", e.target.value)}
          className={inputClass}
          placeholder="e.g. Bangalore"
        />
      </div>

      {/* Actions */}
      <div className="pt-2 space-y-2">
        <button
          onClick={onApply}
          className="w-full py-2.5 bg-black dark:bg-white text-white dark:text-black text-sm font-medium rounded-xl hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
        >
          Search
        </button>
        <button
          onClick={onClear}
          className="w-full py-2 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          Clear Filters
        </button>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Loading Skeleton                                                   */
/* ------------------------------------------------------------------ */

function LoadingSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm p-6 animate-pulse"
        >
          <div className="flex items-start gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-800" />
            <div className="flex-1 space-y-2">
              <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-3/4" />
              <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded w-1/2" />
            </div>
          </div>
          <div className="space-y-2 mb-4">
            <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded w-full" />
            <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded w-2/3" />
          </div>
          <div className="flex gap-1.5">
            <div className="h-6 w-16 bg-gray-200 dark:bg-gray-800 rounded-md" />
            <div className="h-6 w-14 bg-gray-200 dark:bg-gray-800 rounded-md" />
            <div className="h-6 w-20 bg-gray-200 dark:bg-gray-800 rounded-md" />
          </div>
        </div>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Empty State                                                        */
/* ------------------------------------------------------------------ */

function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <div className="w-16 h-16 rounded-2xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center mb-4">
        <Users className="w-8 h-8 text-gray-400 dark:text-gray-500" />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
        No candidates found
      </h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 max-w-sm">
        Try adjusting your filters or broadening your search criteria to discover more talent.
      </p>
    </div>
  );
}

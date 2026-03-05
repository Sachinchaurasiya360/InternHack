import { useState, useEffect, useCallback } from "react";
import { useSearchParams } from "react-router";
import { Search, SlidersHorizontal, X, GraduationCap, Loader2, ChevronLeft, ChevronRight } from "lucide-react";
import api from "../../../lib/axios";
import { Navbar } from "../../../components/Navbar";
import { Footer } from "../../../components/Footer";
import CollegeCard from "./CollegeCard";
import type { College, CollegeFilterStats, StateCount } from "../../../lib/types";

const STREAMS = ["Engineering", "Medical", "Management", "Law", "Design", "Architecture", "Science", "Arts", "Commerce", "Pharmacy", "Agriculture", "Education"];
const COLLEGE_TYPES = [
  { value: "GOVERNMENT", label: "Government" },
  { value: "PRIVATE", label: "Private" },
  { value: "DEEMED", label: "Deemed" },
  { value: "AUTONOMOUS", label: "Autonomous" },
  { value: "CENTRAL", label: "Central" },
  { value: "STATE", label: "State" },
];
const NAAC_GRADES = [
  { value: "A_PLUS_PLUS", label: "A++" },
  { value: "A_PLUS", label: "A+" },
  { value: "A", label: "A" },
  { value: "B_PLUS_PLUS", label: "B++" },
  { value: "B_PLUS", label: "B+" },
  { value: "B", label: "B" },
  { value: "C", label: "C" },
];
const FEES_RANGES = [
  { value: "", label: "Any" },
  { value: "0-100000", label: "Under 1L" },
  { value: "0-300000", label: "Under 3L" },
  { value: "100000-500000", label: "1L - 5L" },
  { value: "500000-1000000", label: "5L - 10L" },
  { value: "1000000-99999999", label: "10L+" },
];
const SORT_OPTIONS = [
  { value: "name", label: "Name" },
  { value: "nirfRanking", label: "NIRF Rank" },
  { value: "avgRating", label: "Rating" },
  { value: "reviewCount", label: "Most Reviewed" },
];

export default function CollegeListPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [colleges, setColleges] = useState<College[]>([]);
  const [states, setStates] = useState<StateCount[]>([]);
  const [stats, setStats] = useState<CollegeFilterStats | null>(null);
  const [pagination, setPagination] = useState({ page: 1, limit: 12, total: 0, totalPages: 0 });
  const [loading, setLoading] = useState(true);
  const [showFilters, setShowFilters] = useState(false);

  // Read filter values from URL
  const search = searchParams.get("search") || "";
  const state = searchParams.get("state") || "";
  const city = searchParams.get("city") || "";
  const type = searchParams.get("type") || "";
  const naacGrade = searchParams.get("naacGrade") || "";
  const stream = searchParams.get("stream") || "";
  const exam = searchParams.get("exam") || "";
  const fees = searchParams.get("fees") || "";
  const sortBy = searchParams.get("sortBy") || "name";
  const page = parseInt(searchParams.get("page") || "1", 10);

  const hasActiveFilters = !!(state || city || type || naacGrade || stream || exam || fees || search);

  const setFilter = useCallback((key: string, value: string) => {
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);
      if (value) next.set(key, value);
      else next.delete(key);
      if (key !== "page") next.set("page", "1");
      return next;
    });
  }, [setSearchParams]);

  const clearFilters = useCallback(() => {
    setSearchParams({});
  }, [setSearchParams]);

  // Fetch colleges
  const fetchColleges = useCallback(async () => {
    setLoading(true);
    try {
      const params: Record<string, string> = { page: String(page), limit: "12", sortBy };
      if (search) params.search = search;
      if (state) params.state = state;
      if (city) params.city = city;
      if (type) params.type = type;
      if (naacGrade) params.naacGrade = naacGrade;
      if (stream) params.stream = stream;
      if (exam) params.exam = exam;
      if (fees) {
        const [min, max] = fees.split("-");
        if (min) params.minFees = min;
        if (max) params.maxFees = max;
      }

      const res = await api.get("/colleges", { params });
      setColleges(res.data.colleges);
      setPagination(res.data.pagination);
    } catch {
      setColleges([]);
    } finally {
      setLoading(false);
    }
  }, [search, state, city, type, naacGrade, stream, exam, fees, sortBy, page]);

  // Fetch states + stats on mount
  useEffect(() => {
    api.get("/colleges/states").then((r) => setStates(r.data)).catch(() => {});
    api.get("/colleges/stats").then((r) => setStats(r.data)).catch(() => {});
  }, []);

  useEffect(() => { fetchColleges(); }, [fetchColleges]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 pt-24 pb-16">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-gray-900 dark:bg-white flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-white dark:text-gray-900" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Explore Colleges</h1>
              <p className="text-sm text-gray-500">{stats?.total?.toLocaleString() || "—"} colleges across India</p>
            </div>
          </div>
        </div>

        {/* State chips */}
        {states.length > 0 && (
          <div className="flex gap-2 overflow-x-auto pb-3 mb-4 scrollbar-hide">
            <button
              onClick={() => setFilter("state", "")}
              className={`flex-shrink-0 px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                !state ? "bg-gray-900 dark:bg-white text-white dark:text-gray-900" : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
              }`}
            >
              All States
            </button>
            {states.slice(0, 15).map((s) => (
              <button
                key={s.state}
                onClick={() => setFilter("state", s.state === state ? "" : s.state)}
                className={`flex-shrink-0 px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                  state === s.state ? "bg-gray-900 dark:bg-white text-white dark:text-gray-900" : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
                }`}
              >
                {s.state} ({s.count.toLocaleString()})
              </button>
            ))}
          </div>
        )}

        {/* Search + Filter toggle */}
        <div className="flex gap-3 mb-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search colleges by name, city, or affiliation..."
              defaultValue={search}
              onKeyDown={(e) => { if (e.key === "Enter") setFilter("search", (e.target as HTMLInputElement).value); }}
              onBlur={(e) => setFilter("search", e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-sm bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900/10 dark:focus:ring-white/10 text-gray-900 dark:text-white placeholder:text-gray-400"
            />
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`flex items-center gap-2 px-4 py-2.5 text-sm font-medium rounded-lg border transition-colors ${
              showFilters ? "bg-gray-900 dark:bg-white text-white dark:text-gray-900 border-gray-900 dark:border-white" : "bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
            }`}
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>
          {hasActiveFilters && (
            <button onClick={clearFilters} className="flex items-center gap-1 px-3 py-2.5 text-sm font-medium text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors">
              <X className="w-4 h-4" /> Clear
            </button>
          )}
        </div>

        {/* Filter panel */}
        {showFilters && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6 p-4 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700">
            {/* Stream */}
            <div>
              <label className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-1 block">Stream</label>
              <select value={stream} onChange={(e) => setFilter("stream", e.target.value)} className="w-full px-3 py-2 text-sm bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white">
                <option value="">All Streams</option>
                {STREAMS.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
            {/* Type */}
            <div>
              <label className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-1 block">College Type</label>
              <select value={type} onChange={(e) => setFilter("type", e.target.value)} className="w-full px-3 py-2 text-sm bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white">
                <option value="">All Types</option>
                {COLLEGE_TYPES.map((t) => <option key={t.value} value={t.value}>{t.label}</option>)}
              </select>
            </div>
            {/* Exam */}
            <div>
              <label className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-1 block">Exam Accepted</label>
              <select value={exam} onChange={(e) => setFilter("exam", e.target.value)} className="w-full px-3 py-2 text-sm bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white">
                <option value="">All Exams</option>
                {(stats?.exams || []).map((e) => <option key={e.name} value={e.name}>{e.name} ({e.count})</option>)}
              </select>
            </div>
            {/* NAAC */}
            <div>
              <label className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-1 block">NAAC Grade</label>
              <select value={naacGrade} onChange={(e) => setFilter("naacGrade", e.target.value)} className="w-full px-3 py-2 text-sm bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white">
                <option value="">All Grades</option>
                {NAAC_GRADES.map((g) => <option key={g.value} value={g.value}>{g.label}</option>)}
              </select>
            </div>
            {/* Fees */}
            <div>
              <label className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-1 block">Fees Range</label>
              <select value={fees} onChange={(e) => setFilter("fees", e.target.value)} className="w-full px-3 py-2 text-sm bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white">
                {FEES_RANGES.map((f) => <option key={f.value} value={f.value}>{f.label}</option>)}
              </select>
            </div>
            {/* Sort */}
            <div>
              <label className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-1 block">Sort By</label>
              <select value={sortBy} onChange={(e) => setFilter("sortBy", e.target.value)} className="w-full px-3 py-2 text-sm bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white">
                {SORT_OPTIONS.map((s) => <option key={s.value} value={s.value}>{s.label}</option>)}
              </select>
            </div>
            {/* City */}
            <div>
              <label className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-1 block">City</label>
              <input
                type="text"
                placeholder="e.g. Pune"
                defaultValue={city}
                onKeyDown={(e) => { if (e.key === "Enter") setFilter("city", (e.target as HTMLInputElement).value); }}
                onBlur={(e) => setFilter("city", e.target.value)}
                className="w-full px-3 py-2 text-sm bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white placeholder:text-gray-400"
              />
            </div>
          </div>
        )}

        {/* Exam quick chips */}
        {stats && stats.exams.length > 0 && !exam && (
          <div className="flex gap-2 overflow-x-auto pb-3 mb-6 scrollbar-hide">
            <span className="text-xs text-gray-400 dark:text-gray-500 flex-shrink-0 self-center">Exams:</span>
            {stats.exams.slice(0, 10).map((e) => (
              <button
                key={e.name}
                onClick={() => setFilter("exam", e.name)}
                className="flex-shrink-0 px-2.5 py-1 text-xs font-medium rounded-md bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors"
              >
                {e.name}
              </button>
            ))}
          </div>
        )}

        {/* Results */}
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-6 h-6 animate-spin text-gray-400" />
          </div>
        ) : colleges.length === 0 ? (
          <div className="text-center py-20">
            <GraduationCap className="w-12 h-12 text-gray-300 dark:text-gray-600 mx-auto mb-3" />
            <p className="text-gray-500 dark:text-gray-400 text-sm">No colleges found matching your filters.</p>
            {hasActiveFilters && (
              <button onClick={clearFilters} className="mt-2 text-sm text-blue-600 dark:text-blue-400 hover:underline">Clear all filters</button>
            )}
          </div>
        ) : (
          <>
            <p className="text-xs text-gray-400 mb-4">Showing {colleges.length} of {pagination.total.toLocaleString()} colleges</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {colleges.map((c) => <CollegeCard key={c.id} college={c} />)}
            </div>

            {/* Pagination */}
            {pagination.totalPages > 1 && (
              <div className="flex items-center justify-center gap-2">
                <button
                  onClick={() => setFilter("page", String(page - 1))}
                  disabled={page <= 1}
                  className="p-2 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800 disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                {Array.from({ length: Math.min(pagination.totalPages, 7) }, (_, i) => {
                  let pageNum: number;
                  if (pagination.totalPages <= 7) {
                    pageNum = i + 1;
                  } else if (page <= 4) {
                    pageNum = i + 1;
                  } else if (page >= pagination.totalPages - 3) {
                    pageNum = pagination.totalPages - 6 + i;
                  } else {
                    pageNum = page - 3 + i;
                  }
                  return (
                    <button
                      key={pageNum}
                      onClick={() => setFilter("page", String(pageNum))}
                      className={`w-9 h-9 text-sm font-medium rounded-lg transition-colors ${
                        pageNum === page
                          ? "bg-gray-900 dark:bg-white text-white dark:text-gray-900"
                          : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                      }`}
                    >
                      {pageNum}
                    </button>
                  );
                })}
                <button
                  onClick={() => setFilter("page", String(page + 1))}
                  disabled={page >= pagination.totalPages}
                  className="p-2 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800 disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </>
        )}
      </div>
      <Footer />
    </div>
  );
}

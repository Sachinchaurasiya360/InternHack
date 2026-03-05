import { useState, useEffect, useCallback } from "react";
import { useParams, useSearchParams, Link } from "react-router";
import { ArrowLeft, GraduationCap, Loader2, ChevronLeft, ChevronRight, Search } from "lucide-react";
import api from "../../../lib/axios";
import { Navbar } from "../../../components/Navbar";
import { Footer } from "../../../components/Footer";
import CollegeCard from "./CollegeCard";
import type { College, EntranceExam } from "../../../lib/types";

export default function ExamCollegesPage() {
  const { examSlug } = useParams<{ examSlug: string }>();
  const [searchParams, setSearchParams] = useSearchParams();
  const [exam, setExam] = useState<EntranceExam | null>(null);
  const [colleges, setColleges] = useState<College[]>([]);
  const [pagination, setPagination] = useState({ page: 1, limit: 12, total: 0, totalPages: 0 });
  const [loading, setLoading] = useState(true);

  const page = parseInt(searchParams.get("page") || "1", 10);
  const search = searchParams.get("search") || "";
  const state = searchParams.get("state") || "";

  const setFilter = useCallback((key: string, value: string) => {
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);
      if (value) next.set(key, value);
      else next.delete(key);
      if (key !== "page") next.set("page", "1");
      return next;
    });
  }, [setSearchParams]);

  useEffect(() => {
    if (!examSlug) return;
    setLoading(true);
    const params: Record<string, string> = { page: String(page), limit: "12" };
    if (search) params.search = search;
    if (state) params.state = state;

    api.get(`/colleges/exam/${examSlug}`, { params })
      .then((r) => {
        setExam(r.data.exam);
        setColleges(r.data.colleges);
        setPagination(r.data.pagination);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [examSlug, page, search, state]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 pt-24 pb-16">
        <Link to="/colleges" className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-gray-900 dark:hover:text-white mb-6 no-underline">
          <ArrowLeft className="w-4 h-4" /> Back to colleges
        </Link>

        {exam && (
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
              Colleges Accepting {exam.name}
            </h1>
            {exam.fullName && <p className="text-sm text-gray-500 mb-1">{exam.fullName}</p>}
            {exam.conductingBody && <p className="text-xs text-gray-400">Conducted by: {exam.conductingBody}</p>}
            <p className="text-xs text-gray-400 mt-1">{pagination.total.toLocaleString()} colleges found</p>
          </div>
        )}

        {/* Search + state filter */}
        <div className="flex gap-3 mb-6">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search colleges..."
              defaultValue={search}
              onKeyDown={(e) => { if (e.key === "Enter") setFilter("search", (e.target as HTMLInputElement).value); }}
              className="w-full pl-10 pr-4 py-2.5 text-sm bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white"
            />
          </div>
          <input
            type="text"
            placeholder="Filter by state..."
            defaultValue={state}
            onKeyDown={(e) => { if (e.key === "Enter") setFilter("state", (e.target as HTMLInputElement).value); }}
            className="px-4 py-2.5 text-sm bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white w-48"
          />
        </div>

        {loading ? (
          <div className="flex justify-center py-20"><Loader2 className="w-6 h-6 animate-spin text-gray-400" /></div>
        ) : colleges.length === 0 ? (
          <div className="text-center py-20">
            <GraduationCap className="w-12 h-12 text-gray-300 mx-auto mb-3" />
            <p className="text-sm text-gray-500">No colleges found for this exam.</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {colleges.map((c) => <CollegeCard key={c.id} college={c} />)}
            </div>

            {pagination.totalPages > 1 && (
              <div className="flex items-center justify-center gap-2">
                <button onClick={() => setFilter("page", String(page - 1))} disabled={page <= 1} className="p-2 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-500 disabled:opacity-30">
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-sm text-gray-500">Page {page} of {pagination.totalPages}</span>
                <button onClick={() => setFilter("page", String(page + 1))} disabled={page >= pagination.totalPages} className="p-2 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-500 disabled:opacity-30">
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

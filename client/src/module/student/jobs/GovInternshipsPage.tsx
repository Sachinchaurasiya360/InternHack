import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import {
  Search,
  X,
  ChevronLeft,
  ChevronRight,
  Landmark,
  Clock,
  GraduationCap,
  Banknote,
  Wand2,
  ArrowLeft,
} from "lucide-react";
import { Navbar } from "../../../components/Navbar";
import { SEO } from "../../../components/SEO";
import { canonicalUrl } from "../../../lib/seo.utils";
import api from "../../../lib/axios";
import { queryKeys } from "../../../lib/query-keys";
import type { Pagination } from "../../../lib/types";

interface Internship {
  id: number;
  name: string;
  category: string;
  timeline: string;
  organizer: string;
  domain: string;
  stipend: string;
  eligibility: string;
  reality: string;
}

interface InternshipStats {
  total: number;
  categories: { name: string; count: number }[];
}

const CATEGORY_COLORS: Record<string, { bg: string; text: string; border: string; accent: string }> = {
  "Central Government & Policy": { bg: "bg-blue-50 dark:bg-blue-900/20", text: "text-blue-700 dark:text-blue-400", border: "border-blue-200 dark:border-blue-800", accent: "bg-blue-100 dark:bg-blue-900/40" },
  "PSU, Banking & Finance": { bg: "bg-emerald-50 dark:bg-emerald-900/20", text: "text-emerald-700 dark:text-emerald-400", border: "border-emerald-200 dark:border-emerald-800", accent: "bg-emerald-100 dark:bg-emerald-900/40" },
  "IITs, IIMs, IISc & Elite Academia": { bg: "bg-violet-50 dark:bg-violet-900/20", text: "text-violet-700 dark:text-violet-400", border: "border-violet-200 dark:border-violet-800", accent: "bg-violet-100 dark:bg-violet-900/40" },
  "Top Tech & MNC": { bg: "bg-orange-50 dark:bg-orange-900/20", text: "text-orange-700 dark:text-orange-400", border: "border-orange-200 dark:border-orange-800", accent: "bg-orange-100 dark:bg-orange-900/40" },
  "Space, Defence, Consulting & Global": { bg: "bg-rose-50 dark:bg-rose-900/20", text: "text-rose-700 dark:text-rose-400", border: "border-rose-200 dark:border-rose-800", accent: "bg-rose-100 dark:bg-rose-900/40" },
};

function InternshipCard({ internship }: { internship: Internship }) {
  const colors = CATEGORY_COLORS[internship.category] ?? { bg: "bg-gray-50 dark:bg-gray-800", text: "text-gray-700 dark:text-gray-400", border: "border-gray-200 dark:border-gray-700", accent: "bg-gray-100 dark:bg-gray-800" };

  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl hover:shadow-gray-200/50 dark:hover:shadow-gray-900/50 transition-all duration-300 p-5 flex flex-col">
      <div className="flex items-start justify-between gap-2 mb-3">
        <div className="flex items-center gap-3 min-w-0">
          <div className={`w-10 h-10 rounded-lg ${colors.accent} flex items-center justify-center shrink-0`}>
            <Landmark className={`w-5 h-5 ${colors.text}`} />
          </div>
          <div className="min-w-0">
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white leading-tight">
              {internship.name}
            </h4>
            <p className="text-xs text-gray-500 dark:text-gray-500 truncate">{internship.organizer}</p>
          </div>
        </div>
      </div>

      <span className={`self-start px-2 py-0.5 text-[10px] font-medium rounded-lg ${colors.bg} ${colors.text} ${colors.border} border mb-3`}>
        {internship.category}
      </span>

      <div className="space-y-1.5 text-xs flex-1">
        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
          <Clock className="w-3 h-3 shrink-0 text-gray-400 dark:text-gray-500" />
          <span>{internship.timeline}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
          <Banknote className="w-3 h-3 shrink-0 text-gray-400 dark:text-gray-500" />
          <span>{internship.stipend}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
          <GraduationCap className="w-3 h-3 shrink-0 text-gray-400 dark:text-gray-500" />
          <span>{internship.eligibility}</span>
        </div>
      </div>

      <div className="mt-3 pt-3 border-t border-gray-100 dark:border-gray-800">
        <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-1">
          <span className="font-medium text-gray-600 dark:text-gray-300">Domain:</span> {internship.domain}
        </p>
      </div>

      <div className="mt-2 flex items-start gap-1.5">
        <Wand2 className="w-3 h-3 shrink-0 text-amber-500 mt-0.5" />
        <p className="text-xs text-amber-700 dark:text-amber-400 italic">{internship.reality}</p>
      </div>
    </div>
  );
}

export default function GovInternshipsPage() {
  const isInsideLayout = useLocation().pathname.startsWith("/student/");

  const [searchInput, setSearchInput] = useState("");
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSearch(searchInput);
      setPage(1);
    }, 400);
    return () => clearTimeout(timer);
  }, [searchInput]);

  const { data: stats } = useQuery<InternshipStats>({
    queryKey: queryKeys.internships.stats(),
    queryFn: () => api.get("/internships/stats").then((r) => r.data),
    staleTime: 5 * 60 * 1000,
  });

  const queryParams: Record<string, string | number> = { page, limit: 24 };
  if (search) queryParams["search"] = search;
  if (category) queryParams["category"] = category;

  const { data, isLoading } = useQuery<{
    internships: Internship[];
    pagination: Pagination;
  }>({
    queryKey: queryKeys.internships.list(queryParams),
    queryFn: () => api.get("/internships", { params: queryParams }).then((r) => r.data),
  });

  const internships = data?.internships ?? [];
  const pagination = data?.pagination ?? null;

  return (
    <div className="min-h-screen bg-white/50 dark:bg-gray-950 relative">
      <SEO
        title="Top 100 Internships in India 2026"
        description="Explore the top 100 internships across government, PSUs, IITs, tech companies, and global organizations. Find stipends, eligibility, and timelines."
        keywords="government internships, PSU internships, IIT internships, tech internships, India internships 2026"
        canonicalUrl={canonicalUrl("/internships")}
      />

      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-150 h-150 bg-emerald-100 dark:bg-emerald-900/20 rounded-full blur-3xl opacity-40" />
        <div className="absolute -bottom-32 -left-32 w-125 h-125 bg-slate-100 dark:bg-slate-900/20 rounded-full blur-3xl opacity-40" />
      </div>

      {!isInsideLayout && <Navbar />}

      <div className="relative max-w-7xl mx-auto px-4 py-8 pt-24 pb-12">
        {/* Back link */}
        <Link
          to={isInsideLayout ? "/student/jobs" : "/jobs"}
          className="inline-flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors mb-6 no-underline"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Jobs
        </Link>

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-950 dark:text-white mb-3">
            Top 100 <span className="text-gradient-accent">Internships</span> in India
          </h1>
          <p className="text-lg text-gray-500 dark:text-gray-500 max-w-xl mx-auto">
            Government, PSUs, IITs, Tech Giants & Global Organizations - 2026
          </p>
        </motion.div>

        {/* Category chips */}
        <div className="mb-6">
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            <button
              onClick={() => { setCategory(""); setPage(1); }}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                !category
                  ? "bg-black dark:bg-white text-white dark:text-gray-950"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              All ({stats?.total ?? "..."})
            </button>
            {(stats?.categories ?? []).map((c) => (
              <button
                key={c.name}
                onClick={() => { setCategory(c.name); setPage(1); }}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  category === c.name
                    ? "bg-black dark:bg-white text-white dark:text-gray-950"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                {c.name} ({c.count})
              </button>
            ))}
          </div>
        </div>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="flex-1 relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-gray-500" />
            <input
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="Search internships by name, domain, eligibility..."
              className="w-full pl-10 pr-4 py-2.5 border border-gray-200 dark:border-gray-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-300 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500"
            />
          </div>
          {(search || category) && (
            <button
              onClick={() => { setSearchInput(""); setSearch(""); setCategory(""); setPage(1); }}
              className="flex items-center gap-1 px-3 py-2.5 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/30 rounded-lg"
            >
              <X className="w-4 h-4" /> Clear
            </button>
          )}
        </motion.div>

        {/* Results */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-5 animate-pulse">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-gray-200 dark:bg-gray-800" />
                  <div className="flex-1 space-y-2">
                    <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-3/4" />
                    <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded w-1/2" />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded w-full" />
                  <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded w-2/3" />
                </div>
              </div>
            ))}
          </div>
        ) : internships.length === 0 ? (
          <div className="flex flex-col items-center justify-center text-center p-14 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200/80 dark:border-gray-800 shadow-sm">
            <div className="w-20 h-20 bg-gray-100 dark:bg-gray-800 rounded-2xl flex items-center justify-center mb-5">
              <Landmark className="w-9 h-9 text-emerald-400" />
            </div>
            <h3 className="text-gray-800 dark:text-gray-200 font-bold text-lg mb-2">
              No internships found
            </h3>
            <p className="text-gray-400 dark:text-gray-500 text-sm max-w-xs leading-relaxed mx-auto">
              Try adjusting your search or category filter
            </p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {internships.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.03, duration: 0.3 }}
                >
                  <InternshipCard internship={item} />
                </motion.div>
              ))}
            </div>

            {/* Pagination */}
            {pagination && pagination.totalPages > 1 && (
              <div className="flex items-center justify-center gap-3 mt-8">
                <button
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={page <= 1}
                  className="flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" /> Prev
                </button>
                <span className="text-sm text-gray-500 dark:text-gray-500">
                  Page {pagination.page} of {pagination.totalPages}
                </span>
                <button
                  onClick={() => setPage((p) => Math.min(pagination.totalPages, p + 1))}
                  disabled={page >= pagination.totalPages}
                  className="flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                >
                  Next <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

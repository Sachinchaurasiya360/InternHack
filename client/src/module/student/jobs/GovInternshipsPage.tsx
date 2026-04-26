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
  ArrowLeft,
  ArrowUpRight,
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

function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-stone-500">
      <span className="h-1.5 w-1.5 bg-lime-400" />
      {children}
    </div>
  );
}

function InternshipCard({ internship }: { internship: Internship }) {
  return (
    <div className="group relative flex flex-col bg-white dark:bg-stone-900 p-5 rounded-md border border-stone-200 dark:border-white/10 hover:border-stone-400 dark:hover:border-white/30 transition-colors h-full">
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-10 h-10 rounded-md bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-white/10 flex items-center justify-center shrink-0">
            <Landmark className="w-4 h-4 text-stone-600 dark:text-stone-400" />
          </div>
          <div className="min-w-0">
            <h4 className="text-sm font-bold text-stone-900 dark:text-stone-50 leading-tight">
              {internship.name}
            </h4>
            <p className="text-xs text-stone-500 truncate mt-0.5">{internship.organizer}</p>
          </div>
        </div>
        <ArrowUpRight className="w-4 h-4 shrink-0 text-stone-400 group-hover:text-stone-900 dark:group-hover:text-stone-50 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
      </div>

      <div className="text-[10px] font-mono uppercase tracking-widest text-stone-500 mb-3">
        {internship.category}
      </div>

      <div className="space-y-1.5 text-xs flex-1">
        <div className="flex items-center gap-2 text-stone-600 dark:text-stone-400">
          <Clock className="w-3 h-3 shrink-0 text-stone-400" />
          <span>{internship.timeline}</span>
        </div>
        <div className="flex items-center gap-2 text-stone-600 dark:text-stone-400">
          <Banknote className="w-3 h-3 shrink-0 text-stone-400" />
          <span>{internship.stipend}</span>
        </div>
        <div className="flex items-center gap-2 text-stone-600 dark:text-stone-400">
          <GraduationCap className="w-3 h-3 shrink-0 text-stone-400" />
          <span>{internship.eligibility}</span>
        </div>
      </div>

      <div className="mt-3 pt-3 border-t border-stone-200 dark:border-white/10">
        <p className="text-xs text-stone-500 line-clamp-1">
          <span className="font-medium text-stone-700 dark:text-stone-300">Domain:</span> {internship.domain}
        </p>
        <p className="text-xs text-stone-500 mt-1.5 line-clamp-2 italic">{internship.reality}</p>
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
    <div className="min-h-screen bg-stone-50 dark:bg-stone-950">
      <SEO
        title="Top 100 Internships in India 2026"
        description="Explore the top 100 internships across government, PSUs, IITs, tech companies, and global organizations. Find stipends, eligibility, and timelines."
        keywords="government internships, PSU internships, IIT internships, tech internships, India internships 2026"
        canonicalUrl={canonicalUrl("/internships")}
      />

      {!isInsideLayout && <Navbar />}

      <div className={`max-w-6xl mx-auto px-6 pb-16 ${isInsideLayout ? "" : "pt-24"}`}>
        {/* Back link */}
        <Link
          to={isInsideLayout ? "/student/jobs" : "/jobs"}
          className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-stone-500 hover:text-stone-900 dark:hover:text-stone-50 transition-colors mb-8 no-underline"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to jobs
        </Link>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <Kicker>discover / internships</Kicker>
          <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight text-stone-900 dark:text-stone-50 leading-none">
            Top 100{" "}
            <span className="relative inline-block">
              <span className="relative z-10">internships</span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
                aria-hidden
                className="absolute bottom-1 left-0 right-0 h-3 md:h-4 bg-lime-400 origin-left z-0"
              />
            </span>{" "}
            in India.
          </h1>
          <p className="mt-3 text-sm text-stone-500 max-w-md">
            Government, PSUs, IITs, tech giants, and global organizations, curated for 2026.
          </p>
        </motion.div>

        {/* Search */}
        <div className="flex items-center gap-3 mb-5">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
            <input
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="Search by name, domain, eligibility..."
              className="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md text-sm text-stone-900 dark:text-stone-50 placeholder:text-stone-400 focus:outline-none focus:border-lime-400 dark:focus:border-lime-400 transition-colors"
            />
          </div>
          {(search || category) && (
            <button
              onClick={() => { setSearchInput(""); setSearch(""); setCategory(""); setPage(1); }}
              className="flex items-center gap-1.5 px-3 py-2.5 text-xs font-mono uppercase tracking-widest text-stone-500 hover:text-stone-900 dark:hover:text-stone-50 border border-stone-200 dark:border-white/10 rounded-md hover:border-stone-400 dark:hover:border-white/30 transition-colors bg-transparent cursor-pointer"
            >
              <X className="w-3.5 h-3.5" /> Clear
            </button>
          )}
        </div>

        {/* Category chips */}
        <div className="mb-8 flex flex-wrap items-center gap-2">
          <button
            onClick={() => { setCategory(""); setPage(1); }}
            className={`px-3 py-1.5 text-xs font-mono uppercase tracking-widest rounded-md border transition-colors cursor-pointer ${
              !category
                ? "bg-stone-900 dark:bg-stone-50 text-stone-50 dark:text-stone-900 border-stone-900 dark:border-stone-50"
                : "bg-transparent text-stone-600 dark:text-stone-400 border-stone-200 dark:border-white/10 hover:border-stone-400 dark:hover:border-white/30"
            }`}
          >
            All ({stats?.total ?? "..."})
          </button>
          {(stats?.categories ?? []).map((c) => (
            <button
              key={c.name}
              onClick={() => { setCategory(c.name); setPage(1); }}
              className={`px-3 py-1.5 text-xs font-mono uppercase tracking-widest rounded-md border transition-colors cursor-pointer ${
                category === c.name
                  ? "bg-stone-900 dark:bg-stone-50 text-stone-50 dark:text-stone-900 border-stone-900 dark:border-stone-50"
                  : "bg-transparent text-stone-600 dark:text-stone-400 border-stone-200 dark:border-white/10 hover:border-stone-400 dark:hover:border-white/30"
              }`}
            >
              {c.name} ({c.count})
            </button>
          ))}
        </div>

        {/* Results */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="bg-white dark:bg-stone-900 rounded-md border border-stone-200 dark:border-white/10 p-5 animate-pulse">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-md bg-stone-100 dark:bg-stone-800" />
                  <div className="flex-1 space-y-2">
                    <div className="h-4 bg-stone-100 dark:bg-stone-800 rounded w-3/4" />
                    <div className="h-3 bg-stone-100 dark:bg-stone-800 rounded w-1/2" />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-3 bg-stone-100 dark:bg-stone-800 rounded w-full" />
                  <div className="h-3 bg-stone-100 dark:bg-stone-800 rounded w-2/3" />
                </div>
              </div>
            ))}
          </div>
        ) : internships.length === 0 ? (
          <div className="flex flex-col items-center justify-center text-center p-14 bg-white dark:bg-stone-900 rounded-md border border-stone-200 dark:border-white/10">
            <div className="w-16 h-16 bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-white/10 rounded-md flex items-center justify-center mb-5">
              <Landmark className="w-7 h-7 text-stone-500" />
            </div>
            <h3 className="text-stone-900 dark:text-stone-50 font-bold text-base mb-2">
              No internships found
            </h3>
            <p className="text-stone-500 text-sm max-w-xs leading-relaxed mx-auto">
              Try adjusting your search or category filter.
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
                  transition={{ delay: i * 0.02, duration: 0.25 }}
                >
                  <InternshipCard internship={item} />
                </motion.div>
              ))}
            </div>

            {/* Pagination */}
            {pagination && pagination.totalPages > 1 && (
              <div className="flex items-center justify-center gap-3 mt-10">
                <button
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={page <= 1}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-md text-xs font-mono uppercase tracking-widest text-stone-600 dark:text-stone-400 border border-stone-200 dark:border-white/10 hover:border-stone-400 dark:hover:border-white/30 hover:text-stone-900 dark:hover:text-stone-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors bg-transparent cursor-pointer"
                >
                  <ChevronLeft className="w-3.5 h-3.5" /> Prev
                </button>
                <span className="text-xs font-mono uppercase tracking-widest text-stone-500">
                  {pagination.page} / {pagination.totalPages}
                </span>
                <button
                  onClick={() => setPage((p) => Math.min(pagination.totalPages, p + 1))}
                  disabled={page >= pagination.totalPages}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-md text-xs font-mono uppercase tracking-widest text-stone-600 dark:text-stone-400 border border-stone-200 dark:border-white/10 hover:border-stone-400 dark:hover:border-white/30 hover:text-stone-900 dark:hover:text-stone-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors bg-transparent cursor-pointer"
                >
                  Next <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

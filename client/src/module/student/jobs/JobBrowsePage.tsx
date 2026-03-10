import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router";
import { motion } from "framer-motion";
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { Search, MapPin, DollarSign, Clock, X } from "lucide-react";
import { Navbar } from "../../../components/Navbar";
import { SEO } from "../../../components/SEO";
import api from "../../../lib/axios";
import { queryKeys } from "../../../lib/query-keys";
import type { Job, Pagination } from "../../../lib/types";

const FILTER_TAGS = [
  "Remote", "Internship", "Full-time", "Part-time",
  "React", "Node.js", "Python", "Java", "DevOps", "AI/ML",
] as const;

export default function JobBrowsePage() {
  const isInsideLayout = useLocation().pathname.startsWith("/student/");
  const [search, setSearch] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [debouncedLocation, setDebouncedLocation] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [page, setPage] = useState(1);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  // Debounce search & location inputs
  useEffect(() => {
    timerRef.current = setTimeout(() => {
      setDebouncedSearch(search);
      setDebouncedLocation(locationFilter);
      setPage(1);
    }, 400);
    return () => clearTimeout(timerRef.current);
  }, [search, locationFilter]);

  const { data, isLoading } = useQuery({
    queryKey: queryKeys.jobs.list({
      page,
      search: debouncedSearch,
      location: debouncedLocation,
      tags: selectedTags.join(","),
    }),
    queryFn: async () => {
      const params = new URLSearchParams({ page: String(page), limit: "12" });
      if (debouncedSearch) params.set("search", debouncedSearch);
      if (debouncedLocation) params.set("location", debouncedLocation);
      if (selectedTags.length) params.set("tags", selectedTags.join(","));
      const res = await api.get(`/jobs?${params}`);
      return res.data as { jobs: Job[]; pagination: Pagination };
    },
    placeholderData: keepPreviousData,
  });

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
    setPage(1);
  };

  const clearAll = () => {
    setSearch("");
    setLocationFilter("");
    setSelectedTags([]);
    setPage(1);
  };

  const hasFilters = search || locationFilter || selectedTags.length > 0;

  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-gray-950 relative overflow-hidden">
      <SEO
        title="Browse Jobs"
        description="Find your next internship or job opportunity. Browse curated listings from top companies, filter by location and role, and apply directly."
        keywords="internship jobs, student jobs, browse jobs, job listings, job opportunities, apply jobs, campus hiring"
      />

      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-150 h-150 rounded-full bg-linear-to-br from-indigo-100 to-violet-100 dark:from-indigo-900/30 dark:to-violet-900/30 opacity-60 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-125 h-125 rounded-full bg-linear-to-tr from-slate-100 to-blue-100 dark:from-slate-900/30 dark:to-blue-900/30 opacity-60 blur-3xl" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-200 h-200 rounded-full border border-black/3 dark:border-white/3" />
      </div>
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {!isInsideLayout && <Navbar />}

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16">
        {/* Hero header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mt-6 mb-10">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-950 dark:text-white mb-3">
            Find Your Next <span className="text-gradient-accent">Opportunity</span>
          </h1>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">Browse open positions from top companies and kickstart your career</p>
        </motion.div>

        {/* Search + Filters */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="max-w-4xl mx-auto mb-10 space-y-3">
          {/* Search bar */}
          <div className="bg-white dark:bg-gray-900 p-3 rounded-2xl border border-gray-200/80 dark:border-gray-800 shadow-lg shadow-black/4">
            <div className="flex items-center gap-3">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-gray-500" />
                <input type="text" value={search} onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-gray-50 dark:bg-gray-800 border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/30 text-sm dark:text-white dark:placeholder-gray-500"
                  placeholder="Search by title, company, or keyword..." />
              </div>
              <div className="relative hidden sm:block">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-gray-500" />
                <input type="text" value={locationFilter} onChange={(e) => setLocationFilter(e.target.value)}
                  className="pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-800 border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/30 text-sm w-48 dark:text-white dark:placeholder-gray-500"
                  placeholder="Location" />
              </div>
            </div>
          </div>

          {/* Filter chips */}
          <div className="flex items-center gap-2 flex-wrap">
            {FILTER_TAGS.map((tag) => (
              <button key={tag} onClick={() => toggleTag(tag)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                  selectedTags.includes(tag)
                    ? "bg-gray-950 dark:bg-white text-white dark:text-gray-950"
                    : "bg-white dark:bg-gray-900 text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700"
                }`}>
                {tag}
              </button>
            ))}
            {hasFilters && (
              <button onClick={clearAll}
                className="px-3 py-1.5 rounded-lg text-xs font-medium text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors flex items-center gap-1">
                <X className="w-3 h-3" /> Clear
              </button>
            )}
          </div>
        </motion.div>

        {isLoading ? (
          <div className="text-center py-16 text-gray-500">Loading jobs...</div>
        ) : (data?.jobs ?? []).length === 0 ? (
          <div className="text-center py-16 text-gray-500">No jobs found. Try different search criteria.</div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {(data?.jobs ?? []).map((job, i) => (
                <motion.div key={job.id} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.04 }}>
                  <Link to={`/jobs/${job.id}`}
                    className="group block bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl hover:shadow-gray-200/50 dark:hover:shadow-gray-900/50 hover:border-gray-200 dark:hover:border-gray-700 transition-all duration-300 no-underline">
                    <div className="flex items-start justify-between mb-3">
                      <div className="w-10 h-10 rounded-xl bg-gray-950 dark:bg-white flex items-center justify-center shrink-0 mr-3 text-white dark:text-gray-950 text-sm font-bold">
                        {job.company?.charAt(0) || "C"}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base font-semibold text-gray-900 dark:text-white line-clamp-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{job.title}</h3>
                        <span className="text-sm text-gray-500">{job.company}</span>
                      </div>
                      {job._count && (
                        <span className="text-[11px] text-gray-400 dark:text-gray-500 shrink-0 ml-2 bg-gray-50 dark:bg-gray-800 px-2 py-0.5 rounded-full">{job._count.applications} applied</span>
                      )}
                    </div>
                    <p className="text-sm text-gray-500 line-clamp-2 mb-4 leading-relaxed">{job.description}</p>
                    <div className="flex flex-wrap gap-3 text-xs text-gray-500">
                      <span className="flex items-center gap-1 bg-gray-50 dark:bg-gray-800 px-2.5 py-1 rounded-lg"><MapPin className="w-3 h-3 text-indigo-400" />{job.location}</span>
                      <span className="flex items-center gap-1 bg-gray-50 dark:bg-gray-800 px-2.5 py-1 rounded-lg"><DollarSign className="w-3 h-3 text-emerald-400" />{job.salary}</span>
                      {job.deadline && (
                        <span className="flex items-center gap-1 bg-gray-50 dark:bg-gray-800 px-2.5 py-1 rounded-lg"><Clock className="w-3 h-3 text-amber-400" />{new Date(job.deadline).toLocaleDateString()}</span>
                      )}
                    </div>
                    {job.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-gray-50 dark:border-gray-800">
                        {job.tags.slice(0, 3).map((tag) => (
                          <span key={tag} className="px-2.5 py-0.5 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 rounded-full text-xs font-medium">{tag}</span>
                        ))}
                      </div>
                    )}
                  </Link>
                </motion.div>
              ))}
            </div>

            {data?.pagination && data.pagination.totalPages > 1 && (
              <div className="flex items-center justify-center gap-3 mt-10">
                <button onClick={() => setPage(Math.max(1, page - 1))} disabled={page === 1}
                  className="px-5 py-2.5 text-sm font-medium bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl disabled:opacity-30 hover:border-gray-300 dark:hover:border-gray-600 transition-colors dark:text-gray-300 shadow-sm">Previous</button>
                <div className="flex items-center gap-1">
                  {Array.from({ length: Math.min(data.pagination.totalPages, 5) }, (_, i) => {
                    const p = i + 1;
                    return (
                      <button key={p} onClick={() => setPage(p)}
                        className={`w-10 h-10 rounded-xl text-sm font-medium transition-all ${
                          page === p
                            ? "bg-gray-950 dark:bg-white text-white dark:text-gray-950 shadow-md"
                            : "bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700 hover:border-gray-300"
                        }`}>{p}</button>
                    );
                  })}
                </div>
                <button onClick={() => setPage(Math.min(data.pagination.totalPages, page + 1))} disabled={page === data.pagination.totalPages}
                  className="px-5 py-2.5 text-sm font-medium bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl disabled:opacity-30 hover:border-gray-300 dark:hover:border-gray-600 transition-colors dark:text-gray-300 shadow-sm">Next</button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

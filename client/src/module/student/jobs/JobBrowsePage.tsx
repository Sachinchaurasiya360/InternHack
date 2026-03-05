import { useState } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { Search, MapPin, DollarSign, Clock, Building2, Briefcase } from "lucide-react";
import { Navbar } from "../../../components/Navbar";
import { SEO } from "../../../components/SEO";
import api from "../../../lib/axios";
import { queryKeys } from "../../../lib/query-keys";
import type { Job, Pagination } from "../../../lib/types";

export default function JobBrowsePage() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [appliedSearch, setAppliedSearch] = useState("");
  const [appliedLocation, setAppliedLocation] = useState("");
  const [page, setPage] = useState(1);

  const { data, isLoading } = useQuery({
    queryKey: queryKeys.jobs.list({ page, search: appliedSearch, location: appliedLocation }),
    queryFn: async () => {
      const params = new URLSearchParams({ page: String(page), limit: "12" });
      if (appliedSearch) params.set("search", appliedSearch);
      if (appliedLocation) params.set("location", appliedLocation);
      const res = await api.get(`/jobs?${params}`);
      return res.data as { jobs: Job[]; pagination: Pagination };
    },
    placeholderData: keepPreviousData,
  });

  const applySearch = () => {
    setAppliedSearch(search);
    setAppliedLocation(location);
    setPage(1);
  };

  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-gray-950 relative overflow-hidden">
      <SEO
        title="Browse Jobs"
        description="Find your next internship or job opportunity. Browse curated listings from top companies, filter by location and role, and apply directly."
        keywords="internship jobs, student jobs, browse jobs, job listings, job opportunities, apply jobs, campus hiring"
      />

      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-indigo-100 to-violet-100 dark:from-indigo-900/30 dark:to-violet-900/30 opacity-60 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-slate-100 to-blue-100 dark:from-slate-900/30 dark:to-blue-900/30 opacity-60 blur-3xl" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full border border-black/[0.03] dark:border-white/[0.03]" />
      </div>
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <Navbar />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16">
        {/* Hero header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-gray-900 border border-black/10 dark:border-gray-700 shadow-sm text-sm text-gray-600 dark:text-gray-400 mb-6">
            <Briefcase className="w-4 h-4 text-indigo-500" />
            <span>Curated Opportunities</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-950 dark:text-white mb-3">
            Find Your Next <span className="text-gradient-accent">Opportunity</span>
          </h1>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">Browse open positions from top companies and kickstart your career</p>
        </motion.div>

        {/* Search */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="bg-white dark:bg-gray-900 p-3 rounded-2xl border border-gray-200/80 dark:border-gray-800 shadow-lg shadow-black/[0.04] mb-10 max-w-4xl mx-auto">
          <div className="flex items-center gap-3">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-gray-500" />
              <input type="text" value={search} onChange={(e) => setSearch(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && applySearch()}
                className="w-full pl-12 pr-4 py-3 bg-gray-50 dark:bg-gray-800 border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/30 text-sm dark:text-white dark:placeholder-gray-500"
                placeholder="Search jobs by title, company, or description..." />
            </div>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-gray-500" />
              <input type="text" value={location} onChange={(e) => setLocation(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && applySearch()}
                className="pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-800 border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/30 text-sm w-48 dark:text-white dark:placeholder-gray-500"
                placeholder="Location" />
            </div>
            <button onClick={applySearch}
              className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-violet-500 text-white text-sm font-semibold rounded-xl hover:from-indigo-600 hover:to-violet-600 transition-all shadow-md shadow-indigo-500/20">
              Search
            </button>
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
                    className="group block bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl hover:shadow-indigo-500/[0.06] hover:border-indigo-200 dark:hover:border-indigo-900/50 transition-all duration-300 no-underline">
                    <div className="flex items-start justify-between mb-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center shrink-0 mr-3 shadow-sm shadow-indigo-500/20">
                        <Building2 className="w-5 h-5 text-white" />
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
                  className="px-5 py-2.5 text-sm font-medium bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl disabled:opacity-30 hover:border-indigo-300 dark:hover:border-indigo-800 transition-colors dark:text-gray-300 shadow-sm">Previous</button>
                <div className="flex items-center gap-1">
                  {Array.from({ length: Math.min(data.pagination.totalPages, 5) }, (_, i) => {
                    const p = i + 1;
                    return (
                      <button key={p} onClick={() => setPage(p)}
                        className={`w-10 h-10 rounded-xl text-sm font-medium transition-all ${
                          page === p
                            ? "bg-gradient-to-r from-indigo-500 to-violet-500 text-white shadow-md shadow-indigo-500/20"
                            : "bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700 hover:border-indigo-300"
                        }`}>{p}</button>
                    );
                  })}
                </div>
                <button onClick={() => setPage(Math.min(data.pagination.totalPages, page + 1))} disabled={page === data.pagination.totalPages}
                  className="px-5 py-2.5 text-sm font-medium bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl disabled:opacity-30 hover:border-indigo-300 dark:hover:border-indigo-800 transition-colors dark:text-gray-300 shadow-sm">Next</button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

import { useState } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { Search, MapPin, DollarSign, Clock, Building2 } from "lucide-react";
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
  });

  const applySearch = () => {
    setAppliedSearch(search);
    setAppliedLocation(location);
    setPage(1);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Browse Jobs"
        description="Find your next internship or job opportunity. Browse curated listings from top companies, filter by location and role, and apply directly."
        keywords="internship jobs, student jobs, browse jobs, job listings, job opportunities, apply jobs, campus hiring"
      />
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Find Your Next Opportunity</h1>
        <p className="text-gray-500 mb-8">Browse open positions from top companies</p>

        {/* Search */}
        <div className="flex items-center gap-3 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && applySearch()}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/20 text-sm"
              placeholder="Search jobs by title, company, or description..." />
          </div>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input type="text" value={location} onChange={(e) => setLocation(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && applySearch()}
              className="pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/20 text-sm w-48"
              placeholder="Location" />
          </div>
          <button onClick={applySearch}
            className="px-6 py-3 bg-black text-white text-sm font-semibold rounded-xl hover:bg-gray-800 transition-colors">
            Search
          </button>
        </div>

        {isLoading ? (
          <div className="text-center py-16 text-gray-500">Loading jobs...</div>
        ) : (data?.jobs ?? []).length === 0 ? (
          <div className="text-center py-16 text-gray-500">No jobs found. Try different search criteria.</div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {(data?.jobs ?? []).map((job, i) => (
                <motion.div key={job.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
                  <Link to={`/jobs/${job.id}`} className="block bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow no-underline">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">{job.title}</h3>
                      {job._count && (
                        <span className="text-xs text-gray-400 shrink-0 ml-2">{job._count.applications} applied</span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <Building2 className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{job.company}</span>
                    </div>
                    <p className="text-sm text-gray-500 line-clamp-2 mb-4">{job.description}</p>
                    <div className="flex flex-wrap gap-3 text-xs text-gray-500">
                      <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{job.location}</span>
                      <span className="flex items-center gap-1"><DollarSign className="w-3 h-3" />{job.salary}</span>
                      {job.deadline && (
                        <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{new Date(job.deadline).toLocaleDateString()}</span>
                      )}
                    </div>
                    {job.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {job.tags.slice(0, 3).map((tag) => (
                          <span key={tag} className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded text-xs">{tag}</span>
                        ))}
                      </div>
                    )}
                  </Link>
                </motion.div>
              ))}
            </div>

            {data?.pagination && data.pagination.totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 mt-8">
                <button onClick={() => setPage(Math.max(1, page - 1))} disabled={page === 1}
                  className="px-4 py-2 text-sm border border-gray-300 rounded-lg disabled:opacity-30">Previous</button>
                <span className="text-sm text-gray-500">Page {page} of {data.pagination.totalPages}</span>
                <button onClick={() => setPage(Math.min(data.pagination.totalPages, page + 1))} disabled={page === data.pagination.totalPages}
                  className="px-4 py-2 text-sm border border-gray-300 rounded-lg disabled:opacity-30">Next</button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

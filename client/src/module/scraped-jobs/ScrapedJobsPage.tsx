import { useEffect, useState } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { Search, MapPin, DollarSign, Building2, ExternalLink, Globe, Filter } from "lucide-react";
import { Navbar } from "../../components/Navbar";
import api from "../../lib/axios";
import type { ScrapedJob, ScrapedJobSource, Pagination } from "../../lib/types";

export default function ScrapedJobsPage() {
  const [jobs, setJobs] = useState<ScrapedJob[]>([]);
  const [sources, setSources] = useState<ScrapedJobSource[]>([]);
  const [pagination, setPagination] = useState<Pagination | null>(null);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [source, setSource] = useState("");
  const [page, setPage] = useState(1);

  const fetchJobs = () => {
    setLoading(true);
    const params = new URLSearchParams({ page: String(page), limit: "12" });
    if (search) params.set("search", search);
    if (location) params.set("location", location);
    if (source) params.set("source", source);

    api.get(`/scraped-jobs?${params}`).then((res) => {
      setJobs(res.data.jobs);
      setPagination(res.data.pagination);
      setLoading(false);
    }).catch(() => setLoading(false));
  };

  useEffect(() => {
    api.get("/scraped-jobs/sources").then((res) => {
      setSources(res.data.sources);
    }).catch(() => {});
  }, []);

  useEffect(() => { fetchJobs(); }, [page]);

  const getSourceBadgeColor = (src: string) => {
    switch (src) {
      case "remotive": return "bg-purple-100 text-purple-700";
      case "arbeitnow": return "bg-blue-100 text-blue-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  const getSourceLabel = (src: string) => {
    const found = sources.find((s) => s.id === src);
    return found ? found.name : src;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-12">
        <div className="flex items-center gap-3 mb-2">
          <Globe className="w-8 h-8 text-gray-700" />
          <h1 className="text-3xl font-bold text-gray-900">External Job Listings</h1>
        </div>
        <p className="text-gray-500 mb-8">Jobs scraped from top job boards across the web, updated every 6 hours</p>

        {/* Search & Filters */}
        <div className="flex flex-wrap items-center gap-3 mb-8">
          <div className="flex-1 min-w-[200px] relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && fetchJobs()}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/20 text-sm"
              placeholder="Search by title, company, or keywords..." />
          </div>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input type="text" value={location} onChange={(e) => setLocation(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && fetchJobs()}
              className="pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/20 text-sm w-44"
              placeholder="Location" />
          </div>
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <select value={source} onChange={(e) => { setSource(e.target.value); setPage(1); }}
              className="pl-10 pr-8 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/20 text-sm appearance-none bg-white w-44">
              <option value="">All Sources</option>
              {sources.map((s) => (
                <option key={s.id} value={s.id}>{s.name}</option>
              ))}
            </select>
          </div>
          <button onClick={() => { setPage(1); fetchJobs(); }}
            className="px-6 py-3 bg-black text-white text-sm font-semibold rounded-xl hover:bg-gray-800 transition-colors">
            Search
          </button>
        </div>

        {loading ? (
          <div className="text-center py-16 text-gray-500">Loading external jobs...</div>
        ) : jobs.length === 0 ? (
          <div className="text-center py-16">
            <Globe className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 mb-2">No external jobs found</p>
            <p className="text-sm text-gray-400">Try different search criteria or check back later</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {jobs.map((job, i) => (
                <motion.div key={job.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.03 }}>
                  <Link to={`/external-jobs/${String(job.id)}`}
                    className="block bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow no-underline h-full">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg font-semibold text-gray-900 line-clamp-1 flex-1">{job.title}</h3>
                      <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium shrink-0 ml-2 ${getSourceBadgeColor(job.source)}`}>
                        {getSourceLabel(job.source)}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <Building2 className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{job.company}</span>
                    </div>
                    <p className="text-sm text-gray-500 line-clamp-2 mb-4">{job.description}</p>
                    <div className="flex flex-wrap gap-3 text-xs text-gray-500">
                      <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{job.location}</span>
                      {job.salary && (
                        <span className="flex items-center gap-1"><DollarSign className="w-3 h-3" />{job.salary}</span>
                      )}
                      <span className="flex items-center gap-1">
                        <ExternalLink className="w-3 h-3" />External
                      </span>
                    </div>
                    {job.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {job.tags.slice(0, 4).map((tag) => (
                          <span key={tag} className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded text-xs">{tag}</span>
                        ))}
                      </div>
                    )}
                  </Link>
                </motion.div>
              ))}
            </div>

            {pagination && pagination.totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 mt-8">
                <button onClick={() => setPage(Math.max(1, page - 1))} disabled={page === 1}
                  className="px-4 py-2 text-sm border border-gray-300 rounded-lg disabled:opacity-30">Previous</button>
                <span className="text-sm text-gray-500">Page {page} of {pagination.totalPages}</span>
                <button onClick={() => setPage(Math.min(pagination.totalPages, page + 1))} disabled={page === pagination.totalPages}
                  className="px-4 py-2 text-sm border border-gray-300 rounded-lg disabled:opacity-30">Next</button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

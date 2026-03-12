import { useState } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { Building2, Calendar, Users, Clock, Search } from "lucide-react";
import api from "../../../lib/axios";
import { queryKeys } from "../../../lib/query-keys";
import type { CampusDrive, Pagination } from "../../../lib/types";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.4 },
  }),
};

const statusColors: Record<string, string> = {
  OPEN: "bg-green-500/10 text-green-400",
  DRAFT: "bg-gray-500/10 text-gray-400",
  CLOSED: "bg-red-500/10 text-red-400",
  COMPLETED: "bg-blue-500/10 text-blue-400",
};

export default function CampusDrivesPage() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const { data, isLoading } = useQuery({
    queryKey: queryKeys.campusDrives.eligible({ page, search }),
    queryFn: async () => {
      const params = new URLSearchParams({ page: String(page), limit: "10" });
      if (search) params.set("search", search);
      const res = await api.get(`/student/campus-drives?${params}`);
      return res.data as { drives: CampusDrive[]; pagination: Pagination };
    },
    placeholderData: keepPreviousData,
  });

  const drives = data?.drives ?? [];
  const pagination = data?.pagination;

  return (
    <div className="pb-12">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mt-6 mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Campus Drives</h1>
        <p className="text-gray-500">Browse eligible campus placement drives and register</p>
      </motion.div>

      {/* Search */}
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }} className="mb-8">
        <div className="relative max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => { setSearch(e.target.value); setPage(1); }}
            className="w-full pl-11 pr-4 py-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/30 dark:text-white dark:placeholder-gray-500"
            placeholder="Search drives by title or company..."
          />
        </div>
      </motion.div>

      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-52 bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 animate-pulse" />
          ))}
        </div>
      ) : drives.length === 0 ? (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
          <Building2 className="w-12 h-12 mx-auto text-gray-300 dark:text-gray-600 mb-4" />
          <p className="text-gray-500 text-lg font-medium mb-1">No eligible drives</p>
          <p className="text-gray-400 text-sm">Check back later for new campus placement opportunities</p>
        </motion.div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {drives.map((drive, i) => (
              <motion.div
                key={drive.id}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
              >
                <Link
                  to={`/student/campus-drives/${drive.id}`}
                  className="group block bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl hover:shadow-gray-200/50 dark:hover:shadow-gray-900/50 hover:border-gray-200 dark:hover:border-gray-700 transition-all duration-300 no-underline"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-start gap-3 min-w-0 flex-1">
                      <div className="w-10 h-10 rounded-xl bg-gray-950 dark:bg-white flex items-center justify-center shrink-0 text-white dark:text-gray-950 text-sm font-bold">
                        {drive.company?.charAt(0) || "C"}
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-base font-semibold text-gray-900 dark:text-white line-clamp-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                          {drive.title}
                        </h3>
                        <p className="text-sm text-gray-500">{drive.company}</p>
                      </div>
                    </div>
                    <span className={`text-xs font-medium px-2.5 py-1 rounded-lg shrink-0 ml-2 ${statusColors[drive.status] || "bg-gray-100 text-gray-600"}`}>
                      {drive.status}
                    </span>
                  </div>

                  <p className="text-sm text-gray-500 line-clamp-2 mb-4 leading-relaxed">
                    {drive.description}
                  </p>

                  <div className="flex flex-wrap gap-3 text-xs text-gray-500">
                    <span className="flex items-center gap-1 bg-gray-50 dark:bg-gray-800 px-2.5 py-1 rounded-lg">
                      <Calendar className="w-3 h-3 text-indigo-400" />
                      Deadline: {new Date(drive.registrationDeadline).toLocaleDateString()}
                    </span>
                    {drive._count && (
                      <span className="flex items-center gap-1 bg-gray-50 dark:bg-gray-800 px-2.5 py-1 rounded-lg">
                        <Users className="w-3 h-3 text-emerald-400" />
                        {drive._count.registrations} registered
                      </span>
                    )}
                    {drive.driveDate && (
                      <span className="flex items-center gap-1 bg-gray-50 dark:bg-gray-800 px-2.5 py-1 rounded-lg">
                        <Clock className="w-3 h-3 text-amber-400" />
                        Drive: {new Date(drive.driveDate).toLocaleDateString()}
                      </span>
                    )}
                  </div>

                  {drive.eligibleBranches.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-gray-50 dark:border-gray-800">
                      {drive.eligibleBranches.slice(0, 4).map((branch) => (
                        <span key={branch} className="px-2.5 py-0.5 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 rounded-lg text-xs font-medium">
                          {branch}
                        </span>
                      ))}
                      {drive.eligibleBranches.length > 4 && (
                        <span className="px-2.5 py-0.5 bg-gray-50 dark:bg-gray-800 text-gray-500 rounded-lg text-xs font-medium">
                          +{drive.eligibleBranches.length - 4} more
                        </span>
                      )}
                    </div>
                  )}
                </Link>
              </motion.div>
            ))}
          </div>

          {pagination && pagination.totalPages > 1 && (
            <div className="flex items-center justify-center gap-3 mt-10">
              <button
                onClick={() => setPage(Math.max(1, page - 1))}
                disabled={page === 1}
                className="px-5 py-2.5 text-sm font-medium bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl disabled:opacity-30 hover:border-gray-300 dark:hover:border-gray-600 transition-colors dark:text-gray-300 shadow-sm"
              >
                Previous
              </button>
              <div className="flex items-center gap-1">
                {Array.from({ length: Math.min(pagination.totalPages, 5) }, (_, i) => {
                  const p = i + 1;
                  return (
                    <button
                      key={p}
                      onClick={() => setPage(p)}
                      className={`w-10 h-10 rounded-xl text-sm font-medium transition-all ${
                        page === p
                          ? "bg-gray-950 dark:bg-white text-white dark:text-gray-950 shadow-md"
                          : "bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700 hover:border-gray-300"
                      }`}
                    >
                      {p}
                    </button>
                  );
                })}
              </div>
              <button
                onClick={() => setPage(Math.min(pagination.totalPages, page + 1))}
                disabled={page === pagination.totalPages}
                className="px-5 py-2.5 text-sm font-medium bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl disabled:opacity-30 hover:border-gray-300 dark:hover:border-gray-600 transition-colors dark:text-gray-300 shadow-sm"
              >
                Next
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}

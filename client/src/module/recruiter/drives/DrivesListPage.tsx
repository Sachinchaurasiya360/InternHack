import { useState } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import {
  Plus,
  Building2,
  Calendar,
  Users,
  Clock,
  GraduationCap,
} from "lucide-react";
import api from "../../../lib/axios";
import { queryKeys } from "../../../lib/query-keys";
import type { CampusDrive, Pagination } from "../../../lib/types";

const fadeIn = {
  hidden: { opacity: 0, y: 12 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.35 },
  }),
};

const statusColors: Record<string, string> = {
  DRAFT: "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400",
  OPEN: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
  CLOSED: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
  COMPLETED:
    "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
};

export default function DrivesListPage() {
  const [page, setPage] = useState(1);

  const { data, isLoading } = useQuery({
    queryKey: queryKeys.campusDrives.recruiter({ page }),
    queryFn: async () => {
      const res = await api.get("/campus-drives/my", {
        params: { page, limit: 10 },
      });
      return res.data as { drives: CampusDrive[]; pagination: Pagination };
    },
    placeholderData: keepPreviousData,
  });

  const drives = data?.drives ?? [];
  const pagination = data?.pagination;

  if (isLoading) {
    return (
      <div>
        <div className="flex items-center justify-between mb-6">
          <div className="h-8 w-48 bg-gray-200 dark:bg-gray-800 rounded-lg animate-pulse" />
          <div className="h-10 w-40 bg-gray-200 dark:bg-gray-800 rounded-xl animate-pulse" />
        </div>
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="h-40 bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 animate-pulse"
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Campus Drives
        </h1>
        <Link
          to="/recruiters/campus-drives/new"
          className="flex items-center gap-2 px-4 py-2.5 bg-black dark:bg-white text-white dark:text-gray-950 text-sm font-semibold rounded-xl hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors no-underline"
        >
          <Plus className="w-4 h-4" />
          Create Drive
        </Link>
      </div>

      {drives.length === 0 ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-20 bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800"
        >
          <GraduationCap className="w-14 h-14 mx-auto text-gray-300 dark:text-gray-600 mb-4" />
          <p className="text-gray-500 text-lg font-medium mb-1">
            No campus drives yet
          </p>
          <p className="text-gray-400 dark:text-gray-500 text-sm mb-6">
            Create your first campus drive to start recruiting from colleges
          </p>
          <Link
            to="/recruiters/campus-drives/new"
            className="inline-flex items-center gap-2 px-6 py-3 bg-black dark:bg-white text-white dark:text-gray-950 rounded-xl hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors no-underline text-sm font-semibold"
          >
            <Plus className="w-4 h-4" />
            Create Your First Drive
          </Link>
        </motion.div>
      ) : (
        <>
          <div className="space-y-4">
            {drives.map((drive, i) => (
              <motion.div
                key={drive.id}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={fadeIn}
              >
                <Link
                  to={`/recruiters/campus-drives/${drive.id}`}
                  className="group block bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md hover:border-gray-200 dark:hover:border-gray-700 transition-all duration-200 no-underline"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-start gap-3 min-w-0 flex-1">
                      <div className="w-10 h-10 rounded-xl bg-gray-950 dark:bg-white flex items-center justify-center shrink-0 text-white dark:text-gray-950 text-sm font-bold">
                        {drive.company?.charAt(0)?.toUpperCase() || "C"}
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-base font-semibold text-gray-900 dark:text-white line-clamp-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                          {drive.title}
                        </h3>
                        <p className="text-sm text-gray-500">{drive.company}</p>
                      </div>
                    </div>
                    <span
                      className={`text-xs font-medium px-2.5 py-1 rounded-lg shrink-0 ml-2 ${statusColors[drive.status] || statusColors.DRAFT}`}
                    >
                      {drive.status}
                    </span>
                  </div>

                  {drive.description && (
                    <p className="text-sm text-gray-500 line-clamp-2 mb-4 leading-relaxed">
                      {drive.description}
                    </p>
                  )}

                  <div className="flex flex-wrap gap-3 text-xs text-gray-500">
                    <span className="flex items-center gap-1.5 bg-gray-50 dark:bg-gray-800 px-2.5 py-1 rounded-lg">
                      <Calendar className="w-3 h-3 text-indigo-400" />
                      Deadline:{" "}
                      {new Date(drive.registrationDeadline).toLocaleDateString()}
                    </span>
                    <span className="flex items-center gap-1.5 bg-gray-50 dark:bg-gray-800 px-2.5 py-1 rounded-lg">
                      <Users className="w-3 h-3 text-emerald-400" />
                      {drive._count?.registrations ?? 0} registered
                    </span>
                    {drive.driveDate && (
                      <span className="flex items-center gap-1.5 bg-gray-50 dark:bg-gray-800 px-2.5 py-1 rounded-lg">
                        <Clock className="w-3 h-3 text-amber-400" />
                        Drive:{" "}
                        {new Date(drive.driveDate).toLocaleDateString()}
                      </span>
                    )}
                    {drive.targetColleges.length > 0 && (
                      <span className="flex items-center gap-1.5 bg-gray-50 dark:bg-gray-800 px-2.5 py-1 rounded-lg">
                        <Building2 className="w-3 h-3 text-purple-400" />
                        {drive.targetColleges.length} college
                        {drive.targetColleges.length !== 1 ? "s" : ""}
                      </span>
                    )}
                  </div>

                  {drive.eligibleBranches.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-gray-50 dark:border-gray-800">
                      {drive.eligibleBranches.slice(0, 5).map((branch) => (
                        <span
                          key={branch}
                          className="px-2.5 py-0.5 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 rounded-lg text-xs font-medium"
                        >
                          {branch}
                        </span>
                      ))}
                      {drive.eligibleBranches.length > 5 && (
                        <span className="px-2.5 py-0.5 bg-gray-50 dark:bg-gray-800 text-gray-500 rounded-lg text-xs font-medium">
                          +{drive.eligibleBranches.length - 5} more
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
                {Array.from(
                  { length: Math.min(pagination.totalPages, 5) },
                  (_, i) => {
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
                  },
                )}
              </div>
              <button
                onClick={() =>
                  setPage(Math.min(pagination.totalPages, page + 1))
                }
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

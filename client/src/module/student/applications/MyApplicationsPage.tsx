import { Link } from "react-router";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Building2, ArrowRight, Clock, Search, Filter, FileText, CheckCircle, Trophy } from "lucide-react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useState, useMemo } from "react";
import api from "../../../lib/axios";
import { queryKeys } from "../../../lib/query-keys";
import type { Application } from "../../../lib/types";
import { LoadingScreen } from "../../../components/LoadingScreen";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
};

const STATUS_FILTERS = ["ALL", "APPLIED", "IN_PROGRESS", "SHORTLISTED", "HIRED", "REJECTED", "WITHDRAWN"] as const;

export default function MyApplicationsPage() {
  const queryClient = useQueryClient();
  const [activeFilter, setActiveFilter] = useState<string>("ALL");
  const [search, setSearch] = useState("");

  const { data: applications = [], isLoading: loading } = useQuery({
    queryKey: queryKeys.applications.mine(),
    queryFn: () => api.get("/student/applications").then((res) => res.data.applications as Application[]),
  });

  const filtered = useMemo(() => {
    let list = applications;
    if (activeFilter !== "ALL") list = list.filter((a) => a.status === activeFilter);
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter((a) =>
        a.job?.title?.toLowerCase().includes(q) || a.job?.company?.toLowerCase().includes(q)
      );
    }
    return list;
  }, [applications, activeFilter, search]);

  const statusCounts = useMemo(() => {
    const counts: Record<string, number> = { ALL: applications.length };
    for (const app of applications) counts[app.status] = (counts[app.status] || 0) + 1;
    return counts;
  }, [applications]);

  const handleWithdraw = async (id: number) => {
    if (!confirm("Are you sure you want to withdraw this application?")) return;
    try {
      await api.delete(`/student/applications/${id}`);
      queryClient.setQueryData<Application[]>(queryKeys.applications.mine(), (old) =>
        (old ?? []).map((a) => a.id === id ? { ...a, status: "WITHDRAWN" as const } : a)
      );
    } catch {
      alert("Failed to withdraw");
    }
  };

  if (loading) return <LoadingScreen />;

  return (
    <div className="relative pb-12">
      {/* Atmospheric background */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-150 h-150 bg-linear-to-br from-indigo-100 to-violet-100 dark:from-indigo-900/20 dark:to-violet-900/20 rounded-full blur-3xl opacity-40" />
        <div className="absolute -bottom-32 -left-32 w-125 h-125 bg-linear-to-tr from-slate-100 to-blue-100 dark:from-slate-900/20 dark:to-blue-900/20 rounded-full blur-3xl opacity-40" />
        <div
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      {/* Page Header — landing page style */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="text-center mb-10 mt-6"
      >
        <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-gray-950 dark:text-white mb-3">
          My <span className="text-gradient-accent">Applications</span>
        </h1>
        <p className="text-lg text-gray-500 dark:text-gray-500 max-w-xl mx-auto">
          Track your job applications and interview progress in one place
        </p>
      </motion.div>

      {/* Stats Row — landing page style with icon boxes */}
      {applications.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8"
        >
          {[
            { label: "Total", count: applications.length, icon: FileText },
            { label: "In Progress", count: statusCounts["IN_PROGRESS"] || 0, icon: Clock },
            { label: "Shortlisted", count: statusCounts["SHORTLISTED"] || 0, icon: CheckCircle },
            { label: "Hired", count: statusCounts["HIRED"] || 0, icon: Trophy },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }}
              className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-5 text-center"
            >
              <div className="w-10 h-10 rounded-xl bg-gray-950 dark:bg-white flex items-center justify-center mx-auto mb-3">
                <stat.icon className="w-4.5 h-4.5 text-white dark:text-gray-950" />
              </div>
              <p className="font-display text-2xl font-bold text-gray-950 dark:text-white">{stat.count}</p>
              <p className="text-xs text-gray-400 dark:text-gray-500 font-medium mt-0.5">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      )}

      {/* Search & Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="space-y-3 mb-8"
      >
        <div className="bg-white dark:bg-gray-900 p-3 rounded-2xl border border-gray-200/80 dark:border-gray-800 shadow-lg shadow-black/4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by job title or company..."
              className="w-full pl-12 pr-4 py-3 bg-gray-50 dark:bg-gray-800 border-0 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all dark:text-white dark:placeholder-gray-500"
            />
          </div>
        </div>
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
          <Filter className="w-4 h-4 text-gray-400 shrink-0" />
          {STATUS_FILTERS.map((status) => (
            <button
              key={status}
              onClick={() => setActiveFilter(status)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                activeFilter === status
                  ? "bg-gray-950 dark:bg-white text-white dark:text-gray-950"
                  : "bg-white dark:bg-gray-900 text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700"
              }`}
            >
              {status === "ALL" ? "All" : status.replace("_", " ")}
              {(statusCounts[status] || 0) > 0 && status !== "ALL" && (
                <span className="ml-1 opacity-60">({statusCounts[status]})</span>
              )}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Applications List */}
      {applications.length === 0 ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center py-20 bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800"
        >
          <div className="w-16 h-16 rounded-2xl bg-gray-950 dark:bg-white flex items-center justify-center mx-auto mb-4">
            <Briefcase className="w-7 h-7 text-white dark:text-gray-950" />
          </div>
          <h3 className="font-display text-lg font-bold text-gray-950 dark:text-white mb-2">No applications yet</h3>
          <p className="text-sm text-gray-500 dark:text-gray-500 mb-6 max-w-sm mx-auto">
            Start exploring jobs and submit your first application to see it tracked here.
          </p>
          <Link to="/jobs"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-950 dark:bg-white text-white dark:text-gray-950 text-sm font-semibold rounded-2xl hover:bg-gray-800 dark:hover:bg-gray-200 transition-all no-underline shadow-lg shadow-black/10">
            Browse Jobs <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      ) : filtered.length === 0 ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-16 bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800"
        >
          <Search className="w-10 h-10 text-gray-300 dark:text-gray-600 mx-auto mb-3" />
          <p className="text-gray-500">No applications match your filters</p>
          <button onClick={() => { setActiveFilter("ALL"); setSearch(""); }}
            className="text-sm text-indigo-600 dark:text-indigo-400 mt-2 hover:underline">
            Clear filters
          </button>
        </motion.div>
      ) : (
        <div className="space-y-3">
          {filtered.map((app, i) => (
            <motion.div
              key={app.id}
              custom={i}
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700 hover:shadow-xl hover:shadow-gray-200/50 dark:hover:shadow-gray-900/50 transition-all duration-300 overflow-hidden"
            >
              <div className="p-5 sm:p-6">
                <div className="flex items-start gap-4">
                  {/* Company initial avatar */}
                  <div className="w-11 h-11 rounded-xl bg-gray-950 dark:bg-white flex items-center justify-center shrink-0 text-white dark:text-gray-950 text-sm font-bold">
                    {app.job?.company?.charAt(0) || "C"}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <Link to={`/student/applications/${app.id}`} className="no-underline">
                          <h3 className="text-base font-semibold text-gray-950 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors truncate">
                            {app.job?.title}
                          </h3>
                        </Link>
                        <div className="flex items-center gap-3 mt-1 text-sm text-gray-500 dark:text-gray-500">
                          <span className="flex items-center gap-1 truncate">
                            <Building2 className="w-3.5 h-3.5 shrink-0" />{app.job?.company}
                          </span>
                          <span className="flex items-center gap-1 truncate">
                            <MapPin className="w-3.5 h-3.5 shrink-0" />{app.job?.location}
                          </span>
                        </div>
                      </div>

                      <span className={`px-2.5 py-1 rounded-lg text-xs font-medium whitespace-nowrap ${getStatusColor(app.status)}`}>
                        {app.status.replace("_", " ")}
                      </span>
                    </div>

                    {/* Bottom row */}
                    <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-50 dark:border-gray-800">
                      <div className="flex items-center gap-3 text-xs text-gray-400 dark:text-gray-500">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          Applied {new Date(app.createdAt).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
                        </span>
                        {app.roundSubmissions && app.roundSubmissions.length > 0 && (
                          <span className="flex items-center gap-1.5">
                            <div className="flex gap-0.5">
                              {app.roundSubmissions.map((s, idx) => (
                                <div
                                  key={idx}
                                  className={`w-2 h-2 rounded-full ${s.status === "COMPLETED" ? "bg-emerald-500" : "bg-gray-200 dark:bg-gray-700"}`}
                                />
                              ))}
                            </div>
                            {app.roundSubmissions.filter((s) => s.status === "COMPLETED").length}/{app.roundSubmissions.length} rounds
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-2">
                        {app.status !== "WITHDRAWN" && app.status !== "REJECTED" && app.status !== "HIRED" && (
                          <button onClick={() => handleWithdraw(app.id)}
                            className="text-xs px-3 py-1.5 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors">
                            Withdraw
                          </button>
                        )}
                        <Link to={`/student/applications/${app.id}`}
                          className="inline-flex items-center gap-1 text-xs px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors no-underline font-medium">
                          View <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}

function getStatusColor(status: string) {
  switch (status) {
    case "APPLIED": return "bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400";
    case "IN_PROGRESS": return "bg-amber-50 text-amber-700 dark:bg-amber-900/20 dark:text-amber-400";
    case "SHORTLISTED": return "bg-emerald-50 text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-400";
    case "REJECTED": return "bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-400";
    case "HIRED": return "bg-indigo-50 text-indigo-700 dark:bg-indigo-900/20 dark:text-indigo-400";
    case "WITHDRAWN": return "bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-400";
    default: return "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300";
  }
}

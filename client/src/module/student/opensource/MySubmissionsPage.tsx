import { useState, useMemo } from "react";
import { Link } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { ExternalLink, CheckCircle2, Clock, XCircle, AlertCircle, ArrowLeft } from "lucide-react";
import api from "../../../lib/axios";
import { Button } from "../../../components/ui/button";

interface RepoRequest {
  id: number;
  url: string;
  title: string;
  description: string;
  reason: string;
  status: "PENDING" | "APPROVED" | "REJECTED";
  adminNote: string | null;
  repoId: number | null;
  createdAt: string;
}

const TABS = [
  { key: "PENDING", label: "Pending", icon: Clock },
  { key: "APPROVED", label: "Approved", icon: CheckCircle2 },
  { key: "REJECTED", label: "Rejected", icon: XCircle },
] as const;

export default function MySubmissionsPage() {
  const [activeTab, setActiveTab] = useState<string>("PENDING");

  const { data, isLoading } = useQuery<RepoRequest[]>({
    queryKey: ["my-repo-requests"],
    queryFn: () => api.get("/opensource/requests/mine").then((r) => r.data),
    staleTime: 30_000,
  });

  const filtered = useMemo(() => {
    return (data ?? []).filter((r) => r.status === activeTab);
  }, [data, activeTab]);

  const counts = useMemo(() => {
    const c: Record<string, number> = { PENDING: 0, APPROVED: 0, REJECTED: 0 };
    for (const r of (data ?? [])) c[r.status]++;
    return c;
  }, [data]);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex items-center gap-3 mb-6">
        <Link to="/student/opensource" className="text-stone-500 hover:text-stone-800 dark:hover:text-stone-200 transition-colors">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <div>
          <h1 className="text-xl font-bold text-stone-900 dark:text-stone-50">My Submissions</h1>
          <p className="text-sm text-stone-500">Track your suggested repos</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 mb-6 bg-stone-100 dark:bg-stone-900 rounded-lg p-1">
        {TABS.map(({ key, label, icon: Icon }) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={`flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-md transition-colors border-0 cursor-pointer ${
              activeTab === key
                ? "bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100 shadow-sm"
                : "text-stone-500 hover:text-stone-800 dark:hover:text-stone-200"
            }`}
          >
            <Icon className="w-3.5 h-3.5" />
            {label}
            {counts[key] > 0 && (
              <span className="ml-1 text-[10px] font-mono bg-stone-200 dark:bg-stone-700 px-1.5 py-0.5 rounded-full">
                {counts[key]}
              </span>
            )}
          </button>
        ))}
      </div>

      {isLoading ? (
        <div className="space-y-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-24 bg-stone-100 dark:bg-stone-900 rounded-lg animate-pulse" />
          ))}
        </div>
      ) : filtered.length === 0 ? (
        <div className="text-center py-16">
          <AlertCircle className="w-10 h-10 text-stone-300 mx-auto mb-3" />
          <p className="text-sm text-stone-500 font-medium">No {activeTab.toLowerCase()} submissions</p>
          <Button asChild variant="outline" size="sm" className="mt-4">
            <Link to="/student/opensource">Suggest a repo</Link>
          </Button>
        </div>
      ) : (
        <div className="space-y-3">
          {filtered.map((req) => (
            <motion.div
              key={req.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-lg p-4"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0 flex-1">
                  <h3 className="text-sm font-bold text-stone-900 dark:text-stone-50 truncate">
                    {req.title || req.url}
                  </h3>
                  <p className="text-xs text-stone-500 mt-0.5 truncate">{req.url}</p>
                  {req.description && (
                    <p className="text-xs text-stone-600 dark:text-stone-400 mt-1 line-clamp-2">{req.description}</p>
                  )}
                  <div className="flex items-center gap-3 mt-2">
                    <span className="text-[10px] font-mono text-stone-400">
                      {new Date(req.createdAt).toLocaleDateString()}
                    </span>
                    {req.status === "APPROVED" && req.repoId && (
                      <Link
                        to={`/student/opensource?repo=${req.repoId}`}
                        className="text-[10px] font-mono text-emerald-600 hover:text-emerald-700 inline-flex items-center gap-1"
                      >
                        <ExternalLink className="w-3 h-3" />
                        View repo
                      </Link>
                    )}
                  </div>
                </div>
                <div className="shrink-0">
                  {req.status === "APPROVED" && (
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 dark:bg-emerald-900/30 dark:text-emerald-400 px-2 py-1 rounded-full">
                      <CheckCircle2 className="w-3 h-3" />
                      Approved
                    </span>
                  )}
                  {req.status === "PENDING" && (
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold text-amber-700 bg-amber-50 dark:bg-amber-900/30 dark:text-amber-400 px-2 py-1 rounded-full">
                      <Clock className="w-3 h-3" />
                      Pending
                    </span>
                  )}
                  {req.status === "REJECTED" && (
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold text-red-700 bg-red-50 dark:bg-red-900/30 dark:text-red-400 px-2 py-1 rounded-full">
                      <XCircle className="w-3 h-3" />
                      Rejected
                    </span>
                  )}
                </div>
              </div>
              {req.adminNote && (
                <div className="mt-2 pt-2 border-t border-stone-100 dark:border-white/5">
                  <p className="text-[11px] text-stone-500">
                    <span className="font-semibold">Admin note:</span> {req.adminNote}
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}

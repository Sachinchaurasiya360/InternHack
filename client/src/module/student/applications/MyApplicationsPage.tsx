
import { Link } from "react-router";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Building2, ArrowUpRight, Clock, Search, ExternalLink, X } from "lucide-react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useState, useMemo, useEffect, useCallback } from "react";
import api from "../../../lib/axios";
import { queryKeys } from "../../../lib/query-keys";
import type { Application } from "../../../lib/types";
import { LoadingScreen } from "../../../components/LoadingScreen";
import { SEO } from "../../../components/SEO";
import toast from "@/components/ui/toast";
interface ExternalApplication {
  id: number;
  studentId: number;
  adminJobId: number;
  createdAt: string;
  adminJob: {
    id: number;
    slug: string | null;
    company: string | null;
    role: string | null;
    location: string | null;
    salary: string | null;
    tags: string[];
    applyLink: string | null;
  };
}

function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-stone-500">
      <span className="h-1.5 w-1.5 bg-lime-400" />
      {children}
    </div>
  );
}

function CompanyMark({ label }: { label: string }) {
  return (
    <div className="w-10 h-10 rounded-md bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-white/10 flex items-center justify-center shrink-0 text-stone-900 dark:text-stone-50 text-sm font-bold">
      {label?.charAt(0)?.toUpperCase() || "?"}
    </div>
  );
}

function statusClass(status: string) {
  switch (status) {
    case "APPLIED":
      return "text-stone-900 dark:text-stone-50 border-stone-300 dark:border-white/20";
    case "IN_PROGRESS":
      return "text-amber-700 dark:text-amber-400 border-amber-300 dark:border-amber-900/60";
    case "SHORTLISTED":
      return "text-lime-700 dark:text-lime-400 border-lime-400";
    case "HIRED":
      return "text-lime-700 dark:text-lime-400 border-lime-400 bg-lime-50 dark:bg-lime-950/40";
    case "REJECTED":
      return "text-red-600 dark:text-red-400 border-red-300 dark:border-red-900/60";
    case "WITHDRAWN":
      return "text-stone-400 border-stone-200 dark:border-white/10";
    default:
      return "text-stone-500 border-stone-200 dark:border-white/10";
  }
}

const ApplicationCard = React.memo(function ApplicationCard({
  app,
  onWithdraw,
}: {
  app: Application;
  onWithdraw: (id: number) => void;
}) {
  const completed = app.roundSubmissions?.filter((s) => s.status === "COMPLETED").length ?? 0;
  const totalRounds = app.roundSubmissions?.length ?? 0;

  return (
    <div className="group relative flex flex-col bg-white dark:bg-stone-900 p-5 rounded-md border border-stone-200 dark:border-white/10 hover:border-stone-400 dark:hover:border-white/30 transition-colors">
      <div className="flex items-start gap-4">
        <CompanyMark label={app.job?.company || "?"} />
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <Link to={`/student/applications/${app.id}`} className="no-underline">
                <h3 className="text-base font-bold tracking-tight text-stone-900 dark:text-stone-50 truncate leading-tight hover:text-lime-600 dark:hover:text-lime-400 transition-colors">
                  {app.job?.title}
                </h3>
              </Link>
              <div className="flex items-center gap-x-3 gap-y-1 mt-1 text-xs text-stone-500 flex-wrap">
                <span className="flex items-center gap-1 truncate">
                  <Building2 className="w-3 h-3 shrink-0" />
                  {app.job?.company}
                </span>
                <span className="flex items-center gap-1 truncate">
                  <MapPin className="w-3 h-3 shrink-0" />
                  {app.job?.location}
                </span>
              </div>
            </div>
            <span
              className={`inline-flex shrink-0 px-2 py-0.5 text-[10px] font-mono uppercase tracking-widest border rounded-md ${statusClass(app.status)}`}
            >
              {app.status.replace("_", " ")}
            </span>
          </div>
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-stone-200 dark:border-white/10 flex items-center justify-between gap-3 flex-wrap">
        <div className="flex items-center gap-x-4 gap-y-1 text-[10px] font-mono uppercase tracking-widest text-stone-500 flex-wrap">
          <span className="flex items-center gap-1.5">
            <Clock className="w-3 h-3" />
            Applied{" "}
            {new Date(app.createdAt).toLocaleDateString("en-IN", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </span>
          {totalRounds > 0 && (
            <span className="flex items-center gap-1.5">
              <span className="flex gap-0.5">
                {app.roundSubmissions!.map((s, idx) => (
                  <span
                    key={idx}
                    className={`h-1.5 w-3 ${s.status === "COMPLETED" ? "bg-lime-400" : "bg-stone-200 dark:bg-stone-700"}`}
                  />
                ))}
              </span>
              {completed}/{totalRounds} rounds
            </span>
          )}
        </div>

        <div className="flex items-center gap-2">
          {app.status !== "WITHDRAWN" && app.status !== "REJECTED" && app.status !== "HIRED" && (
            <button
              onClick={() => onWithdraw(app.id)}
              className="text-[10px] font-mono uppercase tracking-widest text-stone-500 hover:text-red-500 transition-colors bg-transparent border-0 cursor-pointer px-2 py-1"
            >
              Withdraw
            </button>
          )}
          <Link
            to={`/student/applications/${app.id}`}
            className="inline-flex items-center gap-1 text-[10px] font-mono uppercase tracking-widest text-stone-900 dark:text-stone-50 hover:text-lime-600 dark:hover:text-lime-400 no-underline transition-colors"
          >
            View <ArrowUpRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </div>
  );
});

const ExternalApplicationCard = React.memo(function ExternalApplicationCard({
  app,
}: {
  app: ExternalApplication;
}) {
  return (
    <div className="group relative flex flex-col bg-white dark:bg-stone-900 p-5 rounded-md border border-stone-200 dark:border-white/10 hover:border-stone-400 dark:hover:border-white/30 transition-colors">
      <span className="absolute top-4 right-4 text-[10px] font-mono uppercase tracking-widest text-stone-500 inline-flex items-center gap-1.5">
        <span className="h-1 w-1 bg-lime-400" />
        external
      </span>
      <div className="flex items-start gap-4 pr-16">
        <CompanyMark label={app.adminJob.company || "?"} />
        <div className="flex-1 min-w-0">
          <Link
            to={app.adminJob.slug ? `/jobs/ext/${app.adminJob.slug}` : "#"}
            className="no-underline"
          >
            <h3 className="text-base font-bold tracking-tight text-stone-900 dark:text-stone-50 truncate leading-tight hover:text-lime-600 dark:hover:text-lime-400 transition-colors">
              {app.adminJob.role || "Open Role"}
            </h3>
          </Link>
          <div className="flex items-center gap-x-3 gap-y-1 mt-1 text-xs text-stone-500 flex-wrap">
            <span className="flex items-center gap-1 truncate">
              <Building2 className="w-3 h-3 shrink-0" />
              {app.adminJob.company || "Company"}
            </span>
            {app.adminJob.location && (
              <span className="flex items-center gap-1 truncate">
                <MapPin className="w-3 h-3 shrink-0" />
                {app.adminJob.location}
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-stone-200 dark:border-white/10 flex items-center justify-between gap-3 flex-wrap">
        <span className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-stone-500">
          <Clock className="w-3 h-3" />
          Applied{" "}
          {new Date(app.createdAt).toLocaleDateString("en-IN", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        </span>
        {app.adminJob.applyLink && (
          <a
            href={app.adminJob.applyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[10px] font-mono uppercase tracking-widest text-stone-900 dark:text-stone-50 hover:text-lime-600 dark:hover:text-lime-400 no-underline transition-colors"
          >
            View posting <ExternalLink className="w-3 h-3" />
          </a>
        )}
      </div>
    </div>
  );
});

const PAGE_SIZE = 10;
function WithdrawModal({
  open,
  onCancel,
  onConfirm,
}: {
  open: boolean;
  onCancel: () => void;
  onConfirm: () => void;
}) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md p-6 max-w-sm w-full mx-4 space-y-4">
        <h3 className="text-base font-bold text-stone-900 dark:text-stone-50">
          Withdraw Application?
        </h3>
        <p className="text-sm text-stone-500">
          Are you sure you want to withdraw this application? This action cannot be undone.
        </p>
        <div className="flex gap-3">
          <button
            onClick={onCancel}
            className="flex-1 px-4 py-2 rounded-md text-xs font-mono uppercase tracking-widest text-stone-600 dark:text-stone-400 border border-stone-200 dark:border-white/10 hover:border-stone-400 transition-colors bg-transparent cursor-pointer"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 px-4 py-2 rounded-md text-xs font-mono uppercase tracking-widest text-white bg-red-500 hover:bg-red-600 transition-colors cursor-pointer border-0"
          >
            Withdraw
          </button>
        </div>
      </div>
    </div>
  );
}



export default function MyApplicationsPage() {
  const queryClient = useQueryClient();
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
   const [page, setPage] = useState(1);
  const [withdrawId, setWithdrawId] = useState<number | null>(null);
  const [showWithdrawModal, setShowWithdrawModal] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDebouncedSearch(search), 200);
    return () => clearTimeout(t);
  }, [search]);

  useEffect(() => {
    setPage(1);
  }, [debouncedSearch]);

  const { data, isLoading } = useQuery({
    queryKey: queryKeys.applications.mine(),
    queryFn: () =>
      api.get("/student/applications").then(
        (res) => res.data as { applications: Application[]; externalApplications: ExternalApplication[] }
      ),
  });

  const applications = data?.applications ?? [];
  const externalApplications = data?.externalApplications ?? [];

  const filtered = useMemo(() => {
    if (!debouncedSearch.trim()) return applications;
    const q = debouncedSearch.toLowerCase();
    return applications.filter(
      (a) => a.job?.title?.toLowerCase().includes(q) || a.job?.company?.toLowerCase().includes(q)
    );
  }, [applications, debouncedSearch]);

  const filteredExternal = useMemo(() => {
    if (!debouncedSearch.trim()) return externalApplications;
    const q = debouncedSearch.toLowerCase();
    return externalApplications.filter(
      (a) =>
        a.adminJob.role?.toLowerCase().includes(q) ||
        a.adminJob.company?.toLowerCase().includes(q)
    );
  }, [externalApplications, debouncedSearch]);

  const totalAll = applications.length + externalApplications.length;

  const handleWithdraw = useCallback(
    async (id: number) => {
      setWithdrawId(id);
      setShowWithdrawModal(true);
    },
    []
  );

  const confirmWithdraw = useCallback(async () => {
  if (!withdrawId) return;
  const idToWithdraw = withdrawId;
  setShowWithdrawModal(false);
  setWithdrawId(null);
  try {
    await api.delete(`/student/applications/${idToWithdraw}`);
    queryClient.setQueryData<{
      applications: Application[];
      externalApplications: ExternalApplication[];
    }>(queryKeys.applications.mine(), (old) => {
      if (!old) return old;
      return {
        ...old,
        applications: old.applications.map((a) =>
          a.id === idToWithdraw ? { ...a, status: "WITHDRAWN" as const } : a
        ),
      };
    });
    toast.success("Application withdrawn successfully");
  } catch {
    toast.error("Failed to withdraw application");
  }
}, [withdrawId, queryClient]);
  if (isLoading) return <LoadingScreen />;

 

  const hasSearch = search.trim().length > 0;

  return (
    <div className="relative pb-16">
      <SEO title="My Applications" noIndex />
      <WithdrawModal
        open={showWithdrawModal}
        onCancel={() => setShowWithdrawModal(false)}
        onConfirm={confirmWithdraw}
      />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10 flex flex-wrap items-end justify-between gap-4 border-b border-stone-200 dark:border-white/10 pb-8"
      >
        <div>
          <Kicker>work / applications</Kicker>
          <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight text-stone-900 dark:text-stone-50 leading-none">
            Track your{" "}
            <span className="relative inline-block">
              <span className="relative z-10">pipeline.</span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
                aria-hidden
                className="absolute bottom-1 left-0 right-0 h-3 md:h-4 bg-lime-400 origin-left z-0"
              />
            </span>
          </h1>
          <p className="mt-3 text-sm text-stone-500 max-w-md">
            Every application you have submitted, internal and external, in one place.
          </p>
        </div>
        {totalAll > 0 && (
          <div className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
            total{" "}
            <span className="text-stone-900 dark:text-stone-50 text-sm font-bold tabular-nums ml-1">
              {totalAll}
            </span>
          </div>
        )}
      </motion.div>

      {/* Search */}
      <div className="mb-5 relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by job title or company..."
          className="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md text-sm text-stone-900 dark:text-stone-50 placeholder:text-stone-400 focus:outline-none focus:border-lime-400 dark:focus:border-lime-400 transition-colors"
        />
      </div>

      {hasSearch && (
        <div className="mb-6">
          <button
            onClick={() => setSearch("")}
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md text-xs font-mono uppercase tracking-widest text-stone-500 hover:text-red-500 transition-colors border-0 bg-transparent cursor-pointer"
          >
            <X className="w-3 h-3" /> clear search
          </button>
        </div>
      )}

      {/* List */}
      {totalAll === 0 ? (
        <div className="text-center py-20 bg-white dark:bg-stone-900 rounded-md border border-stone-200 dark:border-white/10">
          <div className="w-16 h-16 rounded-md bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-white/10 flex items-center justify-center mx-auto mb-4">
            <Briefcase className="w-7 h-7 text-stone-500" />
          </div>
          <h3 className="text-lg font-bold text-stone-900 dark:text-stone-50 mb-2">
            No applications yet.
          </h3>
          <p className="text-sm text-stone-500 mb-6 max-w-sm mx-auto">
            Start exploring jobs and submit your first application to see it tracked here.
          </p>
          <Link
            to="/student/jobs"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-lime-400 hover:bg-lime-500 text-stone-900 rounded-md text-sm font-semibold no-underline transition-colors"
          >
            Browse jobs <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      ) : filtered.length === 0 && filteredExternal.length === 0 ? (
        <div className="text-center py-16 bg-white dark:bg-stone-900 rounded-md border border-stone-200 dark:border-white/10">
          <Search className="w-8 h-8 text-stone-400 mx-auto mb-3" />
          <p className="text-sm text-stone-500">No applications match your search.</p>
          <button
            onClick={() => setSearch("")}
            className="mt-3 text-[10px] font-mono uppercase tracking-widest text-stone-900 dark:text-stone-50 hover:text-lime-600 dark:hover:text-lime-400 bg-transparent border-0 cursor-pointer"
          >
            Clear search
          </button>
        </div>
      ) : (
        (() => {
          const combined: Array<
            | { kind: "internal"; app: Application }
            | { kind: "external"; app: ExternalApplication }
          > = [
            ...filtered.map((app) => ({ kind: "internal" as const, app })),
            ...filteredExternal.map((app) => ({ kind: "external" as const, app })),
          ];
          const totalResults = combined.length;
          const totalPages = Math.max(1, Math.ceil(totalResults / PAGE_SIZE));
          const safePage = Math.min(page, totalPages);
          const start = (safePage - 1) * PAGE_SIZE;
          const pageItems = combined.slice(start, start + PAGE_SIZE);

          return (
            <>
              <div className="space-y-3">
                {pageItems.map((item, i) => (
                  <motion.div
                    key={item.kind === "internal" ? item.app.id : `ext-${item.app.id}`}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.03, duration: 0.25 }}
                  >
                    {item.kind === "internal" ? (
                      <ApplicationCard app={item.app} onWithdraw={handleWithdraw} />
                    ) : (
                      <ExternalApplicationCard app={item.app} />
                    )}
                  </motion.div>
                ))}
              </div>

              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-3 mt-10">
                  <button
                    disabled={safePage === 1}
                    onClick={() => setPage((p) => Math.max(1, p - 1))}
                    className="px-4 py-2 rounded-md text-xs font-mono uppercase tracking-widest text-stone-600 dark:text-stone-400 border border-stone-200 dark:border-white/10 hover:border-stone-400 dark:hover:border-white/30 hover:text-stone-900 dark:hover:text-stone-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors bg-transparent cursor-pointer"
                  >
                    Prev
                  </button>
                  <span className="text-xs font-mono uppercase tracking-widest text-stone-500">
                    {safePage} / {totalPages}
                  </span>
                  <button
                    disabled={safePage >= totalPages}
                    onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                    className="px-4 py-2 rounded-md text-xs font-mono uppercase tracking-widest text-stone-600 dark:text-stone-400 border border-stone-200 dark:border-white/10 hover:border-stone-400 dark:hover:border-white/30 hover:text-stone-900 dark:hover:text-stone-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors bg-transparent cursor-pointer"
                  >
                    Next
                  </button>
                </div>
              )}
            </>
          );
        })()
      )}
    </div>
  );
}

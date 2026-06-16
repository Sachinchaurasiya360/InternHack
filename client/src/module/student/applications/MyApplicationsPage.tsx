import { formatDate } from "../../../lib/date-utils";
import { FilterChip } from "../../../components/ui/FilterChip";
import DailyInterviewTipWidget from "./DailyInterviewTipWidget";
import { BadgeProgressWidget } from "../opensource/components/BadgeProgressWidget";
import { Link } from "react-router";
import { useClearFilters } from "../../../hooks/useClearFilters";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Building2, ArrowUpRight, Clock, Search, ExternalLink, X, Trash2 } from "lucide-react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useState, useMemo, useEffect, useCallback } from "react";
import { useSearchWithDebounce } from "../../../hooks/useSearchWithDebounce";
import api from "../../../lib/axios";
import { getStatusBorderColor } from "../../../lib/application-colors";
import { queryKeys } from "../../../lib/query-keys";
import type { Application, ExternalApplication } from "../../../lib/types";
import { LoadingScreen } from "../../../components/LoadingScreen";
import { SEO } from "../../../components/SEO";
import { ConfirmDialog } from "../../../components/ui/ConfirmDialog";
import { EmptyState } from "../../../components/ui/EmptyState";
import { ApplicationNotes } from "./ApplicationNotes";
import toast from "@/components/ui/toast";
import type { PendingDelete } from "@/lib/types/actions.types";

function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-stone-500">
      <span className="h-1.5 w-1.5 bg-lime-400" />
      {children}
    </div>
  );
}

import { CompanyMark } from "../../../components/ui/CompanyMark";


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
        <CompanyMark name={app.job?.company || "?"} />
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
              className={`inline-flex shrink-0 px-2 py-0.5 text-[10px] font-mono uppercase tracking-widest border rounded-md ${getStatusBorderColor(app.status)}`}
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
            {formatDate(app.createdAt)}
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

      <ApplicationNotes
        applicationId={app.id}
        kind="internal"
        notes={app.studentNotes}
      />
    </div>
  );
});

const ExternalApplicationCard = React.memo(function ExternalApplicationCard({
  app,
  onRemove,
}: {
  app: ExternalApplication;
  onRemove: (id: number) => void;
}) {
  return (
    <div className="group relative flex flex-col bg-white dark:bg-stone-900 p-5 rounded-md border border-stone-200 dark:border-white/10 hover:border-stone-400 dark:hover:border-white/30 transition-colors">
      <span className="absolute top-4 right-4 text-[10px] font-mono uppercase tracking-widest text-stone-500 inline-flex items-center gap-1.5">
        <span className="h-1 w-1 bg-lime-400" />
        external
      </span>
      <div className="flex items-start gap-4 pr-16">
        <CompanyMark name={app.adminJob.company || "?"} />
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
          {formatDate(app.createdAt)}
        </span>
        <div className="flex items-center gap-2">
          <button
            onClick={() => onRemove(app.id)}
            className="inline-flex items-center gap-1 text-[10px] font-mono uppercase tracking-widest text-stone-500 hover:text-red-500 transition-colors bg-transparent border-0 cursor-pointer px-2 py-1"
          >
            <Trash2 className="w-3 h-3" /> Remove
          </button>
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

      <ApplicationNotes
        applicationId={app.id}
        kind="external"
        notes={app.studentNotes}
      />
    </div>
  );
});

const PAGE_SIZE = 10;
const STATUS_ORDER: Record<string, number> = {
  APPLIED: 0,
  IN_PROGRESS: 1,
  SHORTLISTED: 2,
  HIRED: 3,
  REJECTED: 4,
  WITHDRAWN: 5,
};

const STATUS_TABS = ["ALL", "APPLIED", "IN_PROGRESS", "SHORTLISTED", "HIRED", "REJECTED", "WITHDRAWN"] as const;
type StatusFilter = typeof STATUS_TABS[number];

function sortApplications(
  apps: Application[],
  option: "newest" | "oldest" | "company" | "status"
): Application[] {
  return [...apps].sort((a, b) => {
    if (option === "newest") return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    if (option === "oldest") return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
    if (option === "company") return (a.job?.company ?? "").localeCompare(b.job?.company ?? "");
    if (option === "status") return (STATUS_ORDER[a.status] ?? 99) - (STATUS_ORDER[b.status] ?? 99);
    return 0;
  });
}


export default function MyApplicationsPage() {
  const queryClient = useQueryClient();
  const { inputValue: search, setInputValue: setSearch, debouncedValue: debouncedSearch } =
    useSearchWithDebounce({ delay: 200 });
  const [page, setPage] = useState(1);
  const [pendingDelete, setPendingDelete] = useState<PendingDelete>(null);
  const [sortOption, setSortOption] = useState<"newest" | "oldest" | "company" | "status">("newest");
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("ALL");

  const clearFilters = useClearFilters([
    () => setSearch(""),
    () => setStatusFilter("ALL"),
    () => setPage(1),
  ]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- reset to first page when filters change
    setPage(1);
  }, [debouncedSearch, statusFilter]);

  const { data, isLoading } = useQuery({
    queryKey: queryKeys.applications.mine(),
    queryFn: () =>
      api.get("/student/applications").then(
        (res) => res.data as { applications: Application[]; externalApplications: ExternalApplication[] }
      ),
    staleTime: 2 * 60 * 1000,
  });

  const applications = useMemo(() => data?.applications ?? [], [data]);
  const externalApplications = useMemo(() => data?.externalApplications ?? [], [data]);

  const filtered = useMemo(() => {
    let base = !debouncedSearch.trim()
      ? applications
      : applications.filter(
        (a) => a.job?.title?.toLowerCase().includes(debouncedSearch.toLowerCase()) || a.job?.company?.toLowerCase().includes(debouncedSearch.toLowerCase())
      );

    if (statusFilter !== "ALL") {
      base = base.filter(a => a.status === statusFilter);
    }

    return sortApplications(base, sortOption);
  }, [applications, debouncedSearch, sortOption, statusFilter]);

  const filteredExternal = useMemo(() => {
    const base = !debouncedSearch.trim()
      ? externalApplications
      : externalApplications.filter(
        (a) =>
          a.adminJob.role?.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
          a.adminJob.company?.toLowerCase().includes(debouncedSearch.toLowerCase())
      );

    return [...base].sort((a, b) => {
      if (sortOption === "newest") return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      if (sortOption === "oldest") return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
      if (sortOption === "company") return (a.adminJob.company ?? "").localeCompare(b.adminJob.company ?? "");
      return 0;
    });
  }, [externalApplications, debouncedSearch, sortOption]);

  const totalAll = applications.length + externalApplications.length;
  const totalFiltered = filtered.length + filteredExternal.length;

  const deleteMutation = useMutation({
    mutationFn: async (item: NonNullable<PendingDelete>) => {
      if (item.kind === "internal") {
        await api.delete(`/student/applications/${item.id}`);
      } else {
        await api.delete(`/student/external-applications/${item.id}`);
      }
      return item;
    },
    onSuccess: (item) => {
      if (item.kind === "internal") {
        queryClient.setQueryData<{
          applications: Application[];
          externalApplications: ExternalApplication[];
        }>(queryKeys.applications.mine(), (old) => {
          if (!old) return old;
          return {
            ...old,
            applications: old.applications.map((a) =>
              a.id === item.id ? { ...a, status: "WITHDRAWN" as const } : a
            ),
          };
        });
        toast.success("Application withdrawn successfully");
      } else {
        queryClient.setQueryData<{
          applications: Application[];
          externalApplications: ExternalApplication[];
        }>(queryKeys.applications.mine(), (old) => {
          if (!old) return old;
          return {
            ...old,
            externalApplications: old.externalApplications.filter((a) => a.id !== item.id),
          };
        });
        toast.success("Application removed");
      }
      queryClient.invalidateQueries({ queryKey: queryKeys.applications.mine() });
    },
    onError: (_err, item) => {
      toast.error(
        item.kind === "internal"
          ? "Failed to withdraw application"
          : "Failed to remove application"
      );
    },
  });

  const handleWithdraw = useCallback((id: number) => {
    setPendingDelete({ kind: "internal", id });
  }, []);

  const handleRemoveExternal = useCallback((id: number) => {
    setPendingDelete({ kind: "external", id });
  }, []);

  const confirmDelete = useCallback(() => {
    if (!pendingDelete) return;
    const item = pendingDelete;
    setPendingDelete(null);
    deleteMutation.mutate(item);
  }, [pendingDelete, deleteMutation]);

  const cancelDelete = useCallback(() => setPendingDelete(null), []);

  const isInternalDelete = pendingDelete?.kind === "internal";
  const confirmTitle = isInternalDelete
    ? "Withdraw application?"
    : "Remove tracked application?";
  const confirmDescription = isInternalDelete
    ? "The recruiter will see this change. This action cannot be undone."
    : "This only removes it from your list. The job posting won't be affected.";
  const confirmLabel = isInternalDelete ? "Withdraw" : "Remove";

  if (isLoading) return <LoadingScreen />;

  const hasSearch = search.trim().length > 0;
  const isFiltered = hasSearch || statusFilter !== "ALL";

  return (
    <div className="relative pb-16">
      <SEO title="My Applications" noIndex />
      <ConfirmDialog
        open={pendingDelete !== null}
        title={confirmTitle}
        description={confirmDescription}
        confirmLabel={confirmLabel}
        cancelLabel="Cancel"
        onConfirm={confirmDelete}
        onCancel={cancelDelete}
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
            {isFiltered ? "showing" : "total"}{" "}
            <span className="text-stone-900 dark:text-stone-50 text-sm font-bold tabular-nums ml-1">
              {isFiltered ? totalFiltered : totalAll}
            </span>
            {isFiltered && (
              <span className="ml-1">of {totalAll}</span>
            )}
          </div>
        )}
      </motion.div>

      {/* Status Filter Tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {STATUS_TABS.map((tab) => (
          <FilterChip
            key={tab}
            label={tab.replace("_", " ")}
            active={statusFilter === tab}
            onClick={() => { setStatusFilter(tab); setPage(1); }}
          />
        ))}
      </div>

      {/* Sort */}
      <div className="mb-4 flex items-center gap-2">
        <label htmlFor="sort" className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
          Sort by
        </label>
        <select
          id="sort"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value as typeof sortOption)}
          className="text-xs font-mono bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md px-2 py-1.5 text-stone-900 dark:text-stone-50 focus:outline-none focus:border-lime-400 transition-colors cursor-pointer"
        >
          <option value="newest">Newest first</option>
          <option value="oldest">Oldest first</option>
          <option value="company">Company A–Z</option>
          <option value="status">Status</option>
        </select>
      </div>

      {/* Search */}

      
      <div className="mb-6">
        <BadgeProgressWidget />
      </div>
      

      <DailyInterviewTipWidget />
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

      {isFiltered && (
        <div className="mb-6">
          <button
            onClick={clearFilters}
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md text-xs font-mono uppercase tracking-widest text-stone-500 hover:text-red-500 transition-colors border-0 bg-transparent cursor-pointer"
          >
            <X className="w-3 h-3" /> clear all filters
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
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
          <EmptyState
            icon={<Search className="w-6 h-6 text-stone-400 dark:text-stone-600" />}
            title="No applications match your current filters"
            action={
              <button
                type="button"
                onClick={clearFilters}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md text-xs font-bold bg-stone-900 dark:bg-stone-50 text-stone-50 dark:text-stone-900 hover:bg-stone-800 dark:hover:bg-stone-200 transition-colors border-0 cursor-pointer mt-2"
              >
                Clear all filters
              </button>
            }
          />
        </motion.div>
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
                      <ExternalApplicationCard app={item.app} onRemove={handleRemoveExternal} />
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
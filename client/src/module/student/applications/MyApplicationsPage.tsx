import { formatDate } from "../../../lib/date-utils";
import { Link } from "react-router";
import { useClearFilters } from "../../../hooks/useClearFilters";
import { motion } from "framer-motion";
import {
  Briefcase,
  MapPin,
  Building2,
  ArrowUpRight,
  Clock,
  Search,
  ExternalLink,
  X,
  Trash2,
  PlugZap,
  Download,
  Loader2,
} from "lucide-react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useState, useMemo, useEffect, useCallback } from "react";
import { useSearchWithDebounce } from "../../../hooks/useSearchWithDebounce";
import api, { API_BASE } from "../../../lib/axios";
import { queryKeys } from "../../../lib/query-keys";
import type {
  ApplicationTrackerStats,
  TrackedApplication,
  TrackedApplicationStatus,
} from "../../../lib/types";
import { LoadingScreen } from "../../../components/LoadingScreen";
import { SEO } from "../../../components/SEO";
import { Button } from "../../../components/ui/button";
import { ConfirmDialog } from "../../../components/ui/ConfirmDialog";
import { EmptyState } from "../../../components/ui/EmptyState";
import { CompanyMark } from "../../../components/ui/CompanyMark";
import { ApplicationNotes } from "./ApplicationNotes";
import toast from "@/components/ui/toast";

type TrackerCache = { applications: TrackedApplication[] };

const STATUS_LABELS: Record<TrackedApplicationStatus, string> = {
  SAVED: "Saved",
  APPLIED: "Applied",
  OA: "Assessment",
  PHONE_SCREEN: "Phone screen",
  INTERVIEW: "Interview",
  OFFER: "Offer",
  REJECTED: "Rejected",
  WITHDRAWN: "Withdrawn",
  GHOSTED: "Ghosted",
};

const STATUS_ORDER: TrackedApplicationStatus[] = [
  "SAVED",
  "APPLIED",
  "OA",
  "PHONE_SCREEN",
  "INTERVIEW",
  "OFFER",
  "REJECTED",
  "WITHDRAWN",
  "GHOSTED",
];

function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-stone-500">
      <span className="h-1.5 w-1.5 bg-lime-400" />
      {children}
    </div>
  );
}

function StatItem({ label, value }: { label: string; value: string | number }) {
  return (
    <div>
      <p className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
        {label}
      </p>
      <p className="mt-1 text-xl font-bold tabular-nums text-stone-900 dark:text-stone-50">
        {value}
      </p>
    </div>
  );
}

function StatusTag({ status }: { status: TrackedApplicationStatus }) {
  const isOffer = status === "OFFER";
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-[10px] font-mono uppercase tracking-widest ${
        isOffer
          ? "bg-lime-400 text-stone-900"
          : "bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300"
      }`}
    >
      <span className={`h-1 w-1 ${isOffer ? "bg-stone-900" : "bg-lime-400"}`} />
      {STATUS_LABELS[status]}
    </span>
  );
}

function RoleTitle({ app }: { app: TrackedApplication }) {
  const title = app.role || "Open Role";
  const className =
    "text-base font-bold tracking-tight text-stone-900 dark:text-stone-50 truncate leading-tight hover:text-lime-600 dark:hover:text-lime-400 transition-colors";
  if (!app.jobUrl) {
    return <h3 className={className}>{title}</h3>;
  }
  if (app.jobUrl.startsWith("/")) {
    return (
      <Link to={app.jobUrl} className="no-underline">
        <h3 className={className}>{title}</h3>
      </Link>
    );
  }
  return (
    <a href={app.jobUrl} target="_blank" rel="noopener noreferrer" className="no-underline">
      <h3 className={className}>{title}</h3>
    </a>
  );
}

const ApplicationCard = React.memo(function ApplicationCard({
  app,
  onRemove,
}: {
  app: TrackedApplication;
  onRemove: (app: TrackedApplication) => void;
}) {
  const appliedAt = app.appliedAt ?? app.createdAt;
  return (
    <div className="group relative flex flex-col h-full bg-white dark:bg-stone-900 p-5 rounded-md border border-stone-200 dark:border-white/10 hover:border-stone-400 dark:hover:border-white/30 transition-colors">
      <div className="flex items-start gap-3">
        <CompanyMark name={app.company || "?"} />
        <div className="flex-1 min-w-0">
          <RoleTitle app={app} />
          <div className="flex items-center gap-x-3 gap-y-1 mt-1 text-xs text-stone-500 flex-wrap">
            <span className="flex items-center gap-1 truncate">
              <Building2 className="w-3 h-3 shrink-0" />
              {app.company || "Company"}
            </span>
            {app.location && (
              <span className="flex items-center gap-1 truncate">
                <MapPin className="w-3 h-3 shrink-0" />
                {app.location}
              </span>
            )}
          </div>
        </div>
        <div className="shrink-0">
          <StatusTag status={app.status} />
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-stone-200 dark:border-white/10 flex items-center justify-between gap-3 flex-wrap">
        <span className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-stone-500">
          <Clock className="w-3 h-3" />
          {app.status === "SAVED" ? "Saved" : "Applied"} {formatDate(appliedAt)}
        </span>
        <div className="flex items-center gap-2">
          <button
            onClick={() => onRemove(app)}
            className="inline-flex items-center gap-1 text-[10px] font-mono uppercase tracking-widest text-stone-500 hover:text-red-500 transition-colors bg-transparent border-0 cursor-pointer px-2 py-1"
          >
            <Trash2 className="w-3 h-3" /> Remove
          </button>
          {app.applicationUrl && (
            <a
              href={app.applicationUrl}
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
        id={app.id}
        recordType={app.recordType}
        numericId={app.numericId}
        notes={app.notes}
      />
    </div>
  );
});

const PAGE_SIZE = 10;

export default function MyApplicationsPage() {
  const queryClient = useQueryClient();
  const listKey = queryKeys.applicationTracker.list();
  const { inputValue: search, setInputValue: setSearch, debouncedValue: debouncedSearch } =
    useSearchWithDebounce({ delay: 200 });
  const [page, setPage] = useState(1);
  const [pendingDelete, setPendingDelete] = useState<TrackedApplication | null>(null);
  const [sortOption, setSortOption] = useState<"newest" | "oldest" | "company">("newest");
  const [statusFilter, setStatusFilter] = useState<"ALL" | TrackedApplicationStatus>("ALL");
  const [showExtensionSetup, setShowExtensionSetup] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloaded, setDownloaded] = useState(false);
  const [extLive, setExtLive] = useState(false);
  const [extConnected, setExtConnected] = useState(false);

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
    queryKey: listKey,
    queryFn: () =>
      api.get("/application-tracker").then((res) => res.data as TrackerCache),
    staleTime: 2 * 60 * 1000,
  });

  const { data: stats } = useQuery({
    queryKey: queryKeys.applicationTracker.stats(),
    queryFn: () =>
      api.get("/application-tracker/stats").then((res) => res.data as ApplicationTrackerStats),
    staleTime: 60 * 1000,
    retry: false,
  });

  const applications = useMemo(() => data?.applications ?? [], [data]);

  // Best-effort detection: the extension writes tracked applications with
  // sourceType "EXTENSION", so any such record means it is set up and in use.
  const extensionDetected = useMemo(
    () => applications.some((a) => a.sourceType === "EXTENSION"),
    [applications],
  );

  const filtered = useMemo(() => {
    const query = debouncedSearch.trim().toLowerCase();
    const base = applications.filter((a) => {
      if (statusFilter !== "ALL" && a.status !== statusFilter) return false;
      if (!query) return true;
      return (
        a.role?.toLowerCase().includes(query) ||
        a.company?.toLowerCase().includes(query) ||
        a.location?.toLowerCase().includes(query)
      );
    });

    return [...base].sort((a, b) => {
      if (sortOption === "newest")
        return new Date(b.appliedAt ?? b.createdAt).getTime() - new Date(a.appliedAt ?? a.createdAt).getTime();
      if (sortOption === "oldest")
        return new Date(a.appliedAt ?? a.createdAt).getTime() - new Date(b.appliedAt ?? b.createdAt).getTime();
      if (sortOption === "company")
        return (a.company ?? "").localeCompare(b.company ?? "");
      return 0;
    });
  }, [applications, debouncedSearch, statusFilter, sortOption]);

  const totalAll = applications.length;
  const totalFiltered = filtered.length;
  const extensionAvailable = extLive || extConnected || extensionDetected;

  const deleteMutation = useMutation({
    mutationFn: async (app: TrackedApplication) => {
      if (app.recordType === "LEGACY_EXTERNAL") {
        await api.delete(`/student/external-applications/${app.numericId}`);
      } else {
        await api.delete(`/application-tracker/${app.numericId}`);
      }
      return app.id;
    },
    onSuccess: (removedId) => {
      queryClient.setQueryData<TrackerCache>(listKey, (old) =>
        old
          ? { ...old, applications: old.applications.filter((a) => a.id !== removedId) }
          : old,
      );
      toast.success("Application removed");
      queryClient.invalidateQueries({ queryKey: listKey });
      queryClient.invalidateQueries({ queryKey: queryKeys.applicationTracker.stats() });
    },
    onError: () => {
      toast.error("Failed to remove application");
    },
  });

  // Extension handoff: if the site bridge (content script) is present, hand it a
  // fresh session token so the extension authenticates automatically, no manual
  // token or copy/paste. See extension/src/content/bridge.ts.
  useEffect(() => {
    const WEB_SOURCE = "internhack-web";
    const EXT_SOURCE = "internhack-extension";
    const origin = window.location.origin;
    const post = (message: Record<string, unknown>) =>
      window.postMessage({ source: WEB_SOURCE, ...message }, origin);

    let cancelled = false;
    const handoff = async () => {
      try {
        const res = await api.post("/extension/session");
        if (cancelled) return;
        post({ type: "INTERNHACK_CONNECT", token: res.data.token, apiBase: API_BASE });
      } catch {
        /* not signed in / offline: nothing to hand off */
      }
    };

    const onMessage = (event: MessageEvent) => {
      if (event.source !== window || event.origin !== origin) return;
      const data = event.data as { source?: string; type?: string } | null;
      if (!data || typeof data !== "object" || data.source !== EXT_SOURCE) return;
      if (data.type === "READY") {
        setExtLive(true);
        void handoff();
      } else if (data.type === "CONNECTED") {
        setExtConnected(true);
      }
    };

    window.addEventListener("message", onMessage);
    // Announce; the bridge (if installed) replies READY, which flips extLive.
    // This also covers a bridge that injected before this listener attached.
    post({ type: "WEB_READY" });

    return () => {
      cancelled = true;
      window.removeEventListener("message", onMessage);
    };
  }, []);

  // Fetch the bundle as a blob so we can show a processing state and only
  // reveal the install steps once the download has actually finished.
  const handleDownload = async () => {
    if (isDownloading) return;
    setIsDownloading(true);
    try {
      const res = await fetch("/internhack-extension.zip");
      if (!res.ok) throw new Error("download failed");
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "internhack-extension.zip";
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(url);
      setDownloaded(true);
      toast.success("Extension downloaded");
    } catch {
      toast.error("Failed to download extension");
    } finally {
      setIsDownloading(false);
    }
  };

  const handleRemove = useCallback((app: TrackedApplication) => {
    setPendingDelete(app);
  }, []);

  const confirmDelete = useCallback(() => {
    if (!pendingDelete) return;
    const app = pendingDelete;
    setPendingDelete(null);
    deleteMutation.mutate(app);
  }, [pendingDelete, deleteMutation]);

  const cancelDelete = useCallback(() => setPendingDelete(null), []);

  if (isLoading) return <LoadingScreen />;

  const hasFilters = search.trim().length > 0 || statusFilter !== "ALL";

  return (
    <div className="relative pb-16">
      <SEO title="My Applications" noIndex />
      <ConfirmDialog
        open={pendingDelete !== null}
        title="Remove tracked application?"
        description="This only removes it from your list. The job posting won't be affected."
        confirmLabel="Remove"
        cancelLabel="Cancel"
        onConfirm={confirmDelete}
        onCancel={cancelDelete}
      />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8 flex flex-wrap items-end justify-between gap-4 border-b border-stone-200 dark:border-white/10 pb-8"
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
            Every job you have saved or applied to, from InternHack and the browser extension, in one place.
          </p>
        </div>
        {totalAll > 0 && (
          <div className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
            {hasFilters ? "showing" : "total"}{" "}
            <span className="text-stone-900 dark:text-stone-50 text-sm font-bold tabular-nums ml-1">
              {hasFilters ? totalFiltered : totalAll}
            </span>
            {hasFilters && <span className="ml-1">of {totalAll}</span>}
          </div>
        )}
      </motion.div>

      {/* Stats */}
      <div className="mb-4 flex flex-wrap items-center justify-between gap-4 bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md p-4">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
          <StatItem label="Total" value={stats?.total ?? totalAll} />
          <StatItem label="Applied" value={stats?.applied ?? 0} />
          <StatItem label="Interviews" value={stats?.interviews ?? 0} />
          <StatItem label="Offers" value={stats?.offers ?? 0} />
          <StatItem label="Response" value={`${stats?.responseRate ?? 0}%`} />
        </div>
        <div className="shrink-0">
          {extensionAvailable ? (
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-lime-600 dark:text-lime-400">
                <span className="h-1.5 w-1.5 bg-lime-400" />
                {extConnected ? "Extension connected" : "Extension active"}
              </span>
              {!showExtensionSetup && (
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowExtensionSetup(true)}
                >
                  Set up
                </Button>
              )}
            </div>
          ) : (
            !showExtensionSetup && (
              <Button
                type="button"
                variant="mono"
                size="sm"
                className="gap-1.5"
                onClick={() => setShowExtensionSetup(true)}
              >
                <PlugZap className="w-3.5 h-3.5" />
                Set up extension
              </Button>
            )
          )}
        </div>
      </div>

      {/* Autofill extension setup */}
      {showExtensionSetup && (
        <div className="mb-6 bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md p-4">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div className="min-w-0">
              <Kicker>autofill / extension</Kicker>
              <p className="mt-2 text-sm text-stone-600 dark:text-stone-300 leading-relaxed max-w-xl">
                Autofill applications on Greenhouse, Lever, Ashby, Workday, LinkedIn and Indeed with your InternHack profile.
              </p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="gap-1.5"
                onClick={handleDownload}
                disabled={isDownloading}
              >
                {isDownloading ? (
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                ) : (
                  <Download className="w-3.5 h-3.5" />
                )}
                {isDownloading ? "Downloading..." : "Download extension"}
              </Button>
              <button
                type="button"
                onClick={() => setShowExtensionSetup(false)}
                aria-label="Dismiss extension setup"
                className="p-1.5 rounded-md text-stone-400 hover:text-stone-900 dark:hover:text-stone-50 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors border-0 bg-transparent cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {downloaded && (
            <div className="mt-4 border-t border-stone-200 dark:border-white/10 pt-4">
              <p className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
                Install locally
              </p>
              <ol className="mt-2 space-y-1.5 text-xs text-stone-500 leading-relaxed list-decimal pl-4">
                <li>
                  Unzip{" "}
                  <code className="text-stone-700 dark:text-stone-300">internhack-extension.zip</code>.
                </li>
                <li>
                  Open{" "}
                  <code className="text-stone-700 dark:text-stone-300">chrome://extensions/</code>{" "}
                  in your browser.
                </li>
                <li>Turn on Developer mode (toggle, top-right).</li>
                <li>
                  Click Load unpacked and select the unzipped{" "}
                  <code className="text-stone-700 dark:text-stone-300">internhack-extension</code>{" "}
                  folder.
                </li>
                <li>
                  Open the InternHack Autofill extension. It signs in automatically from
                  your InternHack session, no token needed.
                </li>
              </ol>
            </div>
          )}
        </div>
      )}

      {/* Filters */}
      <div className="mb-4 flex flex-wrap items-center gap-4">
        <div className="flex items-center gap-2">
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
            <option value="company">Company A-Z</option>
          </select>
        </div>
        <div className="flex items-center gap-2">
          <label htmlFor="status" className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
            Status
          </label>
          <select
            id="status"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value as typeof statusFilter)}
            className="text-xs font-mono bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md px-2 py-1.5 text-stone-900 dark:text-stone-50 focus:outline-none focus:border-lime-400 transition-colors cursor-pointer"
          >
            <option value="ALL">All statuses</option>
            {STATUS_ORDER.map((s) => (
              <option key={s} value={s}>
                {STATUS_LABELS[s]}
              </option>
            ))}
          </select>
        </div>
      </div>

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

      {hasFilters && (
        <div className="mb-6">
          <button
            onClick={clearFilters}
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md text-xs font-mono uppercase tracking-widest text-stone-500 hover:text-red-500 transition-colors border-0 bg-transparent cursor-pointer"
          >
            <X className="w-3 h-3" /> clear filters
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
            Apply from InternHack jobs or connect the browser extension to start tracking your pipeline here.
          </p>
          <Link
            to="/external-jobs"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-lime-400 hover:bg-lime-500 text-stone-900 rounded-md text-sm font-semibold no-underline transition-colors"
          >
            Browse jobs <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      ) : filtered.length === 0 ? (
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
          <EmptyState
            icon={<Search className="w-6 h-6 text-stone-400 dark:text-stone-600" />}
            title="No applications match your filters"
            action={
              <button
                type="button"
                onClick={clearFilters}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md text-xs font-bold bg-stone-900 dark:bg-stone-50 text-stone-50 dark:text-stone-900 hover:bg-stone-800 dark:hover:bg-stone-200 transition-colors border-0 cursor-pointer mt-2"
              >
                Clear filters
              </button>
            }
          />
        </motion.div>
      ) : (
        (() => {
          const totalResults = filtered.length;
          const totalPages = Math.max(1, Math.ceil(totalResults / PAGE_SIZE));
          const safePage = Math.min(page, totalPages);
          const start = (safePage - 1) * PAGE_SIZE;
          const pageItems = filtered.slice(start, start + PAGE_SIZE);

          return (
            <>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                {pageItems.map((app, i) => (
                  <motion.div
                    key={app.id}
                    className="h-full"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.03, duration: 0.25 }}
                  >
                    <ApplicationCard app={app} onRemove={handleRemove} />
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

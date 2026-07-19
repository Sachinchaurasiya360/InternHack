import { useState, useMemo, useCallback, useEffect, memo } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plus,
  Search,
  X,
  Trash2,
  ClipboardList,
  CheckCircle2,
  Send,
  SlidersHorizontal,
  CalendarDays,
  StickyNote,
  Crown,
} from "lucide-react";
import { Link } from "react-router";
import { grants } from "./grantsData";
import { Button } from "../../../components/ui/button";
import api from "../../../lib/axios";
import { useAuthStore } from "../../../lib/auth.store";

// ---- Types ----------------------------------------------------------------

type ApplicationStatus =
  | "Interested"
  | "Preparing"
  | "Applied"
  | "Accepted"
  | "Rejected";

interface TrackedGrant {
  id: string;
  grantName: string;
  organization: string;
  status: ApplicationStatus;
  notes: string;
  deadline: string;
  dateAdded: string;
}

// Server-synced tracker (premium plan) — grants aren't stored in the DB, so the
// server keys rows on (grantName, organization) rather than a numeric grant id.
type ServerStatus = "INTERESTED" | "PREPARING" | "APPLIED" | "ACCEPTED" | "REJECTED";

interface ServerTrackedGrant {
  id: number;
  grantName: string;
  organization: string;
  status: ServerStatus;
  notes: string;
  deadline: string | null;
  createdAt: string;
  updatedAt: string;
}

const STATUS_TO_SERVER: Record<ApplicationStatus, ServerStatus> = {
  Interested: "INTERESTED",
  Preparing: "PREPARING",
  Applied: "APPLIED",
  Accepted: "ACCEPTED",
  Rejected: "REJECTED",
};

const STATUS_FROM_SERVER: Record<ServerStatus, ApplicationStatus> = {
  INTERESTED: "Interested",
  PREPARING: "Preparing",
  APPLIED: "Applied",
  ACCEPTED: "Accepted",
  REJECTED: "Rejected",
};

function toClientGrant(row: ServerTrackedGrant): TrackedGrant {
  return {
    id: String(row.id),
    grantName: row.grantName,
    organization: row.organization,
    status: STATUS_FROM_SERVER[row.status],
    notes: row.notes,
    deadline: row.deadline ? row.deadline.slice(0, 10) : "",
    dateAdded: row.createdAt,
  };
}

// ---- Constants -------------------------------------------------------------

const STORAGE_KEY = "grant-applications";

const ALL_STATUSES: ApplicationStatus[] = [
  "Interested",
  "Preparing",
  "Applied",
  "Accepted",
  "Rejected",
];

const STATUS_COLORS: Record<ApplicationStatus, { color: string; bg: string }> =
  {
    Interested: {
      color: "text-blue-600 dark:text-blue-400",
      bg: "bg-blue-50 dark:bg-blue-900/30",
    },
    Preparing: {
      color: "text-amber-600 dark:text-amber-400",
      bg: "bg-amber-50 dark:bg-amber-900/30",
    },
    Applied: {
      color: "text-stone-600 dark:text-stone-300",
      bg: "bg-stone-100 dark:bg-stone-800",
    },
    Accepted: {
      color: "text-emerald-600 dark:text-emerald-400",
      bg: "bg-emerald-50 dark:bg-emerald-900/30",
    },
    Rejected: {
      color: "text-red-600 dark:text-red-400",
      bg: "bg-red-50 dark:bg-red-900/30",
    },
  };

// ---- Helpers ---------------------------------------------------------------

function loadGrants(): TrackedGrant[] {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

function persistGrants(list: TrackedGrant[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  } catch {
    /* ignore */
  }
}

// ---- TrackedGrantCard ------------------------------------------------------

const TrackedGrantCard = memo(function TrackedGrantCard({
  grant,
  onUpdate,
  onDelete,
  index,
}: {
  grant: TrackedGrant;
  onUpdate: (id: string, updates: Partial<TrackedGrant>) => void;
  onDelete: (id: string) => void;
  index: number;
}) {
  const [confirmDelete, setConfirmDelete] = useState(false);
  const sc = STATUS_COLORS[grant.status];

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ delay: index * 0.03, duration: 0.3 }}
      className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md p-5 hover:border-stone-400 dark:hover:border-white/30 transition-colors"
    >
      {/* Top row: name + delete */}
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="min-w-0">
          <h3 className="text-base font-bold text-stone-900 dark:text-stone-50 leading-snug truncate">
            {grant.grantName}
          </h3>
          <p className="text-sm text-stone-500 truncate">{grant.organization}</p>
        </div>

        {confirmDelete ? (
          <div className="flex items-center gap-1.5 shrink-0">
            <Button
              size="sm"
              variant="ghost"
              onClick={() => onDelete(grant.id)}
              className="bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-900/50"
            >
              Confirm
            </Button>
            <Button
              size="sm"
              variant="ghost"
              onClick={() => setConfirmDelete(false)}
            >
              Cancel
            </Button>
          </div>
        ) : (
          <Button
            variant="ghost"
            mode="icon"
            aria-label="Delete grant"
            size="sm"
            onClick={() => setConfirmDelete(true)}
            className="text-stone-300 dark:text-stone-600 hover:text-red-500 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 shrink-0"
          >
            <Trash2 className="w-4 h-4" />
          </Button>
        )}
      </div>

      {/* Status select */}
      <div className="mb-3">
        <label className="text-xs font-medium text-stone-500 mb-1 block">
          Status
        </label>
        <select
          value={grant.status}
          onChange={(e) =>
            onUpdate(grant.id, {
              status: e.target.value as ApplicationStatus,
            })
          }
          className={`w-full px-3 py-2 rounded-md text-sm font-medium border border-stone-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-lime-500/20 transition-colors ${sc.bg} ${sc.color}`}
        >
          {ALL_STATUSES.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      {/* Deadline */}
      <div className="mb-3">
        <label className="text-xs font-medium text-stone-500 mb-1 block">
          Deadline
        </label>
        <input
          type="date"
          value={grant.deadline}
          onChange={(e) => onUpdate(grant.id, { deadline: e.target.value })}
          className="w-full px-3 py-2 rounded-md text-sm border border-stone-200 dark:border-white/10 bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-50 focus:outline-none focus:ring-2 focus:ring-lime-500/20 transition-colors"
        />
      </div>

      {/* Notes */}
      <div className="mb-3">
        <label className="text-xs font-medium text-stone-500 mb-1 block">
          Notes
        </label>
        <textarea
          value={grant.notes}
          onChange={(e) => onUpdate(grant.id, { notes: e.target.value })}
          placeholder="Add notes about this application..."
          rows={2}
          className="w-full px-3 py-2 rounded-md text-sm border border-stone-200 dark:border-white/10 bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-50 placeholder-stone-400 dark:placeholder-stone-600 focus:outline-none focus:ring-2 focus:ring-lime-500/20 resize-none transition-colors"
        />
      </div>

      {/* Date added */}
      <p className="text-xs text-stone-400 dark:text-stone-600">
        Added{" "}
        {new Date(grant.dateAdded).toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        })}
      </p>
    </motion.div>
  );
});

// ---- Add Grant Modal -------------------------------------------------------

function AddGrantModal({
  trackedIds,
  onAdd,
  onClose,
}: {
  trackedIds: Set<string>;
  onAdd: (grantName: string, organization: string) => void;
  onClose: () => void;
}) {
  const [search, setSearch] = useState("");

  const results = useMemo(() => {
    const available = grants.filter(
      (g) => !trackedIds.has(`${g.name}--${g.organization}`)
    );
    if (!search.trim()) return available;
    const q = search.toLowerCase();
    return available.filter(
      (g) =>
        g.name.toLowerCase().includes(q) ||
        g.organization.toLowerCase().includes(q) ||
        g.ecosystem.toLowerCase().includes(q) ||
        g.tags.some((t) => t.toLowerCase().includes(q))
    );
  }, [search, trackedIds]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: "spring", duration: 0.4 }}
        className="bg-white dark:bg-stone-900 rounded-2xl shadow-2xl w-full max-w-lg max-h-[80vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-stone-100 dark:border-white/10 shrink-0">
          <h2 className="text-lg font-bold text-stone-900 dark:text-stone-50">
            Add Grant to Tracker
          </h2>
          <Button
            variant="ghost"
            mode="icon"
            aria-label="Close modal"
            size="sm"
            onClick={onClose}
          >
            <X className="w-4 h-4 text-stone-500" />
          </Button>
        </div>

        {/* Search */}
        <div className="px-5 py-3 border-b border-stone-100 dark:border-white/10 shrink-0">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
            <input
              type="text"
              autoFocus
              placeholder="Search grants by name, organization, ecosystem..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-white/10 rounded-md text-sm text-stone-900 dark:text-stone-50 placeholder-stone-400 dark:placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-lime-500/20 transition-colors"
            />
          </div>
        </div>

        {/* Grant list */}
        <div className="flex-1 overflow-y-auto px-5 py-3">
          {results.length === 0 ? (
            <div className="text-center py-10">
              <ClipboardList className="w-8 h-8 text-stone-300 dark:text-stone-600 mx-auto mb-2" />
              <p className="text-sm text-stone-500">
                {trackedIds.size === grants.length
                  ? "You are already tracking all grants"
                  : "No matching grants found"}
              </p>
            </div>
          ) : (
            <div className="space-y-1.5">
              {results.map((g) => (
                <button
                  key={g.id}
                  onClick={() => {
                    onAdd(g.name, g.organization);
                    onClose();
                  }}
                  className="w-full flex items-center gap-3 px-3 py-3 rounded-md text-left hover:bg-stone-50 dark:hover:bg-stone-800 transition-colors group"
                >
                  <div className="w-8 h-8 rounded-md bg-stone-100 dark:bg-stone-800 border border-stone-100 dark:border-white/10 flex items-center justify-center shrink-0 overflow-hidden">
                    <img
                      src={g.logo}
                      alt={g.organization}
                      className="w-5 h-5 object-contain"
                      onError={(e) => {
                        const img = e.target as HTMLImageElement;
                        img.style.display = "none";
                        const span = document.createElement("span");
                        span.className =
                          "text-xs font-bold text-stone-400 dark:text-stone-500";
                        span.textContent = g.organization.charAt(0);
                        img.parentElement?.appendChild(span);
                      }}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-stone-900 dark:text-stone-50 truncate group-hover:text-lime-700 dark:group-hover:text-lime-400 transition-colors">
                      {g.name}
                    </p>
                    <p className="text-xs text-stone-500 truncate">
                      {g.organization} - {g.ecosystem}
                    </p>
                  </div>
                  <Plus className="w-4 h-4 text-stone-300 dark:text-stone-600 group-hover:text-lime-500 shrink-0 transition-colors" />
                </button>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

// ---- Dialog ----------------------------------------------------------------

export default function GrantTrackerDialog({
  onClose,
}: {
  onClose: () => void;
}) {
  const { user } = useAuthStore();
  const isPremium =
    user?.subscriptionStatus === "ACTIVE" &&
    user?.subscriptionPlan !== "FREE" &&
    !!user?.subscriptionEndDate &&
    new Date(user.subscriptionEndDate) > new Date();

  const queryClient = useQueryClient();
  const [addError, setAddError] = useState<string | null>(null);

  const { data: serverGrants } = useQuery({
    queryKey: ["grants", "tracked"],
    queryFn: () => api.get("/grants/tracked").then((r) => r.data.tracked as ServerTrackedGrant[]),
    enabled: isPremium,
    staleTime: 60 * 1000,
  });

  const [localGrants, setLocalGrants] = useState<TrackedGrant[]>(loadGrants);

  const trackedGrants = useMemo(
    () => (isPremium ? (serverGrants ?? []).map(toClientGrant) : localGrants),
    [isPremium, serverGrants, localGrants]
  );

  const [statusFilter, setStatusFilter] = useState<ApplicationStatus | "ALL">(
    "ALL"
  );
  const [sortBy, setSortBy] = useState<"deadline" | "dateAdded">("dateAdded");
  const [showAddModal, setShowAddModal] = useState(false);

  // Close on Escape (only when the Add Grant modal is not the active layer)
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && !showAddModal) onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, showAddModal]);

  // ---- Server mutations (premium) ------------------------------------------

  const invalidateTracked = useCallback(
    () => queryClient.invalidateQueries({ queryKey: ["grants", "tracked"] }),
    [queryClient]
  );

  const addMutation = useMutation({
    mutationFn: (data: { grantName: string; organization: string }) =>
      api.post("/grants/tracked", data),
    onSuccess: () => {
      setAddError(null);
      invalidateTracked();
    },
    onError: (err) => {
      setAddError(
        err instanceof AxiosError && err.response?.status === 409
          ? "You are already tracking this grant"
          : "Failed to add grant, please try again"
      );
    },
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, updates }: { id: string; updates: Partial<TrackedGrant> }) => {
      const body: Record<string, unknown> = {};
      if (updates.status !== undefined) body["status"] = STATUS_TO_SERVER[updates.status];
      if (updates.notes !== undefined) body["notes"] = updates.notes;
      if (updates.deadline !== undefined) body["deadline"] = updates.deadline || null;
      return api.patch(`/grants/tracked/${id}`, body);
    },
    onSuccess: invalidateTracked,
  });

  const deleteMutation = useMutation({
    mutationFn: (id: string) => api.delete(`/grants/tracked/${id}`),
    onSuccess: invalidateTracked,
  });

  // ---- Persistence helpers (free plan, localStorage-only) ------------------

  const saveGrants = useCallback((next: TrackedGrant[]) => {
    setLocalGrants(next);
    persistGrants(next);
  }, []);

  const addGrant = useCallback(
    (grantName: string, organization: string) => {
      if (isPremium) {
        addMutation.mutate({ grantName, organization });
        return;
      }
      const entry: TrackedGrant = {
        id: crypto.randomUUID(),
        grantName,
        organization,
        status: "Interested",
        notes: "",
        deadline: "",
        dateAdded: new Date().toISOString(),
      };
      saveGrants([entry, ...localGrants]);
    },
    [isPremium, addMutation, localGrants, saveGrants]
  );

  const updateGrant = useCallback(
    (id: string, updates: Partial<TrackedGrant>) => {
      if (isPremium) {
        updateMutation.mutate({ id, updates });
        return;
      }
      const next = localGrants.map((g) =>
        g.id === id ? { ...g, ...updates } : g
      );
      saveGrants(next);
    },
    [isPremium, updateMutation, localGrants, saveGrants]
  );

  const deleteGrant = useCallback(
    (id: string) => {
      if (isPremium) {
        deleteMutation.mutate(id);
        return;
      }
      saveGrants(localGrants.filter((g) => g.id !== id));
    },
    [isPremium, deleteMutation, localGrants, saveGrants]
  );

  // ---- Derived data -------------------------------------------------------

  const trackedIds = useMemo(
    () =>
      new Set(trackedGrants.map((g) => `${g.grantName}--${g.organization}`)),
    [trackedGrants]
  );

  const filtered = useMemo(() => {
    const list =
      statusFilter === "ALL"
        ? [...trackedGrants]
        : trackedGrants.filter((g) => g.status === statusFilter);

    list.sort((a, b) => {
      if (sortBy === "deadline") {
        if (!a.deadline && !b.deadline) return 0;
        if (!a.deadline) return 1;
        if (!b.deadline) return -1;
        return new Date(a.deadline).getTime() - new Date(b.deadline).getTime();
      }
      return new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime();
    });

    return list;
  }, [trackedGrants, statusFilter, sortBy]);

  const totalTracked = trackedGrants.length;
  const totalApplied = trackedGrants.filter(
    (g) => g.status === "Applied"
  ).length;
  const totalAccepted = trackedGrants.filter(
    (g) => g.status === "Accepted"
  ).length;

  // ---- Render -------------------------------------------------------------

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-start sm:items-center justify-center p-4 bg-black/40 backdrop-blur-sm overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.97, y: 20 }}
          transition={{ type: "spring", duration: 0.4 }}
          className="bg-white dark:bg-stone-900 rounded-2xl shadow-2xl w-full max-w-3xl my-4 sm:my-0 max-h-[88vh] flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-start justify-between gap-4 px-5 py-4 border-b border-stone-100 dark:border-white/10 shrink-0">
            <div className="min-w-0">
              <h2 className="text-lg font-bold text-stone-900 dark:text-stone-50">
                Application Tracker
              </h2>
              <p className="text-sm text-stone-500 mt-0.5">
                {isPremium
                  ? "Track grant applications from interest to acceptance, synced across your devices."
                  : "Track grant applications from interest to acceptance, stored locally on your device."}
              </p>
            </div>
            <Button
              variant="ghost"
              mode="icon"
              aria-label="Close tracker"
              size="sm"
              onClick={onClose}
              className="shrink-0"
            >
              <X className="w-4 h-4 text-stone-500" />
            </Button>
          </div>

          {/* Scrollable body */}
          <div className="flex-1 overflow-y-auto px-5 py-5">
            {!isPremium && (
              <Link
                to="/student/checkout"
                className="flex items-center gap-3 px-4 py-3 mb-5 rounded-md border border-lime-300 dark:border-lime-800 bg-lime-50 dark:bg-lime-900/20 no-underline hover:border-lime-400 dark:hover:border-lime-700 transition-colors"
              >
                <Crown className="w-4 h-4 text-lime-700 dark:text-lime-400 shrink-0" />
                <p className="text-sm text-stone-700 dark:text-stone-300">
                  <span className="font-semibold text-stone-900 dark:text-stone-50">Upgrade to Premium</span>
                  {" "}to sync this tracker across devices and get deadline reminder emails.
                </p>
              </Link>
            )}

            {addError && (
              <p className="text-sm text-red-500 mb-4">{addError}</p>
            )}

            {/* Summary stats */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              {[
                {
                  icon: ClipboardList,
                  value: totalTracked,
                  label: "Total Tracked",
                  iconColor: "text-stone-500",
                },
                {
                  icon: Send,
                  value: totalApplied,
                  label: "Applied",
                  iconColor: "text-stone-500",
                },
                {
                  icon: CheckCircle2,
                  value: totalAccepted,
                  label: "Accepted",
                  iconColor: "text-emerald-500",
                },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white dark:bg-stone-900 rounded-md border border-stone-200 dark:border-white/10 p-4 text-center"
                >
                  <stat.icon
                    className={`w-5 h-5 ${stat.iconColor} mx-auto mb-2`}
                  />
                  <p className="text-2xl font-bold text-stone-900 dark:text-stone-50">
                    {stat.value}
                  </p>
                  <p className="text-xs text-stone-400 dark:text-stone-500 font-medium mt-0.5">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Action bar */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              {/* Status filter */}
              <div className="flex items-center gap-1.5">
                <SlidersHorizontal className="w-4 h-4 text-stone-400" />
                <select
                  value={statusFilter}
                  onChange={(e) =>
                    setStatusFilter(e.target.value as ApplicationStatus | "ALL")
                  }
                  className="px-3 py-2 rounded-md text-sm font-medium border border-stone-200 dark:border-white/10 bg-white dark:bg-stone-900 text-stone-700 dark:text-stone-300 focus:outline-none focus:ring-2 focus:ring-lime-500/20 transition-colors"
                >
                  <option value="ALL">All Statuses</option>
                  {ALL_STATUSES.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort */}
              <div className="flex items-center gap-1.5">
                <CalendarDays className="w-4 h-4 text-stone-400" />
                <select
                  value={sortBy}
                  onChange={(e) =>
                    setSortBy(e.target.value as "deadline" | "dateAdded")
                  }
                  className="px-3 py-2 rounded-md text-sm font-medium border border-stone-200 dark:border-white/10 bg-white dark:bg-stone-900 text-stone-700 dark:text-stone-300 focus:outline-none focus:ring-2 focus:ring-lime-500/20 transition-colors"
                >
                  <option value="dateAdded">Sort by Date Added</option>
                  <option value="deadline">Sort by Deadline</option>
                </select>
              </div>

              {/* Spacer */}
              <div className="flex-1" />

              {/* Add grant */}
              <Button
                variant="mono"
                onClick={() => setShowAddModal(true)}
                className="rounded-md"
              >
                <Plus className="w-4 h-4" />
                Add Grant
              </Button>
            </div>

            {/* Cards list / Empty state */}
            {trackedGrants.length === 0 ? (
              <div className="text-center py-16 bg-white dark:bg-stone-900 rounded-md border border-stone-200 dark:border-white/10">
                <StickyNote className="w-10 h-10 text-stone-300 dark:text-stone-600 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-stone-700 dark:text-stone-300 mb-1">
                  No grants tracked yet
                </h3>
                <p className="text-sm text-stone-400 dark:text-stone-500 mb-5 max-w-xs mx-auto">
                  Start by adding a grant you are interested in. Your progress is
                  saved locally on this device.
                </p>
                <Button
                  variant="mono"
                  size="lg"
                  onClick={() => setShowAddModal(true)}
                  className="rounded-md"
                >
                  <Plus className="w-4 h-4" />
                  Add Your First Grant
                </Button>
              </div>
            ) : filtered.length === 0 ? (
              <div className="text-center py-12 bg-white dark:bg-stone-900 rounded-md border border-stone-200 dark:border-white/10">
                <SlidersHorizontal className="w-8 h-8 text-stone-300 dark:text-stone-600 mx-auto mb-2" />
                <p className="text-sm text-stone-500">
                  No grants match the selected filter.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <AnimatePresence mode="popLayout">
                  {filtered.map((g, i) => (
                    <TrackedGrantCard
                      key={g.id}
                      grant={g}
                      onUpdate={updateGrant}
                      onDelete={deleteGrant}
                      index={i}
                    />
                  ))}
                </AnimatePresence>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>

      {/* Add Grant Modal (sibling so its clicks do not close the tracker) */}
      <AnimatePresence>
        {showAddModal && (
          <AddGrantModal
            trackedIds={trackedIds}
            onAdd={addGrant}
            onClose={() => setShowAddModal(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}

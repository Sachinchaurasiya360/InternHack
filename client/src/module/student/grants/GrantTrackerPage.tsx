import { useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
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
} from "lucide-react";
import { Link } from "react-router";
import { SEO } from "../../../components/SEO";
import { grants } from "./grantsData";

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
      color: "text-violet-600 dark:text-violet-400",
      bg: "bg-violet-50 dark:bg-violet-900/30",
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

function TrackedGrantCard({
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
      className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl p-5 hover:shadow-lg hover:shadow-gray-100/60 dark:hover:shadow-gray-900/40 transition-all duration-300"
    >
      {/* Top row: name + delete */}
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="min-w-0">
          <h3 className="text-base font-bold text-gray-900 dark:text-white leading-snug truncate">
            {grant.grantName}
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-500 truncate">
            {grant.organization}
          </p>
        </div>

        {confirmDelete ? (
          <div className="flex items-center gap-1.5 shrink-0">
            <button
              onClick={() => onDelete(grant.id)}
              className="px-2.5 py-1 rounded-lg bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-xs font-medium hover:bg-red-100 dark:hover:bg-red-900/50 transition-colors"
            >
              Confirm
            </button>
            <button
              onClick={() => setConfirmDelete(false)}
              className="px-2.5 py-1 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 text-xs font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              Cancel
            </button>
          </div>
        ) : (
          <button
            onClick={() => setConfirmDelete(true)}
            className="p-1.5 rounded-lg text-gray-300 dark:text-gray-600 hover:text-red-500 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors shrink-0"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Status select */}
      <div className="mb-3">
        <label className="text-xs font-medium text-gray-500 dark:text-gray-500 mb-1 block">
          Status
        </label>
        <select
          value={grant.status}
          onChange={(e) =>
            onUpdate(grant.id, {
              status: e.target.value as ApplicationStatus,
            })
          }
          className={`w-full px-3 py-2 rounded-xl text-sm font-medium border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-colors ${sc.bg} ${sc.color}`}
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
        <label className="text-xs font-medium text-gray-500 dark:text-gray-500 mb-1 block">
          Deadline
        </label>
        <input
          type="date"
          value={grant.deadline}
          onChange={(e) => onUpdate(grant.id, { deadline: e.target.value })}
          className="w-full px-3 py-2 rounded-xl text-sm border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-colors"
        />
      </div>

      {/* Notes */}
      <div className="mb-3">
        <label className="text-xs font-medium text-gray-500 dark:text-gray-500 mb-1 block">
          Notes
        </label>
        <textarea
          value={grant.notes}
          onChange={(e) => onUpdate(grant.id, { notes: e.target.value })}
          placeholder="Add notes about this application..."
          rows={2}
          className="w-full px-3 py-2 rounded-xl text-sm border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500/20 resize-none transition-colors"
        />
      </div>

      {/* Date added */}
      <p className="text-xs text-gray-400 dark:text-gray-600">
        Added{" "}
        {new Date(grant.dateAdded).toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        })}
      </p>
    </motion.div>
  );
}

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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: "spring", duration: 0.4 }}
        className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl w-full max-w-lg max-h-[80vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 dark:border-gray-800 shrink-0">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white">
            Add Grant to Tracker
          </h2>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4 text-gray-500 dark:text-gray-500" />
          </button>
        </div>

        {/* Search */}
        <div className="px-5 py-3 border-b border-gray-100 dark:border-gray-800 shrink-0">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-gray-500" />
            <input
              type="text"
              autoFocus
              placeholder="Search grants by name, organization, ecosystem..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-colors"
            />
          </div>
        </div>

        {/* Grant list */}
        <div className="flex-1 overflow-y-auto px-5 py-3">
          {results.length === 0 ? (
            <div className="text-center py-10">
              <ClipboardList className="w-8 h-8 text-gray-300 dark:text-gray-600 mx-auto mb-2" />
              <p className="text-sm text-gray-500 dark:text-gray-500">
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
                  className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-left hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 flex items-center justify-center shrink-0 overflow-hidden">
                    <img
                      src={g.logo}
                      alt={g.organization}
                      className="w-5 h-5 object-contain"
                      onError={(e) => {
                        const img = e.target as HTMLImageElement;
                        img.style.display = "none";
                        const span = document.createElement("span");
                        span.className =
                          "text-xs font-bold text-gray-400 dark:text-gray-500";
                        span.textContent = g.organization.charAt(0);
                        img.parentElement?.appendChild(span);
                      }}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 dark:text-white truncate group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {g.name}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-500 truncate">
                      {g.organization} - {g.ecosystem}
                    </p>
                  </div>
                  <Plus className="w-4 h-4 text-gray-300 dark:text-gray-600 group-hover:text-blue-500 shrink-0 transition-colors" />
                </button>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

// ---- Page ------------------------------------------------------------------

export default function GrantTrackerPage() {
  const [trackedGrants, setTrackedGrants] = useState<TrackedGrant[]>(loadGrants);
  const [statusFilter, setStatusFilter] = useState<ApplicationStatus | "ALL">(
    "ALL"
  );
  const [sortBy, setSortBy] = useState<"deadline" | "dateAdded">("dateAdded");
  const [showAddModal, setShowAddModal] = useState(false);

  // ---- Persistence helpers ------------------------------------------------

  const saveGrants = useCallback((next: TrackedGrant[]) => {
    setTrackedGrants(next);
    persistGrants(next);
  }, []);

  const addGrant = useCallback(
    (grantName: string, organization: string) => {
      const entry: TrackedGrant = {
        id: crypto.randomUUID(),
        grantName,
        organization,
        status: "Interested",
        notes: "",
        deadline: "",
        dateAdded: new Date().toISOString(),
      };
      saveGrants([entry, ...trackedGrants]);
    },
    [trackedGrants, saveGrants]
  );

  const updateGrant = useCallback(
    (id: string, updates: Partial<TrackedGrant>) => {
      const next = trackedGrants.map((g) =>
        g.id === id ? { ...g, ...updates } : g
      );
      saveGrants(next);
    },
    [trackedGrants, saveGrants]
  );

  const deleteGrant = useCallback(
    (id: string) => {
      saveGrants(trackedGrants.filter((g) => g.id !== id));
    },
    [trackedGrants, saveGrants]
  );

  // ---- Derived data -------------------------------------------------------

  const trackedIds = useMemo(
    () =>
      new Set(trackedGrants.map((g) => `${g.grantName}--${g.organization}`)),
    [trackedGrants]
  );

  const filtered = useMemo(() => {
    let list =
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
      return (
        new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime()
      );
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
    <div className="relative pb-12">
      <SEO title="Grant Application Tracker" noIndex />

      {/* Atmospheric background */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-150 h-150 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl opacity-40" />
        <div className="absolute -bottom-32 -left-32 w-125 h-125 bg-slate-100 dark:bg-slate-900/20 rounded-full blur-3xl opacity-40" />
        <div
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="text-center mb-10 mt-6"
      >
        <Link
          to="/student/grants"
          className="inline-flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors mb-4 no-underline"
        >
          <ArrowLeft className="w-4 h-4" />
          Grants
        </Link>

        <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-gray-950 dark:text-white mb-3">
          Application Tracker
        </h1>
        <p className="text-lg text-gray-500 dark:text-gray-500 max-w-lg mx-auto">
          Track your grant applications from interest to acceptance - all stored
          locally on your device
        </p>
      </motion.div>

      {/* Summary stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="grid grid-cols-3 gap-4 mb-8"
      >
        {[
          {
            icon: ClipboardList,
            value: totalTracked,
            label: "Total Tracked",
            iconColor: "text-blue-500",
          },
          {
            icon: Send,
            value: totalApplied,
            label: "Applied",
            iconColor: "text-violet-500",
          },
          {
            icon: CheckCircle2,
            value: totalAccepted,
            label: "Accepted",
            iconColor: "text-emerald-500",
          },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }}
            className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-5 text-center"
          >
            <stat.icon className={`w-6 h-6 ${stat.iconColor} mx-auto mb-3`} />
            <p className="font-display text-2xl font-bold text-gray-950 dark:text-white">
              {stat.value}
            </p>
            <p className="text-xs text-gray-400 dark:text-gray-500 font-medium mt-0.5">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Action bar */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.15 }}
        className="flex flex-wrap items-center gap-3 mb-6"
      >
        {/* Status filter */}
        <div className="flex items-center gap-1.5">
          <SlidersHorizontal className="w-4 h-4 text-gray-400 dark:text-gray-500" />
          <select
            value={statusFilter}
            onChange={(e) =>
              setStatusFilter(e.target.value as ApplicationStatus | "ALL")
            }
            className="px-3 py-2 rounded-xl text-sm font-medium border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-colors"
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
          <CalendarDays className="w-4 h-4 text-gray-400 dark:text-gray-500" />
          <select
            value={sortBy}
            onChange={(e) =>
              setSortBy(e.target.value as "deadline" | "dateAdded")
            }
            className="px-3 py-2 rounded-xl text-sm font-medium border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-colors"
          >
            <option value="dateAdded">Sort by Date Added</option>
            <option value="deadline">Sort by Deadline</option>
          </select>
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Add grant */}
        <button
          onClick={() => setShowAddModal(true)}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-950 dark:bg-white text-white dark:text-gray-950 text-sm font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
        >
          <Plus className="w-4 h-4" />
          Add Grant
        </button>
      </motion.div>

      {/* Cards list / Empty state */}
      {trackedGrants.length === 0 ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center py-24 bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800"
        >
          <StickyNote className="w-10 h-10 text-gray-300 dark:text-gray-600 mx-auto mb-3" />
          <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-1">
            No grants tracked yet
          </h3>
          <p className="text-sm text-gray-400 dark:text-gray-500 mb-5 max-w-xs mx-auto">
            Start by adding a grant you are interested in. Your progress is
            saved locally on this device.
          </p>
          <button
            onClick={() => setShowAddModal(true)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gray-950 dark:bg-white text-white dark:text-gray-950 text-sm font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
          >
            <Plus className="w-4 h-4" />
            Add Your First Grant
          </button>
        </motion.div>
      ) : filtered.length === 0 ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-16 bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800"
        >
          <SlidersHorizontal className="w-8 h-8 text-gray-300 dark:text-gray-600 mx-auto mb-2" />
          <p className="text-sm text-gray-500 dark:text-gray-500">
            No grants match the selected filter.
          </p>
        </motion.div>
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

      {/* Add Grant Modal */}
      <AnimatePresence>
        {showAddModal && (
          <AddGrantModal
            trackedIds={trackedIds}
            onAdd={addGrant}
            onClose={() => setShowAddModal(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

import { useMemo, useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { motion } from "framer-motion";
import {
  CheckSquare,
  Plus,
  MessageSquare,
  List,
  LayoutGrid,
  Search,
  Calendar,
  User as UserIcon,
} from "lucide-react";
import api from "../../../lib/axios";
import { hrKeys } from "./hr-query-keys";
import HRModal from "./components/HRModal";
import type { HRTask, TaskPriority, TaskStatus } from "./hr-types";
import { SEO } from "../../../components/SEO";
import { Button } from "../../../components/ui/button";

const PRIORITY_OPTIONS: TaskPriority[] = ["LOW", "MEDIUM", "HIGH", "URGENT"];
const STATUS_OPTIONS: TaskStatus[] = ["TODO", "IN_PROGRESS", "IN_REVIEW", "DONE", "CANCELLED"];

const BOARD_COLS: { status: TaskStatus; label: string; dot: string }[] = [
  { status: "TODO", label: "To do", dot: "bg-stone-400" },
  { status: "IN_PROGRESS", label: "In progress", dot: "bg-blue-500" },
  { status: "IN_REVIEW", label: "In review", dot: "bg-amber-500" },
  { status: "DONE", label: "Done", dot: "bg-lime-400" },
];

const PRIORITY_DOT: Record<TaskPriority, string> = {
  LOW: "bg-stone-400",
  MEDIUM: "bg-blue-500",
  HIGH: "bg-amber-500",
  URGENT: "bg-red-500",
};

const STATUS_DOT: Record<TaskStatus, string> = {
  TODO: "bg-stone-400",
  IN_PROGRESS: "bg-blue-500",
  IN_REVIEW: "bg-amber-500",
  DONE: "bg-lime-400",
  CANCELLED: "bg-stone-300",
};

const inputClass =
  "w-full px-3 py-2 rounded-md bg-white dark:bg-stone-950 border border-stone-200 dark:border-white/10 text-sm text-stone-900 dark:text-stone-100 placeholder:text-stone-400 dark:placeholder:text-stone-500 focus:outline-none focus:border-stone-900 dark:focus:border-stone-50 transition-colors";

const labelClass =
  "block text-[10px] font-mono uppercase tracking-widest text-stone-500 mb-1.5";

function labelize(value: string): string {
  return value.replace(/_/g, " ").toLowerCase();
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
  });
}

export default function TasksPage() {
  const queryClient = useQueryClient();
  const [view, setView] = useState<"list" | "board">("list");
  const [showCreate, setShowCreate] = useState(false);
  const [form, setForm] = useState({
    title: "",
    description: "",
    assigneeId: "",
    priority: "MEDIUM" as TaskPriority,
    dueDate: "",
  });
  const [saving, setSaving] = useState(false);
  const [commentTask, setCommentTask] = useState<number | null>(null);
  const [comment, setComment] = useState("");
  const [search, setSearch] = useState("");
  const [priorityFilter, setPriorityFilter] = useState<"" | TaskPriority>("");

  const { data: tasks, isLoading } = useQuery({
    queryKey: hrKeys.tasks.team(),
    queryFn: async () => {
      const res = await api.get("/hr/tasks/team");
      return res.data as { tasks: HRTask[]; total: number };
    },
  });

  const createMutation = useMutation({
    mutationFn: async () => {
      setSaving(true);
      await api.post("/hr/tasks", { ...form, assigneeId: Number(form.assigneeId) });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["hr", "tasks"] });
      setShowCreate(false);
      setForm({ title: "", description: "", assigneeId: "", priority: "MEDIUM", dueDate: "" });
    },
    onSettled: () => setSaving(false),
  });

  const statusMutation = useMutation({
    mutationFn: async ({ id, status }: { id: number; status: TaskStatus }) => {
      await api.patch(`/hr/tasks/${id}/status`, { status });
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["hr", "tasks"] }),
  });

  const commentMutation = useMutation({
    mutationFn: async () => {
      if (!commentTask) return;
      await api.post(`/hr/tasks/${commentTask}/comments`, { comment });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["hr", "tasks"] });
      setCommentTask(null);
      setComment("");
    },
  });

  const allTasks = tasks?.tasks ?? [];

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return allTasks.filter((t) => {
      if (priorityFilter && t.priority !== priorityFilter) return false;
      if (!q) return true;
      const assignee = `${t.assignee?.firstName ?? ""} ${t.assignee?.lastName ?? ""}`.toLowerCase();
      return (
        t.title.toLowerCase().includes(q) ||
        (t.description || "").toLowerCase().includes(q) ||
        assignee.includes(q)
      );
    });
  }, [allTasks, search, priorityFilter]);

  const totals = useMemo(() => {
    const total = allTasks.length;
    const open = allTasks.filter((t) => t.status !== "DONE" && t.status !== "CANCELLED").length;
    const urgent = allTasks.filter((t) => t.priority === "URGENT").length;
    return { total, open, urgent };
  }, [allTasks]);

  return (
    <div className="max-w-7xl mx-auto">
      <SEO title="HR Tasks" noIndex />

      {/* Editorial header */}
      <header className="mt-6 mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="h-1 w-1 bg-lime-400" />
          <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
            recruiter / hr / tasks
          </span>
        </div>

        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
              Team{" "}
              <span className="relative inline-block">
                workload.
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.25, duration: 0.5, ease: "easeOut" }}
                  className="absolute -bottom-0.5 left-0 right-0 h-0.75 bg-lime-400 origin-left"
                />
              </span>
            </h1>
            <p className="mt-2 text-sm text-stone-600 dark:text-stone-400 max-w-xl">
              Everything assigned across HR. Flip to the board to move cards by status.
            </p>
          </div>

          <Button variant="primary" size="md" onClick={() => setShowCreate(true)}>
            <Plus className="w-4 h-4" />
            New task
          </Button>
        </div>

        <div className="mt-6 grid grid-cols-3 gap-px bg-stone-200 dark:bg-white/10 border border-stone-200 dark:border-white/10 rounded-md overflow-hidden">
          <Stat label="total" value={totals.total} />
          <Stat label="open" value={totals.open} dotClass="bg-amber-500" />
          <Stat label="urgent" value={totals.urgent} dotClass="bg-red-500" />
        </div>
      </header>

      {/* Toolbar: view toggle + search + priority filter */}
      <div className="mb-6 flex flex-wrap items-center gap-3">
        <div className="inline-flex items-center rounded-md border border-stone-200 dark:border-white/10 bg-white dark:bg-stone-950 p-0.5">
          {(
            [
              { key: "list", label: "List", icon: List },
              { key: "board", label: "Board", icon: LayoutGrid },
            ] as const
          ).map((v) => {
            const active = view === v.key;
            return (
              <button
                key={v.key}
                onClick={() => setView(v.key)}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm text-xs font-medium transition-colors ${
                  active
                    ? "bg-stone-900 dark:bg-stone-50 text-stone-50 dark:text-stone-900"
                    : "text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-50"
                }`}
              >
                <v.icon className="w-3.5 h-3.5" />
                {v.label}
              </button>
            );
          })}
        </div>

        <div className="relative flex-1 min-w-60 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search title, description, assignee"
            className="w-full pl-9 pr-3 py-2 rounded-md bg-white dark:bg-stone-950 border border-stone-200 dark:border-white/10 text-sm text-stone-900 dark:text-stone-100 placeholder:text-stone-400 dark:placeholder:text-stone-500 focus:outline-none focus:border-stone-900 dark:focus:border-stone-50 transition-colors"
          />
        </div>

        <div className="flex items-center gap-1">
          <button
            onClick={() => setPriorityFilter("")}
            className={`px-3 py-1.5 rounded-md text-xs font-medium border transition-colors ${
              priorityFilter === ""
                ? "bg-stone-900 dark:bg-stone-50 text-stone-50 dark:text-stone-900 border-stone-900 dark:border-stone-50"
                : "bg-white dark:bg-stone-950 text-stone-600 dark:text-stone-400 border-stone-200 dark:border-white/10 hover:border-stone-400 dark:hover:border-white/30"
            }`}
          >
            All
          </button>
          {PRIORITY_OPTIONS.map((p) => {
            const active = priorityFilter === p;
            return (
              <button
                key={p}
                onClick={() => setPriorityFilter(p)}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium border transition-colors ${
                  active
                    ? "bg-stone-900 dark:bg-stone-50 text-stone-50 dark:text-stone-900 border-stone-900 dark:border-stone-50"
                    : "bg-white dark:bg-stone-950 text-stone-600 dark:text-stone-400 border-stone-200 dark:border-white/10 hover:border-stone-400 dark:hover:border-white/30"
                }`}
              >
                <span className={`h-1.5 w-1.5 rounded-full ${PRIORITY_DOT[p]}`} />
                {labelize(p)}
              </button>
            );
          })}
        </div>
      </div>

      {/* Section eyebrow */}
      <div className="flex items-center gap-2 mb-3">
        <span className="h-1 w-1 bg-lime-400" />
        <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
          {view === "list" ? "all tasks" : "status board"}
        </span>
      </div>

      {view === "list" ? (
        isLoading ? (
          <ListSkeleton />
        ) : filtered.length === 0 ? (
          <EmptyState
            title={allTasks.length === 0 ? "No tasks yet" : "No matching tasks"}
            description={
              allTasks.length === 0
                ? "Create your first HR task to start assigning work."
                : "Try another search term or clear the priority filter."
            }
            onAction={() => setShowCreate(true)}
          />
        ) : (
          <div className="border border-stone-200 dark:border-white/10 rounded-md overflow-hidden bg-white dark:bg-stone-950 divide-y divide-stone-100 dark:divide-white/5">
            {filtered.map((task, i) => (
              <motion.div
                key={task.id}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.02, duration: 0.2 }}
                className="group flex items-start gap-4 px-4 py-3 hover:bg-stone-50 dark:hover:bg-stone-900/50 transition-colors"
              >
                <div className="mt-1 w-9 h-9 rounded-md bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-white/10 flex items-center justify-center shrink-0">
                  <CheckSquare className="w-4 h-4 text-stone-500" />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <p className="text-sm font-semibold text-stone-900 dark:text-stone-50 truncate">
                      {task.title}
                    </p>
                    <span className="inline-flex items-center gap-1 text-[10px] font-mono uppercase tracking-widest text-stone-500">
                      <span className={`h-1.5 w-1.5 rounded-full ${PRIORITY_DOT[task.priority]}`} />
                      {labelize(task.priority)}
                    </span>
                  </div>
                  {task.description && (
                    <p className="text-xs text-stone-500 dark:text-stone-400 mt-0.5 line-clamp-1">
                      {task.description}
                    </p>
                  )}
                  <div className="mt-1 flex items-center gap-3 flex-wrap text-[11px] text-stone-500">
                    {task.assignee && (
                      <span className="inline-flex items-center gap-1">
                        <UserIcon className="w-3 h-3 text-stone-400" />
                        {task.assignee.firstName} {task.assignee.lastName}
                      </span>
                    )}
                    {task.dueDate && (
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-stone-400" />
                        {formatDate(task.dueDate)}
                      </span>
                    )}
                  </div>
                </div>

                <div className="shrink-0 flex items-center gap-1.5">
                  <div className="relative">
                    <select
                      value={task.status}
                      onChange={(e) =>
                        statusMutation.mutate({ id: task.id, status: e.target.value as TaskStatus })
                      }
                      className="appearance-none pl-6 pr-7 py-1.5 text-xs rounded-md bg-white dark:bg-stone-950 border border-stone-200 dark:border-white/10 text-stone-700 dark:text-stone-300 hover:border-stone-400 dark:hover:border-white/30 focus:outline-none focus:border-stone-900 dark:focus:border-stone-50 cursor-pointer"
                    >
                      {STATUS_OPTIONS.map((s) => (
                        <option key={s} value={s}>
                          {labelize(s)}
                        </option>
                      ))}
                    </select>
                    <span
                      className={`pointer-events-none absolute left-2.5 top-1/2 -translate-y-1/2 h-1.5 w-1.5 rounded-full ${STATUS_DOT[task.status]}`}
                    />
                  </div>

                  <button
                    onClick={() => setCommentTask(task.id)}
                    title="Add comment"
                    className="p-1.5 rounded-md text-stone-400 hover:text-stone-900 dark:hover:text-stone-50 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {BOARD_COLS.map((col) => {
            const colTasks = filtered.filter((t) => t.status === col.status);
            return (
              <div
                key={col.status}
                className="bg-white dark:bg-stone-950 rounded-md border border-stone-200 dark:border-white/10 flex flex-col"
              >
                <div className="px-3 py-2.5 border-b border-stone-100 dark:border-white/5 flex items-center justify-between">
                  <div className="inline-flex items-center gap-2">
                    <span className={`h-1.5 w-1.5 rounded-full ${col.dot}`} />
                    <span className="text-[10px] font-mono uppercase tracking-widest text-stone-700 dark:text-stone-300">
                      {col.label}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono tabular-nums text-stone-500">
                    {colTasks.length}
                  </span>
                </div>
                <div className="p-2 space-y-2 min-h-32">
                  {colTasks.length === 0 ? (
                    <p className="text-[11px] text-stone-400 px-2 py-4 text-center">
                      Nothing here.
                    </p>
                  ) : (
                    colTasks.map((task) => (
                      <motion.div
                        key={task.id}
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.15 }}
                        className="p-3 rounded-md bg-stone-50 dark:bg-stone-900/50 border border-stone-100 dark:border-white/5 hover:border-stone-300 dark:hover:border-white/20 transition-colors"
                      >
                        <p className="text-xs font-semibold text-stone-900 dark:text-stone-50 mb-1.5 line-clamp-2">
                          {task.title}
                        </p>
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="inline-flex items-center gap-1 text-[10px] font-mono uppercase tracking-widest text-stone-500">
                            <span className={`h-1.5 w-1.5 rounded-full ${PRIORITY_DOT[task.priority]}`} />
                            {labelize(task.priority)}
                          </span>
                          {task.dueDate && (
                            <span className="inline-flex items-center gap-1 text-[10px] text-stone-500">
                              <Calendar className="w-3 h-3 text-stone-400" />
                              {formatDate(task.dueDate)}
                            </span>
                          )}
                        </div>
                        {task.assignee && (
                          <p className="text-[10px] text-stone-500 mt-1.5 inline-flex items-center gap-1">
                            <UserIcon className="w-3 h-3 text-stone-400" />
                            {task.assignee.firstName} {task.assignee.lastName}
                          </p>
                        )}
                      </motion.div>
                    ))
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Create Modal */}
      <HRModal
        open={showCreate}
        onClose={() => setShowCreate(false)}
        title="New Task"
        onSubmit={() => createMutation.mutate()}
        loading={saving}
      >
        <div className="space-y-4">
          <div>
            <label className={labelClass}>title</label>
            <input
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              className={inputClass}
              placeholder="Draft onboarding checklist"
            />
          </div>
          <div>
            <label className={labelClass}>description</label>
            <textarea
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              rows={3}
              className={`${inputClass} resize-none`}
              placeholder="What needs to happen, and by when."
            />
          </div>
          <div>
            <label className={labelClass}>assignee employee id</label>
            <input
              type="number"
              value={form.assigneeId}
              onChange={(e) => setForm({ ...form, assigneeId: e.target.value })}
              className={inputClass}
              placeholder="e.g. 42"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>priority</label>
              <select
                value={form.priority}
                onChange={(e) => setForm({ ...form, priority: e.target.value as TaskPriority })}
                className={inputClass}
              >
                {PRIORITY_OPTIONS.map((p) => (
                  <option key={p} value={p}>
                    {labelize(p)}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className={labelClass}>due date</label>
              <input
                type="date"
                value={form.dueDate}
                onChange={(e) => setForm({ ...form, dueDate: e.target.value })}
                className={inputClass}
              />
            </div>
          </div>
        </div>
      </HRModal>

      {/* Comment Modal */}
      <HRModal
        open={commentTask !== null}
        onClose={() => setCommentTask(null)}
        title="Add Comment"
        onSubmit={() => commentMutation.mutate()}
        loading={commentMutation.isPending}
      >
        <div className="space-y-2">
          <label className={labelClass}>comment</label>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            rows={4}
            placeholder="Leave a note for the assignee."
            className={`${inputClass} resize-none`}
          />
        </div>
      </HRModal>
    </div>
  );
}

function Stat({
  label,
  value,
  dotClass,
}: {
  label: string;
  value: number | string;
  dotClass?: string;
}) {
  return (
    <div className="bg-white dark:bg-stone-950 px-4 py-3">
      <div className="text-[10px] font-mono uppercase tracking-widest text-stone-500 inline-flex items-center gap-1.5">
        {dotClass && <span className={`h-1.5 w-1.5 rounded-full ${dotClass}`} />}
        {label}
      </div>
      <div className="mt-0.5 text-lg font-bold tabular-nums text-stone-900 dark:text-stone-50">
        {value}
      </div>
    </div>
  );
}

function ListSkeleton() {
  return (
    <div className="border border-stone-200 dark:border-white/10 rounded-md overflow-hidden bg-white dark:bg-stone-950 divide-y divide-stone-100 dark:divide-white/5">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="flex items-start gap-4 px-4 py-3 animate-pulse">
          <div className="w-9 h-9 rounded-md bg-stone-100 dark:bg-stone-900" />
          <div className="flex-1 space-y-2">
            <div className="h-3.5 w-1/3 rounded bg-stone-100 dark:bg-stone-900" />
            <div className="h-2.5 w-2/3 rounded bg-stone-100 dark:bg-stone-900" />
            <div className="h-2.5 w-1/2 rounded bg-stone-100 dark:bg-stone-900" />
          </div>
          <div className="h-7 w-24 rounded bg-stone-100 dark:bg-stone-900" />
        </div>
      ))}
    </div>
  );
}

function EmptyState({
  title,
  description,
  onAction,
}: {
  title: string;
  description: string;
  onAction: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center border border-dashed border-stone-200 dark:border-white/10 rounded-md bg-white dark:bg-stone-950">
      <div className="w-12 h-12 rounded-md bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-white/10 flex items-center justify-center mb-4">
        <CheckSquare className="w-5 h-5 text-stone-400" />
      </div>
      <h3 className="text-base font-semibold text-stone-900 dark:text-stone-50 mb-1">
        {title}
      </h3>
      <p className="text-sm text-stone-500 max-w-xs mb-5">{description}</p>
      <Button variant="primary" size="sm" onClick={onAction}>
        <Plus className="w-4 h-4" />
        New task
      </Button>
    </div>
  );
}

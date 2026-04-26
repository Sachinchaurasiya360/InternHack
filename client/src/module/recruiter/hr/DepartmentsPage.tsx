import { useMemo, useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { motion } from "framer-motion";
import {
  Building2,
  Plus,
  Users,
  Trash2,
  Edit2,
  ChevronRight,
  Network,
  List,
  Search,
} from "lucide-react";
import api from "../../../lib/axios";
import { hrKeys } from "./hr-query-keys";
import HRModal from "./components/HRModal";
import type { HRDepartment } from "./hr-types";
import { SEO } from "../../../components/SEO";
import { Button } from "../../../components/ui/button";

type Tab = "list" | "org";

const inputClass =
  "w-full px-3 py-2 rounded-md bg-white dark:bg-stone-950 border border-stone-200 dark:border-white/10 text-sm text-stone-900 dark:text-stone-100 placeholder:text-stone-400 dark:placeholder:text-stone-500 focus:outline-none focus:border-stone-900 dark:focus:border-stone-50 transition-colors";

const labelClass =
  "block text-[10px] font-mono uppercase tracking-widest text-stone-500 mb-1.5";

export default function DepartmentsPage() {
  const queryClient = useQueryClient();
  const [tab, setTab] = useState<Tab>("list");
  const [showCreate, setShowCreate] = useState(false);
  const [editDept, setEditDept] = useState<HRDepartment | null>(null);
  const [form, setForm] = useState({ name: "", description: "", parentId: "" });
  const [saving, setSaving] = useState(false);
  const [search, setSearch] = useState("");

  const { data: departments, isLoading } = useQuery({
    queryKey: hrKeys.departments.list(),
    queryFn: async () => {
      const res = await api.get("/hr/departments?includeInactive=true");
      return res.data.departments as HRDepartment[];
    },
  });

  const { data: orgChart } = useQuery({
    queryKey: hrKeys.departments.orgChart(),
    queryFn: async () => {
      const res = await api.get("/hr/departments/org-chart");
      return res.data.orgChart as HRDepartment[];
    },
    enabled: tab === "org",
  });

  const saveMutation = useMutation({
    mutationFn: async () => {
      setSaving(true);
      const body = {
        name: form.name,
        description: form.description || undefined,
        parentId: form.parentId ? Number(form.parentId) : undefined,
      };
      if (editDept) {
        await api.put(`/hr/departments/${editDept.id}`, body);
      } else {
        await api.post("/hr/departments", body);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["hr", "departments"] });
      setShowCreate(false);
      setEditDept(null);
      setForm({ name: "", description: "", parentId: "" });
    },
    onSettled: () => setSaving(false),
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: number) => {
      await api.delete(`/hr/departments/${id}`);
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["hr", "departments"] }),
  });

  const openCreate = () => {
    setEditDept(null);
    setForm({ name: "", description: "", parentId: "" });
    setShowCreate(true);
  };

  const openEdit = (dept: HRDepartment) => {
    setEditDept(dept);
    setForm({
      name: dept.name,
      description: dept.description || "",
      parentId: dept.parentId ? String(dept.parentId) : "",
    });
    setShowCreate(true);
  };

  const filtered = useMemo(() => {
    const all = departments ?? [];
    if (!search.trim()) return all;
    const q = search.trim().toLowerCase();
    return all.filter(
      (d) =>
        d.name.toLowerCase().includes(q) ||
        (d.description || "").toLowerCase().includes(q) ||
        (d.parent?.name || "").toLowerCase().includes(q),
    );
  }, [departments, search]);

  const totals = useMemo(() => {
    const list = departments ?? [];
    const total = list.length;
    const roots = list.filter((d) => !d.parentId).length;
    const employees = list.reduce((sum, d) => sum + (d._count?.employees ?? 0), 0);
    return { total, roots, employees };
  }, [departments]);

  return (
    <div className="max-w-7xl mx-auto">
      <SEO title="Departments" noIndex />

      {/* Editorial header */}
      <header className="mt-6 mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="h-1 w-1 bg-lime-400" />
          <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
            recruiter / hr / departments
          </span>
        </div>

        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
              Org{" "}
              <span className="relative inline-block">
                structure.
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.25, duration: 0.5, ease: "easeOut" }}
                  className="absolute -bottom-0.5 left-0 right-0 h-0.75 bg-lime-400 origin-left"
                />
              </span>
            </h1>
            <p className="mt-2 text-sm text-stone-600 dark:text-stone-400 max-w-xl">
              Departments, parents, and headcount. Switch to the org chart for the nested view.
            </p>
          </div>

          <Button variant="primary" size="md" onClick={openCreate}>
            <Plus className="w-4 h-4" />
            Add department
          </Button>
        </div>

        {/* Stat strip */}
        <div className="mt-6 grid grid-cols-3 gap-px bg-stone-200 dark:bg-white/10 border border-stone-200 dark:border-white/10 rounded-md overflow-hidden">
          <Stat label="departments" value={totals.total} />
          <Stat label="top-level" value={totals.roots} />
          <Stat label="headcount" value={totals.employees} />
        </div>
      </header>

      {/* Toolbar: tabs + search */}
      <div className="mb-6 flex flex-wrap items-center gap-3">
        <div className="inline-flex items-center rounded-md border border-stone-200 dark:border-white/10 bg-white dark:bg-stone-950 p-0.5">
          {(
            [
              { key: "list", label: "List", icon: List },
              { key: "org", label: "Org chart", icon: Network },
            ] as const
          ).map((t) => {
            const active = tab === t.key;
            return (
              <button
                key={t.key}
                onClick={() => setTab(t.key)}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm text-xs font-medium transition-colors ${
                  active
                    ? "bg-stone-900 dark:bg-stone-50 text-stone-50 dark:text-stone-900"
                    : "text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-50"
                }`}
              >
                <t.icon className="w-3.5 h-3.5" />
                {t.label}
              </button>
            );
          })}
        </div>

        {tab === "list" && (
          <div className="relative flex-1 min-w-60 max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search departments"
              className="w-full pl-9 pr-3 py-2 rounded-md bg-white dark:bg-stone-950 border border-stone-200 dark:border-white/10 text-sm text-stone-900 dark:text-stone-100 placeholder:text-stone-400 dark:placeholder:text-stone-500 focus:outline-none focus:border-stone-900 dark:focus:border-stone-50 transition-colors"
            />
          </div>
        )}
      </div>

      {/* Section eyebrow */}
      <div className="flex items-center gap-2 mb-3">
        <span className="h-1 w-1 bg-lime-400" />
        <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
          {tab === "list" ? "all departments" : "reporting tree"}
        </span>
      </div>

      {tab === "list" ? (
        isLoading ? (
          <ListSkeleton />
        ) : filtered.length === 0 ? (
          <EmptyState
            title={search ? "No matching departments" : "No departments yet"}
            description={
              search
                ? "Try a different search term."
                : "Create your first department to start mapping the org."
            }
            onAction={openCreate}
          />
        ) : (
          <div className="border border-stone-200 dark:border-white/10 rounded-md overflow-hidden bg-white dark:bg-stone-950 divide-y divide-stone-100 dark:divide-white/5">
            {filtered.map((dept, i) => (
              <motion.div
                key={dept.id}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.02, duration: 0.2 }}
                className="group flex items-center gap-4 px-4 py-3 hover:bg-stone-50 dark:hover:bg-stone-900/50 transition-colors"
              >
                <div className="w-9 h-9 rounded-md bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-white/10 flex items-center justify-center shrink-0">
                  <Building2 className="w-4 h-4 text-stone-500" />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <p className="text-sm font-semibold text-stone-900 dark:text-stone-50 truncate">
                      {dept.name}
                    </p>
                    {dept.parent && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-mono uppercase tracking-widest text-stone-500">
                        <span className="h-1 w-1 bg-stone-400" />
                        under {dept.parent.name}
                      </span>
                    )}
                    {!dept.isActive && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-mono uppercase tracking-widest text-stone-400">
                        <span className="h-1 w-1 bg-stone-300" />
                        inactive
                      </span>
                    )}
                  </div>
                  {dept.description && (
                    <p className="text-xs text-stone-500 dark:text-stone-400 mt-0.5 truncate">
                      {dept.description}
                    </p>
                  )}
                </div>

                <div className="shrink-0 inline-flex items-center gap-1.5 text-xs font-mono tabular-nums text-stone-600 dark:text-stone-400">
                  <Users className="w-3.5 h-3.5 text-stone-400" />
                  <span>{dept._count?.employees ?? 0}</span>
                </div>

                <div className="shrink-0 flex items-center gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    onClick={() => openEdit(dept)}
                    title="Edit"
                    className="p-1.5 rounded-md text-stone-400 hover:text-stone-900 dark:hover:text-stone-50 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
                  >
                    <Edit2 className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => {
                      if (confirm(`Delete "${dept.name}"?`))
                        deleteMutation.mutate(dept.id);
                    }}
                    title="Delete"
                    className="p-1.5 rounded-md text-stone-400 hover:text-red-600 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )
      ) : orgChart && orgChart.length > 0 ? (
        <div className="border border-stone-200 dark:border-white/10 rounded-md bg-white dark:bg-stone-950 p-4">
          {orgChart.map((dept) => (
            <OrgNode key={dept.id} dept={dept} />
          ))}
        </div>
      ) : (
        <EmptyState
          title="No org chart data"
          description="Add departments with parents to build the tree."
          onAction={openCreate}
        />
      )}

      <HRModal
        open={showCreate}
        onClose={() => {
          setShowCreate(false);
          setEditDept(null);
        }}
        title={editDept ? "Edit Department" : "Add Department"}
        onSubmit={() => saveMutation.mutate()}
        submitLabel={editDept ? "Update" : "Create"}
        loading={saving}
      >
        <div className="space-y-4">
          <div>
            <label className={labelClass}>name</label>
            <input
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className={inputClass}
              placeholder="Engineering"
            />
          </div>
          <div>
            <label className={labelClass}>description</label>
            <textarea
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              rows={3}
              className={`${inputClass} resize-none`}
              placeholder="What this team owns."
            />
          </div>
          <div>
            <label className={labelClass}>parent department</label>
            <select
              value={form.parentId}
              onChange={(e) => setForm({ ...form, parentId: e.target.value })}
              className={inputClass}
            >
              <option value="">None (top-level)</option>
              {departments
                ?.filter((d) => d.id !== editDept?.id)
                .map((d) => (
                  <option key={d.id} value={d.id}>
                    {d.name}
                  </option>
                ))}
            </select>
          </div>
        </div>
      </HRModal>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: number | string }) {
  return (
    <div className="bg-white dark:bg-stone-950 px-4 py-3">
      <div className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
        {label}
      </div>
      <div className="mt-0.5 text-lg font-bold tabular-nums text-stone-900 dark:text-stone-50">
        {value}
      </div>
    </div>
  );
}

function OrgNode({ dept, depth = 0 }: { dept: HRDepartment; depth?: number }) {
  return (
    <div>
      <div
        className="flex items-center gap-2 py-2 px-2 rounded-md hover:bg-stone-50 dark:hover:bg-stone-900/50 transition-colors"
        style={{ marginLeft: depth * 20 }}
      >
        {depth > 0 && (
          <ChevronRight className="w-3 h-3 text-stone-300 dark:text-stone-600 shrink-0" />
        )}
        <Building2 className="w-4 h-4 text-stone-400 shrink-0" />
        <span className="text-sm font-medium text-stone-900 dark:text-stone-50">
          {dept.name}
        </span>
        {dept._count && (
          <span className="ml-auto inline-flex items-center gap-1 text-[10px] font-mono tabular-nums text-stone-500">
            <Users className="w-3 h-3" />
            {dept._count.employees}
          </span>
        )}
      </div>
      {dept.children?.map((child) => (
        <OrgNode key={child.id} dept={child} depth={depth + 1} />
      ))}
    </div>
  );
}

function ListSkeleton() {
  return (
    <div className="border border-stone-200 dark:border-white/10 rounded-md overflow-hidden bg-white dark:bg-stone-950 divide-y divide-stone-100 dark:divide-white/5">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="flex items-center gap-4 px-4 py-3 animate-pulse">
          <div className="w-9 h-9 rounded-md bg-stone-100 dark:bg-stone-900" />
          <div className="flex-1 space-y-2">
            <div className="h-3.5 w-1/3 rounded bg-stone-100 dark:bg-stone-900" />
            <div className="h-2.5 w-2/3 rounded bg-stone-100 dark:bg-stone-900" />
          </div>
          <div className="h-3 w-8 rounded bg-stone-100 dark:bg-stone-900" />
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
        <Building2 className="w-5 h-5 text-stone-400" />
      </div>
      <h3 className="text-base font-semibold text-stone-900 dark:text-stone-50 mb-1">
        {title}
      </h3>
      <p className="text-sm text-stone-500 max-w-xs mb-5">{description}</p>
      <Button variant="primary" size="sm" onClick={onAction}>
        <Plus className="w-4 h-4" />
        Add department
      </Button>
    </div>
  );
}

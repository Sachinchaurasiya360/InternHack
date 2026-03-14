import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Plus, Pencil, Trash2, ExternalLink, X, Loader2, Link2 } from "lucide-react";
import api from "../../../lib/axios";
import toast from "react-hot-toast";

interface AdminJob {
  id: number;
  slug: string | null;
  company: string | null;
  role: string | null;
  description: string | null;
  salary: string | null;
  location: string | null;
  applyLink: string | null;
  tags: string[];
  expiresAt: string;
  isActive: boolean;
  createdAt: string;
}

const EMPTY_FORM = {
  company: "", role: "", description: "", salary: "", location: "", applyLink: "", tags: "",
};

export default function AdminExternalJobsPage() {
  const queryClient = useQueryClient();
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [form, setForm] = useState(EMPTY_FORM);

  const { data, isLoading } = useQuery({
    queryKey: ["admin-external-jobs", page, search],
    queryFn: async () => {
      const params = new URLSearchParams({ page: String(page), limit: "20" });
      if (search) params.set("search", search);
      const res = await api.get(`/admin/external-jobs?${params}`);
      return res.data as { jobs: AdminJob[]; total: number; totalPages: number };
    },
  });

  const saveMutation = useMutation({
    mutationFn: async () => {
      const payload = {
        company: form.company || undefined,
        role: form.role || undefined,
        description: form.description || undefined,
        salary: form.salary || undefined,
        location: form.location || undefined,
        applyLink: form.applyLink || undefined,
        tags: form.tags ? form.tags.split(",").map((t) => t.trim()).filter(Boolean) : [],
      };
      if (editingId) {
        return api.put(`/admin/external-jobs/${editingId}`, payload);
      }
      return api.post("/admin/external-jobs", payload);
    },
    onSuccess: (res) => {
      queryClient.invalidateQueries({ queryKey: ["admin-external-jobs"] });
      if (!editingId && res.data?.job?.slug) {
        const link = `${window.location.origin}/jobs/ext/${res.data.job.slug}`;
        navigator.clipboard.writeText(link).then(() => {
          toast.success("Job created — link copied to clipboard!");
        }).catch(() => {
          toast.success("Job created!");
        });
      } else {
        toast.success(editingId ? "Job updated" : "Job created");
      }
      closeForm();
    },
    onError: () => toast.error("Failed to save job"),
  });

  const deleteMutation = useMutation({
    mutationFn: (id: number) => api.delete(`/admin/external-jobs/${id}`),
    onSuccess: () => {
      toast.success("Job deleted");
      queryClient.invalidateQueries({ queryKey: ["admin-external-jobs"] });
    },
    onError: () => toast.error("Failed to delete job"),
  });

  const closeForm = () => {
    setShowForm(false);
    setEditingId(null);
    setForm(EMPTY_FORM);
  };

  const openEdit = (job: AdminJob) => {
    setForm({
      company: job.company ?? "",
      role: job.role ?? "",
      description: job.description ?? "",
      salary: job.salary ?? "",
      location: job.location ?? "",
      applyLink: job.applyLink ?? "",
      tags: job.tags.join(", "),
    });
    setEditingId(job.id);
    setShowForm(true);
  };

  const isExpired = (expiresAt: string) => new Date(expiresAt) < new Date();

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">External Jobs</h1>
        <button
          onClick={() => { setForm(EMPTY_FORM); setEditingId(null); setShowForm(true); }}
          className="flex items-center gap-2 px-4 py-2 bg-black dark:bg-white text-white dark:text-gray-950 text-sm font-semibold rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
        >
          <Plus className="w-4 h-4" /> Add Job
        </button>
      </div>

      {/* Search */}
      <div className="mb-4">
        <input
          type="text"
          value={search}
          onChange={(e) => { setSearch(e.target.value); setPage(1); }}
          placeholder="Search by company or role..."
          className="w-full max-w-sm px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-sm dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/20"
        />
      </div>

      {/* Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={closeForm}>
          <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 p-6 w-full max-w-lg space-y-4" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold dark:text-white">{editingId ? "Edit Job" : "Add External Job"}</h2>
              <button onClick={closeForm} className="text-gray-400 hover:text-gray-600"><X className="w-5 h-5" /></button>
            </div>
            <Input label="Company" value={form.company} onChange={(v) => setForm({ ...form, company: v })} placeholder="e.g. Google" />
            <Input label="Role" value={form.role} onChange={(v) => setForm({ ...form, role: v })} placeholder="e.g. Software Engineer Intern" />
            <div>
              <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">Description</label>
              <textarea
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
                className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/20"
                placeholder="Brief description..."
                rows={3}
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <Input label="Salary" value={form.salary} onChange={(v) => setForm({ ...form, salary: v })} placeholder="e.g. 15k-25k/month" />
              <Input label="Location" value={form.location} onChange={(v) => setForm({ ...form, location: v })} placeholder="e.g. Remote" />
            </div>
            <Input label="Apply Link" value={form.applyLink} onChange={(v) => setForm({ ...form, applyLink: v })} placeholder="https://..." />
            <Input label="Tags (comma-separated)" value={form.tags} onChange={(v) => setForm({ ...form, tags: v })} placeholder="React, Remote, Internship" />
            <div className="flex justify-end gap-2 pt-2">
              <button onClick={closeForm} className="px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white">Cancel</button>
              <button
                onClick={() => saveMutation.mutate()}
                disabled={saveMutation.isPending}
                className="flex items-center gap-2 px-5 py-2 bg-black dark:bg-white text-white dark:text-gray-950 text-sm font-semibold rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 disabled:opacity-50"
              >
                {saveMutation.isPending && <Loader2 className="w-4 h-4 animate-spin" />}
                {editingId ? "Update" : "Create"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Table */}
      {isLoading ? (
        <div className="flex justify-center py-12"><Loader2 className="w-6 h-6 animate-spin text-gray-400" /></div>
      ) : !data?.jobs.length ? (
        <div className="text-center py-12 text-gray-500 dark:text-gray-400">No external jobs yet</div>
      ) : (
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100 dark:border-gray-800 text-left">
                <th className="px-4 py-3 font-medium text-gray-500 dark:text-gray-400">Company</th>
                <th className="px-4 py-3 font-medium text-gray-500 dark:text-gray-400">Role</th>
                <th className="px-4 py-3 font-medium text-gray-500 dark:text-gray-400">Salary</th>
                <th className="px-4 py-3 font-medium text-gray-500 dark:text-gray-400">Expires</th>
                <th className="px-4 py-3 font-medium text-gray-500 dark:text-gray-400">Status</th>
                <th className="px-4 py-3 font-medium text-gray-500 dark:text-gray-400 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.jobs.map((job) => {
                const expired = isExpired(job.expiresAt);
                return (
                  <tr key={job.id} className={`border-b border-gray-50 dark:border-gray-800 ${expired ? "opacity-50" : ""}`}>
                    <td className="px-4 py-3 text-gray-900 dark:text-white font-medium">{job.company || "—"}</td>
                    <td className="px-4 py-3 text-gray-700 dark:text-gray-300">{job.role || "—"}</td>
                    <td className="px-4 py-3 text-gray-600 dark:text-gray-400">{job.salary || "—"}</td>
                    <td className="px-4 py-3 text-gray-500 dark:text-gray-400 text-xs">
                      {new Date(job.expiresAt).toLocaleDateString()}
                    </td>
                    <td className="px-4 py-3">
                      <span className={`text-xs px-2 py-0.5 rounded-md font-medium ${
                        expired
                          ? "bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400"
                          : "bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400"
                      }`}>
                        {expired ? "Expired" : "Active"}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-right">
                      <div className="flex items-center justify-end gap-1">
                        {job.slug && (
                          <button
                            onClick={() => {
                              const link = `${window.location.origin}/jobs/ext/${job.slug}`;
                              navigator.clipboard.writeText(link).then(() => toast.success("Link copied!"));
                            }}
                            className="p-1.5 text-gray-400 hover:text-indigo-600"
                            title="Copy shareable link"
                          >
                            <Link2 className="w-4 h-4" />
                          </button>
                        )}
                        {job.applyLink && (
                          <a href={job.applyLink} target="_blank" rel="noopener noreferrer" className="p-1.5 text-gray-400 hover:text-blue-600">
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                        <button onClick={() => openEdit(job)} className="p-1.5 text-gray-400 hover:text-black dark:hover:text-white">
                          <Pencil className="w-4 h-4" />
                        </button>
                        <button onClick={() => { if (confirm("Delete this job?")) deleteMutation.mutate(job.id); }}
                          className="p-1.5 text-gray-400 hover:text-red-600">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      {/* Pagination */}
      {data && data.totalPages > 1 && (
        <div className="flex justify-center gap-2 mt-4">
          {Array.from({ length: data.totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setPage(i + 1)}
              className={`px-3 py-1 text-sm rounded-lg ${
                page === i + 1
                  ? "bg-black dark:bg-white text-white dark:text-gray-950"
                  : "text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function Input({ label, value, onChange, placeholder }: {
  label: string; value: string; onChange: (v: string) => void; placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">{label}</label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/20"
      />
    </div>
  );
}

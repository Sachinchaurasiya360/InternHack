import { useEffect, useState, useCallback } from "react";
import { Trophy, Plus, Pencil, Trash2, Save, X, Loader2, Search } from "lucide-react";
import { PaginationControls } from "../../../components/ui/PaginationControls";
import api from "../../../lib/axios";
import { SEO } from "../../../components/SEO";

interface Hackathon {
  id: number;
  name: string;
  organizer: string;
  logo: string | null;
  description: string;
  prizePool: string;
  startDate: string;
  endDate: string;
  location: string;
  locationType: string;
  website: string | null;
  tags: string[];
  tracks: string[];
  eligibility: string | null;
  status: string;
  ecosystem: string;
  highlights: string[];
}

const STATUSES = ["upcoming", "ongoing", "past"];
const LOCATION_TYPES = ["virtual", "in-person", "hybrid"];

const emptyHackathon = (): Omit<Hackathon, "id"> => ({
  name: "",
  organizer: "",
  logo: "",
  description: "",
  prizePool: "",
  startDate: "",
  endDate: "",
  location: "",
  locationType: "virtual",
  website: "",
  tags: [],
  tracks: [],
  eligibility: "",
  status: "upcoming",
  ecosystem: "",
  highlights: [],
});

export default function AdminHackathonsPage() {
  const [hackathons, setHackathons] = useState<Hackathon[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<Hackathon | null>(null);
  const [creating, setCreating] = useState(false);
  const [saving, setSaving] = useState(false);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchHackathons = useCallback(() => {
    setLoading(true);
    const params = new URLSearchParams();
    params.set("page", String(page));
    params.set("limit", "20");
    if (search) params.set("search", search);
    if (filterStatus) params.set("status", filterStatus);
    api.get(`/admin/hackathons?${params.toString()}`).then((res) => {
      setHackathons(res.data.hackathons);
      setTotalPages(res.data.pagination.totalPages);
      setLoading(false);
    }).catch(() => setLoading(false));
  }, [page, search, filterStatus]);

  useEffect(() => { fetchHackathons(); }, [fetchHackathons]);

  const handleEdit = async (id: number) => {
    try {
      const { data } = await api.get(`/admin/hackathons/${id}`);
      setEditing(data.hackathon);
      setCreating(false);
    } catch {
      alert("Failed to load hackathon details");
    }
  };

  const handleCreate = () => {
    setEditing(emptyHackathon() as Hackathon);
    setCreating(true);
  };

  const handleDelete = async (id: number, name: string) => {
    if (!confirm(`Delete "${name}"? This cannot be undone.`)) return;
    try {
      await api.delete(`/admin/hackathons/${id}`);
      setHackathons((prev) => prev.filter((h) => h.id !== id));
      if (editing?.id === id) { setEditing(null); setCreating(false); }
    } catch {
      alert("Failed to delete hackathon");
    }
  };

  const handleSave = async () => {
    if (!editing) return;
    setSaving(true);
    try {
      const payload = {
        name: editing.name,
        organizer: editing.organizer,
        logo: editing.logo || "",
        description: editing.description,
        prizePool: editing.prizePool,
        startDate: editing.startDate,
        endDate: editing.endDate,
        location: editing.location,
        locationType: editing.locationType,
        website: editing.website || "",
        tags: editing.tags,
        tracks: editing.tracks,
        eligibility: editing.eligibility || "",
        status: editing.status,
        ecosystem: editing.ecosystem,
        highlights: editing.highlights,
      };

      if (creating) {
        await api.post("/admin/hackathons", payload);
      } else {
        await api.put(`/admin/hackathons/${editing.id}`, payload);
      }

      setEditing(null);
      setCreating(false);
      fetchHackathons();
    } catch {
      alert("Failed to save hackathon");
    } finally {
      setSaving(false);
    }
  };

  const updateField = (field: string, value: unknown) => {
    if (!editing) return;
    setEditing({ ...editing, [field]: value });
  };

  const statusBadge = (status: string) => {
    const colors: Record<string, string> = {
      upcoming: "bg-blue-900/40 text-blue-300",
      ongoing: "bg-green-900/40 text-green-300",
      past: "bg-gray-700/40 text-gray-400",
    };
    return <span className={`px-2 py-0.5 rounded text-xs font-medium ${colors[status] || "bg-gray-700 text-gray-300"}`}>{status}</span>;
  };

  return (
    <div>
      <SEO title="Manage Hackathons" noIndex />
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <Trophy className="w-6 h-6 text-amber-400" />
          <h1 className="text-2xl font-bold text-white">Hackathon Management</h1>
        </div>
        <button onClick={handleCreate} className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
          <Plus className="w-4 h-4" /> Add Hackathon
        </button>
      </div>

      {/* Filters */}
      <div className="flex gap-3 mb-4">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
          <input
            type="text"
            placeholder="Search hackathons..."
            value={search}
            onChange={(e) => { setSearch(e.target.value); setPage(1); }}
            className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500"
          />
        </div>
        <select
          value={filterStatus}
          onChange={(e) => { setFilterStatus(e.target.value); setPage(1); }}
          className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-indigo-500"
        >
          <option value="">All Statuses</option>
          {STATUSES.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>

      {/* Editor */}
      {editing && (
        <div className="bg-gray-900 border border-gray-700 rounded-xl p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-white">{creating ? "Create Hackathon" : `Edit: ${editing.name}`}</h2>
            <div className="flex gap-2">
              <button onClick={handleSave} disabled={saving} className="flex items-center gap-2 bg-green-600 hover:bg-green-700 disabled:opacity-50 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />} Save
              </button>
              <button onClick={() => { setEditing(null); setCreating(false); }} className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                <X className="w-4 h-4" /> Cancel
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-gray-400 mb-1">Name *</label>
              <input value={editing.name} onChange={(e) => updateField("name", e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-indigo-500" />
            </div>
            <div>
              <label className="block text-xs text-gray-400 mb-1">Organizer *</label>
              <input value={editing.organizer} onChange={(e) => updateField("organizer", e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-indigo-500" />
            </div>
            <div>
              <label className="block text-xs text-gray-400 mb-1">Prize Pool</label>
              <input value={editing.prizePool} onChange={(e) => updateField("prizePool", e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-indigo-500" />
            </div>
            <div>
              <label className="block text-xs text-gray-400 mb-1">Ecosystem</label>
              <input value={editing.ecosystem} onChange={(e) => updateField("ecosystem", e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-indigo-500" />
            </div>
            <div>
              <label className="block text-xs text-gray-400 mb-1">Start Date</label>
              <input type="date" value={editing.startDate} onChange={(e) => updateField("startDate", e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-indigo-500" />
            </div>
            <div>
              <label className="block text-xs text-gray-400 mb-1">End Date</label>
              <input type="date" value={editing.endDate} onChange={(e) => updateField("endDate", e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-indigo-500" />
            </div>
            <div>
              <label className="block text-xs text-gray-400 mb-1">Location</label>
              <input value={editing.location} onChange={(e) => updateField("location", e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-indigo-500" />
            </div>
            <div>
              <label className="block text-xs text-gray-400 mb-1">Location Type</label>
              <select value={editing.locationType} onChange={(e) => updateField("locationType", e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-indigo-500">
                {LOCATION_TYPES.map((lt) => <option key={lt} value={lt}>{lt}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-xs text-gray-400 mb-1">Status</label>
              <select value={editing.status} onChange={(e) => updateField("status", e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-indigo-500">
                {STATUSES.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-xs text-gray-400 mb-1">Website</label>
              <input value={editing.website || ""} onChange={(e) => updateField("website", e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-indigo-500" />
            </div>
            <div>
              <label className="block text-xs text-gray-400 mb-1">Logo URL</label>
              <input value={editing.logo || ""} onChange={(e) => updateField("logo", e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-indigo-500" />
            </div>
            <div>
              <label className="block text-xs text-gray-400 mb-1">Eligibility</label>
              <input value={editing.eligibility || ""} onChange={(e) => updateField("eligibility", e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-indigo-500" />
            </div>
          </div>

          <div className="mt-4">
            <label className="block text-xs text-gray-400 mb-1">Description *</label>
            <textarea rows={3} value={editing.description} onChange={(e) => updateField("description", e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-indigo-500" />
          </div>

          <div className="grid grid-cols-3 gap-4 mt-4">
            <div>
              <label className="block text-xs text-gray-400 mb-1">Tags (comma-separated)</label>
              <input value={editing.tags.join(", ")} onChange={(e) => updateField("tags", e.target.value.split(",").map((s) => s.trim()).filter(Boolean))} className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-indigo-500" />
            </div>
            <div>
              <label className="block text-xs text-gray-400 mb-1">Tracks (comma-separated)</label>
              <input value={editing.tracks.join(", ")} onChange={(e) => updateField("tracks", e.target.value.split(",").map((s) => s.trim()).filter(Boolean))} className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-indigo-500" />
            </div>
            <div>
              <label className="block text-xs text-gray-400 mb-1">Highlights (comma-separated)</label>
              <input value={editing.highlights.join(", ")} onChange={(e) => updateField("highlights", e.target.value.split(",").map((s) => s.trim()).filter(Boolean))} className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-indigo-500" />
            </div>
          </div>
        </div>
      )}

      {/* List */}
      {loading ? (
        <div className="flex items-center justify-center py-20">
          <Loader2 className="w-6 h-6 text-gray-400 animate-spin" />
        </div>
      ) : hackathons.length === 0 ? (
        <div className="text-center py-20 text-gray-500">No hackathons found</div>
      ) : (
        <>
          <div className="bg-gray-900 border border-gray-700 rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-700 text-gray-400 text-left">
                  <th className="px-4 py-3 font-medium">Name</th>
                  <th className="px-4 py-3 font-medium">Organizer</th>
                  <th className="px-4 py-3 font-medium">Status</th>
                  <th className="px-4 py-3 font-medium">Type</th>
                  <th className="px-4 py-3 font-medium">Prize</th>
                  <th className="px-4 py-3 font-medium">Dates</th>
                  <th className="px-4 py-3 font-medium text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {hackathons.map((h) => (
                  <tr key={h.id} className="border-b border-gray-800 hover:bg-gray-800/50 transition-colors">
                    <td className="px-4 py-3 text-white font-medium max-w-48 truncate">{h.name}</td>
                    <td className="px-4 py-3 text-gray-400">{h.organizer}</td>
                    <td className="px-4 py-3">{statusBadge(h.status)}</td>
                    <td className="px-4 py-3 text-gray-400">{h.locationType}</td>
                    <td className="px-4 py-3 text-gray-300">{h.prizePool}</td>
                    <td className="px-4 py-3 text-gray-400 text-xs">{h.startDate} - {h.endDate}</td>
                    <td className="px-4 py-3 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button onClick={() => handleEdit(h.id)} className="p-1.5 rounded-lg hover:bg-gray-700 text-gray-400 hover:text-white transition-colors">
                          <Pencil className="w-4 h-4" />
                        </button>
                        <button onClick={() => handleDelete(h.id, h.name)} className="p-1.5 rounded-lg hover:bg-red-900/30 text-gray-400 hover:text-red-400 transition-colors">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <PaginationControls
            currentPage={page}
            totalPages={totalPages}
            onPageChange={setPage}
          />
        </>
      )}
    </div>
  );
}

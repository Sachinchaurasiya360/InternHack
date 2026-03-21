import { useEffect, useState, useCallback } from "react";
import { Code2, Plus, Pencil, Trash2, Save, X, Loader2, Search } from "lucide-react";
import { LoadingScreen } from "../../../components/LoadingScreen";
import api from "../../../lib/axios";

interface DsaTopic {
  id: number;
  name: string;
  slug: string;
  description: string | null;
  orderIndex: number;
}

const inputClass = "w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 text-sm";
const labelClass = "text-sm font-medium text-gray-300";

export default function AdminDsaPage() {
  const [topics, setTopics] = useState<DsaTopic[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<DsaTopic | null>(null);
  const [creating, setCreating] = useState(false);
  const [saving, setSaving] = useState(false);
  const [search, setSearch] = useState("");

  const fetchTopics = useCallback(() => {
    setLoading(true);
    api.get("/admin/dsa/topics", { params: { limit: 100, search: search || undefined } })
      .then((res) => { setTopics(res.data.topics); setLoading(false); })
      .catch(() => setLoading(false));
  }, [search]);

  useEffect(() => { fetchTopics(); }, [fetchTopics]);

  const handleEdit = async (id: number) => {
    try {
      const { data } = await api.get(`/admin/dsa/topics/${id}`);
      setEditing(data.topic);
      setCreating(false);
    } catch { alert("Failed to load topic"); }
  };

  const handleCreate = () => {
    setEditing({ id: 0, name: "", slug: "", description: "", orderIndex: 0 });
    setCreating(true);
  };

  const handleDelete = async (id: number, name: string) => {
    if (!confirm(`Delete "${name}"?`)) return;
    try {
      await api.delete(`/admin/dsa/topics/${id}`);
      setTopics((prev) => prev.filter((t) => t.id !== id));
      if (editing?.id === id) { setEditing(null); setCreating(false); }
    } catch { alert("Failed to delete topic"); }
  };

  const handleSave = async () => {
    if (!editing) return;
    setSaving(true);
    try {
      const payload = {
        name: editing.name,
        description: editing.description || undefined,
        orderIndex: editing.orderIndex,
      };

      if (creating) {
        await api.post("/admin/dsa/topics", payload);
      } else {
        await api.put(`/admin/dsa/topics/${editing.id}`, payload);
      }
      setEditing(null);
      setCreating(false);
      fetchTopics();
    } catch { alert("Failed to save topic"); }
    finally { setSaving(false); }
  };

  if (editing) {
    return (
      <div className="max-w-3xl">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-white">{creating ? "Create DSA Topic" : `Edit: ${editing.name}`}</h1>
          <div className="flex gap-2">
            <button onClick={() => { setEditing(null); setCreating(false); }} className="px-4 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors text-sm flex items-center gap-2">
              <X className="w-4 h-4" /> Cancel
            </button>
            <button onClick={handleSave} disabled={saving || !editing.name} className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 transition-colors disabled:opacity-50 text-sm flex items-center gap-2">
              {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />} Save
            </button>
          </div>
        </div>

        <div className="bg-gray-900 rounded-xl border border-gray-800 p-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Name *</label>
              <input className={inputClass} value={editing.name} onChange={(e) => setEditing({ ...editing, name: e.target.value })} placeholder="e.g. Arrays" />
            </div>
            <div>
              <label className={labelClass}>Order Index</label>
              <input type="number" className={inputClass} value={editing.orderIndex} onChange={(e) => setEditing({ ...editing, orderIndex: parseInt(e.target.value) || 0 })} />
            </div>
          </div>
          <div>
            <label className={labelClass}>Description</label>
            <textarea className={inputClass} rows={2} value={editing.description ?? ""} onChange={(e) => setEditing({ ...editing, description: e.target.value })} placeholder="Topic description" />
          </div>

          <p className="text-xs text-gray-500 mt-2">
            Problems are linked to topics via their tags array. To add problems to this topic, create problems with the topic slug in their tags.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <Code2 className="w-6 h-6 text-indigo-400" />
          <h1 className="text-2xl font-bold text-white">DSA Topics</h1>
        </div>
        <button onClick={handleCreate} className="px-4 py-2.5 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-500 transition-colors flex items-center gap-2">
          <Plus className="w-4 h-4" /> Add Topic
        </button>
      </div>

      <div className="mb-4 relative max-w-sm">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
        <input className={inputClass + " pl-9"} placeholder="Search topics..." value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>

      {loading ? (
        <LoadingScreen compact />
      ) : (
        <div className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-800 text-left">
                <th className="px-4 py-3 text-xs font-medium text-gray-400 uppercase">#</th>
                <th className="px-4 py-3 text-xs font-medium text-gray-400 uppercase">Name</th>
                <th className="px-4 py-3 text-xs font-medium text-gray-400 uppercase">Slug</th>
                <th className="px-4 py-3 text-xs font-medium text-gray-400 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody>
              {topics.map((topic) => (
                <tr key={topic.id} className="border-b border-gray-800/50 hover:bg-gray-800/30">
                  <td className="px-4 py-3 text-sm text-gray-400">{topic.orderIndex}</td>
                  <td className="px-4 py-3">
                    <div className="text-sm font-medium text-white">{topic.name}</div>
                    {topic.description && <div className="text-xs text-gray-500 truncate max-w-xs">{topic.description}</div>}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-400 font-mono">{topic.slug}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <button onClick={() => handleEdit(topic.id)} className="p-2 rounded-lg bg-indigo-900/30 text-indigo-400 hover:bg-indigo-900/50 transition-colors">
                        <Pencil className="w-4 h-4" />
                      </button>
                      <button onClick={() => handleDelete(topic.id, topic.name)} className="p-2 rounded-lg bg-red-900/30 text-red-400 hover:bg-red-900/50 transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {topics.length === 0 && (
                <tr>
                  <td colSpan={4} className="px-4 py-12 text-center text-gray-500">No DSA topics found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

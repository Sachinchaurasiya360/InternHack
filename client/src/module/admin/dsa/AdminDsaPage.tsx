import { useEffect, useState, useCallback } from "react";
import { Code2, Plus, Pencil, Trash2, ChevronDown, ChevronRight, Save, X, Loader2 } from "lucide-react";
import { LoadingScreen } from "../../../components/LoadingScreen";
import api from "../../../lib/axios";

interface Problem {
  title: string;
  difficulty: string;
  leetcodeUrl: string;
  gfgUrl: string;
  articleUrl: string;
  videoUrl: string;
  hackerrankUrl: string;
  codechefUrl: string;
  tags: string[];
  companies: string[];
  hints: string;
  sheets: string[];
  orderIndex: number;
}

interface SubTopic {
  name: string;
  orderIndex: number;
  problems: Problem[];
}

interface DsaTopic {
  id: number;
  name: string;
  slug: string;
  description: string | null;
  orderIndex: number;
  subTopics?: SubTopic[];
  _count?: { problems: number };
}

const emptyProblem = (): Problem => ({
  title: "", difficulty: "Easy", leetcodeUrl: "", gfgUrl: "", articleUrl: "",
  videoUrl: "", hackerrankUrl: "", codechefUrl: "", tags: [], companies: [],
  hints: "", sheets: [], orderIndex: 0,
});

const emptySubTopic = (): SubTopic => ({ name: "", orderIndex: 0, problems: [] });

const emptyTopic = (): Omit<DsaTopic, "id" | "slug" | "_count"> => ({
  name: "", description: "", orderIndex: 0, subTopics: [],
});

const inputClass = "w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 text-sm";
const selectClass = "px-3 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50";
const labelClass = "text-sm font-medium text-gray-300";

export default function AdminDsaPage() {
  const [topics, setTopics] = useState<DsaTopic[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<DsaTopic | null>(null);
  const [creating, setCreating] = useState(false);
  const [saving, setSaving] = useState(false);
  const [expandedSub, setExpandedSub] = useState<number | null>(null);
  const [expandedProblem, setExpandedProblem] = useState<string | null>(null);
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
      setExpandedSub(null);
      setExpandedProblem(null);
    } catch { alert("Failed to load topic"); }
  };

  const handleCreate = () => {
    setEditing(emptyTopic() as DsaTopic);
    setCreating(true);
    setExpandedSub(null);
  };

  const handleDelete = async (id: number, name: string) => {
    if (!confirm(`Delete "${name}"? This removes all subtopics, problems, and student progress.`)) return;
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
        subTopics: (editing.subTopics ?? []).map((st, si) => ({
          name: st.name,
          orderIndex: si,
          problems: st.problems.map((p, pi) => ({
            title: p.title,
            difficulty: p.difficulty,
            leetcodeUrl: p.leetcodeUrl || undefined,
            gfgUrl: p.gfgUrl || undefined,
            articleUrl: p.articleUrl || undefined,
            videoUrl: p.videoUrl || undefined,
            hackerrankUrl: p.hackerrankUrl || undefined,
            codechefUrl: p.codechefUrl || undefined,
            tags: p.tags,
            companies: p.companies,
            hints: p.hints || undefined,
            sheets: p.sheets,
            orderIndex: pi,
          })),
        })),
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

  const updateField = (field: string, value: unknown) => {
    if (!editing) return;
    setEditing({ ...editing, [field]: value });
  };

  const updateSubTopic = (index: number, field: string, value: unknown) => {
    if (!editing?.subTopics) return;
    const subs = [...editing.subTopics];
    subs[index] = { ...subs[index], [field]: value };
    setEditing({ ...editing, subTopics: subs });
  };

  const addSubTopic = () => {
    if (!editing) return;
    const subs = [...(editing.subTopics ?? []), emptySubTopic()];
    setEditing({ ...editing, subTopics: subs });
    setExpandedSub(subs.length - 1);
  };

  const removeSubTopic = (index: number) => {
    if (!editing?.subTopics) return;
    setEditing({ ...editing, subTopics: editing.subTopics.filter((_, i) => i !== index) });
    if (expandedSub === index) setExpandedSub(null);
  };

  const updateProblem = (subIndex: number, probIndex: number, field: string, value: unknown) => {
    if (!editing?.subTopics) return;
    const subs = [...editing.subTopics];
    const problems = [...subs[subIndex].problems];
    problems[probIndex] = { ...problems[probIndex], [field]: value };
    subs[subIndex] = { ...subs[subIndex], problems };
    setEditing({ ...editing, subTopics: subs });
  };

  const addProblem = (subIndex: number) => {
    if (!editing?.subTopics) return;
    const subs = [...editing.subTopics];
    subs[subIndex] = { ...subs[subIndex], problems: [...subs[subIndex].problems, emptyProblem()] };
    setEditing({ ...editing, subTopics: subs });
  };

  const removeProblem = (subIndex: number, probIndex: number) => {
    if (!editing?.subTopics) return;
    const subs = [...editing.subTopics];
    subs[subIndex] = { ...subs[subIndex], problems: subs[subIndex].problems.filter((_, i) => i !== probIndex) };
    setEditing({ ...editing, subTopics: subs });
  };

  const totalProblems = (topic: DsaTopic) =>
    topic.subTopics?.reduce((s, st) => s + (("problems" in st ? st.problems.length : 0) || (st as unknown as { _count?: { problems: number } })._count?.problems || 0), 0) ?? 0;

  if (editing) {
    return (
      <div className="max-w-5xl">
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

        {/* Topic metadata */}
        <div className="bg-gray-900 rounded-xl border border-gray-800 p-6 mb-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Name *</label>
              <input className={inputClass} value={editing.name} onChange={(e) => updateField("name", e.target.value)} placeholder="e.g. Arrays" />
            </div>
            <div>
              <label className={labelClass}>Order Index</label>
              <input type="number" className={inputClass} value={editing.orderIndex} onChange={(e) => updateField("orderIndex", parseInt(e.target.value) || 0)} />
            </div>
          </div>
          <div>
            <label className={labelClass}>Description</label>
            <textarea className={inputClass} rows={2} value={editing.description ?? ""} onChange={(e) => updateField("description", e.target.value)} placeholder="Topic description" />
          </div>
        </div>

        {/* SubTopics */}
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-white">SubTopics ({editing.subTopics?.length ?? 0})</h2>
          <button onClick={addSubTopic} className="px-3 py-1.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 transition-colors text-sm flex items-center gap-1">
            <Plus className="w-4 h-4" /> Add SubTopic
          </button>
        </div>

        <div className="space-y-3">
          {(editing.subTopics ?? []).map((st, si) => (
            <div key={si} className="bg-gray-900 rounded-xl border border-gray-800">
              <div className="flex items-center gap-3 p-4 cursor-pointer" onClick={() => setExpandedSub(expandedSub === si ? null : si)}>
                {expandedSub === si ? <ChevronDown className="w-4 h-4 text-gray-400" /> : <ChevronRight className="w-4 h-4 text-gray-400" />}
                <span className="text-white font-medium flex-1">{st.name || `SubTopic ${si + 1}`}</span>
                <span className="text-xs text-gray-500">{st.problems.length} problems</span>
                <button onClick={(e) => { e.stopPropagation(); removeSubTopic(si); }} className="p-1 text-red-400 hover:bg-red-900/30 rounded">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>

              {expandedSub === si && (
                <div className="px-4 pb-4 space-y-4 border-t border-gray-800 pt-4">
                  <div>
                    <label className={labelClass}>SubTopic Name *</label>
                    <input className={inputClass} value={st.name} onChange={(e) => updateSubTopic(si, "name", e.target.value)} placeholder="e.g. Sorting Algorithms" />
                  </div>

                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-semibold text-gray-300">Problems ({st.problems.length})</h3>
                    <button onClick={() => addProblem(si)} className="px-2 py-1 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors text-xs flex items-center gap-1">
                      <Plus className="w-3 h-3" /> Add Problem
                    </button>
                  </div>

                  <div className="space-y-2">
                    {st.problems.map((p, pi) => {
                      const key = `${si}-${pi}`;
                      return (
                        <div key={pi} className="bg-gray-950 rounded-lg border border-gray-800">
                          <div className="flex items-center gap-2 p-3 cursor-pointer" onClick={() => setExpandedProblem(expandedProblem === key ? null : key)}>
                            {expandedProblem === key ? <ChevronDown className="w-3 h-3 text-gray-500" /> : <ChevronRight className="w-3 h-3 text-gray-500" />}
                            <span className="text-sm text-white flex-1">{p.title || `Problem ${pi + 1}`}</span>
                            <span className={`text-xs px-2 py-0.5 rounded-full ${p.difficulty === "Easy" ? "bg-green-900/50 text-green-400" : p.difficulty === "Medium" ? "bg-yellow-900/50 text-yellow-400" : "bg-red-900/50 text-red-400"}`}>
                              {p.difficulty}
                            </span>
                            <button onClick={(e) => { e.stopPropagation(); removeProblem(si, pi); }} className="p-1 text-red-400 hover:bg-red-900/30 rounded">
                              <Trash2 className="w-3 h-3" />
                            </button>
                          </div>

                          {expandedProblem === key && (
                            <div className="px-3 pb-3 space-y-3 border-t border-gray-800 pt-3">
                              <div className="grid grid-cols-2 gap-3">
                                <div>
                                  <label className={labelClass}>Title *</label>
                                  <input className={inputClass} value={p.title} onChange={(e) => updateProblem(si, pi, "title", e.target.value)} />
                                </div>
                                <div>
                                  <label className={labelClass}>Difficulty</label>
                                  <select className={selectClass + " w-full"} value={p.difficulty} onChange={(e) => updateProblem(si, pi, "difficulty", e.target.value)}>
                                    <option value="Easy">Easy</option>
                                    <option value="Medium">Medium</option>
                                    <option value="Hard">Hard</option>
                                  </select>
                                </div>
                              </div>
                              <div className="grid grid-cols-2 gap-3">
                                <div>
                                  <label className={labelClass}>LeetCode URL</label>
                                  <input className={inputClass} value={p.leetcodeUrl} onChange={(e) => updateProblem(si, pi, "leetcodeUrl", e.target.value)} />
                                </div>
                                <div>
                                  <label className={labelClass}>GFG URL</label>
                                  <input className={inputClass} value={p.gfgUrl} onChange={(e) => updateProblem(si, pi, "gfgUrl", e.target.value)} />
                                </div>
                              </div>
                              <div className="grid grid-cols-2 gap-3">
                                <div>
                                  <label className={labelClass}>Article URL</label>
                                  <input className={inputClass} value={p.articleUrl} onChange={(e) => updateProblem(si, pi, "articleUrl", e.target.value)} />
                                </div>
                                <div>
                                  <label className={labelClass}>Video URL</label>
                                  <input className={inputClass} value={p.videoUrl} onChange={(e) => updateProblem(si, pi, "videoUrl", e.target.value)} />
                                </div>
                              </div>
                              <div className="grid grid-cols-2 gap-3">
                                <div>
                                  <label className={labelClass}>HackerRank URL</label>
                                  <input className={inputClass} value={p.hackerrankUrl} onChange={(e) => updateProblem(si, pi, "hackerrankUrl", e.target.value)} />
                                </div>
                                <div>
                                  <label className={labelClass}>CodeChef URL</label>
                                  <input className={inputClass} value={p.codechefUrl} onChange={(e) => updateProblem(si, pi, "codechefUrl", e.target.value)} />
                                </div>
                              </div>
                              <div className="grid grid-cols-2 gap-3">
                                <div>
                                  <label className={labelClass}>Tags (comma-separated)</label>
                                  <input className={inputClass} value={p.tags.join(", ")} onChange={(e) => updateProblem(si, pi, "tags", e.target.value.split(",").map((t) => t.trim()).filter(Boolean))} />
                                </div>
                                <div>
                                  <label className={labelClass}>Companies (comma-separated)</label>
                                  <input className={inputClass} value={p.companies.join(", ")} onChange={(e) => updateProblem(si, pi, "companies", e.target.value.split(",").map((t) => t.trim()).filter(Boolean))} />
                                </div>
                              </div>
                              <div>
                                <label className={labelClass}>Sheets (comma-separated)</label>
                                <input className={inputClass} value={p.sheets.join(", ")} onChange={(e) => updateProblem(si, pi, "sheets", e.target.value.split(",").map((t) => t.trim()).filter(Boolean))} placeholder="a2z, blind75, neetcode150" />
                              </div>
                              <div>
                                <label className={labelClass}>Hints</label>
                                <textarea className={inputClass} rows={2} value={p.hints} onChange={(e) => updateProblem(si, pi, "hints", e.target.value)} />
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          ))}
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

      <div className="mb-4">
        <input className={inputClass + " max-w-sm"} placeholder="Search topics..." value={search} onChange={(e) => setSearch(e.target.value)} />
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
                <th className="px-4 py-3 text-xs font-medium text-gray-400 uppercase">SubTopics</th>
                <th className="px-4 py-3 text-xs font-medium text-gray-400 uppercase">Problems</th>
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
                  <td className="px-4 py-3 text-sm text-gray-300">{topic.subTopics?.length ?? 0}</td>
                  <td className="px-4 py-3 text-sm text-gray-300">{totalProblems(topic)}</td>
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
                  <td colSpan={5} className="px-4 py-12 text-center text-gray-500">No DSA topics found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

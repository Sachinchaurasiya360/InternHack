import { useEffect, useState, useCallback } from "react";
import { BadgeCheck, Plus, Pencil, Trash2, ChevronDown, ChevronRight, Save, X, Loader2 } from "lucide-react";
import { LoadingScreen } from "../../../components/LoadingScreen";
import api from "../../../lib/axios";
import { SEO } from "../../../components/SEO";

interface SkillTestQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  orderIndex: number;
}

interface SkillTest {
  id: number;
  skillName: string;
  title: string;
  description: string | null;
  difficulty: string;
  timeLimitSecs: number;
  passThreshold: number;
  isActive: boolean;
  questions?: SkillTestQuestion[];
  _count?: { questions: number; attempts: number };
}

const inputClass = "w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 text-sm";
const selectClass = "px-3 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50";
const labelClass = "text-sm font-medium text-gray-300";

const emptyQuestion = (): SkillTestQuestion => ({
  question: "", options: ["", "", "", ""], correctIndex: 0, explanation: "", orderIndex: 0,
});

const emptyTest = (): Omit<SkillTest, "id" | "_count"> => ({
  skillName: "", title: "", description: "", difficulty: "INTERMEDIATE",
  timeLimitSecs: 1800, passThreshold: 70, isActive: true, questions: [],
});

export default function AdminSkillTestsPage() {
  const [tests, setTests] = useState<SkillTest[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<SkillTest | null>(null);
  const [creating, setCreating] = useState(false);
  const [saving, setSaving] = useState(false);
  const [expandedQ, setExpandedQ] = useState<number | null>(null);
  const [search, setSearch] = useState("");

  const fetchTests = useCallback(() => {
    setLoading(true);
    api.get("/admin/skill-tests", { params: { limit: 100, search: search || undefined } })
      .then((res) => { setTests(res.data.tests); setLoading(false); })
      .catch(() => setLoading(false));
  }, [search]);

  useEffect(() => { fetchTests(); }, [fetchTests]);

  const handleEdit = async (id: number) => {
    try {
      const { data } = await api.get(`/admin/skill-tests/${id}`);
      setEditing(data.test);
      setCreating(false);
      setExpandedQ(null);
    } catch { alert("Failed to load test"); }
  };

  const handleCreate = () => {
    setEditing(emptyTest() as SkillTest);
    setCreating(true);
    setExpandedQ(null);
  };

  const handleDelete = async (id: number, title: string) => {
    if (!confirm(`Delete "${title}"? All questions and student attempts will be removed.`)) return;
    try {
      await api.delete(`/admin/skill-tests/${id}`);
      setTests((prev) => prev.filter((t) => t.id !== id));
      if (editing?.id === id) { setEditing(null); setCreating(false); }
    } catch { alert("Failed to delete"); }
  };

  const handleToggle = async (id: number, isActive: boolean) => {
    try {
      await api.patch(`/admin/skill-tests/${id}/toggle`, { isActive });
      setTests((prev) => prev.map((t) => t.id === id ? { ...t, isActive } : t));
    } catch { alert("Failed to toggle"); }
  };

  const handleSave = async () => {
    if (!editing) return;
    setSaving(true);
    try {
      const payload = {
        skillName: editing.skillName,
        title: editing.title,
        description: editing.description || undefined,
        difficulty: editing.difficulty,
        timeLimitSecs: editing.timeLimitSecs,
        passThreshold: editing.passThreshold,
        isActive: editing.isActive,
        questions: (editing.questions ?? []).map((q, i) => ({
          question: q.question,
          options: q.options,
          correctIndex: q.correctIndex,
          explanation: q.explanation || undefined,
          orderIndex: i,
        })),
      };
      if (creating) {
        await api.post("/admin/skill-tests", payload);
      } else {
        await api.put(`/admin/skill-tests/${editing.id}`, payload);
      }
      setEditing(null);
      setCreating(false);
      fetchTests();
    } catch { alert("Failed to save test"); }
    finally { setSaving(false); }
  };

  const updateField = (field: string, value: unknown) => {
    if (!editing) return;
    setEditing({ ...editing, [field]: value });
  };

  const updateQuestion = (index: number, field: string, value: unknown) => {
    if (!editing?.questions) return;
    const questions = [...editing.questions];
    questions[index] = { ...questions[index], [field]: value };
    setEditing({ ...editing, questions });
  };

  const updateOption = (qIndex: number, optIndex: number, value: string) => {
    if (!editing?.questions) return;
    const questions = [...editing.questions];
    const options = [...questions[qIndex].options];
    options[optIndex] = value;
    questions[qIndex] = { ...questions[qIndex], options };
    setEditing({ ...editing, questions });
  };

  const addQuestion = () => {
    if (!editing) return;
    const questions = [...(editing.questions ?? []), emptyQuestion()];
    setEditing({ ...editing, questions });
    setExpandedQ(questions.length - 1);
  };

  const removeQuestion = (index: number) => {
    if (!editing?.questions) return;
    setEditing({ ...editing, questions: editing.questions.filter((_, i) => i !== index) });
    if (expandedQ === index) setExpandedQ(null);
  };

  if (editing) {
    return (
      <div className="max-w-5xl">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-white">{creating ? "Create Skill Test" : `Edit: ${editing.title}`}</h1>
          <div className="flex gap-2">
            <button onClick={() => { setEditing(null); setCreating(false); }} className="px-4 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors text-sm flex items-center gap-2">
              <X className="w-4 h-4" /> Cancel
            </button>
            <button onClick={handleSave} disabled={saving || !editing.skillName || !editing.title} className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 transition-colors disabled:opacity-50 text-sm flex items-center gap-2">
              {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />} Save
            </button>
          </div>
        </div>

        {/* Test metadata */}
        <div className="bg-gray-900 rounded-xl border border-gray-800 p-6 mb-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div><label className={labelClass}>Skill Name *</label><input className={inputClass} value={editing.skillName} onChange={(e) => updateField("skillName", e.target.value)} placeholder="e.g. JavaScript" /></div>
            <div><label className={labelClass}>Title *</label><input className={inputClass} value={editing.title} onChange={(e) => updateField("title", e.target.value)} placeholder="e.g. JavaScript Fundamentals" /></div>
          </div>
          <div><label className={labelClass}>Description</label><textarea className={inputClass} rows={2} value={editing.description ?? ""} onChange={(e) => updateField("description", e.target.value)} /></div>
          <div className="grid grid-cols-4 gap-4">
            <div>
              <label className={labelClass}>Difficulty</label>
              <select className={selectClass + " w-full"} value={editing.difficulty} onChange={(e) => updateField("difficulty", e.target.value)}>
                {["BEGINNER", "INTERMEDIATE", "ADVANCED"].map((d) => <option key={d} value={d}>{d}</option>)}
              </select>
            </div>
            <div><label className={labelClass}>Time Limit (sec)</label><input type="number" className={inputClass} value={editing.timeLimitSecs} onChange={(e) => updateField("timeLimitSecs", parseInt(e.target.value) || 1800)} /></div>
            <div><label className={labelClass}>Pass Threshold (%)</label><input type="number" className={inputClass} value={editing.passThreshold} onChange={(e) => updateField("passThreshold", parseInt(e.target.value) || 70)} /></div>
            <div className="flex items-end">
              <label className="flex items-center gap-2 text-sm text-gray-300 cursor-pointer">
                <input type="checkbox" checked={editing.isActive} onChange={(e) => updateField("isActive", e.target.checked)} className="rounded border-gray-600" />
                Active
              </label>
            </div>
          </div>
        </div>

        {/* Questions */}
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-white">Questions ({editing.questions?.length ?? 0})</h2>
          <button onClick={addQuestion} className="px-3 py-1.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 transition-colors text-sm flex items-center gap-1">
            <Plus className="w-4 h-4" /> Add Question
          </button>
        </div>

        <div className="space-y-3">
          {(editing.questions ?? []).map((q, qi) => (
            <div key={qi} className="bg-gray-900 rounded-xl border border-gray-800">
              <div className="flex items-center gap-3 p-4 cursor-pointer" onClick={() => setExpandedQ(expandedQ === qi ? null : qi)}>
                {expandedQ === qi ? <ChevronDown className="w-4 h-4 text-gray-400" /> : <ChevronRight className="w-4 h-4 text-gray-400" />}
                <span className="text-sm text-white flex-1 truncate">{q.question || `Question ${qi + 1}`}</span>
                <span className="text-xs text-green-400">Correct: {["A", "B", "C", "D"][q.correctIndex]}</span>
                <button onClick={(e) => { e.stopPropagation(); removeQuestion(qi); }} className="p-1 text-red-400 hover:bg-red-900/30 rounded">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>

              {expandedQ === qi && (
                <div className="px-4 pb-4 space-y-3 border-t border-gray-800 pt-3">
                  <div><label className={labelClass}>Question *</label><textarea className={inputClass} rows={2} value={q.question} onChange={(e) => updateQuestion(qi, "question", e.target.value)} /></div>
                  <div className="grid grid-cols-2 gap-3">
                    {q.options.map((opt, oi) => (
                      <div key={oi}>
                        <label className={labelClass + (q.correctIndex === oi ? " text-green-400" : "")}>Option {["A", "B", "C", "D"][oi]} {q.correctIndex === oi && "(Correct)"}</label>
                        <input className={inputClass} value={opt} onChange={(e) => updateOption(qi, oi, e.target.value)} />
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className={labelClass}>Correct Answer</label>
                      <select className={selectClass + " w-full"} value={q.correctIndex} onChange={(e) => updateQuestion(qi, "correctIndex", parseInt(e.target.value))}>
                        {[0, 1, 2, 3].map((i) => <option key={i} value={i}>{["A", "B", "C", "D"][i]}</option>)}
                      </select>
                    </div>
                    <div><label className={labelClass}>Explanation</label><input className={inputClass} value={q.explanation} onChange={(e) => updateQuestion(qi, "explanation", e.target.value)} /></div>
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
      <SEO title="Manage Skill Tests" noIndex />
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <BadgeCheck className="w-6 h-6 text-indigo-400" />
          <h1 className="text-2xl font-bold text-white">Skill Tests</h1>
        </div>
        <button onClick={handleCreate} className="px-4 py-2.5 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-500 transition-colors flex items-center gap-2">
          <Plus className="w-4 h-4" /> Add Test
        </button>
      </div>

      <div className="mb-4">
        <input className={inputClass + " max-w-sm"} placeholder="Search tests..." value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>

      {loading ? (
        <LoadingScreen compact />
      ) : (
        <div className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-800 text-left">
                <th className="px-4 py-3 text-xs font-medium text-gray-400 uppercase">Skill</th>
                <th className="px-4 py-3 text-xs font-medium text-gray-400 uppercase">Title</th>
                <th className="px-4 py-3 text-xs font-medium text-gray-400 uppercase">Difficulty</th>
                <th className="px-4 py-3 text-xs font-medium text-gray-400 uppercase">Questions</th>
                <th className="px-4 py-3 text-xs font-medium text-gray-400 uppercase">Attempts</th>
                <th className="px-4 py-3 text-xs font-medium text-gray-400 uppercase">Active</th>
                <th className="px-4 py-3 text-xs font-medium text-gray-400 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody>
              {tests.map((test) => (
                <tr key={test.id} className="border-b border-gray-800/50 hover:bg-gray-800/30">
                  <td className="px-4 py-3 text-sm text-white font-medium">{test.skillName}</td>
                  <td className="px-4 py-3">
                    <div className="text-sm text-white">{test.title}</div>
                    {test.description && <div className="text-xs text-gray-500 truncate max-w-xs">{test.description}</div>}
                  </td>
                  <td className="px-4 py-3">
                    <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${test.difficulty === "BEGINNER" ? "bg-green-900/50 text-green-400" : test.difficulty === "ADVANCED" ? "bg-red-900/50 text-red-400" : "bg-yellow-900/50 text-yellow-400"}`}>
                      {test.difficulty}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-300">{test._count?.questions ?? 0}</td>
                  <td className="px-4 py-3 text-sm text-gray-300">{test._count?.attempts ?? 0}</td>
                  <td className="px-4 py-3">
                    <button onClick={() => handleToggle(test.id, !test.isActive)} className={`text-xs px-2.5 py-1 rounded-full font-medium transition-colors ${test.isActive ? "bg-green-900/50 text-green-400 hover:bg-green-900/70" : "bg-gray-800 text-gray-500 hover:bg-gray-700"}`}>
                      {test.isActive ? "Active" : "Inactive"}
                    </button>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <button onClick={() => handleEdit(test.id)} className="p-2 rounded-lg bg-indigo-900/30 text-indigo-400 hover:bg-indigo-900/50 transition-colors">
                        <Pencil className="w-4 h-4" />
                      </button>
                      <button onClick={() => handleDelete(test.id, test.title)} className="p-2 rounded-lg bg-red-900/30 text-red-400 hover:bg-red-900/50 transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {tests.length === 0 && (
                <tr><td colSpan={7} className="px-4 py-12 text-center text-gray-500">No skill tests found</td></tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

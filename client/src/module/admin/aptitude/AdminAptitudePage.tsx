import { useEffect, useState, useCallback } from "react";
import { Brain, Plus, Pencil, Trash2, ChevronDown, ChevronRight, Save, X, Loader2 } from "lucide-react";
import api from "../../../lib/axios";

interface AptitudeQuestion {
  id?: number;
  question: string;
  optionA: string;
  optionB: string;
  optionC: string;
  optionD: string;
  optionE: string;
  correctAnswer: string;
  explanation: string;
  difficulty: string;
  companies: string[];
  sourceUrl: string;
  topicId?: number;
}

interface AptitudeTopic {
  id: number;
  name: string;
  slug: string;
  description: string | null;
  orderIndex: number;
  sourceUrl: string | null;
  questions?: AptitudeQuestion[];
  _count?: { questions: number };
}

interface AptitudeCategory {
  id: number;
  name: string;
  slug: string;
  description: string | null;
  orderIndex: number;
  topics?: AptitudeTopic[];
}

const inputClass = "w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 text-sm";
const selectClass = "px-3 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50";
const labelClass = "text-sm font-medium text-gray-300";

const emptyQuestion = (): AptitudeQuestion => ({
  question: "", optionA: "", optionB: "", optionC: "", optionD: "", optionE: "",
  correctAnswer: "A", explanation: "", difficulty: "MEDIUM", companies: [], sourceUrl: "",
});

type View = "list" | "category" | "questions";

export default function AdminAptitudePage() {
  const [categories, setCategories] = useState<AptitudeCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState<View>("list");
  const [saving, setSaving] = useState(false);
  const [search, setSearch] = useState("");

  // Category editing
  const [editingCat, setEditingCat] = useState<AptitudeCategory | null>(null);
  const [creatingCat, setCreatingCat] = useState(false);

  // Topic editing
  const [editingTopic, setEditingTopic] = useState<AptitudeTopic | null>(null);
  const [creatingTopic, setCreatingTopic] = useState(false);
  const [topicCategoryId, setTopicCategoryId] = useState<number>(0);

  // Question management
  const [selectedTopic, setSelectedTopic] = useState<AptitudeTopic | null>(null);
  const [questions, setQuestions] = useState<AptitudeQuestion[]>([]);
  const [questionsLoading, setQuestionsLoading] = useState(false);
  const [expandedQ, setExpandedQ] = useState<number | null>(null);
  const [editingQ, setEditingQ] = useState<AptitudeQuestion | null>(null);
  const [qPage, setQPage] = useState(1);
  const [qTotal, setQTotal] = useState(0);

  const fetchCategories = useCallback(() => {
    setLoading(true);
    api.get("/admin/aptitude/categories", { params: { limit: 100, search: search || undefined } })
      .then((res) => { setCategories(res.data.categories); setLoading(false); })
      .catch(() => setLoading(false));
  }, [search]);

  useEffect(() => { fetchCategories(); }, [fetchCategories]);

  const fetchQuestions = useCallback((topicId: number, page: number = 1) => {
    setQuestionsLoading(true);
    api.get("/admin/aptitude/questions", { params: { topicId, page, limit: 20 } })
      .then((res) => {
        setQuestions(res.data.questions);
        setQTotal(res.data.pagination.total);
        setQPage(page);
        setQuestionsLoading(false);
      })
      .catch(() => setQuestionsLoading(false));
  }, []);

  // Category CRUD
  const handleSaveCategory = async () => {
    if (!editingCat) return;
    setSaving(true);
    try {
      const payload = { name: editingCat.name, description: editingCat.description || undefined, orderIndex: editingCat.orderIndex };
      if (creatingCat) {
        await api.post("/admin/aptitude/categories", payload);
      } else {
        await api.put(`/admin/aptitude/categories/${editingCat.id}`, payload);
      }
      setEditingCat(null);
      setCreatingCat(false);
      setView("list");
      fetchCategories();
    } catch { alert("Failed to save category"); }
    finally { setSaving(false); }
  };

  const handleDeleteCategory = async (id: number, name: string) => {
    if (!confirm(`Delete category "${name}"? All topics and questions will be removed.`)) return;
    try {
      await api.delete(`/admin/aptitude/categories/${id}`);
      setCategories((prev) => prev.filter((c) => c.id !== id));
    } catch { alert("Failed to delete"); }
  };

  // Topic CRUD
  const handleSaveTopic = async () => {
    if (!editingTopic) return;
    setSaving(true);
    try {
      const payload = {
        name: editingTopic.name,
        description: editingTopic.description || undefined,
        orderIndex: editingTopic.orderIndex,
        sourceUrl: editingTopic.sourceUrl || undefined,
        categoryId: topicCategoryId,
      };
      if (creatingTopic) {
        await api.post("/admin/aptitude/topics", payload);
      } else {
        await api.put(`/admin/aptitude/topics/${editingTopic.id}`, payload);
      }
      setEditingTopic(null);
      setCreatingTopic(false);
      fetchCategories();
    } catch { alert("Failed to save topic"); }
    finally { setSaving(false); }
  };

  const handleDeleteTopic = async (id: number, name: string) => {
    if (!confirm(`Delete topic "${name}"? All questions will be removed.`)) return;
    try {
      await api.delete(`/admin/aptitude/topics/${id}`);
      fetchCategories();
    } catch { alert("Failed to delete"); }
  };

  // Question CRUD
  const handleSaveQuestion = async () => {
    if (!editingQ || !selectedTopic) return;
    setSaving(true);
    try {
      const payload = {
        question: editingQ.question,
        optionA: editingQ.optionA,
        optionB: editingQ.optionB,
        optionC: editingQ.optionC,
        optionD: editingQ.optionD,
        optionE: editingQ.optionE || undefined,
        correctAnswer: editingQ.correctAnswer,
        explanation: editingQ.explanation || undefined,
        difficulty: editingQ.difficulty,
        companies: editingQ.companies,
        sourceUrl: editingQ.sourceUrl || undefined,
        topicId: selectedTopic.id,
      };
      if (editingQ.id) {
        await api.put(`/admin/aptitude/questions/${editingQ.id}`, payload);
      } else {
        await api.post("/admin/aptitude/questions", payload);
      }
      setEditingQ(null);
      fetchQuestions(selectedTopic.id, qPage);
    } catch { alert("Failed to save question"); }
    finally { setSaving(false); }
  };

  const handleDeleteQuestion = async (id: number) => {
    if (!confirm("Delete this question?")) return;
    try {
      await api.delete(`/admin/aptitude/questions/${id}`);
      if (selectedTopic) fetchQuestions(selectedTopic.id, qPage);
    } catch { alert("Failed to delete"); }
  };

  // Question management view
  if (view === "questions" && selectedTopic) {
    return (
      <div className="max-w-5xl">
        <div className="flex items-center justify-between mb-6">
          <div>
            <button onClick={() => { setView("list"); setSelectedTopic(null); }} className="text-sm text-indigo-400 hover:text-indigo-300 mb-1">&larr; Back to categories</button>
            <h1 className="text-2xl font-bold text-white">Questions: {selectedTopic.name}</h1>
            <p className="text-sm text-gray-400">{qTotal} questions total</p>
          </div>
          <button onClick={() => { setEditingQ(emptyQuestion()); setExpandedQ(null); }} className="px-4 py-2.5 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-500 transition-colors flex items-center gap-2">
            <Plus className="w-4 h-4" /> Add Question
          </button>
        </div>

        {/* Question editor modal */}
        {editingQ && (
          <div className="bg-gray-900 rounded-xl border border-gray-800 p-6 mb-6 space-y-4">
            <h3 className="text-lg font-semibold text-white">{editingQ.id ? "Edit Question" : "New Question"}</h3>
            <div>
              <label className={labelClass}>Question *</label>
              <textarea className={inputClass} rows={3} value={editingQ.question} onChange={(e) => setEditingQ({ ...editingQ, question: e.target.value })} />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div><label className={labelClass}>Option A *</label><input className={inputClass} value={editingQ.optionA} onChange={(e) => setEditingQ({ ...editingQ, optionA: e.target.value })} /></div>
              <div><label className={labelClass}>Option B *</label><input className={inputClass} value={editingQ.optionB} onChange={(e) => setEditingQ({ ...editingQ, optionB: e.target.value })} /></div>
              <div><label className={labelClass}>Option C *</label><input className={inputClass} value={editingQ.optionC} onChange={(e) => setEditingQ({ ...editingQ, optionC: e.target.value })} /></div>
              <div><label className={labelClass}>Option D *</label><input className={inputClass} value={editingQ.optionD} onChange={(e) => setEditingQ({ ...editingQ, optionD: e.target.value })} /></div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div><label className={labelClass}>Option E</label><input className={inputClass} value={editingQ.optionE} onChange={(e) => setEditingQ({ ...editingQ, optionE: e.target.value })} placeholder="Optional" /></div>
              <div>
                <label className={labelClass}>Correct Answer *</label>
                <select className={selectClass + " w-full"} value={editingQ.correctAnswer} onChange={(e) => setEditingQ({ ...editingQ, correctAnswer: e.target.value })}>
                  {["A", "B", "C", "D", "E"].map((o) => <option key={o} value={o}>{o}</option>)}
                </select>
              </div>
              <div>
                <label className={labelClass}>Difficulty</label>
                <select className={selectClass + " w-full"} value={editingQ.difficulty} onChange={(e) => setEditingQ({ ...editingQ, difficulty: e.target.value })}>
                  {["EASY", "MEDIUM", "HARD"].map((d) => <option key={d} value={d}>{d}</option>)}
                </select>
              </div>
            </div>
            <div>
              <label className={labelClass}>Explanation</label>
              <textarea className={inputClass} rows={2} value={editingQ.explanation} onChange={(e) => setEditingQ({ ...editingQ, explanation: e.target.value })} />
            </div>
            <div>
              <label className={labelClass}>Companies (comma-separated)</label>
              <input className={inputClass} value={editingQ.companies.join(", ")} onChange={(e) => setEditingQ({ ...editingQ, companies: e.target.value.split(",").map((s) => s.trim()).filter(Boolean) })} />
            </div>
            <div className="flex gap-2 justify-end">
              <button onClick={() => setEditingQ(null)} className="px-4 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 text-sm">Cancel</button>
              <button onClick={handleSaveQuestion} disabled={saving || !editingQ.question || !editingQ.optionA} className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 disabled:opacity-50 text-sm flex items-center gap-2">
                {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />} Save
              </button>
            </div>
          </div>
        )}

        {questionsLoading ? (
          <div className="flex justify-center py-12"><Loader2 className="w-8 h-8 text-indigo-400 animate-spin" /></div>
        ) : (
          <div className="space-y-2">
            {questions.map((q, i) => (
              <div key={q.id ?? i} className="bg-gray-900 rounded-xl border border-gray-800">
                <div className="flex items-center gap-3 p-4 cursor-pointer" onClick={() => setExpandedQ(expandedQ === i ? null : i)}>
                  {expandedQ === i ? <ChevronDown className="w-4 h-4 text-gray-400" /> : <ChevronRight className="w-4 h-4 text-gray-400" />}
                  <span className="text-sm text-white flex-1 truncate">{q.question.replace(/<[^>]*>/g, "").slice(0, 100)}</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${q.difficulty === "EASY" ? "bg-green-900/50 text-green-400" : q.difficulty === "HARD" ? "bg-red-900/50 text-red-400" : "bg-yellow-900/50 text-yellow-400"}`}>
                    {q.difficulty}
                  </span>
                  <span className="text-xs text-green-400 font-medium">Ans: {q.correctAnswer}</span>
                  <div className="flex gap-1">
                    <button onClick={(e) => { e.stopPropagation(); setEditingQ(q); }} className="p-1.5 rounded bg-indigo-900/30 text-indigo-400 hover:bg-indigo-900/50">
                      <Pencil className="w-3 h-3" />
                    </button>
                    <button onClick={(e) => { e.stopPropagation(); if (q.id) handleDeleteQuestion(q.id); }} className="p-1.5 rounded bg-red-900/30 text-red-400 hover:bg-red-900/50">
                      <Trash2 className="w-3 h-3" />
                    </button>
                  </div>
                </div>
                {expandedQ === i && (
                  <div className="px-4 pb-4 border-t border-gray-800 pt-3 text-sm text-gray-300 space-y-2">
                    <div dangerouslySetInnerHTML={{ __html: q.question }} className="prose prose-invert prose-sm max-w-none" />
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className={q.correctAnswer === "A" ? "text-green-400 font-medium" : ""}>A: {q.optionA}</div>
                      <div className={q.correctAnswer === "B" ? "text-green-400 font-medium" : ""}>B: {q.optionB}</div>
                      <div className={q.correctAnswer === "C" ? "text-green-400 font-medium" : ""}>C: {q.optionC}</div>
                      <div className={q.correctAnswer === "D" ? "text-green-400 font-medium" : ""}>D: {q.optionD}</div>
                    </div>
                    {q.explanation && <div className="text-xs text-gray-400 mt-2"><strong>Explanation:</strong> <span dangerouslySetInnerHTML={{ __html: q.explanation }} /></div>}
                    {q.companies.length > 0 && <div className="flex gap-1 flex-wrap">{q.companies.map((c) => <span key={c} className="text-xs px-2 py-0.5 bg-gray-800 rounded-full text-gray-300">{c}</span>)}</div>}
                  </div>
                )}
              </div>
            ))}
            {questions.length === 0 && <p className="text-center text-gray-500 py-12">No questions yet</p>}
          </div>
        )}

        {qTotal > 20 && (
          <div className="flex justify-center gap-2 mt-4">
            <button disabled={qPage <= 1} onClick={() => fetchQuestions(selectedTopic.id, qPage - 1)} className="px-3 py-1.5 bg-gray-800 text-gray-300 rounded-lg disabled:opacity-50 text-sm">Prev</button>
            <span className="text-sm text-gray-400 py-1.5">Page {qPage} of {Math.ceil(qTotal / 20)}</span>
            <button disabled={qPage >= Math.ceil(qTotal / 20)} onClick={() => fetchQuestions(selectedTopic.id, qPage + 1)} className="px-3 py-1.5 bg-gray-800 text-gray-300 rounded-lg disabled:opacity-50 text-sm">Next</button>
          </div>
        )}
      </div>
    );
  }

  // Category/topic edit view
  if (view === "category" && editingCat) {
    return (
      <div className="max-w-3xl">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-white">{creatingCat ? "Create Category" : `Edit: ${editingCat.name}`}</h1>
          <div className="flex gap-2">
            <button onClick={() => { setView("list"); setEditingCat(null); setCreatingCat(false); }} className="px-4 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 text-sm flex items-center gap-2">
              <X className="w-4 h-4" /> Cancel
            </button>
            <button onClick={handleSaveCategory} disabled={saving || !editingCat.name} className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 disabled:opacity-50 text-sm flex items-center gap-2">
              {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />} Save
            </button>
          </div>
        </div>

        <div className="bg-gray-900 rounded-xl border border-gray-800 p-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div><label className={labelClass}>Name *</label><input className={inputClass} value={editingCat.name} onChange={(e) => setEditingCat({ ...editingCat, name: e.target.value })} /></div>
            <div><label className={labelClass}>Order Index</label><input type="number" className={inputClass} value={editingCat.orderIndex} onChange={(e) => setEditingCat({ ...editingCat, orderIndex: parseInt(e.target.value) || 0 })} /></div>
          </div>
          <div><label className={labelClass}>Description</label><textarea className={inputClass} rows={2} value={editingCat.description ?? ""} onChange={(e) => setEditingCat({ ...editingCat, description: e.target.value })} /></div>
        </div>

        {/* Topic editing inline */}
        {editingTopic && (
          <div className="bg-gray-900 rounded-xl border border-indigo-800 p-6 mt-4 space-y-4">
            <h3 className="text-lg font-semibold text-white">{creatingTopic ? "Add Topic" : "Edit Topic"}</h3>
            <div className="grid grid-cols-2 gap-4">
              <div><label className={labelClass}>Name *</label><input className={inputClass} value={editingTopic.name} onChange={(e) => setEditingTopic({ ...editingTopic, name: e.target.value })} /></div>
              <div><label className={labelClass}>Order Index</label><input type="number" className={inputClass} value={editingTopic.orderIndex} onChange={(e) => setEditingTopic({ ...editingTopic, orderIndex: parseInt(e.target.value) || 0 })} /></div>
            </div>
            <div><label className={labelClass}>Description</label><textarea className={inputClass} rows={2} value={editingTopic.description ?? ""} onChange={(e) => setEditingTopic({ ...editingTopic, description: e.target.value })} /></div>
            <div><label className={labelClass}>Source URL</label><input className={inputClass} value={editingTopic.sourceUrl ?? ""} onChange={(e) => setEditingTopic({ ...editingTopic, sourceUrl: e.target.value })} /></div>
            <div className="flex gap-2 justify-end">
              <button onClick={() => { setEditingTopic(null); setCreatingTopic(false); }} className="px-4 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 text-sm">Cancel</button>
              <button onClick={handleSaveTopic} disabled={saving || !editingTopic.name} className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 disabled:opacity-50 text-sm flex items-center gap-2">
                {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />} Save Topic
              </button>
            </div>
          </div>
        )}

        {/* Topics list */}
        {!creatingCat && editingCat.id && (
          <div className="mt-6">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-lg font-semibold text-white">Topics</h2>
              <button onClick={() => { setEditingTopic({ id: 0, name: "", slug: "", description: "", orderIndex: 0, sourceUrl: "" }); setCreatingTopic(true); setTopicCategoryId(editingCat.id); }} className="px-3 py-1.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 text-sm flex items-center gap-1">
                <Plus className="w-4 h-4" /> Add Topic
              </button>
            </div>
            <div className="space-y-2">
              {(editingCat.topics ?? []).map((t) => (
                <div key={t.id} className="flex items-center gap-3 bg-gray-900 rounded-lg border border-gray-800 p-3">
                  <span className="text-sm text-white flex-1">{t.name}</span>
                  <span className="text-xs text-gray-500">{t._count?.questions ?? 0} questions</span>
                  <button onClick={() => { setSelectedTopic(t); setView("questions"); fetchQuestions(t.id); setEditingQ(null); }} className="text-xs px-2 py-1 bg-gray-800 text-gray-300 rounded hover:bg-gray-700">Questions</button>
                  <button onClick={() => { setEditingTopic(t); setCreatingTopic(false); setTopicCategoryId(editingCat.id); }} className="p-1.5 rounded bg-indigo-900/30 text-indigo-400 hover:bg-indigo-900/50">
                    <Pencil className="w-3 h-3" />
                  </button>
                  <button onClick={() => handleDeleteTopic(t.id, t.name)} className="p-1.5 rounded bg-red-900/30 text-red-400 hover:bg-red-900/50">
                    <Trash2 className="w-3 h-3" />
                  </button>
                </div>
              ))}
              {(editingCat.topics ?? []).length === 0 && <p className="text-sm text-gray-500 py-4 text-center">No topics yet</p>}
            </div>
          </div>
        )}
      </div>
    );
  }

  // Category list view
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <Brain className="w-6 h-6 text-indigo-400" />
          <h1 className="text-2xl font-bold text-white">Aptitude Management</h1>
        </div>
        <button onClick={() => { setEditingCat({ id: 0, name: "", slug: "", description: "", orderIndex: 0 }); setCreatingCat(true); setView("category"); }} className="px-4 py-2.5 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-500 transition-colors flex items-center gap-2">
          <Plus className="w-4 h-4" /> Add Category
        </button>
      </div>

      <div className="mb-4">
        <input className={inputClass + " max-w-sm"} placeholder="Search categories..." value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>

      {loading ? (
        <div className="flex justify-center py-20"><Loader2 className="w-8 h-8 text-indigo-400 animate-spin" /></div>
      ) : (
        <div className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-800 text-left">
                <th className="px-4 py-3 text-xs font-medium text-gray-400 uppercase">#</th>
                <th className="px-4 py-3 text-xs font-medium text-gray-400 uppercase">Category</th>
                <th className="px-4 py-3 text-xs font-medium text-gray-400 uppercase">Topics</th>
                <th className="px-4 py-3 text-xs font-medium text-gray-400 uppercase">Questions</th>
                <th className="px-4 py-3 text-xs font-medium text-gray-400 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((cat) => {
                const totalQ = (cat.topics ?? []).reduce((s, t) => s + (t._count?.questions ?? 0), 0);
                return (
                  <tr key={cat.id} className="border-b border-gray-800/50 hover:bg-gray-800/30">
                    <td className="px-4 py-3 text-sm text-gray-400">{cat.orderIndex}</td>
                    <td className="px-4 py-3">
                      <div className="text-sm font-medium text-white">{cat.name}</div>
                      {cat.description && <div className="text-xs text-gray-500 truncate max-w-xs">{cat.description}</div>}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-300">{cat.topics?.length ?? 0}</td>
                    <td className="px-4 py-3 text-sm text-gray-300">{totalQ}</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <button onClick={async () => {
                          try {
                            const { data } = await api.get(`/admin/aptitude/categories/${cat.id}`);
                            setEditingCat(data.category);
                            setCreatingCat(false);
                            setView("category");
                          } catch { alert("Failed to load"); }
                        }} className="p-2 rounded-lg bg-indigo-900/30 text-indigo-400 hover:bg-indigo-900/50 transition-colors">
                          <Pencil className="w-4 h-4" />
                        </button>
                        <button onClick={() => handleDeleteCategory(cat.id, cat.name)} className="p-2 rounded-lg bg-red-900/30 text-red-400 hover:bg-red-900/50 transition-colors">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
              {categories.length === 0 && (
                <tr><td colSpan={5} className="px-4 py-12 text-center text-gray-500">No categories found</td></tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

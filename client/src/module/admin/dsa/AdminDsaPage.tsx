import { useEffect, useState, useCallback } from "react";
import {
  Code2,
  Plus,
  Pencil,
  Trash2,
  Save,
  X,
  Loader2,
  Search,
  BookOpen,
} from "lucide-react";
import type { SolutionStep } from "../../../lib/types";
import { LoadingScreen } from "../../../components/LoadingScreen";
import api from "../../../lib/axios";
import { SEO } from "../../../components/SEO";
import toast from "@/components/ui/toast";

interface DsaTopic {
  id: number;
  name: string;
  slug: string;
  description: string | null;
  orderIndex: number;
}

interface DsaProblemAdmin {
  id: number;
  title: string;
  slug: string;
  difficulty: string;
  solutionSteps?: SolutionStep[] | null;
  solutionCode?: string | null;
}

const inputClass =
  "w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 text-sm";
const labelClass = "text-sm font-medium text-gray-300";

export default function AdminDsaPage() {
  const [topics, setTopics] = useState<DsaTopic[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<DsaTopic | null>(null);
  const [creating, setCreating] = useState(false);
  const [saving, setSaving] = useState(false);
  const [search, setSearch] = useState("");
  const [walkthroughProblem, setWalkthroughProblem] = useState<DsaProblemAdmin | null>(null);
  const [walkthroughSteps, setWalkthroughSteps] = useState<SolutionStep[]>([]);
  const [walkthroughCode, setWalkthroughCode] = useState("");
  const [walkthroughSearch, setWalkthroughSearch] = useState("");
  const [walkthroughProblems, setWalkthroughProblems] = useState<DsaProblemAdmin[]>([]);
  const [walkthroughTab, setWalkthroughTab] = useState<"topics" | "walkthrough">("topics");
  const [savingWalkthrough, setSavingWalkthrough] = useState(false);

  const fetchTopics = useCallback(() => {
    setLoading(true);
    api
      .get("/admin/dsa/topics", {
        params: { limit: 100, search: search || undefined },
      })
      .then((res) => {
        setTopics(res.data.topics);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [search]);

  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => { fetchTopics(); }, [fetchTopics]);

  const handleEdit = async (id: number) => {
    try {
      const { data } = await api.get(`/admin/dsa/topics/${id}`);
      setEditing(data.topic);
      setCreating(false);
    } catch {
      toast.error("Failed to load topic");
    }
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
      if (editing?.id === id) {
        setEditing(null);
        setCreating(false);
      }
    } catch {
      toast.error("Failed to delete topic");
    }
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
    } catch {
      toast.error("Failed to save topic");
    } finally {
      setSaving(false);
    }
  };

  const searchWalkthroughProblems = async () => {
    if (!walkthroughSearch.trim()) return;
    try {
      const { data } = await api.get("/admin/dsa/problems", {
        params: { search: walkthroughSearch, limit: 10 },
      });
      setWalkthroughProblems(data.problems ?? []);
    } catch {
      toast.error("Failed to search problems");
    }
  };

  const loadWalkthrough = async (problem: DsaProblemAdmin) => {
    try {
      const { data } = await api.get(`/admin/dsa/problems/${problem.id}`);
      setWalkthroughProblem(data.problem);
      setWalkthroughSteps(data.problem.solutionSteps ?? []);
      setWalkthroughCode(data.problem.solutionCode ?? "");
    } catch {
      toast.error("Failed to load problem");
    }
  };

  const addStep = () => {
    setWalkthroughSteps((prev) => [
      ...prev,
      {
        stepNumber: prev.length + 1,
        description: "",
        variables: {},
        highlightLine: undefined,
        isKeyStep: false,
      },
    ]);
  };

  const removeStep = (idx: number) => {
    setWalkthroughSteps((prev) =>
      prev.filter((_, i) => i !== idx).map((s, i) => ({ ...s, stepNumber: i + 1 }))
    );
  };

  const saveWalkthrough = async () => {
    if (!walkthroughProblem) return;
    setSavingWalkthrough(true);
    try {
      await api.put(`/admin/dsa/problems/${walkthroughProblem.id}/walkthrough`, {
        solutionSteps: walkthroughSteps,
        solutionCode: walkthroughCode || null,
      });
      toast.success("Walkthrough saved!");
    } catch {
      toast.error("Failed to save walkthrough");
    } finally {
      setSavingWalkthrough(false);
    }
  };

  if (editing) {
    return (
      <div className="max-w-3xl">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-white">
            {creating ? "Create DSA Topic" : `Edit: ${editing.name}`}
          </h1>
          <div className="flex gap-2">
            <button
              onClick={() => {
                setEditing(null);
                setCreating(false);
              }}
              className="px-4 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors text-sm flex items-center gap-2"
            >
              <X className="w-4 h-4" /> Cancel
            </button>
            <button
              onClick={handleSave}
              disabled={saving || !editing.name}
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 transition-colors disabled:opacity-50 text-sm flex items-center gap-2"
            >
              {saving ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <Save className="w-4 h-4" />
              )}{" "}
              Save
            </button>
          </div>
        </div>

        <div className="bg-gray-900 rounded-xl border border-gray-800 p-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Name *</label>
              <input
                className={inputClass}
                value={editing.name}
                onChange={(e) =>
                  setEditing({ ...editing, name: e.target.value })
                }
                placeholder="e.g. Arrays"
              />
            </div>
            <div>
              <label className={labelClass}>Order Index</label>
              <input
                type="number"
                className={inputClass}
                value={editing.orderIndex}
                onChange={(e) =>
                  setEditing({
                    ...editing,
                    orderIndex: parseInt(e.target.value) || 0,
                  })
                }
              />
            </div>
          </div>
          <div>
            <label className={labelClass}>Description</label>
            <textarea
              className={inputClass}
              rows={2}
              value={editing.description ?? ""}
              onChange={(e) =>
                setEditing({ ...editing, description: e.target.value })
              }
              placeholder="Topic description"
            />
          </div>

          <p className="text-xs text-gray-500 mt-2">
            Problems are linked to topics via their tags array. To add problems
            to this topic, create problems with the topic slug in their tags.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <SEO title="Manage DSA" noIndex />
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <Code2 className="w-6 h-6 text-indigo-400" />
          <h1 className="text-2xl font-bold text-white">DSA Management</h1>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setWalkthroughTab("walkthrough")}
            className={`px-4 py-2.5 text-sm font-medium rounded-lg flex items-center gap-2 transition-colors ${
              walkthroughTab === "walkthrough"
                ? "bg-lime-600 text-white"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
          >
            <BookOpen className="w-4 h-4" /> Walkthroughs
          </button>
          <button
            onClick={() => setWalkthroughTab("topics")}
            className={`px-4 py-2.5 text-sm font-medium rounded-lg flex items-center gap-2 transition-colors ${
              walkthroughTab === "topics"
                ? "bg-indigo-600 text-white"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
          >
            <Code2 className="w-4 h-4" /> Topics
          </button>
          {walkthroughTab === "topics" && (
            <button
              onClick={handleCreate}
              className="px-4 py-2.5 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-500 transition-colors flex items-center gap-2"
            >
              <Plus className="w-4 h-4" /> Add Topic
            </button>
          )}
        </div>
      </div>

      {walkthroughTab === "walkthrough" && (
        <div className="space-y-4">
          {/* Problem search */}
          <div className="flex gap-2">
            <input
              className={inputClass + " flex-1"}
              placeholder="Search problems to add walkthrough..."
              value={walkthroughSearch}
              onChange={(e) => setWalkthroughSearch(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && searchWalkthroughProblems()}
            />
            <button
              onClick={searchWalkthroughProblems}
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 text-sm"
            >
              Search
            </button>
          </div>

          {/* Problem results */}
          {walkthroughProblems.length > 0 && !walkthroughProblem && (
            <div className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden">
              {walkthroughProblems.map((p) => (
                <button
                  key={p.id}
                  onClick={() => loadWalkthrough(p)}
                  className="w-full flex items-center justify-between px-4 py-3 border-b border-gray-800 hover:bg-gray-800 text-left"
                >
                  <span className="text-sm text-white">{p.title}</span>
                  <span className={`text-xs font-mono ${
                    p.difficulty === "Easy" ? "text-green-400" :
                    p.difficulty === "Medium" ? "text-amber-400" : "text-red-400"
                  }`}>{p.difficulty}</span>
                </button>
              ))}
            </div>
          )}

          {/* Walkthrough editor */}
          {walkthroughProblem && (
            <div className="bg-gray-900 rounded-xl border border-gray-800 p-5 space-y-5">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold text-white">{walkthroughProblem.title}</h2>
                <div className="flex gap-2">
                  <button
                    onClick={() => { setWalkthroughProblem(null); setWalkthroughSteps([]); setWalkthroughCode(""); }}
                    className="px-3 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 text-sm flex items-center gap-2"
                  >
                    <X className="w-4 h-4" /> Close
                  </button>
                  <button
                    onClick={saveWalkthrough}
                    disabled={savingWalkthrough}
                    className="px-3 py-2 bg-lime-600 text-white rounded-lg hover:bg-lime-500 text-sm flex items-center gap-2 disabled:opacity-50"
                  >
                    {savingWalkthrough ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                    Save
                  </button>
                </div>
              </div>

              {/* Solution code */}
              <div>
                <label className={labelClass}>Solution Code (optional)</label>
                <textarea
                  className={inputClass + " font-mono"}
                  rows={8}
                  value={walkthroughCode}
                  onChange={(e) => setWalkthroughCode(e.target.value)}
                  placeholder="Paste the solution code here..."
                />
              </div>

              {/* Steps */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className={labelClass}>Steps ({walkthroughSteps.length})</label>
                  <button
                    onClick={addStep}
                    className="px-3 py-1.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 text-xs flex items-center gap-1.5"
                  >
                    <Plus className="w-3.5 h-3.5" /> Add Step
                  </button>
                </div>
                <div className="space-y-3">
                  {walkthroughSteps.map((step, idx) => (
                    <div key={idx} className="bg-gray-800 rounded-lg p-4 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono text-indigo-400">Step {step.stepNumber}</span>
                        <button onClick={() => removeStep(idx)} className="text-red-400 hover:text-red-300">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <textarea
                        className={inputClass}
                        rows={2}
                        placeholder="Step description (e.g. i=0, val=2, need=7, cache={} → cache={2:0})"
                        value={step.description}
                        onChange={(e) => setWalkthroughSteps((prev) =>
                          prev.map((s, i) => i === idx ? { ...s, description: e.target.value } : s)
                        )}
                      />
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className={labelClass + " text-xs"}>Highlight Line #</label>
                          <input
                            type="number"
                            className={inputClass}
                            placeholder="e.g. 5"
                            value={step.highlightLine ?? ""}
                            onChange={(e) => setWalkthroughSteps((prev) =>
                              prev.map((s, i) => i === idx ? { ...s, highlightLine: parseInt(e.target.value) || undefined } : s)
                            )}
                          />
                        </div>
                        <div className="flex items-end pb-2">
                          <label className="flex items-center gap-2 text-sm text-gray-300 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={step.isKeyStep ?? false}
                              onChange={(e) => setWalkthroughSteps((prev) =>
                                prev.map((s, i) => i === idx ? { ...s, isKeyStep: e.target.checked } : s)
                              )}
                              className="rounded"
                            />
                            Key step
                          </label>
                        </div>
                      </div>
                      <div>
                        <label className={labelClass + " text-xs"}>Variables (JSON)</label>
                        <input
                          className={inputClass + " font-mono"}
                          placeholder='{"i": "0", "val": "2", "cache": "{}"}'
                          value={JSON.stringify(step.variables)}
                          onChange={(e) => {
                            try {
                              const parsed = JSON.parse(e.target.value);
                              setWalkthroughSteps((prev) =>
                                prev.map((s, i) => i === idx ? { ...s, variables: parsed } : s)
                              );
                            } catch { /* invalid json */ }
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {walkthroughTab === "topics" && (
      <div>
      <div className="mb-4 relative max-w-sm">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
        <input
          className={inputClass + " pl-9"}
          placeholder="Search topics..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {loading ? (
        <LoadingScreen compact />
      ) : (
        <div className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-800 text-left">
                <th className="px-4 py-3 text-xs font-medium text-gray-400 uppercase">
                  #
                </th>
                <th className="px-4 py-3 text-xs font-medium text-gray-400 uppercase">
                  Name
                </th>
                <th className="px-4 py-3 text-xs font-medium text-gray-400 uppercase">
                  Slug
                </th>
                <th className="px-4 py-3 text-xs font-medium text-gray-400 uppercase">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {topics.map((topic) => (
                <tr
                  key={topic.id}
                  className="border-b border-gray-800/50 hover:bg-gray-800/30"
                >
                  <td className="px-4 py-3 text-sm text-gray-400">
                    {topic.orderIndex}
                  </td>
                  <td className="px-4 py-3">
                    <div className="text-sm font-medium text-white">
                      {topic.name}
                    </div>
                    {topic.description && (
                      <div className="text-xs text-gray-500 truncate max-w-xs">
                        {topic.description}
                      </div>
                    )}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-400 font-mono">
                    {topic.slug}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleEdit(topic.id)}
                        className="p-2 rounded-lg bg-indigo-900/30 text-indigo-400 hover:bg-indigo-900/50 transition-colors"
                      >
                        <Pencil className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(topic.id, topic.name)}
                        className="p-2 rounded-lg bg-red-900/30 text-red-400 hover:bg-red-900/50 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {topics.length === 0 && (
                <tr>
                  <td
                    colSpan={4}
                    className="px-4 py-12 text-center text-gray-500"
                  >
                    No DSA topics found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
      </div>
      )}
      </div>
      )}
    </div>
  );
}
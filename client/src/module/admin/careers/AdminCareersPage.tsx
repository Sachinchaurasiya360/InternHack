import { useEffect, useState, useCallback } from "react";
import { Compass, Plus, Pencil, Trash2, ChevronDown, ChevronRight, Save, X, Loader2, GripVertical } from "lucide-react";
import api from "../../../lib/axios";

interface Skill {
  name: string;
  level: string;
}

interface Resource {
  title: string;
  url: string;
  type: string;
  free: boolean;
}

interface Tool {
  name: string;
  url: string;
  category: string;
}

interface Phase {
  title: string;
  description: string;
  orderIndex: number;
  durationWeeks: number | null;
  skills: Skill[];
  resources: Resource[];
  tools: Tool[];
}

interface Career {
  id: number;
  title: string;
  slug: string;
  description: string;
  category: string;
  difficulty: string;
  avgSalary: string | null;
  demandLevel: string | null;
  phases?: Phase[];
  _count?: { phases: number; enrollments: number };
}

const CATEGORIES = ["ENGINEERING", "DESIGN", "DATA", "PRODUCT", "MARKETING", "DEVOPS", "SECURITY", "OTHER"];
const DIFFICULTIES = ["BEGINNER", "INTERMEDIATE", "ADVANCED"];
const SKILL_LEVELS = ["BEGINNER", "INTERMEDIATE", "ADVANCED"];
const RESOURCE_TYPES = ["ARTICLE", "VIDEO", "COURSE", "BOOK", "DOCUMENTATION", "TUTORIAL"];

const emptyPhase = (): Phase => ({
  title: "",
  description: "",
  orderIndex: 0,
  durationWeeks: null,
  skills: [],
  resources: [],
  tools: [],
});

const emptyCareer = (): Omit<Career, "id" | "slug" | "_count"> => ({
  title: "",
  description: "",
  category: "ENGINEERING",
  difficulty: "BEGINNER",
  avgSalary: "",
  demandLevel: "",
  phases: [],
});

export default function AdminCareersPage() {
  const [careers, setCareers] = useState<Career[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<Career | null>(null);
  const [creating, setCreating] = useState(false);
  const [saving, setSaving] = useState(false);
  const [expandedPhase, setExpandedPhase] = useState<number | null>(null);

  const fetchCareers = useCallback(() => {
    setLoading(true);
    api.get("/admin/careers").then((res) => {
      setCareers(res.data.careers);
      setLoading(false);
    }).catch(() => setLoading(false));
  }, []);

  useEffect(() => { fetchCareers(); }, [fetchCareers]);

  const handleEdit = async (id: number) => {
    try {
      const { data } = await api.get(`/admin/careers/${id}`);
      setEditing(data.career);
      setCreating(false);
      setExpandedPhase(null);
    } catch {
      alert("Failed to load career details");
    }
  };

  const handleCreate = () => {
    setEditing(emptyCareer() as Career);
    setCreating(true);
    setExpandedPhase(null);
  };

  const handleDelete = async (id: number, title: string) => {
    if (!confirm(`Delete "${title}"? This will remove all phases, skills, and student enrollments.`)) return;
    try {
      await api.delete(`/admin/careers/${id}`);
      setCareers((prev) => prev.filter((c) => c.id !== id));
      if (editing?.id === id) { setEditing(null); setCreating(false); }
    } catch {
      alert("Failed to delete career");
    }
  };

  const handleSave = async () => {
    if (!editing) return;
    setSaving(true);
    try {
      const payload = {
        title: editing.title,
        description: editing.description,
        category: editing.category,
        difficulty: editing.difficulty,
        avgSalary: editing.avgSalary || undefined,
        demandLevel: editing.demandLevel || undefined,
        phases: (editing.phases ?? []).map((p, i) => ({
          title: p.title,
          description: p.description || undefined,
          orderIndex: i,
          durationWeeks: p.durationWeeks || undefined,
          skills: p.skills.map((s) => ({ name: s.name, level: s.level })),
          resources: p.resources.map((r) => ({ title: r.title, url: r.url, type: r.type, free: r.free })),
          tools: p.tools.map((t) => ({ name: t.name, url: t.url || undefined, category: t.category || undefined })),
        })),
      };

      if (creating) {
        await api.post("/admin/careers", payload);
      } else {
        await api.put(`/admin/careers/${editing.id}`, payload);
      }

      setEditing(null);
      setCreating(false);
      fetchCareers();
    } catch {
      alert("Failed to save career");
    } finally {
      setSaving(false);
    }
  };

  const updateField = (field: string, value: unknown) => {
    if (!editing) return;
    setEditing({ ...editing, [field]: value });
  };

  const updatePhase = (index: number, field: string, value: unknown) => {
    if (!editing?.phases) return;
    const phases = [...editing.phases];
    phases[index] = { ...phases[index], [field]: value };
    setEditing({ ...editing, phases });
  };

  const addPhase = () => {
    if (!editing) return;
    const phases = [...(editing.phases ?? []), emptyPhase()];
    setEditing({ ...editing, phases });
    setExpandedPhase(phases.length - 1);
  };

  const removePhase = (index: number) => {
    if (!editing?.phases) return;
    const phases = editing.phases.filter((_, i) => i !== index);
    setEditing({ ...editing, phases });
    if (expandedPhase === index) setExpandedPhase(null);
  };

  const addSkill = (phaseIndex: number) => {
    if (!editing?.phases) return;
    const phases = [...editing.phases];
    phases[phaseIndex] = {
      ...phases[phaseIndex],
      skills: [...phases[phaseIndex].skills, { name: "", level: "BEGINNER" }],
    };
    setEditing({ ...editing, phases });
  };

  const updateSkill = (phaseIndex: number, skillIndex: number, field: string, value: string) => {
    if (!editing?.phases) return;
    const phases = [...editing.phases];
    const skills = [...phases[phaseIndex].skills];
    skills[skillIndex] = { ...skills[skillIndex], [field]: value };
    phases[phaseIndex] = { ...phases[phaseIndex], skills };
    setEditing({ ...editing, phases });
  };

  const removeSkill = (phaseIndex: number, skillIndex: number) => {
    if (!editing?.phases) return;
    const phases = [...editing.phases];
    phases[phaseIndex] = {
      ...phases[phaseIndex],
      skills: phases[phaseIndex].skills.filter((_, i) => i !== skillIndex),
    };
    setEditing({ ...editing, phases });
  };

  const addResource = (phaseIndex: number) => {
    if (!editing?.phases) return;
    const phases = [...editing.phases];
    phases[phaseIndex] = {
      ...phases[phaseIndex],
      resources: [...phases[phaseIndex].resources, { title: "", url: "", type: "ARTICLE", free: true }],
    };
    setEditing({ ...editing, phases });
  };

  const updateResource = (phaseIndex: number, resIndex: number, field: string, value: unknown) => {
    if (!editing?.phases) return;
    const phases = [...editing.phases];
    const resources = [...phases[phaseIndex].resources];
    resources[resIndex] = { ...resources[resIndex], [field]: value };
    phases[phaseIndex] = { ...phases[phaseIndex], resources };
    setEditing({ ...editing, phases });
  };

  const removeResource = (phaseIndex: number, resIndex: number) => {
    if (!editing?.phases) return;
    const phases = [...editing.phases];
    phases[phaseIndex] = {
      ...phases[phaseIndex],
      resources: phases[phaseIndex].resources.filter((_, i) => i !== resIndex),
    };
    setEditing({ ...editing, phases });
  };

  const addTool = (phaseIndex: number) => {
    if (!editing?.phases) return;
    const phases = [...editing.phases];
    phases[phaseIndex] = {
      ...phases[phaseIndex],
      tools: [...phases[phaseIndex].tools, { name: "", url: "", category: "" }],
    };
    setEditing({ ...editing, phases });
  };

  const updateTool = (phaseIndex: number, toolIndex: number, field: string, value: string) => {
    if (!editing?.phases) return;
    const phases = [...editing.phases];
    const tools = [...phases[phaseIndex].tools];
    tools[toolIndex] = { ...tools[toolIndex], [field]: value };
    phases[phaseIndex] = { ...phases[phaseIndex], tools };
    setEditing({ ...editing, phases });
  };

  const removeTool = (phaseIndex: number, toolIndex: number) => {
    if (!editing?.phases) return;
    const phases = [...editing.phases];
    phases[phaseIndex] = {
      ...phases[phaseIndex],
      tools: phases[phaseIndex].tools.filter((_, i) => i !== toolIndex),
    };
    setEditing({ ...editing, phases });
  };

  const inputClass = "w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-colors";
  const selectClass = "px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors";
  const labelClass = "block text-xs font-medium text-gray-400 mb-1";

  // ── List View ──
  if (!editing) {
    return (
      <div>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-white flex items-center gap-2">
              <Compass className="w-6 h-6 text-indigo-400" />
              Career Roadmaps
            </h1>
            <p className="text-sm text-gray-400 mt-1">{careers.length} career paths</p>
          </div>
          <button
            onClick={handleCreate}
            className="flex items-center gap-2 px-4 py-2.5 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-500 transition-colors"
          >
            <Plus className="w-4 h-4" />
            New Career
          </button>
        </div>

        {loading ? (
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-16 bg-gray-900 rounded-lg animate-pulse" />
            ))}
          </div>
        ) : careers.length === 0 ? (
          <div className="text-center py-16 text-gray-500">
            <Compass className="w-10 h-10 mx-auto mb-3 opacity-40" />
            <p>No career paths yet. Create your first one.</p>
          </div>
        ) : (
          <div className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-800 text-xs font-medium text-gray-400 uppercase tracking-wider">
                  <th className="text-left px-4 py-3">Title</th>
                  <th className="text-left px-4 py-3">Category</th>
                  <th className="text-left px-4 py-3">Difficulty</th>
                  <th className="text-center px-4 py-3">Phases</th>
                  <th className="text-center px-4 py-3">Enrolled</th>
                  <th className="text-right px-4 py-3">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800/50">
                {careers.map((career) => (
                  <tr key={career.id} className="hover:bg-gray-800/30 transition-colors">
                    <td className="px-4 py-3">
                      <p className="text-sm font-medium text-white">{career.title}</p>
                      <p className="text-xs text-gray-500 truncate max-w-xs">{career.description}</p>
                    </td>
                    <td className="px-4 py-3">
                      <span className="text-xs font-medium px-2 py-1 rounded-md bg-indigo-500/10 text-indigo-400">
                        {career.category}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <span className={`text-xs font-medium px-2 py-1 rounded-md ${
                        career.difficulty === "BEGINNER" ? "bg-green-500/10 text-green-400" :
                        career.difficulty === "INTERMEDIATE" ? "bg-amber-500/10 text-amber-400" :
                        "bg-red-500/10 text-red-400"
                      }`}>
                        {career.difficulty}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-center text-sm text-gray-300">{career._count?.phases ?? 0}</td>
                    <td className="px-4 py-3 text-center text-sm text-gray-300">{career._count?.enrollments ?? 0}</td>
                    <td className="px-4 py-3 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => handleEdit(career.id)}
                          className="p-1.5 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
                          title="Edit"
                        >
                          <Pencil className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(career.id, career.title)}
                          className="p-1.5 text-gray-400 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-colors"
                          title="Delete"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    );
  }

  // ── Edit / Create View ──
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <button
            onClick={() => { setEditing(null); setCreating(false); }}
            className="text-sm text-gray-400 hover:text-white mb-2 flex items-center gap-1 transition-colors"
          >
            ← Back to list
          </button>
          <h1 className="text-2xl font-bold text-white">
            {creating ? "Create Career Path" : `Edit: ${editing.title}`}
          </h1>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => { setEditing(null); setCreating(false); }}
            className="flex items-center gap-2 px-4 py-2.5 bg-gray-800 text-gray-300 text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors"
          >
            <X className="w-4 h-4" />
            Cancel
          </button>
          <button
            onClick={handleSave}
            disabled={saving || !editing.title || !editing.description}
            className="flex items-center gap-2 px-4 py-2.5 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-500 transition-colors disabled:opacity-50"
          >
            {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
            {creating ? "Create" : "Save Changes"}
          </button>
        </div>
      </div>

      {/* Career Metadata */}
      <div className="bg-gray-900 rounded-xl border border-gray-800 p-6 mb-6">
        <h2 className="text-sm font-semibold text-gray-300 mb-4 uppercase tracking-wider">Career Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:col-span-2">
            <label className={labelClass}>Title</label>
            <input
              className={inputClass}
              value={editing.title}
              onChange={(e) => updateField("title", e.target.value)}
              placeholder="e.g. Full Stack Developer"
            />
          </div>
          <div className="md:col-span-2">
            <label className={labelClass}>Description</label>
            <textarea
              className={`${inputClass} min-h-[80px]`}
              value={editing.description}
              onChange={(e) => updateField("description", e.target.value)}
              placeholder="A comprehensive path to becoming a..."
            />
          </div>
          <div>
            <label className={labelClass}>Category</label>
            <select className={selectClass} value={editing.category} onChange={(e) => updateField("category", e.target.value)}>
              {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
          <div>
            <label className={labelClass}>Difficulty</label>
            <select className={selectClass} value={editing.difficulty} onChange={(e) => updateField("difficulty", e.target.value)}>
              {DIFFICULTIES.map((d) => <option key={d} value={d}>{d}</option>)}
            </select>
          </div>
          <div>
            <label className={labelClass}>Avg Salary</label>
            <input
              className={inputClass}
              value={editing.avgSalary ?? ""}
              onChange={(e) => updateField("avgSalary", e.target.value)}
              placeholder="e.g. $80k - $120k"
            />
          </div>
          <div>
            <label className={labelClass}>Demand Level</label>
            <input
              className={inputClass}
              value={editing.demandLevel ?? ""}
              onChange={(e) => updateField("demandLevel", e.target.value)}
              placeholder="e.g. High"
            />
          </div>
        </div>
      </div>

      {/* Phases */}
      <div className="bg-gray-900 rounded-xl border border-gray-800 p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">
            Phases ({editing.phases?.length ?? 0})
          </h2>
          <button
            onClick={addPhase}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-800 text-gray-300 text-xs font-medium rounded-lg hover:bg-gray-700 transition-colors"
          >
            <Plus className="w-3.5 h-3.5" /> Add Phase
          </button>
        </div>

        {(editing.phases ?? []).length === 0 ? (
          <p className="text-sm text-gray-500 text-center py-8">No phases yet. Add one to get started.</p>
        ) : (
          <div className="space-y-3">
            {(editing.phases ?? []).map((phase, pi) => {
              const isExpanded = expandedPhase === pi;
              return (
                <div key={pi} className="bg-gray-800/50 rounded-lg border border-gray-700/50 overflow-hidden">
                  {/* Phase header */}
                  <div
                    className="flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-gray-800/80 transition-colors"
                    onClick={() => setExpandedPhase(isExpanded ? null : pi)}
                  >
                    <GripVertical className="w-4 h-4 text-gray-600 shrink-0" />
                    <span className="w-6 h-6 rounded-md bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs font-bold shrink-0">
                      {pi + 1}
                    </span>
                    <span className="flex-1 text-sm font-medium text-white truncate">
                      {phase.title || "Untitled Phase"}
                    </span>
                    <span className="text-xs text-gray-500 shrink-0">
                      {phase.skills.length} skills · {phase.resources.length} resources · {phase.tools.length} tools
                    </span>
                    <button
                      onClick={(e) => { e.stopPropagation(); removePhase(pi); }}
                      className="p-1 text-gray-500 hover:text-red-400 transition-colors shrink-0"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                    {isExpanded ? <ChevronDown className="w-4 h-4 text-gray-500" /> : <ChevronRight className="w-4 h-4 text-gray-500" />}
                  </div>

                  {/* Phase content */}
                  {isExpanded && (
                    <div className="px-4 pb-4 space-y-4 border-t border-gray-700/50">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-4">
                        <div className="md:col-span-2">
                          <label className={labelClass}>Phase Title</label>
                          <input
                            className={inputClass}
                            value={phase.title}
                            onChange={(e) => updatePhase(pi, "title", e.target.value)}
                            placeholder="e.g. Foundation"
                          />
                        </div>
                        <div>
                          <label className={labelClass}>Duration (weeks)</label>
                          <input
                            type="number"
                            className={inputClass}
                            value={phase.durationWeeks ?? ""}
                            onChange={(e) => updatePhase(pi, "durationWeeks", e.target.value ? parseInt(e.target.value) : null)}
                            placeholder="4"
                          />
                        </div>
                        <div className="md:col-span-3">
                          <label className={labelClass}>Description</label>
                          <textarea
                            className={`${inputClass} min-h-[60px]`}
                            value={phase.description}
                            onChange={(e) => updatePhase(pi, "description", e.target.value)}
                            placeholder="What this phase covers..."
                          />
                        </div>
                      </div>

                      {/* Skills */}
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Skills</label>
                          <button onClick={() => addSkill(pi)} className="text-xs text-indigo-400 hover:text-indigo-300 font-medium">+ Add Skill</button>
                        </div>
                        {phase.skills.length === 0 ? (
                          <p className="text-xs text-gray-600">No skills added.</p>
                        ) : (
                          <div className="space-y-2">
                            {phase.skills.map((skill, si) => (
                              <div key={si} className="flex items-center gap-2">
                                <input
                                  className={`${inputClass} flex-1`}
                                  value={skill.name}
                                  onChange={(e) => updateSkill(pi, si, "name", e.target.value)}
                                  placeholder="Skill name"
                                />
                                <select
                                  className={selectClass}
                                  value={skill.level}
                                  onChange={(e) => updateSkill(pi, si, "level", e.target.value)}
                                >
                                  {SKILL_LEVELS.map((l) => <option key={l} value={l}>{l}</option>)}
                                </select>
                                <button onClick={() => removeSkill(pi, si)} className="p-1.5 text-gray-500 hover:text-red-400 transition-colors">
                                  <X className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Resources */}
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Resources</label>
                          <button onClick={() => addResource(pi)} className="text-xs text-indigo-400 hover:text-indigo-300 font-medium">+ Add Resource</button>
                        </div>
                        {phase.resources.length === 0 ? (
                          <p className="text-xs text-gray-600">No resources added.</p>
                        ) : (
                          <div className="space-y-2">
                            {phase.resources.map((res, ri) => (
                              <div key={ri} className="flex items-center gap-2">
                                <input
                                  className={`${inputClass} flex-1`}
                                  value={res.title}
                                  onChange={(e) => updateResource(pi, ri, "title", e.target.value)}
                                  placeholder="Resource title"
                                />
                                <input
                                  className={`${inputClass} flex-1`}
                                  value={res.url}
                                  onChange={(e) => updateResource(pi, ri, "url", e.target.value)}
                                  placeholder="https://..."
                                />
                                <select
                                  className={selectClass}
                                  value={res.type}
                                  onChange={(e) => updateResource(pi, ri, "type", e.target.value)}
                                >
                                  {RESOURCE_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
                                </select>
                                <label className="flex items-center gap-1 text-xs text-gray-400 shrink-0">
                                  <input
                                    type="checkbox"
                                    checked={res.free}
                                    onChange={(e) => updateResource(pi, ri, "free", e.target.checked)}
                                    className="rounded"
                                  />
                                  Free
                                </label>
                                <button onClick={() => removeResource(pi, ri)} className="p-1.5 text-gray-500 hover:text-red-400 transition-colors">
                                  <X className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Tools */}
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Tools</label>
                          <button onClick={() => addTool(pi)} className="text-xs text-indigo-400 hover:text-indigo-300 font-medium">+ Add Tool</button>
                        </div>
                        {phase.tools.length === 0 ? (
                          <p className="text-xs text-gray-600">No tools added.</p>
                        ) : (
                          <div className="space-y-2">
                            {phase.tools.map((tool, ti) => (
                              <div key={ti} className="flex items-center gap-2">
                                <input
                                  className={`${inputClass} flex-1`}
                                  value={tool.name}
                                  onChange={(e) => updateTool(pi, ti, "name", e.target.value)}
                                  placeholder="Tool name"
                                />
                                <input
                                  className={`${inputClass} flex-1`}
                                  value={tool.url}
                                  onChange={(e) => updateTool(pi, ti, "url", e.target.value)}
                                  placeholder="https://..."
                                />
                                <input
                                  className={`${inputClass} w-32`}
                                  value={tool.category}
                                  onChange={(e) => updateTool(pi, ti, "category", e.target.value)}
                                  placeholder="Category"
                                />
                                <button onClick={() => removeTool(pi, ti)} className="p-1.5 text-gray-500 hover:text-red-400 transition-colors">
                                  <X className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

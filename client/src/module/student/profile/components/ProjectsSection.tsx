import { useState } from "react";
import { ExternalLink, Github, Pencil, Plus, Trash2, X } from "lucide-react";
import type { ProjectItem } from "../../../../lib/types";
import { inputClass, labelClass } from "./styles";

export function ProjectsSection({ projects, onChange, errors }: {
  projects: ProjectItem[];
  onChange: (p: ProjectItem[]) => void;
  errors?: string[];
}) {
  const [editing, setEditing] = useState<string | null>(null);
  const [draft, setDraft] = useState<ProjectItem>({ id: "", title: "", description: "", techStack: [], liveUrl: "", repoUrl: "" });
  const [techInput, setTechInput] = useState("");

  const startAdd = () => {
    if (projects.length >= 10) return;
    const id = crypto.randomUUID();
    setDraft({ id, title: "", description: "", techStack: [], liveUrl: "", repoUrl: "" });
    setEditing(id);
  };

  const startEdit = (p: ProjectItem) => {
    setDraft({ ...p });
    setEditing(p.id);
    setTechInput("");
  };

  const save = () => {
    if (!draft.title.trim()) return;
    const exists = projects.find((p) => p.id === draft.id);
    if (exists) {
      onChange(projects.map((p) => (p.id === draft.id ? draft : p)));
    } else {
      onChange([...projects, draft]);
    }
    setEditing(null);
  };

  const remove = (id: string) => {
    onChange(projects.filter((p) => p.id !== id));
    if (editing === id) setEditing(null);
  };

  const addTech = () => {
    const t = techInput.trim();
    if (!t || draft.techStack.length >= 10) return;
    if (!draft.techStack.includes(t)) setDraft((d) => ({ ...d, techStack: [...d.techStack, t] }));
    setTechInput("");
  };

  return (
    <div className="px-5 py-5 space-y-3">
      {errors && errors.length > 0 && (
        <p className="text-xs text-red-500 dark:text-red-400 px-1 font-mono">Project URLs must be valid (e.g. https://...)</p>
      )}
      {projects.filter((p) => p.id !== editing).map((p) => (
        <div key={p.id} className="flex items-start gap-3 px-4 py-3 border border-stone-200 dark:border-white/10 rounded-md">
          <div className="flex-1 min-w-0">
            <h4 className="text-sm font-bold text-stone-900 dark:text-stone-50 truncate">{p.title}</h4>
            <p className="text-xs text-stone-500 mt-1 line-clamp-2 leading-relaxed">{p.description}</p>
            {p.techStack.length > 0 && (
              <div className="flex flex-wrap gap-1 mt-2">
                {p.techStack.map((t, i) => (
                  <span key={i} className="px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 rounded-md border border-stone-200 dark:border-white/10">{t}</span>
                ))}
              </div>
            )}
            {(p.liveUrl || p.repoUrl) && (
              <div className="flex gap-3 mt-2.5">
                {p.liveUrl && <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="text-[11px] font-mono uppercase tracking-widest text-stone-500 hover:text-stone-900 dark:hover:text-stone-50 flex items-center gap-1 no-underline"><ExternalLink className="w-3 h-3" /> live</a>}
                {p.repoUrl && <a href={p.repoUrl} target="_blank" rel="noopener noreferrer" className="text-[11px] font-mono uppercase tracking-widest text-stone-500 hover:text-stone-900 dark:hover:text-stone-50 flex items-center gap-1 no-underline"><Github className="w-3 h-3" /> code</a>}
              </div>
            )}
          </div>
          <div className="flex gap-1 shrink-0">
            <button type="button" onClick={() => startEdit(p)} aria-label="Edit project" className="p-1.5 rounded-md text-stone-400 hover:text-stone-900 dark:hover:text-stone-50 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors bg-transparent border-0 cursor-pointer">
              <Pencil className="w-3.5 h-3.5" />
            </button>
            <button type="button" onClick={() => remove(p.id)} aria-label="Delete project" className="p-1.5 rounded-md text-stone-400 hover:text-red-500 transition-colors bg-transparent border-0 cursor-pointer">
              <Trash2 className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      ))}

      {editing && (
        <div className="px-4 py-4 border border-lime-300 dark:border-lime-700/40 bg-lime-50/40 dark:bg-lime-900/5 rounded-md space-y-3">
          <div>
            <label className={labelClass}>Title</label>
            <input type="text" value={draft.title} onChange={(e) => setDraft((d) => ({ ...d, title: e.target.value }))} className={inputClass} placeholder="Project title" maxLength={100} />
          </div>
          <div>
            <label className={labelClass}>Description</label>
            <textarea value={draft.description} onChange={(e) => setDraft((d) => ({ ...d, description: e.target.value }))} className={`${inputClass} resize-none`} rows={2} placeholder="Brief description..." maxLength={500} />
          </div>
          <div>
            <label className={labelClass}>Tech stack</label>
            <div className="flex flex-wrap gap-1.5 mb-2">
              {draft.techStack.map((t, i) => (
                <span key={i} className="inline-flex items-center gap-1 px-2.5 py-1 text-xs bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 rounded-md border border-stone-200 dark:border-white/10">
                  {t}
                  <button
                    type="button"
                    onClick={() => setDraft((d) => ({ ...d, techStack: d.techStack.filter((_, j) => j !== i) }))}
                    aria-label={`Remove ${t}`}
                    className="opacity-60 hover:opacity-100 bg-transparent border-0 cursor-pointer p-0"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))}
            </div>
            <div className="flex gap-2">
              <input type="text" value={techInput} onChange={(e) => setTechInput(e.target.value)}
                onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); addTech(); } }}
                className={`${inputClass} flex-1`} placeholder="Add technology" />
              <button
                type="button"
                onClick={addTech}
                aria-label="Add technology"
                className="shrink-0 inline-flex items-center justify-center w-10 h-10 border border-stone-300 dark:border-white/10 rounded-md text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-50 hover:border-stone-900 dark:hover:border-stone-50 transition-colors bg-transparent cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className={labelClass}><ExternalLink className="w-3 h-3" /> Live URL</label>
              <input type="url" value={draft.liveUrl ?? ""} onChange={(e) => setDraft((d) => ({ ...d, liveUrl: e.target.value }))} className={inputClass} placeholder="https://..." />
            </div>
            <div>
              <label className={labelClass}><Github className="w-3 h-3" /> Repo URL</label>
              <input type="url" value={draft.repoUrl ?? ""} onChange={(e) => setDraft((d) => ({ ...d, repoUrl: e.target.value }))} className={inputClass} placeholder="https://github.com/..." />
            </div>
          </div>
          <div className="flex gap-2 pt-1">
            <button
              type="button"
              onClick={save}
              disabled={!draft.title.trim()}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-lime-400 text-stone-950 rounded-md text-xs font-bold hover:bg-lime-300 transition-colors border-0 cursor-pointer disabled:opacity-50"
            >
              Save
            </button>
            <button
              type="button"
              onClick={() => setEditing(null)}
              className="inline-flex items-center gap-1.5 px-4 py-2 border border-stone-300 dark:border-white/10 rounded-md text-xs font-bold text-stone-700 dark:text-stone-300 hover:border-stone-500 dark:hover:border-white/30 transition-colors bg-transparent cursor-pointer"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {projects.length < 10 && !editing && (
        <button
          type="button"
          onClick={startAdd}
          className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 border border-dashed border-stone-300 dark:border-white/15 rounded-md text-sm text-stone-600 dark:text-stone-400 hover:border-stone-400 dark:hover:border-white/30 hover:text-stone-900 dark:hover:text-stone-50 transition-colors bg-transparent cursor-pointer"
        >
          <Plus className="w-4 h-4" /> Add project
        </button>
      )}
    </div>
  );
}

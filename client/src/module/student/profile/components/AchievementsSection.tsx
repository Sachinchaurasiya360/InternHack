import { useState } from "react";
import { Calendar, Pencil, Plus, Trophy, Trash2 } from "lucide-react";
import type { AchievementItem } from "../../../../lib/types";
import { inputClass, labelClass } from "./styles";

export function AchievementsSection({ achievements, onChange, errors }: {
  achievements: AchievementItem[];
  onChange: (a: AchievementItem[]) => void;
  errors?: string[];
}) {
  const [editing, setEditing] = useState<string | null>(null);
  const [draft, setDraft] = useState<AchievementItem>({ id: "", title: "", description: "", date: "" });
  const [dateError, setDateError] = useState<string>("");

  const startAdd = () => {
    if (achievements.length >= 10) return;
    setDateError("");
    const id = crypto.randomUUID();
    setDraft({ id, title: "", description: "", date: "" });
    setEditing(id);
  };

  const startEdit = (a: AchievementItem) => {
    setDateError("");
    setDraft({ ...a });
    setEditing(a.id);
  };

  const save = () => {
    if (!draft.title.trim()) return;

    if (draft.date && draft.date.trim()) {
      const parsed = new Date(draft.date.trim());
      const isValidDate = !isNaN(parsed.getTime());
      const looksReasonable = parsed.getFullYear() >= 1900 && parsed.getFullYear() <= new Date().getFullYear() + 1;
      if (!isValidDate || !looksReasonable) {
        setDateError("Please enter a valid date (e.g. June 2025 or 2024-06-01)");
        return;
      }
    }

    setDateError("");
    const exists = achievements.find((a) => a.id === draft.id);
    if (exists) {
      onChange(achievements.map((a) => (a.id === draft.id ? draft : a)));
    } else {
      onChange([...achievements, draft]);
    }
    setEditing(null);
  };

  const remove = (id: string) => {
    onChange(achievements.filter((a) => a.id !== id));
    if (editing === id) setEditing(null);
  };

  return (
    <div className="px-5 py-5 space-y-3">
      {errors && errors.length > 0 && (
        <p className="text-xs text-red-500 dark:text-red-400 px-1 font-mono">{errors[0]}</p>
      )}
      {achievements.filter((a) => a.id !== editing).map((a) => (
        <div key={a.id} className="flex items-start gap-3 px-4 py-3 border border-stone-200 dark:border-white/10 rounded-md">
          <div className="w-8 h-8 rounded-md bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-white/10 flex items-center justify-center shrink-0">
            <Trophy className="w-4 h-4 text-stone-500" />
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="text-sm font-bold text-stone-900 dark:text-stone-50 truncate">{a.title}</h4>
            <p className="text-xs text-stone-500 mt-1 line-clamp-2 leading-relaxed">{a.description}</p>
            {a.date && <p className="text-[10px] font-mono uppercase tracking-widest text-stone-500 mt-1.5">{a.date}</p>}
          </div>
          <div className="flex gap-1 shrink-0">
            <button type="button" onClick={() => startEdit(a)} aria-label="Edit achievement" className="p-1.5 rounded-md text-stone-400 hover:text-stone-900 dark:hover:text-stone-50 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors bg-transparent border-0 cursor-pointer">
              <Pencil className="w-3.5 h-3.5" />
            </button>
            <button type="button" onClick={() => remove(a.id)} aria-label="Delete achievement" className="p-1.5 rounded-md text-stone-400 hover:text-red-500 transition-colors bg-transparent border-0 cursor-pointer">
              <Trash2 className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      ))}

      {editing && (
        <div className="px-4 py-4 border border-lime-300 dark:border-lime-700/40 bg-lime-50/40 dark:bg-lime-900/5 rounded-md space-y-3">
          <div>
            <label className={labelClass}>Title</label>
            <input type="text" value={draft.title} onChange={(e) => setDraft((d) => ({ ...d, title: e.target.value }))} className={inputClass} placeholder="e.g. Dean's List, Hackathon Winner" maxLength={100} />
          </div>
          <div>
            <label className={labelClass}>Description</label>
            <textarea value={draft.description} onChange={(e) => setDraft((d) => ({ ...d, description: e.target.value }))} className={`${inputClass} resize-none`} rows={2} placeholder="Brief description..." maxLength={300} />
          </div>
          <div>
            <label className={labelClass}><Calendar className="w-3 h-3" /> Date</label>
            <input
              type="text"
              value={draft.date ?? ""}
              onChange={(e) => { setDraft((d) => ({ ...d, date: e.target.value })); setDateError(""); }}
              className={dateError ? `${inputClass} border-red-400` : inputClass}
              placeholder="e.g. June 2025 or 2024-06-01"
              maxLength={20}
            />
            {dateError && <p className="text-xs text-red-500 mt-1 font-mono">{dateError}</p>}
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
              onClick={() => { setDateError(""); setEditing(null); }}
              className="inline-flex items-center gap-1.5 px-4 py-2 border border-stone-300 dark:border-white/10 rounded-md text-xs font-bold text-stone-700 dark:text-stone-300 hover:border-stone-500 dark:hover:border-white/30 transition-colors bg-transparent cursor-pointer"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {achievements.length < 10 && !editing && (
        <button
          type="button"
          onClick={startAdd}
          className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 border border-dashed border-stone-300 dark:border-white/15 rounded-md text-sm text-stone-600 dark:text-stone-400 hover:border-stone-400 dark:hover:border-white/30 hover:text-stone-900 dark:hover:text-stone-50 transition-colors bg-transparent cursor-pointer"
        >
          <Plus className="w-4 h-4" /> Add achievement
        </button>
      )}
    </div>
  );
}

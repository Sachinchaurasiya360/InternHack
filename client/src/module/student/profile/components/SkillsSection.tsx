import { useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { ShieldCheck, X, Plus } from "lucide-react";
import { Link } from "react-router";
import type { VerifiedSkill } from "../../../../lib/types";
import { inputClass } from "./styles";

interface SkillsSectionProps {
  skills: string[];
  skillInput: string;
  showSkillSuggestions: boolean;
  filteredSkillSuggestions: string[];
  verifiedMap: Map<string, VerifiedSkill>;
  skillInputRef: React.RefObject<HTMLInputElement | null>;
  skillDropdownRef: React.RefObject<HTMLDivElement | null>;
  isEditing: boolean;
  onSkillInputChange: (value: string) => void;
  onSkillInputFocus: () => void;
  onAddSkill: (name?: string) => void;
  onRemoveSkill: (index: number) => void;
}

export function SkillsSection({
  skills,
  skillInput,
  showSkillSuggestions,
  filteredSkillSuggestions,
  verifiedMap,
  skillInputRef,
  skillDropdownRef,
  isEditing,
  onSkillInputChange,
  onSkillInputFocus,
  onAddSkill,
  onRemoveSkill,
}: SkillsSectionProps) {
  const anchorRef = useRef<HTMLDivElement>(null);
  const [dropdownRect, setDropdownRect] = useState<{ top: number; left: number; width: number } | null>(null);
  const showDropdown = isEditing && showSkillSuggestions && filteredSkillSuggestions.length > 0;

  // Rendered via a portal (below) so the dropdown escapes this section's own
  // stacking context — otherwise it gets painted over by the next section,
  // since each profile section is wrapped in a Framer Motion div that creates
  // its own stacking context via `transform`, trapping z-index inside it.
  useLayoutEffect(() => {
    if (!showDropdown) return;
    const updatePosition = () => {
      const el = anchorRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      setDropdownRect({ top: rect.bottom + 4, left: rect.left, width: Math.max(rect.width - 64, 200) });
    };
    updatePosition();
    window.addEventListener("scroll", updatePosition, true);
    window.addEventListener("resize", updatePosition);
    return () => {
      window.removeEventListener("scroll", updatePosition, true);
      window.removeEventListener("resize", updatePosition);
    };
  }, [showDropdown]);

  return (
    <div className="px-5 py-5 space-y-4">
      {skills.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {skills.map((skill, i) => {
            const v = verifiedMap.get(skill.toLowerCase());
            return (
              <span
                key={i}
                className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs rounded-md border ${
                  v
                    ? "bg-lime-50 dark:bg-lime-900/10 text-lime-700 dark:text-lime-400 border-lime-200 dark:border-lime-800/40"
                    : "bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 border-stone-200 dark:border-white/10"
                }`}
              >
                {v && <ShieldCheck className="w-3 h-3" />}
                <span className="font-medium">{skill}</span>
                {v && <span className="text-[9px] font-mono opacity-70">{v.score}%</span>}
                {isEditing && (
                  <button
                    type="button"
                    onClick={() => onRemoveSkill(i)}
                    aria-label={`Remove ${skill}`}
                    className="opacity-60 hover:opacity-100 bg-transparent border-0 cursor-pointer p-0"
                  >
                    <X className="w-3 h-3" />
                  </button>
                )}
              </span>
            );
          })}
        </div>
      )}
      {skills.length === 0 && !isEditing && (
        <p className="text-sm text-stone-400 dark:text-stone-600">No skills added yet.</p>
      )}
      {isEditing && (
      <div ref={anchorRef} className="relative">
        <div className="flex gap-2">
          <input
            ref={skillInputRef} type="text" value={skillInput}
            onChange={(e) => onSkillInputChange(e.target.value)}
            onFocus={onSkillInputFocus}
            onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); onAddSkill(); } }}
            className={`${inputClass} flex-1`} placeholder="Type a skill and press Enter" autoComplete="off"
          />
          <button
            type="button"
            onClick={() => onAddSkill()}
            className="shrink-0 inline-flex items-center gap-1.5 px-4 py-2.5 border border-stone-300 dark:border-white/10 rounded-md text-sm font-bold text-stone-900 dark:text-stone-50 hover:border-stone-900 dark:hover:border-stone-50 transition-colors bg-transparent cursor-pointer"
          >
            <Plus className="w-3.5 h-3.5" /> Add
          </button>
        </div>
        {showDropdown && dropdownRect && createPortal(
          <div
            ref={skillDropdownRef}
            style={{ position: "fixed", top: dropdownRect.top, left: dropdownRect.left, width: dropdownRect.width }}
            className="z-50 bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md shadow-lg max-h-52 overflow-y-auto">
            <p className="px-3 py-2 text-[10px] font-mono uppercase tracking-widest text-stone-500 border-b border-stone-200 dark:border-white/10 bg-stone-50 dark:bg-stone-950">
              verifiable skills
            </p>
            {filteredSkillSuggestions.map((skill) => (
              <button
                key={skill}
                type="button"
                onClick={() => onAddSkill(skill)}
                className="w-full flex items-center gap-2 text-left px-3 py-2 hover:bg-stone-100 dark:hover:bg-stone-800 border-0 bg-transparent cursor-pointer border-b border-stone-100 dark:border-white/5 last:border-b-0"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-lime-500 shrink-0" />
                <span className="text-sm font-medium text-stone-900 dark:text-stone-50">{skill}</span>
                <span className="text-[9px] font-mono uppercase tracking-widest text-lime-600 dark:text-lime-400 ml-auto shrink-0">can verify</span>
              </button>
            ))}
          </div>,
          document.body,
        )}
      </div>
      )}
      {skills.length > 0 && (
        <Link to="/student/skill-verification" className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-stone-500 hover:text-stone-900 dark:hover:text-stone-50 no-underline transition-colors">
          <ShieldCheck className="w-3.5 h-3.5" /> verify skills with proctored tests
        </Link>
      )}
    </div>
  );
}

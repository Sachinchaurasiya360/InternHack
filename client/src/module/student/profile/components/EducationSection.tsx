import { Building2, Briefcase, GraduationCap, Calendar, Loader2 } from "lucide-react";
import { inputClass, inputErrorClass, labelClass } from "./styles";

interface CollegeSuggestion {
  name: string;
  country: string;
  stateProvince: string | null;
}

interface EducationSectionProps {
  college: string;
  graduationYear: number | null;
  company: string;
  designation: string;
  fieldErrors: Record<string, string[]>;
  collegeSuggestions: CollegeSuggestion[];
  collegeLoading: boolean;
  showCollegeSuggestions: boolean;
  collegeInputRef: React.RefObject<HTMLInputElement | null>;
  collegeDropdownRef: React.RefObject<HTMLDivElement | null>;
  isEditing: boolean;
  onCollegeChange: (value: string) => void;
  onCollegeFocus: () => void;
  onSelectCollege: (name: string) => void;
  onChange: (field: string, value: string | number | null) => void;
}

function FieldError({ errs }: { errs?: string[] }) {
  if (!errs?.length) return null;
  return <p className="text-xs text-red-500 dark:text-red-400 mt-1.5 font-mono">{errs[0]}</p>;
}

function ReadField({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div>
      <div className={labelClass}>{icon} {label}</div>
      <p className="text-sm text-stone-900 dark:text-stone-50 truncate">
        {value || <span className="text-stone-400 dark:text-stone-600">Not added</span>}
      </p>
    </div>
  );
}

export function EducationSection({
  college,
  graduationYear,
  company,
  designation,
  fieldErrors,
  collegeSuggestions,
  collegeLoading,
  showCollegeSuggestions,
  collegeInputRef,
  collegeDropdownRef,
  isEditing,
  onCollegeChange,
  onCollegeFocus,
  onSelectCollege,
  onChange,
}: EducationSectionProps) {
  if (!isEditing) {
    return (
      <div className="px-5 py-5 space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <ReadField icon={<GraduationCap className="w-3.5 h-3.5" />} label="College" value={college} />
          <ReadField icon={<Calendar className="w-3.5 h-3.5" />} label="Graduation year" value={graduationYear ? String(graduationYear) : ""} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <ReadField icon={<Building2 className="w-3.5 h-3.5" />} label="Company" value={company} />
          <ReadField icon={<Briefcase className="w-3.5 h-3.5" />} label="Role" value={designation} />
        </div>
      </div>
    );
  }

  return (
    <div className="px-5 py-5 space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="relative">
          <label className={labelClass}><GraduationCap className="w-3.5 h-3.5" /> College</label>
          <input
            ref={collegeInputRef} type="text" value={college}
            onChange={(e) => onCollegeChange(e.target.value)}
            onFocus={onCollegeFocus}
            className={inputClass} placeholder="Start typing college name..." autoComplete="off"
          />
          {collegeLoading && <Loader2 className="absolute right-3 top-10 w-4 h-4 text-stone-400 animate-spin" />}
          {showCollegeSuggestions && collegeSuggestions.length > 0 && (
            <div ref={collegeDropdownRef}
              className="absolute z-50 left-0 right-0 top-full mt-1 bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md shadow-lg max-h-56 overflow-y-auto">
              {collegeSuggestions.map((c, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => onSelectCollege(c.name)}
                  className="w-full flex items-start text-left px-4 py-2.5 hover:bg-stone-100 dark:hover:bg-stone-800 border-0 bg-transparent cursor-pointer border-b border-stone-100 dark:border-white/5 last:border-b-0"
                >
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-stone-900 dark:text-stone-50 truncate">{c.name}</p>
                    <p className="text-[10px] font-mono uppercase tracking-widest text-stone-500 mt-0.5">{c.stateProvince ? `${c.stateProvince}, ` : ""}{c.country}</p>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
        <div>
          <label className={labelClass}><Calendar className="w-3.5 h-3.5" /> Graduation year</label>
          <input type="number" value={graduationYear ?? ""} onChange={(e) => onChange("graduationYear", e.target.value ? Number(e.target.value) : null)}
            className={fieldErrors.graduationYear ? inputErrorClass : inputClass} placeholder="e.g. 2026" min={1990} max={2040} />
          <FieldError errs={fieldErrors.graduationYear} />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}><Building2 className="w-3.5 h-3.5" /> Company</label>
          <input type="text" value={company} onChange={(e) => onChange("company", e.target.value)} className={inputClass} placeholder="e.g. Google" />
        </div>
        <div>
          <label className={labelClass}><Briefcase className="w-3.5 h-3.5" /> Role</label>
          <input type="text" value={designation} onChange={(e) => onChange("designation", e.target.value)} className={inputClass} placeholder="e.g. CS Student" />
        </div>
      </div>
    </div>
  );
}

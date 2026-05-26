import { Briefcase, CheckCircle, Loader2, MapPin } from "lucide-react";
import { TogglePills } from "./TogglePills";
import { inputClass, labelClass } from "./styles";
import api from "../../../../lib/axios";
import toast from "@/components/ui/toast";

interface JobPreferencesSectionProps {
  jobPrefRoles: string;
  jobPrefSkills: string;
  jobPrefLocations: string;
  jobPrefSalary: string;
  jobPrefWorkMode: string[];
  jobPrefExpLevel: string[];
  jobPrefDomains: string[];
  savingJobPrefs: boolean;
  onRolesChange: (v: string) => void;
  onSkillsChange: (v: string) => void;
  onLocationsChange: (v: string) => void;
  onSalaryChange: (v: string) => void;
  onWorkModeChange: (v: string[]) => void;
  onExpLevelChange: (v: string[]) => void;
  onDomainsChange: (v: string[]) => void;
  onSavingChange: (v: boolean) => void;
}

export function JobPreferencesSection({
  jobPrefRoles,
  jobPrefSkills,
  jobPrefLocations,
  jobPrefSalary,
  jobPrefWorkMode,
  jobPrefExpLevel,
  jobPrefDomains,
  savingJobPrefs,
  onRolesChange,
  onSkillsChange,
  onLocationsChange,
  onSalaryChange,
  onWorkModeChange,
  onExpLevelChange,
  onDomainsChange,
  onSavingChange,
}: JobPreferencesSectionProps) {
  const handleSave = async () => {
    const split = (s: string) => s.split(",").map((v) => v.trim()).filter(Boolean);
    onSavingChange(true);
    try {
      await api.put("/job-feed/preferences", {
        desiredRoles: split(jobPrefRoles),
        desiredSkills: split(jobPrefSkills),
        desiredLocations: split(jobPrefLocations),
        minSalary: jobPrefSalary ? Number(jobPrefSalary) * 100000 : null,
        workMode: jobPrefWorkMode,
        experienceLevel: jobPrefExpLevel,
        domains: jobPrefDomains,
      });
      toast.success("Job preferences saved!");
    } catch {
      toast.error("Failed to save preferences");
    } finally {
      onSavingChange(false);
    }
  };

  return (
    <div className="px-5 py-5 space-y-4">
      <p className="text-xs text-stone-500 leading-relaxed">
        These preferences help InternHack AI find the best jobs for you.
      </p>
      <div>
        <label className={labelClass}><Briefcase className="w-3.5 h-3.5" /> Desired roles</label>
        <input type="text" value={jobPrefRoles} onChange={(e) => onRolesChange(e.target.value)}
          className={inputClass} placeholder="e.g. Frontend Developer, React Engineer" />
        <p className="text-[10px] font-mono text-stone-500 mt-1.5">separate with commas</p>
      </div>
      <div>
        <label className={labelClass}><CheckCircle className="w-3.5 h-3.5" /> Preferred skills</label>
        <input type="text" value={jobPrefSkills} onChange={(e) => onSkillsChange(e.target.value)}
          className={inputClass} placeholder="e.g. React, TypeScript, Node.js" />
        <p className="text-[10px] font-mono text-stone-500 mt-1.5">separate with commas</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}><MapPin className="w-3.5 h-3.5" /> Preferred locations</label>
          <input type="text" value={jobPrefLocations} onChange={(e) => onLocationsChange(e.target.value)}
            className={inputClass} placeholder="e.g. Bangalore, Remote" />
        </div>
        <div>
          <label className={labelClass}>Min salary (LPA)</label>
          <input type="number" value={jobPrefSalary} onChange={(e) => onSalaryChange(e.target.value)}
            className={inputClass} placeholder="e.g. 6" />
        </div>
      </div>
      <TogglePills
        label="Work mode"
        options={["REMOTE", "HYBRID", "ONSITE"]}
        selected={jobPrefWorkMode}
        onChange={onWorkModeChange}
        format={(m) => m.charAt(0) + m.slice(1).toLowerCase()}
      />
      <TogglePills
        label="Experience level"
        options={["INTERN", "ENTRY", "MID", "SENIOR"]}
        selected={jobPrefExpLevel}
        onChange={onExpLevelChange}
        format={(l) => l.charAt(0) + l.slice(1).toLowerCase()}
      />
      <TogglePills
        label="Domain"
        options={["frontend", "backend", "fullstack", "devops", "data", "ml", "mobile"]}
        selected={jobPrefDomains}
        onChange={onDomainsChange}
        format={(d) => d.charAt(0).toUpperCase() + d.slice(1)}
      />
      <button
        type="button"
        disabled={savingJobPrefs}
        onClick={handleSave}
        className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-stone-900 dark:bg-stone-50 text-stone-50 dark:text-stone-900 rounded-md text-sm font-bold hover:bg-stone-800 dark:hover:bg-stone-200 transition-colors border-0 cursor-pointer disabled:opacity-50"
      >
        {savingJobPrefs ? <><Loader2 className="w-4 h-4 animate-spin" /> Saving...</> : "Save preferences"}
      </button>
    </div>
  );
}

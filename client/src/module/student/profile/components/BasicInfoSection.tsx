import { User, Mail, Phone, MapPin, AlignLeft, Search as SearchIcon } from "lucide-react";
import { inputClass, inputErrorClass, labelClass } from "./styles";

const JOB_STATUS_OPTIONS = [
  { value: "", label: "Not specified" },
  { value: "NO_OFFER", label: "No offer" },
  { value: "LOOKING", label: "Looking for job" },
  { value: "OPEN_TO_OFFER", label: "Open to offer" },
] as const;

interface BasicInfoSectionProps {
  name: string;
  email: string;
  bio: string;
  contactNo: string;
  location: string;
  jobStatus: string | null;
  fieldErrors: Record<string, string[]>;
  onChange: (field: string, value: string | null) => void;
}

function FieldError({ errs }: { errs?: string[] }) {
  if (!errs?.length) return null;
  return <p className="text-xs text-red-500 dark:text-red-400 mt-1.5 font-mono">{errs[0]}</p>;
}

export function BasicInfoSection({
  name,
  email,
  bio,
  contactNo,
  location,
  jobStatus,
  fieldErrors,
  onChange,
}: BasicInfoSectionProps) {
  return (
    <div className="px-5 py-5 space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}><User className="w-3.5 h-3.5" /> Full name</label>
          <input type="text" value={name} onChange={(e) => onChange("name", e.target.value)} className={fieldErrors.name ? inputErrorClass : inputClass} placeholder="Your full name" />
          <FieldError errs={fieldErrors.name} />
        </div>
        <div>
          <label className={labelClass}><Mail className="w-3.5 h-3.5" /> Email</label>
          <input type="email" value={email} disabled className={`${inputClass} bg-stone-100 dark:bg-stone-950 text-stone-500 cursor-not-allowed`} />
        </div>
      </div>
      <div>
        <label className={labelClass}><AlignLeft className="w-3.5 h-3.5" /> Bio</label>
        <textarea value={bio} onChange={(e) => onChange("bio", e.target.value)} rows={3} maxLength={500}
          className={`${fieldErrors.bio ? inputErrorClass : inputClass} resize-none`} placeholder="A brief introduction about yourself..." />
        <div className="flex justify-between mt-1.5">
          <FieldError errs={fieldErrors.bio} />
          <p className="text-[10px] font-mono text-stone-500 ml-auto">{bio.length}/500</p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}><Phone className="w-3.5 h-3.5" /> Phone</label>
          <input
            type="tel"
            value={contactNo}
            onChange={(e) => {
              const val = e.target.value.replace(/[^\d\s+\-]/g, "");
              onChange("contactNo", val);
            }}
            className={fieldErrors.contactNo ? inputErrorClass : inputClass}
            placeholder="+91 98765 43210"
            maxLength={15}
          />
          <FieldError errs={fieldErrors.contactNo} />
        </div>
        <div>
          <label className={labelClass}><MapPin className="w-3.5 h-3.5" /> Location</label>
          <input type="text" value={location} onChange={(e) => onChange("location", e.target.value)} className={inputClass} placeholder="e.g. Mumbai, India" />
        </div>
      </div>
      <div>
        <label className={labelClass}><SearchIcon className="w-3.5 h-3.5" /> Job status</label>
        <select
          value={jobStatus ?? ""}
          onChange={(e) => onChange("jobStatus", e.target.value || null)}
          className={inputClass}
        >
          {JOB_STATUS_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

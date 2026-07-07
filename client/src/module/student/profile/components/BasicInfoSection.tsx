import { User, Mail, Phone, MapPin, AlignLeft } from "lucide-react";
import { inputClass, inputErrorClass, labelClass } from "./styles";

interface BasicInfoSectionProps {
  name: string;
  email: string;
  bio: string;
  contactNo: string;
  location: string;
  fieldErrors: Record<string, string[]>;
  isEditing: boolean;
  onChange: (field: string, value: string | null) => void;
}

function FieldError({ errs }: { errs?: string[] }) {
  if (!errs?.length) return null;
  return <p className="text-xs text-red-500 dark:text-red-400 mt-1.5 font-mono">{errs[0]}</p>;
}

function ReadField({
  icon,
  label,
  value,
  multiline = false,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  multiline?: boolean;
}) {
  return (
    <div>
      <div className={labelClass}>{icon} {label}</div>
      <p className={`text-sm text-stone-900 dark:text-stone-50 ${multiline ? "leading-relaxed whitespace-pre-wrap" : "truncate"}`}>
        {value || <span className="text-stone-400 dark:text-stone-600">Not added</span>}
      </p>
    </div>
  );
}

export function BasicInfoSection({
  name,
  email,
  bio,
  contactNo,
  location,
  fieldErrors,
  isEditing,
  onChange,
}: BasicInfoSectionProps) {
  if (!isEditing) {
    return (
      <div className="px-5 py-5 space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <ReadField icon={<User className="w-3.5 h-3.5" />} label="Full name" value={name} />
          <ReadField icon={<Mail className="w-3.5 h-3.5" />} label="Email" value={email} />
        </div>
        <ReadField icon={<AlignLeft className="w-3.5 h-3.5" />} label="Bio" value={bio} multiline />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <ReadField icon={<Phone className="w-3.5 h-3.5" />} label="Phone" value={contactNo} />
          <ReadField icon={<MapPin className="w-3.5 h-3.5" />} label="Location" value={location} />
        </div>
      </div>
    );
  }

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
              const val = e.target.value.replace(/[^\d\s+-]/g, "");
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
    </div>
  );
}

import { ExternalLink, Github, Globe, Linkedin } from "lucide-react";
import { inputClass, inputErrorClass, labelClass } from "./styles";

interface SocialLinksSectionProps {
  linkedinUrl: string;
  githubUrl: string;
  portfolioUrl: string;
  leetcodeUrl: string;
  fieldErrors: Record<string, string[]>;
  isEditing: boolean;
  onChange: (field: string, value: string) => void;
}

function FieldError({ errs }: { errs?: string[] }) {
  if (!errs?.length) return null;
  return <p className="text-xs text-red-500 dark:text-red-400 mt-1.5 font-mono">{errs[0]}</p>;
}

function ReadLink({
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
      {value ? (
        <a
          href={value}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-stone-900 dark:text-stone-50 hover:text-lime-600 dark:hover:text-lime-400 truncate block"
        >
          {value}
        </a>
      ) : (
        <p className="text-sm text-stone-400 dark:text-stone-600">Not added</p>
      )}
    </div>
  );
}

export function SocialLinksSection({
  linkedinUrl,
  githubUrl,
  portfolioUrl,
  leetcodeUrl,
  fieldErrors,
  isEditing,
  onChange,
}: SocialLinksSectionProps) {
  if (!isEditing) {
    return (
      <div className="px-5 py-5 space-y-4">
        <ReadLink icon={<Linkedin className="w-3.5 h-3.5" />} label="LinkedIn" value={linkedinUrl} />
        <ReadLink icon={<Github className="w-3.5 h-3.5" />} label="GitHub" value={githubUrl} />
        <ReadLink icon={<Globe className="w-3.5 h-3.5" />} label="Portfolio" value={portfolioUrl} />
        <ReadLink icon={<ExternalLink className="w-3.5 h-3.5" />} label="LeetCode" value={leetcodeUrl} />
      </div>
    );
  }

  return (
    <div className="px-5 py-5 space-y-4">
      <div>
        <label className={labelClass}><Linkedin className="w-3.5 h-3.5" /> LinkedIn</label>
        <input type="url" value={linkedinUrl} onChange={(e) => onChange("linkedinUrl", e.target.value)} className={fieldErrors.linkedinUrl ? inputErrorClass : inputClass} placeholder="https://linkedin.com/in/yourname" />
        <FieldError errs={fieldErrors.linkedinUrl} />
      </div>
      <div>
        <label className={labelClass}><Github className="w-3.5 h-3.5" /> GitHub</label>
        <input type="url" value={githubUrl} onChange={(e) => onChange("githubUrl", e.target.value)} className={fieldErrors.githubUrl ? inputErrorClass : inputClass} placeholder="https://github.com/yourname" />
        <FieldError errs={fieldErrors.githubUrl} />
      </div>
      <div>
        <label className={labelClass}><Globe className="w-3.5 h-3.5" /> Portfolio</label>
        <input type="url" value={portfolioUrl} onChange={(e) => onChange("portfolioUrl", e.target.value)} className={fieldErrors.portfolioUrl ? inputErrorClass : inputClass} placeholder="https://yourportfolio.com" />
        <FieldError errs={fieldErrors.portfolioUrl} />
      </div>
      <div>
        <label className={labelClass}><ExternalLink className="w-3.5 h-3.5" /> LeetCode</label>
        <input type="url" value={leetcodeUrl} onChange={(e) => onChange("leetcodeUrl", e.target.value)} className={inputClass} placeholder="https://leetcode.com/yourname" />
      </div>
    </div>
  );
}

import { useRef } from "react";
import { ExternalLink, FileText, Loader2, Trash2, Upload } from "lucide-react";

const MAX_RESUMES = 2;

function getFileNameFromUrl(url: string): string {
  try {
    const pathname = new URL(url).pathname;
    const parts = pathname.split("/");
    const full = decodeURIComponent(parts[parts.length - 1] ?? "resume.pdf");
    const match = full.match(/^(.+)-\d+-\d+(\.\w+)$/);
    return match ? `${match[1]}${match[2]}` : full;
  } catch {
    return "resume.pdf";
  }
}

interface ResumesSectionProps {
  resumes: string[];
  uploadingResume: boolean;
  deletingResume: string | null;
  onUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onDelete: (url: string) => void;
}

export function ResumesSection({
  resumes,
  uploadingResume,
  deletingResume,
  onUpload,
  onDelete,
}: ResumesSectionProps) {
  const resumeInputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="px-5 py-5 space-y-3">
      {resumes.length > 0 && (
        <div className="space-y-2">
          {resumes.map((url) => (
            <div key={url} className="flex items-center gap-3 px-4 py-3 border border-stone-200 dark:border-white/10 rounded-md">
              <div className="w-8 h-8 rounded-md bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-white/10 flex items-center justify-center shrink-0">
                <FileText className="w-4 h-4 text-stone-500" />
              </div>
              <span className="text-sm text-stone-700 dark:text-stone-300 truncate flex-1">{getFileNameFromUrl(url)}</span>
              <a href={url} target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-stone-900 dark:hover:text-stone-50 transition-colors shrink-0">
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <button
                type="button"
                onClick={() => onDelete(url)}
                disabled={deletingResume === url}
                aria-label="Delete resume"
                className="text-stone-400 hover:text-red-500 dark:hover:text-red-400 transition-colors shrink-0 bg-transparent border-0 cursor-pointer p-1"
              >
                {deletingResume === url ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Trash2 className="w-3.5 h-3.5" />}
              </button>
            </div>
          ))}
        </div>
      )}

      <button
        type="button"
        onClick={() => resumeInputRef.current?.click()}
        disabled={uploadingResume || resumes.length >= MAX_RESUMES}
        className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 border border-dashed border-stone-300 dark:border-white/15 rounded-md text-sm text-stone-600 dark:text-stone-400 hover:border-stone-400 dark:hover:border-white/30 hover:text-stone-900 dark:hover:text-stone-50 transition-colors bg-transparent cursor-pointer disabled:opacity-50"
      >
        {uploadingResume ? <><Loader2 className="w-4 h-4 animate-spin" /> Uploading...</> : <><Upload className="w-4 h-4" /> Upload resume (PDF)</>}
      </button>
      <input ref={resumeInputRef} type="file" accept=".pdf" onChange={onUpload} className="hidden" />
      <p className="text-[10px] font-mono text-stone-500">PDF only, max 5 MB each.</p>
    </div>
  );
}

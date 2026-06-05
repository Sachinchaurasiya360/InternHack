import { motion } from "framer-motion";
import { Save, Loader2 } from "lucide-react";

interface ProfilePageHeaderProps {
  profileCompletion: number;
  saving: boolean;
  onSave: () => void;
}

export function ProfilePageHeader({ profileCompletion, saving, onSave }: ProfilePageHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="mt-6 mb-10 flex flex-wrap items-end justify-between gap-4 border-b border-stone-200 dark:border-white/10 pb-8"
    >
      <div>
        <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-stone-500">
          <span className="h-1.5 w-1.5 bg-lime-400" />
          account / profile
        </div>
        <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight text-stone-900 dark:text-stone-50 leading-none">
          My profile.
        </h1>
        <p className="mt-3 text-sm text-stone-500 max-w-md">
          A complete profile helps recruiters surface you in talent search and improves AI job matching.
        </p>
      </div>
      <div className="flex items-center gap-3">
        <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
          strength / {profileCompletion}%
        </span>
        <button
          type="button"
          onClick={onSave}
          disabled={saving}
          className="group inline-flex items-center gap-2 px-5 py-2.5 bg-lime-400 text-stone-950 rounded-md text-sm font-bold hover:bg-lime-300 transition-colors border-0 cursor-pointer disabled:opacity-50"
        >
          {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
          {saving ? "Saving..." : "Save changes"}
        </button>
      </div>
    </motion.div>
  );
}

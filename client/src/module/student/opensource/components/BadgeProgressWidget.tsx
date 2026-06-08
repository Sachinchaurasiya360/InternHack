import { motion } from "framer-motion";
import { Award, ChevronRight, Circle } from "lucide-react";
import { Link } from "react-router";
import { useAuthStore } from "../../../../lib/auth.store";
import { Button } from "../../../../components/ui/button";

const TIER_ORDER = ["First Steps", "Contributor", "Active Contributor", "OSS Leader", "Ambassador"];

const TIER_COLORS: Record<string, { bg: string; text: string; border: string; accent: string }> = {
  "First Steps": { 
    bg: "bg-emerald-50 dark:bg-emerald-950/30", 
    text: "text-emerald-700 dark:text-emerald-400", 
    border: "border-emerald-200 dark:border-emerald-900/50",
    accent: "bg-emerald-500"
  },
  "Contributor": { 
    bg: "bg-blue-50 dark:bg-blue-950/30", 
    text: "text-blue-700 dark:text-blue-400", 
    border: "border-blue-200 dark:border-blue-900/50",
    accent: "bg-blue-500"
  },
  "Active Contributor": { 
    bg: "bg-indigo-50 dark:bg-indigo-950/30", 
    text: "text-indigo-700 dark:text-indigo-400", 
    border: "border-indigo-200 dark:border-indigo-900/50",
    accent: "bg-indigo-500"
  },
  "OSS Leader": { 
    bg: "bg-amber-50 dark:bg-amber-950/50", 
    text: "text-amber-700 dark:text-amber-400", 
    border: "border-amber-400/50 dark:border-amber-900/50",
    accent: "bg-amber-500"
  },
  "Ambassador": { 
    bg: "bg-lime-50 dark:bg-lime-950/30", 
    text: "text-lime-700 dark:text-lime-400", 
    border: "border-lime-400",
    accent: "bg-lime-400"
  }
};

const TIER_REQS: Record<string, string[]> = {
  "First Steps": ["Complete at least 1 guide"],
  "Contributor": ["Complete First PR Roadmap", "1+ Approved Repo Contribution"],
  "Active Contributor": ["3+ Guides Completed", "5+ Approved Repo Contributions"],
  "OSS Leader": ["Program Participant (GSoC/Outreachy/LFX)", "10+ Approved Repo Contributions"],
  "Ambassador": ["Verified Ambassador Status"]
};

export function BadgeProgressWidget() {
  const { user } = useAuthStore();
  const currentTier = user?.ossTier || "First Steps";
  const tierIndex = TIER_ORDER.indexOf(currentTier);
  const nextTier = TIER_ORDER[tierIndex + 1];
  
  const colors = TIER_COLORS[currentTier] || TIER_COLORS["First Steps"];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`rounded-md border p-4 sm:p-5 ${colors.bg} ${colors.border} transition-all`}
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-md bg-white dark:bg-stone-900 border border-white/10 flex items-center justify-center shadow-sm">
            <Award className={`w-7 h-7 ${colors.text}`} />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-0.5">
              <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">OSS Ready Badge</span>
              <span className={`px-1.5 py-0.5 rounded text-[9px] font-bold uppercase tracking-tighter bg-white dark:bg-stone-900 border border-white/10 ${colors.text}`}>
                Tier {tierIndex + 1}
              </span>
            </div>
            <h3 className={`text-lg font-bold tracking-tight ${colors.text}`}>
              {currentTier}
            </h3>
          </div>
        </div>

        <Link to="/student/opensource/analytics" className="no-underline">
          <Button variant="outline" size="sm" className="hidden sm:inline-flex bg-white/50 dark:bg-black/20 border-white/20 hover:bg-white dark:hover:bg-black/40">
            View Journey <ChevronRight className="w-3.5 h-3.5 ml-1" />
          </Button>
        </Link>
      </div>

      <div className="mt-5 space-y-4">
        {/* Progress Bar */}
        <div className="space-y-1.5">
          <div className="flex justify-between text-[10px] font-mono uppercase tracking-widest text-stone-500">
            <span>Overall Path</span>
            <span>{Math.round(((tierIndex + 1) / TIER_ORDER.length) * 100)}%</span>
          </div>
          <div className="h-1.5 w-full bg-stone-200 dark:bg-stone-800 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${((tierIndex + 1) / TIER_ORDER.length) * 100}%` }}
              transition={{ duration: 1, ease: "easeOut" }}
              className={`h-full ${colors.accent} rounded-full`}
            />
          </div>
        </div>

        {/* Next Objectives */}
        {nextTier && (
          <div className="mt-4 pt-4 border-t border-black/5 dark:border-white/5">
            <p className="text-[10px] font-mono uppercase tracking-widest text-stone-500 mb-3">Next Objectives: {nextTier}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {TIER_REQS[nextTier]?.map((req, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-stone-600 dark:text-stone-400 bg-white/40 dark:bg-black/10 px-3 py-2 rounded border border-white/10">
                   <Circle className="w-3 h-3 shrink-0" />
                   <span>{req}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <Link to="/student/opensource/analytics" className="no-underline sm:hidden mt-4 block">
        <Button variant="outline" size="sm" className="w-full bg-white/50 dark:bg-black/20 border-white/20">
          View Journey <ChevronRight className="w-3.5 h-3.5 ml-1" />
        </Button>
      </Link>
    </motion.div>
  );
}

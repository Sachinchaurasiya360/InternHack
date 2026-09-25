import { motion } from "framer-motion";
import { Calendar, Crown, FileText, ArrowRightCircle, CheckCircle2 } from "lucide-react";
import { MetaRow } from "./MetaRow";
import { cardCls } from "./styles";
import { Button } from "../../../../components/ui/button";

export type MissingItem = { id: string; label: string; section: string };

const MAX_RESUMES = 2;

interface ProfileStrengthCardProps {
  profileCompletion: number;
  resumeCount: number;
  displayDate: string | null | undefined;
  isPremium: boolean;
  missingItems: MissingItem[];
  onFixItem: (section: string) => void;
}

export function ProfileStrengthCard({
  profileCompletion,
  resumeCount,
  displayDate,
  isPremium,
  missingItems,
  onFixItem,
}: ProfileStrengthCardProps) {
  return (
    <div className={`${cardCls} p-5`}>
      <div className="flex items-center justify-between mb-3">
        <span className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-stone-500">
          <span className="h-1 w-1 bg-lime-400" />
          profile strength
        </span>
        <span className="text-sm font-bold text-stone-900 dark:text-stone-50 tabular-nums">
          {profileCompletion}%
        </span>
      </div>
      <div className="w-full h-1.5 bg-stone-200 dark:bg-white/10 overflow-hidden rounded-full">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${profileCompletion}%` }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          className="h-full bg-lime-400"
        />
      </div>
      
      <p className="text-xs text-stone-500 mt-3 leading-snug">
        {profileCompletion === 100
          ? "Outstanding! Your profile is fully complete."
          : profileCompletion >= 80
          ? "Looking great. Just a few details left."
          : profileCompletion >= 50
          ? "Good start. Complete these to stand out:"
          : "Fill your profile to attract recruiters:"}
      </p>

      {/* Actionable Checklist */}
      {missingItems.length > 0 ? (
        <div className="mt-4 space-y-2">
          {missingItems.slice(0, 4).map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
            >
              <Button
                mode="default"
                variant="ghost"
                onClick={() => onFixItem(item.section)}
                className="w-full group flex items-center justify-between p-2.5 rounded-md border border-stone-200 dark:border-white/10 bg-stone-50 dark:bg-white/5 hover:border-lime-400 hover:bg-lime-50 dark:hover:bg-lime-400/10 transition-colors text-left"
              >
                <span className="text-xs font-medium text-stone-700 dark:text-stone-300 group-hover:text-stone-900 dark:group-hover:text-stone-50 transition-colors">
                  {item.label}
                </span>
                <ArrowRightCircle className="w-4 h-4 text-stone-400 group-hover:text-lime-500 transition-colors shrink-0" />
              </Button>
            </motion.div>
          ))}
          {missingItems.length > 4 && (
            <p className="text-xs font-mono text-center text-stone-400 pt-1">
              + {missingItems.length - 4} more items
            </p>
          )}
        </div>
      ) : (
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-4 p-3 rounded-md bg-lime-50 dark:bg-lime-400/10 border border-lime-200 dark:border-lime-400/20 flex items-center gap-2"
        >
          <CheckCircle2 className="w-4 h-4 text-lime-500 shrink-0" />
          <span className="text-xs font-semibold text-lime-700 dark:text-lime-300">All set! You're ready to apply.</span>
        </motion.div>
      )}

      <div className="mt-5 pt-5 border-t border-stone-200 dark:border-white/10 space-y-2.5">
        <MetaRow
          icon={<Calendar className="w-3.5 h-3.5" />}
          label="joined"
          value={
            displayDate
              ? new Date(displayDate).toLocaleDateString("en-IN", { month: "short", year: "numeric" })
              : "---"
          }
        />
        <MetaRow
          icon={<FileText className="w-3.5 h-3.5" />}
          label="resumes"
          value={`${resumeCount}/${MAX_RESUMES}`}
        />
        <MetaRow
          icon={<Crown className={`w-3.5 h-3.5 ${isPremium ? "text-lime-500" : ""}`} />}
          label="plan"
          value={
            isPremium ? (
              <span className="text-lime-600 dark:text-lime-400 font-bold">Pro</span>
            ) : (
              <span>Free</span>
            )
          }
        />
      </div>
    </div>
  );
}
import { motion } from "framer-motion";
import { Calendar, Crown, FileText } from "lucide-react";
import { MetaRow } from "./MetaRow";
import { cardCls } from "./styles";

const MAX_RESUMES = 2;

interface ProfileStrengthCardProps {
  profileCompletion: number;
  resumeCount: number;
  displayDate: string | null | undefined;
  isPremium: boolean;
}

export function ProfileStrengthCard({
  profileCompletion,
  resumeCount,
  displayDate,
  isPremium,
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
      <div className="w-full h-1 bg-stone-200 dark:bg-white/10 overflow-hidden rounded-full">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${profileCompletion}%` }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          className="h-full bg-lime-400"
        />
      </div>
      <p className="text-xs text-stone-500 mt-3 leading-snug">
        {profileCompletion >= 80
          ? "Looking great. Your profile is well filled."
          : profileCompletion >= 50
          ? "Good start. Add more details to stand out."
          : "Fill your profile to attract recruiters."}
      </p>

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

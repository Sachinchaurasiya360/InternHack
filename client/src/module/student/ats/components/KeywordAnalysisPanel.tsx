import { motion } from "framer-motion";
import { CheckCircle2, AlertCircle, XCircle } from "lucide-react";
import type { AtsKeywordAnalysis } from "../../../../lib/types";
import { sectionKickerCls } from "./ats-ui";

export function KeywordAnalysisPanel({
  keywordAnalysis,
}: {
  keywordAnalysis: AtsKeywordAnalysis;
}) {
  const found = keywordAnalysis.found.length;
  const partial = (keywordAnalysis.partial ?? []).length;
  const missing = keywordAnalysis.missing.length;
  const total = found + partial + missing;
  const pFound = total > 0 ? Math.round((found / total) * 100) : 0;
  const pPartial = total > 0 ? Math.round((partial / total) * 100) : 0;
  const pMissing = total > 0 ? 100 - pFound - pPartial : 0;

  return (
    <motion.div
      key="keywords"
      initial={{ opacity: 0, x: -8 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 8 }}
      transition={{ duration: 0.18 }}
      className="space-y-5"
    >
      {/* Summary bar */}
      {total > 0 && (
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <span className={sectionKickerCls}>
              <span className="h-1 w-1 bg-lime-400" />
              {total} keywords analysed
            </span>
            <div className="flex items-center gap-3 text-[10px] font-mono uppercase tracking-widest text-stone-500">
              <span className="inline-flex items-center gap-1">
                <span className="w-2 h-2 bg-lime-400 rounded-sm" />{found} present
              </span>
              <span className="inline-flex items-center gap-1">
                <span className="w-2 h-2 bg-amber-400 rounded-sm" />{partial} partial
              </span>
              <span className="inline-flex items-center gap-1">
                <span className="w-2 h-2 bg-red-400 rounded-sm" />{missing} missing
              </span>
            </div>
          </div>
          <div className="flex h-2 rounded-full overflow-hidden gap-0.5">
            {pFound > 0 && (
              <div className="bg-lime-400 rounded-full transition-all" style={{ width: `${String(pFound)}%` }} />
            )}
            {pPartial > 0 && (
              <div className="bg-amber-400 rounded-full transition-all" style={{ width: `${String(pPartial)}%` }} />
            )}
            {pMissing > 0 && (
              <div className="bg-red-400 rounded-full transition-all" style={{ width: `${String(pMissing)}%` }} />
            )}
          </div>
        </div>
      )}

      {/* Three columns */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {/* Present */}
        <div className="rounded-md border border-lime-200 dark:border-lime-900/50 bg-lime-50 dark:bg-lime-400/5 overflow-hidden">
          <div className="flex items-center justify-between gap-2 px-3 py-2 border-b border-lime-200 dark:border-lime-900/50">
            <span className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-lime-700 dark:text-lime-400">
              <CheckCircle2 className="w-3.5 h-3.5" /> Present
            </span>
            <span className="text-[10px] font-mono tabular-nums bg-lime-100 dark:bg-lime-400/20 text-lime-700 dark:text-lime-400 px-1.5 py-0.5 rounded-sm">
              {keywordAnalysis.found.length}
            </span>
          </div>
          <div className="p-3 flex flex-wrap gap-1.5 min-h-14">
            {keywordAnalysis.found.length === 0 ? (
              <p className="text-xs text-stone-400 dark:text-stone-600 italic self-center w-full text-center">None detected</p>
            ) : keywordAnalysis.found.map((kw) => (
              <span
                key={kw}
                className="inline-flex items-center gap-1 px-2 py-0.5 bg-lime-50 dark:bg-lime-400/10 text-lime-700 dark:text-lime-400 rounded-md text-xs font-medium border border-lime-200 dark:border-lime-400/30"
              >
                <span className="text-lime-500 font-bold">✓</span> {kw}
              </span>
            ))}
          </div>
        </div>

        {/* Partial */}
        <div className="rounded-md border border-dashed border-amber-200 dark:border-amber-900/50 bg-amber-50 dark:bg-amber-400/5 overflow-hidden">
          <div className="flex items-center justify-between gap-2 px-3 py-2 border-b border-amber-200 dark:border-amber-900/50">
            <span className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-amber-700 dark:text-amber-400">
              <AlertCircle className="w-3.5 h-3.5" /> Partial
            </span>
            <span className="text-[10px] font-mono tabular-nums bg-amber-100 dark:bg-amber-400/20 text-amber-700 dark:text-amber-400 px-1.5 py-0.5 rounded-sm">
              {(keywordAnalysis.partial ?? []).length}
            </span>
          </div>
          <div className="p-3 flex flex-wrap gap-1.5 min-h-14">
            {(keywordAnalysis.partial ?? []).length === 0 ? (
              <p className="text-xs text-stone-400 dark:text-stone-600 italic self-center w-full text-center">No partial keywords detected</p>
            ) : (keywordAnalysis.partial ?? []).map((kw) => (
              <span
                key={kw}
                className="inline-flex items-center gap-1 px-2 py-0.5 bg-amber-50 dark:bg-amber-400/10 text-amber-700 dark:text-amber-400 rounded-md text-xs font-medium border border-dashed border-amber-200 dark:border-amber-400/30"
              >
                <span className="text-amber-500 font-bold">~</span> {kw}
              </span>
            ))}
          </div>
        </div>

        {/* Missing */}
        <div className="rounded-md border border-dashed border-red-200 dark:border-red-900/50 bg-red-50 dark:bg-red-400/5 overflow-hidden">
          <div className="flex items-center justify-between gap-2 px-3 py-2 border-b border-red-200 dark:border-red-900/50">
            <span className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-red-700 dark:text-red-400">
              <XCircle className="w-3.5 h-3.5" /> Missing
            </span>
            <span className="text-[10px] font-mono tabular-nums bg-red-100 dark:bg-red-400/20 text-red-700 dark:text-red-400 px-1.5 py-0.5 rounded-sm">
              {keywordAnalysis.missing.length}
            </span>
          </div>
          <div className="p-3 flex flex-wrap gap-1.5 min-h-14">
            {keywordAnalysis.missing.length === 0 ? (
              <p className="text-xs text-stone-400 dark:text-stone-600 italic self-center w-full text-center">None — great coverage!</p>
            ) : keywordAnalysis.missing.map((kw) => (
              <span
                key={kw}
                className="inline-flex items-center gap-1 px-2 py-0.5 bg-red-50 dark:bg-red-400/10 text-red-700 dark:text-red-400 rounded-md text-xs font-medium border border-dashed border-red-200 dark:border-red-400/30"
              >
                <span className="text-red-500 font-bold">+</span> {kw}
              </span>
            ))}
          </div>
        </div>
      </div>

      {keywordAnalysis.found.length === 0 &&
        (keywordAnalysis.partial ?? []).length === 0 &&
        keywordAnalysis.missing.length === 0 && (
          <p className="text-sm text-stone-500 text-center py-8">
            No keyword data available for this analysis.
          </p>
        )}
    </motion.div>
  );
}

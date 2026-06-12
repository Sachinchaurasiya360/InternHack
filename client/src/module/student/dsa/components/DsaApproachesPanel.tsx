import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Code2 } from "lucide-react";
import api from "../../../../lib/axios";
import { queryKeys } from "../../../../lib/query-keys";
import type { DsaApproachEntry } from "../../../../lib/types";

interface DsaApproachesPanelProps {
  slug: string;
}

export function DsaApproachesPanel({ slug }: DsaApproachesPanelProps) {
  const [expanded, setExpanded] = useState<number | null>(null);

  const { data: approaches = [] } = useQuery({
    queryKey: queryKeys.dsa.approaches(slug),
    queryFn: () =>
      api.get<DsaApproachEntry[]>(`/dsa/problems/${slug}/approaches`).then((r) => r.data),
    staleTime: 24 * 60 * 60 * 1000,
  });

  if (approaches.length === 0) return null;

  return (
    <div>
      <div className="flex items-center gap-1.5 mb-2">
        <Code2 className="w-3 h-3 text-violet-500" />
        <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
          {approaches.length} {approaches.length === 1 ? "approach" : "approaches"}
        </span>
      </div>
      <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md divide-y divide-stone-100 dark:divide-white/5 overflow-hidden">
        {approaches.map((approach, i) => (
          <div key={i}>
            <button
              onClick={() => setExpanded(expanded === i ? null : i)}
              className="w-full flex items-center justify-between gap-3 px-4 py-3 text-left hover:bg-stone-50 dark:hover:bg-stone-800/40 transition-colors"
            >
              <span className="inline-flex items-center gap-3 min-w-0">
                <span className="text-[10px] font-mono font-bold tabular-nums text-violet-600 dark:text-violet-400 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="truncate">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-stone-600 dark:text-stone-400">
                    {approach.title}
                  </span>
                  <span className="ml-2 text-[10px] font-mono text-stone-400 dark:text-stone-500">
                    {approach.complexity}
                  </span>
                </span>
              </span>
              <ChevronDown
                className={`w-3.5 h-3.5 text-stone-400 shrink-0 transition-transform duration-200 ${
                  expanded === i ? "rotate-180" : ""
                }`}
              />
            </button>
            <AnimatePresence>
              {expanded === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="px-4 pb-4 pl-11 text-sm text-stone-700 dark:text-stone-300 leading-relaxed whitespace-pre-line">
                    {approach.content}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}

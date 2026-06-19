import React, { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { Check, GitPullRequest, Loader2 } from "lucide-react";
import { Link } from "react-router";
import api from "../../../lib/axios";
import { queryKeys } from "../../../lib/query-keys";
import { Button } from "../../../components/ui/button";
import type { HacktoberfestProgressResponse } from "../../../lib/types";

const RING_RADIUS = 72;
const CENTER = 100;
const CIRC = 2 * Math.PI * RING_RADIUS;

function nodePosition(index: number, total: number) {
  const angle = (index / total) * 2 * Math.PI - Math.PI / 2;
  return {
    x: CENTER + RING_RADIUS * Math.cos(angle),
    y: CENTER + RING_RADIUS * Math.sin(angle),
  };
}

export const HacktoberfestTracker = React.memo(function HacktoberfestTracker() {
  const { data, isLoading, isError } = useQuery<HacktoberfestProgressResponse>({
    queryKey: queryKeys.opensource.hacktoberfest(),
    queryFn: () => api.get("/opensource/analytics/hacktoberfest").then((r) => r.data),
    staleTime: 2 * 60 * 1000,
  });

  const ringOffset = useMemo(() => {
    if (!data) return CIRC;
    return CIRC - (data.completed / data.goal) * CIRC;
  }, [data]);

  if (isLoading) {
    return (
      <div className="mb-8 flex items-center justify-center rounded-md border border-stone-200 bg-white p-10 dark:border-white/10 dark:bg-stone-900">
        <Loader2 className="h-6 w-6 animate-spin text-orange-500" />
      </div>
    );
  }

  if (isError || !data) {
    return (
      <div className="mb-8 rounded-md border border-stone-200 bg-white p-6 dark:border-white/10 dark:bg-stone-900">
        <p className="text-sm text-stone-500 dark:text-stone-400">
          Could not load Hacktoberfest progress. Try again later.
        </p>
      </div>
    );
  }

  const isComplete = data.completed >= data.goal;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="mb-8 rounded-md border border-orange-200 bg-white p-5 sm:p-6 dark:border-orange-500/20 dark:bg-stone-900"
    >
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-col items-center sm:flex-row sm:items-center sm:gap-8">
          <div className="relative w-52 h-52 shrink-0">
            <svg viewBox="0 0 200 200" className="h-full w-full -rotate-90" aria-hidden="true">
              <circle
                cx={CENTER}
                cy={CENTER}
                r={RING_RADIUS}
                fill="none"
                className="stroke-stone-200 dark:stroke-white/10"
                strokeWidth="6"
              />
              <motion.circle
                cx={CENTER}
                cy={CENTER}
                r={RING_RADIUS}
                fill="none"
                className="stroke-orange-500"
                strokeWidth="6"
                strokeLinecap="round"
                strokeDasharray={CIRC}
                initial={{ strokeDashoffset: CIRC }}
                animate={{ strokeDashoffset: ringOffset }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </svg>

            {data.nodes.map((node, index) => {
              const { x, y } = nodePosition(index, data.nodes.length);
              return (
                <div
                  key={node.id}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  style={{
                    left: `${(x / 200) * 100}%`,
                    top: `${(y / 200) * 100}%`,
                  }}
                >
                  <div
                    className={`flex h-9 w-9 items-center justify-center rounded-md border text-xs font-bold transition-colors ${
                      node.completed
                        ? "border-orange-500 bg-orange-500 text-white"
                        : "border-stone-200 bg-white text-stone-500 dark:border-white/15 dark:bg-stone-800 dark:text-stone-400"
                    }`}
                    role="img"
                    aria-label={`Step ${node.id} of ${data.nodes.length}: ${node.completed ? "complete" : "pending"}: ${node.description}`}
                    title={node.description}
                  >
                    {node.completed ? <Check className="h-4 w-4" /> : node.id}
                  </div>
                </div>
              );
            })}

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
              <span className="text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
                {data.completed}/{data.goal}
              </span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
                contributions
              </span>
            </div>
          </div>

          <div className="mt-4 text-center sm:mt-0 sm:text-left">
            <div className="mb-2 flex items-center justify-center gap-1.5 sm:justify-start">
              <div className="h-1 w-1 bg-orange-500" />
              <p className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
                hacktoberfest 2026
              </p>
            </div>
            <h2 className="mb-1.5 text-lg font-bold text-stone-900 dark:text-stone-50">
              {isComplete ? "Goal reached!" : "Your October progress"}
            </h2>
            <p className="max-w-sm text-sm text-stone-600 dark:text-stone-400">
              {isComplete
                ? "You logged four approved contributions this October. Keep shipping!"
                : "Track approved contributions toward Hacktoberfest's four-PR goal. Submit repo suggestions and complete your first-PR roadmap."}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-px border border-stone-200 bg-stone-200 dark:border-white/10 dark:bg-white/10 sm:min-w-64">
          {[
            { label: "approved", value: data.stats.approvedContributions },
            { label: "suggestions", value: data.stats.repoSuggestions },
            {
              label: "first-pr steps",
              value: `${data.stats.firstPrStepsCompleted}/${data.stats.firstPrTotalSteps}`,
            },
            { label: "complete", value: `${data.percent}%` },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white p-3 text-center dark:bg-stone-900"
            >
              <p className="text-base font-bold text-stone-900 dark:text-stone-50">
                {stat.value}
              </p>
              <p className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-stone-200 pt-4 dark:border-white/10">
        {data.nodes.map((node) => (
          <span
            key={node.id}
            className={`inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1 text-xs font-medium ${
              node.completed
                ? "border-orange-200 bg-orange-50 text-orange-700 dark:border-orange-500/30 dark:bg-orange-500/10 dark:text-orange-400"
                : "border-stone-200 bg-stone-50 text-stone-500 dark:border-white/10 dark:bg-white/5 dark:text-stone-400"
            }`}
          >
            {node.completed ? (
              <Check className="h-3 w-3" />
            ) : (
              <GitPullRequest className="h-3 w-3" />
            )}
            {node.label}
          </span>
        ))}
        <Button variant="secondary" size="sm" asChild className="ml-auto">
          <Link to="/student/opensource">Find repos</Link>
        </Button>
      </div>
    </motion.div>
  );
});

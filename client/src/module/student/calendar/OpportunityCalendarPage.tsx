import { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { CalendarDays, ExternalLink, Download } from "lucide-react";
import api from "../../../lib/axios";
import { queryKeys } from "../../../lib/query-keys";
import type { CalendarOpportunity, OpportunityType } from "../../../lib/types";
import { LoadingScreen } from "../../../components/LoadingScreen";
import { SEO } from "../../../components/SEO";
import { Button } from "../../../components/ui/button";

const TYPE_META: Record<
  OpportunityType,
  { label: string; dot: string; badge: string }
> = {
  JOB: {
    label: "Job",
    dot: "bg-lime-400",
    badge: "bg-lime-100 text-lime-700 dark:bg-lime-900/30 dark:text-lime-400",
  },
  EXTERNAL_JOB: {
    label: "External",
    dot: "bg-sky-400",
    badge: "bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-400",
  },
};

const ALL_TYPES: OpportunityType[] = ["JOB", "EXTERNAL_JOB"];

function daysUntil(dateStr: string): number {
  const now = new Date();
  const target = new Date(dateStr);
  return Math.ceil((target.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
}

function formatDeadline(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString(undefined, {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function OpportunityCalendarPage() {
  const [activeTypes, setActiveTypes] = useState<Set<OpportunityType>>(
    new Set(ALL_TYPES),
  );

  const { data, isLoading } = useQuery({
    queryKey: queryKeys.calendar.opportunities(),
    queryFn: () =>
      api
        .get("/calendar/opportunities")
        .then((res) => res.data.opportunities as CalendarOpportunity[]),
    staleTime: 60 * 1000,
  });

  const opportunities = useMemo(() => data ?? [], [data]);

  const filtered = useMemo(
    () => opportunities.filter((o) => activeTypes.has(o.type)),
    [opportunities, activeTypes],
  );

  const toggleType = (type: OpportunityType) => {
    setActiveTypes((prev) => {
      const next = new Set(prev);
      if (next.has(type)) next.delete(type);
      else next.add(type);
      return next;
    });
  };

  const handleExport = () => {
    window.open(
      `${api.defaults.baseURL}/calendar/opportunities/export.ics`,
      "_blank",
    );
  };

  if (isLoading) return <LoadingScreen />;

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <SEO title="Opportunity Calendar" noIndex />

      <div className="flex items-center justify-between flex-wrap gap-3 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-stone-900 dark:text-stone-50 flex items-center gap-2">
            <CalendarDays className="w-6 h-6 text-lime-500" />
            Opportunity Calendar
          </h1>
          <p className="text-sm text-stone-500 mt-1">
            Every saved deadline across your applications, in one place.
          </p>
        </div>
        <Button variant="secondary" size="sm" onClick={handleExport}>
          <Download className="w-3.5 h-3.5" /> Export .ics
        </Button>
      </div>

      <div className="flex items-center gap-2 mb-6 flex-wrap">
        {ALL_TYPES.map((type) => {
          const meta = TYPE_META[type];
          const active = activeTypes.has(type);
          return (
            <button
              key={type}
              onClick={() => toggleType(type)}
              className={`inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs font-mono uppercase tracking-widest border transition-colors cursor-pointer ${
                active
                  ? "border-stone-900 dark:border-stone-50 text-stone-900 dark:text-stone-50"
                  : "border-stone-200 dark:border-white/10 text-stone-400"
              }`}
            >
              <span className={`h-1.5 w-1.5 rounded-full ${meta.dot}`} />
              {meta.label}
            </button>
          );
        })}
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-20 bg-white dark:bg-stone-900 rounded-md border border-stone-200 dark:border-white/10">
          <div className="w-16 h-16 rounded-md bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-white/10 flex items-center justify-center mx-auto mb-4">
            <CalendarDays className="w-7 h-7 text-stone-500" />
          </div>
          <h3 className="text-lg font-bold text-stone-900 dark:text-stone-50 mb-2">
            No upcoming deadlines
          </h3>
          <p className="text-sm text-stone-500 max-w-sm mx-auto">
            Deadlines from your saved and applied opportunities will show up
            here.
          </p>
        </div>
      ) : (
        <div className="space-y-2">
          {filtered.map((opp) => {
            const meta = TYPE_META[opp.type];
            const days = daysUntil(opp.deadline);
            return (
              <div
                key={opp.id}
                className="flex items-center justify-between gap-3 p-4 bg-white dark:bg-stone-900 rounded-md border border-stone-200 dark:border-white/10"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <span
                    className={`h-2.5 w-2.5 rounded-full shrink-0 ${meta.dot}`}
                  />
                  <div className="min-w-0">
                    <p className="font-semibold text-stone-900 dark:text-stone-50 truncate">
                      {opp.title}
                    </p>
                    <p className="text-xs text-stone-500 truncate">
                      {opp.subtitle ?? ""} • {formatDeadline(opp.deadline)}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <span
                    className={`text-[10px] font-mono uppercase tracking-widest px-2 py-1 rounded-md ${
                      days < 0
                        ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                        : days <= 3
                          ? "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400"
                          : "bg-stone-100 text-stone-600 dark:bg-stone-800 dark:text-stone-300"
                    }`}
                  >
                    {days < 0
                      ? "Past due"
                      : days === 0
                        ? "Today"
                        : `${days}d left`}
                  </span>
                  {opp.url && (
                    <a
                      href={opp.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-stone-400 hover:text-lime-600 dark:hover:text-lime-400 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

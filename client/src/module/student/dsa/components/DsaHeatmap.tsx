import React, { useState, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import ActivityCalendar from "react-activity-calendar";
import { ChevronLeft, ChevronRight } from "lucide-react";
import api from "../../../../lib/axios";
import { queryKeys } from "../../../../lib/query-keys";
import { useThemeStore } from "../../../../lib/theme.store";

interface ActivityResponse {
  date: string;
  count: number;
}

export function DsaHeatmap() {
  const [year, setYear] = useState(new Date().getUTCFullYear());
  const theme = useThemeStore((s) => s.theme);

  const { data, isLoading } = useQuery({
    queryKey: queryKeys.dsa.activity(year),
    queryFn: () => api.get<ActivityResponse[]>(`/dsa/activity?year=${year}`).then((res) => res.data),
    staleTime: year < new Date().getUTCFullYear() ? Infinity : 10 * 60 * 1000,
  });

  const heatmapData = useMemo(() => {
    const activityMap = new Map<string, number>();
    if (data) {
      for (const item of data) {
        activityMap.set(item.date, item.count);
      }
    }

    const result = [];
    const startDate = new Date(Date.UTC(year, 0, 1));
    const endDate = new Date(Date.UTC(year, 11, 31));

    for (let d = new Date(startDate); d <= endDate; d.setUTCDate(d.getUTCDate() + 1)) {
      const dateStr = d.toISOString().split("T")[0];
      const count = activityMap.get(dateStr) || 0;

      let level = 0;
      if (count === 1) level = 1;
      else if (count >= 2 && count <= 3) level = 2;
      else if (count >= 4 && count <= 6) level = 3;
      else if (count >= 7) level = 4;

      result.push({
        date: dateStr,
        count,
        level,
      });
    }

    return result;
  }, [data, year]);

  const totalSolvedThisYear = heatmapData.reduce((acc, curr) => acc + curr.count, 0);

  return (
    <section className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="h-1 w-1 bg-lime-400"></div>
          <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
            practice history
          </span>
        </div>
        
        {/* Year Selector */}
        <div className="flex items-center gap-1 bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md p-1">
          <button
            onClick={() => setYear(year - 1)}
            className="p-1 rounded text-stone-500 hover:text-stone-900 dark:hover:text-stone-50 hover:bg-stone-100 dark:hover:bg-white/5 transition-colors cursor-pointer"
            title="Previous year"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
          </button>
          <span className="text-xs font-mono font-medium text-stone-700 dark:text-stone-300 px-2 min-w-[3rem] text-center">
            {year}
          </span>
          <button
            onClick={() => setYear(year + 1)}
            disabled={year >= new Date().getUTCFullYear()}
            className="p-1 rounded text-stone-500 hover:text-stone-900 dark:hover:text-stone-50 hover:bg-stone-100 dark:hover:bg-white/5 transition-colors disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-stone-500 cursor-pointer"
            title="Next year"
          >
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      <div className="rounded-lg border border-stone-200 dark:border-white/10 bg-white dark:bg-stone-900 p-6 overflow-x-auto">
        <div className="min-w-[700px]">
          {isLoading ? (
            <div className="h-[120px] flex items-center justify-center">
              <span className="text-sm font-mono text-stone-400">Loading history...</span>
            </div>
          ) : (
            <ActivityCalendar
              data={heatmapData}
              theme={{
                light: ["#f5f5f4", "#d9f99d", "#a3e635", "#65a30d", "#3f6212"],
                dark: ["#1c1917", "#d9f99d", "#a3e635", "#65a30d", "#3f6212"],
              }}
              colorScheme={theme === "dark" ? "dark" : "light"}
              labels={{
                totalCount: `{{count}} problems solved in ${year}`,
              }}
              hideColorLegend={true}
              hideTotalCount={true}
              renderBlock={(block, activity) =>
                React.cloneElement(block, {
                  title: `${activity.count} problems solved on ${new Date(activity.date).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}`,
                })
              }
            />
          )}
        </div>
        
        <div className="mt-5 flex items-center justify-between text-sm text-stone-500 dark:text-stone-400">
          <span className="font-medium text-stone-700 dark:text-stone-300">
            {totalSolvedThisYear} problems this year
          </span>
          <div className="flex items-center gap-2 text-xs">
            <span>Less</span>
            <div className="flex gap-1">
              <div className="w-3 h-3 rounded-sm bg-stone-100 dark:bg-[#1c1917] border border-stone-200 dark:border-white/5"></div>
              <div className="w-3 h-3 rounded-sm bg-lime-200"></div>
              <div className="w-3 h-3 rounded-sm bg-lime-400"></div>
              <div className="w-3 h-3 rounded-sm bg-lime-600"></div>
              <div className="w-3 h-3 rounded-sm bg-lime-800"></div>
            </div>
            <span>More</span>
          </div>
        </div>
      </div>
    </section>
  );
}

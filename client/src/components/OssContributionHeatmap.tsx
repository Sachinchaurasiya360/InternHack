import React, { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { ActivityCalendar } from "react-activity-calendar";
import api from "../lib/axios";
import { useThemeStore } from "../lib/theme.store";
import { Tooltip as ReactTooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

interface ActivityDetails {
  guideSteps: number;
  repoSuggestions: number;
  prsMerged: number;
}

interface ActivityResponse {
  date: string;
  count: number;
  level: number;
  details: ActivityDetails;
}

const formatActivityDate = (date: string) => {
  const [year, month, day] = date.split("-").map(Number);
  return new Date(year, (month ?? 1) - 1, day ?? 1).toLocaleDateString(undefined, {
    month: "long",
    day: "numeric",
  });
};

interface Props {
  compact?: boolean;
  studentId?: number;
}

export const OssContributionHeatmap = React.memo(function OssContributionHeatmap({ compact = false, studentId }: Props) {
  const theme = useThemeStore((s) => s.theme);
  const isDark = theme === "dark";

  const { data, isLoading, isError } = useQuery({
    queryKey: ["opensource-activity", studentId],
    queryFn: async () => {
      const url = studentId ? `/opensource/activity?studentId=${studentId}` : "/opensource/activity";
      const res = await api.get<{ activity: ActivityResponse[] }>(url);
      return res.data.activity;
    },
    staleTime: 5 * 60 * 1000,
  });

  const availableYears = useMemo(() => {
    if (!data || data.length === 0) return [new Date().getFullYear()];
    const years = new Set<number>();
    data.forEach(d => years.add(new Date(d.date).getFullYear()));
    years.add(new Date().getFullYear());
    return Array.from(years).sort((a, b) => b - a);
  }, [data]);

  const [selectedYear, setSelectedYear] = useState<number>(availableYears[0] ?? new Date().getFullYear());

  const heatmapData = useMemo(() => {
    if (!data || data.length === 0) return null;

    // Sort ascending
    const sorted = [...data].sort((a, b) => a.date.localeCompare(b.date));

    if (!compact) return sorted;

    // For compact mode, filter to last 3 months
    if (compact) {
      const threeMonthsAgo = new Date();
      threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - 3);
      const minDateStr = threeMonthsAgo.toISOString().split("T")[0];
      const filtered = sorted.filter((d) => d.date >= minDateStr);
      return filtered.length > 0 ? filtered : sorted;
    }

    // Filter by selected year
    const yearStr = selectedYear.toString();
    return sorted.filter(d => d.date.startsWith(yearStr));
  }, [data, compact, selectedYear]);

  // Ensure the calendar has every single day of the year/period
  const calendarData = useMemo(() => {
    let startDate: Date;
    let endDate: Date;

    if (compact) {
      endDate = new Date();
      startDate = new Date();
      startDate.setMonth(startDate.getMonth() - 3);
    } else {
      const currentYear = new Date().getFullYear();
      startDate = new Date(selectedYear, 0, 1); // Jan 1st
      if (selectedYear === currentYear) {
        endDate = new Date(); // Today
      } else {
        endDate = new Date(selectedYear, 11, 31); // Dec 31st
      }
    }

    // Generate all days in range
    const allDays: ActivityResponse[] = [];
    for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
      allDays.push({
        date: d.toISOString().split("T")[0]!,
        count: 0,
        level: 0,
        details: { guideSteps: 0, repoSuggestions: 0, prsMerged: 0 }
      });
    }

    // Merge with actual data
    if (heatmapData) {
      const dataMap = new Map(heatmapData.map(d => [d.date, d]));
      return allDays.map(day => dataMap.get(day.date) || day);
    }

    return allDays;
  }, [heatmapData, compact, selectedYear]);

  if (isLoading) {
    return (
      <div className={`rounded-2xl border p-6 ${isDark ? "bg-stone-900 border-white/10" : "bg-white border-stone-200"}`}>
        <div className="h-32 flex items-center justify-center">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-sm animate-pulse ${isDark ? "bg-stone-800" : "bg-stone-200"}`}
                style={{ animationDelay: `${i * 100}ms` }}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className={`rounded-2xl border p-6 text-center ${isDark ? "bg-stone-900 border-white/10" : "bg-white border-stone-200"}`}>
        <p className={`text-sm ${isDark ? "text-stone-500" : "text-stone-400"}`}>Could not load activity data.</p>
      </div>
    );
  }

  const totalActivity = heatmapData?.reduce((sum, d) => sum + d.count, 0) ?? 0;

  return (
    <div className={`rounded-2xl border ${isDark ? "bg-stone-900 border-white/10" : "bg-white border-stone-200"} p-5 shadow-sm`}>
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div>
          <h3 className={`text-sm font-semibold ${isDark ? "text-stone-50" : "text-stone-900"}`}>
            {compact ? "Recent Contributions" : "Open Source Activity"}
          </h3>
          <p className={`text-xs mt-0.5 ${isDark ? "text-stone-400" : "text-stone-500"}`}>
            {totalActivity > 0
              ? `${totalActivity} total activities in ${compact ? "the past 3 months" : selectedYear}`
              : `No activity recorded in ${compact ? "the past 3 months" : selectedYear}`}
          </p>
        </div>
        {!compact && availableYears.length > 1 && (
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(Number(e.target.value))}
            className={`px-3 py-1.5 rounded-md text-xs font-medium border focus:outline-none transition-colors cursor-pointer ${
              isDark 
                ? "bg-stone-800 border-white/10 text-stone-300 hover:border-white/20" 
                : "bg-stone-100 border-stone-200 text-stone-700 hover:border-stone-300"
            }`}
          >
            {availableYears.map(year => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
        )}
      </div>

      {/* Calendar */}
      <div className="w-full overflow-x-auto">
        <ActivityCalendar
          data={calendarData}
          theme={{
            light: ["#f5f5f4", "#d9f99d", "#84cc16", "#4d7c0f", "#3f6212"],
            dark: ["#292524", "#d9f99d", "#84cc16", "#4d7c0f", "#3f6212"],
          }}
          colorScheme={isDark ? "dark" : "light"}
          blockSize={compact ? 11 : 13}
          blockMargin={compact ? 3 : 4}
          blockRadius={2}
          fontSize={11}
          showMonthLabels={true}
          labels={{
            months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            weekdays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            totalCount: "{{count}} activities in {{year}}",
            legend: { less: "Less", more: "More" },
          }}
          renderBlock={(block, activity) => {
            const act = activity as ActivityResponse;
            const tooltipId = `oss-tip-${act.date}`;
            const total = act.count;
            const details = act.details || { guideSteps: 0, repoSuggestions: 0, prsMerged: 0 };
            const dateStr = formatActivityDate(act.date);
            let tooltipContent = total > 0
              ? `${dateStr} — ${total} activit${total === 1 ? "y" : "ies"}`
              : `${dateStr} — No activity`;

            if (total > 0) {
              const parts: string[] = [];
              if (details.guideSteps) parts.push(`${details.guideSteps} guide step${details.guideSteps > 1 ? "s" : ""}`);
              if (details.repoSuggestions) parts.push(`${details.repoSuggestions} repo suggestion${details.repoSuggestions > 1 ? "s" : ""}`);
              if (details.prsMerged) parts.push(`${details.prsMerged} PR${details.prsMerged > 1 ? "s" : ""} merged`);
              if (parts.length > 0) tooltipContent += ` (${parts.join(", ")})`;
            }

            return React.cloneElement(block, {
              "data-tooltip-id": tooltipId,
              "data-tooltip-content": tooltipContent,
              children: (
                <ReactTooltip
                  id={tooltipId}
                  place="top"
                  variant={isDark ? "dark" : "light"}
                  className="!text-xs !rounded-lg !py-1.5 !px-2.5 !opacity-100 z-50"
                />
              ),
            });
          }}
        />
      </div>
    </div>
  );
});

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
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
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

    const sorted = [...data].sort((a, b) => a.date.localeCompare(b.date));

    if (compact) {
      const threeMonthsAgo = new Date();
      threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - 3);
      const minDateStr = threeMonthsAgo.toISOString().split("T")[0];
      const filtered = sorted.filter((d) => d.date >= minDateStr);
      return filtered.length > 0 ? filtered : sorted;
    }

    const yearStr = selectedYear.toString();
    return sorted.filter(d => d.date.startsWith(yearStr));
  }, [data, compact, selectedYear]);

  // Fill every day in the range so the calendar renders a complete grid
  const calendarData = useMemo(() => {
    let startDate: Date;
    let endDate: Date;

    if (compact) {
      endDate = new Date();
      startDate = new Date();
      startDate.setMonth(startDate.getMonth() - 3);
    } else {
      const currentYear = new Date().getFullYear();
      startDate = new Date(selectedYear, 0, 1);
      endDate = selectedYear === currentYear ? new Date() : new Date(selectedYear, 11, 31);
    }

    const allDays: ActivityResponse[] = [];
    for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
      allDays.push({
        date: d.toISOString().split("T")[0]!,
        count: 0,
        level: 0,
        details: { guideSteps: 0, repoSuggestions: 0, prsMerged: 0 },
      });
    }

    if (heatmapData) {
      const dataMap = new Map(heatmapData.map(d => [d.date, d]));
      return allDays.map(day => dataMap.get(day.date) || day);
    }

    return allDays;
  }, [heatmapData, compact, selectedYear]);

  // ── Loading skeleton ──────────────────────────────────────────
  if (isLoading) {
    return (
      <div className={`rounded-md border p-3 ${isDark ? "bg-[#0d1117] border-[#30363d]" : "bg-white border-[#d0d7de]"}`}>
        <div className="h-[120px] flex items-center justify-center">
          <div className="flex gap-[3px]">
            {[...Array(7)].map((_, i) => (
              <div
                key={i}
                className={`w-[10px] h-[10px] rounded-sm animate-pulse ${isDark ? "bg-[#161b22]" : "bg-[#ebedf0]"}`}
                style={{ animationDelay: `${i * 80}ms` }}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className={`rounded-md border p-3 text-center ${isDark ? "bg-[#0d1117] border-[#30363d]" : "bg-white border-[#d0d7de]"}`}>
        <p className={`text-xs ${isDark ? "text-[#8b949e]" : "text-[#57606a]"}`}>Could not load activity data.</p>
      </div>
    );
  }

  const totalActivity = heatmapData?.reduce((sum, d) => sum + d.count, 0) ?? 0;
  const periodLabel = compact ? "the last 3 months" : String(selectedYear);

  return (
    <div className={`rounded-md border ${isDark ? "bg-[#0d1117] border-[#30363d]" : "bg-white border-[#d0d7de]"}`}>
      {/* Header — GitHub style: "X contributions in …" with year tabs */}
      <div className={`flex items-center justify-between px-4 py-3 border-b ${isDark ? "border-[#30363d]" : "border-[#d0d7de]"}`}>
        <h2 className={`text-sm font-normal ${isDark ? "text-[#e6edf3]" : "text-[#1f2328]"}`}>
          <span className="font-semibold">{totalActivity.toLocaleString()}</span>{" "}
          {totalActivity === 1 ? "contribution" : "contributions"} in {periodLabel}
        </h2>

        {!compact && availableYears.length > 1 && (
          <div className="flex gap-1">
            {availableYears.map(year => (
              <button
                key={year}
                type="button"
                onClick={() => setSelectedYear(year)}
                className={`px-2 py-0.5 rounded text-xs font-medium transition-colors ${
                  year === selectedYear
                    ? isDark
                      ? "bg-[#1f6feb] text-white"
                      : "bg-[#0969da] text-white"
                    : isDark
                      ? "text-[#8b949e] hover:text-[#e6edf3]"
                      : "text-[#57606a] hover:text-[#1f2328]"
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Calendar grid */}
      <div className="px-4 py-3 overflow-x-auto">
        <ActivityCalendar
          data={calendarData}
          theme={{
            light: ["#ebedf0", "#9be9a7", "#40c463", "#30a14e", "#216e39"],
            dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
          }}
          colorScheme={isDark ? "dark" : "light"}
          blockSize={compact ? 10 : 11}
          blockMargin={compact ? 2 : 3}
          blockRadius={2}
          fontSize={10}
          showMonthLabels={true}
          labels={{
            months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            weekdays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            totalCount: "{{count}} contributions in {{year}}",
            legend: { less: "Less", more: "More" },
          }}
          renderBlock={(block, activity) => {
            const act = activity as ActivityResponse;
            const tooltipId = `oss-tip-${act.date}`;
            const total = act.count;
            const details = act.details || { guideSteps: 0, repoSuggestions: 0, prsMerged: 0 };
            const dateStr = formatActivityDate(act.date);

            let tooltipContent: string;
            if (total > 0) {
              const parts: string[] = [];
              if (details.guideSteps) parts.push(`${details.guideSteps} guide step${details.guideSteps > 1 ? "s" : ""}`);
              if (details.repoSuggestions) parts.push(`${details.repoSuggestions} repo suggestion${details.repoSuggestions > 1 ? "s" : ""}`);
              if (details.prsMerged) parts.push(`${details.prsMerged} PR${details.prsMerged > 1 ? "s" : ""} merged`);
              tooltipContent = `${total} contribution${total !== 1 ? "s" : ""} on ${dateStr}`;
              if (parts.length > 0) tooltipContent += `\n${parts.join(" · ")}`;
            } else {
              tooltipContent = `No contributions on ${dateStr}`;
            }

            return React.cloneElement(block, {
              "data-tooltip-id": tooltipId,
              "data-tooltip-content": tooltipContent,
              children: (
                <ReactTooltip
                  id={tooltipId}
                  place="top"
                  variant={isDark ? "dark" : "light"}
                  className="!text-[11px] !leading-snug !rounded-md !py-1.5 !px-2.5 !opacity-100 !z-50 whitespace-pre-line"
                  style={{
                    backgroundColor: isDark ? "#1c2128" : "#24292f",
                    color: isDark ? "#e6edf3" : "#ffffff",
                    border: isDark ? "1px solid #30363d" : "none",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.14)",
                  }}
                />
              ),
            });
          }}
        />
      </div>

      {/* Footer — Less/More legend (GitHub style) */}
      <div className={`flex items-center justify-end gap-1.5 px-4 pb-3 pt-0`}>
        <span className={`text-[10px] ${isDark ? "text-[#8b949e]" : "text-[#57606a]"}`}>Less</span>
        {(isDark
          ? ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"]
          : ["#ebedf0", "#9be9a7", "#40c463", "#30a14e", "#216e39"]
        ).map((color, i) => (
          <div
            key={i}
            className="w-[10px] h-[10px] rounded-sm"
            style={{ backgroundColor: color }}
          />
        ))}
        <span className={`text-[10px] ${isDark ? "text-[#8b949e]" : "text-[#57606a]"}`}>More</span>
      </div>
    </div>
  );
});

export default OssContributionHeatmap;

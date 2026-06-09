import { useQuery } from "@tanstack/react-query";
import { Flame } from "lucide-react";
import { Link } from "react-router";
import api from "../../../lib/axios";
import { queryKeys } from "../../../lib/query-keys";
import type { OpenSourceStreak } from "../../../lib/types";
import { STREAK_RISK_HOURS } from "./streakConstants";

export default function StreakFlame() {
  const now = Date.now(); // eslint-disable-line react-hooks/purity
  const { data } = useQuery({
    queryKey: queryKeys.opensource.streak(),
    queryFn: () => api.get("/opensource/streak").then((r) => r.data.streak as OpenSourceStreak),
    staleTime: 60000,
    retry: false,
  });

  if (!data || data.currentStreak === 0) return null;

  const isAtRisk = data.lastActivityAt
    ? (now - new Date(data.lastActivityAt).getTime()) > STREAK_RISK_HOURS * 3600000
    : false;

  return (
    <Link
      to="/student/opensource/analytics"
      className="inline-flex items-center gap-1.5 text-xs font-mono tracking-wider no-underline group"
      title={`${data.currentStreak} day streak${isAtRisk ? " · contribute soon to keep it alive" : ""}`}
    >
      <Flame className={`w-4 h-4 ${isAtRisk ? "text-orange-400" : "text-lime-500"}`} />
      <span className={`font-bold ${isAtRisk ? "text-orange-400" : "text-stone-900 dark:text-stone-50"}`}>
        {data.currentStreak}
      </span>
    </Link>
  );
}

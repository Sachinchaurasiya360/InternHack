/** Recharts custom tooltip — renders score, date, role, and resume name on dot hover. */
type ScoreTooltipPayload = {
  payload: {
    fullDate: string;
    jobTitle: string;
    resumeName: string;
    score: number;
  };
};

export function ScoreTooltip({
  active,
  payload,
}: {
  active?: boolean;
  payload?: ScoreTooltipPayload[];
}) {
  if (!active || !payload?.length) return null;
  const d = payload[0].payload;
  return (
    <div className="bg-stone-900 border border-white/10 rounded-md px-3 py-2 text-[11px] font-mono text-stone-300 shadow-xl">
      <div className="text-stone-500 mb-1">{d.fullDate}</div>
      <div>Role: {d.jobTitle}</div>
      <div className="truncate max-w-[200px]">Resume: {d.resumeName}</div>
      <div className="text-lime-400 font-bold mt-1">Score: {d.score}/100</div>
    </div>
  );
}

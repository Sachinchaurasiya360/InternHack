import { useMemo, useState } from "react";
import { BookOpen, Code2, Lightbulb, Play, Target } from "lucide-react";
import {
  LessonShell,
  type LessonQuizQuestion,
  type LessonTabDef,
} from "../../../../../components/dsa-theory/LessonShell";
import {
  AlgoCanvas,
  InputEditor,
  PseudocodePanel,
  useStepPlayer,
  VariablesPanel,
} from "../../../../../components/dsa-theory/algo";
import {
  Callout,
  Card,
  Lede,
  PillButton,
  SectionEyebrow,
  SectionTitle,
  SubHeading,
  THEME,
} from "../../../../../components/dsa-theory/primitives";
import { PracticeTab } from "../PracticeTab";

const PRACTICE_TOPIC_SLUG: string | null = "divide-and-conquer";

/* ------------------------------------------------------------------ */
/*  Closest Pair of Points                                             */
/* ------------------------------------------------------------------ */

interface Point { x: number; y: number; id: number; }

interface CPFrame {
  line: number;
  vars: Record<string, string | number | undefined>;
  message: string;
  divider?: number;
  leftRange?: [number, number];
  rightRange?: [number, number];
  bestPair?: [number, number] | null;
  bestDist?: number;
  stripCandidates?: number[];
}

const PSEUDO_CP = [
  "closestPair(P):  // P sorted by x",
  "  if |P| <= 3: brute force",
  "  mid ← P.length / 2",
  "  dL ← closestPair(P[0..mid])",
  "  dR ← closestPair(P[mid..])",
  "  d  ← min(dL, dR)",
  "  scan strip |x - mid.x| < d",
  "  return min(d, stripMin)",
];

function ptDist(a: Point, b: Point) {
  return Math.hypot(a.x - b.x, a.y - b.y);
}

function buildClosestPair(points: Point[]): CPFrame[] {
  const sorted = [...points].sort((a, b) => a.x - b.x || a.y - b.y);
  const frames: CPFrame[] = [];
  let best: { pair: [number, number] | null; d: number } = { pair: null, d: Infinity };

  function bruteForce(pts: Point[], xLo: number, xHi: number) {
    frames.push({
      line: 1, vars: { size: pts.length, best: Number.isFinite(best.d) ? best.d.toFixed(2) : "∞" },
      message: `Base case: brute-force ${pts.length} points.`,
      leftRange: [xLo, xHi], bestPair: best.pair, bestDist: best.d,
    });
    for (let i = 0; i < pts.length; i++) {
      for (let j = i + 1; j < pts.length; j++) {
        const d = ptDist(pts[i], pts[j]);
        if (d < best.d) {
          best = { pair: [pts[i].id, pts[j].id], d };
          frames.push({
            line: 1, vars: { pair: `(${pts[i].id},${pts[j].id})`, d: d.toFixed(2) },
            message: `New best: points ${pts[i].id}-${pts[j].id}, d = ${d.toFixed(2)}`,
            leftRange: [xLo, xHi], bestPair: best.pair, bestDist: best.d,
          });
        }
      }
    }
  }

  function recurse(pts: Point[], xLo: number, xHi: number) {
    frames.push({
      line: 0, vars: { size: pts.length, best: Number.isFinite(best.d) ? best.d.toFixed(2) : "∞" },
      message: `closestPair on ${pts.length} points (x in [${xLo.toFixed(1)}, ${xHi.toFixed(1)}]).`,
      leftRange: [xLo, xHi], bestPair: best.pair, bestDist: best.d,
    });
    if (pts.length <= 3) { bruteForce(pts, xLo, xHi); return; }

    const midIdx = Math.floor(pts.length / 2);
    const midX = pts[midIdx].x;
    frames.push({
      line: 2, vars: { mid: midX.toFixed(1), size: pts.length },
      message: `Divide: vertical line x = ${midX.toFixed(1)}.`,
      divider: midX, leftRange: [xLo, midX], rightRange: [midX, xHi],
      bestPair: best.pair, bestDist: best.d,
    });
    frames.push({
      line: 3, vars: { mid: midX.toFixed(1) },
      message: `Recurse on LEFT half (${midIdx} points).`,
      divider: midX, leftRange: [xLo, midX], bestPair: best.pair, bestDist: best.d,
    });
    recurse(pts.slice(0, midIdx), xLo, midX);

    frames.push({
      line: 4, vars: { mid: midX.toFixed(1) },
      message: `Recurse on RIGHT half (${pts.length - midIdx} points).`,
      divider: midX, rightRange: [midX, xHi], bestPair: best.pair, bestDist: best.d,
    });
    recurse(pts.slice(midIdx), midX, xHi);

    frames.push({
      line: 5, vars: { d: best.d.toFixed(2) },
      message: `Combine step. Now check the strip |x - mid| < ${best.d.toFixed(2)}.`,
      divider: midX, leftRange: [xLo, xHi], bestPair: best.pair, bestDist: best.d,
    });

    const strip = pts.filter((p) => Math.abs(p.x - midX) < best.d).sort((a, b) => a.y - b.y);
    frames.push({
      line: 6, vars: { strip: strip.length, d: best.d.toFixed(2) },
      message: `Strip has ${strip.length} points. Scan neighbors within ${best.d.toFixed(2)} y-distance.`,
      divider: midX, leftRange: [xLo, xHi], bestPair: best.pair, bestDist: best.d,
      stripCandidates: strip.map((p) => p.id),
    });
    for (let i = 0; i < strip.length; i++) {
      for (let j = i + 1; j < strip.length && strip[j].y - strip[i].y < best.d; j++) {
        const d = ptDist(strip[i], strip[j]);
        if (d < best.d) {
          best = { pair: [strip[i].id, strip[j].id], d };
          frames.push({
            line: 7, vars: { pair: `(${strip[i].id},${strip[j].id})`, d: d.toFixed(2) },
            message: `Strip wins: ${strip[i].id}-${strip[j].id} at d = ${d.toFixed(2)}!`,
            divider: midX, bestPair: best.pair, bestDist: best.d,
            stripCandidates: strip.map((p) => p.id),
          });
        }
      }
    }
  }

  recurse(sorted, Math.min(...sorted.map((p) => p.x)), Math.max(...sorted.map((p) => p.x)));
  frames.push({
    line: 7, vars: { answer: best.d.toFixed(2), pair: best.pair ? `(${best.pair[0]}, ${best.pair[1]})` : "" },
    message: `Done. Closest pair distance = ${best.d.toFixed(2)}.`,
    bestPair: best.pair, bestDist: best.d,
  });
  return frames;
}

function ClosestPairPlot({ points, frame }: { points: Point[]; frame: CPFrame }) {
  const W = 540, H = 300, PAD = 24;
  const xMin = Math.min(...points.map((p) => p.x));
  const xMax = Math.max(...points.map((p) => p.x));
  const yMin = Math.min(...points.map((p) => p.y));
  const yMax = Math.max(...points.map((p) => p.y));
  const sx = (x: number) => PAD + ((x - xMin) / Math.max(1, xMax - xMin)) * (W - 2 * PAD);
  const sy = (y: number) => H - PAD - ((y - yMin) / Math.max(1, yMax - yMin)) * (H - 2 * PAD);

  const bestIds = frame.bestPair;
  const bestPts = bestIds ? [points.find((p) => p.id === bestIds[0])!, points.find((p) => p.id === bestIds[1])!] : null;
  const stripSet = new Set(frame.stripCandidates ?? []);

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto rounded-md border border-stone-200 dark:border-white/10 bg-stone-50 dark:bg-stone-950" style={{ maxHeight: 320 }}>
      {frame.leftRange && (
        <rect x={sx(frame.leftRange[0])} y={PAD}
          width={Math.max(1, sx(frame.leftRange[1]) - sx(frame.leftRange[0]))} height={H - 2 * PAD}
          fill="rgba(59,130,246,0.08)" />
      )}
      {frame.rightRange && (
        <rect x={sx(frame.rightRange[0])} y={PAD}
          width={Math.max(1, sx(frame.rightRange[1]) - sx(frame.rightRange[0]))} height={H - 2 * PAD}
          fill="rgba(16,185,129,0.08)" />
      )}
      {frame.divider !== undefined && (
        <line x1={sx(frame.divider)} y1={PAD} x2={sx(frame.divider)} y2={H - PAD}
          stroke="#8b5cf6" strokeWidth={2} strokeDasharray="5 4" />
      )}
      {frame.divider !== undefined && frame.bestDist && Number.isFinite(frame.bestDist) && (
        <rect
          x={sx(frame.divider - frame.bestDist)} y={PAD}
          width={Math.max(1, sx(frame.divider + frame.bestDist) - sx(frame.divider - frame.bestDist))} height={H - 2 * PAD}
          fill="rgba(139,92,246,0.12)" stroke="rgba(139,92,246,0.4)" />
      )}
      {bestPts && (
        <line x1={sx(bestPts[0].x)} y1={sy(bestPts[0].y)} x2={sx(bestPts[1].x)} y2={sy(bestPts[1].y)}
          stroke="#ef4444" strokeWidth={3} style={{ filter: "drop-shadow(0 0 6px rgba(239,68,68,0.6))" }} />
      )}
      {points.map((p) => {
        const isBest = bestPts && (p.id === bestPts[0].id || p.id === bestPts[1].id);
        const inStrip = stripSet.has(p.id);
        return (
          <g key={p.id}>
            <circle cx={sx(p.x)} cy={sy(p.y)} r={isBest ? 7 : 5}
              fill={isBest ? "#ef4444" : inStrip ? "#8b5cf6" : "#0f172a"}
              stroke="#fff" strokeWidth={2} style={{ transition: "all 0.3s" }} />
            <text x={sx(p.x) + 8} y={sy(p.y) - 8} fontSize="10" fill={THEME.textMuted} fontFamily={THEME.heading}>{p.id}</text>
          </g>
        );
      })}
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Master Theorem calculator                                          */
/* ------------------------------------------------------------------ */

interface MasterResult {
  caseNumber: 1 | 2 | 3 | null;
  complexity: string;
  explanation: string;
  logBa: number;
}

function masterTheorem(a: number, b: number, fExponent: number, includesLog = false): MasterResult {
  const logBa = Math.log(a) / Math.log(b);
  const eps = 1e-6;
  if (fExponent < logBa - eps) {
    return {
      caseNumber: 1, logBa,
      complexity: `Θ(n^${logBa.toFixed(3)})`,
      explanation: `f(n) = Θ(n^${fExponent}) is polynomially smaller than n^logb(a) = n^${logBa.toFixed(3)}. Leaves dominate.`,
    };
  }
  if (Math.abs(fExponent - logBa) < eps) {
    return {
      caseNumber: 2, logBa,
      complexity: `Θ(n^${logBa.toFixed(3)} · log${includesLog ? "^(k+1)" : ""} n)`,
      explanation: `f(n) and n^logb(a) grow at the same rate. Every level costs the same.`,
    };
  }
  return {
    caseNumber: 3, logBa,
    complexity: `Θ(n^${fExponent}${includesLog ? " log n" : ""})`,
    explanation: `f(n) = Θ(n^${fExponent}) grows faster than n^logb(a) = n^${logBa.toFixed(3)}. Root dominates (regularity holds for common cases).`,
  };
}

/* ------------------------------------------------------------------ */
/*  Visualize tab                                                      */
/* ------------------------------------------------------------------ */

const DEFAULT_POINTS = "2,3 5,9 7,2 10,4 12,8 15,5 18,9 20,1";

function parsePoints(s: string): Point[] {
  const tokens = s.trim().split(/\s+/);
  const pts: Point[] = [];
  let id = 0;
  for (const t of tokens) {
    const m = t.split(",").map((x) => Number(x));
    if (m.length === 2 && !m.some(Number.isNaN)) pts.push({ x: m[0], y: m[1], id: id++ });
  }
  return pts;
}

function VisualizeTab() {
  const [mode, setMode] = useState<"closest" | "master">("closest");
  const [pointStr, setPointStr] = useState(DEFAULT_POINTS);
  const points = useMemo(() => parsePoints(pointStr), [pointStr]);
  const frames = useMemo(() => points.length >= 2 ? buildClosestPair(points) : [], [points]);
  const player = useStepPlayer(frames);
  const frame = player.current;

  // Master theorem
  const [aStr, setAStr] = useState("2");
  const [bStr, setBStr] = useState("2");
  const [fStr, setFStr] = useState("n");
  const masterResult = useMemo(() => {
    const a = Number(aStr) || 1;
    const b = Number(bStr) || 2;
    const txt = fStr.trim().replace(/\s+/g, "").toLowerCase();
    let exp = 0;
    const includesLog = /log/.test(txt);
    if (/^n\^(\d+(\.\d+)?)/.test(txt)) exp = parseFloat(txt.match(/\^(\d+(\.\d+)?)/)![1]);
    else if (txt === "n" || /^n(log)?/.test(txt)) exp = 1;
    else if (txt === "1" || /^log/.test(txt)) exp = 0;
    else if (/^n\^2/.test(txt)) exp = 2;
    return { res: masterTheorem(a, b, exp, includesLog), a, b, exp, includesLog };
  }, [aStr, bStr, fStr]);

  const modeToggle = (
    <div className="flex gap-1.5 flex-wrap">
      {(["closest", "master"] as const).map((m) => (
        <PillButton key={m} onClick={() => setMode(m)} active={mode === m}>
          <span className="text-xs">{m === "closest" ? "Closest Pair" : "Master Theorem"}</span>
        </PillButton>
      ))}
    </div>
  );

  if (mode === "closest") {
    return (
      <AlgoCanvas
        title="Closest Pair of Points - Divide & Conquer"
        player={player}
        input={
          <div className="flex flex-col gap-3">
            {modeToggle}
            <InputEditor
              label="Points (x,y) space-separated"
              value={pointStr}
              placeholder="e.g. 2,3 5,9 ..."
              helper="Each token is an (x, y) pair. Space-separate points."
              presets={[
                { label: "8 scattered", value: DEFAULT_POINTS },
                { label: "grid", value: "1,1 1,4 4,1 4,4 2,2 3,3" },
                { label: "tight cluster", value: "5,5 5,6 6,5 6,6 1,1 9,9" },
              ]}
              onApply={setPointStr}
            />
          </div>
        }
        pseudocode={<PseudocodePanel lines={PSEUDO_CP} activeLine={frame?.line ?? 0} />}
        variables={<VariablesPanel vars={frame?.vars ?? {}} flashKeys={["d", "pair"]} />}
      >
        <div className="flex flex-col gap-3">
          <div className="flex gap-3 flex-wrap text-xs text-stone-500">
            <span className="inline-flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-sm bg-rose-500" />best pair</span>
            <span className="inline-flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-sm bg-violet-500" />strip candidate</span>
            <span className="inline-flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-sm bg-blue-300" />left half</span>
            <span className="inline-flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-sm bg-emerald-300" />right half</span>
          </div>
          {frame ? <ClosestPairPlot points={points} frame={frame} /> : <div className="text-stone-400 p-5 text-xs">Need at least 2 points.</div>}
          {frame && <Callout>{frame.message}</Callout>}
        </div>
      </AlgoCanvas>
    );
  }

  // Master theorem panel - a static panel, minimal player
  const dummyFrames = useMemo(() => [{ line: 0, vars: {}, message: "Master Theorem calculator" }], []);
  const dummy = useStepPlayer(dummyFrames);

  return (
    <AlgoCanvas
      title="Master Theorem - T(n) = a · T(n/b) + f(n)"
      player={dummy}
      input={modeToggle}
    >
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-3 gap-2">
          {[
            { label: "a (subproblems)", value: aStr, onChange: setAStr },
            { label: "b (shrink factor)", value: bStr, onChange: setBStr },
            { label: "f(n) (combine cost)", value: fStr, onChange: setFStr, placeholder: "e.g. n, n^2, log n" },
          ].map(({ label, value, onChange, placeholder }) => (
            <div key={label}>
              <div className="text-[10px] font-bold text-stone-500 uppercase tracking-widest mb-1">{label}</div>
              <input
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                className="w-full px-2.5 py-1.5 rounded-md border border-stone-200 dark:border-white/10 bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-100 font-mono text-sm focus:outline-none focus:border-stone-400"
              />
            </div>
          ))}
        </div>
        <Card>
          <p className="text-sm text-stone-600 dark:text-stone-400 mb-2">
            Recurrence: <code className="font-mono text-stone-900 dark:text-stone-100">T(n) = {masterResult.a} · T(n/{masterResult.b}) + {fStr}</code>
          </p>
          <div className="text-base font-bold text-lime-600 dark:text-lime-400 mb-1">
            {masterResult.res.caseNumber ? `Case ${masterResult.res.caseNumber}` : "Unknown"} → {masterResult.res.complexity}
          </div>
          <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">{masterResult.res.explanation}</p>
          <p className="text-xs text-stone-400 mt-2">
            n^log_b(a) = n^{masterResult.res.logBa.toFixed(3)}. Comparing to f(n) = Θ(n^{masterResult.exp}{masterResult.includesLog ? " · log n" : ""}).
          </p>
        </Card>
        <Card>
          <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
            <strong className="text-stone-900 dark:text-stone-50">Reference:</strong> Merge Sort → T(n) = 2T(n/2) + n → a=2, b=2, f=n → Case 2 → Θ(n log n).
            Binary Search → T(n) = T(n/2) + 1 → Case 2 → Θ(log n). Strassen → T(n) = 7T(n/2) + n² → Case 1 → Θ(n^log₂7).
          </p>
        </Card>
      </div>
    </AlgoCanvas>
  );
}

/* ------------------------------------------------------------------ */
/*  Learn tab                                                          */
/* ------------------------------------------------------------------ */

function LearnTab() {
  const cards = [
    { title: "Three steps", body: "DIVIDE the problem into smaller sub-problems of the same kind. CONQUER each by recursion. COMBINE the sub-answers into the final answer. The combine step is where the magic usually lives." },
    { title: "Why it beats brute force", body: "Each split shrinks the problem by a constant factor. Many sub-problems together do less work than the whole - because the combine step is cheap. Merge sort: n items sorted with n·log n work instead of n²." },
    { title: "Master Theorem", body: "For T(n) = a·T(n/b) + f(n), compare f(n) to n^log_b(a). If f is smaller: Case 1 (leaves dominate). If equal: Case 2 (level-wise equal). If f is larger: Case 3 (root dominates)." },
    { title: "Classic examples", body: "Merge sort (2T(n/2) + n = n log n). Binary search (T(n/2) + 1 = log n). Strassen's matrix mul (7T(n/2) + n² = n^2.81). Closest pair of points (O(n log n) via strip trick)." },
  ];
  return (
    <div className="flex flex-col gap-5">
      <div>
        <SectionEyebrow>Mental model</SectionEyebrow>
        <SectionTitle>Recursion tree. Sum the level work.</SectionTitle>
        <Lede>
          Each level multiplies the number of problems by a and divides each problem size by b.
          The total work is the sum across levels - the Master Theorem tells you which level dominates.
        </Lede>
      </div>
      <div className="grid gap-3" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
        {cards.map((s, i) => (
          <Card key={i}>
            <div className="text-[10px] font-bold text-lime-600 dark:text-lime-400 mb-1.5 font-mono tracking-widest">0{i + 1}</div>
            <div className="font-bold text-stone-900 dark:text-stone-50 mb-1">{s.title}</div>
            <div className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">{s.body}</div>
          </Card>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Try tab                                                            */
/* ------------------------------------------------------------------ */

function TryTab() {
  const problems = [
    { q: "T(n) = 4T(n/2) + n. Complexity?", a: "n^2", hint: "n^log₂4 = n²; f=n is smaller → Case 1." },
    { q: "T(n) = 2T(n/2) + n log n. Complexity?", a: "n log^2 n", hint: "Case 2 with extra log factor." },
    { q: "T(n) = T(n/2) + 1. Complexity?", a: "log n", hint: "Binary search recurrence." },
    { q: "Strassen's matrix mul: T(n) = 7T(n/2) + n². Is it Case 1, 2, or 3?", a: "1", hint: "log₂7 ≈ 2.81 > 2." },
  ];
  const [guesses, setGuesses] = useState<(string | null)[]>(problems.map(() => null));
  const [shown, setShown] = useState<boolean[]>(problems.map(() => false));
  return (
    <div className="flex flex-col gap-3">
      <Callout>Apply the Master Theorem.</Callout>
      {problems.map((p, i) => {
        const g = guesses[i];
        const revealed = shown[i];
        const correct = g !== null && g.trim().replace(/\s+/g, "").toLowerCase() === p.a.replace(/\s+/g, "");
        return (
          <Card key={i}>
            <div className="flex items-center gap-3 flex-wrap">
              <span className="font-bold text-sm text-stone-500 font-mono">#{i + 1}</span>
              <span className="flex-1 text-sm text-stone-900 dark:text-stone-100">{p.q}</span>
              <input
                type="text"
                placeholder="answer"
                value={g ?? ""}
                onChange={(e) => { const v = [...guesses]; v[i] = e.target.value; setGuesses(v); }}
                className="w-28 px-2.5 py-1.5 rounded-md border border-stone-200 dark:border-white/10 bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-100 font-mono text-sm focus:outline-none focus:border-stone-400"
              />
              <button
                type="button"
                onClick={() => { const v = [...shown]; v[i] = true; setShown(v); }}
                className="px-3 py-1.5 rounded-md text-xs font-semibold border border-stone-200 dark:border-white/10 bg-white dark:bg-stone-900 text-stone-600 dark:text-stone-400 cursor-pointer hover:border-stone-400 transition-colors"
              >
                Reveal
              </button>
              {revealed && (
                <span className={`text-xs font-bold px-3 py-1 rounded-md ${correct ? "bg-lime-50 dark:bg-lime-400/10 text-lime-800 dark:text-lime-200 border border-lime-500" : "bg-rose-50 dark:bg-rose-500/10 text-rose-800 dark:text-rose-200 border border-rose-500"}`}>
                  {correct ? `✓ ${p.a}` : `Answer: ${p.a}`}
                </span>
              )}
            </div>
            {revealed && (
              <div className="mt-3">
                <Callout>Hint: {p.hint}</Callout>
              </div>
            )}
          </Card>
        );
      })}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Insight tab                                                        */
/* ------------------------------------------------------------------ */

function InsightTab() {
  return (
    <div className="flex flex-col gap-4">
      <Card>
        <SubHeading>Why the combine step matters most</SubHeading>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          The recursion itself is cheap - splitting an array doesn&apos;t cost anything asymptotically. It&apos;s the merge (in merge sort) or the strip check (in closest pair) that determines the final complexity.
        </p>
      </Card>
      <Card>
        <SubHeading>The strip trick</SubHeading>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          After solving each half of closest-pair, the only unchecked pairs cross the divider and are within d of it. A classical geometric argument shows each point in the strip needs to check at most 7 neighbors - keeping combine linear, so total is O(n log n).
        </p>
      </Card>
      <Card>
        <SubHeading>Interview-style recurrences</SubHeading>
        <ul className="list-disc pl-5 space-y-1 text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          <li>T(n) = 2T(n/2) + O(n) → O(n log n) (merge sort).</li>
          <li>T(n) = 2T(n/2) + O(1) → O(n) (tree depth sum).</li>
          <li>T(n) = T(n/2) + O(n) → O(n) (decreasing-geometric series).</li>
          <li>T(n) = 2T(n-1) + O(1) → O(2ⁿ) (not covered by Master Theorem).</li>
        </ul>
      </Card>
    </div>
  );
}

/* ------------------------------------------------------------------ */

interface Props {
  onQuizComplete?: (score: number) => void;
}

export default function L6_DivideConquer({ onQuizComplete }: Props) {
  const tabs: LessonTabDef[] = [
    { id: "learn", label: "Learn", icon: <BookOpen className="w-4 h-4" />, content: <LearnTab /> },
    { id: "visualize", label: "Visualize", icon: <Play className="w-4 h-4" />, content: <VisualizeTab /> },
    { id: "try", label: "Try It", icon: <Target className="w-4 h-4" />, content: <TryTab /> },
    { id: "insight", label: "Insight", icon: <Lightbulb className="w-4 h-4" />, content: <InsightTab /> },
    ...(PRACTICE_TOPIC_SLUG
      ? [{ id: "practice", label: "Practice", icon: <Code2 className="w-4 h-4" />, content: <PracticeTab topicSlug={PRACTICE_TOPIC_SLUG} /> }]
      : []),
  ];

  const quiz: LessonQuizQuestion[] = [
    {
      question: "Which of these is NOT a divide-and-conquer algorithm?",
      options: ["Merge sort", "Quick sort", "Bubble sort", "Binary search"],
      correctIndex: 2,
      explanation: "Bubble sort is iterative-comparison sort - it repeatedly compares adjacent elements without splitting the problem.",
    },
    {
      question: "Apply Master Theorem: T(n) = 3T(n/2) + n. Complexity?",
      options: ["O(n)", "O(n log n)", "O(n^log₂3) ≈ O(n^1.58)", "O(n²)"],
      correctIndex: 2,
      explanation: "log_b(a) = log₂3 ≈ 1.58 > 1. f(n) = n is polynomially smaller → Case 1 → O(n^log₂3).",
    },
    {
      question: "The closest-pair-of-points algorithm's combine step...",
      options: [
        "Compares every cross-pair, costing O(n²)",
        "Only checks points in a strip of width 2d and is O(n)",
        "Reuses the recursion's answer without extra work",
        "Runs a BFS on the plane",
      ],
      correctIndex: 1,
      explanation: "Geometric argument: a point in the strip needs to check at most 7 others - the strip scan is O(n), keeping the total at O(n log n).",
    },
    {
      question: "For merge sort, the recurrence is T(n) = 2T(n/2) + n. Which Master Theorem case?",
      options: ["Case 1", "Case 2", "Case 3", "Master Theorem doesn't apply"],
      correctIndex: 1,
      explanation: "n^log₂2 = n, which matches f(n) = n exactly → Case 2 → O(n log n).",
    },
  ];

  return (
    <LessonShell
      title="Divide & Conquer"
      level={6}
      lessonNumber={2}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="Recurrences appear constantly - know the Master Theorem cold"
      nextLessonHint="Backtracking"
      onQuizComplete={onQuizComplete}
    />
  );
}

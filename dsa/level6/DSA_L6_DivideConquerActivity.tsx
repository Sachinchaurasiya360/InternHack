"use client";

import { useMemo, useState } from "react";
import { BookOpen, Play, Target, Lightbulb } from "lucide-react";
import EngineeringLessonShell, { EngTabDef, EngQuizQuestion } from "@/components/engineering/EngineeringLessonShell";
import {
  AlgoCanvas, PseudocodePanel, VariablesPanel, InputEditor, useStepPlayer,
} from "@/components/engineering/algo";
import {
  C, DSA_ACCENT as A,
  SectionEyebrow, SectionTitle, SubHeading, Lede,
  Card, PillButton, Callout,
} from "@/components/engineering/lessonPrimitives";

/* ------------------------------------------------------------------ */
/*  Closest Pair of Points                                             */
/* ------------------------------------------------------------------ */

interface Point { x: number; y: number; id: number; }

interface CPFrame {
  line: number;
  vars: Record<string, string | number | undefined>;
  message: string;
  divider?: number; // x-coord of vertical line
  leftRange?: [number, number]; // x range of "left half"
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

function dist(a: Point, b: Point) {
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
      leftRange: [xLo, xHi],
      bestPair: best.pair, bestDist: best.d,
    });
    for (let i = 0; i < pts.length; i++) {
      for (let j = i + 1; j < pts.length; j++) {
        const d = dist(pts[i], pts[j]);
        if (d < best.d) {
          best = { pair: [pts[i].id, pts[j].id], d };
          frames.push({
            line: 1, vars: { pair: `(${pts[i].id},${pts[j].id})`, d: d.toFixed(2) },
            message: `New best: points ${pts[i].id}-${pts[j].id}, d = ${d.toFixed(2)}`,
            leftRange: [xLo, xHi],
            bestPair: best.pair, bestDist: best.d,
          });
        }
      }
    }
  }

  function recurse(pts: Point[], xLo: number, xHi: number) {
    frames.push({
      line: 0, vars: { size: pts.length, best: Number.isFinite(best.d) ? best.d.toFixed(2) : "∞" },
      message: `closestPair on ${pts.length} points (x in [${xLo.toFixed(1)}, ${xHi.toFixed(1)}]).`,
      leftRange: [xLo, xHi],
      bestPair: best.pair, bestDist: best.d,
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
      divider: midX, leftRange: [xLo, midX],
      bestPair: best.pair, bestDist: best.d,
    });
    recurse(pts.slice(0, midIdx), xLo, midX);

    frames.push({
      line: 4, vars: { mid: midX.toFixed(1) },
      message: `Recurse on RIGHT half (${pts.length - midIdx} points).`,
      divider: midX, rightRange: [midX, xHi],
      bestPair: best.pair, bestDist: best.d,
    });
    recurse(pts.slice(midIdx), midX, xHi);

    frames.push({
      line: 5, vars: { d: best.d.toFixed(2) },
      message: `Combine step. Now check the strip |x - mid| < ${best.d.toFixed(2)}.`,
      divider: midX, leftRange: [xLo, xHi],
      bestPair: best.pair, bestDist: best.d,
    });

    const strip = pts.filter((p) => Math.abs(p.x - midX) < best.d).sort((a, b) => a.y - b.y);
    frames.push({
      line: 6, vars: { strip: strip.length, d: best.d.toFixed(2) },
      message: `Strip has ${strip.length} points. Scan neighbors within ${best.d.toFixed(2)} y-distance.`,
      divider: midX, leftRange: [xLo, xHi],
      bestPair: best.pair, bestDist: best.d,
      stripCandidates: strip.map((p) => p.id),
    });
    for (let i = 0; i < strip.length; i++) {
      for (let j = i + 1; j < strip.length && strip[j].y - strip[i].y < best.d; j++) {
        const d = dist(strip[i], strip[j]);
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
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", height: "auto", maxHeight: 320, background: C.bg, borderRadius: 8, border: `1px solid ${C.border}` }}>
      {/* Left/right range tinting */}
      {frame.leftRange && (
        <rect
          x={sx(frame.leftRange[0])} y={PAD}
          width={Math.max(1, sx(frame.leftRange[1]) - sx(frame.leftRange[0]))}
          height={H - 2 * PAD}
          fill="rgba(59,130,246,0.08)"
        />
      )}
      {frame.rightRange && (
        <rect
          x={sx(frame.rightRange[0])} y={PAD}
          width={Math.max(1, sx(frame.rightRange[1]) - sx(frame.rightRange[0]))}
          height={H - 2 * PAD}
          fill="rgba(16,185,129,0.08)"
        />
      )}
      {/* Divider line */}
      {frame.divider !== undefined && (
        <line x1={sx(frame.divider)} y1={PAD} x2={sx(frame.divider)} y2={H - PAD}
          stroke="#8b5cf6" strokeWidth={2} strokeDasharray="5 4" />
      )}
      {/* Strip width shown as a band */}
      {frame.divider !== undefined && frame.bestDist && Number.isFinite(frame.bestDist) && (
        <rect
          x={sx(frame.divider - frame.bestDist)} y={PAD}
          width={Math.max(1, sx(frame.divider + frame.bestDist) - sx(frame.divider - frame.bestDist))}
          height={H - 2 * PAD}
          fill="rgba(139,92,246,0.12)"
          stroke="rgba(139,92,246,0.4)"
        />
      )}
      {/* Best pair connecting line */}
      {bestPts && (
        <line x1={sx(bestPts[0].x)} y1={sy(bestPts[0].y)} x2={sx(bestPts[1].x)} y2={sy(bestPts[1].y)}
          stroke="#ef4444" strokeWidth={3}
          style={{ filter: "drop-shadow(0 0 6px rgba(239,68,68,0.6))" }}
        />
      )}
      {/* Points */}
      {points.map((p) => {
        const isBest = bestPts && (p.id === bestPts[0].id || p.id === bestPts[1].id);
        const inStrip = stripSet.has(p.id);
        return (
          <g key={p.id}>
            <circle cx={sx(p.x)} cy={sy(p.y)} r={isBest ? 7 : 5}
              fill={isBest ? "#ef4444" : inStrip ? "#8b5cf6" : "#0f172a"}
              stroke="#fff" strokeWidth={2}
              style={{ transition: "all 0.3s" }}
            />
            <text x={sx(p.x) + 8} y={sy(p.y) - 8} fontSize="10" fill={C.textMuted} fontFamily={C.heading}>
              {p.id}
            </text>
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

  if (mode === "closest") {
    return (
      <AlgoCanvas
        title="Closest Pair of Points - Divide & Conquer"
        player={player}
        input={
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <ModeToggle mode={mode} setMode={setMode} />
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
        legend={
          <div style={{ display: "flex", gap: 14, fontSize: "0.72rem" }}>
            <Legend color="#ef4444" label="best pair" />
            <Legend color="#8b5cf6" label="strip candidate" />
            <Legend color="rgba(59,130,246,0.25)" label="left half" />
            <Legend color="rgba(16,185,129,0.25)" label="right half" />
          </div>
        }
      >
        {frame ? <ClosestPairPlot points={points} frame={frame} /> : <div style={{ color: C.textMuted, padding: 20 }}>Need at least 2 points.</div>}
        {frame && (
          <div style={{ marginTop: 12 }}>
            <Callout accent={A}>{frame.message}</Callout>
          </div>
        )}
      </AlgoCanvas>
    );
  }
  // Master theorem view - a simple static panel, no frames needed
  return (
    <MasterTheoremView
      mode={mode}
      setMode={setMode}
      aStr={aStr}
      setAStr={setAStr}
      bStr={bStr}
      setBStr={setBStr}
      fStr={fStr}
      setFStr={setFStr}
      masterResult={masterResult}
    />
  );
}

function MasterTheoremView({
  mode, setMode, aStr, setAStr, bStr, setBStr, fStr, setFStr, masterResult,
}: {
  mode: "closest" | "master";
  setMode: (m: "closest" | "master") => void;
  aStr: string; setAStr: (v: string) => void;
  bStr: string; setBStr: (v: string) => void;
  fStr: string; setFStr: (v: string) => void;
  masterResult: { res: MasterResult; a: number; b: number; exp: number; includesLog: boolean };
}) {
  const dummyFrames = useMemo(() => [{ line: 0, vars: {}, message: "Master Theorem calculator" }], []);
  const dummy = useStepPlayer(dummyFrames);
  return (
    <AlgoCanvas
      title="Master Theorem - T(n) = a · T(n/b) + f(n)"
      player={dummy}
      input={<ModeToggle mode={mode} setMode={setMode} />}
    >
      <div style={{ fontFamily: C.heading, display: "flex", flexDirection: "column", gap: 14 }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10 }}>
          <MasterInput label="a (subproblems)" value={aStr} onChange={setAStr} />
          <MasterInput label="b (shrink factor)" value={bStr} onChange={setBStr} />
          <MasterInput label="f(n) (combine cost)" value={fStr} onChange={setFStr} placeholder="e.g. n, n^2, log n" />
        </div>
        <Card>
          <div style={{ fontSize: "0.85rem", color: C.textSecondary, marginBottom: 6 }}>
            Recurrence: <code style={{ fontFamily: C.mono, color: C.text }}>T(n) = {masterResult.a} · T(n/{masterResult.b}) + {fStr}</code>
          </div>
          <div style={{ fontSize: "1rem", fontWeight: 700, color: A, marginBottom: 4 }}>
            {masterResult.res.caseNumber ? `Case ${masterResult.res.caseNumber}` : "Unknown"} → <span style={{ color: C.successDark }}>{masterResult.res.complexity}</span>
          </div>
          <div style={{ fontSize: "0.85rem", color: C.textSecondary, lineHeight: 1.55 }}>
            {masterResult.res.explanation}
          </div>
          <div style={{ marginTop: 12, fontSize: "0.78rem", color: C.textMuted }}>
            n^log_b(a) = n^{masterResult.res.logBa.toFixed(3)}. Comparing to f(n) = Θ(n^{masterResult.exp}{masterResult.includesLog ? " · log n" : ""}).
          </div>
        </Card>
        <Card>
          <div style={{ fontSize: "0.82rem", color: C.textSecondary, lineHeight: 1.6 }}>
            <strong style={{ color: C.text }}>Reference:</strong> Merge Sort → T(n) = 2T(n/2) + n → a=2, b=2, f=n → Case 2 → Θ(n log n).
            Binary Search → T(n) = T(n/2) + 1 → Case 2 → Θ(log n). Strassen → T(n) = 7T(n/2) + n² → Case 1 → Θ(n^log₂7).
          </div>
        </Card>
      </div>
    </AlgoCanvas>
  );
}

function MasterInput({ label, value, onChange, placeholder }: { label: string; value: string; onChange: (v: string) => void; placeholder?: string }) {
  return (
    <div>
      <div style={{ fontSize: "0.72rem", fontWeight: 700, color: C.textMuted, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 4, fontFamily: C.heading }}>{label}</div>
      <input type="text" value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder}
        style={{
          width: "100%", padding: "7px 10px", borderRadius: 8,
          border: `1px solid ${C.border}`,
          fontFamily: C.mono,
          fontSize: "0.88rem", background: C.bg, color: C.text,
          outline: "none",
        }} />
    </div>
  );
}

function ModeToggle({ mode, setMode }: { mode: "closest" | "master"; setMode: (m: "closest" | "master") => void }) {
  return (
    <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
      {(["closest", "master"] as const).map((m) => (
        <PillButton key={m} onClick={() => setMode(m)} active={mode === m} color={A}>
          <span style={{ fontSize: "0.78rem" }}>{m === "closest" ? "Closest Pair" : "Master Theorem"}</span>
        </PillButton>
      ))}
    </div>
  );
}

function Legend({ color, label }: { color: string; label: string }) {
  return <span style={{ display: "inline-flex", alignItems: "center", gap: 5 }}>
    <span style={{ width: 10, height: 10, background: color, borderRadius: 2 }} />{label}
  </span>;
}

/* ------------------------------------------------------------------ */
/*  Learn tab                                                          */
/* ------------------------------------------------------------------ */

function LearnTab() {
  const cards = [
    { title: "Three steps", body: "DIVIDE the problem into smaller sub-problems of the same kind. CONQUER each by recursion. COMBINE the sub-answers into the final answer. The combine step is where the magic usually lives." },
    { title: "Why it beats brute force", body: "Each split shrinks the problem by a constant factor. Many sub-problems together do less work than the whole - because the combine step is cheap. Merge sort: n items sorted with n·log n work instead of n²." },
    { title: "Master Theorem", body: "For T(n) = a·T(n/b) + f(n), compare f(n) to n^log_b(a). If f is smaller ⇒ Case 1 (leaves dominate). If equal ⇒ Case 2 (level-wise equal). If f is larger ⇒ Case 3 (root dominates)." },
    { title: "Classic examples", body: "Merge sort (2T(n/2) + n = n log n). Binary search (T(n/2) + 1 = log n). Strassen's matrix mul (7T(n/2) + n² = n^2.81). Closest pair of points (O(n log n) via strip trick)." },
  ];
  return (
    <div style={{ fontFamily: C.heading, display: "flex", flexDirection: "column", gap: 14 }}>
      <div>
        <SectionEyebrow color={A}>Mental model</SectionEyebrow>
        <SectionTitle>Recursion tree. Sum the level work.</SectionTitle>
        <Lede>
          Each level multiplies the number of problems by a and divides each problem size by b.
          The total work is the sum across levels - the Master Theorem tells you which level dominates.
        </Lede>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 12 }}>
        {cards.map((s, i) => (
          <Card key={i}>
            <div style={{ fontSize: "0.72rem", fontWeight: 700, color: A, marginBottom: 6, fontFamily: C.mono, letterSpacing: "0.08em" }}>0{i + 1}</div>
            <div style={{ fontWeight: 700, fontSize: "0.95rem", color: C.text, marginBottom: 4, letterSpacing: "-0.01em" }}>{s.title}</div>
            <div style={{ fontSize: "0.85rem", color: C.textSecondary, lineHeight: 1.55 }}>{s.body}</div>
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
    <div style={{ fontFamily: C.heading, display: "flex", flexDirection: "column", gap: 12 }}>
      <Callout accent={A}>Apply the Master Theorem.</Callout>
      {problems.map((p, i) => {
        const g = guesses[i];
        const revealed = shown[i];
        const correct = g !== null && g.trim().replace(/\s+/g, "").toLowerCase() === p.a.replace(/\s+/g, "");
        return (
          <Card key={i}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
              <span style={{ fontWeight: 700, fontSize: "0.85rem", color: C.textMuted, fontFamily: C.mono }}>#{i + 1}</span>
              <span style={{ flex: 1, fontSize: "0.9rem", color: C.text }}>{p.q}</span>
              <input type="text" placeholder="answer" value={g ?? ""}
                onChange={(e) => { const v = [...guesses]; v[i] = e.target.value; setGuesses(v); }}
                style={{ width: 110, padding: "7px 10px", borderRadius: 8, border: `1px solid ${C.border}`, fontFamily: C.mono, fontSize: "0.85rem", outline: "none", background: C.bg, color: C.text }}
              />
              <button onClick={() => { const v = [...shown]; v[i] = true; setShown(v); }}
                style={{
                  padding: "6px 14px", borderRadius: 8, fontSize: "0.78rem", fontWeight: 700,
                  border: `1px solid ${C.border}`, background: C.bg, color: C.textSecondary,
                  cursor: "pointer", fontFamily: C.heading,
                }}>Reveal</button>
              {revealed && (
                <span style={{
                  fontSize: "0.82rem", fontWeight: 700,
                  color: correct ? C.successDark : C.dangerDark,
                  padding: "4px 12px", borderRadius: 8,
                  background: correct ? `${C.success}14` : `${C.danger}14`,
                  fontFamily: C.heading,
                }}>{correct ? `✓ ${p.a}` : `Answer: ${p.a}`}</span>
              )}
            </div>
            {revealed && (
              <div style={{ marginTop: 12 }}>
                <Callout accent={A}>Hint: {p.hint}</Callout>
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
    <div style={{ fontFamily: C.heading, display: "flex", flexDirection: "column", gap: 12 }}>
      <Card>
        <SubHeading>Why the combine step matters most</SubHeading>
        <p style={{ fontSize: "0.9rem", color: C.textSecondary, lineHeight: 1.6, margin: 0 }}>
          The recursion itself is cheap - splitting an array doesn&apos;t cost anything asymptotically. It&apos;s the merge (in merge sort) or the strip check (in closest pair) that determines the final complexity.
        </p>
      </Card>
      <Card>
        <SubHeading>The strip trick</SubHeading>
        <p style={{ fontSize: "0.9rem", color: C.textSecondary, lineHeight: 1.6, margin: 0 }}>
          After solving each half of closest-pair, the only unchecked pairs cross the divider and are within d of it. A classical geometric argument shows each point in the strip needs to check at most 7 neighbors - keeping combine linear, so total is O(n log n).
        </p>
      </Card>
      <Card>
        <SubHeading>Interview-style recurrences</SubHeading>
        <ul style={{ fontSize: "0.9rem", color: C.textSecondary, lineHeight: 1.7, paddingLeft: 22, margin: 0 }}>
          <li>T(n) = 2T(n/2) + O(n) ⇒ O(n log n) (merge sort).</li>
          <li>T(n) = 2T(n/2) + O(1) ⇒ O(n) (tree depth sum).</li>
          <li>T(n) = T(n/2) + O(n) ⇒ O(n) (decreasing-geometric series).</li>
          <li>T(n) = 2T(n-1) + O(1) ⇒ O(2ⁿ) (not covered by Master Theorem).</li>
        </ul>
      </Card>
    </div>
  );
}

/* ------------------------------------------------------------------ */

export default function DSA_L6_DivideConquerActivity() {
  const tabs: EngTabDef[] = [
    { id: "learn", label: "Learn", icon: <BookOpen className="w-4 h-4" />, content: <LearnTab /> },
    { id: "visualize", label: "Visualize", icon: <Play className="w-4 h-4" />, content: <VisualizeTab /> },
    { id: "try", label: "Try It", icon: <Target className="w-4 h-4" />, content: <TryTab /> },
    { id: "insight", label: "Insight", icon: <Lightbulb className="w-4 h-4" />, content: <InsightTab /> },
  ];
  const quiz: EngQuizQuestion[] = [
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
    <EngineeringLessonShell
      title="Divide & Conquer"
      level={6}
      lessonNumber={3}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="Recurrences appear constantly - know the Master Theorem cold"
      nextLessonHint="Greedy Algorithms - pick the locally best choice"
    />
  );
}

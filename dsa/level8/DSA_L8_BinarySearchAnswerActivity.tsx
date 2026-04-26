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
  Card, Callout,
} from "@/components/engineering/lessonPrimitives";

/* ------------------------------------------------------------------ */
/*  Problem: Capacity to Ship Packages in D days                        */
/*  Find the minimum ship capacity so that packages[] can be delivered  */
/*  in D days, loading in order.                                        */
/* ------------------------------------------------------------------ */

interface LoadStep { day: number; cap: number; used: number; pkgs: number[]; }

interface Frame {
  line: number;
  vars: Record<string, string | number | undefined>;
  message: string;
  lo: number;
  hi: number;
  mid: number | null;
  feasible: boolean | null;
  loadSteps: LoadStep[]; // simulation of the feasibility check for current mid
  best: number | null;
  flashKey?: string;
}

const PSEUDO = [
  "function minCapacity(pkgs, D):",
  "  lo ← max(pkgs); hi ← sum(pkgs)",
  "  while lo < hi:",
  "    mid ← (lo + hi) // 2",
  "    if canShip(pkgs, D, mid):",
  "      hi ← mid     // feasible → try smaller",
  "    else:",
  "      lo ← mid + 1 // infeasible → need larger",
  "  return lo",
];

function simulateShip(pkgs: number[], D: number, cap: number): { ok: boolean; steps: LoadStep[] } {
  const steps: LoadStep[] = [];
  let day = 1;
  let used = 0;
  let bucket: number[] = [];
  for (const p of pkgs) {
    if (p > cap) {
      return { ok: false, steps: [{ day, cap, used, pkgs: [...bucket] }] };
    }
    if (used + p > cap) {
      steps.push({ day, cap, used, pkgs: [...bucket] });
      day++;
      used = 0;
      bucket = [];
    }
    used += p;
    bucket.push(p);
  }
  steps.push({ day, cap, used, pkgs: [...bucket] });
  return { ok: day <= D, steps };
}

function buildFrames(pkgs: number[], D: number): Frame[] {
  const f: Frame[] = [];
  if (pkgs.length === 0) {
    f.push({ line: 0, vars: {}, message: "No packages.", lo: 0, hi: 0, mid: null, feasible: null, loadSteps: [], best: null });
    return f;
  }
  const hiMax = pkgs.reduce((a, b) => a + b, 0);
  const loMin = Math.max(...pkgs);
  let lo = loMin;
  let hi = hiMax;
  let best: number | null = null;

  f.push({
    line: 0, vars: { pkgs: `[${pkgs.join(",")}]`, D },
    message: `Ship ${pkgs.length} packages in ${D} days. Find the smallest capacity.`,
    lo, hi, mid: null, feasible: null, loadSteps: [], best: null,
  });
  f.push({
    line: 1, vars: { lo, hi }, flashKey: "hi",
    message: `Answer space: [lo=${lo} (max pkg), hi=${hi} (sum of pkgs)].`,
    lo, hi, mid: null, feasible: null, loadSteps: [], best: null,
  });

  let guard = 0;
  while (lo < hi && guard++ < 40) {
    f.push({
      line: 2, vars: { lo, hi },
      message: `lo=${lo} < hi=${hi} → keep searching.`,
      lo, hi, mid: null, feasible: null, loadSteps: [], best,
    });
    const mid = Math.floor((lo + hi) / 2);
    f.push({
      line: 3, vars: { lo, hi, mid }, flashKey: "mid",
      message: `mid = (${lo}+${hi})/2 = ${mid}. Test capacity ${mid}.`,
      lo, hi, mid, feasible: null, loadSteps: [], best,
    });
    const sim = simulateShip(pkgs, D, mid);
    f.push({
      line: 4, vars: { mid, feasible: sim.ok ? "yes" : "no", daysUsed: sim.steps.length },
      message: sim.ok
        ? `canShip(cap=${mid}) → uses ${sim.steps.length} days (≤ ${D}) ✓`
        : `canShip(cap=${mid}) → uses ${sim.steps.length} days (> ${D}) ✗`,
      lo, hi, mid, feasible: sim.ok, loadSteps: sim.steps, best,
    });
    if (sim.ok) {
      hi = mid;
      best = mid;
      f.push({
        line: 5, vars: { hi, best }, flashKey: "hi",
        message: `Feasible - try smaller. hi ← ${mid}.`,
        lo, hi, mid, feasible: true, loadSteps: sim.steps, best,
      });
    } else {
      lo = mid + 1;
      f.push({
        line: 7, vars: { lo }, flashKey: "lo",
        message: `Infeasible - need bigger. lo ← ${mid + 1}.`,
        lo, hi, mid, feasible: false, loadSteps: sim.steps, best,
      });
    }
  }

  f.push({
    line: 8, vars: { answer: lo }, flashKey: "answer",
    message: `Smallest feasible capacity = ${lo}.`,
    lo, hi, mid: null, feasible: null, loadSteps: [], best: lo,
  });
  return f;
}

/* ------------------------------------------------------------------ */
/*  Visualize                                                          */
/* ------------------------------------------------------------------ */

function parseInput(s: string): { pkgs: number[]; D: number } | null {
  const parts = s.split("|");
  if (parts.length !== 2) return null;
  const pkgs = parts[0].split(/[,\s]+/).map(Number).filter((x) => Number.isFinite(x) && x > 0);
  const D = Number(parts[1].trim());
  if (!pkgs.length || !Number.isFinite(D) || D < 1) return null;
  return { pkgs, D };
}

function VisualizeTab() {
  const [inputStr, setInputStr] = useState("1,2,3,4,5,6,7,8,9,10 | 5");
  const parsed = parseInput(inputStr) ?? { pkgs: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], D: 5 };
  const frames = useMemo(() => buildFrames(parsed.pkgs, parsed.D), [parsed.pkgs, parsed.D]);
  const player = useStepPlayer(frames);
  const frame = player.current!;

  return (
    <AlgoCanvas
      title="Capacity to Ship Packages - Binary Search on Answer"
      player={player}
      input={
        <InputEditor
          label="packages | days  (e.g. 1,2,3,4,5 | 3)"
          value={inputStr}
          placeholder="e.g. 1,2,3,4,5,6,7,8,9,10 | 5"
          helper="Comma-separated package weights, a pipe (|), then number of days."
          presets={[
            { label: "10 pkgs / 5 days", value: "1,2,3,4,5,6,7,8,9,10 | 5" },
            { label: "D=3", value: "3,2,2,4,1,4 | 3" },
            { label: "Tight (D=1)", value: "1,2,3,1,1 | 4" },
            { label: "Large", value: "5,4,3,2,4,5 | 2" },
          ]}
          onApply={(v) => { if (parseInput(v)) setInputStr(v); }}
          onRandom={() => {
            const n = 6 + Math.floor(Math.random() * 4);
            const pkgs: number[] = [];
            for (let i = 0; i < n; i++) pkgs.push(1 + Math.floor(Math.random() * 8));
            const d = 2 + Math.floor(Math.random() * (n - 1));
            setInputStr(`${pkgs.join(",")} | ${d}`);
          }}
        />
      }
      pseudocode={<PseudocodePanel lines={PSEUDO} activeLine={frame.line} />}
      variables={<VariablesPanel vars={frame.vars} flashKeys={frame.flashKey ? [frame.flashKey] : []} />}
    >
      <BinarySearchAnswerViz frame={frame} pkgs={parsed.pkgs} D={parsed.D} />
    </AlgoCanvas>
  );
}

function BinarySearchAnswerViz({ frame, pkgs, D }: { frame: Frame; pkgs: number[]; D: number }) {
  const totalLo = Math.max(...pkgs);
  const totalHi = pkgs.reduce((a, b) => a + b, 0);
  const range = Math.max(1, totalHi - totalLo);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
      {/* Number line */}
      <div>
        <div style={{ fontSize: "0.72rem", fontWeight: 700, color: C.textMuted, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 8 }}>
          Answer Space
        </div>
        <div style={{
          position: "relative", height: 70,
          border: `1px solid ${C.border}`, borderRadius: 10,
          background: C.bg, padding: "10px 14px",
        }}>
          {/* Base line */}
          <div style={{
            position: "absolute", left: 14, right: 14, top: "55%",
            height: 4, background: "#e2e8f0", borderRadius: 2,
          }} />
          {/* Active [lo, hi] band */}
          <div style={{
            position: "absolute", top: "55%", height: 4,
            left: `calc(14px + (100% - 28px) * ${(frame.lo - totalLo) / range})`,
            width: `calc((100% - 28px) * ${Math.max(0, (frame.hi - frame.lo) / range)})`,
            background: A, borderRadius: 2,
            transition: "all 0.35s ease",
          }} />
          {/* Tick: total min */}
          <div style={{ position: "absolute", left: 14, top: 8, fontSize: "0.68rem", color: C.textMuted, fontFamily: C.mono }}>
            {totalLo}
          </div>
          <div style={{ position: "absolute", right: 14, top: 8, fontSize: "0.68rem", color: C.textMuted, fontFamily: C.mono }}>
            {totalHi}
          </div>
          {/* lo marker */}
          <div style={{
            position: "absolute", top: "45%",
            left: `calc(14px + (100% - 28px) * ${(frame.lo - totalLo) / range} - 10px)`,
            width: 20, height: 20, borderRadius: "50%",
            background: "#fff", border: `3px solid ${A}`,
            transition: "left 0.35s ease",
          }} />
          <div style={{
            position: "absolute", top: "78%",
            left: `calc(14px + (100% - 28px) * ${(frame.lo - totalLo) / range} - 8px)`,
            fontSize: "0.7rem", fontWeight: 700, color: A,
            transition: "left 0.35s ease",
            fontFamily: C.mono,
          }}>
            lo={frame.lo}
          </div>
          {/* hi marker */}
          <div style={{
            position: "absolute", top: "45%",
            left: `calc(14px + (100% - 28px) * ${(frame.hi - totalLo) / range} - 10px)`,
            width: 20, height: 20, borderRadius: "50%",
            background: "#fff", border: `3px solid ${C.danger}`,
            transition: "left 0.35s ease",
          }} />
          <div style={{
            position: "absolute", top: "78%",
            left: `calc(14px + (100% - 28px) * ${(frame.hi - totalLo) / range} - 8px)`,
            fontSize: "0.7rem", fontWeight: 700, color: C.danger,
            transition: "left 0.35s ease",
            fontFamily: C.mono,
          }}>
            hi={frame.hi}
          </div>
          {/* mid marker */}
          {frame.mid !== null && (
            <>
              <div style={{
                position: "absolute", top: "30%",
                left: `calc(14px + (100% - 28px) * ${(frame.mid - totalLo) / range} - 9px)`,
                width: 18, height: 18, borderRadius: 4,
                background: "#fbbf24", border: "2px solid #b45309",
                transform: "rotate(45deg)",
                transition: "left 0.35s ease",
              }} />
              <div style={{
                position: "absolute", top: "12%",
                left: `calc(14px + (100% - 28px) * ${(frame.mid - totalLo) / range} - 10px)`,
                fontSize: "0.7rem", fontWeight: 700, color: "#b45309",
                transition: "left 0.35s ease",
                fontFamily: C.mono,
              }}>
                mid={frame.mid}
              </div>
            </>
          )}
        </div>
        <div style={{ fontSize: "0.7rem", color: C.textMuted, marginTop: 6 }}>
          Feasible capacities (if sorted on the line) form a prefix/suffix - binary search on the boundary.
        </div>
      </div>

      {/* Load simulation */}
      <div>
        <div style={{ fontSize: "0.72rem", fontWeight: 700, color: C.textMuted, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 8 }}>
          Feasibility Check {frame.mid !== null ? `- cap=${frame.mid}` : ""}
          {frame.feasible === true && <span style={{ color: C.successDark, marginLeft: 8 }}>✓ fits in {D}</span>}
          {frame.feasible === false && <span style={{ color: C.dangerDark, marginLeft: 8 }}>✗ needs more</span>}
        </div>
        <div style={{
          display: "flex", gap: 10, flexWrap: "wrap", minHeight: 80,
          padding: 10, border: `1px solid ${C.border}`, borderRadius: 10,
          background: C.bg,
        }}>
          {frame.loadSteps.length === 0 ? (
            <span style={{ fontSize: "0.78rem", color: C.textMuted, fontStyle: "italic" }}>
              Waiting for a mid to test…
            </span>
          ) : (
            frame.loadSteps.map((step, i) => {
              const usedPct = (step.used / step.cap) * 100;
              const over = step.used > step.cap;
              return (
                <div key={i} style={{
                  minWidth: 110, padding: 8, borderRadius: 8,
                  border: `2px solid ${over ? C.danger : A}`,
                  background: over ? `${C.danger}10` : `${A}10`,
                }}>
                  <div style={{ fontSize: "0.7rem", fontWeight: 700, color: C.textMuted, marginBottom: 4 }}>
                    Day {step.day}
                  </div>
                  {/* Truck capacity bar */}
                  <div style={{
                    position: "relative", height: 10, borderRadius: 5,
                    background: "#e2e8f0", overflow: "hidden", marginBottom: 4,
                  }}>
                    <div style={{
                      position: "absolute", left: 0, top: 0, bottom: 0,
                      width: `${Math.min(100, usedPct)}%`,
                      background: over ? C.danger : A,
                      transition: "width 0.3s ease",
                    }} />
                  </div>
                  <div style={{ fontSize: "0.7rem", color: C.textMuted, fontFamily: C.mono }}>
                    {step.used}/{step.cap}
                  </div>
                  <div style={{ fontSize: "0.68rem", color: C.text, marginTop: 4, fontFamily: C.mono }}>
                    [{step.pkgs.join(",")}]
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>

      {frame.best !== null && (
        <div style={{
          padding: "10px 14px", borderRadius: 10,
          background: `${C.success}14`, border: `2px solid ${C.success}`,
          fontSize: "0.88rem", color: C.text,
        }}>
          Best feasible capacity found so far: <b style={{ color: C.successDark, fontFamily: C.mono }}>{frame.best}</b>
        </div>
      )}
      <Callout accent={A}>{frame.message}</Callout>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Learn                                                              */
/* ------------------------------------------------------------------ */

function LearnTab() {
  const sections = [
    { title: "Two kinds of binary search", body: "Classic binary search runs on a sorted array - you look for an element. 'Binary search on the answer' runs on the answer space itself: you binary-search over all possible answers and at each guess ask 'is this guess feasible?'" },
    { title: "When does it work?", body: "You need monotonic feasibility: if capacity c works, then any c' > c also works. Then the set of feasible capacities is a suffix [c*, ∞). Binary-search for c*." },
    { title: "The three ingredients", body: "(1) Answer bounds [lo, hi]. (2) A feasibility predicate canDo(mid) → bool. (3) A monotone direction: feasible → try smaller (shrink hi); infeasible → try larger (grow lo). Works for min AND max problems - flip the direction." },
    { title: "Classic problems", body: "Capacity to ship packages, split-array largest-sum, koko eating bananas, painter partition, aggressive cows, smallest divisor, magnetic force, allocate books. All reduce to binary-search-on-answer + greedy feasibility." },
  ];
  return (
    <div style={{ fontFamily: C.heading, display: "flex", flexDirection: "column", gap: 14 }}>
      <div>
        <SectionEyebrow color={A}>Binary search on answer</SectionEyebrow>
        <SectionTitle>Search the answer space, not the data</SectionTitle>
        <Lede>
          Instead of searching for an element in data, you search for a parameter value that makes the problem solvable. The data becomes the environment for a yes/no test; the search happens on the knob you can turn.
        </Lede>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 10 }}>
        {sections.map((s, i) => (
          <Card key={i}>
            <div style={{ fontSize: "0.78rem", fontWeight: 700, color: A, marginBottom: 4 }}>0{i + 1}</div>
            <div style={{ fontWeight: 700, fontSize: "0.92rem", color: C.text, marginBottom: 4 }}>{s.title}</div>
            <div style={{ fontSize: "0.82rem", color: C.textSecondary, lineHeight: 1.55 }}>{s.body}</div>
          </Card>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Try                                                                */
/* ------------------------------------------------------------------ */

function TryTab() {
  const problems = [
    { q: "pkgs = [1,2,3,4,5,6,7,8,9,10], D=5. Minimum capacity?", a: "15" },
    { q: "pkgs = [3,2,2,4,1,4], D=3. Minimum capacity?", a: "6" },
    { q: "Split [7,2,5,10,8] into 2 subarrays with minimal max-sum. Answer?", a: "18" },
    { q: "Koko & piles=[3,6,7,11], h=8. Minimum eating speed?", a: "4" },
  ];
  const [guesses, setGuesses] = useState<string[]>(problems.map(() => ""));
  const [shown, setShown] = useState<boolean[]>(problems.map(() => false));

  return (
    <div style={{ fontFamily: C.heading, display: "flex", flexDirection: "column", gap: 12 }}>
      <Callout accent={A}>
        In every problem, define the answer space [lo, hi] and the feasibility predicate, then binary-search.
      </Callout>
      {problems.map((p, i) => {
        const correct = guesses[i].trim() === p.a;
        return (
          <Card key={i}>
            <div style={{ fontSize: "0.88rem", color: C.text, marginBottom: 8 }}>
              <span style={{ fontWeight: 700, color: C.textMuted }}>#{i + 1}. </span>{p.q}
            </div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
              <input
                type="text" value={guesses[i]}
                onChange={(e) => { const v = [...guesses]; v[i] = e.target.value; setGuesses(v); }}
                placeholder="your answer"
                style={{
                  width: 100, padding: "7px 10px", borderRadius: 8,
                  border: `1px solid ${C.border}`,
                  fontFamily: C.mono, fontSize: "0.85rem",
                  outline: "none",
                  background: C.bg, color: C.text,
                }}
              />
              <button
                onClick={() => { const v = [...shown]; v[i] = true; setShown(v); }}
                style={{
                  padding: "6px 14px",
                  borderRadius: 8,
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  border: `1px solid ${C.border}`,
                  background: C.bg,
                  color: C.textSecondary,
                  cursor: "pointer",
                  fontFamily: C.heading,
                }}
              >
                Reveal
              </button>
              {shown[i] && (
                <span style={{
                  fontSize: "0.82rem", fontWeight: 700,
                  color: correct ? C.successDark : C.dangerDark,
                  padding: "4px 12px", borderRadius: 8,
                  background: correct ? `${C.success}14` : `${C.danger}14`,
                  fontFamily: C.heading,
                }}>
                  {correct ? `Correct - ${p.a}` : `Answer: ${p.a}`}
                </span>
              )}
            </div>
          </Card>
        );
      })}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Insight                                                            */
/* ------------------------------------------------------------------ */

function InsightTab() {
  return (
    <div style={{ fontFamily: C.heading, display: "flex", flexDirection: "column", gap: 12 }}>
      <Card>
        <SubHeading>Complexity</SubHeading>
        <p style={{ fontSize: "0.88rem", color: C.textSecondary, lineHeight: 1.6, margin: 0 }}>
          Outer binary search: O(log(hi − lo)). Feasibility check: O(n) (one pass). Total: O(n · log(sum)). For ship-packages this is roughly O(n · 30) - blazing fast even when sum is 10⁹.
        </p>
      </Card>
      <Card>
        <SubHeading>Template to memorize</SubHeading>
        <pre style={{
          fontFamily: C.mono, fontSize: "0.78rem",
          background: "#0F172A", color: "#E2E8F0",
          padding: 10, borderRadius: 6, margin: 0, whiteSpace: "pre-wrap",
        }}>
{`lo, hi = lowestAnswer, highestAnswer
while lo < hi:
  mid = (lo + hi) // 2
  if feasible(mid):
    hi = mid
  else:
    lo = mid + 1
return lo`}
        </pre>
      </Card>
      <Card>
        <SubHeading>Interview trap</SubHeading>
        <p style={{ fontSize: "0.88rem", color: C.textSecondary, lineHeight: 1.6, margin: 0 }}>
          The bounds matter: <code style={{ fontFamily: C.mono }}>lo = max(pkg)</code>, not 0 or 1. Anything smaller than the largest package is trivially infeasible. And <code style={{ fontFamily: C.mono }}>hi = sum(pkg)</code>, because that loads everything in one day.
        </p>
      </Card>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Activity                                                           */
/* ------------------------------------------------------------------ */

export default function DSA_L8_BinarySearchAnswerActivity() {
  const tabs: EngTabDef[] = [
    { id: "learn", label: "Learn", icon: <BookOpen className="w-4 h-4" />, content: <LearnTab /> },
    { id: "visualize", label: "Visualize", icon: <Play className="w-4 h-4" />, content: <VisualizeTab /> },
    { id: "try", label: "Try It", icon: <Target className="w-4 h-4" />, content: <TryTab /> },
    { id: "insight", label: "Insight", icon: <Lightbulb className="w-4 h-4" />, content: <InsightTab /> },
  ];
  const quiz: EngQuizQuestion[] = [
    {
      question: "What property MUST the feasibility function satisfy for binary-search-on-answer to work?",
      options: [
        "It must run in O(1)",
        "It must be monotonic - if feasible(x) then feasible(x+1) too (or its dual)",
        "It must compare arrays",
        "It must always return true",
      ],
      correctIndex: 1,
      explanation: "Without monotonicity, the set of feasible answers isn't a prefix/suffix - you can't halve the space.",
    },
    {
      question: "For ship-packages, why is lo = max(packages) and not 1?",
      options: [
        "To save memory",
        "Because a single package heavier than capacity can never fit - anything below max(pkg) is infeasible",
        "So the loop runs fewer times",
        "Because 1 is odd",
      ],
      correctIndex: 1,
      explanation: "If cap < max(pkg), even one package overflows any day's load. max(pkg) is the true floor.",
    },
    {
      question: "Complexity of binary-search-on-answer when answer range is [0, S] and feasibility is O(n)?",
      options: ["O(n)", "O(n · log S)", "O(S · n)", "O(n²)"],
      correctIndex: 1,
      explanation: "log S binary-search iterations, each calling feasibility in O(n).",
    },
    {
      question: "Packages = [1,2,3,4,5], D=2. Smallest capacity?",
      options: ["7", "9", "10", "15"],
      correctIndex: 1,
      explanation: "Try 9: day1=[1,2,3] sum=6, day2=[4,5] sum=9 ≤ 9 ✓ - 2 days. Try 8: day1=[1,2,3] sum=6, day2=[4] sum=4 (5 doesn't fit), day3=[5] - 3 days > 2 ✗. So 9.",
    },
  ];
  return (
    <EngineeringLessonShell
      title="Binary Search on Answer"
      level={8}
      lessonNumber={2}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="Very high - a recurring FAANG pattern"
      nextLessonHint="Monotonic Stack / Queue"
    />
  );
}

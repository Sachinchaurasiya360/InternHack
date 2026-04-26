"use client";

import { useMemo, useState } from "react";
import { BookOpen, Play, Target, Lightbulb } from "lucide-react";
import EngineeringLessonShell, { EngTabDef, EngQuizQuestion } from "@/components/engineering/EngineeringLessonShell";
import {
  AlgoCanvas, PseudocodePanel, VariablesPanel, InputEditor, useStepPlayer, ArrayBars
} from "@/components/engineering/algo";
import type { CellState } from "@/components/engineering/algo";
import {
  C,
  DSA_ACCENT as A,
  SectionEyebrow,
  SectionTitle,
  SubHeading,
  Lede,
  Card,
  PillButton,
  Callout,
} from "@/components/engineering/lessonPrimitives";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

interface Frame {
  line: number;
  vars: Record<string, string | number | undefined>;
  message: string;
  values: number[];
  states: (CellState | undefined)[];
  pointers: Record<string, number>;
  windowRange?: [number, number];
}

function parseArray(s: string): number[] {
  return s.split(/[,\s]+/).map((x) => x.trim()).filter(Boolean).map(Number).filter((x) => !Number.isNaN(x));
}

/* ------------------------------------------------------------------ */
/*  Two Pointer - Pair sum on a sorted array                           */
/* ------------------------------------------------------------------ */

const PSEUDO_PAIR = [
  "function pairSum(a, target):   # a is sorted",
  "  left ← 0, right ← n - 1",
  "  while left < right:",
  "    s ← a[left] + a[right]",
  "    if s == target: return (left, right)",
  "    if s < target: left ← left + 1",
  "    else: right ← right - 1",
  "  return (-1, -1)",
];

function buildPair(arr: number[], target: number): Frame[] {
  const f: Frame[] = [];
  const a = [...arr].sort((x, y) => x - y);
  const n = a.length;
  f.push({
    line: 0, vars: { n, target }, message: `Find two indices whose values add to ${target}. We sort first: [${a.join(", ")}].`,
    values: [...a], states: a.map(() => "default"), pointers: {},
  });
  let left = 0, right = n - 1;
  f.push({
    line: 1, vars: { left, right, target }, message: `Place pointers at the extremes.`,
    values: [...a], states: a.map(() => "default"), pointers: { left, right },
  });
  while (left < right) {
    f.push({
      line: 2, vars: { left, right, target }, message: `While left < right, continue.`,
      values: [...a], states: a.map(() => "default"), pointers: { left, right },
    });
    const s = a[left] + a[right];
    f.push({
      line: 3, vars: { left, right, sum: s, target }, message: `Compute sum: a[${left}] + a[${right}] = ${a[left]} + ${a[right]} = ${s}.`,
      values: [...a], states: a.map((_, k) => (k === left || k === right ? "compare" : "default")), pointers: { left, right },
    });
    if (s === target) {
      f.push({
        line: 4, vars: { left, right, sum: s, target, found: "yes" }, message: `Match! Pair found at indices (${left}, ${right}).`,
        values: [...a], states: a.map((_, k) => (k === left || k === right ? "match" : "default")), pointers: { left, right },
      });
      return f;
    }
    if (s < target) {
      f.push({
        line: 5, vars: { left, right, sum: s, target }, message: `Sum too small; increase it by moving left right.`,
        values: [...a], states: a.map((_, k) => (k === left ? "active" : "default")), pointers: { left, right },
      });
      left++;
    } else {
      f.push({
        line: 6, vars: { left, right, sum: s, target }, message: `Sum too big; decrease it by moving right left.`,
        values: [...a], states: a.map((_, k) => (k === right ? "active" : "default")), pointers: { left, right },
      });
      right--;
    }
  }
  f.push({
    line: 7, vars: { target, found: "no" }, message: `Pointers crossed; no pair sums to ${target}. Total work is O(n).`,
    values: [...a], states: a.map(() => "default"), pointers: {},
  });
  return f;
}

/* ------------------------------------------------------------------ */
/*  Sliding Window - max sum of k consecutive                          */
/* ------------------------------------------------------------------ */

const PSEUDO_WINDOW = [
  "function maxSumK(a, k):",
  "  window ← sum of a[0..k-1]",
  "  best ← window",
  "  for right in k..n-1:",
  "    window ← window + a[right] - a[right - k]",
  "    best ← max(best, window)",
  "  return best",
];

function buildWindow(a: number[], k: number): Frame[] {
  const f: Frame[] = [];
  const n = a.length;
  if (k <= 0 || k > n) {
    f.push({
      line: 0, vars: { n, k }, message: `k must satisfy 1 ≤ k ≤ n. Adjust the input.`,
      values: [...a], states: a.map(() => "default"), pointers: {},
    });
    return f;
  }
  let window = 0;
  for (let i = 0; i < k; i++) window += a[i];
  let best = window;
  let bestLo = 0;
  f.push({
    line: 1, vars: { n, k, window }, message: `Seed the first window [0..${k - 1}] with sum ${window}.`,
    values: [...a], states: a.map((_, idx) => (idx < k ? "window" : "default")), pointers: { left: 0, right: k - 1 },
    windowRange: [0, k - 1],
  });
  f.push({
    line: 2, vars: { window, best }, message: `Record this as the best sum so far.`,
    values: [...a], states: a.map((_, idx) => (idx < k ? "window" : "default")), pointers: { left: 0, right: k - 1 },
    windowRange: [0, k - 1],
  });
  for (let right = k; right < n; right++) {
    const left = right - k + 1;
    f.push({
      line: 3, vars: { right, left, window, best }, message: `Slide: new right = ${right}; new left = ${left}.`,
      values: [...a], states: a.map((_, idx) => (idx >= left && idx <= right ? "window" : "default")),
      pointers: { left, right, in: right, out: left - 1 },
      windowRange: [left, right],
    });
    window = window + a[right] - a[right - k];
    f.push({
      line: 4, vars: { right, left, window, best }, message: `Update in O(1): window ← window + ${a[right]} − ${a[right - k]} = ${window}.`,
      values: [...a],
      states: a.map((_, idx) => {
        if (idx === right) return "active";
        if (idx === right - k) return "visited";
        if (idx >= left && idx <= right) return "window";
        return "default";
      }),
      pointers: { left, right, in: right, out: right - k },
      windowRange: [left, right],
    });
    if (window > best) {
      best = window;
      bestLo = left;
      f.push({
        line: 5, vars: { right, left, window, best }, message: `New best: ${best} (window starts at ${bestLo}).`,
        values: [...a], states: a.map((_, idx) => (idx >= left && idx <= right ? "match" : "default")),
        pointers: { left, right },
        windowRange: [left, right],
      });
    } else {
      f.push({
        line: 5, vars: { right, left, window, best }, message: `Best unchanged at ${best}.`,
        values: [...a], states: a.map((_, idx) => (idx >= left && idx <= right ? "window" : "default")),
        pointers: { left, right },
        windowRange: [left, right],
      });
    }
  }
  f.push({
    line: 6, vars: { best }, message: `Done. Maximum sum of any ${k}-window is ${best}. Total time is O(n).`,
    values: [...a], states: a.map((_, idx) => (idx >= bestLo && idx < bestLo + k ? "done" : "default")),
    pointers: { left: bestLo, right: bestLo + k - 1 },
    windowRange: [bestLo, bestLo + k - 1],
  });
  return f;
}

/* ------------------------------------------------------------------ */
/*  Visualize                                                          */
/* ------------------------------------------------------------------ */

type Mode = "pair" | "window";

function VisualizeTab() {
  const [mode, setMode] = useState<Mode>("pair");
  const [arrStr, setArrStr] = useState("2, 4, 7, 1, 8, 3, 5");
  const [paramStr, setParamStr] = useState("9");

  const arr = useMemo(() => parseArray(arrStr), [arrStr]);

  const { pseudo, frames, helper } = useMemo(() => {
    const p = Number(paramStr);
    if (mode === "pair") {
      return { pseudo: PSEUDO_PAIR, frames: buildPair(arr, Number.isFinite(p) ? p : 0), helper: "Enter the target sum (e.g. 9)" };
    }
    const k = Math.max(1, Math.min(arr.length, Number.isFinite(p) ? Math.floor(p) : 1));
    return { pseudo: PSEUDO_WINDOW, frames: buildWindow(arr, k), helper: "Enter window size k (e.g. 3)" };
  }, [mode, arr, paramStr]);

  const player = useStepPlayer(frames);
  const frame = player.current!;

  const modeLabels: Record<Mode, string> = {
    pair: "Two Pointer — Pair Sum (sorted)",
    window: "Sliding Window — Max Sum of k",
  };

  return (
    <AlgoCanvas
      title={modeLabels[mode]}
      player={player}
      input={
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <InputEditor
            label="Array values"
            value={arrStr}
            placeholder="e.g. 2, 4, 7, 1, 8, 3, 5"
            presets={[
              { label: "Small", value: "1, 3, 5, 7, 9" },
              { label: "Mixed", value: "2, 4, 7, 1, 8, 3, 5" },
              { label: "Negatives", value: "-4, 2, -1, 5, 3, -2, 4" },
              { label: "Single peak", value: "1, 2, 3, 10, 2, 1, 1" },
            ]}
            onApply={(v) => { if (parseArray(v).length > 0) setArrStr(v); }}
            onRandom={() => {
              const n = 6 + Math.floor(Math.random() * 4);
              const rnd = Array.from({ length: n }, () => Math.floor(Math.random() * 10) + 1);
              setArrStr(rnd.join(", "));
            }}
          />
          <InputEditor
            label={mode === "pair" ? "Target sum" : "Window size k"}
            value={paramStr}
            placeholder={helper}
            helper={helper}
            onApply={(v) => setParamStr(v)}
          />
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {(Object.keys(modeLabels) as Mode[]).map((id) => (
              <PillButton
                key={id}
                onClick={() => {
                  setMode(id);
                  setParamStr(id === "pair" ? "9" : "3");
                }}
                active={mode === id}
                color={A}
              >
                <span style={{ fontSize: "0.78rem" }}>{modeLabels[id]}</span>
              </PillButton>
            ))}
          </div>
        </div>
      }
      pseudocode={<PseudocodePanel lines={pseudo} activeLine={frame.line} />}
      variables={<VariablesPanel vars={frame.vars} flashKeys={["window", "best", "sum", "left", "right", "found"]} />}
    >
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
        <ArrayBars
          values={frame.values}
          states={frame.states}
          pointers={frame.pointers}
          windowRange={frame.windowRange}
          height={150}
          showIndex
        />
        <div style={{ display: "flex", gap: 18, flexWrap: "wrap", justifyContent: "center" }}>
          {mode === "window" && frame.vars.window !== undefined && (
            <Metric label="Current window" value={frame.vars.window} tint="#8B5CF6" />
          )}
          {mode === "window" && frame.vars.best !== undefined && (
            <Metric label="Best seen" value={frame.vars.best} tint={C.success} />
          )}
          {mode === "pair" && frame.vars.sum !== undefined && (
            <Metric label="Current sum" value={frame.vars.sum} tint="#3B82F6" />
          )}
          {mode === "pair" && frame.vars.target !== undefined && (
            <Metric label="Target" value={frame.vars.target} tint="#F59E0B" />
          )}
        </div>
        <Callout accent={A}>{frame.message}</Callout>
      </div>
    </AlgoCanvas>
  );
}

function Metric({ label, value, tint }: { label: string; value: string | number | undefined; tint: string }) {
  return (
    <div
      style={{
        padding: "10px 16px",
        borderRadius: 12,
        background: `${tint}14`,
        border: `2px solid ${tint}`,
        textAlign: "center",
        minWidth: 110,
      }}
    >
      <div
        style={{
          fontSize: "0.68rem",
          fontWeight: 700,
          color: tint,
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          marginBottom: 3,
          fontFamily: C.heading,
        }}
      >
        {label}
      </div>
      <div style={{ fontFamily: C.mono, fontSize: "1.15rem", fontWeight: 800, color: C.text }}>
        {value ?? "—"}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Learn                                                              */
/* ------------------------------------------------------------------ */

function LearnTab() {
  return (
    <div style={{ fontFamily: C.heading, display: "flex", flexDirection: "column", gap: 14 }}>
      <div>
        <SectionEyebrow color={A}>Two patterns, one idea</SectionEyebrow>
        <SectionTitle>Avoid the nested loop. Maintain an invariant.</SectionTitle>
        <Lede>
          The brute force for many array problems is a double loop — O(n²). Both two-pointer and
          sliding-window turn those into a single linear sweep by keeping useful information as
          you move. The trick is the <em>invariant</em>: a guarantee that stays true each step
          and prunes the search space.
        </Lede>
      </div>

      <Card>
        <SubHeading>Two-Pointer</SubHeading>
        <p style={{ fontSize: "0.9rem", color: C.textSecondary, lineHeight: 1.6, margin: 0 }}>
          Two indices start at different positions (usually the ends of a <em>sorted</em> array)
          and move toward each other. Invariant for pair-sum: every pair involving a dropped
          element has already been eliminated. Works for 3Sum, container-with-most-water, merging
          sorted arrays.
        </p>
      </Card>

      <Card>
        <SubHeading>Sliding Window</SubHeading>
        <p style={{ fontSize: "0.9rem", color: C.textSecondary, lineHeight: 1.6, margin: 0 }}>
          A contiguous sub-range [left..right] moves across the array, adding the entering
          element and removing the leaving one — each update is O(1). Fixed-size windows are
          easy; variable-size ones expand when a condition holds and shrink when it breaks.
        </p>
      </Card>

      <Card padded={false} style={{ overflow: "hidden" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.86rem", fontFamily: C.heading }}>
          <thead>
            <tr style={{ background: C.bgSoft }}>
              {["Problem", "Pattern", "Time"].map((h) => (
                <th
                  key={h}
                  style={{
                    textAlign: "left",
                    padding: "11px 16px",
                    color: C.textMuted,
                    borderBottom: `1px solid ${C.border}`,
                    fontSize: "0.78rem",
                    fontWeight: 700,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                  }}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[
              ["Pair with sum = target (sorted)", "Two pointers", "O(n)"],
              ["Reverse a string in place", "Two pointers", "O(n)"],
              ["Max sum of k consecutive values", "Fixed sliding window", "O(n)"],
              ["Longest substring with unique chars", "Variable window + set", "O(n)"],
              ["Smallest subarray sum ≥ S", "Variable window", "O(n)"],
            ].map((r, i) => (
              <tr key={i} style={{ borderTop: i === 0 ? "none" : `1px solid ${C.borderLight}` }}>
                <td style={{ padding: "9px 16px", color: C.text }}>{r[0]}</td>
                <td style={{ padding: "9px 16px", color: C.textSecondary }}>{r[1]}</td>
                <td style={{ padding: "9px 16px", fontFamily: C.mono, color: A, fontWeight: 700 }}>{r[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Try                                                                */
/* ------------------------------------------------------------------ */

function TryTab() {
  const problems = [
    {
      q: "Sorted array [1,3,5,7,9], target = 10 — which pair of values sums to 10?",
      options: ["1 + 8", "3 + 7", "2 + 8", "4 + 5"],
      ans: 1,
      exp: "3 and 7 are both in the array; their sum is 10. Two-pointer finds them immediately.",
    },
    {
      q: "Sliding a window of size k = 3 over [1,2,3,4,5] produces how many windows?",
      options: ["2", "3", "4", "5"],
      ans: 1,
      exp: "Windows start at indices 0, 1, 2 → 3 windows. n − k + 1 = 5 − 3 + 1 = 3.",
    },
    {
      q: "When you slide a window of size k by one step, how many arithmetic operations update the sum?",
      options: ["0", "O(1): one add, one subtract", "O(k)", "O(n)"],
      ans: 1,
      exp: "Remove the leaving element, add the entering one — two operations, regardless of k.",
    },
    {
      q: "Two-pointer pair-sum requires the array to be…",
      options: ["Non-empty", "Sorted", "All positive", "Unique"],
      ans: 1,
      exp: "Without sorted order, 'sum too small ⇒ move left right' is not justified.",
    },
  ];
  const [picked, setPicked] = useState<(number | null)[]>(problems.map(() => null));
  return (
    <div style={{ fontFamily: C.heading, display: "flex", flexDirection: "column", gap: 12 }}>
      {problems.map((p, i) => {
        const sel = picked[i];
        return (
          <Card key={i}>
            <div style={{ fontSize: "0.92rem", color: C.text, marginBottom: 12, lineHeight: 1.5 }}>
              <strong style={{ color: A }}>#{i + 1}.</strong> {p.q}
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {p.options.map((o, idx) => {
                const correct = sel !== null && idx === p.ans;
                const wrong = sel !== null && idx === sel && idx !== p.ans;
                return (
                  <button
                    key={idx}
                    onClick={() => {
                      const v = [...picked];
                      v[i] = idx;
                      setPicked(v);
                    }}
                    style={{
                      padding: "7px 16px",
                      borderRadius: 8,
                      fontSize: "0.85rem",
                      fontWeight: 700,
                      border: correct
                        ? `1.5px solid ${C.success}`
                        : wrong
                          ? `1.5px solid ${C.danger}`
                          : `1px solid ${C.border}`,
                      background: correct ? `${C.success}14` : wrong ? `${C.danger}14` : C.bg,
                      color: correct ? C.successDark : wrong ? C.dangerDark : C.text,
                      cursor: "pointer",
                      fontFamily: C.heading,
                    }}
                  >
                    {o}
                  </button>
                );
              })}
            </div>
            {sel !== null && (
              <div style={{ marginTop: 12 }}>
                <Callout accent={A}>{p.exp}</Callout>
              </div>
            )}
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
        <SubHeading>Why the sum update is O(1)</SubHeading>
        <p style={{ fontSize: "0.9rem", color: C.textSecondary, lineHeight: 1.6, margin: 0 }}>
          A naïve solution recomputes the sum of every k-window from scratch: O(n · k). The
          sliding-window insight is that adjacent windows share k − 1 elements, so maintaining a
          running total costs one add + one subtract per step.
        </p>
      </Card>
      <Card>
        <SubHeading>Amortised analysis</SubHeading>
        <p style={{ fontSize: "0.9rem", color: C.textSecondary, lineHeight: 1.6, margin: 0 }}>
          In a variable-size sliding window, each index enters and leaves at most once. Total
          pointer moves ≤ 2n → O(n) even though an individual step can shrink the window by many
          elements.
        </p>
      </Card>
      <Card>
        <SubHeading>Interview cue words</SubHeading>
        <ul style={{ fontSize: "0.9rem", color: C.textSecondary, lineHeight: 1.7, paddingLeft: 22, margin: 0 }}>
          <li>&ldquo;Sorted array, find two numbers…&rdquo; → two pointers.</li>
          <li>&ldquo;Subarray of length k&rdquo; or &ldquo;consecutive…&rdquo; → fixed window.</li>
          <li>&ldquo;Longest / smallest subarray satisfying a condition&rdquo; → variable window.</li>
          <li>&ldquo;Contiguous&rdquo; is the signal word.</li>
        </ul>
      </Card>
    </div>
  );
}

/* ------------------------------------------------------------------ */

export default function DSA_L1_TwoPointerWindowActivity() {
  const tabs: EngTabDef[] = [
    { id: "learn", label: "Learn", icon: <BookOpen className="w-4 h-4" />, content: <LearnTab /> },
    { id: "visualize", label: "Visualize", icon: <Play className="w-4 h-4" />, content: <VisualizeTab /> },
    { id: "try", label: "Try It", icon: <Target className="w-4 h-4" />, content: <TryTab /> },
    { id: "insight", label: "Insight", icon: <Lightbulb className="w-4 h-4" />, content: <InsightTab /> },
  ];
  const quiz: EngQuizQuestion[] = [
    {
      question: "Two-pointer pair-sum on a sorted array runs in:",
      options: ["O(log n)", "O(n)", "O(n log n)", "O(n²)"],
      correctIndex: 1,
      explanation: "Each step moves one pointer, and pointers cross after at most n moves. O(n) plus the O(n log n) sort cost if unsorted.",
    },
    {
      question: "Given [1, 3, 6, 8, 10] and target = 11, the two-pointer algorithm returns which pair of values?",
      options: ["(1, 10)", "(3, 8)", "(6, 8)", "No pair"],
      correctIndex: 0,
      explanation: "left = 0, right = 4 → 1 + 10 = 11 → match. Both (1, 10) and (3, 8) sum to 11; the algorithm finds (1, 10) first because it starts at the ends.",
    },
    {
      question: "When you extend a sliding window by one element to the right, you must always:",
      options: [
        "Recompute the window from scratch",
        "Add the entering value and (for fixed size) subtract the leaving value",
        "Re-sort the array",
        "Shrink the window by one from the left",
      ],
      correctIndex: 1,
      explanation: "The whole point of the pattern is the O(1) update: add incoming, subtract outgoing.",
    },
    {
      question: "Which of the following is the biggest reason sliding window beats the O(n · k) brute force?",
      options: [
        "It uses less memory",
        "Consecutive windows share k − 1 elements, so we reuse prior work",
        "It avoids recursion",
        "It works only on sorted arrays",
      ],
      correctIndex: 1,
      explanation: "Sharing elements between adjacent windows is the whole insight — you update in O(1) instead of recomputing.",
    },
  ];
  return (
    <EngineeringLessonShell
      title="Two Pointer & Sliding Window"
      level={1}
      lessonNumber={6}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="Pattern shows up in 30–40% of easy/medium array problems"
      nextLessonHint="Level 2 — Linked Lists"
    />
  );
}

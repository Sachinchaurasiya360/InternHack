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

const PRACTICE_TOPIC_SLUG: string | null = "two-pointer";

/* ------------------------------------------------------------------ */
/*  CellState + local ArrayBars                                        */
/* ------------------------------------------------------------------ */

type CellState =
  | "default"
  | "active"
  | "compare"
  | "swap"
  | "done"
  | "visited"
  | "match"
  | "mismatch"
  | "window"
  | "mid";

const BAR_COLORS: Record<CellState, { fill: string; text: string }> = {
  default:  { fill: THEME.border,   text: THEME.textMuted },
  active:   { fill: "#3b82f6",      text: "#ffffff" },
  compare:  { fill: "#eab308",      text: "#ffffff" },
  swap:     { fill: "#ec4899",      text: "#ffffff" },
  done:     { fill: "#10b981",      text: "#ffffff" },
  visited:  { fill: "#94a3b8",      text: "#ffffff" },
  match:    { fill: "#22c55e",      text: "#ffffff" },
  mismatch: { fill: "#ef4444",      text: "#ffffff" },
  window:   { fill: "#8b5cf6",      text: "#ffffff" },
  mid:      { fill: "#f97316",      text: "#ffffff" },
};

function ArrayBars({
  values,
  states,
  pointers,
  windowRange,
  height = 150,
  showIndex,
}: {
  values: number[];
  states?: (CellState | undefined)[];
  pointers?: Record<string, number>;
  windowRange?: [number, number];
  height?: number;
  showIndex?: boolean;
}) {
  const max = Math.max(...values, 1);
  const barW = Math.min(48, Math.floor(340 / Math.max(values.length, 1)));

  const ptMap: Record<number, string[]> = {};
  if (pointers) {
    Object.entries(pointers).forEach(([k, v]) => {
      if (!ptMap[v]) ptMap[v] = [];
      ptMap[v].push(k);
    });
  }

  return (
    <div className="overflow-x-auto w-full">
      <div className="inline-flex flex-col items-start gap-1">
        {/* pointer labels */}
        <div className="flex items-end gap-0.5">
          {values.map((_, i) => (
            <div
              key={i}
              className="flex flex-col items-center"
              style={{ width: barW }}
            >
              {ptMap[i] ? (
                <div className="text-[9px] font-mono font-bold text-lime-700 dark:text-lime-400 truncate leading-none">
                  {ptMap[i].join(",")}
                </div>
              ) : (
                <div className="h-3" />
              )}
            </div>
          ))}
        </div>
        {/* bars */}
        <div
          className="relative flex items-end gap-0.5 border-b border-stone-300 dark:border-white/15"
          style={{ height }}
        >
          {/* window highlight */}
          {windowRange && (
            <div
              className="absolute bottom-0 transition-all duration-300"
              style={{
                left: windowRange[0] * (barW + 2),
                width: (windowRange[1] - windowRange[0] + 1) * (barW + 2) - 2,
                height: "100%",
                background: "#8b5cf620",
                border: "1.5px solid #8b5cf6",
                borderRadius: 4,
                pointerEvents: "none",
              }}
            />
          )}
          {values.map((v, i) => {
            const state: CellState = states?.[i] ?? "default";
            const colors = BAR_COLORS[state] ?? BAR_COLORS.default;
            const barH = Math.max(4, Math.round((v / max) * (height - 20)));
            return (
              <div
                key={i}
                className="relative flex flex-col items-center justify-end transition-all duration-200"
                style={{ width: barW, height: "100%" }}
              >
                <div
                  className="w-full rounded-t transition-all duration-200 flex items-start justify-center pt-0.5"
                  style={{
                    height: barH,
                    background: colors.fill,
                    minHeight: 4,
                  }}
                >
                  {barW >= 28 && (
                    <span className="text-[9px] font-mono font-bold" style={{ color: colors.text }}>
                      {v}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        {/* index row */}
        {showIndex && (
          <div className="flex gap-0.5">
            {values.map((_, i) => (
              <div
                key={i}
                className="text-[9px] font-mono text-stone-400 text-center"
                style={{ width: barW }}
              >
                {i}
              </div>
            ))}
          </div>
        )}
        {/* value row when bars too narrow */}
        {barW < 28 && (
          <div className="flex gap-0.5">
            {values.map((v, i) => (
              <div
                key={i}
                className="text-[9px] font-mono font-bold text-stone-600 dark:text-stone-400 text-center"
                style={{ width: barW }}
              >
                {v}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Local Metric card                                                  */
/* ------------------------------------------------------------------ */

function Metric({ label, value, tint }: { label: string; value: string | number | undefined; tint: string }) {
  return (
    <div
      className="px-4 py-2.5 rounded-md text-center"
      style={{
        background: `${tint}14`,
        border: `2px solid ${tint}`,
        minWidth: 110,
      }}
    >
      <div
        className="text-[10px] font-mono font-bold uppercase tracking-widest mb-1"
        style={{ color: tint }}
      >
        {label}
      </div>
      <div className="font-mono text-lg font-extrabold text-stone-900 dark:text-stone-50">
        {value ?? ","}
      </div>
    </div>
  );
}

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
/*  Two Pointer, Pair sum on a sorted array                          */
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
/*  Sliding Window, max sum of k consecutive                         */
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
/*  Visualize tab                                                      */
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
  const frame = player.current;

  const modeLabels: Record<Mode, string> = {
    pair: "Two Pointer, Pair Sum (sorted)",
    window: "Sliding Window, Max Sum of k",
  };

  return (
    <AlgoCanvas
      title={modeLabels[mode]}
      player={player}
      input={
        <div className="flex flex-col gap-3">
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
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
              / mode
            </label>
            <div className="flex flex-wrap gap-1.5">
              {(Object.keys(modeLabels) as Mode[]).map((id) => (
                <PillButton
                  key={id}
                  onClick={() => {
                    setMode(id);
                    setParamStr(id === "pair" ? "9" : "3");
                  }}
                  active={mode === id}
                >
                  <span className="text-xs">{modeLabels[id]}</span>
                </PillButton>
              ))}
            </div>
          </div>
        </div>
      }
      pseudocode={<PseudocodePanel lines={pseudo} activeLine={frame?.line} />}
      variables={<VariablesPanel vars={frame?.vars ?? {}} flashKeys={["window", "best", "sum", "left", "right", "found"]} />}
    >
      <div className="flex flex-col items-center gap-4">
        <ArrayBars
          values={frame?.values ?? []}
          states={frame?.states}
          pointers={frame?.pointers}
          windowRange={frame?.windowRange}
          height={150}
          showIndex
        />
        <div className="flex gap-4 flex-wrap justify-center">
          {mode === "window" && frame?.vars.window !== undefined && (
            <Metric label="Current window" value={frame.vars.window} tint="#8B5CF6" />
          )}
          {mode === "window" && frame?.vars.best !== undefined && (
            <Metric label="Best seen" value={frame.vars.best} tint={THEME.success} />
          )}
          {mode === "pair" && frame?.vars.sum !== undefined && (
            <Metric label="Current sum" value={frame.vars.sum} tint="#3B82F6" />
          )}
          {mode === "pair" && frame?.vars.target !== undefined && (
            <Metric label="Target" value={frame.vars.target} tint="#F59E0B" />
          )}
        </div>
        <Callout className="w-full">{frame?.message ?? "Press play to start."}</Callout>
      </div>
    </AlgoCanvas>
  );
}

/* ------------------------------------------------------------------ */
/*  Learn tab                                                          */
/* ------------------------------------------------------------------ */

function LearnTab() {
  return (
    <div className="flex flex-col gap-5">
      <div>
        <SectionEyebrow>two patterns, one idea</SectionEyebrow>
        <SectionTitle>Avoid the nested loop. Maintain an invariant.</SectionTitle>
        <Lede>
          The brute force for many array problems is a double loop, O(n²). Both two-pointer and
          sliding-window turn those into a single linear sweep by keeping useful information as
          you move. The trick is the <em>invariant</em>: a guarantee that stays true each step
          and prunes the search space.
        </Lede>
      </div>

      <Card>
        <SubHeading>Two-Pointer</SubHeading>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          Two indices start at different positions (usually the ends of a <em>sorted</em> array)
          and move toward each other. Invariant for pair-sum: every pair involving a dropped
          element has already been eliminated. Works for 3Sum, container-with-most-water, merging
          sorted arrays.
        </p>
      </Card>

      <Card>
        <SubHeading>Sliding Window</SubHeading>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          A contiguous sub-range [left..right] moves across the array, adding the entering element
          and removing the leaving one, each update is O(1). Fixed-size windows are easy;
          variable-size ones expand when a condition holds and shrink when it breaks.
        </p>
      </Card>

      <Card padded={false} className="overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-stone-50 dark:bg-stone-950/50">
            <tr>
              {["Problem", "Pattern", "Time"].map((h) => (
                <th
                  key={h}
                  className="text-left px-4 py-3 text-[10px] font-mono uppercase tracking-widest text-stone-500 border-b border-stone-200 dark:border-white/10"
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
              <tr key={i} className={i === 0 ? "" : "border-t border-stone-100 dark:border-white/5"}>
                <td className="px-4 py-2 text-stone-900 dark:text-stone-100">{r[0]}</td>
                <td className="px-4 py-2 text-stone-600 dark:text-stone-400">{r[1]}</td>
                <td className="px-4 py-2 font-mono font-bold text-lime-700 dark:text-lime-400">{r[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Try tab                                                            */
/* ------------------------------------------------------------------ */

function TryTab() {
  const problems = [
    {
      q: "Sorted array [1,3,5,7,9], target = 10, which pair of values sums to 10?",
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
      exp: "Remove the leaving element, add the entering one, two operations, regardless of k.",
    },
    {
      q: "Two-pointer pair-sum requires the array to be…",
      options: ["Non-empty", "Sorted", "All positive", "Unique"],
      ans: 1,
      exp: "Without sorted order, 'sum too small => move left right' is not justified.",
    },
  ];
  const [picked, setPicked] = useState<(number | null)[]>(problems.map(() => null));

  return (
    <div className="flex flex-col gap-3">
      {problems.map((p, i) => {
        const sel = picked[i];
        return (
          <Card key={i}>
            <p className="text-sm text-stone-900 dark:text-stone-100 mb-3 leading-relaxed">
              <strong className="text-lime-700 dark:text-lime-400">#{i + 1}.</strong> {p.q}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {p.options.map((o, idx) => {
                const correct = sel !== null && idx === p.ans;
                const wrong = sel !== null && idx === sel && idx !== p.ans;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => {
                      const v = [...picked];
                      v[i] = idx;
                      setPicked(v);
                    }}
                    className={`px-3 py-1.5 rounded-md text-xs font-mono font-bold transition-colors cursor-pointer border ${
                      correct
                        ? "border-lime-500 bg-lime-50 dark:bg-lime-400/10 text-lime-800 dark:text-lime-200"
                        : wrong
                          ? "border-rose-500 bg-rose-50 dark:bg-rose-500/10 text-rose-800 dark:text-rose-200"
                          : "border-stone-200 dark:border-white/10 bg-white dark:bg-stone-900 text-stone-700 dark:text-stone-300 hover:border-stone-400 dark:hover:border-white/30"
                    }`}
                  >
                    {o}
                  </button>
                );
              })}
            </div>
            {sel !== null && (
              <div className="mt-3">
                <Callout>{p.exp}</Callout>
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
        <SubHeading>Why the sum update is O(1)</SubHeading>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          A naive solution recomputes the sum of every k-window from scratch: O(n · k). The
          sliding-window insight is that adjacent windows share k − 1 elements, so maintaining a
          running total costs one add + one subtract per step.
        </p>
      </Card>
      <Card>
        <SubHeading>Amortised analysis</SubHeading>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          In a variable-size sliding window, each index enters and leaves at most once. Total
          pointer moves are at most 2n → O(n) even though an individual step can shrink the window
          by many elements.
        </p>
      </Card>
      <Card>
        <SubHeading>Interview cue words</SubHeading>
        <ul className="list-disc pl-5 space-y-1.5 text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          <li>"Sorted array, find two numbers…" → two pointers.</li>
          <li>"Subarray of length k" or "consecutive…" → fixed window.</li>
          <li>"Longest / smallest subarray satisfying a condition" → variable window.</li>
          <li>"Contiguous" is the signal word.</li>
        </ul>
      </Card>
    </div>
  );
}

/* ------------------------------------------------------------------ */

interface Props {
  onQuizComplete?: (score: number) => void;
}

export default function L1_TwoPointerWindow({ onQuizComplete }: Props) {
  const tabs: LessonTabDef[] = [
    { id: "learn", label: "Learn", icon: <BookOpen className="w-4 h-4" />, content: <LearnTab /> },
    { id: "visualize", label: "Visualize", icon: <Play className="w-4 h-4" />, content: <VisualizeTab /> },
    { id: "try", label: "Try It", icon: <Target className="w-4 h-4" />, content: <TryTab /> },
    { id: "insight", label: "Insight", icon: <Lightbulb className="w-4 h-4" />, content: <InsightTab /> },
    ...(PRACTICE_TOPIC_SLUG
      ? [
          {
            id: "practice",
            label: "Practice",
            icon: <Code2 className="w-4 h-4" />,
            content: <PracticeTab topicSlug={PRACTICE_TOPIC_SLUG} />,
          },
        ]
      : []),
  ];

  const quiz: LessonQuizQuestion[] = [
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
      explanation: "Sharing elements between adjacent windows is the whole insight, you update in O(1) instead of recomputing.",
    },
  ];

  return (
    <LessonShell
      title="Two-Pointer & Sliding Window"
      level={1}
      lessonNumber={6}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="Pattern shows up in 30–40% of easy/medium array problems"
      nextLessonHint="Stacks"
      onQuizComplete={onQuizComplete}
    />
  );
}

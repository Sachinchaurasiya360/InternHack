"use client";

import { useMemo, useState } from "react";
import { BookOpen, Play, Target, Lightbulb } from "lucide-react";
import EngineeringLessonShell, { EngTabDef, EngQuizQuestion } from "@/components/engineering/EngineeringLessonShell";
import {
  AlgoCanvas, PseudocodePanel, VariablesPanel, InputEditor, useStepPlayer, ArrayBars,
} from "@/components/engineering/algo";
import type { CellState } from "@/components/engineering/algo";
import {
  C, DSA_ACCENT as A,
  SectionEyebrow, SectionTitle, SubHeading, Lede,
  Card, PillButton, Callout,
} from "@/components/engineering/lessonPrimitives";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

type Variant = "basic" | "lower" | "upper" | "rotated";

interface Frame {
  line: number;
  vars: Record<string, string | number | boolean | undefined>;
  values: number[];
  states: (CellState | undefined)[];
  pointers: Record<string, number>;
  message: string;
  highlightKey?: string;
}

const PSEUDO_BASIC = [
  "function binarySearch(A, target):",
  "  low ← 0; high ← n - 1",
  "  while low ≤ high:",
  "    mid ← (low + high) / 2",
  "    if A[mid] = target: return mid",
  "    else if A[mid] < target: low ← mid + 1",
  "    else: high ← mid - 1",
  "  return -1",
];

const PSEUDO_LOWER = [
  "function lowerBound(A, target):",
  "  low ← 0; high ← n",
  "  while low < high:",
  "    mid ← (low + high) / 2",
  "    if A[mid] < target: low ← mid + 1",
  "    else: high ← mid",
  "  return low  // first index with A[i] ≥ target",
];

const PSEUDO_UPPER = [
  "function upperBound(A, target):",
  "  low ← 0; high ← n",
  "  while low < high:",
  "    mid ← (low + high) / 2",
  "    if A[mid] ≤ target: low ← mid + 1",
  "    else: high ← mid",
  "  return low  // first index with A[i] > target",
];

const PSEUDO_ROTATED = [
  "function searchRotated(A, target):",
  "  low ← 0; high ← n - 1",
  "  while low ≤ high:",
  "    mid ← (low + high) / 2",
  "    if A[mid] = target: return mid",
  "    if A[low] ≤ A[mid]:          // left half sorted",
  "      if A[low] ≤ target < A[mid]: high ← mid - 1",
  "      else: low ← mid + 1",
  "    else:                         // right half sorted",
  "      if A[mid] < target ≤ A[high]: low ← mid + 1",
  "      else: high ← mid - 1",
  "  return -1",
];

/* ------------------------------------------------------------------ */
/*  Frame builders                                                     */
/* ------------------------------------------------------------------ */

function stateShell(n: number, low: number, high: number, active: "incl" | "excl" = "incl"): (CellState | undefined)[] {
  return Array.from({ length: n }, (_, k) => {
    const inside = active === "incl" ? (k >= low && k <= high) : (k >= low && k < high);
    return inside ? "default" : "visited";
  });
}

function buildBasic(arr: number[], target: number): Frame[] {
  const n = arr.length;
  const f: Frame[] = [];
  f.push({
    line: 0, vars: { n, target }, values: [...arr],
    states: arr.map(() => "default" as CellState), pointers: {},
    message: `Binary search for ${target} in sorted array.`,
  });

  let low = 0, high = n - 1;
  f.push({
    line: 1, vars: { low, high, target }, values: [...arr],
    states: stateShell(n, low, high), pointers: { low, high },
    message: `Initial window [${low}..${high}]`,
  });

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const st = stateShell(n, low, high);
    st[mid] = "mid";
    f.push({
      line: 3, vars: { low, high, mid, "A[mid]": arr[mid], target }, values: [...arr],
      states: st, pointers: { low, mid, high },
      message: `mid = ⌊(${low} + ${high}) / 2⌋ = ${mid}. A[${mid}] = ${arr[mid]}`,
      highlightKey: "mid",
    });
    if (arr[mid] === target) {
      const st2 = stateShell(n, low, high);
      st2[mid] = "done";
      f.push({
        line: 4, vars: { low, high, mid, target, found: mid }, values: [...arr],
        states: st2, pointers: { mid },
        message: `A[${mid}] = ${target} - found at index ${mid}!`,
        highlightKey: "found",
      });
      return f;
    } else if (arr[mid] < target) {
      f.push({
        line: 5, vars: { low, high, mid, "A[mid]": arr[mid], target }, values: [...arr],
        states: stateShell(n, low, high), pointers: { low, mid, high },
        message: `A[${mid}] = ${arr[mid]} < ${target} - target is in the right half. low ← ${mid + 1}`,
      });
      low = mid + 1;
    } else {
      f.push({
        line: 6, vars: { low, high, mid, "A[mid]": arr[mid], target }, values: [...arr],
        states: stateShell(n, low, high), pointers: { low, mid, high },
        message: `A[${mid}] = ${arr[mid]} > ${target} - target is in the left half. high ← ${mid - 1}`,
      });
      high = mid - 1;
    }
  }

  f.push({
    line: 7, vars: { low, high, target, found: -1 }, values: [...arr],
    states: arr.map(() => "visited" as CellState), pointers: {},
    message: `low (${low}) > high (${high}) - ${target} not present. Return −1.`,
  });
  return f;
}

function buildLowerUpper(arr: number[], target: number, upper = false): Frame[] {
  const n = arr.length;
  const f: Frame[] = [];
  const title = upper ? "upperBound" : "lowerBound";
  f.push({
    line: 0, vars: { n, target }, values: [...arr],
    states: arr.map(() => "default" as CellState), pointers: {},
    message: `${title}: first index i with A[i] ${upper ? ">" : "≥"} ${target}`,
  });
  let low = 0, high = n;
  f.push({
    line: 1, vars: { low, high, target }, values: [...arr],
    states: stateShell(n, low, high, "excl"), pointers: { low, high: Math.min(high, n - 1) },
    message: `Half-open window [${low}, ${high}). Result lives somewhere here.`,
  });

  while (low < high) {
    const mid = Math.floor((low + high) / 2);
    const st = stateShell(n, low, high, "excl");
    st[mid] = "mid";
    f.push({
      line: 3, vars: { low, high, mid, "A[mid]": arr[mid], target }, values: [...arr],
      states: st, pointers: { low, mid, high: Math.min(high, n - 1) },
      message: `mid = ${mid}, A[${mid}] = ${arr[mid]}`,
      highlightKey: "mid",
    });

    const condition = upper ? (arr[mid] <= target) : (arr[mid] < target);
    if (condition) {
      f.push({
        line: 4, vars: { low, high, mid, target }, values: [...arr],
        states: stateShell(n, mid + 1, high, "excl"), pointers: { low: mid + 1, high: Math.min(high, n - 1) },
        message: `A[${mid}] = ${arr[mid]} ${upper ? "≤" : "<"} ${target} - answer must be strictly right. low ← ${mid + 1}`,
      });
      low = mid + 1;
    } else {
      f.push({
        line: 5, vars: { low, high, mid, target }, values: [...arr],
        states: stateShell(n, low, mid, "excl"), pointers: { low, high: Math.max(mid - 1, 0) },
        message: `A[${mid}] = ${arr[mid]} ${upper ? ">" : "≥"} ${target} - mid could be the answer. high ← ${mid}`,
      });
      high = mid;
    }
  }

  const st = arr.map((_, k) => (k === low ? "done" : "visited") as CellState);
  f.push({
    line: 6, vars: { result: low }, values: [...arr],
    states: st, pointers: { result: Math.min(low, n - 1) },
    message: `Converged: low = high = ${low}. ${title} returns ${low}${low < n ? ` (A[${low}] = ${arr[low]})` : " (past end)"}.`,
    highlightKey: "result",
  });
  return f;
}

function buildRotated(arr: number[], target: number): Frame[] {
  const n = arr.length;
  const f: Frame[] = [];
  f.push({
    line: 0, vars: { n, target }, values: [...arr],
    states: arr.map(() => "default" as CellState), pointers: {},
    message: `Search for ${target} in rotated sorted array.`,
  });
  let low = 0, high = n - 1;
  f.push({
    line: 1, vars: { low, high, target }, values: [...arr],
    states: stateShell(n, low, high), pointers: { low, high },
    message: `Initial [${low}..${high}]`,
  });

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const st = stateShell(n, low, high);
    st[mid] = "mid";
    f.push({
      line: 3, vars: { low, high, mid, "A[mid]": arr[mid], target }, values: [...arr],
      states: st, pointers: { low, mid, high },
      message: `mid = ${mid}, A[${mid}] = ${arr[mid]}`,
      highlightKey: "mid",
    });
    if (arr[mid] === target) {
      const st2 = stateShell(n, low, high);
      st2[mid] = "done";
      f.push({
        line: 4, vars: { mid, found: mid }, values: [...arr],
        states: st2, pointers: { mid },
        message: `Found ${target} at ${mid}!`,
        highlightKey: "found",
      });
      return f;
    }
    if (arr[low] <= arr[mid]) {
      f.push({
        line: 5, vars: { low, mid, "A[low]": arr[low], "A[mid]": arr[mid] }, values: [...arr],
        states: st, pointers: { low, mid, high },
        message: `Left half A[${low}..${mid}] is sorted (A[low] ≤ A[mid]).`,
      });
      if (arr[low] <= target && target < arr[mid]) {
        f.push({
          line: 6, vars: { low, mid, target }, values: [...arr],
          states: stateShell(n, low, mid - 1), pointers: { low, high: mid - 1 },
          message: `Target is in the sorted left: high ← ${mid - 1}`,
        });
        high = mid - 1;
      } else {
        f.push({
          line: 7, vars: { low, mid, target }, values: [...arr],
          states: stateShell(n, mid + 1, high), pointers: { low: mid + 1, high },
          message: `Target not in left half. Search right: low ← ${mid + 1}`,
        });
        low = mid + 1;
      }
    } else {
      f.push({
        line: 8, vars: { mid, high, "A[mid]": arr[mid], "A[high]": arr[high] }, values: [...arr],
        states: st, pointers: { low, mid, high },
        message: `Right half A[${mid}..${high}] is sorted.`,
      });
      if (arr[mid] < target && target <= arr[high]) {
        f.push({
          line: 9, vars: { mid, high, target }, values: [...arr],
          states: stateShell(n, mid + 1, high), pointers: { low: mid + 1, high },
          message: `Target in sorted right: low ← ${mid + 1}`,
        });
        low = mid + 1;
      } else {
        f.push({
          line: 10, vars: { low, mid, target }, values: [...arr],
          states: stateShell(n, low, mid - 1), pointers: { low, high: mid - 1 },
          message: `Target not in right half. Search left: high ← ${mid - 1}`,
        });
        high = mid - 1;
      }
    }
  }

  f.push({
    line: 12, vars: { target, found: -1 }, values: [...arr],
    states: arr.map(() => "visited" as CellState), pointers: {},
    message: `Not found. Return −1.`,
  });
  return f;
}

function parseInputs(s: string): { arr: number[]; target: number } | null {
  // format: "arr | target"  OR  "arr ; target"
  const parts = s.split(/[|;]/);
  if (parts.length !== 2) return null;
  const arr = parts[0].split(/[,\s]+/).filter(Boolean).map((x) => Number(x.trim()));
  const target = Number(parts[1].trim());
  if (arr.some((n) => Number.isNaN(n)) || Number.isNaN(target)) return null;
  if (arr.length < 2 || arr.length > 15) return null;
  return { arr, target };
}

/* ------------------------------------------------------------------ */
/*  Visualize                                                          */
/* ------------------------------------------------------------------ */

function VisualizeTab() {
  const [variant, setVariant] = useState<Variant>("basic");
  const [inputStr, setInputStr] = useState("1, 3, 5, 7, 9, 11, 13, 15 | 9");

  const parsed = parseInputs(inputStr) ?? { arr: [1, 3, 5, 7, 9, 11, 13, 15], target: 9 };
  const arr = variant === "rotated" ? parsed.arr : [...parsed.arr].sort((a, b) => a - b);

  const frames = useMemo(() => {
    if (variant === "basic") return buildBasic(arr, parsed.target);
    if (variant === "lower") return buildLowerUpper(arr, parsed.target, false);
    if (variant === "upper") return buildLowerUpper(arr, parsed.target, true);
    return buildRotated(arr, parsed.target);
  }, [variant, arr, parsed.target]);

  const player = useStepPlayer(frames);
  const frame = player.current!;

  const PSEUDO = variant === "basic" ? PSEUDO_BASIC :
    variant === "lower" ? PSEUDO_LOWER :
    variant === "upper" ? PSEUDO_UPPER : PSEUDO_ROTATED;

  const presets = variant === "rotated" ? [
    { label: "Rotated 1", value: "4, 5, 6, 7, 0, 1, 2 | 0" },
    { label: "Rotated 2", value: "6, 7, 1, 2, 3, 4, 5 | 3" },
    { label: "Not rotated", value: "1, 2, 3, 4, 5, 6, 7 | 5" },
    { label: "Not found", value: "4, 5, 6, 7, 0, 1, 2 | 9" },
  ] : [
    { label: "Found middle", value: "1, 3, 5, 7, 9, 11, 13, 15 | 9" },
    { label: "Found edge", value: "1, 3, 5, 7, 9, 11, 13, 15 | 1" },
    { label: "Not found", value: "1, 3, 5, 7, 9, 11, 13, 15 | 8" },
    { label: "Duplicates", value: "1, 2, 2, 2, 3, 4 | 2" },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
        {(["basic", "lower", "upper", "rotated"] as const).map((v) => (
          <PillButton
            key={v}
            onClick={() => setVariant(v)}
            active={variant === v}
            color={A}
          >
            <span style={{ fontSize: "0.85rem", fontWeight: 600 }}>
              {v === "basic" ? "Basic" : v === "lower" ? "Lower Bound" : v === "upper" ? "Upper Bound" : "Rotated"}
            </span>
          </PillButton>
        ))}
      </div>

      <AlgoCanvas
        title={`Binary Search - ${variant}`}
        player={player}
        input={
          <InputEditor
            label="Array | Target"
            value={inputStr}
            placeholder="e.g. 1, 3, 5, 7, 9 | 7"
            helper={variant === "rotated"
              ? "Rotated sorted array. Target can be anywhere."
              : "Array is auto-sorted. Format: numbers | target"}
            presets={presets}
            onApply={(v) => { if (parseInputs(v)) setInputStr(v); }}
          />
        }
        pseudocode={<PseudocodePanel lines={PSEUDO} activeLine={frame.line} />}
        variables={<VariablesPanel vars={frame.vars} flashKeys={frame.highlightKey ? [frame.highlightKey] : []} />}
      >
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
          <ArrayBars values={frame.values} states={frame.states} pointers={frame.pointers} height={180} />
          <Callout accent={A}>{frame.message}</Callout>
        </div>
      </AlgoCanvas>
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
        <SectionEyebrow color={A}>Halve the search space</SectionEyebrow>
        <SectionTitle>Each step throws away half the candidates</SectionTitle>
        <Lede>
          On a sorted array, look at the middle. If it&apos;s the target - done. If the middle is too small, the target
          lives strictly to the right; if too big, strictly to the left. Each step halves the search region →
          O(log n).
        </Lede>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 12 }}>
        {[
          { t: "Basic search", b: "Returns index of target, or −1 if absent. Works on any sorted array." },
          { t: "Lower bound", b: "First index i where A[i] ≥ target. Useful for 'where do I insert x to keep sorted?'" },
          { t: "Upper bound", b: "First index i where A[i] > target. Combined with lower bound you get count of duplicates." },
          { t: "Rotated sorted", b: "Sorted array rotated at some pivot. Half is still sorted - check which half, then apply basic logic." },
        ].map((s, i) => (
          <Card key={i}>
            <div style={{ fontSize: "0.72rem", fontWeight: 700, color: A, marginBottom: 6, fontFamily: C.mono, letterSpacing: "0.08em" }}>
              0{i + 1}
            </div>
            <div style={{ fontWeight: 700, fontSize: "0.95rem", color: C.text, marginBottom: 4, letterSpacing: "-0.01em" }}>{s.t}</div>
            <div style={{ fontSize: "0.85rem", color: C.textSecondary, lineHeight: 1.55 }}>{s.b}</div>
          </Card>
        ))}
      </div>
      <Callout accent={A}>
        <strong>Overflow trick:</strong> <code style={{ fontFamily: C.mono }}>mid = (low + high) / 2</code> can overflow in languages with fixed-size
        ints. Use <code style={{ fontFamily: C.mono }}>mid = low + (high − low) / 2</code> instead.
      </Callout>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Try                                                                */
/* ------------------------------------------------------------------ */

function TryTab() {
  const problems = [
    { q: "Max comparisons for binary search on n=1000?", answer: "10" },
    { q: "lowerBound([1,2,2,2,3,4], 2) returns?", answer: "1" },
    { q: "upperBound([1,2,2,2,3,4], 2) returns?", answer: "4" },
    { q: "Search 0 in rotated [4,5,6,7,0,1,2] - index?", answer: "4" },
  ];
  const [guesses, setGuesses] = useState<(string | null)[]>(problems.map(() => null));
  const [shown, setShown] = useState<boolean[]>(problems.map(() => false));

  return (
    <div style={{ fontFamily: C.heading, display: "flex", flexDirection: "column", gap: 12 }}>
      <Callout accent={A}>
        <strong>Hint:</strong> ⌈log₂ n⌉ is the worst-case comparisons. Count of x in sorted array = upper(x) − lower(x).
      </Callout>
      {problems.map((p, i) => {
        const g = guesses[i];
        const revealed = shown[i];
        const correct = g !== null && g.trim() === p.answer;
        return (
          <Card key={i}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
              <span style={{ fontWeight: 700, fontSize: "0.85rem", color: C.textMuted, fontFamily: C.mono }}>#{i + 1}</span>
              <span style={{ fontSize: "0.9rem", flex: "1 1 260px", color: C.text }}>{p.q}</span>
              <input
                value={g ?? ""}
                onChange={(e) => { const v = [...guesses]; v[i] = e.target.value; setGuesses(v); }}
                style={{
                  width: 100,
                  padding: "7px 10px",
                  borderRadius: 8,
                  border: `1px solid ${C.border}`,
                  fontFamily: C.mono,
                  fontSize: "0.85rem",
                  outline: "none",
                  background: C.bg,
                  color: C.text,
                }}
                placeholder="?"
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
              {revealed && (
                <span style={{
                  fontSize: "0.82rem", fontWeight: 700,
                  color: correct ? C.successDark : C.dangerDark,
                  padding: "4px 12px", borderRadius: 8,
                  background: correct ? `${C.success}14` : `${C.danger}14`,
                  fontFamily: C.heading,
                }}>
                  {correct ? `Correct - ${p.answer}` : `Answer: ${p.answer}`}
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
        <SubHeading>Binary search beyond arrays</SubHeading>
        <p style={{ fontSize: "0.88rem", color: C.textSecondary, lineHeight: 1.6, margin: 0 }}>
          Any <em>monotonic predicate</em> over an ordered domain is binary-searchable: &quot;is this workload feasible in
          time t?&quot;, &quot;can we fit items in k boxes?&quot;. This pattern - &quot;binary search on the answer&quot; - shows up in
          optimization problems constantly.
        </p>
      </Card>
      <Card>
        <SubHeading>Loop invariants</SubHeading>
        <p style={{ fontSize: "0.88rem", color: C.textSecondary, lineHeight: 1.6, margin: 0 }}>
          Lower bound maintains: the answer ∈ [low, high]. Window always shrinks; we stop when low = high. Getting
          &quot;&lt;&quot; vs &quot;≤&quot; right - and which pointer moves - is the source of 99% of bugs.
        </p>
      </Card>
      <Card>
        <SubHeading>Interview hook</SubHeading>
        <ul style={{ fontSize: "0.88rem", color: C.textSecondary, lineHeight: 1.7, paddingLeft: 20, margin: 0 }}>
          <li>Comparisons in worst case: ⌈log₂(n+1)⌉.</li>
          <li>Fails on unsorted input - prerequisite is monotonic order.</li>
          <li>Rotated binary search runs in O(log n) when all elements are distinct; O(n) worst case with duplicates.</li>
        </ul>
      </Card>
      <Card>
        <SubHeading>Stdlib map: don&apos;t reimplement what&apos;s in your language</SubHeading>
        <ul style={{ fontSize: "0.86rem", color: C.textSecondary, lineHeight: 1.75, paddingLeft: 20, margin: 0 }}>
          <li>
            <strong>Python <code style={{ fontFamily: C.mono }}>bisect</code></strong>:{" "}
            <code style={{ fontFamily: C.mono }}>bisect.bisect_left(a, x)</code> ≡ lowerBound,{" "}
            <code style={{ fontFamily: C.mono }}>bisect.bisect_right(a, x)</code> (a.k.a. <code style={{ fontFamily: C.mono }}>bisect</code>) ≡ upperBound.
            Add <code style={{ fontFamily: C.mono }}>insort_left/right</code> to insert in O(n) (the search is O(log n) but the array shift is linear).
            <strong>Use <code style={{ fontFamily: C.mono }}>SortedList</code> from <code style={{ fontFamily: C.mono }}>sortedcontainers</code></strong> if you need true O(log n) insert.
          </li>
          <li>
            <strong>C++ <code style={{ fontFamily: C.mono }}>&lt;algorithm&gt;</code></strong>:{" "}
            <code style={{ fontFamily: C.mono }}>std::lower_bound(a.begin(), a.end(), x)</code> and{" "}
            <code style={{ fontFamily: C.mono }}>std::upper_bound(...)</code> return iterators. Both run in O(log n) on random-access ranges and O(n) on linked lists (still log comparisons but linear iterator advances).
          </li>
          <li>
            <strong>Java <code style={{ fontFamily: C.mono }}>Collections.binarySearch</code></strong> /{" "}
            <code style={{ fontFamily: C.mono }}>Arrays.binarySearch</code>: returns the index if found, OR <code style={{ fontFamily: C.mono }}>-(insertion_point) - 1</code> if not.
            That negative-encoding is a famous gotcha — to convert to insertion point: <code style={{ fontFamily: C.mono }}>idx &lt; 0 ? -idx - 1 : idx</code>.
          </li>
          <li>
            <strong>JS</strong>: no built-in. Roll your own — but <code style={{ fontFamily: C.mono }}>arr.indexOf(x)</code> is <em>linear</em>; never use it as a stand-in.
          </li>
        </ul>
      </Card>
      <Card>
        <SubHeading>Safe-mid form (and why it matters in C/Java)</SubHeading>
        <p style={{ fontSize: "0.88rem", color: C.textSecondary, lineHeight: 1.6, margin: 0 }}>
          <code style={{ fontFamily: C.mono }}>(low + high) / 2</code> can overflow when both are near INT_MAX (≈ 2.1·10⁹). The famous Java bug
          report Bug ID 5045582 — present in <code style={{ fontFamily: C.mono }}>Arrays.binarySearch</code> for ~9 years before being fixed —
          was caused by exactly this. Always write <code style={{ fontFamily: C.mono }}>low + (high - low) / 2</code>. JavaScript&apos;s 53-bit
          numbers don&apos;t overflow at typical sizes, but the habit is worth keeping for the moment you write
          C++/Java/Rust.
        </p>
      </Card>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Activity                                                            */
/* ------------------------------------------------------------------ */

export default function DSA_L5_BinarySearchActivity() {
  const tabs: EngTabDef[] = [
    { id: "learn", label: "Learn", icon: <BookOpen className="w-4 h-4" />, content: <LearnTab /> },
    { id: "visualize", label: "Visualize", icon: <Play className="w-4 h-4" />, content: <VisualizeTab /> },
    { id: "try", label: "Try It", icon: <Target className="w-4 h-4" />, content: <TryTab /> },
    { id: "insight", label: "Insight", icon: <Lightbulb className="w-4 h-4" />, content: <InsightTab /> },
  ];

  const quiz: EngQuizQuestion[] = [
    {
      question: "Maximum number of comparisons for binary search on a sorted array of 1,000,000 elements?",
      options: ["10", "20", "100", "1000"],
      correctIndex: 1,
      explanation: "⌈log₂(10⁶)⌉ ≈ 20. Every step halves the search space, so ~20 halvings suffice.",
    },
    {
      question: "For sorted array [1, 2, 2, 2, 3, 4], what does lowerBound(2) return?",
      options: ["0", "1", "3", "4"],
      correctIndex: 1,
      explanation: "Lower bound = smallest index i with A[i] ≥ 2 → index 1 (the first 2).",
    },
    {
      question: "Count of x in a sorted array equals:",
      options: ["upper(x) + lower(x)", "upper(x) − lower(x)", "lower(x) − 1", "n − upper(x)"],
      correctIndex: 1,
      explanation: "Lower bound is first ≥ x; upper bound is first > x. The difference is the number of x's.",
    },
    {
      question: "In the rotated sorted array [4, 5, 6, 7, 0, 1, 2], searching for 0 with standard rotated binary search takes:",
      options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
      correctIndex: 1,
      explanation: "At each step we identify which half is sorted, decide target's side, and shrink by half. O(log n) with distinct elements.",
    },
  ];

  return (
    <EngineeringLessonShell
      title="Binary Search & Variants"
      level={5}
      lessonNumber={6}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="Among the most-asked topics - variants and 'BS on answer' problems dominate interviews"
      nextLessonHint="On to Level 6: algorithm design paradigms"
    />
  );
}

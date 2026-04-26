"use client";

import { useMemo, useState } from "react";
import { BookOpen, Play, Target, Lightbulb } from "lucide-react";
import EngineeringLessonShell, { EngTabDef, EngQuizQuestion } from "@/components/engineering/EngineeringLessonShell";
import {
  AlgoCanvas, PseudocodePanel, VariablesPanel, InputEditor, useStepPlayer, MemoryCells
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
/*  Types + parser                                                     */
/* ------------------------------------------------------------------ */

interface Frame {
  line: number;
  vars: Record<string, string | number | undefined>;
  message: string;
  values: (string | number)[];
  states: (CellState | undefined)[];
  pointers: Record<string, number>;
}

function parseArray(s: string): number[] {
  return s.split(/[,\s]+/).map((x) => x.trim()).filter(Boolean).map(Number).filter((x) => !Number.isNaN(x));
}

/* ------------------------------------------------------------------ */
/*  Operation builders                                                 */
/* ------------------------------------------------------------------ */

const PSEUDO_INSERT = [
  "function insertAt(a, idx, value):",
  "  for i from n-1 down to idx:",
  "    a[i+1] ← a[i]",
  "  a[idx] ← value",
  "  n ← n + 1",
];

function buildInsert(base: number[], idx: number, value: number): Frame[] {
  const f: Frame[] = [];
  const a = [...base, 0];
  const n = base.length;
  const show = () => a.slice(0, n + 1);
  f.push({
    line: 0, vars: { n, idx, value }, message: `Insert ${value} at index ${idx}. Everything at or after ${idx} must shift right.`,
    values: show(), states: show().map(() => "default"), pointers: { new: idx },
  });
  for (let i = n - 1; i >= idx; i--) {
    f.push({
      line: 1, vars: { i, value, n }, message: `Look at index ${i}. It will move to ${i + 1}.`,
      values: show(), states: show().map((_, k) => (k === i ? "active" : k === i + 1 ? "compare" : "default")),
      pointers: { i },
    });
    a[i + 1] = a[i];
    f.push({
      line: 2, vars: { i, value, n }, message: `Shift: a[${i + 1}] ← a[${i}] = ${a[i + 1]}.`,
      values: show(), states: show().map((_, k) => (k === i + 1 ? "swap" : "default")),
      pointers: { i },
    });
  }
  a[idx] = value;
  f.push({
    line: 3, vars: { idx, value }, message: `Place the new value: a[${idx}] = ${value}.`,
    values: show(), states: show().map((_, k) => (k === idx ? "done" : "default")),
    pointers: { idx },
  });
  f.push({
    line: 4, vars: { n: n + 1 }, message: `Array length is now ${n + 1}. Total shifts: ${n - idx} → O(n) worst case.`,
    values: show(), states: show().map(() => "done"), pointers: {},
  });
  return f;
}

const PSEUDO_DELETE = [
  "function deleteAt(a, idx):",
  "  for i from idx to n-2:",
  "    a[i] ← a[i+1]",
  "  n ← n - 1",
];

function buildDelete(base: number[], idx: number): Frame[] {
  const f: Frame[] = [];
  const a = [...base];
  const n = base.length;
  f.push({
    line: 0, vars: { n, idx }, message: `Delete a[${idx}] = ${a[idx]}. Everything after shifts left to close the gap.`,
    values: [...a], states: a.map((_, k) => (k === idx ? "swap" : "default")), pointers: { idx },
  });
  for (let i = idx; i < n - 1; i++) {
    f.push({
      line: 1, vars: { i }, message: `Look at index ${i + 1}. Its value will move to ${i}.`,
      values: [...a], states: a.map((_, k) => (k === i ? "active" : k === i + 1 ? "compare" : "default")),
      pointers: { i },
    });
    a[i] = a[i + 1];
    f.push({
      line: 2, vars: { i }, message: `Shift: a[${i}] ← a[${i + 1}] = ${a[i]}.`,
      values: [...a], states: a.map((_, k) => (k === i ? "swap" : "default")),
      pointers: { i },
    });
  }
  const shrunk = a.slice(0, n - 1);
  f.push({
    line: 3, vars: { n: n - 1 }, message: `Array length is now ${n - 1}. Total shifts: ${n - 1 - idx} → O(n) worst case.`,
    values: shrunk, states: shrunk.map(() => "done"), pointers: {},
  });
  return f;
}

const PSEUDO_LINEAR = [
  "function linearSearch(a, target):",
  "  for i in 0..n-1:",
  "    if a[i] == target:",
  "      return i",
  "  return -1",
];

function buildLinear(a: number[], target: number): Frame[] {
  const f: Frame[] = [];
  const n = a.length;
  f.push({
    line: 0, vars: { n, target }, message: `Scan left-to-right looking for ${target}.`,
    values: [...a], states: a.map(() => "default"), pointers: {},
  });
  for (let i = 0; i < n; i++) {
    f.push({
      line: 1, vars: { i, target }, message: `Inspect a[${i}] = ${a[i]}.`,
      values: [...a], states: a.map((_, k) => (k === i ? "active" : k < i ? "visited" : "default")),
      pointers: { i },
    });
    f.push({
      line: 2, vars: { i, target }, message: `Compare: is a[${i}] (${a[i]}) == ${target}?`,
      values: [...a], states: a.map((_, k) => (k === i ? "compare" : k < i ? "visited" : "default")),
      pointers: { i },
    });
    if (a[i] === target) {
      f.push({
        line: 3, vars: { i, target, found: i }, message: `Match! Return index ${i}.`,
        values: [...a], states: a.map((_, k) => (k === i ? "match" : k < i ? "visited" : "default")),
        pointers: { i },
      });
      return f;
    }
  }
  f.push({
    line: 4, vars: { target, found: -1 }, message: `End of array. ${target} is not present; return -1. Worst case is O(n).`,
    values: [...a], states: a.map(() => "visited"), pointers: {},
  });
  return f;
}

const PSEUDO_BINARY = [
  "function binarySearch(a, target):  # a must be sorted",
  "  lo ← 0, hi ← n - 1",
  "  while lo <= hi:",
  "    mid ← (lo + hi) / 2",
  "    if a[mid] == target: return mid",
  "    if a[mid] < target: lo ← mid + 1",
  "    else: hi ← mid - 1",
  "  return -1",
];

function buildBinary(a: number[], target: number): Frame[] {
  const f: Frame[] = [];
  const sorted = [...a].sort((x, y) => x - y);
  const n = sorted.length;
  let lo = 0, hi = n - 1;
  f.push({
    line: 0, vars: { n, target }, message: `Binary search needs a sorted array. We sort first: [${sorted.join(", ")}].`,
    values: [...sorted], states: sorted.map(() => "default"), pointers: {},
  });
  f.push({
    line: 1, vars: { lo, hi, target }, message: `Set the search window: lo = 0, hi = ${hi}.`,
    values: [...sorted], states: sorted.map(() => "default"), pointers: { lo, hi },
  });
  while (lo <= hi) {
    const mid = Math.floor((lo + hi) / 2);
    f.push({
      line: 2, vars: { lo, hi, target }, message: `Window [${lo}..${hi}] non-empty. Continue.`,
      values: [...sorted], states: sorted.map((_, k) => (k < lo || k > hi ? "visited" : "default")),
      pointers: { lo, hi },
    });
    f.push({
      line: 3, vars: { lo, hi, mid, target }, message: `Pick the middle: mid = ⌊(${lo}+${hi})/2⌋ = ${mid}.`,
      values: [...sorted], states: sorted.map((_, k) => (k === mid ? "mid" : k < lo || k > hi ? "visited" : "default")),
      pointers: { lo, mid, hi },
    });
    f.push({
      line: 4, vars: { mid, target }, message: `Compare a[${mid}] = ${sorted[mid]} with ${target}.`,
      values: [...sorted], states: sorted.map((_, k) => (k === mid ? "compare" : k < lo || k > hi ? "visited" : "default")),
      pointers: { lo, mid, hi },
    });
    if (sorted[mid] === target) {
      f.push({
        line: 4, vars: { mid, target, found: mid }, message: `Match! Return ${mid}.`,
        values: [...sorted], states: sorted.map((_, k) => (k === mid ? "match" : k < lo || k > hi ? "visited" : "default")),
        pointers: { mid },
      });
      return f;
    }
    if (sorted[mid] < target) {
      lo = mid + 1;
      f.push({
        line: 5, vars: { lo, hi }, message: `a[${mid}] < ${target}, so throw away the left half. lo ← ${lo}.`,
        values: [...sorted], states: sorted.map((_, k) => (k < lo || k > hi ? "visited" : "default")),
        pointers: { lo, hi },
      });
    } else {
      hi = mid - 1;
      f.push({
        line: 6, vars: { lo, hi }, message: `a[${mid}] > ${target}, so throw away the right half. hi ← ${hi}.`,
        values: [...sorted], states: sorted.map((_, k) => (k < lo || k > hi ? "visited" : "default")),
        pointers: { lo, hi },
      });
    }
  }
  f.push({
    line: 7, vars: { target, found: -1 }, message: `Window empty. ${target} not present. Total steps ≈ log₂(n) → O(log n).`,
    values: [...sorted], states: sorted.map(() => "visited"), pointers: {},
  });
  return f;
}

/* ------------------------------------------------------------------ */
/*  Visualize tab                                                      */
/* ------------------------------------------------------------------ */

type Op = "insert" | "delete" | "linear" | "binary";

function VisualizeTab() {
  const [op, setOp] = useState<Op>("insert");
  const [arrStr, setArrStr] = useState("10, 20, 30, 40, 50");
  const [paramStr, setParamStr] = useState("2 : 99");

  const base = useMemo(() => parseArray(arrStr), [arrStr]);

  const { pseudo, frames, helper } = useMemo(() => {
    const parts = paramStr.split(":").map((s) => s.trim());
    const p1 = Number(parts[0]);
    const p2 = Number(parts[1]);
    if (op === "insert") {
      const idx = Math.max(0, Math.min(base.length, Number.isFinite(p1) ? Math.floor(p1) : 0));
      const val = Number.isFinite(p2) ? p2 : 0;
      return { pseudo: PSEUDO_INSERT, frames: buildInsert(base, idx, val), helper: "Format: index : value — e.g. 2 : 99" };
    }
    if (op === "delete") {
      const idx = Math.max(0, Math.min(Math.max(0, base.length - 1), Number.isFinite(p1) ? Math.floor(p1) : 0));
      return { pseudo: PSEUDO_DELETE, frames: buildDelete(base, idx), helper: "Format: index — e.g. 2" };
    }
    if (op === "linear") {
      const target = Number.isFinite(p1) ? p1 : 0;
      return { pseudo: PSEUDO_LINEAR, frames: buildLinear(base, target), helper: "Format: target — e.g. 30" };
    }
    const target = Number.isFinite(p1) ? p1 : 0;
    return { pseudo: PSEUDO_BINARY, frames: buildBinary(base, target), helper: "Format: target — e.g. 30 (array is auto-sorted)" };
  }, [op, base, paramStr]);

  const player = useStepPlayer(frames);
  const frame = player.current!;

  const opLabels: Record<Op, string> = {
    insert: "Insert — O(n)",
    delete: "Delete — O(n)",
    linear: "Linear Search — O(n)",
    binary: "Binary Search — O(log n)",
  };

  return (
    <AlgoCanvas
      title={opLabels[op]}
      player={player}
      input={
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <InputEditor
            label="Array values"
            value={arrStr}
            placeholder="e.g. 10, 20, 30"
            presets={[
              { label: "Small", value: "5, 12, 3, 8, 15" },
              { label: "Sorted", value: "2, 7, 11, 19, 25, 33" },
              { label: "Duplicates", value: "4, 4, 4, 7, 4" },
              { label: "Single", value: "42" },
            ]}
            onApply={(v) => { if (parseArray(v).length > 0) setArrStr(v); }}
            onRandom={() => {
              const n = 5 + Math.floor(Math.random() * 4);
              const arr = Array.from({ length: n }, () => Math.floor(Math.random() * 90) + 1);
              setArrStr(arr.join(", "));
            }}
          />
          <InputEditor
            label="Parameters"
            value={paramStr}
            placeholder={helper}
            helper={helper}
            onApply={(v) => setParamStr(v)}
          />
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
            {(Object.keys(opLabels) as Op[]).map((id) => (
              <PillButton
                key={id}
                onClick={() => {
                  setOp(id);
                  if (id === "insert") setParamStr("2 : 99");
                  else if (id === "delete") setParamStr("2");
                  else setParamStr("30");
                }}
                active={op === id}
                color={A}
              >
                <span style={{ fontSize: "0.78rem" }}>{opLabels[id]}</span>
              </PillButton>
            ))}
          </div>
        </div>
      }
      pseudocode={<PseudocodePanel lines={pseudo} activeLine={frame.line} />}
      variables={<VariablesPanel vars={frame.vars} flashKeys={["i", "mid", "lo", "hi", "found"]} />}
    >
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
        <MemoryCells
          values={frame.values}
          states={frame.states}
          pointers={frame.pointers}
          showAddress
          addressBase={1000}
          bytesPerCell={4}
          cellWidth={60}
        />
        <Callout accent={A}>{frame.message}</Callout>
      </div>
    </AlgoCanvas>
  );
}

/* ------------------------------------------------------------------ */
/*  Learn                                                              */
/* ------------------------------------------------------------------ */

function LearnTab() {
  const rows = [
    ["Access a[i]", "O(1)", "Address arithmetic"],
    ["Linear search", "O(n)", "Must check each element"],
    ["Binary search (sorted)", "O(log n)", "Halve the window each step"],
    ["Insert at end", "O(1)*", "No shift needed (*amortised for dynamic arrays)"],
    ["Insert at index", "O(n)", "Must shift later elements right"],
    ["Delete at index", "O(n)", "Must shift later elements left"],
  ];
  return (
    <div style={{ fontFamily: C.heading, display: "flex", flexDirection: "column", gap: 14 }}>
      <div>
        <SectionEyebrow color={A}>Arrays = contiguous memory</SectionEyebrow>
        <SectionTitle>Same-sized cells, side by side, indexed in O(1)</SectionTitle>
        <Lede>
          An array is a block of same-sized cells placed side-by-side in RAM. Because every cell
          is at a known offset from the array&rsquo;s starting address, the CPU can compute{" "}
          <code style={{ fontFamily: C.mono, background: C.bgSection, padding: "1px 5px", borderRadius: 4 }}>
            base + i × size
          </code>{" "}
          in a single step — that is why indexing is O(1).
        </Lede>
      </div>

      <Card padded={false} style={{ overflow: "hidden" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.86rem", fontFamily: C.heading }}>
          <thead>
            <tr style={{ background: C.bgSoft }}>
              {["Operation", "Time", "Why"].map((h) => (
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
            {rows.map((r, i) => (
              <tr key={i} style={{ borderTop: i === 0 ? "none" : `1px solid ${C.borderLight}` }}>
                <td style={{ padding: "9px 16px", color: C.text }}>{r[0]}</td>
                <td style={{ padding: "9px 16px", fontFamily: C.mono, color: A, fontWeight: 700 }}>{r[1]}</td>
                <td style={{ padding: "9px 16px", color: C.textSecondary }}>{r[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>

      <Card>
        <SubHeading>Static vs Dynamic arrays</SubHeading>
        <p style={{ fontSize: "0.9rem", color: C.textSecondary, lineHeight: 1.6, margin: 0 }}>
          Static arrays have a fixed capacity chosen at creation. Dynamic arrays (C++{" "}
          <code style={{ fontFamily: C.mono }}>vector</code>, Java{" "}
          <code style={{ fontFamily: C.mono }}>ArrayList</code>, Python{" "}
          <code style={{ fontFamily: C.mono }}>list</code>) grow by allocating a bigger block and
          copying — amortised O(1) append.
        </p>
      </Card>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Try tab                                                            */
/* ------------------------------------------------------------------ */

function TryTab() {
  const problems = [
    { q: "Given a = [5,10,15,20], how many shifts does insertAt(a, 1, 99) perform?", options: ["0", "1", "3", "4"], ans: 2, exp: "Elements at indices 1, 2, 3 (three elements) must move right." },
    { q: "Linear search on an array of size 8 for an element at index 5 makes how many comparisons in the worst observed case?", options: ["1", "4", "6", "8"], ans: 2, exp: "We compare index 0, 1, 2, 3, 4, 5 — that is 6 comparisons before the match." },
    { q: "Binary search on 16 elements needs at most how many comparisons?", options: ["2", "4", "8", "16"], ans: 1, exp: "log₂(16) = 4. Each step halves the window." },
    { q: "Which operation is O(1) on a dynamic array most of the time?", options: ["Insert at front", "Insert at back", "Delete at front", "Search"], ans: 1, exp: "Back-insert just writes at the end (amortised O(1) with occasional resize)." },
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
        <SubHeading>Cache locality — arrays&rsquo; secret advantage</SubHeading>
        <p style={{ fontSize: "0.9rem", color: C.textSecondary, lineHeight: 1.6, margin: 0 }}>
          Because array cells sit next to each other, scanning them is blazing fast — the CPU
          prefetches neighbouring memory. A linked list with the same O(n) loop can be 5–10×
          slower in practice.
        </p>
      </Card>
      <Card>
        <SubHeading>When to pick an array</SubHeading>
        <ul style={{ fontSize: "0.9rem", color: C.textSecondary, lineHeight: 1.7, paddingLeft: 22, margin: 0 }}>
          <li>You need fast random access by index.</li>
          <li>Data fits in a predictable contiguous block.</li>
          <li>Most mutations happen near the end.</li>
        </ul>
      </Card>
      <Card>
        <SubHeading>When to avoid</SubHeading>
        <ul style={{ fontSize: "0.9rem", color: C.textSecondary, lineHeight: 1.7, paddingLeft: 22, margin: 0 }}>
          <li>Frequent inserts/deletes in the middle → linked list or deque.</li>
          <li>Unknown maximum size with strict memory limits → dynamic array with reserve.</li>
        </ul>
      </Card>
    </div>
  );
}

/* ------------------------------------------------------------------ */

export default function DSA_L1_ArraysActivity() {
  const tabs: EngTabDef[] = [
    { id: "learn", label: "Learn", icon: <BookOpen className="w-4 h-4" />, content: <LearnTab /> },
    { id: "visualize", label: "Visualize", icon: <Play className="w-4 h-4" />, content: <VisualizeTab /> },
    { id: "try", label: "Try It", icon: <Target className="w-4 h-4" />, content: <TryTab /> },
    { id: "insight", label: "Insight", icon: <Lightbulb className="w-4 h-4" />, content: <InsightTab /> },
  ];
  const quiz: EngQuizQuestion[] = [
    {
      question: "Why is a[i] computed in O(1) time on a contiguous array?",
      options: [
        "The CPU scans from the start until it reaches index i",
        "The address is calculated directly: base + i · element_size",
        "Arrays store a hash map internally",
        "Modern CPUs memorise all array values",
      ],
      correctIndex: 1,
      explanation: "Indexing is pure address arithmetic — no loop, no search. That is the defining advantage of arrays.",
    },
    {
      question: "Which operation is not O(n) in the worst case on a plain array?",
      options: ["Insert at index 0", "Delete at index 0", "Access a[5]", "Linear search"],
      correctIndex: 2,
      explanation: "Access is O(1). The others require shifting or scanning.",
    },
    {
      question: "Binary search requires the array to be…",
      options: ["Non-empty", "Sorted", "Unique", "Numeric"],
      correctIndex: 1,
      explanation: "Without sorted order, 'the target is larger — go right' is meaningless. Binary search relies on the sorted invariant.",
    },
    {
      question: "insertAt([1,2,3,4,5], 0, 9) performs how many element shifts?",
      options: ["0", "1", "4", "5"],
      correctIndex: 3,
      explanation: "All 5 existing elements must each move one position right to make space at index 0.",
    },
  ];
  return (
    <EngineeringLessonShell
      title="Arrays — Fundamentals"
      level={1}
      lessonNumber={4}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="Arrays are the foundation of nearly every DSA interview question"
      nextLessonHint="Strings & Pattern Matching"
    />
  );
}

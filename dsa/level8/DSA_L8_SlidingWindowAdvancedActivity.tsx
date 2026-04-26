"use client";

import { useMemo, useState } from "react";
import { BookOpen, Play, Target, Lightbulb } from "lucide-react";
import EngineeringLessonShell, { EngTabDef, EngQuizQuestion } from "@/components/engineering/EngineeringLessonShell";
import {
  AlgoCanvas, PseudocodePanel, VariablesPanel, InputEditor, MemoryCells, ArrayBars, useStepPlayer,
} from "@/components/engineering/algo";
import type { CellState } from "@/components/engineering/algo";
import {
  C, DSA_ACCENT as A,
  SectionEyebrow, SectionTitle, SubHeading, Lede,
  Card, PillButton, Callout,
} from "@/components/engineering/lessonPrimitives";

/* ------------------------------------------------------------------ */
/*  Algorithm: Longest substring without repeating characters          */
/* ------------------------------------------------------------------ */

interface Frame {
  line: number;
  vars: Record<string, string | number | undefined>;
  message: string;
  left: number;
  right: number;
  states: CellState[];
  freq: Record<string, number>;
  best: string;
  bestLo: number;
  bestHi: number;
  flashKey?: string;
}

const PSEUDO = [
  "function longestUnique(s):",
  "  left ← 0; best ← 0; bestLo ← 0",
  "  freq ← {}",
  "  for right in 0..len(s)-1:",
  "    freq[s[right]] += 1",
  "    while freq[s[right]] > 1:",
  "      freq[s[left]] -= 1",
  "      left += 1",
  "    if right - left + 1 > best:",
  "      best ← right - left + 1; bestLo ← left",
  "  return best",
];

function buildFrames(s: string): Frame[] {
  const f: Frame[] = [];
  const n = s.length;
  if (n === 0) {
    f.push({ line: 0, vars: { s: "''", left: 0, right: "-", best: 0 }, message: "Empty string - nothing to scan.", left: 0, right: -1, states: [], freq: {}, best: "", bestLo: 0, bestHi: -1 });
    return f;
  }
  const states = (lo: number, hi: number): CellState[] =>
    Array.from({ length: n }, (_, i) => (i >= lo && i <= hi ? "window" : "default"));

  let left = 0;
  let best = 0;
  let bestLo = 0;
  let bestHi = -1;
  const freq: Record<string, number> = {};

  f.push({
    line: 0, vars: { s: `"${s}"`, n, left: 0, right: "-", best: 0 },
    message: `Scan "${s}" - grow right, shrink left whenever a character repeats.`,
    left: 0, right: -1, states: states(0, -1), freq: {}, best: "", bestLo: 0, bestHi: -1,
  });
  f.push({
    line: 1, vars: { s: `"${s}"`, left, best, bestLo }, flashKey: "left",
    message: "Initialize: left=0, best=0, bestLo=0.",
    left, right: -1, states: states(left, -1), freq: {}, best: "", bestLo, bestHi: -1,
  });
  f.push({
    line: 2, vars: { s: `"${s}"`, left, best, bestLo }, flashKey: "freq",
    message: "freq is an empty character-frequency map.",
    left, right: -1, states: states(left, -1), freq: {}, best: "", bestLo, bestHi: -1,
  });

  for (let right = 0; right < n; right++) {
    const ch = s[right];
    f.push({
      line: 3, vars: { right, ch: `'${ch}'`, left, best },
      message: `Extend right to ${right} (char '${ch}').`,
      left, right, states: states(left, right - 1), freq: { ...freq }, best: s.slice(bestLo, bestHi + 1), bestLo, bestHi,
    });
    freq[ch] = (freq[ch] || 0) + 1;
    f.push({
      line: 4, vars: { right, ch: `'${ch}'`, left, [`freq['${ch}']`]: freq[ch] }, flashKey: `freq['${ch}']`,
      message: `Add '${ch}' to window - freq['${ch}']=${freq[ch]}.`,
      left, right, states: states(left, right), freq: { ...freq }, best: s.slice(bestLo, bestHi + 1), bestLo, bestHi,
    });

    while (freq[ch] > 1) {
      f.push({
        line: 5, vars: { right, ch: `'${ch}'`, left, [`freq['${ch}']`]: freq[ch] },
        message: `Duplicate! freq['${ch}']=${freq[ch]} > 1 - shrink from left.`,
        left, right, states: states(left, right), freq: { ...freq }, best: s.slice(bestLo, bestHi + 1), bestLo, bestHi,
      });
      const leaving = s[left];
      freq[leaving]--;
      f.push({
        line: 6, vars: { left, leaving: `'${leaving}'`, [`freq['${leaving}']`]: freq[leaving] }, flashKey: `freq['${leaving}']`,
        message: `Drop '${leaving}' from left - freq['${leaving}']=${freq[leaving]}.`,
        left, right, states: states(left, right), freq: { ...freq }, best: s.slice(bestLo, bestHi + 1), bestLo, bestHi,
      });
      left++;
      f.push({
        line: 7, vars: { left }, flashKey: "left",
        message: `left → ${left}.`,
        left, right, states: states(left, right), freq: { ...freq }, best: s.slice(bestLo, bestHi + 1), bestLo, bestHi,
      });
    }

    const winLen = right - left + 1;
    f.push({
      line: 8, vars: { left, right, winLen, best },
      message: `Window length = ${winLen}. Current best = ${best}.`,
      left, right, states: states(left, right), freq: { ...freq }, best: s.slice(bestLo, bestHi + 1), bestLo, bestHi,
    });
    if (winLen > best) {
      best = winLen;
      bestLo = left;
      bestHi = right;
      f.push({
        line: 9, vars: { best, bestLo, bestHi }, flashKey: "best",
        message: `New best! "${s.slice(bestLo, bestHi + 1)}" length=${best}.`,
        left, right, states: states(left, right), freq: { ...freq }, best: s.slice(bestLo, bestHi + 1), bestLo, bestHi,
      });
    }
  }

  f.push({
    line: 10, vars: { best, bestSubstring: `"${s.slice(bestLo, bestHi + 1)}"` }, flashKey: "best",
    message: `Done. Longest unique substring = "${s.slice(bestLo, bestHi + 1)}" (length ${best}).`,
    left, right: n - 1, states: states(left, n - 1), freq: { ...freq }, best: s.slice(bestLo, bestHi + 1), bestLo, bestHi,
  });
  return f;
}

/* ------------------------------------------------------------------ */
/*  Algorithm B: Sliding-window maximum (monotonic deque) - LC239      */
/* ------------------------------------------------------------------ */

interface DequeFrame {
  line: number;
  vars: Record<string, string | number | undefined>;
  message: string;
  i: number;                  // current index being processed
  windowLo: number;           // window covers [windowLo, i]
  deque: number[];            // indices held in the deque (decreasing by value)
  states: CellState[];        // per-array-cell state for ArrayBars
  result: number[];           // running result (max of each window)
  flashKey?: string;
}

const PSEUDO_DQ = [
  "function slidingWindowMax(a, k):",
  "  dq ← empty deque (holds indices, values strictly decreasing)",
  "  result ← []",
  "  for i in 0..n-1:",
  "    # 1. drop expired indices (out of window)",
  "    while dq and dq.front() ≤ i - k: dq.popFront()",
  "    # 2. maintain monotonic property - pop tails ≤ a[i]",
  "    while dq and a[dq.back()] ≤ a[i]: dq.popBack()",
  "    dq.pushBack(i)",
  "    # 3. once window is full, front is the max",
  "    if i ≥ k - 1: result.append(a[dq.front()])",
  "  return result",
];

function buildDequeFrames(a: number[], k: number): DequeFrame[] {
  const f: DequeFrame[] = [];
  const n = a.length;
  if (n === 0 || k <= 0 || k > n) {
    f.push({
      line: 0, vars: { n, k, note: "invalid input" },
      message: `Need 1 ≤ k ≤ n. Got n=${n}, k=${k}.`,
      i: -1, windowLo: 0, deque: [], states: a.map(() => "default" as CellState), result: [],
    });
    return f;
  }
  const stateAt = (i: number, lo: number, dq: number[], extra?: { swap?: number; compare?: number }): CellState[] => {
    return a.map((_, idx) => {
      if (extra?.swap !== undefined && idx === extra.swap) return "swap";
      if (extra?.compare !== undefined && idx === extra.compare) return "compare";
      if (dq.includes(idx)) return idx === dq[0] ? "active" : "frontier";
      if (idx >= lo && idx <= i) return "window";
      return "default";
    });
  };

  const dq: number[] = [];
  const result: number[] = [];

  f.push({
    line: 0, vars: { n, k },
    message: `Sliding-window maximum on a[${a.join(",")}] with k=${k}. Deque holds indices in strictly decreasing order of value.`,
    i: -1, windowLo: 0, deque: [], states: a.map(() => "default" as CellState), result: [],
  });

  for (let i = 0; i < n; i++) {
    const lo = Math.max(0, i - k + 1);
    f.push({
      line: 3, vars: { i, "a[i]": a[i], windowLo: lo, deque: dq.length === 0 ? "[]" : `[${dq.join(",")}]` },
      message: `i = ${i}. Window will be [${lo},${i}]. Look at a[${i}] = ${a[i]}.`,
      i, windowLo: lo, deque: [...dq], states: stateAt(i, lo, dq), result: [...result],
    });

    // 1. expire
    while (dq.length > 0 && dq[0] <= i - k) {
      const expired = dq[0];
      dq.shift();
      f.push({
        line: 5, vars: { expired, windowLo: lo, dequeFront: dq[0] ?? "-" }, flashKey: "expired",
        message: `Index ${expired} fell out of the window (≤ i - k = ${i - k}). Drop from front.`,
        i, windowLo: lo, deque: [...dq], states: stateAt(i, lo, dq), result: [...result],
      });
    }

    // 2. pop tails smaller-or-equal to a[i] - they can never be the answer once a[i] is in the window
    while (dq.length > 0 && a[dq[dq.length - 1]] <= a[i]) {
      const popped = dq[dq.length - 1];
      f.push({
        line: 7, vars: { popped, [`a[${popped}]`]: a[popped], [`a[${i}]`]: a[i] },
        message: `a[${popped}] = ${a[popped]} ≤ a[${i}] = ${a[i]}. ${popped} can never be max while ${i} is in window → pop tail.`,
        i, windowLo: lo, deque: [...dq], states: stateAt(i, lo, dq, { compare: popped, swap: i }), result: [...result],
      });
      dq.pop();
    }

    // 3. push current
    dq.push(i);
    f.push({
      line: 8, vars: { pushed: i, [`a[${i}]`]: a[i], deque: `[${dq.join(",")}]` }, flashKey: "deque",
      message: `Push i = ${i} (value ${a[i]}) to back. Deque values: [${dq.map((x) => a[x]).join(",")}] (still decreasing).`,
      i, windowLo: lo, deque: [...dq], states: stateAt(i, lo, dq), result: [...result],
    });

    // 4. emit max once first window is filled
    if (i >= k - 1) {
      const maxVal = a[dq[0]];
      result.push(maxVal);
      f.push({
        line: 10, vars: { window: `[${lo},${i}]`, max: maxVal, fromIdx: dq[0] }, flashKey: "result",
        message: `Window [${lo},${i}] complete. Max = a[${dq[0]}] = ${maxVal}. Emit to result.`,
        i, windowLo: lo, deque: [...dq], states: stateAt(i, lo, dq), result: [...result],
      });
    }
  }

  f.push({
    line: 11, vars: { result: `[${result.join(",")}]`, totalOps: "≤ 2n" },
    message: `Done. Result = [${result.join(", ")}]. Each index pushed and popped at most once → O(n) total.`,
    i: n - 1, windowLo: Math.max(0, n - k), deque: [...dq], states: stateAt(n - 1, Math.max(0, n - k), dq), result: [...result],
  });
  return f;
}

/* ------------------------------------------------------------------ */
/*  Visualize                                                          */
/* ------------------------------------------------------------------ */

type Mode = "longest-unique" | "window-max";

function VisualizeTab() {
  const [mode, setMode] = useState<Mode>("longest-unique");

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
        <PillButton color={A} active={mode === "longest-unique"} onClick={() => setMode("longest-unique")}>
          <span style={{ fontSize: "0.78rem" }}>Longest Unique Substring (LC3)</span>
        </PillButton>
        <PillButton color={A} active={mode === "window-max"} onClick={() => setMode("window-max")}>
          <span style={{ fontSize: "0.78rem" }}>Sliding-Window Max via Mono-Deque (LC239)</span>
        </PillButton>
      </div>
      {mode === "longest-unique" ? <LongestUniqueViz /> : <WindowMaxViz />}
    </div>
  );
}

function LongestUniqueViz() {
  const [inputStr, setInputStr] = useState("abcabcbb");
  const s = inputStr.slice(0, 18);
  const frames = useMemo(() => buildFrames(s), [s]);
  const player = useStepPlayer(frames);
  const frame = player.current!;

  return (
    <AlgoCanvas
      title="Longest Substring Without Repeating Characters"
      player={player}
      input={
        <InputEditor
          label="Input string"
          value={inputStr}
          placeholder="e.g. abcabcbb"
          helper="Up to 18 characters. Watch the window slide & shrink."
          presets={[
            { label: "abcabcbb", value: "abcabcbb" },
            { label: "bbbbb", value: "bbbbb" },
            { label: "pwwkew", value: "pwwkew" },
            { label: "dvdf", value: "dvdf" },
            { label: "all unique", value: "abcdefg" },
          ]}
          onApply={(v) => setInputStr(v)}
          onRandom={() => {
            const chars = "abcde";
            const L = 6 + Math.floor(Math.random() * 6);
            let out = "";
            for (let i = 0; i < L; i++) out += chars[Math.floor(Math.random() * chars.length)];
            setInputStr(out);
          }}
        />
      }
      pseudocode={<PseudocodePanel lines={PSEUDO} activeLine={frame.line} />}
      variables={<VariablesPanel vars={frame.vars} flashKeys={frame.flashKey ? [frame.flashKey] : []} />}
    >
      <SlidingWindowViz frame={frame} s={s} />
    </AlgoCanvas>
  );
}

function parseNums(s: string): number[] | null {
  const parts = s.split(/[,\s]+/).map((x) => x.trim()).filter(Boolean);
  const nums = parts.map(Number);
  if (nums.some((n) => Number.isNaN(n))) return null;
  return nums;
}

function WindowMaxViz() {
  const [inputStr, setInputStr] = useState("1, 3, -1, -3, 5, 3, 6, 7");
  const [k, setK] = useState(3);
  const a = useMemo(() => parseNums(inputStr) ?? [1, 3, -1, -3, 5, 3, 6, 7], [inputStr]);
  const kClamped = Math.max(1, Math.min(k, a.length));
  const frames = useMemo(() => buildDequeFrames(a, kClamped), [a, kClamped]);
  const player = useStepPlayer(frames);
  const frame = player.current!;

  return (
    <AlgoCanvas
      title={`Sliding-Window Maximum (k=${kClamped})`}
      player={player}
      input={
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "flex-end" }}>
          <div style={{ flex: 1, minWidth: 280 }}>
            <InputEditor
              label="Array (comma-separated)"
              value={inputStr}
              helper="Watch the deque maintain a strictly decreasing sequence. Each index enters and leaves at most once → O(n)."
              presets={[
                { label: "Classic LC239", value: "1, 3, -1, -3, 5, 3, 6, 7" },
                { label: "Increasing", value: "1, 2, 3, 4, 5, 6, 7" },
                { label: "Decreasing", value: "9, 7, 5, 3, 1" },
                { label: "All equal", value: "4, 4, 4, 4, 4" },
                { label: "With dupes", value: "2, 1, 5, 1, 3, 2, 5" },
              ]}
              onApply={(v) => { if (parseNums(v)) setInputStr(v); }}
            />
          </div>
          <div>
            <span style={{ fontSize: "0.72rem", fontWeight: 700, color: C.textMuted, textTransform: "uppercase", letterSpacing: "0.05em", display: "block", marginBottom: 4 }}>k</span>
            <input
              type="number" min={1} max={a.length} value={k}
              onChange={(e) => setK(Math.max(1, Number(e.target.value) || 1))}
              style={{
                width: 70, padding: "7px 10px", borderRadius: 6, border: `1px solid ${C.border}`,
                fontFamily: C.mono, fontSize: "0.82rem",
                background: C.bg, color: C.text,
              }}
            />
          </div>
        </div>
      }
      pseudocode={<PseudocodePanel lines={PSEUDO_DQ} activeLine={frame.line} />}
      variables={<VariablesPanel vars={frame.vars} flashKeys={frame.flashKey ? [frame.flashKey] : []} />}
      legend={
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", fontSize: "0.78rem" }}>
          <span><b style={{ color: "#3b82f6" }}>blue (active)</b> = deque front (current max)</span>
          <span><b style={{ color: "#06b6d4" }}>cyan (frontier)</b> = in deque (not front)</span>
          <span><b style={{ color: "#8b5cf6" }}>purple (window)</b> = inside window, not in deque</span>
        </div>
      }
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <ArrayBars
          values={a}
          states={frame.states}
          pointers={frame.i >= 0 ? { i: frame.i } : {}}
          windowRange={frame.i >= 0 ? [frame.windowLo, frame.i] : undefined}
          height={140}
        />
        <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1.1fr) minmax(0, 1fr)", gap: 14 }}>
          <Card style={{ padding: 12, fontFamily: C.heading }}>
            <div style={{ fontSize: "0.7rem", fontWeight: 700, color: C.textMuted, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 8 }}>
              Deque (front → back)
            </div>
            {frame.deque.length === 0 ? (
              <div style={{ fontSize: "0.78rem", color: C.textMuted, fontStyle: "italic" }}>empty</div>
            ) : (
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                {frame.deque.map((idx, j) => (
                  <div key={j} style={{
                    padding: "6px 10px", borderRadius: 6,
                    background: j === 0 ? A : "rgba(6,182,212,0.15)",
                    color: j === 0 ? "#fff" : "#0891b2",
                    fontFamily: C.mono,
                    fontWeight: 700, fontSize: "0.82rem",
                    border: j === 0 ? "none" : "1px solid rgba(6,182,212,0.4)",
                    display: "flex", flexDirection: "column", alignItems: "center", lineHeight: 1.15,
                  }}>
                    <span style={{ fontSize: "0.62rem", opacity: 0.85 }}>idx {idx}</span>
                    <span>{a[idx]}</span>
                  </div>
                ))}
              </div>
            )}
            <div style={{ marginTop: 8, paddingTop: 8, borderTop: `1px dashed ${C.border}`, fontSize: "0.72rem", color: C.textMuted, lineHeight: 1.45 }}>
              Invariant: values strictly decreasing front → back. Front index always holds the window max.
            </div>
          </Card>
          <Card style={{ padding: 12, fontFamily: C.heading, border: `2px solid ${C.success}`, background: `${C.success}10` }}>
            <div style={{ fontSize: "0.7rem", fontWeight: 700, color: C.successDark, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 8 }}>
              Result (window maxes so far)
            </div>
            {frame.result.length === 0 ? (
              <div style={{ fontSize: "0.78rem", color: C.textMuted, fontStyle: "italic" }}>
                first {kClamped} elements form window 0
              </div>
            ) : (
              <div style={{
                fontFamily: C.mono,
                fontSize: "1.05rem", fontWeight: 800, color: C.successDark,
              }}>
                [{frame.result.join(", ")}]
              </div>
            )}
          </Card>
        </div>
        <Callout accent={A}>{frame.message}</Callout>
      </div>
    </AlgoCanvas>
  );
}

function SlidingWindowViz({ frame, s }: { frame: Frame; s: string }) {
  const chars = s.split("");
  const pointers: Record<string, number> = {};
  if (frame.left >= 0 && frame.left < s.length) pointers["left"] = frame.left;
  if (frame.right >= 0 && frame.right < s.length) pointers["right"] = frame.right;

  const freqEntries = Object.entries(frame.freq).filter(([, v]) => v > 0);
  const maxF = Math.max(1, ...freqEntries.map(([, v]) => v));

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
      <MemoryCells values={chars} states={frame.states} pointers={pointers} cellWidth={44} />

      <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1.1fr) minmax(0,1fr)", gap: 14 }}>
        <div style={{
          border: `1px solid ${C.border}`, borderRadius: 10, padding: 12,
          background: C.bg,
        }}>
          <div style={{ fontSize: "0.7rem", fontWeight: 700, color: C.textMuted, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 8 }}>
            Window State
          </div>
          <div style={{ display: "flex", gap: 10, alignItems: "baseline", marginBottom: 8 }}>
            <span style={{ fontSize: "0.7rem", color: C.textMuted }}>Current:</span>
            <span style={{
              fontFamily: C.mono, fontSize: "1rem", fontWeight: 700,
              color: A,
              background: `${A}14`, padding: "2px 8px", borderRadius: 6,
              border: `1px solid ${A}33`,
            }}>
              {frame.right >= frame.left ? `"${s.slice(frame.left, frame.right + 1)}"` : "\"\""}
            </span>
            <span style={{ fontSize: "0.72rem", color: C.textMuted }}>
              len = {Math.max(0, frame.right - frame.left + 1)}
            </span>
          </div>
          <div style={{ fontSize: "0.7rem", fontWeight: 700, color: C.textMuted, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 6 }}>
            Char Frequency
          </div>
          {freqEntries.length === 0 ? (
            <div style={{ fontSize: "0.75rem", color: C.textMuted, fontStyle: "italic" }}>empty</div>
          ) : (
            <div style={{ display: "flex", alignItems: "flex-end", gap: 6, minHeight: 68 }}>
              {freqEntries.map(([c, v]) => {
                const h = 14 + (v / maxF) * 42;
                const dup = v > 1;
                return (
                  <div key={c} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 3 }}>
                    <div style={{
                      width: 26, height: h,
                      background: dup ? C.danger : A,
                      borderRadius: "4px 4px 0 0",
                      transition: "height 0.3s ease, background 0.3s ease",
                      color: "#fff", fontSize: "0.7rem", fontWeight: 800, fontFamily: C.mono,
                      display: "flex", alignItems: "flex-start", justifyContent: "center", paddingTop: 3,
                    }}>
                      {v}
                    </div>
                    <div style={{ fontSize: "0.72rem", fontWeight: 700, color: C.text, fontFamily: C.mono }}>
                      &apos;{c}&apos;
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        <div style={{
          border: `2px solid ${C.success}`, borderRadius: 10, padding: 12,
          background: `${C.success}10`,
        }}>
          <div style={{ fontSize: "0.7rem", fontWeight: 700, color: C.successDark, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 8 }}>
            Best Answer So Far
          </div>
          <div style={{
            fontFamily: C.mono,
            fontSize: "1.4rem", fontWeight: 800, color: C.successDark,
            marginBottom: 4,
          }}>
            {frame.best ? `"${frame.best}"` : "-"}
          </div>
          <div style={{ fontSize: "0.8rem", color: C.textMuted }}>
            length = <b style={{ color: C.text }}>{frame.best.length}</b>
          </div>
          <div style={{ fontSize: "0.72rem", color: C.textMuted, marginTop: 8, lineHeight: 1.5 }}>
            Updated only when a new window strictly beats the previous record.
          </div>
        </div>
      </div>
      <Callout accent={A}>{frame.message}</Callout>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Learn                                                              */
/* ------------------------------------------------------------------ */

function LearnTab() {
  const sections = [
    { title: "What is an advanced sliding window?", body: "Fixed-size windows are easy - you slide a ruler of width k across the array. 'Advanced' means the window's width is not fixed; it grows while a condition holds and shrinks the instant the condition breaks. Two pointers, one moving pattern." },
    { title: "The grow–shrink loop", body: "Right pointer extends by 1 each outer iteration. If the window now violates the invariant (duplicate char, sum over budget, more than k distinct chars, …), the left pointer advances until the invariant is restored. Every index is visited at most twice → O(n)." },
    { title: "The state you must track", body: "A hash map (character frequency, sum, count of distinct) that updates in O(1) when right adds a char and when left removes one. This auxiliary structure is what lets 'check the condition' stay constant-time." },
    { title: "Classic variants", body: "Longest substring without repeats, minimum window substring (Leetcode hard), longest substring with at most k distinct, smallest subarray with sum ≥ S, fruit into baskets, permutation-in-string. Same skeleton, different invariant." },
  ];
  return (
    <div style={{ fontFamily: C.heading, display: "flex", flexDirection: "column", gap: 14 }}>
      <div>
        <SectionEyebrow color={A}>Sliding window — advanced</SectionEyebrow>
        <SectionTitle>Two pointers, one moving pattern</SectionTitle>
        <Lede>
          Imagine a rubber band stretched across two fingers on a row of beads. The right finger advances bead-by-bead; whenever the beads inside the band break a rule, the left finger catches up until the rule is restored. The band is your &ldquo;window of validity.&rdquo;
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
    { q: "Longest unique substring of \"abba\".", a: "2" },
    { q: "Longest unique substring of \"tmmzuxt\".", a: "5" },
    { q: "For \"aabacbebebe\", length of longest substring with exactly 3 distinct chars?", a: "7" },
    { q: "Smallest subarray length with sum ≥ 11 from [1,4,4,2,3,2].", a: "3" },
  ];
  const [guesses, setGuesses] = useState<string[]>(problems.map(() => ""));
  const [shown, setShown] = useState<boolean[]>(problems.map(() => false));

  return (
    <div style={{ fontFamily: C.heading, display: "flex", flexDirection: "column", gap: 12 }}>
      <Callout accent={A}>
        Trace the window mentally: start with left = right = 0, grow right, shrink left when the invariant breaks.
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
        <SubHeading>Why it&apos;s O(n), not O(n²)</SubHeading>
        <p style={{ fontSize: "0.88rem", color: C.textSecondary, lineHeight: 1.6, margin: 0 }}>
          The inner <code style={{ fontFamily: C.mono }}>while</code> loop looks scary, but <code style={{ fontFamily: C.mono }}>left</code> only ever moves forward - never reset. Across the whole scan, <code style={{ fontFamily: C.mono }}>left</code> advances at most n times, <code style={{ fontFamily: C.mono }}>right</code> advances at most n times. Total work is 2n, not n × n.
        </p>
      </Card>
      <Card>
        <SubHeading>Interview playbook</SubHeading>
        <ul style={{ fontSize: "0.86rem", color: C.textSecondary, lineHeight: 1.7, paddingLeft: 20, margin: 0 }}>
          <li>Identify the invariant (&ldquo;all chars unique&rdquo;, &ldquo;sum ≤ k&rdquo;).</li>
          <li>Pick a state summary that updates in O(1) when right adds / left removes.</li>
          <li>Outer loop: right 0..n−1. Inner while: shrink until invariant restored.</li>
          <li>Update the best answer after every valid extension.</li>
        </ul>
      </Card>
      <Card>
        <SubHeading>Interview trap</SubHeading>
        <p style={{ fontSize: "0.88rem", color: C.textSecondary, lineHeight: 1.6, margin: 0 }}>
          Many students count the worst case as O(n²) by multiplying outer and inner loops. Amortized analysis (pointer never decreases) gives the correct O(n). Be ready to justify this out loud.
        </p>
      </Card>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Activity                                                           */
/* ------------------------------------------------------------------ */

export default function DSA_L8_SlidingWindowAdvancedActivity() {
  const tabs: EngTabDef[] = [
    { id: "learn", label: "Learn", icon: <BookOpen className="w-4 h-4" />, content: <LearnTab /> },
    { id: "visualize", label: "Visualize", icon: <Play className="w-4 h-4" />, content: <VisualizeTab /> },
    { id: "try", label: "Try It", icon: <Target className="w-4 h-4" />, content: <TryTab /> },
    { id: "insight", label: "Insight", icon: <Lightbulb className="w-4 h-4" />, content: <InsightTab /> },
  ];
  const quiz: EngQuizQuestion[] = [
    {
      question: "What is the time complexity of the sliding-window longest-unique-substring algorithm on a string of length n?",
      options: ["O(n log n)", "O(n²)", "O(n) - amortized, each pointer moves at most n times", "O(n · 26)"],
      correctIndex: 2,
      explanation: "left and right each advance at most n steps in total. The inner while does not restart left - so the total work is O(n).",
    },
    {
      question: "You are solving 'longest substring with at most k distinct characters.' When does the window shrink?",
      options: [
        "Every iteration, to keep size constant",
        "When the count of distinct characters inside exceeds k",
        "When the current character is a vowel",
        "Only at the end",
      ],
      correctIndex: 1,
      explanation: "The invariant is 'at most k distinct'. While distinctCount > k, advance left (decrementing freq) until distinctCount ≤ k.",
    },
    {
      question: "In the minimum-window-substring problem, why do we keep a 'matched' counter instead of comparing maps every step?",
      options: [
        "Maps cannot be compared in JavaScript",
        "To turn each add/remove into O(1) instead of O(|alphabet|)",
        "Because the window is always size 26",
        "It has no effect on complexity",
      ],
      correctIndex: 1,
      explanation: "Maintaining a counter of already-matched characters lets each step update state in O(1). Comparing full maps per step would be O(|alphabet|) per step.",
    },
    {
      question: "For input \"pwwkew\", after the first duplicate ('w' at index 2) appears, where does left land?",
      options: ["0", "1", "2", "3"],
      correctIndex: 2,
      explanation: "When right=2 sees 'w' (freq=2), we drop s[0]='p' (left=1) - still freq['w']=2, drop s[1]='w' (left=2) - now freq['w']=1, invariant restored.",
    },
  ];
  return (
    <EngineeringLessonShell
      title="Sliding Window (Advanced)"
      level={8}
      lessonNumber={1}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="Very high - the #1 string-subarray pattern in interviews"
      nextLessonHint="Binary Search on Answer"
    />
  );
}

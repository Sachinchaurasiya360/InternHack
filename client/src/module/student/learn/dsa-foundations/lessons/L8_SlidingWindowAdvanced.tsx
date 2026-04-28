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
  InlineCode,
  Lede,
  PillButton,
  SectionEyebrow,
  SectionTitle,
  SubHeading,
  THEME,
} from "../../../../../components/dsa-theory/primitives";
import { PracticeTab } from "../PracticeTab";

const PRACTICE_TOPIC_SLUG: string | null = "sliding-window";

/* ------------------------------------------------------------------ */
/*  Types & local CellState                                            */
/* ------------------------------------------------------------------ */

type CellState = "default" | "window" | "active" | "frontier" | "compare" | "swap";

const STATE_STYLE: Record<CellState, { bg: string; border: string; fg: string }> = {
  default:  { bg: THEME.bg, border: THEME.border, fg: THEME.textMuted },
  window:   { bg: "#ede9fe", border: "#7c3aed", fg: "#3b0764" },
  active:   { bg: THEME.accent, border: THEME.accentDark, fg: "#fff" },
  frontier: { bg: "#cffafe", border: "#0891b2", fg: "#0e4f5e" },
  compare:  { bg: "#fee2e2", border: "#dc2626", fg: "#7f1d1d" },
  swap:     { bg: THEME.accent, border: THEME.accentDark, fg: "#fff" },
};

/* ------------------------------------------------------------------ */
/*  Algo A: Longest Unique Substring                                   */
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

const PSEUDO_LU = [
  "function longestUnique(s):",
  "  left = 0; best = 0; bestLo = 0",
  "  freq = {}",
  "  for right in 0..len(s)-1:",
  "    freq[s[right]] += 1",
  "    while freq[s[right]] > 1:",
  "      freq[s[left]] -= 1",
  "      left += 1",
  "    if right - left + 1 > best:",
  "      best = right - left + 1; bestLo = left",
  "  return best",
];

function buildFrames(s: string): Frame[] {
  const f: Frame[] = [];
  const n = s.length;
  if (n === 0) {
    f.push({ line: 0, vars: { s: "''", left: 0, right: "-", best: 0 }, message: "Empty string.", left: 0, right: -1, states: [], freq: {}, best: "", bestLo: 0, bestHi: -1 });
    return f;
  }
  const states = (lo: number, hi: number): CellState[] =>
    Array.from({ length: n }, (_, i) => (i >= lo && i <= hi ? "window" : "default"));

  let left = 0; let best = 0; let bestLo = 0; let bestHi = -1;
  const freq: Record<string, number> = {};

  f.push({ line: 0, vars: { s: `"${s}"`, n, left: 0, right: "-", best: 0 }, message: `Scan "${s}" - grow right, shrink left whenever a character repeats.`, left: 0, right: -1, states: states(0, -1), freq: {}, best: "", bestLo: 0, bestHi: -1 });
  f.push({ line: 1, vars: { left, best, bestLo }, flashKey: "left", message: "Initialize: left=0, best=0.", left, right: -1, states: states(left, -1), freq: {}, best: "", bestLo, bestHi: -1 });
  f.push({ line: 2, vars: { left, best }, flashKey: "freq", message: "freq is an empty character-frequency map.", left, right: -1, states: states(left, -1), freq: {}, best: "", bestLo, bestHi: -1 });

  for (let right = 0; right < n; right++) {
    const ch = s[right];
    f.push({ line: 3, vars: { right, ch: `'${ch}'`, left, best }, message: `Extend right to ${right} (char '${ch}').`, left, right, states: states(left, right - 1), freq: { ...freq }, best: s.slice(bestLo, bestHi + 1), bestLo, bestHi });
    freq[ch] = (freq[ch] || 0) + 1;
    f.push({ line: 4, vars: { right, ch: `'${ch}'`, left, [`freq['${ch}']`]: freq[ch] }, flashKey: `freq['${ch}']`, message: `Add '${ch}' to window - freq['${ch}']=${freq[ch]}.`, left, right, states: states(left, right), freq: { ...freq }, best: s.slice(bestLo, bestHi + 1), bestLo, bestHi });
    while (freq[ch] > 1) {
      f.push({ line: 5, vars: { right, ch: `'${ch}'`, left, [`freq['${ch}']`]: freq[ch] }, message: `Duplicate! freq['${ch}']=${freq[ch]} > 1 - shrink from left.`, left, right, states: states(left, right), freq: { ...freq }, best: s.slice(bestLo, bestHi + 1), bestLo, bestHi });
      const leaving = s[left];
      freq[leaving]--;
      f.push({ line: 6, vars: { left, leaving: `'${leaving}'`, [`freq['${leaving}']`]: freq[leaving] }, flashKey: `freq['${leaving}']`, message: `Drop '${leaving}' from left.`, left, right, states: states(left, right), freq: { ...freq }, best: s.slice(bestLo, bestHi + 1), bestLo, bestHi });
      left++;
      f.push({ line: 7, vars: { left }, flashKey: "left", message: `left -> ${left}.`, left, right, states: states(left, right), freq: { ...freq }, best: s.slice(bestLo, bestHi + 1), bestLo, bestHi });
    }
    const winLen = right - left + 1;
    f.push({ line: 8, vars: { left, right, winLen, best }, message: `Window length = ${winLen}. Current best = ${best}.`, left, right, states: states(left, right), freq: { ...freq }, best: s.slice(bestLo, bestHi + 1), bestLo, bestHi });
    if (winLen > best) {
      best = winLen; bestLo = left; bestHi = right;
      f.push({ line: 9, vars: { best, bestLo, bestHi }, flashKey: "best", message: `New best! "${s.slice(bestLo, bestHi + 1)}" length=${best}.`, left, right, states: states(left, right), freq: { ...freq }, best: s.slice(bestLo, bestHi + 1), bestLo, bestHi });
    }
  }
  f.push({ line: 10, vars: { best, bestSubstring: `"${s.slice(bestLo, bestHi + 1)}"` }, flashKey: "best", message: `Done. Longest unique substring = "${s.slice(bestLo, bestHi + 1)}" (length ${best}).`, left, right: n - 1, states: states(left, n - 1), freq: { ...freq }, best: s.slice(bestLo, bestHi + 1), bestLo, bestHi });
  return f;
}

/* ------------------------------------------------------------------ */
/*  Algo B: Sliding-Window Max (Monotonic Deque)                       */
/* ------------------------------------------------------------------ */

interface DequeFrame {
  line: number;
  vars: Record<string, string | number | undefined>;
  message: string;
  i: number;
  windowLo: number;
  deque: number[];
  states: CellState[];
  result: number[];
  flashKey?: string;
}

const PSEUDO_DQ = [
  "function slidingWindowMax(a, k):",
  "  dq = empty deque (indices, values decreasing)",
  "  result = []",
  "  for i in 0..n-1:",
  "    # 1. drop expired indices (out of window)",
  "    while dq and dq.front() <= i - k: dq.popFront()",
  "    # 2. maintain monotonic property",
  "    while dq and a[dq.back()] <= a[i]: dq.popBack()",
  "    dq.pushBack(i)",
  "    # 3. once window is full, front is the max",
  "    if i >= k - 1: result.append(a[dq.front()])",
  "  return result",
];

function buildDequeFrames(a: number[], k: number): DequeFrame[] {
  const f: DequeFrame[] = [];
  const n = a.length;
  if (n === 0 || k <= 0 || k > n) {
    f.push({ line: 0, vars: { n, k, note: "invalid input" }, message: `Need 1 <= k <= n. Got n=${n}, k=${k}.`, i: -1, windowLo: 0, deque: [], states: a.map(() => "default" as CellState), result: [] });
    return f;
  }
  const stateAt = (i: number, lo: number, dq: number[]): CellState[] =>
    a.map((_, idx) => {
      if (dq.includes(idx)) return idx === dq[0] ? "active" : "frontier";
      if (idx >= lo && idx <= i) return "window";
      return "default";
    });

  const dq: number[] = [];
  const result: number[] = [];

  f.push({ line: 0, vars: { n, k }, message: `Sliding-window maximum on [${a.join(",")}] with k=${k}. Deque holds indices in strictly decreasing order of value.`, i: -1, windowLo: 0, deque: [], states: a.map(() => "default" as CellState), result: [] });

  for (let i = 0; i < n; i++) {
    const lo = Math.max(0, i - k + 1);
    f.push({ line: 3, vars: { i, "a[i]": a[i], windowLo: lo, deque: dq.length === 0 ? "[]" : `[${dq.join(",")}]` }, message: `i = ${i}. Window will be [${lo},${i}]. a[${i}] = ${a[i]}.`, i, windowLo: lo, deque: [...dq], states: stateAt(i, lo, dq), result: [...result] });
    while (dq.length > 0 && dq[0] <= i - k) {
      const expired = dq[0];
      dq.shift();
      f.push({ line: 5, vars: { expired, windowLo: lo }, flashKey: "expired", message: `Index ${expired} fell out of window. Drop from front.`, i, windowLo: lo, deque: [...dq], states: stateAt(i, lo, dq), result: [...result] });
    }
    while (dq.length > 0 && a[dq[dq.length - 1]] <= a[i]) {
      const popped = dq[dq.length - 1];
      f.push({ line: 7, vars: { popped, [`a[${popped}]`]: a[popped], [`a[${i}]`]: a[i] }, message: `a[${popped}]=${a[popped]} <= a[${i}]=${a[i]}. ${popped} can never be max while ${i} is in window - pop tail.`, i, windowLo: lo, deque: [...dq], states: stateAt(i, lo, dq), result: [...result] });
      dq.pop();
    }
    dq.push(i);
    f.push({ line: 8, vars: { pushed: i, [`a[${i}]`]: a[i], deque: `[${dq.join(",")}]` }, flashKey: "deque", message: `Push i=${i} (value ${a[i]}) to back. Deque values: [${dq.map((x) => a[x]).join(",")}] (decreasing).`, i, windowLo: lo, deque: [...dq], states: stateAt(i, lo, dq), result: [...result] });
    if (i >= k - 1) {
      const maxVal = a[dq[0]];
      result.push(maxVal);
      f.push({ line: 10, vars: { window: `[${lo},${i}]`, max: maxVal, fromIdx: dq[0] }, flashKey: "result", message: `Window [${lo},${i}] complete. Max = a[${dq[0]}] = ${maxVal}. Emit to result.`, i, windowLo: lo, deque: [...dq], states: stateAt(i, lo, dq), result: [...result] });
    }
  }
  f.push({ line: 11, vars: { result: `[${result.join(",")}]`, totalOps: "<= 2n" }, message: `Done. Result = [${result.join(", ")}]. Each index pushed and popped at most once -> O(n).`, i: n - 1, windowLo: Math.max(0, n - k), deque: [...dq], states: stateAt(n - 1, Math.max(0, n - k), dq), result: [...result] });
  return f;
}

/* ------------------------------------------------------------------ */
/*  Local MemoryCells helper                                           */
/* ------------------------------------------------------------------ */

function MemoryCells({
  values,
  states,
  pointers,
  cellWidth = 40,
}: {
  values: string[];
  states: CellState[];
  pointers?: Record<string, number>;
  cellWidth?: number;
}) {
  return (
    <div className="flex flex-col items-start gap-1">
      <div className="flex items-end gap-0.5">
        {values.map((v, i) => {
          const st = states[i] ?? "default";
          const style = STATE_STYLE[st];
          const ptr = pointers ? Object.entries(pointers).find(([, idx]) => idx === i) : null;
          return (
            <div key={i} className="flex flex-col items-center gap-0.5" style={{ width: cellWidth }}>
              {ptr && (
                <div className="text-[10px] font-mono font-bold text-lime-700 dark:text-lime-400">{ptr[0]}</div>
              )}
              <div
                className="flex items-center justify-center rounded font-mono text-sm font-bold"
                style={{ width: cellWidth - 2, height: cellWidth - 2, background: style.bg, border: `1.5px solid ${style.border}`, color: style.fg, transition: "all 0.3s ease" }}
              >
                {v}
              </div>
              <div className="text-[10px] font-mono text-stone-400">{i}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Local ArrayBars helper                                             */
/* ------------------------------------------------------------------ */

function ArrayBars({
  values,
  states,
  pointers,
  windowRange,
  height = 120,
}: {
  values: number[];
  states: CellState[];
  pointers?: Record<string, number>;
  windowRange?: [number, number];
  height?: number;
}) {
  const minVal = Math.min(...values);
  const maxVal = Math.max(...values);
  const range = Math.max(1, maxVal - minVal);
  const barW = Math.max(24, Math.min(52, Math.floor(480 / Math.max(values.length, 1))));

  return (
    <div className="flex flex-col gap-1">
      {windowRange && (
        <div className="text-[10px] font-mono text-stone-500">
          window [{windowRange[0]},{windowRange[1]}]
        </div>
      )}
      <div className="flex items-end gap-1 overflow-x-auto pb-1" style={{ height }}>
        {values.map((v, i) => {
          const st = states[i] ?? "default";
          const style = STATE_STYLE[st];
          const bh = Math.max(8, Math.round(((v - minVal) / range) * (height - 32) + 8));
          const ptr = pointers ? Object.entries(pointers).find(([, idx]) => idx === i) : null;
          return (
            <div key={i} className="flex flex-col items-center gap-0.5 shrink-0" style={{ width: barW }}>
              {ptr && <div className="text-[10px] font-mono font-bold text-lime-700 dark:text-lime-400">{ptr[0]}</div>}
              <div className="text-[10px] font-mono text-stone-600 dark:text-stone-400">{v}</div>
              <div
                style={{ width: barW - 4, height: bh, background: style.bg, border: `1.5px solid ${style.border}`, borderRadius: 4, transition: "all 0.3s ease" }}
              />
              <div className="text-[10px] font-mono text-stone-400">[{i}]</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Viz components                                                     */
/* ------------------------------------------------------------------ */

function SlidingWindowViz({ frame, s }: { frame: Frame; s: string }) {
  const chars = s.split("");
  const pointers: Record<string, number> = {};
  if (frame.left >= 0 && frame.left < s.length) pointers["left"] = frame.left;
  if (frame.right >= 0 && frame.right < s.length) pointers["right"] = frame.right;
  const freqEntries = Object.entries(frame.freq).filter(([, v]) => v > 0);
  const maxF = Math.max(1, ...freqEntries.map(([, v]) => v));

  return (
    <div className="flex flex-col gap-5">
      <MemoryCells values={chars} states={frame.states} pointers={pointers} cellWidth={40} />
      <div className="grid gap-4" style={{ gridTemplateColumns: "minmax(0,1.1fr) minmax(0,1fr)" }}>
        <Card>
          <div className="text-[10px] font-mono uppercase tracking-widest text-stone-500 mb-2">Window State</div>
          <div className="flex items-baseline gap-2 mb-3">
            <span className="text-xs text-stone-500">Current:</span>
            <span className="font-mono text-base font-bold text-lime-700 dark:text-lime-400 bg-lime-50 dark:bg-lime-400/10 px-2 py-0.5 rounded border border-lime-300 dark:border-lime-400/30">
              {frame.right >= frame.left ? `"${s.slice(frame.left, frame.right + 1)}"` : '""'}
            </span>
            <span className="text-xs text-stone-500">len={Math.max(0, frame.right - frame.left + 1)}</span>
          </div>
          <div className="text-[10px] font-mono uppercase tracking-widest text-stone-500 mb-2">Char Frequency</div>
          {freqEntries.length === 0 ? (
            <div className="text-xs text-stone-400 italic">empty</div>
          ) : (
            <div className="flex items-end gap-1.5" style={{ minHeight: 72 }}>
              {freqEntries.map(([c, v]) => {
                const h = 16 + (v / maxF) * 44;
                const dup = v > 1;
                return (
                  <div key={c} className="flex flex-col items-center gap-1">
                    <div
                      className="flex items-start justify-center pt-1 font-mono text-xs font-bold text-white rounded-t"
                      style={{ width: 26, height: h, background: dup ? "#dc2626" : THEME.accent, transition: "height 0.3s" }}
                    >
                      {v}
                    </div>
                    <div className="text-[10px] font-mono font-bold text-stone-700 dark:text-stone-300">'{c}'</div>
                  </div>
                );
              })}
            </div>
          )}
        </Card>
        <Card className="border-2 border-lime-400 bg-lime-50 dark:bg-lime-400/10">
          <div className="text-[10px] font-mono uppercase tracking-widest text-lime-700 dark:text-lime-400 mb-2">Best Answer So Far</div>
          <div className="text-2xl font-bold font-mono text-lime-700 dark:text-lime-400 mb-1">
            {frame.best ? `"${frame.best}"` : "-"}
          </div>
          <div className="text-xs text-stone-500">length = <strong className="text-stone-700 dark:text-stone-300">{frame.best.length}</strong></div>
        </Card>
      </div>
      <Callout>{frame.message}</Callout>
    </div>
  );
}

function DequeViz({ frame, a, kClamped }: { frame: DequeFrame; a: number[]; kClamped: number }) {
  return (
    <div className="flex flex-col gap-4">
      <ArrayBars values={a} states={frame.states} pointers={frame.i >= 0 ? { i: frame.i } : {}} windowRange={frame.i >= 0 ? [frame.windowLo, frame.i] : undefined} height={140} />
      <div className="grid gap-4" style={{ gridTemplateColumns: "minmax(0,1.1fr) minmax(0,1fr)" }}>
        <Card>
          <div className="text-[10px] font-mono uppercase tracking-widest text-stone-500 mb-2">Deque (front to back)</div>
          {frame.deque.length === 0 ? (
            <div className="text-xs text-stone-400 italic">empty</div>
          ) : (
            <div className="flex gap-1.5 flex-wrap">
              {frame.deque.map((idx, j) => (
                <div
                  key={j}
                  className="flex flex-col items-center px-2.5 py-1 rounded font-mono text-xs font-bold"
                  style={{
                    background: j === 0 ? THEME.accent : "rgba(6,182,212,0.15)",
                    color: j === 0 ? "#fff" : "#0891b2",
                    border: j === 0 ? "none" : "1px solid rgba(6,182,212,0.4)",
                  }}
                >
                  <span className="text-[9px] opacity-80">idx {idx}</span>
                  <span>{a[idx]}</span>
                </div>
              ))}
            </div>
          )}
          <p className="text-[10px] font-mono text-stone-500 mt-2 leading-relaxed">
            Invariant: values strictly decreasing front to back. Front index holds the window max.
          </p>
        </Card>
        <Card className="border-2 border-lime-400 bg-lime-50 dark:bg-lime-400/10">
          <div className="text-[10px] font-mono uppercase tracking-widest text-lime-700 dark:text-lime-400 mb-2">Result (window maxes so far)</div>
          {frame.result.length === 0 ? (
            <div className="text-xs text-stone-400 italic">first {kClamped} elements form window 0</div>
          ) : (
            <div className="font-mono text-lg font-bold text-lime-700 dark:text-lime-400">
              [{frame.result.join(", ")}]
            </div>
          )}
        </Card>
      </div>
      <Callout>{frame.message}</Callout>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Sub-visualizers                                                    */
/* ------------------------------------------------------------------ */

function LongestUniqueViz() {
  const [inputStr, setInputStr] = useState("abcabcbb");
  const s = inputStr.slice(0, 18);
  const frames = useMemo(() => buildFrames(s), [s]);
  const player = useStepPlayer(frames);
  const frame = player.current;

  return (
    <AlgoCanvas
      title="Longest Substring Without Repeating Characters"
      player={player}
      input={
        <InputEditor
          label="Input string"
          value={inputStr}
          placeholder="e.g. abcabcbb"
          helper="Up to 18 characters. Watch the window slide and shrink."
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
      pseudocode={<PseudocodePanel lines={PSEUDO_LU} activeLine={frame?.line} />}
      variables={<VariablesPanel vars={frame?.vars ?? {}} flashKeys={frame?.flashKey ? [frame.flashKey] : []} />}
    >
      {frame ? (
        <SlidingWindowViz frame={frame} s={s} />
      ) : (
        <Callout>Press play to step through the algorithm.</Callout>
      )}
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
  const frame = player.current;

  return (
    <AlgoCanvas
      title={`Sliding-Window Maximum (k=${kClamped})`}
      player={player}
      input={
        <div className="flex gap-3 flex-wrap items-end">
          <div className="flex-1 min-w-64">
            <InputEditor
              label="Array (comma-separated)"
              value={inputStr}
              helper="Watch the deque maintain a strictly decreasing sequence. Each index enters and leaves at most once -> O(n)."
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
            <label className="text-[10px] font-mono uppercase tracking-widest text-stone-500 block mb-1">k</label>
            <input
              type="number"
              min={1}
              max={a.length}
              value={k}
              onChange={(e) => setK(Math.max(1, Number(e.target.value) || 1))}
              className="w-20 px-2 py-1.5 rounded-md border border-stone-200 dark:border-white/10 bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-50 font-mono text-sm focus:outline-none focus:border-stone-400"
            />
          </div>
        </div>
      }
      pseudocode={<PseudocodePanel lines={PSEUDO_DQ} activeLine={frame?.line} />}
      variables={<VariablesPanel vars={frame?.vars ?? {}} flashKeys={frame?.flashKey ? [frame.flashKey] : []} />}
    >
      {frame ? (
        <DequeViz frame={frame} a={a} kClamped={kClamped} />
      ) : (
        <Callout>Press play to step through the algorithm.</Callout>
      )}
    </AlgoCanvas>
  );
}

/* ------------------------------------------------------------------ */
/*  Visualize tab                                                      */
/* ------------------------------------------------------------------ */

type Mode = "longest-unique" | "window-max";

function VisualizeTab() {
  const [mode, setMode] = useState<Mode>("longest-unique");
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2 flex-wrap items-center">
        <PillButton active={mode === "longest-unique"} onClick={() => setMode("longest-unique")}>
          <span className="text-[11px]">Longest Unique Substring (LC3)</span>
        </PillButton>
        <PillButton active={mode === "window-max"} onClick={() => setMode("window-max")}>
          <span className="text-[11px]">Sliding-Window Max via Mono-Deque (LC239)</span>
        </PillButton>
      </div>
      {mode === "longest-unique" ? <LongestUniqueViz /> : <WindowMaxViz />}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Learn                                                              */
/* ------------------------------------------------------------------ */

function LearnTab() {
  const sections = [
    { title: "What is an advanced sliding window?", body: "Fixed-size windows are easy, you slide a ruler of width k across the array. Advanced means the window's width is not fixed; it grows while a condition holds and shrinks the instant the condition breaks. Two pointers, one moving pattern." },
    { title: "The grow-shrink loop", body: "Right pointer extends by 1 each outer iteration. If the window now violates the invariant (duplicate char, sum over budget, more than k distinct chars), the left pointer advances until the invariant is restored. Every index is visited at most twice, giving O(n)." },
    { title: "The state you must track", body: "A hash map (character frequency, sum, count of distinct) that updates in O(1) when right adds a char and when left removes one. This auxiliary structure is what lets 'check the condition' stay constant-time." },
    { title: "Classic variants", body: "Longest substring without repeats, minimum window substring (Leetcode hard), longest substring with at most k distinct, smallest subarray with sum >= S, fruit into baskets, permutation-in-string. Same skeleton, different invariant." },
  ];
  return (
    <div className="flex flex-col gap-5">
      <div>
        <SectionEyebrow>sliding window, advanced</SectionEyebrow>
        <SectionTitle>Two pointers, one moving pattern</SectionTitle>
        <Lede>
          Imagine a rubber band stretched across two fingers on a row of beads. The right finger advances bead-by-bead; whenever the beads inside the band break a rule, the left finger catches up until the rule is restored. The band is your window of validity.
        </Lede>
      </div>
      <div className="grid gap-3" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
        {sections.map((s, i) => (
          <Card key={i}>
            <div className="text-xs font-bold text-lime-700 dark:text-lime-400 mb-1 font-mono">0{i + 1}</div>
            <SubHeading>{s.title}</SubHeading>
            <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">{s.body}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Try It                                                             */
/* ------------------------------------------------------------------ */

function TryTab() {
  const problems = [
    { q: 'Longest unique substring of "abba".', a: "2" },
    { q: 'Longest unique substring of "tmmzuxt".', a: "5" },
    { q: 'For "aabacbebebe", length of longest substring with exactly 3 distinct chars?', a: "7" },
    { q: "Smallest subarray length with sum >= 11 from [1,4,4,2,3,2].", a: "3" },
  ];
  const [guesses, setGuesses] = useState<string[]>(problems.map(() => ""));
  const [shown, setShown] = useState<boolean[]>(problems.map(() => false));

  return (
    <div className="flex flex-col gap-3">
      <Callout>
        Trace the window mentally: start with left = right = 0, grow right, shrink left when the invariant breaks.
      </Callout>
      {problems.map((p, i) => {
        const correct = guesses[i].trim() === p.a;
        return (
          <Card key={i}>
            <p className="text-sm text-stone-800 dark:text-stone-200 mb-3">
              <span className="font-bold text-stone-400 mr-1">#{i + 1}.</span> {p.q}
            </p>
            <div className="flex gap-2 flex-wrap items-center">
              <input
                type="text"
                value={guesses[i]}
                onChange={(e) => { const v = [...guesses]; v[i] = e.target.value; setGuesses(v); }}
                placeholder="your answer"
                className="w-28 px-3 py-1.5 rounded-md border border-stone-200 dark:border-white/10 bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-50 font-mono text-sm focus:outline-none focus:border-stone-400"
              />
              <button
                type="button"
                onClick={() => { const v = [...shown]; v[i] = true; setShown(v); }}
                className="px-3 py-1.5 rounded-md border border-stone-200 dark:border-white/10 bg-stone-50 dark:bg-stone-950 text-stone-600 dark:text-stone-400 text-xs font-medium cursor-pointer hover:border-stone-400"
              >
                Reveal
              </button>
              {shown[i] && (
                <span className={`px-3 py-1 rounded-md text-xs font-bold ${correct ? "bg-lime-50 dark:bg-lime-400/10 text-lime-800 dark:text-lime-200 border border-lime-400" : "bg-rose-50 dark:bg-rose-400/10 text-rose-800 dark:text-rose-200 border border-rose-400"}`}>
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
    <div className="flex flex-col gap-4">
      <Card>
        <SubHeading>Why it is O(n), not O(n²)</SubHeading>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          The inner <InlineCode>while</InlineCode> loop looks scary, but <InlineCode>left</InlineCode> only ever moves forward, never reset. Across the whole scan, <InlineCode>left</InlineCode> advances at most n times, <InlineCode>right</InlineCode> advances at most n times. Total work is 2n, not n x n.
        </p>
      </Card>
      <Card>
        <SubHeading>Interview playbook</SubHeading>
        <ul className="list-disc pl-5 space-y-1 text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          <li>Identify the invariant ("all chars unique", "sum &lt;= k").</li>
          <li>Pick a state summary that updates in O(1) when right adds / left removes.</li>
          <li>Outer loop: right 0..n-1. Inner while: shrink until invariant restored.</li>
          <li>Update the best answer after every valid extension.</li>
        </ul>
      </Card>
      <Card>
        <SubHeading>Interview trap</SubHeading>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          Many students count the worst case as O(n²) by multiplying outer and inner loops. Amortized analysis (pointer never decreases) gives the correct O(n). Be ready to justify this out loud.
        </p>
      </Card>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Root                                                               */
/* ------------------------------------------------------------------ */

interface Props {
  onQuizComplete?: (score: number) => void;
}

export default function L8_SlidingWindowAdvanced({ onQuizComplete }: Props) {
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
      question: "What is the time complexity of the sliding-window longest-unique-substring algorithm on a string of length n?",
      options: ["O(n log n)", "O(n²)", "O(n) - amortized, each pointer moves at most n times", "O(n * 26)"],
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
      explanation: "The invariant is 'at most k distinct'. While distinctCount > k, advance left (decrementing freq) until distinctCount <= k.",
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
    <LessonShell
      title="Sliding Window (Advanced)"
      level={8}
      lessonNumber={3}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="Very high - the #1 string-subarray pattern in interviews"
      nextLessonHint="Grid to Graph Mapping"
      onQuizComplete={onQuizComplete}
    />
  );
}

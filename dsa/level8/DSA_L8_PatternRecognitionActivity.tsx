"use client";

import { useMemo, useState } from "react";
import { BookOpen, Play, Target, Lightbulb } from "lucide-react";
import EngineeringLessonShell, { EngTabDef, EngQuizQuestion } from "@/components/engineering/EngineeringLessonShell";
import {
  AlgoCanvas, PseudocodePanel, VariablesPanel, InputEditor, useStepPlayer
} from "@/components/engineering/algo";
import {
  C, DSA_ACCENT as A,
  SectionEyebrow, SectionTitle, SubHeading, Lede,
  Card, PillButton, Callout,
} from "@/components/engineering/lessonPrimitives";

/* ------------------------------------------------------------------ */
/*  Pattern palette                                                    */
/* ------------------------------------------------------------------ */

type Pattern =
  | "sliding-window" | "two-pointers" | "binary-search" | "bfs" | "dfs"
  | "dp" | "greedy" | "stack-queue" | "hashing" | "divide-conquer";

const PATTERNS: { id: Pattern; label: string; color: string; hint: string }[] = [
  { id: "sliding-window", label: "Sliding Window",  color: "#8b5cf6", hint: "contiguous subarray/substring with a moving constraint" },
  { id: "two-pointers",   label: "Two Pointers",    color: "#06b6d4", hint: "sorted array, pair/triple with a target, in-place rearrange" },
  { id: "binary-search",  label: "Binary Search",   color: "#3b82f6", hint: "sorted data OR monotonic feasibility over an answer range" },
  { id: "bfs",            label: "BFS",             color: "#10b981", hint: "shortest path (unit weights), level-order, minimum steps" },
  { id: "dfs",            label: "DFS",             color: "#059669", hint: "exhaustive explore, connected components, cycles, backtracking" },
  { id: "dp",             label: "Dynamic Prog.",   color: "#f59e0b", hint: "optimal substructure + overlapping subproblems (count, min, max)" },
  { id: "greedy",         label: "Greedy",          color: "#fbbf24", hint: "local optimal choice proven to reach global optimum" },
  { id: "stack-queue",    label: "Stack / Queue",   color: "#ef4444", hint: "LIFO brackets / monotonic next-greater / BFS frontier" },
  { id: "hashing",        label: "Hashing",         color: "#ec4899", hint: "O(1) lookup, counting, de-duplication, 'seen' sets" },
  { id: "divide-conquer", label: "Divide & Conquer",color: "#64748b", hint: "split in halves, solve, combine (merge sort, majority element)" },
];

/* ------------------------------------------------------------------ */
/*  Problems                                                           */
/* ------------------------------------------------------------------ */

interface Approach {
  name: string;
  complexity: string;
  sketch: string;
  best?: boolean;
}

interface Problem {
  id: string;
  title: string;
  statement: string;
  correctPatterns: Pattern[];     // user must pick AT LEAST these (any subset accepted if it contains all)
  approaches: Approach[];
  edges: string[];                 // edge cases to prompt
}

const PROBLEMS: Problem[] = [
  {
    id: "two-sum",
    title: "Two Sum",
    statement: "Given an array of integers nums and an integer target, return indices of the two numbers that add up to target. Exactly one solution; you may not reuse the same element twice.",
    correctPatterns: ["hashing"],
    approaches: [
      { name: "Brute force", complexity: "O(n²) time, O(1) space", sketch: "Try every pair (i, j)." },
      { name: "Sort + two pointers", complexity: "O(n log n) time, O(n) space", sketch: "Sort (index, value). Pointers from both ends converge toward target." },
      { name: "Hash map", complexity: "O(n) time, O(n) space", sketch: "For each i, check if target − nums[i] has been seen; else record nums[i] → i.", best: true },
    ],
    edges: [
      "Duplicate values in the array (e.g. target = 2·x)",
      "Negative numbers",
      "Empty array or fewer than 2 elements - problem statement says always 1 solution, but in interview clarify",
    ]
  },
  {
    id: "shortest-bridge",
    title: "Shortest Bridge Between Two Islands",
    statement: "Binary grid with exactly two islands (connected 4-directional groups of 1s). Return the minimum number of 0-cells to flip so the two islands are connected.",
    correctPatterns: ["dfs", "bfs"],
    approaches: [
      { name: "Brute force", complexity: "O((RC)²)", sketch: "For every pair of island cells, BFS the grid - too slow." },
      { name: "DFS mark one island + multi-source BFS", complexity: "O(R·C)", sketch: "DFS flood-fill island A into a queue. Then multi-source BFS from that queue; first time you touch a cell of island B is the answer.", best: true },
    ],
    edges: [
      "Islands that touch diagonally (do they count as connected? clarify)",
      "One island is a single cell",
      "Minimum answer is 1 (islands already adjacent via 1 water cell)",
    ]
  },
  {
    id: "min-meeting-rooms",
    title: "Minimum Meeting Rooms",
    statement: "Given start/end times of meetings, return the minimum number of rooms required so no two meetings in the same room overlap.",
    correctPatterns: ["greedy", "stack-queue"],
    approaches: [
      { name: "Simulate hours", complexity: "O(n · maxTime)", sketch: "Tick time → track active count - depends on time range, not scalable." },
      { name: "Events / sweep line", complexity: "O(n log n)", sketch: "Split each meeting into +1 (start) and -1 (end) events, sort, track running sum max.", best: true },
      { name: "Min-heap of end times", complexity: "O(n log n)", sketch: "Sort by start. Push end into min-heap; if next start ≥ heap top end, pop (reuse a room). Answer = max heap size." },
    ],
    edges: [
      "Meetings that end exactly when another starts - do they share a room?",
      "All meetings overlap (answer = n)",
      "Single meeting",
    ]
  },
  {
    id: "longest-increasing-subseq",
    title: "Longest Increasing Subsequence",
    statement: "Given an integer array nums, return the length of the longest strictly-increasing subsequence (not necessarily contiguous).",
    correctPatterns: ["dp", "binary-search"],
    approaches: [
      { name: "Brute force", complexity: "O(2ⁿ)", sketch: "Enumerate all subsequences." },
      { name: "Classic DP", complexity: "O(n²) time, O(n) space", sketch: "dp[i] = 1 + max{dp[j] : j < i, nums[j] < nums[i]}." },
      { name: "Patience sort / BS on tails", complexity: "O(n log n)", sketch: "Keep smallest tail seen for every LIS length. For each x, binary-search the replace position.", best: true },
    ],
    edges: [
      "All elements equal - answer = 1 (strict increase)",
      "Strictly decreasing - answer = 1",
      "Duplicates scattered",
    ]
  },
];

// Set of valid palette IDs (used to filter any pattern id not rendered as a chip).
const PALETTE_IDS = new Set<Pattern>(PATTERNS.map((p) => p.id));

/* ------------------------------------------------------------------ */
/*  Pseudocode walkthrough (line-synced) - Two-Sum hash approach       */
/* ------------------------------------------------------------------ */

const PSEUDO_TWOSUM = [
  "function twoSum(nums, target):",
  "  seen ← {}",
  "  for i in 0..n-1:",
  "    need ← target − nums[i]",
  "    if need in seen:",
  "      return [seen[need], i]",
  "    seen[nums[i]] ← i",
  "  return []",
];

interface TraceFrame {
  line: number;
  vars: Record<string, string | number | undefined>;
  message: string;
  i: number;
  seen: Record<number, number>;
  found: [number, number] | null;
  flashKey?: string;
}

function buildTwoSumFrames(nums: number[], target: number): TraceFrame[] {
  const f: TraceFrame[] = [];
  const seen: Record<number, number> = {};
  f.push({ line: 0, vars: { nums: `[${nums.join(",")}]`, target }, message: `Find two indices i<j with nums[i]+nums[j]=${target}.`, i: -1, seen: {}, found: null });
  f.push({ line: 1, vars: { seen: "{}" }, flashKey: "seen", message: "Initialize empty hash 'seen'.", i: -1, seen: {}, found: null });
  for (let i = 0; i < nums.length; i++) {
    const need = target - nums[i];
    f.push({ line: 3, vars: { i, [`nums[i]`]: nums[i], need }, flashKey: "need", message: `i=${i}: need = ${target} − ${nums[i]} = ${need}.`, i, seen: { ...seen }, found: null });
    if (need in seen) {
      f.push({ line: 5, vars: { match: `[${seen[need]},${i}]` }, flashKey: "match", message: `Found! seen[${need}]=${seen[need]}, and i=${i}.`, i, seen: { ...seen }, found: [seen[need], i] });
      return f;
    }
    seen[nums[i]] = i;
    f.push({ line: 6, vars: { [`seen[${nums[i]}]`]: i }, flashKey: `seen[${nums[i]}]`, message: `Record seen[${nums[i]}] = ${i}.`, i, seen: { ...seen }, found: null });
  }
  f.push({ line: 7, vars: { result: "[]" }, message: "No pair found.", i: nums.length, seen: { ...seen }, found: null });
  return f;
}

/* ------------------------------------------------------------------ */
/*  Visualize tab: walkthrough of Two-Sum                               */
/* ------------------------------------------------------------------ */

function parseNumsTarget(s: string): { nums: number[]; target: number } | null {
  const parts = s.split("|");
  if (parts.length !== 2) return null;
  const nums = parts[0].split(/[,\s]+/).map(Number).filter((x) => Number.isFinite(x));
  const target = Number(parts[1].trim());
  if (!nums.length || !Number.isFinite(target)) return null;
  return { nums, target };
}

function VisualizeTab() {
  const [inputStr, setInputStr] = useState("2,7,11,15 | 9");
  const parsed = parseNumsTarget(inputStr) ?? { nums: [2, 7, 11, 15], target: 9 };
  const frames = useMemo(() => buildTwoSumFrames(parsed.nums, parsed.target), [parsed]);
  const player = useStepPlayer(frames);
  const frame = player.current!;

  return (
    <AlgoCanvas
      title="Live Walkthrough - Two Sum (hash-map approach)"
      player={player}
      input={
        <InputEditor
          label="nums | target"
          value={inputStr}
          placeholder="e.g. 2,7,11,15 | 9"
          helper="After you work through the walkthrough, hop to 'Try It' for the pattern trainer."
          presets={[
            { label: "Easy", value: "2,7,11,15 | 9" },
            { label: "Dup.", value: "3,3,4 | 6" },
            { label: "Negatives", value: "-1,-2,-3,-4 | -5" },
            { label: "No solution", value: "1,2,3 | 100" },
          ]}
          onApply={(v) => { if (parseNumsTarget(v)) setInputStr(v); }}
        />
      }
      pseudocode={<PseudocodePanel lines={PSEUDO_TWOSUM} activeLine={frame.line} />}
      variables={<VariablesPanel vars={frame.vars} flashKeys={frame.flashKey ? [frame.flashKey] : []} />}
    >
      <TwoSumTraceViz frame={frame} nums={parsed.nums} target={parsed.target} />
    </AlgoCanvas>
  );
}

function TwoSumTraceViz({ frame, nums, target }: { frame: TraceFrame; nums: number[]; target: number }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
      <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) 240px", gap: 14, alignItems: "flex-start" }}>
        <div>
          <div style={{ fontSize: "0.72rem", fontWeight: 700, color: C.textMuted, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 8 }}>
            Array (target = {target})
          </div>
          <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
            {nums.map((v, idx) => {
              const isCur = idx === frame.i;
              const isFound = frame.found && (frame.found[0] === idx || frame.found[1] === idx);
              return (
                <div key={idx} style={{
                  minWidth: 48, padding: "8px 10px", textAlign: "center",
                  borderRadius: 8,
                  border: `2px solid ${isFound ? C.success : isCur ? A : C.border}`,
                  background: isFound ? `${C.success}14` : isCur ? `${A}14` : C.bg,
                  color: isFound ? C.successDark : isCur ? A : C.text,
                  fontFamily: C.mono,
                  fontWeight: 700, fontSize: "0.95rem",
                  transition: "all 0.3s ease"
                }}>
                  <div style={{ fontSize: "0.62rem", color: C.textMuted, fontWeight: 500 }}>[{idx}]</div>
                  <div>{v}</div>
                </div>
              );
            })}
          </div>
          {frame.found && (
            <div style={{
              marginTop: 12, padding: "10px 12px", borderRadius: 8,
              background: `${C.success}14`, border: `2px solid ${C.success}`,
              fontSize: "0.88rem", color: C.text
            }}>
              Answer: indices <b style={{ color: C.successDark, fontFamily: C.mono }}>[{frame.found[0]}, {frame.found[1]}]</b>
              &nbsp;- nums[{frame.found[0]}] + nums[{frame.found[1]}] = {nums[frame.found[0]]} + {nums[frame.found[1]]} = {target}.
            </div>
          )}
        </div>

        <div style={{ border: `1px solid ${C.border}`, borderRadius: 10, padding: 10, background: C.bg }}>
          <div style={{ fontSize: "0.7rem", fontWeight: 700, color: C.textMuted, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 8 }}>
            Hash &apos;seen&apos;
          </div>
          {Object.keys(frame.seen).length === 0 ? (
            <div style={{ fontSize: "0.78rem", color: C.textMuted, fontStyle: "italic" }}>empty</div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
              {Object.entries(frame.seen).map(([k, v]) => (
                <div key={k} style={{
                  padding: "5px 10px", borderRadius: 6,
                  background: C.bgSoft,
                  fontFamily: C.mono, fontSize: "0.78rem", fontWeight: 700,
                  display: "flex", justifyContent: "space-between",
                  border: `1px solid ${C.border}`
                }}>
                  <span style={{ color: A }}>{k}</span>
                  <span style={{ color: C.textMuted }}>→</span>
                  <span style={{ color: C.text }}>{v}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <Callout accent={A}>{frame.message}</Callout>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Interview-mode Pattern Trainer (Try It tab)                         */
/* ------------------------------------------------------------------ */

type Stage = "talk" | "code" | "analyze" | "edges" | "optimize" | "done";

const STAGES: { id: Stage; label: string; prompt: string }[] = [
  { id: "talk",     label: "1. Talk through",           prompt: "Restate the problem. Name the patterns that apply. Explain why." },
  { id: "code",     label: "2. Pseudocode",             prompt: "Sketch the approach in pseudocode. Focus on the data structure and the loop structure." },
  { id: "analyze",  label: "3. Analyze complexity",     prompt: "Time and space - best, average, worst. Justify the dominating operation." },
  { id: "edges",    label: "4. Handle edge cases",      prompt: "Empty input? Single element? All duplicates? Integer overflow? Negative numbers?" },
  { id: "optimize", label: "5. Optimize / alternatives", prompt: "Can you go faster? Trade space for time? Are there multiple valid approaches?" },
  { id: "done",     label: "Done",                       prompt: "Review your reasoning before moving to the next problem." },
];

const WARNING_COLOR = "#F59E0B";
const WARNING_DARK = "#B45309";

function PatternTrainer() {
  const [problemIdx, setProblemIdx] = useState(0);
  const [selected, setSelected] = useState<Set<Pattern>>(new Set());
  const [submitted, setSubmitted] = useState(false);
  const [stage, setStage] = useState<Stage>("talk");
  const [scratch, setScratch] = useState("");
  const [revealedApproach, setRevealedApproach] = useState(false);

  const problem = PROBLEMS[problemIdx];
  const correctSet = new Set<Pattern>(problem.correctPatterns.filter((p) => PALETTE_IDS.has(p)));

  function toggle(p: Pattern) {
    if (submitted) return;
    const next = new Set(selected);
    if (next.has(p)) next.delete(p); else next.add(p);
    setSelected(next);
  }

  function submit() { setSubmitted(true); }

  const correct = useMemo(() => {
    if (!submitted) return null;
    const ok = [...correctSet].every((p) => selected.has(p)) && [...selected].every((p) => correctSet.has(p));
    return ok;
  }, [submitted, selected, correctSet]);

  function nextProblem() {
    setProblemIdx((idx) => (idx + 1) % PROBLEMS.length);
    setSelected(new Set());
    setSubmitted(false);
    setStage("talk");
    setScratch("");
    setRevealedApproach(false);
  }

  const stageIdx = STAGES.findIndex((s) => s.id === stage);
  const currentStage = STAGES[stageIdx];

  return (
    <div style={{ fontFamily: C.heading, display: "flex", flexDirection: "column", gap: 14 }}>
      <Callout accent={A}>
        Pattern-recognition trainer. Read the problem, pick every applicable pattern, then walk through the interview stages.
      </Callout>

      {/* Problem selector */}
      <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
        {PROBLEMS.map((p, i) => (
          <PillButton
            key={p.id}
            color={A}
            active={i === problemIdx}
            onClick={() => { setProblemIdx(i); setSelected(new Set()); setSubmitted(false); setStage("talk"); setScratch(""); setRevealedApproach(false); }}
          >
            <span style={{ fontSize: "0.74rem" }}>{i + 1}. {p.title}</span>
          </PillButton>
        ))}
      </div>

      {/* Problem statement */}
      <Card>
        <div style={{ fontSize: "0.72rem", fontWeight: 700, color: C.textMuted, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 6 }}>
          Problem
        </div>
        <div style={{ fontWeight: 700, fontSize: "1rem", color: C.text, marginBottom: 6 }}>{problem.title}</div>
        <div style={{ fontSize: "0.88rem", color: C.textSecondary, lineHeight: 1.6 }}>{problem.statement}</div>
      </Card>

      {/* Pattern palette */}
      <Card>
        <div style={{ fontSize: "0.72rem", fontWeight: 700, color: C.textMuted, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 8 }}>
          Select all applicable patterns
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 6 }}>
          {PATTERNS.map((p) => {
            const chosen = selected.has(p.id);
            const isCorrect = correctSet.has(p.id);
            const showRight = submitted && isCorrect;
            const showWrong = submitted && chosen && !isCorrect;
            const showMissed = submitted && !chosen && isCorrect;
            return (
              <button
                key={p.id}
                onClick={() => toggle(p.id)}
                disabled={submitted}
                title={p.hint}
                style={{
                  padding: "8px 10px", borderRadius: 8,
                  border: `2px solid ${showRight ? C.success : showWrong ? C.danger : showMissed ? WARNING_COLOR : chosen ? p.color : C.border}`,
                  background: showRight ? `${C.success}14`
                            : showWrong ? `${C.danger}14`
                            : showMissed ? `${WARNING_COLOR}14`
                            : chosen ? `${p.color}1a`
                            : C.bg,
                  color: chosen ? C.text : C.textSecondary,
                  fontWeight: 600, fontSize: "0.78rem",
                  cursor: submitted ? "default" : "pointer",
                  textAlign: "left",
                  transition: "all 0.2s ease",
                  fontFamily: C.heading,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 6 }}>
                  <span style={{ fontWeight: 700, fontSize: "0.8rem", color: chosen ? p.color : C.text }}>{p.label}</span>
                  {showRight && <span style={{ fontSize: "0.7rem", color: C.successDark }}>✓</span>}
                  {showWrong && <span style={{ fontSize: "0.7rem", color: C.dangerDark }}>✗</span>}
                  {showMissed && <span style={{ fontSize: "0.7rem", color: WARNING_DARK }}>missed</span>}
                </div>
                <div style={{ fontSize: "0.7rem", color: C.textMuted, marginTop: 3, lineHeight: 1.4 }}>{p.hint}</div>
              </button>
            );
          })}
        </div>
        <div style={{ display: "flex", gap: 8, marginTop: 10, flexWrap: "wrap", alignItems: "center" }}>
          {!submitted ? (
            <button
              onClick={submit}
              disabled={selected.size === 0}
              style={{
                padding: "7px 16px",
                borderRadius: 8,
                fontSize: "0.78rem",
                fontWeight: 700,
                border: "none",
                background: C.text,
                color: "#fff",
                cursor: selected.size === 0 ? "not-allowed" : "pointer",
                opacity: selected.size === 0 ? 0.5 : 1,
                fontFamily: C.heading,
              }}
            >
              Submit selection
            </button>
          ) : (
            <>
              <span style={{
                padding: "5px 12px", borderRadius: 6, fontSize: "0.8rem", fontWeight: 700,
                background: correct ? `${C.success}14` : `${WARNING_COLOR}14`,
                color: correct ? C.successDark : WARNING_DARK,
                border: `1px solid ${correct ? C.success : WARNING_COLOR}`,
                fontFamily: C.heading,
              }}>
                {correct ? "Exact match" : "Partial - see highlights"}
              </span>
              <button
                onClick={() => setRevealedApproach((r) => !r)}
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
                {revealedApproach ? "Hide approaches" : "Show approaches"}
              </button>
            </>
          )}
        </div>
      </Card>

      {/* Approaches */}
      {submitted && revealedApproach && (
        <Card>
          <div style={{ fontSize: "0.72rem", fontWeight: 700, color: C.textMuted, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 10 }}>
            Approaches (side-by-side)
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: 10 }}>
            {problem.approaches.map((a, i) => (
              <div key={i} style={{
                padding: 12, borderRadius: 10,
                border: `2px solid ${a.best ? C.success : C.border}`,
                background: a.best ? `${C.success}10` : C.bg
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 }}>
                  <span style={{ fontWeight: 700, fontSize: "0.88rem", color: C.text }}>{a.name}</span>
                  {a.best && <span style={{ fontSize: "0.65rem", fontWeight: 700, color: C.successDark, background: `${C.success}24`, padding: "2px 6px", borderRadius: 4 }}>optimal</span>}
                </div>
                <div style={{ fontSize: "0.7rem", color: A, fontFamily: C.mono, marginBottom: 6, fontWeight: 700 }}>
                  {a.complexity}
                </div>
                <div style={{ fontSize: "0.78rem", color: C.textSecondary, lineHeight: 1.5 }}>{a.sketch}</div>
              </div>
            ))}
          </div>
        </Card>
      )}

      {/* Interview stages */}
      <Card>
        <div style={{ fontSize: "0.72rem", fontWeight: 700, color: C.textMuted, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 8 }}>
          Interview Mode
        </div>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 10 }}>
          {STAGES.filter((s) => s.id !== "done").map((s, i) => (
            <PillButton key={s.id} color={A} active={stage === s.id} onClick={() => setStage(s.id)}>
              <span style={{ fontSize: "0.72rem", opacity: i > stageIdx && stage !== "done" ? 0.6 : 1 }}>{s.label}</span>
            </PillButton>
          ))}
        </div>
        {currentStage && (
          <div style={{
            padding: 12, borderRadius: 8,
            background: `${A}14`,
            fontSize: "0.86rem", color: C.text, marginBottom: 10
          }}>
            {currentStage.prompt}
          </div>
        )}
        <textarea
          value={scratch}
          onChange={(e) => setScratch(e.target.value)}
          placeholder="Type your reasoning here… (not saved - for practice only)"
          rows={4}
          style={{
            width: "100%", padding: 10, borderRadius: 8,
            border: `1px solid ${C.border}`, background: C.bg,
            fontFamily: C.heading, fontSize: "0.85rem", color: C.text, resize: "vertical",
            outline: "none",
          }}
        />
        {stage === "edges" && (
          <div style={{
            marginTop: 8, padding: 10, borderRadius: 8,
            background: `${WARNING_COLOR}14`, border: `1px solid ${WARNING_COLOR}55`,
            fontSize: "0.8rem", color: C.text
          }}>
            <div style={{ fontWeight: 700, color: WARNING_DARK, marginBottom: 4 }}>Expected edge cases</div>
            <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.5 }}>
              {problem.edges.map((e, i) => <li key={i}>{e}</li>)}
            </ul>
          </div>
        )}
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 10, flexWrap: "wrap", gap: 8 }}>
          <button
            onClick={() => setStage(STAGES[Math.max(0, stageIdx - 1)].id)}
            disabled={stageIdx === 0}
            style={{
              padding: "6px 14px",
              borderRadius: 8,
              fontSize: "0.78rem",
              fontWeight: 700,
              border: `1px solid ${C.border}`,
              background: C.bg,
              color: C.textSecondary,
              cursor: stageIdx === 0 ? "not-allowed" : "pointer",
              opacity: stageIdx === 0 ? 0.5 : 1,
              fontFamily: C.heading,
            }}
          >← Previous stage</button>
          <button
            onClick={() => setStage(STAGES[Math.min(STAGES.length - 1, stageIdx + 1)].id)}
            disabled={stageIdx >= STAGES.length - 1}
            style={{
              padding: "7px 16px",
              borderRadius: 8,
              fontSize: "0.78rem",
              fontWeight: 700,
              border: "none",
              background: C.text,
              color: "#fff",
              cursor: stageIdx >= STAGES.length - 1 ? "not-allowed" : "pointer",
              opacity: stageIdx >= STAGES.length - 1 ? 0.5 : 1,
              fontFamily: C.heading,
            }}
          >Next stage →</button>
        </div>
      </Card>

      <button
        onClick={nextProblem}
        style={{
          padding: "8px 18px",
          borderRadius: 8,
          fontSize: "0.82rem",
          fontWeight: 700,
          border: "none",
          background: C.text,
          color: "#fff",
          cursor: "pointer",
          alignSelf: "flex-start",
          fontFamily: C.heading,
        }}
      >
        → Next problem
      </button>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Learn                                                              */
/* ------------------------------------------------------------------ */

function LearnTab() {
  const sections = [
    { title: "Pattern recognition = fast solving", body: "Senior engineers don't 'invent' a solution - they pattern-match. After you've seen 200 problems, you recognize 'sum-to-target in sorted array' as two-pointer instantly. The art is cataloguing clues: sorted? → binary search / two-pointer. Subarray? → sliding window / prefix sums. Optimal count? → DP." },
    { title: "One problem, many approaches", body: "Most problems admit 2–4 valid approaches with different trade-offs. Interviews reward listing them and explaining why you'd pick the best. 'Brute force first, then optimize' is a conversation starter - never skip step one." },
    { title: "Interview mode, 5 stages", body: "(1) Restate + clarify. (2) Pseudocode an approach. (3) Analyze time & space. (4) Walk edge cases. (5) Optimize or discuss alternatives. Miss any stage and you lose signal - even with a correct solution." },
    { title: "What to memorize", body: "Templates for each pattern (sliding window, BFS, DFS, DP 1-D & 2-D, binary search on answer, monotonic stack, union-find, trie). Memorize the skeleton, parameterize the body. Now your job is just to recognize which template fits." },
  ];
  return (
    <div style={{ fontFamily: C.heading, display: "flex", flexDirection: "column", gap: 14 }}>
      <div>
        <SectionEyebrow color={A}>Pattern recognition</SectionEyebrow>
        <SectionTitle>Match the problem to a template within seconds</SectionTitle>
        <Lede>
          Your brain is a look-up table indexed by problem clues. This lesson is the exercise that builds the index. By the end, a glance at a new problem should surface 1–3 candidate patterns within seconds - then you pick, code, and verify.
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
/*  Insight                                                            */
/* ------------------------------------------------------------------ */

function InsightTab() {
  return (
    <div style={{ fontFamily: C.heading, display: "flex", flexDirection: "column", gap: 12 }}>
      <Card>
        <SubHeading>The &ldquo;clue → pattern&rdquo; cheat sheet</SubHeading>
        <ul style={{ fontSize: "0.86rem", color: C.textSecondary, lineHeight: 1.7, paddingLeft: 20, margin: 0 }}>
          <li>&ldquo;sorted array&rdquo; or &ldquo;log-n hint&rdquo; → binary search / two-pointer.</li>
          <li>&ldquo;contiguous subarray / substring&rdquo; → sliding window, prefix sums.</li>
          <li>&ldquo;minimum number of steps&rdquo; on a grid → BFS.</li>
          <li>&ldquo;count the ways&rdquo; / &ldquo;max value&rdquo; / &ldquo;can we reach&rdquo; → DP.</li>
          <li>&ldquo;next greater / smaller&rdquo; → monotonic stack.</li>
          <li>&ldquo;parentheses / matching&rdquo; → stack.</li>
          <li>&ldquo;overlapping intervals&rdquo; → sort + sweep / greedy.</li>
          <li>&ldquo;shortest weighted path&rdquo; (non-negative) → Dijkstra.</li>
          <li>&ldquo;connectivity / components&rdquo; → union-find or DFS.</li>
          <li>&ldquo;seen this value before?&rdquo; → hash set/map.</li>
        </ul>
      </Card>
      <Card>
        <SubHeading>Why communicate, not just solve</SubHeading>
        <p style={{ fontSize: "0.88rem", color: C.textSecondary, lineHeight: 1.6, margin: 0 }}>
          Interviewers rank candidates on <em>signal per unit time</em>. Talking through the pattern tree (&ldquo;this could be sliding window because…, or binary search on answer because…&rdquo;) produces signal even before you code. A silent coder who happens to get the right answer scores lower than a communicator who happens to have a minor bug.
        </p>
      </Card>
      <Card>
        <SubHeading>Next steps after Level 8</SubHeading>
        <p style={{ fontSize: "0.88rem", color: C.textSecondary, lineHeight: 1.6, margin: 0 }}>
          Practice 200+ problems across every pattern. Time-box them: 30 min for mediums, 45 min for hards. Redo missed problems after a week. Do mock interviews out loud - your tongue trips on &ldquo;I&apos;ll use a hash map to achieve O(n)&rdquo; the first few times, then becomes reflex.
        </p>
      </Card>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Activity                                                           */
/* ------------------------------------------------------------------ */

export default function DSA_L8_PatternRecognitionActivity() {
  const tabs: EngTabDef[] = [
    { id: "learn", label: "Learn", icon: <BookOpen className="w-4 h-4" />, content: <LearnTab /> },
    { id: "visualize", label: "Visualize", icon: <Play className="w-4 h-4" />, content: <VisualizeTab /> },
    { id: "try", label: "Try It", icon: <Target className="w-4 h-4" />, content: <PatternTrainer /> },
    { id: "insight", label: "Insight", icon: <Lightbulb className="w-4 h-4" />, content: <InsightTab /> },
  ];
  const quiz: EngQuizQuestion[] = [
    {
      question: "You see: 'Given a sorted array, find two numbers that sum to a target.' What's the cleanest pattern?",
      options: ["Sliding window", "DFS", "Two pointers from both ends", "Segment tree"],
      correctIndex: 2,
      explanation: "Sorted + pair sum = two pointers. Move left when sum too small, right when too large. O(n) time, O(1) space."
    },
    {
      question: "The problem statement says 'find the minimum number of X to achieve Y, where Y is monotonically easier as X grows.' Best pattern?",
      options: ["Binary search on the answer", "DP with 2-D table", "Union-find", "Greedy"],
      correctIndex: 0,
      explanation: "Monotonic feasibility over a parameter = binary search on the answer. Feasibility is the sub-routine you run at each mid."
    },
    {
      question: "Which pattern BEST fits 'find the longest substring with at most K distinct characters'?",
      options: ["Binary search", "Sliding window with a hashmap", "Trie", "Topological sort"],
      correctIndex: 1,
      explanation: "Contiguous substring + growing/shrinking constraint = sliding window. Hashmap tracks distinct-count in O(1) per step."
    },
    {
      question: "In a coding interview, you quickly solve the problem but forget to state complexity and edge cases. Typical outcome?",
      options: [
        "Top score - correctness is everything",
        "Mid score - a correct-but-silent solve is not full signal",
        "Fail automatically",
        "Extra points for speed",
      ],
      correctIndex: 1,
      explanation: "Interviews rank signal, not just correctness. Talking through complexity and edge cases is expected of strong candidates."
    },
  ];
  return (
    <EngineeringLessonShell
      title="Comprehensive Pattern Recognition"
      level={8}
      lessonNumber={6}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="Very high - the capstone skill for interview performance"
      nextLessonHint="You have completed the DSA track. Return to the engineering dashboard."
    />
  );
}

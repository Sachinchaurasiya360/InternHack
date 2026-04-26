import { useMemo, useState } from "react";
import { BookOpen, Lightbulb, Play, Target } from "lucide-react";
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

/* ------------------------------------------------------------------ */
/*  Pattern palette                                                    */
/* ------------------------------------------------------------------ */

type Pattern =
  | "sliding-window" | "two-pointers" | "binary-search" | "bfs" | "dfs"
  | "dp" | "greedy" | "stack-queue" | "hashing" | "divide-conquer";

const PATTERNS: { id: Pattern; label: string; color: string; hint: string }[] = [
  { id: "sliding-window", label: "Sliding Window",    color: "#8b5cf6", hint: "contiguous subarray/substring with a moving constraint" },
  { id: "two-pointers",   label: "Two Pointers",      color: "#06b6d4", hint: "sorted array, pair/triple with a target, in-place rearrange" },
  { id: "binary-search",  label: "Binary Search",     color: "#3b82f6", hint: "sorted data OR monotonic feasibility over an answer range" },
  { id: "bfs",            label: "BFS",               color: "#10b981", hint: "shortest path (unit weights), level-order, minimum steps" },
  { id: "dfs",            label: "DFS",               color: "#059669", hint: "exhaustive explore, connected components, cycles, backtracking" },
  { id: "dp",             label: "Dynamic Prog.",     color: "#f59e0b", hint: "optimal substructure + overlapping subproblems (count, min, max)" },
  { id: "greedy",         label: "Greedy",            color: "#fbbf24", hint: "local optimal choice proven to reach global optimum" },
  { id: "stack-queue",    label: "Stack / Queue",     color: "#ef4444", hint: "LIFO brackets / monotonic next-greater / BFS frontier" },
  { id: "hashing",        label: "Hashing",           color: "#ec4899", hint: "O(1) lookup, counting, de-duplication, 'seen' sets" },
  { id: "divide-conquer", label: "Divide & Conquer",  color: "#64748b", hint: "split in halves, solve, combine (merge sort, majority element)" },
];

const PALETTE_IDS = new Set<Pattern>(PATTERNS.map((p) => p.id));

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
  correctPatterns: Pattern[];
  approaches: Approach[];
  edges: string[];
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
      { name: "Hash map", complexity: "O(n) time, O(n) space", sketch: "For each i, check if target - nums[i] has been seen; else record nums[i] -> i.", best: true },
    ],
    edges: [
      "Duplicate values in the array (e.g. target = 2*x)",
      "Negative numbers",
      "Empty array or fewer than 2 elements",
    ],
  },
  {
    id: "shortest-bridge",
    title: "Shortest Bridge Between Two Islands",
    statement: "Binary grid with exactly two islands (connected 4-directional groups of 1s). Return the minimum number of 0-cells to flip so the two islands are connected.",
    correctPatterns: ["dfs", "bfs"],
    approaches: [
      { name: "Brute force", complexity: "O((RC)²)", sketch: "For every pair of island cells, BFS the grid — too slow." },
      { name: "DFS mark one island + multi-source BFS", complexity: "O(R*C)", sketch: "DFS flood-fill island A into a queue. Then multi-source BFS from that queue; first time you touch a cell of island B is the answer.", best: true },
    ],
    edges: [
      "Islands that touch diagonally (do they count as connected? clarify)",
      "One island is a single cell",
      "Minimum answer is 1 (islands already adjacent via 1 water cell)",
    ],
  },
  {
    id: "min-meeting-rooms",
    title: "Minimum Meeting Rooms",
    statement: "Given start/end times of meetings, return the minimum number of rooms required so no two meetings in the same room overlap.",
    correctPatterns: ["greedy", "stack-queue"],
    approaches: [
      { name: "Simulate hours", complexity: "O(n * maxTime)", sketch: "Tick time -> track active count — depends on time range, not scalable." },
      { name: "Events / sweep line", complexity: "O(n log n)", sketch: "Split each meeting into +1 (start) and -1 (end) events, sort, track running sum max.", best: true },
      { name: "Min-heap of end times", complexity: "O(n log n)", sketch: "Sort by start. Push end into min-heap; if next start >= heap top end, pop (reuse a room). Answer = max heap size." },
    ],
    edges: [
      "Meetings that end exactly when another starts — do they share a room?",
      "All meetings overlap (answer = n)",
      "Single meeting",
    ],
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
      "All elements equal — answer = 1 (strict increase)",
      "Strictly decreasing — answer = 1",
      "Duplicates scattered",
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Two-Sum walkthrough for Visualize tab                             */
/* ------------------------------------------------------------------ */

const PSEUDO_TWOSUM = [
  "function twoSum(nums, target):",
  "  seen = {}",
  "  for i in 0..n-1:",
  "    need = target - nums[i]",
  "    if need in seen:",
  "      return [seen[need], i]",
  "    seen[nums[i]] = i",
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
    f.push({ line: 3, vars: { i, [`nums[i]`]: nums[i], need }, flashKey: "need", message: `i=${i}: need = ${target} - ${nums[i]} = ${need}.`, i, seen: { ...seen }, found: null });
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

function parseNumsTarget(s: string): { nums: number[]; target: number } | null {
  const parts = s.split("|");
  if (parts.length !== 2) return null;
  const nums = parts[0].split(/[,\s]+/).map(Number).filter((x) => Number.isFinite(x));
  const target = Number(parts[1].trim());
  if (!nums.length || !Number.isFinite(target)) return null;
  return { nums, target };
}

function TwoSumTraceViz({ frame, nums, target }: { frame: TraceFrame; nums: number[]; target: number }) {
  return (
    <div className="flex flex-col gap-4">
      <div className="grid gap-4" style={{ gridTemplateColumns: "minmax(0,1fr) 220px" }}>
        <div>
          <div className="text-[10px] font-mono uppercase tracking-widest text-stone-500 mb-2">Array (target = {target})</div>
          <div className="flex gap-1.5 flex-wrap">
            {nums.map((v, idx) => {
              const isCur = idx === frame.i;
              const isFound = frame.found && (frame.found[0] === idx || frame.found[1] === idx);
              return (
                <div
                  key={idx}
                  className="min-w-12 px-2.5 py-2 text-center rounded-md font-mono font-bold text-base transition-all"
                  style={{
                    border: `2px solid ${isFound ? THEME.success : isCur ? THEME.accent : THEME.border}`,
                    background: isFound ? "#dcfce7" : isCur ? `${THEME.accent}22` : THEME.bg,
                    color: isFound ? "#166534" : isCur ? THEME.accent : THEME.text,
                  }}
                >
                  <div className="text-[10px] text-stone-400 font-normal">[{idx}]</div>
                  {v}
                </div>
              );
            })}
          </div>
          {frame.found && (
            <div className="mt-3 px-3 py-2.5 rounded-md bg-lime-50 dark:bg-lime-400/10 border-2 border-lime-400 text-sm text-stone-700 dark:text-stone-300">
              Answer: indices{" "}
              <span className="font-mono font-bold text-lime-700 dark:text-lime-400">
                [{frame.found[0]}, {frame.found[1]}]
              </span>
              {" "} — nums[{frame.found[0]}] + nums[{frame.found[1]}] = {nums[frame.found[0]]} + {nums[frame.found[1]]} = {target}.
            </div>
          )}
        </div>
        <div className="border border-stone-200 dark:border-white/10 rounded-md p-3 bg-stone-50 dark:bg-stone-950">
          <div className="text-[10px] font-mono uppercase tracking-widest text-stone-500 mb-2">Hash 'seen'</div>
          {Object.keys(frame.seen).length === 0 ? (
            <div className="text-xs text-stone-400 italic">empty</div>
          ) : (
            <div className="flex flex-col gap-1.5">
              {Object.entries(frame.seen).map(([k, v]) => (
                <div key={k} className="flex items-center justify-between px-2.5 py-1 rounded border border-stone-200 dark:border-white/10 bg-white dark:bg-stone-900 font-mono text-xs font-bold">
                  <span style={{ color: THEME.accent }}>{k}</span>
                  <span className="text-stone-400">-&gt;</span>
                  <span className="text-stone-700 dark:text-stone-300">{v}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <Callout>{frame.message}</Callout>
    </div>
  );
}

function VisualizeTab() {
  const [inputStr, setInputStr] = useState("2,7,11,15 | 9");
  const parsed = parseNumsTarget(inputStr) ?? { nums: [2, 7, 11, 15], target: 9 };
  const frames = useMemo(() => buildTwoSumFrames(parsed.nums, parsed.target), [parsed]);
  const player = useStepPlayer(frames);
  const frame = player.current;

  return (
    <AlgoCanvas
      title="Live Walkthrough — Two Sum (hash-map approach)"
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
      pseudocode={<PseudocodePanel lines={PSEUDO_TWOSUM} activeLine={frame?.line} />}
      variables={<VariablesPanel vars={frame?.vars ?? {}} flashKeys={frame?.flashKey ? [frame.flashKey] : []} />}
    >
      {frame ? (
        <TwoSumTraceViz frame={frame} nums={parsed.nums} target={parsed.target} />
      ) : (
        <Callout>Press play to step through the algorithm.</Callout>
      )}
    </AlgoCanvas>
  );
}

/* ------------------------------------------------------------------ */
/*  Pattern Trainer (Try It tab)                                       */
/* ------------------------------------------------------------------ */

type Stage = "talk" | "code" | "analyze" | "edges" | "optimize" | "done";

const STAGES: { id: Stage; label: string; prompt: string }[] = [
  { id: "talk",     label: "1. Talk through",            prompt: "Restate the problem. Name the patterns that apply. Explain why." },
  { id: "code",     label: "2. Pseudocode",              prompt: "Sketch the approach in pseudocode. Focus on the data structure and the loop structure." },
  { id: "analyze",  label: "3. Analyze complexity",      prompt: "Time and space — best, average, worst. Justify the dominating operation." },
  { id: "edges",    label: "4. Handle edge cases",       prompt: "Empty input? Single element? All duplicates? Integer overflow? Negative numbers?" },
  { id: "optimize", label: "5. Optimize / alternatives", prompt: "Can you go faster? Trade space for time? Are there multiple valid approaches?" },
  { id: "done",     label: "Done",                        prompt: "Review your reasoning before moving to the next problem." },
];

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
    return [...correctSet].every((p) => selected.has(p)) && [...selected].every((p) => correctSet.has(p));
  }, [submitted, selected, correctSet]);

  function nextProblem() {
    setProblemIdx((idx) => (idx + 1) % PROBLEMS.length);
    setSelected(new Set()); setSubmitted(false); setStage("talk"); setScratch(""); setRevealedApproach(false);
  }

  const stageIdx = STAGES.findIndex((s) => s.id === stage);
  const currentStage = STAGES[stageIdx];

  return (
    <div className="flex flex-col gap-4">
      <Callout>
        Pattern-recognition trainer. Read the problem, pick every applicable pattern, then walk through the interview stages.
      </Callout>

      {/* Problem selector */}
      <div className="flex gap-2 flex-wrap">
        {PROBLEMS.map((p, i) => (
          <PillButton
            key={p.id}
            active={i === problemIdx}
            onClick={() => { setProblemIdx(i); setSelected(new Set()); setSubmitted(false); setStage("talk"); setScratch(""); setRevealedApproach(false); }}
          >
            <span className="text-[11px]">{i + 1}. {p.title}</span>
          </PillButton>
        ))}
      </div>

      {/* Problem statement */}
      <Card>
        <div className="text-[10px] font-mono uppercase tracking-widest text-stone-500 mb-1">Problem</div>
        <div className="text-base font-bold text-stone-900 dark:text-stone-50 mb-2">{problem.title}</div>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">{problem.statement}</p>
      </Card>

      {/* Pattern palette */}
      <Card>
        <div className="text-[10px] font-mono uppercase tracking-widest text-stone-500 mb-3">Select all applicable patterns</div>
        <div className="grid gap-2" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))" }}>
          {PATTERNS.map((p) => {
            const chosen = selected.has(p.id);
            const isCorrect = correctSet.has(p.id);
            const showRight = submitted && isCorrect;
            const showWrong = submitted && chosen && !isCorrect;
            const showMissed = submitted && !chosen && isCorrect;
            return (
              <button
                key={p.id}
                type="button"
                onClick={() => toggle(p.id)}
                disabled={submitted}
                title={p.hint}
                className="text-left p-2.5 rounded-md transition-all cursor-pointer disabled:cursor-default"
                style={{
                  border: `2px solid ${showRight ? THEME.success : showWrong ? THEME.danger : showMissed ? "#f59e0b" : chosen ? p.color : THEME.border}`,
                  background: showRight ? "#dcfce7" : showWrong ? "#fee2e2" : showMissed ? "#fef9c3" : chosen ? `${p.color}1a` : THEME.bg,
                }}
              >
                <div className="flex items-center justify-between gap-1 mb-0.5">
                  <span className="text-xs font-bold" style={{ color: chosen ? p.color : THEME.text }}>{p.label}</span>
                  {showRight && <span className="text-[10px] text-lime-700">correct</span>}
                  {showWrong && <span className="text-[10px] text-rose-700">wrong</span>}
                  {showMissed && <span className="text-[10px] text-amber-700">missed</span>}
                </div>
                <div className="text-[10px] text-stone-500 leading-snug">{p.hint}</div>
              </button>
            );
          })}
        </div>
        <div className="flex gap-2 mt-3 flex-wrap items-center">
          {!submitted ? (
            <button
              type="button"
              onClick={submit}
              disabled={selected.size === 0}
              className="px-4 py-2 rounded-md text-xs font-mono uppercase tracking-widest border transition-colors disabled:opacity-50 disabled:cursor-not-allowed bg-stone-900 dark:bg-stone-50 text-stone-50 dark:text-stone-900 border-stone-900 dark:border-stone-50 hover:bg-stone-700 dark:hover:bg-stone-200 cursor-pointer"
            >
              submit selection
            </button>
          ) : (
            <>
              <span
                className="px-3 py-1 rounded-md text-xs font-bold"
                style={{
                  background: correct ? "#dcfce7" : "#fef9c3",
                  color: correct ? "#166534" : "#92400e",
                  border: `1px solid ${correct ? THEME.success : "#f59e0b"}`,
                }}
              >
                {correct ? "Exact match" : "Partial — see highlights"}
              </span>
              <button
                type="button"
                onClick={() => setRevealedApproach((r) => !r)}
                className="px-3 py-1.5 rounded-md border border-stone-200 dark:border-white/10 bg-stone-50 dark:bg-stone-950 text-stone-600 dark:text-stone-400 text-xs font-medium cursor-pointer hover:border-stone-400"
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
          <div className="text-[10px] font-mono uppercase tracking-widest text-stone-500 mb-3">Approaches (side-by-side)</div>
          <div className="grid gap-3" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
            {problem.approaches.map((a, i) => (
              <div
                key={i}
                className="p-3 rounded-md"
                style={{
                  border: `2px solid ${a.best ? THEME.success : THEME.border}`,
                  background: a.best ? "#f0fdf4" : THEME.bg,
                }}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-bold text-stone-900 dark:text-stone-50">{a.name}</span>
                  {a.best && <span className="text-[10px] font-bold text-lime-700 bg-lime-100 dark:bg-lime-400/20 px-1.5 py-0.5 rounded">optimal</span>}
                </div>
                <div className="text-[10px] font-mono font-bold text-lime-700 dark:text-lime-400 mb-1.5">{a.complexity}</div>
                <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">{a.sketch}</p>
              </div>
            ))}
          </div>
        </Card>
      )}

      {/* Interview stages */}
      <Card>
        <div className="text-[10px] font-mono uppercase tracking-widest text-stone-500 mb-2">Interview Mode</div>
        <div className="flex gap-1.5 flex-wrap mb-3">
          {STAGES.filter((s) => s.id !== "done").map((s, i) => (
            <PillButton key={s.id} active={stage === s.id} onClick={() => setStage(s.id)}>
              <span className="text-[10px]" style={{ opacity: i > stageIdx && stage !== "done" ? 0.6 : 1 }}>{s.label}</span>
            </PillButton>
          ))}
        </div>
        {currentStage && (
          <div className="p-3 rounded-md mb-3 text-sm text-stone-700 dark:text-stone-300" style={{ background: `${THEME.accent}18` }}>
            {currentStage.prompt}
          </div>
        )}
        <textarea
          value={scratch}
          onChange={(e) => setScratch(e.target.value)}
          placeholder="Type your reasoning here... (not saved — for practice only)"
          rows={4}
          className="w-full px-3 py-2 rounded-md border border-stone-200 dark:border-white/10 bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-50 text-sm resize-y focus:outline-none focus:border-stone-400"
        />
        {stage === "edges" && (
          <div className="mt-2 p-3 rounded-md bg-amber-50 dark:bg-amber-400/10 border border-amber-300 dark:border-amber-400/30 text-sm">
            <div className="font-bold text-amber-800 dark:text-amber-300 mb-1.5">Expected edge cases</div>
            <ul className="list-disc pl-5 space-y-0.5 text-stone-700 dark:text-stone-300">
              {problem.edges.map((e, i) => <li key={i}>{e}</li>)}
            </ul>
          </div>
        )}
        <div className="flex justify-between mt-3 flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setStage(STAGES[Math.max(0, stageIdx - 1)].id)}
            disabled={stageIdx === 0}
            className="px-3 py-1.5 rounded-md border border-stone-200 dark:border-white/10 bg-stone-50 dark:bg-stone-950 text-stone-600 dark:text-stone-400 text-xs font-medium cursor-pointer hover:border-stone-400 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous stage
          </button>
          <button
            type="button"
            onClick={() => setStage(STAGES[Math.min(STAGES.length - 1, stageIdx + 1)].id)}
            disabled={stageIdx >= STAGES.length - 1}
            className="px-4 py-1.5 rounded-md bg-stone-900 dark:bg-stone-50 text-stone-50 dark:text-stone-900 text-xs font-mono uppercase tracking-widest cursor-pointer hover:bg-stone-700 dark:hover:bg-stone-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next stage
          </button>
        </div>
      </Card>

      <button
        type="button"
        onClick={nextProblem}
        className="self-start px-4 py-2 rounded-md bg-stone-900 dark:bg-stone-50 text-stone-50 dark:text-stone-900 text-xs font-mono uppercase tracking-widest cursor-pointer hover:bg-stone-700 dark:hover:bg-stone-200"
      >
        Next problem
      </button>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Learn                                                              */
/* ------------------------------------------------------------------ */

function LearnTab() {
  const sections = [
    { title: "Pattern recognition = fast solving", body: "Senior engineers don't 'invent' a solution — they pattern-match. After you've seen 200 problems, you recognize 'sum-to-target in sorted array' as two-pointer instantly. The art is cataloguing clues: sorted? -> binary search / two-pointer. Subarray? -> sliding window / prefix sums. Optimal count? -> DP." },
    { title: "One problem, many approaches", body: "Most problems admit 2-4 valid approaches with different trade-offs. Interviews reward listing them and explaining why you'd pick the best. 'Brute force first, then optimize' is a conversation starter — never skip step one." },
    { title: "Interview mode, 5 stages", body: "(1) Restate + clarify. (2) Pseudocode an approach. (3) Analyze time and space. (4) Walk edge cases. (5) Optimize or discuss alternatives. Miss any stage and you lose signal — even with a correct solution." },
    { title: "What to memorize", body: "Templates for each pattern (sliding window, BFS, DFS, DP 1-D and 2-D, binary search on answer, monotonic stack, union-find, trie). Memorize the skeleton, parameterize the body. Now your job is just to recognize which template fits." },
  ];
  return (
    <div className="flex flex-col gap-5">
      <div>
        <SectionEyebrow>pattern recognition</SectionEyebrow>
        <SectionTitle>Match the problem to a template within seconds</SectionTitle>
        <Lede>
          Your brain is a look-up table indexed by problem clues. This lesson is the exercise that builds the index. By the end, a glance at a new problem should surface 1-3 candidate patterns within seconds — then you pick, code, and verify.
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
/*  Insight                                                            */
/* ------------------------------------------------------------------ */

function InsightTab() {
  return (
    <div className="flex flex-col gap-4">
      <Card>
        <SubHeading>The "clue to pattern" cheat sheet</SubHeading>
        <ul className="list-disc pl-5 space-y-1 text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          <li>"sorted array" or "log-n hint" — binary search / two-pointer.</li>
          <li>"contiguous subarray / substring" — sliding window, prefix sums.</li>
          <li>"minimum number of steps" on a grid — BFS.</li>
          <li>"count the ways" / "max value" / "can we reach" — DP.</li>
          <li>"next greater / smaller" — monotonic stack.</li>
          <li>"parentheses / matching" — stack.</li>
          <li>"overlapping intervals" — sort + sweep / greedy.</li>
          <li>"shortest weighted path" (non-negative) — Dijkstra.</li>
          <li>"connectivity / components" — union-find or DFS.</li>
          <li>"seen this value before?" — hash set/map.</li>
        </ul>
      </Card>
      <Card>
        <SubHeading>Why communicate, not just solve</SubHeading>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          Interviewers rank candidates on signal per unit time. Talking through the pattern tree ("this could be sliding window because..., or binary search on answer because...") produces signal even before you code. A silent coder who happens to get the right answer scores lower than a communicator who happens to have a minor bug.
        </p>
      </Card>
      <Card>
        <SubHeading>Next steps after Level 8</SubHeading>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          Practice 200+ problems across every pattern. Time-box them: 30 min for mediums, 45 min for hards. Redo missed problems after a week. Do mock interviews out loud — your tongue trips on "I'll use a hash map to achieve O(n)" the first few times, then becomes reflex.
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

export default function L8_PatternRecognition({ onQuizComplete }: Props) {
  const tabs: LessonTabDef[] = [
    { id: "learn", label: "Learn", icon: <BookOpen className="w-4 h-4" />, content: <LearnTab /> },
    { id: "visualize", label: "Visualize", icon: <Play className="w-4 h-4" />, content: <VisualizeTab /> },
    { id: "try", label: "Try It", icon: <Target className="w-4 h-4" />, content: <PatternTrainer /> },
    { id: "insight", label: "Insight", icon: <Lightbulb className="w-4 h-4" />, content: <InsightTab /> },
  ];

  const quiz: LessonQuizQuestion[] = [
    {
      question: "You see: 'Given a sorted array, find two numbers that sum to a target.' What's the cleanest pattern?",
      options: ["Sliding window", "DFS", "Two pointers from both ends", "Segment tree"],
      correctIndex: 2,
      explanation: "Sorted + pair sum = two pointers. Move left when sum too small, right when too large. O(n) time, O(1) space.",
    },
    {
      question: "The problem statement says 'find the minimum number of X to achieve Y, where Y is monotonically easier as X grows.' Best pattern?",
      options: ["Binary search on the answer", "DP with 2-D table", "Union-find", "Greedy"],
      correctIndex: 0,
      explanation: "Monotonic feasibility over a parameter = binary search on the answer. Feasibility is the sub-routine you run at each mid.",
    },
    {
      question: "Which pattern BEST fits 'find the longest substring with at most K distinct characters'?",
      options: ["Binary search", "Sliding window with a hashmap", "Trie", "Topological sort"],
      correctIndex: 1,
      explanation: "Contiguous substring + growing/shrinking constraint = sliding window. Hashmap tracks distinct-count in O(1) per step.",
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
      explanation: "Interviews rank signal, not just correctness. Talking through complexity and edge cases is expected of strong candidates.",
    },
  ];

  return (
    <LessonShell
      title="Pattern Recognition"
      level={8}
      lessonNumber={6}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="Very high - the capstone skill for interview performance"
      nextLessonHint=""
      onQuizComplete={onQuizComplete}
    />
  );
}

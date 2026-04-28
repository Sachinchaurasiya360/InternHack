import { useMemo, useState } from "react";
import { BookOpen, Lightbulb, Play, Target } from "lucide-react";
import {
  LessonShell,
  type LessonQuizQuestion,
  type LessonTabDef,
} from "../../../../../components/dsa-theory/LessonShell";
import {
  AlgoCanvas,
  PseudocodePanel,
  useStepPlayer,
  VariablesPanel,
} from "../../../../../components/dsa-theory/algo";
import {
  Callout,
  Card,
  CodeBlock,
  InlineCode,
  Lede,
  PillButton,
  SectionEyebrow,
  SectionTitle,
  SubHeading,
  THEME,
} from "../../../../../components/dsa-theory/primitives";

const PRACTICE_TOPIC_SLUG: string | null = null;

/* ------------------------------------------------------------------ */
/*  Frame type                                                          */
/* ------------------------------------------------------------------ */

interface CaseFrame {
  line: number;
  vars: Record<string, string | number | undefined>;
  message: string;
  highlight: number[];
  result?: number;
}

/* ------------------------------------------------------------------ */
/*  "Find missing number in 0..n" algorithm                            */
/*  Expected sum = n*(n+1)/2; actual sum = sum of array; missing = diff  */
/* ------------------------------------------------------------------ */

function buildCase(arr: number[]): CaseFrame[] {
  const f: CaseFrame[] = [];
  const n = arr.length; // array length = n, so complete range is 0..n (n+1 values), one missing

  f.push({
    line: 0,
    vars: { arr: `[${arr.join(", ")}]`, n },
    message: `Input: [${arr.join(", ")}]. We need to find which number from 0 to ${n} is missing.`,
    highlight: [],
  });

  // Edge case: empty
  if (arr.length === 0) {
    f.push({
      line: 1,
      vars: { n: 0 },
      message: "The array is empty. The range is 0..0, so the only possible missing number is 0.",
      highlight: [],
    });
    f.push({
      line: 4,
      vars: { expected: 0, actual: 0, missing: 0 },
      message: "expected = 0*(0+1)/2 = 0. actual sum = 0. missing = 0 - 0 = 0.",
      highlight: [],
      result: 0,
    });
    return f;
  }

  // Step 1: compute expected sum
  const expected = (n * (n + 1)) / 2;
  f.push({
    line: 1,
    vars: { n, expected },
    message: `Step 1: expected sum = n*(n+1)/2 = ${n}*(${n + 1})/2 = ${expected}. This is the sum of 0 through ${n}.`,
    highlight: [],
  });

  // Step 2: compute actual sum
  let actual = 0;
  f.push({
    line: 2,
    vars: { n, expected, actual, i: 0 },
    message: "Step 2: start summing the actual array.",
    highlight: [],
  });
  for (let i = 0; i < arr.length; i++) {
    actual += arr[i];
    f.push({
      line: 2,
      vars: { n, expected, actual, i },
      message: `Add arr[${i}] = ${arr[i]}. Running sum = ${actual}.`,
      highlight: [i],
    });
  }

  // Step 3: subtract
  const missing = expected - actual;
  f.push({
    line: 3,
    vars: { expected, actual, missing },
    message: `Step 3: missing = expected - actual = ${expected} - ${actual} = ${missing}.`,
    highlight: [],
  });

  f.push({
    line: 4,
    vars: { missing },
    message: `Answer: the missing number is ${missing}.`,
    highlight: [],
    result: missing,
  });

  return f;
}

/* ------------------------------------------------------------------ */
/*  Preset cases                                                        */
/* ------------------------------------------------------------------ */

interface CasePreset {
  id: string;
  label: string;
  description: string;
  arr: number[];
}

const CASE_PRESETS: CasePreset[] = [
  { id: "normal", label: "Normal case", description: "Missing 2 in the middle", arr: [0, 1, 3, 4] },
  { id: "empty", label: "Empty array", description: "Edge case: no elements", arr: [] },
  { id: "single", label: "Single element", description: "Edge case: just [1]", arr: [1] },
  { id: "last", label: "Missing last", description: "Edge case: last number missing", arr: [0, 1, 2, 3] },
];

const MISSING_NUM_PSEUDO = [
  "function findMissing(arr):",
  "  n = arr.length",
  "  for i in arr: actual += i",
  "  missing = n*(n+1)/2 - actual",
  "  return missing",
];

/* ------------------------------------------------------------------ */
/*  Visualize                                                           */
/* ------------------------------------------------------------------ */

function VisualizeTab() {
  const [caseId, setCaseId] = useState("normal");
  const preset = CASE_PRESETS.find((c) => c.id === caseId) ?? CASE_PRESETS[0];
  const frames = useMemo(() => buildCase(preset.arr), [preset]);
  const player = useStepPlayer(frames, 900);
  const frame = player.current;

  return (
    <AlgoCanvas
      title="Find Missing Number, 4 edge cases"
      player={player}
      input={
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
              / test case
            </label>
            <div className="flex flex-col gap-1.5">
              {CASE_PRESETS.map((c) => (
                <PillButton
                  key={c.id}
                  active={caseId === c.id}
                  onClick={() => setCaseId(c.id)}
                  title={c.description}
                >
                  {c.label}
                </PillButton>
              ))}
            </div>
          </div>
          <div className="text-[10px] font-mono text-stone-500 leading-relaxed mt-1">
            {preset.description}
          </div>
        </div>
      }
      pseudocode={<PseudocodePanel lines={MISSING_NUM_PSEUDO} activeLine={frame?.line} />}
      variables={<VariablesPanel vars={frame?.vars ?? {}} flashKeys={["actual", "missing"]} />}
    >
      <div className="flex flex-col gap-4">
        <Callout>{frame?.message ?? "Press play to trace the algorithm."}</Callout>

        {/* Array visualization */}
        <div>
          <div className="text-[10px] font-mono uppercase tracking-widest text-stone-500 mb-2">
            / array
          </div>
          {preset.arr.length === 0 ? (
            <span className="text-xs text-stone-400 font-mono italic">[ empty ]</span>
          ) : (
            <div className="flex flex-wrap gap-1.5">
              {preset.arr.map((v, idx) => {
                const isHighlighted = frame?.highlight?.includes(idx);
                return (
                  <div key={idx} className="flex flex-col items-center gap-0.5">
                    <div
                      className="w-10 h-10 flex items-center justify-center rounded-md border text-sm font-mono font-bold transition-colors"
                      style={{
                        borderColor: isHighlighted ? THEME.accent : THEME.border,
                        background: isHighlighted ? "#ecfccb" : "#fafaf9",
                        color: isHighlighted ? THEME.accentDark : THEME.text,
                      }}
                    >
                      {v}
                    </div>
                    <div
                      className="text-[10px] font-mono tabular-nums"
                      style={{ color: THEME.textMuted }}
                    >
                      [{idx}]
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Result badge */}
        {frame?.result !== undefined && (
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
              / missing number
            </span>
            <span
              className="text-2xl font-bold font-mono tabular-nums"
              style={{ color: THEME.accent }}
            >
              {frame.result}
            </span>
          </div>
        )}
      </div>
    </AlgoCanvas>
  );
}

/* ------------------------------------------------------------------ */
/*  Learn                                                               */
/* ------------------------------------------------------------------ */

function LearnTab() {
  return (
    <div className="flex flex-col gap-5">
      <div>
        <SectionEyebrow>inputs, constraints & edge cases</SectionEyebrow>
        <SectionTitle>Half the battle is reading the problem carefully</SectionTitle>
        <Lede>
          Before writing a single line of code in an interview, you need to fully understand
          what the problem is asking. Most wrong solutions come from skipping this step.
        </Lede>
      </div>

      <Card>
        <SubHeading>Every problem has three things</SubHeading>
        <div className="flex flex-col gap-3 text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          <div>
            <p className="font-bold text-stone-900 dark:text-stone-50 mb-1">
              1. Inputs, what you are given
            </p>
            <p>
              The data your function receives. Could be an array of numbers, a string, a
              graph, or a single integer. Always name the type and shape.
            </p>
          </div>
          <div>
            <p className="font-bold text-stone-900 dark:text-stone-50 mb-1">
              2. Outputs, what you must return
            </p>
            <p>
              The data your function must produce. A number, a list, a yes/no answer. Be
              exact, "return the index, not the value" is a common gotcha.
            </p>
          </div>
          <div>
            <p className="font-bold text-stone-900 dark:text-stone-50 mb-1">
              3. Constraints (con-STRAYNTS), the rules
            </p>
            <p>
              The bounds on the input: how large can n be, are values always positive, can
              the input be empty? Constraints are a hidden hint about which algorithm to pick.
            </p>
          </div>
        </div>
      </Card>

      <Card>
        <SubHeading>Edge cases: the inputs that break naive code</SubHeading>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed mb-3">
          An edge case (also called a corner case) is a special input that sits at the
          boundary of normal behavior. Naive code often breaks on them. Always test these:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          <li>
            <strong className="text-stone-900 dark:text-stone-50">Empty input</strong>, an empty
            array, an empty string, n = 0.
          </li>
          <li>
            <strong className="text-stone-900 dark:text-stone-50">Single element</strong>, one item
            in the array, n = 1.
          </li>
          <li>
            <strong className="text-stone-900 dark:text-stone-50">All duplicates</strong>, every
            element is the same value.
          </li>
          <li>
            <strong className="text-stone-900 dark:text-stone-50">Negative numbers</strong>, does
            your code break if values are negative?
          </li>
          <li>
            <strong className="text-stone-900 dark:text-stone-50">Max-size input</strong>, what
            happens at the absolute largest allowed n?
          </li>
          <li>
            <strong className="text-stone-900 dark:text-stone-50">Already sorted / reversed</strong>{" "}
           , many sorting-based algorithms have bad worst cases here.
          </li>
        </ul>
      </Card>

      <Card>
        <SubHeading>Always ask the interviewer about constraints</SubHeading>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed mb-2">
          Before you code anything, ask these questions out loud:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          <li>What is the largest n I should handle?</li>
          <li>Are the values always integers? Can they be negative?</li>
          <li>Can the input be empty or null?</li>
          <li>Should I return the value or the index?</li>
          <li>Is there guaranteed to be a solution?</li>
        </ul>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed mt-3">
          Interviewers respect this. It shows you think before you code.
        </p>
      </Card>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Try It                                                              */
/* ------------------------------------------------------------------ */

function TryTab() {
  const problems = [
    {
      prompt: "Find the maximum value in an array. What are the edge cases?",
      snippet: "function findMax(arr):\n  max = arr[0]\n  for x in arr:\n    if x > max: max = x\n  return max",
      options: [
        "Only: when all values are the same",
        "Empty array (arr[0] crashes) and single element",
        "When values are negative",
        "No edge cases, this always works",
      ],
      answer: 1,
      explain:
        "If arr is empty, arr[0] crashes. If arr has one element, the loop runs once and returns it (correct, but worth verifying). Negative values are handled fine by the > comparison.",
    },
    {
      prompt: "A problem says 1 ≤ n ≤ 100,000. Which time complexity can you afford?",
      snippet: "# Constraints: 1 ≤ n ≤ 100,000\n# Time limit: 1 second",
      options: ["O(n²), that's about 10¹⁰ operations", "O(n log n), about 1.7 × 10⁶ operations", "O(n!), way too slow", "O(2ⁿ), way too slow"],
      answer: 1,
      explain:
        "n = 10⁵. O(n²) = 10¹⁰, far too slow (needs ~100 seconds). O(n log n) ≈ 1.7 × 10⁶, well within 1 second. Constraints reveal the target complexity.",
    },
    {
      prompt: "Problem: 'Return the median of an array.' What edge case is MOST important to handle?",
      snippet: "# Median: middle value of a sorted array.\n# For even length: average of two middle values.",
      options: [
        "All positive numbers",
        "Array with more than 3 elements",
        "Empty array (no median exists) and even vs odd length",
        "Array that is already sorted",
      ],
      answer: 2,
      explain:
        "An empty array has no median, you must decide whether to return null, throw, or handle it. Even-length arrays require averaging two elements, not just picking one. These are the two main edge cases.",
    },
    {
      prompt: "Which question is MOST useful to ask the interviewer about this problem: 'Find two numbers in an array that sum to target'?",
      snippet: "# Problem: given arr and target, return indices\n# of two numbers that add up to target.",
      options: [
        "'Should I use Python or JavaScript?'",
        "'Can the array be empty? Can the same element be used twice? Are there always exactly two solutions?'",
        "'Is this a trick question?'",
        "'Can I use a library function?'",
      ],
      answer: 1,
      explain:
        "Asking about empty input, reuse of elements, and whether a solution is guaranteed changes the algorithm. These are the classic constraints for the two-sum problem.",
    },
  ];
  const [picked, setPicked] = useState<(number | null)[]>(problems.map(() => null));

  return (
    <div className="flex flex-col gap-3">
      <Callout>
        Read each problem statement carefully. The edge cases and constraints are in the
        details.
      </Callout>
      {problems.map((p, i) => {
        const sel = picked[i];
        return (
          <Card key={i}>
            <p className="text-sm font-medium text-stone-800 dark:text-stone-200 mb-2">
              {p.prompt}
            </p>
            <CodeBlock className="mb-3">{p.snippet}</CodeBlock>
            <div className="flex flex-col gap-1.5">
              {p.options.map((o, idx) => {
                const correct = sel !== null && idx === p.answer;
                const wrong = sel !== null && idx === sel && idx !== p.answer;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => {
                      const v = [...picked];
                      v[i] = idx;
                      setPicked(v);
                    }}
                    className={`text-left px-3 py-2 rounded-md text-xs font-mono transition-colors cursor-pointer border ${
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
                <Callout>{p.explain}</Callout>
              </div>
            )}
          </Card>
        );
      })}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Insight                                                             */
/* ------------------------------------------------------------------ */

function InsightTab() {
  return (
    <div className="flex flex-col gap-4">
      <Card>
        <SubHeading>Constraints tell you which complexity is acceptable</SubHeading>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed mb-3">
          Modern computers execute roughly 10⁸ simple operations per second. Use the
          constraint on n to choose your target complexity before writing any code:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-stone-50 dark:bg-stone-950/50">
              <tr>
                {["n bound", "Max acceptable complexity", "Why"].map((h) => (
                  <th
                    key={h}
                    className="text-left px-3 py-2 text-[10px] font-mono uppercase tracking-widest text-stone-500 border-b border-stone-200 dark:border-white/10"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                { n: "n ≤ 20", c: "O(2ⁿ)", why: "2²⁰ ≈ 10⁶, fast enough" },
                { n: "n ≤ 500", c: "O(n³)", why: "500³ = 1.25×10⁸, borderline" },
                { n: "n ≤ 5,000", c: "O(n²)", why: "25×10⁶, fine" },
                { n: "n ≤ 10⁵", c: "O(n log n)", why: "1.7×10⁶, fast" },
                { n: "n ≤ 10⁶", c: "O(n)", why: "10⁶, easy" },
              ].map((r) => (
                <tr key={r.n} className="border-t border-stone-100 dark:border-white/5">
                  <td className="px-3 py-2 font-mono font-bold text-stone-900 dark:text-stone-50">{r.n}</td>
                  <td className="px-3 py-2 font-mono font-bold text-lime-700 dark:text-lime-400">{r.c}</td>
                  <td className="px-3 py-2 text-stone-600 dark:text-stone-400">{r.why}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed mt-3">
          Reading the constraints first saves you from writing the wrong algorithm entirely.
        </p>
      </Card>

      <Card>
        <SubHeading>The three questions to always ask</SubHeading>
        <ol className="list-decimal pl-5 space-y-2 text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          <li>
            <strong className="text-stone-900 dark:text-stone-50">What is the largest n?</strong>{" "}
            This determines your target complexity.
          </li>
          <li>
            <strong className="text-stone-900 dark:text-stone-50">Are values negative / zero?</strong>{" "}
            Many algorithms assume non-negative input and silently break otherwise.
          </li>
          <li>
            <strong className="text-stone-900 dark:text-stone-50">Can the array be empty?</strong>{" "}
            Crashes on empty input are the most common interview bug.
          </li>
        </ol>
      </Card>

      <Card>
        <SubHeading>Reading constraints saves time, not just bugs</SubHeading>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed mb-2">
          Imagine spending 15 minutes writing a perfect O(n log n) solution and then
          discovering the problem only needs a brute force O(n²) because n ≤ 200.
        </p>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          Or worse: writing O(n²) and then finding out n ≤ 10⁶. Reading constraints first
          means you always aim at the right target from the start.
        </p>
      </Card>

      <Callout>
        Candidates who skip reading constraints write the wrong algorithm. Don't be that
        candidate. Spend 2 minutes reading the problem carefully and you will save 15 minutes
        of wasted code.
      </Callout>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Export                                                              */
/* ------------------------------------------------------------------ */

interface Props {
  onQuizComplete?: (score: number) => void;
}

export default function L0_InputsConstraints({ onQuizComplete }: Props) {
  const tabs: LessonTabDef[] = [
    { id: "learn", label: "Learn", icon: <BookOpen className="w-4 h-4" />, content: <LearnTab /> },
    { id: "visualize", label: "Visualize", icon: <Play className="w-4 h-4" />, content: <VisualizeTab /> },
    { id: "try", label: "Try It", icon: <Target className="w-4 h-4" />, content: <TryTab /> },
    { id: "insight", label: "Insight", icon: <Lightbulb className="w-4 h-4" />, content: <InsightTab /> },
  ];

  const quiz: LessonQuizQuestion[] = [
    {
      question: "Which of these is an edge case for a function that finds the minimum value in an array?",
      options: [
        "An array of 100 random positive integers",
        "An array containing only negative numbers",
        "An empty array",
        "An array sorted in descending order",
      ],
      correctIndex: 2,
      explanation:
        "An empty array is the classic edge case, accessing index 0 crashes. Negative numbers and sorted arrays are handled correctly by a simple comparison loop.",
    },
    {
      question: "A problem states n ≤ 10⁶. Which complexity is too slow?",
      options: ["O(n)", "O(n log n)", "O(n²)", "O(log n)"],
      correctIndex: 2,
      explanation:
        "O(n²) = 10¹² operations for n = 10⁶, that would take thousands of seconds. O(n) and O(n log n) are both fine.",
    },
    {
      question: "What should you do BEFORE writing any code in an interview?",
      options: [
        "Start coding immediately to show speed",
        "Ask about constraints, edge cases, and what exactly to return",
        "Write the most complex solution you know",
        "Assume all inputs are valid and n is small",
      ],
      correctIndex: 1,
      explanation:
        "Asking about constraints and edge cases shows structured thinking. It also prevents you from building the wrong solution. Interviewers almost always reward this.",
    },
    {
      question: "A problem says 'find all pairs that sum to target'. What edge case could crash naive code?",
      options: [
        "When the array has exactly 2 elements",
        "When the array is empty, iterating over an empty array returns no pairs",
        "When all values are positive",
        "When target is a large number",
      ],
      correctIndex: 1,
      explanation:
        "An empty array has no pairs, so the answer is an empty result. Naive code that doesn't guard for length can crash or behave incorrectly.",
    },
    {
      question: "What does a constraint like 'values are in range -10⁹ to 10⁹' tell you?",
      options: [
        "You can use a small fixed-size array for counting",
        "Values can be very large or negative, so avoid array indexing by value",
        "The algorithm must be O(1) space",
        "Nothing useful",
      ],
      correctIndex: 1,
      explanation:
        "If you tried to use an array indexed by value, you'd need a 2×10⁹-element array, way too much memory. This constraint means you should use a hash map or sort-based approach instead.",
    },
  ];

  return (
    <LessonShell
      title="Inputs, Constraints & Edge Cases"
      level={0}
      lessonNumber={6}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="Candidates who skip reading constraints write the wrong algorithm. Don't be that candidate."
      nextLessonHint="Time Complexity & Big-O"
      onQuizComplete={onQuizComplete}
    />
  );
}

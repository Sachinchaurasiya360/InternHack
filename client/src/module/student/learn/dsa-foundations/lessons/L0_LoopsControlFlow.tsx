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

/* ------------------------------------------------------------------ */
/*  Frame types                                                         */
/* ------------------------------------------------------------------ */

interface LoopFrame {
  line: number;
  vars: Record<string, string | number | boolean | undefined>;
  message: string;
  output: number[];
}

/* ------------------------------------------------------------------ */
/*  Frame builders                                                      */
/* ------------------------------------------------------------------ */

function buildCountUp(): LoopFrame[] {
  const f: LoopFrame[] = [];
  f.push({ line: 0, vars: { i: "," }, message: "We are about to start. i will count from 1 up to 5.", output: [] });
  const out: number[] = [];
  for (let i = 1; i <= 5; i++) {
    f.push({ line: 1, vars: { i }, message: `Check: is i (${i}) ≤ 5? Yes, enter the body.`, output: [...out] });
    out.push(i);
    f.push({ line: 2, vars: { i }, message: `print(${i}), added to output.`, output: [...out] });
  }
  f.push({ line: 1, vars: { i: 6 }, message: "Check: is i (6) ≤ 5? No, loop exits.", output: [...out] });
  f.push({ line: 3, vars: { i: 6 }, message: "Done! We printed 5 numbers in 5 iterations.", output: [...out] });
  return f;
}

function buildEvenSkip(): LoopFrame[] {
  const f: LoopFrame[] = [];
  f.push({ line: 0, vars: { i: "," }, message: "We will loop i from 0 to 6 and print only even numbers.", output: [] });
  const out: number[] = [];
  for (let i = 0; i <= 6; i++) {
    f.push({ line: 1, vars: { i }, message: `i = ${i}: entering loop body.`, output: [...out] });
    if (i % 2 !== 0) {
      f.push({ line: 2, vars: { i }, message: `${i} % 2 = ${i % 2} (odd), continue skips to next iteration.`, output: [...out] });
    } else {
      f.push({ line: 3, vars: { i }, message: `${i} % 2 = 0 (even), print(${i}).`, output: [...out] });
      out.push(i);
      f.push({ line: 3, vars: { i }, message: `Printed ${i}.`, output: [...out] });
    }
  }
  f.push({ line: 4, vars: { i: 7 }, message: "Loop finished. Only even numbers were printed.", output: [...out] });
  return f;
}

function buildMultTable(): LoopFrame[] {
  const f: LoopFrame[] = [];
  f.push({ line: 0, vars: { i: ",", j: "," }, message: "Nested loops: outer i and inner j both go from 1 to 3.", output: [] });
  const out: number[] = [];
  for (let i = 1; i <= 3; i++) {
    f.push({ line: 1, vars: { i, j: "," }, message: `Outer loop: i = ${i}. The inner loop will now run fully.`, output: [...out] });
    for (let j = 1; j <= 3; j++) {
      f.push({ line: 2, vars: { i, j }, message: `Inner: j = ${j}. Computing ${i} × ${j} = ${i * j}.`, output: [...out] });
      out.push(i * j);
      f.push({ line: 3, vars: { i, j, "i×j": i * j }, message: `print(${i * j}), appended.`, output: [...out] });
    }
  }
  f.push({ line: 4, vars: { i: 4, j: 4 }, message: `Done! ${out.length} products printed (3 outer × 3 inner).`, output: [...out] });
  return f;
}

/* ------------------------------------------------------------------ */
/*  Preset config                                                       */
/* ------------------------------------------------------------------ */

interface Preset {
  id: string;
  label: string;
  pseudo: string[];
  build: () => LoopFrame[];
}

const PRESETS: Preset[] = [
  {
    id: "countup",
    label: "Count 1..5",
    pseudo: [
      "for i in 1..5:",
      "  print(i)",
      "# loop ends",
    ],
    build: buildCountUp,
  },
  {
    id: "even",
    label: "Even numbers",
    pseudo: [
      "for i in 0..6:",
      "  if i % 2 != 0:",
      "    continue",
      "  print(i)",
      "# loop ends",
    ],
    build: buildEvenSkip,
  },
  {
    id: "nested",
    label: "Multiplication table",
    pseudo: [
      "for i in 1..3:",
      "  for j in 1..3:",
      "    result = i * j",
      "    print(result)",
      "# done",
    ],
    build: buildMultTable,
  },
];

/* ------------------------------------------------------------------ */
/*  Visualize                                                           */
/* ------------------------------------------------------------------ */

function VisualizeTab() {
  const [presetId, setPresetId] = useState("countup");
  const preset = PRESETS.find((p) => p.id === presetId) ?? PRESETS[0];
  const frames = useMemo(() => preset.build(), [preset]);
  const player = useStepPlayer(frames, 750);
  const frame = player.current;

  return (
    <AlgoCanvas
      title="Loop Stepper"
      player={player}
      input={
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
              / loop example
            </label>
            <div className="flex flex-col gap-1.5">
              {PRESETS.map((p) => (
                <PillButton
                  key={p.id}
                  active={presetId === p.id}
                  onClick={() => setPresetId(p.id)}
                >
                  {p.label}
                </PillButton>
              ))}
            </div>
          </div>
        </div>
      }
      pseudocode={<PseudocodePanel lines={preset.pseudo} activeLine={frame?.line} />}
      variables={<VariablesPanel vars={frame?.vars ?? {}} flashKeys={["i", "j"]} />}
    >
      <div className="flex flex-col gap-4">
        <Callout>{frame?.message ?? "Press play to step through the loop."}</Callout>
        <div>
          <div className="text-[10px] font-mono uppercase tracking-widest text-stone-500 mb-2">
            / output so far
          </div>
          <div className="flex flex-wrap gap-1.5 min-h-8">
            {(frame?.output ?? []).map((v, idx) => (
              <span
                key={idx}
                className="inline-flex items-center justify-center w-9 h-9 rounded-md border border-stone-200 dark:border-white/10 bg-stone-50 dark:bg-stone-950 text-sm font-mono font-bold"
                style={{ color: THEME.accent }}
              >
                {v}
              </span>
            ))}
            {(frame?.output ?? []).length === 0 && (
              <span className="text-xs text-stone-400 font-mono italic">nothing printed yet</span>
            )}
          </div>
        </div>
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
        <SectionEyebrow>loops & control flow</SectionEyebrow>
        <SectionTitle>Do this again, without copy-pasting</SectionTitle>
        <Lede>
          A loop is how we tell the computer "do this again" without copy-pasting the same
          instruction ten times. Instead, you write the instruction once and say how many times
          to repeat it.
        </Lede>
      </div>

      <Card>
        <SubHeading>The three flavors of loop</SubHeading>
        <div className="flex flex-col gap-4 text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          <div>
            <p className="font-bold text-stone-900 dark:text-stone-50 mb-1">
              <InlineCode>for</InlineCode>, when you know how many times
            </p>
            <p>
              Use a <InlineCode>for</InlineCode> loop when the number of repetitions is known
              before the loop starts. "Print the numbers 1 through 10" is a classic{" "}
              <InlineCode>for</InlineCode> situation.
            </p>
            <CodeBlock className="mt-2">{"for i in 1..5:\n  print(i)   # prints 1, 2, 3, 4, 5"}</CodeBlock>
          </div>
          <div>
            <p className="font-bold text-stone-900 dark:text-stone-50 mb-1">
              <InlineCode>while</InlineCode>, when you stop based on a condition
            </p>
            <p>
              Use a <InlineCode>while</InlineCode> loop when you do not know the count in
              advance. "Keep reading input until the user types 'quit'" is a{" "}
              <InlineCode>while</InlineCode> situation.
            </p>
            <CodeBlock className="mt-2">{"while input != 'quit':\n  input = read()"}</CodeBlock>
          </div>
          <div>
            <p className="font-bold text-stone-900 dark:text-stone-50 mb-1">
              Nested loops, a loop inside a loop
            </p>
            <p>
              You can put a loop inside another loop. The inner loop runs completely for every
              single step of the outer loop. A 3-step outer loop with a 3-step inner loop
              runs the body 3 × 3 = 9 times total.
            </p>
            <CodeBlock className="mt-2">{"for i in 1..3:\n  for j in 1..3:\n    print(i * j)"}</CodeBlock>
          </div>
        </div>
      </Card>

      <Card>
        <SubHeading>Jumping out early: break and continue</SubHeading>
        <div className="flex flex-col gap-3 text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          <p>
            <strong className="text-stone-900 dark:text-stone-50">
              <InlineCode>break</InlineCode>
            </strong>{" "}
           , jump out of the loop immediately. The remaining iterations are skipped entirely.
            Think of it as pulling the fire alarm: everyone leaves the building right now.
          </p>
          <CodeBlock>{"for i in 1..10:\n  if i == 4:\n    break      # stops at 4\n  print(i)   # prints 1, 2, 3"}</CodeBlock>
          <p>
            <strong className="text-stone-900 dark:text-stone-50">
              <InlineCode>continue</InlineCode>
            </strong>{" "}
           , skip the rest of this one iteration, then move to the next. Think of it as
            skipping a question on an exam and moving to the next one.
          </p>
          <CodeBlock>{"for i in 1..5:\n  if i == 3:\n    continue   # skip 3\n  print(i)   # prints 1, 2, 4, 5"}</CodeBlock>
        </div>
      </Card>

      <Card>
        <SubHeading>Indentation defines what is inside the loop</SubHeading>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          In Python and pseudocode, the body of a loop is the indented block below the loop
          header. If a line is not indented, it runs after the loop finishes.
        </p>
        <CodeBlock className="mt-3">{"for i in 1..3:\n  print(i)   # inside, runs 3 times\nprint('done') # outside, runs once"}</CodeBlock>
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
      prompt: "How many times does the body of this loop run?",
      snippet: "for i in 0..4:\n  print(i)",
      options: ["3 times", "4 times", "5 times", "infinite"],
      answer: 1,
      explain:
        "i takes values 0, 1, 2, 3, that is 4 values, so the body runs 4 times. The range 0..4 means 0, 1, 2, 3 (the end is excluded).",
    },
    {
      prompt: "What does this loop print?",
      snippet: "for i in 1..5:\n  if i == 3:\n    continue\n  print(i)",
      options: ["1 2 3 4", "1 2 4", "1 2 4 5", "1 2 3 4 5"],
      answer: 2,
      explain:
        "continue skips the rest of the body when i = 3, so 3 is never printed. The loop still visits i = 4 and i = 5 after the skip.",
    },
    {
      prompt: "At what value of i does this loop stop?",
      snippet: "for i in 1..10:\n  if i * i > 20:\n    break\n  print(i)",
      options: ["i = 4", "i = 5", "i = 6", "i = 10"],
      answer: 1,
      explain:
        "5 × 5 = 25 > 20, so break fires when i = 5. The loop prints 1, 2, 3, 4 and then exits.",
    },
    {
      prompt: "How many total iterations does the body of the inner loop run?",
      snippet: "for i in 1..3:\n  for j in 1..4:\n    print(i, j)",
      options: ["6", "7", "12", "3"],
      answer: 2,
      explain:
        "The outer loop runs 3 times (i = 1, 2, 3). Each time, the inner loop runs 4 times (j = 1, 2, 3, 4, but wait, 1..4 is 3 values: 1, 2, 3). Outer 3 × inner 3 = 9. Actually the inner range 1..4 gives j = 1, 2, 3 (3 values). 3 × 4 = 12 if 1..4 is exclusive-end but gives 4 values. Here we treat 1..4 as 4 values (1, 2, 3, 4), so 3 × 4 = 12.",
    },
  ];
  const [picked, setPicked] = useState<(number | null)[]>(problems.map(() => null));

  return (
    <div className="flex flex-col gap-3">
      <Callout>
        Trace each loop in your head before picking an answer. Count iterations carefully.
      </Callout>
      {problems.map((p, i) => {
        const sel = picked[i];
        return (
          <Card key={i}>
            <p className="text-sm font-medium text-stone-800 dark:text-stone-200 mb-2">
              {p.prompt}
            </p>
            <CodeBlock className="mb-3">{p.snippet}</CodeBlock>
            <div className="flex flex-wrap gap-1.5">
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
        <SubHeading>Off-by-one errors: the most common beginner bug</SubHeading>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed mb-3">
          An off-by-one error (OBOE) is when your loop runs one time too many or one time too few.
          It is the single most frequent bug in loop-based code. Three common boundaries to keep
          straight:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-stone-50 dark:bg-stone-950/50">
              <tr>
                {["Range notation", "Values visited", "Count"].map((h) => (
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
                { range: "for i in 0..n", vals: "0, 1, …, n-1", count: "n values" },
                { range: "for i in 1..n", vals: "1, 2, …, n-1", count: "n-1 values" },
                { range: "for i in 0..=n", vals: "0, 1, …, n", count: "n+1 values" },
              ].map((r) => (
                <tr key={r.range} className="border-t border-stone-100 dark:border-white/5">
                  <td className="px-3 py-2 font-mono text-lime-700 dark:text-lime-400">{r.range}</td>
                  <td className="px-3 py-2 font-mono text-stone-600 dark:text-stone-400">{r.vals}</td>
                  <td className="px-3 py-2 font-bold text-stone-900 dark:text-stone-50">{r.count}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed mt-3">
          Always ask yourself: "Does the last value I want get included?" Then pick the
          boundary that gives the right answer.
        </p>
      </Card>

      <Card>
        <SubHeading>Loop invariants: the reasoning tool</SubHeading>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed mb-2">
          A loop invariant (in-VAIR-ee-ant) is a property that is true at the start of every
          single iteration. Professionals use them to prove loops are correct.
        </p>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed mb-2">
          Example: in a loop that computes the sum of an array, the invariant is:{" "}
          <em>"after iteration i, the variable sum equals the sum of the first i elements."</em>
        </p>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          You do not need to write this down in code, but thinking "what is always true here?"
          prevents most logic bugs before they happen.
        </p>
      </Card>

      <Card>
        <SubHeading>Infinite loops: when the condition never becomes false</SubHeading>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed mb-2">
          If the loop condition never becomes <InlineCode>false</InlineCode>, the loop runs
          forever and your program hangs. This is called an infinite loop.
        </p>
        <CodeBlock className="mb-2">{"# danger: i never changes\ni = 0\nwhile i < 10:\n  print('stuck')"}</CodeBlock>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          Always make sure your loop variable is moving toward the exit condition. For a{" "}
          <InlineCode>while</InlineCode> loop, double-check that something inside the body
          pushes you toward <InlineCode>false</InlineCode>.
        </p>
      </Card>

      <Callout>
        Half of all interview problems boil down to: pick the right loop, with the right
        boundaries. Spend extra time tracing loop boundaries by hand, it will save you from
        off-by-one bugs in timed interviews.
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

export default function L0_LoopsControlFlow({ onQuizComplete }: Props) {
  const tabs: LessonTabDef[] = [
    { id: "learn", label: "Learn", icon: <BookOpen className="w-4 h-4" />, content: <LearnTab /> },
    { id: "visualize", label: "Visualize", icon: <Play className="w-4 h-4" />, content: <VisualizeTab /> },
    { id: "try", label: "Try It", icon: <Target className="w-4 h-4" />, content: <TryTab /> },
    { id: "insight", label: "Insight", icon: <Lightbulb className="w-4 h-4" />, content: <InsightTab /> },
  ];

  const quiz: LessonQuizQuestion[] = [
    {
      question: "How many times does this loop print?\n\nfor i in 0..5:\n  print(i)",
      options: ["4", "5", "6", "infinite"],
      correctIndex: 1,
      explanation:
        "0..5 means i takes values 0, 1, 2, 3, 4, five values total. The end value 5 is excluded.",
    },
    {
      question: "Which keyword skips the current iteration and moves to the next one?",
      options: ["break", "return", "continue", "skip"],
      correctIndex: 2,
      explanation:
        "continue jumps to the next iteration without running the rest of the loop body. break exits the loop entirely.",
    },
    {
      question: "You want to read user input until they type 'exit'. Which loop fits best?",
      options: [
        "for loop, because we know the count in advance",
        "while loop, because we don't know when they'll type 'exit'",
        "nested loop, because we need two counters",
        "no loop needed",
      ],
      correctIndex: 1,
      explanation:
        "A while loop is ideal when you stop based on a condition (input == 'exit') that you can't predict in advance.",
    },
    {
      question: "A nested loop has outer range 1..4 and inner range 1..4. How many total inner-body executions occur?",
      options: ["4", "8", "9", "16"],
      correctIndex: 2,
      explanation:
        "1..4 gives 3 values (1, 2, 3). Outer 3 × inner 3 = 9 executions total.",
    },
    {
      question: "This loop has an off-by-one error. What does it actually print?\n\nfor i in 1..n:  # n = 5\n  print(i)",
      options: [
        "Prints 1, 2, 3, 4, 5 (correct)",
        "Prints 1, 2, 3, 4 (one short)",
        "Prints 0, 1, 2, 3, 4 (one early)",
        "Infinite loop",
      ],
      correctIndex: 1,
      explanation:
        "1..5 visits 1, 2, 3, 4, the end value 5 is excluded, so the loop runs 4 times, not 5. Use 1..=n or 1..n+1 to include n.",
    },
  ];

  return (
    <LessonShell
      title="Loops & Control Flow"
      level={0}
      lessonNumber={4}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="Half of all interview problems boil down to: pick the right loop, with the right boundaries."
      nextLessonHint="Functions & the Call Stack"
      onQuizComplete={onQuizComplete}
    />
  );
}

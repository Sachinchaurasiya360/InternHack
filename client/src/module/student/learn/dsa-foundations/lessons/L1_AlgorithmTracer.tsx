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
  SectionEyebrow,
  SectionTitle,
  SubHeading,
  THEME,
} from "../../../../../components/dsa-theory/primitives";
import { PracticeTab } from "../PracticeTab";

const PRACTICE_TOPIC_SLUG: string | null = null;

/* ------------------------------------------------------------------ */
/*  Frame model                                                        */
/* ------------------------------------------------------------------ */

interface Frame {
  line: number;
  vars: Record<string, string | number | undefined>;
  message: string;
  highlightKey?: string | null;
}

const PSEUDO = [
  "function findMax(a, b, c):",
  "  max ← a",
  "  if b > max:",
  "    max ← b",
  "  if c > max:",
  "    max ← c",
  "  return max",
];

function buildFrames(a: number, b: number, c: number): Frame[] {
  const f: Frame[] = [];
  f.push({ line: 0, vars: { a, b, c, max: undefined }, message: `Inputs a=${a}, b=${b}, c=${c}` });
  let max = a;
  f.push({ line: 1, vars: { a, b, c, max }, highlightKey: "max", message: `Start: assume max = a = ${a}` });
  f.push({ line: 2, vars: { a, b, c, max }, message: `Check: is b (${b}) > max (${max})?` });
  if (b > max) {
    max = b;
    f.push({ line: 3, vars: { a, b, c, max }, highlightKey: "max", message: `Yes, update max to b = ${b}` });
  } else {
    f.push({ line: 2, vars: { a, b, c, max }, message: `No, keep max = ${max}` });
  }
  f.push({ line: 4, vars: { a, b, c, max }, message: `Check: is c (${c}) > max (${max})?` });
  if (c > max) {
    max = c;
    f.push({ line: 5, vars: { a, b, c, max }, highlightKey: "max", message: `Yes, update max to c = ${c}` });
  } else {
    f.push({ line: 4, vars: { a, b, c, max }, message: `No, keep max = ${max}` });
  }
  f.push({ line: 6, vars: { a, b, c, max }, message: `Return max = ${max}` });
  return f;
}

function parseThree(s: string): [number, number, number] | null {
  const nums = s.split(/[,\s]+/).map((x) => Number(x.trim())).filter((x) => !Number.isNaN(x));
  if (nums.length !== 3) return null;
  return [nums[0], nums[1], nums[2]];
}

/* ------------------------------------------------------------------ */
/*  Local visual tracer                                                */
/* ------------------------------------------------------------------ */

function VisualTracer({ frame, a, b, c }: { frame: Frame; a: number; b: number; c: number }) {
  const max = frame.vars.max;
  const values: { key: string; v: number; label: string }[] = [
    { key: "a", v: a, label: "a" },
    { key: "b", v: b, label: "b" },
    { key: "c", v: c, label: "c" },
  ];

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex gap-4 flex-wrap justify-center">
        {values.map((it) => {
          const isMax = max === it.v;
          const cond = (frame.line === 2 && it.key === "b") || (frame.line === 4 && it.key === "c");
          return (
            <div
              key={it.key}
              className="w-24 text-center p-3 rounded-md transition-all duration-300"
              style={{
                border: `2px solid ${cond ? "#F59E0B" : isMax ? THEME.success : THEME.border}`,
                background: cond ? "#FEF3C710" : isMax ? `${THEME.success}14` : THEME.bg,
                boxShadow: isMax ? `0 0 0 3px ${THEME.success}25` : "none",
              }}
            >
              <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-stone-500 mb-1">
                {it.label}
              </div>
              <div
                className="font-mono text-3xl font-extrabold"
                style={{ color: isMax ? THEME.successDark : THEME.text }}
              >
                {it.v}
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex items-center gap-3">
        <span className="text-xs font-semibold uppercase tracking-widest text-stone-500">
          current max
        </span>
        <div
          className="min-w-20 px-4 py-2 rounded-md text-center font-mono text-xl font-extrabold text-white transition-all duration-300"
          style={{
            background: max !== undefined ? THEME.accent : THEME.border,
            boxShadow: frame.highlightKey === "max" ? `0 0 0 3px ${THEME.accent}40` : "none",
          }}
        >
          {max ?? ","}
        </div>
      </div>

      <Callout className="w-full">{frame.message}</Callout>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Visualize tab                                                      */
/* ------------------------------------------------------------------ */

function VisualizeTab() {
  const [inputStr, setInputStr] = useState("7, 12, 4");
  const parsed = parseThree(inputStr);
  const [a, b, c] = parsed ?? [7, 12, 4];
  const frames = useMemo(() => buildFrames(a, b, c), [a, b, c]);
  const player = useStepPlayer(frames);
  const frame = player.current;

  return (
    <AlgoCanvas
      title="Find Max of Three"
      player={player}
      input={
        <InputEditor
          label="Inputs (three numbers)"
          value={inputStr}
          placeholder="e.g. 7, 12, 4"
          helper="Comma or space separated. Exactly three numbers."
          presets={[
            { label: "Ascending", value: "1, 2, 3" },
            { label: "Descending", value: "9, 5, 1" },
            { label: "Middle wins", value: "3, 8, 2" },
            { label: "All equal", value: "5, 5, 5" },
          ]}
          onApply={(v) => { if (parseThree(v)) setInputStr(v); }}
          onRandom={() => {
            const r = () => Math.floor(Math.random() * 20) - 5;
            setInputStr(`${r()}, ${r()}, ${r()}`);
          }}
        />
      }
      pseudocode={<PseudocodePanel lines={PSEUDO} activeLine={frame?.line} />}
      variables={<VariablesPanel vars={frame?.vars ?? {}} flashKeys={frame?.highlightKey ? [frame.highlightKey] : []} />}
    >
      {frame && <VisualTracer frame={frame} a={a} b={b} c={c} />}
    </AlgoCanvas>
  );
}

/* ------------------------------------------------------------------ */
/*  Learn tab                                                          */
/* ------------------------------------------------------------------ */

function LearnTab() {
  const sections = [
    {
      title: "What is an algorithm?",
      body: "A finite, step-by-step procedure that takes some input and produces a correct output. Think of it as an unambiguous recipe a computer can follow without creativity.",
    },
    {
      title: "Algorithm vs Program",
      body: "An algorithm is language-agnostic, pseudocode or English is enough. A program is an algorithm written in a specific language (Python, C++, Java). The same algorithm can be written as many different programs.",
    },
    {
      title: "Four essential properties",
      body: "(1) Input, zero or more well-defined inputs. (2) Output, at least one. (3) Definiteness, each step is unambiguous. (4) Finiteness, it terminates. Add correctness and you have the five classical criteria.",
    },
    {
      title: "How we trace an algorithm",
      body: "Tracing means walking through each instruction and tracking what every variable holds at every step. Interviewers ask you to trace because it proves you understand, not just memorize, the logic.",
    },
  ];

  return (
    <div className="flex flex-col gap-5">
      <div>
        <SectionEyebrow>mental model</SectionEyebrow>
        <SectionTitle>Read like a CPU. Track every variable.</SectionTitle>
        <Lede>
          Before you learn any data structure or pattern, you need one habit: read a procedure,
          pretend you are the CPU, and track every variable in a table. Every interview problem
          starts here.
        </Lede>
      </div>

      <Card>
        <SubHeading>Pseudocode, the language of algorithm tracing</SubHeading>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          Pseudocode is plain English that reads like code, without committing to a
          specific programming language. It hides syntax noise (semicolons, type
          declarations) so the structure of the algorithm is the only thing on the
          page. Throughout this curriculum, pseudocode is what you trace, what you
          reason about, and what gets translated into your real language of choice.
        </p>
      </Card>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {sections.map((s, i) => (
          <Card key={i}>
            <div className="text-[10px] font-mono font-bold text-lime-700 dark:text-lime-400 mb-2 tracking-widest uppercase">
              0{i + 1}
            </div>
            <SubHeading>{s.title}</SubHeading>
            <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">{s.body}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Try tab                                                            */
/* ------------------------------------------------------------------ */

function TryTab() {
  const problems = [
    { inputs: "2, 9, 5", answer: 9 },
    { inputs: "-3, -7, -1", answer: -1 },
    { inputs: "4, 4, 4", answer: 4 },
  ];
  const [guesses, setGuesses] = useState<(string | null)[]>(problems.map(() => null));
  const [shown, setShown] = useState<boolean[]>(problems.map(() => false));

  return (
    <div className="flex flex-col gap-3">
      <Callout>
        Trace each call to <InlineCode>findMax</InlineCode> on paper. Write your predicted return
        value, then reveal.
      </Callout>

      {problems.map((p, i) => {
        const g = guesses[i];
        const revealed = shown[i];
        const correct = g !== null && Number(g) === p.answer;
        return (
          <Card key={i}>
            <div className="flex items-center gap-3 flex-wrap">
              <span className="font-mono text-sm font-bold text-stone-500">#{i + 1}</span>
              <code className="font-mono text-sm bg-stone-100 dark:bg-stone-800 text-stone-900 dark:text-stone-100 px-3 py-1 rounded-md border border-stone-200 dark:border-white/10">
                findMax({p.inputs})
              </code>
              <input
                type="text"
                placeholder="your guess"
                value={g ?? ""}
                onChange={(e) => {
                  const v = [...guesses];
                  v[i] = e.target.value;
                  setGuesses(v);
                }}
                className="w-24 px-3 py-1.5 rounded-md border border-stone-300 dark:border-white/10 text-sm font-mono bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-100 outline-none focus:border-stone-500 dark:focus:border-white/30"
              />
              <button
                type="button"
                onClick={() => {
                  const v = [...shown];
                  v[i] = true;
                  setShown(v);
                }}
                className="px-3 py-1.5 rounded-md text-xs font-medium border border-stone-300 dark:border-white/10 bg-white dark:bg-stone-900 text-stone-600 dark:text-stone-400 hover:border-stone-500 dark:hover:border-white/30 cursor-pointer transition-colors"
              >
                Reveal
              </button>
              {revealed && (
                <span
                  className={`text-xs font-bold px-3 py-1.5 rounded-md ${
                    correct
                      ? "bg-lime-50 dark:bg-lime-400/10 text-lime-800 dark:text-lime-200 border border-lime-500"
                      : "bg-rose-50 dark:bg-rose-500/10 text-rose-800 dark:text-rose-200 border border-rose-500"
                  }`}
                >
                  {correct ? `Correct, ${p.answer}` : `Answer: ${p.answer}`}
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
/*  Insight tab                                                        */
/* ------------------------------------------------------------------ */

function InsightTab() {
  return (
    <div className="flex flex-col gap-4">
      <Card>
        <SubHeading>Why this lesson matters more than it looks</SubHeading>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          Every hard topic later (recursion, DP, graph algorithms) becomes tractable once you
          reflexively trace. When you get stuck in an interview, the recovery move is: pick an
          input, trace it by hand, write down every variable. This is the move.
        </p>
      </Card>
      <Card>
        <SubHeading>Interview-style trace template</SubHeading>
        <ol className="list-decimal pl-5 space-y-1.5 text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          <li>List all variables as column headers.</li>
          <li>Number the pseudocode lines; write the line index in the first column.</li>
          <li>After each line that changes state, add a new row with the updated values.</li>
          <li>The last row's output column is your answer.</li>
        </ol>
      </Card>
    </div>
  );
}

/* ------------------------------------------------------------------ */

interface Props {
  onQuizComplete?: (score: number) => void;
}

export default function L1_AlgorithmTracer({ onQuizComplete }: Props) {
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
      question: "Which of the following is NOT a required property of an algorithm?",
      options: ["Finiteness", "Definiteness", "Speed in milliseconds", "Well-defined input"],
      correctIndex: 2,
      explanation:
        "Algorithms are defined by correctness and termination, not a specific runtime measured in milliseconds. Complexity (Big-O) is a separate analytical tool.",
    },
    {
      question: "What does 'tracing' an algorithm mean?",
      options: [
        "Writing it in pseudocode",
        "Running the code on a CPU and reading the output",
        "Walking through instructions step-by-step and tracking variable values",
        "Printing every line with a logger",
      ],
      correctIndex: 2,
      explanation:
        "Tracing is simulating execution by hand and recording what each variable holds after each step, a skill interviewers test directly.",
    },
    {
      question: "Trace findMax(-2, -9, -5). What is returned?",
      options: ["-9", "-5", "-2", "0"],
      correctIndex: 2,
      explanation: "Start max = -2. Is -9 > -2? No. Is -5 > -2? No. Return -2.",
    },
    {
      question: "If we removed the first 'if b > max' check entirely, when would findMax still be correct?",
      options: ["Always", "Only when b ≤ a", "Only when a is the largest", "Never"],
      correctIndex: 1,
      explanation:
        "Without that check, b is never considered. The function returns max(a, c). It happens to be correct when a is already ≥ b, i.e., b ≤ a.",
    },
  ];

  return (
    <LessonShell
      title="Algorithm Tracer"
      level={1}
      lessonNumber={2}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="Foundational for every coding interview"
      nextLessonHint="Space Complexity"
      onQuizComplete={onQuizComplete}
    />
  );
}

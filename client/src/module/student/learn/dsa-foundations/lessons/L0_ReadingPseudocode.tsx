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
  SectionEyebrow,
  SectionTitle,
  SubHeading,
  THEME,
} from "../../../../../components/dsa-theory/primitives";

const PRACTICE_TOPIC_SLUG: string | null = null;

/* ------------------------------------------------------------------ */
/*  Learn                                                              */
/* ------------------------------------------------------------------ */

function LearnTab() {
  const notationRows = [
    {
      symbol: "←",
      meaning: "Assignment (store a value)",
      example: "total ← 0",
      plain: 'Set total to 0. Like "=" in most languages.',
    },
    {
      symbol: "for i in 0..n",
      meaning: "Loop: i goes from 0 up to n-1",
      example: "for i in 0..3",
      plain: "Runs the body with i = 0, 1, 2.",
    },
    {
      symbol: "while cond",
      meaning: "Loop while a condition is true",
      example: "while x < 10",
      plain: "Keep running the body until x is no longer less than 10.",
    },
    {
      symbol: "if / elif / else",
      meaning: "Branching, choose one path",
      example: "if a > b: ...",
      plain: "Run the indented block only when the condition is true.",
    },
    {
      symbol: "return x",
      meaning: "Output, hand a value back",
      example: "return total",
      plain: "The algorithm is done; the answer is the value of total.",
    },
    {
      symbol: "// comment",
      meaning: "A human note, ignored by the computer",
      example: "// add each item",
      plain: "Not a step, just an explanation for the reader.",
    },
  ];

  return (
    <div className="flex flex-col gap-5">
      <div>
        <SectionEyebrow>reading pseudocode</SectionEyebrow>
        <SectionTitle>Half-code, half-English, no compiler needed.</SectionTitle>
        <Lede>
          Have you ever tried to explain a recipe but kept stopping to say "well,
          in my oven it would be gas mark 4, but on an electric you would use
          180°C..."? Pseudocode solves that problem for algorithms. It describes
          the logic in plain, readable steps without locking you into any
          programming language.
        </Lede>
      </div>

      <Card padded={false} className="overflow-hidden">
        <div className="px-4 py-3 border-b border-stone-200 dark:border-white/10">
          <p className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
            notation cheatsheet
          </p>
        </div>
        <table className="w-full text-sm">
          <thead className="bg-stone-50 dark:bg-stone-950/50">
            <tr>
              {["Symbol / keyword", "What it means", "Plain English"].map((h) => (
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
            {notationRows.map((r, i) => (
              <tr
                key={r.symbol}
                className={i === 0 ? "" : "border-t border-stone-100 dark:border-white/5"}
              >
                <td className="px-4 py-2 font-mono font-bold text-lime-700 dark:text-lime-400 whitespace-nowrap">
                  {r.symbol}
                </td>
                <td className="px-4 py-2 text-stone-700 dark:text-stone-300 text-xs">
                  {r.meaning}
                  <div className="font-mono text-stone-400 mt-0.5 text-[11px]">
                    e.g. <InlineCode>{r.example}</InlineCode>
                  </div>
                </td>
                <td className="px-4 py-2 text-stone-500 text-xs">{r.plain}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>

      <Card>
        <SubHeading>Indentation = scope</SubHeading>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed mb-3">
          In pseudocode there are no curly braces. Instead, indentation (moving
          lines to the right) shows which steps belong to a loop or an if-block.
        </p>
        <CodeBlock>
{`for i in 0..n:
  total ← total + a[i]   // indented → runs each loop
return total               // not indented → runs once`}
        </CodeBlock>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed mt-3">
          The <InlineCode>return total</InlineCode> line is at the same level as
          the <InlineCode>for</InlineCode> keyword, so it happens after the loop
          finishes, not inside it.
        </p>
      </Card>

      <Callout>
        <strong>How to read any pseudocode:</strong> trace it line by line and
        write down what each variable holds after that line. That is all there
        is to it. You will practice this in the Visualize and Try It tabs.
      </Callout>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Visualize, sum an array                                          */
/* ------------------------------------------------------------------ */

interface SumFrame {
  line: number;
  vars: Record<string, string | number | undefined>;
  message: string;
  activeIndex: number;
}

const SUM_ARRAY = [4, 2, 7];

const PSEUDO_LINES = [
  "total ← 0",
  "for i in 0..n:",
  "  total ← total + a[i]",
  "return total",
];

function buildSumFrames(): SumFrame[] {
  const f: SumFrame[] = [];
  f.push({
    line: 0,
    vars: { total: ",", i: "," },
    message: "We start by setting total to 0. This is our running sum, beginning from nothing.",
    activeIndex: -1,
  });
  f.push({
    line: 0,
    vars: { total: 0, i: "," },
    message: "total is now 0. Think of it as an empty bucket we will fill with values.",
    activeIndex: -1,
  });
  let total = 0;
  for (let i = 0; i < SUM_ARRAY.length; i++) {
    f.push({
      line: 1,
      vars: { total, i },
      message: `Loop starts. i = ${i}. We will look at a[${i}] = ${SUM_ARRAY[i]}.`,
      activeIndex: i,
    });
    total += SUM_ARRAY[i];
    f.push({
      line: 2,
      vars: { total, i },
      message: `total ← ${total - SUM_ARRAY[i]} + ${SUM_ARRAY[i]} = ${total}. Add a[${i}] to the running sum.`,
      activeIndex: i,
    });
  }
  f.push({
    line: 3,
    vars: { total, i: "done" },
    message: `All items visited. We return total = ${total}. That is the sum of [${SUM_ARRAY.join(", ")}].`,
    activeIndex: -1,
  });
  return f;
}

function VisualizeTab() {
  const frames = useMemo(() => buildSumFrames(), []);
  const player = useStepPlayer(frames, 800);
  const frame = player.current;

  return (
    <AlgoCanvas
      title="Trace: sum all elements of an array"
      player={player}
      pseudocode={<PseudocodePanel lines={PSEUDO_LINES} activeLine={frame?.line} />}
      variables={<VariablesPanel vars={frame?.vars ?? {}} flashKeys={["total"]} />}
    >
      <div className="flex flex-col items-center gap-5">
        {/* Array boxes */}
        <div className="flex flex-col items-center gap-2">
          <p className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
            array a = [4, 2, 7]
          </p>
          <div className="flex gap-2">
            {SUM_ARRAY.map((val, idx) => {
              const isActive = frame?.activeIndex === idx;
              return (
                <div key={idx} className="flex flex-col items-center gap-1">
                  <div
                    className="w-12 h-12 flex items-center justify-center rounded-md border-2 text-base font-bold transition-all"
                    style={{
                      borderColor: isActive ? THEME.accent : THEME.border,
                      background: isActive ? "#ecfccb" : THEME.bgPanel,
                      color: isActive ? THEME.accentDark : THEME.text,
                    }}
                  >
                    {val}
                  </div>
                  <span
                    className="text-[10px] font-mono"
                    style={{ color: THEME.textMuted }}
                  >
                    [{idx}]
                  </span>
                  {isActive && (
                    <span
                      className="text-[10px] font-mono font-bold"
                      style={{ color: THEME.accent }}
                    >
                      i
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Running total badge */}
        {frame && frame.vars.total !== "," && (
          <div
            className="inline-flex items-center gap-3 px-4 py-2 rounded-md border text-sm font-bold"
            style={{
              borderColor: THEME.accentDark,
              background: "#f7fee7",
              color: THEME.accentDark,
            }}
          >
            <span className="text-[10px] font-mono uppercase tracking-widest">
              total so far:
            </span>
            <span className="text-xl tabular-nums">{frame.vars.total}</span>
          </div>
        )}

        <Callout className="w-full">
          {frame?.message ?? "Press play to trace the algorithm line by line."}
        </Callout>
      </div>
    </AlgoCanvas>
  );
}

/* ------------------------------------------------------------------ */
/*  Try It                                                             */
/* ------------------------------------------------------------------ */

function TryTab() {
  const questions = [
    {
      snippet: "x ← 5\nx ← x + 3\nreturn x",
      question: "What value does this return?",
      options: ["3", "5", "8", "15"],
      answer: 2,
      explain:
        "x starts at 5, then x ← 5 + 3 = 8. The algorithm returns 8.",
    },
    {
      snippet: "count ← 0\nfor i in 0..4:\n  count ← count + 1\nreturn count",
      question: "How many times does the loop body run?",
      options: ["3", "4", "5", "0"],
      answer: 1,
      explain:
        '"for i in 0..4" means i takes the values 0, 1, 2, 3, that is 4 iterations, not 5. The upper bound is exclusive.',
    },
    {
      snippet: "a ← 10\nif a > 5:\n  a ← a - 3\nreturn a",
      question: "What does this return?",
      options: ["10", "5", "7", "3"],
      answer: 2,
      explain:
        "a starts at 10. 10 > 5 is true, so the if-block runs: a ← 10 - 3 = 7. We return 7.",
    },
    {
      snippet: "x ← 1\nwhile x < 10:\n  x ← x * 2\nreturn x",
      question: "What value does x have when the loop exits?",
      options: ["8", "10", "16", "12"],
      answer: 2,
      explain:
        "x goes: 1, 2, 4, 8, 16. At 16, x < 10 is false so the loop stops. x is returned as 16.",
    },
  ];

  const [picked, setPicked] = useState<(number | null)[]>(questions.map(() => null));

  return (
    <div className="flex flex-col gap-4">
      <Callout>
        For each snippet below, trace the pseudocode line by line and predict
        the answer before clicking.
      </Callout>
      {questions.map((q, i) => {
        const sel = picked[i];
        return (
          <Card key={i}>
            <CodeBlock className="mb-3">{q.snippet}</CodeBlock>
            <p className="text-sm font-semibold text-stone-900 dark:text-stone-50 mb-3">
              {q.question}
            </p>
            <div className="flex flex-wrap gap-2">
              {q.options.map((opt, idx) => {
                const correct = sel !== null && idx === q.answer;
                const wrong = sel !== null && idx === sel && idx !== q.answer;
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
                          : sel !== null && idx === q.answer
                            ? "border-lime-500 bg-lime-50 dark:bg-lime-400/10 text-lime-800 dark:text-lime-200"
                            : "border-stone-200 dark:border-white/10 bg-white dark:bg-stone-900 text-stone-700 dark:text-stone-300 hover:border-stone-400 dark:hover:border-white/30"
                    }`}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
            {sel !== null && (
              <Callout className="mt-3">{q.explain}</Callout>
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
    <div className="flex flex-col gap-4">
      <Card>
        <SubHeading>Why pseudocode exists</SubHeading>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed mb-2">
          Different teams use Python, Java, Go, or C++. If an algorithm is
          written in Python, a Java developer has to mentally translate it before
          they can understand it. Pseudocode skips all of that.
        </p>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          It focuses entirely on the logic, the "what to do", without the
          language-specific syntax that often distracts beginners. You can read
          a pseudocode algorithm in any programming textbook and then implement
          it in whichever language you know.
        </p>
      </Card>

      <Card>
        <SubHeading>Different books use different conventions</SubHeading>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed mb-2">
          Some books use <InlineCode>:=</InlineCode> for assignment, some use{" "}
          <InlineCode>=</InlineCode>, some use <InlineCode>←</InlineCode>. Some
          write <InlineCode>for i = 1 to n</InlineCode> (1-based), others write{" "}
          <InlineCode>for i in 0..n</InlineCode> (0-based). That is fine.
        </p>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          The skill you are building, reading logic from top to bottom and
          tracking variable values, transfers perfectly regardless of the
          notation. In this curriculum we always use <InlineCode>←</InlineCode>{" "}
          and 0-based ranges so you can focus on the logic, not the symbol.
        </p>
      </Card>

      <Card>
        <SubHeading>The universal technique: hand-tracing</SubHeading>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed mb-2">
          Whenever you are unsure what a piece of code does, trace it by hand.
          Write down every variable and update it after each line. This is
          exactly what a computer does, it is just slower and more visible.
        </p>
        <ol className="list-decimal pl-5 space-y-1 text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          <li>Write the variable names as column headers.</li>
          <li>Start a new row for each line that changes a variable.</li>
          <li>For loops, add a row for each iteration.</li>
          <li>Stop when you hit <InlineCode>return</InlineCode>.</li>
        </ol>
      </Card>

      <Callout>
        <strong>Interview tip:</strong> whiteboard interviews often start in
        pseudocode before any specific language. Being comfortable reading and
        writing pseudocode means you can think out loud about your algorithm
        before worrying about syntax errors.
      </Callout>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Shell                                                              */
/* ------------------------------------------------------------------ */

interface Props {
  onQuizComplete?: (score: number) => void;
}

export default function L0_ReadingPseudocode({ onQuizComplete }: Props) {
  const tabs: LessonTabDef[] = [
    {
      id: "learn",
      label: "Learn",
      icon: <BookOpen className="w-4 h-4" />,
      content: <LearnTab />,
    },
    {
      id: "visualize",
      label: "Visualize",
      icon: <Play className="w-4 h-4" />,
      content: <VisualizeTab />,
    },
    {
      id: "try",
      label: "Try It",
      icon: <Target className="w-4 h-4" />,
      content: <TryTab />,
    },
    {
      id: "insight",
      label: "Insight",
      icon: <Lightbulb className="w-4 h-4" />,
      content: <InsightTab />,
    },
  ];

  const quiz: LessonQuizQuestion[] = [
    {
      question: 'In pseudocode, what does "←" mean?',
      options: [
        "Less than or equal to",
        "Return this value",
        "Assign a value to a variable",
        "A comparison (is left equal to right?)",
      ],
      correctIndex: 2,
      explanation:
        '"←" is the assignment operator. "x ← 5" means: store the value 5 in the variable x. It is equivalent to "x = 5" in Python or JavaScript.',
    },
    {
      question: 'What does "for i in 0..n" mean when n = 3?',
      options: [
        "i takes values 1, 2, 3",
        "i takes values 0, 1, 2",
        "i takes values 0, 1, 2, 3",
        "The loop runs infinitely",
      ],
      correctIndex: 1,
      explanation:
        '"0..n" means from 0 up to (but not including) n. With n = 3, i is 0, then 1, then 2, three iterations total.',
    },
    {
      question:
        "Trace this snippet:\n\nx ← 2\nwhile x < 20:\n  x ← x * 3\nreturn x\n\nWhat is returned?",
      options: ["18", "20", "54", "6"],
      correctIndex: 2,
      explanation:
        "x goes: 2 → 6 → 18 → 54. At 54, x < 20 is false so the loop exits and 54 is returned.",
    },
    {
      question: "In pseudocode, what role does indentation play?",
      options: [
        "It is purely decorative, the computer ignores it",
        "It shows which steps belong inside a loop or if-block (scope)",
        "It indicates the order in which steps run, regardless of structure",
        "It marks lines that should be skipped",
      ],
      correctIndex: 1,
      explanation:
        "In pseudocode (and in Python, which follows the same rule), indentation defines scope. Indented lines are inside the block above them.",
    },
    {
      question:
        "Trace this snippet:\n\ntotal ← 0\nfor i in 0..4:\n  total ← total + i\nreturn total\n\nWhat does it return?",
      options: ["4", "6", "10", "0"],
      correctIndex: 1,
      explanation:
        "i takes values 0, 1, 2, 3 (four iterations). total = 0+1+2+3 = 6.",
    },
  ];

  return (
    <LessonShell
      title="Reading Pseudocode"
      level={0}
      lessonNumber={2}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="Whiteboard interviews often start in pseudocode before you code in your language of choice."
      nextLessonHint="Variables, Memory & References"
      onQuizComplete={onQuizComplete}
    />
  );
}

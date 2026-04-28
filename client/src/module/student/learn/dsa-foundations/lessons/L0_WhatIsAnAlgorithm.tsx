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
  return (
    <div className="flex flex-col gap-5">
      <div>
        <SectionEyebrow>what is an algorithm</SectionEyebrow>
        <SectionTitle>A recipe your computer can follow exactly.</SectionTitle>
        <Lede>
          Imagine you want to make pancakes. The recipe says: pour batter, wait
          2 minutes, flip when bubbles appear, cook 1 more minute. That is an
          algorithm. It is a set of clear steps that anyone, or any computer ,
          can follow to get the same result every time.
        </Lede>
      </div>

      <Card>
        <SubHeading>The formal definition</SubHeading>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed mb-3">
          An <strong className="text-stone-900 dark:text-stone-50">algorithm</strong> is{" "}
          a <em>finite</em> list of <em>clear</em> steps that takes some{" "}
          <strong className="text-stone-900 dark:text-stone-50">input</strong> and
          produces an <strong className="text-stone-900 dark:text-stone-50">output</strong>.
        </p>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          Four properties every algorithm must have:
        </p>
        <ol className="list-decimal pl-5 mt-2 space-y-2 text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          <li>
            <strong className="text-stone-900 dark:text-stone-50">Input:</strong> it
            receives something to work with (numbers, a list, text).
          </li>
          <li>
            <strong className="text-stone-900 dark:text-stone-50">Output:</strong> it
            produces a result (a number, a sorted list, yes/no).
          </li>
          <li>
            <strong className="text-stone-900 dark:text-stone-50">Finite:</strong> it
            must stop eventually. An infinite loop is not an algorithm.
          </li>
          <li>
            <strong className="text-stone-900 dark:text-stone-50">Deterministic:</strong>{" "}
            (meaning "the same every time"), given the same input, it always
            produces the same output. No randomness, no guessing.
          </li>
        </ol>
      </Card>

      <Card>
        <SubHeading>Three everyday algorithm examples</SubHeading>
        <div className="flex flex-col gap-3">
          {[
            {
              title: "Alphabetizing books",
              input: "A pile of books in random order",
              output: "Books sorted A to Z on the shelf",
              steps: "Compare two books, put the earlier one first. Repeat.",
            },
            {
              title: "Finding the cheapest flight",
              input: "A list of flights with prices",
              output: "The flight with the lowest price",
              steps:
                "Start with the first price as your best. Check each other price; if it is lower, update your best.",
            },
            {
              title: "Brushing teeth",
              input: "Toothbrush, toothpaste, teeth",
              output: "Clean teeth",
              steps:
                "Apply paste, brush each quadrant for 30 seconds, rinse. Done.",
            },
          ].map((ex) => (
            <div
              key={ex.title}
              className="border border-stone-100 dark:border-white/5 rounded-md p-4 bg-stone-50 dark:bg-stone-950/40"
            >
              <p className="text-sm font-bold text-stone-900 dark:text-stone-50 mb-1">
                {ex.title}
              </p>
              <p className="text-xs text-stone-500 mb-1">
                <span className="font-mono uppercase tracking-widest">in:</span>{" "}
                {ex.input}
              </p>
              <p className="text-xs text-stone-500 mb-1">
                <span className="font-mono uppercase tracking-widest">out:</span>{" "}
                {ex.output}
              </p>
              <p className="text-xs text-stone-600 dark:text-stone-400">
                {ex.steps}
              </p>
            </div>
          ))}
        </div>
      </Card>

      <Callout>
        <strong>Why "deterministic" matters:</strong> if your algorithm gives a
        different answer each time for the same input, you cannot trust it. Code
        has to be predictable. That is what separates an algorithm from a guess.
      </Callout>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Visualize, find the maximum number                               */
/* ------------------------------------------------------------------ */

interface MaxFrame {
  line: number;
  vars: Record<string, string | number | undefined>;
  message: string;
  pointerIdx: number;
  maxIdx: number;
}

const ARRAY = [3, 7, 2, 9, 5];

function buildMaxFrames(): MaxFrame[] {
  const f: MaxFrame[] = [];
  f.push({
    line: 0,
    vars: { i: ",", current: ",", max: "," },
    message: "We start. Our goal: walk through the array and find the biggest number.",
    pointerIdx: -1,
    maxIdx: -1,
  });
  f.push({
    line: 1,
    vars: { i: 0, current: ARRAY[0], max: ARRAY[0] },
    message: `Look at index 0: value is ${ARRAY[0]}. We have to start somewhere, so ${ARRAY[0]} is our "max so far".`,
    pointerIdx: 0,
    maxIdx: 0,
  });
  let max = ARRAY[0];
  let maxIdx = 0;
  for (let i = 1; i < ARRAY.length; i++) {
    const current = ARRAY[i];
    if (current > max) {
      f.push({
        line: 2,
        vars: { i, current, max },
        message: `Index ${i}: value ${current} is greater than current max ${max}. Update max!`,
        pointerIdx: i,
        maxIdx: i,
      });
      max = current;
      maxIdx = i;
    } else {
      f.push({
        line: 2,
        vars: { i, current, max },
        message: `Index ${i}: value ${current} is NOT greater than current max ${max}. Keep max as is.`,
        pointerIdx: i,
        maxIdx,
      });
    }
  }
  f.push({
    line: 3,
    vars: { i: "done", current: ",", max },
    message: `We've checked every number. The maximum is ${max}. Algorithm complete.`,
    pointerIdx: -1,
    maxIdx,
  });
  return f;
}

const PSEUDO_LINES = [
  "max ← a[0]",
  "for i in 1..n:",
  "  if a[i] > max: max ← a[i]",
  "return max",
];

function VisualizeTab() {
  const frames = useMemo(() => buildMaxFrames(), []);
  const player = useStepPlayer(frames, 800);
  const frame = player.current;

  return (
    <AlgoCanvas
      title="Find the maximum number in an array"
      player={player}
      pseudocode={<PseudocodePanel lines={PSEUDO_LINES} activeLine={frame?.line} />}
      variables={<VariablesPanel vars={frame?.vars ?? {}} flashKeys={["max"]} />}
    >
      <div className="flex flex-col items-center gap-5">
        {/* Array boxes */}
        <div className="flex flex-col items-center gap-2">
          <p className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
            array a
          </p>
          <div className="flex gap-2">
            {ARRAY.map((val, idx) => {
              const isPointer = frame?.pointerIdx === idx;
              const isMax = frame?.maxIdx === idx && frame?.pointerIdx !== -1;
              return (
                <div key={idx} className="flex flex-col items-center gap-1">
                  <div
                    className="w-12 h-12 flex items-center justify-center rounded-md border-2 text-base font-bold transition-all"
                    style={{
                      borderColor: isPointer
                        ? THEME.accent
                        : isMax
                          ? THEME.accentDark
                          : THEME.border,
                      background: isPointer
                        ? "#ecfccb"
                        : isMax
                          ? "#f7fee7"
                          : THEME.bgPanel,
                      color: isPointer
                        ? THEME.accentDark
                        : THEME.text,
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
                  {isPointer && (
                    <span
                      className="text-[10px] font-mono font-bold"
                      style={{ color: THEME.accent }}
                    >
                      i
                    </span>
                  )}
                  {isMax && !isPointer && (
                    <span
                      className="text-[10px] font-mono font-bold"
                      style={{ color: THEME.accentDark }}
                    >
                      max
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Max badge */}
        {frame && frame.vars.max !== "," && (
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md border text-sm font-bold"
            style={{
              borderColor: THEME.accentDark,
              background: "#f7fee7",
              color: THEME.accentDark,
            }}
          >
            <span className="text-[10px] font-mono uppercase tracking-widest">
              max so far:
            </span>
            <span className="text-xl tabular-nums">{frame.vars.max}</span>
          </div>
        )}

        <Callout className="w-full">
          {frame?.message ?? "Press play to watch the algorithm walk through the array."}
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
      question:
        'Which of these is NOT an algorithm?',
      detail: '(a) Sorting a deck of cards by suit, (b) Scrolling a feed until you find something funny, (c) Long division, (d) Binary search',
      options: [
        "Sorting cards by suit",
        "Scrolling until you find something funny",
        "Long division",
        "Binary search",
      ],
      answer: 1,
      explain:
        'Scrolling "until you find something funny" has no guaranteed stopping point, it may never end. Algorithms must be finite. The other three all terminate in a known number of steps.',
    },
    {
      question: "Why must an algorithm be deterministic?",
      detail: "",
      options: [
        "So it runs faster on modern hardware",
        "So it always gives the same output for the same input, making it testable and trustworthy",
        "Because computers cannot handle randomness",
        "Determinism is optional, it is just a good practice",
      ],
      answer: 1,
      explain:
        "If an algorithm could give different answers each time, you could never rely on it. Determinism is what lets you write tests, debug bugs, and prove correctness.",
    },
    {
      question:
        'For a "find the largest number" algorithm on the array [4, 1, 8, 3], what is the input and what is the output?',
      detail: "",
      options: [
        "Input: the number 8. Output: its index 2.",
        "Input: the array [4, 1, 8, 3]. Output: the number 8.",
        "Input: nothing. Output: the sorted array [1, 3, 4, 8].",
        "Input: the array length 4. Output: the number 8.",
      ],
      answer: 1,
      explain:
        "The algorithm receives the whole array as its input and returns the maximum value (8) as its output. The index or the sorted form are not what we asked for.",
    },
  ];

  const [picked, setPicked] = useState<(number | null)[]>(questions.map(() => null));

  return (
    <div className="flex flex-col gap-4">
      <Callout>
        Read each question, pick the best answer, and see the explanation.
      </Callout>
      {questions.map((q, i) => {
        const sel = picked[i];
        return (
          <Card key={i}>
            <p className="text-sm font-semibold text-stone-900 dark:text-stone-50 mb-1">
              {q.question}
            </p>
            {q.detail && (
              <p className="text-xs text-stone-500 mb-3">{q.detail}</p>
            )}
            <div className="flex flex-col gap-2 mt-2">
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
                    className={`text-left px-3 py-2 rounded-md border text-sm transition-colors cursor-pointer ${
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
        <SubHeading>The same problem can have many algorithms</SubHeading>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed mb-2">
          Suppose you want to find a name in a phone book. You could flip pages
          one by one from the start, that is one algorithm. Or you could open
          to the middle, decide which half the name is in, and repeat, that is
          a different algorithm called <InlineCode>binary search</InlineCode>.
        </p>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          Both give the correct answer. But one may take 1000 steps while the
          other takes only 10. Choosing the right algorithm is often the
          difference between code that finishes instantly and code that
          finishes hours later.
        </p>
      </Card>

      <Card>
        <SubHeading>Correctness comes before speed</SubHeading>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed mb-2">
          A fast algorithm that gives wrong answers is useless. Always make your
          algorithm correct first. Then, and only then, worry about making it
          faster.
        </p>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          In interviews you will often be asked to find a correct solution
          first, then optimize. Jumping straight to a "clever" solution without
          verifying correctness is one of the most common mistakes.
        </p>
      </Card>

      <Card>
        <SubHeading>A preview of what is coming</SubHeading>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed mb-2">
          How do we measure "how fast" an algorithm is? We count how many steps
          it takes as the input gets bigger. This is called{" "}
          <strong className="text-stone-900 dark:text-stone-50">Big-O notation</strong>.
        </p>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          For example, our "find the max" algorithm checks every number once.
          If the array has <InlineCode>n</InlineCode> items, it takes{" "}
          <InlineCode>n</InlineCode> steps. We write that as{" "}
          <InlineCode>O(n)</InlineCode>. Binary search takes only{" "}
          <InlineCode>O(log n)</InlineCode> steps, much faster for large inputs.
          You will learn exactly how to think about this in the next level.
        </p>
      </Card>

      <Callout>
        <strong>Key takeaway:</strong> every coding problem you will ever face
        is asking you to design an algorithm. Knowing how to describe one
        clearly, in plain English, in pseudocode, or in code, is the
        foundational skill for everything else in this curriculum.
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

export default function L0_WhatIsAnAlgorithm({ onQuizComplete }: Props) {
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
      question:
        "Which of the following best describes an algorithm?",
      options: [
        "Any piece of computer code",
        "A finite list of clear steps that takes an input and produces an output",
        "A mathematical equation",
        "A diagram showing how data flows through a system",
      ],
      correctIndex: 1,
      explanation:
        "An algorithm is specifically a finite, deterministic sequence of steps with defined input and output. Code can implement an algorithm, but not all code is an algorithm.",
    },
    {
      question:
        'Why is "scroll your feed until you feel like stopping" not a valid algorithm?',
      options: [
        "It has no input",
        "It is not deterministic",
        "It is not finite, it may never terminate",
        "It produces no output",
      ],
      correctIndex: 2,
      explanation:
        'An algorithm must stop after a finite number of steps. "Until you feel like stopping" has no guaranteed termination condition, so it fails the finite property.',
    },
    {
      question:
        'What does "deterministic" mean in the context of algorithms?',
      options: [
        "The algorithm runs as fast as possible",
        "The algorithm always produces the same output for the same input",
        "The algorithm uses no random numbers",
        "The algorithm can only be used once",
      ],
      correctIndex: 1,
      explanation:
        "Deterministic means predictable: run the algorithm twice on the same input and you get the same output both times. This is what makes algorithms testable and trustworthy.",
    },
    {
      question:
        "For a 'find minimum' algorithm on the array [8, 3, 5, 1, 6], what is the correct output?",
      options: ["8", "3", "1", "6"],
      correctIndex: 2,
      explanation:
        "The minimum value in [8, 3, 5, 1, 6] is 1. A correct 'find minimum' algorithm walks the whole array and returns 1.",
    },
    {
      question:
        "Two algorithms both correctly sort an array. Algorithm A takes 1000 steps; Algorithm B takes 10 steps. What should you do first when writing a new sorting algorithm?",
      options: [
        "Make it as fast as possible from the start",
        "Make it correct first, then optimize for speed",
        "Copy the fastest known sorting algorithm",
        "Skip correctness checks to save time",
      ],
      correctIndex: 1,
      explanation:
        "Correctness always comes before speed. A fast algorithm that gives wrong answers is worthless. Verify your solution is correct, then look for optimizations.",
    },
  ];

  return (
    <LessonShell
      title="What Is an Algorithm?"
      level={0}
      lessonNumber={1}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="Every coding interview is, at root, asking you to design an algorithm, defining one well is the first skill."
      nextLessonHint="Reading Pseudocode"
      onQuizComplete={onQuizComplete}
    />
  );
}

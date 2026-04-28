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
/*  Frame type                                                          */
/* ------------------------------------------------------------------ */

interface StackFrame {
  line: number;
  vars: Record<string, string | number | undefined>;
  message: string;
  /** Stack frames visible at this step, bottom to top. */
  stack: Array<{ label: string; n: number; returnVal?: number }>;
  phase: "push" | "run" | "pop" | "done";
}

/* ------------------------------------------------------------------ */
/*  Build factorial(3) frames                                           */
/* ------------------------------------------------------------------ */

function buildFactorial(): StackFrame[] {
  const f: StackFrame[] = [];

  // Step 0: initial call
  f.push({
    line: 0,
    vars: { n: 3 },
    message: "We call factorial(3). A new frame is pushed onto the stack.",
    stack: [{ label: "factorial(3)", n: 3 }],
    phase: "push",
  });

  // factorial(3) checks base case
  f.push({
    line: 1,
    vars: { n: 3 },
    message: "factorial(3): Is n == 0? No (n=3). We must recurse.",
    stack: [{ label: "factorial(3)", n: 3 }],
    phase: "run",
  });

  // factorial(3) calls factorial(2)
  f.push({
    line: 2,
    vars: { n: 3 },
    message: "factorial(3) calls factorial(2). A new frame is pushed on top.",
    stack: [{ label: "factorial(3)", n: 3 }, { label: "factorial(2)", n: 2 }],
    phase: "push",
  });

  // factorial(2) checks base case
  f.push({
    line: 1,
    vars: { n: 2 },
    message: "factorial(2): Is n == 0? No (n=2). Recurse again.",
    stack: [{ label: "factorial(3)", n: 3 }, { label: "factorial(2)", n: 2 }],
    phase: "run",
  });

  // factorial(2) calls factorial(1)
  f.push({
    line: 2,
    vars: { n: 2 },
    message: "factorial(2) calls factorial(1). Stack grows deeper.",
    stack: [
      { label: "factorial(3)", n: 3 },
      { label: "factorial(2)", n: 2 },
      { label: "factorial(1)", n: 1 },
    ],
    phase: "push",
  });

  // factorial(1) checks base case
  f.push({
    line: 1,
    vars: { n: 1 },
    message: "factorial(1): Is n == 0? No (n=1). Recurse once more.",
    stack: [
      { label: "factorial(3)", n: 3 },
      { label: "factorial(2)", n: 2 },
      { label: "factorial(1)", n: 1 },
    ],
    phase: "run",
  });

  // factorial(1) calls factorial(0)
  f.push({
    line: 2,
    vars: { n: 1 },
    message: "factorial(1) calls factorial(0). Stack is now 4 frames deep.",
    stack: [
      { label: "factorial(3)", n: 3 },
      { label: "factorial(2)", n: 2 },
      { label: "factorial(1)", n: 1 },
      { label: "factorial(0)", n: 0 },
    ],
    phase: "push",
  });

  // factorial(0) hits base case
  f.push({
    line: 1,
    vars: { n: 0 },
    message: "factorial(0): Is n == 0? YES, this is the base case. Return 1.",
    stack: [
      { label: "factorial(3)", n: 3 },
      { label: "factorial(2)", n: 2 },
      { label: "factorial(1)", n: 1 },
      { label: "factorial(0)", n: 0, returnVal: 1 },
    ],
    phase: "run",
  });

  // factorial(0) returns, frame popped
  f.push({
    line: 3,
    vars: { n: 0 },
    message: "factorial(0) returns 1. Its frame is popped off the stack.",
    stack: [
      { label: "factorial(3)", n: 3 },
      { label: "factorial(2)", n: 2 },
      { label: "factorial(1)", n: 1, returnVal: 1 },
    ],
    phase: "pop",
  });

  // factorial(1) computes 1 * 1 and returns
  f.push({
    line: 2,
    vars: { n: 1 },
    message: "factorial(1) = 1 × factorial(0) = 1 × 1 = 1. Returns 1. Frame popped.",
    stack: [
      { label: "factorial(3)", n: 3 },
      { label: "factorial(2)", n: 2, returnVal: 2 },
    ],
    phase: "pop",
  });

  // factorial(2) computes 2 * 1 and returns
  f.push({
    line: 2,
    vars: { n: 2 },
    message: "factorial(2) = 2 × factorial(1) = 2 × 1 = 2. Returns 2. Frame popped.",
    stack: [
      { label: "factorial(3)", n: 3, returnVal: 6 },
    ],
    phase: "pop",
  });

  // factorial(3) computes 3 * 2 and returns
  f.push({
    line: 2,
    vars: { n: 3 },
    message: "factorial(3) = 3 × factorial(2) = 3 × 2 = 6. Returns 6. Stack is empty.",
    stack: [],
    phase: "done",
  });

  f.push({
    line: 4,
    vars: { result: 6 },
    message: "Done! factorial(3) = 6. The stack is clear and we have our answer.",
    stack: [],
    phase: "done",
  });

  return f;
}

/* ------------------------------------------------------------------ */
/*  Stack visual                                                        */
/* ------------------------------------------------------------------ */

function StackVisual({ stack, phase }: { stack: StackFrame["stack"]; phase: StackFrame["phase"] }) {
  if (stack.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-44 rounded-md border border-dashed border-stone-300 dark:border-white/10">
        <span className="text-xs text-stone-400 font-mono italic">stack is empty</span>
      </div>
    );
  }
  // Render top-of-stack at the visual top
  const visible = [...stack].reverse();
  return (
    <div className="flex flex-col gap-1.5">
      <div className="text-[10px] font-mono uppercase tracking-widest text-stone-500 mb-1">
        / call stack (top = most recent)
      </div>
      {visible.map((frame, idx) => {
        const isTop = idx === 0;
        const isNew = isTop && phase === "push";
        const isReturning = isTop && (phase === "pop" || frame.returnVal !== undefined);
        return (
          <div
            key={`${frame.label}-${idx}`}
            className="px-3 py-2 rounded-md border text-xs font-mono transition-colors"
            style={{
              borderColor: isNew
                ? THEME.accent
                : isReturning
                  ? THEME.accentDark
                  : THEME.border,
              background: isTop ? "#fafaf9" : "#ffffff",
              color: THEME.text,
            }}
          >
            <span className="font-bold">{frame.label}</span>
            {frame.returnVal !== undefined && (
              <span
                className="ml-2 font-bold"
                style={{ color: THEME.accent }}
              >
                → {frame.returnVal}
              </span>
            )}
          </div>
        );
      })}
      <div
        className="text-center text-[10px] font-mono text-stone-400 border-t border-stone-200 dark:border-white/10 pt-1 mt-1"
      >
        bottom of stack
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Visualize                                                           */
/* ------------------------------------------------------------------ */

const FACTORIAL_PSEUDO = [
  "function factorial(n):",
  "  if n == 0: return 1",
  "  return n * factorial(n - 1)",
  "# (frame popped, value returned)",
  "# result ready",
];

function VisualizeTab() {
  const frames = useMemo(() => buildFactorial(), []);
  const player = useStepPlayer(frames, 900);
  const frame = player.current;

  return (
    <AlgoCanvas
      title="Call Stack, factorial(3)"
      player={player}
      pseudocode={<PseudocodePanel lines={FACTORIAL_PSEUDO} activeLine={frame?.line} />}
      variables={<VariablesPanel vars={frame?.vars ?? {}} flashKeys={["n", "result"]} />}
    >
      <div className="flex flex-col gap-4">
        <Callout>
          {frame?.message ?? "Press play to watch the call stack grow and shrink."}
        </Callout>
        <StackVisual stack={frame?.stack ?? []} phase={frame?.phase ?? "run"} />
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
        <SectionEyebrow>functions & the call stack</SectionEyebrow>
        <SectionTitle>A named recipe you can call anytime</SectionTitle>
        <Lede>
          A function is like a named recipe. You write the recipe once, its name, what
          ingredients it needs (parameters), and what dish it produces (return value). Then you
          can use it anywhere just by calling its name.
        </Lede>
      </div>

      <Card>
        <SubHeading>The anatomy of a function</SubHeading>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed mb-3">
          Every function has three parts:
        </p>
        <ol className="list-decimal pl-5 space-y-2 text-sm text-stone-600 dark:text-stone-400 leading-relaxed mb-3">
          <li>
            <strong className="text-stone-900 dark:text-stone-50">Name</strong>, how you refer to it.
          </li>
          <li>
            <strong className="text-stone-900 dark:text-stone-50">Parameters</strong> (par-AM-et-erz), the inputs you hand in. Like "number of servings" in a recipe.
          </li>
          <li>
            <strong className="text-stone-900 dark:text-stone-50">Return value</strong>, the output you get back. Like the finished dish.
          </li>
        </ol>
        <CodeBlock>{"function add(a, b):\n  return a + b\n\nresult = add(3, 4)  # result is 7"}</CodeBlock>
      </Card>

      <Card>
        <SubHeading>What happens when you call a function</SubHeading>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed mb-3">
          Calling a function is a four-step process:
        </p>
        <ol className="list-decimal pl-5 space-y-2 text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          <li>
            <strong className="text-stone-900 dark:text-stone-50">Pause</strong> where you are in the caller's code.
          </li>
          <li>
            <strong className="text-stone-900 dark:text-stone-50">Jump</strong> into the function, bringing the given inputs.
          </li>
          <li>
            <strong className="text-stone-900 dark:text-stone-50">Run</strong> the function body until a <InlineCode>return</InlineCode> is hit.
          </li>
          <li>
            <strong className="text-stone-900 dark:text-stone-50">Resume</strong> where you paused, now holding the return value.
          </li>
        </ol>
      </Card>

      <Card>
        <SubHeading>The call stack: memory for each active call</SubHeading>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed mb-2">
          Every time a function is called, the computer creates a chunk of memory called a
          stack frame (also called an activation record). This frame stores:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-sm text-stone-600 dark:text-stone-400 leading-relaxed mb-3">
          <li>The function's local variables (variables only that call can see).</li>
          <li>The values of the parameters passed in.</li>
          <li>Where to return to when the function finishes.</li>
        </ul>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed mb-2">
          These frames are stacked on top of each other, the most recent call sits on top. When
          a function returns, its frame is thrown away (popped). The frame below it resumes.
        </p>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          This structure is called the call stack. "Stack" because it works like a stack of
          plates: you always add and remove from the top.
        </p>
      </Card>

      <Card>
        <SubHeading>Local variables die with the frame</SubHeading>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed mb-2">
          Variables declared inside a function are local, they only exist during that
          function's frame. Once the function returns and the frame is gone, those variables
          are gone too.
        </p>
        <CodeBlock>{"function double(x):\n  result = x * 2   # 'result' is local to double\n  return result\n\ny = double(5)\n# 'result' from double() is gone now, only y exists"}</CodeBlock>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed mt-2">
          This is called scope. Local variables do not leak between calls.
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
      prompt: "How many stack frames are on the call stack at the deepest point when calling factorial(3)?",
      snippet: "function factorial(n):\n  if n == 0: return 1\n  return n * factorial(n - 1)\n\nfactorial(3)",
      options: ["2 frames", "3 frames", "4 frames", "1 frame"],
      answer: 2,
      explain:
        "The deepest point is when factorial(0) is called. Active frames at that point: factorial(3), factorial(2), factorial(1), factorial(0), that is 4 frames.",
    },
    {
      prompt: "What value does this function return when called as greet(5)?",
      snippet: "function greet(n):\n  if n == 0: return 0\n  return 1 + greet(n - 1)\n\ngreet(5)",
      options: ["0", "4", "5", "6"],
      answer: 2,
      explain:
        "Each call adds 1 to the result of greet(n-1). greet(0) = 0, so greet(5) = 1+1+1+1+1+0 = 5.",
    },
    {
      prompt: "What is the base case in this recursive function?",
      snippet: "function sum(n):\n  if n == 1: return 1\n  return n + sum(n - 1)",
      options: [
        "return n + sum(n - 1)",
        "n == 1: return 1",
        "sum(n - 1)",
        "There is no base case",
      ],
      answer: 1,
      explain:
        "The base case is the condition that stops the recursion. Here it is n == 1, which returns 1 without making another recursive call.",
    },
    {
      prompt: "A function calls itself without a base case. What happens?",
      snippet: "function forever(n):\n  return forever(n - 1)\n\nforever(5)",
      options: [
        "Returns 0 eventually",
        "Returns -infinity",
        "Crashes with a stack overflow error",
        "Runs 5 times and stops",
      ],
      answer: 2,
      explain:
        "Without a base case, the stack grows forever. The computer runs out of stack memory and crashes with a StackOverflowError (or similar).",
    },
  ];
  const [picked, setPicked] = useState<(number | null)[]>(problems.map(() => null));

  return (
    <div className="flex flex-col gap-3">
      <Callout>
        Trace the call stack mentally for each question. Draw it on paper if it helps.
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
        <SubHeading>Stack overflow: too many frames</SubHeading>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed mb-2">
          Every computer has a limited amount of stack memory. If recursion goes too deep, the
          stack fills up and the program crashes. This crash is called a stack overflow.
        </p>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed mb-2">
          In practice, most languages allow a few thousand to tens of thousands of frames
          before overflowing. For n = 100,000 in a recursive loop, that is too deep.
        </p>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          Fix: convert deep recursion to iteration (an explicit loop), or use tail-call
          optimization if your language supports it.
        </p>
      </Card>

      <Card>
        <SubHeading>Why the call stack makes recursion easy to reason about</SubHeading>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed mb-2">
          Recursion, a function calling itself, sounds intimidating. But if you always think
          in terms of frames, it is just a series of function calls stacked up.
        </p>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed mb-2">
          The mental model: each frame is a separate universe with its own copy of every
          variable. When it returns, it hands a value back to the frame below. You never have
          to think about all frames at once, just the one on top.
        </p>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          This will make Level 6 (Recursion) feel natural rather than magical.
        </p>
      </Card>

      <Card>
        <SubHeading>Local variables die with the frame</SubHeading>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed mb-2">
          When a function returns and its frame is popped, every local variable inside that
          frame is deallocated (freed). Two calls to the same function never share variables.
        </p>
        <CodeBlock>{"function counter():\n  x = 0          # x is born\n  x = x + 1\n  return x       # x dies here\n\ncounter()  # returns 1\ncounter()  # also returns 1, x starts fresh"}</CodeBlock>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed mt-2">
          This is why recursive calls are safe, each call gets a fresh copy of its own
          variables, completely isolated from the others.
        </p>
      </Card>

      <Callout>
        Recursion is interviewer catnip. The frame model is the only way to reason about it
        without your head spinning. Draw the stack on a whiteboard, it works every time.
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

export default function L0_FunctionsCallStack({ onQuizComplete }: Props) {
  const tabs: LessonTabDef[] = [
    { id: "learn", label: "Learn", icon: <BookOpen className="w-4 h-4" />, content: <LearnTab /> },
    { id: "visualize", label: "Visualize", icon: <Play className="w-4 h-4" />, content: <VisualizeTab /> },
    { id: "try", label: "Try It", icon: <Target className="w-4 h-4" />, content: <TryTab /> },
    { id: "insight", label: "Insight", icon: <Lightbulb className="w-4 h-4" />, content: <InsightTab /> },
  ];

  const quiz: LessonQuizQuestion[] = [
    {
      question: "What is a stack frame?",
      options: [
        "A loop that runs once",
        "A chunk of memory holding one function call's local variables and parameters",
        "A global variable shared between all functions",
        "A type of error",
      ],
      correctIndex: 1,
      explanation:
        "A stack frame (activation record) holds the local variables, parameters, and return address for a single function call. It is created on call and destroyed on return.",
    },
    {
      question: "You call factorial(4). How many frames are on the stack at the deepest point?",
      options: ["3", "4", "5", "6"],
      correctIndex: 2,
      explanation:
        "factorial(4) calls factorial(3), which calls factorial(2), which calls factorial(1), which calls factorial(0). That is 5 active frames: factorial(4) through factorial(0).",
    },
    {
      question: "What happens to a function's local variables after it returns?",
      options: [
        "They persist for the next call",
        "They become global",
        "They are destroyed along with the stack frame",
        "They reset to zero",
      ],
      correctIndex: 2,
      explanation:
        "Local variables live inside the stack frame. When the function returns and the frame is popped, those variables are gone. Each new call gets a fresh frame.",
    },
    {
      question: "A recursive function has no base case. What happens?",
      options: [
        "It returns undefined",
        "It runs exactly n times",
        "It causes a stack overflow",
        "It loops forever without crashing",
      ],
      correctIndex: 2,
      explanation:
        "Without a base case, each call pushes a new frame forever. Eventually the stack runs out of memory and the program crashes with a stack overflow error.",
    },
    {
      question: "Two separate calls to the same function share their local variables, true or false?",
      options: [
        "True, they use the same frame",
        "False, each call gets its own separate frame",
        "True, if the parameters are the same",
        "Depends on the programming language",
      ],
      correctIndex: 1,
      explanation:
        "Each function call creates a completely independent stack frame. Local variables in one call are invisible to all other calls, even calls to the same function.",
    },
  ];

  return (
    <LessonShell
      title="Functions & the Call Stack"
      level={0}
      lessonNumber={5}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="Recursion is interviewer catnip. The frame model is the only way to reason about it without your head spinning."
      nextLessonHint="Inputs, Constraints & Edge Cases"
      onQuizComplete={onQuizComplete}
    />
  );
}

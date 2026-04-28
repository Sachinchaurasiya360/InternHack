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
/*  Learn                                                              */
/* ------------------------------------------------------------------ */

function LearnTab() {
  return (
    <div className="flex flex-col gap-5">
      <div>
        <SectionEyebrow>variables, memory & references</SectionEyebrow>
        <SectionTitle>A variable is a labeled box. But some boxes hold addresses.</SectionTitle>
        <Lede>
          Imagine a row of storage lockers at a train station. Each locker has a
          number on the door. A variable is like a sticky label you put on a
          locker so you can find it by name instead of by number. Most of the
          time, the value lives right inside the locker. But sometimes the locker
          just holds a slip of paper with another locker's number on it.
        </Lede>
      </div>

      <Card>
        <SubHeading>Primitives: the box holds the value directly</SubHeading>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed mb-3">
          <strong className="text-stone-900 dark:text-stone-50">Primitive types</strong> are
          simple values: numbers, booleans (<InlineCode>true</InlineCode> /{" "}
          <InlineCode>false</InlineCode>), and strings (in most languages).
          When you copy a primitive, you get a completely independent copy.
          Changing one does not affect the other.
        </p>
        <CodeBlock className="mb-3">
{`a = 5
b = a      // b gets a COPY of 5
b = 10
// a is still 5, the boxes are independent`}
        </CodeBlock>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          Think of it as writing the number on two separate pieces of paper.
          Erasing one paper does not erase the other.
        </p>
      </Card>

      <Card>
        <SubHeading>References: the box holds an address</SubHeading>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed mb-3">
          <strong className="text-stone-900 dark:text-stone-50">Reference types</strong> (arrays,
          objects, lists) are different. The variable does not hold the data
          directly, it holds the address of where the data lives in memory.
          When you copy a reference, both variables point to the same data.
        </p>
        <CodeBlock className="mb-3">
{`a = [1, 2]
b = a          // b points to the SAME array
b.push(3)
// a is now [1, 2, 3], surprise!`}
        </CodeBlock>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          Think of it as giving two people the same locker number. They both
          open the same locker. If one person puts something inside, the other
          sees it too.
        </p>
      </Card>

      <Card>
        <SubHeading>Side-by-side comparison</SubHeading>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="rounded-md border border-stone-100 dark:border-white/5 p-3 bg-stone-50 dark:bg-stone-950/40">
            <p className="text-[10px] font-mono uppercase tracking-widest text-stone-500 mb-2">
              primitive copy
            </p>
            <CodeBlock>
{`a = 5
b = a
b = 10
// a = 5, b = 10`}
            </CodeBlock>
            <p className="text-xs text-stone-500 mt-2">
              Independent. Changing b has no effect on a.
            </p>
          </div>
          <div className="rounded-md border border-stone-100 dark:border-white/5 p-3 bg-stone-50 dark:bg-stone-950/40">
            <p className="text-[10px] font-mono uppercase tracking-widest text-stone-500 mb-2">
              reference share
            </p>
            <CodeBlock>
{`a = [1, 2]
b = a
b.push(3)
// a = [1,2,3], b = [1,2,3]`}
            </CodeBlock>
            <p className="text-xs text-stone-500 mt-2">
              Shared. Mutating b also mutates a.
            </p>
          </div>
        </div>
      </Card>

      <Callout>
        <strong>Rule of thumb:</strong> if you pass an array or object into a
        function and the function modifies it, the original is also modified.
        To avoid this, make a copy first:{" "}
        <InlineCode>b = [...a]</InlineCode> in JavaScript, or{" "}
        <InlineCode>b = a.copy()</InlineCode> in Python.
      </Callout>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Visualize, memory diagrams                                       */
/* ------------------------------------------------------------------ */

type Scenario = "primitive" | "reference";

/* --- Primitive copy frames --- */
interface PrimFrame {
  line: number;
  vars: Record<string, string | number | undefined>;
  message: string;
  aVal: number | string;
  bVal: number | string;
  highlightA: boolean;
  highlightB: boolean;
}

const PRIM_PSEUDO = [
  "a ← 5",
  "b ← a    // copy the value",
  "b ← 10   // change b only",
  "// a is still 5",
];

function buildPrimFrames(): PrimFrame[] {
  return [
    {
      line: 0,
      vars: { a: ",", b: "," },
      message: "We start with no variables. Both boxes are empty.",
      aVal: ",",
      bVal: ",",
      highlightA: false,
      highlightB: false,
    },
    {
      line: 0,
      vars: { a: 5, b: "," },
      message: "a ← 5. The value 5 is written directly into a's box.",
      aVal: 5,
      bVal: ",",
      highlightA: true,
      highlightB: false,
    },
    {
      line: 1,
      vars: { a: 5, b: 5 },
      message:
        "b ← a. The value inside a (which is 5) is COPIED into b's box. They are now independent.",
      aVal: 5,
      bVal: 5,
      highlightA: false,
      highlightB: true,
    },
    {
      line: 2,
      vars: { a: 5, b: 10 },
      message:
        "b ← 10. We overwrite b's box with 10. a's box is untouched, it still holds 5.",
      aVal: 5,
      bVal: 10,
      highlightA: false,
      highlightB: true,
    },
    {
      line: 3,
      vars: { a: 5, b: 10 },
      message:
        "Final state: a = 5, b = 10. Changing b never affected a. This is how primitives work.",
      aVal: 5,
      bVal: 10,
      highlightA: false,
      highlightB: false,
    },
  ];
}

/* --- Reference share frames --- */
interface RefFrame {
  line: number;
  vars: Record<string, string | number | undefined>;
  message: string;
  arrayState: number[];
  aPoints: boolean;
  bPoints: boolean;
  highlightA: boolean;
  highlightB: boolean;
}

const REF_PSEUDO = [
  "a ← [1, 2]",
  "b ← a    // copy the address, not the data",
  "b.push(3) // mutate through b",
  "// a is also [1, 2, 3] !",
];

function buildRefFrames(): RefFrame[] {
  return [
    {
      line: 0,
      vars: { a: ",", b: "," },
      message: "We start with no variables.",
      arrayState: [],
      aPoints: false,
      bPoints: false,
      highlightA: false,
      highlightB: false,
    },
    {
      line: 0,
      vars: { a: "→ [1,2]", b: "," },
      message:
        "a ← [1, 2]. An array [1, 2] is created in memory. a holds the ADDRESS of that array, not the array itself.",
      arrayState: [1, 2],
      aPoints: true,
      bPoints: false,
      highlightA: true,
      highlightB: false,
    },
    {
      line: 1,
      vars: { a: "→ [1,2]", b: "→ [1,2]" },
      message:
        "b ← a. The ADDRESS stored in a is copied to b. Now both a and b point to the SAME array in memory.",
      arrayState: [1, 2],
      aPoints: true,
      bPoints: true,
      highlightA: false,
      highlightB: true,
    },
    {
      line: 2,
      vars: { a: "→ [1,2,3]", b: "→ [1,2,3]" },
      message:
        "b.push(3). We add 3 to the array through b. Since a and b point to the same array, a now also sees [1, 2, 3].",
      arrayState: [1, 2, 3],
      aPoints: true,
      bPoints: true,
      highlightA: false,
      highlightB: true,
    },
    {
      line: 3,
      vars: { a: "→ [1,2,3]", b: "→ [1,2,3]" },
      message:
        "Final state: both a and b see [1, 2, 3]. The mutation through b also changed what a points to.",
      arrayState: [1, 2, 3],
      aPoints: true,
      bPoints: true,
      highlightA: false,
      highlightB: false,
    },
  ];
}

function MemoryBox({
  label,
  value,
  highlight,
  isRef,
}: {
  label: string;
  value: string | number;
  highlight: boolean;
  isRef?: boolean;
}) {
  return (
    <div className="flex flex-col items-center gap-1">
      <span
        className="text-[10px] font-mono uppercase tracking-widest"
        style={{ color: THEME.textMuted }}
      >
        {label}
      </span>
      <div
        className="w-20 h-12 flex items-center justify-center rounded-md border-2 text-sm font-bold transition-all"
        style={{
          borderColor: highlight ? THEME.accent : THEME.border,
          background: highlight ? "#ecfccb" : THEME.bgPanel,
          color: highlight ? THEME.accentDark : isRef ? "#3b82f6" : THEME.text,
        }}
      >
        {String(value)}
      </div>
    </div>
  );
}

function ArrayBox({ items, highlight }: { items: number[]; highlight: boolean }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <span
        className="text-[10px] font-mono uppercase tracking-widest"
        style={{ color: THEME.textMuted }}
      >
        heap memory
      </span>
      <div className="flex gap-1.5 p-2 rounded-md border-2 transition-all"
        style={{
          borderColor: highlight ? THEME.accent : THEME.border,
          background: highlight ? "#f7fee7" : THEME.bgPanel,
        }}
      >
        {items.length === 0 ? (
          <span className="text-xs text-stone-400 px-2">(empty)</span>
        ) : (
          items.map((v, i) => (
            <div
              key={i}
              className="w-9 h-9 flex items-center justify-center rounded border text-sm font-bold"
              style={{ borderColor: THEME.border, color: THEME.text }}
            >
              {v}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

function PrimVisual({ frame }: { frame: PrimFrame | undefined }) {
  if (!frame) return null;
  return (
    <div className="flex flex-col items-center gap-5">
      <div className="flex gap-6 items-end">
        <MemoryBox label="a" value={frame.aVal} highlight={frame.highlightA} />
        <MemoryBox label="b" value={frame.bVal} highlight={frame.highlightB} />
      </div>
      <Callout className="w-full">{frame.message}</Callout>
    </div>
  );
}

function RefVisual({ frame }: { frame: RefFrame | undefined }) {
  if (!frame) return null;
  return (
    <div className="flex flex-col items-center gap-5">
      {/* Variables + arrows + heap */}
      <div className="flex items-center gap-4 flex-wrap justify-center">
        <div className="flex flex-col gap-3 items-center">
          <MemoryBox
            label="a"
            value={frame.aPoints ? "addr →" : ","}
            highlight={frame.highlightA}
            isRef
          />
          <MemoryBox
            label="b"
            value={frame.bPoints ? "addr →" : ","}
            highlight={frame.highlightB}
            isRef
          />
        </div>
        {/* Arrow column */}
        {(frame.aPoints || frame.bPoints) && (
          <div className="flex flex-col items-center gap-3 pt-1">
            {frame.aPoints && (
              <svg width="32" height="20" className="shrink-0">
                <line x1="0" y1="10" x2="28" y2="10" stroke={THEME.accent} strokeWidth="2" />
                <polygon points="28,6 32,10 28,14" fill={THEME.accent} />
              </svg>
            )}
            {frame.bPoints && (
              <svg width="32" height="20" className="shrink-0">
                <line x1="0" y1="10" x2="28" y2="10" stroke={THEME.accent} strokeWidth="2" />
                <polygon points="28,6 32,10 28,14" fill={THEME.accent} />
              </svg>
            )}
          </div>
        )}
        <ArrayBox
          items={frame.arrayState}
          highlight={frame.highlightA || frame.highlightB}
        />
      </div>
      <Callout className="w-full">{frame.message}</Callout>
    </div>
  );
}

function VisualizeTab() {
  const [scenario, setScenario] = useState<Scenario>("primitive");

  const primFrames = useMemo(() => buildPrimFrames(), []);
  const refFrames = useMemo(() => buildRefFrames(), []);

  const primPlayer = useStepPlayer(primFrames, 900);
  const refPlayer = useStepPlayer(refFrames, 900);

  const activePlayer = (scenario === "primitive" ? primPlayer : refPlayer) as typeof primPlayer;
  const pseudo = scenario === "primitive" ? PRIM_PSEUDO : REF_PSEUDO;

  return (
    <AlgoCanvas
      title={
        scenario === "primitive"
          ? "Primitive copy, two independent boxes"
          : "Reference share, two labels, one array"
      }
      player={activePlayer}
      input={
        <div className="flex flex-col gap-2">
          <label className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
            / scenario
          </label>
          <div className="flex flex-col gap-1.5">
            <PillButton
              active={scenario === "primitive"}
              onClick={() => setScenario("primitive")}
            >
              Primitive copy
            </PillButton>
            <PillButton
              active={scenario === "reference"}
              onClick={() => setScenario("reference")}
            >
              Reference share
            </PillButton>
          </div>
        </div>
      }
      pseudocode={<PseudocodePanel lines={pseudo} activeLine={activePlayer.current?.line} />}
      variables={
        <VariablesPanel
          vars={activePlayer.current?.vars ?? {}}
          flashKeys={["a", "b"]}
        />
      }
    >
      {scenario === "primitive" ? (
        <PrimVisual frame={primPlayer.current as PrimFrame | undefined} />
      ) : (
        <RefVisual frame={refPlayer.current as RefFrame | undefined} />
      )}
    </AlgoCanvas>
  );
}

/* ------------------------------------------------------------------ */
/*  Try It                                                             */
/* ------------------------------------------------------------------ */

function TryTab() {
  const questions = [
    {
      snippet: "a = 7\nb = a\na = 20\n// what is b?",
      question: "What is the value of b at the end?",
      options: ["20", "7", "27", "undefined"],
      answer: 1,
      explain:
        "b received a COPY of a's value (7) at the time of assignment. Changing a later has no effect on b. b is still 7.",
    },
    {
      snippet: "a = [10, 20]\nb = a\na.push(30)\n// what is b?",
      question: "What does b contain at the end?",
      options: ["[10, 20]", "[10, 20, 30]", "[30]", "undefined"],
      answer: 1,
      explain:
        "b = a copies the reference (the address). Both a and b point to the same array. Pushing 30 through a also changes what b sees: [10, 20, 30].",
    },
    {
      snippet: "a = [1, 2, 3]\nb = [...a]   // spread copy\nb.push(4)\n// what is a?",
      question: "What does a contain at the end?",
      options: ["[1, 2, 3, 4]", "[1, 2, 3]", "[4]", "[1, 2, 3] or [1, 2, 3, 4], it depends"],
      answer: 1,
      explain:
        "[...a] creates a brand-new array with the same elements, a shallow copy. b now points to a different array. Pushing 4 into b does not affect a. a stays [1, 2, 3].",
    },
    {
      snippet: "x = true\ny = x\ny = false\n// what is x?",
      question: "What is x at the end?",
      options: ["false", "true", "undefined", "null"],
      answer: 1,
      explain:
        "Booleans are primitives. y = x copies the value true into y. Setting y = false only changes y's box. x is still true.",
    },
  ];

  const [picked, setPicked] = useState<(number | null)[]>(questions.map(() => null));

  return (
    <div className="flex flex-col gap-4">
      <Callout>
        For each snippet, predict the final value before clicking. Pay attention
        to whether the variable holds a primitive or an array.
      </Callout>
      {questions.map((q, i) => {
        const sel = picked[i];
        return (
          <Card key={i}>
            <CodeBlock className="mb-3">{q.snippet}</CodeBlock>
            <p className="text-sm font-semibold text-stone-900 dark:text-stone-50 mb-3">
              {q.question}
            </p>
            <div className="flex flex-col gap-2">
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
        <SubHeading>The #1 source of subtle bugs in interview code</SubHeading>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed mb-2">
          Imagine you write a function that sorts an array. You pass it an
          array and it seems to work. But the caller's array is now sorted too,
          even though they did not ask for that. This is called a{" "}
          <strong className="text-stone-900 dark:text-stone-50">side effect</strong>,
          and it happens because the function mutated the original array instead
          of working on a copy.
        </p>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          Interviewers watch for this. When you modify the input inside a
          function, you need to ask yourself: "Is the caller okay with that?"
          Usually the answer is no.
        </p>
      </Card>

      <Card>
        <SubHeading>Pure functions: the safe approach</SubHeading>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed mb-2">
          A <strong className="text-stone-900 dark:text-stone-50">pure function</strong> never
          mutates its inputs and always returns the same output for the same
          inputs. It is easy to test, easy to reason about, and never causes
          surprise mutations.
        </p>
        <CodeBlock>
{`// impure, modifies the caller's array
function addItem(arr, item):
  arr.push(item)
  return arr

// pure, returns a new array
function addItem(arr, item):
  return [...arr, item]`}
        </CodeBlock>
      </Card>

      <Card>
        <SubHeading>Why this matters for Dynamic Programming and Recursion</SubHeading>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed mb-2">
          In recursive algorithms (like tree traversal or memoized DP), you
          often pass the same data structure down many recursive calls. If any
          call mutates it, every other call sees the corrupted data, causing
          wrong results that are very hard to debug.
        </p>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          Understanding references now will save you hours of confusion later.
          When something "should be 5 but it's 7 and I don't know why," the
          culprit is almost always an unexpected reference mutation.
        </p>
      </Card>

      <Card>
        <SubHeading>Immutable types: strings in most languages</SubHeading>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed mb-2">
          In Python and JavaScript, strings are{" "}
          <strong className="text-stone-900 dark:text-stone-50">immutable</strong> (unchangeable).
          When you "modify" a string, you actually create a brand-new string.
          The original is never touched.
        </p>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          This is why <InlineCode>s += "x"</InlineCode> in a loop is slow in
          Python: each iteration creates a new string and throws the old one
          away. For building strings from many parts, use a list and{" "}
          <InlineCode>"".join(parts)</InlineCode> instead.
        </p>
      </Card>

      <Callout>
        <strong>Quick rule:</strong> numbers, booleans, and strings, copy
        freely. Arrays and objects, make an explicit copy if you do not want
        the original to change.
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

export default function L0_VariablesMemory({ onQuizComplete }: Props) {
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
        "After this code runs, what is the value of a?\n\na = 42\nb = a\nb = 99",
      options: ["99", "42", "141", "undefined"],
      correctIndex: 1,
      explanation:
        "Numbers are primitives. b = a copies the value 42 into b. Setting b = 99 only changes b's own box. a is still 42.",
    },
    {
      question:
        "After this code runs, what does a contain?\n\na = [5, 6]\nb = a\nb.push(7)",
      options: ["[5, 6]", "[5, 6, 7]", "[7]", "[5, 6], b is a copy"],
      correctIndex: 1,
      explanation:
        "Arrays are reference types. b = a copies the address, not the data. Both a and b point to the same array. Pushing 7 through b also changes a to [5, 6, 7].",
    },
    {
      question: "Which of the following creates an independent copy of an array in JavaScript?",
      options: [
        "b = a",
        "b = a.address",
        "b = [...a]",
        "b = ref(a)",
      ],
      correctIndex: 2,
      explanation:
        "The spread syntax [...a] creates a brand-new array with the same elements. b and a are now independent. Modifying b does not affect a.",
    },
    {
      question:
        "A function receives an array, adds an item to it, and returns nothing. What happens to the caller's array?",
      options: [
        "Nothing, the function works on its own copy",
        "The caller's array is also modified because arrays are passed by reference",
        "The function crashes because arrays cannot be modified inside functions",
        "It depends on the programming language, there is no general rule",
      ],
      correctIndex: 1,
      explanation:
        "In JavaScript and Python, arrays are passed by reference. When the function pushes an item, it modifies the same array the caller holds. This is the classic reference mutation bug.",
    },
    {
      question: "What is a 'pure function'?",
      options: [
        "A function that only uses numbers, not strings",
        "A function that never mutates its inputs and always returns the same output for the same inputs",
        "A function written without any loops",
        "A function that runs faster than 1 millisecond",
      ],
      correctIndex: 1,
      explanation:
        "A pure function has no side effects and is deterministic. It does not mutate inputs or global state. This makes it predictable, easy to test, and safe to use in recursive or concurrent code.",
    },
  ];

  return (
    <LessonShell
      title="Variables, Memory & References"
      level={0}
      lessonNumber={3}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="The #1 source of subtle bugs in interview code is mutating something the caller did not expect."
      nextLessonHint="Loops & Control Flow"
      onQuizComplete={onQuizComplete}
    />
  );
}

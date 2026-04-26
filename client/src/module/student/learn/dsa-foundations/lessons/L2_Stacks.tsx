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
  Lede,
  SectionEyebrow,
  SectionTitle,
  SubHeading,
  THEME,
} from "../../../../../components/dsa-theory/primitives";
import { PracticeTab } from "../PracticeTab";

const PRACTICE_TOPIC_SLUG: string | null = "stack";

/* ------------------------------------------------------------------ */
/*  Local helpers                                                        */
/* ------------------------------------------------------------------ */

interface StItem { value: string; color?: string; }

/** Inline StackColumn: vertical stack of boxes, newest on top. */
function StackColumn({
  items,
  title,
  topLabel,
  maxHeight,
  width,
}: {
  items: { value: string; color?: string }[];
  title: string;
  topLabel?: string;
  maxHeight?: number;
  width?: number;
}) {
  const w = width ?? 110;
  const boxH = 40;
  const gap = 4;
  const visItems = [...items].reverse(); // top of stack first
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="text-[10px] font-mono uppercase tracking-widest text-stone-500">{title}</div>
      <div
        className="flex flex-col-reverse gap-1 p-2 rounded-md border border-stone-200 dark:border-white/10 bg-stone-50 dark:bg-stone-950"
        style={{ width: w, minHeight: maxHeight ?? 80 }}
      >
        {items.length === 0 && (
          <span className="text-xs text-stone-400 dark:text-stone-600 font-mono text-center py-2">empty</span>
        )}
        {visItems.map((it, i) => {
          const isTop = i === 0;
          const bg = it.color ? `${it.color}22` : undefined;
          const border = it.color ?? THEME.border;
          return (
            <div
              key={i}
              className="relative flex items-center justify-center rounded font-mono font-bold text-sm"
              style={{ height: boxH, background: bg, border: `2px solid ${border}`, transition: "all 0.25s" }}
            >
              {it.value}
              {isTop && topLabel && (
                <span
                  className="absolute -right-12 text-[10px] font-mono uppercase tracking-widest"
                  style={{ color: THEME.textMuted }}
                >
                  {topLabel}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Frame / pseudocode                                                  */
/* ------------------------------------------------------------------ */

interface Frame {
  line: number;
  vars: Record<string, string | number | boolean | undefined>;
  message: string;
  highlightKey?: string;
  stack: StItem[];
  cursor: number;
  status: "running" | "matched" | "mismatch" | "unbalanced-open";
}

const PSEUDO = [
  "function isBalanced(s):",
  "  stack ← empty",
  "  for ch in s:",
  "    if ch is opening bracket:",
  "      stack.push(ch)",
  "    else if ch is closing bracket:",
  "      if stack empty or top ≠ match(ch):",
  "        return false",
  "      stack.pop()",
  "  return stack.empty()",
];

const PAIRS: Record<string, string> = { ")": "(", "]": "[", "}": "{" };
const OPEN = new Set(["(", "[", "{"]);
const CLOSE = new Set([")", "]", "}"]);
const BR_COLOR: Record<string, string> = {
  "(": "#3b82f6", ")": "#3b82f6",
  "[": "#10b981", "]": "#10b981",
  "{": "#f59e0b", "}": "#f59e0b",
};

function buildBalanced(s: string): Frame[] {
  const f: Frame[] = [];
  f.push({ line: 0, vars: { input: s, n: s.length }, message: `Check "${s}" for balanced brackets`, stack: [], cursor: -1, status: "running" });
  f.push({ line: 1, vars: { stack: "[]" }, message: "Initialize empty stack", stack: [], cursor: -1, status: "running" });
  const stack: StItem[] = [];
  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    f.push({ line: 2, vars: { i, ch, top: stack[stack.length - 1]?.value ?? "-" }, message: `Read character '${ch}'`, stack: [...stack], cursor: i, status: "running" });
    if (OPEN.has(ch)) {
      f.push({ line: 3, vars: { ch, stack_size: stack.length }, message: `'${ch}' is an opening bracket`, stack: [...stack], cursor: i, status: "running" });
      stack.push({ value: ch, color: BR_COLOR[ch] });
      f.push({ line: 4, vars: { ch, stack_size: stack.length, top: ch }, highlightKey: "top", message: `Push '${ch}' onto stack`, stack: [...stack], cursor: i, status: "running" });
    } else if (CLOSE.has(ch)) {
      f.push({ line: 5, vars: { ch }, message: `'${ch}' is a closing bracket`, stack: [...stack], cursor: i, status: "running" });
      const top = stack[stack.length - 1];
      const want = PAIRS[ch];
      f.push({ line: 6, vars: { ch, top: top?.value ?? "empty", want }, message: `Need top to be '${want}', have '${top?.value ?? "(empty)"}'`, stack: [...stack], cursor: i, status: "running" });
      if (!top || top.value !== want) {
        f.push({ line: 7, vars: { result: "false" }, message: "Mismatch! Brackets unbalanced - return false", stack: [...stack], cursor: i, status: "mismatch" });
        return f;
      }
      stack.pop();
      f.push({ line: 8, vars: { ch, popped: top.value, stack_size: stack.length }, highlightKey: "popped", message: `Match - Pop '${top.value}' off stack`, stack: [...stack], cursor: i, status: "running" });
    }
  }
  const empty = stack.length === 0;
  f.push({ line: 9, vars: { stack_size: stack.length, result: String(empty) }, message: empty ? "Stack is empty - balanced" : `Stack non-empty (${stack.length} left open) - unbalanced`, stack: [...stack], cursor: s.length - 1, status: empty ? "matched" : "unbalanced-open" });
  return f;
}

/* ------------------------------------------------------------------ */
/*  Visualize                                                           */
/* ------------------------------------------------------------------ */

function VisualizeTab() {
  const [str, setStr] = useState("({[]}())");
  const frames = useMemo(() => buildBalanced(str), [str]);
  const player = useStepPlayer(frames);
  const frame = player.current;

  const status = frame?.status ?? "running";
  const statusBorderClass =
    status === "matched" ? "border-lime-500 text-lime-700 dark:text-lime-300 bg-lime-50 dark:bg-lime-400/10"
    : status === "mismatch" || status === "unbalanced-open" ? "border-rose-500 text-rose-700 dark:text-rose-300 bg-rose-50 dark:bg-rose-500/10"
    : "border-stone-200 dark:border-white/10 text-stone-700 dark:text-stone-300 bg-stone-50 dark:bg-stone-900/60";

  return (
    <AlgoCanvas
      title="Balanced-Brackets Checker (LIFO Stack)"
      player={player}
      input={
        <InputEditor
          label="Bracket string"
          value={str}
          placeholder="e.g. (){[]}"
          helper="Use ( ) [ ] { } — other characters ignored"
          presets={[
            { label: "Balanced", value: "({[]}())" },
            { label: "Unmatched", value: "([)]" },
            { label: "Unclosed", value: "(((" },
            { label: "Empty", value: "" },
            { label: "Deep", value: "{{{}}}" },
          ]}
          onApply={setStr}
          onRandom={() => {
            const pool = ["(", ")", "[", "]", "{", "}"];
            const n = 6 + Math.floor(Math.random() * 6);
            setStr(Array.from({ length: n }, () => pool[Math.floor(Math.random() * pool.length)]).join(""));
          }}
        />
      }
      pseudocode={<PseudocodePanel lines={PSEUDO} activeLine={frame?.line} />}
      variables={<VariablesPanel vars={frame?.vars ?? {}} flashKeys={frame?.highlightKey ? [frame.highlightKey] : []} />}
    >
      <div className="flex flex-col items-center gap-5">
        {/* Input tape */}
        <div className="flex gap-1 flex-wrap justify-center max-w-xl">
          {str.split("").map((ch, i) => {
            const isCur = i === (frame?.cursor ?? -1);
            const past = i < (frame?.cursor ?? -1);
            const c = BR_COLOR[ch] ?? "#64748b";
            return (
              <div
                key={i}
                className="flex items-center justify-center font-mono font-bold text-lg rounded transition-all"
                style={{
                  width: 36, height: 44,
                  border: `2px solid ${isCur ? "#3b82f6" : past ? c : THEME.border}`,
                  background: isCur ? "rgba(59,130,246,0.15)" : past ? `${c}22` : THEME.bg,
                  color: past ? c : THEME.text,
                  transform: isCur ? "translateY(-3px)" : "none",
                  boxShadow: isCur ? `0 4px 10px ${c}44` : "none",
                }}
              >
                {ch}
              </div>
            );
          })}
        </div>

        <StackColumn
          items={(frame?.stack ?? []).map((s) => ({ value: s.value, color: s.color }))}
          title="Stack"
          topLabel="top"
          maxHeight={220}
          width={110}
        />

        <div className={`px-4 py-2 rounded-md border text-sm font-bold text-center max-w-lg w-full ${statusBorderClass}`}>
          {status === "matched" && "Balanced"}
          {status === "mismatch" && "Mismatch - closing bracket does not match top"}
          {status === "unbalanced-open" && "Unbalanced - unclosed opening brackets remain"}
          {status === "running" && (frame?.message ?? "Press play to step through.")}
        </div>
      </div>
    </AlgoCanvas>
  );
}

/* ------------------------------------------------------------------ */
/*  Learn                                                               */
/* ------------------------------------------------------------------ */

function LearnTab() {
  const cards = [
    { t: "LIFO — Last In, First Out", b: "The last thing you pushed is the first thing you pop. Exactly like a stack of plates: you take the top plate off. No random-access in the middle." },
    { t: "Two operations, both O(1)", b: "push(x) puts x on top; pop() removes and returns top. Peek/top returns without removing. Implemented on top of an array or singly linked list — both give O(1)." },
    { t: "Why it fits parentheses", b: "Nesting is last-in-first-out: the most recent '(' must close before any older '(' can. That is literally the definition of a stack." },
    { t: "Call stack, undo, back-button", b: "Every function call pushes a frame. Your text editor's Ctrl+Z is a stack. Your browser's back button is a stack. Once you see LIFO, you see stacks everywhere." },
  ];
  return (
    <div className="flex flex-col gap-5">
      <div>
        <SectionEyebrow>mental model</SectionEyebrow>
        <SectionTitle>A Pez dispenser of data</SectionTitle>
        <Lede>
          You can only add and remove from the top. That restriction looks like a weakness, but it
          is precisely what makes stacks fast — and perfectly matched to recursion and nested
          structures.
        </Lede>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {cards.map((c, i) => (
          <Card key={i}>
            <div className="text-[10px] font-mono font-bold text-lime-600 dark:text-lime-400 mb-2 tracking-widest">
              0{i + 1}
            </div>
            <div className="text-sm font-bold text-stone-900 dark:text-stone-50 mb-1">{c.t}</div>
            <div className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">{c.b}</div>
          </Card>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Try It                                                              */
/* ------------------------------------------------------------------ */

function TryTab() {
  const probs = [
    { q: 'Trace isBalanced("{[]}"). Return value?', a: "true" },
    { q: 'Trace isBalanced("([)]"). Return value?', a: "false (mismatch when ')' meets '[')" },
    { q: "After push(1), push(2), push(3), pop(), peek() returns?", a: "2" },
    { q: 'Max stack depth for evaluating "((()))"?', a: "3" },
  ];
  const [guess, setGuess] = useState<(string | null)[]>(probs.map(() => null));
  const [show, setShow] = useState<boolean[]>(probs.map(() => false));
  return (
    <div className="flex flex-col gap-3">
      <Callout>Work each on paper, then reveal.</Callout>
      {probs.map((p, i) => (
        <Card key={i}>
          <div className="text-sm text-stone-800 dark:text-stone-200 mb-3">
            #{i + 1} {p.q}
          </div>
          <div className="flex gap-2 items-center flex-wrap">
            <input
              value={guess[i] ?? ""}
              onChange={(e) => { const v = [...guess]; v[i] = e.target.value; setGuess(v); }}
              placeholder="your answer"
              className="px-3 py-1.5 border border-stone-200 dark:border-white/10 rounded-md font-mono text-sm bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-50 min-w-48"
            />
            <button
              type="button"
              onClick={() => { const v = [...show]; v[i] = true; setShow(v); }}
              className="px-3 py-1.5 border border-stone-200 dark:border-white/10 rounded-md text-xs font-medium bg-white dark:bg-stone-900 text-stone-600 dark:text-stone-400 cursor-pointer hover:border-stone-400 dark:hover:border-white/30 transition-colors"
            >
              Reveal
            </button>
            {show[i] && (
              <span className="text-xs font-bold px-3 py-1.5 rounded-md bg-lime-50 dark:bg-lime-400/10 text-lime-800 dark:text-lime-200 border border-lime-400">
                Answer: {p.a}
              </span>
            )}
          </div>
        </Card>
      ))}
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
        <SubHeading>Beyond brackets — other stack killers</SubHeading>
        <ul className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed space-y-1 pl-4 list-disc">
          <li><strong className="text-stone-900 dark:text-stone-50">Infix to Postfix:</strong> Shunting-yard uses an operator stack</li>
          <li><strong className="text-stone-900 dark:text-stone-50">Evaluate postfix:</strong> push operands, pop for operators</li>
          <li><strong className="text-stone-900 dark:text-stone-50">Next greater element:</strong> monotonic stack in O(n)</li>
          <li><strong className="text-stone-900 dark:text-stone-50">Iterative DFS:</strong> explicit stack replaces recursion</li>
          <li><strong className="text-stone-900 dark:text-stone-50">Function call stack:</strong> stack overflow = too many recursive calls</li>
        </ul>
      </Card>
      <Card>
        <SubHeading>Array vs linked-list backed stack</SubHeading>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          Array: amortized O(1) push (averaged over many pushes, the per-push cost stays constant
          even when the underlying array occasionally has to grow) but occasional O(n) resize; better
          cache locality. Linked list: true O(1) with no resizing, but one heap allocation per push
          and pointer-chasing cache misses. In practice (Python, Java ArrayDeque), the array version
          wins.
        </p>
      </Card>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Root                                                                */
/* ------------------------------------------------------------------ */

interface Props {
  onQuizComplete?: (score: number) => void;
}

export default function L2_Stacks({ onQuizComplete }: Props) {
  const tabs: LessonTabDef[] = [
    { id: "learn", label: "Learn", icon: <BookOpen className="w-4 h-4" />, content: <LearnTab /> },
    { id: "visualize", label: "Visualize", icon: <Play className="w-4 h-4" />, content: <VisualizeTab /> },
    { id: "try", label: "Try It", icon: <Target className="w-4 h-4" />, content: <TryTab /> },
    { id: "insight", label: "Insight", icon: <Lightbulb className="w-4 h-4" />, content: <InsightTab /> },
    ...(PRACTICE_TOPIC_SLUG
      ? [{ id: "practice", label: "Practice", icon: <Code2 className="w-4 h-4" />, content: <PracticeTab topicSlug={PRACTICE_TOPIC_SLUG} /> }]
      : []),
  ];

  const quiz: LessonQuizQuestion[] = [
    {
      question: "A stack follows which ordering principle?",
      options: ["First In First Out", "Last In First Out", "Priority based", "Random access"],
      correctIndex: 1,
      explanation: "LIFO — the most recently pushed element is always the first to be popped.",
    },
    {
      question: "For the string '(){}[]', after processing all characters, the stack contains how many elements?",
      options: ["0", "3", "6", "Depends on order"],
      correctIndex: 0,
      explanation: "Every opening bracket is immediately matched by its closing partner in this string — pushes and pops balance. Final stack is empty.",
    },
    {
      question: 'isBalanced("([)]") returns?',
      options: ["true - counts match", "false - order mismatches", "true - same length", "Undefined"],
      correctIndex: 1,
      explanation: "When ')' arrives, top is '[' — types don't match. Counting alone is not enough; nesting order matters.",
    },
    {
      question: "Time complexity of checking balanced brackets on a length-n string using a stack?",
      options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
      correctIndex: 2,
      explanation: "Each character is pushed at most once and popped at most once — O(n) total. Stack operations are O(1).",
    },
  ];

  return (
    <LessonShell
      title="Stacks"
      level={2}
      lessonNumber={1}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="Balanced parentheses, next-greater-element, min-stack are staples of technical interviews."
      nextLessonHint="Queues"
      onQuizComplete={onQuizComplete}
    />
  );
}

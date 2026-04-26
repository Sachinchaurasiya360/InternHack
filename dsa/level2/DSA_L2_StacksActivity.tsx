"use client";

import { useMemo, useState } from "react";
import { BookOpen, Play, Target, Lightbulb } from "lucide-react";
import EngineeringLessonShell, { EngTabDef, EngQuizQuestion } from "@/components/engineering/EngineeringLessonShell";
import {
  AlgoCanvas, PseudocodePanel, VariablesPanel, InputEditor, useStepPlayer, StackColumn,
} from "@/components/engineering/algo";
import {
  C, DSA_ACCENT as A,
  SectionEyebrow, SectionTitle, SubHeading, Lede,
  Card, Callout,
} from "@/components/engineering/lessonPrimitives";

/* ------------------------------------------------------------------ */
/*  Frame                                                               */
/* ------------------------------------------------------------------ */

interface StItem { value: string; color?: string; }

interface Frame {
  line: number;
  vars: Record<string, string | number | boolean | undefined>;
  message: string;
  highlightKey?: string;
  stack: StItem[];
  cursor: number; // index in input string
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
const BR_COLOR: Record<string, string> = { "(": "#3b82f6", ")": "#3b82f6", "[": "#10b981", "]": "#10b981", "{": "#f59e0b", "}": "#f59e0b" };

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
        f.push({ line: 7, vars: { result: "false" }, message: `Mismatch! Brackets unbalanced - return false`, stack: [...stack], cursor: i, status: "mismatch" });
        return f;
      }
      stack.pop();
      f.push({ line: 8, vars: { ch, popped: top.value, stack_size: stack.length }, highlightKey: "popped", message: `Match ✓ Pop '${top.value}' off stack`, stack: [...stack], cursor: i, status: "running" });
    } else {
      // ignore other chars (treat as whitespace)
    }
  }
  const empty = stack.length === 0;
  f.push({ line: 9, vars: { stack_size: stack.length, result: String(empty) }, message: empty ? "Stack is empty → balanced ✓" : `Stack non-empty (${stack.length} left open) → unbalanced`, stack: [...stack], cursor: s.length - 1, status: empty ? "matched" : "unbalanced-open" });
  return f;
}

/* ------------------------------------------------------------------ */
/*  Visualize                                                           */
/* ------------------------------------------------------------------ */

function VisualizeTab() {
  const [str, setStr] = useState("({[]}())");
  const frames = useMemo(() => buildBalanced(str), [str]);
  const player = useStepPlayer(frames);
  const frame = player.current!;
  const statusColor = frame.status === "matched" ? C.success : frame.status === "mismatch" || frame.status === "unbalanced-open" ? C.danger : C.textMuted;

  return (
    <AlgoCanvas
      title="Balanced-Brackets Checker (LIFO Stack)"
      player={player}
      input={
        <InputEditor
          label="Bracket string"
          value={str}
          placeholder="e.g. (){[]}"
          helper="Use ( ) [ ] { } - other characters ignored"
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
      pseudocode={<PseudocodePanel lines={PSEUDO} activeLine={frame.line} />}
      variables={<VariablesPanel vars={frame.vars} flashKeys={frame.highlightKey ? [frame.highlightKey] : []} />}
    >
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 20 }}>
        {/* Input tape */}
        <div style={{ display: "flex", gap: 4, flexWrap: "wrap", justifyContent: "center", maxWidth: 640 }}>
          {str.split("").map((ch, i) => {
            const isCur = i === frame.cursor;
            const past = i < frame.cursor;
            const c = BR_COLOR[ch] || "#64748b";
            return (
              <div key={i} style={{
                width: 36, height: 44, borderRadius: 6,
                display: "flex", alignItems: "center", justifyContent: "center",
                border: `2px solid ${isCur ? "#3b82f6" : past ? c : C.border}`,
                background: isCur ? "rgba(59,130,246,0.15)" : past ? `${c}22` : C.bg,
                color: past ? c : C.text,
                fontFamily: C.mono, fontSize: "1.1rem", fontWeight: 700,
                transition: "all 0.25s",
                transform: isCur ? "translateY(-3px)" : "none",
                boxShadow: isCur ? `0 4px 10px ${c}44` : "none",
              }}>
                {ch}
              </div>
            );
          })}
        </div>

        {/* Stack */}
        <StackColumn
          items={frame.stack.map((s) => ({ value: s.value, color: s.color }))}
          title="Stack"
          topLabel="top"
          maxHeight={220}
          width={110}
        />

        {/* Status banner */}
        <div style={{
          padding: "8px 18px", borderRadius: 8,
          background: frame.status === "matched" ? `${C.success}14` : frame.status === "mismatch" || frame.status === "unbalanced-open" ? `${C.danger}14` : `${A}10`,
          border: `1.5px solid ${statusColor}`,
          color: statusColor, fontSize: "0.88rem", fontWeight: 700,
          fontFamily: C.heading, textAlign: "center", maxWidth: 520,
        }}>
          {frame.status === "matched" && "✓ Balanced"}
          {frame.status === "mismatch" && "✗ Mismatch - closing bracket doesn't match top"}
          {frame.status === "unbalanced-open" && "✗ Unbalanced - unclosed opening brackets remain"}
          {frame.status === "running" && frame.message}
        </div>
      </div>
    </AlgoCanvas>
  );
}

/* ------------------------------------------------------------------ */
/*  Learn / Try / Insight                                               */
/* ------------------------------------------------------------------ */

function LearnTab() {
  const cards = [
    { t: "LIFO - Last In, First Out", b: "The last thing you pushed is the first thing you pop. Exactly like a stack of plates: you take the top plate off. No random-access in the middle." },
    { t: "Two operations, both O(1)", b: "push(x) puts x on top; pop() removes and returns top. Peek/top returns without removing. Implemented on top of an array or singly linked list - both give O(1)." },
    { t: "Why it fits parentheses", b: "Nesting is last-in-first-out: the most recent '(' must close before any older '(' can. That's literally the definition of a stack." },
    { t: "Call stack, undo, back-button", b: "Every function call pushes a frame. Your text editor's Ctrl+Z is a stack. Your browser's back button is a stack. Once you see LIFO, you see stacks everywhere." },
  ];
  return (
    <div style={{ fontFamily: C.heading, display: "flex", flexDirection: "column", gap: 14 }}>
      <div>
        <SectionEyebrow color={A}>Mental model</SectionEyebrow>
        <SectionTitle>A Pez dispenser of data</SectionTitle>
        <Lede>
          You can only add and remove from the top. That restriction looks like a weakness, but
          it&apos;s precisely what makes stacks fast - and perfectly matched to recursion and nested
          structures.
        </Lede>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 12 }}>
        {cards.map((s, i) => (
          <Card key={i}>
            <div
              style={{
                fontSize: "0.72rem",
                fontWeight: 700,
                color: A,
                marginBottom: 6,
                fontFamily: C.mono,
                letterSpacing: "0.08em",
              }}
            >
              0{i + 1}
            </div>
            <div style={{ fontWeight: 700, fontSize: "0.95rem", color: C.text, marginBottom: 4, letterSpacing: "-0.01em" }}>{s.t}</div>
            <div style={{ fontSize: "0.85rem", color: C.textSecondary, lineHeight: 1.55 }}>{s.b}</div>
          </Card>
        ))}
      </div>
    </div>
  );
}

function TryTab() {
  const probs = [
    { q: "Trace isBalanced(\"{[]}\"). Return value?", a: "true" },
    { q: "Trace isBalanced(\"([)]\"). Return value?", a: "false (mismatch when ')' meets '[')" },
    { q: "After push(1), push(2), push(3), pop(), peek() returns?", a: "2" },
    { q: "Max stack depth for evaluating \"((()))\"?", a: "3" },
  ];
  const [g, setG] = useState<(string | null)[]>(probs.map(() => null));
  const [s, setS] = useState<boolean[]>(probs.map(() => false));
  return (
    <div style={{ fontFamily: C.heading, display: "flex", flexDirection: "column", gap: 12 }}>
      <Callout accent={A}>Work each on paper, then reveal.</Callout>
      {probs.map((p, i) => (
        <Card key={i}>
          <div style={{ fontSize: "0.9rem", marginBottom: 8, color: C.text }}>#{i + 1} {p.q}</div>
          <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
            <input value={g[i] ?? ""} onChange={(e) => { const v = [...g]; v[i] = e.target.value; setG(v); }}
              placeholder="your answer"
              style={{ padding: "6px 10px", border: `1px solid ${C.border}`, borderRadius: 6, fontFamily: C.mono, fontSize: "0.85rem", minWidth: 200, background: C.bg, color: C.text }} />
            <button
              onClick={() => { const v = [...s]; v[i] = true; setS(v); }}
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
              Reveal
            </button>
            {s[i] && (
              <span style={{ fontSize: "0.82rem", fontWeight: 700, padding: "4px 12px", borderRadius: 8,
                color: C.successDark, background: `${C.success}14`, fontFamily: C.heading }}>
                Answer: {p.a}
              </span>
            )}
          </div>
        </Card>
      ))}
    </div>
  );
}

function InsightTab() {
  return (
    <div style={{ fontFamily: C.heading, display: "flex", flexDirection: "column", gap: 12 }}>
      <Card>
        <SubHeading>Beyond brackets - other stack killers</SubHeading>
        <ul style={{ fontSize: "0.9rem", color: C.textSecondary, lineHeight: 1.7, paddingLeft: 22, margin: 0 }}>
          <li><strong>Infix → Postfix</strong>: Shunting-yard uses an operator stack</li>
          <li><strong>Evaluate postfix</strong>: push operands, pop for operators</li>
          <li><strong>Next greater element</strong>: monotonic stack in O(n)</li>
          <li><strong>Iterative DFS</strong>: explicit stack replaces recursion</li>
          <li><strong>Function call stack</strong>: stack overflow = too many recursive calls</li>
        </ul>
      </Card>
      <Card>
        <SubHeading>Array vs linked-list backed stack</SubHeading>
        <p style={{ fontSize: "0.9rem", color: C.textSecondary, lineHeight: 1.6, margin: 0 }}>
          Array: amortized O(1) push but occasional O(n) resize; better cache locality. Linked list: true O(1) with no resizing, but one heap allocation per push and pointer-chasing cache misses. In practice (Python, Java ArrayDeque), the array version wins.
        </p>
      </Card>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Activity                                                             */
/* ------------------------------------------------------------------ */

export default function DSA_L2_StacksActivity() {
  const tabs: EngTabDef[] = [
    { id: "learn", label: "Learn", icon: <BookOpen className="w-4 h-4" />, content: <LearnTab /> },
    { id: "visualize", label: "Visualize", icon: <Play className="w-4 h-4" />, content: <VisualizeTab /> },
    { id: "try", label: "Try It", icon: <Target className="w-4 h-4" />, content: <TryTab /> },
    { id: "insight", label: "Insight", icon: <Lightbulb className="w-4 h-4" />, content: <InsightTab /> },
  ];

  const quiz: EngQuizQuestion[] = [
    {
      question: "A stack follows which ordering principle?",
      options: ["First In First Out", "Last In First Out", "Priority based", "Random access"],
      correctIndex: 1,
      explanation: "LIFO - the most recently pushed element is always the first to be popped.",
    },
    {
      question: "For the string '(){}[]', after processing all characters, the stack contains how many elements?",
      options: ["0", "3", "6", "Depends on order"],
      correctIndex: 0,
      explanation: "Every opening bracket is immediately matched by its closing partner in this string - pushes and pops balance. Final stack is empty.",
    },
    {
      question: "isBalanced(\"([)]\") returns?",
      options: ["true - counts match", "false - order mismatches", "true - same length", "Undefined"],
      correctIndex: 1,
      explanation: "When ')' arrives, top is '[' - types don't match. Counting alone is not enough; nesting order matters.",
    },
    {
      question: "Time complexity of checking balanced brackets on a length-n string using a stack?",
      options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
      correctIndex: 2,
      explanation: "Each character is pushed at most once and popped at most once - O(n) total. Stack operations are O(1).",
    },
  ];

  return (
    <EngineeringLessonShell
      title="Stacks - LIFO"
      level={2}
      lessonNumber={3}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="Balanced parentheses, next-greater-element, min-stack are staples"
      nextLessonHint="Queues - FIFO"
    />
  );
}

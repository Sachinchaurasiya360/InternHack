"use client";

import { useMemo, useState } from "react";
import { BookOpen, Play, Target, Lightbulb } from "lucide-react";
import EngineeringLessonShell, { EngTabDef, EngQuizQuestion } from "@/components/engineering/EngineeringLessonShell";
import {
  AlgoCanvas, PseudocodePanel, VariablesPanel, InputEditor, useStepPlayer, StackColumn
} from "@/components/engineering/algo";
import {
  C,
  DSA_ACCENT as A,
  SectionEyebrow,
  SectionTitle,
  SubHeading,
  Lede,
  Card,
  PillButton,
  Callout,
} from "@/components/engineering/lessonPrimitives";

/* ------------------------------------------------------------------ */
/*  Frame model                                                        */
/* ------------------------------------------------------------------ */

interface CallRec { id: string; label: string; ret?: number; }
interface Frame {
  line: number;
  vars: Record<string, string | number | undefined>;
  message: string;
  stack: CallRec[];
  maxDepth: number;
  result?: number;
}

/* ------------------------------------------------------------------ */
/*  Recursive factorial: fact(n) - demonstrates O(n) stack             */
/* ------------------------------------------------------------------ */

const PSEUDO_REC_FACT = [
  "function fact(n):",
  "  if n <= 1:",
  "    return 1",
  "  return n * fact(n - 1)",
];

function buildRecFact(n0: number): Frame[] {
  const f: Frame[] = [];
  const stack: CallRec[] = [];
  let maxDepth = 0;
  const enter = (n: number, line: number, msg: string) => {
    stack.push({ id: `fact(${n})`, label: `fact(${n})` });
    maxDepth = Math.max(maxDepth, stack.length);
    f.push({ line, vars: { n, depth: stack.length }, message: msg, stack: [...stack], maxDepth });
  };
  const exit = (n: number, ret: number, line: number, msg: string) => {
    stack[stack.length - 1] = { ...stack[stack.length - 1], ret };
    f.push({ line, vars: { n, "returns": ret, depth: stack.length }, message: msg, stack: [...stack], maxDepth });
    stack.pop();
  };

  function go(n: number): number {
    enter(n, 0, `Call fact(${n}) — push a new stack frame.`);
    f.push({ line: 1, vars: { n, depth: stack.length }, message: `Check base case: is ${n} ≤ 1?`, stack: [...stack], maxDepth });
    if (n <= 1) {
      exit(n, 1, 2, `Base case hit. fact(${n}) = 1. Pop frame.`);
      return 1;
    }
    f.push({ line: 3, vars: { n, depth: stack.length }, message: `Recurse: need fact(${n - 1}) before multiplying.`, stack: [...stack], maxDepth });
    const sub = go(n - 1);
    const r = n * sub;
    exit(n, r, 3, `fact(${n}) = ${n} × ${sub} = ${r}. Pop frame.`);
    return r;
  }

  const finalAnswer = go(n0);
  f.push({
    line: 3, vars: { n: n0, result: finalAnswer, "max depth": maxDepth },
    message: `Done. Peak stack depth was ${maxDepth} — that is the auxiliary space O(n).`,
    stack: [], maxDepth, result: finalAnswer,
  });
  return f;
}

/* ------------------------------------------------------------------ */
/*  Iterative factorial: O(1) stack                                    */
/* ------------------------------------------------------------------ */

const PSEUDO_ITER_FACT = [
  "function fact(n):",
  "  result ← 1",
  "  for i in 2..n:",
  "    result ← result * i",
  "  return result",
];

function buildIterFact(n0: number): Frame[] {
  const f: Frame[] = [];
  const stack: CallRec[] = [{ id: "main", label: "main()" }];
  f.push({ line: 0, vars: { n: n0 }, message: `Call fact(${n0}) — single frame on the stack.`, stack: [...stack], maxDepth: 1 });
  let result = 1;
  f.push({ line: 1, vars: { n: n0, result }, message: `Initialise result = 1.`, stack: [...stack], maxDepth: 1 });
  for (let i = 2; i <= n0; i++) {
    f.push({ line: 2, vars: { n: n0, i, result }, message: `Loop head: i = ${i}.`, stack: [...stack], maxDepth: 1 });
    result = result * i;
    f.push({ line: 3, vars: { n: n0, i, result }, message: `result ← result × ${i} = ${result}.`, stack: [...stack], maxDepth: 1 });
  }
  f.push({ line: 4, vars: { n: n0, result }, message: `Return ${result}. Stack never grew past 1 frame → O(1) auxiliary space.`, stack: [...stack], maxDepth: 1, result });
  return f;
}

/* ------------------------------------------------------------------ */
/*  Visualize tab                                                      */
/* ------------------------------------------------------------------ */

type Mode = "rec" | "iter";

function VisualizeTab() {
  const [mode, setMode] = useState<Mode>("rec");
  const [n, setN] = useState(5);
  const [inputStr, setInputStr] = useState("5");

  const frames = useMemo(
    () => (mode === "rec" ? buildRecFact(n) : buildIterFact(n)),
    [mode, n]
  );
  const player = useStepPlayer(frames);
  const frame = player.current!;

  const isRec = mode === "rec";
  const spaceColor = isRec ? C.danger : C.success;
  const spaceColorDark = isRec ? C.dangerDark : C.successDark;
  const spaceLabel = isRec ? "O(n) — grows with input" : "O(1) — single frame";

  return (
    <AlgoCanvas
      title={`Factorial — ${isRec ? "Recursive" : "Iterative"}`}
      player={player}
      input={
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <InputEditor
            label="Input n"
            value={inputStr}
            placeholder="e.g. 5"
            helper="We trace fact(n). Try both modes and compare the stack height."
            presets={[
              { label: "n = 1", value: "1" },
              { label: "n = 3", value: "3" },
              { label: "n = 5", value: "5" },
              { label: "n = 8", value: "8" },
            ]}
            onApply={(v) => {
              const x = Math.max(1, Math.min(10, Math.floor(Number(v) || 0)));
              if (x > 0) {
                setInputStr(String(x));
                setN(x);
              }
            }}
            onRandom={() => {
              const x = 1 + Math.floor(Math.random() * 8);
              setInputStr(String(x));
              setN(x);
            }}
          />
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {([
              ["rec", "Recursive — O(n) stack"],
              ["iter", "Iterative — O(1) stack"],
            ] as const).map(([id, label]) => (
              <PillButton key={id} onClick={() => setMode(id)} active={mode === id} color={A}>
                <span style={{ fontSize: "0.78rem" }}>{label}</span>
              </PillButton>
            ))}
          </div>
        </div>
      }
      pseudocode={<PseudocodePanel lines={isRec ? PSEUDO_REC_FACT : PSEUDO_ITER_FACT} activeLine={frame.line} />}
      variables={<VariablesPanel vars={frame.vars} flashKeys={["depth", "result", "i"]} />}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr auto",
          gap: 24,
          alignItems: "center",
          justifyItems: "center",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
          <div
            style={{
              fontSize: "0.74rem",
              fontWeight: 700,
              color: C.textMuted,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              fontFamily: C.heading,
            }}
          >
            Auxiliary space
          </div>
          <div
            style={{
              padding: "10px 18px",
              borderRadius: 12,
              background: `${spaceColor}14`,
              border: `2px solid ${spaceColor}`,
              color: spaceColorDark,
              fontFamily: C.mono,
              fontSize: "1.1rem",
              fontWeight: 800,
            }}
          >
            {spaceLabel}
          </div>
          <div
            style={{
              fontSize: "0.85rem",
              color: C.textSecondary,
              maxWidth: 280,
              textAlign: "center",
              lineHeight: 1.55,
              fontFamily: C.heading,
            }}
          >
            Peak stack frames during this trace:{" "}
            <strong style={{ color: C.text }}>{frame.maxDepth}</strong>
          </div>

          <Callout accent={A}>{frame.message}</Callout>
        </div>

        <StackColumn
          title="Call Stack"
          items={frame.stack.map((s) => ({
            value: s.ret !== undefined ? `${s.label} ↩ ${s.ret}` : s.label,
            color: s.ret !== undefined ? C.success : undefined,
          }))}
          maxHeight={300}
          width={150}
          topLabel="top"
        />
      </div>
    </AlgoCanvas>
  );
}

/* ------------------------------------------------------------------ */
/*  Learn tab                                                          */
/* ------------------------------------------------------------------ */

function LearnTab() {
  const cards = [
    { t: "Variables are O(1)", b: "A fixed number of scalars (counters, accumulators) uses constant memory no matter how big n is." },
    { t: "New arrays are O(size)", b: "If you allocate a helper array of length n, you just added O(n) space." },
    { t: "Recursion costs stack frames", b: "Each unresolved recursive call keeps its locals alive on the call stack. Depth d → O(d) space." },
    { t: "Data structures count", b: "Hash maps, sets, matrices — their sizes all feed into auxiliary space." },
  ];
  return (
    <div style={{ fontFamily: C.heading, display: "flex", flexDirection: "column", gap: 14 }}>
      <div>
        <SectionEyebrow color={A}>Space complexity</SectionEyebrow>
        <SectionTitle>How much memory does the algorithm need?</SectionTitle>
        <Lede>
          The total memory an algorithm uses as a function of the input size n. We split it into{" "}
          <strong style={{ color: C.text }}>input space</strong> (the given data) and{" "}
          <strong style={{ color: C.text }}>auxiliary space</strong> (anything extra the algorithm
          allocates). Interviews care about auxiliary space.
        </Lede>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 12 }}>
        {cards.map((c, i) => (
          <Card key={i}>
            <div style={{ fontWeight: 700, fontSize: "0.95rem", color: C.text, marginBottom: 6, letterSpacing: "-0.01em" }}>
              {c.t}
            </div>
            <div style={{ fontSize: "0.85rem", color: C.textSecondary, lineHeight: 1.55 }}>
              {c.b}
            </div>
          </Card>
        ))}
      </div>

      <Card>
        <SubHeading>Classic comparisons</SubHeading>
        <table style={{ width: "100%", fontSize: "0.86rem", borderCollapse: "collapse", fontFamily: C.heading }}>
          <tbody>
            {[
              ["Iterative factorial / Fibonacci", "O(1)"],
              ["Recursive factorial / Fibonacci (no memo)", "O(n)"],
              ["Merge sort auxiliary array", "O(n)"],
              ["Quick sort (in-place)", "O(log n)"],
              ["BFS on a graph (queue)", "O(V)"],
            ].map(([what, big], i, arr) => (
              <tr key={i} style={{ borderTop: i === 0 ? "none" : `1px solid ${C.borderLight}` }}>
                <td style={{ padding: "9px 6px", color: C.textSecondary }}>{what}</td>
                <td style={{ padding: "9px 6px", fontFamily: C.mono, color: A, fontWeight: 700, textAlign: "right" }}>
                  {big}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Try tab                                                            */
/* ------------------------------------------------------------------ */

function TryTab() {
  const problems = [
    {
      snippet: "for i in 0..n:\n  sum += a[i]",
      options: ["O(1)", "O(n)", "O(n²)"],
      answer: 0,
      explain: "A single accumulator sum is one scalar — constant auxiliary space.",
    },
    {
      snippet: "copy ← new array of size n\nfor i in 0..n:\n  copy[i] ← a[i]",
      options: ["O(1)", "O(log n)", "O(n)"],
      answer: 2,
      explain: "Allocating a fresh size-n array adds O(n) auxiliary space.",
    },
    {
      snippet: "function f(n):\n  if n == 0: return 0\n  return f(n-1) + 1",
      options: ["O(1)", "O(n)", "O(log n)"],
      answer: 1,
      explain: "Recursion depth is n → n stack frames alive at once.",
    },
    {
      snippet: "function bs(a, lo, hi, x):\n  if lo > hi: return -1\n  mid ← (lo + hi) / 2\n  ...",
      options: ["O(1)", "O(log n)", "O(n)"],
      answer: 1,
      explain: "Binary search recursion halves each call → stack depth log₂ n.",
    },
  ];
  const [picked, setPicked] = useState<(number | null)[]>(problems.map(() => null));
  return (
    <div style={{ fontFamily: C.heading, display: "flex", flexDirection: "column", gap: 12 }}>
      <Callout accent={A}>
        Pick the auxiliary space for each snippet. Input arrays do not count — only new
        allocations and stack frames.
      </Callout>
      {problems.map((p, i) => {
        const sel = picked[i];
        return (
          <Card key={i}>
            <pre
              style={{
                background: "#0F172A",
                color: "#E2E8F0",
                padding: 12,
                borderRadius: 10,
                fontSize: "0.82rem",
                fontFamily: C.mono,
                margin: "0 0 12px",
                overflowX: "auto",
                lineHeight: 1.6,
              }}
            >
              {p.snippet}
            </pre>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {p.options.map((o, idx) => {
                const correct = sel !== null && idx === p.answer;
                const wrong = sel !== null && idx === sel && idx !== p.answer;
                return (
                  <button
                    key={idx}
                    onClick={() => {
                      const v = [...picked];
                      v[i] = idx;
                      setPicked(v);
                    }}
                    style={{
                      padding: "6px 14px",
                      borderRadius: 8,
                      fontSize: "0.82rem",
                      fontWeight: 700,
                      border: correct
                        ? `1.5px solid ${C.success}`
                        : wrong
                          ? `1.5px solid ${C.danger}`
                          : `1px solid ${C.border}`,
                      background: correct ? `${C.success}14` : wrong ? `${C.danger}14` : C.bg,
                      color: correct ? C.successDark : wrong ? C.dangerDark : C.text,
                      cursor: "pointer",
                      fontFamily: C.mono,
                    }}
                  >
                    {o}
                  </button>
                );
              })}
            </div>
            {sel !== null && (
              <div style={{ marginTop: 12 }}>
                <Callout accent={A}>{p.explain}</Callout>
              </div>
            )}
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
    <div style={{ fontFamily: C.heading, display: "flex", flexDirection: "column", gap: 12 }}>
      <Card>
        <SubHeading>Time vs Space trade-offs</SubHeading>
        <p style={{ fontSize: "0.9rem", color: C.textSecondary, lineHeight: 1.6, margin: 0 }}>
          You can almost always trade one for the other. Memoisation turns exponential-time
          recursion into linear time — by spending O(n) extra space. Interviewers love this
          pattern; it shows up in DP, hashing, and caching.
        </p>
      </Card>
      <Card>
        <SubHeading>Tail recursion caveat</SubHeading>
        <p style={{ fontSize: "0.9rem", color: C.textSecondary, lineHeight: 1.6, margin: 0 }}>
          Some languages (Scheme, Scala) optimise tail calls to O(1) space. Mainstream Python /
          Java / C++ do <em>not</em>. In interviews, assume each recursive call costs a frame.
        </p>
      </Card>
      <Card>
        <SubHeading>Interview-style checklist</SubHeading>
        <ol style={{ fontSize: "0.9rem", color: C.textSecondary, lineHeight: 1.7, paddingLeft: 22, margin: 0 }}>
          <li>Count all <em>new</em> data structures and multiply their sizes.</li>
          <li>Measure recursion depth. Each level = 1 frame.</li>
          <li>Add everything; drop constants and lower-order terms.</li>
          <li>State whether you are reporting input + auxiliary, or just auxiliary.</li>
        </ol>
      </Card>
    </div>
  );
}

/* ------------------------------------------------------------------ */

export default function DSA_L1_SpaceComplexityActivity() {
  const tabs: EngTabDef[] = [
    { id: "learn", label: "Learn", icon: <BookOpen className="w-4 h-4" />, content: <LearnTab /> },
    { id: "visualize", label: "Visualize", icon: <Play className="w-4 h-4" />, content: <VisualizeTab /> },
    { id: "try", label: "Try It", icon: <Target className="w-4 h-4" />, content: <TryTab /> },
    { id: "insight", label: "Insight", icon: <Lightbulb className="w-4 h-4" />, content: <InsightTab /> },
  ];
  const quiz: EngQuizQuestion[] = [
    {
      question: "A recursive function f(n) that calls itself once with argument n-1 uses how much auxiliary space?",
      options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
      correctIndex: 2,
      explanation: "Each call lives on the stack until its base case returns. Depth n → n frames → O(n).",
    },
    {
      question: "Which version of factorial uses O(1) auxiliary space?",
      options: [
        "Recursive with memoisation",
        "Plain recursive",
        "Iterative with a loop",
        "None — all factorial implementations need O(n)",
      ],
      correctIndex: 2,
      explanation: "A simple for-loop with a single accumulator uses one frame and one scalar — constant space.",
    },
    {
      question: "Merge sort's extra array during merges makes its auxiliary space…",
      options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
      correctIndex: 2,
      explanation: "The temporary buffer holds up to n elements while merging, so auxiliary space is O(n).",
    },
    {
      question: "You trade O(1) space for O(n) space by memoising. What do you typically gain?",
      options: ["Simpler code", "A smaller stack", "Lower time complexity", "Easier debugging"],
      correctIndex: 2,
      explanation: "Memoisation caches results so exponential-time recursion collapses to polynomial-time — space-for-time trade.",
    },
  ];
  return (
    <EngineeringLessonShell
      title="Space Complexity"
      level={1}
      lessonNumber={3}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="Expected whenever recursion or caching is discussed"
      nextLessonHint="Arrays — Fundamentals"
    />
  );
}

"use client";

import { useMemo, useState } from "react";
import { BookOpen, Play, Target, Lightbulb } from "lucide-react";
import EngineeringLessonShell, { EngTabDef, EngQuizQuestion } from "@/components/engineering/EngineeringLessonShell";
import {
  AlgoCanvas, PseudocodePanel, VariablesPanel, InputEditor, useStepPlayer
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
/*  Growth curves: plot O(1) .. O(n!) on a scaled SVG plane           */
/* ------------------------------------------------------------------ */

type Curve = { id: string; label: string; color: string; f: (n: number) => number };

const CURVES: Curve[] = [
  { id: "c1", label: "O(1)", color: "#10B981", f: () => 1 },
  { id: "clog", label: "O(log n)", color: "#06B6D4", f: (n) => Math.log2(Math.max(1, n)) },
  { id: "cn", label: "O(n)", color: "#3B82F6", f: (n) => n },
  { id: "cnln", label: "O(n log n)", color: "#8B5CF6", f: (n) => n * Math.log2(Math.max(1, n)) },
  { id: "cn2", label: "O(n²)", color: "#F59E0B", f: (n) => n * n },
  { id: "c2n", label: "O(2ⁿ)", color: "#EF4444", f: (n) => Math.pow(2, Math.min(40, n)) },
  {
    id: "cfact",
    label: "O(n!)",
    color: "#BE185D",
    f: (n) => {
      let p = 1;
      for (let i = 2; i <= Math.min(n, 18); i++) p *= i;
      return p;
    },
  },
];

function GrowthPlot({
  nMax,
  enabled,
  highlight,
}: {
  nMax: number;
  enabled: Record<string, boolean>;
  highlight?: string;
}) {
  const W = 560,
    H = 300,
    PAD = 38;
  const yMax = Math.max(
    ...CURVES.filter((c) => enabled[c.id]).map((c) => Math.log10(c.f(nMax) + 1))
  );
  const yScale = (y: number) =>
    H - PAD - (Math.log10(y + 1) / Math.max(0.0001, yMax)) * (H - PAD * 2);
  const xScale = (x: number) => PAD + (x / nMax) * (W - PAD * 2);

  const samples = 60;
  return (
    <svg width={W} height={H} style={{ background: C.bg, borderRadius: 10 }}>
      {[0, 0.25, 0.5, 0.75, 1].map((t, i) => (
        <line
          key={`gx${i}`}
          x1={PAD}
          y1={PAD + t * (H - PAD * 2)}
          x2={W - PAD}
          y2={PAD + t * (H - PAD * 2)}
          stroke={C.borderLight}
          strokeWidth={1}
        />
      ))}
      {[0, 0.25, 0.5, 0.75, 1].map((t, i) => (
        <line
          key={`gy${i}`}
          x1={PAD + t * (W - PAD * 2)}
          y1={PAD}
          x2={PAD + t * (W - PAD * 2)}
          y2={H - PAD}
          stroke={C.borderLight}
          strokeWidth={1}
        />
      ))}
      <line x1={PAD} y1={H - PAD} x2={W - PAD} y2={H - PAD} stroke={C.textMuted} strokeWidth={1.4} />
      <line x1={PAD} y1={PAD} x2={PAD} y2={H - PAD} stroke={C.textMuted} strokeWidth={1.4} />
      <text
        x={W / 2}
        y={H - 6}
        textAnchor="middle"
        fontSize="11"
        fill={C.textSecondary}
        fontFamily={C.heading}
      >
        input size n (1 … {nMax})
      </text>
      <text
        x={12}
        y={H / 2}
        textAnchor="middle"
        fontSize="11"
        fill={C.textSecondary}
        fontFamily={C.heading}
        transform={`rotate(-90 12 ${H / 2})`}
      >
        operations (log scale)
      </text>

      {CURVES.filter((c) => enabled[c.id]).map((c) => {
        const pts: string[] = [];
        for (let i = 0; i <= samples; i++) {
          const n = 1 + (nMax - 1) * (i / samples);
          const y = c.f(n);
          pts.push(`${xScale(n).toFixed(1)},${yScale(y).toFixed(1)}`);
        }
        const isHi = highlight === c.id;
        return (
          <polyline
            key={c.id}
            points={pts.join(" ")}
            fill="none"
            stroke={c.color}
            strokeWidth={isHi ? 3.5 : 2}
            opacity={highlight && !isHi ? 0.35 : 1}
            style={{ transition: "opacity 0.25s, stroke-width 0.25s" }}
          />
        );
      })}
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Loop analyzer: preset -> frames with line-synced pseudocode        */
/* ------------------------------------------------------------------ */

interface LoopPreset {
  id: string;
  label: string;
  pseudo: string[];
  bigO: string;
  build: (n: number) => LoopFrame[];
}

interface LoopFrame {
  line: number;
  vars: Record<string, string | number | undefined>;
  message: string;
  ops: number;
  activeCurve: string;
}

function buildSingle(n: number): LoopFrame[] {
  const f: LoopFrame[] = [];
  f.push({ line: 0, vars: { n, ops: 0 }, message: `Start a single loop over n = ${n}.`, ops: 0, activeCurve: "cn" });
  let ops = 0;
  const cap = Math.min(n, 10);
  for (let i = 0; i < cap; i++) {
    ops++;
    f.push({ line: 1, vars: { n, i, ops }, message: `Iteration ${i + 1}: one unit of work.`, ops, activeCurve: "cn" });
  }
  f.push({ line: 2, vars: { n, ops: n }, message: `Total ${n} iterations → work grows linearly. That is O(n).`, ops: n, activeCurve: "cn" });
  return f;
}

function buildNested(n: number): LoopFrame[] {
  const f: LoopFrame[] = [];
  f.push({ line: 0, vars: { n, ops: 0 }, message: `Two nested loops, each up to n.`, ops: 0, activeCurve: "cn2" });
  let ops = 0;
  const cap = Math.min(n, 5);
  for (let i = 0; i < cap; i++) {
    f.push({ line: 1, vars: { n, i, ops }, message: `Outer step i = ${i}. Inner loop will also run n times.`, ops, activeCurve: "cn2" });
    for (let j = 0; j < cap; j++) {
      ops++;
      f.push({ line: 2, vars: { n, i, j, ops }, message: `Inner step j = ${j}. Every outer step costs n inner steps.`, ops, activeCurve: "cn2" });
    }
  }
  f.push({ line: 3, vars: { n, ops: n * n }, message: `Total ≈ n × n = n² operations → O(n²).`, ops: n * n, activeCurve: "cn2" });
  return f;
}

function buildLog(n: number): LoopFrame[] {
  const f: LoopFrame[] = [];
  f.push({ line: 0, vars: { n, ops: 0 }, message: `Halving loop: i doubles each step.`, ops: 0, activeCurve: "clog" });
  let ops = 0;
  let i = 1;
  while (i < n) {
    ops++;
    f.push({ line: 1, vars: { n, i, ops }, message: `i = ${i}. Next iteration will double it.`, ops, activeCurve: "clog" });
    i *= 2;
  }
  const total = Math.max(1, Math.ceil(Math.log2(Math.max(2, n))));
  f.push({ line: 2, vars: { n, ops: total }, message: `Only about log₂(n) ≈ ${total} iterations → O(log n).`, ops: total, activeCurve: "clog" });
  return f;
}

function buildNLogN(n: number): LoopFrame[] {
  const f: LoopFrame[] = [];
  f.push({ line: 0, vars: { n, ops: 0 }, message: `Outer linear loop; inner doubling loop.`, ops: 0, activeCurve: "cnln" });
  let ops = 0;
  const cap = Math.min(n, 4);
  for (let i = 0; i < cap; i++) {
    f.push({ line: 1, vars: { n, i, ops }, message: `Outer i = ${i}. Inner runs log(n) times.`, ops, activeCurve: "cnln" });
    let j = 1;
    while (j < n) {
      ops++;
      f.push({ line: 2, vars: { n, i, j, ops }, message: `Inner j = ${j}, then doubles.`, ops, activeCurve: "cnln" });
      j *= 2;
    }
  }
  const total = Math.ceil(n * Math.log2(Math.max(2, n)));
  f.push({ line: 3, vars: { n, ops: total }, message: `Total ≈ n · log₂(n) operations → O(n log n).`, ops: total, activeCurve: "cnln" });
  return f;
}

const PRESETS: LoopPreset[] = [
  { id: "single", label: "Single loop", pseudo: ["for i in 0..n:", "  work()", "# done"], bigO: "O(n)", build: buildSingle },
  { id: "nested", label: "Nested loops", pseudo: ["for i in 0..n:", "  for j in 0..n:", "    work()", "# done"], bigO: "O(n²)", build: buildNested },
  { id: "log", label: "Halving loop", pseudo: ["i ← 1", "while i < n:", "  i ← i * 2", "# done"], bigO: "O(log n)", build: buildLog },
  { id: "nln", label: "Linear × log", pseudo: ["for i in 0..n:", "  j ← 1", "  while j < n: j ← j * 2", "# done"], bigO: "O(n log n)", build: buildNLogN },
];

/* ------------------------------------------------------------------ */
/*  Visualize tab                                                      */
/* ------------------------------------------------------------------ */

function VisualizeTab() {
  const [n, setN] = useState(20);
  const [presetId, setPresetId] = useState("nested");
  const [enabled, setEnabled] = useState<Record<string, boolean>>({
    c1: true, clog: true, cn: true, cnln: true, cn2: true, c2n: true, cfact: false,
  });
  const [inputStr, setInputStr] = useState("20");

  const preset = PRESETS.find((p) => p.id === presetId)!;
  const frames = useMemo(() => preset.build(n), [preset, n]);
  const player = useStepPlayer(frames);
  const frame = player.current!;

  return (
    <AlgoCanvas
      title={`Loop Analyzer → ${preset.bigO}`}
      player={player}
      input={
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <InputEditor
            label="Input size n"
            value={inputStr}
            placeholder="e.g. 20"
            helper="Pick an n to trace. The loop analyzer runs up to a small cap so the frames stay readable."
            presets={[
              { label: "n = 8", value: "8" },
              { label: "n = 20", value: "20" },
              { label: "n = 100", value: "100" },
              { label: "n = 1000", value: "1000" },
            ]}
            onApply={(v) => {
              const x = Math.max(1, Math.min(1000, Math.floor(Number(v) || 0)));
              if (x > 0) {
                setInputStr(String(x));
                setN(x);
              }
            }}
            onRandom={() => {
              const x = 1 + Math.floor(Math.random() * 100);
              setInputStr(String(x));
              setN(x);
            }}
          />
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
            {PRESETS.map((p) => (
              <PillButton
                key={p.id}
                onClick={() => setPresetId(p.id)}
                active={presetId === p.id}
                color={A}
              >
                <span style={{ fontSize: "0.78rem", fontWeight: 600 }}>
                  {p.label} · <span style={{ fontWeight: 800, fontFamily: C.mono }}>{p.bigO}</span>
                </span>
              </PillButton>
            ))}
          </div>
        </div>
      }
      pseudocode={<PseudocodePanel lines={preset.pseudo} activeLine={frame.line} />}
      variables={<VariablesPanel vars={frame.vars} flashKeys={["ops"]} />}
    >
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
        <GrowthPlot nMax={Math.max(10, n)} enabled={enabled} highlight={frame.activeCurve} />
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "center" }}>
          {CURVES.map((c) => (
            <button
              key={c.id}
              onClick={() => setEnabled((e) => ({ ...e, [c.id]: !e[c.id] }))}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                padding: "5px 11px",
                borderRadius: 999,
                border: `1.5px solid ${enabled[c.id] ? c.color : C.border}`,
                background: enabled[c.id] ? `${c.color}18` : C.bg,
                color: enabled[c.id] ? c.color : C.textMuted,
                fontSize: "0.74rem",
                fontWeight: 700,
                cursor: "pointer",
                fontFamily: C.heading,
                transition: "all 0.2s",
              }}
            >
              <span style={{ width: 10, height: 10, borderRadius: 2, background: c.color }} />
              {c.label}
            </button>
          ))}
        </div>

        <Callout accent={A}>{frame.message}</Callout>
      </div>
    </AlgoCanvas>
  );
}

/* ------------------------------------------------------------------ */
/*  Learn tab                                                          */
/* ------------------------------------------------------------------ */

function LearnTab() {
  const rows = [
    { o: "O(1)", name: "Constant", ex: "Array index lookup a[i]" },
    { o: "O(log n)", name: "Logarithmic", ex: "Binary search in a sorted array" },
    { o: "O(n)", name: "Linear", ex: "Linear search, sum of an array" },
    { o: "O(n log n)", name: "Linearithmic", ex: "Merge sort, heap sort" },
    { o: "O(n²)", name: "Quadratic", ex: "Bubble sort, checking all pairs" },
    { o: "O(2ⁿ)", name: "Exponential", ex: "Naive recursive subsets, Fibonacci" },
    { o: "O(n!)", name: "Factorial", ex: "Generating all permutations" },
  ];
  return (
    <div style={{ fontFamily: C.heading, display: "flex", flexDirection: "column", gap: 14 }}>
      <div>
        <SectionEyebrow color={A}>Why Big-O?</SectionEyebrow>
        <SectionTitle>How fast does work grow as n grows?</SectionTitle>
        <Lede>
          Big-O describes how the number of operations grows as the input size n grows. We ignore
          constants and lower-order terms and keep only the dominant term — because for large n,
          that term swallows everything else.
        </Lede>
      </div>

      <Card padded={false} style={{ overflow: "hidden" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.86rem", fontFamily: C.heading }}>
          <thead>
            <tr style={{ background: C.bgSoft }}>
              <th style={{ textAlign: "left", padding: "11px 16px", fontWeight: 700, color: C.textMuted, borderBottom: `1px solid ${C.border}`, fontSize: "0.78rem", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                Big-O
              </th>
              <th style={{ textAlign: "left", padding: "11px 16px", fontWeight: 700, color: C.textMuted, borderBottom: `1px solid ${C.border}`, fontSize: "0.78rem", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                Name
              </th>
              <th style={{ textAlign: "left", padding: "11px 16px", fontWeight: 700, color: C.textMuted, borderBottom: `1px solid ${C.border}`, fontSize: "0.78rem", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                Typical example
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={r.o} style={{ borderTop: i === 0 ? "none" : `1px solid ${C.borderLight}` }}>
                <td style={{ padding: "9px 16px", fontFamily: C.mono, fontWeight: 700, color: A }}>{r.o}</td>
                <td style={{ padding: "9px 16px", color: C.text }}>{r.name}</td>
                <td style={{ padding: "9px 16px", color: C.textSecondary }}>{r.ex}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>

      <Card>
        <SubHeading>Three rules you will use every day</SubHeading>
        <ol style={{ fontSize: "0.9rem", color: C.textSecondary, lineHeight: 1.7, paddingLeft: 22, margin: 0 }}>
          <li>
            <strong style={{ color: C.text }}>Drop constants:</strong> 3n + 7 → O(n). A constant
            coefficient never changes the class.
          </li>
          <li>
            <strong style={{ color: C.text }}>Drop lower-order terms:</strong> n² + n + 100 →
            O(n²). The biggest term wins.
          </li>
          <li>
            <strong style={{ color: C.text }}>Nested loops multiply:</strong> a loop running m
            times inside one running n times is O(n·m).
          </li>
        </ol>
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
      snippet: "for i in 0..n:\n  for j in 0..n:\n    x += 1",
      options: ["O(1)", "O(n)", "O(n²)", "O(n log n)"],
      answer: 2,
      explain: "Two nested loops each of length n multiply → n × n = n².",
    },
    {
      snippet: "i ← 1\nwhile i < n:\n  i ← i * 2",
      options: ["O(n)", "O(log n)", "O(n²)", "O(1)"],
      answer: 1,
      explain: "Doubling i halves the remaining work each step → log₂(n) steps.",
    },
    {
      snippet: "for i in 0..n:\n  sum += a[i]\nfor j in 0..n:\n  cnt += 1",
      options: ["O(n²)", "O(2n)", "O(n)", "O(log n)"],
      answer: 2,
      explain: "Two sequential loops of length n add: 2n → dropping constants gives O(n).",
    },
    {
      snippet: "for i in 0..n:\n  j ← 1\n  while j < n: j ← j * 2",
      options: ["O(n)", "O(n²)", "O(n log n)", "O(log n)"],
      answer: 2,
      explain: "Linear outer × log-inner → n · log n.",
    },
  ];
  const [picked, setPicked] = useState<(number | null)[]>(problems.map(() => null));

  return (
    <div style={{ fontFamily: C.heading, display: "flex", flexDirection: "column", gap: 12 }}>
      <Callout accent={A}>
        Classify each snippet. Numbers ignored, loops counted. Click an option, then see the
        explanation.
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
                      background: correct
                        ? `${C.success}14`
                        : wrong
                          ? `${C.danger}14`
                          : C.bg,
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
        <SubHeading>The formal definition (the one in the textbook)</SubHeading>
        <p style={{ fontSize: "0.9rem", color: C.textSecondary, lineHeight: 1.7, margin: "0 0 8px" }}>
          <code style={{ fontFamily: C.mono, background: C.bgSoft, padding: "1px 5px", borderRadius: 4 }}>
            f(n) ∈ O(g(n))
          </code>{" "}
          iff there exist constants{" "}
          <code style={{ fontFamily: C.mono, background: C.bgSoft, padding: "1px 5px", borderRadius: 4 }}>c &gt; 0</code> and{" "}
          <code style={{ fontFamily: C.mono, background: C.bgSoft, padding: "1px 5px", borderRadius: 4 }}>n₀</code> such
          that{" "}
          <code style={{ fontFamily: C.mono, background: C.bgSoft, padding: "1px 5px", borderRadius: 4 }}>
            0 ≤ f(n) ≤ c · g(n)
          </code>{" "}
          for all <em>n ≥ n₀</em>.
        </p>
        <p style={{ fontSize: "0.86rem", color: C.textSecondary, lineHeight: 1.6, margin: "0 0 8px" }}>
          Plain English: from some point onward, <em>f</em> is at most a constant multiple of <em>g</em>. That&apos;s
          why constants and lower-order terms can be dropped — they get absorbed by <em>c</em> for large enough <em>n</em>.
        </p>
        <p style={{ fontSize: "0.86rem", color: C.textSecondary, lineHeight: 1.6, margin: 0 }}>
          <strong style={{ color: C.text }}>Worked example:</strong> show <code style={{ fontFamily: C.mono }}>3n + 7 ∈ O(n)</code>.
          Pick <code style={{ fontFamily: C.mono }}>c = 4</code>, <code style={{ fontFamily: C.mono }}>n₀ = 7</code>. For
          n ≥ 7: <code style={{ fontFamily: C.mono }}>3n + 7 ≤ 3n + n = 4n = c·n</code>. ∎
        </p>
        <p style={{ fontSize: "0.82rem", color: C.textMuted, lineHeight: 1.5, marginTop: 10, marginBottom: 0 }}>
          Cousins: <strong>Ω(g)</strong> = at least c·g eventually (lower bound).{" "}
          <strong>Θ(g)</strong> = both O and Ω (tight). Most CS courses say &quot;O&quot; when they mean Θ.
        </p>
      </Card>

      <Card>
        <SubHeading>Amortized analysis - dynamic array doubling</SubHeading>
        <p style={{ fontSize: "0.88rem", color: C.textSecondary, lineHeight: 1.65, margin: "0 0 8px" }}>
          <code style={{ fontFamily: C.mono }}>list.append(x)</code> in Python (or{" "}
          <code style={{ fontFamily: C.mono }}>ArrayList.add</code> in Java) is{" "}
          <strong>amortized O(1)</strong>, not worst-case. Sometimes a single append is O(n) (when the array
          is full and must be copied to a new larger one). But the <em>average over a long sequence</em> is O(1).
        </p>
        <p style={{ fontSize: "0.86rem", color: C.textSecondary, lineHeight: 1.65, margin: "0 0 8px" }}>
          <strong style={{ color: C.text }}>Aggregate proof.</strong> Insert n items, doubling capacity at 1, 2, 4, 8, …, n/2.
          Total copy work across resizes:
        </p>
        <pre style={{
          background: "#0F172A", color: "#E2E8F0", padding: 12, borderRadius: 8,
          fontSize: "0.82rem", fontFamily: C.mono, margin: "0 0 8px", overflowX: "auto", lineHeight: 1.6,
        }}>{`1 + 2 + 4 + 8 + ... + n/2 + n  =  2n - 1  <  2n   (geometric sum)`}</pre>
        <p style={{ fontSize: "0.86rem", color: C.textSecondary, lineHeight: 1.65, margin: "0 0 8px" }}>
          Plus n one-step writes. Total work ≤ 3n. Distributed over n appends → <strong>O(1) amortized per append</strong>.
        </p>
        <p style={{ fontSize: "0.86rem", color: C.textSecondary, lineHeight: 1.65, margin: 0 }}>
          <strong style={{ color: C.text }}>Accounting view.</strong> Charge each cheap append a budget of 3 (1 for the
          actual write, 2 saved as &quot;credit&quot;). When a resize happens, every doubled-out slot already paid 2
          credits — exactly enough to cover the copy. The bank is never overdrawn.
        </p>
        <p style={{ fontSize: "0.82rem", color: C.textMuted, lineHeight: 1.55, marginTop: 10, marginBottom: 0 }}>
          Production growth factors: Java <code style={{ fontFamily: C.mono }}>ArrayList</code> = 1.5×, Python{" "}
          <code style={{ fontFamily: C.mono }}>list</code> ≈ 1.125× (then more aggressive), C++{" "}
          <code style={{ fontFamily: C.mono }}>std::vector</code> = 2× (libstdc++) or 1.5× (MSVC). Smaller factors waste
          less memory but resize more often. The amortized O(1) holds for any constant factor &gt; 1.
        </p>
      </Card>

      <Card>
        <SubHeading>Practical N-thresholds (interview heuristics)</SubHeading>
        <p style={{ fontSize: "0.86rem", color: C.textSecondary, lineHeight: 1.6, margin: "0 0 10px" }}>
          On modern hardware, ~10⁸ simple operations ≈ 1 second wall time. Use this to pick algorithms by input bound:
        </p>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.84rem", fontFamily: C.heading }}>
          <thead>
            <tr style={{ background: C.bgSoft }}>
              <th style={{ textAlign: "left", padding: "8px 12px", fontWeight: 700, color: C.textMuted, fontSize: "0.74rem", letterSpacing: "0.05em", textTransform: "uppercase", borderBottom: `1px solid ${C.border}` }}>n bound</th>
              <th style={{ textAlign: "left", padding: "8px 12px", fontWeight: 700, color: C.textMuted, fontSize: "0.74rem", letterSpacing: "0.05em", textTransform: "uppercase", borderBottom: `1px solid ${C.border}` }}>Acceptable complexity</th>
              <th style={{ textAlign: "left", padding: "8px 12px", fontWeight: 700, color: C.textMuted, fontSize: "0.74rem", letterSpacing: "0.05em", textTransform: "uppercase", borderBottom: `1px solid ${C.border}` }}>Typical algorithms</th>
            </tr>
          </thead>
          <tbody>
            {[
              { n: "n ≤ 12", c: "O(n!)", a: "permutation enumeration" },
              { n: "n ≤ 25", c: "O(2ⁿ)", a: "bitmask DP, subset enumeration" },
              { n: "n ≤ 500", c: "O(n³)", a: "Floyd-Warshall, MCM" },
              { n: "n ≤ 5,000", c: "O(n²)", a: "DP-2D, all-pairs comparisons" },
              { n: "n ≤ 10⁶", c: "O(n log n)", a: "sorting, divide & conquer" },
              { n: "n ≤ 10⁸", c: "O(n) / O(n log log n)", a: "linear scan, sieve" },
            ].map((r, i) => (
              <tr key={i} style={{ borderTop: `1px solid ${C.borderLight}` }}>
                <td style={{ padding: "7px 12px", fontFamily: C.mono, color: C.text, fontWeight: 700 }}>{r.n}</td>
                <td style={{ padding: "7px 12px", fontFamily: C.mono, color: A, fontWeight: 700 }}>{r.c}</td>
                <td style={{ padding: "7px 12px", color: C.textSecondary }}>{r.a}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p style={{ fontSize: "0.82rem", color: C.textMuted, lineHeight: 1.5, marginTop: 10, marginBottom: 0 }}>
          When the problem statement bounds <em>n</em>, this table tells you the target complexity before writing a line of code.
        </p>
      </Card>

      <Card>
        <SubHeading>Asymptotic vs actual time</SubHeading>
        <p style={{ fontSize: "0.9rem", color: C.textSecondary, lineHeight: 1.6, margin: 0 }}>
          Big-O is about <em>growth rate</em>, not wall-clock time. An O(n²) algorithm can beat an
          O(n log n) one on tiny inputs (constants and cache effects dominate). The promise of Big-O kicks in
          when n is large — which is exactly when performance matters.
        </p>
      </Card>
      <Card>
        <SubHeading>Best / Average / Worst case</SubHeading>
        <p style={{ fontSize: "0.9rem", color: C.textSecondary, lineHeight: 1.6, margin: 0 }}>
          Quick sort is O(n log n) on average but O(n²) on an already-sorted array with a fixed-pivot.
          Interviewers usually mean worst-case Big-O unless they say otherwise. Always ask.
        </p>
      </Card>
      <Card>
        <SubHeading>Interview-style mental model</SubHeading>
        <ol style={{ fontSize: "0.9rem", color: C.textSecondary, lineHeight: 1.7, paddingLeft: 22, margin: 0 }}>
          <li>Read the code and identify the deepest-nested loop.</li>
          <li>Multiply the counts of every enclosing loop.</li>
          <li>If a loop variable doubles / halves, count it as log n.</li>
          <li>Recursion? Write the recurrence (e.g., T(n) = 2T(n/2) + O(n) → O(n log n) by Master Theorem).</li>
          <li>Mutating data structure (dynamic array, hash table)? Check if amortized analysis changes the answer.</li>
        </ol>
      </Card>
    </div>
  );
}

/* ------------------------------------------------------------------ */

export default function DSA_L1_BigOActivity() {
  const tabs: EngTabDef[] = [
    { id: "learn", label: "Learn", icon: <BookOpen className="w-4 h-4" />, content: <LearnTab /> },
    { id: "visualize", label: "Visualize", icon: <Play className="w-4 h-4" />, content: <VisualizeTab /> },
    { id: "try", label: "Try It", icon: <Target className="w-4 h-4" />, content: <TryTab /> },
    { id: "insight", label: "Insight", icon: <Lightbulb className="w-4 h-4" />, content: <InsightTab /> },
  ];
  const quiz: EngQuizQuestion[] = [
    {
      question: "What is the time complexity of the following code?\n\nfor i in 0..n:\n  for j in i..n:\n    work()",
      options: ["O(n)", "O(n log n)", "O(n²)", "O(log n)"],
      correctIndex: 2,
      explanation:
        "Even though the inner loop shrinks, the total work is n + (n-1) + ... + 1 = n(n+1)/2, which is O(n²).",
    },
    {
      question: "Which expression simplifies to O(n²)?",
      options: ["3n² + 500n + 1000", "n log n + n", "2ⁿ + n²", "n + log n"],
      correctIndex: 0,
      explanation: "Drop the constant 3 and the lower-order terms 500n + 1000. Only n² survives.",
    },
    {
      question: "Which loop body gives O(log n)?",
      options: ["for i in 0..n: ...", "while i < n: i ← i + 1", "while i < n: i ← i * 2", "for i in 0..n: for j in 0..n: ..."],
      correctIndex: 2,
      explanation: "Doubling i each step means only log₂(n) iterations before i reaches n.",
    },
    {
      question: "For very large n, which algorithm is unacceptably slow even though it is 'correct'?",
      options: ["O(n)", "O(n log n)", "O(n²)", "O(2ⁿ)"],
      correctIndex: 3,
      explanation:
        "Exponential time explodes: n=40 already means ~10¹² operations. Practical code must avoid O(2ⁿ) for large inputs.",
    },
    {
      question: "Which statement correctly states the formal definition f(n) ∈ O(g(n))?",
      options: [
        "f(n) ≤ g(n) for all n",
        "f(n) = g(n) eventually",
        "There exist constants c > 0 and n₀ such that 0 ≤ f(n) ≤ c·g(n) for all n ≥ n₀",
        "f(n)/g(n) → 1 as n → ∞",
      ],
      correctIndex: 2,
      explanation: "Big-O allows a constant multiplier and only requires the bound from some point n₀ onward. That's why constants and lower-order terms drop out.",
    },
    {
      question: "Inserting n items into a dynamic array (capacity doubles when full) costs how much per operation, amortized?",
      options: ["O(n) per insertion (because of the copies)", "O(log n) per insertion", "O(1) amortized — total work is bounded by 2n", "O(n²) total"],
      correctIndex: 2,
      explanation: "Resize copy work is 1+2+4+...+n/2 ≤ n (geometric sum). Distributed over n inserts → O(1) amortized per insert. The same proof gives O(1) amortized for hash-table rehash.",
    },
    {
      question: "Problem says 1 ≤ n ≤ 5·10⁵ and time limit is 1 second. Which complexity is the tightest you can target?",
      options: ["O(n³)", "O(n²)", "O(n log n)", "O(n!) is fine for n that small"],
      correctIndex: 2,
      explanation: "n=5·10⁵ → n² = 2.5·10¹¹ (way too slow), n log n ≈ 10⁷ (fine). Use the ~10⁸-ops-per-second heuristic to pick a target before coding.",
    },
  ];
  return (
    <EngineeringLessonShell
      title="Time Complexity & Big-O"
      level={1}
      lessonNumber={2}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="Asked in every interview to classify candidate code"
      nextLessonHint="Space Complexity"
    />
  );
}

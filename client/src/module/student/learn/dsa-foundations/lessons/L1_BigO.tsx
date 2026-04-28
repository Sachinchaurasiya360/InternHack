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
  CodeBlock,
  InlineCode,
  Lede,
  PillButton,
  SectionEyebrow,
  SectionTitle,
  SubHeading,
} from "../../../../../components/dsa-theory/primitives";
import { PracticeTab } from "../PracticeTab";

/**
 * Topic slug in the DSA practice tracker that maps to this lesson's concept.
 * Set to null to skip the Practice tab. Must match an existing slug in /api/dsa/topics.
 */
const PRACTICE_TOPIC_SLUG: string | null = null;

/* ------------------------------------------------------------------ */
/*  Growth curves                                                     */
/* ------------------------------------------------------------------ */

interface Curve {
  id: string;
  label: string;
  color: string;
  f: (n: number) => number;
}

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
  const W = 560;
  const H = 300;
  const PAD = 38;
  const yMax = Math.max(
    ...CURVES.filter((c) => enabled[c.id]).map((c) => Math.log10(c.f(nMax) + 1)),
  );
  const yScale = (y: number) =>
    H - PAD - (Math.log10(y + 1) / Math.max(0.0001, yMax)) * (H - PAD * 2);
  const xScale = (x: number) => PAD + (x / nMax) * (W - PAD * 2);
  const samples = 60;

  return (
    <div className="w-full overflow-x-auto rounded-md border border-stone-200 dark:border-white/10 bg-stone-50 dark:bg-stone-950">
      <svg
        width={W}
        height={H}
        viewBox={`0 0 ${W} ${H}`}
        className="block mx-auto"
        preserveAspectRatio="xMidYMid meet"
      >
        {[0, 0.25, 0.5, 0.75, 1].map((t, i) => (
          <line
            key={`gx${i}`}
            x1={PAD}
            y1={PAD + t * (H - PAD * 2)}
            x2={W - PAD}
            y2={PAD + t * (H - PAD * 2)}
            stroke="#e7e5e4"
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
            stroke="#e7e5e4"
            strokeWidth={1}
          />
        ))}
        <line x1={PAD} y1={H - PAD} x2={W - PAD} y2={H - PAD} stroke="#78716c" strokeWidth={1.4} />
        <line x1={PAD} y1={PAD} x2={PAD} y2={H - PAD} stroke="#78716c" strokeWidth={1.4} />
        <text
          x={W / 2}
          y={H - 6}
          textAnchor="middle"
          fontSize="11"
          fill="#57534e"
          fontFamily="ui-sans-serif, system-ui, sans-serif"
        >
          input size n (1 … {nMax})
        </text>
        <text
          x={12}
          y={H / 2}
          textAnchor="middle"
          fontSize="11"
          fill="#57534e"
          fontFamily="ui-sans-serif, system-ui, sans-serif"
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
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Loop analyzer                                                     */
/* ------------------------------------------------------------------ */

interface LoopFrame {
  line: number;
  vars: Record<string, string | number | boolean | undefined>;
  message: string;
  ops: number;
  activeCurve: string;
}

interface LoopPreset {
  id: string;
  label: string;
  pseudo: string[];
  bigO: string;
  build: (n: number) => LoopFrame[];
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
/*  Visualize                                                          */
/* ------------------------------------------------------------------ */

function VisualizeTab() {
  const [n, setN] = useState(20);
  const [presetId, setPresetId] = useState("nested");
  const [enabled, setEnabled] = useState<Record<string, boolean>>({
    c1: true, clog: true, cn: true, cnln: true, cn2: true, c2n: true, cfact: false,
  });
  const [inputStr, setInputStr] = useState("20");

  const preset = PRESETS.find((p) => p.id === presetId) ?? PRESETS[0];
  const frames = useMemo(() => preset.build(n), [preset, n]);
  const player = useStepPlayer(frames);
  const frame = player.current;

  return (
    <AlgoCanvas
      title={`Loop Analyzer → ${preset.bigO}`}
      player={player}
      input={
        <div className="flex flex-col gap-3">
          <InputEditor
            label="Input size n"
            value={inputStr}
            placeholder="e.g. 20"
            helper="Pick an n to trace. The analyzer caps inner steps so the frames stay readable."
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
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
              / loop pattern
            </label>
            <div className="flex flex-wrap gap-1.5">
              {PRESETS.map((p) => (
                <PillButton
                  key={p.id}
                  active={presetId === p.id}
                  onClick={() => setPresetId(p.id)}
                >
                  <span className="text-[11px] font-semibold">
                    {p.label} ·{" "}
                    <span className="font-mono font-bold">{p.bigO}</span>
                  </span>
                </PillButton>
              ))}
            </div>
          </div>
        </div>
      }
      pseudocode={<PseudocodePanel lines={preset.pseudo} activeLine={frame?.line} />}
      variables={<VariablesPanel vars={frame?.vars ?? {}} flashKeys={["ops"]} />}
    >
      <div className="flex flex-col items-center gap-4">
        <GrowthPlot nMax={Math.max(10, n)} enabled={enabled} highlight={frame?.activeCurve} />
        <div className="flex flex-wrap gap-1.5 justify-center">
          {CURVES.map((c) => {
            const on = enabled[c.id];
            return (
              <button
                key={c.id}
                type="button"
                onClick={() => setEnabled((e) => ({ ...e, [c.id]: !e[c.id] }))}
                className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border text-[11px] font-mono font-bold transition-colors cursor-pointer ${
                  on
                    ? "border-stone-300 dark:border-white/15 bg-white dark:bg-stone-900"
                    : "border-stone-200 dark:border-white/5 bg-stone-50 dark:bg-stone-950 text-stone-400"
                }`}
                style={on ? { color: c.color } : undefined}
              >
                <span
                  className="inline-block w-2.5 h-2.5 rounded-sm"
                  style={{ background: on ? c.color : "#d6d3d1" }}
                />
                {c.label}
              </button>
            );
          })}
        </div>
        <Callout className="w-full">{frame?.message ?? "Press play to step through the algorithm."}</Callout>
      </div>
    </AlgoCanvas>
  );
}

/* ------------------------------------------------------------------ */
/*  Learn                                                              */
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
    <div className="flex flex-col gap-5">
      <div>
        <SectionEyebrow>why big-o</SectionEyebrow>
        <SectionTitle>How fast does work grow as n grows?</SectionTitle>
        <Lede>
          Big-O describes how the number of operations grows as the input size n grows. We ignore
          constants and lower-order terms and keep only the dominant term, because for large n that
          term swallows everything else.
        </Lede>
      </div>

      <Card padded={false} className="overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-stone-50 dark:bg-stone-950/50">
            <tr>
              {["Big-O", "Name", "Typical example"].map((h) => (
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
            {rows.map((r, i) => (
              <tr
                key={r.o}
                className={i === 0 ? "" : "border-t border-stone-100 dark:border-white/5"}
              >
                <td className="px-4 py-2 font-mono font-bold text-lime-700 dark:text-lime-400">
                  {r.o}
                </td>
                <td className="px-4 py-2 text-stone-900 dark:text-stone-100">{r.name}</td>
                <td className="px-4 py-2 text-stone-600 dark:text-stone-400">{r.ex}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>

      <Card>
        <SubHeading>Three rules you will use every day</SubHeading>
        <ol className="list-decimal pl-5 space-y-2 text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          <li>
            <strong className="text-stone-900 dark:text-stone-50">Drop constants:</strong> 3n + 7 →
            O(n). A constant coefficient never changes the class.
          </li>
          <li>
            <strong className="text-stone-900 dark:text-stone-50">Drop lower-order terms:</strong>{" "}
            n² + n + 100 → O(n²). The biggest term wins.
          </li>
          <li>
            <strong className="text-stone-900 dark:text-stone-50">Nested loops multiply:</strong> a
            loop running m times inside one running n times is O(n·m).
          </li>
        </ol>
      </Card>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Try It                                                             */
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
    <div className="flex flex-col gap-3">
      <Callout>
        Classify each snippet. Numbers are ignored, loops are counted. Click an option, then read
        the explanation that appears.
      </Callout>
      {problems.map((p, i) => {
        const sel = picked[i];
        return (
          <Card key={i}>
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
/*  Insight                                                            */
/* ------------------------------------------------------------------ */

function InsightTab() {
  return (
    <div className="flex flex-col gap-4">
      <Card>
        <SubHeading>The formal definition (the one in the textbook)</SubHeading>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed mb-2">
          <InlineCode>f(n) ∈ O(g(n))</InlineCode> iff there exist constants{" "}
          <InlineCode>c &gt; 0</InlineCode> and <InlineCode>n₀</InlineCode> such that{" "}
          <InlineCode>0 ≤ f(n) ≤ c · g(n)</InlineCode> for all <em>n ≥ n₀</em>.
        </p>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed mb-2">
          Plain English: from some point onward, <em>f</em> is at most a constant multiple of{" "}
          <em>g</em>. That is why constants and lower-order terms can be dropped, they get absorbed
          by <em>c</em> for large enough <em>n</em>.
        </p>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          <strong className="text-stone-900 dark:text-stone-50">Worked example:</strong> show{" "}
          <InlineCode>3n + 7 ∈ O(n)</InlineCode>. Pick <InlineCode>c = 4</InlineCode>,{" "}
          <InlineCode>n₀ = 7</InlineCode>. For n ≥ 7:{" "}
          <InlineCode>3n + 7 ≤ 3n + n = 4n = c·n</InlineCode>. ∎
        </p>
        <p className="text-xs text-stone-500 mt-3 leading-relaxed">
          Cousins: <strong>Ω(g)</strong> = at least c·g eventually (lower bound).{" "}
          <strong>Θ(g)</strong> = both O and Ω (tight). Most CS courses say "O" when they mean Θ.
        </p>
      </Card>

      <Card>
        <SubHeading>Amortized analysis: dynamic array doubling</SubHeading>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed mb-2">
          <InlineCode>list.append(x)</InlineCode> in Python (or{" "}
          <InlineCode>ArrayList.add</InlineCode> in Java) is{" "}
          <strong className="text-stone-900 dark:text-stone-50">amortized O(1)</strong>, not
          worst-case. Sometimes a single append is O(n) (when the array is full and must be copied
          to a new larger one). But the <em>average over a long sequence</em> is O(1).
        </p>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed mb-2">
          <strong className="text-stone-900 dark:text-stone-50">Aggregate proof.</strong> Insert n
          items, doubling capacity at 1, 2, 4, 8, …, n/2. Total copy work across resizes:
        </p>
        <CodeBlock className="mb-2">
          1 + 2 + 4 + 8 + ... + n/2 + n  =  2n - 1  &lt;  2n   (geometric sum)
        </CodeBlock>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed mb-2">
          Plus n one-step writes. Total work ≤ 3n. Distributed over n appends →{" "}
          <strong className="text-stone-900 dark:text-stone-50">O(1) amortized per append</strong>.
        </p>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          <strong className="text-stone-900 dark:text-stone-50">Accounting view.</strong> Charge
          each cheap append a budget of 3 (1 for the actual write, 2 saved as "credit"). When a
          resize happens, every doubled-out slot already paid 2 credits, exactly enough to cover the
          copy. The bank is never overdrawn.
        </p>
      </Card>

      <Card>
        <SubHeading>Practical N-thresholds (interview heuristics)</SubHeading>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed mb-3">
          On modern hardware, ~10⁸ simple operations ≈ 1 second wall time. Use this to pick
          algorithms by input bound:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-stone-50 dark:bg-stone-950/50">
              <tr>
                {["n bound", "Acceptable complexity", "Typical algorithms"].map((h) => (
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
                { n: "n ≤ 12", c: "O(n!)", a: "permutation enumeration" },
                { n: "n ≤ 25", c: "O(2ⁿ)", a: "bitmask DP, subset enumeration" },
                { n: "n ≤ 500", c: "O(n³)", a: "Floyd-Warshall, MCM" },
                { n: "n ≤ 5,000", c: "O(n²)", a: "DP-2D, all-pairs comparisons" },
                { n: "n ≤ 10⁶", c: "O(n log n)", a: "sorting, divide & conquer" },
                { n: "n ≤ 10⁸", c: "O(n) / O(n log log n)", a: "linear scan, sieve" },
              ].map((r) => (
                <tr key={r.n} className="border-t border-stone-100 dark:border-white/5">
                  <td className="px-3 py-2 font-mono font-bold text-stone-900 dark:text-stone-50">{r.n}</td>
                  <td className="px-3 py-2 font-mono font-bold text-lime-700 dark:text-lime-400">{r.c}</td>
                  <td className="px-3 py-2 text-stone-600 dark:text-stone-400">{r.a}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-stone-500 mt-3 leading-relaxed">
          When the problem statement bounds <em>n</em>, this table tells you the target complexity
          before writing a line of code.
        </p>
      </Card>

      <Card>
        <SubHeading>Asymptotic vs actual time</SubHeading>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          Big-O is about <em>growth rate</em>, not wall-clock time. An O(n²) algorithm can beat an
          O(n log n) one on tiny inputs (constants and cache effects dominate). The promise of Big-O
          kicks in when n is large, which is exactly when performance matters.
        </p>
      </Card>

      <Card>
        <SubHeading>Best / Average / Worst case</SubHeading>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          Quick sort is O(n log n) on average but O(n²) on an already-sorted array with a
          fixed-pivot. Interviewers usually mean worst-case Big-O unless they say otherwise. Always
          ask.
        </p>
      </Card>

      <Card>
        <SubHeading>Interview-style mental model</SubHeading>
        <ol className="list-decimal pl-5 space-y-2 text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          <li>Read the code and identify the deepest-nested loop.</li>
          <li>Multiply the counts of every enclosing loop.</li>
          <li>If a loop variable doubles / halves, count it as log n.</li>
          <li>
            Recursion? Write the recurrence (e.g., T(n) = 2T(n/2) + O(n) → O(n log n) by Master
            Theorem).
          </li>
          <li>
            Mutating data structure (dynamic array, hash table)? Check if amortized analysis changes
            the answer.
          </li>
        </ol>
      </Card>
    </div>
  );
}

/* ------------------------------------------------------------------ */

interface Props {
  onQuizComplete?: (score: number) => void;
}

export default function L1_BigO({ onQuizComplete }: Props) {
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
      options: [
        "for i in 0..n: ...",
        "while i < n: i ← i + 1",
        "while i < n: i ← i * 2",
        "for i in 0..n: for j in 0..n: ...",
      ],
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
      explanation:
        "Big-O allows a constant multiplier and only requires the bound from some point n₀ onward. That's why constants and lower-order terms drop out.",
    },
    {
      question:
        "Inserting n items into a dynamic array (capacity doubles when full) costs how much per operation, amortized?",
      options: [
        "O(n) per insertion (because of the copies)",
        "O(log n) per insertion",
        "O(1) amortized, total work is bounded by 2n",
        "O(n²) total",
      ],
      correctIndex: 2,
      explanation:
        "Resize copy work is 1+2+4+...+n/2 ≤ n (geometric sum). Distributed over n inserts → O(1) amortized per insert. The same proof gives O(1) amortized for hash-table rehash.",
    },
    {
      question:
        "Problem says 1 ≤ n ≤ 5·10⁵ and time limit is 1 second. Which complexity is the tightest you can target?",
      options: ["O(n³)", "O(n²)", "O(n log n)", "O(n!) is fine for n that small"],
      correctIndex: 2,
      explanation:
        "n=5·10⁵ → n² = 2.5·10¹¹ (way too slow), n log n ≈ 10⁷ (fine). Use the ~10⁸-ops-per-second heuristic to pick a target before coding.",
    },
  ];

  return (
    <LessonShell
      title="Time Complexity & Big-O"
      level={1}
      lessonNumber={1}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="Asked in every interview to classify candidate code."
      nextLessonHint="Algorithm Tracer"
      onQuizComplete={onQuizComplete}
    />
  );
}

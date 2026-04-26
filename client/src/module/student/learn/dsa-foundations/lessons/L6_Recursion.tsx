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
  PillButton,
  SectionEyebrow,
  SectionTitle,
  SubHeading,
  THEME,
} from "../../../../../components/dsa-theory/primitives";
import { PracticeTab } from "../PracticeTab";

const PRACTICE_TOPIC_SLUG: string | null = "recursion";

/* ------------------------------------------------------------------ */
/*  Local types                                                        */
/* ------------------------------------------------------------------ */

interface StackFrameData { value: string | number; label?: string; }
interface RecursionNode {
  id: string;
  label: string;
  parent?: string;
  depth: number;
  state: "active" | "done";
  returnValue?: number | string;
}
interface Frame {
  line: number;
  vars: Record<string, string | number | undefined>;
  message: string;
  nodes: RecursionNode[];
  activeId?: string;
  stack: StackFrameData[];
  callCount: number;
  pegs?: { A: number[]; B: number[]; C: number[] };
  moves?: string[];
}

/* ------------------------------------------------------------------ */
/*  Local RecursionTree                                                */
/* ------------------------------------------------------------------ */

function RecursionTree({ nodes, activeId, height = 320 }: { nodes: RecursionNode[]; activeId?: string; height?: number }) {
  if (nodes.length === 0) return (
    <div className="flex items-center justify-center text-stone-400 text-xs" style={{ height }}>
      Tree will appear as the algorithm runs.
    </div>
  );

  const W = 560;
  const nodeR = 18;
  const levelH = 60;

  // Group by depth, assign x positions
  const byDepth: Record<number, RecursionNode[]> = {};
  for (const n of nodes) {
    if (!byDepth[n.depth]) byDepth[n.depth] = [];
    byDepth[n.depth].push(n);
  }
  const maxDepth = Math.max(...nodes.map((n) => n.depth));
  const positions: Record<string, { x: number; y: number }> = {};
  for (let d = 0; d <= maxDepth; d++) {
    const group = byDepth[d] ?? [];
    group.forEach((n, i) => {
      const total = group.length;
      positions[n.id] = {
        x: (W / (total + 1)) * (i + 1),
        y: 30 + d * levelH,
      };
    });
  }

  const edges: { x1: number; y1: number; x2: number; y2: number }[] = [];
  for (const n of nodes) {
    if (n.parent && positions[n.parent] && positions[n.id]) {
      const p = positions[n.parent];
      const c = positions[n.id];
      edges.push({ x1: p.x, y1: p.y + nodeR, x2: c.x, y2: c.y - nodeR });
    }
  }

  const svgH = Math.max(height, (maxDepth + 1) * levelH + 60);

  return (
    <div className="w-full overflow-x-auto rounded-md border border-stone-200 dark:border-white/10">
      <svg width={W} height={svgH} viewBox={`0 0 ${W} ${svgH}`} className="block">
        {edges.map((e, i) => (
          <line key={i} x1={e.x1} y1={e.y1} x2={e.x2} y2={e.y2}
            stroke={THEME.border} strokeWidth={1.5} />
        ))}
        {nodes.map((n) => {
          const pos = positions[n.id];
          if (!pos) return null;
          const isActive = n.id === activeId;
          const fill = n.state === "done" ? "#10b981" : isActive ? THEME.accent : "#3b82f6";
          return (
            <g key={n.id}>
              <circle cx={pos.x} cy={pos.y} r={nodeR}
                fill={fill} stroke="#fff" strokeWidth={2}
                style={{ transition: "fill 0.25s" }} />
              <text x={pos.x} y={pos.y + 4} textAnchor="middle"
                fontSize="9" fontWeight={700} fill="#fff"
                fontFamily={THEME.heading} style={{ pointerEvents: "none" }}>
                {n.label.length > 8 ? n.label.slice(0, 7) + "…" : n.label}
              </text>
              {n.returnValue !== undefined && (
                <text x={pos.x + nodeR + 4} y={pos.y - nodeR + 8}
                  fontSize="9" fill={THEME.accent} fontWeight={700}
                  fontFamily={THEME.mono}>
                  ={String(n.returnValue)}
                </text>
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Local StackColumn                                                  */
/* ------------------------------------------------------------------ */

function StackColumn({ items, title = "Call Stack", maxHeight = 300 }: {
  items: { value: string }[];
  title?: string;
  maxHeight?: number;
}) {
  return (
    <div className="flex flex-col gap-1" style={{ maxHeight, overflowY: "auto" }}>
      <div className="text-[10px] font-mono uppercase tracking-widest text-stone-500 mb-1">{title}</div>
      {[...items].reverse().map((it, i) => (
        <div key={i} className={`px-2 py-1 rounded text-xs font-mono border ${i === 0 ? "border-lime-400 bg-lime-400/10 text-lime-700 dark:text-lime-300" : "border-stone-200 dark:border-white/10 bg-stone-50 dark:bg-stone-900 text-stone-700 dark:text-stone-300"}`}>
          {it.value}
        </div>
      ))}
      {items.length === 0 && (
        <div className="text-xs text-stone-400 italic">empty</div>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Factorial                                                          */
/* ------------------------------------------------------------------ */

const PSEUDO_FACT = [
  "function fact(n):",
  "  if n <= 1:",
  "    return 1",
  "  r ← fact(n - 1)",
  "  return n * r",
];

function buildFactorial(n: number): Frame[] {
  const frames: Frame[] = [];
  const nodes: RecursionNode[] = [];
  const stack: StackFrameData[] = [];
  let callCount = 0;

  function recurse(val: number, parent?: string): number {
    const id = `f${val}-${callCount}`;
    callCount++;
    const node: RecursionNode = { id, label: `fact(${val})`, parent, depth: stack.length, state: "active" };
    nodes.push(node);
    stack.push({ value: `fact(${val})`, label: "call" });

    frames.push({
      line: 0, vars: { n: val, depth: stack.length, calls: callCount },
      message: `Enter fact(${val}) - push onto call stack (depth ${stack.length}).`,
      nodes: nodes.map((x) => ({ ...x })), activeId: id,
      stack: [...stack], callCount,
    });
    frames.push({
      line: 1, vars: { n: val, depth: stack.length, calls: callCount },
      message: `Check base case: is ${val} <= 1?`,
      nodes: nodes.map((x) => ({ ...x })), activeId: id,
      stack: [...stack], callCount,
    });

    if (val <= 1) {
      node.returnValue = 1;
      node.state = "done";
      frames.push({
        line: 2, vars: { n: val, depth: stack.length, calls: callCount, returns: 1 },
        message: `Base case hit: return 1.`,
        nodes: nodes.map((x) => ({ ...x })), activeId: id,
        stack: [...stack], callCount,
      });
      stack.pop();
      return 1;
    }

    frames.push({
      line: 3, vars: { n: val, depth: stack.length, calls: callCount },
      message: `Recurse: compute fact(${val - 1}).`,
      nodes: nodes.map((x) => ({ ...x })), activeId: id,
      stack: [...stack], callCount,
    });

    const r = recurse(val - 1, id);
    node.state = "active";
    const result = val * r;
    node.returnValue = result;
    node.state = "done";

    frames.push({
      line: 4, vars: { n: val, r, result, depth: stack.length, calls: callCount },
      message: `Combine: return ${val} × ${r} = ${result}. Pop frame.`,
      nodes: nodes.map((x) => ({ ...x })), activeId: id,
      stack: [...stack], callCount,
    });
    stack.pop();
    return result;
  }

  recurse(n);
  return frames;
}

/* ------------------------------------------------------------------ */
/*  Fibonacci                                                          */
/* ------------------------------------------------------------------ */

const PSEUDO_FIB = [
  "function fib(n):",
  "  if n < 2:",
  "    return n",
  "  a ← fib(n - 1)",
  "  b ← fib(n - 2)",
  "  return a + b",
];

function buildFib(n: number): Frame[] {
  const frames: Frame[] = [];
  const nodes: RecursionNode[] = [];
  const stack: StackFrameData[] = [];
  let idCounter = 0;
  let callCount = 0;

  function recurse(val: number, depth: number, parent?: string): number {
    const id = `fib-${idCounter++}`;
    callCount++;
    const node: RecursionNode = { id, label: `fib(${val})`, parent, depth, state: "active" };
    nodes.push(node);
    stack.push({ value: `fib(${val})`, label: "call" });

    frames.push({
      line: 0, vars: { n: val, depth, calls: callCount },
      message: `Enter fib(${val}).`,
      nodes: nodes.map((x) => ({ ...x })), activeId: id,
      stack: [...stack], callCount,
    });

    if (val < 2) {
      node.returnValue = val;
      node.state = "done";
      frames.push({
        line: 2, vars: { n: val, depth, returns: val, calls: callCount },
        message: `Base: fib(${val}) returns ${val}.`,
        nodes: nodes.map((x) => ({ ...x })), activeId: id,
        stack: [...stack], callCount,
      });
      stack.pop();
      return val;
    }

    frames.push({
      line: 3, vars: { n: val, depth, calls: callCount },
      message: `Recurse left: fib(${val - 1}).`,
      nodes: nodes.map((x) => ({ ...x })), activeId: id,
      stack: [...stack], callCount,
    });
    const a = recurse(val - 1, depth + 1, id);

    frames.push({
      line: 4, vars: { n: val, a, depth, calls: callCount },
      message: `Left returned ${a}. Now recurse right: fib(${val - 2}).`,
      nodes: nodes.map((x) => ({ ...x })), activeId: id,
      stack: [...stack], callCount,
    });
    const b = recurse(val - 2, depth + 1, id);

    const r = a + b;
    node.returnValue = r;
    node.state = "done";
    frames.push({
      line: 5, vars: { n: val, a, b, r, depth, calls: callCount },
      message: `Combine: fib(${val}) = ${a} + ${b} = ${r}.`,
      nodes: nodes.map((x) => ({ ...x })), activeId: id,
      stack: [...stack], callCount,
    });
    stack.pop();
    return r;
  }

  recurse(n, 0);
  return frames;
}

/* ------------------------------------------------------------------ */
/*  Tower of Hanoi                                                     */
/* ------------------------------------------------------------------ */

const PSEUDO_HANOI = [
  "function hanoi(n, src, aux, dst):",
  "  if n == 1:",
  "    move disk 1 from src to dst",
  "    return",
  "  hanoi(n-1, src, dst, aux)",
  "  move disk n from src to dst",
  "  hanoi(n-1, aux, src, dst)",
];

function buildHanoi(n: number): Frame[] {
  const frames: Frame[] = [];
  const nodes: RecursionNode[] = [];
  const stack: StackFrameData[] = [];
  let idCounter = 0;
  let callCount = 0;
  const pegs: { A: number[]; B: number[]; C: number[] } = { A: [], B: [], C: [] };
  for (let i = n; i >= 1; i--) pegs.A.push(i);
  const moves: string[] = [];

  function recurse(k: number, src: "A" | "B" | "C", aux: "A" | "B" | "C", dst: "A" | "B" | "C", depth: number, parent?: string) {
    const id = `h-${idCounter++}`;
    callCount++;
    const node: RecursionNode = { id, label: `h(${k},${src}→${dst})`, parent, depth, state: "active" };
    nodes.push(node);
    stack.push({ value: `h(${k},${src},${dst})`, label: "call" });

    frames.push({
      line: 0, vars: { n: k, src, dst, depth, calls: callCount },
      message: `Enter hanoi(${k}, ${src}→${dst}).`,
      nodes: nodes.map((x) => ({ ...x })), activeId: id,
      stack: [...stack], callCount,
      pegs: { A: [...pegs.A], B: [...pegs.B], C: [...pegs.C] }, moves: [...moves],
    });

    if (k === 1) {
      const disk = pegs[src].pop()!;
      pegs[dst].push(disk);
      moves.push(`${src} → ${dst}`);
      node.returnValue = "✓";
      node.state = "done";
      frames.push({
        line: 2, vars: { n: k, src, dst, moves: moves.length, calls: callCount },
        message: `Move disk 1 from ${src} to ${dst}.`,
        nodes: nodes.map((x) => ({ ...x })), activeId: id,
        stack: [...stack], callCount,
        pegs: { A: [...pegs.A], B: [...pegs.B], C: [...pegs.C] }, moves: [...moves],
      });
      stack.pop();
      return;
    }

    frames.push({
      line: 4, vars: { n: k, src, aux, dst, calls: callCount },
      message: `Step 1: move top ${k - 1} disks ${src}→${aux} (use ${dst} as spare).`,
      nodes: nodes.map((x) => ({ ...x })), activeId: id,
      stack: [...stack], callCount,
      pegs: { A: [...pegs.A], B: [...pegs.B], C: [...pegs.C] }, moves: [...moves],
    });
    recurse(k - 1, src, dst, aux, depth + 1, id);

    const disk = pegs[src].pop()!;
    pegs[dst].push(disk);
    moves.push(`${src} → ${dst}`);
    frames.push({
      line: 5, vars: { n: k, src, dst, moves: moves.length, calls: callCount },
      message: `Step 2: move disk ${k} (bottom) from ${src} to ${dst}.`,
      nodes: nodes.map((x) => ({ ...x })), activeId: id,
      stack: [...stack], callCount,
      pegs: { A: [...pegs.A], B: [...pegs.B], C: [...pegs.C] }, moves: [...moves],
    });

    frames.push({
      line: 6, vars: { n: k, src: aux, dst, calls: callCount },
      message: `Step 3: move the ${k - 1} disks ${aux}→${dst}.`,
      nodes: nodes.map((x) => ({ ...x })), activeId: id,
      stack: [...stack], callCount,
      pegs: { A: [...pegs.A], B: [...pegs.B], C: [...pegs.C] }, moves: [...moves],
    });
    recurse(k - 1, aux, src, dst, depth + 1, id);

    node.returnValue = "✓";
    node.state = "done";
    frames.push({
      line: 6, vars: { n: k, done: 1, calls: callCount },
      message: `hanoi(${k}, ${src}→${dst}) finished. Pop.`,
      nodes: nodes.map((x) => ({ ...x })), activeId: id,
      stack: [...stack], callCount,
      pegs: { A: [...pegs.A], B: [...pegs.B], C: [...pegs.C] }, moves: [...moves],
    });
    stack.pop();
  }

  recurse(n, "A", "B", "C", 0);
  return frames;
}

/* ------------------------------------------------------------------ */
/*  Hanoi peg visualization                                            */
/* ------------------------------------------------------------------ */

function HanoiPegs({ pegs, nMax }: { pegs: { A: number[]; B: number[]; C: number[] }; nMax: number }) {
  const pegNames = ["A", "B", "C"] as const;
  const colors = ["#3b82f6", "#10b981", "#f59e0b", "#8b5cf6", "#ef4444"];
  return (
    <div className="flex gap-6 justify-center py-3">
      {pegNames.map((p) => (
        <div key={p} className="flex flex-col items-center gap-1">
          <div className="relative flex flex-col-reverse items-center p-1"
            style={{ width: nMax * 22 + 12, height: (nMax + 1) * 16 + 14 }}>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 rounded-sm bg-stone-400"
              style={{ height: (nMax + 1) * 16 + 10 }} />
            <div className="absolute bottom-0 left-0 right-0 h-1.5 rounded-sm bg-stone-500" />
            <div className="relative z-10 flex flex-col-reverse items-center gap-0.5 pb-1.5">
              {pegs[p].map((d) => (
                <div key={d}
                  className="flex items-center justify-center text-white font-bold rounded"
                  style={{
                    width: d * 18 + 10, height: 14,
                    background: colors[(d - 1) % colors.length],
                    fontSize: "0.7rem",
                    transition: "all 0.3s ease",
                  }}>
                  {d}
                </div>
              ))}
            </div>
          </div>
          <div className="text-xs font-bold text-stone-500">{p}</div>
        </div>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Visualize tab                                                      */
/* ------------------------------------------------------------------ */

type Mode = "factorial" | "fibonacci" | "hanoi";

function VisualizeTab() {
  const [mode, setMode] = useState<Mode>("factorial");
  const [input, setInput] = useState("5");
  const parsed = Math.max(1, Math.min(mode === "fibonacci" ? 7 : mode === "hanoi" ? 4 : 7, Math.floor(Number(input) || 0))) || 1;

  const frames = useMemo(() => {
    if (mode === "factorial") return buildFactorial(parsed);
    if (mode === "fibonacci") return buildFib(parsed);
    return buildHanoi(parsed);
  }, [mode, parsed]);
  const player = useStepPlayer(frames);
  const frame = player.current;

  const pseudo = mode === "factorial" ? PSEUDO_FACT : mode === "fibonacci" ? PSEUDO_FIB : PSEUDO_HANOI;

  return (
    <AlgoCanvas
      title={`Recursion - ${mode === "factorial" ? "Factorial" : mode === "fibonacci" ? "Fibonacci" : "Tower of Hanoi"}`}
      player={player}
      input={
        <div className="flex flex-col gap-3">
          <div className="flex gap-1.5 flex-wrap">
            {(["factorial", "fibonacci", "hanoi"] as Mode[]).map((m) => (
              <PillButton key={m} onClick={() => setMode(m)} active={mode === m}>
                <span className="text-xs">
                  {m === "factorial" ? "Factorial" : m === "fibonacci" ? "Fibonacci" : "Tower of Hanoi"}
                </span>
              </PillButton>
            ))}
          </div>
          <InputEditor
            label={mode === "hanoi" ? "Disks n (1–4)" : "Input n"}
            value={input}
            placeholder="e.g. 5"
            helper={mode === "fibonacci" ? "Fib grows exponentially - capped at 7." : mode === "hanoi" ? "Hanoi doubles per disk - capped at 4." : "Factorial - try 5 or 6."}
            presets={mode === "hanoi"
              ? [{ label: "n=2", value: "2" }, { label: "n=3", value: "3" }, { label: "n=4", value: "4" }]
              : mode === "fibonacci"
              ? [{ label: "n=3", value: "3" }, { label: "n=5", value: "5" }, { label: "n=7", value: "7" }]
              : [{ label: "n=3", value: "3" }, { label: "n=5", value: "5" }, { label: "n=6", value: "6" }]}
            onApply={(v) => setInput(v)}
          />
        </div>
      }
      pseudocode={<PseudocodePanel lines={pseudo} activeLine={frame?.line} />}
      variables={<VariablesPanel vars={frame?.vars ?? {}} flashKeys={["calls", "returns", "r", "result"]} />}
    >
      <div className="flex flex-col gap-3">
        <div className="flex gap-2 flex-wrap text-xs text-stone-500">
          <span className="inline-flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-sm" style={{ background: "#3b82f6" }} />active call
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-sm" style={{ background: "#10b981" }} />returned
          </span>
          <span>Total calls: <strong className="text-lime-600 dark:text-lime-400">{frame?.callCount ?? 0}</strong></span>
        </div>
        <div className="grid gap-4" style={{ gridTemplateColumns: "1fr 150px" }}>
          <div className="min-w-0">
            <RecursionTree nodes={frame?.nodes ?? []} activeId={frame?.activeId} height={mode === "fibonacci" ? 380 : 320} />
            {mode === "hanoi" && frame?.pegs && (
              <div className="mt-3 pt-3 border-t border-stone-200 dark:border-white/10">
                <HanoiPegs pegs={frame.pegs} nMax={parsed} />
                {frame.moves && frame.moves.length > 0 && (
                  <div className="text-xs text-stone-500 text-center mt-2">
                    Moves: {frame.moves.slice(-6).join("  ·  ")}
                    {frame.moves.length > 6 && `  · (+${frame.moves.length - 6} earlier)`}
                  </div>
                )}
              </div>
            )}
          </div>
          <StackColumn items={(frame?.stack ?? []).map((s) => ({ value: String(s.value) }))} title="Call Stack" maxHeight={300} />
        </div>
        <Callout>{frame?.message ?? "Press play to step through the algorithm."}</Callout>
      </div>
    </AlgoCanvas>
  );
}

/* ------------------------------------------------------------------ */
/*  Learn tab                                                          */
/* ------------------------------------------------------------------ */

function LearnTab() {
  const sections = [
    { title: "What is recursion?", body: "A function that calls itself to solve a smaller version of the same problem. Every recursive function must have (1) a base case that stops the recursion and (2) a recursive case that shrinks toward the base." },
    { title: "The call stack", body: "Every function call pushes a new 'frame' onto the call stack - storing its arguments, local variables, and return address. When the function returns, the frame is popped. A recursive function that forgets its base case will overflow this stack." },
    { title: "Linear vs tree recursion", body: "Factorial recurses once per call (linear - depth n, calls n). Fibonacci recurses twice per call (tree - exponential calls, lots of repeated work). This is exactly why Fibonacci needs memoization." },
    { title: "Tower of Hanoi", body: "To move n disks from A to C: (1) move n-1 disks A→B using C as spare, (2) move disk n from A→C, (3) move n-1 disks B→C using A as spare. The recurrence T(n) = 2T(n-1) + 1 gives 2ⁿ - 1 moves." },
  ];
  return (
    <div className="flex flex-col gap-5">
      <div>
        <SectionEyebrow>Mental model</SectionEyebrow>
        <SectionTitle>Trust the recursion. Combine, don&rsquo;t simulate.</SectionTitle>
        <Lede>
          Russian dolls: each doll opens to reveal a smaller version of itself, and the smallest one is
          solid. Recursion works the same way: a function that solves a problem by calling itself on a
          smaller version, until it hits a base case that needs no further work.
          Assume the recursive call works correctly for a smaller input, then focus only on how to
          combine its result with the current step. That single habit unlocks every recursive algorithm.
        </Lede>
      </div>
      <div className="grid gap-3" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
        {sections.map((s, i) => (
          <Card key={i}>
            <div className="text-[10px] font-bold text-lime-600 dark:text-lime-400 mb-1.5 font-mono tracking-widest">0{i + 1}</div>
            <div className="font-bold text-stone-900 dark:text-stone-50 mb-1">{s.title}</div>
            <div className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">{s.body}</div>
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
    { q: "fact(4) = ?", a: "24", hint: "4 · 3 · 2 · 1" },
    { q: "fib(6) = ?", a: "8", hint: "0,1,1,2,3,5,8" },
    { q: "Number of moves for hanoi(n=4)?", a: "15", hint: "2⁴ - 1" },
    { q: "Number of fib(n) calls for n=5 (naive)?", a: "15", hint: "fib(5)=fib(4)+fib(3); expand fully." },
  ];
  const [guesses, setGuesses] = useState<(string | null)[]>(problems.map(() => null));
  const [shown, setShown] = useState<boolean[]>(problems.map(() => false));

  return (
    <div className="flex flex-col gap-3">
      <Callout>Trace on paper. Write your guess, then reveal.</Callout>
      {problems.map((p, i) => {
        const g = guesses[i];
        const revealed = shown[i];
        const correct = g !== null && g.trim() === p.a;
        return (
          <Card key={i}>
            <div className="flex items-center gap-3 flex-wrap">
              <span className="font-bold text-sm text-stone-500 font-mono">#{i + 1}</span>
              <code className="font-mono text-sm bg-stone-100 dark:bg-stone-800 px-3 py-1 rounded border border-stone-200 dark:border-white/10 text-stone-900 dark:text-stone-100">
                {p.q}
              </code>
              <input
                type="text"
                placeholder="answer"
                value={g ?? ""}
                onChange={(e) => { const v = [...guesses]; v[i] = e.target.value; setGuesses(v); }}
                className="w-24 px-2.5 py-1.5 rounded-md border border-stone-200 dark:border-white/10 bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-100 font-mono text-sm focus:outline-none focus:border-stone-400"
              />
              <button
                type="button"
                onClick={() => { const v = [...shown]; v[i] = true; setShown(v); }}
                className="px-3 py-1.5 rounded-md text-xs font-semibold border border-stone-200 dark:border-white/10 bg-white dark:bg-stone-900 text-stone-600 dark:text-stone-400 cursor-pointer hover:border-stone-400 transition-colors"
              >
                Reveal
              </button>
              {revealed && (
                <span className={`text-xs font-bold px-3 py-1 rounded-md ${correct ? "bg-lime-50 dark:bg-lime-400/10 text-lime-800 dark:text-lime-200 border border-lime-500" : "bg-rose-50 dark:bg-rose-500/10 text-rose-800 dark:text-rose-200 border border-rose-500"}`}>
                  {correct ? `✓ ${p.a}` : `Answer: ${p.a}`}
                </span>
              )}
            </div>
            {revealed && (
              <div className="mt-3">
                <Callout>Hint: {p.hint}</Callout>
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
    <div className="flex flex-col gap-4">
      <Card>
        <SubHeading>Recursion = stack, implicitly</SubHeading>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          Every recursive algorithm can be rewritten iteratively using an explicit stack. DFS in graphs, tree traversals, parsers - all use this equivalence. Understanding the call stack makes the translation mechanical.
        </p>
      </Card>
      <Card>
        <SubHeading>Why naive Fibonacci is O(2ⁿ)</SubHeading>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          Each call spawns two children, and identical subproblems are solved repeatedly. fib(30) computes fib(10) over 10,000 times. Memoization collapses this to O(n) - the bridge to dynamic programming.
        </p>
      </Card>
      <Card>
        <SubHeading>Interview cheat sheet</SubHeading>
        <ul className="list-disc pl-5 space-y-1 text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          <li>Factorial: T(n) = T(n-1) + O(1) → O(n) time, O(n) stack.</li>
          <li>Binary recursion: T(n) = 2T(n-1) + O(1) → O(2ⁿ) time.</li>
          <li>Hanoi: 2ⁿ - 1 moves. The minimum is tight - no algorithm does fewer.</li>
          <li>Tail recursion = recursive call is the last op; compilers can optimize it to a loop.</li>
        </ul>
      </Card>
      <Card>
        <SubHeading>Memoization in one line</SubHeading>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed mb-2">
          The bridge from naive recursion to top-down DP in Python:
        </p>
        <pre className="bg-stone-950 text-stone-100 px-4 py-3 rounded-md text-xs font-mono leading-relaxed overflow-x-auto border border-stone-800">{`from functools import lru_cache

@lru_cache(maxsize=None)
def fib(n: int) -> int:
    return n if n < 2 else fib(n - 1) + fib(n - 2)

fib(50)  # 12_586_269_025 - instant`}</pre>
      </Card>
    </div>
  );
}

/* ------------------------------------------------------------------ */

interface Props {
  onQuizComplete?: (score: number) => void;
}

export default function L6_Recursion({ onQuizComplete }: Props) {
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
      question: "Every recursive function must have which two components?",
      options: ["A loop and a counter", "A base case and a recursive case", "A stack and a queue", "A mutex and a semaphore"],
      correctIndex: 1,
      explanation: "A base case stops the recursion; the recursive case reduces the problem toward the base. Missing the base case causes a stack overflow.",
    },
    {
      question: "How many function calls does naive fib(6) make in total (including the root)?",
      options: ["7", "13", "25", "63"],
      correctIndex: 2,
      explanation: "Count(n) = Count(n-1) + Count(n-2) + 1 with Count(0)=Count(1)=1. That gives 1,1,3,5,9,15,25 → fib(6) = 25 calls.",
    },
    {
      question: "For Tower of Hanoi with n = 5 disks, how many moves are needed?",
      options: ["10", "25", "31", "32"],
      correctIndex: 2,
      explanation: "2ⁿ - 1 = 2⁵ - 1 = 31.",
    },
    {
      question: "Why is iterative code sometimes preferred over recursion for the same algorithm?",
      options: [
        "Recursion gives wrong answers",
        "Recursion uses O(depth) call-stack space and risks stack overflow",
        "Recursion can't express divide-and-conquer",
        "Recursion always runs slower asymptotically",
      ],
      correctIndex: 1,
      explanation: "Recursion pays O(depth) space for the stack. For deep recursion on large inputs this can overflow - iterative code uses O(1) or a managed stack instead.",
    },
  ];

  return (
    <LessonShell
      title="Recursion - Thinking Recursively"
      level={6}
      lessonNumber={1}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="Foundation for every divide-and-conquer / backtracking / DP question"
      nextLessonHint="Divide & Conquer"
      onQuizComplete={onQuizComplete}
    />
  );
}

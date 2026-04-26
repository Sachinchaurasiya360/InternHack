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
  InlineCode,
  Lede,
  PillButton,
  SectionEyebrow,
  SectionTitle,
  SubHeading,
  THEME,
} from "../../../../../components/dsa-theory/primitives";
import { PracticeTab } from "../PracticeTab";

const PRACTICE_TOPIC_SLUG: string | null = "backtracking";

/* ------------------------------------------------------------------ */
/*  Local RecursionNode + RecursionTree                                */
/* ------------------------------------------------------------------ */

interface RecursionNode {
  id: string;
  label: string;
  parent?: string;
  depth: number;
  state: "active" | "done";
  returnValue?: string;
}

function RecursionTree({ nodes, activeId, height = 320 }: { nodes: RecursionNode[]; activeId?: string; height?: number }) {
  if (nodes.length === 0) return (
    <div className="flex items-center justify-center text-stone-400 text-xs" style={{ height }}>
      Tree will appear as the algorithm runs.
    </div>
  );

  const W = 500;
  const nodeR = 16;
  const levelH = 54;

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
      positions[n.id] = { x: (W / (group.length + 1)) * (i + 1), y: 26 + d * levelH };
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

  const svgH = Math.max(height, (maxDepth + 1) * levelH + 50);
  return (
    <div className="w-full overflow-x-auto rounded-md border border-stone-200 dark:border-white/10">
      <svg width={W} height={svgH} viewBox={`0 0 ${W} ${svgH}`} className="block">
        {edges.map((e, i) => (
          <line key={i} x1={e.x1} y1={e.y1} x2={e.x2} y2={e.y2} stroke={THEME.border} strokeWidth={1.5} />
        ))}
        {nodes.map((n) => {
          const pos = positions[n.id];
          if (!pos) return null;
          const isActive = n.id === activeId;
          const fill = n.returnValue === "✗" ? "#ef4444" : n.state === "done" ? "#10b981" : isActive ? THEME.accent : "#3b82f6";
          return (
            <g key={n.id}>
              <circle cx={pos.x} cy={pos.y} r={nodeR} fill={fill} stroke="#fff" strokeWidth={2} style={{ transition: "fill 0.25s" }} />
              <text x={pos.x} y={pos.y + 4} textAnchor="middle" fontSize="8" fontWeight={700} fill="#fff"
                fontFamily={THEME.heading} style={{ pointerEvents: "none" }}>
                {n.label.length > 7 ? n.label.slice(0, 6) + "…" : n.label}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  N-Queens                                                           */
/* ------------------------------------------------------------------ */

interface QueensFrame {
  line: number;
  vars: Record<string, string | number | undefined>;
  message: string;
  board: number[];
  row: number;
  tryingCol: number;
  conflict?: { kind: "row" | "col" | "diag"; r: number; c: number } | null;
  nodes: RecursionNode[];
  activeId?: string;
  solutions: number;
  totalTries: number;
}

const PSEUDO_QUEENS = [
  "solve(row):",
  "  if row == n: record solution",
  "  for col in 0..n-1:",
  "    if safe(row, col):",
  "      place queen at (row, col)",
  "      solve(row + 1)",
  "      remove queen  // backtrack",
];

function buildQueens(n: number): QueensFrame[] {
  const frames: QueensFrame[] = [];
  const board: number[] = Array(n).fill(-1);
  const nodes: RecursionNode[] = [];
  let idCounter = 0;
  let solutions = 0;
  let totalTries = 0;
  const stopAt = 160;

  function safe(row: number, col: number): { ok: boolean; conflict: QueensFrame["conflict"] } {
    for (let r = 0; r < row; r++) {
      const c = board[r];
      if (c === col) return { ok: false, conflict: { kind: "col", r, c } };
      if (Math.abs(c - col) === Math.abs(r - row)) return { ok: false, conflict: { kind: "diag", r, c } };
    }
    return { ok: true, conflict: null };
  }

  function snap(f: Omit<QueensFrame, "nodes" | "board">) {
    frames.push({ ...f, board: [...board], nodes: nodes.map((x) => ({ ...x })) });
  }

  function recurse(row: number, depth: number, parent?: string): boolean {
    if (frames.length >= stopAt) return true;
    const id = `q-${idCounter++}`;
    const node: RecursionNode = { id, label: `row ${row}`, parent, depth, state: "active" };
    nodes.push(node);

    snap({ line: 0, vars: { row, solutions, tries: totalTries }, message: `Enter solve(row=${row}).`, row, tryingCol: -1, conflict: null, activeId: id, solutions, totalTries });

    if (row === n) {
      solutions++;
      node.returnValue = "✓";
      node.state = "done";
      snap({ line: 1, vars: { row, solutions, tries: totalTries }, message: `Row ${n} reached → full solution #${solutions} found.`, row, tryingCol: -1, conflict: null, activeId: id, solutions, totalTries });
      return true;
    }

    for (let col = 0; col < n; col++) {
      if (frames.length >= stopAt) break;
      totalTries++;
      snap({ line: 2, vars: { row, col, tries: totalTries, solutions }, message: `Try column ${col} in row ${row}.`, row, tryingCol: col, conflict: null, activeId: id, solutions, totalTries });
      const check = safe(row, col);
      if (!check.ok) {
        snap({ line: 3, vars: { row, col, tries: totalTries, solutions }, message: `Conflict with queen at (${check.conflict!.r}, ${check.conflict!.c}) via ${check.conflict!.kind}. Skip.`, row, tryingCol: col, conflict: check.conflict, activeId: id, solutions, totalTries });
        continue;
      }
      board[row] = col;
      snap({ line: 4, vars: { row, col, tries: totalTries, solutions }, message: `Safe. Place queen at (${row}, ${col}).`, row, tryingCol: col, conflict: null, activeId: id, solutions, totalTries });
      snap({ line: 5, vars: { row, col, tries: totalTries, solutions }, message: `Recurse into row ${row + 1}.`, row, tryingCol: col, conflict: null, activeId: id, solutions, totalTries });
      recurse(row + 1, depth + 1, id);
      if (frames.length >= stopAt) break;
      if (solutions >= 1 && n >= 5) break;
      board[row] = -1;
      snap({ line: 6, vars: { row, col, tries: totalTries, solutions }, message: `Backtrack: remove queen from (${row}, ${col}).`, row, tryingCol: col, conflict: null, activeId: id, solutions, totalTries });
    }

    node.state = "done";
    node.returnValue = board[row] !== -1 ? "✓" : "✗";
    return false;
  }

  recurse(0, 0);
  return frames;
}

function QueensBoard({ frame, n }: { frame: QueensFrame; n: number }) {
  const size = Math.min(40, Math.floor(320 / n));
  return (
    <div className="flex flex-col items-center gap-3">
      <div
        className="border-2 border-stone-300 dark:border-stone-600 rounded overflow-hidden"
        style={{ display: "grid", gridTemplateColumns: `repeat(${n}, ${size}px)`, gridTemplateRows: `repeat(${n}, ${size}px)` }}
      >
        {Array.from({ length: n }).flatMap((_, r) =>
          Array.from({ length: n }).map((_, c) => {
            const isLight = (r + c) % 2 === 0;
            const queen = frame.board[r] === c;
            const isTrying = r === frame.row && c === frame.tryingCol;
            const isConflict = frame.conflict && frame.conflict.r === r && frame.conflict.c === c;
            let bg = isLight ? "#f1f5f9" : "#cbd5e1";
            if (isConflict) bg = "#fca5a5";
            if (isTrying && !queen) bg = "#fde68a";
            return (
              <div key={`${r}-${c}`}
                className="flex items-center justify-center font-bold transition-colors"
                style={{ width: size, height: size, background: bg, fontSize: Math.max(14, size - 12), color: queen ? "#be185d" : "#78716c" }}>
                {queen ? "♛" : ""}
              </div>
            );
          })
        )}
      </div>
      <div className="flex gap-4 text-xs text-stone-500">
        <span>Solutions: <strong className="text-emerald-600">{frame.solutions}</strong></span>
        <span>Total tries: <strong className="text-lime-600 dark:text-lime-400">{frame.totalTries}</strong></span>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Sudoku                                                             */
/* ------------------------------------------------------------------ */

const SUDOKU_EASY: number[][] = [
  [5, 3, 0, 0, 7, 0, 0, 0, 0],
  [6, 0, 0, 1, 9, 5, 0, 0, 0],
  [0, 9, 8, 0, 0, 0, 0, 6, 0],
  [8, 0, 0, 0, 6, 0, 0, 0, 3],
  [4, 0, 0, 8, 0, 3, 0, 0, 1],
  [7, 0, 0, 0, 2, 0, 0, 0, 6],
  [0, 6, 0, 0, 0, 0, 2, 8, 0],
  [0, 0, 0, 4, 1, 9, 0, 0, 5],
  [0, 0, 0, 0, 8, 0, 0, 7, 9],
];

interface SudokuFrame {
  line: number;
  vars: Record<string, string | number | undefined>;
  message: string;
  grid: number[][];
  cell?: { r: number; c: number };
  tryingVal?: number;
  conflict?: boolean;
  tries: number;
}

const PSEUDO_SUDOKU = [
  "solve(grid):",
  "  find empty cell (r, c)",
  "  if none: return SOLVED",
  "  for v in 1..9:",
  "    if valid(r, c, v):",
  "      grid[r][c] ← v",
  "      if solve(grid): return SOLVED",
  "      grid[r][c] ← 0  // backtrack",
];

function buildSudoku(initial: number[][]): SudokuFrame[] {
  const frames: SudokuFrame[] = [];
  const grid = initial.map((row) => [...row]);
  let tries = 0;
  const cap = 120;

  function valid(r: number, c: number, v: number) {
    for (let i = 0; i < 9; i++) {
      if (grid[r][i] === v || grid[i][c] === v) return false;
    }
    const br = Math.floor(r / 3) * 3, bc = Math.floor(c / 3) * 3;
    for (let i = 0; i < 3; i++) for (let j = 0; j < 3; j++) if (grid[br + i][bc + j] === v) return false;
    return true;
  }

  function findEmpty(): [number, number] | null {
    for (let r = 0; r < 9; r++) for (let c = 0; c < 9; c++) if (grid[r][c] === 0) return [r, c];
    return null;
  }

  function push(f: Omit<SudokuFrame, "grid" | "tries">) {
    if (frames.length >= cap) return;
    frames.push({ ...f, tries, grid: grid.map((row) => [...row]) });
  }

  function solve(): boolean {
    if (frames.length >= cap) return true;
    const empty = findEmpty();
    push({ line: 0, vars: { tries }, message: "Enter solve()." });
    if (!empty) {
      push({ line: 2, vars: { tries }, message: "No empty cells - Sudoku solved!" });
      return true;
    }
    const [r, c] = empty;
    push({ line: 1, vars: { r, c, tries }, message: `Found empty cell (${r}, ${c}).`, cell: { r, c } });

    for (let v = 1; v <= 9; v++) {
      if (frames.length >= cap) return true;
      tries++;
      push({ line: 3, vars: { r, c, v, tries }, message: `Try value ${v} at (${r}, ${c}).`, cell: { r, c }, tryingVal: v });
      if (!valid(r, c, v)) {
        push({ line: 4, vars: { r, c, v, tries }, message: `${v} conflicts with row/col/box. Skip.`, cell: { r, c }, tryingVal: v, conflict: true });
        continue;
      }
      grid[r][c] = v;
      push({ line: 5, vars: { r, c, v, tries }, message: `Place ${v}. Recurse.`, cell: { r, c }, tryingVal: v });
      if (solve()) return true;
      grid[r][c] = 0;
      push({ line: 7, vars: { r, c, v, tries }, message: `Recurse failed. Backtrack (clear (${r},${c})).`, cell: { r, c }, tryingVal: v, conflict: true });
    }
    return false;
  }

  solve();
  return frames;
}

function SudokuBoard({ frame, initial }: { frame: SudokuFrame; initial: number[][] }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className="border-2 rounded overflow-hidden"
        style={{ display: "grid", gridTemplateColumns: "repeat(9, 32px)", gridTemplateRows: "repeat(9, 32px)", borderColor: "#0f172a" }}
      >
        {frame.grid.map((row, r) => row.map((v, c) => {
          const isGiven = initial[r][c] !== 0;
          const isActive = frame.cell?.r === r && frame.cell?.c === c;
          const isConflict = isActive && frame.conflict;
          const shownVal = isActive && frame.tryingVal && !isGiven && v === 0 ? frame.tryingVal : v;
          const borderRight = (c + 1) % 3 === 0 && c < 8 ? "2px solid #0f172a" : "1px solid #cbd5e1";
          const borderBottom = (r + 1) % 3 === 0 && r < 8 ? "2px solid #0f172a" : "1px solid #cbd5e1";
          return (
            <div key={`${r}-${c}`}
              className="flex items-center justify-center font-bold font-mono transition-colors"
              style={{
                width: 32, height: 32, fontSize: "0.85rem",
                color: isGiven ? "#0f172a" : isConflict ? "#991b1b" : "#1d4ed8",
                background: isConflict ? "#fecaca" : isActive ? "#fde68a" : isGiven ? "#f1f5f9" : "#fff",
                borderRight, borderBottom,
              }}>
              {shownVal > 0 ? shownVal : ""}
            </div>
          );
        }))}
      </div>
      <div className="text-xs text-stone-500">
        Tries so far: <strong className="text-lime-600 dark:text-lime-400">{frame.tries}</strong>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Visualize tab                                                      */
/* ------------------------------------------------------------------ */

function VisualizeTab() {
  const [mode, setMode] = useState<"queens" | "sudoku">("queens");
  const [nStr, setNStr] = useState("5");
  const n = Math.max(4, Math.min(6, Math.floor(Number(nStr) || 5)));

  const queensFrames = useMemo(() => buildQueens(n), [n]);
  const sudokuFrames = useMemo(() => buildSudoku(SUDOKU_EASY), []);
  const framesQ = useStepPlayer(queensFrames);
  const framesS = useStepPlayer(sudokuFrames);

  const modeToggle = (
    <div className="flex gap-1.5 flex-wrap">
      {(["queens", "sudoku"] as const).map((m) => (
        <PillButton key={m} onClick={() => setMode(m)} active={mode === m}>
          <span className="text-xs">{m === "queens" ? "N-Queens" : "Sudoku"}</span>
        </PillButton>
      ))}
    </div>
  );

  if (mode === "queens") {
    const frame = framesQ.current;
    return (
      <AlgoCanvas
        title={`${n}-Queens - Backtracking`}
        player={framesQ}
        input={
          <div className="flex flex-col gap-3">
            {modeToggle}
            <InputEditor
              label="Board size n (4–6)"
              value={nStr}
              helper="N-Queens: place n non-attacking queens on an n×n board."
              presets={[{ label: "4", value: "4" }, { label: "5", value: "5" }, { label: "6", value: "6" }]}
              onApply={setNStr}
            />
          </div>
        }
        pseudocode={<PseudocodePanel lines={PSEUDO_QUEENS} activeLine={frame?.line} />}
        variables={<VariablesPanel vars={frame?.vars ?? {}} flashKeys={["tries", "solutions"]} />}
      >
        <div className="flex flex-col gap-3">
          <div className="flex gap-3 text-xs text-stone-500 flex-wrap">
            <span className="inline-flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-sm bg-amber-200" />trying</span>
            <span className="inline-flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-sm bg-red-300" />conflict</span>
            <span className="font-bold text-pink-700">♛ queen</span>
          </div>
          <div className="grid gap-5" style={{ gridTemplateColumns: "auto 1fr" }}>
            {frame && <QueensBoard frame={frame} n={n} />}
            <RecursionTree nodes={frame?.nodes ?? []} activeId={frame?.activeId} height={320} />
          </div>
          {frame && <Callout>{frame.message}</Callout>}
        </div>
      </AlgoCanvas>
    );
  }

  const frame = framesS.current;
  return (
    <AlgoCanvas
      title="Sudoku - Backtracking"
      player={framesS}
      input={
        <div className="flex flex-col gap-3">
          {modeToggle}
          <p className="text-xs text-stone-500">
            A classic 9×9 Sudoku solved cell-by-cell. Empty cells tried 1..9 with row/col/box validation.
          </p>
        </div>
      }
      pseudocode={<PseudocodePanel lines={PSEUDO_SUDOKU} activeLine={frame?.line} />}
      variables={<VariablesPanel vars={frame?.vars ?? {}} flashKeys={["tries", "v"]} />}
    >
      <div className="flex flex-col gap-3">
        {frame && <SudokuBoard frame={frame} initial={SUDOKU_EASY} />}
        {frame && <Callout>{frame.message}</Callout>}
      </div>
    </AlgoCanvas>
  );
}

/* ------------------------------------------------------------------ */
/*  Learn tab                                                          */
/* ------------------------------------------------------------------ */

function LearnTab() {
  const cards = [
    { title: "What is backtracking?", body: "A brute-force search that grows a partial solution one choice at a time. When a choice leads to failure, it 'unmakes' the choice and tries another - a depth-first exploration of the state-space tree." },
    { title: "Template", body: "choose → explore → unchoose. You set a piece of state, recurse, then undo that state when you return. Any mutation you made must be perfectly reversed on the backtrack step." },
    { title: "Pruning", body: "The key to efficiency is cutting branches early. If you can tell a partial solution can't succeed (e.g., two queens attack each other), skip the entire subtree rooted at that choice." },
    { title: "Typical problems", body: "N-Queens, Sudoku, word search in a grid, generating all permutations/combinations, graph coloring, Hamiltonian path, subset-sum with explicit choices." },
  ];
  return (
    <div className="flex flex-col gap-5">
      <div>
        <SectionEyebrow>Mental model</SectionEyebrow>
        <SectionTitle>Walk a tree of choices. Pop on dead end.</SectionTitle>
        <Lede>
          Walking a maze with a piece of chalk: at every junction you mark the path you took, walk
          forward, and if you hit a dead end you erase the mark and try the next branch. Backtracking
          is exactly this &quot;choose, recurse, unchoose&quot; pattern, expressed as recursion.
        </Lede>
      </div>
      <div className="grid gap-3" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
        {cards.map((s, i) => (
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
    { q: "How many solutions does 4-Queens have?", a: "2", hint: "The two mirror-image placements." },
    { q: "How many solutions does 8-Queens have?", a: "92", hint: "Classic result." },
    { q: "Naive generating all permutations of n=4 - how many leaves in the tree?", a: "24", hint: "n! = 4·3·2·1." },
    { q: "After placing queens at (0,1), (1,3), can we place a queen in row 2 column 0?", a: "yes", hint: "Check col 0 - no queen; check diagonals." },
  ];
  const [guesses, setGuesses] = useState<(string | null)[]>(problems.map(() => null));
  const [shown, setShown] = useState<boolean[]>(problems.map(() => false));
  return (
    <div className="flex flex-col gap-3">
      <Callout>Trace the recursion. Reveal when ready.</Callout>
      {problems.map((p, i) => {
        const g = guesses[i];
        const revealed = shown[i];
        const correct = g !== null && g.trim().toLowerCase() === p.a.toLowerCase();
        return (
          <Card key={i}>
            <div className="flex items-center gap-3 flex-wrap">
              <span className="font-bold text-sm text-stone-500 font-mono">#{i + 1}</span>
              <span className="flex-1 text-sm text-stone-900 dark:text-stone-100">{p.q}</span>
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
        <SubHeading>Pruning = most of the speedup</SubHeading>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          A naive permutation-based N-Queens tries n! boards. With &quot;column already used&quot; and &quot;diagonal conflict&quot; pruning, real backtracking explores a tiny fraction - 8-Queens explores about 15,700 nodes instead of 8! ≈ 40,000 permutations.
        </p>
      </Card>
      <Card>
        <SubHeading>Difference from plain DFS</SubHeading>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          DFS explores a fixed graph. Backtracking builds the graph <em>on the fly</em> - nodes are partial solutions, edges are &quot;add one element&quot;. The state-space is implicit and often huge.
        </p>
      </Card>
      <Card>
        <SubHeading>Interview patterns</SubHeading>
        <ul className="list-disc pl-5 space-y-1 text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          <li>State-space tree: draw it to count operations.</li>
          <li>Bounding function: prune whenever partial cost ≥ best known.</li>
          <li>Backtracking = DFS on the state-space; Branch-and-bound = best-first variant with bounds.</li>
        </ul>
      </Card>
      <Card>
        <SubHeading>Complexity, when interviewers ask</SubHeading>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed mb-2">
          Backtracking explores a search tree. Without pruning the tree size is the
          raw combinatorial bound: <InlineCode>O(N!)</InlineCode> for N-Queens,{" "}
          <InlineCode>O(2^n)</InlineCode> for subsets, <InlineCode>O(n!)</InlineCode>{" "}
          for permutations.
        </p>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed mb-2">
          Pruning (column conflicts, diagonal conflicts, &quot;already used&quot; sets) cuts
          huge portions of the tree. In practice N-Queens runs in time proportional
          to a small constant raised to N, not N!. The asymptotic worst case stays
          the same; the practical case is dramatically better.
        </p>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          Space is the depth of recursion plus the partial solution:{" "}
          <InlineCode>O(N)</InlineCode> for N-Queens,{" "}
          <InlineCode>O(n)</InlineCode> for subsets and permutations.
        </p>
      </Card>
    </div>
  );
}

/* ------------------------------------------------------------------ */

interface Props {
  onQuizComplete?: (score: number) => void;
}

export default function L6_Backtracking({ onQuizComplete }: Props) {
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
      question: "What is the defining idea of backtracking?",
      options: [
        "Iteratively improve a solution",
        "Build a partial solution, and if it fails, undo the last step and try another choice",
        "Compute all solutions in parallel",
        "Cache results to avoid recomputation",
      ],
      correctIndex: 1,
      explanation: "Choose → explore → unchoose. That DFS-on-choices pattern is the essence of backtracking.",
    },
    {
      question: "For N-Queens, which check is NOT needed when placing queens row-by-row?",
      options: ["Same column", "Same diagonal (both directions)", "Same row", "Knight's-move attack"],
      correctIndex: 3,
      explanation: "Queens don't move in knight's moves. And since we place one queen per row, two queens can never be in the same row - so that check is also implicit.",
    },
    {
      question: "Why is pruning essential for backtracking?",
      options: [
        "It guarantees the best solution",
        "It reduces the search space, often by orders of magnitude",
        "It makes the algorithm polynomial-time",
        "It converts backtracking into DP",
      ],
      correctIndex: 1,
      explanation: "Pruning cuts off entire subtrees that cannot lead to a valid solution - turning exponential worst cases into tractable runs for practical instances.",
    },
    {
      question: "In Sudoku, when backtracking from cell (r, c), what must you do?",
      options: [
        "Leave the value in place",
        "Set grid[r][c] back to 0 and try the next candidate",
        "Restart from the top-left cell",
        "Write a random value",
      ],
      correctIndex: 1,
      explanation: "The 'unmake' step restores state, so sibling choices start from an identical position to the pre-choice board.",
    },
  ];

  return (
    <LessonShell
      title="Backtracking"
      level={6}
      lessonNumber={3}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="Core technique for N-Queens / Sudoku / subsets / combinations interviews"
      nextLessonHint="Dynamic Programming (1D)"
      onQuizComplete={onQuizComplete}
    />
  );
}

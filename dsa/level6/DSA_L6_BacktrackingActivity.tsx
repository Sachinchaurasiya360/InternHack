"use client";

import { useMemo, useState } from "react";
import { BookOpen, Play, Target, Lightbulb } from "lucide-react";
import EngineeringLessonShell, { EngTabDef, EngQuizQuestion } from "@/components/engineering/EngineeringLessonShell";
import {
  AlgoCanvas, PseudocodePanel, VariablesPanel, InputEditor, useStepPlayer,
  RecursionTree,
} from "@/components/engineering/algo";
import type { RecursionNode } from "@/components/engineering/algo";
import {
  C, DSA_ACCENT as A,
  SectionEyebrow, SectionTitle, SubHeading, Lede,
  Card, PillButton, Callout,
} from "@/components/engineering/lessonPrimitives";

/* ------------------------------------------------------------------ */
/*  N-Queens                                                           */
/* ------------------------------------------------------------------ */

interface QueensFrame {
  line: number;
  vars: Record<string, string | number | undefined>;
  message: string;
  board: number[]; // board[row] = col, -1 if empty
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
  const stopAt = 160; // cap frames to keep the visualization tight

  function safe(row: number, col: number): { ok: boolean; conflict: QueensFrame["conflict"] } {
    for (let r = 0; r < row; r++) {
      const c = board[r];
      if (c === col) return { ok: false, conflict: { kind: "col", r, c } };
      if (Math.abs(c - col) === Math.abs(r - row)) return { ok: false, conflict: { kind: "diag", r, c } };
    }
    return { ok: true, conflict: null };
  }

  function snapshot(f: Omit<QueensFrame, "nodes" | "board">) {
    frames.push({
      ...f,
      board: [...board],
      nodes: nodes.map((x) => ({ ...x })),
    });
  }

  function recurse(row: number, depth: number, parent?: string): boolean {
    if (frames.length >= stopAt) return true;
    const id = `q-${idCounter++}`;
    const node: RecursionNode = {
      id, label: `row ${row}`, parent, depth, state: "active",
    };
    nodes.push(node);

    snapshot({
      line: 0, vars: { row, solutions, tries: totalTries },
      message: `Enter solve(row=${row}).`,
      row, tryingCol: -1, conflict: null, activeId: id, solutions, totalTries,
    });

    if (row === n) {
      solutions++;
      node.returnValue = "✓";
      node.state = "done";
      snapshot({
        line: 1, vars: { row, solutions, tries: totalTries },
        message: `Row ${n} reached → full solution #${solutions} found.`,
        row, tryingCol: -1, conflict: null, activeId: id, solutions, totalTries,
      });
      return true;
    }

    for (let col = 0; col < n; col++) {
      if (frames.length >= stopAt) break;
      totalTries++;
      snapshot({
        line: 2, vars: { row, col, tries: totalTries, solutions },
        message: `Try column ${col} in row ${row}.`,
        row, tryingCol: col, conflict: null, activeId: id, solutions, totalTries,
      });
      const check = safe(row, col);
      if (!check.ok) {
        snapshot({
          line: 3, vars: { row, col, tries: totalTries, solutions },
          message: `Conflict with queen at (${check.conflict!.r}, ${check.conflict!.c}) via ${check.conflict!.kind}. Skip.`,
          row, tryingCol: col, conflict: check.conflict, activeId: id, solutions, totalTries,
        });
        continue;
      }
      board[row] = col;
      snapshot({
        line: 4, vars: { row, col, tries: totalTries, solutions },
        message: `Safe. Place queen at (${row}, ${col}).`,
        row, tryingCol: col, conflict: null, activeId: id, solutions, totalTries,
      });
      snapshot({
        line: 5, vars: { row, col, tries: totalTries, solutions },
        message: `Recurse into row ${row + 1}.`,
        row, tryingCol: col, conflict: null, activeId: id, solutions, totalTries,
      });
      recurse(row + 1, depth + 1, id);

      if (frames.length >= stopAt) break;
      if (solutions >= 1 && n >= 5) break; // stop after first solution for bigger boards

      board[row] = -1;
      snapshot({
        line: 6, vars: { row, col, tries: totalTries, solutions },
        message: `Backtrack: remove queen from (${row}, ${col}).`,
        row, tryingCol: col, conflict: null, activeId: id, solutions, totalTries,
      });
    }

    node.state = "done";
    node.returnValue = board[row] !== -1 ? "✓" : "✗";
    return false;
  }

  recurse(0, 0);
  return frames;
}

/* ------------------------------------------------------------------ */
/*  N-Queens board view                                                */
/* ------------------------------------------------------------------ */

function QueensBoard({ frame, n }: { frame: QueensFrame; n: number }) {
  const size = Math.min(40, Math.floor(320 / n));
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
      <div style={{
        display: "grid",
        gridTemplateColumns: `repeat(${n}, ${size}px)`,
        gridTemplateRows: `repeat(${n}, ${size}px)`,
        border: `2px solid ${C.border}`, borderRadius: 6, overflow: "hidden",
      }}>
        {Array.from({ length: n }).map((_, r) =>
          Array.from({ length: n }).map((_, c) => {
            const isLight = (r + c) % 2 === 0;
            const queen = frame.board[r] === c;
            const isTrying = r === frame.row && c === frame.tryingCol;
            const isConflict = frame.conflict && frame.conflict.r === r && frame.conflict.c === c;
            let bg = isLight ? "#f1f5f9" : "#cbd5e1";
            if (isConflict) bg = "#fca5a5";
            if (isTrying && !queen) bg = "#fde68a";
            return (
              <div key={`${r}-${c}`} style={{
                width: size, height: size,
                background: bg,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: Math.max(14, size - 12), fontWeight: 700,
                color: queen ? "#be185d" : C.textMuted,
                transition: "background 0.25s",
              }}>
                {queen ? "♛" : ""}
              </div>
            );
          })
        )}
      </div>
      <div style={{ display: "flex", gap: 14, fontSize: "0.72rem", color: C.textMuted }}>
        <span>Solutions: <strong style={{ color: C.successDark }}>{frame.solutions}</strong></span>
        <span>Total tries: <strong style={{ color: A }}>{frame.totalTries}</strong></span>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Sudoku                                                             */
/* ------------------------------------------------------------------ */

const SUDOKU_EASY: number[][] = [
  [5, 3, 0,  0, 7, 0,  0, 0, 0],
  [6, 0, 0,  1, 9, 5,  0, 0, 0],
  [0, 9, 8,  0, 0, 0,  0, 6, 0],

  [8, 0, 0,  0, 6, 0,  0, 0, 3],
  [4, 0, 0,  8, 0, 3,  0, 0, 1],
  [7, 0, 0,  0, 2, 0,  0, 0, 6],

  [0, 6, 0,  0, 0, 0,  2, 8, 0],
  [0, 0, 0,  4, 1, 9,  0, 0, 5],
  [0, 0, 0,  0, 8, 0,  0, 7, 9],
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
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(9, 32px)",
        gridTemplateRows: "repeat(9, 32px)",
        border: "2.5px solid #0f172a", borderRadius: 4, overflow: "hidden",
      }}>
        {frame.grid.map((row, r) => row.map((v, c) => {
          const isGiven = initial[r][c] !== 0;
          const isActive = frame.cell?.r === r && frame.cell?.c === c;
          const isConflict = isActive && frame.conflict;
          const shownVal = isActive && frame.tryingVal && !isGiven && v === 0 ? frame.tryingVal : v;
          const borderRight = (c + 1) % 3 === 0 && c < 8 ? "2px solid #0f172a" : "1px solid #cbd5e1";
          const borderBottom = (r + 1) % 3 === 0 && r < 8 ? "2px solid #0f172a" : "1px solid #cbd5e1";
          return (
            <div key={`${r}-${c}`} style={{
              width: 32, height: 32,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "0.85rem", fontWeight: 700,
              fontFamily: C.mono,
              color: isGiven ? "#0f172a" : isConflict ? "#991b1b" : "#1d4ed8",
              background: isConflict ? "#fecaca" : isActive ? "#fde68a" : isGiven ? "#f1f5f9" : "#fff",
              borderRight, borderBottom,
              transition: "background 0.2s",
            }}>
              {shownVal > 0 ? shownVal : ""}
            </div>
          );
        }))}
      </div>
      <div style={{ marginTop: 8, fontSize: "0.72rem", color: C.textMuted }}>
        Tries so far: <strong style={{ color: A }}>{frame.tries}</strong>
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

  if (mode === "queens") {
    const frame = framesQ.current!;
    return (
      <AlgoCanvas
        title={`${n}-Queens - Backtracking`}
        player={framesQ}
        input={
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <ModeToggle mode={mode} setMode={setMode} />
            <InputEditor
              label="Board size n (4–6)"
              value={nStr}
              helper="N-Queens: place n non-attacking queens on an n×n board."
              presets={[{ label: "4", value: "4" }, { label: "5", value: "5" }, { label: "6", value: "6" }]}
              onApply={setNStr}
            />
          </div>
        }
        pseudocode={<PseudocodePanel lines={PSEUDO_QUEENS} activeLine={frame.line} />}
        variables={<VariablesPanel vars={frame.vars} flashKeys={["tries", "solutions"]} />}
        legend={
          <div style={{ display: "flex", gap: 14, fontSize: "0.72rem" }}>
            <Legend color="#fde68a" label="trying" />
            <Legend color="#fca5a5" label="conflict" />
            <span style={{ color: "#be185d", fontWeight: 700 }}>♛ queen</span>
          </div>
        }
      >
        <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 20, alignItems: "start" }}>
          <QueensBoard frame={frame} n={n} />
          <RecursionTree nodes={frame.nodes} activeId={frame.activeId} height={320} />
        </div>
        <div style={{ marginTop: 12 }}>
          <Callout accent={A}>{frame.message}</Callout>
        </div>
      </AlgoCanvas>
    );
  }
  const frame = framesS.current!;
  return (
    <AlgoCanvas
      title="Sudoku - Backtracking"
      player={framesS}
      input={
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <ModeToggle mode={mode} setMode={setMode} />
          <div style={{ fontSize: "0.78rem", color: C.textMuted }}>
            A classic 9×9 Sudoku solved cell-by-cell. Empty cells tried 1..9 with row/col/box validation.
          </div>
        </div>
      }
      pseudocode={<PseudocodePanel lines={PSEUDO_SUDOKU} activeLine={frame.line} />}
      variables={<VariablesPanel vars={frame.vars} flashKeys={["tries", "v"]} />}
    >
      <SudokuBoard frame={frame} initial={SUDOKU_EASY} />
      <div style={{ marginTop: 12 }}>
        <Callout accent={A}>{frame.message}</Callout>
      </div>
    </AlgoCanvas>
  );
}

function ModeToggle({ mode, setMode }: { mode: "queens" | "sudoku"; setMode: (m: "queens" | "sudoku") => void }) {
  return (
    <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
      {(["queens", "sudoku"] as const).map((m) => (
        <PillButton key={m} onClick={() => setMode(m)} active={mode === m} color={A}>
          <span style={{ fontSize: "0.78rem" }}>{m === "queens" ? "N-Queens" : "Sudoku"}</span>
        </PillButton>
      ))}
    </div>
  );
}

function Legend({ color, label }: { color: string; label: string }) {
  return <span style={{ display: "inline-flex", alignItems: "center", gap: 5 }}>
    <span style={{ width: 10, height: 10, background: color, borderRadius: 2 }} />{label}
  </span>;
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
    <div style={{ fontFamily: C.heading, display: "flex", flexDirection: "column", gap: 14 }}>
      <div>
        <SectionEyebrow color={A}>Mental model</SectionEyebrow>
        <SectionTitle>Walk a tree of choices. Pop on dead end.</SectionTitle>
        <Lede>
          Push the chosen branch onto a stack and descend. When you hit a dead end, pop the last
          choice and try a sibling. That&rsquo;s literally what the recursion + undo pattern does.
        </Lede>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 12 }}>
        {cards.map((s, i) => (
          <Card key={i}>
            <div style={{ fontSize: "0.72rem", fontWeight: 700, color: A, marginBottom: 6, fontFamily: C.mono, letterSpacing: "0.08em" }}>0{i + 1}</div>
            <div style={{ fontWeight: 700, fontSize: "0.95rem", color: C.text, marginBottom: 4, letterSpacing: "-0.01em" }}>{s.title}</div>
            <div style={{ fontSize: "0.85rem", color: C.textSecondary, lineHeight: 1.55 }}>{s.body}</div>
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
    <div style={{ fontFamily: C.heading, display: "flex", flexDirection: "column", gap: 12 }}>
      <Callout accent={A}>Trace the recursion. Reveal when ready.</Callout>
      {problems.map((p, i) => {
        const g = guesses[i];
        const revealed = shown[i];
        const correct = g !== null && g.trim().toLowerCase() === p.a.toLowerCase();
        return (
          <Card key={i}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
              <span style={{ fontWeight: 700, fontSize: "0.85rem", color: C.textMuted, fontFamily: C.mono }}>#{i + 1}</span>
              <span style={{ flex: 1, fontSize: "0.9rem", color: C.text }}>{p.q}</span>
              <input type="text" placeholder="answer" value={g ?? ""}
                onChange={(e) => { const v = [...guesses]; v[i] = e.target.value; setGuesses(v); }}
                style={{ width: 90, padding: "7px 10px", borderRadius: 8, border: `1px solid ${C.border}`, fontFamily: C.mono, fontSize: "0.85rem", outline: "none", background: C.bg, color: C.text }}
              />
              <button onClick={() => { const v = [...shown]; v[i] = true; setShown(v); }}
                style={{
                  padding: "6px 14px", borderRadius: 8, fontSize: "0.78rem", fontWeight: 700,
                  border: `1px solid ${C.border}`, background: C.bg, color: C.textSecondary,
                  cursor: "pointer", fontFamily: C.heading,
                }}>Reveal</button>
              {revealed && (
                <span style={{
                  fontSize: "0.82rem", fontWeight: 700,
                  color: correct ? C.successDark : C.dangerDark,
                  padding: "4px 12px", borderRadius: 8,
                  background: correct ? `${C.success}14` : `${C.danger}14`,
                  fontFamily: C.heading,
                }}>{correct ? `✓ ${p.a}` : `Answer: ${p.a}`}</span>
              )}
            </div>
            {revealed && (
              <div style={{ marginTop: 12 }}>
                <Callout accent={A}>Hint: {p.hint}</Callout>
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
        <SubHeading>Pruning = most of the speedup</SubHeading>
        <p style={{ fontSize: "0.9rem", color: C.textSecondary, lineHeight: 1.6, margin: 0 }}>
          A naive permutation-based N-Queens tries n! boards. With &quot;column already used&quot; and &quot;diagonal conflict&quot; pruning, real backtracking explores a tiny fraction - 8-Queens explores about 15,700 nodes instead of 8! ≈ 40,000 permutations.
        </p>
      </Card>
      <Card>
        <SubHeading>Difference from plain DFS</SubHeading>
        <p style={{ fontSize: "0.9rem", color: C.textSecondary, lineHeight: 1.6, margin: 0 }}>
          DFS explores a fixed graph. Backtracking builds the graph <em>on the fly</em> - nodes are partial solutions, edges are &quot;add one element&quot;. The state-space is implicit and often huge.
        </p>
      </Card>
      <Card>
        <SubHeading>Interview patterns</SubHeading>
        <ul style={{ fontSize: "0.9rem", color: C.textSecondary, lineHeight: 1.7, paddingLeft: 22, margin: 0 }}>
          <li>State-space tree: draw it to count operations.</li>
          <li>Bounding function: prune whenever partial cost ≥ best known.</li>
          <li>Backtracking = DFS on the state-space; Branch-and-bound = best-first variant with bounds.</li>
        </ul>
      </Card>
    </div>
  );
}

/* ------------------------------------------------------------------ */

export default function DSA_L6_BacktrackingActivity() {
  const tabs: EngTabDef[] = [
    { id: "learn", label: "Learn", icon: <BookOpen className="w-4 h-4" />, content: <LearnTab /> },
    { id: "visualize", label: "Visualize", icon: <Play className="w-4 h-4" />, content: <VisualizeTab /> },
    { id: "try", label: "Try It", icon: <Target className="w-4 h-4" />, content: <TryTab /> },
    { id: "insight", label: "Insight", icon: <Lightbulb className="w-4 h-4" />, content: <InsightTab /> },
  ];
  const quiz: EngQuizQuestion[] = [
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
    <EngineeringLessonShell
      title="Backtracking"
      level={6}
      lessonNumber={2}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="Core technique for N-Queens / Sudoku / subsets / combinations interviews"
      nextLessonHint="Divide & Conquer - split, solve, merge"
    />
  );
}

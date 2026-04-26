"use client";

import { useMemo, useState } from "react";
import { BookOpen, Play, Target, Lightbulb } from "lucide-react";
import EngineeringLessonShell, { EngTabDef, EngQuizQuestion } from "@/components/engineering/EngineeringLessonShell";
import {
  AlgoCanvas, PseudocodePanel, VariablesPanel, InputEditor, useStepPlayer,
} from "@/components/engineering/algo";
import {
  C, DSA_ACCENT as A,
  SectionEyebrow, SectionTitle, SubHeading, Lede,
  Card, PillButton, Callout,
} from "@/components/engineering/lessonPrimitives";

/* ------------------------------------------------------------------ */
/*  Grid model: each cell has a state that stays mostly the same.       */
/*  BFS spreads from the source; we record per-frame distance maps.     */
/* ------------------------------------------------------------------ */

type CellKind = "empty" | "wall" | "source" | "target";

interface Frame {
  line: number;
  vars: Record<string, string | number | undefined>;
  message: string;
  dist: (number | null)[][]; // null = unreached
  frontier: [number, number][];
  current: [number, number] | null;
  path: [number, number][] | null;
  flashKey?: string;
}

const PSEUDO = [
  "function bfs(grid, src):",
  "  queue ← [src]; dist[src] ← 0",
  "  while queue not empty:",
  "    (r, c) ← queue.popFront()",
  "    for each neighbor (nr, nc):",
  "      if in-bounds and not wall and dist[nr][nc] == null:",
  "        dist[nr][nc] ← dist[r][c] + 1",
  "        queue.pushBack((nr, nc))",
  "  return dist",
];

function bfsFrames(
  grid: CellKind[][],
  src: [number, number],
  target: [number, number] | null,
  diag: boolean,
): Frame[] {
  const R = grid.length;
  const Cn = grid[0]?.length ?? 0;
  const dirs4 = [[-1, 0], [1, 0], [0, -1], [0, 1]];
  const dirs8 = [...dirs4, [-1, -1], [-1, 1], [1, -1], [1, 1]];
  const dirs = diag ? dirs8 : dirs4;

  const f: Frame[] = [];
  const dist: (number | null)[][] = Array.from({ length: R }, () => Array(Cn).fill(null));
  const parent: ([number, number] | null)[][] = Array.from({ length: R }, () => Array(Cn).fill(null));

  dist[src[0]][src[1]] = 0;
  const q: [number, number][] = [[...src]];

  f.push({
    line: 0, vars: { src: `(${src[0]},${src[1]})`, R, C: Cn, diag: diag ? "8-dir" : "4-dir" },
    message: `BFS from source (${src[0]},${src[1]}). ${diag ? "Eight" : "Four"}-directional moves.`,
    dist: dist.map((r) => [...r]), frontier: [...q], current: null, path: null,
  });
  f.push({
    line: 1, vars: { "queue.size": q.length, "dist[src]": 0 }, flashKey: "queue.size",
    message: "Enqueue source; its distance is 0.",
    dist: dist.map((r) => [...r]), frontier: [...q], current: null, path: null,
  });

  while (q.length) {
    const cur = q.shift()!;
    f.push({
      line: 3, vars: { r: cur[0], c: cur[1], d: dist[cur[0]][cur[1]] ?? "-" }, flashKey: "d",
      message: `Dequeue (${cur[0]},${cur[1]}) - distance ${dist[cur[0]][cur[1]]}.`,
      dist: dist.map((r) => [...r]), frontier: [...q], current: cur, path: null,
    });
    if (target && cur[0] === target[0] && cur[1] === target[1]) break;
    for (const [dr, dc] of dirs) {
      const nr = cur[0] + dr;
      const nc = cur[1] + dc;
      if (nr < 0 || nr >= R || nc < 0 || nc >= Cn) continue;
      if (grid[nr][nc] === "wall") continue;
      if (dist[nr][nc] !== null) continue;
      dist[nr][nc] = (dist[cur[0]][cur[1]] ?? 0) + 1;
      parent[nr][nc] = cur;
      q.push([nr, nc]);
      f.push({
        line: 6, vars: { nr, nc, "dist[nr][nc]": dist[nr][nc] ?? "-" }, flashKey: "dist[nr][nc]",
        message: `Visit (${nr},${nc}) - distance ${dist[nr][nc]}. Enqueue.`,
        dist: dist.map((r) => [...r]), frontier: [...q], current: cur, path: null,
      });
    }
  }

  // Reconstruct path if target set
  let path: [number, number][] | null = null;
  if (target && dist[target[0]][target[1]] !== null) {
    path = [];
    let c: [number, number] | null = target;
    while (c) {
      path.push(c);
      c = parent[c[0]][c[1]];
    }
    path.reverse();
  }

  f.push({
    line: 8, vars: { done: "true", reached: target ? (dist[target[0]][target[1]] ?? "unreachable") : "-" }, flashKey: "done",
    message: target
      ? (dist[target[0]][target[1]] !== null
          ? `Reached target in ${dist[target[0]][target[1]]} steps.`
          : "Target unreachable.")
      : `Filled ${dist.flat().filter((x) => x !== null).length} cells.`,
    dist: dist.map((r) => [...r]), frontier: [], current: null, path,
  });
  return f;
}

/* ------------------------------------------------------------------ */
/*  Visualize                                                          */
/* ------------------------------------------------------------------ */

type PaintTool = "wall" | "source" | "target" | "empty";

function parseGrid(s: string): { grid: CellKind[][]; src: [number, number] | null; tgt: [number, number] | null } | null {
  const lines = s.split("\n").map((l) => l.trim()).filter(Boolean);
  if (lines.length === 0) return null;
  const R = lines.length;
  const Cn = Math.max(...lines.map((l) => l.length));
  if (Cn === 0) return null;
  const grid: CellKind[][] = Array.from({ length: R }, () => Array(Cn).fill("empty"));
  let src: [number, number] | null = null;
  let tgt: [number, number] | null = null;
  for (let r = 0; r < R; r++) {
    for (let c = 0; c < Cn; c++) {
      const ch = lines[r][c] ?? ".";
      if (ch === "#") grid[r][c] = "wall";
      else if (ch === "S") { grid[r][c] = "source"; src = [r, c]; }
      else if (ch === "T") { grid[r][c] = "target"; tgt = [r, c]; }
      else grid[r][c] = "empty";
    }
  }
  return { grid, src, tgt };
}

function gridToString(grid: CellKind[][]): string {
  return grid.map((row) => row.map((c) => c === "wall" ? "#" : c === "source" ? "S" : c === "target" ? "T" : ".").join("")).join("\n");
}

function VisualizeTab() {
  const DEFAULT = [
    "S.....#...",
    ".###..#...",
    "...#......",
    "####..###.",
    "......#.T.",
  ].join("\n");
  const [inputStr, setInputStr] = useState(DEFAULT);
  const [diag, setDiag] = useState(false);
  const [tool, setTool] = useState<PaintTool>("wall");
  const [gridState, setGridState] = useState(() => parseGrid(DEFAULT)!);

  // Keep grid in sync when input string changes
  const applyInput = (v: string) => {
    const p = parseGrid(v);
    if (p) { setInputStr(v); setGridState(p); }
  };

  function onCellClick(r: number, c: number) {
    const next: CellKind[][] = gridState.grid.map((row) => [...row]);
    let nextSrc = gridState.src;
    let nextTgt = gridState.tgt;
    if (tool === "source") {
      if (nextSrc) next[nextSrc[0]][nextSrc[1]] = "empty";
      next[r][c] = "source";
      nextSrc = [r, c];
      if (nextTgt && nextTgt[0] === r && nextTgt[1] === c) nextTgt = null;
    } else if (tool === "target") {
      if (nextTgt) next[nextTgt[0]][nextTgt[1]] = "empty";
      next[r][c] = "target";
      nextTgt = [r, c];
      if (nextSrc && nextSrc[0] === r && nextSrc[1] === c) nextSrc = null;
    } else if (tool === "wall") {
      if (next[r][c] === "source" || next[r][c] === "target") return;
      next[r][c] = next[r][c] === "wall" ? "empty" : "wall";
    } else {
      if (next[r][c] === "source") nextSrc = null;
      if (next[r][c] === "target") nextTgt = null;
      next[r][c] = "empty";
    }
    setGridState({ grid: next, src: nextSrc, tgt: nextTgt });
    setInputStr(gridToString(next));
  }

  const frames = useMemo(
    () => gridState.src ? bfsFrames(gridState.grid, gridState.src, gridState.tgt, diag) : [{
      line: 0, vars: {}, message: "Click the Source tool and tap a cell to begin.",
      dist: gridState.grid.map((r) => r.map(() => null)),
      frontier: [], current: null, path: null,
    } as Frame],
    [gridState, diag],
  );
  const player = useStepPlayer(frames);
  const frame = player.current!;

  return (
    <AlgoCanvas
      title="Grid → Graph - BFS Wavefront"
      player={player}
      input={
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <InputEditor
            label="Grid (rows separated by newlines - '.' empty, '#' wall, 'S' source, 'T' target)"
            value={inputStr}
            placeholder={DEFAULT}
            helper="Or click cells below using the paint tool."
            presets={[
              { label: "Maze", value: DEFAULT },
              { label: "Open", value: "S........\n.........\n.........\n........T" },
              { label: "Spiral", value: "S........\n########.\n.......#.\n.#####.#.\n.#...#.#.\n.#.T.#.#.\n.#...#.#.\n.#####.#.\n........." },
              { label: "Unreachable", value: "S.#......\n..#......\n..#.####.\n..#.#..#.\n....#T.#.\n....####." },
            ]}
            onApply={applyInput}
          />
          <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
            <span style={{ fontSize: "0.72rem", fontWeight: 700, color: C.textMuted, textTransform: "uppercase", letterSpacing: "0.05em" }}>Paint</span>
            {(["source", "target", "wall", "empty"] as PaintTool[]).map((t) => (
              <PillButton key={t} color={A} active={tool === t} onClick={() => setTool(t)}>
                <span style={{ fontSize: "0.78rem" }}>
                  {t === "source" ? "Source (S)" : t === "target" ? "Target (T)" : t === "wall" ? "Wall (#)" : "Erase"}
                </span>
              </PillButton>
            ))}
            <span style={{ width: 12 }} />
            <span style={{ fontSize: "0.72rem", fontWeight: 700, color: C.textMuted, textTransform: "uppercase", letterSpacing: "0.05em" }}>Moves</span>
            <PillButton color={A} active={!diag} onClick={() => setDiag(false)}>
              <span style={{ fontSize: "0.78rem" }}>4-dir</span>
            </PillButton>
            <PillButton color={A} active={diag} onClick={() => setDiag(true)}>
              <span style={{ fontSize: "0.78rem" }}>8-dir</span>
            </PillButton>
          </div>
        </div>
      }
      pseudocode={<PseudocodePanel lines={PSEUDO} activeLine={frame.line} />}
      variables={<VariablesPanel vars={frame.vars} flashKeys={frame.flashKey ? [frame.flashKey] : []} />}
    >
      <GridViz
        grid={gridState.grid}
        frame={frame}
        onCellClick={onCellClick}
      />
    </AlgoCanvas>
  );
}

function GridViz({
  grid, frame, onCellClick,
}: {
  grid: CellKind[][];
  frame: Frame;
  onCellClick: (r: number, c: number) => void;
}) {
  const Cn = grid[0]?.length ?? 0;
  // Max distance for color ramp
  const maxD = Math.max(
    0,
    ...frame.dist.flat().filter((x): x is number => x !== null),
  );

  const frontierSet = new Set(frame.frontier.map(([r, c]) => `${r},${c}`));
  const pathSet = new Set((frame.path ?? []).map(([r, c]) => `${r},${c}`));

  function cellColor(r: number, c: number): { bg: string; fg: string; border: string } {
    const kind = grid[r][c];
    const d = frame.dist[r][c];
    if (kind === "wall") return { bg: "#334155", fg: "#fff", border: "#1e293b" };
    if (kind === "source") return { bg: C.success, fg: "#fff", border: C.success };
    if (kind === "target") return { bg: C.danger, fg: "#fff", border: C.danger };
    if (pathSet.has(`${r},${c}`)) return { bg: "#fbbf24", fg: "#78350f", border: "#b45309" };
    if (frame.current && frame.current[0] === r && frame.current[1] === c) return { bg: "#3b82f6", fg: "#fff", border: "#1d4ed8" };
    if (frontierSet.has(`${r},${c}`)) return { bg: "#06b6d4", fg: "#fff", border: "#0e7490" };
    if (d !== null) {
      // distance ramp: purple → light purple based on distance / maxD
      const ratio = maxD === 0 ? 0 : d / maxD;
      const alpha = 0.18 + 0.55 * (1 - ratio);
      return { bg: `rgba(139,92,246,${alpha.toFixed(2)})`, fg: "#3c1a94", border: "rgba(139,92,246,0.4)" };
    }
    return { bg: C.bg, fg: C.textMuted, border: C.border };
  }

  const size = Math.max(22, Math.min(44, Math.floor(540 / Math.max(Cn, 1))));

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
      <div style={{
        display: "grid",
        gridTemplateColumns: `repeat(${Cn}, ${size}px)`,
        gridAutoRows: `${size}px`,
        gap: 3,
        padding: 8, background: C.bgSoft, borderRadius: 10,
        border: `1px solid ${C.border}`,
      }}>
        {grid.map((row, r) => row.map((_, c) => {
          const col = cellColor(r, c);
          const d = frame.dist[r][c];
          const kind = grid[r][c];
          return (
            <div
              key={`${r}-${c}`}
              onClick={() => onCellClick(r, c)}
              style={{
                width: size, height: size,
                background: col.bg, color: col.fg,
                border: `1.5px solid ${col.border}`,
                borderRadius: 5,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontFamily: C.mono,
                fontSize: size > 30 ? "0.78rem" : "0.68rem",
                fontWeight: 700,
                cursor: "pointer",
                transition: "background 0.3s ease, color 0.3s ease, border-color 0.3s ease",
              }}
            >
              {kind === "wall" ? "" : kind === "source" ? "S" : kind === "target" ? "T" : d ?? ""}
            </div>
          );
        }))}
      </div>
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center", fontSize: "0.72rem", color: C.textMuted }}>
        <LegendSwatch color={C.success} label="source" />
        <LegendSwatch color={C.danger} label="target" />
        <LegendSwatch color="#334155" label="wall" />
        <LegendSwatch color="#06b6d4" label="frontier (queue)" />
        <LegendSwatch color="#3b82f6" label="current" />
        <LegendSwatch color="rgba(139,92,246,0.6)" label="visited (darker = closer)" />
        <LegendSwatch color="#fbbf24" label="shortest path" />
      </div>
      <Callout accent={A}>{frame.message}</Callout>
    </div>
  );
}

function LegendSwatch({ color, label }: { color: string; label: string }) {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 5 }}>
      <span style={{ width: 14, height: 14, background: color, borderRadius: 3, border: "1px solid rgba(0,0,0,0.1)" }} />
      {label}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  Learn                                                              */
/* ------------------------------------------------------------------ */

function LearnTab() {
  const sections = [
    { title: "Every grid is a graph", body: "An R × C grid has R·C nodes (cells). Each cell has up to 4 edges (up/down/left/right) or 8 (including diagonals). Walls simply remove edges. Once you see this, BFS, DFS, Dijkstra, A* all apply without modification." },
    { title: "BFS gives shortest path by # of edges", body: "When edges are unit-weight (grid moves cost 1), BFS layer-by-layer gives the minimum number of moves. Distances form concentric rings around the source - the famous wavefront." },
    { title: "Multi-source BFS", body: "The rotten-oranges problem: multiple infected cells simultaneously. Push ALL sources into the queue at distance 0 and run ordinary BFS. You get the time each fresh orange rots in one pass." },
    { title: "Graph thinking beyond grids", body: "Word ladder: words are nodes; an edge joins words differing by exactly one letter. BFS gives the shortest transformation. The 'grid' can be any structured state space - chess positions, slide puzzles, even Rubik's cube." },
  ];
  return (
    <div style={{ fontFamily: C.heading, display: "flex", flexDirection: "column", gap: 14 }}>
      <div>
        <SectionEyebrow color={A}>Grid → graph modeling</SectionEyebrow>
        <SectionTitle>The same BFS solves maze, flood fill, and word ladder</SectionTitle>
        <Lede>
          Stop thinking &ldquo;I have a grid, I need a custom algorithm.&rdquo; Start thinking &ldquo;I have a graph; here&apos;s its adjacency rule.&rdquo; The same BFS you learned for graphs solves maze shortest path, flood fill, rotten oranges, knight&apos;s minimum moves, and word ladders - unchanged.
        </Lede>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 10 }}>
        {sections.map((s, i) => (
          <Card key={i}>
            <div style={{ fontSize: "0.78rem", fontWeight: 700, color: A, marginBottom: 4 }}>0{i + 1}</div>
            <div style={{ fontWeight: 700, fontSize: "0.92rem", color: C.text, marginBottom: 4 }}>{s.title}</div>
            <div style={{ fontSize: "0.82rem", color: C.textSecondary, lineHeight: 1.55 }}>{s.body}</div>
          </Card>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Try                                                                */
/* ------------------------------------------------------------------ */

function TryTab() {
  const problems = [
    { q: "On a 5×5 open grid, shortest BFS distance (4-dir) from (0,0) to (4,4)?", a: "8" },
    { q: "Same grid but 8-directional moves?", a: "4" },
    { q: "Rotten-oranges: 3×3 grid, initially only (1,1) rotten, all others fresh. How many minutes until all are rotten (4-dir)?", a: "2" },
    { q: "Word ladder length from 'hit' to 'cog' via dict={hot,dot,dog,lot,log,cog}. (including both ends)", a: "5" },
  ];
  const [guesses, setGuesses] = useState<string[]>(problems.map(() => ""));
  const [shown, setShown] = useState<boolean[]>(problems.map(() => false));

  return (
    <div style={{ fontFamily: C.heading, display: "flex", flexDirection: "column", gap: 12 }}>
      <Callout accent={A}>
        Apply BFS mentally - each node at distance d enqueues distance-(d+1) neighbors.
      </Callout>
      {problems.map((p, i) => {
        const correct = guesses[i].trim() === p.a;
        return (
          <Card key={i}>
            <div style={{ fontSize: "0.88rem", color: C.text, marginBottom: 8 }}>
              <span style={{ fontWeight: 700, color: C.textMuted }}>#{i + 1}. </span>{p.q}
            </div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
              <input
                type="text" value={guesses[i]}
                onChange={(e) => { const v = [...guesses]; v[i] = e.target.value; setGuesses(v); }}
                placeholder="your answer"
                style={{
                  width: 100, padding: "7px 10px", borderRadius: 8,
                  border: `1px solid ${C.border}`,
                  fontFamily: C.mono, fontSize: "0.85rem",
                  outline: "none",
                  background: C.bg, color: C.text,
                }}
              />
              <button
                onClick={() => { const v = [...shown]; v[i] = true; setShown(v); }}
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
              {shown[i] && (
                <span style={{
                  fontSize: "0.82rem", fontWeight: 700,
                  color: correct ? C.successDark : C.dangerDark,
                  padding: "4px 12px", borderRadius: 8,
                  background: correct ? `${C.success}14` : `${C.danger}14`,
                  fontFamily: C.heading,
                }}>
                  {correct ? `Correct - ${p.a}` : `Answer: ${p.a}`}
                </span>
              )}
            </div>
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
    <div style={{ fontFamily: C.heading, display: "flex", flexDirection: "column", gap: 12 }}>
      <Card>
        <SubHeading>Interview reframing</SubHeading>
        <p style={{ fontSize: "0.88rem", color: C.textSecondary, lineHeight: 1.6, margin: 0 }}>
          When the interviewer says &ldquo;in a 2D grid…&rdquo; - your first move is out loud: &ldquo;I&apos;ll model this as a graph where each cell is a node and edges connect orthogonal neighbors that aren&apos;t walls. BFS gives shortest path.&rdquo; This earns credit before you&apos;ve written a line.
        </p>
      </Card>
      <Card>
        <SubHeading>Complexity</SubHeading>
        <p style={{ fontSize: "0.88rem", color: C.textSecondary, lineHeight: 1.6, margin: 0 }}>
          BFS on an R×C grid visits each cell at most once: O(R·C). Each visit checks a constant number of neighbors (4 or 8). Space for the distance map and queue is O(R·C).
        </p>
      </Card>
      <Card>
        <SubHeading>When BFS is wrong</SubHeading>
        <p style={{ fontSize: "0.88rem", color: C.textSecondary, lineHeight: 1.6, margin: 0 }}>
          If edges carry different weights (say, water cells cost 5, land cells cost 1), BFS no longer gives shortest. Switch to Dijkstra. If weights are 0/1, use the 0-1 BFS variant with a deque.
        </p>
      </Card>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Activity                                                           */
/* ------------------------------------------------------------------ */

export default function DSA_L8_GridToGraphActivity() {
  const tabs: EngTabDef[] = [
    { id: "learn", label: "Learn", icon: <BookOpen className="w-4 h-4" />, content: <LearnTab /> },
    { id: "visualize", label: "Visualize", icon: <Play className="w-4 h-4" />, content: <VisualizeTab /> },
    { id: "try", label: "Try It", icon: <Target className="w-4 h-4" />, content: <TryTab /> },
    { id: "insight", label: "Insight", icon: <Lightbulb className="w-4 h-4" />, content: <InsightTab /> },
  ];
  const quiz: EngQuizQuestion[] = [
    {
      question: "For an R × C grid with four-directional moves and no weights, what is the worst-case complexity of BFS shortest path?",
      options: ["O(log(RC))", "O(RC)", "O(RC · log(RC))", "O((RC)²)"],
      correctIndex: 1,
      explanation: "Each cell is enqueued and dequeued at most once; each dequeue examines at most 4 neighbors. Total O(RC).",
    },
    {
      question: "The rotten-oranges problem: how do you model multiple simultaneously-infected cells?",
      options: [
        "Run BFS from each source separately and take the min",
        "Enqueue all rotten cells at distance 0 and run one multi-source BFS",
        "Use Dijkstra with negative weights",
        "It is not solvable with BFS",
      ],
      correctIndex: 1,
      explanation: "Multi-source BFS: all sources share distance 0, BFS expands the combined frontier. Gives the correct minute-count in one pass.",
    },
    {
      question: "In word ladder, what are the nodes and edges of the implicit graph?",
      options: [
        "Nodes are letters; edges connect neighbors in the alphabet",
        "Nodes are words from the dictionary; edges connect words differing by exactly one letter",
        "Nodes are positions in the input string; edges are characters",
        "It isn't a graph problem",
      ],
      correctIndex: 1,
      explanation: "Once reframed this way, BFS from begin-word to end-word gives the shortest transformation.",
    },
    {
      question: "If moves on the grid have different costs (e.g., road=1, swamp=5), which algorithm is correct?",
      options: ["BFS still works", "DFS", "Dijkstra's algorithm", "Any sorting algorithm"],
      correctIndex: 2,
      explanation: "BFS assumes unit-weight edges. With varying positive weights, use Dijkstra. For 0/1 weights, 0-1 BFS.",
    },
  ];
  return (
    <EngineeringLessonShell
      title="Grid-to-Graph Modeling"
      level={8}
      lessonNumber={4}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="Very high - maze, shortest path, flood fill, rotten oranges, word ladder"
      nextLessonHint="DP State Design"
    />
  );
}

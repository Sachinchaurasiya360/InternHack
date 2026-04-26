"use client";

import { useMemo, useState } from "react";
import { BookOpen, Play, Target, Lightbulb } from "lucide-react";
import EngineeringLessonShell, { EngTabDef, EngQuizQuestion } from "@/components/engineering/EngineeringLessonShell";
import {
  AlgoCanvas, PseudocodePanel, VariablesPanel, InputEditor, GraphCanvas, useStepPlayer,
} from "@/components/engineering/algo";
import type { GraphNodeData, GraphEdgeData } from "@/components/engineering/algo";
import {
  C, DSA_ACCENT as A,
  SectionEyebrow, SectionTitle, SubHeading, Lede,
  Card, PillButton, Callout,
} from "@/components/engineering/lessonPrimitives";

/* ------------------------------------------------------------------ */
/*  Mode 1: Bitmask TSP (Held-Karp)                                     */
/*  Mode 2: Space Optimization                                         */
/* ------------------------------------------------------------------ */

type Mode = "tsp" | "space";

/* =============== TSP =============== */

interface TSPFrame {
  line: number;
  vars: Record<string, string | number | undefined>;
  message: string;
  dp: (number | null)[][]; // dp[mask][i] = min cost to end at city i having visited `mask`
  curMask: number;
  curCity: number;
  nextCity: number | null;
  traversedEdge: [number, number] | null;
  flashKey?: string;
}

const PSEUDO_TSP = [
  "function tsp(dist, start):",
  "  dp[1<<start][start] ← 0",
  "  for mask in increasing popcount:",
  "    for i in bits of mask:",
  "      if dp[mask][i] is ∞: continue",
  "      for j in 0..n-1:       // try go to j next",
  "        if j in mask: skip",
  "        newMask ← mask | (1<<j)",
  "        cost ← dp[mask][i] + dist[i][j]",
  "        dp[newMask][j] ← min(dp[newMask][j], cost)",
  "  return min over i of dp[full][i] + dist[i][start]",
];

function buildTSPFrames(dist: number[][], start: number): TSPFrame[] {
  const n = dist.length;
  const FULL = (1 << n) - 1;
  const dp: (number | null)[][] = Array.from({ length: 1 << n }, () => Array(n).fill(null));
  dp[1 << start][start] = 0;

  const f: TSPFrame[] = [];
  f.push({
    line: 0, vars: { n, start },
    message: `Held-Karp on ${n} cities. State = (mask, lastCity).`,
    dp: dp.map((r) => [...r]), curMask: 0, curCity: -1, nextCity: null, traversedEdge: null,
  });
  f.push({
    line: 1, vars: { mask: (1 << start).toString(2).padStart(n, "0"), [`dp[${1 << start}][${start}]`]: 0 }, flashKey: `dp[${1 << start}][${start}]`,
    message: `Base case: at city ${start}, having visited only ${start}, cost = 0.`,
    dp: dp.map((r) => [...r]), curMask: 1 << start, curCity: start, nextCity: null, traversedEdge: null,
  });

  // Enumerate masks in increasing popcount order
  const masksByPop: number[][] = Array.from({ length: n + 1 }, () => []);
  for (let m = 0; m <= FULL; m++) masksByPop[bitCount(m)].push(m);

  for (let pc = 1; pc <= n; pc++) {
    for (const mask of masksByPop[pc]) {
      if (!(mask & (1 << start))) continue;
      for (let i = 0; i < n; i++) {
        if (!(mask & (1 << i))) continue;
        if (dp[mask][i] === null) continue;
        f.push({
          line: 3, vars: { mask: mask.toString(2).padStart(n, "0"), i, [`dp[mask][${i}]`]: dp[mask][i] ?? "-" }, flashKey: "i",
          message: `At mask=${mask.toString(2).padStart(n, "0")}, city=${i}, cost=${dp[mask][i]}.`,
          dp: dp.map((r) => [...r]), curMask: mask, curCity: i, nextCity: null, traversedEdge: null,
        });
        for (let j = 0; j < n; j++) {
          if (mask & (1 << j)) continue;
          const nm = mask | (1 << j);
          const cost = (dp[mask][i] ?? Infinity) + dist[i][j];
          const prev = dp[nm][j];
          f.push({
            line: 6, vars: { i, j, cost, [`dp[newMask][${j}]`]: prev ?? "∞" },
            message: `Try going ${i}→${j}: cost ${dp[mask][i]} + ${dist[i][j]} = ${cost}. Previous dp[${nm.toString(2).padStart(n, "0")}][${j}] = ${prev ?? "∞"}.`,
            dp: dp.map((r) => [...r]), curMask: mask, curCity: i, nextCity: j, traversedEdge: [i, j],
          });
          if (prev === null || cost < prev) {
            dp[nm][j] = cost;
            f.push({
              line: 9, vars: { [`dp[newMask][${j}]`]: cost }, flashKey: `dp[newMask][${j}]`,
              message: `Better! dp[${nm.toString(2).padStart(n, "0")}][${j}] = ${cost}.`,
              dp: dp.map((r) => [...r]), curMask: nm, curCity: j, nextCity: null, traversedEdge: [i, j],
            });
          }
        }
      }
    }
  }

  // Close tour
  let best = Infinity;
  for (let i = 0; i < n; i++) {
    if (dp[FULL][i] === null) continue;
    const total = (dp[FULL][i] ?? Infinity) + dist[i][start];
    if (total < best) best = total;
  }
  f.push({
    line: 10, vars: { answer: best === Infinity ? "unreachable" : best }, flashKey: "answer",
    message: `Close the tour: min over i of dp[FULL][i] + dist[i][${start}] = ${best === Infinity ? "∞" : best}.`,
    dp: dp.map((r) => [...r]), curMask: FULL, curCity: -1, nextCity: null, traversedEdge: null,
  });
  return f;
}

function bitCount(x: number) { let c = 0; while (x) { c += x & 1; x >>>= 1; } return c; }

function parseCities(s: string): { n: number; dist: number[][] } | null {
  // Format: n rows of n numbers (symmetric matrix)
  const rows = s.split("\n").map((r) => r.trim()).filter(Boolean);
  if (!rows.length) return null;
  const dist = rows.map((r) => r.split(/[,\s]+/).map(Number));
  const n = dist.length;
  if (dist.some((row) => row.length !== n || row.some((v) => !Number.isFinite(v)))) return null;
  if (n < 2 || n > 5) return null;
  return { n, dist };
}

function TSPVisualize() {
  const DEFAULT = [
    "0,10,15,20",
    "10,0,35,25",
    "15,35,0,30",
    "20,25,30,0",
  ].join("\n");
  const [inputStr, setInputStr] = useState(DEFAULT);
  const parsed = parseCities(inputStr) ?? parseCities(DEFAULT)!;
  const frames = useMemo(() => buildTSPFrames(parsed.dist, 0), [parsed]);
  const player = useStepPlayer(frames);
  const frame = player.current!;
  const n = parsed.n;

  const nodes: GraphNodeData[] = useMemo(() => {
    const cx = 320, cy = 180, r = 110;
    return Array.from({ length: n }, (_, i) => {
      const a = (2 * Math.PI * i) / n - Math.PI / 2;
      const visited = !!(frame.curMask & (1 << i));
      return {
        id: String(i), x: cx + r * Math.cos(a), y: cy + r * Math.sin(a),
        label: String(i),
        state: i === frame.curCity ? "active" : i === frame.nextCity ? "frontier" : visited ? "visited" : "default",
      };
    });
  }, [n, frame.curMask, frame.curCity, frame.nextCity]);

  const edges: GraphEdgeData[] = useMemo(() => {
    const e: GraphEdgeData[] = [];
    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        const active = frame.traversedEdge &&
          ((frame.traversedEdge[0] === i && frame.traversedEdge[1] === j) ||
           (frame.traversedEdge[0] === j && frame.traversedEdge[1] === i));
        e.push({ from: String(i), to: String(j), weight: parsed.dist[i][j], state: active ? "active" : undefined });
      }
    }
    return e;
  }, [n, frame.traversedEdge, parsed.dist]);

  return (
    <AlgoCanvas
      title="Bitmask DP - Travelling Salesman (Held-Karp)"
      player={player}
      input={
        <InputEditor
          label="Distance matrix (n rows × n numbers, 2 ≤ n ≤ 5)"
          value={inputStr}
          placeholder={DEFAULT}
          helper="Symmetric matrix, zero diagonals. Rows are separated by newlines."
          presets={[
            { label: "4 cities", value: DEFAULT },
            { label: "Tight 3", value: "0,1,2\n1,0,4\n2,4,0" },
            { label: "5 cities", value: "0,2,9,10,7\n2,0,6,4,3\n9,6,0,8,5\n10,4,8,0,6\n7,3,5,6,0" },
          ]}
          onApply={(v) => { if (parseCities(v)) setInputStr(v); }}
        />
      }
      pseudocode={<PseudocodePanel lines={PSEUDO_TSP} activeLine={frame.line} />}
      variables={<VariablesPanel vars={frame.vars} flashKeys={frame.flashKey ? [frame.flashKey] : []} />}
    >
      <TSPViz frame={frame} nodes={nodes} edges={edges} n={n} />
    </AlgoCanvas>
  );
}

function TSPViz({ frame, nodes, edges, n }: { frame: TSPFrame; nodes: GraphNodeData[]; edges: GraphEdgeData[]; n: number }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
      <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)", gap: 16, alignItems: "flex-start" }}>
        <div>
          <div style={{ fontSize: "0.72rem", fontWeight: 700, color: C.textMuted, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 8 }}>
            Cities & Distances
          </div>
          <div style={{ border: `1px solid ${C.border}`, borderRadius: 10, background: "#fff" }}>
            <GraphCanvas nodes={nodes} edges={edges} width={640} height={360} />
          </div>
          <div style={{ marginTop: 10, display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" }}>
            <span style={{ fontSize: "0.72rem", fontWeight: 700, color: C.textMuted, textTransform: "uppercase", letterSpacing: "0.06em" }}>
              Visited mask
            </span>
            <div style={{ display: "flex", gap: 3 }}>
              {Array.from({ length: n }, (_, i) => n - 1 - i).map((bitIdx) => {
                const bit = (frame.curMask >> bitIdx) & 1;
                return (
                  <div key={bitIdx} style={{
                    width: 26, height: 26,
                    borderRadius: 4,
                    border: `1.5px solid ${C.border}`,
                    background: bit ? A : C.bg,
                    color: bit ? "#fff" : C.textMuted,
                    fontFamily: C.mono,
                    fontWeight: 800, fontSize: "0.78rem",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    transition: "all 0.3s ease",
                  }}>
                    {bit}
                  </div>
                );
              })}
            </div>
            <span style={{ fontSize: "0.72rem", color: C.textMuted, fontFamily: C.mono }}>
              (bit i = 1 ⇔ city i visited) = {frame.curMask}
            </span>
          </div>
        </div>

        <div>
          <div style={{ fontSize: "0.72rem", fontWeight: 700, color: C.textMuted, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 8 }}>
            dp[mask][lastCity] - finite entries
          </div>
          <div style={{
            maxHeight: 360, overflowY: "auto",
            border: `1px solid ${C.border}`, borderRadius: 10,
            background: C.bg, padding: 10,
          }}>
            <table style={{ fontSize: "0.72rem", borderCollapse: "collapse", fontFamily: C.mono, width: "100%" }}>
              <thead>
                <tr>
                  <th style={{ padding: "3px 6px", textAlign: "left", color: C.textMuted }}>mask</th>
                  {Array.from({ length: n }, (_, i) => (
                    <th key={i} style={{ padding: "3px 6px", color: C.textMuted }}>city {i}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {frame.dp.map((row, m) => {
                  if (row.every((v) => v === null)) return null;
                  const isCurrent = m === frame.curMask;
                  return (
                    <tr key={m} style={{ background: isCurrent ? `${A}14` : "transparent" }}>
                      <td style={{ padding: "3px 6px", fontWeight: 700, color: isCurrent ? A : C.text }}>
                        {m.toString(2).padStart(n, "0")}
                      </td>
                      {row.map((v, i) => {
                        const isCell = isCurrent && i === frame.curCity;
                        return (
                          <td key={i} style={{
                            padding: "3px 6px", textAlign: "center",
                            color: v === null ? "#cbd5e1" : isCell ? "#fff" : C.text,
                            background: isCell ? A : "transparent",
                            borderRadius: 4,
                            fontWeight: isCell ? 800 : 400,
                            transition: "all 0.3s ease",
                          }}>
                            {v === null ? "∞" : v}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div style={{ fontSize: "0.7rem", color: C.textMuted, marginTop: 6, lineHeight: 1.5 }}>
            Table size: 2ⁿ × n. Time: O(n² · 2ⁿ). Feasible up to n ≈ 20.
          </div>
        </div>
      </div>
      <Callout accent={A}>{frame.message}</Callout>
    </div>
  );
}

/* =============== Space Optimization =============== */

interface SpaceFrame {
  line: number;
  vars: Record<string, string | number | undefined>;
  message: string;
  rows: (number | null)[][]; // full 2D
  highlighted: { i: number; j: number } | null;
  collapsed: boolean;
  prev: number[] | null;
  curr: number[] | null;
  flashKey?: string;
}

const PSEUDO_SPACE = [
  "// Edit Distance - classic 2D DP",
  "function edit(a, b):",
  "  n ← |a|; m ← |b|",
  "  dp[0..n][0..m]",
  "  dp[i][0] ← i; dp[0][j] ← j",
  "  for i in 1..n:",
  "    for j in 1..m:",
  "      if a[i-1]==b[j-1]:",
  "        dp[i][j] ← dp[i-1][j-1]",
  "      else:",
  "        dp[i][j] ← 1 + min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1])",
  "  return dp[n][m]",
];

function buildSpaceFrames(a: string, b: string): SpaceFrame[] {
  const n = a.length;
  const m = b.length;
  const dp: (number | null)[][] = Array.from({ length: n + 1 }, () => Array(m + 1).fill(null));
  for (let i = 0; i <= n; i++) dp[i][0] = i;
  for (let j = 0; j <= m; j++) dp[0][j] = j;

  const f: SpaceFrame[] = [];
  f.push({
    line: 0, vars: { a: `"${a}"`, b: `"${b}"`, n, m },
    message: `Compute edit distance between "${a}" and "${b}".`,
    rows: dp.map((r) => [...r]), highlighted: null, collapsed: false, prev: null, curr: null,
  });
  f.push({
    line: 4, vars: {}, flashKey: "dp",
    message: "Initialize base row & column (dp[i][0]=i, dp[0][j]=j).",
    rows: dp.map((r) => [...r]), highlighted: null, collapsed: false, prev: null, curr: null,
  });

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (a[i - 1] === b[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
        f.push({
          line: 8, vars: { i, j, [`a[${i - 1}]`]: a[i - 1], [`b[${j - 1}]`]: b[j - 1], [`dp[i][j]`]: dp[i][j] ?? "-" }, flashKey: "dp[i][j]",
          message: `'${a[i - 1]}' == '${b[j - 1]}' → inherit diagonal: dp[${i}][${j}] = ${dp[i][j]}.`,
          rows: dp.map((r) => [...r]), highlighted: { i, j }, collapsed: false, prev: null, curr: null,
        });
      } else {
        const v = 1 + Math.min(dp[i - 1][j] ?? Infinity, dp[i][j - 1] ?? Infinity, dp[i - 1][j - 1] ?? Infinity);
        dp[i][j] = v;
        f.push({
          line: 10, vars: { i, j, [`dp[i][j]`]: v }, flashKey: "dp[i][j]",
          message: `'${a[i - 1]}' ≠ '${b[j - 1]}' → 1 + min(up, left, diag) = ${v}.`,
          rows: dp.map((r) => [...r]), highlighted: { i, j }, collapsed: false, prev: null, curr: null,
        });
      }
    }
  }

  f.push({
    line: 11, vars: { answer: dp[n][m] ?? "-" }, flashKey: "answer",
    message: `Edit distance = ${dp[n][m]}. Space used so far: O((n+1)(m+1)).`,
    rows: dp.map((r) => [...r]), highlighted: { i: n, j: m }, collapsed: false, prev: null, curr: null,
  });
  // Collapse animation:
  const prev = dp[n - 1 >= 0 ? n - 1 : 0].map((x) => x ?? 0);
  const curr = dp[n].map((x) => x ?? 0);
  f.push({
    line: 11, vars: {}, flashKey: "dp",
    message: "Observation: dp[i][j] only reads row i-1 and row i. Keep just two rows!",
    rows: dp.map((r) => [...r]), highlighted: null, collapsed: false, prev, curr,
  });
  f.push({
    line: 11, vars: { space: "O(2·m) → O(m)" }, flashKey: "space",
    message: "Collapse the table to two 1-D arrays. Space drops from O(n·m) to O(m).",
    rows: dp.map((r) => [...r]), highlighted: null, collapsed: true, prev, curr,
  });
  return f;
}

function SpaceVisualize() {
  const [inputStr, setInputStr] = useState("kitten | sitting");
  const parts = inputStr.split("|").map((s) => s.trim());
  const a = (parts[0] || "ab").slice(0, 8);
  const b = (parts[1] || "ac").slice(0, 8);
  const frames = useMemo(() => buildSpaceFrames(a, b), [a, b]);
  const player = useStepPlayer(frames);
  const frame = player.current!;

  return (
    <AlgoCanvas
      title="Space Optimization - Edit Distance"
      player={player}
      input={
        <InputEditor
          label="Two strings (separated by |). Max 8 chars each."
          value={inputStr}
          placeholder="e.g. kitten | sitting"
          helper="Watch the 2-D table build, then collapse to two 1-D rows."
          presets={[
            { label: "kitten→sitting", value: "kitten | sitting" },
            { label: "horse→ros", value: "horse | ros" },
            { label: "abc→yabd", value: "abc | yabd" },
            { label: "same", value: "code | code" },
          ]}
          onApply={(v) => setInputStr(v)}
        />
      }
      pseudocode={<PseudocodePanel lines={PSEUDO_SPACE} activeLine={frame.line} />}
      variables={<VariablesPanel vars={frame.vars} flashKeys={frame.flashKey ? [frame.flashKey] : []} />}
    >
      <SpaceViz frame={frame} a={a} b={b} />
    </AlgoCanvas>
  );
}

function SpaceViz({ frame, a, b }: { frame: SpaceFrame; a: string; b: string }) {
  const n = a.length;
  const m = b.length;
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
      {/* 2-D table */}
      <div>
        <div style={{ fontSize: "0.72rem", fontWeight: 700, color: C.textMuted, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 8 }}>
          2-D DP Table ({(n + 1)} × {(m + 1)})
        </div>
        <div style={{
          opacity: frame.collapsed ? 0.3 : 1, transition: "opacity 0.45s ease",
          overflowX: "auto",
        }}>
          <table style={{ borderCollapse: "collapse", fontFamily: C.mono, fontSize: "0.78rem" }}>
            <thead>
              <tr>
                <th style={{ padding: 4 }}></th>
                <th style={{ padding: "4px 8px", color: C.textMuted }}>ε</th>
                {b.split("").map((c, j) => (
                  <th key={j} style={{ padding: "4px 8px", color: C.textMuted }}>{c}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {frame.rows.map((row, i) => (
                <tr key={i}>
                  <th style={{ padding: "4px 8px", color: C.textMuted }}>{i === 0 ? "ε" : a[i - 1]}</th>
                  {row.map((v, j) => {
                    const isHot = frame.highlighted && frame.highlighted.i === i && frame.highlighted.j === j;
                    const isPrevRow = frame.highlighted && frame.highlighted.i - 1 === i && !frame.collapsed;
                    const fromPrev = frame.highlighted && (
                      (frame.highlighted.i - 1 === i && frame.highlighted.j === j) ||
                      (frame.highlighted.i - 1 === i && frame.highlighted.j - 1 === j) ||
                      (frame.highlighted.i === i && frame.highlighted.j - 1 === j)
                    );
                    return (
                      <td key={j} style={{
                        width: 34, height: 34, textAlign: "center",
                        border: `1px solid ${C.border}`,
                        background: isHot ? A : fromPrev ? `${A}24` : isPrevRow ? "rgba(100,116,139,0.08)" : C.bg,
                        color: isHot ? "#fff" : v === null ? "#cbd5e1" : C.text,
                        fontWeight: isHot ? 800 : 500,
                        transition: "all 0.3s ease",
                      }}>
                        {v ?? "-"}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Collapsed view */}
      <div style={{
        opacity: frame.collapsed ? 1 : 0.35,
        transition: "opacity 0.45s ease",
        border: `2px solid ${C.success}`,
        borderRadius: 10,
        padding: 12,
        background: `${C.success}10`,
      }}>
        <div style={{ fontSize: "0.72rem", fontWeight: 700, color: C.successDark, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 10 }}>
          Collapsed to 2 × 1-D Arrays
        </div>
        {frame.prev && frame.curr ? (
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <OneDRow label="prev" vals={frame.prev} />
            <OneDRow label="curr" vals={frame.curr} />
            <div style={{ fontSize: "0.78rem", color: C.text, marginTop: 6 }}>
              dp[i][j] only needs prev[j], prev[j-1], curr[j-1]. After each row swap prev ← curr.
              Space drops from O((n+1)(m+1)) to O(m+1).
            </div>
          </div>
        ) : (
          <div style={{ fontSize: "0.78rem", color: C.textMuted, fontStyle: "italic" }}>
            Waiting for the 2-D table to finish…
          </div>
        )}
      </div>
      <Callout accent={A}>{frame.message}</Callout>
    </div>
  );
}

function OneDRow({ label, vals }: { label: string; vals: number[] }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <span style={{
        width: 50, fontSize: "0.75rem", fontWeight: 700,
        color: label === "prev" ? C.textMuted : C.successDark,
        fontFamily: C.mono,
      }}>{label}:</span>
      <div style={{ display: "flex", gap: 3 }}>
        {vals.map((v, i) => (
          <div key={i} style={{
            width: 32, height: 32,
            display: "flex", alignItems: "center", justifyContent: "center",
            border: `1.5px solid ${C.border}`,
            borderRadius: 4,
            background: label === "curr" ? `${C.success}14` : C.bg,
            color: C.text,
            fontFamily: C.mono,
            fontSize: "0.78rem", fontWeight: 700,
          }}>
            {v}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Top-level Visualize Tab                                            */
/* ------------------------------------------------------------------ */

function VisualizeTab() {
  const [mode, setMode] = useState<Mode>("tsp");
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        <PillButton color={A} active={mode === "tsp"} onClick={() => setMode("tsp")}>
          <span style={{ fontSize: "0.78rem" }}>Bitmask DP (TSP)</span>
        </PillButton>
        <PillButton color={A} active={mode === "space"} onClick={() => setMode("space")}>
          <span style={{ fontSize: "0.78rem" }}>Space Optimization</span>
        </PillButton>
      </div>
      {mode === "tsp" ? <TSPVisualize /> : <SpaceVisualize />}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Learn                                                              */
/* ------------------------------------------------------------------ */

function LearnTab() {
  const sections = [
    { title: "State = identity of a subproblem", body: "A DP state is just enough information to decide what to do next. For TSP, 'I'm at city i and have visited set S' - (i, S) - is sufficient. Rest of the past doesn't matter. Pick the smallest tuple that makes the recurrence work." },
    { title: "Bitmask = tiny sets", body: "When the 'set' in your state has ≤ ~20 elements, represent it as an integer whose i-th bit is 1 if element i is in the set. Union = OR, test = AND, add = OR. Tables become 2ⁿ × n arrays. Canonical for TSP, subset-sum-with-tracking, assignment problems." },
    { title: "Space optimization rule of thumb", body: "If dp[i] depends only on dp[i-1] (and maybe dp[i-2]), you only need O(1) or O(2) rows. Replace dp[n][m] with prev[] and curr[] arrays. Space O(n·m) → O(m). This is free - no algorithmic change, just rewriting the loop." },
    { title: "Top-down vs bottom-up", body: "Top-down (memoization) mirrors the natural recurrence: recurse + memo. Bottom-up fills the table in dependency order. Bottom-up makes space optimization obvious - you can physically see which rows are needed." },
  ];
  return (
    <div style={{ fontFamily: C.heading, display: "flex", flexDirection: "column", gap: 14 }}>
      <div>
        <SectionEyebrow color={A}>DP state design</SectionEyebrow>
        <SectionTitle>The right state writes the recurrence for you</SectionTitle>
        <Lede>
          DP problems aren&apos;t solved by finding a clever formula - they&apos;re solved by <em>choosing the state</em> well. A well-chosen state halves your code. A poorly-chosen state makes the problem feel impossible. Bitmasks and space optimization are two tools for getting the state right.
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
    { q: "Bitmask TSP on 4 cities has how many states (mask × city)?", a: "64" },
    { q: "Edit distance dp table size for words of length n=5 and m=7?", a: "48" },
    { q: "After space optimization, how many int cells does edit distance need (in terms of m)?", a: "2(m+1)" },
    { q: "mask = 0b1011. Which cities are visited (sorted bits set)?", a: "0,1,3" },
  ];
  const [guesses, setGuesses] = useState<string[]>(problems.map(() => ""));
  const [shown, setShown] = useState<boolean[]>(problems.map(() => false));
  const normalize = (s: string) => s.replace(/\s+/g, "").toLowerCase();

  return (
    <div style={{ fontFamily: C.heading, display: "flex", flexDirection: "column", gap: 12 }}>
      <Callout accent={A}>
        Work out the state space sizes on paper first - the &ldquo;state&rdquo; is the key object in DP.
      </Callout>
      {problems.map((p, i) => {
        const correct = normalize(guesses[i]) === normalize(p.a);
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
                  width: 130, padding: "7px 10px", borderRadius: 8,
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
        <SubHeading>Bitmask DP feasibility boundary</SubHeading>
        <p style={{ fontSize: "0.88rem", color: C.textSecondary, lineHeight: 1.6, margin: 0 }}>
          Bitmask on n items → 2ⁿ masks × n transitions = O(n²·2ⁿ) time, O(n·2ⁿ) space. For n=20: ~4·10⁸ ops - feasible. For n=25: 10¹⁰ - too slow. When n creeps above 20, look for problem-specific structure (meet-in-the-middle, SOS DP).
        </p>
      </Card>
      <Card>
        <SubHeading>Space opt gotchas</SubHeading>
        <ul style={{ fontSize: "0.86rem", color: C.textSecondary, lineHeight: 1.7, paddingLeft: 20, margin: 0 }}>
          <li>0/1 knapsack: reverse the inner loop (j from W down to w) to reuse dp[j-w] from the previous row.</li>
          <li>Unbounded knapsack: forward inner loop - you WANT to reuse the current row.</li>
          <li>If you need to reconstruct the path, keep the full table. Don&apos;t collapse.</li>
          <li>LIS with patience sort collapses O(n²) DP into O(n log n) - state redesign, not space trick.</li>
        </ul>
      </Card>
      <Card>
        <SubHeading>How to pick a state</SubHeading>
        <p style={{ fontSize: "0.88rem", color: C.textSecondary, lineHeight: 1.6, margin: 0 }}>
          Ask: &ldquo;If I&apos;m about to make the next decision, what minimum info from the past do I need?&rdquo; That info IS the state. For TSP: where am I + what have I visited. For edit distance: how much of string a + how much of string b I&apos;ve processed. The recurrence then writes itself.
        </p>
      </Card>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Activity                                                           */
/* ------------------------------------------------------------------ */

export default function DSA_L8_DPStateDesignActivity() {
  const tabs: EngTabDef[] = [
    { id: "learn", label: "Learn", icon: <BookOpen className="w-4 h-4" />, content: <LearnTab /> },
    { id: "visualize", label: "Visualize", icon: <Play className="w-4 h-4" />, content: <VisualizeTab /> },
    { id: "try", label: "Try It", icon: <Target className="w-4 h-4" />, content: <TryTab /> },
    { id: "insight", label: "Insight", icon: <Lightbulb className="w-4 h-4" />, content: <InsightTab /> },
  ];
  const quiz: EngQuizQuestion[] = [
    {
      question: "Time complexity of Held-Karp bitmask DP for TSP on n cities?",
      options: ["O(n!)", "O(n² · 2ⁿ)", "O(n³)", "O(n · 2ⁿ)"],
      correctIndex: 1,
      explanation: "2ⁿ masks × n last-cities = n · 2ⁿ states; each considers n transitions. Total O(n² · 2ⁿ). Brute force would be O(n!), much worse.",
    },
    {
      question: "In the edit-distance 2-D DP, which cells does dp[i][j] directly depend on?",
      options: [
        "dp[i+1][j+1] only",
        "dp[i-1][j], dp[i][j-1], dp[i-1][j-1]",
        "All cells of row 0",
        "dp[0][0] only",
      ],
      correctIndex: 1,
      explanation: "Delete = up, insert = left, replace/keep = diagonal. All three are needed.",
    },
    {
      question: "After space optimization, edit distance for strings of length n and m uses how much memory?",
      options: ["O(n · m)", "O(n + m)", "O(min(n, m))", "Both B and C are acceptable"],
      correctIndex: 3,
      explanation: "You keep two rows of length m+1: O(m). You can always iterate over the shorter string's length → O(min(n, m)). Both answers express the same idea.",
    },
    {
      question: "Which of the following problems is NOT naturally solved by bitmask DP?",
      options: [
        "Travelling salesman with 15 cities",
        "Assignment problem with 12 jobs",
        "Shortest path in a 10⁶-node graph",
        "Minimum cost to cover all subsets of 18 items",
      ],
      correctIndex: 2,
      explanation: "A 10⁶-node graph has no small 'set in the state' to bitmask. Use Dijkstra/BFS. Bitmask DP is for small-n exponential enumeration.",
    },
  ];
  return (
    <EngineeringLessonShell
      title="DP State Design"
      level={8}
      lessonNumber={5}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="Very high - separates mid-level from senior candidates"
      nextLessonHint="Comprehensive Pattern Recognition"
    />
  );
}

"use client";

import { useMemo, useState } from "react";
import { BookOpen, Play, Target, Lightbulb } from "lucide-react";
import EngineeringLessonShell, { EngTabDef, EngQuizQuestion } from "@/components/engineering/EngineeringLessonShell";
import {
  AlgoCanvas, PseudocodePanel, VariablesPanel, InputEditor, MemoryCells, useStepPlayer,
} from "@/components/engineering/algo";
import type { CellState } from "@/components/engineering/algo";
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
/*  Z-algorithm                                                          */
/* ------------------------------------------------------------------ */

interface ZFrame {
  line: number;
  vars: Record<string, string | number | undefined>;
  message: string;
  s: string;
  z: number[];
  l: number;
  r: number;
  i: number;
  states: CellState[];
  pointers: Record<string, number>;
  flashKey?: string;
}

const Z_PSEUDO = [
  "function Z(s):",
  "  n ← len(s); z[0] ← 0",
  "  l ← r ← 0   # current Z-box [l, r)",
  "  for i in 1..n-1:",
  "    if i < r:",
  "      z[i] ← min(r - i, z[i - l])    # reuse precomputed",
  "    while i + z[i] < n and s[z[i]] == s[i + z[i]]:",
  "      z[i] += 1                        # extend brute-force",
  "    if i + z[i] > r:",
  "      l ← i; r ← i + z[i]              # update Z-box",
  "  return z",
];

function buildZFrames(s: string): ZFrame[] {
  const n = s.length;
  const f: ZFrame[] = [];
  if (n === 0) {
    f.push({
      line: 0, vars: {}, message: "Empty string.",
      s, z: [], l: 0, r: 0, i: -1,
      states: [], pointers: {},
    });
    return f;
  }
  const z = new Array(n).fill(0);
  let l = 0, r = 0;
  const stateOf = (i: number, l: number, r: number, matches: number): CellState[] => {
    return s.split("").map((_, idx) => {
      if (idx === i) return "active";
      if (idx >= i && idx < i + matches) return "match";
      if (idx >= l && idx < r) return "window";
      return "default";
    });
  };
  f.push({
    line: 0, vars: { n, s: `"${s}"` }, message: `Compute Z-array for "${s}". z[i] = length of longest substring starting at i that matches a prefix of s.`,
    s, z: [...z], l, r, i: 0,
    states: stateOf(-1, 0, 0, 0), pointers: {},
  });
  for (let i = 1; i < n; i++) {
    f.push({
      line: 3, vars: { i, l, r, "z[i]": z[i] }, message: `i = ${i}. Current Z-box = [${l}, ${r}).`,
      s, z: [...z], l, r, i,
      states: stateOf(i, l, r, 0), pointers: { i, l, r: Math.max(0, r - 1) },
    });
    if (i < r) {
      const reuse = Math.min(r - i, z[i - l]);
      z[i] = reuse;
      f.push({
        line: 5, vars: { i, "i-l": i - l, "z[i-l]": z[i - l], "r-i": r - i, "z[i] new": reuse }, message: `i < r. Reuse z[i-l] = z[${i - l}] = ${z[i - l]}, capped by r-i = ${r - i} → z[${i}] = ${reuse}.`,
        s, z: [...z], l, r, i,
        states: stateOf(i, l, r, z[i]), pointers: { i, l, r: r - 1 }, flashKey: "z[i] new",
      });
    }
    let extended = 0;
    while (i + z[i] < n && s[z[i]] === s[i + z[i]]) {
      z[i]++;
      extended++;
    }
    if (extended > 0) {
      f.push({
        line: 6, vars: { i, "z[i]": z[i], extended }, message: `Brute-force extension: matched ${extended} more char${extended === 1 ? "" : "s"}. z[${i}] = ${z[i]}.`,
        s, z: [...z], l, r, i,
        states: stateOf(i, l, r, z[i]), pointers: { i }, flashKey: "z[i]",
      });
    } else {
      f.push({
        line: 6, vars: { i, "z[i]": z[i] }, message: `No further match. z[${i}] stays at ${z[i]}.`,
        s, z: [...z], l, r, i,
        states: stateOf(i, l, r, z[i]), pointers: { i },
      });
    }
    if (i + z[i] > r) {
      l = i; r = i + z[i];
      f.push({
        line: 8, vars: { l, r }, message: `New Z-box: [${l}, ${r}). Future indices in this range can reuse this work.`,
        s, z: [...z], l, r, i,
        states: stateOf(i, l, r, z[i]), pointers: { l, r: r - 1 }, flashKey: "l",
      });
    }
  }
  f.push({
    line: 0, vars: { z: `[${z.join(",")}]` }, message: `Done. Z-array = [${z.join(", ")}]. Total work O(n) — each character is visited at most twice.`,
    s, z: [...z], l, r, i: n - 1,
    states: s.split("").map(() => "done" as CellState), pointers: {},
  });
  return f;
}

/* ------------------------------------------------------------------ */
/*  Manacher's algorithm — longest palindromic substring                */
/* ------------------------------------------------------------------ */

interface ManaFrame {
  line: number;
  vars: Record<string, string | number | undefined>;
  message: string;
  T: string;          // transformed string with sentinels
  p: number[];        // palindrome radii
  C: number;          // center of rightmost palindrome
  R: number;          // right boundary of rightmost palindrome
  i: number;
  states: CellState[];
  pointers: Record<string, number>;
  flashKey?: string;
  bestCenter?: number;
  bestRadius?: number;
}

const MANA_PSEUDO = [
  "function manacher(s):",
  "  T ← '#' + interleave(s, '#')",
  "  n ← len(T); p ← array of zeros",
  "  C ← 0; R ← 0",
  "  for i in 1..n-2:",
  "    mirror ← 2C - i",
  "    if i < R: p[i] ← min(R - i, p[mirror])    # reflect",
  "    while T[i + p[i] + 1] == T[i - p[i] - 1]:",
  "      p[i] += 1                                  # expand",
  "    if i + p[i] > R: C ← i; R ← i + p[i]        # update",
  "  return max(p) → longest palindrome",
];

function transform(s: string): string {
  return "^#" + s.split("").join("#") + "#$";
}

function buildManacherFrames(s: string): ManaFrame[] {
  const T = transform(s);
  const n = T.length;
  const p = new Array(n).fill(0);
  let C = 0, R = 0;
  const f: ManaFrame[] = [];
  const stateOf = (i: number, R: number, hl?: { swap?: number; mirror?: number }): CellState[] => {
    return T.split("").map((_, idx) => {
      if (hl?.swap === idx) return "swap";
      if (hl?.mirror === idx) return "compare";
      if (idx === i) return "active";
      if (idx >= i - p[i] && idx <= i + p[i]) return "match";
      if (idx <= R) return "window";
      return "default";
    });
  };
  f.push({
    line: 0, vars: { s: `"${s}"`, T: `"${T}"` }, message: `Manacher's on "${s}". Transform: insert '#' between every char (turns even-length palindromes into odd).`,
    T, p: [...p], C, R, i: 0,
    states: T.split("").map(() => "default" as CellState), pointers: {},
  });
  for (let i = 1; i < n - 1; i++) {
    const mirror = 2 * C - i;
    f.push({
      line: 5, vars: { i, mirror, C, R }, message: `i = ${i}. Mirror across C=${C}: 2C-i = ${mirror}.`,
      T, p: [...p], C, R, i,
      states: stateOf(i, R, { mirror }), pointers: { i, mirror, C, R },
    });
    if (i < R) {
      const reuse = Math.min(R - i, p[mirror]);
      p[i] = reuse;
      f.push({
        line: 6, vars: { i, "p[mirror]": p[mirror], "R-i": R - i, "p[i] new": p[i] }, message: `i < R → reuse p[mirror=${mirror}] = ${p[mirror]}, capped by R-i = ${R - i} → p[${i}] = ${p[i]}.`,
        T, p: [...p], C, R, i,
        states: stateOf(i, R, { mirror }), pointers: { i, mirror }, flashKey: "p[i] new",
      });
    }
    let expanded = 0;
    while (T[i + p[i] + 1] === T[i - p[i] - 1]) {
      p[i]++;
      expanded++;
    }
    if (expanded > 0) {
      f.push({
        line: 7, vars: { i, expanded, "p[i]": p[i] }, message: `Expand ${expanded} step${expanded === 1 ? "" : "s"}. p[${i}] = ${p[i]}.`,
        T, p: [...p], C, R, i,
        states: stateOf(i, R), pointers: { i }, flashKey: "p[i]",
      });
    }
    if (i + p[i] > R) {
      C = i; R = i + p[i];
      f.push({
        line: 9, vars: { C, R }, message: `Palindrome at i=${i} extends past R → update center C=${C}, R=${R}.`,
        T, p: [...p], C, R, i,
        states: stateOf(i, R), pointers: { i, C, R }, flashKey: "C",
      });
    }
  }
  // find longest
  let bestI = 0, bestR = 0;
  for (let i = 0; i < n; i++) if (p[i] > bestR) { bestR = p[i]; bestI = i; }
  // Recover original-string indices
  const startInT = bestI - bestR;
  const startInS = Math.floor(startInT / 2);
  const lenInS = bestR;
  const palindrome = s.substr(startInS, lenInS);
  f.push({
    line: 0, vars: { longestPalindrome: `"${palindrome}"`, length: lenInS }, message: `Done. Longest palindromic substring = "${palindrome}" (length ${lenInS}). Total work O(n) by amortized expansion.`,
    T, p: [...p], C, R, i: n - 1,
    states: T.split("").map((_, idx) => idx >= bestI - bestR && idx <= bestI + bestR ? "match" : "visited"), pointers: { center: bestI },
    bestCenter: bestI, bestRadius: bestR,
  });
  return f;
}

/* ------------------------------------------------------------------ */
/*  Visualize                                                           */
/* ------------------------------------------------------------------ */

type Mode = "z" | "manacher";

function VisualizeTab() {
  const [mode, setMode] = useState<Mode>("z");
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <div style={{ display: "flex", gap: 6, flexWrap: "wrap", alignItems: "center" }}>
        <PillButton color={A} active={mode === "z"} onClick={() => setMode("z")}>
          Z-algorithm
        </PillButton>
        <PillButton color={A} active={mode === "manacher"} onClick={() => setMode("manacher")}>
          Manacher (longest palindrome)
        </PillButton>
      </div>
      {mode === "z" ? <ZViz /> : <ManaViz />}
    </div>
  );
}

function ZViz() {
  const [s, setS] = useState("aabcaabxaaaz");
  const sCapped = s.slice(0, 18);
  const frames = useMemo(() => buildZFrames(sCapped), [sCapped]);
  const player = useStepPlayer(frames);
  const frame = player.current!;
  return (
    <AlgoCanvas
      title={`Z-array of "${sCapped}"`}
      player={player}
      input={
        <InputEditor
          label="Input string"
          value={s}
          helper="Up to 18 chars. Watch the Z-box [l, r) get reused — each char visited at most twice → O(n)."
          presets={[
            { label: "aabcaabxaaaz", value: "aabcaabxaaaz" },
            { label: "aaaaa (max reuse)", value: "aaaaa" },
            { label: "abacaba (palindrome)", value: "abacaba" },
            { label: "abcdef (no match)", value: "abcdef" },
          ]}
          onApply={setS}
        />
      }
      pseudocode={<PseudocodePanel lines={Z_PSEUDO} activeLine={frame.line} />}
      variables={<VariablesPanel vars={frame.vars} flashKeys={frame.flashKey ? [frame.flashKey] : []} />}
      legend={
        <div style={{ display: "flex", gap: 14, fontSize: "0.78rem" }}>
          <span><b style={{ color: "#3b82f6" }}>blue</b> = current i</span>
          <span><b style={{ color: "#10b981" }}>green</b> = matched (z[i] chars)</span>
          <span><b style={{ color: "#8b5cf6" }}>purple</b> = current Z-box [l, r)</span>
        </div>
      }
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        <MemoryCells values={frame.s.split("")} states={frame.states} pointers={frame.pointers} cellWidth={36} />
        <Card>
          <div style={{ fontSize: "0.7rem", fontWeight: 700, color: C.textMuted, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 6, fontFamily: C.heading }}>
            Z-array
          </div>
          <div style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
            {frame.z.map((v, i) => (
              <div key={i} style={{
                width: 36, height: 36, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                borderRadius: 4, border: i === frame.i ? "2px solid #3b82f6" : `1px solid ${C.border}`,
                background: i === frame.i ? "rgba(59,130,246,0.12)" : C.bg,
                fontFamily: C.mono,
              }}>
                <span style={{ fontSize: "0.62rem", color: C.textMuted, lineHeight: 1 }}>{i}</span>
                <span style={{ fontWeight: 700, fontSize: "0.85rem", color: C.text }}>{v}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </AlgoCanvas>
  );
}

function ManaViz() {
  const [s, setS] = useState("babad");
  const sCapped = s.slice(0, 14);
  const frames = useMemo(() => buildManacherFrames(sCapped), [sCapped]);
  const player = useStepPlayer(frames);
  const frame = player.current!;
  return (
    <AlgoCanvas
      title={`Manacher on "${sCapped}"`}
      player={player}
      input={
        <InputEditor
          label="Input string"
          value={s}
          helper="Up to 14 chars. The transform inserts '#' between every char so even/odd palindromes are handled uniformly."
          presets={[
            { label: "babad", value: "babad" },
            { label: "cbbd (even)", value: "cbbd" },
            { label: "abacaba", value: "abacaba" },
            { label: "racecar", value: "racecar" },
            { label: "abcde (no palindrome)", value: "abcde" },
          ]}
          onApply={setS}
        />
      }
      pseudocode={<PseudocodePanel lines={MANA_PSEUDO} activeLine={frame.line} />}
      variables={<VariablesPanel vars={frame.vars} flashKeys={frame.flashKey ? [frame.flashKey] : []} />}
      legend={
        <div style={{ display: "flex", gap: 14, fontSize: "0.78rem" }}>
          <span><b style={{ color: "#3b82f6" }}>blue</b> = current i</span>
          <span><b style={{ color: "#10b981" }}>green</b> = palindrome around i</span>
          <span><b style={{ color: "#f59e0b" }}>amber</b> = mirror index</span>
        </div>
      }
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        <MemoryCells values={frame.T.split("")} states={frame.states} pointers={frame.pointers} cellWidth={26} />
        <Card>
          <div style={{ fontSize: "0.7rem", fontWeight: 700, color: C.textMuted, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 6, fontFamily: C.heading }}>
            Palindrome radii p[i] (in transformed string T)
          </div>
          <div style={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
            {frame.p.map((v, i) => (
              <div key={i} style={{
                width: 26, height: 30, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                borderRadius: 3,
                border: i === frame.i ? "2px solid #3b82f6" : i === frame.bestCenter ? `2px solid ${C.success}` : `1px solid ${C.border}`,
                background: i === frame.bestCenter ? "rgba(16,185,129,0.12)" : i === frame.i ? "rgba(59,130,246,0.12)" : C.bg,
                fontFamily: C.mono,
              }}>
                <span style={{ fontSize: "0.55rem", color: C.textMuted, lineHeight: 1 }}>{i}</span>
                <span style={{ fontWeight: 700, fontSize: "0.7rem", color: C.text }}>{v}</span>
              </div>
            ))}
          </div>
          {frame.bestCenter !== undefined && frame.bestRadius !== undefined && (
            <div style={{ marginTop: 8, paddingTop: 8, borderTop: `1px dashed ${C.border}`, fontSize: "0.78rem", color: C.successDark, fontWeight: 700, fontFamily: C.heading }}>
              Longest palindrome radius: {frame.bestRadius} (centered at T[{frame.bestCenter}]).
            </div>
          )}
        </Card>
      </div>
    </AlgoCanvas>
  );
}

/* ------------------------------------------------------------------ */
/*  Learn / Try / Insight                                               */
/* ------------------------------------------------------------------ */

function LearnTab() {
  const cards = [
    { t: "Z-array — what it is", b: "z[i] = the length of the longest substring of s starting at index i that matches a prefix of s. By convention z[0] = 0 (or n, depending on style). The Z-array compresses 'how far does s look like its own prefix from this point' for every i." },
    { t: "Z trick — pattern matching in O(n+m)", b: "To find all occurrences of pattern P in text T, build the Z-array of S = P + '$' + T (where $ is a separator not appearing anywhere). Any index i with z[i] = |P| marks an occurrence of P starting at i − |P| − 1 in T. Same complexity as KMP, often easier to code." },
    { t: "Why Z is O(n)", b: "The Z-box [l, r) tracks the rightmost-extending substring known to match a prefix. When i lies inside it, we initialize z[i] from z[i-l] for FREE (capped by r-i). Brute-force expansion only happens past r — and the expansion advances r each time, so the TOTAL extension work is bounded by n." },
    { t: "Manacher — what it is", b: "Computes the longest palindromic substring of s in O(n) (vs the obvious O(n³) or O(n²)). The trick: insert '#' between every character (so 'aba' becomes '#a#b#a#'), turning EVERY palindrome into an odd-length palindrome about a single center. Then exploit reflection-around-known-palindromes the same way Z exploits the Z-box." },
    { t: "Manacher's symmetry trick", b: "Maintain (C, R) = the rightmost palindrome's center and right boundary. For a new index i < R, its mirror across C is 2C − i. We can SEED p[i] = min(R − i, p[mirror]) before any character comparisons. The exact-O(n) bound comes from the same potential-function argument as Z." },
    { t: "Z vs KMP — when each wins", b: "Both are O(n + m) for pattern matching. Z is conceptually simpler (no failure function — just a length array). KMP wins when you only have one pass over the text and want minimal extra memory. For multi-pattern matching, neither — use Aho-Corasick. For palindromes, ONLY Manacher gives O(n) (KMP and Z don't directly solve palindrome problems)." },
  ];
  return (
    <div style={{ fontFamily: C.heading, display: "flex", flexDirection: "column", gap: 14 }}>
      <div>
        <SectionEyebrow color={A}>Linear-time string magic</SectionEyebrow>
        <SectionTitle>Mental model: reflection beats re-comparison</SectionTitle>
        <Lede>
          Both Z and Manacher exploit the same idea: when you&apos;ve already matched/extended something, you don&apos;t need to redo work for indices whose answer is determined by REFLECTION around what you already know. The bookkeeping (Z-box for Z, center+radius for Manacher) lets you reuse prior matches and extend only past the known boundary.
        </Lede>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 10 }}>
        {cards.map((s, i) => (
          <Card key={i}>
            <div style={{ fontSize: "0.72rem", fontWeight: 700, color: A, marginBottom: 6, fontFamily: C.mono, letterSpacing: "0.08em" }}>0{i + 1}</div>
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
    { q: "Z-array of 'aabcaab' = ?", a: "[0, 1, 0, 0, 3, 1, 0]" },
    { q: "Longest palindrome of 'babad' (one valid answer)?", a: "'bab' or 'aba'" },
    { q: "Longest palindrome of 'cbbd'?", a: "'bb'" },
    { q: "To search pattern P in text T using Z, you build Z of?", a: "P + '$' + T" },
  ];
  const [g, setG] = useState<(string | null)[]>(probs.map(() => null));
  const [s, setS] = useState<boolean[]>(probs.map(() => false));
  return (
    <div style={{ fontFamily: C.heading, display: "flex", flexDirection: "column", gap: 12 }}>
      <Callout accent={A}>Verify each in the visualizer.</Callout>
      {probs.map((p, i) => (
        <Card key={i}>
          <div style={{ fontSize: "0.9rem", marginBottom: 8, color: C.text }}><b style={{ color: C.textMuted }}>#{i + 1}</b> {p.q}</div>
          <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
            <input value={g[i] ?? ""} onChange={(e) => { const v = [...g]; v[i] = e.target.value; setG(v); }}
              placeholder="answer"
              style={{
                padding: "6px 10px", border: `1px solid ${C.border}`, borderRadius: 6,
                fontFamily: C.mono, fontSize: "0.85rem", minWidth: 240,
                background: C.bg, color: C.text, outline: "none",
              }} />
            <button
              onClick={() => { const v = [...s]; v[i] = true; setS(v); }}
              style={{
                padding: "6px 14px", borderRadius: 8,
                fontSize: "0.78rem", fontWeight: 700,
                border: `1px solid ${C.border}`,
                background: C.bg, color: C.textSecondary,
                cursor: "pointer", fontFamily: C.heading,
              }}
            >Reveal</button>
            {s[i] && (
              <span style={{
                fontSize: "0.82rem", fontWeight: 700, padding: "3px 10px", borderRadius: 6,
                color: C.successDark, background: `${C.success}14`,
                fontFamily: C.heading,
              }}>
                {p.a}
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
      <Card padded={false} style={{ overflow: "hidden" }}>
        <div style={{ padding: "16px 20px 8px" }}>
          <SubHeading>Z vs KMP — head to head</SubHeading>
        </div>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.82rem" }}>
          <thead>
            <tr style={{ background: C.bgSoft }}>
              <th style={{ textAlign: "left", padding: "6px 10px", fontWeight: 700, color: C.textMuted, fontSize: "0.72rem", letterSpacing: "0.05em", textTransform: "uppercase", borderBottom: `1px solid ${C.border}` }}>Property</th>
              <th style={{ textAlign: "left", padding: "6px 10px", fontWeight: 700, color: C.textMuted, fontSize: "0.72rem", letterSpacing: "0.05em", textTransform: "uppercase", borderBottom: `1px solid ${C.border}` }}>Z-algorithm</th>
              <th style={{ textAlign: "left", padding: "6px 10px", fontWeight: 700, color: C.textMuted, fontSize: "0.72rem", letterSpacing: "0.05em", textTransform: "uppercase", borderBottom: `1px solid ${C.border}` }}>KMP</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Time", "O(n + m)", "O(n + m)"],
              ["Space", "O(n + m)", "O(m) — failure func only"],
              ["Conceptual model", "Length array (z[i])", "Failure function (fall-back jumps)"],
              ["Streaming-friendly", "No (needs whole string)", "Yes (state machine over text)"],
              ["Code length", "~10 lines", "~15 lines"],
              ["Generalizes to", "Palindromes (with Manacher), suffix array prep", "Aho-Corasick (multi-pattern)"],
            ].map((r, i) => (
              <tr key={i} style={{ borderTop: `1px solid ${C.border}` }}>
                <td style={{ padding: "5px 10px", fontWeight: 600, color: C.text }}>{r[0]}</td>
                <td style={{ padding: "5px 10px", color: C.textSecondary }}>{r[1]}</td>
                <td style={{ padding: "5px 10px", color: C.textSecondary }}>{r[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
      <Card>
        <SubHeading>String-algorithm zoo (when to reach for what)</SubHeading>
        <ul style={{ fontSize: "0.86rem", color: C.textSecondary, lineHeight: 1.7, paddingLeft: 20, margin: 0 }}>
          <li><strong>Single-pattern match</strong>: KMP, Z, or Boyer-Moore. Production = Boyer-Moore variants (used by `grep`, `git diff`).</li>
          <li><strong>Multi-pattern match</strong> (find ANY of k patterns): Aho-Corasick — O(n + Σ|patterns|).</li>
          <li><strong>Approximate / fuzzy match</strong>: hashing (Rabin-Karp) with rolling-hash error budget; Levenshtein automaton.</li>
          <li><strong>Longest palindrome</strong>: Manacher — O(n). Eertree (palindromic tree) is the multi-purpose alternative.</li>
          <li><strong>Substring queries en masse</strong>: suffix array + LCP (Kasai O(n)), or suffix automaton.</li>
          <li><strong>Periodicity / borders</strong>: Z-array exposes them directly — z[i] = i means s has period i.</li>
        </ul>
      </Card>
      <Card>
        <SubHeading>Stdlib reality</SubHeading>
        <p style={{ fontSize: "0.88rem", color: C.textSecondary, lineHeight: 1.6, margin: 0 }}>
          No mainstream stdlib ships Z or Manacher — they&apos;re competitive-programming staples you carry as templates. <strong>Python <code style={{ fontFamily: C.mono }}>re</code></strong> uses NFA/DFA matching. <strong>Java <code style={{ fontFamily: C.mono }}>Pattern</code></strong> uses Thompson NFA + bytecode interpreter. <strong>C++ <code style={{ fontFamily: C.mono }}>std::regex</code></strong> uses backtracking (be careful: catastrophic backtracking is real). Boyer-Moore variants are inside <code style={{ fontFamily: C.mono }}>grep</code>/<code style={{ fontFamily: C.mono }}>ripgrep</code>. For LeetCode-style problems (LC5 Longest Palindromic Substring, LC28 strStr, LC214 Shortest Palindrome, LC1392 Longest Happy Prefix), Z and Manacher are the right tools.
        </p>
      </Card>
      <Card>
        <SubHeading>Why insert &apos;#&apos; for Manacher?</SubHeading>
        <p style={{ fontSize: "0.88rem", color: C.textSecondary, lineHeight: 1.6, margin: 0 }}>
          A naive &quot;expand around center&quot; algorithm has to handle two cases — odd-length palindromes (center on a char) and even-length (center between chars). Inserting &apos;#&apos; between every character (and sentinels at both ends) makes EVERY palindrome odd-length about some position in the new string. p[i] in the new string maps back to the original via integer division: original radius = ⌊p[i]/2⌋, original start = ⌊(i − p[i])/2⌋. The transform doubles the string length but cleans up the case analysis to one loop.
        </p>
      </Card>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Activity                                                            */
/* ------------------------------------------------------------------ */

export default function DSA_L7_ZManacherActivity() {
  const tabs: EngTabDef[] = [
    { id: "learn", label: "Learn", icon: <BookOpen className="w-4 h-4" />, content: <LearnTab /> },
    { id: "visualize", label: "Visualize", icon: <Play className="w-4 h-4" />, content: <VisualizeTab /> },
    { id: "try", label: "Try It", icon: <Target className="w-4 h-4" />, content: <TryTab /> },
    { id: "insight", label: "Insight", icon: <Lightbulb className="w-4 h-4" />, content: <InsightTab /> },
  ];
  const quiz: EngQuizQuestion[] = [
    {
      question: "What does z[i] represent in the Z-algorithm?",
      options: [
        "The number of times s[i] appears in s",
        "The length of the longest substring of s starting at i that equals a prefix of s",
        "The position of the next occurrence of s[i]",
        "The depth of i in a suffix tree",
      ],
      correctIndex: 1,
      explanation: "z[i] = max k such that s[0..k-1] == s[i..i+k-1]. The Z-array compresses 'prefix match' info for every starting index.",
    },
    {
      question: "To find all occurrences of P in T using Z, what string do you build the Z-array of?",
      options: ["P only", "T only", "P + T (concatenated)", "P + '$' + T (with separator $ not in alphabet)"],
      correctIndex: 3,
      explanation: "The separator $ ensures z[i] never exceeds |P|; any index in the T part with z[i] = |P| marks an occurrence at i − |P| − 1.",
    },
    {
      question: "Why is the Z-algorithm O(n)?",
      options: [
        "It uses dynamic programming",
        "Inside the Z-box, work is reused for free; brute-force extension only happens past R, and each extension advances R, so total extension work ≤ n",
        "Because palindromes",
        "Hash-based amortization",
      ],
      correctIndex: 1,
      explanation: "Same potential argument as KMP. Inner-loop work is bounded by total advancement of the right boundary, which is at most n total.",
    },
    {
      question: "Why does Manacher transform 'abc' into '#a#b#c#'?",
      options: [
        "To avoid hashing collisions",
        "Because palindromes only exist at odd lengths",
        "To handle even and odd palindromes uniformly — every palindrome in the transformed string is odd-length about a single center",
        "To reduce memory",
      ],
      correctIndex: 2,
      explanation: "Without '#', 'abba' would have its center between two chars (no single integer index works as the pivot). The '#' insertion makes EVERY palindrome odd, so a single 'expand around index i' loop handles both cases.",
    },
    {
      question: "Time complexity of Manacher's algorithm?",
      options: ["O(n²)", "O(n log n)", "O(n)", "O(n √n)"],
      correctIndex: 2,
      explanation: "Linear, by the same potential argument as Z: extension work past the rightmost palindrome boundary R can total at most n across the whole run.",
    },
  ];
  return (
    <EngineeringLessonShell
      title="Z-algorithm + Manacher's"
      level={7}
      lessonNumber={8}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="High - LC5 longest palindrome, LC28 strStr, LC214 shortest palindrome, LC1392 longest happy prefix"
      nextLessonHint="Advanced Data Structures"
    />
  );
}

"use client";

import { useMemo, useState } from "react";
import { BookOpen, Play, Target, Lightbulb } from "lucide-react";
import EngineeringLessonShell, { EngTabDef, EngQuizQuestion } from "@/components/engineering/EngineeringLessonShell";
import {
  AlgoCanvas, PseudocodePanel, VariablesPanel, InputEditor, useStepPlayer, MemoryCells,
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
  Callout,
} from "@/components/engineering/lessonPrimitives";

/* ------------------------------------------------------------------ */
/*  Frame types                                                        */
/* ------------------------------------------------------------------ */

interface Frame {
  line: number;
  vars: Record<string, string | number | undefined>;
  message: string;
  phase: "lps" | "search";
  // lps phase
  lps: number[];
  lpsI?: number;
  lpsLen?: number;
  // search phase
  patternShift: number;        // where pattern sits vs text (index in text)
  iInText?: number;            // current text index
  jInPattern?: number;         // current pattern index
  matched?: boolean;
  mismatch?: boolean;
  found?: number[];            // starting indices where pattern matched
  comparisons: number;
  bruteComparisons: number;
  highlightKey?: string;
}

/* ------------------------------------------------------------------ */
/*  Pseudocode                                                         */
/* ------------------------------------------------------------------ */

const PSEUDO = [
  "# Phase 1 - build LPS (longest proper prefix = suffix)",
  "function buildLPS(p):",
  "  lps[0] ← 0; len ← 0; i ← 1",
  "  while i < |p|:",
  "    if p[i] = p[len]: len++; lps[i] = len; i++",
  "    else if len > 0: len ← lps[len-1]",
  "    else: lps[i] = 0; i++",
  "",
  "# Phase 2 - search",
  "function KMP(t, p, lps):",
  "  i ← 0; j ← 0",
  "  while i < |t|:",
  "    if t[i] = p[j]: i++; j++",
  "    if j = |p|: report match at i-j; j ← lps[j-1]",
  "    else if i < |t| and t[i] ≠ p[j]:",
  "      if j > 0: j ← lps[j-1]   # skip using LPS",
  "      else: i++",
];

/* ------------------------------------------------------------------ */
/*  Frame builder                                                      */
/* ------------------------------------------------------------------ */

function buildFrames(text: string, pattern: string): Frame[] {
  const frames: Frame[] = [];
  const m = pattern.length;
  const n = text.length;

  // Phase 1: build LPS
  const lps = new Array(m).fill(0);
  frames.push({
    line: 2, vars: { pattern, m, len: 0, i: 1 },
    message: `Build LPS for pattern "${pattern}". lps[0] = 0 always.`,
    phase: "lps", lps: lps.slice(),
    lpsI: 0, lpsLen: 0,
    patternShift: 0, comparisons: 0, bruteComparisons: 0,
  });
  let len = 0, i = 1;
  while (i < m) {
    frames.push({
      line: 4, vars: { i, len, "p[i]": pattern[i], "p[len]": pattern[len] },
      message: `Compare p[${i}]='${pattern[i]}' with p[${len}]='${pattern[len]}'.`,
      phase: "lps", lps: lps.slice(), lpsI: i, lpsLen: len,
      patternShift: 0, comparisons: 0, bruteComparisons: 0,
    });
    if (pattern[i] === pattern[len]) {
      len++;
      lps[i] = len;
      frames.push({
        line: 4, vars: { i, len, [`lps[${i}]`]: len },
        message: `Match! Extend: lps[${i}] = ${len}.`,
        phase: "lps", lps: lps.slice(), lpsI: i, lpsLen: len - 1,
        patternShift: 0, comparisons: 0, bruteComparisons: 0,
        highlightKey: `lps[${i}]`,
      });
      i++;
    } else if (len > 0) {
      const newLen = lps[len - 1];
      frames.push({
        line: 5, vars: { i, len, newLen },
        message: `Mismatch - fall back: len ← lps[${len - 1}] = ${newLen}.`,
        phase: "lps", lps: lps.slice(), lpsI: i, lpsLen: len,
        patternShift: 0, comparisons: 0, bruteComparisons: 0,
      });
      len = newLen;
    } else {
      lps[i] = 0;
      frames.push({
        line: 6, vars: { i, len, [`lps[${i}]`]: 0 },
        message: `No match and len=0 → lps[${i}] = 0.`,
        phase: "lps", lps: lps.slice(), lpsI: i, lpsLen: 0,
        patternShift: 0, comparisons: 0, bruteComparisons: 0,
      });
      i++;
    }
  }

  // Phase 2: search
  const found: number[] = [];
  let ti = 0, pj = 0, cmp = 0;
  let brute = 0; // approximation: brute force O(n*m) naive count for comparison
  for (let s = 0; s <= n - m; s++) {
    for (let k = 0; k < m; k++) {
      brute++;
      if (text[s + k] !== pattern[k]) break;
    }
  }

  frames.push({
    line: 11, vars: { i: 0, j: 0 },
    message: `Phase 2 - search. i=0, j=0. Pattern sits at text[0..${m - 1}].`,
    phase: "search", lps: lps.slice(),
    patternShift: 0, iInText: 0, jInPattern: 0,
    found: [], comparisons: 0, bruteComparisons: brute,
  });
  while (ti < n) {
    cmp++;
    const isMatch = text[ti] === pattern[pj];
    frames.push({
      line: 12, vars: { i: ti, j: pj, "t[i]": text[ti], "p[j]": pattern[pj], comparisons: cmp },
      message: isMatch ? `t[${ti}]='${text[ti]}' = p[${pj}]='${pattern[pj]}' - advance both.`
                       : `t[${ti}]='${text[ti]}' ≠ p[${pj}]='${pattern[pj]}' - mismatch.`,
      phase: "search", lps: lps.slice(),
      patternShift: ti - pj, iInText: ti, jInPattern: pj,
      matched: isMatch, mismatch: !isMatch,
      found: [...found], comparisons: cmp, bruteComparisons: brute,
      highlightKey: "comparisons",
    });
    if (isMatch) {
      ti++; pj++;
      if (pj === m) {
        found.push(ti - pj);
        const newJ = lps[pj - 1];
        frames.push({
          line: 13, vars: { match: ti - pj, comparisons: cmp },
          message: `Full match at index ${ti - pj}! Slide using lps[${pj - 1}] = ${newJ}.`,
          phase: "search", lps: lps.slice(),
          patternShift: ti - newJ, iInText: ti, jInPattern: newJ,
          matched: true,
          found: [...found], comparisons: cmp, bruteComparisons: brute,
        });
        pj = newJ;
      }
    } else {
      if (pj > 0) {
        const newJ = lps[pj - 1];
        frames.push({
          line: 15, vars: { i: ti, "lps[j-1]": newJ, "new j": newJ, comparisons: cmp },
          message: `Skip using LPS: j ← lps[${pj - 1}] = ${newJ}. Pattern jumps to align.`,
          phase: "search", lps: lps.slice(),
          patternShift: ti - newJ, iInText: ti, jInPattern: newJ,
          found: [...found], comparisons: cmp, bruteComparisons: brute,
        });
        pj = newJ;
      } else {
        ti++;
        frames.push({
          line: 16, vars: { i: ti, j: 0, comparisons: cmp },
          message: `j = 0 - slide pattern by 1 (advance i).`,
          phase: "search", lps: lps.slice(),
          patternShift: ti, iInText: ti, jInPattern: 0,
          found: [...found], comparisons: cmp, bruteComparisons: brute,
        });
      }
    }
  }
  frames.push({
    line: 11, vars: { matches: found.length, comparisons: cmp, brute },
    message: `Done. Matches at: [${found.join(", ") || "-"}]. KMP used ${cmp} comparisons vs brute force's ~${brute}.`,
    phase: "search", lps: lps.slice(),
    patternShift: Math.max(0, n - m), iInText: n, jInPattern: pj,
    found: [...found], comparisons: cmp, bruteComparisons: brute,
  });
  return frames;
}

/* ------------------------------------------------------------------ */
/*  Visualization                                                      */
/* ------------------------------------------------------------------ */

const labelStyle: React.CSSProperties = {
  fontSize: "0.7rem",
  fontWeight: 700,
  color: C.textMuted,
  textTransform: "uppercase",
  letterSpacing: "0.05em",
  textAlign: "center",
  marginBottom: 2,
  fontFamily: C.heading,
};

function Visualization({ frame, text, pattern }: { frame: Frame; text: string; pattern: string }) {
  const n = text.length;
  const m = pattern.length;
  const shift = frame.patternShift;

  // text states
  const textStates: (CellState | undefined)[] = new Array(n).fill(undefined);
  // pattern states
  const patStates: (CellState | undefined)[] = new Array(m).fill(undefined);

  if (frame.phase === "search") {
    for (let k = 0; k < (frame.jInPattern ?? 0); k++) {
      if (shift + k < n) textStates[shift + k] = "match";
      patStates[k] = "match";
    }
    if (frame.iInText !== undefined && frame.iInText < n && frame.jInPattern !== undefined && frame.jInPattern < m) {
      textStates[frame.iInText] = frame.mismatch ? "mismatch" : "active";
      patStates[frame.jInPattern] = frame.mismatch ? "mismatch" : "active";
    }
    for (const f of frame.found ?? []) {
      for (let k = 0; k < m; k++) if (f + k < n) textStates[f + k] = "done";
    }
  }

  const lpsStates: (CellState | undefined)[] = new Array(m).fill(undefined);
  if (frame.phase === "lps" && frame.lpsI !== undefined && frame.lpsI < m) lpsStates[frame.lpsI] = "active";

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 14, alignItems: "center" }}>
      {/* Text */}
      <div>
        <div style={labelStyle}>Text</div>
        <MemoryCells
          values={text.split("").map((c) => (c === " " ? "·" : c))}
          states={textStates}
          pointers={frame.iInText !== undefined && frame.iInText < n ? { i: frame.iInText } : {}}
          cellWidth={36}
        />
      </div>

      {/* Pattern (aligned at shift) */}
      <div style={{ width: "100%", overflowX: "auto" }}>
        <div style={{
          display: "flex",
          marginLeft: `max(0px, ${shift * 36}px)`,
          transition: "margin-left 0.35s ease",
          paddingLeft: 8,
        }}>
          <div>
            <div style={labelStyle}>Pattern</div>
            <MemoryCells
              values={pattern.split("")}
              states={patStates}
              pointers={frame.jInPattern !== undefined && frame.jInPattern < m ? { j: frame.jInPattern } : {}}
              cellWidth={36}
            />
          </div>
        </div>
      </div>

      {/* LPS array */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
        <div style={{ ...labelStyle, marginBottom: 0 }}>LPS array</div>
        <MemoryCells
          values={frame.lps}
          states={lpsStates}
          pointers={frame.phase === "lps" && frame.lpsI !== undefined ? { i: frame.lpsI } : {}}
          cellWidth={36}
          labels={pattern.split("")}
        />
      </div>

      {/* Comparison counter */}
      <div style={{ display: "flex", gap: 10, alignItems: "center", fontSize: "0.82rem" }}>
        <span style={{
          fontWeight: 700, padding: "4px 12px", borderRadius: 6,
          background: `${A}10`, color: A,
          fontFamily: C.heading,
        }}>
          KMP comparisons: {frame.comparisons}
        </span>
        <span style={{
          fontWeight: 700, padding: "4px 12px", borderRadius: 6,
          background: `${C.danger}1A`, color: C.dangerDark,
          fontFamily: C.heading,
        }}>
          brute force (worst): {frame.bruteComparisons}
        </span>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Visualize                                                          */
/* ------------------------------------------------------------------ */

function parsePair(s: string): { text: string; pattern: string } | null {
  const parts = s.split(/\s*\|\s*/);
  if (parts.length !== 2) return null;
  const [text, pattern] = parts;
  if (!text || !pattern || pattern.length > text.length || pattern.length > 10 || text.length > 24) return null;
  return { text, pattern };
}

function VisualizeTab() {
  const [src, setSrc] = useState("ABABCABAB | ABAB");
  const parsed = parsePair(src);
  const { text, pattern } = parsed ?? { text: "ABABCABAB", pattern: "ABAB" };
  const frames = useMemo(() => buildFrames(text, pattern), [text, pattern]);
  const player = useStepPlayer(frames);
  const frame = player.current!;

  return (
    <AlgoCanvas
      title="KMP Pattern Matching - LPS skip table"
      player={player}
      input={
        <InputEditor
          label="Text | Pattern  (pipe-separated)"
          value={src}
          placeholder="ABABCABAB | ABAB"
          helper="Text ≤ 24 chars, pattern ≤ 10 chars."
          presets={[
            { label: "Classic", value: "ABABCABAB | ABAB" },
            { label: "Repeats", value: "AAAAABAAA | AAAB" },
            { label: "No match", value: "ABCDEFGH | XYZ" },
            { label: "Many hits", value: "ABABABAB | ABAB" },
          ]}
          onApply={(v) => { if (parsePair(v)) setSrc(v); }}
        />
      }
      pseudocode={<PseudocodePanel lines={PSEUDO} activeLine={frame.line} />}
      variables={<VariablesPanel vars={frame.vars} flashKeys={frame.highlightKey ? [frame.highlightKey] : []} />}
      legend={
        <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
          <span><b style={{ color: "#10b981" }}>match</b> - characters aligned and equal</span>
          <span><b style={{ color: "#ef4444" }}>mismatch</b> - pattern must shift</span>
          <span><b style={{ color: "#3b82f6" }}>active</b> - current position</span>
        </div>
      }
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        <Visualization frame={frame} text={text} pattern={pattern} />
        <Callout accent={A}>{frame.message}</Callout>
      </div>
    </AlgoCanvas>
  );
}

/* ------------------------------------------------------------------ */
/*  Learn / Try / Insight                                              */
/* ------------------------------------------------------------------ */

function LearnTab() {
  const sections = [
    { title: "The naive way", body: "Brute-force pattern matching slides the pattern one position at a time, re-checking every character. Worst case O(n·m) - painful on repetitive text like 'AAAAAB'." },
    { title: "Key insight", body: "When a mismatch happens after partial matches, the pattern's own structure tells us how far we can safely skip without losing a potential match - no need to re-examine text characters we already matched." },
    { title: "LPS table", body: "For each prefix p[0..i] of the pattern, lps[i] = length of the longest proper prefix of p[0..i] that is also its suffix. 'ABAB' → lps = [0,0,1,2]." },
    { title: "Matching phase", body: "On a mismatch at p[j], fall back to j = lps[j-1]; keep i (text index) - that moves the pattern forward while reusing matched characters. Each text index is compared at most twice." },
    { title: "Complexity", body: "Preprocessing: O(m). Matching: O(n). Total: O(n + m), deterministic, no hashing." },
    { title: "Used in", body: "grep fallback, DNA sequence search, plagiarism detection, and Interview-favorite LPS computation questions." },
  ];
  return (
    <div style={{ fontFamily: C.heading, display: "flex", flexDirection: "column", gap: 14 }}>
      <div>
        <SectionEyebrow color={A}>Linear-time matching</SectionEyebrow>
        <SectionTitle>Pattern remembers its own self-similarity</SectionTitle>
        <Lede>
          The pattern is smart enough to remember its own self-similarity. When text and pattern disagree,
          we already know how the pattern overlaps with itself, so we can skip ahead - no backtracking
          in the text.
        </Lede>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 10 }}>
        {sections.map((s, i) => (
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

function TryTab() {
  const problems = [
    { q: "Compute LPS for pattern 'ABABC'.", answer: "0,0,1,2,0" },
    { q: "Compute LPS for pattern 'AAAA'.", answer: "0,1,2,3" },
    { q: "Using KMP, matching 'ABABABCABAB' vs 'ABABC' - at what text index does the first match start?", answer: "2" },
  ];
  const [guesses, setGuesses] = useState<string[]>(problems.map(() => ""));
  const [shown, setShown] = useState<boolean[]>(problems.map(() => false));
  const norm = (s: string) => s.replace(/\s+/g, "");
  return (
    <div style={{ fontFamily: C.heading, display: "flex", flexDirection: "column", gap: 12 }}>
      <Callout accent={A}>
        Compute by hand. For LPS answers, use comma-separated integers (e.g. &quot;0,0,1,2,0&quot;).
      </Callout>
      {problems.map((p, i) => {
        const correct = norm(guesses[i]) === norm(p.answer);
        return (
          <Card key={i}>
            <div style={{ fontSize: "0.92rem", color: C.text, marginBottom: 10, lineHeight: 1.5 }}>{p.q}</div>
            <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
              <input
                value={guesses[i]}
                onChange={(e) => { const g = [...guesses]; g[i] = e.target.value; setGuesses(g); }}
                placeholder="your answer"
                style={{
                  padding: "7px 10px", borderRadius: 8,
                  border: `1px solid ${C.border}`,
                  fontFamily: C.mono, width: 200,
                  fontSize: "0.85rem", outline: "none",
                  background: C.bg, color: C.text,
                }}
              />
              <button
                onClick={() => { const s = [...shown]; s[i] = true; setShown(s); }}
                style={{
                  padding: "6px 14px", borderRadius: 8,
                  fontSize: "0.78rem", fontWeight: 700,
                  border: `1px solid ${C.border}`,
                  background: C.bg, color: C.textSecondary,
                  cursor: "pointer", fontFamily: C.heading,
                }}
              >Reveal</button>
              {shown[i] && (
                <span style={{
                  fontSize: "0.82rem", fontWeight: 700,
                  color: correct ? C.successDark : C.dangerDark,
                  padding: "4px 12px", borderRadius: 8,
                  background: correct ? `${C.success}14` : `${C.danger}14`,
                  fontFamily: C.heading,
                }}>
                  {correct ? `✓ Correct - ${p.answer}` : `Answer: ${p.answer}`}
                </span>
              )}
            </div>
          </Card>
        );
      })}
    </div>
  );
}

function InsightTab() {
  return (
    <div style={{ fontFamily: C.heading, display: "flex", flexDirection: "column", gap: 12 }}>
      <Card>
        <SubHeading>Why i never goes backward</SubHeading>
        <p style={{ fontSize: "0.9rem", color: C.textSecondary, lineHeight: 1.6, margin: 0 }}>
          The crucial property: the text pointer <code style={{ fontFamily: C.mono }}>i</code> is monotone non-decreasing. Either we advance it on a match, or j falls back while i stays. Since j can only decrease when i doesn&apos;t move, and j can only increase when i does, the total number of comparisons is O(n + m).
        </p>
      </Card>
      <Card>
        <SubHeading>Interview traps</SubHeading>
        <ul style={{ fontSize: "0.9rem", color: C.textSecondary, lineHeight: 1.7, paddingLeft: 22, margin: 0 }}>
          <li>lps[0] is always 0 - &quot;proper&quot; prefix excludes the full string.</li>
          <li>When pattern has no repetitive structure (e.g. &quot;ABCDE&quot;), lps is all zeros and KMP degrades to one-step slide, but still O(n + m).</li>
          <li>After reporting a match, shift the pattern by lps[m-1], not by 1 - this lets overlapping matches be found correctly.</li>
        </ul>
      </Card>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Activity                                                            */
/* ------------------------------------------------------------------ */

export default function DSA_L7_KMPActivity() {
  const tabs: EngTabDef[] = [
    { id: "learn", label: "Learn", icon: <BookOpen className="w-4 h-4" />, content: <LearnTab /> },
    { id: "visualize", label: "Visualize", icon: <Play className="w-4 h-4" />, content: <VisualizeTab /> },
    { id: "try", label: "Try It", icon: <Target className="w-4 h-4" />, content: <TryTab /> },
    { id: "insight", label: "Insight", icon: <Lightbulb className="w-4 h-4" />, content: <InsightTab /> },
  ];
  const quiz: EngQuizQuestion[] = [
    {
      question: "Worst-case time complexity of KMP (preprocessing + searching) is:",
      options: ["O(n·m)", "O(n + m)", "O(n log m)", "O(m²)"],
      correctIndex: 1,
      explanation: "KMP runs in O(m) preprocessing to build LPS and O(n) to search - total linear in the sum.",
    },
    {
      question: "LPS for 'ABABCABAB' is:",
      options: ["[0,0,1,2,0,1,2,3,4]", "[0,0,1,2,3,1,2,3,4]", "[0,1,2,3,4,1,2,3,4]", "[0,0,1,1,0,1,2,3,4]"],
      correctIndex: 0,
      explanation: "Trace through: A→0, AB→0, ABA→1, ABAB→2, ABABC→0, ABABCA→1, ABABCAB→2, ABABCABA→3, ABABCABAB→4.",
    },
    {
      question: "On a mismatch at pattern index j (j>0), KMP sets:",
      options: ["j ← 0", "j ← j-1", "j ← lps[j-1]", "j ← lps[j]"],
      correctIndex: 2,
      explanation: "We reuse the longest proper prefix-suffix of the matched segment - that's lps[j-1].",
    },
    {
      question: "Why is KMP strictly better than naive matching?",
      options: [
        "It uses hashing to skip comparisons",
        "It never re-compares text characters the algorithm already validated",
        "It uses less memory",
        "It randomly shuffles comparisons for speed",
      ],
      correctIndex: 1,
      explanation: "The text pointer i never moves backward - matched prefixes give free information about how to realign the pattern.",
    },
  ];
  return (
    <EngineeringLessonShell
      title="KMP Pattern Matching"
      level={7}
      lessonNumber={2}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="Medium - string algorithms, substring search"
      nextLessonHint="Rabin-Karp - Hashing for Pattern Match"
    />
  );
}

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
  SectionEyebrow,
  SectionTitle,
  SubHeading,
  THEME,
} from "../../../../../components/dsa-theory/primitives";
import { PracticeTab } from "../PracticeTab";

const PRACTICE_TOPIC_SLUG: string | null = "string-matching";

/* ------------------------------------------------------------------ */
/*  Local cell state types / renderer                                   */
/* ------------------------------------------------------------------ */

type CellState = "active" | "match" | "mismatch" | "done" | undefined;

function MemoryCells({
  values,
  states,
  pointers,
  cellWidth = 36,
  labels,
}: {
  values: (string | number)[];
  states?: CellState[];
  pointers?: Record<string, number>;
  cellWidth?: number;
  labels?: string[];
}) {
  return (
    <div className="relative">
      {pointers && Object.entries(pointers).map(([name, idx]) => (
        <div
          key={name}
          className="absolute -top-5 text-[9px] font-mono font-bold text-stone-500 text-center"
          style={{ left: idx * (cellWidth + 2) + cellWidth / 2 - 8 }}
        >
          {name}
        </div>
      ))}
      <div className="flex gap-0.5">
        {values.map((v, i) => {
          const st = states?.[i];
          let bg = THEME.bg;
          let border = THEME.border;
          let textColor = THEME.text;
          if (st === "active") { bg = "rgba(59,130,246,0.12)"; border = "#3b82f6"; textColor = "#1d4ed8"; }
          else if (st === "match") { bg = `${THEME.success}14`; border = THEME.success; textColor = THEME.successDark; }
          else if (st === "mismatch") { bg = `${THEME.danger}14`; border = THEME.danger; textColor = THEME.dangerDark; }
          else if (st === "done") { bg = THEME.successSoft; border = THEME.successDark; textColor = THEME.successDark; }
          return (
            <div key={i} className="flex flex-col items-center">
              <div
                className="flex items-center justify-center font-mono font-bold text-xs rounded transition-all"
                style={{ width: cellWidth, height: cellWidth, border: `1.5px solid ${border}`, background: bg, color: textColor }}
              >
                {v}
              </div>
              {labels && (
                <div className="text-[9px] font-mono text-stone-400 mt-0.5">{labels[i]}</div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Frame types                                                         */
/* ------------------------------------------------------------------ */

interface Frame {
  line: number;
  vars: Record<string, string | number | undefined>;
  message: string;
  phase: "lps" | "search";
  lps: number[];
  lpsI?: number;
  lpsLen?: number;
  patternShift: number;
  iInText?: number;
  jInPattern?: number;
  matched?: boolean;
  mismatch?: boolean;
  found?: number[];
  comparisons: number;
  bruteComparisons: number;
  highlightKey?: string;
}

/* ------------------------------------------------------------------ */
/*  Pseudocode                                                          */
/* ------------------------------------------------------------------ */

const PSEUDO = [
  "# Phase 1 - build LPS (longest proper prefix = suffix)",
  "function buildLPS(p):",
  "  lps[0] <- 0; len <- 0; i <- 1",
  "  while i < |p|:",
  "    if p[i] = p[len]: len++; lps[i] = len; i++",
  "    else if len > 0: len <- lps[len-1]",
  "    else: lps[i] = 0; i++",
  "",
  "# Phase 2 - search",
  "function KMP(t, p, lps):",
  "  i <- 0; j <- 0",
  "  while i < |t|:",
  "    if t[i] = p[j]: i++; j++",
  "    if j = |p|: report match at i-j; j <- lps[j-1]",
  "    else if i < |t| and t[i] != p[j]:",
  "      if j > 0: j <- lps[j-1]   # skip using LPS",
  "      else: i++",
];

/* ------------------------------------------------------------------ */
/*  Frame builder                                                       */
/* ------------------------------------------------------------------ */

function buildFrames(text: string, pattern: string): Frame[] {
  const frames: Frame[] = [];
  const m = pattern.length;
  const n = text.length;

  const lps = new Array(m).fill(0);
  frames.push({ line: 2, vars: { pattern, m, len: 0, i: 1 }, message: `Build LPS for pattern "${pattern}". lps[0] = 0 always.`, phase: "lps", lps: lps.slice(), lpsI: 0, lpsLen: 0, patternShift: 0, comparisons: 0, bruteComparisons: 0 });

  let len = 0, i = 1;
  while (i < m) {
    frames.push({ line: 4, vars: { i, len, "p[i]": pattern[i], "p[len]": pattern[len] }, message: `Compare p[${i}]='${pattern[i]}' with p[${len}]='${pattern[len]}'.`, phase: "lps", lps: lps.slice(), lpsI: i, lpsLen: len, patternShift: 0, comparisons: 0, bruteComparisons: 0 });
    if (pattern[i] === pattern[len]) {
      len++; lps[i] = len;
      frames.push({ line: 4, vars: { i, len, [`lps[${i}]`]: len }, message: `Match! Extend: lps[${i}] = ${len}.`, phase: "lps", lps: lps.slice(), lpsI: i, lpsLen: len - 1, patternShift: 0, comparisons: 0, bruteComparisons: 0, highlightKey: `lps[${i}]` });
      i++;
    } else if (len > 0) {
      const newLen = lps[len - 1];
      frames.push({ line: 5, vars: { i, len, newLen }, message: `Mismatch - fall back: len <- lps[${len - 1}] = ${newLen}.`, phase: "lps", lps: lps.slice(), lpsI: i, lpsLen: len, patternShift: 0, comparisons: 0, bruteComparisons: 0 });
      len = newLen;
    } else {
      lps[i] = 0;
      frames.push({ line: 6, vars: { i, len, [`lps[${i}]`]: 0 }, message: `No match and len=0 -> lps[${i}] = 0.`, phase: "lps", lps: lps.slice(), lpsI: i, lpsLen: 0, patternShift: 0, comparisons: 0, bruteComparisons: 0 });
      i++;
    }
  }

  const found: number[] = [];
  let ti = 0, pj = 0, cmp = 0;
  let brute = 0;
  for (let s = 0; s <= n - m; s++) {
    for (let k = 0; k < m; k++) { brute++; if (text[s + k] !== pattern[k]) break; }
  }

  frames.push({ line: 11, vars: { i: 0, j: 0 }, message: `Phase 2 - search. i=0, j=0.`, phase: "search", lps: lps.slice(), patternShift: 0, iInText: 0, jInPattern: 0, found: [], comparisons: 0, bruteComparisons: brute });

  while (ti < n) {
    cmp++;
    const isMatch = text[ti] === pattern[pj];
    frames.push({ line: 12, vars: { i: ti, j: pj, "t[i]": text[ti], "p[j]": pattern[pj], comparisons: cmp }, message: isMatch ? `t[${ti}]='${text[ti]}' = p[${pj}]='${pattern[pj]}' - advance both.` : `t[${ti}]='${text[ti]}' != p[${pj}]='${pattern[pj]}' - mismatch.`, phase: "search", lps: lps.slice(), patternShift: ti - pj, iInText: ti, jInPattern: pj, matched: isMatch, mismatch: !isMatch, found: [...found], comparisons: cmp, bruteComparisons: brute, highlightKey: "comparisons" });
    if (isMatch) {
      ti++; pj++;
      if (pj === m) {
        found.push(ti - pj);
        const newJ = lps[pj - 1];
        frames.push({ line: 13, vars: { match: ti - pj, comparisons: cmp }, message: `Full match at index ${ti - pj}! Slide using lps[${pj - 1}] = ${newJ}.`, phase: "search", lps: lps.slice(), patternShift: ti - newJ, iInText: ti, jInPattern: newJ, matched: true, found: [...found], comparisons: cmp, bruteComparisons: brute });
        pj = newJ;
      }
    } else {
      if (pj > 0) {
        const newJ = lps[pj - 1];
        frames.push({ line: 15, vars: { i: ti, "lps[j-1]": newJ, "new j": newJ, comparisons: cmp }, message: `Skip using LPS: j <- lps[${pj - 1}] = ${newJ}. Pattern jumps to align.`, phase: "search", lps: lps.slice(), patternShift: ti - newJ, iInText: ti, jInPattern: newJ, found: [...found], comparisons: cmp, bruteComparisons: brute });
        pj = newJ;
      } else {
        ti++;
        frames.push({ line: 16, vars: { i: ti, j: 0, comparisons: cmp }, message: `j = 0 - slide pattern by 1 (advance i).`, phase: "search", lps: lps.slice(), patternShift: ti, iInText: ti, jInPattern: 0, found: [...found], comparisons: cmp, bruteComparisons: brute });
      }
    }
  }

  frames.push({ line: 11, vars: { matches: found.length, comparisons: cmp, brute }, message: `Done. Matches at: [${found.join(", ") || "-"}]. KMP used ${cmp} comparisons vs brute force's ~${brute}.`, phase: "search", lps: lps.slice(), patternShift: Math.max(0, n - m), iInText: n, jInPattern: pj, found: [...found], comparisons: cmp, bruteComparisons: brute });
  return frames;
}

/* ------------------------------------------------------------------ */
/*  Visualization                                                       */
/* ------------------------------------------------------------------ */

function KMPVisualization({ frame, text, pattern }: { frame: Frame; text: string; pattern: string }) {
  const n = text.length;
  const m = pattern.length;
  const shift = frame.patternShift;

  const textStates: CellState[] = new Array(n).fill(undefined);
  const patStates: CellState[] = new Array(m).fill(undefined);

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

  const lpsStates: CellState[] = new Array(m).fill(undefined);
  if (frame.phase === "lps" && frame.lpsI !== undefined && frame.lpsI < m) lpsStates[frame.lpsI] = "active";

  return (
    <div className="flex flex-col gap-3.5 items-center">
      <div className="pt-6">
        <div className="text-[10px] font-bold uppercase tracking-widest text-stone-500 text-center mb-1">Text</div>
        <MemoryCells
          values={text.split("").map((c) => (c === " " ? "." : c))}
          states={textStates}
          pointers={frame.iInText !== undefined && frame.iInText < n ? { i: frame.iInText } : {}}
          cellWidth={36}
        />
      </div>

      <div className="w-full overflow-x-auto pt-6">
        <div
          className="inline-flex"
          style={{
            marginLeft: `max(0px, ${shift * 38}px)`,
            transition: "margin-left 0.35s ease",
          }}
        >
          <div>
            <div className="text-[10px] font-bold uppercase tracking-widest text-stone-500 text-center mb-1">Pattern</div>
            <MemoryCells
              values={pattern.split("")}
              states={patStates}
              pointers={frame.jInPattern !== undefined && frame.jInPattern < m ? { j: frame.jInPattern } : {}}
              cellWidth={36}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-1 pt-2">
        <div className="text-[10px] font-bold uppercase tracking-widest text-stone-500">LPS array</div>
        <MemoryCells
          values={frame.lps}
          states={lpsStates}
          pointers={frame.phase === "lps" && frame.lpsI !== undefined ? { i: frame.lpsI } : {}}
          cellWidth={36}
          labels={pattern.split("")}
        />
      </div>

      <div className="flex gap-2.5 items-center text-xs">
        <span
          className="font-bold px-3 py-1 rounded-md"
          style={{ background: `${THEME.accent}10`, color: THEME.accent }}
        >
          KMP comparisons: {frame.comparisons}
        </span>
        <span
          className="font-bold px-3 py-1 rounded-md"
          style={{ background: `${THEME.danger}1a`, color: THEME.dangerDark }}
        >
          brute force (worst): {frame.bruteComparisons}
        </span>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Visualize tab                                                       */
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
  const frame = player.current;

  return (
    <AlgoCanvas
      title="KMP Pattern Matching - LPS skip table"
      player={player}
      input={
        <InputEditor
          label="Text | Pattern  (pipe-separated)"
          value={src}
          placeholder="ABABCABAB | ABAB"
          helper="Text <= 24 chars, pattern <= 10 chars."
          presets={[
            { label: "Classic", value: "ABABCABAB | ABAB" },
            { label: "Repeats", value: "AAAAABAAA | AAAB" },
            { label: "No match", value: "ABCDEFGH | XYZ" },
            { label: "Many hits", value: "ABABABAB | ABAB" },
          ]}
          onApply={(v) => { if (parsePair(v)) setSrc(v); }}
        />
      }
      pseudocode={<PseudocodePanel lines={PSEUDO} activeLine={frame?.line} />}
      variables={<VariablesPanel vars={frame?.vars ?? {}} flashKeys={frame?.highlightKey ? [frame.highlightKey] : []} />}
    >
      <div className="flex flex-col gap-3.5">
        <div className="flex gap-3.5 flex-wrap text-xs text-stone-500">
          <span><strong className="text-emerald-500">match</strong> - characters aligned and equal</span>
          <span><strong className="text-red-500">mismatch</strong> - pattern must shift</span>
          <span><strong className="text-blue-500">active</strong> - current position</span>
        </div>
        {frame && <KMPVisualization frame={frame} text={text} pattern={pattern} />}
        <Callout>{frame?.message ?? "Press play to step through."}</Callout>
      </div>
    </AlgoCanvas>
  );
}

/* ------------------------------------------------------------------ */
/*  Learn                                                               */
/* ------------------------------------------------------------------ */

function LearnTab() {
  const sections = [
    { title: "The naive way", body: "Brute-force pattern matching slides the pattern one position at a time, re-checking every character. Worst case O(n*m) - painful on repetitive text like 'AAAAAB'." },
    { title: "Key insight", body: "When a mismatch happens after partial matches, the pattern's own structure tells us how far we can safely skip without losing a potential match. No need to re-examine text characters we already matched." },
    { title: "LPS table", body: "For each prefix p[0..i] of the pattern, lps[i] = length of the longest proper prefix of p[0..i] that is also its suffix. 'ABAB' -> lps = [0,0,1,2]." },
    { title: "Matching phase", body: "On a mismatch at p[j], fall back to j = lps[j-1]; keep i (text index). That moves the pattern forward while reusing matched characters. Each text index is compared at most twice." },
    { title: "Complexity", body: "Preprocessing: O(m). Matching: O(n). Total: O(n + m), deterministic, no hashing." },
    { title: "Used in", body: "grep fallback, DNA sequence search, plagiarism detection, and interview-favorite LPS computation questions." },
  ];
  return (
    <div className="flex flex-col gap-3.5">
      <div>
        <SectionEyebrow>Linear-time matching</SectionEyebrow>
        <SectionTitle>Pattern remembers its own self-similarity</SectionTitle>
        <Lede>
          The pattern is smart enough to remember its own self-similarity. When text and pattern disagree,
          we already know how the pattern overlaps with itself, so we can skip ahead without backtracking in the text.
        </Lede>
      </div>
      <div className="grid gap-2.5" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
        {sections.map((s, i) => (
          <Card key={i}>
            <div className="text-[10px] font-mono font-bold text-lime-600 dark:text-lime-400 mb-1.5 tracking-widest">
              0{i + 1}
            </div>
            <div className="font-bold text-sm text-stone-900 dark:text-stone-50 mb-1">{s.title}</div>
            <div className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">{s.body}</div>
          </Card>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Try It                                                              */
/* ------------------------------------------------------------------ */

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
    <div className="flex flex-col gap-3">
      <Callout>
        Compute by hand. For LPS answers, use comma-separated integers (e.g. &quot;0,0,1,2,0&quot;).
      </Callout>
      {problems.map((p, i) => {
        const correct = norm(guesses[i]) === norm(p.answer);
        return (
          <Card key={i}>
            <div className="text-sm text-stone-900 dark:text-stone-50 mb-2.5 leading-relaxed">{p.q}</div>
            <div className="flex gap-2 items-center flex-wrap">
              <input
                value={guesses[i]}
                onChange={(e) => { const g = [...guesses]; g[i] = e.target.value; setGuesses(g); }}
                placeholder="your answer"
                className="px-2.5 py-1.5 rounded-md border border-stone-200 dark:border-white/10 bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-50 font-mono text-sm w-44 outline-none focus:border-lime-400"
              />
              <button
                type="button"
                onClick={() => { const s = [...shown]; s[i] = true; setShown(s); }}
                className="px-3 py-1.5 rounded-md text-xs font-bold border border-stone-200 dark:border-white/10 bg-white dark:bg-stone-900 text-stone-600 dark:text-stone-400 cursor-pointer hover:border-stone-400 dark:hover:border-white/30 transition-colors"
              >
                Reveal
              </button>
              {shown[i] && (
                <span
                  className="text-xs font-bold px-3 py-1.5 rounded-md"
                  style={{
                    color: correct ? THEME.successDark : THEME.dangerDark,
                    background: correct ? `${THEME.success}14` : `${THEME.danger}14`,
                  }}
                >
                  {correct ? `Correct: ${p.answer}` : `Answer: ${p.answer}`}
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
/*  Insight                                                             */
/* ------------------------------------------------------------------ */

function InsightTab() {
  return (
    <div className="flex flex-col gap-3">
      <Card>
        <SubHeading>Why i never goes backward</SubHeading>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          The crucial property: the text pointer <InlineCode>i</InlineCode> is monotone non-decreasing.
          Either we advance it on a match, or j falls back while i stays. Since j can only decrease when
          i doesn&apos;t move, and j can only increase when i does, the total number of comparisons is O(n + m).
        </p>
      </Card>
      <Card>
        <SubHeading>Interview traps</SubHeading>
        <ul className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed pl-5 list-disc space-y-1">
          <li><InlineCode>lps[0]</InlineCode> is always 0. &quot;Proper&quot; prefix excludes the full string.</li>
          <li>When pattern has no repetitive structure (e.g. &quot;ABCDE&quot;), lps is all zeros and KMP degrades to one-step slide, but still O(n + m).</li>
          <li>After reporting a match, shift the pattern by <InlineCode>lps[m-1]</InlineCode>, not by 1. This lets overlapping matches be found correctly.</li>
        </ul>
      </Card>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Activity export                                                     */
/* ------------------------------------------------------------------ */

interface Props {
  onQuizComplete?: (score: number) => void;
}

export default function L7_KMP({ onQuizComplete }: Props) {
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
      question: "Worst-case time complexity of KMP (preprocessing + searching) is:",
      options: ["O(n·m)", "O(n + m)", "O(n log m)", "O(m²)"],
      correctIndex: 1,
      explanation: "KMP runs in O(m) preprocessing to build LPS and O(n) to search - total linear in the sum.",
    },
    {
      question: "LPS for 'ABABCABAB' is:",
      options: ["[0,0,1,2,0,1,2,3,4]", "[0,0,1,2,3,1,2,3,4]", "[0,1,2,3,4,1,2,3,4]", "[0,0,1,1,0,1,2,3,4]"],
      correctIndex: 0,
      explanation: "Trace through: A->0, AB->0, ABA->1, ABAB->2, ABABC->0, ABABCA->1, ABABCAB->2, ABABCABA->3, ABABCABAB->4.",
    },
    {
      question: "On a mismatch at pattern index j (j>0), KMP sets:",
      options: ["j <- 0", "j <- j-1", "j <- lps[j-1]", "j <- lps[j]"],
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
    <LessonShell
      title="KMP String Matching"
      level={7}
      lessonNumber={5}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="Medium - string algorithms, substring search"
      nextLessonHint="Z-Function & Manacher"
      onQuizComplete={onQuizComplete}
    />
  );
}

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
/*  Local cell states / renderer                                        */
/* ------------------------------------------------------------------ */

type CellState = "window" | "match" | "mismatch" | "done" | undefined;

function MemoryCells({
  values,
  states,
  cellWidth = 34,
}: {
  values: (string | number)[];
  states?: CellState[];
  cellWidth?: number;
}) {
  return (
    <div className="flex gap-0.5">
      {values.map((v, i) => {
        const st = states?.[i];
        let bg: string = THEME.bg;
        let border: string = THEME.border;
        if (st === "match") { bg = `${THEME.success}14`; border = THEME.success; }
        else if (st === "mismatch") { bg = `${THEME.danger}14`; border = THEME.danger; }
        else if (st === "window") { bg = "rgba(139,92,246,0.1)"; border = "#8b5cf6"; }
        else if (st === "done") { bg = `${THEME.successSoft}`; border = THEME.successDark; }
        return (
          <div
            key={i}
            className="flex items-center justify-center font-mono font-bold text-xs rounded transition-all"
            style={{
              width: cellWidth, height: cellWidth,
              border: `1.5px solid ${border}`,
              background: bg,
              color: THEME.text,
            }}
          >
            {v}
          </div>
        );
      })}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Rabin-Karp frame logic                                              */
/* ------------------------------------------------------------------ */

const BASE = 31;
const MOD = 1009;

function charVal(c: string): number {
  return c.toUpperCase().charCodeAt(0) - 64;
}

interface Frame {
  line: number;
  vars: Record<string, string | number | undefined>;
  message: string;
  windowStart: number;
  windowHash: number;
  patternHash: number;
  phase: "init" | "slide" | "check" | "match" | "spurious" | "done";
  highlightKey?: string;
  found: number[];
  spurious: number[];
}

const PSEUDO = [
  "# Rabin-Karp",
  "function rabinKarp(t, p):",
  "  m <- |p|; n <- |t|",
  "  patHash <- hash(p)",
  "  winHash <- hash(t[0..m-1])",
  "  for s from 0 to n-m:",
  "    if winHash = patHash:",
  "      if t[s..s+m-1] = p: report s",
  "      else: spurious hit",
  "    if s < n-m:",
  "      winHash <- roll(winHash, t[s], t[s+m])",
];

function initialHash(s: string, m: number): number {
  let h = 0;
  for (let i = 0; i < m; i++) h = (h * BASE + charVal(s[i])) % MOD;
  return h < 0 ? h + MOD : h;
}

function rollHash(prevHash: number, outChar: string, inChar: string, highestPow: number): number {
  let h = prevHash;
  h = (h - (charVal(outChar) * highestPow) % MOD + MOD * MOD) % MOD;
  h = (h * BASE + charVal(inChar)) % MOD;
  return h;
}

function buildFrames(text: string, pattern: string): Frame[] {
  const frames: Frame[] = [];
  const n = text.length, m = pattern.length;
  let highestPow = 1;
  for (let i = 0; i < m - 1; i++) highestPow = (highestPow * BASE) % MOD;
  const patHash = initialHash(pattern, m);
  let winHash = initialHash(text, m);
  const found: number[] = [];
  const spurious: number[] = [];

  frames.push({ line: 3, vars: { "|p|": m, "|t|": n, patHash, base: BASE, mod: MOD }, message: `Compute pattern hash: hash("${pattern}") = ${patHash}.`, windowStart: 0, windowHash: 0, patternHash: patHash, phase: "init", found: [], spurious: [], highlightKey: "patHash" });
  frames.push({ line: 4, vars: { winStart: 0, winHash, patHash }, message: `Initial window hash: hash("${text.slice(0, m)}") = ${winHash}.`, windowStart: 0, windowHash: winHash, patternHash: patHash, phase: "init", found: [], spurious: [], highlightKey: "winHash" });

  for (let s = 0; s <= n - m; s++) {
    const hashMatch = winHash === patHash;
    frames.push({ line: 6, vars: { s, winHash, patHash, match: hashMatch ? "yes" : "no" }, message: hashMatch ? `Hash match at s=${s}! Need to verify characters.` : `Hashes differ (${winHash} vs ${patHash}). Skip.`, windowStart: s, windowHash: winHash, patternHash: patHash, phase: hashMatch ? "check" : "slide", found: [...found], spurious: [...spurious] });
    if (hashMatch) {
      const sub = text.slice(s, s + m);
      if (sub === pattern) {
        found.push(s);
        frames.push({ line: 7, vars: { s, match: s }, message: `Verified match at index ${s}: "${sub}" = "${pattern}".`, windowStart: s, windowHash: winHash, patternHash: patHash, phase: "match", found: [...found], spurious: [...spurious] });
      } else {
        spurious.push(s);
        frames.push({ line: 8, vars: { s, actual: sub, pattern }, message: `Spurious hit at s=${s}: hashes collided but "${sub}" != "${pattern}".`, windowStart: s, windowHash: winHash, patternHash: patHash, phase: "spurious", found: [...found], spurious: [...spurious] });
      }
    }
    if (s < n - m) {
      const newHash = rollHash(winHash, text[s], text[s + m], highestPow);
      frames.push({ line: 9, vars: { remove: text[s], add: text[s + m], old: winHash, "new": newHash }, message: `Roll: drop '${text[s]}', add '${text[s + m]}' -> new winHash = ${newHash}.`, windowStart: s + 1, windowHash: newHash, patternHash: patHash, phase: "slide", found: [...found], spurious: [...spurious], highlightKey: "winHash" });
      winHash = newHash;
    }
  }

  frames.push({ line: 1, vars: { matches: found.length, spurious: spurious.length }, message: `Done. Matches: [${found.join(", ") || "-"}]. Spurious hits: ${spurious.length}.`, windowStart: Math.max(0, n - m), windowHash: winHash, patternHash: patHash, phase: "done", found, spurious });
  return frames;
}

/* ------------------------------------------------------------------ */
/*  Visualization components                                            */
/* ------------------------------------------------------------------ */

function HashBox({ label, value, highlight, color }: { label: string; value: number | string; highlight?: boolean; color: string }) {
  return (
    <div
      className="rounded-lg text-center px-3 py-1.5 transition-all"
      style={{
        border: `2px solid ${color}`,
        background: `${color}10`,
        minWidth: 110,
        boxShadow: highlight ? `0 0 0 3px ${color}44` : "none",
      }}
    >
      <div className="text-[10px] font-bold uppercase tracking-widest text-stone-500">{label}</div>
      <div className="font-mono text-lg font-extrabold" style={{ color }}>{value}</div>
    </div>
  );
}

function RKVisualization({ frame, text, pattern }: { frame: Frame; text: string; pattern: string }) {
  const n = text.length;
  const m = pattern.length;
  const s = frame.windowStart;

  const textStates: CellState[] = new Array(n).fill(undefined);
  for (let k = 0; k < m; k++) {
    if (s + k < n) {
      if (frame.phase === "match") textStates[s + k] = "match";
      else if (frame.phase === "spurious") textStates[s + k] = "mismatch";
      else textStates[s + k] = "window";
    }
  }
  for (const f of frame.found) {
    for (let k = 0; k < m; k++) if (f + k < n && textStates[f + k] !== "match") textStates[f + k] = "done";
  }

  return (
    <div className="flex flex-col gap-3.5 items-center">
      <div>
        <div className="text-[10px] font-bold uppercase tracking-widest text-stone-500 text-center mb-1">
          Text (window = pattern length {m})
        </div>
        <MemoryCells
          values={text.split("").map((c) => (c === " " ? "." : c))}
          states={textStates}
          cellWidth={34}
        />
      </div>
      <div>
        <div className="text-[10px] font-bold uppercase tracking-widest text-stone-500 text-center mb-1">Pattern</div>
        <MemoryCells values={pattern.split("")} cellWidth={34} />
      </div>
      <div className="flex gap-4 flex-wrap justify-center">
        <HashBox label="Window hash" value={frame.windowHash} highlight={frame.highlightKey === "winHash"} color={THEME.accent} />
        <HashBox label="Pattern hash" value={frame.patternHash} highlight={frame.highlightKey === "patHash"} color="#8b5cf6" />
        <HashBox label="Equal?" value={frame.windowHash === frame.patternHash ? "YES" : "no"} color={frame.windowHash === frame.patternHash ? THEME.success : "#64748b"} />
      </div>
      <div className="flex gap-2.5 text-xs">
        <span
          className="font-bold px-3 py-1 rounded-md"
          style={{ background: `${THEME.success}1a`, color: THEME.successDark }}
        >
          matches: {frame.found.length}
        </span>
        <span
          className="font-bold px-3 py-1 rounded-md"
          style={{ background: "rgba(245,158,11,0.12)", color: "#b45309" }}
        >
          spurious: {frame.spurious.length}
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
  if (!text || !pattern || pattern.length > text.length || pattern.length > 8 || text.length > 20) return null;
  if (!/^[A-Za-z]+$/.test(text) || !/^[A-Za-z]+$/.test(pattern)) return null;
  return { text, pattern };
}

function VisualizeTab() {
  const [src, setSrc] = useState("ABRACADABRA | ABRA");
  const parsed = parsePair(src);
  const { text, pattern } = parsed ?? { text: "ABRACADABRA", pattern: "ABRA" };
  const frames = useMemo(() => buildFrames(text, pattern), [text, pattern]);
  const player = useStepPlayer(frames);
  const frame = player.current;

  return (
    <AlgoCanvas
      title="Rabin-Karp - Rolling Hash Pattern Match"
      player={player}
      input={
        <InputEditor
          label="Text | Pattern  (letters only)"
          value={src}
          placeholder="ABRACADABRA | ABRA"
          helper={`Hash base=${BASE}, mod=${MOD}. Max text 20 chars, pattern 8 chars.`}
          presets={[
            { label: "Classic", value: "ABRACADABRA | ABRA" },
            { label: "Repetitive", value: "AAAAABAAA | AAAB" },
            { label: "Likely spurious", value: "AABCAABCBB | ABCB" },
            { label: "No match", value: "HELLOWORLD | XYZ" },
          ]}
          onApply={(v) => { if (parsePair(v)) setSrc(v); }}
        />
      }
      pseudocode={<PseudocodePanel lines={PSEUDO} activeLine={frame?.line} />}
      variables={<VariablesPanel vars={frame?.vars ?? {}} flashKeys={frame?.highlightKey ? [frame.highlightKey] : []} />}
    >
      <div className="flex flex-col gap-3.5">
        <div className="flex gap-3.5 flex-wrap text-xs text-stone-500">
          <span><strong className="text-purple-500">window</strong> - current slice</span>
          <span><strong className="text-emerald-500">match</strong> - confirmed</span>
          <span><strong className="text-amber-500">spurious</strong> - hash collision</span>
        </div>
        {frame && <RKVisualization frame={frame} text={text} pattern={pattern} />}
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
    { title: "The idea", body: "Hash the pattern once. Hash the first window of the text. Compare hashes; only on hash match, compare characters. Slide and repeat." },
    { title: "Rolling hash", body: "Instead of re-hashing every window from scratch (O(m) each), update in O(1): subtract the leaving char's contribution, shift the rest up by the base, add the incoming char." },
    { title: "Spurious hits", body: "Different strings can have the same hash (collision). So hash equality only triggers a full character check. Choosing large prime mod keeps collisions rare." },
    { title: "Average vs worst case", body: "Expected O(n + m). Worst case (adversarial strings that constantly collide): O(n*m) - same as brute force. KMP avoids this worst case deterministically." },
    { title: "Multi-pattern win", body: "Rabin-Karp excels when you search many patterns at once: hash them all, hash each window once, check set membership - O(n + total pattern length)." },
  ];
  return (
    <div className="flex flex-col gap-3.5">
      <div>
        <SectionEyebrow>Fingerprint, then verify</SectionEyebrow>
        <SectionTitle>Hash first, character-check only on match</SectionTitle>
        <Lede>
          Think of the pattern as a &ldquo;fingerprint&rdquo; (a number). Scan the text and compute the
          fingerprint of each window in constant time by rolling. Compare fingerprints first as a cheap filter.
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
    { q: "Worst-case time complexity of Rabin-Karp?", answer: "O(nm)" },
    { q: "Expected time complexity with a good hash function?", answer: "O(n+m)" },
    { q: "What makes Rabin-Karp especially useful compared to KMP?", answer: "multi-pattern" },
  ];
  const [guesses, setGuesses] = useState<string[]>(problems.map(() => ""));
  const [shown, setShown] = useState<boolean[]>(problems.map(() => false));
  return (
    <div className="flex flex-col gap-3">
      <Callout>Short-answer questions - write the key phrase.</Callout>
      {problems.map((p, i) => (
        <Card key={i}>
          <div className="text-sm text-stone-900 dark:text-stone-50 mb-2.5 leading-relaxed">{p.q}</div>
          <div className="flex gap-2 items-center flex-wrap">
            <input
              value={guesses[i]}
              onChange={(e) => { const g = [...guesses]; g[i] = e.target.value; setGuesses(g); }}
              placeholder="your answer"
              className="px-2.5 py-1.5 rounded-md border border-stone-200 dark:border-white/10 bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-50 font-mono text-sm w-40 outline-none focus:border-lime-400"
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
                style={{ background: `${THEME.accent}10`, color: THEME.text }}
              >
                Answer: {p.answer}
              </span>
            )}
          </div>
        </Card>
      ))}
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
        <SubHeading>The rolling-hash formula</SubHeading>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          <InlineCode>hash(s[i+1..i+m]) = (hash(s[i..i+m-1]) - s[i]*B^(m-1)) * B + s[i+m]</InlineCode>, all mod M.
          Precompute B^(m-1) once. That subtraction / multiply / add is O(1).
        </p>
      </Card>
      <Card>
        <SubHeading>Picking hash constants</SubHeading>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          Use a large prime modulus (e.g. 10^9 + 7) to minimize collisions. The base should be larger than
          the alphabet size (256 for ASCII, 31 for letters). For security-sensitive uses, pick a random prime
          at runtime to thwart adversaries.
        </p>
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

export default function L7_RabinKarp({ onQuizComplete }: Props) {
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
      question: "The key operation enabling Rabin-Karp's O(n) expected time is:",
      options: ["Binary search on hash values", "Rolling hash update in O(1) per window", "KMP's failure table", "Trie traversal"],
      correctIndex: 1,
      explanation: "Recomputing hash from scratch per window would be O(m) x n = O(nm). Rolling hash drops that to O(1) per slide.",
    },
    {
      question: "A 'spurious hit' in Rabin-Karp means:",
      options: ["A character mismatch without checking the hash", "Two windows with the same hash but different strings", "A missed true match", "A cache miss"],
      correctIndex: 1,
      explanation: "Hash collisions - different strings, same hash - force a full character compare to confirm or reject the match.",
    },
    {
      question: "Worst-case (adversarial collisions) time complexity of Rabin-Karp is:",
      options: ["O(n + m)", "O(n log m)", "O(n·m)", "O(m²)"],
      correctIndex: 2,
      explanation: "In the worst case every window spuriously hits and requires a full O(m) comparison -> O(n*m), same as brute force.",
    },
    {
      question: "Why is Rabin-Karp attractive for multi-pattern search?",
      options: [
        "Its hashes are trivially invertible",
        "Hashing all patterns once lets each window be checked against the whole set in O(1) average",
        "It avoids modular arithmetic",
        "It uses less memory than KMP",
      ],
      correctIndex: 1,
      explanation: "Store all pattern hashes in a set; each window hash is queried once - total O(n + sum of pattern lengths) average.",
    },
  ];

  return (
    <LessonShell
      title="Rabin-Karp String Matching"
      level={7}
      lessonNumber={4}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="Low - useful for multi-pattern and plagiarism detection"
      nextLessonHint="KMP String Matching"
      onQuizComplete={onQuizComplete}
    />
  );
}

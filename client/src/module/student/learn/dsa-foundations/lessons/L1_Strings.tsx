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
  THEME,
} from "../../../../../components/dsa-theory/primitives";
import { PracticeTab } from "../PracticeTab";

const PRACTICE_TOPIC_SLUG: string | null = "strings";

/* ------------------------------------------------------------------ */
/*  CellState + local MemoryCells                                      */
/* ------------------------------------------------------------------ */

type CellState =
  | "default"
  | "active"
  | "compare"
  | "swap"
  | "done"
  | "visited"
  | "match"
  | "mismatch"
  | "window"
  | "mid";

const CELL_COLORS: Record<CellState, { bg: string; border: string; text: string }> = {
  default:  { bg: THEME.bg,     border: THEME.border,   text: THEME.text },
  active:   { bg: "#dbeafe",    border: "#3b82f6",      text: "#1e3a8a" },
  compare:  { bg: "#fef9c3",    border: "#eab308",      text: "#713f12" },
  swap:     { bg: "#fce7f3",    border: "#ec4899",      text: "#831843" },
  done:     { bg: "#d1fae5",    border: "#10b981",      text: "#064e3b" },
  visited:  { bg: "#f1f5f9",    border: "#94a3b8",      text: "#475569" },
  match:    { bg: "#dcfce7",    border: "#22c55e",      text: "#14532d" },
  mismatch: { bg: "#fee2e2",    border: "#ef4444",      text: "#7f1d1d" },
  window:   { bg: "#ede9fe",    border: "#8b5cf6",      text: "#3b0764" },
  mid:      { bg: "#ffedd5",    border: "#f97316",      text: "#7c2d12" },
};

function MemoryCells({
  values,
  states,
  pointers,
  cellWidth = 42,
}: {
  values: string[];
  states?: (CellState | undefined)[];
  pointers?: Record<string, number>;
  cellWidth?: number;
}) {
  const ptMap: Record<number, string[]> = {};
  if (pointers) {
    Object.entries(pointers).forEach(([k, v]) => {
      if (!ptMap[v]) ptMap[v] = [];
      ptMap[v].push(k);
    });
  }

  return (
    <div className="overflow-x-auto w-full">
      <div className="inline-flex flex-col gap-1">
        {/* pointer labels above */}
        <div className="flex gap-0.5">
          {values.map((_, i) => (
            <div key={i} className="flex flex-col items-center" style={{ width: cellWidth }}>
              {ptMap[i] ? (
                <div className="text-[9px] font-mono font-bold text-lime-700 dark:text-lime-400 truncate">
                  {ptMap[i].join(",")}
                </div>
              ) : (
                <div className="h-3" />
              )}
            </div>
          ))}
        </div>
        {/* cells */}
        <div className="flex gap-0.5">
          {values.map((v, i) => {
            const state: CellState = states?.[i] ?? "default";
            const colors = CELL_COLORS[state] ?? CELL_COLORS.default;
            return (
              <div
                key={i}
                className="flex items-center justify-center rounded transition-all duration-200 font-mono font-bold text-sm"
                style={{
                  width: cellWidth,
                  height: cellWidth,
                  background: colors.bg,
                  border: `1.5px solid ${colors.border}`,
                  color: colors.text,
                }}
              >
                {v}
              </div>
            );
          })}
        </div>
        {/* index row below */}
        <div className="flex gap-0.5">
          {values.map((_, i) => (
            <div
              key={i}
              className="text-[9px] font-mono text-stone-400 text-center"
              style={{ width: cellWidth }}
            >
              [{i}]
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

interface Frame {
  line: number;
  vars: Record<string, string | number | undefined>;
  message: string;
  values: string[];
  states: (CellState | undefined)[];
  pointers: Record<string, number>;
  patternValues?: string[];
  patternStates?: (CellState | undefined)[];
  patternOffset?: number;
}

/* ------------------------------------------------------------------ */
/*  Reverse (two-pointer swap)                                         */
/* ------------------------------------------------------------------ */

const PSEUDO_REVERSE = [
  "function reverse(s):",
  "  i ← 0, j ← n - 1",
  "  while i < j:",
  "    swap s[i] and s[j]",
  "    i ← i + 1, j ← j - 1",
];

function buildReverse(text: string): Frame[] {
  const f: Frame[] = [];
  const a = text.split("");
  const n = a.length;
  f.push({
    line: 0, vars: { n }, message: `Reverse the string "${text}" in place.`,
    values: [...a], states: a.map(() => "default"), pointers: {},
  });
  let i = 0, j = n - 1;
  f.push({
    line: 1, vars: { i, j }, message: `Place two pointers at the ends.`,
    values: [...a], states: a.map(() => "default"), pointers: { i, j },
  });
  while (i < j) {
    f.push({
      line: 2, vars: { i, j }, message: `Condition i < j holds (${i} < ${j}); swap the ends.`,
      values: [...a], states: a.map((_, k) => (k === i || k === j ? "compare" : "default")), pointers: { i, j },
    });
    [a[i], a[j]] = [a[j], a[i]];
    f.push({
      line: 3, vars: { i, j }, message: `Swapped. The string is now "${a.join("")}".`,
      values: [...a], states: a.map((_, k) => (k === i || k === j ? "swap" : k < i || k > j ? "done" : "default")), pointers: { i, j },
    });
    i++; j--;
    f.push({
      line: 4, vars: { i, j }, message: `Move the pointers inward.`,
      values: [...a], states: a.map((_, k) => (k < i || k > j ? "done" : "default")), pointers: { i, j },
    });
  }
  f.push({
    line: 2, vars: { i, j }, message: `Pointers met. Reversal complete: "${a.join("")}". O(n) time, O(1) extra space.`,
    values: [...a], states: a.map(() => "done"), pointers: {},
  });
  return f;
}

/* ------------------------------------------------------------------ */
/*  Palindrome check                                                   */
/* ------------------------------------------------------------------ */

const PSEUDO_PALI = [
  "function isPalindrome(s):",
  "  i ← 0, j ← n - 1",
  "  while i < j:",
  "    if s[i] != s[j]: return false",
  "    i ← i + 1, j ← j - 1",
  "  return true",
];

function buildPalindrome(text: string): Frame[] {
  const f: Frame[] = [];
  const a = text.split("");
  const n = a.length;
  f.push({
    line: 0, vars: { n }, message: `Check whether "${text}" is a palindrome.`,
    values: [...a], states: a.map(() => "default"), pointers: {},
  });
  let i = 0, j = n - 1;
  f.push({
    line: 1, vars: { i, j }, message: `Pointers at the ends.`,
    values: [...a], states: a.map(() => "default"), pointers: { i, j },
  });
  while (i < j) {
    f.push({
      line: 2, vars: { i, j }, message: `i < j — continue inspection.`,
      values: [...a], states: a.map((_, k) => (k === i || k === j ? "compare" : k < i || k > j ? "done" : "default")), pointers: { i, j },
    });
    f.push({
      line: 3, vars: { i, j }, message: `Compare s[${i}] ('${a[i]}') with s[${j}] ('${a[j]}').`,
      values: [...a], states: a.map((_, k) => (k === i || k === j ? "compare" : k < i || k > j ? "done" : "default")), pointers: { i, j },
    });
    if (a[i] !== a[j]) {
      f.push({
        line: 3, vars: { i, j, result: "false" }, message: `Mismatch! Not a palindrome.`,
        values: [...a], states: a.map((_, k) => (k === i || k === j ? "mismatch" : k < i || k > j ? "done" : "default")), pointers: { i, j },
      });
      return f;
    }
    f.push({
      line: 4, vars: { i, j }, message: `Match. Move the pointers inward.`,
      values: [...a], states: a.map((_, k) => (k === i || k === j ? "match" : k < i || k > j ? "done" : "default")), pointers: { i, j },
    });
    i++; j--;
  }
  f.push({
    line: 5, vars: { i, j, result: "true" }, message: `All pairs matched. "${text}" is a palindrome.`,
    values: [...a], states: a.map(() => "match"), pointers: {},
  });
  return f;
}

/* ------------------------------------------------------------------ */
/*  Brute-force substring search                                       */
/* ------------------------------------------------------------------ */

const PSEUDO_BRUTE = [
  "function search(text, pat):",
  "  for i in 0..n-m:",
  "    j ← 0",
  "    while j < m and text[i+j] == pat[j]:",
  "      j ← j + 1",
  "    if j == m: return i",
  "  return -1",
];

function buildBrute(text: string, pat: string): Frame[] {
  const f: Frame[] = [];
  const n = text.length;
  const m = pat.length;
  const ta = text.split("");
  if (m === 0 || m > n) {
    f.push({ line: 0, vars: { n, m }, message: `Pattern is empty or longer than text.`, values: ta, states: ta.map(() => "default"), pointers: {} });
    return f;
  }
  f.push({
    line: 0, vars: { n, m }, message: `Slide the pattern across the text; compare character by character.`,
    values: ta, states: ta.map(() => "default"), pointers: {},
    patternValues: pat.split(""), patternStates: pat.split("").map(() => "default"), patternOffset: 0,
  });
  for (let i = 0; i <= n - m; i++) {
    f.push({
      line: 1, vars: { i }, message: `Try aligning the pattern at position ${i}.`,
      values: ta, states: ta.map((_, k) => (k >= i && k < i + m ? "window" : "default")), pointers: { i },
      patternValues: pat.split(""), patternStates: pat.split("").map(() => "default"), patternOffset: i,
    });
    let j = 0;
    f.push({
      line: 2, vars: { i, j }, message: `Reset inner cursor j to 0.`,
      values: ta, states: ta.map((_, k) => (k >= i && k < i + m ? "window" : "default")), pointers: { i },
      patternValues: pat.split(""), patternStates: pat.split("").map(() => "default"), patternOffset: i,
    });
    while (j < m) {
      f.push({
        line: 3, vars: { i, j }, message: `Compare text[${i + j}] ('${ta[i + j]}') with pat[${j}] ('${pat[j]}').`,
        values: ta, states: ta.map((_, k) => (k === i + j ? "compare" : k >= i && k < i + m ? "window" : "default")), pointers: { i, "i+j": i + j },
        patternValues: pat.split(""), patternStates: pat.split("").map((_, k) => (k === j ? "compare" : "default")), patternOffset: i,
      });
      if (ta[i + j] !== pat[j]) {
        f.push({
          line: 3, vars: { i, j }, message: `Mismatch. Shift the pattern one step right.`,
          values: ta, states: ta.map((_, k) => (k === i + j ? "mismatch" : k >= i && k < i + m ? "window" : "default")), pointers: { i, "i+j": i + j },
          patternValues: pat.split(""), patternStates: pat.split("").map((_, k) => (k === j ? "mismatch" : "default")), patternOffset: i,
        });
        break;
      }
      f.push({
        line: 4, vars: { i, j }, message: `Match. Advance j.`,
        values: ta, states: ta.map((_, k) => (k === i + j ? "match" : k >= i && k < i + m ? "window" : "default")), pointers: { i, "i+j": i + j },
        patternValues: pat.split(""), patternStates: pat.split("").map((_, k) => (k <= j ? "match" : "default")), patternOffset: i,
      });
      j++;
    }
    if (j === m) {
      f.push({
        line: 5, vars: { i, found: i }, message: `Full match at index ${i}! Return ${i}.`,
        values: ta, states: ta.map((_, k) => (k >= i && k < i + m ? "match" : "default")), pointers: { i },
        patternValues: pat.split(""), patternStates: pat.split("").map(() => "match"), patternOffset: i,
      });
      return f;
    }
  }
  f.push({
    line: 6, vars: { found: -1 }, message: `Pattern not found. Worst-case time is O(n · m).`,
    values: ta, states: ta.map(() => "default"), pointers: {},
    patternValues: pat.split(""), patternStates: pat.split("").map(() => "default"), patternOffset: 0,
  });
  return f;
}

/* ------------------------------------------------------------------ */
/*  Visualize tab                                                      */
/* ------------------------------------------------------------------ */

type Op = "reverse" | "palindrome" | "search";

function VisualizeTab() {
  const [op, setOp] = useState<Op>("reverse");
  const [text, setText] = useState("racecar");
  const [pat, setPat] = useState("ace");

  const { pseudo, frames } = useMemo(() => {
    if (op === "reverse") return { pseudo: PSEUDO_REVERSE, frames: buildReverse(text) };
    if (op === "palindrome") return { pseudo: PSEUDO_PALI, frames: buildPalindrome(text) };
    return { pseudo: PSEUDO_BRUTE, frames: buildBrute(text, pat) };
  }, [op, text, pat]);

  const player = useStepPlayer(frames);
  const frame = player.current;

  const opLabels: Record<Op, string> = {
    reverse: "Reverse — two pointer swap",
    palindrome: "Palindrome — converging pointers",
    search: "Brute force substring — O(n · m)",
  };

  const CELL_W = 42;

  return (
    <AlgoCanvas
      title={opLabels[op]}
      player={player}
      input={
        <div className="flex flex-col gap-3">
          <InputEditor
            label="Text"
            value={text}
            placeholder="e.g. racecar"
            presets={[
              { label: "Palindrome", value: "racecar" },
              { label: "Normal", value: "abracadabra" },
              { label: "Even", value: "abba" },
              { label: "Single", value: "x" },
            ]}
            onApply={(v) => { if (v.length > 0) setText(v.slice(0, 24)); }}
            onRandom={() => {
              const alpha = "abcdefgh";
              const n = 5 + Math.floor(Math.random() * 6);
              const s = Array.from({ length: n }, () => alpha[Math.floor(Math.random() * alpha.length)]).join("");
              setText(s);
            }}
          />
          {op === "search" && (
            <InputEditor
              label="Pattern"
              value={pat}
              placeholder="e.g. ace"
              presets={[
                { label: "ace", value: "ace" },
                { label: "ab", value: "ab" },
                { label: "xyz", value: "xyz" },
              ]}
              onApply={(v) => { if (v.length > 0) setPat(v.slice(0, 8)); }}
            />
          )}
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
              / operation
            </label>
            <div className="flex flex-wrap gap-1.5">
              {(Object.keys(opLabels) as Op[]).map((id) => (
                <PillButton key={id} onClick={() => setOp(id)} active={op === id}>
                  <span className="text-xs">{opLabels[id]}</span>
                </PillButton>
              ))}
            </div>
          </div>
        </div>
      }
      pseudocode={<PseudocodePanel lines={pseudo} activeLine={frame?.line} />}
      variables={<VariablesPanel vars={frame?.vars ?? {}} flashKeys={["i", "j", "found", "result"]} />}
    >
      <div className="flex flex-col items-center gap-4">
        <MemoryCells
          values={frame?.values ?? []}
          states={frame?.states}
          pointers={frame?.pointers}
          cellWidth={CELL_W}
        />
        {frame?.patternValues && (
          <div
            className="flex items-center gap-2 transition-all duration-300"
            style={{ marginLeft: (frame.patternOffset ?? 0) * (CELL_W + 2) }}
          >
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-stone-500">
              pattern
            </span>
            <MemoryCells
              values={frame.patternValues}
              states={frame.patternStates}
              cellWidth={CELL_W}
            />
          </div>
        )}
        <Callout className="w-full">{frame?.message ?? "Press play to start."}</Callout>
      </div>
    </AlgoCanvas>
  );
}

/* ------------------------------------------------------------------ */
/*  Learn tab                                                          */
/* ------------------------------------------------------------------ */

function LearnTab() {
  const cards = [
    { t: "Reverse", b: "Swap ends, move inward. O(n) time, O(1) space with two pointers." },
    { t: "Palindrome", b: "Compare ends; any mismatch is a definitive no. Short-circuits on first mismatch." },
    { t: "Substring search", b: "Slide a window of size m; compare character by character. Brute force is O(n · m)." },
    { t: "Anagram / frequency", b: "Count each character into a 26-sized array; compare counts. O(n) time." },
  ];

  return (
    <div className="flex flex-col gap-5">
      <div>
        <SectionEyebrow>strings</SectionEyebrow>
        <SectionTitle>Arrays of characters — with one immutability twist</SectionTitle>
        <Lede>
          Every algorithm you learned for arrays works on strings: indexing, scanning, two-pointer
          sweeps. The twist is that strings are often <em>immutable</em> in high-level languages
          (Java, Python, JS), so even a one-character change costs O(n) to build a new string.
        </Lede>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {cards.map((c, i) => (
          <Card key={i}>
            <SubHeading>{c.t}</SubHeading>
            <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">{c.b}</p>
          </Card>
        ))}
      </div>

      <Card>
        <SubHeading>Brute-force substring match</SubHeading>
        <CodeBlock>{`for i in 0..n - m:
  j ← 0
  while j < m and text[i + j] == pat[j]:
    j ← j + 1
  if j == m: return i   # match found
return -1               # not found`}</CodeBlock>
      </Card>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Try tab                                                            */
/* ------------------------------------------------------------------ */

function TryTab() {
  const problems = [
    { q: "How many swap operations does reverse('abcdef') perform?", options: ["2", "3", "5", "6"], ans: 1, exp: "n = 6, so ⌊n/2⌋ = 3 swaps (pairs a-f, b-e, c-d)." },
    { q: "Which of these is NOT a palindrome?", options: ["racecar", "abba", "abcba", "abcda"], ans: 3, exp: "'abcda' reversed is 'adcba' — different." },
    { q: "Worst-case comparisons of brute-force search for pat 'aab' in 'aaaaab' (n=6, m=3)?", options: ["3", "6", "12", "18"], ans: 2, exp: "Each of the 4 alignments may compare up to m=3 chars, so up to 12 comparisons." },
    { q: "Which approach is O(n) space because strings are immutable in Python?", options: ["In-place reverse with two pointers", "Building a reversed copy via concatenation", "Checking palindrome with two pointers", "Indexing s[i]"], ans: 1, exp: "Creating a new string costs O(n) memory; in-place algorithms over immutable strings copy the whole thing." },
  ];
  const [picked, setPicked] = useState<(number | null)[]>(problems.map(() => null));

  return (
    <div className="flex flex-col gap-3">
      {problems.map((p, i) => {
        const sel = picked[i];
        return (
          <Card key={i}>
            <p className="text-sm text-stone-900 dark:text-stone-100 mb-3 leading-relaxed">
              <strong className="text-lime-700 dark:text-lime-400">#{i + 1}.</strong> {p.q}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {p.options.map((o, idx) => {
                const correct = sel !== null && idx === p.ans;
                const wrong = sel !== null && idx === sel && idx !== p.ans;
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
                <Callout>{p.exp}</Callout>
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
        <SubHeading>Why brute force is O(n · m)</SubHeading>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          There are up to (n − m + 1) alignments of the pattern, and each alignment may need up to
          m comparisons. In the worst case (e.g. text = "aaaa…ab", pattern = "aab"), we re-scan
          almost everything at every shift.
        </p>
      </Card>
      <Card>
        <SubHeading>Better algorithms exist</SubHeading>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          KMP, Z-algorithm, and Rabin-Karp all run in O(n + m) time by avoiding redundant
          comparisons after a mismatch. You will meet KMP in Level 7 — brute force is the baseline
          you improve on.
        </p>
      </Card>
      <Card>
        <SubHeading>Immutable-string trap</SubHeading>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          In Python/Java, <InlineCode>s = s + c</InlineCode> inside a loop is O(n²) — each
          iteration copies the whole string. Always use a list/StringBuilder and join at the end.
        </p>
      </Card>
    </div>
  );
}

/* ------------------------------------------------------------------ */

interface Props {
  onQuizComplete?: (score: number) => void;
}

export default function L1_Strings({ onQuizComplete }: Props) {
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
      question: "In-place reverse with two pointers has what time and auxiliary space?",
      options: ["O(n), O(n)", "O(n), O(1)", "O(n²), O(1)", "O(log n), O(1)"],
      correctIndex: 1,
      explanation: "We touch each character once and need only the two pointers — O(n) time, O(1) space.",
    },
    {
      question: "The two-pointer palindrome check halts early when…",
      options: ["The pointers cross", "A mismatch is found", "The string length is even", "A vowel appears"],
      correctIndex: 1,
      explanation: "One mismatch proves it is not a palindrome, so we return immediately.",
    },
    {
      question: "For brute-force substring search on a text of length n and pattern of length m, the worst-case time is…",
      options: ["O(n + m)", "O(n log m)", "O(n · m)", "O(m²)"],
      correctIndex: 2,
      explanation: "Up to (n − m + 1) alignments each doing up to m comparisons → O(n · m).",
    },
    {
      question: "Which of the following is O(n²) in Python because of string immutability?",
      options: [
        "Iterating once with s[i]",
        "Comparing s == t",
        "Concatenating one character per loop iteration: out = out + c",
        "Slicing s[0:5]",
      ],
      correctIndex: 2,
      explanation: "Each concatenation copies the whole accumulated string. Use a list and ''.join(...) for O(n).",
    },
  ];

  return (
    <LessonShell
      title="Strings"
      level={1}
      lessonNumber={5}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="String manipulation is half of every easy/medium interview"
      nextLessonHint="Two-Pointer & Sliding Window"
      onQuizComplete={onQuizComplete}
    />
  );
}

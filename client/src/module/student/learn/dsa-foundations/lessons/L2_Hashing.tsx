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

const PRACTICE_TOPIC_SLUG: string | null = "hashing";

/* ------------------------------------------------------------------ */
/*  Types                                                               */
/* ------------------------------------------------------------------ */

type Strategy = "chaining" | "probing";

interface Frame {
  line: number;
  vars: Record<string, string | number | undefined>;
  message: string;
  highlightKey?: string;
  chains: number[][];
  slots: (number | null)[];
  cursor?: number;
  probeTrail: number[];
  justInserted?: number;
  loadFactor: number;
  currentKey?: number;
}

/* ------------------------------------------------------------------ */
/*  Pseudocode                                                          */
/* ------------------------------------------------------------------ */

const PSEUDO_CHAIN = [
  "function insert(key):",
  "  h ← key mod tableSize",
  "  bucket ← table[h]",
  "  if key not in bucket:",
  "    bucket.append(key)",
  "  loadFactor ← n / tableSize",
];

const PSEUDO_PROBE = [
  "function insert(key):",
  "  h ← key mod tableSize",
  "  i ← 0",
  "  while table[(h + i) mod tableSize] is occupied:",
  "    if table[...] == key: return  // already in",
  "    i ← i + 1",
  "  table[(h + i) mod tableSize] ← key",
];

/* ------------------------------------------------------------------ */
/*  Frame builders                                                       */
/* ------------------------------------------------------------------ */

function buildChaining(keys: number[], size: number): Frame[] {
  const f: Frame[] = [];
  const chains: number[][] = Array.from({ length: size }, () => []);
  let n = 0;
  f.push({ line: 0, vars: { tableSize: size }, message: `Empty table of size ${size} (chaining)`, chains: chains.map((c) => [...c]), slots: [], probeTrail: [], loadFactor: 0 });
  for (const k of keys) {
    f.push({ line: 0, vars: { key: k }, message: `Insert key ${k}`, chains: chains.map((c) => [...c]), slots: [], probeTrail: [], loadFactor: n / size, currentKey: k });
    const h = ((k % size) + size) % size;
    f.push({ line: 1, vars: { key: k, h, formula: `${k} mod ${size} = ${h}` }, highlightKey: "h", message: `Hash: ${k} mod ${size} = ${h}`, chains: chains.map((c) => [...c]), slots: [], probeTrail: [], cursor: h, loadFactor: n / size, currentKey: k });
    f.push({ line: 2, vars: { bucket: h, "bucket.size": chains[h].length }, message: `Look at bucket ${h} (has ${chains[h].length} node${chains[h].length === 1 ? "" : "s"})`, chains: chains.map((c) => [...c]), slots: [], probeTrail: [], cursor: h, loadFactor: n / size, currentKey: k });
    const dup = chains[h].includes(k);
    f.push({ line: 3, vars: { duplicate: String(dup) }, message: dup ? `${k} already in bucket — skip` : `${k} not present — append`, chains: chains.map((c) => [...c]), slots: [], probeTrail: [], cursor: h, loadFactor: n / size, currentKey: k });
    if (!dup) {
      chains[h].push(k);
      n++;
      f.push({ line: 4, vars: { "bucket.size": chains[h].length }, highlightKey: "bucket.size", message: `Appended ${k} to bucket ${h}`, chains: chains.map((c) => [...c]), slots: [], probeTrail: [], cursor: h, justInserted: h, loadFactor: n / size, currentKey: k });
    }
    f.push({ line: 5, vars: { n, loadFactor: (n / size).toFixed(2) }, highlightKey: "loadFactor", message: `Load factor α = ${n}/${size} = ${(n / size).toFixed(2)}`, chains: chains.map((c) => [...c]), slots: [], probeTrail: [], loadFactor: n / size });
  }
  return f;
}

function buildProbing(keys: number[], size: number): Frame[] {
  const f: Frame[] = [];
  const slots: (number | null)[] = Array(size).fill(null);
  let n = 0;
  f.push({ line: 0, vars: { tableSize: size }, message: `Empty table of size ${size} (linear probing)`, chains: [], slots: [...slots], probeTrail: [], loadFactor: 0 });
  for (const k of keys) {
    if (n >= size) {
      f.push({ line: 0, vars: { key: k, err: "full" }, message: `Table full — cannot insert ${k}`, chains: [], slots: [...slots], probeTrail: [], loadFactor: 1, currentKey: k });
      continue;
    }
    f.push({ line: 0, vars: { key: k }, message: `Insert key ${k}`, chains: [], slots: [...slots], probeTrail: [], loadFactor: n / size, currentKey: k });
    const h = ((k % size) + size) % size;
    f.push({ line: 1, vars: { key: k, h, formula: `${k} mod ${size} = ${h}` }, highlightKey: "h", message: `Hash: ${k} mod ${size} = ${h}`, chains: [], slots: [...slots], probeTrail: [], cursor: h, loadFactor: n / size, currentKey: k });
    f.push({ line: 2, vars: { i: 0 }, message: "Start probing with i = 0", chains: [], slots: [...slots], probeTrail: [], cursor: h, loadFactor: n / size, currentKey: k });
    let i = 0;
    const trail: number[] = [];
    while (i < size) {
      const pos = (h + i) % size;
      trail.push(pos);
      if (slots[pos] === null) {
        f.push({ line: 3, vars: { i, pos, "slot": "empty" }, message: `slot[${pos}] empty — place ${k} here`, chains: [], slots: [...slots], probeTrail: [...trail], cursor: pos, loadFactor: n / size, currentKey: k });
        slots[pos] = k;
        n++;
        f.push({ line: 6, vars: { pos, value: k }, highlightKey: "pos", message: `Placed ${k} at index ${pos}`, chains: [], slots: [...slots], probeTrail: [...trail], cursor: pos, justInserted: pos, loadFactor: n / size, currentKey: k });
        break;
      } else if (slots[pos] === k) {
        f.push({ line: 4, vars: { i, pos, existing: k }, message: `slot[${pos}] already has ${k} — skip`, chains: [], slots: [...slots], probeTrail: [...trail], cursor: pos, loadFactor: n / size, currentKey: k });
        break;
      } else {
        f.push({ line: 3, vars: { i, pos, existing: slots[pos] ?? "null" }, message: `slot[${pos}] occupied by ${slots[pos]} — collision, probe next`, chains: [], slots: [...slots], probeTrail: [...trail], cursor: pos, loadFactor: n / size, currentKey: k });
        i++;
        f.push({ line: 5, vars: { i }, highlightKey: "i", message: `Advance probe: i = ${i}, next pos = ${(h + i) % size}`, chains: [], slots: [...slots], probeTrail: [...trail], cursor: (h + i) % size, loadFactor: n / size, currentKey: k });
      }
    }
  }
  return f;
}

function parseKeys(s: string): number[] {
  return s.split(/[,\s]+/).map((x) => Number(x.trim())).filter((x) => !Number.isNaN(x));
}

/* ------------------------------------------------------------------ */
/*  Hash table viz                                                       */
/* ------------------------------------------------------------------ */

function HashViz({ frame, strategy, size }: { frame: Frame; strategy: Strategy; size: number }) {
  const BUCKET_W = 58;
  const BUCKET_H = 54;
  const tableW = size * (BUCKET_W + 8);

  return (
    <div className="overflow-x-auto">
      <svg
        width={Math.max(520, tableW + 60)}
        height={strategy === "chaining" ? 400 : 260}
        style={{ display: "block", margin: "0 auto" }}
      >
        <defs>
          <marker id="ar-hh" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M0,0 L10,5 L0,10 z" fill={THEME.accent} />
          </marker>
        </defs>

        {/* Hash function box */}
        <rect x={20} y={20} width={240} height={50} rx={8}
          fill={`${THEME.accent}10`} stroke={THEME.accent} strokeWidth={2} />
        <text x={140} y={40} textAnchor="middle"
          style={{ fontSize: 11, fontWeight: 700, fill: THEME.accent, fontFamily: THEME.heading }}>
          h(key) = key mod {size}
        </text>
        <text x={140} y={58} textAnchor="middle"
          style={{ fontSize: 12, fontWeight: 700, fill: THEME.text, fontFamily: THEME.mono }}>
          {frame.currentKey !== undefined
            ? `${frame.currentKey} mod ${size} = ${((frame.currentKey % size) + size) % size}`
            : "(awaiting key)"}
        </text>

        {/* Arrow from hash box to highlighted bucket */}
        {frame.cursor !== undefined && (
          <line x1={140} y1={74}
            x2={30 + frame.cursor * (BUCKET_W + 8) + BUCKET_W / 2} y2={100}
            stroke={THEME.accent} strokeWidth={2} markerEnd="url(#ar-hh)"
            style={{ transition: "all 0.3s" }} />
        )}

        {/* Table buckets */}
        {Array.from({ length: size }).map((_, i) => {
          const x = 30 + i * (BUCKET_W + 8);
          const y = 110;
          const highlighted = frame.cursor === i;
          const justIns = frame.justInserted === i;
          const stroke = justIns ? "#10b981" : highlighted ? "#3b82f6" : THEME.border;
          const bg = justIns ? "rgba(16,185,129,0.15)" : highlighted ? "rgba(59,130,246,0.12)" : THEME.bg;

          if (strategy === "chaining") {
            const items = frame.chains[i] || [];
            return (
              <g key={i}>
                <rect x={x} y={y} width={BUCKET_W} height={BUCKET_H} rx={6}
                  fill={bg} stroke={stroke} strokeWidth={2} style={{ transition: "all 0.3s" }} />
                <text x={x + BUCKET_W / 2} y={y + BUCKET_H / 2 + 5} textAnchor="middle"
                  style={{ fontSize: 14, fontWeight: 700, fill: items.length === 0 ? THEME.textMuted : THEME.text, fontFamily: THEME.mono }}>
                  {items.length === 0 ? "∅" : `[${i}]`}
                </text>
                <text x={x + BUCKET_W / 2} y={y - 4} textAnchor="middle"
                  style={{ fontSize: 10, fill: THEME.textMuted, fontWeight: 700, fontFamily: THEME.mono }}>
                  {i}
                </text>
                {items.map((v, j) => (
                  <g key={j}>
                    <line x1={x + BUCKET_W / 2} y1={y + BUCKET_H + j * 44 + 4}
                      x2={x + BUCKET_W / 2} y2={y + BUCKET_H + j * 44 + 18}
                      stroke={THEME.textMuted} strokeWidth={1.5} markerEnd="url(#ar-hh)" />
                    <rect x={x + 4} y={y + BUCKET_H + j * 44 + 20} width={BUCKET_W - 8} height={30} rx={5}
                      fill={`${THEME.accent}10`} stroke={THEME.accent} strokeWidth={1.6}
                      style={{ transition: "all 0.3s" }} />
                    <text x={x + BUCKET_W / 2} y={y + BUCKET_H + j * 44 + 40} textAnchor="middle"
                      style={{ fontSize: 12, fontWeight: 700, fill: THEME.accent, fontFamily: THEME.mono }}>
                      {v}
                    </text>
                  </g>
                ))}
              </g>
            );
          } else {
            const v = frame.slots[i];
            const inTrail = frame.probeTrail.includes(i);
            const probeIdx = frame.probeTrail.indexOf(i);
            const trailStroke = inTrail ? "#f59e0b" : stroke;
            const trailBg = inTrail && !justIns ? "rgba(245,158,11,0.14)" : bg;
            return (
              <g key={i}>
                <rect x={x} y={y} width={BUCKET_W} height={BUCKET_H} rx={6}
                  fill={trailBg} stroke={trailStroke} strokeWidth={2} style={{ transition: "all 0.3s" }} />
                <text x={x + BUCKET_W / 2} y={y + BUCKET_H / 2 + 5} textAnchor="middle"
                  style={{ fontSize: 14, fontWeight: 700, fill: v === null ? THEME.textMuted : THEME.text, fontFamily: THEME.mono }}>
                  {v === null ? "∅" : v}
                </text>
                <text x={x + BUCKET_W / 2} y={y - 4} textAnchor="middle"
                  style={{ fontSize: 10, fill: THEME.textMuted, fontWeight: 700, fontFamily: THEME.mono }}>
                  {i}
                </text>
                {probeIdx > 0 && (
                  <text x={x + BUCKET_W / 2} y={y + BUCKET_H + 14} textAnchor="middle"
                    style={{ fontSize: 9, fill: "#f59e0b", fontWeight: 700, fontFamily: THEME.heading }}>
                    probe +{probeIdx}
                  </text>
                )}
              </g>
            );
          }
        })}
      </svg>

      {/* Load factor gauge */}
      <div className="mt-3 flex justify-center items-center gap-3">
        <div className="text-[10px] font-mono uppercase tracking-widest text-stone-500">Load factor α</div>
        <div className="relative overflow-hidden rounded-md border border-stone-200 dark:border-white/10" style={{ width: 200, height: 12 }}>
          <div
            className="absolute left-0 top-0 bottom-0 transition-all"
            style={{
              width: `${Math.min(100, (frame?.loadFactor ?? 0) * 100)}%`,
              background: (frame?.loadFactor ?? 0) > 0.75 ? "#ef4444" : (frame?.loadFactor ?? 0) > 0.5 ? "#f59e0b" : "#10b981",
            }}
          />
        </div>
        <div className="text-sm font-bold font-mono text-stone-900 dark:text-stone-50 min-w-14">
          {(frame?.loadFactor ?? 0).toFixed(2)}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Visualize                                                           */
/* ------------------------------------------------------------------ */

function VisualizeTab() {
  const [strategy, setStrategy] = useState<Strategy>("chaining");
  const [keysStr, setKeysStr] = useState("23, 13, 18, 3, 8, 28");
  const [size, setSize] = useState(7);

  const keys = parseKeys(keysStr);
  const frames = useMemo(
    () => strategy === "chaining" ? buildChaining(keys, size) : buildProbing(keys, size),
    [strategy, keysStr, size],
  );
  const player = useStepPlayer(frames);
  const frame = player.current;
  const pseudo = strategy === "chaining" ? PSEUDO_CHAIN : PSEUDO_PROBE;

  return (
    <AlgoCanvas
      title={`Hashing — ${strategy === "chaining" ? "Separate Chaining" : "Linear Probing"}`}
      player={player}
      input={
        <div className="flex flex-col gap-3">
          <div className="flex gap-1.5 flex-wrap">
            {(["chaining", "probing"] as Strategy[]).map((s) => (
              <PillButton key={s} onClick={() => setStrategy(s)} active={strategy === s}>
                <span className="text-xs">{s === "chaining" ? "Separate Chaining" : "Linear Probing"}</span>
              </PillButton>
            ))}
          </div>
          <InputEditor
            label="Keys to insert"
            value={keysStr}
            placeholder="e.g. 23, 13, 18, 3"
            helper="Integer keys, comma or space separated"
            presets={[
              { label: "Collisions", value: "3, 10, 17, 24, 31" },
              { label: "Mixed", value: "23, 13, 18, 3, 8, 28" },
              { label: "Sparse", value: "5, 19, 33" },
              { label: "Heavy probing", value: "7, 14, 21, 28, 35, 42" },
            ]}
            onApply={setKeysStr}
            onRandom={() => {
              const n = 5 + Math.floor(Math.random() * 4);
              setKeysStr(Array.from({ length: n }, () => Math.floor(Math.random() * 80) + 1).join(", "));
            }}
          />
          <label className="flex items-center gap-2 text-xs text-stone-500 font-medium">
            Table size:
            <input type="number" value={size} onChange={(e) => setSize(Math.max(2, Math.min(13, Number(e.target.value) || 2)))}
              min={2} max={13}
              className="w-16 px-2 py-1 border border-stone-200 dark:border-white/10 rounded-md font-mono text-sm bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-50" />
          </label>
        </div>
      }
      pseudocode={<PseudocodePanel lines={pseudo} activeLine={frame?.line} />}
      variables={<VariablesPanel vars={frame?.vars ?? {}} flashKeys={frame?.highlightKey ? [frame.highlightKey] : []} />}
    >
      <div className="flex flex-col items-center gap-4">
        {frame && <HashViz frame={frame} strategy={strategy} size={size} />}
        <Callout className="w-full">{frame?.message ?? "Press play to step through."}</Callout>
      </div>
    </AlgoCanvas>
  );
}

/* ------------------------------------------------------------------ */
/*  Learn                                                               */
/* ------------------------------------------------------------------ */

function LearnTab() {
  const cards = [
    { t: "Hash function", b: "A deterministic map from keys to array indices. 'key mod size' is the simplest. Good hash functions distribute keys uniformly across buckets." },
    { t: "Collisions are inevitable", b: "By pigeonhole: if you have more keys than buckets, two keys must collide. Hash tables handle this, not avoid it." },
    { t: "Separate chaining", b: "Each bucket holds a linked list. Collisions append to the list. Simple, lookup = O(1 + α) on average. Wastes some pointer memory." },
    { t: "Linear probing (open addressing)", b: "On collision, try next slot, then next, then next. Keys live in the table itself — cache-friendly. Performance degrades sharply when α → 1." },
    { t: "Load factor α = n / size", b: "The occupancy ratio. For chaining α can exceed 1. For probing you want α ≤ 0.7 — above that, resize and rehash everything." },
  ];
  return (
    <div className="flex flex-col gap-5">
      <div>
        <SectionEyebrow>why hashing matters</SectionEyebrow>
        <SectionTitle>O(1) lookups under the hood of every map</SectionTitle>
        <Lede>
          Hash tables turn search from O(log n) (BST) into O(1) amortized. Every modern language has
          one built in: Python <InlineCode>dict</InlineCode>, Java{" "}
          <InlineCode>HashMap</InlineCode>, C++ <InlineCode>unordered_map</InlineCode>, JavaScript{" "}
          <InlineCode>Map/Object</InlineCode>. When your interviewer says "do it in one pass", 90% of
          the time the answer involves a hash.
        </Lede>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {cards.map((c, i) => (
          <Card key={i}>
            <div className="text-[10px] font-mono font-bold text-lime-600 dark:text-lime-400 mb-2 tracking-widest">0{i + 1}</div>
            <div className="text-sm font-bold text-stone-900 dark:text-stone-50 mb-1">{c.t}</div>
            <div className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">{c.b}</div>
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
  const probs = [
    { q: "Table size 7. Keys: 50, 700, 76, 85, 92, 73, 101. Compute 50 mod 7 and 700 mod 7.", a: "50→1, 700→0" },
    { q: "With linear probing, keys 10, 20, 30 into size 5. Where does 20 land?", a: "Index 1 (10→0, 20 probes 0, then lands at 1)" },
    { q: "Table size 11, separate chaining, 33 keys inserted uniformly. Load factor?", a: "33/11 = 3.0" },
    { q: "Why is probing poor when α > 0.7?", a: "Primary clustering — long runs cause every probe to visit many occupied cells, turning O(1) into O(n)" },
  ];
  const [guess, setGuess] = useState<(string | null)[]>(probs.map(() => null));
  const [show, setShow] = useState<boolean[]>(probs.map(() => false));
  return (
    <div className="flex flex-col gap-3">
      <Callout>Work on paper, then reveal.</Callout>
      {probs.map((p, i) => (
        <Card key={i}>
          <div className="text-sm text-stone-800 dark:text-stone-200 mb-3">#{i + 1} {p.q}</div>
          <div className="flex gap-2 items-center flex-wrap">
            <input
              value={guess[i] ?? ""}
              onChange={(e) => { const v = [...guess]; v[i] = e.target.value; setGuess(v); }}
              placeholder="your answer"
              className="px-3 py-1.5 border border-stone-200 dark:border-white/10 rounded-md font-mono text-sm bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-50 min-w-64"
            />
            <button
              type="button"
              onClick={() => { const v = [...show]; v[i] = true; setShow(v); }}
              className="px-3 py-1.5 border border-stone-200 dark:border-white/10 rounded-md text-xs font-medium bg-white dark:bg-stone-900 text-stone-600 dark:text-stone-400 cursor-pointer hover:border-stone-400 dark:hover:border-white/30 transition-colors"
            >
              Reveal
            </button>
            {show[i] && (
              <span className="text-xs font-bold px-3 py-1.5 rounded-md bg-lime-50 dark:bg-lime-400/10 text-lime-800 dark:text-lime-200 border border-lime-400">
                Answer: {p.a}
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
    <div className="flex flex-col gap-4">
      <Card>
        <SubHeading>Why prime table sizes?</SubHeading>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          With 'key mod size', if size has many divisors (like powers of 2), input keys sharing those
          divisors collide systematically. A prime has no small divisors — the modulo spreads keys more
          evenly. Java's HashMap uses power-of-two sizes + a bit-mixing step to compensate.
        </p>
      </Card>
      <Card>
        <SubHeading>Where hashing wins in interviews</SubHeading>
        <ul className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed space-y-1 pl-4 list-disc">
          <li>Two-sum: seen-set of complements</li>
          <li>Longest substring without repeating characters</li>
          <li>Group anagrams (hash by sorted key)</li>
          <li>Subarray sum equals K (prefix-sum hash)</li>
          <li>LRU cache (hash + doubly-linked list)</li>
        </ul>
      </Card>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Root                                                                */
/* ------------------------------------------------------------------ */

interface Props {
  onQuizComplete?: (score: number) => void;
}

export default function L2_Hashing({ onQuizComplete }: Props) {
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
      question: "A hash table of size 10 uses h(k) = k mod 10. Inserting keys 15 and 25 using separate chaining, where do they land?",
      options: ["Both at index 5", "15 at 1, 25 at 5", "15 at 5, 25 at 6 (probe)", "Rehashing triggered"],
      correctIndex: 0,
      explanation: "Both 15 mod 10 and 25 mod 10 equal 5. With chaining, both end up in the linked list at bucket 5.",
    },
    {
      question: "Primary clustering is a weakness of which collision resolution method?",
      options: ["Separate chaining", "Linear probing", "Quadratic probing", "Double hashing"],
      correctIndex: 1,
      explanation: "Linear probing creates contiguous runs of filled cells that grow and merge — future insertions must traverse these runs, degrading performance.",
    },
    {
      question: "In a hash table with separate chaining, n keys and m buckets, average search cost is?",
      options: ["O(1)", "O(log n)", "O(1 + α) where α = n/m", "O(n)"],
      correctIndex: 2,
      explanation: "Expected chain length equals the load factor α. Lookup scans one chain + the O(1) hash → O(1 + α).",
    },
    {
      question: "Why is 'mod prime' preferred for hash-table sizes?",
      options: [
        "Prime sizes use less memory",
        "They allow negative keys",
        "They minimize systematic collisions when keys share factors",
        "They force chaining",
      ],
      correctIndex: 2,
      explanation: "Composite sizes (especially powers of 2 without extra mixing) map keys sharing factors to the same bucket. Primes have no small divisors, spreading keys evenly.",
    },
  ];

  return (
    <LessonShell
      title="Hashing"
      level={2}
      lessonNumber={6}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="Hash maps power two-sum, group-anagrams, LRU cache — almost every interview uses one."
      nextLessonHint="Binary Tree Traversals"
      onQuizComplete={onQuizComplete}
    />
  );
}

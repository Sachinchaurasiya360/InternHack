import { useMemo, useState } from "react";
import { BookOpen, Code2, Flag, Lightbulb, Play, Target } from "lucide-react";
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
  InlineCode,
  Lede,
  PillButton,
  SectionEyebrow,
  SectionTitle,
  SubHeading,
  THEME,
} from "../../../../../components/dsa-theory/primitives";
import { PracticeTab } from "../PracticeTab";

const PRACTICE_TOPIC_SLUG: string | null = "trie";

/* ------------------------------------------------------------------ */
/*  Local CellState + color map                                         */
/* ------------------------------------------------------------------ */

type CellState = "idle" | "active" | "visited" | "done" | "mismatch" | "match" | "frontier" | "path";

const STATE_COLOR: Record<CellState, string> = {
  idle: THEME.bg,
  active: "#a3e635",
  visited: "#d1fae5",
  done: "#86efac",
  mismatch: "#fca5a5",
  match: "#6ee7b7",
  frontier: "#fde68a",
  path: "#bfdbfe",
};

const STATE_BORDER: Record<CellState, string> = {
  idle: THEME.border,
  active: "#65a30d",
  visited: "#34d399",
  done: "#22c55e",
  mismatch: "#f87171",
  match: "#10b981",
  frontier: "#f59e0b",
  path: "#3b82f6",
};

/* ------------------------------------------------------------------ */
/*  Trie data                                                           */
/* ------------------------------------------------------------------ */

interface TrieNode {
  id: string;
  children: Record<string, string>;
  end: boolean;
}
type Trie = Record<string, TrieNode>;

let NID = 1;
function mkNode(): TrieNode { return { id: `t${NID++}`, children: {}, end: false }; }
function cloneTrie(t: Trie): Trie {
  const o: Trie = {};
  Object.values(t).forEach((n) => { o[n.id] = { id: n.id, children: { ...n.children }, end: n.end }; });
  return o;
}

interface Frame {
  line: number;
  trie: Trie;
  rootId: string;
  nodeStates: Record<string, CellState>;
  edgeStates: Record<string, CellState>;
  highlightEdge: string | null;
  message: string;
  vars: Record<string, string | number | undefined>;
}

function insertWord(t: Trie, rootId: string, word: string, frames: Frame[]) {
  let cur = rootId;
  frames.push({
    line: 0, trie: cloneTrie(t), rootId, nodeStates: { [cur]: "active" }, edgeStates: {},
    highlightEdge: null, message: `Insert "${word}" — start at root.`, vars: { word, pos: 0 },
  });
  for (let i = 0; i < word.length; i++) {
    const ch = word[i];
    const has = t[cur].children[ch];
    frames.push({
      line: 1, trie: cloneTrie(t), rootId, nodeStates: { [cur]: "active" }, edgeStates: {},
      highlightEdge: null,
      message: `Looking for edge "${ch}" from current node.`,
      vars: { word, pos: i, char: ch, exists: has ? "yes" : "no" },
    });
    let nextId: string;
    if (has) {
      nextId = has;
      frames.push({
        line: 2, trie: cloneTrie(t), rootId,
        nodeStates: { [cur]: "visited", [nextId]: "active" },
        edgeStates: { [`${cur}-${nextId}`]: "match" },
        highlightEdge: `${cur}-${nextId}`,
        message: `Edge "${ch}" exists — follow it.`,
        vars: { word, pos: i + 1, char: ch },
      });
    } else {
      const nn = mkNode();
      t[nn.id] = nn;
      t[cur].children[ch] = nn.id;
      nextId = nn.id;
      frames.push({
        line: 3, trie: cloneTrie(t), rootId,
        nodeStates: { [cur]: "visited", [nextId]: "active" },
        edgeStates: { [`${cur}-${nextId}`]: "frontier" },
        highlightEdge: `${cur}-${nextId}`,
        message: `Edge "${ch}" missing — create new node.`,
        vars: { word, pos: i + 1, char: ch, created: "yes" },
      });
    }
    cur = nextId;
  }
  t[cur].end = true;
  frames.push({
    line: 4, trie: cloneTrie(t), rootId,
    nodeStates: { [cur]: "done" }, edgeStates: {},
    highlightEdge: null,
    message: `Mark node as end-of-word. "${word}" inserted.`,
    vars: { word, inserted: "yes" },
  });
}

function searchWord(t: Trie, rootId: string, word: string, frames: Frame[]) {
  let cur = rootId;
  frames.push({
    line: 0, trie: cloneTrie(t), rootId,
    nodeStates: { [cur]: "active" }, edgeStates: {}, highlightEdge: null,
    message: `Search "${word}" — start at root.`, vars: { word, pos: 0 },
  });
  for (let i = 0; i < word.length; i++) {
    const ch = word[i];
    const has = t[cur].children[ch];
    if (!has) {
      frames.push({
        line: 2, trie: cloneTrie(t), rootId,
        nodeStates: { [cur]: "mismatch" }, edgeStates: {}, highlightEdge: null,
        message: `No edge "${ch}" — "${word}" is NOT in the trie.`,
        vars: { word, pos: i, result: "not found" },
      });
      return;
    }
    frames.push({
      line: 1, trie: cloneTrie(t), rootId,
      nodeStates: { [cur]: "visited", [has]: "active" },
      edgeStates: { [`${cur}-${has}`]: "match" },
      highlightEdge: `${cur}-${has}`,
      message: `Follow edge "${ch}".`,
      vars: { word, pos: i + 1, char: ch },
    });
    cur = has;
  }
  frames.push({
    line: 3, trie: cloneTrie(t), rootId,
    nodeStates: { [cur]: t[cur].end ? "done" : "mismatch" },
    edgeStates: {}, highlightEdge: null,
    message: t[cur].end
      ? `"${word}" found — node is end-of-word.`
      : `Reached node but it is NOT an end-of-word marker — only a prefix.`,
    vars: { word, result: t[cur].end ? "found" : "prefix only" },
  });
}

function prefixCollect(t: Trie, rootId: string, prefix: string, frames: Frame[]) {
  let cur = rootId;
  frames.push({
    line: 0, trie: cloneTrie(t), rootId,
    nodeStates: { [cur]: "active" }, edgeStates: {}, highlightEdge: null,
    message: `Prefix search "${prefix}".`, vars: { prefix, pos: 0 },
  });
  for (let i = 0; i < prefix.length; i++) {
    const ch = prefix[i];
    const has = t[cur].children[ch];
    if (!has) {
      frames.push({
        line: 2, trie: cloneTrie(t), rootId,
        nodeStates: { [cur]: "mismatch" }, edgeStates: {}, highlightEdge: null,
        message: `No edge "${ch}" — no words share prefix "${prefix}".`,
        vars: { prefix, result: "none" },
      });
      return;
    }
    frames.push({
      line: 1, trie: cloneTrie(t), rootId,
      nodeStates: { [cur]: "visited", [has]: "active" },
      edgeStates: { [`${cur}-${has}`]: "match" },
      highlightEdge: `${cur}-${has}`,
      message: `Follow edge "${ch}".`,
      vars: { prefix, pos: i + 1 },
    });
    cur = has;
  }
  const subtree: Record<string, CellState> = { [cur]: "done" };
  const edges: Record<string, CellState> = {};
  const words: string[] = [];
  function dfs(nid: string, acc: string) {
    if (t[nid].end) words.push(acc);
    for (const [c, child] of Object.entries(t[nid].children)) {
      subtree[child] = "path";
      edges[`${nid}-${child}`] = "path";
      dfs(child, acc + c);
    }
  }
  dfs(cur, prefix);
  frames.push({
    line: 4, trie: cloneTrie(t), rootId,
    nodeStates: subtree, edgeStates: edges, highlightEdge: null,
    message: `Words with prefix "${prefix}": [${words.join(", ") || "none"}]`,
    vars: { prefix, count: words.length },
  });
}

const PSEUDO_INSERT = [
  "function insert(root, word):",
  "  cur ← root",
  "  for ch in word:",
  "    if cur.children[ch] exists: cur ← cur.children[ch]",
  "    else: cur.children[ch] ← new Node; cur ← cur.children[ch]",
  "  cur.end ← true",
];

const PSEUDO_SEARCH = [
  "function search(root, word):",
  "  cur ← root",
  "  for ch in word:",
  "    if not cur.children[ch]: return false",
  "    cur ← cur.children[ch]",
  "  return cur.end",
];

const PSEUDO_PREFIX = [
  "function startsWith(root, prefix):",
  "  walk edges for each ch of prefix",
  "  if any edge missing: return none",
  "  DFS from current node",
  "  collect every end-of-word descendant",
];

type Op = "insert" | "search" | "prefix";

function buildFrames(words: string[], op: Op, query: string): Frame[] {
  NID = 1;
  const trie: Trie = {};
  const root = mkNode();
  trie[root.id] = root;
  for (const w of words) {
    let cur = root.id;
    for (const ch of w) {
      if (!trie[cur].children[ch]) {
        const nn = mkNode();
        trie[nn.id] = nn;
        trie[cur].children[ch] = nn.id;
      }
      cur = trie[cur].children[ch];
    }
    trie[cur].end = true;
  }
  const frames: Frame[] = [];
  frames.push({
    line: 0, trie: cloneTrie(trie), rootId: root.id,
    nodeStates: {}, edgeStates: {}, highlightEdge: null,
    message: `Trie with ${words.length} pre-inserted word(s): [${words.join(", ")}]. Op: ${op}("${query}").`,
    vars: { op, query, words: words.length },
  });
  if (op === "insert") insertWord(trie, root.id, query, frames);
  else if (op === "search") searchWord(trie, root.id, query, frames);
  else prefixCollect(trie, root.id, query, frames);
  return frames;
}

/* ------------------------------------------------------------------ */
/*  Custom Trie SVG                                                     */
/* ------------------------------------------------------------------ */

interface Placed { id: string; x: number; y: number; char?: string }

function layoutTrie(
  t: Trie,
  rootId: string,
  width: number,
  height: number,
): { placed: Record<string, Placed>; maxDepth: number } {
  let maxDepth = 0;
  function getDepth(id: string, d: number) {
    maxDepth = Math.max(maxDepth, d);
    for (const child of Object.values(t[id].children)) getDepth(child, d + 1);
  }
  getDepth(rootId, 0);
  const placed: Record<string, Placed> = {};
  let counter = 0;
  function assign(id: string, d: number, parentChar?: string) {
    const entries = Object.entries(t[id].children).sort();
    if (entries.length === 0) {
      placed[id] = { id, x: counter++, y: d, char: parentChar };
      return;
    }
    const xs: number[] = [];
    for (const [ch, cid] of entries) {
      assign(cid, d + 1, ch);
      xs.push(placed[cid].x);
    }
    placed[id] = { id, x: (xs[0] + xs[xs.length - 1]) / 2, y: d, char: parentChar };
  }
  assign(rootId, 0);
  const total = counter;
  const xStep = total > 1 ? (width - 60) / (total - 1) : 0;
  const yStep = maxDepth === 0 ? 0 : (height - 60) / maxDepth;
  Object.values(placed).forEach((p) => {
    p.x = 30 + p.x * xStep;
    p.y = 30 + p.y * yStep;
  });
  return { placed, maxDepth };
}

function TrieSVG({ frame, width = 620, height = 320 }: { frame: Frame; width?: number; height?: number }) {
  const { placed } = layoutTrie(frame.trie, frame.rootId, width, height);
  const edges: { from: string; to: string; char: string; key: string }[] = [];
  Object.values(frame.trie).forEach((n) => {
    for (const [ch, cid] of Object.entries(n.children)) {
      edges.push({ from: n.id, to: cid, char: ch, key: `${n.id}-${cid}` });
    }
  });
  const R = 18;
  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      style={{ width: "100%", height: "auto", maxHeight: height }}
    >
      {edges.map(({ from, to, char, key }) => {
        const a = placed[from], b = placed[to];
        if (!a || !b) return null;
        const st = frame.edgeStates[key] as CellState | undefined;
        const col = st ? STATE_BORDER[st] : THEME.border;
        const mx = (a.x + b.x) / 2, my = (a.y + b.y) / 2;
        return (
          <g key={key}>
            <line
              x1={a.x} y1={a.y + R} x2={b.x} y2={b.y - R}
              stroke={col} strokeWidth={st ? 3 : 1.8}
              style={{ transition: "stroke 0.3s, stroke-width 0.3s" }}
            />
            <rect x={mx - 10} y={my - 9} width={20} height={18} rx={4}
              fill={THEME.bg} stroke={col} strokeWidth={1.5}
            />
            <text
              x={mx} y={my + 4} textAnchor="middle"
              fontSize={11} fontWeight={800}
              fill={col}
              fontFamily={THEME.mono}
            >
              {char}
            </text>
          </g>
        );
      })}
      {Object.values(placed).map((p) => {
        const n = frame.trie[p.id];
        const st = frame.nodeStates[p.id] as CellState | undefined;
        const col = st ? STATE_BORDER[st] : (p.id === frame.rootId ? THEME.textMuted : THEME.accent);
        const fill = st ? STATE_COLOR[st] : (p.id === frame.rootId ? "#e7e5e4" : "#ecfccb");
        return (
          <g key={p.id}>
            <circle
              cx={p.x} cy={p.y} r={R}
              fill={fill} stroke={col} strokeWidth={3}
              style={{ transition: "fill 0.3s, stroke 0.3s" }}
            />
            {n.end && (
              <g transform={`translate(${p.x + R - 4}, ${p.y - R - 2})`}>
                <circle r={7} fill={THEME.success} stroke="#ffffff" strokeWidth={1.5} />
                <text textAnchor="middle" y={3} fontSize={9} fontWeight={900} fill="#ffffff">
                  ★
                </text>
              </g>
            )}
            {p.id === frame.rootId && (
              <text
                x={p.x} y={p.y + 3} textAnchor="middle"
                fontSize={9} fontWeight={700} fill={THEME.textMuted}
              >
                root
              </text>
            )}
          </g>
        );
      })}
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Visualize tab                                                       */
/* ------------------------------------------------------------------ */

function VisualizeTab() {
  const [wordsInput, setWordsInput] = useState("cat, car, cart, dog, do, done");
  const [op, setOp] = useState<Op>("search");
  const [query, setQuery] = useState("cart");

  const words = useMemo(
    () => wordsInput.split(/[,\s]+/).map((w) => w.trim().toLowerCase()).filter(Boolean),
    [wordsInput],
  );
  const frames = useMemo(() => buildFrames(words, op, query.toLowerCase()), [words, op, query]);
  const player = useStepPlayer(frames);
  const frame = player.current;

  const pseudo = op === "insert" ? PSEUDO_INSERT : op === "search" ? PSEUDO_SEARCH : PSEUDO_PREFIX;

  return (
    <AlgoCanvas
      title={`Trie — ${op} "${query}"`}
      player={player}
      input={
        <div className="flex flex-col gap-3">
          <InputEditor
            label="Initial words (comma separated)"
            value={wordsInput}
            placeholder="e.g. cat, car, cart"
            helper="Words are pre-inserted. Then the chosen op runs."
            presets={[
              { label: "Car/Cat", value: "cat, car, cart, dog, do, done" },
              { label: "Team", value: "ten, tea, team, tee, tree" },
              { label: "App", value: "app, apple, apply, april, apt" },
            ]}
            onApply={(v) => setWordsInput(v)}
          />
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
              / operation
            </label>
            <div className="flex flex-wrap gap-1.5">
              {(["insert", "search", "prefix"] as Op[]).map((m) => (
                <PillButton key={m} active={op === m} onClick={() => setOp(m)}>
                  <span className="text-[11px] font-semibold capitalize">
                    {m === "prefix" ? "Prefix search" : m}
                  </span>
                </PillButton>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
              / {op === "prefix" ? "prefix" : "word"}
            </label>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-40 px-3 py-1.5 border border-stone-300 dark:border-white/10 rounded-md text-sm font-mono bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-50 outline-none"
            />
          </div>
        </div>
      }
      pseudocode={<PseudocodePanel lines={pseudo} activeLine={frame?.line} />}
      variables={<VariablesPanel vars={frame?.vars ?? {}} />}
    >
      <div className="flex flex-col gap-3">
        <div className="rounded-md border border-stone-200 dark:border-white/10 bg-stone-50 dark:bg-stone-950 p-2 overflow-x-auto">
          {frame && <TrieSVG frame={frame} width={620} height={310} />}
        </div>
        <div className="flex items-center gap-2 text-xs text-stone-500">
          <Flag className="w-3 h-3 text-lime-600" />
          <span>end-of-word marker (★) · edges labeled with characters</span>
        </div>
        <Callout className="w-full">{frame?.message ?? "Press play to step through the algorithm."}</Callout>
      </div>
    </AlgoCanvas>
  );
}

/* ------------------------------------------------------------------ */
/*  Learn tab                                                           */
/* ------------------------------------------------------------------ */

function LearnTab() {
  const items = [
    { title: "Edges carry characters", body: "Unlike BSTs (values live in nodes), in a trie the characters live on the edges. A path from root spells out a prefix — and if it ends at a flagged node, it spells a full word." },
    { title: "End-of-word flag", body: "A node itself does not know whether it terminates a word. The boolean end on each node marks that. This is why do and done can coexist on the same branch." },
    { title: "Prefix power", body: "Auto-complete, IP-routing tables, word filters, genome prefix search — all built on tries. Time complexity for any op is O(L) where L is the word length — independent of how many words are stored." },
    { title: "Space tradeoff", body: "Tries can use a lot of pointers (26 children per node for lowercase English). Compressed variants (radix/Patricia trees) merge chains of single-child nodes to save space." },
  ];

  return (
    <div className="flex flex-col gap-5">
      <div>
        <SectionEyebrow>the prefix tree</SectionEyebrow>
        <SectionTitle>Strings stored by sharing common prefixes</SectionTitle>
        <Lede>
          A trie stores strings by sharing common prefixes in the tree structure. Two words that
          share a prefix share that path — the branch diverges exactly where the words differ.
        </Lede>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {items.map((s, i) => (
          <div
            key={i}
            className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md p-5"
          >
            <div className="text-[10px] font-mono font-bold text-lime-600 dark:text-lime-400 mb-2 tracking-widest uppercase">
              0{i + 1}
            </div>
            <div className="font-bold text-sm text-stone-900 dark:text-stone-50 mb-1.5">{s.title}</div>
            <div className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">{s.body}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Try It tab                                                          */
/* ------------------------------------------------------------------ */

function TryTab() {
  const problems = [
    { q: "Trie stores {cat, car}. Search 'ca' — result?", a: "prefix only" },
    { q: "Store {do, done, dot}. Distinct nodes (incl. root)?", a: "6" },
    { q: "Prefix 'ap' in {app, apple, ask, april}. How many words?", a: "3" },
    { q: "Time to insert a word of length L into a trie?", a: "O(L)" },
  ];
  const [g, setG] = useState<(string | null)[]>(problems.map(() => null));
  const [s, setS] = useState<boolean[]>(problems.map(() => false));

  return (
    <div className="flex flex-col gap-3">
      <Callout>Draw each trie on paper first — the answers pop out.</Callout>
      {problems.map((p, i) => {
        const gv = (g[i] ?? "").replace(/\s+/g, "").toLowerCase();
        const correct = gv === p.a.replace(/\s+/g, "").toLowerCase();
        return (
          <div
            key={i}
            className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md p-4 flex items-center gap-3 flex-wrap"
          >
            <span className="font-bold text-xs text-stone-500 font-mono">#{i + 1}</span>
            <span className="text-sm text-stone-900 dark:text-stone-50 flex-1 min-w-0 basis-64">{p.q}</span>
            <input
              type="text"
              placeholder="answer"
              value={g[i] ?? ""}
              onChange={(e) => { const v = [...g]; v[i] = e.target.value; setG(v); }}
              className="w-40 px-3 py-1.5 border border-stone-300 dark:border-white/10 rounded-md text-sm font-mono bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-50 outline-none"
            />
            <button
              type="button"
              onClick={() => { const v = [...s]; v[i] = true; setS(v); }}
              className="px-3 py-1.5 rounded-md border border-stone-300 dark:border-white/10 text-xs font-bold bg-stone-50 dark:bg-stone-900 text-stone-600 dark:text-stone-400 cursor-pointer hover:border-stone-500 dark:hover:border-white/30 transition-colors"
            >
              Reveal
            </button>
            {s[i] && (
              <span
                className={`text-xs font-bold px-3 py-1.5 rounded-md ${
                  correct
                    ? "bg-lime-50 dark:bg-lime-400/10 text-lime-800 dark:text-lime-200 border border-lime-400"
                    : "bg-rose-50 dark:bg-rose-500/10 text-rose-800 dark:text-rose-200 border border-rose-400"
                }`}
              >
                {correct ? "Correct" : `Answer: ${p.a}`}
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Insight tab                                                         */
/* ------------------------------------------------------------------ */

function InsightTab() {
  return (
    <div className="flex flex-col gap-4">
      <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md p-5">
        <SubHeading>Why not a hash-set of strings?</SubHeading>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          Hashing checks exact membership in O(L) average, but fails at prefix queries, ordered
          iteration, and auto-complete. Tries give you all three for the same O(L) cost.
        </p>
      </div>
      <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md p-5">
        <SubHeading>Space engineering</SubHeading>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          A naive trie stores an array of 26 pointers per node — most are null. Options: use a hash
          map per node (saves memory, slower constant), or switch to a radix tree that collapses
          single-child chains into edges labeled with strings.
        </p>
      </div>
      <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md p-5">
        <SubHeading>Where you will meet them</SubHeading>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          Auto-complete in search boxes, IDE symbol lookup, IP routing (longest-prefix match),
          Aho-Corasick multi-pattern matching, and competitive programming (word-square problems).
        </p>
      </div>
      <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md p-5">
        <SubHeading>Trie node implementation choices</SubHeading>
        <ul className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed list-disc pl-5 space-y-1.5">
          <li>
            <strong className="text-stone-900 dark:text-stone-50">Array of 26:</strong> O(1) child
            lookup, O(26·n) space. Fine for lowercase English.
          </li>
          <li>
            <strong className="text-stone-900 dark:text-stone-50">HashMap per node:</strong> O(1)
            average, space proportional to actual children. Better for large alphabets (Unicode).
          </li>
          <li>
            <strong className="text-stone-900 dark:text-stone-50">Sorted array + binary search:</strong>{" "}
            O(log 26) lookup, minimal space. Used in embedded/firmware contexts.
          </li>
        </ul>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed mt-2">
          LeetCode trie problems typically ask for the array-of-26 approach. Use{" "}
          <InlineCode>children = [None] * 26</InlineCode> or{" "}
          <InlineCode>children: TrieNode[26]</InlineCode>.
        </p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Root export                                                         */
/* ------------------------------------------------------------------ */

interface Props {
  onQuizComplete?: (score: number) => void;
}

export default function L3_Tries({ onQuizComplete }: Props) {
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
      question: "Time complexity to insert a word of length L into a trie with N words (worst case)?",
      options: ["O(L)", "O(N)", "O(N + L)", "O(L · log N)"],
      correctIndex: 0,
      explanation: "Each character descends one level — independent of how many other words are already stored.",
    },
    {
      question: "Why does each trie node need an explicit end-of-word flag?",
      options: [
        "To distinguish uppercase from lowercase",
        "Because prefixes of words may not be words (e.g. 'do' vs 'done')",
        "To save memory",
        "To handle duplicates",
      ],
      correctIndex: 1,
      explanation: "Without the flag, you couldn't tell a true word from a prefix that merely leads to longer words.",
    },
    {
      question: "Best use case for a trie over a hash-set of strings:",
      options: ["Exact membership queries", "Prefix and auto-complete queries", "Sorting words", "Counting duplicates"],
      correctIndex: 1,
      explanation: "Tries give prefix queries and auto-complete for free — hash-sets cannot.",
    },
    {
      question: "For a trie over lowercase English, how many children does each node have (array representation)?",
      options: ["2", "10", "26", "256"],
      correctIndex: 2,
      explanation: "One slot per letter a-z. Radix trees compress this; hash-map nodes trade space for speed.",
    },
  ];

  return (
    <LessonShell
      title="Tries"
      level={3}
      lessonNumber={6}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="Auto-complete, routing tables, multi-pattern matching"
      nextLessonHint="Segment & Fenwick Trees"
      onQuizComplete={onQuizComplete}
    />
  );
}

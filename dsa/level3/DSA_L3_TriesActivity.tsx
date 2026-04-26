"use client";

import { useMemo, useState } from "react";
import { BookOpen, Play, Target, Lightbulb, Flag } from "lucide-react";
import EngineeringLessonShell, { EngTabDef, EngQuizQuestion } from "@/components/engineering/EngineeringLessonShell";
import {
  AlgoCanvas, PseudocodePanel, VariablesPanel, InputEditor, useStepPlayer,
} from "@/components/engineering/algo";
import type { CellState } from "@/components/engineering/algo";
import { STATE_COLOR } from "@/components/engineering/algo";
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
      line: 1, trie: cloneTrie(t), rootId,
      nodeStates: { [cur]: "active" }, edgeStates: {},
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
    message: `Words with prefix "${prefix}": [${words.join(", ") || "—"}]`,
    vars: { prefix, count: words.length },
  });
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

interface Placed { id: string; x: number; y: number; depth: number; char?: string }

function layoutTrie(t: Trie, rootId: string, width: number, height: number): { placed: Record<string, Placed>; maxDepth: number } {
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
      placed[id] = { id, x: counter++, y: d, depth: d, char: parentChar };
      return;
    }
    const xs: number[] = [];
    for (const [ch, cid] of entries) {
      assign(cid, d + 1, ch);
      xs.push(placed[cid].x);
    }
    placed[id] = { id, x: (xs[0] + xs[xs.length - 1]) / 2, y: d, depth: d, char: parentChar };
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
    <svg viewBox={`0 0 ${width} ${height}`} style={{ width: "100%", height: "auto", maxHeight: height }}>
      {edges.map(({ from, to, char, key }) => {
        const a = placed[from], b = placed[to];
        if (!a || !b) return null;
        const st = frame.edgeStates[key];
        const col = st ? STATE_COLOR[st] : C.border;
        const mx = (a.x + b.x) / 2, my = (a.y + b.y) / 2;
        return (
          <g key={key}>
            <line x1={a.x} y1={a.y + R} x2={b.x} y2={b.y - R}
              stroke={col} strokeWidth={st ? 3 : 1.8}
              style={{ transition: "stroke 0.3s, stroke-width 0.3s" }}
            />
            <rect x={mx - 10} y={my - 9} width={20} height={18} rx={4}
              fill={C.bg} stroke={col} strokeWidth={1.5}
            />
            <text x={mx} y={my + 4} textAnchor="middle"
              fontSize={11} fontWeight={800}
              fill={col}
              fontFamily={C.mono}
            >{char}</text>
          </g>
        );
      })}
      {Object.values(placed).map((p) => {
        const n = frame.trie[p.id];
        const st = frame.nodeStates[p.id];
        const col = st ? STATE_COLOR[st] : (p.id === frame.rootId ? C.textMuted : A);
        return (
          <g key={p.id}>
            <circle cx={p.x} cy={p.y} r={R}
              fill={col} stroke="#FFFFFF" strokeWidth={3}
              style={{ transition: "fill 0.3s" }}
            />
            {n.end && (
              <g transform={`translate(${p.x + R - 4}, ${p.y - R - 2})`}>
                <circle r={7} fill={C.success} stroke="#FFFFFF" strokeWidth={1.5} />
                <text textAnchor="middle" y={3} fontSize={9} fontWeight={900} fill="#FFFFFF">★</text>
              </g>
            )}
            {p.id === frame.rootId && (
              <text x={p.x} y={p.y + 3} textAnchor="middle"
                fontSize={10} fontWeight={700} fill="#FFFFFF">root</text>
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

  const words = useMemo(() => wordsInput.split(/[,\s]+/).map((w) => w.trim().toLowerCase()).filter(Boolean), [wordsInput]);
  const frames = useMemo(() => buildFrames(words, op, query.toLowerCase()), [words, op, query]);
  const player = useStepPlayer(frames);
  const frame = player.current!;

  const pseudo = op === "insert" ? PSEUDO_INSERT : op === "search" ? PSEUDO_SEARCH : PSEUDO_PREFIX;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <div style={{ display: "flex", gap: 6, flexWrap: "wrap", alignItems: "center" }}>
        {(["insert", "search", "prefix"] as Op[]).map((m) => (
          <PillButton key={m} onClick={() => setOp(m)} active={op === m} color={A}>
            <span style={{ fontSize: "0.78rem", textTransform: "capitalize" }}>
              {m === "prefix" ? "Prefix search" : m}
            </span>
          </PillButton>
        ))}
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginLeft: 8 }}>
          <span style={{ fontSize: "0.78rem", color: C.textMuted, fontWeight: 600, fontFamily: C.heading }}>
            {op === "prefix" ? "prefix:" : "word:"}
          </span>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{
              width: 140, padding: "6px 10px", borderRadius: 8,
              border: `1px solid ${C.border}`, fontFamily: C.mono, fontSize: "0.85rem",
              outline: "none", background: C.bg, color: C.text,
            }}
          />
        </div>
      </div>
      <AlgoCanvas
        title={`Trie — ${op} "${query}"`}
        player={player}
        input={
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
        }
        pseudocode={<PseudocodePanel lines={pseudo} activeLine={frame.line} />}
        variables={<VariablesPanel vars={frame.vars} />}
        legend={
          <span style={{ display: "inline-flex", gap: 10, alignItems: "center" }}>
            <Flag className="w-3 h-3" style={{ color: C.success }} /> end-of-word · edges labeled with characters
          </span>
        }
      >
        <TrieSVG frame={frame} width={620} height={310} />
      </AlgoCanvas>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Other tabs                                                          */
/* ------------------------------------------------------------------ */

function LearnTab() {
  const items = [
    { title: "Edges carry characters", body: "Unlike BSTs (values live in nodes), in a trie the characters live on the edges. A path from root spells out a prefix — and if it ends at a flagged node, it spells a full word." },
    { title: "End-of-word flag", body: "A node itself doesn't know whether it terminates a word. The boolean <code>end</code> on each node marks that. This is why <em>do</em> and <em>done</em> can coexist on the same branch." },
    { title: "Prefix power", body: "Auto-complete, IP-routing tables, word filters, genome prefix search — all built on tries. Time complexity for any op is O(L) where L is the word length — independent of how many words are stored." },
    { title: "Space tradeoff", body: "Tries can use a lot of pointers (26 children per node for lowercase English). Compressed variants (radix/Patricia trees) merge chains of single-child nodes to save space." },
  ];
  return (
    <div style={{ fontFamily: C.heading, display: "flex", flexDirection: "column", gap: 14 }}>
      <div>
        <SectionEyebrow color={A}>The prefix tree</SectionEyebrow>
        <SectionTitle>Strings stored by sharing common prefixes</SectionTitle>
        <Lede>
          A trie stores strings by sharing common prefixes in the tree structure. Two words that
          share a prefix share that path — the branch diverges exactly where the words differ.
        </Lede>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: 12 }}>
        {items.map((s, i) => (
          <Card key={i}>
            <div style={{ fontSize: "0.72rem", fontWeight: 700, color: A, marginBottom: 6, fontFamily: C.mono, letterSpacing: "0.08em" }}>0{i + 1}</div>
            <div style={{ fontWeight: 700, fontSize: "0.95rem", color: C.text, marginBottom: 4, letterSpacing: "-0.01em" }}>{s.title}</div>
            <div style={{ fontSize: "0.85rem", color: C.textSecondary, lineHeight: 1.55 }} dangerouslySetInnerHTML={{ __html: s.body }} />
          </Card>
        ))}
      </div>
    </div>
  );
}

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
    <div style={{ fontFamily: C.heading, display: "flex", flexDirection: "column", gap: 12 }}>
      <Callout accent={A}>Draw each trie on paper first — the answers pop out.</Callout>
      {problems.map((p, i) => {
        const gv = (g[i] ?? "").replace(/\s+/g, "").toLowerCase();
        const correct = gv === p.a.replace(/\s+/g, "").toLowerCase();
        return (
          <Card key={i}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
              <span style={{ fontWeight: 700, fontSize: "0.85rem", color: C.textMuted, fontFamily: C.mono }}>#{i + 1}</span>
              <span style={{ fontSize: "0.9rem", flex: "1 1 260px", color: C.text }}>{p.q}</span>
              <input
                type="text"
                placeholder="answer"
                value={g[i] ?? ""}
                onChange={(e) => { const v = [...g]; v[i] = e.target.value; setG(v); }}
                style={{
                  width: 150, padding: "7px 10px", borderRadius: 8,
                  border: `1px solid ${C.border}`, fontFamily: C.mono, fontSize: "0.85rem",
                  outline: "none", background: C.bg, color: C.text,
                }}
              />
              <button
                onClick={() => { const v = [...s]; v[i] = true; setS(v); }}
                style={{
                  padding: "6px 14px", borderRadius: 8, fontSize: "0.78rem", fontWeight: 700,
                  border: `1px solid ${C.border}`, background: C.bg, color: C.textSecondary,
                  cursor: "pointer", fontFamily: C.heading,
                }}
              >
                Reveal
              </button>
              {s[i] && (
                <span style={{
                  fontSize: "0.82rem", fontWeight: 700,
                  color: correct ? C.successDark : C.dangerDark,
                  padding: "4px 12px", borderRadius: 8,
                  background: correct ? `${C.success}14` : `${C.danger}14`,
                  fontFamily: C.heading,
                }}>
                  {correct ? `✓ Correct` : `Answer: ${p.a}`}
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
        <SubHeading>Why not a hash-set of strings?</SubHeading>
        <p style={{ fontSize: "0.9rem", color: C.textSecondary, lineHeight: 1.6, margin: 0 }}>
          Hashing checks exact membership in O(L) average, but fails at prefix queries, ordered
          iteration, and auto-complete. Tries give you all three for the same O(L) cost.
        </p>
      </Card>
      <Card>
        <SubHeading>Space engineering</SubHeading>
        <p style={{ fontSize: "0.9rem", color: C.textSecondary, lineHeight: 1.6, margin: 0 }}>
          A naive trie stores an array of 26 pointers per node — most are null. Options: use a
          hash map per node (saves memory, slower constant), or switch to a <em>radix tree</em>{" "}
          that collapses single-child chains into edges labeled with strings.
        </p>
      </Card>
      <Card>
        <SubHeading>Where you&rsquo;ll meet them</SubHeading>
        <p style={{ fontSize: "0.9rem", color: C.textSecondary, lineHeight: 1.6, margin: 0 }}>
          Auto-complete in search boxes, IDE symbol lookup, IP routing (longest-prefix match),
          Aho-Corasick multi-pattern matching, and competitive programming (word-square problems).
        </p>
      </Card>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Activity                                                             */
/* ------------------------------------------------------------------ */

export default function DSA_L3_TriesActivity() {
  const tabs: EngTabDef[] = [
    { id: "learn", label: "Learn", icon: <BookOpen className="w-4 h-4" />, content: <LearnTab /> },
    { id: "visualize", label: "Visualize", icon: <Play className="w-4 h-4" />, content: <VisualizeTab /> },
    { id: "try", label: "Try It", icon: <Target className="w-4 h-4" />, content: <TryTab /> },
    { id: "insight", label: "Insight", icon: <Lightbulb className="w-4 h-4" />, content: <InsightTab /> },
  ];
  const quiz: EngQuizQuestion[] = [
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
    <EngineeringLessonShell
      title="Tries (Prefix Trees)"
      level={3}
      lessonNumber={5}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="Auto-complete, routing tables, multi-pattern matching"
      nextLessonHint="Segment Trees & Fenwick Trees — range queries"
    />
  );
}

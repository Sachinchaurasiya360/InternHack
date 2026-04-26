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
  Lede,
  PillButton,
  SectionEyebrow,
  SectionTitle,
  SubHeading,
  THEME,
} from "../../../../../components/dsa-theory/primitives";
import { PracticeTab } from "../PracticeTab";

const PRACTICE_TOPIC_SLUG: string | null = "greedy";

/* ------------------------------------------------------------------ */
/*  ACTIVITY SELECTION                                                 */
/* ------------------------------------------------------------------ */

interface Activity { id: number; start: number; end: number; }
interface ASFrame {
  line: number;
  vars: Record<string, string | number | undefined>;
  message: string;
  activities: Activity[];
  state: ("default" | "picked" | "skipped" | "checking")[];
  lastEnd: number;
  picked: number[];
}

const PSEUDO_AS = ["sort activities by end time", "lastEnd ← -∞; result ← []", "for each activity a in order:", "  if a.start >= lastEnd:", "    pick a; lastEnd ← a.end", "  else: skip"];

function parseActivities(s: string): Activity[] {
  const tokens = s.trim().split(/\s+/);
  const out: Activity[] = [];
  let id = 0;
  for (const t of tokens) {
    const m = t.split(",").map((x) => Number(x));
    if (m.length === 2 && !m.some(Number.isNaN)) out.push({ id: id++, start: m[0], end: m[1] });
  }
  return out;
}

function buildActivitySel(activities: Activity[]): ASFrame[] {
  const sorted = [...activities].sort((a, b) => a.end - b.end || a.start - b.start);
  const frames: ASFrame[] = [];
  const states: ASFrame["state"] = sorted.map(() => "default");
  let lastEnd = -Infinity;
  const picked: number[] = [];

  frames.push({ line: 0, vars: { n: sorted.length }, message: "Step 1: sort activities by finishing time.", activities: sorted, state: [...states], lastEnd, picked: [...picked] });
  frames.push({ line: 1, vars: { lastEnd: "-∞", picked: 0 }, message: "Initialize lastEnd and an empty result.", activities: sorted, state: [...states], lastEnd, picked: [...picked] });

  for (let i = 0; i < sorted.length; i++) {
    const a = sorted[i];
    states[i] = "checking";
    frames.push({ line: 2, vars: { i, start: a.start, end: a.end, lastEnd: Number.isFinite(lastEnd) ? lastEnd : "-∞" }, message: `Examine activity ${a.id} (${a.start}..${a.end}).`, activities: sorted, state: [...states], lastEnd, picked: [...picked] });
    if (a.start >= lastEnd) {
      states[i] = "picked";
      picked.push(a.id);
      lastEnd = a.end;
      frames.push({ line: 4, vars: { i, picked: picked.length, lastEnd }, message: `Start ${a.start} ≥ lastEnd → PICK. Update lastEnd = ${a.end}.`, activities: sorted, state: [...states], lastEnd, picked: [...picked] });
    } else {
      states[i] = "skipped";
      frames.push({ line: 5, vars: { i, skip: 1 }, message: `Start ${a.start} < lastEnd ${lastEnd} → overlaps. SKIP.`, activities: sorted, state: [...states], lastEnd, picked: [...picked] });
    }
  }
  frames.push({ line: 5, vars: { total: picked.length }, message: `Done. Picked ${picked.length} non-overlapping activities: [${picked.join(", ")}].`, activities: sorted, state: [...states], lastEnd, picked: [...picked] });
  return frames;
}

function ActivityTimeline({ frame }: { frame: ASFrame }) {
  const maxT = Math.max(10, ...frame.activities.map((a) => a.end));
  const W = 560, rowH = 28, PAD = 30;
  const sx = (t: number) => PAD + (t / maxT) * (W - 2 * PAD);
  return (
    <svg viewBox={`0 0 ${W} ${rowH * frame.activities.length + 50}`} className="w-full h-auto rounded-md border border-stone-200 dark:border-white/10 bg-stone-50 dark:bg-stone-950">
      <line x1={PAD} y1={20} x2={W - PAD} y2={20} stroke="#94a3b8" strokeWidth={1.5} />
      {Array.from({ length: Math.floor(maxT / 2) + 1 }).map((_, i) => {
        const t = i * 2;
        return (
          <g key={t}>
            <line x1={sx(t)} y1={18} x2={sx(t)} y2={22} stroke="#94a3b8" />
            <text x={sx(t)} y={14} fontSize="9" textAnchor="middle" fill="#64748b" fontFamily={THEME.heading}>{t}</text>
          </g>
        );
      })}
      {frame.activities.map((a, i) => {
        const st = frame.state[i];
        const color = st === "picked" ? "#10b981" : st === "skipped" ? "#ef4444" : st === "checking" ? "#f59e0b" : "#cbd5e1";
        return (
          <g key={a.id}>
            <rect x={sx(a.start)} y={30 + i * rowH} width={Math.max(2, sx(a.end) - sx(a.start))} height={rowH - 8}
              fill={color} rx={4} stroke="#fff" strokeWidth={1.5}
              style={{ transition: "fill 0.3s", opacity: st === "skipped" ? 0.55 : 1 }} />
            <text x={sx(a.start) + 4} y={30 + i * rowH + 14} fontSize="10" fontFamily={THEME.mono} fill="#fff" fontWeight={700}>
              {a.id}: [{a.start},{a.end}]
            </text>
          </g>
        );
      })}
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  FRACTIONAL KNAPSACK                                                */
/* ------------------------------------------------------------------ */

interface KItem { id: number; w: number; v: number; }
interface KFrame {
  line: number;
  vars: Record<string, string | number | undefined>;
  message: string;
  items: (KItem & { ratio: number })[];
  taken: number[];
  capLeft: number;
  capTotal: number;
  totalVal: number;
  active?: number;
}

const PSEUDO_KN = ["sort items by value/weight ratio (desc)", "capLeft ← W; value ← 0", "for each item i in order:", "  if capLeft >= i.w: take all", "  else: take fraction capLeft / i.w", "  update capLeft, value"];

function parseItems(s: string): KItem[] {
  const tokens = s.trim().split(/\s+/);
  const out: KItem[] = [];
  let id = 0;
  for (const t of tokens) {
    const m = t.split(",").map((x) => Number(x));
    if (m.length === 2 && !m.some(Number.isNaN)) out.push({ id: id++, w: m[0], v: m[1] });
  }
  return out;
}

function buildKnapsack(items: KItem[], W: number): KFrame[] {
  const sorted = items.map((it) => ({ ...it, ratio: it.v / it.w })).sort((a, b) => b.ratio - a.ratio);
  const taken = sorted.map(() => 0);
  const frames: KFrame[] = [];
  let capLeft = W;
  let totalVal = 0;

  frames.push({ line: 0, vars: { n: sorted.length, W }, message: "Sort items by value-to-weight ratio (highest first).", items: sorted, taken: [...taken], capLeft, capTotal: W, totalVal });
  frames.push({ line: 1, vars: { capLeft, value: 0 }, message: `Capacity = ${W}, total value = 0 so far.`, items: sorted, taken: [...taken], capLeft, capTotal: W, totalVal });

  for (let i = 0; i < sorted.length; i++) {
    const it = sorted[i];
    frames.push({ line: 2, vars: { i, w: it.w, v: it.v, ratio: it.ratio.toFixed(2), capLeft }, message: `Examine item ${it.id}: w=${it.w}, v=${it.v}, ratio=${it.ratio.toFixed(2)}.`, items: sorted, taken: [...taken], capLeft, capTotal: W, totalVal, active: i });
    if (capLeft >= it.w) {
      taken[i] = 1;
      totalVal += it.v;
      capLeft -= it.w;
      frames.push({ line: 3, vars: { take: "1.00", value: totalVal.toFixed(1), capLeft }, message: `Capacity allows it. Take the full item. Value += ${it.v}.`, items: sorted, taken: [...taken], capLeft, capTotal: W, totalVal, active: i });
    } else if (capLeft > 0) {
      const frac = capLeft / it.w;
      const gain = frac * it.v;
      taken[i] = frac;
      totalVal += gain;
      frames.push({ line: 4, vars: { frac: frac.toFixed(2), gain: gain.toFixed(1), value: totalVal.toFixed(1) }, message: `Not enough capacity. Take fraction ${frac.toFixed(2)} → value += ${gain.toFixed(1)}.`, items: sorted, taken: [...taken], capLeft: 0, capTotal: W, totalVal, active: i });
      capLeft = 0;
      break;
    } else {
      frames.push({ line: 4, vars: { skip: 1 }, message: "Knapsack is full. Skip remaining items.", items: sorted, taken: [...taken], capLeft, capTotal: W, totalVal, active: i });
      break;
    }
  }
  frames.push({ line: 5, vars: { totalValue: totalVal.toFixed(2) }, message: `Done. Maximum value = ${totalVal.toFixed(2)}.`, items: sorted, taken: [...taken], capLeft, capTotal: W, totalVal });
  return frames;
}

function KnapsackViz({ frame }: { frame: KFrame }) {
  return (
    <div className="grid gap-6" style={{ gridTemplateColumns: "1fr 140px" }}>
      <div>
        <table className="w-full text-sm">
          <thead className="bg-stone-50 dark:bg-stone-950/50">
            <tr>
              {["#", "weight", "value", "v/w", "taken"].map((h) => (
                <th key={h} className="text-left px-3 py-2.5 text-[10px] font-mono uppercase tracking-widest text-stone-500 border-b border-stone-200 dark:border-white/10">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {frame.items.map((it, i) => {
              const isActive = frame.active === i;
              const t = frame.taken[i];
              const fullyTaken = t === 1;
              const partial = t > 0 && t < 1;
              return (
                <tr key={it.id} className={`border-t border-stone-100 dark:border-white/5 transition-colors ${isActive ? "bg-lime-50 dark:bg-lime-400/5" : fullyTaken ? "bg-emerald-50 dark:bg-emerald-400/5" : partial ? "bg-amber-50 dark:bg-amber-400/5" : ""}`}>
                  <td className="px-3 py-2 font-mono font-bold text-lime-700 dark:text-lime-400">{it.id}</td>
                  <td className="px-3 py-2 text-stone-900 dark:text-stone-100">{it.w}</td>
                  <td className="px-3 py-2 text-stone-900 dark:text-stone-100">{it.v}</td>
                  <td className="px-3 py-2 font-mono font-bold text-lime-700 dark:text-lime-400">{it.ratio.toFixed(2)}</td>
                  <td className={`px-3 py-2 font-bold ${fullyTaken ? "text-emerald-700" : partial ? "text-amber-700" : "text-stone-400"}`}>
                    {t.toFixed(2)}{t > 0 && t < 1 && " (slice)"}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="mt-2 text-sm text-stone-900 dark:text-stone-100">
          Total value: <strong className="text-emerald-600">{frame.totalVal.toFixed(2)}</strong>
        </div>
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="text-[10px] font-bold text-stone-500 uppercase tracking-widest">Knapsack</div>
        <div className="relative w-20 h-48 border-2 border-stone-300 dark:border-white/20 rounded-b-lg overflow-hidden bg-stone-50 dark:bg-stone-950">
          <div
            className="absolute bottom-0 left-0 right-0 bg-emerald-500 opacity-70 transition-all"
            style={{ height: `${100 - (frame.capLeft / frame.capTotal) * 100}%` }}
          />
        </div>
        <div className="text-xs text-stone-500">used {frame.capTotal - frame.capLeft} / {frame.capTotal}</div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  HUFFMAN CODING                                                     */
/* ------------------------------------------------------------------ */

interface HNode { id: string; freq: number; char?: string; left?: string; right?: string; }
interface HuffFrame {
  line: number;
  vars: Record<string, string | number | undefined>;
  message: string;
  heap: string[];
  nodes: Record<string, HNode>;
  merged?: [string, string, string];
}

const PSEUDO_HUFF = ["create leaf node per char with its freq", "put all leaves into min-heap", "while heap has > 1 nodes:", "  x ← extractMin; y ← extractMin", "  z ← new node(freq = x.freq + y.freq)", "  z.left = x; z.right = y", "  insert z"];

function buildHuffman(freqs: Record<string, number>): HuffFrame[] {
  const nodes: Record<string, HNode> = {};
  let counter = 0;
  for (const [ch, f] of Object.entries(freqs)) {
    const id = `leaf-${ch}`;
    nodes[id] = { id, freq: f, char: ch };
  }
  const heap: string[] = Object.keys(nodes).sort((a, b) => nodes[a].freq - nodes[b].freq);
  const frames: HuffFrame[] = [];
  frames.push({ line: 0, vars: { leaves: heap.length }, message: "Create leaf nodes for each character with its frequency.", heap: [...heap], nodes: JSON.parse(JSON.stringify(nodes)) });
  frames.push({ line: 1, vars: { heap: heap.length }, message: "Push all leaves into a min-heap by frequency.", heap: [...heap], nodes: JSON.parse(JSON.stringify(nodes)) });
  while (heap.length > 1) {
    heap.sort((a, b) => nodes[a].freq - nodes[b].freq);
    const x = heap.shift()!;
    const y = heap.shift()!;
    frames.push({ line: 3, vars: { x: nodes[x].char ?? "·", fx: nodes[x].freq, y: nodes[y].char ?? "·", fy: nodes[y].freq }, message: `Extract two smallest: ${nodes[x].char ?? "·"}=${nodes[x].freq}, ${nodes[y].char ?? "·"}=${nodes[y].freq}.`, heap: [...heap], nodes: JSON.parse(JSON.stringify(nodes)) });
    const zId = `n${counter++}`;
    nodes[zId] = { id: zId, freq: nodes[x].freq + nodes[y].freq, left: x, right: y };
    frames.push({ line: 4, vars: { sum: nodes[zId].freq }, message: `Create parent with freq = ${nodes[x].freq} + ${nodes[y].freq} = ${nodes[zId].freq}.`, heap: [...heap, zId], nodes: JSON.parse(JSON.stringify(nodes)), merged: [x, y, zId] });
    heap.push(zId);
    heap.sort((a, b) => nodes[a].freq - nodes[b].freq);
    frames.push({ line: 6, vars: { heap: heap.length }, message: "Insert the new node back into the heap.", heap: [...heap], nodes: JSON.parse(JSON.stringify(nodes)) });
  }
  frames.push({ line: 6, vars: { root: heap[0] ? nodes[heap[0]].freq : 0 }, message: "Only root remains. Build codes by traversing: left=0, right=1.", heap: [...heap], nodes: JSON.parse(JSON.stringify(nodes)) });
  return frames;
}

function huffmanCodes(nodes: Record<string, HNode>, rootId: string | undefined): Record<string, string> {
  if (!rootId || !nodes[rootId]) return {};
  const codes: Record<string, string> = {};
  function go(id: string, code: string) {
    const n = nodes[id];
    if (!n) return;
    if (n.char !== undefined) { codes[n.char] = code || "0"; return; }
    if (n.left) go(n.left, code + "0");
    if (n.right) go(n.right, code + "1");
  }
  go(rootId, "");
  return codes;
}

// Local binary tree renderer for Huffman
function HuffmanTreeSVG({ nodes, rootId }: { nodes: Record<string, HNode>; rootId?: string }) {
  if (!rootId || !nodes[rootId]) return <div className="text-xs text-stone-400 p-4 text-center">Building tree...</div>;

  const W = 420, nodeR = 18;
  type Pos = { x: number; y: number };
  const pos: Record<string, Pos> = {};

  // Assign positions via subtree-width layout
  function width(id: string | undefined): number {
    if (!id || !nodes[id]) return 0;
    const n = nodes[id];
    if (!n.left && !n.right) return 1;
    return width(n.left) + width(n.right);
  }

  function place(id: string, x: number, y: number, span: number) {
    if (!nodes[id]) return;
    pos[id] = { x, y };
    const n = nodes[id];
    if (n.left || n.right) {
      const lw = width(n.left);
      const rw = width(n.right);
      const total = lw + rw;
      if (n.left) place(n.left, x - span * (rw / total), y + 52, span * (lw / total));
      if (n.right) place(n.right, x + span * (lw / total), y + 52, span * (rw / total));
    }
  }
  place(rootId, W / 2, 28, W / 2 - nodeR - 4);

  const allIds = Object.keys(pos);
  const maxY = Math.max(...allIds.map((id) => pos[id].y)) + nodeR + 10;

  return (
    <svg viewBox={`0 0 ${W} ${maxY}`} className="w-full h-auto rounded-md border border-stone-200 dark:border-white/10 bg-stone-50 dark:bg-stone-950">
      {allIds.map((id) => {
        const n = nodes[id];
        if (!n) return null;
        const p = pos[id];
        const edges = [];
        if (n.left && pos[n.left]) edges.push({ to: pos[n.left], lbl: "0" });
        if (n.right && pos[n.right]) edges.push({ to: pos[n.right], lbl: "1" });
        return edges.map((e, i) => (
          <g key={`${id}-e${i}`}>
            <line x1={p.x} y1={p.y + nodeR} x2={e.to.x} y2={e.to.y - nodeR} stroke={THEME.border} strokeWidth={1.5} />
            <text x={(p.x + e.to.x) / 2 + (i === 0 ? -8 : 8)} y={(p.y + e.to.y) / 2} fontSize="9" fill={THEME.textMuted} fontFamily={THEME.mono} fontWeight={700}>{e.lbl}</text>
          </g>
        ));
      })}
      {allIds.map((id) => {
        const n = nodes[id];
        if (!n) return null;
        const p = pos[id];
        const isLeaf = n.char !== undefined;
        return (
          <g key={id}>
            <circle cx={p.x} cy={p.y} r={nodeR} fill={isLeaf ? THEME.accent : "#3b82f6"} stroke="#fff" strokeWidth={2} />
            <text x={p.x} y={p.y + 4} textAnchor="middle" fontSize="9" fontWeight={700} fill="#fff" fontFamily={THEME.heading}>
              {isLeaf ? `${n.char}:${n.freq}` : n.freq}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

function HuffmanView({ frame }: { frame: HuffFrame }) {
  const rootId = frame.heap.length === 1 ? frame.heap[0] : Object.keys(frame.nodes).filter((id) => id.startsWith("n")).sort().pop();
  const codes = rootId ? huffmanCodes(frame.nodes, rootId) : {};
  return (
    <div className="grid gap-4" style={{ gridTemplateColumns: "1fr 180px" }}>
      <div className="min-w-0">
        <HuffmanTreeSVG nodes={frame.nodes} rootId={rootId} />
      </div>
      <div className="flex flex-col gap-3">
        <div>
          <div className="text-[10px] font-bold text-stone-500 uppercase tracking-widest mb-1">Heap (min by freq)</div>
          <div className="flex flex-wrap gap-1">
            {frame.heap.map((id) => (
              <span key={id} className="text-xs font-bold px-2 py-0.5 rounded-md bg-lime-400/10 text-lime-700 dark:text-lime-300 font-mono">
                {frame.nodes[id]?.char ?? "·"}:{frame.nodes[id]?.freq}
              </span>
            ))}
          </div>
        </div>
        {Object.keys(codes).length > 0 && (
          <div>
            <div className="text-[10px] font-bold text-stone-500 uppercase tracking-widest mb-1">Codes</div>
            <table className="text-xs font-mono">
              <tbody>
                {Object.entries(codes).sort().map(([ch, c]) => (
                  <tr key={ch}>
                    <td className="pr-3 font-bold text-stone-900 dark:text-stone-100">{ch}</td>
                    <td className="text-lime-700 dark:text-lime-400">{c}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Visualize tab                                                      */
/* ------------------------------------------------------------------ */

type Mode = "activity" | "knapsack" | "huffman";

function VisualizeTab() {
  const [mode, setMode] = useState<Mode>("activity");

  const [actInput, setActInput] = useState("1,4 3,5 0,6 5,7 3,9 5,9 6,10 8,11 8,12 2,14 12,16");
  const activities = useMemo(() => parseActivities(actInput), [actInput]);
  const actFrames = useMemo(() => buildActivitySel(activities), [activities]);

  const [kInput, setKInput] = useState("10,60 20,100 30,120");
  const [kCap, setKCap] = useState("50");
  const kItems = useMemo(() => parseItems(kInput), [kInput]);
  const kW = Math.max(1, Math.floor(Number(kCap) || 50));
  const kFrames = useMemo(() => buildKnapsack(kItems, kW), [kItems, kW]);

  const [hStr, setHStr] = useState("a:5 b:9 c:12 d:13 e:16 f:45");
  const freqs = useMemo(() => {
    const out: Record<string, number> = {};
    hStr.trim().split(/\s+/).forEach((t) => {
      const [ch, f] = t.split(":");
      const n = Number(f);
      if (ch && !Number.isNaN(n)) out[ch] = n;
    });
    return out;
  }, [hStr]);
  const hFrames = useMemo(() => buildHuffman(freqs), [freqs]);

  const playerA = useStepPlayer(actFrames);
  const playerK = useStepPlayer(kFrames);
  const playerH = useStepPlayer(hFrames);

  const modeTabs = (
    <div className="flex gap-1.5 flex-wrap">
      {([["activity", "Activity Selection"], ["knapsack", "Fractional Knapsack"], ["huffman", "Huffman Coding"]] as [Mode, string][]).map(([m, label]) => (
        <PillButton key={m} onClick={() => setMode(m)} active={mode === m}>
          <span className="text-xs">{label}</span>
        </PillButton>
      ))}
    </div>
  );

  if (mode === "activity") {
    const frame = playerA.current;
    return (
      <AlgoCanvas title="Activity Selection - Greedy by finish time" player={playerA}
        input={<div className="flex flex-col gap-3">{modeTabs}<InputEditor label="Activities (start,end)" value={actInput} helper="Classic greedy: sort by end, pick non-overlapping." presets={[{ label: "Classic 11", value: "1,4 3,5 0,6 5,7 3,9 5,9 6,10 8,11 8,12 2,14 12,16" }, { label: "All overlap", value: "1,10 2,9 3,8 4,7" }, { label: "Chain", value: "1,3 3,5 5,7 7,9" }]} onApply={setActInput} /></div>}
        pseudocode={<PseudocodePanel lines={PSEUDO_AS} activeLine={frame?.line} />}
        variables={<VariablesPanel vars={frame?.vars ?? {}} flashKeys={["lastEnd", "picked"]} />}>
        <div className="flex flex-col gap-3">
          <div className="flex gap-3 text-xs text-stone-500 flex-wrap">
            <span className="inline-flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-sm bg-emerald-500" />picked</span>
            <span className="inline-flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-sm bg-red-400" />skipped</span>
            <span className="inline-flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-sm bg-amber-400" />checking</span>
          </div>
          {frame && <ActivityTimeline frame={frame} />}
          {frame && <Callout>{frame.message}</Callout>}
        </div>
      </AlgoCanvas>
    );
  }

  if (mode === "knapsack") {
    const frame = playerK.current;
    return (
      <AlgoCanvas title="Fractional Knapsack - Greedy by ratio" player={playerK}
        input={<div className="flex flex-col gap-3">{modeTabs}<InputEditor label="Items (weight,value)" value={kInput} helper="Each token = weight,value. Fractional knapsack allows slicing the last item." presets={[{ label: "Classic", value: "10,60 20,100 30,120" }, { label: "High ratios", value: "5,30 10,50 15,60" }]} onApply={setKInput} /><InputEditor label="Capacity W" value={kCap} presets={[{ label: "50", value: "50" }, { label: "30", value: "30" }, { label: "100", value: "100" }]} onApply={setKCap} /></div>}
        pseudocode={<PseudocodePanel lines={PSEUDO_KN} activeLine={frame?.line} />}
        variables={<VariablesPanel vars={frame?.vars ?? {}} flashKeys={["value", "capLeft"]} />}>
        <div className="flex flex-col gap-3">
          {frame && <KnapsackViz frame={frame} />}
          {frame && <Callout>{frame.message}</Callout>}
        </div>
      </AlgoCanvas>
    );
  }

  const frame = playerH.current;
  return (
    <AlgoCanvas title="Huffman Coding - Greedy tree merge" player={playerH}
      input={<div className="flex flex-col gap-3">{modeTabs}<InputEditor label="Characters (char:freq)" value={hStr} helper="Space-separated. Huffman uses the two least-frequent nodes greedily." presets={[{ label: "Classic 6", value: "a:5 b:9 c:12 d:13 e:16 f:45" }, { label: "Small 4", value: "a:1 b:2 c:3 d:4" }, { label: "Skewed", value: "a:100 b:2 c:3 d:4" }]} onApply={setHStr} /></div>}
      pseudocode={<PseudocodePanel lines={PSEUDO_HUFF} activeLine={frame?.line} />}
      variables={<VariablesPanel vars={frame?.vars ?? {}} flashKeys={["sum", "heap"]} />}>
      <div className="flex flex-col gap-3">
        {frame && <HuffmanView frame={frame} />}
        {frame && <Callout>{frame.message}</Callout>}
      </div>
    </AlgoCanvas>
  );
}

/* ------------------------------------------------------------------ */
/*  Learn tab                                                          */
/* ------------------------------------------------------------------ */

function LearnTab() {
  const cards = [
    { title: "The greedy idea", body: "At each step, pick the choice that looks best right now - without thinking about the future. Greedy algorithms are fast and simple, but only work when the problem has a specific 'matroid-like' structure where local optima lead to global optima." },
    { title: "When greedy works", body: "Two properties: (1) Greedy-choice property - a global optimum includes a locally-optimal first choice. (2) Optimal substructure - the rest of the problem, after that choice, is a smaller instance with the same structure." },
    { title: "Activity Selection", body: "Sort by finish time. Pick the next activity whose start ≥ lastEnd. Intuition: the earliest-ending compatible activity leaves the most room for future picks." },
    { title: "Knapsack: fractional vs 0/1", body: "Fractional knapsack - greedy by value/weight ratio is optimal. 0/1 knapsack - greedy FAILS (counter-examples exist). 0/1 requires dynamic programming." },
    { title: "Huffman Coding", body: "Build a binary prefix code where frequent characters get short codes. Repeatedly merge the two least-frequent nodes. The resulting tree minimizes expected code length - a classical lossless compression scheme." },
  ];
  return (
    <div className="flex flex-col gap-5">
      <div>
        <SectionEyebrow>Mental model</SectionEyebrow>
        <SectionTitle>Commit to the best-looking choice. Never look back.</SectionTitle>
        <Lede>
          To <em>prove</em> greedy is optimal, you usually need an exchange argument: swap any
          non-greedy choice with a greedy one without making the answer worse.
        </Lede>
      </div>
      <div className="grid gap-3" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
        {cards.map((s, i) => (
          <Card key={i}>
            <div className="text-[10px] font-bold text-lime-600 dark:text-lime-400 mb-1.5 font-mono tracking-widest">0{i + 1}</div>
            <div className="font-bold text-stone-900 dark:text-stone-50 mb-1">{s.title}</div>
            <div className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">{s.body}</div>
          </Card>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Try tab                                                            */
/* ------------------------------------------------------------------ */

function TryTab() {
  const problems = [
    { q: "Activities (1,4) (3,5) (0,6) (5,7) (8,9) - how many can greedy pick?", a: "3", hint: "Sort by end: 4,5,6,7,9. Pick (1,4), (5,7), (8,9)." },
    { q: "Fractional knapsack, W=20, items (5,10)(10,25)(20,30). Max value?", a: "47.5", hint: "Ratios 2, 2.5, 1.5. Take (10,25) then (5,10) then fraction 5/20 of (20,30)." },
    { q: "Huffman with freqs a:1, b:1, c:2, d:4. Total bits in encoded string?", a: "14", hint: "Build tree; compute Σ freq·depth. Tree has depths: a=3, b=3, c=2, d=1 → 3+3+4+4 = 14." },
    { q: "Does greedy solve 0/1 Knapsack optimally?", a: "no", hint: "Counter-examples exist; use DP instead." },
  ];
  const [guesses, setGuesses] = useState<(string | null)[]>(problems.map(() => null));
  const [shown, setShown] = useState<boolean[]>(problems.map(() => false));
  return (
    <div className="flex flex-col gap-3">
      <Callout>Trace, reveal. Greedy is intuitive but not always correct.</Callout>
      {problems.map((p, i) => {
        const g = guesses[i];
        const revealed = shown[i];
        const correct = g !== null && g.trim().toLowerCase() === p.a.toLowerCase();
        return (
          <Card key={i}>
            <div className="flex items-center gap-3 flex-wrap">
              <span className="font-bold text-sm text-stone-500 font-mono">#{i + 1}</span>
              <span className="flex-1 text-sm text-stone-900 dark:text-stone-100">{p.q}</span>
              <input
                type="text"
                placeholder="answer"
                value={g ?? ""}
                onChange={(e) => { const v = [...guesses]; v[i] = e.target.value; setGuesses(v); }}
                className="w-24 px-2.5 py-1.5 rounded-md border border-stone-200 dark:border-white/10 bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-100 font-mono text-sm focus:outline-none focus:border-stone-400"
              />
              <button
                type="button"
                onClick={() => { const v = [...shown]; v[i] = true; setShown(v); }}
                className="px-3 py-1.5 rounded-md text-xs font-semibold border border-stone-200 dark:border-white/10 bg-white dark:bg-stone-900 text-stone-600 dark:text-stone-400 cursor-pointer hover:border-stone-400 transition-colors"
              >
                Reveal
              </button>
              {revealed && (
                <span className={`text-xs font-bold px-3 py-1 rounded-md ${correct ? "bg-lime-50 dark:bg-lime-400/10 text-lime-800 dark:text-lime-200 border border-lime-500" : "bg-rose-50 dark:bg-rose-500/10 text-rose-800 dark:text-rose-200 border border-rose-500"}`}>
                  {correct ? `✓ ${p.a}` : `Answer: ${p.a}`}
                </span>
              )}
            </div>
            {revealed && (
              <div className="mt-3">
                <Callout>Hint: {p.hint}</Callout>
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
        <SubHeading>When greedy works vs. when DP is needed</SubHeading>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          Fractional knapsack: greedy. 0/1 knapsack: DP. The difference is that fractions let you &apos;commit partially&apos; - the greedy choice isn&apos;t permanent in a problematic way. In 0/1, committing to an item excludes future swaps.
        </p>
      </Card>
      <Card>
        <SubHeading>Exchange argument proof sketch</SubHeading>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          Take any optimal solution OPT. Find the first point where OPT differs from greedy G. Swap that piece from OPT with G&apos;s choice - show the new solution is ≥ OPT. Induct.
        </p>
      </Card>
      <Card>
        <SubHeading>Interview classics</SubHeading>
        <ul className="list-disc pl-5 space-y-1 text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          <li>Activity Selection → sort by end, greedy.</li>
          <li>Huffman → min-heap, total cost = Σ freq × depth.</li>
          <li>MST (Kruskal/Prim) → greedy edge/vertex selection.</li>
          <li>Dijkstra → greedy on non-negative weights.</li>
        </ul>
      </Card>
    </div>
  );
}

/* ------------------------------------------------------------------ */

interface Props {
  onQuizComplete?: (score: number) => void;
}

export default function L6_Greedy({ onQuizComplete }: Props) {
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
      question: "For Activity Selection, which sort order makes the greedy algorithm optimal?",
      options: ["By start time ascending", "By duration ascending", "By end time ascending", "By number of overlaps"],
      correctIndex: 2,
      explanation: "Sorting by earliest finish time leaves the most remaining time for future activities - the exchange argument proves this is optimal.",
    },
    {
      question: "Which problem is NOT solvable by a greedy algorithm (needs DP)?",
      options: ["Huffman coding", "Fractional knapsack", "0/1 Knapsack", "MST (Kruskal's)"],
      correctIndex: 2,
      explanation: "0/1 knapsack requires DP because greedy can fail (e.g., items (1,1),(3,4),(4,5) with W=5 - greedy picks 1+3 = 5 value, DP picks 3+4 = 9 value via the two middle items).",
    },
    {
      question: "In Huffman coding, which two nodes are merged at each step?",
      options: [
        "The two most-frequent nodes",
        "The two least-frequent nodes",
        "The two leftmost in a sorted list",
        "Any two unmerged leaves",
      ],
      correctIndex: 1,
      explanation: "The min-heap pops the two smallest-frequency nodes. Merging them into a parent with summed frequency ensures frequent characters stay shallow.",
    },
    {
      question: "A greedy algorithm is guaranteed to find the optimum when the problem has...",
      options: [
        "Overlapping subproblems",
        "The greedy-choice property and optimal substructure",
        "A polynomial-time brute force",
        "Only integer inputs",
      ],
      correctIndex: 1,
      explanation: "Those two properties - greedy-choice + optimal substructure - are the standard sufficient conditions. Prove both and your greedy is correct.",
    },
  ];

  return (
    <LessonShell
      title="Greedy Algorithms"
      level={6}
      lessonNumber={6}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="Interview favorite: scheduling, intervals, optimal coding"
      nextLessonHint="Bit Manipulation"
      onQuizComplete={onQuizComplete}
    />
  );
}

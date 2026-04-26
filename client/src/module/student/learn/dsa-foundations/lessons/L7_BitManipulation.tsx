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

const PRACTICE_TOPIC_SLUG: string | null = "bit-manipulation";

/* ------------------------------------------------------------------ */
/*  Core types                                                          */
/* ------------------------------------------------------------------ */

type Op = "AND" | "OR" | "XOR" | "NOT" | "SHL" | "SHR";

interface Frame {
  line: number;
  vars: Record<string, string | number | undefined>;
  message: string;
  a: number;
  b: number;
  result: number;
  activeBit?: number;
  highlightKey?: string;
  demo: "op" | "power2" | "popcount" | "xor-array" | "subsets";
  arr?: number[];
  arrIdx?: number;
  accumulator?: number;
  subsetIndex?: number;
}

/* ------------------------------------------------------------------ */
/*  Helpers                                                             */
/* ------------------------------------------------------------------ */

const BITS = 8;
const MAX = 255;

function toBits(n: number): number[] {
  const x = ((n % 256) + 256) % 256;
  return Array.from({ length: BITS }, (_, i) => (x >> (BITS - 1 - i)) & 1);
}

function applyOp(op: Op, a: number, b: number): number {
  switch (op) {
    case "AND": return (a & b) & MAX;
    case "OR":  return (a | b) & MAX;
    case "XOR": return (a ^ b) & MAX;
    case "NOT": return (~a) & MAX;
    case "SHL": return (a << (b & 7)) & MAX;
    case "SHR": return (a >> (b & 7)) & MAX;
  }
}

/* ------------------------------------------------------------------ */
/*  Frame builders                                                      */
/* ------------------------------------------------------------------ */

const PSEUDO_OP: Record<Op, string[]> = {
  AND: ["# Bitwise AND (column-wise)", "for bit i from 7 down to 0:", "  r[i] <- a[i] AND b[i]"],
  OR:  ["# Bitwise OR (column-wise)",  "for bit i from 7 down to 0:", "  r[i] <- a[i] OR b[i]"],
  XOR: ["# Bitwise XOR (column-wise)", "for bit i from 7 down to 0:", "  r[i] <- a[i] XOR b[i]"],
  NOT: ["# Bitwise NOT", "for bit i from 7 down to 0:", "  r[i] <- 1 - a[i]"],
  SHL: ["# Shift Left by b", "shift all bits left by b:", "  r <- (a << b) & 0xFF"],
  SHR: ["# Shift Right by b", "shift all bits right by b:", "  r <- (a >> b)"],
};

const PSEUDO_P2 = [
  "# isPowerOf2(n)",
  "return n > 0 and (n & (n - 1)) = 0",
  "# A power of 2 has exactly one 1-bit,",
  "# n - 1 flips that bit and all lower bits,",
  "# so AND becomes 0.",
];

const PSEUDO_POP = [
  "# Brian Kernighan's popcount",
  "count <- 0",
  "while n != 0:",
  "  n <- n & (n - 1)   # clears lowest 1-bit",
  "  count <- count + 1",
  "return count",
];

const PSEUDO_XOR = [
  "# Find the single element (others appear twice)",
  "result <- 0",
  "for x in arr:",
  "  result <- result XOR x",
  "return result",
];

const PSEUDO_SUBS = [
  "# Generate all subsets of n items",
  "for mask from 0 to 2^n - 1:",
  "  subset <- {i | bit i of mask = 1}",
];

function framesOp(op: Op, a: number, b: number): Frame[] {
  const frames: Frame[] = [];
  const aBits = toBits(a), bBits = toBits(b);
  let result = 0;
  frames.push({
    line: 0, vars: { op, a, b, result: 0, "a.bin": aBits.join(""), "b.bin": bBits.join("") },
    message: `Compute ${a} ${op} ${b}.`,
    a, b, result, demo: "op",
  });
  if (op === "NOT" || op === "SHL" || op === "SHR") {
    const r = applyOp(op, a, b);
    frames.push({
      line: 2, vars: { op, a, b, result: r, "r.bin": toBits(r).join("") },
      message: `${op} ${a}${op === "NOT" ? "" : ` by ${b}`} = ${r}.`,
      a, b, result: r, demo: "op", highlightKey: "result",
    });
    return frames;
  }
  for (let i = BITS - 1; i >= 0; i--) {
    const idx = BITS - 1 - i;
    const ai = aBits[idx], bi = bBits[idx];
    let ri = 0;
    if (op === "AND") ri = ai & bi;
    else if (op === "OR") ri = ai | bi;
    else if (op === "XOR") ri = ai ^ bi;
    if (ri) result |= (1 << i);
    frames.push({
      line: 2, vars: { i, [`a[${i}]`]: ai, [`b[${i}]`]: bi, [`r[${i}]`]: ri, result },
      message: `Bit ${i}: ${ai} ${op} ${bi} = ${ri}.`,
      a, b, result, activeBit: i, demo: "op", highlightKey: "result",
    });
  }
  frames.push({
    line: 0, vars: { op, a, b, result, "r.bin": toBits(result).join("") },
    message: `Final: ${a} ${op} ${b} = ${result}.`,
    a, b, result, demo: "op",
  });
  return frames;
}

function framesPow2(a: number): Frame[] {
  const frames: Frame[] = [];
  const am1 = (a - 1) & MAX;
  const r = a > 0 && (a & am1) === 0 ? 1 : 0;
  frames.push({
    line: 1, vars: { n: a, "n-1": am1 },
    message: `Test: is ${a} a power of 2? Compute n & (n-1).`,
    a, b: am1, result: 0, demo: "power2",
  });
  for (let i = BITS - 1; i >= 0; i--) {
    const idx = BITS - 1 - i;
    const ai = toBits(a)[idx], bi = toBits(am1)[idx];
    const ri = ai & bi;
    frames.push({
      line: 1, vars: { i, [`n[${i}]`]: ai, [`(n-1)[${i}]`]: bi, [`r[${i}]`]: ri },
      message: `Bit ${i}: ${ai} AND ${bi} = ${ri}.`,
      a, b: am1, result: 0, activeBit: i, demo: "power2",
    });
  }
  frames.push({
    line: 1, vars: { n: a, "n&(n-1)": a & am1, isPowerOf2: r ? "true" : "false" },
    message: r ? `${a} has one 1-bit, power of 2.` : `${a} has multiple 1-bits, NOT a power of 2.`,
    a, b: am1, result: r, demo: "power2", highlightKey: "isPowerOf2",
  });
  return frames;
}

function framesPopcount(a: number): Frame[] {
  const frames: Frame[] = [];
  let n = a & MAX;
  let count = 0;
  frames.push({
    line: 1, vars: { n, count },
    message: `Count set bits in ${a} using Brian Kernighan's trick.`,
    a: n, b: 0, result: 0, demo: "popcount",
  });
  while (n !== 0) {
    const after = n & (n - 1);
    frames.push({
      line: 3, vars: { n, "n-1": (n - 1) & MAX, "n&(n-1)": after, count },
      message: `n=${n}. n & (n-1) = ${after} - clears the lowest 1-bit.`,
      a: n, b: after, result: after, demo: "popcount",
    });
    n = after;
    count++;
    frames.push({
      line: 4, vars: { n, count },
      message: `Update n=${n}, count=${count}.`,
      a: n, b: 0, result: n, demo: "popcount", highlightKey: "count",
    });
  }
  frames.push({
    line: 5, vars: { count, result: count },
    message: `Total set bits: ${count}.`,
    a: 0, b: 0, result: count, demo: "popcount",
  });
  return frames;
}

function framesXorArray(arr: number[]): Frame[] {
  const frames: Frame[] = [];
  let acc = 0;
  frames.push({
    line: 1, vars: { arr: arr.join(","), result: 0 },
    message: `Start with result = 0. XOR every element.`,
    a: 0, b: 0, result: 0, demo: "xor-array", arr, arrIdx: -1, accumulator: 0,
  });
  for (let i = 0; i < arr.length; i++) {
    const newAcc = (acc ^ arr[i]) & MAX;
    frames.push({
      line: 3, vars: { i, "arr[i]": arr[i], result: acc, "new result": newAcc },
      message: `result = ${acc} XOR ${arr[i]} = ${newAcc}. ${newAcc === 0 ? "(pair cancelled)" : ""}`,
      a: acc, b: arr[i], result: newAcc, demo: "xor-array",
      arr, arrIdx: i, accumulator: newAcc, highlightKey: "accumulator",
    });
    acc = newAcc;
  }
  frames.push({
    line: 4, vars: { result: acc },
    message: `Unique element (others cancelled in pairs): ${acc}.`,
    a: 0, b: 0, result: acc, demo: "xor-array",
    arr, arrIdx: arr.length, accumulator: acc,
  });
  return frames;
}

function framesSubsets(n: number): Frame[] {
  const frames: Frame[] = [];
  const total = 1 << n;
  frames.push({
    line: 1, vars: { n, "2^n": total },
    message: `Enumerate ${total} subsets via masks 0..${total - 1}.`,
    a: 0, b: 0, result: 0, demo: "subsets", subsetIndex: -1,
  });
  for (let mask = 0; mask < total; mask++) {
    const members: string[] = [];
    for (let i = 0; i < n; i++) if (mask & (1 << i)) members.push(String(i));
    frames.push({
      line: 2, vars: { mask, bin: mask.toString(2).padStart(n, "0"), subset: `{${members.join(",")}}` },
      message: `mask=${mask} (${mask.toString(2).padStart(n, "0")}) -> subset {${members.join(",")}}.`,
      a: mask, b: 0, result: mask, demo: "subsets", subsetIndex: mask,
    });
  }
  return frames;
}

/* ------------------------------------------------------------------ */
/*  Bit row renderer (local)                                           */
/* ------------------------------------------------------------------ */

function BitRow({
  label, value, highlightBit, color,
}: {
  label: string;
  value: number;
  highlightBit?: number;
  color?: string;
}) {
  const bits = toBits(value);
  return (
    <div className="flex items-center gap-2.5">
      <div className="w-24 text-right text-xs font-bold text-stone-500 font-sans shrink-0">
        {label}
      </div>
      <div className="min-w-12 text-center px-2 py-1 rounded-md bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-white/10 font-mono font-extrabold text-base text-stone-900 dark:text-stone-50">
        {value}
      </div>
      <div className="flex gap-0.5">
        {bits.map((b, idx) => {
          const bitPos = BITS - 1 - idx;
          const isActive = highlightBit === bitPos;
          const bg = b ? (color ?? THEME.accent) : "transparent";
          return (
            <div
              key={idx}
              title={`bit ${bitPos}`}
              className={`w-7 h-7 rounded flex items-center justify-center font-mono font-extrabold text-sm transition-all ${
                isActive ? "ring-2 ring-amber-400 ring-offset-1" : ""
              }`}
              style={{
                border: isActive ? "2px solid #f59e0b" : b ? `1.5px solid ${THEME.accent}` : `1.5px solid ${THEME.border}`,
                background: bg,
                color: b ? "#fff" : THEME.textMuted,
              }}
            >
              {b}
            </div>
          );
        })}
      </div>
      <div className="text-[10px] text-stone-400 font-mono ml-1">
        {toBits(value).join("")}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Sub-visualizers                                                     */
/* ------------------------------------------------------------------ */

function parseTwo(s: string): [number, number] | null {
  const nums = s.split(/[,\s]+/).map(Number).filter((x) => !Number.isNaN(x));
  if (nums.length < 1) return null;
  return [Math.max(0, Math.min(MAX, nums[0] | 0)), Math.max(0, Math.min(7, (nums[1] ?? 0) | 0))];
}

function OpVisualizer() {
  const [src, setSrc] = useState("170, 85");
  const [op, setOp] = useState<Op>("AND");
  const [a, b] = parseTwo(src) ?? [170, 85];
  const frames = useMemo(() => framesOp(op, a, b), [op, a, b]);
  const player = useStepPlayer(frames);
  const frame = player.current;

  return (
    <AlgoCanvas
      title={`Bitwise ${op}`}
      player={player}
      input={
        <div className="flex flex-col gap-2.5">
          <InputEditor
            label="Two numbers (0-255)"
            value={src}
            placeholder="170, 85"
            presets={[
              { label: "10101010 & 01010101", value: "170, 85" },
              { label: "Power of 2", value: "16, 0" },
              { label: "Complement", value: "12, 0" },
              { label: "Shift", value: "5, 3" },
            ]}
            onApply={(v) => { if (parseTwo(v)) setSrc(v); }}
          />
          <div className="flex gap-1.5 flex-wrap">
            {(["AND", "OR", "XOR", "NOT", "SHL", "SHR"] as Op[]).map((o) => (
              <PillButton key={o} onClick={() => setOp(o)} active={op === o}>
                <span className="text-xs font-mono font-bold">{o}</span>
              </PillButton>
            ))}
          </div>
        </div>
      }
      pseudocode={<PseudocodePanel lines={PSEUDO_OP[op]} activeLine={frame?.line} />}
      variables={<VariablesPanel vars={frame?.vars ?? {}} flashKeys={frame?.highlightKey ? [frame.highlightKey] : []} />}
    >
      <div className="flex flex-col gap-2">
        <BitRow label="a" value={frame?.a ?? 0} highlightBit={frame?.activeBit} />
        {op !== "NOT" && (
          <BitRow
            label={op === "SHL" || op === "SHR" ? `shift by ${frame?.b ?? 0}` : "b"}
            value={op === "SHL" || op === "SHR" ? 0 : (frame?.b ?? 0)}
            highlightBit={frame?.activeBit}
          />
        )}
        <div className="h-px bg-stone-200 dark:bg-white/10 my-1.5" />
        <BitRow label="result" value={frame?.result ?? 0} highlightBit={frame?.activeBit} color={THEME.success} />
        <Callout>{frame?.message ?? "Press play to step through."}</Callout>
      </div>
    </AlgoCanvas>
  );
}

function Power2Visualizer() {
  const [src, setSrc] = useState("16");
  const a = Number(src) || 16;
  const frames = useMemo(() => framesPow2(a & MAX), [a]);
  const player = useStepPlayer(frames);
  const frame = player.current;
  return (
    <AlgoCanvas
      title="isPowerOf2(n) via n & (n-1)"
      player={player}
      input={
        <InputEditor
          label="Number n (0-255)"
          value={src}
          presets={[{ label: "16", value: "16" }, { label: "18", value: "18" }, { label: "1", value: "1" }, { label: "0", value: "0" }]}
          onApply={(v) => { if (!Number.isNaN(Number(v))) setSrc(v); }}
        />
      }
      pseudocode={<PseudocodePanel lines={PSEUDO_P2} activeLine={frame?.line} />}
      variables={<VariablesPanel vars={frame?.vars ?? {}} flashKeys={frame?.highlightKey ? [frame.highlightKey] : []} />}
    >
      <div className="flex flex-col gap-2">
        <BitRow label="n" value={frame?.a ?? 0} highlightBit={frame?.activeBit} />
        <BitRow label="n-1" value={frame?.b ?? 0} highlightBit={frame?.activeBit} />
        <div className="h-px bg-stone-200 dark:bg-white/10 my-1.5" />
        <BitRow label="n & (n-1)" value={frame?.result ?? 0} highlightBit={frame?.activeBit} color={THEME.success} />
        <Callout>{frame?.message ?? "Press play to step through."}</Callout>
      </div>
    </AlgoCanvas>
  );
}

function PopcountVisualizer() {
  const [src, setSrc] = useState("11");
  const a = (Number(src) || 11) & MAX;
  const frames = useMemo(() => framesPopcount(a), [a]);
  const player = useStepPlayer(frames);
  const frame = player.current;
  return (
    <AlgoCanvas
      title="Brian Kernighan Popcount"
      player={player}
      input={
        <InputEditor
          label="Number n (0-255)"
          value={src}
          presets={[{ label: "11 (1011)", value: "11" }, { label: "255", value: "255" }, { label: "170", value: "170" }, { label: "0", value: "0" }]}
          onApply={(v) => { if (!Number.isNaN(Number(v))) setSrc(v); }}
        />
      }
      pseudocode={<PseudocodePanel lines={PSEUDO_POP} activeLine={frame?.line} />}
      variables={<VariablesPanel vars={frame?.vars ?? {}} flashKeys={frame?.highlightKey ? [frame.highlightKey] : []} />}
    >
      <div className="flex flex-col gap-2">
        <BitRow label="n" value={frame?.a ?? 0} />
        <BitRow label="n & (n-1)" value={frame?.b ?? 0} color={THEME.success} />
        <Callout>{frame?.message ?? "Press play to step through."}</Callout>
      </div>
    </AlgoCanvas>
  );
}

function XorArrayVisualizer() {
  const [src, setSrc] = useState("2, 3, 5, 2, 3");
  const arr = src.split(/[,\s]+/).map(Number).filter((x) => !Number.isNaN(x) && x >= 0 && x <= MAX);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const frames = useMemo(() => framesXorArray(arr.length > 0 ? arr : [2, 3, 5, 2, 3]), [src]);
  const player = useStepPlayer(frames);
  const frame = player.current;
  return (
    <AlgoCanvas
      title="XOR - Single Element (others in pairs)"
      player={player}
      input={
        <InputEditor
          label="Array (every number appears twice except one)"
          value={src}
          presets={[
            { label: "5 is unique", value: "2, 3, 5, 2, 3" },
            { label: "7 is unique", value: "1, 1, 4, 4, 7, 9, 9" },
            { label: "Single", value: "42" },
          ]}
          onApply={(v) => setSrc(v)}
        />
      }
      pseudocode={<PseudocodePanel lines={PSEUDO_XOR} activeLine={frame?.line} />}
      variables={<VariablesPanel vars={frame?.vars ?? {}} flashKeys={frame?.highlightKey ? [frame.highlightKey] : []} />}
    >
      <div className="flex flex-col gap-2.5">
        <div className="flex gap-1.5 justify-center flex-wrap">
          {(frame?.arr ?? []).map((v, i) => {
            const isActive = i === frame?.arrIdx;
            const isDone = i < (frame?.arrIdx ?? -1);
            return (
              <div
                key={i}
                className="px-2.5 py-1.5 rounded-md font-mono font-bold text-sm transition-all"
                style={{
                  border: isActive ? "1.5px solid #f59e0b" : isDone ? `1.5px solid ${THEME.success}` : `1.5px solid ${THEME.border}`,
                  background: isActive ? "rgba(245,158,11,0.1)" : isDone ? `${THEME.success}14` : THEME.bg,
                  color: THEME.text,
                }}
              >
                {v}
              </div>
            );
          })}
        </div>
        <BitRow label="accumulator" value={frame?.accumulator ?? 0} color={THEME.accent} />
        <BitRow label="result (final)" value={frame?.result ?? 0} color={THEME.success} />
        <Callout>{frame?.message ?? "Press play to step through."}</Callout>
      </div>
    </AlgoCanvas>
  );
}

function SubsetsVisualizer() {
  const [src, setSrc] = useState("3");
  const n = Math.max(1, Math.min(4, Number(src) || 3));
  const frames = useMemo(() => framesSubsets(n), [n]);
  const player = useStepPlayer(frames);
  const frame = player.current;
  const total = 1 << n;
  return (
    <AlgoCanvas
      title="All Subsets via Bitmask Enumeration"
      player={player}
      input={
        <InputEditor
          label="n - number of items (1-4)"
          value={src}
          presets={[{ label: "2", value: "2" }, { label: "3", value: "3" }, { label: "4", value: "4" }]}
          onApply={(v) => { const k = Number(v); if (k >= 1 && k <= 4) setSrc(String(k)); }}
        />
      }
      pseudocode={<PseudocodePanel lines={PSEUDO_SUBS} activeLine={frame?.line} />}
      variables={<VariablesPanel vars={frame?.vars ?? {}} />}
    >
      <div className="flex flex-col items-center gap-2.5">
        <div className="flex gap-1.5 flex-wrap justify-center max-w-2xl">
          {Array.from({ length: total }, (_, mask) => {
            const isActive = mask === frame?.subsetIndex;
            const isDone = (frame?.subsetIndex ?? -1) > mask;
            const bin = mask.toString(2).padStart(n, "0");
            const members: string[] = [];
            for (let i = 0; i < n; i++) if (mask & (1 << i)) members.push(String(i));
            return (
              <div
                key={mask}
                className="p-1.5 rounded-md text-center font-mono text-xs transition-all"
                style={{
                  border: isActive ? `1.5px solid ${THEME.accent}` : isDone ? `1.5px solid ${THEME.success}` : `1.5px solid ${THEME.border}`,
                  background: isActive ? `${THEME.accent}10` : isDone ? `${THEME.success}14` : THEME.bg,
                  color: THEME.text,
                  minWidth: 78,
                  boxShadow: isActive ? `0 0 0 2px ${THEME.accent}40` : "none",
                }}
              >
                <div className="font-extrabold">{bin}</div>
                <div className="text-stone-400">{`{${members.join(",") || "∅"}}`}</div>
              </div>
            );
          })}
        </div>
        <Callout className="w-full">{frame?.message ?? "Press play to step through."}</Callout>
      </div>
    </AlgoCanvas>
  );
}

/* ------------------------------------------------------------------ */
/*  Visualize (switcher)                                               */
/* ------------------------------------------------------------------ */

type DemoKey = "op" | "power2" | "popcount" | "xor-array" | "subsets";

function VisualizeTab() {
  const [demo, setDemo] = useState<DemoKey>("op");
  const DEMOS: { k: DemoKey; label: string }[] = [
    { k: "op", label: "Basic Operators" },
    { k: "power2", label: "isPowerOf2" },
    { k: "popcount", label: "Popcount (Kernighan)" },
    { k: "xor-array", label: "XOR Unique Element" },
    { k: "subsets", label: "Subset Enumeration" },
  ];
  return (
    <div className="flex flex-col gap-3.5">
      <div className="flex gap-1.5 flex-wrap">
        {DEMOS.map((d) => (
          <PillButton key={d.k} onClick={() => setDemo(d.k)} active={demo === d.k}>
            <span className="text-xs">{d.label}</span>
          </PillButton>
        ))}
      </div>
      {demo === "op" && <OpVisualizer />}
      {demo === "power2" && <Power2Visualizer />}
      {demo === "popcount" && <PopcountVisualizer />}
      {demo === "xor-array" && <XorArrayVisualizer />}
      {demo === "subsets" && <SubsetsVisualizer />}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Learn                                                               */
/* ------------------------------------------------------------------ */

function LearnTab() {
  const sections = [
    { title: "Why bits?", body: "Modern CPUs execute bitwise ops in one cycle. Problems that feel complex (subsets, state, toggles, masks, permissions) collapse to arithmetic on integers when you think in bits." },
    { title: "The six operators", body: "AND (&) - mask / check bit. OR (|) - set bit. XOR (^) - toggle / find difference. NOT (~) - flip all bits. << and >> - shift (multiply / divide by 2^k in integer world)." },
    { title: "XOR's magic", body: "x XOR x = 0 and x XOR 0 = x. So if every element appears twice except one, XOR-ing the whole array cancels the pairs and leaves the unique." },
    { title: "n & (n-1)", body: "A power of 2 has exactly one 1-bit. Subtracting 1 flips that bit and sets everything below. AND-ing gives 0. Same trick clears the lowest set bit, giving O(popcount) for counting 1s." },
    { title: "Masks as sets", body: "A bitmask of n bits represents a subset of {0..n-1}. Enumerate all subsets by counting from 0 to 2^n - 1. Essential for bitmask DP." },
    { title: "Interview favorites", body: "Complement arithmetic, shift-as-multiplication, two's-complement representation, and XOR tricks show up in almost every placement test." },
  ];
  return (
    <div className="flex flex-col gap-3.5">
      <div>
        <SectionEyebrow>Column-wise logic</SectionEyebrow>
        <SectionTitle>Every integer is a row of bits</SectionTitle>
        <Lede>
          Every integer is a row of bits. Every bitwise operator is column-wise logic between two rows.
          Thinking in binary turns integer problems into combinatorics on bits.
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
    { q: "Compute 12 & 10 in decimal.", answer: "8" },
    { q: "How many 1-bits in 170 (binary 10101010)?", answer: "4" },
    { q: "XOR of [4, 1, 2, 1, 2] = ?", answer: "4" },
    { q: "5 << 2 = ?", answer: "20" },
    { q: "Is 64 a power of 2? (yes/no)", answer: "yes" },
  ];
  const [guesses, setGuesses] = useState<string[]>(problems.map(() => ""));
  const [shown, setShown] = useState<boolean[]>(problems.map(() => false));
  return (
    <div className="flex flex-col gap-3">
      <Callout>Try each in your head, then reveal.</Callout>
      {problems.map((p, i) => {
        const correct = guesses[i].trim().toLowerCase() === p.answer;
        return (
          <Card key={i}>
            <div className="text-sm text-stone-900 dark:text-stone-50 mb-2.5 leading-relaxed">{p.q}</div>
            <div className="flex gap-2 items-center flex-wrap">
              <input
                value={guesses[i]}
                onChange={(e) => { const g = [...guesses]; g[i] = e.target.value; setGuesses(g); }}
                placeholder="your answer"
                className="px-2.5 py-1.5 rounded-md border border-stone-200 dark:border-white/10 bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-50 font-mono text-sm w-28 outline-none focus:border-lime-400"
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
                    color: correct ? THEME.successDark : THEME.danger,
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
        <SubHeading>Essential bit tricks cheatsheet</SubHeading>
        <ul className="text-sm text-stone-600 dark:text-stone-400 leading-loose pl-5 list-disc space-y-0.5 font-mono">
          <li>Check if bit i is set: <InlineCode>(n &gt;&gt; i) &amp; 1</InlineCode></li>
          <li>Set bit i: <InlineCode>n | (1 &lt;&lt; i)</InlineCode></li>
          <li>Clear bit i: <InlineCode>n &amp; ~(1 &lt;&lt; i)</InlineCode></li>
          <li>Toggle bit i: <InlineCode>n ^ (1 &lt;&lt; i)</InlineCode></li>
          <li>Lowest set bit: <InlineCode>n &amp; -n</InlineCode></li>
          <li>Clear lowest set bit: <InlineCode>n &amp; (n-1)</InlineCode></li>
          <li>Is power of 2: <InlineCode>n &gt; 0 &amp;&amp; (n &amp; (n-1)) == 0</InlineCode></li>
          <li>Swap without temp: <InlineCode>a ^= b; b ^= a; a ^= b</InlineCode></li>
        </ul>
      </Card>
      <Card>
        <SubHeading>Interview trap: two&rsquo;s complement</SubHeading>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          In 8-bit two&rsquo;s complement, -1 = 11111111 and ~n = -n - 1. Shifting signed numbers is
          implementation-defined in some languages; arithmetic shift right preserves the sign bit.
          Always specify signed vs unsigned on MCQs.
        </p>
      </Card>
      <Card>
        <SubHeading>Stdlib popcount: never reimplement</SubHeading>
        <ul className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed pl-5 list-disc space-y-1">
          <li><strong className="text-stone-900 dark:text-stone-50">C/C++:</strong> <InlineCode>__builtin_popcount(x)</InlineCode>. C++20: <InlineCode>std::popcount</InlineCode> in <InlineCode>&lt;bit&gt;</InlineCode>. Compiles to a single <InlineCode>POPCNT</InlineCode> instruction on x86.</li>
          <li><strong className="text-stone-900 dark:text-stone-50">Java:</strong> <InlineCode>Integer.bitCount(x)</InlineCode> and <InlineCode>Long.bitCount(x)</InlineCode>.</li>
          <li><strong className="text-stone-900 dark:text-stone-50">Python 3.10+:</strong> <InlineCode>x.bit_count()</InlineCode>. Pre-3.10: <InlineCode>bin(x).count(&apos;1&apos;)</InlineCode>.</li>
          <li><strong className="text-stone-900 dark:text-stone-50">JS:</strong> No builtin. Bitwise ops in JS are 32-bit signed only.</li>
        </ul>
      </Card>
      <Card>
        <SubHeading><InlineCode>x &amp; -x</InlineCode>: the foundation of Fenwick tree</SubHeading>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          <InlineCode>x &amp; -x</InlineCode> isolates the lowest set bit (because <InlineCode>-x = ~x + 1</InlineCode> in two&apos;s complement).
          For 12 = 1100 base 2, -12 = 0100 base 2, AND = 0100 base 2 = 4.
          The Fenwick tree&apos;s <InlineCode>j += j &amp; -j</InlineCode> (update) and <InlineCode>j -= j &amp; -j</InlineCode> (query) walks exactly the right power-of-two ancestors.
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

export default function L7_BitManipulation({ onQuizComplete }: Props) {
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
      question: "Which expression correctly tests whether n is a power of 2 (for n > 0)?",
      options: ["n % 2 == 0", "(n & (n - 1)) == 0", "(n | (n - 1)) == 0", "n ^ (n - 1) == 1"],
      correctIndex: 1,
      explanation: "A power of 2 has exactly one set bit; n-1 flips that bit and sets all lower bits. AND gives 0.",
    },
    {
      question: "XOR of [6, 2, 4, 6, 2] equals:",
      options: ["0", "4", "2", "6"],
      correctIndex: 1,
      explanation: "XOR is commutative and associative. Pairs of equal values cancel: 6^6 = 0, 2^2 = 0, leaving 4.",
    },
    {
      question: "After (x = 5) and (x <<= 2), what is x? (8-bit unsigned)",
      options: ["5", "10", "20", "40"],
      correctIndex: 2,
      explanation: "Shift left by 2 multiplies by 4: 5 x 4 = 20 (binary 00000101 -> 00010100).",
    },
    {
      question: "How many iterations does Brian Kernighan's popcount run for n = 14?",
      options: ["2", "3", "4", "14"],
      correctIndex: 1,
      explanation: "14 = 1110 base 2 has 3 set bits. Each iteration clears one set bit, so exactly 3 iterations.",
    },
  ];

  return (
    <LessonShell
      title="Bit Manipulation"
      level={7}
      lessonNumber={1}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="High - XOR tricks, masks, two's complement, popcount"
      nextLessonHint="Disjoint Set Union (Union-Find)"
      onQuizComplete={onQuizComplete}
    />
  );
}

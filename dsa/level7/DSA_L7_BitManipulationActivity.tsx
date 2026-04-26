"use client";

import { useMemo, useState } from "react";
import { BookOpen, Play, Target, Lightbulb } from "lucide-react";
import EngineeringLessonShell, { EngTabDef, EngQuizQuestion } from "@/components/engineering/EngineeringLessonShell";
import {
  AlgoCanvas, PseudocodePanel, VariablesPanel, InputEditor, useStepPlayer,
} from "@/components/engineering/algo";
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
/*  Core types                                                         */
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
  // popcount & xor-array specific
  arr?: number[];
  arrIdx?: number;
  accumulator?: number;
  subsetIndex?: number;
}

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
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
/*  Frame builders                                                     */
/* ------------------------------------------------------------------ */

const PSEUDO_OP: Record<Op, string[]> = {
  AND: ["# Bitwise AND (column-wise)", "for bit i from 7 down to 0:", "  r[i] ← a[i] AND b[i]"],
  OR:  ["# Bitwise OR (column-wise)",  "for bit i from 7 down to 0:", "  r[i] ← a[i] OR b[i]"],
  XOR: ["# Bitwise XOR (column-wise)", "for bit i from 7 down to 0:", "  r[i] ← a[i] XOR b[i]"],
  NOT: ["# Bitwise NOT", "for bit i from 7 down to 0:", "  r[i] ← 1 − a[i]"],
  SHL: ["# Shift Left by b", "shift all bits left by b:", "  r ← (a << b) & 0xFF"],
  SHR: ["# Shift Right by b", "shift all bits right by b:", "  r ← (a >> b)"],
};

const PSEUDO_P2 = [
  "# isPowerOf2(n)",
  "return n > 0 and (n & (n - 1)) = 0",
  "# Reason: a power of 2 has exactly one 1-bit,",
  "# n - 1 flips that bit and all lower bits,",
  "# so AND becomes 0.",
];

const PSEUDO_POP = [
  "# Brian Kernighan's popcount",
  "count ← 0",
  "while n ≠ 0:",
  "  n ← n & (n - 1)   # clears lowest 1-bit",
  "  count ← count + 1",
  "return count",
];

const PSEUDO_XOR = [
  "# Find the single element (others appear twice)",
  "result ← 0",
  "for x in arr:",
  "  result ← result XOR x",
  "return result",
];

const PSEUDO_SUBS = [
  "# Generate all subsets of n items",
  "for mask from 0 to 2^n - 1:",
  "  subset ← {i | bit i of mask = 1}",
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
    line: 1, vars: { n: a, "n&(n-1)": a & am1, "isPowerOf2": r ? "true" : "false" },
    message: r ? `${a} has one 1-bit → power of 2 ✓` : `${a} has multiple 1-bits → NOT a power of 2.`,
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
      message: `mask=${mask} (${mask.toString(2).padStart(n, "0")}) → subset {${members.join(",")}}.`,
      a: mask, b: 0, result: mask, demo: "subsets", subsetIndex: mask,
    });
  }
  return frames;
}

/* ------------------------------------------------------------------ */
/*  Bit row renderer                                                   */
/* ------------------------------------------------------------------ */

function BitRow({
  label, value, highlightBit, color, onClickBit,
}: {
  label: string; value: number;
  highlightBit?: number; color?: string;
  onClickBit?: (i: number) => void;
}) {
  const bits = toBits(value);
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <div style={{
        width: 100, fontSize: "0.78rem", fontWeight: 700, color: C.textMuted,
        textAlign: "right", fontFamily: C.heading,
      }}>
        {label}
      </div>
      <div style={{
        minWidth: 52, textAlign: "center", padding: "4px 8px", borderRadius: 6,
        background: C.bgSoft, border: `1px solid ${C.border}`,
        fontFamily: C.mono, fontWeight: 800, fontSize: "1rem",
        color: C.text,
      }}>
        {value}
      </div>
      <div style={{ display: "flex", gap: 2 }}>
        {bits.map((b, idx) => {
          const bitPos = BITS - 1 - idx;
          const isActive = highlightBit === bitPos;
          const c = color ?? (b ? A : C.bg);
          return (
            <button
              key={idx}
              onClick={() => onClickBit?.(bitPos)}
              disabled={!onClickBit}
              title={`bit ${bitPos}`}
              style={{
                width: 30, height: 30, borderRadius: 4,
                border: isActive ? "2px solid #f59e0b" : `1.5px solid ${b ? A : C.border}`,
                background: b ? c : C.bg,
                color: b ? "#fff" : C.textMuted,
                fontFamily: C.mono, fontWeight: 800, fontSize: "0.9rem",
                cursor: onClickBit ? "pointer" : "default",
                boxShadow: isActive ? "0 0 0 3px rgba(245,158,11,0.25)" : "none",
                transition: "all 0.25s",
              }}
            >
              {b}
            </button>
          );
        })}
      </div>
      <div style={{
        fontSize: "0.62rem", color: C.textMuted,
        fontFamily: C.mono, marginLeft: 4,
      }}>
        {toBits(value).join("")}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Visualize (Op mode)                                                */
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
  const frame = player.current!;

  return (
    <AlgoCanvas
      title={`Bitwise ${op}`}
      player={player}
      input={
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
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
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
            {(["AND", "OR", "XOR", "NOT", "SHL", "SHR"] as Op[]).map((o) => (
              <PillButton key={o} onClick={() => setOp(o)} active={op === o} color={A}>
                <span style={{ fontSize: "0.78rem" }}>{o}</span>
              </PillButton>
            ))}
          </div>
        </div>
      }
      pseudocode={<PseudocodePanel lines={PSEUDO_OP[op]} activeLine={frame.line} />}
      variables={<VariablesPanel vars={frame.vars} flashKeys={frame.highlightKey ? [frame.highlightKey] : []} />}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <BitRow label="a" value={frame.a} highlightBit={frame.activeBit} />
        {op !== "NOT" && <BitRow label={op === "SHL" || op === "SHR" ? `shift by ${frame.b}` : "b"} value={op === "SHL" || op === "SHR" ? 0 : frame.b} highlightBit={frame.activeBit} />}
        <div style={{ height: 1, background: C.border, margin: "6px 0" }} />
        <BitRow label="result" value={frame.result} highlightBit={frame.activeBit} color={C.success} />
        <Callout accent={A}>{frame.message}</Callout>
      </div>
    </AlgoCanvas>
  );
}

function Power2Visualizer() {
  const [src, setSrc] = useState("16");
  const a = Number(src) || 16;
  const frames = useMemo(() => framesPow2(a & MAX), [a]);
  const player = useStepPlayer(frames);
  const frame = player.current!;
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
      pseudocode={<PseudocodePanel lines={PSEUDO_P2} activeLine={frame.line} />}
      variables={<VariablesPanel vars={frame.vars} flashKeys={frame.highlightKey ? [frame.highlightKey] : []} />}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <BitRow label="n" value={frame.a} highlightBit={frame.activeBit} />
        <BitRow label="n-1" value={frame.b} highlightBit={frame.activeBit} />
        <div style={{ height: 1, background: C.border, margin: "6px 0" }} />
        <BitRow label="n & (n-1)" value={frame.result} highlightBit={frame.activeBit} color={C.success} />
        <Callout accent={A}>{frame.message}</Callout>
      </div>
    </AlgoCanvas>
  );
}

function PopcountVisualizer() {
  const [src, setSrc] = useState("11");
  const a = (Number(src) || 11) & MAX;
  const frames = useMemo(() => framesPopcount(a), [a]);
  const player = useStepPlayer(frames);
  const frame = player.current!;
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
      pseudocode={<PseudocodePanel lines={PSEUDO_POP} activeLine={frame.line} />}
      variables={<VariablesPanel vars={frame.vars} flashKeys={frame.highlightKey ? [frame.highlightKey] : []} />}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <BitRow label="n" value={frame.a} />
        <BitRow label="n & (n-1)" value={frame.b} color={C.success} />
        <Callout accent={A}>{frame.message}</Callout>
      </div>
    </AlgoCanvas>
  );
}

function XorArrayVisualizer() {
  const [src, setSrc] = useState("2, 3, 5, 2, 3");
  const arr = src.split(/[,\s]+/).map(Number).filter((x) => !Number.isNaN(x) && x >= 0 && x <= MAX);
  const frames = useMemo(() => framesXorArray(arr.length > 0 ? arr : [2, 3, 5, 2, 3]), [src]); // eslint-disable-line react-hooks/exhaustive-deps
  const player = useStepPlayer(frames);
  const frame = player.current!;
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
      pseudocode={<PseudocodePanel lines={PSEUDO_XOR} activeLine={frame.line} />}
      variables={<VariablesPanel vars={frame.vars} flashKeys={frame.highlightKey ? [frame.highlightKey] : []} />}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <div style={{ display: "flex", gap: 4, justifyContent: "center", flexWrap: "wrap" }}>
          {(frame.arr ?? []).map((v, i) => {
            const isActive = i === frame.arrIdx;
            const isDone = i < (frame.arrIdx ?? -1);
            return (
              <div key={i} style={{
                padding: "6px 10px", borderRadius: 6, border: "1.5px solid",
                borderColor: isActive ? "#f59e0b" : isDone ? C.success : C.border,
                background: isActive ? "rgba(245,158,11,0.1)" : isDone ? `${C.success}14` : C.bg,
                fontFamily: C.mono, fontWeight: 700, fontSize: "0.9rem",
                color: C.text,
                transition: "all 0.3s ease",
              }}>
                {v}
              </div>
            );
          })}
        </div>
        <BitRow label="accumulator" value={frame.accumulator ?? 0} color={A} />
        <BitRow label="result (final)" value={frame.result} color={C.success} />
        <Callout accent={A}>{frame.message}</Callout>
      </div>
    </AlgoCanvas>
  );
}

function SubsetsVisualizer() {
  const [src, setSrc] = useState("3");
  const n = Math.max(1, Math.min(4, Number(src) || 3));
  const frames = useMemo(() => framesSubsets(n), [n]);
  const player = useStepPlayer(frames);
  const frame = player.current!;
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
      pseudocode={<PseudocodePanel lines={PSEUDO_SUBS} activeLine={frame.line} />}
      variables={<VariablesPanel vars={frame.vars} />}
    >
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
        <div style={{ display: "flex", gap: 4, flexWrap: "wrap", justifyContent: "center", maxWidth: 620 }}>
          {Array.from({ length: total }, (_, mask) => {
            const isActive = mask === frame.subsetIndex;
            const isDone = (frame.subsetIndex ?? -1) > mask;
            const bin = mask.toString(2).padStart(n, "0");
            const members: string[] = [];
            for (let i = 0; i < n; i++) if (mask & (1 << i)) members.push(String(i));
            return (
              <div key={mask} style={{
                padding: "6px 8px", borderRadius: 6, border: "1.5px solid",
                borderColor: isActive ? A : isDone ? C.success : C.border,
                background: isActive ? `${A}10` : isDone ? `${C.success}14` : C.bg,
                fontFamily: C.mono, fontSize: "0.78rem",
                color: C.text,
                textAlign: "center", minWidth: 78,
                transition: "all 0.25s ease",
                boxShadow: isActive ? `0 0 0 2px ${A}40` : "none",
              }}>
                <div style={{ fontWeight: 800 }}>{bin}</div>
                <div style={{ fontSize: "0.66rem", color: C.textMuted }}>
                  {`{${members.join(",") || "∅"}}`}
                </div>
              </div>
            );
          })}
        </div>
        <Callout accent={A}>{frame.message}</Callout>
      </div>
    </AlgoCanvas>
  );
}

/* ------------------------------------------------------------------ */
/*  Tab switcher                                                       */
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
    <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
      <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
        {DEMOS.map((d) => (
          <PillButton key={d.k} onClick={() => setDemo(d.k)} active={demo === d.k} color={A}>
            <span style={{ fontSize: "0.78rem" }}>{d.label}</span>
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
/*  Learn / Try / Insight                                              */
/* ------------------------------------------------------------------ */

function LearnTab() {
  const sections = [
    { title: "Why bits?", body: "Modern CPUs execute bitwise ops in one cycle. Problems that feel complex (subsets, state, toggles, masks, permissions) collapse to arithmetic on integers when you think in bits." },
    { title: "The six operators", body: "AND (&) - mask / check bit. OR (|) - set bit. XOR (^) - toggle / find difference. NOT (~) - flip all bits. << and >> - shift (multiply / divide by 2^k in integer world)." },
    { title: "XOR's magic", body: "x XOR x = 0 and x XOR 0 = x. So if every element appears twice except one, XOR-ing the whole array cancels the pairs and leaves the unique." },
    { title: "n & (n-1)", body: "A power of 2 has exactly one 1-bit. Subtracting 1 flips that bit and sets everything below - AND-ing gives 0. Same trick 'clears the lowest set bit', giving us O(popcount) for counting 1s." },
    { title: "Masks as sets", body: "A bitmask of n bits represents a subset of {0..n-1}. Enumerate all subsets by counting from 0 to 2^n − 1. Essential for bitmask DP." },
    { title: "Interview favorites", body: "Complement arithmetic, shift-as-multiplication, two's-complement representation, and XOR tricks show up in almost every placement test." },
  ];
  return (
    <div style={{ fontFamily: C.heading, display: "flex", flexDirection: "column", gap: 14 }}>
      <div>
        <SectionEyebrow color={A}>Column-wise logic</SectionEyebrow>
        <SectionTitle>Every integer is a row of bits</SectionTitle>
        <Lede>
          Every integer is a row of bits. Every bitwise operator is column-wise logic between two rows.
          Thinking in binary turns integer problems into combinatorics on bits.
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
    { q: "Compute 12 & 10 in decimal.", answer: "8" },
    { q: "How many 1-bits in 170 (binary 10101010)?", answer: "4" },
    { q: "XOR of [4, 1, 2, 1, 2] = ?", answer: "4" },
    { q: "5 << 2 = ?", answer: "20" },
    { q: "Is 64 a power of 2? (yes/no)", answer: "yes" },
  ];
  const [guesses, setGuesses] = useState<string[]>(problems.map(() => ""));
  const [shown, setShown] = useState<boolean[]>(problems.map(() => false));
  return (
    <div style={{ fontFamily: C.heading, display: "flex", flexDirection: "column", gap: 12 }}>
      <Callout accent={A}>Try each in your head - then reveal.</Callout>
      {problems.map((p, i) => {
        const correct = guesses[i].trim().toLowerCase() === p.answer;
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
                  fontFamily: C.mono, width: 120,
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
        <SubHeading>Essential bit tricks cheatsheet</SubHeading>
        <ul style={{ fontSize: "0.9rem", color: C.textSecondary, lineHeight: 1.8, paddingLeft: 22, margin: 0, fontFamily: C.mono }}>
          <li>Check if bit i is set: <code>(n &gt;&gt; i) &amp; 1</code></li>
          <li>Set bit i: <code>n | (1 &lt;&lt; i)</code></li>
          <li>Clear bit i: <code>n &amp; ~(1 &lt;&lt; i)</code></li>
          <li>Toggle bit i: <code>n ^ (1 &lt;&lt; i)</code></li>
          <li>Lowest set bit: <code>n &amp; -n</code></li>
          <li>Clear lowest set bit: <code>n &amp; (n-1)</code></li>
          <li>Is power of 2: <code>n &gt; 0 &amp;&amp; (n &amp; (n-1)) == 0</code></li>
          <li>Swap without temp: <code>a ^= b; b ^= a; a ^= b</code></li>
        </ul>
      </Card>
      <Card>
        <SubHeading>Interview trap - two&rsquo;s complement</SubHeading>
        <p style={{ fontSize: "0.9rem", color: C.textSecondary, lineHeight: 1.6, margin: 0 }}>
          In 8-bit two&rsquo;s complement, &minus;1 = 11111111 and ~n = &minus;n &minus; 1. Shifting signed numbers is implementation-defined in some languages; arithmetic shift right preserves the sign bit. Always specify signed vs unsigned on MCQs.
        </p>
      </Card>
      <Card>
        <SubHeading>Stdlib popcount — never reimplement</SubHeading>
        <ul style={{ fontSize: "0.9rem", color: C.textSecondary, lineHeight: 1.7, paddingLeft: 22, margin: 0 }}>
          <li>
            <strong>C/C++ (GCC/Clang)</strong>: <code style={{ fontFamily: C.mono }}>__builtin_popcount(x)</code> for unsigned int, <code>__builtin_popcountll</code> for unsigned long long. C++20 added <code>std::popcount</code> in <code>&lt;bit&gt;</code>. On modern x86 these compile to the single <code>POPCNT</code> instruction (1 cycle).
          </li>
          <li>
            <strong>Java</strong>: <code style={{ fontFamily: C.mono }}>Integer.bitCount(x)</code> and <code>Long.bitCount(x)</code>. Also <code>Integer.numberOfTrailingZeros</code> (lowest-set-bit position), <code>numberOfLeadingZeros</code>, <code>highestOneBit</code>, <code>reverse</code>.
          </li>
          <li>
            <strong>Python 3.10+</strong>: <code style={{ fontFamily: C.mono }}>x.bit_count()</code> as an int method. Pre-3.10 idiom: <code>bin(x).count(&apos;1&apos;)</code> (slower, allocates a string but works everywhere).
          </li>
          <li>
            <strong>JS</strong>: no builtin. Use <code>x.toString(2).split(&apos;1&apos;).length - 1</code>, or write Brian Kernighan&apos;s loop. Note: bitwise ops in JS are 32-bit signed only — <code>(0xFFFFFFFF | 0) === -1</code>.
          </li>
        </ul>
      </Card>
      <Card>
        <SubHeading><code>x &amp; -x</code> — the foundation of Fenwick tree</SubHeading>
        <p style={{ fontSize: "0.9rem", color: C.textSecondary, lineHeight: 1.6, margin: 0 }}>
          The trick that powers Binary Indexed Trees: <code>x &amp; -x</code> isolates the lowest set bit (because <code>-x = ~x + 1</code> in two&apos;s complement). For 12 = 1100₂ → -12 = 0100₂ → AND = 0100₂ = 4. The Fenwick tree&apos;s <code>j += j &amp; -j</code> (update) and <code>j -= j &amp; -j</code> (query) walks exactly the right power-of-two ancestors. Without this trick the data structure would need explicit parent pointers.
        </p>
      </Card>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Activity                                                            */
/* ------------------------------------------------------------------ */

export default function DSA_L7_BitManipulationActivity() {
  const tabs: EngTabDef[] = [
    { id: "learn", label: "Learn", icon: <BookOpen className="w-4 h-4" />, content: <LearnTab /> },
    { id: "visualize", label: "Visualize", icon: <Play className="w-4 h-4" />, content: <VisualizeTab /> },
    { id: "try", label: "Try It", icon: <Target className="w-4 h-4" />, content: <TryTab /> },
    { id: "insight", label: "Insight", icon: <Lightbulb className="w-4 h-4" />, content: <InsightTab /> },
  ];
  const quiz: EngQuizQuestion[] = [
    {
      question: "Which expression correctly tests whether n is a power of 2 (for n > 0)?",
      options: ["n % 2 == 0", "(n & (n - 1)) == 0", "(n | (n - 1)) == 0", "n ^ (n - 1) == 1"],
      correctIndex: 1,
      explanation: "A power of 2 has exactly one set bit; n-1 flips that bit and sets all lower - AND gives 0.",
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
      explanation: "Shift left by 2 multiplies by 4: 5 × 4 = 20 (binary 00000101 → 00010100).",
    },
    {
      question: "How many iterations does Brian Kernighan's popcount run for n = 14?",
      options: ["2", "3", "4", "14"],
      correctIndex: 1,
      explanation: "14 = 1110₂ has 3 set bits. Each iteration clears one set bit → exactly 3 iterations.",
    },
  ];
  return (
    <EngineeringLessonShell
      title="Bit Manipulation"
      level={7}
      lessonNumber={4}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="High - XOR tricks, masks, two's complement, popcount"
      nextLessonHint="Advanced Graph Algorithms - SCC & Floyd-Warshall"
    />
  );
}

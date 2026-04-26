"use client";

import { useMemo, useState } from "react";
import { BookOpen, Play, Target, Lightbulb } from "lucide-react";
import EngineeringLessonShell, { EngTabDef, EngQuizQuestion } from "@/components/engineering/EngineeringLessonShell";
import {
  AlgoCanvas, PseudocodePanel, VariablesPanel, InputEditor, useStepPlayer, ArrayBars,
} from "@/components/engineering/algo";
import type { CellState } from "@/components/engineering/algo";
import {
  C, DSA_ACCENT as A,
  SectionEyebrow, SectionTitle, SubHeading, Lede,
  Card, PillButton, Callout,
} from "@/components/engineering/lessonPrimitives";

/* ------------------------------------------------------------------ */
/*  Common                                                             */
/* ------------------------------------------------------------------ */

interface Frame {
  line: number;
  vars: Record<string, string | number | undefined>;
  message: string;
  // Counting / Radix
  input?: number[];
  inputStates?: (CellState | undefined)[];
  inputPointers?: Record<string, number>;
  count?: number[];
  countStates?: (CellState | undefined)[];
  countPointers?: Record<string, number>;
  output?: (number | null)[];
  outputStates?: (CellState | undefined)[];
  outputPointers?: Record<string, number>;
  // Bucket
  buckets?: number[][];
  bucketActive?: number;
  bucketStates?: (CellState | undefined)[][];
  highlightKey?: string;
}

function parseArr(s: string, max = 10): number[] | null {
  const nums = s.split(/[,\s]+/).filter(Boolean).map((x) => Number(x.trim()));
  if (nums.some((n) => Number.isNaN(n) || n < 0)) return null;
  if (nums.length < 2 || nums.length > max) return null;
  return nums;
}

/* ------------------------------------------------------------------ */
/*  Counting Sort                                                      */
/* ------------------------------------------------------------------ */

const PSEUDO_COUNTING = [
  "function countingSort(A, k):",
  "  count ← array of k+1 zeros",
  "  for x in A: count[x] += 1",
  "  for i from 1 to k: count[i] += count[i-1]",
  "  output ← empty array of length n",
  "  for i from n-1 down to 0:",
  "    output[count[A[i]] - 1] ← A[i]",
  "    count[A[i]] -= 1",
];

function buildCountingFrames(arr: number[]): Frame[] {
  const n = arr.length;
  const k = Math.max(...arr);
  const count = new Array(k + 1).fill(0);
  const output: (number | null)[] = new Array(n).fill(null);
  const f: Frame[] = [];

  f.push({
    line: 0, vars: { n, k }, message: `Counting sort on ${n} elements, max value k = ${k}.`,
    input: [...arr], count: [...count], output: [...output],
  });
  f.push({
    line: 1, vars: { n, k }, message: `Create count array of size ${k + 1}, all zeros.`,
    input: [...arr], count: [...count], output: [...output],
  });

  for (let i = 0; i < n; i++) {
    count[arr[i]]++;
    const inputSt: (CellState | undefined)[] = arr.map((_, kk) => (kk === i ? "compare" : "default"));
    const cntSt: (CellState | undefined)[] = count.map((_, kk) => (kk === arr[i] ? "active" : "default"));
    f.push({
      line: 2, vars: { i, "A[i]": arr[i], "count[A[i]]": count[arr[i]] }, message: `Count occurrences: count[${arr[i]}] → ${count[arr[i]]}`,
      input: [...arr], inputStates: inputSt, inputPointers: { i },
      count: [...count], countStates: cntSt, countPointers: { "A[i]": arr[i] },
      output: [...output],
      highlightKey: `count[${arr[i]}]`,
    });
  }

  for (let i = 1; i <= k; i++) {
    count[i] += count[i - 1];
    const cntSt: (CellState | undefined)[] = count.map((_, kk) => (kk === i ? "swap" : kk === i - 1 ? "compare" : "default"));
    f.push({
      line: 3, vars: { i, "count[i]": count[i] }, message: `Cumulative: count[${i}] += count[${i - 1}] → ${count[i]}. Now count[x] tells us the position after the last x in output.`,
      input: [...arr], count: [...count], countStates: cntSt, countPointers: { i },
      output: [...output],
    });
  }

  f.push({
    line: 4, vars: { n }, message: `Allocate output array of length ${n}.`,
    input: [...arr], count: [...count], output: [...output],
  });

  for (let i = n - 1; i >= 0; i--) {
    const pos = count[arr[i]] - 1;
    output[pos] = arr[i];
    count[arr[i]]--;
    const inputSt: (CellState | undefined)[] = arr.map((_, kk) => (kk === i ? "compare" : "default"));
    const cntSt: (CellState | undefined)[] = count.map((_, kk) => (kk === arr[i] ? "active" : "default"));
    const outSt: (CellState | undefined)[] = output.map((_, kk) => (kk === pos ? "done" : output[kk] !== null ? "sorted" : "default"));
    f.push({
      line: 6, vars: { i, "A[i]": arr[i], pos }, message: `Place A[${i}] = ${arr[i]} at output[${pos}]. Decrement count[${arr[i]}] to ${count[arr[i]]}.`,
      input: [...arr], inputStates: inputSt, inputPointers: { i },
      count: [...count], countStates: cntSt, countPointers: { "A[i]": arr[i] },
      output: [...output], outputStates: outSt, outputPointers: { pos },
    });
  }

  f.push({
    line: 0, vars: { n, k }, message: `Done. Output: [${output.join(", ")}].`,
    input: [...arr], output: [...output], outputStates: output.map(() => "sorted" as CellState),
  });

  return f;
}

/* ------------------------------------------------------------------ */
/*  Radix Sort (LSD)                                                   */
/* ------------------------------------------------------------------ */

const PSEUDO_RADIX = [
  "function radixSort(A):",
  "  d ← number of digits in max(A)",
  "  for digit from 0 to d-1:        // LSD: units, tens, hundreds...",
  "    A ← stable counting sort of A by this digit",
  "  return A",
];

function buildRadixFrames(input: number[]): Frame[] {
  const arr = [...input];
  const n = arr.length;
  const max = Math.max(...arr);
  const d = Math.max(1, Math.floor(Math.log10(Math.max(1, max))) + 1);
  const f: Frame[] = [];

  f.push({
    line: 0, vars: { n, max, digits: d }, message: `Radix sort: ${n} numbers, max = ${max}, ${d} digit(s).`,
    input: [...arr],
  });

  for (let pass = 0; pass < d; pass++) {
    const place = Math.pow(10, pass);
    const count = new Array(10).fill(0);
    f.push({
      line: 2, vars: { digit: pass, place }, message: `Pass ${pass + 1}: sort by digit at place ${place} (${["units", "tens", "hundreds", "thousands"][pass] ?? `10^${pass}`}).`,
      input: [...arr],
    });

    // count
    for (let i = 0; i < n; i++) {
      const d0 = Math.floor(arr[i] / place) % 10;
      count[d0]++;
      const inputSt: (CellState | undefined)[] = arr.map((_, kk) => (kk === i ? "compare" : "default"));
      const cntSt: (CellState | undefined)[] = count.map((_, kk) => (kk === d0 ? "active" : "default"));
      f.push({
        line: 3, vars: { i, "A[i]": arr[i], digit: d0 }, message: `A[${i}] = ${arr[i]}, digit at place ${place} = ${d0}. count[${d0}] → ${count[d0]}`,
        input: [...arr], inputStates: inputSt, inputPointers: { i },
        count: [...count], countStates: cntSt, countPointers: { digit: d0 },
      });
    }

    // cumulative
    for (let i = 1; i < 10; i++) count[i] += count[i - 1];
    f.push({
      line: 3, vars: { digit: pass }, message: `Cumulative counts computed.`,
      input: [...arr], count: [...count],
    });

    // place
    const output: (number | null)[] = new Array(n).fill(null);
    for (let i = n - 1; i >= 0; i--) {
      const d0 = Math.floor(arr[i] / place) % 10;
      const pos = count[d0] - 1;
      output[pos] = arr[i];
      count[d0]--;
      const inputSt: (CellState | undefined)[] = arr.map((_, kk) => (kk === i ? "compare" : "default"));
      const outSt: (CellState | undefined)[] = output.map((_, kk) => (kk === pos ? "done" : output[kk] !== null ? "sorted" : "default"));
      f.push({
        line: 3, vars: { i, "A[i]": arr[i], digit: d0, pos }, message: `Place A[${i}] = ${arr[i]} at output[${pos}]`,
        input: [...arr], inputStates: inputSt, inputPointers: { i },
        count: [...count], output: [...output], outputStates: outSt, outputPointers: { pos },
      });
    }

    for (let i = 0; i < n; i++) arr[i] = output[i]!;
    f.push({
      line: 3, vars: { digit: pass }, message: `End of pass ${pass + 1}. Array: [${arr.join(", ")}]`,
      input: [...arr], inputStates: arr.map(() => "sorted" as CellState), highlightKey: "digit",
    });
  }

  f.push({
    line: 0, vars: { n, digits: d }, message: `Done. Sorted: [${arr.join(", ")}]`,
    input: [...arr], inputStates: arr.map(() => "sorted" as CellState),
  });

  return f;
}

/* ------------------------------------------------------------------ */
/*  Bucket Sort                                                        */
/* ------------------------------------------------------------------ */

const PSEUDO_BUCKET = [
  "function bucketSort(A, k):",
  "  create k empty buckets",
  "  for x in A:",
  "    place x into bucket ⌊x · k / (max+1)⌋",
  "  for each bucket: sort (insertion sort)",
  "  concatenate buckets in order",
];

function buildBucketFrames(input: number[], numBuckets = 4): Frame[] {
  const arr = [...input];
  const n = arr.length;
  const max = Math.max(...arr);
  const buckets: number[][] = Array.from({ length: numBuckets }, () => []);
  const f: Frame[] = [];

  f.push({
    line: 0, vars: { n, buckets: numBuckets }, message: `Bucket sort with ${numBuckets} buckets on [${arr.join(", ")}]`,
    input: [...arr], buckets: buckets.map((b) => [...b]),
  });
  f.push({
    line: 1, vars: { buckets: numBuckets }, message: `Created ${numBuckets} empty buckets.`,
    input: [...arr], buckets: buckets.map((b) => [...b]),
  });

  for (let i = 0; i < n; i++) {
    const bIdx = Math.min(numBuckets - 1, Math.floor((arr[i] * numBuckets) / (max + 1)));
    buckets[bIdx].push(arr[i]);
    const inputSt: (CellState | undefined)[] = arr.map((_, kk) => (kk === i ? "compare" : "default"));
    f.push({
      line: 3, vars: { i, "A[i]": arr[i], bucket: bIdx }, message: `A[${i}] = ${arr[i]} goes into bucket ${bIdx}.`,
      input: [...arr], inputStates: inputSt, inputPointers: { i },
      buckets: buckets.map((b) => [...b]), bucketActive: bIdx,
    });
  }

  for (let b = 0; b < numBuckets; b++) {
    if (buckets[b].length < 2) {
      f.push({
        line: 4, vars: { bucket: b }, message: `Bucket ${b} has ${buckets[b].length} element(s) - already sorted.`,
        input: [...arr], buckets: buckets.map((bb) => [...bb]), bucketActive: b,
      });
      continue;
    }
    const bucket = buckets[b];
    f.push({
      line: 4, vars: { bucket: b, size: bucket.length }, message: `Insertion-sort bucket ${b}: [${bucket.join(", ")}]`,
      input: [...arr], buckets: buckets.map((bb) => [...bb]), bucketActive: b,
    });
    // insertion sort
    for (let i = 1; i < bucket.length; i++) {
      const key = bucket[i];
      let j = i - 1;
      while (j >= 0 && bucket[j] > key) {
        bucket[j + 1] = bucket[j];
        j--;
      }
      bucket[j + 1] = key;
      f.push({
        line: 4, vars: { bucket: b, i, key }, message: `Bucket ${b} after placing ${key}: [${bucket.join(", ")}]`,
        input: [...arr], buckets: buckets.map((bb) => [...bb]), bucketActive: b,
      });
    }
  }

  // concatenate
  const sorted: number[] = [];
  for (const b of buckets) sorted.push(...b);
  f.push({
    line: 5, vars: { n }, message: `Concatenate buckets → [${sorted.join(", ")}]`,
    input: [...sorted], inputStates: sorted.map(() => "sorted" as CellState),
    buckets: buckets.map((bb) => [...bb]),
  });

  return f;
}

/* ------------------------------------------------------------------ */
/*  Panels                                                             */
/* ------------------------------------------------------------------ */

function MiniBars({ values, states, pointers, label }: {
  values: number[]; states?: (CellState | undefined)[]; pointers?: Record<string, number>; label: string;
}) {
  return (
    <div style={{
      border: `1px solid ${C.border}`, borderRadius: 8, padding: 10,
      background: C.bgSoft,
    }}>
      <div style={{
        fontSize: "0.72rem", fontWeight: 700, color: C.textMuted,
        textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 6,
        fontFamily: C.heading,
      }}>{label}</div>
      <ArrayBars values={values} states={states} pointers={pointers} height={100} />
    </div>
  );
}

function OutputStrip({ values, states, pointers }: {
  values: (number | null)[]; states?: (CellState | undefined)[]; pointers?: Record<string, number>;
}) {
  const filled = values.map((v) => v ?? 0);
  const st: (CellState | undefined)[] = values.map((v, k) => (v === null ? "default" : states?.[k] ?? "sorted"));
  return (
    <div style={{
      border: `1px solid ${C.border}`, borderRadius: 8, padding: 10,
      background: C.bgSoft,
    }}>
      <div style={{
        fontSize: "0.72rem", fontWeight: 700, color: C.textMuted,
        textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 6,
        fontFamily: C.heading,
      }}>Output</div>
      <div style={{ display: "flex", justifyContent: "center", gap: 6, fontFamily: C.mono }}>
        {values.map((v, k) => {
          const active = pointers && Object.values(pointers).includes(k);
          const stateColor = v === null ? "#cbd5e1" : active ? A : C.success;
          return (
            <div key={k} style={{
              minWidth: 36, padding: "8px 6px", textAlign: "center", borderRadius: 6,
              border: `2px solid ${stateColor}`,
              background: v === null ? C.bg : `${stateColor}18`,
              fontWeight: 700, fontSize: "0.9rem",
              color: v === null ? C.textMuted : C.text,
              transition: "all 0.3s ease",
            }}>
              <div style={{ fontSize: "0.6rem", color: C.textMuted, marginBottom: 2 }}>{k}</div>
              {v ?? "-"}
            </div>
          );
        })}
      </div>
      {/* unused params to suppress lint; filled/st may be used for future viz */}
      <div style={{ display: "none" }}>{filled.length}{st.length}</div>
    </div>
  );
}

function BucketsView({ buckets, active }: { buckets: number[][]; active?: number }) {
  return (
    <div style={{
      border: `1px solid ${C.border}`, borderRadius: 8, padding: 10,
      background: C.bgSoft,
    }}>
      <div style={{
        fontSize: "0.72rem", fontWeight: 700, color: C.textMuted,
        textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 8,
        fontFamily: C.heading,
      }}>Buckets</div>
      <div style={{ display: "flex", gap: 8, justifyContent: "center" }}>
        {buckets.map((b, i) => {
          const isAct = i === active;
          return (
            <div key={i} style={{
              minWidth: 70, minHeight: 120,
              border: `2px solid ${isAct ? A : C.border}`,
              borderRadius: 8,
              background: isAct ? `${A}10` : C.bg,
              padding: 6,
              display: "flex", flexDirection: "column", alignItems: "center", gap: 4,
              transition: "all 0.3s ease",
            }}>
              <div style={{ fontSize: "0.7rem", fontWeight: 700, color: C.textMuted, fontFamily: C.heading }}>B{i}</div>
              <div style={{ display: "flex", flexDirection: "column-reverse", gap: 3, flex: 1, justifyContent: "flex-start" }}>
                {b.map((v, k) => (
                  <div key={k} style={{
                    padding: "3px 8px", borderRadius: 4,
                    background: A,
                    color: "#fff", fontWeight: 700, fontSize: "0.78rem",
                    fontFamily: C.mono,
                  }}>{v}</div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Visualize                                                          */
/* ------------------------------------------------------------------ */

type Algo = "counting" | "radix" | "bucket";

function VisualizeTab() {
  const [algo, setAlgo] = useState<Algo>("counting");
  const [countingStr, setCountingStr] = useState("4, 2, 2, 8, 3, 3, 1");
  const [radixStr, setRadixStr] = useState("170, 45, 75, 90, 802, 24, 2, 66");
  const [bucketStr, setBucketStr] = useState("29, 25, 3, 49, 9, 37, 21, 43");

  const countArr = parseArr(countingStr, 8) ?? [4, 2, 2, 8, 3, 3, 1];
  const radixArr = parseArr(radixStr, 8) ?? [170, 45, 75, 90, 802, 24, 2, 66];
  const bucketArr = parseArr(bucketStr, 10) ?? [29, 25, 3, 49, 9, 37, 21, 43];

  const frames = useMemo(() => {
    if (algo === "counting") return buildCountingFrames(countArr);
    if (algo === "radix") return buildRadixFrames(radixArr);
    return buildBucketFrames(bucketArr, 4);
  }, [algo, countArr, radixArr, bucketArr]);

  const player = useStepPlayer(frames);
  const frame = player.current!;

  const PSEUDO = algo === "counting" ? PSEUDO_COUNTING : algo === "radix" ? PSEUDO_RADIX : PSEUDO_BUCKET;

  const inputEditor = algo === "counting" ? (
    <InputEditor
      label="Array (values 0..9 recommended, size ≤ 8)"
      value={countingStr}
      placeholder="e.g. 4, 2, 2, 8, 3, 3, 1"
      helper="Counting sort needs a small value range k."
      presets={[
        { label: "Small range", value: "4, 2, 2, 8, 3, 3, 1" },
        { label: "Duplicates", value: "3, 3, 3, 1, 1, 2" },
        { label: "Sorted", value: "0, 1, 2, 3, 4" },
      ]}
      onApply={(v) => { if (parseArr(v, 8)) setCountingStr(v); }}
    />
  ) : algo === "radix" ? (
    <InputEditor
      label="Array of non-negative integers (size ≤ 8)"
      value={radixStr}
      placeholder="e.g. 170, 45, 75, 90, 802, 24, 2, 66"
      helper="Radix sorts digit-by-digit from units to most-significant."
      presets={[
        { label: "3-digit mix", value: "170, 45, 75, 90, 802, 24, 2, 66" },
        { label: "2-digit", value: "29, 13, 48, 61, 5, 90" },
        { label: "Sorted", value: "11, 22, 33, 44, 55" },
      ]}
      onApply={(v) => { if (parseArr(v, 8)) setRadixStr(v); }}
    />
  ) : (
    <InputEditor
      label="Array of non-negative ints (size ≤ 10)"
      value={bucketStr}
      placeholder="e.g. 29, 25, 3, 49, 9, 37, 21, 43"
      helper="Bucket sort distributes by range, sorts each bucket, concatenates."
      presets={[
        { label: "Spread", value: "29, 25, 3, 49, 9, 37, 21, 43" },
        { label: "Clustered", value: "1, 2, 1, 3, 2, 4, 1, 3" },
        { label: "Random", value: "50, 12, 33, 89, 7, 61, 24, 42" },
      ]}
      onApply={(v) => { if (parseArr(v, 10)) setBucketStr(v); }}
    />
  );

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
        {(["counting", "radix", "bucket"] as const).map((a) => (
          <PillButton
            key={a}
            onClick={() => setAlgo(a)}
            active={algo === a}
            color={A}
          >
            <span style={{ fontSize: "0.85rem", fontWeight: 600, textTransform: "capitalize" }}>{a} Sort</span>
          </PillButton>
        ))}
      </div>

      <AlgoCanvas
        title={algo === "counting" ? "Counting Sort" : algo === "radix" ? "Radix Sort (LSD)" : "Bucket Sort"}
        player={player}
        input={inputEditor}
        pseudocode={<PseudocodePanel lines={PSEUDO} activeLine={frame.line} />}
        variables={<VariablesPanel vars={frame.vars} flashKeys={frame.highlightKey ? [frame.highlightKey] : []} />}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {frame.input && (
            <MiniBars values={frame.input} states={frame.inputStates} pointers={frame.inputPointers} label="Input Array" />
          )}
          {frame.count && (
            <MiniBars values={frame.count} states={frame.countStates} pointers={frame.countPointers} label="Count Array (index = value, bar = frequency)" />
          )}
          {frame.output && <OutputStrip values={frame.output} states={frame.outputStates} pointers={frame.outputPointers} />}
          {frame.buckets && <BucketsView buckets={frame.buckets} active={frame.bucketActive} />}
          <Callout accent={A}>{frame.message}</Callout>
        </div>
      </AlgoCanvas>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Learn                                                              */
/* ------------------------------------------------------------------ */

function LearnTab() {
  return (
    <div style={{ fontFamily: C.heading, display: "flex", flexDirection: "column", gap: 14 }}>
      <div>
        <SectionEyebrow color={A}>Sorting without comparisons</SectionEyebrow>
        <SectionTitle>Beat the Ω(n log n) bound by exploiting key structure</SectionTitle>
        <Lede>
          Comparison sorts (bubble, merge, quick) have a proven lower bound of Ω(n log n). The only way to beat it is
          to <em>not compare</em> - exploit structure of the keys (small range, digits, uniform distribution).
        </Lede>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 12 }}>
        {[
          { t: "Counting sort", b: "Assumes keys are integers in [0..k]. Count frequencies, build cumulative, place. O(n+k) time, stable." },
          { t: "Radix sort", b: "Sort by each digit from least to most significant, using a stable sub-sort (usually counting). O(d·(n+b))." },
          { t: "Bucket sort", b: "Distribute into k buckets by value range, sort each bucket, concatenate. O(n+k) expected on uniform input." },
          { t: "Trade-off", b: "All three need extra memory O(n+k). They shine when k is small or data is well-distributed." },
        ].map((s, i) => (
          <Card key={i}>
            <div style={{ fontSize: "0.72rem", fontWeight: 700, color: A, marginBottom: 6, fontFamily: C.mono, letterSpacing: "0.08em" }}>
              0{i + 1}
            </div>
            <div style={{ fontWeight: 700, fontSize: "0.95rem", color: C.text, marginBottom: 4, letterSpacing: "-0.01em" }}>{s.t}</div>
            <div style={{ fontSize: "0.85rem", color: C.textSecondary, lineHeight: 1.55 }}>{s.b}</div>
          </Card>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Try                                                                */
/* ------------------------------------------------------------------ */

function TryTab() {
  const problems = [
    { q: "Counting sort on [3,0,2,3,1,0] - after cumulative, count = ?", answer: "2 3 4 6" },
    { q: "Radix sort passes needed for max value 9999?", answer: "4" },
    { q: "Bucket sort on n elements with n buckets, uniform input: expected time?", answer: "O(n)" },
  ];
  const [guesses, setGuesses] = useState<(string | null)[]>(problems.map(() => null));
  const [shown, setShown] = useState<boolean[]>(problems.map(() => false));

  return (
    <div style={{ fontFamily: C.heading, display: "flex", flexDirection: "column", gap: 12 }}>
      <Callout accent={A}>
        Walk through each algorithm with the given input. Write out the intermediate arrays.
      </Callout>
      {problems.map((p, i) => {
        const g = guesses[i];
        const revealed = shown[i];
        const correct = g !== null && g.trim().replace(/\s+/g, " ") === p.answer;
        return (
          <Card key={i}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
              <span style={{ fontWeight: 700, fontSize: "0.85rem", color: C.textMuted, fontFamily: C.mono }}>#{i + 1}</span>
              <span style={{ fontSize: "0.9rem", flex: "1 1 260px", color: C.text }}>{p.q}</span>
              <input
                value={g ?? ""}
                onChange={(e) => { const v = [...guesses]; v[i] = e.target.value; setGuesses(v); }}
                style={{
                  width: 180,
                  padding: "7px 10px",
                  borderRadius: 8,
                  border: `1px solid ${C.border}`,
                  fontFamily: C.mono,
                  fontSize: "0.85rem",
                  outline: "none",
                  background: C.bg,
                  color: C.text,
                }}
                placeholder="?"
              />
              <button
                onClick={() => { const v = [...shown]; v[i] = true; setShown(v); }}
                style={{
                  padding: "6px 14px",
                  borderRadius: 8,
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  border: `1px solid ${C.border}`,
                  background: C.bg,
                  color: C.textSecondary,
                  cursor: "pointer",
                  fontFamily: C.heading,
                }}
              >
                Reveal
              </button>
              {revealed && (
                <span style={{
                  fontSize: "0.82rem", fontWeight: 700,
                  color: correct ? C.successDark : C.dangerDark,
                  padding: "4px 12px", borderRadius: 8,
                  background: correct ? `${C.success}14` : `${C.danger}14`,
                  fontFamily: C.heading,
                }}>
                  {correct ? `Correct - ${p.answer}` : `Answer: ${p.answer}`}
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
/*  Insight                                                            */
/* ------------------------------------------------------------------ */

function InsightTab() {
  return (
    <div style={{ fontFamily: C.heading, display: "flex", flexDirection: "column", gap: 12 }}>
      <Card>
        <SubHeading>The Ω(n log n) comparison barrier</SubHeading>
        <p style={{ fontSize: "0.88rem", color: C.textSecondary, lineHeight: 1.6, margin: 0 }}>
          A decision tree sorting n! permutations needs log(n!) = Θ(n log n) comparisons. Non-comparison sorts escape
          this by inspecting key <em>structure</em>, not comparing whole keys.
        </p>
      </Card>
      <Card>
        <SubHeading>Why LSD for radix?</SubHeading>
        <p style={{ fontSize: "0.88rem", color: C.textSecondary, lineHeight: 1.6, margin: 0 }}>
          Least-Significant-Digit first, using a <em>stable</em> sub-sort, guarantees the final order is correct. If
          two numbers tie on digit d, their relative order from the previous (lower) digit pass is preserved.
        </p>
      </Card>
      <Card>
        <SubHeading>Interview hook</SubHeading>
        <ul style={{ fontSize: "0.88rem", color: C.textSecondary, lineHeight: 1.7, paddingLeft: 20, margin: 0 }}>
          <li>Counting sort: Θ(n + k). Not useful when k ≫ n.</li>
          <li>Radix: Θ(d·(n+b)) where b is base. Often d is treated as constant → Θ(n).</li>
          <li>Bucket: O(n) expected on uniform, O(n²) worst case if all fall into one bucket.</li>
        </ul>
      </Card>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Activity                                                            */
/* ------------------------------------------------------------------ */

export default function DSA_L5_NonComparisonActivity() {
  const tabs: EngTabDef[] = [
    { id: "learn", label: "Learn", icon: <BookOpen className="w-4 h-4" />, content: <LearnTab /> },
    { id: "visualize", label: "Visualize", icon: <Play className="w-4 h-4" />, content: <VisualizeTab /> },
    { id: "try", label: "Try It", icon: <Target className="w-4 h-4" />, content: <TryTab /> },
    { id: "insight", label: "Insight", icon: <Lightbulb className="w-4 h-4" />, content: <InsightTab /> },
  ];

  const quiz: EngQuizQuestion[] = [
    {
      question: "Counting sort runs in O(n + k). What does k represent?",
      options: ["Number of distinct elements", "Range of the input values", "Recursion depth", "Number of buckets"],
      correctIndex: 1,
      explanation: "k is the maximum key value (range). If k = O(n), total is O(n); if k = O(n²), it degrades to O(n²).",
    },
    {
      question: "Why must the sub-sort in radix sort be stable?",
      options: [
        "To save memory",
        "Equal elements on the current digit must keep their order from the previous pass",
        "Instability makes it O(n²)",
        "Stability is not required",
      ],
      correctIndex: 1,
      explanation: "LSD radix relies on stability: ties on digit d are broken by the order established on digit d−1.",
    },
    {
      question: "Time complexity of radix sort on n integers each with d digits in base b?",
      options: ["O(n log n)", "O(d·(n + b))", "O(n²)", "O(d·n·b)"],
      correctIndex: 1,
      explanation: "Each of d passes is a counting sort over base b: O(n + b). Total: O(d·(n + b)).",
    },
    {
      question: "Bucket sort's worst case is:",
      options: ["O(n log n)", "O(n + k)", "O(n²)", "O(log n)"],
      correctIndex: 2,
      explanation: "If every element lands in the same bucket, you pay the sub-sort cost (typically insertion sort) on n items → O(n²).",
    },
  ];

  return (
    <EngineeringLessonShell
      title="Counting / Radix / Bucket Sort"
      level={5}
      lessonNumber={5}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="Rarely asked directly; appears in 'sort this string array' style problems"
      nextLessonHint="Binary Search & its variants"
    />
  );
}

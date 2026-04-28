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

const PRACTICE_TOPIC_SLUG: string | null = "sorting";

/* ------------------------------------------------------------------ */
/*  Local types                                                        */
/* ------------------------------------------------------------------ */

type CellState = "default" | "compare" | "swap" | "sorted" | "active" | "pivot" | "visited" | "done" | "low" | "high" | "mid";

/* ------------------------------------------------------------------ */
/*  Local helpers                                                      */
/* ------------------------------------------------------------------ */

const STATE_COLORS: Record<CellState, string> = {
  default: THEME.border,
  compare: "#06b6d4",
  swap: "#f59e0b",
  sorted: "#a3e635",
  active: "#818cf8",
  pivot: "#f97316",
  visited: "#d6d3d1",
  done: "#a3e635",
  low: "#60a5fa",
  high: "#f87171",
  mid: "#fb923c",
};

function MiniBars({
  values,
  states,
  pointers,
  label,
}: {
  values: number[];
  states?: (CellState | undefined)[];
  pointers?: Record<string, number>;
  label: string;
}) {
  const max = Math.max(...values, 1);
  const n = values.length;
  const barW = Math.max(16, Math.min(36, Math.floor(360 / (n || 1))));
  const gap = 3;
  const totalW = n * (barW + gap) - gap;
  const H = 80;

  const ptrByIdx: Record<number, string[]> = {};
  if (pointers) {
    for (const [name, idx] of Object.entries(pointers)) {
      if (!ptrByIdx[idx]) ptrByIdx[idx] = [];
      ptrByIdx[idx].push(name);
    }
  }

  return (
    <div className="rounded-md border border-stone-200 dark:border-white/10 bg-stone-50 dark:bg-stone-950/50 p-3">
      <div className="text-[10px] font-mono uppercase tracking-widest text-stone-500 mb-2">{label}</div>
      <div className="w-full overflow-x-auto">
        <div style={{ width: totalW, margin: "0 auto", height: H + 24 }}>
          <svg width={totalW} height={H + 24} style={{ display: "block" }}>
            {values.map((v, i) => {
              const barH = Math.max(3, Math.floor((v / max) * (H - 6)));
              const x = i * (barW + gap);
              const y = H - barH;
              const state = (states?.[i] ?? "default") as CellState;
              const color = STATE_COLORS[state] ?? STATE_COLORS.default;
              const ptrs = ptrByIdx[i] ?? [];
              return (
                <g key={i}>
                  <rect x={x} y={y} width={barW} height={barH} fill={color} rx={2} style={{ transition: "all 0.2s ease" }} />
                  <text x={x + barW / 2} y={H + 10} textAnchor="middle" fontSize="9" fontFamily={THEME.mono} fill={THEME.textMuted}>{v}</text>
                  <text x={x + barW / 2} y={H + 20} textAnchor="middle" fontSize="8" fontFamily={THEME.mono} fill={THEME.accent} fontWeight="700">
                    {ptrs[0] ?? ""}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>
      </div>
    </div>
  );
}

function OutputStrip({
  values,
  states: _states,
  pointers,
}: {
  values: (number | null)[];
  states?: (CellState | undefined)[];
  pointers?: Record<string, number>;
}) {
  return (
    <div className="rounded-md border border-stone-200 dark:border-white/10 bg-stone-50 dark:bg-stone-950/50 p-3">
      <div className="text-[10px] font-mono uppercase tracking-widest text-stone-500 mb-2">Output</div>
      <div className="flex flex-wrap gap-1.5 justify-center">
        {values.map((v, k) => {
          const isActive = pointers ? Object.values(pointers).includes(k) : false;
          const stateColor = v === null ? THEME.border : isActive ? THEME.accent : THEME.success;
          return (
            <div
              key={k}
              style={{ borderColor: stateColor }}
              className="min-w-8 px-1.5 py-1.5 text-center rounded-md border-2 text-xs font-mono font-bold transition-colors"
            >
              <div className="text-[8px] text-stone-500 mb-0.5">{k}</div>
              <span style={{ color: v === null ? THEME.textMuted : THEME.text }}>{v ?? "-"}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function BucketsView({ buckets, active }: { buckets: number[][]; active?: number }) {
  return (
    <div className="rounded-md border border-stone-200 dark:border-white/10 bg-stone-50 dark:bg-stone-950/50 p-3">
      <div className="text-[10px] font-mono uppercase tracking-widest text-stone-500 mb-2">Buckets</div>
      <div className="flex gap-2 justify-center flex-wrap">
        {buckets.map((b, i) => {
          const isAct = i === active;
          return (
            <div
              key={i}
              className={`min-w-16 min-h-24 rounded-md border-2 p-1.5 flex flex-col items-center gap-1 transition-colors ${
                isAct
                  ? "border-lime-400 bg-lime-400/10"
                  : "border-stone-200 dark:border-white/10 bg-white dark:bg-stone-900"
              }`}
            >
              <div className="text-[9px] font-bold text-stone-500">B{i}</div>
              <div className="flex flex-col-reverse gap-1 flex-1 justify-start">
                {b.map((v, k) => (
                  <div
                    key={k}
                    className="px-2 py-0.5 rounded text-[10px] font-bold font-mono text-stone-900"
                    style={{ background: THEME.accent }}
                  >
                    {v}
                  </div>
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
/*  Frame type & parsers                                               */
/* ------------------------------------------------------------------ */

interface Frame {
  line: number;
  vars: Record<string, string | number | undefined>;
  message: string;
  input?: number[];
  inputStates?: (CellState | undefined)[];
  inputPointers?: Record<string, number>;
  count?: number[];
  countStates?: (CellState | undefined)[];
  countPointers?: Record<string, number>;
  output?: (number | null)[];
  outputStates?: (CellState | undefined)[];
  outputPointers?: Record<string, number>;
  buckets?: number[][];
  bucketActive?: number;
  highlightKey?: string;
}

function parseArr(s: string, max = 10): number[] | null {
  const nums = s.split(/[,\s]+/).filter(Boolean).map((x) => Number(x.trim()));
  if (nums.some((n) => Number.isNaN(n) || n < 0)) return null;
  if (nums.length < 2 || nums.length > max) return null;
  return nums;
}

/* ------------------------------------------------------------------ */
/*  Counting Sort frames                                               */
/* ------------------------------------------------------------------ */

const PSEUDO_COUNTING = [
  "function countingSort(A, k):",
  "  count <- array of k+1 zeros",
  "  for x in A: count[x] += 1",
  "  for i from 1 to k: count[i] += count[i-1]",
  "  output <- empty array of length n",
  "  for i from n-1 down to 0:",
  "    output[count[A[i]] - 1] <- A[i]",
  "    count[A[i]] -= 1",
];

function buildCountingFrames(arr: number[]): Frame[] {
  const n = arr.length;
  const k = Math.max(...arr);
  const count = new Array(k + 1).fill(0);
  const output: (number | null)[] = new Array(n).fill(null);
  const f: Frame[] = [];

  f.push({ line: 0, vars: { n, k }, message: `Counting sort on ${n} elements, max value k = ${k}.`, input: [...arr], count: [...count], output: [...output] });
  f.push({ line: 1, vars: { n, k }, message: `Create count array of size ${k + 1}, all zeros.`, input: [...arr], count: [...count], output: [...output] });

  for (let i = 0; i < n; i++) {
    count[arr[i]]++;
    const inputSt: (CellState | undefined)[] = arr.map((_, kk) => (kk === i ? "compare" : "default"));
    const cntSt: (CellState | undefined)[] = count.map((_, kk) => (kk === arr[i] ? "active" : "default"));
    f.push({
      line: 2, vars: { i, "A[i]": arr[i], "count[A[i]]": count[arr[i]] }, message: `Count occurrences: count[${arr[i]}] -> ${count[arr[i]]}`,
      input: [...arr], inputStates: inputSt, inputPointers: { i },
      count: [...count], countStates: cntSt, countPointers: { "A[i]": arr[i] },
      output: [...output], highlightKey: `count[${arr[i]}]`,
    });
  }

  for (let i = 1; i <= k; i++) {
    count[i] += count[i - 1];
    const cntSt: (CellState | undefined)[] = count.map((_, kk) => (kk === i ? "swap" : kk === i - 1 ? "compare" : "default"));
    f.push({
      line: 3, vars: { i, "count[i]": count[i] }, message: `Cumulative: count[${i}] += count[${i - 1}] -> ${count[i]}.`,
      input: [...arr], count: [...count], countStates: cntSt, countPointers: { i },
      output: [...output],
    });
  }

  f.push({ line: 4, vars: { n }, message: `Allocate output array of length ${n}.`, input: [...arr], count: [...count], output: [...output] });

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

  f.push({ line: 0, vars: { n, k }, message: `Done. Output: [${output.join(", ")}].`, input: [...arr], output: [...output], outputStates: output.map(() => "sorted" as CellState) });
  return f;
}

/* ------------------------------------------------------------------ */
/*  Radix Sort (LSD) frames                                            */
/* ------------------------------------------------------------------ */

const PSEUDO_RADIX = [
  "function radixSort(A):",
  "  d <- number of digits in max(A)",
  "  for digit from 0 to d-1:        // LSD",
  "    A <- stable counting sort of A by this digit",
  "  return A",
];

function buildRadixFrames(input: number[]): Frame[] {
  const arr = [...input];
  const n = arr.length;
  const max = Math.max(...arr);
  const d = Math.max(1, Math.floor(Math.log10(Math.max(1, max))) + 1);
  const f: Frame[] = [];

  f.push({ line: 0, vars: { n, max, digits: d }, message: `Radix sort: ${n} numbers, max = ${max}, ${d} digit(s).`, input: [...arr] });

  for (let pass = 0; pass < d; pass++) {
    const place = Math.pow(10, pass);
    const count = new Array(10).fill(0);
    f.push({ line: 2, vars: { digit: pass, place }, message: `Pass ${pass + 1}: sort by digit at place ${place} (${["units", "tens", "hundreds", "thousands"][pass] ?? `10^${pass}`}).`, input: [...arr] });

    for (let i = 0; i < n; i++) {
      const d0 = Math.floor(arr[i] / place) % 10;
      count[d0]++;
      const inputSt: (CellState | undefined)[] = arr.map((_, kk) => (kk === i ? "compare" : "default"));
      const cntSt: (CellState | undefined)[] = count.map((_, kk) => (kk === d0 ? "active" : "default"));
      f.push({
        line: 3, vars: { i, "A[i]": arr[i], digit: d0 }, message: `A[${i}] = ${arr[i]}, digit at place ${place} = ${d0}. count[${d0}] -> ${count[d0]}`,
        input: [...arr], inputStates: inputSt, inputPointers: { i },
        count: [...count], countStates: cntSt, countPointers: { digit: d0 },
      });
    }

    for (let i = 1; i < 10; i++) count[i] += count[i - 1];
    f.push({ line: 3, vars: { digit: pass }, message: `Cumulative counts computed.`, input: [...arr], count: [...count] });

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
    f.push({ line: 3, vars: { digit: pass }, message: `End of pass ${pass + 1}. Array: [${arr.join(", ")}]`, input: [...arr], inputStates: arr.map(() => "sorted" as CellState), highlightKey: "digit" });
  }

  f.push({ line: 0, vars: { n, digits: d }, message: `Done. Sorted: [${arr.join(", ")}]`, input: [...arr], inputStates: arr.map(() => "sorted" as CellState) });
  return f;
}

/* ------------------------------------------------------------------ */
/*  Bucket Sort frames                                                 */
/* ------------------------------------------------------------------ */

const PSEUDO_BUCKET = [
  "function bucketSort(A, k):",
  "  create k empty buckets",
  "  for x in A:",
  "    place x into bucket floor(x * k / (max+1))",
  "  for each bucket: sort (insertion sort)",
  "  concatenate buckets in order",
];

function buildBucketFrames(input: number[], numBuckets = 4): Frame[] {
  const arr = [...input];
  const n = arr.length;
  const max = Math.max(...arr);
  const buckets: number[][] = Array.from({ length: numBuckets }, () => []);
  const f: Frame[] = [];

  f.push({ line: 0, vars: { n, buckets: numBuckets }, message: `Bucket sort with ${numBuckets} buckets on [${arr.join(", ")}]`, input: [...arr], buckets: buckets.map((b) => [...b]) });
  f.push({ line: 1, vars: { buckets: numBuckets }, message: `Created ${numBuckets} empty buckets.`, input: [...arr], buckets: buckets.map((b) => [...b]) });

  for (let i = 0; i < n; i++) {
    const bIdx = Math.min(numBuckets - 1, Math.floor((arr[i] * numBuckets) / (max + 1)));
    buckets[bIdx].push(arr[i]);
    const inputSt: (CellState | undefined)[] = arr.map((_, kk) => (kk === i ? "compare" : "default"));
    f.push({ line: 3, vars: { i, "A[i]": arr[i], bucket: bIdx }, message: `A[${i}] = ${arr[i]} goes into bucket ${bIdx}.`, input: [...arr], inputStates: inputSt, inputPointers: { i }, buckets: buckets.map((b) => [...b]), bucketActive: bIdx });
  }

  for (let b = 0; b < numBuckets; b++) {
    if (buckets[b].length < 2) {
      f.push({ line: 4, vars: { bucket: b }, message: `Bucket ${b} has ${buckets[b].length} element(s) - already sorted.`, input: [...arr], buckets: buckets.map((bb) => [...bb]), bucketActive: b });
      continue;
    }
    const bucket = buckets[b];
    f.push({ line: 4, vars: { bucket: b, size: bucket.length }, message: `Insertion-sort bucket ${b}: [${bucket.join(", ")}]`, input: [...arr], buckets: buckets.map((bb) => [...bb]), bucketActive: b });
    for (let i = 1; i < bucket.length; i++) {
      const key = bucket[i];
      let j = i - 1;
      while (j >= 0 && bucket[j] > key) { bucket[j + 1] = bucket[j]; j--; }
      bucket[j + 1] = key;
      f.push({ line: 4, vars: { bucket: b, i, key }, message: `Bucket ${b} after placing ${key}: [${bucket.join(", ")}]`, input: [...arr], buckets: buckets.map((bb) => [...bb]), bucketActive: b });
    }
  }

  const sorted: number[] = [];
  for (const b of buckets) sorted.push(...b);
  f.push({ line: 5, vars: { n }, message: `Concatenate buckets -> [${sorted.join(", ")}]`, input: [...sorted], inputStates: sorted.map(() => "sorted" as CellState), buckets: buckets.map((bb) => [...bb]) });
  return f;
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
  const frame = player.current;

  const PSEUDO =
    algo === "counting" ? PSEUDO_COUNTING : algo === "radix" ? PSEUDO_RADIX : PSEUDO_BUCKET;

  const inputEditor =
    algo === "counting" ? (
      <InputEditor
        label="Array (values 0..9, size <= 8)"
        value={countingStr}
        placeholder="e.g. 4, 2, 2, 8, 3, 3, 1"
        helper="Counting sort needs a small value range k."
        presets={[
          { label: "Small range", value: "4, 2, 2, 8, 3, 3, 1" },
          { label: "Duplicates", value: "3, 3, 3, 1, 1, 2" },
          { label: "Sorted", value: "0, 1, 2, 3, 4" },
        ]}
        onApply={(v) => {
          if (parseArr(v, 8)) setCountingStr(v);
        }}
      />
    ) : algo === "radix" ? (
      <InputEditor
        label="Array of non-negative integers (size <= 8)"
        value={radixStr}
        placeholder="e.g. 170, 45, 75, 90, 802, 24, 2, 66"
        helper="Radix sorts digit-by-digit from units to most-significant."
        presets={[
          { label: "3-digit mix", value: "170, 45, 75, 90, 802, 24, 2, 66" },
          { label: "2-digit", value: "29, 13, 48, 61, 5, 90" },
          { label: "Sorted", value: "11, 22, 33, 44, 55" },
        ]}
        onApply={(v) => {
          if (parseArr(v, 8)) setRadixStr(v);
        }}
      />
    ) : (
      <InputEditor
        label="Array of non-negative ints (size <= 10)"
        value={bucketStr}
        placeholder="e.g. 29, 25, 3, 49, 9, 37, 21, 43"
        helper="Bucket sort distributes by range, sorts each bucket, concatenates."
        presets={[
          { label: "Spread", value: "29, 25, 3, 49, 9, 37, 21, 43" },
          { label: "Clustered", value: "1, 2, 1, 3, 2, 4, 1, 3" },
          { label: "Random", value: "50, 12, 33, 89, 7, 61, 24, 42" },
        ]}
        onApply={(v) => {
          if (parseArr(v, 10)) setBucketStr(v);
        }}
      />
    );

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-wrap gap-1.5">
        {(["counting", "radix", "bucket"] as const).map((a) => (
          <PillButton key={a} onClick={() => setAlgo(a)} active={algo === a}>
            <span className="text-xs font-semibold capitalize">{a} Sort</span>
          </PillButton>
        ))}
      </div>

      <AlgoCanvas
        title={algo === "counting" ? "Counting Sort" : algo === "radix" ? "Radix Sort (LSD)" : "Bucket Sort"}
        player={player}
        input={inputEditor}
        pseudocode={<PseudocodePanel lines={PSEUDO} activeLine={frame?.line} />}
        variables={<VariablesPanel vars={frame?.vars ?? {}} flashKeys={frame?.highlightKey ? [frame.highlightKey] : []} />}
      >
        <div className="flex flex-col gap-3">
          {frame?.input && (
            <MiniBars values={frame.input} states={frame.inputStates} pointers={frame.inputPointers} label="Input Array" />
          )}
          {frame?.count && (
            <MiniBars values={frame.count} states={frame.countStates} pointers={frame.countPointers} label="Count Array (index = value, bar = frequency)" />
          )}
          {frame?.output && (
            <OutputStrip values={frame.output} states={frame.outputStates} pointers={frame.outputPointers} />
          )}
          {frame?.buckets && (
            <BucketsView buckets={frame.buckets} active={frame.bucketActive} />
          )}
          <Callout>{frame?.message ?? "Press play to step through the algorithm."}</Callout>
        </div>
      </AlgoCanvas>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Learn                                                              */
/* ------------------------------------------------------------------ */

function LearnTab() {
  const props = [
    { t: "Counting sort", b: "Assumes keys are integers in [0..k]. Count frequencies, build cumulative, place. O(n+k) time, stable." },
    { t: "Radix sort", b: "Sort by each digit from least to most significant, using a stable sub-sort (usually counting). O(d*(n+b))." },
    { t: "Bucket sort", b: "Distribute into k buckets by value range, sort each bucket, concatenate. O(n+k) expected on uniform input." },
    { t: "Trade-off", b: "All three need extra memory O(n+k). They shine when k is small or data is well-distributed." },
  ];

  return (
    <div className="flex flex-col gap-5">
      <div>
        <SectionEyebrow>Sorting without comparisons</SectionEyebrow>
        <SectionTitle>Beat the Omega(n log n) bound by exploiting key structure</SectionTitle>
        <Lede>
          Comparison sorts (bubble, merge, quick) have a proven lower bound of Omega(n log n). The
          only way to beat it is to not compare; instead exploit structure of the keys (small range,
          digits, uniform distribution).
        </Lede>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {props.map((s, i) => (
          <Card key={i}>
            <div className="text-[10px] font-mono font-bold text-lime-700 dark:text-lime-400 mb-1 uppercase tracking-widest">
              0{i + 1}
            </div>
            <div className="font-bold text-stone-900 dark:text-stone-50 mb-1">{s.t}</div>
            <div className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">{s.b}</div>
          </Card>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Try It                                                             */
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
    <div className="flex flex-col gap-3">
      <Callout>Walk through each algorithm with the given input. Write out the intermediate arrays.</Callout>
      {problems.map((p, i) => {
        const g = guesses[i];
        const revealed = shown[i];
        const correct = g !== null && g.trim().replace(/\s+/g, " ") === p.answer;
        return (
          <Card key={i}>
            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-[10px] font-mono font-bold text-stone-500">#{i + 1}</span>
              <span className="text-sm flex-1 min-w-52 text-stone-900 dark:text-stone-50">{p.q}</span>
              <input
                value={g ?? ""}
                onChange={(e) => {
                  const v = [...guesses];
                  v[i] = e.target.value;
                  setGuesses(v);
                }}
                className="w-36 px-2.5 py-1.5 rounded-md border border-stone-300 dark:border-white/10 bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-100 font-mono text-sm outline-none focus:border-lime-400"
                placeholder="?"
              />
              <button
                type="button"
                onClick={() => {
                  const v = [...shown];
                  v[i] = true;
                  setShown(v);
                }}
                className="px-3 py-1.5 rounded-md text-xs font-medium border border-stone-300 dark:border-white/10 bg-white dark:bg-stone-900 text-stone-600 dark:text-stone-400 hover:border-stone-500 cursor-pointer transition-colors"
              >
                Reveal
              </button>
              {revealed && (
                <span
                  className={`text-xs font-bold px-3 py-1 rounded-md ${
                    correct
                      ? "bg-lime-400/10 text-lime-700 dark:text-lime-300 border border-lime-400"
                      : "bg-rose-500/10 text-rose-700 dark:text-rose-300 border border-rose-500"
                  }`}
                >
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
    <div className="flex flex-col gap-4">
      <Card>
        <SubHeading>The Omega(n log n) comparison barrier</SubHeading>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          A decision tree sorting n! permutations needs log(n!) = Theta(n log n) comparisons.
          Non-comparison sorts escape this by inspecting key structure, not comparing whole keys.
        </p>
      </Card>
      <Card>
        <SubHeading>Why LSD for radix?</SubHeading>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          Least-Significant-Digit first, using a stable sub-sort, guarantees the final order is
          correct. If two numbers tie on digit d, their relative order from the previous (lower)
          digit pass is preserved.
        </p>
      </Card>
      <Card>
        <SubHeading>Interview hook</SubHeading>
        <ul className="list-disc pl-5 space-y-1 text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          <li>Counting sort: Theta(n + k). Not useful when k is much larger than n.</li>
          <li>Radix: Theta(d*(n+b)) where b is base. Often d is treated as constant: Theta(n).</li>
          <li>Bucket: O(n) expected on uniform, O(n²) worst case if all fall into one bucket.</li>
        </ul>
      </Card>
    </div>
  );
}

/* ------------------------------------------------------------------ */

interface Props {
  onQuizComplete?: (score: number) => void;
}

export default function L5_NonComparison({ onQuizComplete }: Props) {
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
      question: "Counting sort runs in O(n + k). What does k represent?",
      options: [
        "Number of distinct elements",
        "Range of the input values",
        "Recursion depth",
        "Number of buckets",
      ],
      correctIndex: 1,
      explanation:
        "k is the maximum key value (range). If k = O(n), total is O(n); if k = O(n²), it degrades to O(n²).",
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
      explanation:
        "LSD radix relies on stability: ties on digit d are broken by the order established on digit d-1.",
    },
    {
      question: "Time complexity of radix sort on n integers each with d digits in base b?",
      options: ["O(n log n)", "O(d*(n + b))", "O(n²)", "O(d*n*b)"],
      correctIndex: 1,
      explanation:
        "Each of d passes is a counting sort over base b: O(n + b). Total: O(d*(n + b)).",
    },
    {
      question: "Bucket sort's worst case is:",
      options: ["O(n log n)", "O(n + k)", "O(n²)", "O(log n)"],
      correctIndex: 2,
      explanation:
        "If every element lands in the same bucket, you pay the sub-sort cost (typically insertion sort) on n items: O(n²).",
    },
  ];

  return (
    <LessonShell
      title="Non-Comparison Sorts"
      level={5}
      lessonNumber={5}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="Rarely asked directly; appears in 'sort this string array' style problems"
      nextLessonHint="Binary Search"
      onQuizComplete={onQuizComplete}
    />
  );
}

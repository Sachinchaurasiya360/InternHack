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
} from "../../../../../components/dsa-theory/primitives";
import { PracticeTab } from "../PracticeTab";

const PRACTICE_TOPIC_SLUG: string | null = "dynamic-programming";

/* ------------------------------------------------------------------ */
/*  Shared frame type                                                  */
/* ------------------------------------------------------------------ */

type Arrow = "top" | "left" | "diag";

interface Frame {
  line: number;
  vars: Record<string, string | number | undefined>;
  message: string;
  dp: number[][];
  just?: { r: number; c: number } | null;
  deps?: { r: number; c: number; kind: Arrow }[];
  path?: { r: number; c: number }[];
}

/* ------------------------------------------------------------------ */
/*  DP Grid renderer                                                   */
/* ------------------------------------------------------------------ */

function DPGrid({ frame, rowLabels, colLabels, cellSize = 40 }: { frame: Frame; rowLabels?: string[]; colLabels?: string[]; cellSize?: number }) {
  const rows = frame.dp.length;
  const cols = frame.dp[0]?.length ?? 0;
  const depKeys = new Set((frame.deps ?? []).map((d) => `${d.r},${d.c}`));
  const pathKeys = new Set((frame.path ?? []).map((p) => `${p.r},${p.c}`));
  const justKey = frame.just ? `${frame.just.r},${frame.just.c}` : null;

  return (
    <div className="flex justify-center overflow-x-auto p-1">
      <div style={{ display: "grid", gridTemplateColumns: `${cellSize * 0.9}px repeat(${cols}, ${cellSize}px)`, gridAutoRows: `${cellSize}px`, gap: 2 }}>
        <div />
        {Array.from({ length: cols }).map((_, c) => (
          <div key={`ch-${c}`} className="flex items-center justify-center text-[10px] font-bold text-stone-500 font-mono">
            {colLabels?.[c] ?? c}
          </div>
        ))}
        {Array.from({ length: rows }).flatMap((_, r) => [
          <div key={`rh-${r}`} className="flex items-center justify-center text-[10px] font-bold text-stone-500 font-mono">
            {rowLabels?.[r] ?? r}
          </div>,
          ...(frame.dp[r] ?? []).map((v, c) => {
            const key = `${r},${c}`;
            const isJust = key === justKey;
            const isDep = depKeys.has(key);
            const isPath = pathKeys.has(key);
            let cls = "border-stone-200 dark:border-white/10 bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-100";
            if (isPath) cls = "border-rose-500 bg-rose-50 dark:bg-rose-500/10 text-rose-800 dark:text-rose-200";
            else if (isJust) cls = "border-lime-500 bg-lime-50 dark:bg-lime-400/10 text-lime-800 dark:text-lime-200";
            else if (isDep) cls = "border-amber-400 bg-amber-50 dark:bg-amber-500/10 text-amber-800 dark:text-amber-200";
            return (
              <div key={key} className={`flex items-center justify-center rounded border-2 font-mono font-bold transition-colors ${cls}`}
                style={{ fontSize: cellSize >= 36 ? "0.78rem" : "0.68rem" }}>
                {v === -1 ? "∞" : v}
              </div>
            );
          }),
        ])}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  LCS                                                                */
/* ------------------------------------------------------------------ */

const PSEUDO_LCS = ["dp[i][0] = 0; dp[0][j] = 0", "for i in 1..m:", "  for j in 1..n:", "    if A[i-1] == B[j-1]:", "      dp[i][j] = dp[i-1][j-1] + 1", "    else:", "      dp[i][j] = max(dp[i-1][j], dp[i][j-1])", "return dp[m][n]"];

function buildLCS(A: string, B: string): Frame[] {
  const m = A.length, n = B.length;
  const dp: number[][] = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
  const frames: Frame[] = [];
  frames.push({ line: 0, vars: { m, n }, message: "Initialize the 0th row and 0th column with zeros.", dp: dp.map((r) => [...r]) });
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      const a = A[i - 1], b = B[j - 1];
      frames.push({ line: 2, vars: { i, j, A: a, B: b }, message: `Compare A[${i - 1}]='${a}' with B[${j - 1}]='${b}'.`, dp: dp.map((r) => [...r]) });
      if (a === b) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
        frames.push({ line: 4, vars: { i, j, value: dp[i][j] }, message: `Match! dp[${i}][${j}] = dp[${i - 1}][${j - 1}] + 1 = ${dp[i][j]}.`, dp: dp.map((r) => [...r]), just: { r: i, c: j }, deps: [{ r: i - 1, c: j - 1, kind: "diag" }] });
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
        frames.push({ line: 6, vars: { i, j, value: dp[i][j] }, message: `No match. dp[${i}][${j}] = max(${dp[i - 1][j]}, ${dp[i][j - 1]}) = ${dp[i][j]}.`, dp: dp.map((r) => [...r]), just: { r: i, c: j }, deps: [{ r: i - 1, c: j, kind: "top" }, { r: i, c: j - 1, kind: "left" }] });
      }
    }
  }
  const path: { r: number; c: number }[] = [];
  let pi = m, pj = n;
  while (pi > 0 && pj > 0) {
    if (A[pi - 1] === B[pj - 1]) { path.push({ r: pi, c: pj }); pi--; pj--; }
    else if (dp[pi - 1][pj] >= dp[pi][pj - 1]) pi--;
    else pj--;
  }
  frames.push({ line: 7, vars: { answer: dp[m][n] }, message: `LCS length = ${dp[m][n]}. Diagonal matches form the sequence.`, dp: dp.map((r) => [...r]), path });
  return frames;
}

/* ------------------------------------------------------------------ */
/*  Edit Distance                                                      */
/* ------------------------------------------------------------------ */

const PSEUDO_ED = ["dp[i][0] = i; dp[0][j] = j", "for i in 1..m:", "  for j in 1..n:", "    if A[i-1] == B[j-1]: dp[i][j] = dp[i-1][j-1]", "    else: dp[i][j] = 1 + min(", "       dp[i-1][j],    // delete", "       dp[i][j-1],    // insert", "       dp[i-1][j-1])  // replace"];

function buildED(A: string, B: string): Frame[] {
  const m = A.length, n = B.length;
  const dp: number[][] = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
  const frames: Frame[] = [];
  for (let i = 0; i <= m; i++) dp[i][0] = i;
  for (let j = 0; j <= n; j++) dp[0][j] = j;
  frames.push({ line: 0, vars: { m, n }, message: "Base: empty prefix costs = prefix length.", dp: dp.map((r) => [...r]) });
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      const a = A[i - 1], b = B[j - 1];
      if (a === b) {
        dp[i][j] = dp[i - 1][j - 1];
        frames.push({ line: 3, vars: { i, j, A: a, B: b, value: dp[i][j] }, message: `'${a}' == '${b}' → no edit. dp[${i}][${j}] = ${dp[i][j]}.`, dp: dp.map((r) => [...r]), just: { r: i, c: j }, deps: [{ r: i - 1, c: j - 1, kind: "diag" }] });
      } else {
        const del = dp[i - 1][j], ins = dp[i][j - 1], rep = dp[i - 1][j - 1];
        dp[i][j] = 1 + Math.min(del, ins, rep);
        frames.push({ line: 4, vars: { i, j, A: a, B: b, value: dp[i][j] }, message: `'${a}' ≠ '${b}' → 1 + min(del=${del}, ins=${ins}, rep=${rep}) = ${dp[i][j]}.`, dp: dp.map((r) => [...r]), just: { r: i, c: j }, deps: [{ r: i - 1, c: j, kind: "top" }, { r: i, c: j - 1, kind: "left" }, { r: i - 1, c: j - 1, kind: "diag" }] });
      }
    }
  }
  frames.push({ line: 6, vars: { answer: dp[m][n] }, message: `Edit distance = ${dp[m][n]}.`, dp: dp.map((r) => [...r]) });
  return frames;
}

/* ------------------------------------------------------------------ */
/*  0/1 Knapsack                                                       */
/* ------------------------------------------------------------------ */

const PSEUDO_KN = ["dp[0][w] = 0", "for i in 1..n:", "  for w in 0..W:", "    if weights[i-1] > w:", "      dp[i][w] = dp[i-1][w]", "    else:", "      dp[i][w] = max(dp[i-1][w],", "         dp[i-1][w-weights[i-1]] + values[i-1])"];

function buildKnap(items: { w: number; v: number }[], W: number): Frame[] {
  const n = items.length;
  const dp: number[][] = Array.from({ length: n + 1 }, () => Array(W + 1).fill(0));
  const frames: Frame[] = [];
  frames.push({ line: 0, vars: { n, W }, message: "Base: 0 items → value 0.", dp: dp.map((r) => [...r]) });
  for (let i = 1; i <= n; i++) {
    const { w: wi, v: vi } = items[i - 1];
    for (let w = 0; w <= W; w++) {
      if (wi > w) {
        dp[i][w] = dp[i - 1][w];
        frames.push({ line: 4, vars: { i, w, skip: 1, value: dp[i][w] }, message: `Item ${i} weight ${wi} > ${w}. Skip. dp[${i}][${w}] = ${dp[i][w]}.`, dp: dp.map((r) => [...r]), just: { r: i, c: w }, deps: [{ r: i - 1, c: w, kind: "top" }] });
      } else {
        const skip = dp[i - 1][w], take = dp[i - 1][w - wi] + vi;
        dp[i][w] = Math.max(skip, take);
        frames.push({ line: 6, vars: { i, w, skip, take, value: dp[i][w] }, message: `Item ${i}: skip=${skip}, take=${take}. Pick max = ${dp[i][w]}.`, dp: dp.map((r) => [...r]), just: { r: i, c: w }, deps: [{ r: i - 1, c: w, kind: "top" }, { r: i - 1, c: w - wi, kind: "left" }] });
      }
    }
  }
  frames.push({ line: 7, vars: { answer: dp[n][W] }, message: `Max value = ${dp[n][W]}.`, dp: dp.map((r) => [...r]) });
  return frames;
}

/* ------------------------------------------------------------------ */
/*  Matrix Chain Multiplication                                        */
/* ------------------------------------------------------------------ */

const PSEUDO_MCM = ["dp[i][i] = 0 for all i", "for L in 2..n-1:", "  for i in 0..n-L:", "    j = i + L - 1", "    dp[i][j] = ∞", "    for k in i..j-1:", "      cost = dp[i][k] + dp[k+1][j] + p[i]·p[k+1]·p[j+1]", "      dp[i][j] = min(dp[i][j], cost)"];

function buildMCM(p: number[]): Frame[] {
  const n = p.length - 1;
  const dp: number[][] = Array.from({ length: n }, () => Array(n).fill(0));
  const frames: Frame[] = [];
  frames.push({ line: 0, vars: { n }, message: "Base: single matrices cost 0.", dp: dp.map((r) => [...r]) });
  for (let L = 2; L <= n; L++) {
    for (let i = 0; i <= n - L; i++) {
      const j = i + L - 1;
      dp[i][j] = Infinity;
      frames.push({ line: 3, vars: { i, j, len: L }, message: `Solve M[${i}..${j}] (length ${L}).`, dp: dp.map((r) => [...r.map((x) => x === Infinity ? -1 : x)]) });
      for (let k = i; k < j; k++) {
        const cost = dp[i][k] + dp[k + 1][j] + p[i] * p[k + 1] * p[j + 1];
        if (cost < dp[i][j]) {
          dp[i][j] = cost;
          frames.push({ line: 6, vars: { i, j, k, cost, value: dp[i][j] }, message: `Split at k=${k}: cost = ${cost}. New best.`, dp: dp.map((r) => [...r.map((x) => x === Infinity ? -1 : x)]), just: { r: i, c: j }, deps: [{ r: i, c: k, kind: "left" }, { r: k + 1, c: j, kind: "top" }] });
        }
      }
    }
  }
  frames.push({ line: 7, vars: { answer: dp[0][n - 1] }, message: `Min scalar multiplications = ${dp[0][n - 1]}.`, dp: dp.map((r) => [...r]) });
  return frames;
}

/* ------------------------------------------------------------------ */
/*  Visualize tab                                                      */
/* ------------------------------------------------------------------ */

type Mode = "lcs" | "ed" | "knap" | "mcm";

function VisualizeTab() {
  const [mode, setMode] = useState<Mode>("lcs");

  const [lcsA, setLcsA] = useState("ABCBDAB");
  const [lcsB, setLcsB] = useState("BDCABA");
  const lcsFrames = useMemo(() => buildLCS(lcsA, lcsB), [lcsA, lcsB]);

  const [edA, setEdA] = useState("kitten");
  const [edB, setEdB] = useState("sitting");
  const edFrames = useMemo(() => buildED(edA, edB), [edA, edB]);

  const [knapIn, setKnapIn] = useState("2,3 3,4 4,5 5,6");
  const [knapW, setKnapW] = useState("8");
  const knapItems = useMemo(() => {
    const out: { w: number; v: number }[] = [];
    knapIn.trim().split(/\s+/).forEach((t) => {
      const [w, v] = t.split(",").map((x) => Number(x));
      if (!Number.isNaN(w) && !Number.isNaN(v)) out.push({ w, v });
    });
    return out;
  }, [knapIn]);
  const knapCap = Math.max(0, Math.min(12, Math.floor(Number(knapW) || 0)));
  const knapFrames = useMemo(() => buildKnap(knapItems, knapCap), [knapItems, knapCap]);

  const [mcmStr, setMcmStr] = useState("30, 35, 15, 5, 10, 20, 25");
  const mcmP = useMemo(() => mcmStr.split(/[,\s]+/).map((x) => Number(x)).filter((x) => !Number.isNaN(x) && x > 0), [mcmStr]);
  const mcmFrames = useMemo(() => mcmP.length >= 2 ? buildMCM(mcmP) : [], [mcmP]);

  const pLCS = useStepPlayer(lcsFrames);
  const pED = useStepPlayer(edFrames);
  const pKN = useStepPlayer(knapFrames);
  const pMCM = useStepPlayer(mcmFrames);

  const modeToggle = (
    <div className="flex gap-1.5 flex-wrap">
      {([["lcs", "LCS"], ["ed", "Edit Distance"], ["knap", "0/1 Knapsack"], ["mcm", "Matrix Chain"]] as [Mode, string][]).map(([m, label]) => (
        <PillButton key={m} onClick={() => setMode(m)} active={mode === m}>
          <span className="text-xs">{label}</span>
        </PillButton>
      ))}
    </div>
  );

  const legend = (
    <div className="flex gap-3 text-xs text-stone-500 flex-wrap">
      <span className="inline-flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-sm bg-lime-400" />just filled</span>
      <span className="inline-flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-sm bg-amber-400" />dependency</span>
      <span className="inline-flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-sm bg-rose-400" />LCS path</span>
    </div>
  );

  if (mode === "lcs") {
    const frame = pLCS.current;
    const colLabels = ["∅", ...lcsB.split("")];
    const rowLabels = ["∅", ...lcsA.split("")];
    return (
      <AlgoCanvas title="Longest Common Subsequence" player={pLCS}
        input={<div className="flex flex-col gap-3">{modeToggle}<InputEditor label="String A" value={lcsA} helper="Capped at 8 chars." presets={[{ label: "ABCBDAB", value: "ABCBDAB" }, { label: "AGCAT", value: "AGCAT" }, { label: "ABC", value: "ABC" }]} onApply={(v) => setLcsA(v.slice(0, 8))} /><InputEditor label="String B" value={lcsB} helper="Capped at 8 chars." presets={[{ label: "BDCABA", value: "BDCABA" }, { label: "GAC", value: "GAC" }, { label: "DEF", value: "DEF" }]} onApply={(v) => setLcsB(v.slice(0, 8))} /></div>}
        pseudocode={<PseudocodePanel lines={PSEUDO_LCS} activeLine={frame?.line} />}
        variables={<VariablesPanel vars={frame?.vars ?? {}} flashKeys={["value"]} />}>
        <div className="flex flex-col gap-3">{legend}{frame && <DPGrid frame={frame} rowLabels={rowLabels} colLabels={colLabels} />}{frame && <Callout>{frame.message}</Callout>}</div>
      </AlgoCanvas>
    );
  }
  if (mode === "ed") {
    const frame = pED.current;
    const colLabels = ["∅", ...edB.split("")];
    const rowLabels = ["∅", ...edA.split("")];
    return (
      <AlgoCanvas title="Edit Distance (Levenshtein)" player={pED}
        input={<div className="flex flex-col gap-3">{modeToggle}<InputEditor label="Source A" value={edA} presets={[{ label: "kitten", value: "kitten" }, { label: "sunday", value: "sunday" }, { label: "abc", value: "abc" }]} onApply={(v) => setEdA(v.slice(0, 8))} /><InputEditor label="Target B" value={edB} presets={[{ label: "sitting", value: "sitting" }, { label: "saturday", value: "saturday" }, { label: "yabd", value: "yabd" }]} onApply={(v) => setEdB(v.slice(0, 8))} /></div>}
        pseudocode={<PseudocodePanel lines={PSEUDO_ED} activeLine={frame?.line} />}
        variables={<VariablesPanel vars={frame?.vars ?? {}} flashKeys={["value"]} />}>
        <div className="flex flex-col gap-3">{legend}{frame && <DPGrid frame={frame} rowLabels={rowLabels} colLabels={colLabels} />}{frame && <Callout>{frame.message}</Callout>}</div>
      </AlgoCanvas>
    );
  }
  if (mode === "knap") {
    const frame = pKN.current;
    const rowLabels = ["∅", ...knapItems.map((_, i) => `i${i + 1}`)];
    const colLabels = Array.from({ length: knapCap + 1 }, (_, i) => String(i));
    return (
      <AlgoCanvas title="0/1 Knapsack" player={pKN}
        input={<div className="flex flex-col gap-3">{modeToggle}<InputEditor label="Items (w,v)" value={knapIn} helper="Each token = weight,value." presets={[{ label: "Default", value: "2,3 3,4 4,5 5,6" }, { label: "Interview", value: "1,1 3,4 4,5 5,7" }]} onApply={setKnapIn} /><InputEditor label="Capacity W" value={knapW} presets={[{ label: "5", value: "5" }, { label: "8", value: "8" }, { label: "10", value: "10" }]} onApply={setKnapW} /></div>}
        pseudocode={<PseudocodePanel lines={PSEUDO_KN} activeLine={frame?.line} />}
        variables={<VariablesPanel vars={frame?.vars ?? {}} flashKeys={["value", "take", "skip"]} />}>
        <div className="flex flex-col gap-3">{legend}{frame && <DPGrid frame={frame} rowLabels={rowLabels} colLabels={colLabels} cellSize={34} />}{frame && <Callout>{frame.message}</Callout>}</div>
      </AlgoCanvas>
    );
  }

  const frame = pMCM.current;
  const n = mcmP.length - 1;
  return (
    <AlgoCanvas title="Matrix Chain Multiplication" player={pMCM}
      input={<div className="flex flex-col gap-3">{modeToggle}<InputEditor label="Dimensions p[0..n]" value={mcmStr} helper={`Matrix i has dimensions p[i] × p[i+1]. n = ${n} matrices.`} presets={[{ label: "Classic", value: "30, 35, 15, 5, 10, 20, 25" }, { label: "Small", value: "10, 20, 30, 40" }, { label: "3 mats", value: "5, 10, 3, 12" }]} onApply={setMcmStr} /></div>}
      pseudocode={<PseudocodePanel lines={PSEUDO_MCM} activeLine={frame?.line ?? 0} />}
      variables={<VariablesPanel vars={frame?.vars ?? {}} flashKeys={["cost", "value"]} />}>
      <div className="flex flex-col gap-3">
        <p className="text-xs text-stone-500">dp[i][j] = min scalar mults to multiply M[i..j].</p>
        {frame ? <DPGrid frame={frame} cellSize={42} rowLabels={Array.from({ length: n }, (_, i) => `${i}`)} colLabels={Array.from({ length: n }, (_, i) => `${i}`)} /> : <div className="text-stone-400 text-xs p-4">Need at least 2 dimensions.</div>}
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
    { title: "State has two dimensions", body: "In 2D DP, dp[i][j] depends on two variables - typically two indices into two sequences (LCS), or an index and a budget (knapsack). Define what both dimensions mean before writing transitions." },
    { title: "LCS", body: "dp[i][j] = length of LCS of A[0..i-1] and B[0..j-1]. Match → extend from dp[i-1][j-1]. Mismatch → inherit max from top or left. O(mn) time/space." },
    { title: "Edit Distance", body: "dp[i][j] = min ops (insert/delete/replace) to turn A[0..i-1] into B[0..j-1]. Match → free; mismatch → 1 + min(three neighbors). O(mn)." },
    { title: "0/1 Knapsack", body: "dp[i][w] = max value using first i items, capacity w. Each item: either skip (dp[i-1][w]) or take (dp[i-1][w-wi] + vi). O(nW) pseudopolynomial." },
    { title: "Matrix Chain Multiplication", body: "dp[i][j] = min scalar multiplications for M[i..j]. For every split k in [i, j-1], cost = dp[i][k] + dp[k+1][j] + p[i]·p[k+1]·p[j+1]. O(n³)." },
  ];
  return (
    <div className="flex flex-col gap-5">
      <div>
        <SectionEyebrow>Mental model</SectionEyebrow>
        <SectionTitle>Fill a 2D grid in dependency order</SectionTitle>
        <Lede>
          Picture a 2D grid where every cell is a subproblem. Fill it in an order that respects
          dependencies (row by row, or increasing length). Each cell&rsquo;s value is computed
          using 1-3 previously filled neighbors.
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
    { q: "LCS of 'ABCBDAB' and 'BDCABA' - length?", a: "4", hint: "One answer: BCBA." },
    { q: "Edit distance between 'kitten' and 'sitting'?", a: "3", hint: "k→s, e→i, insert g." },
    { q: "0/1 Knapsack: items (2,3)(3,4)(4,5)(5,6), W=5. Max value?", a: "7", hint: "Items 1 (w=2,v=3) + 2 (w=3,v=4) → total weight 5, value 7." },
    { q: "MCM with p=[10,20,30,40]: min scalar multiplications?", a: "18000", hint: "Split at k=1: 10·20·30 + 10·30·40 = 6000+12000 = 18000." },
  ];
  const [guesses, setGuesses] = useState<(string | null)[]>(problems.map(() => null));
  const [shown, setShown] = useState<boolean[]>(problems.map(() => false));
  return (
    <div className="flex flex-col gap-3">
      <Callout>Draw the DP table on paper first - then verify here.</Callout>
      {problems.map((p, i) => {
        const g = guesses[i];
        const revealed = shown[i];
        const correct = g !== null && g.trim() === p.a;
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
        <SubHeading>Fill order matters</SubHeading>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          In LCS you fill row-by-row because every dp[i][j] depends on dp[i-1][*] and dp[i][j-1].
          In MCM you fill by increasing chain length, because dp[i][j] depends on strictly shorter intervals.
        </p>
      </Card>
      <Card>
        <SubHeading>Why 0/1 Knapsack is &ldquo;pseudopolynomial&rdquo;</SubHeading>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          O(nW) looks polynomial, but W is a <em>numeric value</em> - its encoding is log(W) bits.
          So the real complexity is exponential in the input size. 0/1 knapsack is NP-hard;
          DP works because of the specific structure, not because it&rsquo;s &ldquo;easy&rdquo;.
        </p>
      </Card>
      <Card>
        <SubHeading>Interview targets</SubHeading>
        <ul className="list-disc pl-5 space-y-1 text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          <li>LCS and LPS (longest palindromic subsequence) - same O(n²) DP.</li>
          <li>Edit distance - three operations.</li>
          <li>0/1 knapsack - decision: take or skip.</li>
          <li>MCM - interval DP; always asked with specific dimensions.</li>
          <li>Space optimization: 2D → 1D when only last row used.</li>
        </ul>
      </Card>
    </div>
  );
}

/* ------------------------------------------------------------------ */

interface Props {
  onQuizComplete?: (score: number) => void;
}

export default function L6_DP2D({ onQuizComplete }: Props) {
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
      question: "In LCS, what is dp[i][j] when A[i-1] != B[j-1]?",
      options: ["dp[i-1][j-1]", "dp[i-1][j-1] + 1", "max(dp[i-1][j], dp[i][j-1])", "min(dp[i-1][j], dp[i][j-1])"],
      correctIndex: 2,
      explanation: "On mismatch, we can't extend the diagonal. The best we can do is inherit the better of dropping either the last char of A or of B.",
    },
    {
      question: "The time complexity of Matrix Chain Multiplication DP is:",
      options: ["O(n²)", "O(n³)", "O(n log n)", "O(2ⁿ)"],
      correctIndex: 1,
      explanation: "O(n²) cells × O(n) choices per cell (split points) = O(n³).",
    },
    {
      question: "Why is 0/1 Knapsack not solvable in polynomial time in general?",
      options: [
        "The table has exponentially many cells",
        "Capacity W is encoded in log W bits, so O(nW) is exponential in the input size",
        "Greedy gives wrong answers",
        "It requires backtracking",
      ],
      correctIndex: 1,
      explanation: "O(nW) is pseudopolynomial - polynomial in the numeric value, but the input is log W bits. That's why 0/1 knapsack is NP-hard.",
    },
    {
      question: "Edit distance between 'ab' and 'cd'?",
      options: ["0", "1", "2", "3"],
      correctIndex: 2,
      explanation: "Replace a→c and b→d → 2 operations. DP confirms 2.",
    },
  ];

  return (
    <LessonShell
      title="Dynamic Programming (2D)"
      level={6}
      lessonNumber={5}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="LCS and Edit Distance are top-tier interview patterns"
      nextLessonHint="Greedy Algorithms"
      onQuizComplete={onQuizComplete}
    />
  );
}

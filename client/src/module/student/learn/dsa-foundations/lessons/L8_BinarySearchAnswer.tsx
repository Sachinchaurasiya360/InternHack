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

const PRACTICE_TOPIC_SLUG: string | null = "binary-search";

/* ------------------------------------------------------------------ */
/*  Pseudocode                                                         */
/* ------------------------------------------------------------------ */

const PSEUDO = [
  "function minCapacity(pkgs, D):",
  "  lo = max(pkgs); hi = sum(pkgs)",
  "  while lo < hi:",
  "    mid = (lo + hi) // 2",
  "    if canShip(pkgs, D, mid):",
  "      hi = mid     // feasible - try smaller",
  "    else:",
  "      lo = mid + 1 // infeasible - need larger",
  "  return lo",
];

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

interface LoadStep { day: number; cap: number; used: number; pkgs: number[] }

interface Frame {
  line: number;
  vars: Record<string, string | number | undefined>;
  message: string;
  lo: number;
  hi: number;
  mid: number | null;
  feasible: boolean | null;
  loadSteps: LoadStep[];
  best: number | null;
  flashKey?: string;
}

/* ------------------------------------------------------------------ */
/*  Frame builder                                                      */
/* ------------------------------------------------------------------ */

function simulateShip(pkgs: number[], D: number, cap: number): { ok: boolean; steps: LoadStep[] } {
  const steps: LoadStep[] = [];
  let day = 1; let used = 0; let bucket: number[] = [];
  for (const p of pkgs) {
    if (p > cap) return { ok: false, steps: [{ day, cap, used, pkgs: [...bucket] }] };
    if (used + p > cap) { steps.push({ day, cap, used, pkgs: [...bucket] }); day++; used = 0; bucket = []; }
    used += p; bucket.push(p);
  }
  steps.push({ day, cap, used, pkgs: [...bucket] });
  return { ok: day <= D, steps };
}

function buildFrames(pkgs: number[], D: number): Frame[] {
  const f: Frame[] = [];
  if (pkgs.length === 0) {
    f.push({ line: 0, vars: {}, message: "No packages.", lo: 0, hi: 0, mid: null, feasible: null, loadSteps: [], best: null });
    return f;
  }
  const hiMax = pkgs.reduce((a, b) => a + b, 0);
  const loMin = Math.max(...pkgs);
  let lo = loMin; let hi = hiMax; let best: number | null = null;

  f.push({ line: 0, vars: { pkgs: `[${pkgs.join(",")}]`, D }, message: `Ship ${pkgs.length} packages in ${D} days. Find the smallest capacity.`, lo, hi, mid: null, feasible: null, loadSteps: [], best: null });
  f.push({ line: 1, vars: { lo, hi }, flashKey: "hi", message: `Answer space: [lo=${lo} (max pkg), hi=${hi} (sum of pkgs)].`, lo, hi, mid: null, feasible: null, loadSteps: [], best: null });

  let guard = 0;
  while (lo < hi && guard++ < 40) {
    f.push({ line: 2, vars: { lo, hi }, message: `lo=${lo} < hi=${hi} - keep searching.`, lo, hi, mid: null, feasible: null, loadSteps: [], best });
    const mid = Math.floor((lo + hi) / 2);
    f.push({ line: 3, vars: { lo, hi, mid }, flashKey: "mid", message: `mid = (${lo}+${hi})/2 = ${mid}. Test capacity ${mid}.`, lo, hi, mid, feasible: null, loadSteps: [], best });
    const sim = simulateShip(pkgs, D, mid);
    f.push({
      line: 4, vars: { mid, feasible: sim.ok ? "yes" : "no", daysUsed: sim.steps.length },
      message: sim.ok ? `canShip(cap=${mid}) uses ${sim.steps.length} days (<= ${D}) - feasible` : `canShip(cap=${mid}) uses ${sim.steps.length} days (> ${D}) - infeasible`,
      lo, hi, mid, feasible: sim.ok, loadSteps: sim.steps, best,
    });
    if (sim.ok) {
      hi = mid; best = mid;
      f.push({ line: 5, vars: { hi, best }, flashKey: "hi", message: `Feasible - try smaller. hi = ${mid}.`, lo, hi, mid, feasible: true, loadSteps: sim.steps, best });
    } else {
      lo = mid + 1;
      f.push({ line: 7, vars: { lo }, flashKey: "lo", message: `Infeasible - need bigger. lo = ${mid + 1}.`, lo, hi, mid, feasible: false, loadSteps: sim.steps, best });
    }
  }
  f.push({ line: 8, vars: { answer: lo }, flashKey: "answer", message: `Smallest feasible capacity = ${lo}.`, lo, hi, mid: null, feasible: null, loadSteps: [], best: lo });
  return f;
}

/* ------------------------------------------------------------------ */
/*  Visualization                                                      */
/* ------------------------------------------------------------------ */

function parseInput(s: string): { pkgs: number[]; D: number } | null {
  const parts = s.split("|");
  if (parts.length !== 2) return null;
  const pkgs = parts[0].split(/[,\s]+/).map(Number).filter((x) => Number.isFinite(x) && x > 0);
  const D = Number(parts[1].trim());
  if (!pkgs.length || !Number.isFinite(D) || D < 1) return null;
  return { pkgs, D };
}

function BinarySearchAnswerViz({ frame, pkgs, D }: { frame: Frame; pkgs: number[]; D: number }) {
  const totalLo = Math.max(...pkgs);
  const totalHi = pkgs.reduce((a, b) => a + b, 0);
  const range = Math.max(1, totalHi - totalLo);

  return (
    <div className="flex flex-col gap-5">
      {/* Number line */}
      <div>
        <div className="text-[10px] font-mono uppercase tracking-widest text-stone-500 mb-2">Answer Space</div>
        <div className="relative h-16 border border-stone-200 dark:border-white/10 rounded-md bg-stone-50 dark:bg-stone-950 px-4 py-2">
          {/* base line */}
          <div className="absolute left-4 right-4 top-1/2 h-1 bg-stone-200 dark:bg-stone-700 rounded" />
          {/* active band */}
          <div
            className="absolute top-1/2 h-1 rounded"
            style={{
              background: THEME.accent,
              left: `calc(1rem + (100% - 2rem) * ${(frame.lo - totalLo) / range})`,
              width: `calc((100% - 2rem) * ${Math.max(0, (frame.hi - frame.lo) / range)})`,
              transition: "all 0.35s ease",
            }}
          />
          {/* lo label */}
          <div
            className="absolute top-1 text-[10px] font-mono font-bold text-lime-700 dark:text-lime-400"
            style={{ left: `calc(1rem + (100% - 2rem) * ${(frame.lo - totalLo) / range} - 14px)`, transition: "left 0.35s ease" }}
          >
            lo={frame.lo}
          </div>
          {/* hi label */}
          <div
            className="absolute bottom-1 text-[10px] font-mono font-bold text-rose-600 dark:text-rose-400"
            style={{ left: `calc(1rem + (100% - 2rem) * ${(frame.hi - totalLo) / range} - 14px)`, transition: "left 0.35s ease" }}
          >
            hi={frame.hi}
          </div>
          {/* mid marker */}
          {frame.mid !== null && (
            <div
              className="absolute top-0.5 text-[10px] font-mono font-bold text-amber-700 dark:text-amber-400"
              style={{ left: `calc(1rem + (100% - 2rem) * ${(frame.mid - totalLo) / range} - 16px)`, transition: "left 0.35s ease" }}
            >
              mid={frame.mid}
            </div>
          )}
          <div className="absolute left-4 bottom-0.5 text-[10px] font-mono text-stone-400">{totalLo}</div>
          <div className="absolute right-4 bottom-0.5 text-[10px] font-mono text-stone-400">{totalHi}</div>
        </div>
        <p className="text-xs text-stone-500 mt-1">Feasible capacities form a suffix — binary search finds the boundary.</p>
      </div>

      {/* Feasibility check */}
      <div>
        <div className="text-[10px] font-mono uppercase tracking-widest text-stone-500 mb-2 flex items-center gap-2">
          Feasibility check{frame.mid !== null ? ` — cap=${frame.mid}` : ""}
          {frame.feasible === true && <span className="text-lime-700 dark:text-lime-400 font-bold">feasible</span>}
          {frame.feasible === false && <span className="text-rose-600 dark:text-rose-400 font-bold">infeasible</span>}
        </div>
        <div className="flex gap-2.5 flex-wrap min-h-16 p-3 border border-stone-200 dark:border-white/10 rounded-md bg-stone-50 dark:bg-stone-950">
          {frame.loadSteps.length === 0 ? (
            <span className="text-xs text-stone-400 italic">Waiting for a mid to test...</span>
          ) : (
            frame.loadSteps.map((step, i) => {
              const pct = (step.used / step.cap) * 100;
              const over = step.used > step.cap;
              return (
                <div
                  key={i}
                  className="min-w-28 p-2 rounded-md"
                  style={{
                    border: `2px solid ${over ? "#dc2626" : THEME.accent}`,
                    background: over ? "#fee2e2" : "#f7fee7",
                  }}
                >
                  <div className="text-[10px] font-bold text-stone-500 mb-1.5">Day {step.day}</div>
                  <div className="relative h-2 rounded bg-stone-200 overflow-hidden mb-1">
                    <div
                      className="absolute left-0 top-0 bottom-0 rounded transition-all"
                      style={{ width: `${Math.min(100, pct)}%`, background: over ? "#dc2626" : THEME.accent }}
                    />
                  </div>
                  <div className="text-[10px] font-mono text-stone-500">{step.used}/{step.cap}</div>
                  <div className="text-[10px] font-mono text-stone-700 dark:text-stone-300 mt-0.5">[{step.pkgs.join(",")}]</div>
                </div>
              );
            })
          )}
        </div>
      </div>

      {frame.best !== null && (
        <div className="px-4 py-2.5 rounded-md bg-lime-50 dark:bg-lime-400/10 border border-lime-400 text-sm text-stone-700 dark:text-stone-300">
          Best feasible capacity so far:{" "}
          <span className="font-mono font-bold text-lime-700 dark:text-lime-400">{frame.best}</span>
        </div>
      )}
      <Callout>{frame.message}</Callout>
    </div>
  );
}

function VisualizeTab() {
  const [inputStr, setInputStr] = useState("1,2,3,4,5,6,7,8,9,10 | 5");
  const parsed = parseInput(inputStr) ?? { pkgs: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], D: 5 };
  const frames = useMemo(() => buildFrames(parsed.pkgs, parsed.D), [parsed.pkgs, parsed.D]);
  const player = useStepPlayer(frames);
  const frame = player.current;

  return (
    <AlgoCanvas
      title="Capacity to Ship Packages — Binary Search on Answer"
      player={player}
      input={
        <InputEditor
          label="packages | days  (e.g. 1,2,3,4,5 | 3)"
          value={inputStr}
          placeholder="e.g. 1,2,3,4,5,6,7,8,9,10 | 5"
          helper="Comma-separated package weights, a pipe (|), then number of days."
          presets={[
            { label: "10 pkgs / 5 days", value: "1,2,3,4,5,6,7,8,9,10 | 5" },
            { label: "D=3", value: "3,2,2,4,1,4 | 3" },
            { label: "Tight (D=4)", value: "1,2,3,1,1 | 4" },
            { label: "Large", value: "5,4,3,2,4,5 | 2" },
          ]}
          onApply={(v) => { if (parseInput(v)) setInputStr(v); }}
          onRandom={() => {
            const n = 6 + Math.floor(Math.random() * 4);
            const pkgs: number[] = [];
            for (let i = 0; i < n; i++) pkgs.push(1 + Math.floor(Math.random() * 8));
            const d = 2 + Math.floor(Math.random() * (n - 1));
            setInputStr(`${pkgs.join(",")} | ${d}`);
          }}
        />
      }
      pseudocode={<PseudocodePanel lines={PSEUDO} activeLine={frame?.line} />}
      variables={<VariablesPanel vars={frame?.vars ?? {}} flashKeys={frame?.flashKey ? [frame.flashKey] : []} />}
    >
      {frame ? (
        <BinarySearchAnswerViz frame={frame} pkgs={parsed.pkgs} D={parsed.D} />
      ) : (
        <Callout>Press play to step through the algorithm.</Callout>
      )}
    </AlgoCanvas>
  );
}

/* ------------------------------------------------------------------ */
/*  Learn                                                              */
/* ------------------------------------------------------------------ */

function LearnTab() {
  const sections = [
    { title: "Two kinds of binary search", body: "Classic binary search runs on a sorted array — you look for an element. Binary search on the answer runs on the answer space itself: you binary-search over all possible answers and at each guess ask: is this guess feasible?" },
    { title: "When does it work?", body: "You need monotonic feasibility: if capacity c works, then any c' > c also works. Then the set of feasible capacities is a suffix [c*, infinity). Binary-search for c*." },
    { title: "The three ingredients", body: "(1) Answer bounds [lo, hi]. (2) A feasibility predicate canDo(mid) returning bool. (3) A monotone direction: feasible means try smaller (shrink hi); infeasible means try larger (grow lo). Works for min AND max problems — flip the direction." },
    { title: "Classic problems", body: "Capacity to ship packages, split-array largest-sum, koko eating bananas, painter partition, aggressive cows, smallest divisor, magnetic force, allocate books. All reduce to binary-search-on-answer plus greedy feasibility." },
  ];
  return (
    <div className="flex flex-col gap-5">
      <div>
        <SectionEyebrow>binary search on answer</SectionEyebrow>
        <SectionTitle>Search the answer space, not the data</SectionTitle>
        <Lede>
          Instead of searching for an element in data, you search for a parameter value that makes the problem solvable. The data becomes the environment for a yes/no test; the search happens on the knob you can turn.
        </Lede>
      </div>
      <div className="grid gap-3" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
        {sections.map((s, i) => (
          <Card key={i}>
            <div className="text-xs font-bold text-lime-700 dark:text-lime-400 mb-1 font-mono">0{i + 1}</div>
            <SubHeading>{s.title}</SubHeading>
            <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">{s.body}</p>
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
    { q: "pkgs = [1,2,3,4,5,6,7,8,9,10], D=5. Minimum capacity?", a: "15" },
    { q: "pkgs = [3,2,2,4,1,4], D=3. Minimum capacity?", a: "6" },
    { q: "Split [7,2,5,10,8] into 2 subarrays with minimal max-sum. Answer?", a: "18" },
    { q: "Koko & piles=[3,6,7,11], h=8. Minimum eating speed?", a: "4" },
  ];
  const [guesses, setGuesses] = useState<string[]>(problems.map(() => ""));
  const [shown, setShown] = useState<boolean[]>(problems.map(() => false));

  return (
    <div className="flex flex-col gap-3">
      <Callout>
        In every problem, define the answer space [lo, hi] and the feasibility predicate, then binary-search.
      </Callout>
      {problems.map((p, i) => {
        const correct = guesses[i].trim() === p.a;
        return (
          <Card key={i}>
            <p className="text-sm text-stone-800 dark:text-stone-200 mb-3">
              <span className="font-bold text-stone-400 mr-1">#{i + 1}.</span> {p.q}
            </p>
            <div className="flex gap-2 flex-wrap items-center">
              <input
                type="text"
                value={guesses[i]}
                onChange={(e) => { const v = [...guesses]; v[i] = e.target.value; setGuesses(v); }}
                placeholder="your answer"
                className="w-28 px-3 py-1.5 rounded-md border border-stone-200 dark:border-white/10 bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-50 font-mono text-sm focus:outline-none focus:border-stone-400"
              />
              <button
                type="button"
                onClick={() => { const v = [...shown]; v[i] = true; setShown(v); }}
                className="px-3 py-1.5 rounded-md border border-stone-200 dark:border-white/10 bg-stone-50 dark:bg-stone-950 text-stone-600 dark:text-stone-400 text-xs font-medium cursor-pointer hover:border-stone-400"
              >
                Reveal
              </button>
              {shown[i] && (
                <span
                  className={`px-3 py-1 rounded-md text-xs font-bold ${
                    correct
                      ? "bg-lime-50 dark:bg-lime-400/10 text-lime-800 dark:text-lime-200 border border-lime-400"
                      : "bg-rose-50 dark:bg-rose-400/10 text-rose-800 dark:text-rose-200 border border-rose-400"
                  }`}
                >
                  {correct ? `Correct - ${p.a}` : `Answer: ${p.a}`}
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
        <SubHeading>Complexity</SubHeading>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          Outer binary search: O(log(hi - lo)). Feasibility check: O(n) (one pass). Total: O(n * log(sum)). For ship-packages this is roughly O(n * 30) — blazing fast even when sum is 10^9.
        </p>
      </Card>
      <Card>
        <SubHeading>Template to memorize</SubHeading>
        <CodeBlock className="mb-0">
{`lo, hi = lowestAnswer, highestAnswer
while lo < hi:
    mid = (lo + hi) // 2
    if feasible(mid):
        hi = mid
    else:
        lo = mid + 1
return lo`}
        </CodeBlock>
      </Card>
      <Card>
        <SubHeading>Interview trap</SubHeading>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          The bounds matter: <InlineCode>lo = max(pkg)</InlineCode>, not 0 or 1. Anything smaller than the largest package is trivially infeasible. And <InlineCode>hi = sum(pkg)</InlineCode>, because that loads everything in one day.
        </p>
      </Card>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Root                                                               */
/* ------------------------------------------------------------------ */

interface Props {
  onQuizComplete?: (score: number) => void;
}

export default function L8_BinarySearchAnswer({ onQuizComplete }: Props) {
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
      question: "What property MUST the feasibility function satisfy for binary-search-on-answer to work?",
      options: [
        "It must run in O(1)",
        "It must be monotonic - if feasible(x) then feasible(x+1) too (or its dual)",
        "It must compare arrays",
        "It must always return true",
      ],
      correctIndex: 1,
      explanation: "Without monotonicity, the set of feasible answers isn't a prefix/suffix - you can't halve the space.",
    },
    {
      question: "For ship-packages, why is lo = max(packages) and not 1?",
      options: [
        "To save memory",
        "Because a single package heavier than capacity can never fit - anything below max(pkg) is infeasible",
        "So the loop runs fewer times",
        "Because 1 is odd",
      ],
      correctIndex: 1,
      explanation: "If cap < max(pkg), even one package overflows any day's load. max(pkg) is the true floor.",
    },
    {
      question: "Complexity of binary-search-on-answer when answer range is [0, S] and feasibility is O(n)?",
      options: ["O(n)", "O(n * log S)", "O(S * n)", "O(n²)"],
      correctIndex: 1,
      explanation: "log S binary-search iterations, each calling feasibility in O(n).",
    },
    {
      question: "Packages = [1,2,3,4,5], D=2. Smallest capacity?",
      options: ["7", "9", "10", "15"],
      correctIndex: 1,
      explanation: "Try 9: day1=[1,2,3] sum=6, day2=[4,5] sum=9 <= 9 - 2 days. Try 8: day1=[1,2,3] sum=6, day2=[4], day3=[5] - 3 days > 2. So 9.",
    },
  ];

  return (
    <LessonShell
      title="Binary Search on Answer"
      level={8}
      lessonNumber={2}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="Very high - a recurring FAANG pattern"
      nextLessonHint="Sliding Window (Advanced)"
      onQuizComplete={onQuizComplete}
    />
  );
}

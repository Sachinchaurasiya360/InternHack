import { lazy, Suspense, useMemo } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import { motion } from "framer-motion";
import { BookOpen, ExternalLink, Lightbulb } from "lucide-react";
import { Callout } from "./Callout";
import { CodeBlock, type CodeExampleLike } from "./CodeBlock";
import { Quiz, type QuizQuestion } from "./Quiz";
import { ConceptChart, type ChartSpec } from "./ConceptChart";
import "highlight.js/styles/github-dark.css";

const Mermaid = lazy(() => import("./Mermaid").then((m) => ({ default: m.Mermaid })));

export type DiagramSpec = { title?: string; mermaid: string; caption?: string };

export type LessonContentShape = {
  explanation?: string;
  codeExamples?: CodeExampleLike[];
  notes?: string[];
  commonPitfalls?: string[];
  interviewTips?: string[];
  // new optional fields
  diagrams?: DiagramSpec[];
  charts?: ChartSpec[];
  quiz?: QuizQuestion[];
  keyTakeaways?: string[];
  furtherReading?: { title: string; url: string }[];
};

type Props = {
  content: LessonContentShape;
  lessonId?: string;
  accent?: string; // tailwind color name eg "orange"
};

/**
 * Unified, engaging lesson renderer. Reads content fields and renders:
 * - explanation as markdown with GFM + code highlighting
 * - diagrams as Mermaid SVG
 * - charts via Recharts
 * - code examples with copy button
 * - notes / pitfalls / interview tips as colored callouts
 * - quiz as interactive inline quiz
 * - key takeaways as a highlighted summary card
 */
export function LessonContent({ content, lessonId }: Props) {
  const mdComponents = useMemo(
    () =>
      ({
        h1: (p: any) => <h2 className="text-xl font-bold text-gray-950 dark:text-white mt-5 mb-2" {...p} />,
        h2: (p: any) => <h3 className="text-lg font-bold text-gray-950 dark:text-white mt-4 mb-2" {...p} />,
        h3: (p: any) => <h4 className="text-base font-semibold text-gray-950 dark:text-white mt-3 mb-1.5" {...p} />,
        p: (p: any) => <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-3" {...p} />,
        ul: (p: any) => <ul className="list-disc list-outside pl-5 space-y-1 text-sm text-gray-700 dark:text-gray-300 mb-3" {...p} />,
        ol: (p: any) => <ol className="list-decimal list-outside pl-5 space-y-1 text-sm text-gray-700 dark:text-gray-300 mb-3" {...p} />,
        li: (p: any) => <li className="leading-relaxed" {...p} />,
        strong: (p: any) => <strong className="font-semibold text-gray-950 dark:text-white" {...p} />,
        em: (p: any) => <em className="italic" {...p} />,
        a: (p: any) => (
          <a
            className="text-violet-600 dark:text-violet-400 underline underline-offset-2 hover:text-violet-700"
            target="_blank"
            rel="noreferrer"
            {...p}
          />
        ),
        blockquote: (p: any) => (
          <blockquote className="border-l-4 border-l-violet-400 pl-4 my-3 italic text-gray-600 dark:text-gray-400" {...p} />
        ),
        code: ({ inline, className, children, ...rest }: any) => {
          if (inline) {
            return (
              <code
                className="px-1.5 py-0.5 rounded-md bg-gray-100 dark:bg-gray-800 text-rose-600 dark:text-rose-400 text-[0.85em] font-mono"
                {...rest}
              >
                {children}
              </code>
            );
          }
          return (
            <pre className="rounded-xl bg-gray-950 text-gray-100 p-4 overflow-x-auto my-3 text-sm">
              <code className={className} {...rest}>
                {children}
              </code>
            </pre>
          );
        },
        table: (p: any) => (
          <div className="overflow-x-auto my-3">
            <table className="min-w-full text-sm border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden" {...p} />
          </div>
        ),
        th: (p: any) => <th className="px-3 py-2 bg-gray-50 dark:bg-gray-800 text-left font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700" {...p} />,
        td: (p: any) => <td className="px-3 py-2 border-b border-gray-100 dark:border-gray-800 text-gray-700 dark:text-gray-300" {...p} />,
        hr: () => <hr className="my-4 border-gray-200 dark:border-gray-800" />,
      }) as any,
    []
  );

  return (
    <div className="space-y-5">
      {content.explanation && (
        <motion.section
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl p-6"
        >
          <div className="flex items-center gap-2 mb-4">
            <BookOpen className="w-4.5 h-4.5 text-violet-500" />
            <h2 className="text-lg font-bold text-gray-950 dark:text-white">Explanation</h2>
          </div>
          <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight]} components={mdComponents}>
            {content.explanation}
          </ReactMarkdown>
        </motion.section>
      )}

      {content.diagrams && content.diagrams.length > 0 && (
        <motion.section
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <h2 className="text-lg font-bold text-gray-950 dark:text-white mb-2">Visual Breakdown</h2>
          <Suspense fallback={<div className="h-32 rounded-2xl bg-gray-50 dark:bg-gray-900 animate-pulse" />}>
            {content.diagrams.map((d, i) => (
              <div key={i}>
                {d.title && <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mt-3 mb-1">{d.title}</p>}
                <Mermaid chart={d.mermaid} caption={d.caption} />
              </div>
            ))}
          </Suspense>
        </motion.section>
      )}

      {content.charts && content.charts.length > 0 && (
        <motion.section
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.12 }}
        >
          <h2 className="text-lg font-bold text-gray-950 dark:text-white mb-2">By the Numbers</h2>
          {content.charts.map((c, i) => (
            <ConceptChart key={i} spec={c} />
          ))}
        </motion.section>
      )}

      {content.codeExamples && content.codeExamples.length > 0 && (
        <motion.section
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
        >
          <h2 className="text-lg font-bold text-gray-950 dark:text-white mb-2">Code Examples</h2>
          {content.codeExamples.map((ex, i) => (
            <CodeBlock key={i} example={ex} />
          ))}
        </motion.section>
      )}

      {content.keyTakeaways && content.keyTakeaways.length > 0 && (
        <motion.section
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.18 }}
          className="rounded-2xl border border-indigo-200 dark:border-indigo-900/50 bg-indigo-50/50 dark:bg-indigo-950/20 p-6"
        >
          <div className="flex items-center gap-2 mb-3">
            <Lightbulb className="w-4 h-4 text-indigo-500" />
            <h3 className="text-sm font-bold text-gray-950 dark:text-white">Key Takeaways</h3>
          </div>
          <ul className="space-y-2">
            {content.keyTakeaways.map((k, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + i * 0.06 }}
                className="text-sm text-gray-800 dark:text-gray-200 flex items-start gap-2"
              >
                <span className="w-5 h-5 rounded-lg bg-indigo-500 text-white text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <span className="leading-relaxed">{k}</span>
              </motion.li>
            ))}
          </ul>
        </motion.section>
      )}

      {content.notes && content.notes.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <Callout variant="info" title="Important Notes" items={content.notes} />
        </motion.div>
      )}

      {content.commonPitfalls && content.commonPitfalls.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.24 }}
        >
          <Callout variant="warning" title="Common Pitfalls" items={content.commonPitfalls} />
        </motion.div>
      )}

      {content.interviewTips && content.interviewTips.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.28 }}
        >
          <Callout variant="interview" title="Interview Tips" items={content.interviewTips} />
        </motion.div>
      )}

      {content.quiz && content.quiz.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.32 }}
        >
          <Quiz questions={content.quiz} lessonId={lessonId} />
        </motion.div>
      )}

      {content.furtherReading && content.furtherReading.length > 0 && (
        <motion.section
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.36 }}
          className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl p-5"
        >
          <h3 className="text-sm font-bold text-gray-950 dark:text-white mb-3 flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-gray-500" />
            Further Reading
          </h3>
          <ul className="space-y-2">
            {content.furtherReading.map((f, i) => (
              <li key={i}>
                <a
                  href={f.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-violet-600 dark:text-violet-400 hover:underline"
                >
                  {f.title}
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            ))}
          </ul>
        </motion.section>
      )}
    </div>
  );
}

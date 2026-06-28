import { motion } from "framer-motion";

interface Props {
  eyebrow: string;
  title: string;
  titleTail?: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  features?: string[];
}

export default function HRComingSoon({
  eyebrow,
  title,
  titleTail = "soon.",
  description,
  icon: Icon,
  features = [],
}: Props) {
  return (
    <div className="max-w-7xl mx-auto">
      <header className="mt-6 mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="h-1 w-1 bg-lime-400" />
          <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
            {eyebrow}
          </span>
        </div>

        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="flex items-start gap-4 min-w-0">
            <span className="shrink-0 h-14 w-14 rounded-md bg-lime-400/15 border border-lime-400/30 flex items-center justify-center text-lime-700 dark:text-lime-400">
              <Icon className="w-5 h-5" />
            </span>
            <div className="min-w-0">
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
                {title}{" "}
                <span className="relative inline-block">
                  {titleTail}
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.25, duration: 0.5, ease: "easeOut" }}
                    className="absolute -bottom-0.5 left-0 right-0 h-0.75 bg-lime-400 origin-left"
                  />
                </span>
              </h1>
              <div className="mt-2 inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-lime-700 dark:text-lime-400">
                <span className="relative flex w-1.5 h-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-lime-500" />
                </span>
                coming soon
              </div>
              <p className="mt-3 text-sm text-stone-600 dark:text-stone-400 max-w-2xl">
                {description}
              </p>
            </div>
          </div>
        </div>
      </header>

      {features.length > 0 && (
        <>
          <div className="flex items-center gap-2 mb-3">
            <span className="h-1 w-1 bg-lime-400" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
              what's cooking
            </span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="border border-stone-200 dark:border-white/10 rounded-md overflow-hidden bg-white dark:bg-stone-950 divide-y divide-stone-100 dark:divide-white/5"
          >
            {features.map((f, i) => (
              <div
                key={f}
                className="flex items-start gap-4 px-4 py-3"
              >
                <span className="text-[10px] font-mono tabular-nums text-stone-400 dark:text-stone-500 mt-0.5 w-8 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-sm text-stone-700 dark:text-stone-300">
                  {f}
                </span>
              </div>
            ))}
          </motion.div>
        </>
      )}

      <p className="mt-6 text-[11px] font-mono uppercase tracking-widest text-stone-400 dark:text-stone-500">
        we're cooking, stay tuned.
      </p>
    </div>
  );
}

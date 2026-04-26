import { motion } from "framer-motion";

export function DemoVideoSection() {
  return (
    <section
      id="demo"
      className="relative py-24 md:py-32 bg-stone-50 dark:bg-stone-950 border-t border-stone-200 dark:border-white/10"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-stone-500 mb-6">
            <span className="h-1.5 w-1.5 bg-lime-400" />
            see it in action
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-stone-900 dark:text-stone-50 leading-none">
            90 seconds.{" "}
            <span className="text-stone-400 dark:text-stone-600">
              No signup.
            </span>
          </h2>
          <p className="mt-6 text-base md:text-lg text-stone-600 dark:text-stone-400 max-w-xl mx-auto leading-relaxed">
            Watch a full resume go from upload to ATS score to applied, start to
            finish, in a single uninterrupted take.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative max-w-5xl mx-auto"
        >
          <div className="relative rounded-2xl border border-stone-200 dark:border-white/10 bg-white dark:bg-stone-900 overflow-hidden shadow-2xl shadow-stone-900/10 dark:shadow-black/60">
            <div className="flex items-center gap-2.5 px-5 py-3 border-b border-stone-200 dark:border-white/10 bg-stone-50 dark:bg-white/5">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-sm bg-stone-300 dark:bg-white/20" />
                <span className="h-2.5 w-2.5 rounded-sm bg-stone-300 dark:bg-white/20" />
                <span className="h-2.5 w-2.5 rounded-sm bg-stone-300 dark:bg-white/20" />
              </div>
              <span className="ml-2 text-xs font-mono text-stone-500">
                internhack.xyz / demo.mp4
              </span>
              <span className="ml-auto flex items-center gap-1.5 text-xs font-mono text-stone-500">
                <span className="h-1.5 w-1.5 bg-lime-400" />
                90 sec
              </span>
            </div>
            <div className="relative aspect-video bg-stone-950">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&modestbranding=1"
                title="InternHack product demo"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

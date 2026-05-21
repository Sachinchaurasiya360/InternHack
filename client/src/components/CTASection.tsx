import { motion, useInView } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";

function useCountUp(target: number, isInView: boolean, duration = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const startValue = 0;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // easeOutQuart for smooth deceleration
      const eased = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(eased * (target - startValue) + startValue));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [isInView, target, duration]);

  return count;
}

function formatNumber(num: number): string {
  return num.toLocaleString("en-IN");
}

interface StatItemProps {
  target: number;
  label: string;
  isInView: boolean;
  duration?: number;
}

function StatItem({ target, label, isInView, duration }: StatItemProps) {
  const count = useCountUp(target, isInView, duration);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      <div className="text-4xl md:text-5xl font-bold tracking-tight text-white tabular-nums">
        {formatNumber(count)}
        <span className="text-lime-400">+</span>
      </div>
      <div className="mt-1 text-xs font-mono uppercase tracking-widest text-stone-500">
        {label}
      </div>
    </motion.div>
  );
}

export function CTASection() {
  const statsRef = useRef(null);
  const isInView = useInView(statsRef, { once: true, margin: "-100px" });

  return (
    <section className="relative py-24 md:py-32 bg-stone-50 dark:bg-stone-950 border-t border-stone-200 dark:border-white/10">
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl border border-stone-900 dark:border-white/10 bg-stone-900 dark:bg-stone-900 overflow-hidden"
        >
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none opacity-[0.06]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
              backgroundSize: "28px 28px",
            }}
          />

          <div className="relative grid md:grid-cols-5 gap-0">
            <div className="md:col-span-3 p-10 md:p-16 border-b md:border-b-0 md:border-r border-white/10">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-stone-400 mb-6">
                <motion.span
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                  className="h-1.5 w-1.5 bg-lime-400"
                />
                free to start / no card
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-none">
                Your next offer{" "}
                <span className="text-stone-500">
                  starts with one upload.
                </span>
              </h2>
              <p className="mt-6 text-base md:text-lg text-stone-400 max-w-lg leading-relaxed">
                Score a resume, drill one DSA track, apply to one verified role.
                Do it in the next 15 minutes, for zero rupees.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-3">
                <Link to="/register" className="no-underline">
                  <button className="group inline-flex items-center gap-2 px-6 py-3.5 bg-lime-400 text-stone-950 rounded-lg text-sm font-bold hover:bg-lime-300 transition-colors cursor-pointer border-0">
                    Start free
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </Link>
                <a href="#demo" className="no-underline">
                  <button className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg text-sm font-semibold text-white bg-transparent border border-white/20 hover:bg-white/5 transition-colors cursor-pointer">
                    <Play className="w-4 h-4 fill-current" />
                    Watch 90s demo
                  </button>
                </a>
              </div>
            </div>

            <div
              ref={statsRef}
              className="md:col-span-2 p-10 md:p-16 flex flex-col justify-center gap-8"
            >
              <StatItem target={54230} label="resumes scored" isInView={isInView} duration={2000} />
              <StatItem target={8900} label="offers landed" isInView={isInView} duration={1800} />
              <StatItem target={1247} label="curated roles" isInView={isInView} duration={1600} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
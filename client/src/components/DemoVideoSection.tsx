import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, ArrowRight, X } from "lucide-react";
import { Link } from "react-router";

// DEMO_VIDEO_URL: Replace with the actual URL from Part 1 once delivered.
// Currently using a high-quality placeholder tech demo.
const DEMO_VIDEO_URL = "https://www.youtube.com/embed/dQw4w9WgXcQ"; 
const POSTER_IMAGE = "/og-image.png";

export function DemoVideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const stopVideo = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setIsPlaying(false);
  }, []);

  return (
    <section
      id="demo"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-stone-50 dark:bg-stone-950 border-t border-stone-200 dark:border-white/10 scroll-mt-16 overflow-hidden"
    >
      {/* Subtle background glow */}
      <div 
        aria-hidden
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at center, #84cc16 0%, transparent 70%)",
          transform: "translate(-50%, -20%) scale(1.5)"
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-stone-500 mb-6">
            <span className="h-1.5 w-1.5 bg-lime-400" />
            platform walkthrough
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-stone-900 dark:text-stone-50 leading-none">
            Built for speed.{" "}
            <span className="text-stone-400 dark:text-stone-600">
              Designed for you.
            </span>
          </h2>
          <p className="mt-6 text-base md:text-lg text-stone-600 dark:text-stone-400 max-w-2xl mx-auto leading-relaxed">
            Take a 90-second tour of the platform. See how we help you go from 
            unoptimized resume to ready-for-interview in record time.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative max-w-5xl mx-auto"
        >
          <div className="relative rounded-3xl border border-stone-200 dark:border-white/10 bg-white dark:bg-stone-900 overflow-hidden shadow-2xl shadow-stone-900/10 dark:shadow-black/60">
            {/* Browser chrome header */}
            <div className="flex items-center gap-2.5 px-5 py-3 border-b border-stone-200 dark:border-white/10 bg-stone-50 dark:bg-white/5">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-stone-300 dark:bg-white/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-stone-300 dark:bg-white/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-stone-300 dark:bg-white/20" />
              </div>
              <span className="ml-2 text-[10px] font-mono uppercase tracking-widest text-stone-500">
                internhack.xyz / demo
              </span>
              <div className="ml-auto flex items-center gap-2">
                 <span className="h-1.5 w-1.5 rounded-full bg-lime-400" />
                 <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500">walkthrough</span>
              </div>
            </div>

            <div className="relative aspect-video bg-stone-950 overflow-hidden group">
              <AnimatePresence mode="wait">
                {!isPlaying ? (
                  <motion.div
                    key="poster"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 z-10 flex items-center justify-center cursor-pointer"
                    onClick={() => setIsPlaying(true)}
                  >
                    <img
                      src={POSTER_IMAGE}
                      alt="InternHack Demo Preview"
                      className="absolute inset-0 w-full h-full object-cover opacity-60 dark:opacity-40 group-hover:scale-105 transition-transform duration-700"
                    />
                    
                    <div
                      aria-hidden
                      className="absolute inset-0 bg-stone-900/20 group-hover:bg-stone-900/10 transition-colors duration-500"
                    />

                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="relative z-20 flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full bg-lime-400 text-stone-950 shadow-2xl group-hover:bg-white transition-colors"
                    >
                      <Play className="w-8 h-8 md:w-10 md:h-10 fill-current ml-1 md:ml-1.5" />
                    </motion.div>
                    
                    <div className="absolute top-6 right-6 z-20">
                       <div className="px-3 py-1.5 rounded-full bg-stone-900/80 backdrop-blur-md border border-white/10 text-white text-[10px] font-mono uppercase tracking-widest flex items-center gap-2">
                          <Play className="w-3 h-3 fill-current" />
                          Watch Demo
                       </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="player"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 z-20 bg-black"
                  >
                    <iframe
                      src={`${DEMO_VIDEO_URL}?autoplay=1&rel=0&modestbranding=1&showinfo=0`}
                      title="InternHack Platform Demo"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full border-0"
                    />
                    <button
                       onClick={stopVideo}
                       className="absolute top-4 right-4 z-30 p-2 rounded-full bg-stone-900/80 backdrop-blur-md text-white hover:bg-stone-800 transition-colors border border-white/10"
                       title="Close video"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-8 bg-white dark:bg-stone-900/50 border border-stone-200 dark:border-white/10 rounded-3xl p-8 md:p-10 shadow-xl shadow-stone-900/5 dark:shadow-none">
            <div className="flex-1 space-y-2">
              <h3 className="text-xl font-bold text-stone-900 dark:text-stone-50">
                Ready to optimize your career?
              </h3>
              <p className="text-stone-500 text-sm max-w-sm mx-auto md:mx-0">
                Join thousands of students from top Indian colleges using InternHack to prepare, practice, and get placed.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full sm:w-auto">
              <Link to="/register" className="no-underline w-full sm:w-auto">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-lime-400 text-stone-950 rounded-2xl text-sm font-bold hover:bg-lime-300 transition-all shadow-lg shadow-lime-400/20 w-full sm:w-auto"
                >
                  Start for free
                </motion.div>
              </Link>
              <Link to="/ats-score" className="no-underline w-full sm:w-auto">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-stone-100 dark:bg-white/5 text-stone-900 dark:text-stone-50 rounded-2xl text-sm font-bold hover:bg-stone-200 dark:hover:bg-white/10 transition-all w-full sm:w-auto"
                >
                  Try ATS scorer
                </motion.div>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

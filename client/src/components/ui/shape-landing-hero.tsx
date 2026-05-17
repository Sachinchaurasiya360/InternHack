import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { Link } from "react-router";
import { useEffect, useState, useRef } from "react";
import NumberFlow from "@number-flow/react";
import { ArrowRight, Play, Star } from "lucide-react";
import { useAuthStore } from "@/lib/auth.store";

const ROTATING_WORDS = ["offer.", "internship.", "interview.", "callback.", "dream job."];

const WINS = [
  { name: "Aarav", role: "SWE Intern", at: "Wipro" },
  { name: "Tanvi", role: "Frontend", at: "Mphasis" },
  { name: "Priya", role: "Data Intern", at: "LTIMindtree" },
  { name: "Rehan", role: "QA Intern", at: "Hexaware" },
  { name: "Rohan", role: "Associate", at: "Capgemini" },
  { name: "Sneha", role: "SDE Intern", at: "Cognizant" },
  { name: "Ishita", role: "Junior Dev", at: "Tech Mahindra" },
  { name: "Devansh", role: "Backend", at: "Josh Talks" },
  { name: "Karan", role: "SWE Intern", at: "NIIT" },
  { name: "Pooja", role: "Android", at: "CarWale" },
  { name: "Neha", role: "Data Analyst", at: "Nagarro" },
  { name: "Arjun", role: "Full Stack", at: "Newgen" },
  { name: "Ayush", role: "Backend", at: "Infosys" },
  { name: "Riya", role: "ML Intern", at: "Quinnox" },
  { name: "Meera", role: "ML Intern", at: "Hidden Brains" },
  { name: "Harsh", role: "DevOps", at: "Coforge" },
  { name: "Sakshi", role: "SDE Intern", at: "TCS" },
  { name: "Vikram", role: "Frontend", at: "Chaayos" },
  { name: "Ananya", role: "Product", at: "Zensar" },
  { name: "Nikhil", role: "SDE Intern", at: "Mindtree" },
  { name: "Ritika", role: "Support Eng", at: "HCL" },
  { name: "Siddharth", role: "Backend", at: "Sapient" },
  { name: "Zoya", role: "UX Intern", at: "Persistent" },
  { name: "Manan", role: "Junior Dev", at: "Birlasoft" },
  { name: "Kavya", role: "Web Dev", at: "Cyient" },
  { name: "Yash", role: "Intern", at: "Mastek" },
  { name: "Mehul", role: "Junior Dev", at: "Sonata Software" },
  { name: "Tara", role: "Frontend", at: "Syntel" },
];

function HeroGeometric() {
  const { isAuthenticated, user } = useAuthStore();
  const getStartedHref = isAuthenticated
    ? user?.role === "ADMIN"
      ? "/admin"
      : user?.role === "RECRUITER"
        ? "/recruiters"
        : "/student/applications"
    : "/register";

  const [wordIdx, setWordIdx] = useState(0);
  useEffect(() => {
    const id = setInterval(
      () => setWordIdx((i) => (i + 1) % ROTATING_WORDS.length),
      2200,
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-50 border-b border-stone-200 dark:border-white/10">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none dark:hidden"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(23,23,23,0.04) 1px, transparent 1px)",
          backgroundSize: "140px 100%",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none hidden dark:block"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "140px 100%",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-10 md:pt-40 md:pb-14 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none"
        >
          Land the
          <br />
          <span className="relative inline-block align-baseline">
            <AnimatePresence mode="wait">
              <motion.span
                key={ROTATING_WORDS[wordIdx]}
                initial={{ y: 40, opacity: 0, filter: "blur(8px)" }}
                animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                exit={{ y: -40, opacity: 0, filter: "blur(8px)" }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10 inline-block"
              >
                {ROTATING_WORDS[wordIdx]}
              </motion.span>
            </AnimatePresence>
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.7, delay: 0.9, ease: "easeOut" }}
              aria-hidden
              className="absolute bottom-1 left-0 right-0 h-3 md:h-4 bg-lime-400 origin-left z-0"
            />
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 text-base md:text-lg text-stone-600 dark:text-stone-400 max-w-2xl mx-auto leading-relaxed"
        >
          InternHack scores your resume, sharpens your DSA, runs mock
          interviews, and sends your application straight to recruiters hiring.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.28 }}
          className="mt-10 flex flex-col sm:flex-row gap-3 justify-center items-center"
        >
          <Link to={getStartedHref} className="no-underline">
            <button className="group inline-flex items-center gap-2 px-6 py-3.5 bg-lime-400 text-stone-950 rounded-lg text-sm font-bold hover:bg-lime-300 transition-colors cursor-pointer border-0">
              {isAuthenticated ? "Open dashboard" : "Start free"}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </Link>
          <a href="#demo" className="no-underline">
            <button className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg text-sm font-semibold text-stone-900 dark:text-stone-100 bg-transparent border border-stone-300 dark:border-white/15 hover:bg-stone-100 dark:hover:bg-white/5 transition-colors cursor-pointer">
              <Play className="w-4 h-4 fill-current" />
              Watch 90s demo
            </button>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.36 }}
          className="mt-5 flex items-center justify-center gap-4 text-xs font-mono text-stone-500"
        >
          <span className="inline-flex items-center gap-1.5">
            <Star className="w-3.5 h-3.5 fill-lime-400 stroke-lime-400" />
            4.8 from 12k+ students
          </span>
          <span className="text-stone-300 dark:text-stone-700">·</span>
          <span>free forever · ₹249/mo pro</span>
        </motion.div>

        <AnimatedStats />
      </div>

      <WinsMarquee />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-10 border-t border-stone-200 dark:border-white/10">
        <div className="text-xs font-mono uppercase tracking-widest text-stone-500 mb-4 text-center">
          Trusted by students at
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-semibold text-stone-500 dark:text-stone-500">
          <span>IITs</span>
          <span className="text-stone-300 dark:text-stone-700">/</span>
          <span>NITs</span>
          <span className="text-stone-300 dark:text-stone-700">/</span>
          <span>BITS Pilani</span>
          <span className="text-stone-300 dark:text-stone-700">/</span>
          <span>IIITs</span>
          <span className="text-stone-300 dark:text-stone-700">/</span>
          <span>VIT</span>
          <span className="text-stone-300 dark:text-stone-700">/</span>
          <span>SRM</span>
          <span className="text-stone-300 dark:text-stone-700">/</span>
          <span>Manipal</span>
          <span className="text-stone-300 dark:text-stone-700">/</span>
          <span>200+ colleges</span>
        </div>
      </div>
    </section>
  );
}

function AnimatedStats() {
  const [values, setValues] = useState({ resumes: 0, roles: 0, placements: 0 });
  useEffect(() => {
    const t = setTimeout(
      () => setValues({ resumes: 54230, roles: 1247, placements: 8900 }),
      700,
    );
    return () => clearTimeout(t);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="mt-16 grid grid-cols-3 gap-px bg-stone-200 dark:bg-white/10 border border-stone-200 dark:border-white/10 rounded-xl overflow-hidden max-w-3xl mx-auto"
    >
      <StatCell
        value={values.resumes}
        label="resumes scored"
        suffix="+"
      />
      <StatCell value={values.roles} label="curated roles" suffix="+" />
      <StatCell
        value={values.placements}
        label="offers landed"
        suffix="+"
      />
    </motion.div>
  );
}

function StatCell({
  value,
  label,
  suffix,
}: {
  value: number;
  label: string;
  suffix?: string;
}) {
  return (
    <div className="bg-stone-50 dark:bg-stone-950 p-3 sm:p-5 text-left min-w-0">
      <div className="text-lg sm:text-2xl md:text-4xl font-bold tracking-tight tabular-nums text-stone-900 dark:text-stone-50 wrap-break-word">
        <NumberFlow value={value} />
        {suffix && (
          <span className="text-lime-500 dark:text-lime-400">{suffix}</span>
        )}
      </div>
      <div className="mt-1 text-[10px] sm:text-xs font-mono uppercase tracking-widest text-stone-500 leading-snug">
        {label}
      </div>
    </div>
  );
}

function WinsMarquee() {
  const controls = useAnimation();
  const isPaused = useRef(false);
  
  const startAnimation = () => {
    controls.start({
      x: ["0%", "-50%"],
      transition: { duration: 90, repeat: Infinity, ease: "linear" },
    });
  };

  useEffect( () => {
    startAnimation();
  }, []);

  const mouseEnter = () => {
    isPaused.current = true;
    controls.stop();
  };

  const mouseLeave = () => {
    isPaused.current = false;
    startAnimation();
  };

  const onclicked = () => {
    if(isPaused.current) {
      isPaused.current = false;
      startAnimation();
    } else {
      isPaused.current = true;
      controls.stop();
    }
  };

  const row = [...WINS, ...WINS];
  return (
    <div
      className="relative py-6 border-y border-stone-200 dark:border-white/10 bg-stone-100/60 dark:bg-white/2 overflow-hidden"
      aria-hidden
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-linear-to-r from-stone-100/60 dark:from-stone-950 to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-linear-to-l from-stone-100/60 dark:from-stone-950 to-transparent z-10" />

      <div className="flex items-center gap-3 px-6 max-w-6xl mx-auto mb-3">
        <span className="text-xs font-mono uppercase tracking-widest text-stone-500">
          Live · recent wins
        </span>
      </div>

      <div
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
        onClick={onclicked}
        className="cursor-pointer"
      >
      <motion.div
        className="flex gap-3 whitespace-nowrap w-max"
        animate={ controls }
      >
        {row.map((w, i) => (
          <div
            key={i}
            className="flex items-center gap-3 px-4 py-2.5 bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-lg"
          >
            <span className="h-6 w-6 rounded-md bg-lime-400/15 border border-lime-400/30 flex items-center justify-center text-xs font-bold text-lime-700 dark:text-lime-400">
              {w.name[0]}
            </span>
            <span className="text-sm font-semibold text-stone-900 dark:text-stone-50">
              {w.name}
            </span>
            <span className="text-xs font-mono text-stone-500">
              {w.role}
            </span>
            <span className="text-stone-300 dark:text-stone-700">→</span>
            <span className="text-sm font-bold text-stone-900 dark:text-stone-50">
              {w.at}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  </div>
  );
}

export { HeroGeometric };

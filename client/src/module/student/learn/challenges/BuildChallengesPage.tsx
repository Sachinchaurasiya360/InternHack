import { motion } from "framer-motion";
import { ArrowUpRight, Terminal, Globe, Database, Cpu, Layers } from "lucide-react";
import { SEO } from "../../../../components/SEO";
import { canonicalUrl } from "../../../../lib/seo.utils";

interface Challenge {
  id: string;
  title: string;
  description: string;
  difficulty: string;
  tech: string[];
  icon: typeof Terminal;
  color: string;
  href: string;
}

const CHALLENGES: Challenge[] = [
  {
    id: "portfolio",
    title: "Personal Portfolio",
    description: "Build a responsive portfolio site with HTML, CSS, and JavaScript. Include dark mode, project filtering, and a contact form with localStorage persistence.",
    difficulty: "Beginner",
    tech: ["HTML", "CSS", "JS"],
    icon: Globe,
    color: "text-sky-500",
    href: "/learn/html",
  },
  {
    id: "todo-api",
    title: "Todo REST API",
    description: "Build a full-featured Todo API with Express and Node. Implement CRUD, pagination, filtering, authentication, rate limiting, and Swagger docs.",
    difficulty: "Intermediate",
    tech: ["Node", "Express", "JWT"],
    icon: Terminal,
    color: "text-lime-500",
    href: "/learn/nodejs",
  },
  {
    id: "weather-dashboard",
    title: "Weather Dashboard",
    description: "Build a React weather dashboard with city search, 7-day forecast, charts, geolocation, and responsive design using the OpenWeatherMap API.",
    difficulty: "Intermediate",
    tech: ["React", "TS", "Charts"],
    icon: Layers,
    color: "text-amber-500",
    href: "/learn/react",
  },
  {
    id: "etl-pipeline",
    title: "ETL Data Pipeline",
    description: "Build a Python ETL pipeline that extracts CSV data, transforms with Pandas, loads into PostgreSQL, and generates an HTML report with Matplotlib charts.",
    difficulty: "Advanced",
    tech: ["Python", "Pandas", "SQL"],
    icon: Database,
    color: "text-blue-500",
    href: "/learn/python",
  },
  {
    id: "nft-marketplace",
    title: "NFT Marketplace",
    description: "Deploy an ERC-721 smart contract, build a React dApp with ethers.js, and implement minting, listing, buying, and IPFS metadata storage.",
    difficulty: "Advanced",
    tech: ["Solidity", "React", "IPFS"],
    icon: Cpu,
    color: "text-purple-500",
    href: "/learn/blockchain",
  },
];

const DIFFICULTY_COLORS: Record<string, string> = {
  Beginner: "text-green-700 dark:text-green-400 border-green-300 dark:border-green-900/60",
  Intermediate: "text-amber-700 dark:text-amber-400 border-amber-300 dark:border-amber-900/60",
  Advanced: "text-red-700 dark:text-red-400 border-red-300 dark:border-red-900/60",
};

export default function BuildChallengesPage() {
  return (
    <div className="bg-stone-50 dark:bg-stone-950 min-h-[calc(100vh-4rem)]">
      <SEO
        title="Build Challenges - Hands-on Projects"
        description="5 practical build challenges across web, API, data, and blockchain — put your skills to the test."
        canonicalUrl={canonicalUrl("/learn/challenges")}
      />

      <div className="max-w-5xl mx-auto px-3 sm:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-10 border-b border-stone-200 dark:border-white/10 pb-8"
        >
          <div className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-stone-500">
            <span className="h-1.5 w-1.5 bg-lime-400" />
            learn / build challenges
          </div>
          <h1 className="mt-4 text-3xl sm:text-5xl font-bold tracking-tight text-stone-900 dark:text-stone-50 leading-none">
            Build it.{" "}
            <span className="text-lime-500">Break it. Ship it.</span>
          </h1>
          <p className="mt-4 text-sm text-stone-600 dark:text-stone-400 max-w-2xl">
            Five hands-on projects that test your ability to build real-world software.
            Each challenge links to the relevant learning track so you can brush up on concepts first.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {CHALLENGES.map((ch, i) => (
            <motion.a
              key={ch.id}
              href={ch.href}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 + Math.min(i, 4) * 0.06 }}
              className="group flex flex-col bg-white dark:bg-stone-900 p-5 rounded-md border border-stone-200 dark:border-white/10 hover:border-stone-400 dark:hover:border-white/30 transition-colors no-underline h-full"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-11 h-11 rounded-md bg-stone-100 dark:bg-white/5 border border-stone-200 dark:border-white/10 flex items-center justify-center shrink-0">
                    <ch.icon className={`w-5 h-5 ${ch.color}`} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-base font-bold tracking-tight text-stone-900 dark:text-stone-50 leading-tight group-hover:text-lime-700 dark:group-hover:text-lime-400 transition-colors truncate">
                      {ch.title}
                    </h3>
                    <span className={`inline-flex items-center px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider border rounded-md ${DIFFICULTY_COLORS[ch.difficulty] ?? ""}`}>
                      {ch.difficulty}
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-stone-400 group-hover:text-lime-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all shrink-0" />
              </div>

              <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed mb-4 flex-1">
                {ch.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mt-auto">
                {ch.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400 border border-stone-200 dark:border-white/10 px-2 py-0.5 rounded-md"
                  >
                    / {t}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
}

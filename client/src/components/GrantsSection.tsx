import { motion } from "framer-motion";
import { Award, ArrowRight, DollarSign, Globe, CheckCircle2 } from "lucide-react";
import { Link } from "react-router";

const FEATURED_GRANTS = [
  {
    name: "Ecosystem Support Program",
    org: "Ethereum Foundation",
    amount: "Up to $250K+",
    ecosystem: "Ethereum",
    logo: "https://cryptologos.cc/logos/ethereum-eth-logo.svg",
  },
  {
    name: "Foundation Grants",
    org: "Solana Foundation",
    amount: "$200 - $10K+",
    ecosystem: "Solana",
    logo: "https://cryptologos.cc/logos/solana-sol-logo.svg",
  },
  {
    name: "Retro Funding (RPGF)",
    org: "Optimism",
    amount: "16M OP/round",
    ecosystem: "Optimism",
    logo: "https://cryptologos.cc/logos/optimism-ethereum-op-logo.svg",
  },
  {
    name: "Project Catalyst",
    org: "Cardano",
    amount: "Up to 2M ADA",
    ecosystem: "Cardano",
    logo: "https://cryptologos.cc/logos/cardano-ada-logo.svg",
  },
];

export function GrantsSection() {
  return (
    <section className="relative py-24 md:py-32 bg-[#fafafa] overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-linear-to-bl from-amber-50 to-orange-50 rounded-full blur-3xl opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-gray-200 text-xs font-medium text-gray-500 uppercase tracking-wider mb-6">
            <Award className="w-3.5 h-3.5" />
            Web3 Grants
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-gray-950 tracking-tight mb-4">
            Fund your
            <br />
            <span className="text-gradient-accent">Web3 project</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            Explore 50+ grants from top blockchain foundations and DAOs. Get funding for DeFi, infrastructure, gaming, and more.
          </p>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="flex items-center justify-center gap-8 mb-12"
        >
          {[
            { label: "Grants Listed", value: "50+" },
            { label: "Ecosystems", value: "30+" },
            { label: "Total Funding", value: "$5B+" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl font-bold text-gray-950">{stat.value}</p>
              <p className="text-xs text-gray-400 mt-0.5">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Featured grants grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {FEATURED_GRANTS.map((grant, i) => (
            <motion.div
              key={grant.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
            >
              <div className="group flex items-center gap-4 p-4 bg-white rounded-2xl border border-gray-200 hover:border-gray-300 hover:shadow-lg hover:shadow-gray-100 transition-all">
                <div className="w-12 h-12 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center shrink-0">
                  <img src={grant.logo} alt={grant.org} className="w-7 h-7 object-contain" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-bold text-gray-900 truncate">{grant.name}</h3>
                  <p className="text-xs text-gray-500">{grant.org}</p>
                </div>
                <div className="text-right shrink-0">
                  <div className="flex items-center gap-1 text-sm font-semibold text-gray-900">
                    <DollarSign className="w-3.5 h-3.5 text-gray-400" />
                    {grant.amount}
                  </div>
                  <div className="flex items-center gap-1 text-xs text-gray-400 mt-0.5">
                    <Globe className="w-3 h-3" />
                    {grant.ecosystem}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-6 mb-10"
        >
          {["Non-dilutive funding", "Multiple ecosystems", "Beginner-friendly options", "Apply directly"].map((text) => (
            <div key={text} className="flex items-center gap-1.5 text-sm text-gray-500">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              {text}
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-center"
        >
          <Link
            to="/grants"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gray-950 text-white text-sm font-semibold hover:bg-gray-800 transition-colors no-underline shadow-sm"
          >
            Explore All Grants
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

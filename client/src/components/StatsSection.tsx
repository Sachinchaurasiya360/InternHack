import { motion } from "framer-motion";
import { Users, Briefcase, Map, Building2, GraduationCap } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import api from "../lib/axios";
import { queryKeys } from "../lib/query-keys";

interface PlatformStats {
  users: number;
  jobs: number;
  careers: number;
  companies: number;
  colleges: number;
}

const fallback: PlatformStats = { users: 1800, jobs: 20, careers: 8, companies: 49, colleges: 39000 };

export function StatsSection() {
  const { data: stats = fallback } = useQuery({
    queryKey: queryKeys.stats.landing(),
    queryFn: () => api.get<PlatformStats>("/stats").then((r) => r.data),
  });

  const items = [
    { icon: Users, value: stats.users, label: "Students", suffix: "+" },
    { icon: Briefcase, value: stats.jobs, label: "Active Jobs", suffix: "+" },
    { icon: Map, value: stats.careers, label: "Career Roadmaps", suffix: "" },
    { icon: Building2, value: stats.companies, label: "Companies", suffix: "+" },
    { icon: GraduationCap, value: stats.colleges, label: "Colleges", suffix: "+" },
  ];

  return (
    <section className="relative py-16 bg-white dark:bg-gray-900 border-y border-gray-100 dark:border-gray-800">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="text-center"
            >
              <div className="w-12 h-12 rounded-2xl bg-gray-950 dark:bg-white flex items-center justify-center mx-auto mb-3">
                <item.icon className="w-5 h-5 text-white dark:text-gray-950" />
              </div>
              <div className="font-display text-3xl font-bold text-gray-950 dark:text-white mb-1">
                {item.value > 0 ? `${item.value}${item.suffix}` : "—"}
              </div>
              <div className="text-sm text-gray-400 dark:text-gray-500 font-medium">{item.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

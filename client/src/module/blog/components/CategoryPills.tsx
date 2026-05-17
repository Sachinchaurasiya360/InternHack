import { motion } from "framer-motion";
import type { BlogCategory } from "@/lib/types";

const CATEGORY_LABELS: Record<BlogCategory, string> = {
  CAREER_ADVICE: "Career Advice",
  INTERVIEW_TIPS: "Interview Tips",
  SALARY_GUIDE: "Salary Guide",
  INDUSTRY_INSIGHTS: "Industry Insights",
  RESUME_TIPS: "Resume Tips",
  TECH_TRENDS: "Tech Trends",
};

interface CategoryPillsProps {
  selected: BlogCategory | "ALL";
  onChange: (category: BlogCategory | "ALL") => void;
}

const categories: (BlogCategory | "ALL")[] = [
  "ALL",
  "CAREER_ADVICE",
  "INTERVIEW_TIPS",
  "SALARY_GUIDE",
  "INDUSTRY_INSIGHTS",
  "RESUME_TIPS",
  "TECH_TRENDS",
];

export default function CategoryPills({
  selected,
  onChange,
}: CategoryPillsProps) {
  return (
    <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2">
      {categories.map((category) => {
        const active = selected === category;

        return (
          <motion.button
            key={category}
            whileTap={{ scale: 0.96 }}
            onClick={() => onChange(category)}
            className={`relative whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 border ${
              active
                ? "bg-stone-950 dark:bg-white text-white dark:text-stone-950 border-stone-950 dark:border-white"
                : "border-stone-200 dark:border-white/10 bg-white dark:bg-stone-900 text-stone-600 dark:text-stone-300 hover:border-stone-950 hover:text-stone-950 dark:hover:text-white"            }`}
          >
            {category === "ALL"
              ? "All"
              : CATEGORY_LABELS[category]}
          </motion.button>
        );
      })}
    </div>
  );
}
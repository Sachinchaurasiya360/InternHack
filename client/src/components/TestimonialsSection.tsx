import { motion } from "framer-motion";
import { TestimonialsColumn } from "./ui/testimonials-columns";

const testimonials = [
  {
    text: "InternHack's ATS scanner completely changed my resume game. I went from zero callbacks to landing 3 interviews in a single week.",
    image: "https://media.licdn.com/dms/image/v2/D4D35AQGqDwpLWSkLgg/profile-framedphoto-shrink_400_400/B4DZemDgKPGYAc-/0/1750837625776?e=1775649600&v=beta&t=Vf5dk2P4DP5sEXq6UKx5lxuA6RrZL9cbEejp_gU8vnA",
    name: "Arbaaz Khan",
    role: "SDE, Odoo",
  },
  {
    text: "The career roadmaps gave me a clear path from DSA basics to system design. I followed it religiously and cracked my dream company.",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQGbKGY1-Nxneg/profile-displayphoto-scale_400_400/B4DZi4zwW7HsAg-/0/1755447232777?e=1776902400&v=beta&t=A-AiwNjcEUYworyAxokEHyn5EetnfdBFZbSJmNOW6YE",
    name: "Priyansh",
    role: "SDE, LTI Mindtree",
  },
  {
    text: "As someone pivoting into AI, the structured learning modules and project recommendations on InternHack were exactly what I needed.",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQFn-QQJTucx0A/profile-displayphoto-shrink_400_400/B4DZUZxOsuG8Ag-/0/1739894093468?e=1776902400&v=beta&t=ES9vEbw7rhbJ2N2bnnrpf92OsjQor2GbzNrX-BrGP-A",
    name: "Vikash Mishra",
    role: "AI Engineer, Vizuara AI Labs",
  },
  {
    text: "The mock interview prep and skill verification tests helped me identify my weak spots before the actual interviews. Absolute game-changer.",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQFYReZ9viLi8A/profile-displayphoto-shrink_400_400/B4DZS3.hItHAAo-/0/1738253407406?e=1776902400&v=beta&t=n2-8gY26QyprY3VWZv0uppbn99Ol9solyBWL2X2GQas",
    name: "Pankaj Chaurasiya",
    role: "SDE, Accelaya",
  },
  {
    text: "I discovered InternHack during my final year. The curated job listings saved me hours of scrolling through irrelevant postings.",
    image: "https://media.licdn.com/dms/image/v2/D4D35AQEEYV23d0F4MQ/profile-framedphoto-shrink_400_400/B4DZwQY87QKQAc-/0/1769801502766?e=1775649600&v=beta&t=XDoigz0VpEwiD86YiNE9UF_STn8nSI3RmuXaNSod0xo",
    name: "Eshita Bhawsar",
    role: "Full Stack Developer",
  },
  {
    text: "The AI-powered resume tips were spot on. My resume score jumped from 45 to 92, and I started getting recruiter messages the same week.",
    image: "https://media.licdn.com/dms/image/v2/D5603AQFm8oVYag6dtw/profile-displayphoto-scale_400_400/B56ZxTRBEdIIAg-/0/1770923504968?e=1776902400&v=beta&t=o9KQIdRa5d_EtG6IeiGEG-YX78_pEs3yoJpkN92QBc0",
    name: "Suraj Nayak",
    role: "SDE, Theax",
  },
  {
    text: "InternHack's company explorer helped me research companies before interviews. Knowing the tech stack and culture gave me a real edge.",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQFR0i3o31Vi1Q/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1702709541452?e=1776902400&v=beta&t=3m3D8G_V6OFuPwbIOTkF4jcZ7T9yJkHyhsijDPXF1C0",
    name: "Himanshu Kumar",
    role: "Ai Engineer",
  },
  {
    text: "The DSA and SQL practice modules are incredibly well-structured. I cleared every online assessment I attempted after using them.",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQEU8zWynlzkNQ/profile-displayphoto-shrink_400_400/B4DZR4Q1c.HUAg-/0/1737184492850?e=1776902400&v=beta&t=_1LCG9d2qMbg0odiFkVpRZwL0AmtsB8ZJFC_esmiVzk",
    name: "Rohan Patil",
    role: "Prof.Vishwaniketan",
  },
  {
    text: "As a recruiter, the HRMS tools streamlined our entire hiring pipeline. We reduced our time-to-hire by almost 40%.",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
    name: "Meera Iyer",
    role: "HR , Zoho",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export function TestimonialsSection() {
  return (
    <section className="relative py-24 md:py-32 bg-white dark:bg-[#030303] overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-indigo-500/5 via-transparent to-rose-500/5 blur-3xl dark:block hidden" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center max-w-xl mx-auto mb-12"
        >
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-center">
            <span className="bg-clip-text text-transparent bg-linear-to-b from-gray-900 to-gray-900/80 dark:from-white dark:to-white/80">
              Loved by
            </span>{" "}
            <span className="bg-clip-text text-transparent bg-linear-to-r from-indigo-600 via-gray-900 to-rose-600 dark:from-indigo-300 dark:via-white/90 dark:to-rose-300">
              thousands
            </span>
          </h2>
          <p className="text-lg text-gray-500 dark:text-white/40 mt-4 text-center">
            Students and recruiters trust InternHack to accelerate their careers
            and hiring.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mask-[linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-185 overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={19}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={17}
          />
        </div>
      </div>
    </section>
  );
}

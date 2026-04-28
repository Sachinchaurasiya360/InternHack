import { motion } from "framer-motion";
import { TestimonialsColumn } from "./ui/testimonials-columns";

const testimonials = [
  {
    text: "InternHack's ATS scanner completely changed my resume game. I went from zero callbacks to landing 3 interviews in a single week.",
    image: "./arbaaz.png",
    name: "Arbaaz Khan",
    role: "SDE, Odoo",
  },
  {
    text: "The career roadmaps gave me a clear path from DSA basics to system design. I followed it religiously and cracked my dream company.",
    image: "./priyansh.png",
    name: "Priyansh",
    role: "SDE, LTI Mindtree",
  },
  {
    text: "As someone pivoting into AI, the structured learning modules and project recommendations on InternHack were exactly what I needed.",
    image: "./vikash.png",
    name: "Vikash Mishra",
    role: "AI Engineer, Vizuara AI Labs",
  },
  {
    text: "The mock interview prep and skill verification tests helped me identify my weak spots before the actual interviews. Absolute game-changer.",
    image: "./pankaj.png",
    name: "Pankaj Chaurasiya",
    role: "SDE, Accelaya",
  },
  {
    text: "I discovered InternHack during my final year. The curated job listings saved me hours of scrolling through irrelevant postings.",
    image: "./eshita.png",
    name: "Eshita Bhawsar",
    role: "Full Stack Developer",
  },
  {
    text: "The AI-powered resume tips were spot on. My resume score jumped from 45 to 92, and I started getting recruiter messages the same week.",
    image: "./suraj.png",
    name: "Suraj Nayak",
    role: "SDE, Theax",
  },
  {
    text: "InternHack's company explorer helped me research companies before interviews. Knowing the tech stack and culture gave me a real edge.",
    image: "./himanshu.png",
    name: "Himanshu Kumar",
    role: "Ai Engineer",
  },
  {
    text: "The DSA and SQL practice modules are incredibly well-structured. I cleared every online assessment I attempted after using them.",
    image: "./rohan.png",
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
    <section className="relative py-24 md:py-32 bg-stone-50 dark:bg-stone-950 border-t border-stone-200 dark:border-white/10 overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-14"
        >
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-stone-500 mb-6">
            <span className="h-1.5 w-1.5 bg-lime-400" />
            shipped offers
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-stone-900 dark:text-stone-50 leading-none">
            Real students.{" "}
            <span className="text-stone-400 dark:text-stone-600">
              Real offers.
            </span>
          </h2>
          <p className="mt-6 text-base md:text-lg text-stone-600 dark:text-stone-400 max-w-xl leading-relaxed">
            Nine unedited quotes from people who used the platform and shipped
            an offer this year.
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

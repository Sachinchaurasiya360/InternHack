import { motion } from "framer-motion";
import BounceCards from "./reactbits/BounceCards";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const testimonials = [
  {
    name: "Aarav Sharma",
    role: "CS Student, IIT Delhi",
    text: "InternHack helped me land my dream internship at a top tech company. The ATS resume scorer gave me actionable feedback that made all the difference.",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "Priya Patel",
    role: "Design Intern, Flipkart",
    text: "The career roadmaps are incredibly detailed. I followed the UX Design path and within 3 months, I had a portfolio strong enough to get hired.",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    name: "Rohan Mehta",
    role: "SDE Intern, Google",
    text: "What sets InternHack apart is the quality of listings. Every job is curated, and the application tracking saved me hours each week.",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
];

const bounceImages = [
  "https://randomuser.me/api/portraits/men/1.jpg",
  "https://randomuser.me/api/portraits/women/2.jpg",
  "https://randomuser.me/api/portraits/men/3.jpg",
  "https://randomuser.me/api/portraits/women/4.jpg",
  "https://randomuser.me/api/portraits/men/5.jpg",
];

const bounceTransforms = [
  "rotate(-5deg) translate(-80px, -10px)",
  "rotate(3deg) translate(-40px, 10px)",
  "rotate(0deg) translate(0px, 0px)",
  "rotate(-3deg) translate(40px, 10px)",
  "rotate(5deg) translate(80px, -10px)",
];

export function TestimonialsSection() {
  return (
    <section className="relative py-24 md:py-32 bg-white dark:bg-gray-900 overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            custom={0}
            variants={fadeInUp}
            className="mt-6 font-display text-3xl sm:text-4xl md:text-5xl font-bold text-gray-950 dark:text-white tracking-tight"
          >
            What Our Users Say
          </motion.h2>
          <motion.p
            custom={1}
            variants={fadeInUp}
            className="mt-4 text-gray-500 dark:text-gray-400 text-lg max-w-xl mx-auto"
          >
            Thousands of students trust InternHack to kickstart their careers.
          </motion.p>
        </motion.div>

        {/* Bounce Cards */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-20"
        >
          <BounceCards
            images={bounceImages}
            containerWidth={320}
            containerHeight={180}
            animationDelay={0.3}
            animationStagger={0.06}
            easeType="elastic.out(1, 0.8)"
            transformStyles={bounceTransforms}
            enableHover
          />
        </motion.div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              custom={i + 2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="relative rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 p-6"
            >
              {/* Quote mark */}
              <div className="absolute top-4 right-5 text-4xl font-serif text-gray-200 dark:text-white/10 leading-none select-none">
                &ldquo;
              </div>

              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6">
                {t.text}
              </p>

              <div className="flex items-center gap-3">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover border-2 border-gray-200 dark:border-white/10"
                />
                <div>
                  <p className="text-sm font-semibold text-gray-950 dark:text-white">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

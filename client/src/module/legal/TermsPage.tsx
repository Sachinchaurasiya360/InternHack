import { useState } from "react";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { SEO } from "../../components/SEO";
import { motion, type Variants } from "framer-motion";
import {
  ShieldCheck,
  UserCheck,
  Lock,
  BadgeCheck,
  FileText,
  Bot,
  Scale,
  Ban,
  RefreshCcw,
  Mail,
} from "lucide-react";

type Section = {
  id: string;
  icon: React.ElementType;
  title: string;
  content?: string;
  list?: string[];
};

const sections: Section[] = [
  {
    id: "introduction",
    icon: ShieldCheck,
    title: "Introduction",
    content:
      'Welcome to InternHack ("we", "our", "us"). By accessing or using our website and related services, you agree to comply with these Terms and Conditions. If you do not agree, please discontinue use of the Platform.',
  },
  {
    id: "eligibility",
    icon: UserCheck,
    title: "Eligibility",
    content:
      "You must be at least 16 years old to use the Platform. By creating an account, you confirm that all provided information is accurate and complete.",
  },
  {
    id: "user-accounts",
    icon: Lock,
    title: "User Accounts",
    content:
      "You are responsible for maintaining the confidentiality of your account credentials and any activity under your account.",
  },
  {
    id: "acceptable-use",
    icon: BadgeCheck,
    title: "Acceptable Use",
    list: [
      "Do not use the Platform for unlawful or fraudulent purposes",
      "Do not post misleading or harmful content",
      "Do not attempt unauthorized access",
      "Do not scrape or collect data without permission",
      "Do not impersonate another individual or entity",
    ],
  },
  {
    id: "subscriptions-payments",
    icon: FileText,
    title: "Subscriptions & Payments",
    content:
      "Some features require paid subscriptions. Payments are securely processed through Dodo Payments. Pricing and billing details are shown during checkout.",
  },
  {
    id: "ai-generated-content",
    icon: Bot,
    title: "AI-Generated Content",
    content:
      "InternHack uses AI tools to generate resumes, cover letters, and interview responses. AI-generated content may contain inaccuracies, so users should review outputs carefully before use.",
  },
  {
    id: "limitation-of-liability",
    icon: Scale,
    title: "Limitation of Liability",
    content:
      "InternHack shall not be liable for indirect or consequential damages resulting from use of the Platform. Liability is limited to the amount paid by the user in the previous 12 months.",
  },
  {
    id: "termination",
    icon: Ban,
    title: "Termination",
    content:
      "We reserve the right to suspend or terminate access to the Platform for violations of these Terms or harmful activities.",
  },
  {
    id: "changes-to-terms",
    icon: RefreshCcw,
    title: "Changes to Terms",
    content:
      "We may update these Terms periodically. Continued use of the Platform after updates indicates acceptance of the revised Terms.",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

export default function TermsPage() {
  const [activeSection, setActiveSection] = useState<string>(sections[0].id);

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="font-sans bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-50">
      <SEO
        title="Terms and Conditions"
        description="Terms and Conditions for using InternHack, your all-in-one career platform."
      />

      <Navbar />

      <main>
        {/* Hero */}
        <section className="pt-28 pb-16 md:pb-20 bg-stone-50 dark:bg-stone-950">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-3xl mx-auto text-center"
            >
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-stone-500 mb-6">
                <span className="h-1.5 w-1.5 bg-lime-400" />
                terms of service
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-stone-900 dark:text-stone-50 leading-none">
                Terms &{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">Conditions.</span>
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
                    aria-hidden
                    className="absolute bottom-1 left-0 right-0 h-3 md:h-4 bg-lime-400 origin-left z-0"
                  />
                </span>
              </h1>
              <p className="mt-6 text-base md:text-lg text-stone-600 dark:text-stone-400 max-w-xl mx-auto leading-relaxed">
                Please read these Terms carefully before using InternHack. By
                accessing our platform, you agree to comply with the following
                conditions and policies.
              </p>
              <div className="mt-8 inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-stone-400 bg-stone-100 dark:bg-stone-900 px-3 py-1.5 rounded-md border border-stone-200 dark:border-white/10">
                <RefreshCcw size={12} />
                Last updated: March 17, 2026
              </div>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="bg-white dark:bg-stone-950 pt-8 md:pt-10 pb-20 md:pb-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-10 items-start">
              {/* Sticky Table of Contents */}
              <aside className="lg:w-56 shrink-0 w-full">
                <div className="lg:sticky lg:top-28 rounded-xl border border-stone-200 dark:border-white/10 bg-stone-50 dark:bg-stone-900 p-4">
                  <p className="text-xs font-mono uppercase tracking-widest text-stone-400 mb-3 px-2">
                    On this page
                  </p>
                  <nav className="space-y-0.5">
                    {sections.map((s, index) => {
                      const Icon = s.icon;
                      const isActive = activeSection === s.id;
                      return (
                        <button
                          key={s.id}
                          onClick={() => handleNavClick(s.id)}
                          className={`w-full flex items-center gap-2.5 px-2 py-1.5 rounded-lg text-left text-xs transition-all duration-200 ${isActive
                              ? "bg-lime-400/15 text-lime-700 dark:text-lime-400 font-semibold"
                              : "text-stone-600 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800 hover:text-stone-900 dark:hover:text-stone-50"
                            }`}
                        >
                          <Icon size={13} className="shrink-0" />
                          <span className="truncate">
                            {index + 1}. {s.title}
                          </span>
                        </button>
                      );
                    })}
                  </nav>
                </div>
              </aside>

              {/* Section Cards */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="flex-1 space-y-4"
              >
                {sections.map((section, index) => {
                  const Icon = section.icon;
                  return (
                    <motion.div
                      id={section.id}
                      key={section.id}
                      variants={itemVariants}
                      className="group rounded-2xl border border-stone-200 dark:border-white/10 bg-stone-50/50 dark:bg-stone-900/50 p-6 md:p-8 scroll-mt-28 hover:border-lime-400/30 hover:shadow-sm transition-all duration-300"
                    >
                      <div className="flex items-start gap-4">
                        <div className="inline-flex items-center justify-center h-10 w-10 rounded-lg bg-lime-400 text-white dark:text-stone-900 shrink-0 mt-0.5">
                          <Icon size={18} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h2 className="text-lg font-bold tracking-tight text-stone-900 dark:text-stone-50 mb-3">
                            {index + 1}. {section.title}
                          </h2>
                          {section.content && (
                            <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
                              {section.content}
                            </p>
                          )}
                          {section.list && (
                            <ul className="space-y-2 mt-3">
                              {section.list.map((item, i) => (
                                <li
                                  key={i}
                                  className="flex items-start gap-2.5 text-sm text-stone-600 dark:text-stone-400 leading-relaxed"
                                >
                                  <span className="mt-2 h-1.5 w-1.5 bg-lime-400 shrink-0 rounded-full" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-white dark:bg-stone-950 py-20 md:py-24">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative rounded-2xl border border-lime-400/30 dark:border-lime-400/20 bg-lime-50 dark:bg-stone-800 overflow-hidden"
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
              <div className="relative p-8 md:p-12 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-lime-400/15 border border-lime-400/30 text-lime-400 mb-5">
                  <Mail size={22} />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-stone-900 dark:text-white mb-3">
                  Questions?
                </h2>
                <p className="text-stone-400 max-w-lg mx-auto mb-8 text-sm md:text-base leading-relaxed">
                  If you have questions regarding these Terms and Conditions,
                  our team is here to help.
                </p>
                <a
                  href="mailto:mrsachinchaurasiya@gmail.com"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-lime-400 text-stone-950 rounded-lg text-sm font-bold hover:bg-lime-300 transition-colors no-underline"
                >
                  <Mail size={16} />
                  Contact Support
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
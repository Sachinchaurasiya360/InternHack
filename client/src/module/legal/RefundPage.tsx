import { motion, type Variants } from "framer-motion";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { SEO } from "../../components/SEO";
import {
  CreditCard,
  XCircle,
  CheckCircle,
  Ban,
  Mail,
  Clock,
  MessageCircle,
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
    id: "subscription-plans",
    icon: CreditCard,
    title: "Subscription Plans",
    content:
      "InternHack offers Monthly and Yearly subscription plans that unlock premium features. All subscriptions are billed in advance and processed through Dodo Payments.",
  },
  {
    id: "cancellation",
    icon: XCircle,
    title: "Cancellation",
    list: [
      "You may cancel your subscription at any time from your account settings or by contacting us via email",
      "Upon cancellation, your premium access will continue until the end of your current billing period",
      "After the billing period ends, your account will revert to the free tier",
      "Cancellation does not trigger an automatic refund for the remaining period",
    ],
  },
  {
    id: "refund-eligibility",
    icon: CheckCircle,
    title: "Refund Eligibility",
    content: "Refunds may be granted in the following cases:",
    list: [
      "Within 7 days of purchase: If you have not used any premium features, you are eligible for a full refund",
      "Technical issues: If a payment was processed but premium features were not activated and we are unable to resolve the issue",
      "Duplicate payments: If you were charged more than once for the same subscription period",
    ],
  },
  {
    id: "non-refundable-cases",
    icon: Ban,
    title: "Non-Refundable Cases",
    list: [
      "Requests made after 7 days of purchase",
      "Accounts that have used premium features (AI tools, resume generation, etc.)",
      "Partial refunds for unused days within a billing cycle",
      "Dissatisfaction with AI-generated content quality (outputs vary based on input)",
    ],
  },
  {
    id: "how-to-request",
    icon: Mail,
    title: "How to Request a Refund",
    content:
      'To request a refund, email us at mrsachinchaurasiya@gmail.com with the following details:',
    list: [
      "Your registered email address",
      "Dodo Payments transaction ID",
      "Reason for the refund request",
    ],
  },
  {
    id: "refund-processing",
    icon: Clock,
    title: "Refund Processing",
    content:
      "Approved refunds will be processed within 5-7 business days. The refund will be credited to the original payment method used during the purchase. You will receive a confirmation email once the refund is initiated.",
  },
  {
    id: "contact",
    icon: MessageCircle,
    title: "Contact",
    content:
      'For any questions regarding cancellations or refunds, reach out to mrsachinchaurasiya@gmail.com.',
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

export default function RefundPage() {
  return (
    <div className="font-sans bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-50">
      <SEO
        title="Cancellation & Refund Policy"
        description="Cancellation and Refund Policy for InternHack subscriptions."
      />

      <Navbar />

      <main>
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
                cancellation & refund
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-stone-900 dark:text-stone-50 leading-none">
                Cancellation & Refund{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">Policy.</span>
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
                Understand how subscriptions, cancellations, and refunds work on InternHack.
              </p>
              <div className="mt-8 inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-stone-400 bg-stone-100 dark:bg-stone-900 px-3 py-1.5 rounded-md border border-stone-200 dark:border-white/10">
                <Clock size={12} />
                Last updated: March 17, 2026
              </div>
            </motion.div>
          </div>
        </section>

        <section className="bg-white dark:bg-stone-950 pt-8 md:pt-10 pb-20 md:pb-24">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="space-y-4"
            >
              {sections.map((section, index) => {
                const Icon = section.icon;
                return (
                  <motion.div
                    id={section.id}
                    key={section.id}
                    variants={itemVariants}
                    className="group rounded-2xl border border-stone-200 dark:border-white/10 bg-white dark:bg-stone-950 p-6 md:p-8 scroll-mt-28 hover:border-lime-400/30 hover:shadow-sm transition-all duration-300"
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
        </section>

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
                  <MessageCircle size={22} />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-stone-900 dark:text-white mb-3">
                  Questions?
                </h2>
                <p className="text-stone-400 max-w-lg mx-auto mb-8 text-sm md:text-base leading-relaxed">
                  If you have questions regarding cancellations or refunds,
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

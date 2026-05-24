import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { SEO } from "../../components/SEO";

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
  type LucideIcon,
} from "lucide-react";

type Section = {
  icon: LucideIcon;
  title: string;
  content?: string;
  list?: string[];
};

const sections: Section[] = [
  {
    icon: ShieldCheck,
    title: "Introduction",
    content:
      'Welcome to InternHack ("we", "our", "us"). By accessing or using our website and related services, you agree to comply with these Terms and Conditions. If you do not agree, please discontinue use of the Platform.',
  },
  {
    icon: UserCheck,
    title: "Eligibility",
    content:
      "You must be at least 16 years old to use the Platform. By creating an account, you confirm that all provided information is accurate and complete.",
  },
  {
    icon: Lock,
    title: "User Accounts",
    content:
      "You are responsible for maintaining the confidentiality of your account credentials and any activity under your account.",
  },
  {
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
    icon: FileText,
    title: "Subscriptions & Payments",
    content:
      "Some features require paid subscriptions. Payments are securely processed through Dodo Payments. Pricing and billing details are shown during checkout.",
  },
  {
    icon: Bot,
    title: "AI-Generated Content",
    content:
      "InternHack uses AI tools to generate resumes, cover letters, and interview responses. AI-generated content may contain inaccuracies, so users should review outputs carefully before use.",
  },
  {
    icon: Scale,
    title: "Limitation of Liability",
    content:
      "InternHack shall not be liable for indirect or consequential damages resulting from use of the Platform. Liability is limited to the amount paid by the user in the previous 12 months.",
  },
  {
    icon: Ban,
    title: "Termination",
    content:
      "We reserve the right to suspend or terminate access to the Platform for violations of these Terms or harmful activities.",
  },
  {
    icon: RefreshCcw,
    title: "Changes to Terms",
    content:
      "We may update these Terms periodically. Continued use of the Platform after updates indicates acceptance of the revised Terms.",
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-linear-to-br from-white via-indigo-50 to-purple-50 dark:from-gray-950 dark:via-gray-900 dark:to-black">
      <SEO
        title="Terms and Conditions"
        description="Terms and Conditions for using InternHack, your all-in-one career platform."
      />

      <Navbar />

      <main className="flex-1 px-4 pt-28 pb-16">
        <div className="max-w-5xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-14">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
              Terms & Conditions
            </h1>

            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
              Please read these Terms carefully before using InternHack. By
              accessing our platform, you agree to comply with the following
              conditions and policies.
            </p>

            <p className="mt-5 text-sm text-gray-500 dark:text-gray-500">
              Last updated: March 17, 2026
            </p>
          </div>

          <div className="grid gap-6">
            {sections.map((section, index) => {
              const Icon = section.icon;

              return (
                <div
                  key={index}
                  className="group rounded-2xl border border-gray-200/70 dark:border-gray-800 bg-white/80 dark:bg-gray-900/60 backdrop-blur-lg shadow-sm hover:shadow-xl transition-all duration-300 p-6 md:p-8"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-indigo-100 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                      <Icon size={22} />
                    </div>

                    <div className="flex-1">
                      <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                        {index + 1}. {section.title}
                      </h2>

                      {section.content && (
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm md:text-base">
                          {section.content}
                        </p>
                      )}

                      {section.list && (
                        <ul className="space-y-2 mt-3">
                          {section.list.map((item, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-gray-600 dark:text-gray-300 text-sm md:text-base"
                            >
                              <span className="mt-2 h-2 w-2 rounded-full bg-indigo-500 shrink-0"></span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 rounded-3xl overflow-hidden border border-indigo-200 dark:border-indigo-500/20 bg-linear-to-r from-indigo-600 to-purple-600 shadow-2xl">
            <div className="p-8 md:p-10 text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/20 mb-5">
                <Mail className="text-white" size={26} />
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Need Help?
              </h2>

              <p className="text-indigo-100 max-w-2xl mx-auto mb-6">
                If you have questions regarding these Terms and Conditions,
                please contact our support team.
              </p>

              <a
                href="mailto:mrsachinchaurasiya@gmail.com"
                className="inline-flex items-center gap-2 bg-white text-indigo-700 hover:bg-gray-100 transition px-6 py-3 rounded-xl font-semibold shadow-lg"
              >
                <Mail size={18} />
                Contact Support
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
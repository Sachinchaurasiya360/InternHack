import { useState } from "react";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { SEO } from "../../components/SEO";
import {
  Database,
  Cpu,
  Globe,
  ShieldCheck,
  Cookie,
  UserCheck,
  Clock,
  Baby,
  RefreshCcw,
  Mail,
  ChevronRight,
} from "lucide-react";

interface PolicySection {
  id: string;
  icon: React.ElementType;
  title: string;
  content?: string;
  list?: { label?: string; text: string }[];
  contactNote?: boolean;
}

const sections: PolicySection[] = [
  {
    id: "information-we-collect",
    icon: Database,
    title: "Information We Collect",
    content: "We collect the following categories of information:",
    list: [
      {
        label: "Account Information",
        text: "Name, email address, password (hashed), role (Student/Recruiter), company name, designation",
      },
      {
        label: "Profile Information",
        text: "Bio, skills, education, LinkedIn/GitHub/portfolio URLs, projects, achievements, profile photo",
      },
      {
        label: "Uploaded Content",
        text: "Resumes (stored on AWS S3), cover letters, LaTeX documents",
      },
      {
        label: "Usage Data",
        text: "Pages visited, features used, AI tool interactions, application history",
      },
      {
        label: "Payment Information",
        text: "Processed securely by Dodo Payments — we do not store card details",
      },
    ],
  },
  {
    id: "how-we-use",
    icon: Cpu,
    title: "How We Use Your Information",
    list: [
      { text: "To provide and maintain the Platform" },
      { text: "To personalise your experience (job recommendations, AI-generated content)" },
      { text: "To process payments and manage subscriptions" },
      { text: "To send transactional emails (verification, password reset, welcome)" },
      { text: "To send newsletters (only if you opt in)" },
      { text: "To improve our services through aggregated, anonymised analytics" },
    ],
  },
  {
    id: "third-party-services",
    icon: Globe,
    title: "Third-Party Services",
    content: "We use the following third-party services:",
    list: [
      { label: "Google OAuth", text: "For social login, receives your name, email, and profile picture" },
      { label: "Google Gemini AI", text: "For generating resumes, cover letters, and interview content" },
      { label: "Dodo Payments", text: "For payment processing, subject to Dodo Payments' privacy policy" },
      { label: "AWS S3", text: "For storing uploaded files (resumes, documents)" },
      { label: "Email Service", text: "For sending transactional and marketing emails" },
    ],
  },
  {
    id: "data-security",
    icon: ShieldCheck,
    title: "Data Storage and Security",
    content:
      "Your data is stored on secure servers. Passwords are hashed using bcrypt. We use HTTPS for all communications. JWT tokens are used for authentication. While we implement industry-standard security measures, no system is 100% secure.",
  },
  {
    id: "cookies",
    icon: Cookie,
    title: "Cookies",
    content:
      "We use essential cookies to maintain your login session and preferences. We do not use third-party tracking cookies or advertising cookies.",
  },
  {
    id: "your-rights",
    icon: UserCheck,
    title: "Your Rights",
    content: "You have the right to:",
    list: [
      { text: "Access and download your personal data" },
      { text: "Update or correct your information via your profile settings" },
      { text: "Request deletion of your account and associated data" },
      { text: "Opt out of marketing communications at any time" },
    ],
    contactNote: true,
  },
  {
    id: "data-retention",
    icon: Clock,
    title: "Data Retention",
    content:
      "We retain your data for as long as your account is active or as needed to provide services. If you delete your account, we will remove your personal data within 30 days, except where retention is required by law.",
  },
  {
    id: "childrens-privacy",
    icon: Baby,
    title: "Children's Privacy",
    content:
      "The Platform is not intended for users under 16 years of age. We do not knowingly collect personal information from children under 16.",
  },
  {
    id: "policy-changes",
    icon: RefreshCcw,
    title: "Changes to This Policy",
    content:
      "We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated date. We encourage you to review this page periodically.",
  },
];

export default function PrivacyPage() {
  const [activeSection, setActiveSection] = useState<string>(sections[0].id);

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-linear-to-br from-white via-indigo-50 to-purple-50 dark:from-gray-950 dark:via-gray-900 dark:to-black">
      <SEO
        title="Privacy Policy"
        description="Privacy Policy for InternHack — how we collect, use, and protect your data."
      />

      <Navbar />

      <main className="flex-1 px-4 pt-28 pb-20">
        <div className="max-w-6xl mx-auto">

          {/* Page Hero */}
          <div className="text-center mt-6 mb-14">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-indigo-100 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 mb-5">
              <ShieldCheck size={30} />
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
              Privacy Policy
            </h1>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
              We are committed to protecting your personal information and your
              right to privacy. Here&apos;s exactly how we handle your data.
            </p>
            <div className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/20 text-amber-700 dark:text-amber-400 text-sm font-medium">
              <RefreshCcw size={14} />
              Last updated: March 17, 2026
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 items-start">

            {/* Sticky Table of Contents */}
            <aside className="lg:w-64 shrink-0 w-full">
              <div className="lg:sticky lg:top-28 rounded-2xl border border-gray-200/70 dark:border-gray-800 bg-white/80 dark:bg-gray-900/60 backdrop-blur-lg shadow-sm p-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-4">
                  On This Page
                </p>
                <nav className="space-y-1">
                  {sections.map((s, index) => {
                    const Icon = s.icon;
                    const isActive = activeSection === s.id;
                    return (
                      <button
                        key={s.id}
                        id={`toc-${s.id}`}
                        onClick={() => handleNavClick(s.id)}
                        className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl text-left text-sm transition-all duration-200 ${
                          isActive
                            ? "bg-indigo-100 dark:bg-indigo-500/15 text-indigo-700 dark:text-indigo-400 font-semibold"
                            : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800/60 hover:text-gray-900 dark:hover:text-white"
                        }`}
                      >
                        <Icon size={15} className="shrink-0" />
                        <span className="truncate">
                          {index + 1}. {s.title}
                        </span>
                        {isActive && (
                          <ChevronRight size={14} className="ml-auto shrink-0" />
                        )}
                      </button>
                    );
                  })}
                </nav>
              </div>
            </aside>

            {/* Section Cards */}
            <div className="flex-1 grid gap-6">
              {sections.map((section, index) => {
                const Icon = section.icon;
                return (
                  <div
                    id={section.id}
                    key={section.id}
                    className="group rounded-2xl border border-gray-200/70 dark:border-gray-800 bg-white/80 dark:bg-gray-900/60 backdrop-blur-lg shadow-sm hover:shadow-xl transition-all duration-300 p-6 md:p-8 scroll-mt-32"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-indigo-100 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 shrink-0">
                        <Icon size={22} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                          {index + 1}. {section.title}
                        </h2>

                        {section.content && (
                          <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm md:text-base mb-3">
                            {section.content}
                          </p>
                        )}

                        {section.list && (
                          <ul className="space-y-2 mt-2">
                            {section.list.map((item, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-3 text-gray-600 dark:text-gray-300 text-sm md:text-base"
                              >
                                <span className="mt-2 h-2 w-2 rounded-full bg-indigo-500 shrink-0" />
                                <span>
                                  {item.label && (
                                    <strong className="text-gray-800 dark:text-gray-100">
                                      {item.label}:{" "}
                                    </strong>
                                  )}
                                  {item.text}
                                </span>
                              </li>
                            ))}
                          </ul>
                        )}

                        {section.contactNote && (
                          <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                            To exercise these rights, contact us at{" "}
                            <a
                              href="mailto:mrsachinchaurasiya@gmail.com"
                              className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium"
                            >
                              mrsachinchaurasiya@gmail.com
                            </a>
                            .
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Contact CTA Banner */}
              <div className="mt-4 rounded-3xl overflow-hidden border border-indigo-200 dark:border-indigo-500/20 bg-linear-to-r from-indigo-600 to-purple-600 shadow-2xl">
                <div className="p-8 md:p-10 text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/20 mb-5">
                    <Mail className="text-white" size={26} />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                    Privacy Questions?
                  </h2>
                  <p className="text-indigo-100 max-w-2xl mx-auto mb-6">
                    If you have any questions or concerns about this Privacy
                    Policy or your personal data, our team is here to help.
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
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

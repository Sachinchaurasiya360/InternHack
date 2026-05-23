import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { SEO } from "../../components/SEO";
import {
  ShieldCheck,
  Database,
  Bot,
  Lock,
  Cookie,
  UserCheck,
  Clock,
  Baby,
  RefreshCcw,
  Mail,
} from "lucide-react";

const sections = [
  {
    icon: Database,
    title: "Information We Collect",
    list: [
      "Account Information: Name, email address, password (hashed), role, company name, designation",
      "Profile Information: Bio, skills, education, portfolio links, projects, achievements, profile photo",
      "Uploaded Content: Resumes, cover letters, LaTeX documents",
      "Usage Data: Pages visited, AI tool interactions, application history",
      "Payment Information: Processed securely by Dodo Payments",
    ],
  },
  {
    icon: ShieldCheck,
    title: "How We Use Your Information",
    list: [
      "Provide and maintain the Platform",
      "Personalise user experience and AI-generated content",
      "Process subscriptions and payments",
      "Send transactional and optional marketing emails",
      "Improve services using anonymised analytics",
    ],
  },
  {
    icon: Bot,
    title: "Third-Party Services",
    list: [
      "Google OAuth for social login",
      "Google Gemini AI for AI-generated content",
      "Dodo Payments for payment processing",
      "AWS S3 for file storage",
      "Email services for transactional communication",
    ],
  },
  {
    icon: Lock,
    title: "Data Storage and Security",
    content:
      "Your data is stored securely using industry-standard security practices including HTTPS, JWT authentication, and bcrypt password hashing.",
  },
  {
    icon: Cookie,
    title: "Cookies",
    content:
      "We use essential cookies to maintain login sessions and preferences. We do not use advertising or third-party tracking cookies.",
  },
  {
    icon: UserCheck,
    title: "Your Rights",
    list: [
      "Access and download your personal data",
      "Update or correct your information",
      "Request deletion of your account and associated data",
      "Opt out of marketing communications",
    ],
  },
  {
    icon: Clock,
    title: "Data Retention",
    content:
      "We retain your data while your account remains active or as required for legal and operational purposes.",
  },
  {
    icon: Baby,
    title: "Children's Privacy",
    content:
      "InternHack is not intended for users under 16 years old, and we do not knowingly collect data from children.",
  },
  {
    icon: RefreshCcw,
    title: "Changes to This Policy",
    content:
      "We may periodically update this Privacy Policy. Continued use of the Platform indicates acceptance of updated policies.",
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-linear-to-br from-white via-indigo-50 to-purple-50 dark:from-gray-950 dark:via-gray-900 dark:to-black">
      <SEO
        title="Privacy Policy"
        description="Privacy Policy for InternHack, how we collect, use, and protect your data."
      />

      <Navbar />

      <main className="flex-1 px-4 pt-28 pb-16">
        <div className="max-w-5xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-14">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
              Privacy Policy
            </h1>

            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
              Learn how InternHack collects, uses, stores, and protects your
              personal information while using our platform and services.
            </p>

            <p className="mt-5 text-sm text-gray-500 dark:text-gray-500">
              Last updated: March 17, 2026
            </p>
          </div>

          {/* Privacy Sections */}
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
                              <span className="mt-2 h-2 w-2 rounded-full bg-indigo-500"></span>
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

          {/* Contact Section */}
          <div className="mt-12 rounded-3xl overflow-hidden border border-indigo-200 dark:border-indigo-500/20 bg-linear-to-r from-indigo-600 to-purple-600 shadow-2xl">
            <div className="p-8 md:p-10 text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/20 mb-5">
                <Mail className="text-white" size={26} />
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Privacy Questions?
              </h2>

              <p className="text-indigo-100 max-w-2xl mx-auto mb-6">
                If you have any questions regarding this Privacy Policy or your
                personal data, feel free to contact us.
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
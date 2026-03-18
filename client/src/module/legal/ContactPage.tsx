import { Mail } from "lucide-react";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { SEO } from "../../components/SEO";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-950">
      <SEO
        title="Contact Us"
        description="Get in touch with the InternHack team for support, feedback, or business enquiries."
      />
      <Navbar />
      <main className="flex-1 max-w-3xl mx-auto px-4 pt-28 pb-16">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Contact Us</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">We'd love to hear from you.</p>

        <div className="space-y-8 text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Email</h2>
            <a
              href="mailto:mrsachinchaurasiya@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl text-indigo-600 dark:text-indigo-400 hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors"
            >
              <Mail className="w-4 h-4" />
              mrsachinchaurasiya@gmail.com
            </a>
            <p className="mt-3">
              For general enquiries, support requests, feature suggestions, or business partnerships — drop us an
              email and we'll respond within 24-48 hours.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Social Media</h2>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://x.com/internhack_xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 dark:text-indigo-400 hover:underline"
                >
                  Twitter / X — @internhack_xyz
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/internhack"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 dark:text-indigo-400 hover:underline"
                >
                  LinkedIn — InternHack
                </a>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Support Hours</h2>
            <p>
              Our team operates Monday to Saturday, 10:00 AM — 7:00 PM IST. We aim to respond to all
              queries within 24-48 hours during business days.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Report an Issue</h2>
            <p>
              Found a bug or security vulnerability? Please email us at{" "}
              <a href="mailto:mrsachinchaurasiya@gmail.com" className="text-indigo-600 dark:text-indigo-400 hover:underline">
                mrsachinchaurasiya@gmail.com
              </a>{" "}
              with details and steps to reproduce. We take all reports seriously and will investigate promptly.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

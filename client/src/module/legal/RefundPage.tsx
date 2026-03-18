import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { SEO } from "../../components/SEO";

export default function RefundPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-950">
      <SEO
        title="Cancellation & Refund Policy"
        description="Cancellation and Refund Policy for InternHack subscriptions."
      />
      <Navbar />
      <main className="flex-1 max-w-3xl mx-auto px-4 pt-28 pb-16">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Cancellation & Refund Policy</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">Last updated: March 17, 2026</p>

        <div className="space-y-8 text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Subscription Plans</h2>
            <p>
              InternHack offers Monthly and Yearly subscription plans that unlock premium features. All
              subscriptions are billed in advance and processed through Dodo Payments.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Cancellation</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>You may cancel your subscription at any time from your account settings or by contacting us via email</li>
              <li>Upon cancellation, your premium access will continue until the end of your current billing period</li>
              <li>After the billing period ends, your account will revert to the free tier</li>
              <li>Cancellation does not trigger an automatic refund for the remaining period</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Refund Eligibility</h2>
            <p className="mb-2">Refunds may be granted in the following cases:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Within 7 days of purchase:</strong> If you have not used any premium features, you are eligible for a full refund</li>
              <li><strong>Technical issues:</strong> If a payment was processed but premium features were not activated and we are unable to resolve the issue</li>
              <li><strong>Duplicate payments:</strong> If you were charged more than once for the same subscription period</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Non-Refundable Cases</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Requests made after 7 days of purchase</li>
              <li>Accounts that have used premium features (AI tools, resume generation, etc.)</li>
              <li>Partial refunds for unused days within a billing cycle</li>
              <li>Dissatisfaction with AI-generated content quality (outputs vary based on input)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">How to Request a Refund</h2>
            <p>
              To request a refund, email us at{" "}
              <a href="mailto:mrsachinchaurasiya@gmail.com" className="text-indigo-600 dark:text-indigo-400 hover:underline">
                mrsachinchaurasiya@gmail.com
              </a>{" "}
              with the following details:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Your registered email address</li>
              <li>Dodo Payments transaction ID</li>
              <li>Reason for the refund request</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Refund Processing</h2>
            <p>
              Approved refunds will be processed within 5-7 business days. The refund will be credited to the
              original payment method used during the purchase. You will receive a confirmation email once the
              refund is initiated.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Contact</h2>
            <p>
              For any questions regarding cancellations or refunds, reach out to{" "}
              <a href="mailto:mrsachinchaurasiya@gmail.com" className="text-indigo-600 dark:text-indigo-400 hover:underline">
                mrsachinchaurasiya@gmail.com
              </a>.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

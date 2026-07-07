import { Navbar } from "../../../components/Navbar";
import { Footer } from "../../../components/Footer";
import { SEO } from "../../../components/SEO";
import AtsScorePage from "./AtsScorePage";

export default function PublicAtsTryPage() {
  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-950">
      <SEO
        title="Try Free ATS Resume Score"
        description="Score your resume with AI-powered ATS analysis. No signup required."
        noIndex
      />
      <Navbar />
      <main className="max-w-6xl mx-auto px-6 pt-28 pb-16">
        <AtsScorePage guestMode />
      </main>
      <Footer />
    </div>
  );
}

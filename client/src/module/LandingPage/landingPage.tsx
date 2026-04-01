import { Navbar } from "../../components/Navbar"
import { Footer } from "../../components/Footer"
import { HeroGeometric } from "../../components/ui/shape-landing-hero"
import { StatsSection } from "../../components/StatsSection"
import { FeaturesSection } from "../../components/FeaturesSection"
import { HowItWorksSection } from "../../components/HowItWorksSection"
import { PricingSection } from "../../components/PricingSection"
import { TestimonialsSection } from "../../components/TestimonialsSection"
import { CTASection } from "../../components/CTASection"
import { FAQSection, FAQ_ITEMS } from "../../components/FAQSection"
import { SEO } from "../../components/SEO"
import { canonicalUrl } from "../../lib/seo.utils"
import { faqSchema } from "../../lib/structured-data"

export default function LandingPage(){
    return(
        <div className="font-sans bg-white dark:bg-[#030303] text-gray-900 dark:text-gray-100">
            <SEO
              description="InternHack is an AI-powered career platform for students. Browse curated internships, score your resume with ATS AI, follow career roadmaps, and connect with recruiters."
              canonicalUrl={canonicalUrl("/")}
              structuredData={faqSchema(FAQ_ITEMS)}
            />
            <Navbar/>
            <HeroGeometric
              title1="Your Career Starts Here"
              title2="AI Tools, Real Opportunities"
            />
            <StatsSection/>
            <FeaturesSection/>
            <HowItWorksSection/>
            <PricingSection/>
            <TestimonialsSection/>
            <FAQSection/>
            <CTASection/>
            <Footer/>
        </div>
    )
}

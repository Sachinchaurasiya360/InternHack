import { Navbar } from "../../components/Navbar"
import { Footer } from "../../components/Footer"
import { HeroGeometric } from "../../components/ui/shape-landing-hero"
import { DemoVideoSection } from "../../components/DemoVideoSection"
import { AudienceSection } from "../../components/AudienceSection"
import { FeaturesSection } from "../../components/FeaturesSection"
import { HowItWorksSection } from "../../components/HowItWorksSection"
import { PricingSection } from "../../components/PricingSection"
import { TestimonialsSection } from "../../components/TestimonialsSection"
import { CTASection } from "../../components/CTASection"
import { FAQSection, FAQ_ITEMS } from "../../components/FAQSection"
import { SEO } from "../../components/SEO"
import { canonicalUrl } from "../../lib/seo.utils"
import { faqSchema, websiteSchema, platformOrganizationSchema } from "../../lib/structured-data"

export default function LandingPage(){
    return(
        <div className="font-sans bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-50">
            <SEO
              description="InternHack is an AI-powered career platform for students. Browse curated internships, score your resume with ATS AI, follow career roadmaps, and connect with recruiters."
              canonicalUrl={canonicalUrl("/")}
              structuredData={[
                websiteSchema(),
                platformOrganizationSchema(),
                faqSchema(FAQ_ITEMS),
              ]}
            />
            <Navbar/>
            <HeroGeometric/>
            <DemoVideoSection/>
            <AudienceSection/>
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

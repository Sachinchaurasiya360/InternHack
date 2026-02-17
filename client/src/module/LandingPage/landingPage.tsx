import { Navbar } from "../../components/Navbar"
import { Footer } from "../../components/Footer"
import { HeroSection } from "../../components/HeroSection"
import { RecentHackathons } from "../../components/RecentHackathons"
import { InterviewPrep } from "../../components/InterviewPrep"
export default function LandingPage(){
    return(
        <div>
            <Navbar/>
            <HeroSection/>
            <RecentHackathons/>
            <InterviewPrep/>
            <Footer/>
            
        </div>
    )
}
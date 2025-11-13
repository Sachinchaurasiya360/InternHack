"use client";
import { Analytics } from "@vercel/analytics/next"
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { RecentHackathons } from "./components/RecentHackathons";
import { RecentJobs } from "./components/RecentJobs";
import { InterviewPrep } from "./components/InterviewPrep";
import { AIInterview } from "./components/AIInterview";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <div className="bg-white text-black">
      <Navbar />
      <HeroSection />
      <RecentHackathons />
      <RecentJobs />
      <InterviewPrep />
      <AIInterview />
      <Footer />
    </div>
  );
}

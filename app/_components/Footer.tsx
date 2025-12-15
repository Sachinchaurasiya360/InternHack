"use client";

import { Zap } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white border-t-2 border-black py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-black flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold text-black">InternHack</span>
            </div>
            <p className="text-gray-600">Prepare . Practice . Placed</p>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-black">Platform</h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a
                  href="#hackathons"
                  className="hover:text-black transition-colors"
                >
                  Hackathons
                </a>
              </li>
              <li>
                <a href="#jobs" className="hover:text-black transition-colors">
                  Jobs
                </a>
              </li>
              <li>
                <a
                  href="#interview-prep"
                  className="hover:text-black transition-colors"
                >
                  Interview Prep
                </a>
              </li>
              <li>
                <a
                  href="#ai-interview"
                  className="hover:text-black transition-colors"
                >
                  AI Interview
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-black">For Recruiters</h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a href="#" className="hover:text-black transition-colors">
                  Post a Job
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black transition-colors">
                  Find Talent
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black transition-colors">
                  Pricing
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-black">Company</h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a href="#" className="hover:text-black transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t-2 border-black pt-8 text-center text-gray-600">
          <p>© 2025 InternHack. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

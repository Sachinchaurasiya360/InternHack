/**
 * Recruiter Dashboard Layout
 * Wraps all recruiter pages with common navigation and layout
 */

import { ReactNode } from 'react';
import Link from 'next/link';
import { requireRecruiter } from '@/packages/auth';
import { redirect } from 'next/navigation';

interface RecruiterLayoutProps {
  children: ReactNode;
}

export default async function RecruiterLayout({ children }: RecruiterLayoutProps) {
  // Check if user is authenticated as recruiter
  let user;
  try {
    user = await requireRecruiter();
  } catch (error) {
    redirect('/login'); // Redirect to login if not authenticated
  }
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-8">
              <Link href="/recruiter" className="text-xl font-bold text-blue-600">
                Recruiter Portal
              </Link>
              
              <nav className="hidden md:flex items-center gap-6">
                <Link 
                  href="/recruiter" 
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                >
                  Dashboard
                </Link>
                <Link 
                  href="/recruiter/jobs" 
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                >
                  My Jobs
                </Link>
                <Link 
                  href="/recruiter/jobs/create" 
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                >
                  Create Job
                </Link>
              </nav>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-sm text-gray-600">
                Welcome, <span className="font-medium">{user.name}</span>
              </div>
              {/* TODO: Add logout button */}
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="min-h-[calc(100vh-4rem)]">{children}</main>

      {/* Footer */}
      <footer className="bg-white border-t mt-12">
        <div className="container mx-auto px-4 py-6 text-center text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Recruiter Portal. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

import { useState } from "react";
import { NavLink, Outlet } from "react-router";
import { LayoutDashboard, Users, Briefcase, AlertTriangle, Shield, LogOut, Building2, MessageSquare, GitPullRequest, Mail, BookOpen, Code2, Brain, BadgeCheck, Award, Cpu, ExternalLink, Menu, X, Radar, MessageCircle } from "lucide-react";
import { useAuthStore } from "../../lib/auth.store";
import { useNavigate } from "react-router";
import { SEO } from "../../components/SEO";

export default function AdminLayout() {
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
      isActive ? "bg-indigo-600 text-white" : "text-gray-300 hover:bg-gray-800 hover:text-white"
    }`;

  const sidebarContent = (
    <>
      <div className="mb-8">
        <div className="flex items-center justify-between mb-1">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-indigo-400" />
            <h2 className="text-lg font-bold text-white">Admin Panel</h2>
          </div>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden p-1 rounded-lg text-gray-400 hover:bg-gray-800 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <p className="text-sm text-gray-400">{user?.name}</p>
      </div>

      <nav className="flex-1 space-y-1 overflow-y-auto">
        <NavLink to="/admin" end className={linkClass} onClick={() => setSidebarOpen(false)}>
          <LayoutDashboard className="w-4 h-4" />
          Dashboard
        </NavLink>
        <NavLink to="/admin/users" className={linkClass} onClick={() => setSidebarOpen(false)}>
          <Users className="w-4 h-4" />
          Users
        </NavLink>
        <NavLink to="/admin/jobs" className={linkClass} onClick={() => setSidebarOpen(false)}>
          <Briefcase className="w-4 h-4" />
          Jobs
        </NavLink>
        <NavLink to="/admin/errors" className={linkClass} onClick={() => setSidebarOpen(false)}>
          <AlertTriangle className="w-4 h-4" />
          Error Logs
        </NavLink>
        <NavLink to="/admin/companies" className={linkClass} onClick={() => setSidebarOpen(false)}>
          <Building2 className="w-4 h-4" />
          Companies
        </NavLink>
        <NavLink to="/admin/reviews" className={linkClass} onClick={() => setSidebarOpen(false)}>
          <MessageSquare className="w-4 h-4" />
          Reviews
        </NavLink>
        <NavLink to="/admin/contributions" className={linkClass} onClick={() => setSidebarOpen(false)}>
          <GitPullRequest className="w-4 h-4" />
          Contributions
        </NavLink>
        <NavLink to="/admin/subscribers" className={linkClass} onClick={() => setSidebarOpen(false)}>
          <Mail className="w-4 h-4" />
          Subscribers
        </NavLink>
        <NavLink to="/admin/dsa" className={linkClass} onClick={() => setSidebarOpen(false)}>
          <Code2 className="w-4 h-4" />
          DSA Topics
        </NavLink>
        <NavLink to="/admin/aptitude" className={linkClass} onClick={() => setSidebarOpen(false)}>
          <Brain className="w-4 h-4" />
          Aptitude
        </NavLink>
        <NavLink to="/admin/skill-tests" className={linkClass} onClick={() => setSidebarOpen(false)}>
          <BadgeCheck className="w-4 h-4" />
          Skill Tests
        </NavLink>
        <NavLink to="/admin/badges" className={linkClass} onClick={() => setSidebarOpen(false)}>
          <Award className="w-4 h-4" />
          Badges
        </NavLink>
        <NavLink to="/admin/ai-providers" className={linkClass} onClick={() => setSidebarOpen(false)}>
          <Cpu className="w-4 h-4" />
          AI Providers
        </NavLink>
        <NavLink to="/admin/external-jobs" className={linkClass} onClick={() => setSidebarOpen(false)}>
          <ExternalLink className="w-4 h-4" />
          External Jobs
        </NavLink>
        <NavLink to="/admin/repo-requests" className={linkClass} onClick={() => setSidebarOpen(false)}>
          <GitPullRequest className="w-4 h-4" />
          Repo Requests
        </NavLink>
        <NavLink to="/admin/signals" className={linkClass} onClick={() => setSidebarOpen(false)}>
          <Radar className="w-4 h-4" />
          Funding Signals
        </NavLink>
        <NavLink to="/admin/interview-experiences" className={linkClass} onClick={() => setSidebarOpen(false)}>
          <MessageCircle className="w-4 h-4" />
          Interview Experiences
        </NavLink>
        <NavLink to="/admin/broadcast-email" className={linkClass} onClick={() => setSidebarOpen(false)}>
          <Mail className="w-4 h-4" />
          Broadcast Email
        </NavLink>
        <NavLink to="/admin/blog" className={linkClass} onClick={() => setSidebarOpen(false)}>
          <BookOpen className="w-4 h-4" />
          Blog
        </NavLink>
      </nav>

      <button
        onClick={handleLogout}
        className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium text-gray-400 hover:bg-red-900/30 hover:text-red-400 transition-colors"
      >
        <LogOut className="w-4 h-4" />
        Logout
      </button>
    </>
  );

  return (
    <div className="min-h-screen bg-gray-950 flex">
      <SEO title="Admin Panel" noIndex />

      {/* Mobile top bar */}
      <div className="fixed top-0 left-0 right-0 z-40 lg:hidden bg-gray-900 border-b border-gray-800 px-4 py-3 flex items-center gap-3">
        <button
          onClick={() => setSidebarOpen(true)}
          className="p-1.5 rounded-lg text-gray-400 hover:bg-gray-800 hover:text-white transition-colors"
        >
          <Menu className="w-5 h-5" />
        </button>
        <div className="flex items-center gap-2">
          <Shield className="w-4 h-4 text-indigo-400" />
          <span className="text-sm font-bold text-white">Admin Panel</span>
        </div>
      </div>

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar, desktop: fixed visible, mobile: slide-in overlay */}
      <aside
        className={`fixed top-0 left-0 h-screen z-50 w-64 bg-gray-900 border-r border-gray-800 p-6 flex flex-col transition-transform duration-300 lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {sidebarContent}
      </aside>

      {/* Main content, offset on desktop, full-width on mobile */}
      <main className="flex-1 lg:ml-64 pt-16 lg:pt-0 p-4 sm:p-6 lg:p-8 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
}

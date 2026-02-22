import { NavLink, Outlet } from "react-router";
import { LayoutDashboard, Users, Briefcase, ScrollText, Shield, LogOut, Building2, MessageSquare, GitPullRequest, Mail, Compass } from "lucide-react";
import { useAuthStore } from "../../lib/auth.store";
import { useNavigate } from "react-router";

export default function AdminLayout() {
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
      isActive ? "bg-indigo-600 text-white" : "text-gray-300 hover:bg-gray-800 hover:text-white"
    }`;

  return (
    <div className="min-h-screen bg-gray-950 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 border-r border-gray-800 p-6 flex flex-col">
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-1">
            <Shield className="w-5 h-5 text-indigo-400" />
            <h2 className="text-lg font-bold text-white">Admin Panel</h2>
          </div>
          <p className="text-sm text-gray-400">{user?.name}</p>
        </div>

        <nav className="flex-1 space-y-1">
          <NavLink to="/admin" end className={linkClass}>
            <LayoutDashboard className="w-4 h-4" />
            Dashboard
          </NavLink>
          <NavLink to="/admin/users" className={linkClass}>
            <Users className="w-4 h-4" />
            Users
          </NavLink>
          <NavLink to="/admin/jobs" className={linkClass}>
            <Briefcase className="w-4 h-4" />
            Jobs
          </NavLink>
          <NavLink to="/admin/activity" className={linkClass}>
            <ScrollText className="w-4 h-4" />
            Activity Logs
          </NavLink>
          <NavLink to="/admin/companies" className={linkClass}>
            <Building2 className="w-4 h-4" />
            Companies
          </NavLink>
          <NavLink to="/admin/reviews" className={linkClass}>
            <MessageSquare className="w-4 h-4" />
            Reviews
          </NavLink>
          <NavLink to="/admin/contributions" className={linkClass}>
            <GitPullRequest className="w-4 h-4" />
            Contributions
          </NavLink>
          <NavLink to="/admin/subscribers" className={linkClass}>
            <Mail className="w-4 h-4" />
            Subscribers
          </NavLink>
          <NavLink to="/admin/careers" className={linkClass}>
            <Compass className="w-4 h-4" />
            Careers
          </NavLink>
        </nav>

        <button
          onClick={handleLogout}
          className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium text-gray-400 hover:bg-red-900/30 hover:text-red-400 transition-colors"
        >
          <LogOut className="w-4 h-4" />
          Logout
        </button>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
}

import { NavLink, Outlet } from "react-router";
import { Briefcase, FileText, LogOut, Home, ScanSearch, Map, Building2 } from "lucide-react";
import { useAuthStore } from "../../lib/auth.store";
import { useNavigate } from "react-router";

export default function StudentLayout() {
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
      isActive ? "bg-black text-white" : "text-gray-600 hover:bg-gray-100 hover:text-black"
    }`;

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <aside className="w-64 bg-white border-r border-gray-200 p-6 flex flex-col">
        <div className="mb-8">
          <h2 className="text-lg font-bold text-gray-900">{user?.name}</h2>
          <p className="text-sm text-gray-500">{user?.email}</p>
        </div>

        <nav className="flex-1 space-y-1">
          <NavLink to="/jobs" className={linkClass}>
            <Briefcase className="w-4 h-4" />
            Browse Jobs
          </NavLink>
          <NavLink to="/student/applications" className={linkClass}>
            <FileText className="w-4 h-4" />
            My Applications
          </NavLink>
          <NavLink to="/student/ats" className={linkClass}>
            <ScanSearch className="w-4 h-4" />
            ATS Score
          </NavLink>
          <NavLink to="/student/careers" className={linkClass}>
            <Map className="w-4 h-4" />
            Career Paths
          </NavLink>
          <NavLink to="/companies" className={linkClass}>
            <Building2 className="w-4 h-4" />
            Explore Companies
          </NavLink>
          <NavLink to="/" className={linkClass}>
            <Home className="w-4 h-4" />
            Home
          </NavLink>
        </nav>

        <button onClick={handleLogout}
          className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium text-gray-600 hover:bg-red-50 hover:text-red-600 transition-colors">
          <LogOut className="w-4 h-4" />
          Logout
        </button>
      </aside>

      <main className="flex-1 p-8 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
}

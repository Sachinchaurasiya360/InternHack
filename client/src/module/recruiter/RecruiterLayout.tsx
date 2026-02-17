import { NavLink, Outlet } from "react-router";
import { LayoutDashboard, Briefcase, PlusCircle, LogOut } from "lucide-react";
import { useAuthStore } from "../../lib/auth.store";
import { useNavigate } from "react-router";
import { Navbar } from "../../components/Navbar";

export default function RecruiterLayout() {
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
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <div className="flex flex-1 pt-16">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 p-6 flex flex-col">
        <div className="mb-8">
          <h2 className="text-lg font-bold text-gray-900">{user?.company || "Recruiter"}</h2>
          <p className="text-sm text-gray-500">{user?.name}</p>
        </div>

        <nav className="flex-1 space-y-1">
          <NavLink to="/recruiters" end className={linkClass}>
            <LayoutDashboard className="w-4 h-4" />
            Dashboard
          </NavLink>
          <NavLink to="/recruiters/jobs" className={linkClass}>
            <Briefcase className="w-4 h-4" />
            My Jobs
          </NavLink>
          <NavLink to="/recruiters/jobs/create" className={linkClass}>
            <PlusCircle className="w-4 h-4" />
            Create Job
          </NavLink>
        </nav>

        <button
          onClick={handleLogout}
          className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium text-gray-600 hover:bg-red-50 hover:text-red-600 transition-colors"
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
    </div>
  );
}

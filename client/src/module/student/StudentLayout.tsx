import { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router";
import { Briefcase, FileText, LogOut, Home, ScanSearch, Map, Building2, ChevronsLeft, ChevronsRight, UserCircle, Award, Globe, Crown, GraduationCap } from "lucide-react";
import { useAuthStore } from "../../lib/auth.store";
import { Navbar } from "../../components/Navbar";
import { SEO } from "../../components/SEO";

const NAV_ITEMS = [
  { to: "/student/jobs", icon: Briefcase, label: "Browse Jobs" },
  { to: "/student/applications", icon: FileText, label: "My Applications" },
  { to: "/student/ats/score", icon: ScanSearch, label: "ATS Score" },
  { to: "/student/careers", icon: Map, label: "Career Paths" },
  { to: "/student/companies", icon: Building2, label: "Explore Companies" },
  { to: "/student/colleges", icon: GraduationCap, label: "Colleges" },
  { to: "/student/grants", icon: Award, label: "Grants" },
  { to: "/student/opensource", icon: Globe, label: "Open Source" },
  { to: "/student/checkout", icon: Crown, label: "Upgrade" },
  { to: "/student/profile", icon: UserCircle, label: "My Profile" },
  { to: "/", icon: Home, label: "Home" },
];

export default function StudentLayout() {
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(() => {
    return localStorage.getItem("sidebar-collapsed") === "true";
  });

  const toggleSidebar = () => {
    setCollapsed((prev) => {
      localStorage.setItem("sidebar-collapsed", String(!prev));
      return !prev;
    });
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  // w-18 = 72px (collapsed), w-64 = 256px (expanded)
  const sidebarWidth = collapsed ? 72 : 256;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <SEO title="Student Dashboard" noIndex />
      {/* Top Navbar — shifts right to clear the sidebar */}
      <Navbar sidebarOffset={sidebarWidth} />

      {/* Sidebar — fixed, full height from top */}
      <aside
        className={`${
          collapsed ? "w-18" : "w-64"
        } fixed top-0 left-0 h-screen bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 flex flex-col transition-all duration-300 z-30`}
      >
        {/* Toggle + User */}
        <div className={`${collapsed ? "px-3 pt-2 pb-1" : "px-5 pt-3 pb-1"}`}>
          <button
            onClick={toggleSidebar}
            className="w-8 h-8 rounded-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-400 dark:text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-300 transition-colors mb-2"
            title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {collapsed ? <ChevronsRight className="w-4 h-4" /> : <ChevronsLeft className="w-4 h-4" />}
          </button>

          {collapsed ? (
            <div className="w-9 h-9 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 flex items-center justify-center text-sm font-bold mx-auto mb-2">
              {user?.name?.charAt(0)?.toUpperCase() ?? "U"}
            </div>
          ) : (
            <div className="mb-2">
              <h2 className="text-sm font-bold text-gray-900 dark:text-white truncate">{user?.name}</h2>
              <p className="text-xs text-gray-500 dark:text-gray-400 truncate">{user?.email}</p>
            </div>
          )}
        </div>

        {/* Nav */}
        <nav className={`flex-1 space-y-0.5 ${collapsed ? "px-2" : "px-3"} overflow-y-auto`}>
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              title={collapsed ? item.label : undefined}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-lg text-sm font-medium transition-colors ${
                  collapsed ? "justify-center px-2 py-2" : "px-3 py-2"
                } ${
                  isActive
                    ? "bg-gray-900 dark:bg-white text-white dark:text-gray-900"
                    : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-black dark:hover:text-white"
                }`
              }
            >
              <item.icon className="w-4 h-4 shrink-0" />
              {!collapsed && <span className="truncate">{item.label}</span>}
            </NavLink>
          ))}
        </nav>

        {/* Logout */}
        <div className={`${collapsed ? "px-2 pb-4 pt-2" : "px-3 pb-5 pt-2"} border-t border-gray-100 dark:border-gray-800 mt-2`}>
          <button
            onClick={handleLogout}
            title={collapsed ? "Logout" : undefined}
            className={`flex items-center gap-3 rounded-lg text-sm font-medium text-gray-600 dark:text-gray-400 hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-600 dark:hover:text-red-400 transition-colors w-full ${
              collapsed ? "justify-center px-2 py-2" : "px-3 py-2"
            }`}
          >
            <LogOut className="w-4 h-4 shrink-0" />
            {!collapsed && <span>Logout</span>}
          </button>
        </div>
      </aside>

      {/* Main Content — offset by sidebar width */}
      <main
        className={`${collapsed ? "ml-18" : "ml-64"} pt-16 p-8 transition-all duration-300 overflow-auto`}
      >
        <Outlet />
      </main>
    </div>
  );
}

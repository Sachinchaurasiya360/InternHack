import { useState } from "react";
import { NavLink, Link, Outlet, useNavigate } from "react-router";
import { LayoutDashboard, Briefcase, PlusCircle, Search, LogOut, ChevronsLeft, ChevronsRight, Home, Users, School, User, Menu, X, Sun, Moon } from "lucide-react";
import { useAuthStore } from "../../lib/auth.store";
import { useThemeStore } from "../../lib/theme.store";
import { Navbar } from "../../components/Navbar";
import { SEO } from "../../components/SEO";

const NAV_ITEMS = [
  { to: "/recruiters", icon: LayoutDashboard, label: "Dashboard", end: true },
  { to: "/recruiters/jobs", icon: Briefcase, label: "My Jobs" },
  { to: "/recruiters/talent-search", icon: Search, label: "Talent Search" },
  { to: "/recruiters/talent-pools", icon: Users, label: "Talent Pools" },
  { to: "/recruiters/campus-drives", icon: School, label: "Campus Drives" },
  { to: "/recruiters/jobs/create", icon: PlusCircle, label: "Create Job" },
  { to: "/recruiters/profile", icon: User, label: "Profile" },
  { to: "/", icon: Home, label: "Home" },
];

export default function RecruiterLayout() {
  const { user, logout } = useAuthStore();
  const { theme, toggleTheme } = useThemeStore();
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(() => {
    return localStorage.getItem("recruiter-sidebar-collapsed") === "true";
  });
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleSidebar = () => {
    setCollapsed((prev) => {
      localStorage.setItem("recruiter-sidebar-collapsed", String(!prev));
      return !prev;
    });
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const sidebarWidth = collapsed ? 72 : 256;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <SEO title="Recruiter Dashboard" noIndex />

      {/* Navbar — hidden on mobile, mobile top bar replaces it */}
      <div className="hidden lg:block">
        <Navbar sidebarOffset={sidebarWidth} />
      </div>

      {/* Mobile top bar */}
      <div className="fixed top-0 left-0 right-0 z-40 lg:hidden bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setMobileOpen(true)}
            className="p-1.5 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <Menu className="w-5 h-5" />
          </button>
          <Link to="/" className="flex items-center gap-2 no-underline">
            <img src="/logo.png" alt="InternHack" className="h-7 w-7 rounded-lg object-contain" />
            <span className="text-base font-bold text-gray-950 dark:text-white">InternHack</span>
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-950 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
          >
            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <div className="w-8 h-8 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 flex items-center justify-center text-sm font-bold">
            {user?.name?.charAt(0)?.toUpperCase() ?? "R"}
          </div>
        </div>
      </div>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 flex flex-col transition-all duration-300 z-50 ${
          collapsed ? "w-18" : "w-64"
        } ${mobileOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
      >
        {/* Toggle + User */}
        <div className={`${collapsed ? "px-3 pt-2 pb-1" : "px-5 pt-3 pb-1"}`}>
          <div className="flex items-center justify-between mb-2">
            <button
              onClick={toggleSidebar}
              className="hidden lg:flex w-8 h-8 rounded-lg border border-gray-200 dark:border-gray-700 items-center justify-center text-gray-400 dark:text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
              title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
            >
              {collapsed ? <ChevronsRight className="w-4 h-4" /> : <ChevronsLeft className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setMobileOpen(false)}
              className="lg:hidden p-1 rounded-lg text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {collapsed ? (
            <div className="w-9 h-9 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 flex items-center justify-center text-sm font-bold mx-auto mb-2">
              {user?.name?.charAt(0)?.toUpperCase() ?? "R"}
            </div>
          ) : (
            <div className="mb-2">
              <h2 className="text-sm font-bold text-gray-900 dark:text-white truncate">{user?.company || "Recruiter"}</h2>
              <p className="text-xs text-gray-500 dark:text-gray-400 truncate">{user?.name}</p>
            </div>
          )}
        </div>

        {/* Nav */}
        <nav className={`flex-1 space-y-0.5 ${collapsed ? "px-2" : "px-3"} overflow-y-auto`}>
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              title={collapsed ? item.label : undefined}
              onClick={() => setMobileOpen(false)}
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

      {/* Main Content */}
      <main
        className={`pt-16 lg:pt-24 px-4 pb-8 sm:px-6 lg:px-8 transition-all duration-300 overflow-auto ${
          collapsed ? "lg:ml-18" : "lg:ml-64"
        }`}
      >
        <Outlet />
      </main>
    </div>
  );
}

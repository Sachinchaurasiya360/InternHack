import { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router";
import { Briefcase, FileText, LogOut, ScanSearch, Building2, ChevronsLeft, ChevronsRight, UserCircle, Award, Globe, Crown, ShieldCheck, Video, GraduationCap, User, Menu, X, Sun, Moon, Lock, BrainCircuit } from "lucide-react";
import { useAuthStore } from "../lib/auth.store";
import { useThemeStore } from "../lib/theme.store";

const NAV_ITEMS = [
  { to: "/student/jobs", icon: Briefcase, label: "Browse Jobs" },
  { to: "/student/ai-agent", icon: BrainCircuit, label: "InternHack AI" },
  { to: "/student/applications", icon: FileText, label: "My Applications" },
  { to: "/student/ats/score", icon: ScanSearch, label: "Resume" },
  { to: "/learn", icon: GraduationCap, label: "Learning Hub" },
  { to: "/student/skill-verification", icon: ShieldCheck, label: "Skill Tests" },
  { to: "/student/mock-interview", icon: Video, label: "Mock Interview", premium: true },
  { to: "/student/companies", icon: Building2, label: "Explore Companies" },
  { to: "/student/grants", icon: Award, label: "Grants" },
  { to: "/student/opensource", icon: Globe, label: "Open Source" },
  { to: "/student/checkout", icon: Crown, label: "Upgrade" },
  { to: "/student/profile", icon: UserCircle, label: "My Profile" },
];

export function useStudentSidebar() {
  const { user, logout } = useAuthStore();
  const { theme, toggleTheme } = useThemeStore();
  const isPremium = user?.subscriptionStatus === "ACTIVE" && user.subscriptionPlan !== "FREE";
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(() => {
    return localStorage.getItem("sidebar-collapsed") === "true";
  });
  const [imgError, setImgError] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

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

  const sidebarWidth = collapsed ? 72 : 256;

  const navItems = NAV_ITEMS.filter((item) => !(item.to === "/student/checkout" && isPremium));

  const sidebar = (
    <>
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
          <Link to="/student/profile" className="no-underline">
            {user?.profilePic && !imgError ? (
              <img src={user.profilePic} alt={user.name} className="w-8 h-8 rounded-full object-cover" onError={() => setImgError(true)} />
            ) : (
              <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                <User className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              </div>
            )}
          </Link>
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

          <Link to="/student/profile" className="block mb-2 no-underline hover:opacity-80 transition-opacity" title="My Profile" onClick={() => setMobileOpen(false)}>
            {collapsed ? (
              user?.profilePic && !imgError ? (
                <img src={user.profilePic} alt={user.name} className="w-9 h-9 rounded-full object-cover mx-auto" onError={() => setImgError(true)} />
              ) : (
                <div className="w-9 h-9 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center mx-auto">
                  <User className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                </div>
              )
            ) : (
              <div className="flex items-center gap-3">
                {user?.profilePic && !imgError ? (
                  <img src={user.profilePic} alt={user.name} className="w-9 h-9 rounded-full object-cover shrink-0" onError={() => setImgError(true)} />
                ) : (
                  <div className="w-9 h-9 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center shrink-0">
                    <User className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                  </div>
                )}
                <div className="min-w-0">
                  <h2 className="text-sm font-bold text-gray-900 dark:text-white truncate">{user?.name}</h2>
                  <p className="text-xs text-gray-500 dark:text-gray-400 truncate">{user?.email}</p>
                </div>
              </div>
            )}
          </Link>
        </div>

        {/* Nav */}
        <nav className={`flex-1 space-y-0.5 ${collapsed ? "px-2" : "px-3"} overflow-y-auto`}>
          {navItems.map((item) => {
            const isLocked = item.premium && !isPremium;
            return (
              <NavLink
                key={item.to}
                to={isLocked ? "/student/checkout" : item.to}
                title={collapsed ? (isLocked ? `${item.label} (Pro)` : item.label) : undefined}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-lg text-sm font-medium transition-colors ${
                    collapsed ? "justify-center px-2 py-2" : "px-3 py-2"
                  } ${
                    isActive && !isLocked
                      ? "bg-gray-900 dark:bg-white text-white dark:text-gray-900"
                      : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-black dark:hover:text-white"
                  }`
                }
              >
                <item.icon className="w-4 h-4 shrink-0" />
                {!collapsed && (
                  <>
                    <span className="truncate">{item.label}</span>
                    {isLocked && <Lock className="w-3 h-3 ml-auto shrink-0 text-gray-400 dark:text-gray-500" />}
                  </>
                )}
              </NavLink>
            );
          })}
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
    </>
  );

  return { collapsed, sidebarWidth, sidebar };
}

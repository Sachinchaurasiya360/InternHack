import { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router";
import { Briefcase, FileText, LogOut, ScanSearch, Building2, ChevronsLeft, ChevronsRight, UserCircle, Award, Globe, Crown, ShieldCheck, Video, GraduationCap } from "lucide-react";
import { useAuthStore } from "../lib/auth.store";

const NAV_ITEMS = [
  { to: "/student/jobs", icon: Briefcase, label: "Browse Jobs" },
  { to: "/student/applications", icon: FileText, label: "My Applications" },
  { to: "/student/ats/score", icon: ScanSearch, label: "Resume" },
  { to: "/learn", icon: GraduationCap, label: "Learning Hub" },
  { to: "/student/skill-verification", icon: ShieldCheck, label: "Skill Tests" },
  { to: "/student/mock-interview", icon: Video, label: "Mock Interview" },
  { to: "/student/companies", icon: Building2, label: "Explore Companies" },
  { to: "/student/grants", icon: Award, label: "Grants" },
  { to: "/student/opensource", icon: Globe, label: "Open Source" },
  { to: "/student/checkout", icon: Crown, label: "Upgrade" },
  { to: "/student/profile", icon: UserCircle, label: "My Profile" },
];

export function useStudentSidebar() {
  const { user, logout } = useAuthStore();
  const isPremium = user?.subscriptionStatus === "ACTIVE" && user.subscriptionPlan !== "FREE";
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

  const sidebarWidth = collapsed ? 72 : 256;

  const sidebar = (
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

        <Link to="/student/profile" className="block mb-2 no-underline hover:opacity-80 transition-opacity" title="My Profile">
          {collapsed ? (
            user?.profilePic ? (
              <img src={user.profilePic} alt={user.name} className="w-9 h-9 rounded-full object-cover mx-auto" />
            ) : (
              <div className="w-9 h-9 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 flex items-center justify-center text-sm font-bold mx-auto">
                {user?.name?.charAt(0)?.toUpperCase() ?? "U"}
              </div>
            )
          ) : (
            <div className="flex items-center gap-3">
              {user?.profilePic ? (
                <img src={user.profilePic} alt={user.name} className="w-9 h-9 rounded-full object-cover shrink-0" />
              ) : (
                <div className="w-9 h-9 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 flex items-center justify-center text-sm font-bold shrink-0">
                  {user?.name?.charAt(0)?.toUpperCase() ?? "U"}
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
        {NAV_ITEMS.filter((item) => !(item.to === "/student/checkout" && isPremium)).map((item) => (
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
  );

  return { collapsed, sidebarWidth, sidebar };
}

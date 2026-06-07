import { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router";
import { Briefcase, FileText, LogOut, ScanSearch, Building2, ChevronsLeft, ChevronsRight, UserCircle, Award, Globe, Crown, ShieldCheck, Video, GraduationCap, User, Menu, X, Lock, BrainCircuit, Radar } from "lucide-react";
import { useAuthStore } from "../lib/auth.store";

type NavItem = {
  to: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  premium?: boolean;
};

type NavGroup = {
  label: string;
  items: NavItem[];
};

const NAV_GROUPS: NavGroup[] = [
  {
    label: "work",
    items: [
      { to: "/student/jobs", icon: Briefcase, label: "Browse Jobs" },
      { to: "/student/signals", icon: Radar, label: "Funding Signals" },
      { to: "/student/applications", icon: FileText, label: "My Applications" },
      { to: "/student/companies", icon: Building2, label: "Explore Companies" },
    ],
  },
  {
    label: "prep",
    items: [
      { to: "/student/ai-agent", icon: BrainCircuit, label: "InternHack AI" },
      { to: "/student/ats/score", icon: ScanSearch, label: "Resume" },
      { to: "/learn", icon: GraduationCap, label: "Learning Hub" },
      { to: "/student/skill-verification", icon: ShieldCheck, label: "Skill Tests" },
      { to: "/student/mock-interview", icon: Video, label: "Mock Interview", premium: true },
    ],
  },
  {
    label: "discover",
    items: [
      { to: "/student/grants", icon: Award, label: "Grants" },
      { to: "/student/opensource", icon: Globe, label: "Open Source" },
    ],
  },
  {
    label: "account",
    items: [
      { to: "/student/profile", icon: UserCircle, label: "My Profile" },
      { to: "/student/checkout", icon: Crown, label: "Upgrade" },
    ],
  },
];

export function useStudentSidebar() {
  const { user, logout } = useAuthStore();
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

  const groups = NAV_GROUPS.map((g) => ({
    ...g,
    items: g.items.filter((item) => !(item.to === "/student/checkout" && isPremium)),
  })).filter((g) => g.items.length > 0);

  const avatar = (size: "sm" | "md") => {
    const dim = size === "sm" ? "w-8 h-8" : "w-9 h-9";
    const icon = size === "sm" ? "w-4 h-4" : "w-5 h-5";
    if (user?.profilePic && !imgError) {
      return (
        <img
          src={user.profilePic}
          alt={user.name}
          className={`${dim} rounded-md object-cover border border-stone-200 dark:border-white/10`}
          onError={() => setImgError(true)}
        />
      );
    }
    return (
      <div className={`${dim} rounded-md bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-white/10 flex items-center justify-center`}>
        <User className={`${icon} text-stone-500`} />
      </div>
    );
  };

  const sidebar = (
    <>
      {/* Mobile top bar */}
      <div className="fixed top-0 left-0 right-0 z-40 lg:hidden bg-stone-50 dark:bg-stone-950 border-b border-stone-200 dark:border-white/10 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            className="p-2 rounded-md text-stone-500 hover:text-stone-900 dark:hover:text-stone-50 hover:bg-stone-100 dark:hover:bg-stone-900 transition-colors border-0 bg-transparent cursor-pointer"
          >
            <Menu className="w-5 h-5" />
          </button>
          <Link to="/" className="flex items-center gap-2 no-underline">
            <div className="relative">
              <img src="/logo.png" alt="InternHack" className="h-7 w-7 rounded-md object-contain" />
              <span className="absolute -bottom-0.5 -right-0.5 h-1.5 w-1.5 bg-lime-400" />
            </div>
            <span className="text-base font-bold tracking-tight text-stone-900 dark:text-stone-50">
              InternHack
            </span>
          </Link>
        </div>
        <Link to="/student/profile" className="no-underline">
          {avatar("sm")}
        </Link>
      </div>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-stone-950/60 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen bg-stone-50 dark:bg-stone-950 border-r border-stone-200 dark:border-white/10 flex flex-col transition-all duration-300 z-50 ${
          collapsed ? "w-18" : "w-64"
        } ${mobileOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
      >
        {/* Mobile close button */}
        <div className="flex items-center justify-end px-5 pt-4 pb-2 lg:hidden border-b border-stone-200 dark:border-white/10">
          <button
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
            className="p-1.5 rounded-md text-stone-500 hover:text-stone-900 dark:hover:text-stone-50 hover:bg-stone-100 dark:hover:bg-stone-900 transition-colors border-0 bg-transparent cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Identity + collapse toggle */}
        <div className={`flex items-center gap-2 border-b border-stone-200 dark:border-white/10 ${collapsed ? "px-3 py-3" : "px-5 py-3"}`}>
          <Link
            to="/student/profile"
            onClick={() => setMobileOpen(false)}
            title={collapsed ? user?.name : undefined}
            className={`flex items-center gap-3 no-underline min-w-0 ${collapsed ? "justify-center flex-1" : "flex-1"} hover:opacity-80 transition-opacity`}
          >
            {avatar("md")}
            {!collapsed && (
              <>
                <h2 className="text-sm font-bold text-stone-900 dark:text-stone-50 truncate leading-tight flex-1">
                  {user?.name}
                </h2>
                {isPremium && (
                  <span className="shrink-0 h-1.5 w-1.5 bg-lime-400" title="Premium" />
                )}
              </>
            )}
          </Link>
          {!collapsed && (
            <button
              onClick={toggleSidebar}
              title="Collapse sidebar"
              className="hidden lg:flex shrink-0 p-1.5 rounded-md text-stone-500 hover:text-stone-900 dark:hover:text-stone-50 hover:bg-stone-100 dark:hover:bg-stone-900 transition-colors border-0 bg-transparent cursor-pointer"
            >
              <ChevronsLeft className="w-4 h-4" />
            </button>
          )}
        </div>

        {collapsed && (
          <div className="hidden lg:flex justify-center py-2 border-b border-stone-200 dark:border-white/10">
            <button
              onClick={toggleSidebar}
              title="Expand sidebar"
              className="p-1.5 rounded-md text-stone-500 hover:text-stone-900 dark:hover:text-stone-50 hover:bg-stone-100 dark:hover:bg-stone-900 transition-colors border-0 bg-transparent cursor-pointer"
            >
              <ChevronsRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Nav groups */}
        <nav className={`flex-1 overflow-y-auto ${collapsed ? "px-2 py-3" : "px-3 py-3"} space-y-4`}>
          {groups.map((group) => (
            <div key={group.label}>
              {!collapsed && (
                <div className="flex items-center gap-2 px-2 mb-1.5">
                  <span className="h-1 w-1 bg-lime-400" />
                  <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
                    {group.label}
                  </span>
                </div>
              )}
              {collapsed && <div className="h-px bg-stone-200 dark:bg-white/10 mx-2 mb-2" />}
              <ul className="space-y-0.5">
                {group.items.map((item) => {
                  const isLocked = item.premium && !isPremium;
                  return (
                    <li key={item.to}>
                      <NavLink
                        to={isLocked ? "/student/checkout" : item.to}
                        title={collapsed ? (isLocked ? `${item.label} (Pro)` : item.label) : undefined}
                        onClick={() => setMobileOpen(false)}
                        className={({ isActive }) =>
                          `relative flex items-center gap-3 rounded-md text-sm transition-colors no-underline ${
                            collapsed ? "justify-center px-2 py-2" : "px-3 py-2"
                          } ${
                            isActive && !isLocked
                              ? "bg-stone-900 dark:bg-stone-50 text-stone-50 dark:text-stone-900 font-bold"
                              : "text-stone-600 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-900 hover:text-stone-900 dark:hover:text-stone-50 font-medium"
                          }`
                        }
                      >
                        {({ isActive }) => (
                          <>
                            {isActive && !isLocked && !collapsed && (
                              <span className="absolute left-0 top-1/2 -translate-y-1/2 h-4 w-0.5 bg-lime-400" />
                            )}
                            <item.icon className="w-4 h-4 shrink-0" />
                            {!collapsed && (
                              <>
                                <span className="truncate">{item.label}</span>
                                {isLocked && (
                                  <Lock className="w-3 h-3 ml-auto shrink-0 text-stone-400" />
                                )}
                                {item.premium && !isLocked && (
                                  <span className="ml-auto text-[9px] font-mono uppercase tracking-widest text-lime-500">
                                    pro
                                  </span>
                                )}
                              </>
                            )}
                          </>
                        )}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>

        {/* Footer: logout */}
        <div className={`border-t border-stone-200 dark:border-white/10 ${collapsed ? "px-2 py-3" : "px-3 py-3"}`}>
          <button
            onClick={handleLogout}
            title={collapsed ? "Logout" : undefined}
            className={`w-full flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-stone-600 dark:text-stone-400 hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-600 dark:hover:text-red-400 transition-colors border-0 bg-transparent cursor-pointer ${
              collapsed ? "justify-center px-2" : ""
            }`}
          >
            <LogOut className="w-4 h-4 shrink-0" />
            {!collapsed && <span className="truncate">Logout</span>}
          </button>
        </div>
      </aside>
    </>
  );

  return { collapsed, sidebarWidth, sidebar };
}

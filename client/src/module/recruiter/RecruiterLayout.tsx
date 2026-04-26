import { Suspense, useState } from "react";
import { NavLink, Link, Outlet, useNavigate, useLocation } from "react-router";
import { LayoutDashboard, Briefcase, Search, LogOut, ChevronsLeft, ChevronsRight, Users, User, Menu, X, ChevronDown, BarChart3, Building2, CalendarDays, Clock, Video, CheckSquare, Award, Wallet, Receipt, UserPlus, ShieldCheck, GitBranch, Key, UserCircle, Bookmark } from "lucide-react";
import { useAuthStore } from "../../lib/auth.store";
import { Navbar } from "../../components/Navbar";
import { SEO } from "../../components/SEO";

type NavItem = {
  to: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  end?: boolean;
  comingSoon?: boolean;
};

const RECRUITMENT_ITEMS: NavItem[] = [
  { to: "/recruiters", icon: LayoutDashboard, label: "Dashboard", end: true },
  { to: "/recruiters/jobs", icon: Briefcase, label: "My Jobs" },
  { to: "/recruiters/talent-search", icon: Search, label: "Talent Search" },
  { to: "/recruiters/saved", icon: Bookmark, label: "Saved" },
];

const HR_ITEMS: NavItem[] = [
  { to: "/recruiters/hr", icon: BarChart3, label: "HR Dashboard", end: true },
  { to: "/recruiters/hr/employees", icon: Users, label: "Employees" },
  { to: "/recruiters/hr/departments", icon: Building2, label: "Departments" },
  { to: "/recruiters/hr/leave", icon: CalendarDays, label: "Leave" },
  { to: "/recruiters/hr/attendance", icon: Clock, label: "Attendance" },
  { to: "/recruiters/hr/interviews", icon: Video, label: "Interviews" },
  { to: "/recruiters/hr/tasks", icon: CheckSquare, label: "Tasks" },
  { to: "/recruiters/hr/performance", icon: Award, label: "Performance" },
  { to: "/recruiters/hr/payroll", icon: Wallet, label: "Payroll", comingSoon: true },
  { to: "/recruiters/hr/reimbursements", icon: Receipt, label: "Reimbursements", comingSoon: true },
  { to: "/recruiters/hr/onboarding", icon: UserPlus, label: "Onboarding" },
  { to: "/recruiters/hr/compliance", icon: ShieldCheck, label: "Compliance" },
  { to: "/recruiters/hr/workflows", icon: GitBranch, label: "Workflows" },
  { to: "/recruiters/hr/roles", icon: Key, label: "Roles & Access" },
];

const ACCOUNT_ITEMS: NavItem[] = [
  { to: "/recruiters/profile", icon: UserCircle, label: "My Profile" },
];

export default function RecruiterLayout() {
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(() => {
    return localStorage.getItem("recruiter-sidebar-collapsed") === "true";
  });
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hrExpanded, setHrExpanded] = useState(() => localStorage.getItem("recruiter-hr-expanded") !== "false");
  const [imgError, setImgError] = useState(false);

  const isHRActive = location.pathname.startsWith("/recruiters/hr");

  const toggleHR = () => {
    setHrExpanded((prev) => {
      localStorage.setItem("recruiter-hr-expanded", String(!prev));
      return !prev;
    });
  };

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
  const displayName = user?.company || user?.name || "Recruiter";

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

  const renderNavItem = (item: NavItem) => (
    <li key={item.to}>
      <NavLink
        to={item.to}
        end={item.end}
        title={collapsed ? item.label : undefined}
        onClick={() => setMobileOpen(false)}
        className={({ isActive }) =>
          `relative flex items-center gap-3 rounded-md text-sm transition-colors no-underline ${
            collapsed ? "justify-center px-2 py-2" : "px-3 py-2"
          } ${
            isActive
              ? "bg-stone-900 dark:bg-stone-50 text-stone-50 dark:text-stone-900 font-bold"
              : "text-stone-600 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-900 hover:text-stone-900 dark:hover:text-stone-50 font-medium"
          }`
        }
      >
        {({ isActive }) => (
          <>
            {isActive && !collapsed && (
              <span className="absolute left-0 top-1/2 -translate-y-1/2 h-4 w-0.5 bg-lime-400" />
            )}
            <item.icon className="w-4 h-4 shrink-0" />
            {!collapsed && (
              <>
                <span className="truncate">{item.label}</span>
                {item.comingSoon && (
                  <span className="ml-auto shrink-0 text-[9px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-500 border border-stone-300 dark:border-white/15 px-1.5 py-0.5 leading-none">
                    soon
                  </span>
                )}
              </>
            )}
          </>
        )}
      </NavLink>
    </li>
  );

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-950">
      <SEO title="Recruiter Dashboard" noIndex />

      {/* Navbar, hidden on mobile, mobile top bar replaces it */}
      <div className="hidden lg:block">
        <Navbar sidebarOffset={sidebarWidth} />
      </div>

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
        <Link to="/recruiters/profile" className="no-underline">
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
            to="/recruiters/profile"
            onClick={() => setMobileOpen(false)}
            title={collapsed ? displayName : undefined}
            className={`flex items-center gap-3 no-underline min-w-0 ${collapsed ? "justify-center flex-1" : "flex-1"} hover:opacity-80 transition-opacity`}
          >
            {avatar("md")}
            {!collapsed && (
              <div className="min-w-0 flex-1">
                <h2 className="text-sm font-bold text-stone-900 dark:text-stone-50 truncate leading-tight">
                  {displayName}
                </h2>
                {user?.company && user?.name && (
                  <p className="text-xs text-stone-500 truncate leading-tight">{user.name}</p>
                )}
              </div>
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
          {/* Recruitment */}
          <div>
            {!collapsed ? (
              <div className="flex items-center gap-2 px-2 mb-1.5">
                <span className="h-1 w-1 bg-lime-400" />
                <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
                  recruitment
                </span>
              </div>
            ) : (
              <div className="h-px bg-stone-200 dark:bg-white/10 mx-2 mb-2" />
            )}
            <ul className="space-y-0.5">
              {RECRUITMENT_ITEMS.map(renderNavItem)}
            </ul>
          </div>

          {/* HR Management, collapsible */}
          <div>
            {!collapsed ? (
              <button
                onClick={toggleHR}
                className="flex items-center gap-2 w-full px-2 mb-1.5 border-0 bg-transparent cursor-pointer"
              >
                <span className={`h-1 w-1 ${isHRActive ? "bg-lime-400" : "bg-stone-400"}`} />
                <span className={`text-[10px] font-mono uppercase tracking-widest ${isHRActive ? "text-stone-900 dark:text-stone-50" : "text-stone-500"}`}>
                  hr management
                </span>
                <ChevronDown className={`w-3 h-3 ml-auto text-stone-500 transition-transform ${hrExpanded ? "" : "-rotate-90"}`} />
              </button>
            ) : (
              <div className="h-px bg-stone-200 dark:bg-white/10 mx-2 mb-2" />
            )}
            {(hrExpanded || collapsed) && (
              <ul className="space-y-0.5">
                {HR_ITEMS.map(renderNavItem)}
              </ul>
            )}
          </div>

          {/* Account */}
          <div>
            {!collapsed ? (
              <div className="flex items-center gap-2 px-2 mb-1.5">
                <span className="h-1 w-1 bg-lime-400" />
                <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
                  account
                </span>
              </div>
            ) : (
              <div className="h-px bg-stone-200 dark:bg-white/10 mx-2 mb-2" />
            )}
            <ul className="space-y-0.5">
              {ACCOUNT_ITEMS.map(renderNavItem)}
            </ul>
          </div>
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

      {/* Main Content */}
      <main
        className={`pt-16 lg:pt-24 px-4 pb-8 sm:px-6 lg:px-8 transition-all duration-300 overflow-auto ${
          collapsed ? "lg:ml-18" : "lg:ml-64"
        }`}
      >
        <Suspense fallback={<RecruiterRouteLoader />}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
}

function RecruiterRouteLoader() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="mt-6 flex items-center gap-2 mb-3">
        <span className="h-1 w-1 bg-lime-400" />
        <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
          loading
        </span>
      </div>
      <div className="animate-pulse space-y-4">
        <div className="h-10 w-1/3 rounded bg-stone-100 dark:bg-stone-900" />
        <div className="h-4 w-2/3 rounded bg-stone-100 dark:bg-stone-900" />
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-px bg-stone-200 dark:bg-white/10 border border-stone-200 dark:border-white/10 rounded-md overflow-hidden">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="bg-white dark:bg-stone-950 px-4 py-5">
              <div className="h-3 w-16 rounded bg-stone-100 dark:bg-stone-900" />
              <div className="mt-2 h-5 w-10 rounded bg-stone-100 dark:bg-stone-900" />
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-2">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="h-40 rounded-md border border-stone-200 dark:border-white/10 bg-white dark:bg-stone-950"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

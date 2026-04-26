import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Settings, LogOut, LayoutDashboard, Sun, Moon } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router";
import { useAuthStore } from "../lib/auth.store";
import { useThemeStore } from "../lib/theme.store";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverTitle,
  PopoverDescription,
  PopoverBody,
  PopoverFooter,
} from "./ui/popover";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Jobs", href: "/jobs" },
  { label: "Learn", href: "/learn" },
  { label: "Companies", href: "/companies" },
  { label: "Recruiters", href: "/for-recruiters" },
  { label: "Blog", href: "/blog" },
];

export function Navbar({ sidebarOffset = 0 }: { sidebarOffset?: number }) {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated, user, logout } = useAuthStore();
  const { theme, toggleTheme } = useThemeStore();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const dashboardLink = user?.role === "ADMIN" ? "/admin" : user?.role === "RECRUITER" ? "/recruiters" : "/student/applications";
  const profileLink = user?.role === "RECRUITER" ? "/recruiters/profile" : "/student/profile";

  return (
    <motion.nav
      initial={{ y: -12, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="fixed top-0 right-0 z-40 bg-stone-50/80 dark:bg-stone-950/80 backdrop-blur-md border-b border-stone-200 dark:border-white/10"
      style={{ left: sidebarOffset, transition: "left 300ms" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2.5 no-underline">
            <div className="relative">
              <img src="/logo.png" alt="InternHack" className="h-8 w-8 rounded-md object-contain" />
              <span className="absolute -bottom-0.5 -right-0.5 h-1.5 w-1.5 bg-lime-400" />
            </div>
            <span className="text-base font-bold tracking-tight text-stone-900 dark:text-stone-50">
              InternHack
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const active = location.pathname === item.href;
              return (
                <Link key={item.href} to={item.href} className="no-underline">
                  <button
                    className={cn(
                      "relative px-3 py-1.5 text-sm font-medium rounded-md transition-colors bg-transparent border-0 cursor-pointer",
                      active
                        ? "text-stone-900 dark:text-stone-50"
                        : "text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-50"
                    )}
                  >
                    {item.label}
                    {active && (
                      <span className="absolute left-3 right-3 -bottom-0.5 h-0.5 bg-lime-400" />
                    )}
                  </button>
                </Link>
              );
            })}
          </div>

          <div className="hidden lg:flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 text-stone-500 hover:text-stone-900 hover:bg-stone-200/60 dark:text-stone-400 dark:hover:text-stone-50 dark:hover:bg-white/5 rounded-md transition-colors"
              title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            >
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {isAuthenticated ? (
              <Popover>
                <PopoverTrigger asChild>
                  <button className="h-9 w-9 rounded-md cursor-pointer border border-stone-200 dark:border-white/10 p-0 bg-transparent overflow-hidden">
                    <Avatar className="h-full w-full rounded-none">
                      {user?.profilePic && (
                        <AvatarImage src={user.profilePic} alt={user?.name ?? ""} />
                      )}
                      <AvatarFallback className="rounded-none">
                        {user?.name?.charAt(0).toUpperCase() ?? "U"}
                      </AvatarFallback>
                    </Avatar>
                  </button>
                </PopoverTrigger>
                <PopoverContent align="end" sideOffset={8} className="w-60">
                  <PopoverHeader>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-10 w-10 rounded-md">
                        {user?.profilePic && (
                          <AvatarImage src={user.profilePic} alt={user?.name ?? ""} />
                        )}
                        <AvatarFallback className="rounded-md">
                          {user?.name?.charAt(0).toUpperCase() ?? "U"}
                        </AvatarFallback>
                      </Avatar>
                      <div className="min-w-0">
                        <PopoverTitle className="text-sm truncate">{user?.name}</PopoverTitle>
                        <PopoverDescription className="text-xs truncate">{user?.email}</PopoverDescription>
                      </div>
                    </div>
                  </PopoverHeader>
                  <PopoverBody className="space-y-1 px-2 py-1.5">
                    <Link to={dashboardLink} className="no-underline">
                      <button className="w-full flex items-center gap-2 px-3 py-2 text-sm text-stone-700 hover:text-stone-900 hover:bg-stone-100 dark:text-stone-300 dark:hover:text-stone-50 dark:hover:bg-white/5 rounded-md transition-colors text-left cursor-pointer bg-transparent border-0">
                        <LayoutDashboard className="w-4 h-4" />
                        Dashboard
                      </button>
                    </Link>
                    <Link to={profileLink} className="no-underline">
                      <button className="w-full flex items-center gap-2 px-3 py-2 text-sm text-stone-700 hover:text-stone-900 hover:bg-stone-100 dark:text-stone-300 dark:hover:text-stone-50 dark:hover:bg-white/5 rounded-md transition-colors text-left cursor-pointer bg-transparent border-0">
                        <Settings className="w-4 h-4" />
                        Settings
                      </button>
                    </Link>
                  </PopoverBody>
                  <PopoverFooter>
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center justify-center gap-2 px-3 py-2 text-sm text-stone-700 hover:text-stone-900 bg-stone-100 hover:bg-stone-200 dark:text-stone-300 dark:hover:text-stone-50 dark:bg-white/5 dark:hover:bg-white/10 rounded-md transition-colors cursor-pointer border border-stone-200 dark:border-white/10"
                    >
                      <LogOut className="w-4 h-4" />
                      Sign Out
                    </button>
                  </PopoverFooter>
                </PopoverContent>
              </Popover>
            ) : (
              <>
                <Link to="/login" className="no-underline">
                  <button className="px-3 py-1.5 text-sm text-stone-600 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-50 transition-colors font-medium rounded-md bg-transparent border-0 cursor-pointer">
                    Sign In
                  </button>
                </Link>
                <Link to="/register" className="no-underline">
                  <button className="px-4 py-2 bg-lime-400 text-stone-950 text-sm font-bold rounded-md hover:bg-lime-300 transition-colors cursor-pointer border-0">
                    Start free
                  </button>
                </Link>
              </>
            )}
          </div>

          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 text-stone-500 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-50 rounded-md transition-colors"
            >
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            {isAuthenticated && (
              <Popover modal>
                <PopoverTrigger asChild>
                  <button className="h-9 w-9 rounded-md cursor-pointer border border-stone-200 dark:border-white/10 p-0 bg-transparent overflow-hidden">
                    <Avatar className="h-full w-full rounded-none">
                      {user?.profilePic && (
                        <AvatarImage src={user.profilePic} alt={user?.name ?? ""} />
                      )}
                      <AvatarFallback className="rounded-none">
                        {user?.name?.charAt(0).toUpperCase() ?? "U"}
                      </AvatarFallback>
                    </Avatar>
                  </button>
                </PopoverTrigger>
                <PopoverContent align="end" sideOffset={8} className="w-60">
                  <PopoverHeader>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-10 w-10 rounded-md">
                        {user?.profilePic && (
                          <AvatarImage src={user.profilePic} alt={user?.name ?? ""} />
                        )}
                        <AvatarFallback className="rounded-md">
                          {user?.name?.charAt(0).toUpperCase() ?? "U"}
                        </AvatarFallback>
                      </Avatar>
                      <div className="min-w-0">
                        <PopoverTitle className="text-sm truncate">{user?.name}</PopoverTitle>
                        <PopoverDescription className="text-xs truncate">{user?.email}</PopoverDescription>
                      </div>
                    </div>
                  </PopoverHeader>
                  <PopoverBody className="space-y-1 px-2 py-1.5">
                    <Link to={dashboardLink} className="no-underline">
                      <button className="w-full flex items-center gap-2 px-3 py-2 text-sm text-stone-700 hover:bg-stone-100 dark:text-stone-300 dark:hover:bg-white/5 rounded-md transition-colors text-left cursor-pointer bg-transparent border-0">
                        <LayoutDashboard className="w-4 h-4" />
                        Dashboard
                      </button>
                    </Link>
                    <Link to={profileLink} className="no-underline">
                      <button className="w-full flex items-center gap-2 px-3 py-2 text-sm text-stone-700 hover:bg-stone-100 dark:text-stone-300 dark:hover:bg-white/5 rounded-md transition-colors text-left cursor-pointer bg-transparent border-0">
                        <Settings className="w-4 h-4" />
                        Settings
                      </button>
                    </Link>
                  </PopoverBody>
                  <PopoverFooter>
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center justify-center gap-2 px-3 py-2 text-sm text-stone-700 bg-stone-100 hover:bg-stone-200 dark:text-stone-300 dark:bg-white/5 dark:hover:bg-white/10 rounded-md transition-colors cursor-pointer border border-stone-200 dark:border-white/10"
                    >
                      <LogOut className="w-4 h-4" />
                      Sign Out
                    </button>
                  </PopoverFooter>
                </PopoverContent>
              </Popover>
            )}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-stone-700 hover:bg-stone-200/60 dark:text-stone-300 dark:hover:bg-white/5 rounded-md transition-colors"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden lg:hidden"
            >
              <div className="pt-2 pb-4 space-y-1 border-t border-stone-200 dark:border-white/10">
                {NAV_ITEMS.map((item) => (
                  <MobileNavLink key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
                    {item.label}
                  </MobileNavLink>
                ))}
                <div className="pt-3 space-y-2">
                  {isAuthenticated ? (
                    <>
                      <Link to={dashboardLink} onClick={() => setIsOpen(false)}
                        className="block px-3 py-2 text-sm text-stone-700 dark:text-stone-300 font-medium rounded-md hover:bg-stone-100 dark:hover:bg-white/5 no-underline">
                        Dashboard
                      </Link>
                      <button onClick={() => { handleLogout(); setIsOpen(false); }}
                        className="w-full px-3 py-2 text-sm text-stone-700 dark:text-stone-300 font-medium text-left rounded-md hover:bg-stone-100 dark:hover:bg-white/5 bg-transparent border-0">
                        Logout
                      </button>
                    </>
                  ) : (
                    <>
                      <Link to="/login" onClick={() => setIsOpen(false)}
                        className="block px-3 py-2 text-sm text-stone-700 dark:text-stone-300 font-medium rounded-md hover:bg-stone-100 dark:hover:bg-white/5 no-underline">
                        Sign In
                      </Link>
                      <Link to="/register" onClick={() => setIsOpen(false)} className="block no-underline">
                        <button className="w-full px-4 py-2.5 bg-lime-400 text-stone-950 text-sm font-bold rounded-md hover:bg-lime-300 transition-colors border-0">
                          Start free
                        </button>
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}

function MobileNavLink({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <Link
      to={href}
      onClick={onClick}
      className="block px-3 py-2 text-sm text-stone-700 hover:text-stone-900 hover:bg-stone-100 dark:text-stone-300 dark:hover:text-stone-50 dark:hover:bg-white/5 rounded-md transition-all font-medium no-underline"
    >
      {children}
    </Link>
  );
}

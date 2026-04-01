import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Settings, LogOut, LayoutDashboard, Sun, Moon } from "lucide-react";
import { useState, useMemo } from "react";
import { Link, useNavigate, useLocation } from "react-router";
import { useAuthStore } from "../lib/auth.store";
import { useThemeStore } from "../lib/theme.store";
import GooeyNav from "./reactbits/GooeyNav";
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

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Jobs", href: "/jobs" },
  { label: "Learn", href: "/learn" },
  { label: "Companies", href: "/companies" },
  { label: "Blog", href: "/blog" },
];

export function Navbar({ sidebarOffset = 0 }: { sidebarOffset?: number }) {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated, user, logout } = useAuthStore();
  const { theme, toggleTheme } = useThemeStore();
  const navigate = useNavigate();
  const location = useLocation();

  const initialNavIndex = useMemo(() => {
    const idx = NAV_ITEMS.findIndex((item) => item.href === location.pathname);
    return idx >= 0 ? idx : 0;
  }, [location.pathname]);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const dashboardLink = user?.role === "ADMIN" ? "/admin" : user?.role === "RECRUITER" ? "/recruiters" : "/student/applications";
  const profileLink = user?.role === "RECRUITER" ? "/recruiters/profile" : "/student/profile";

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 right-0 z-40"
      style={{ left: sidebarOffset, transition: "left 300ms" }}
    >
      <div className="mx-auto max-w-6xl px-4 pt-4">
        <div className="glass rounded-2xl border border-black/8 dark:border-white/10 shadow-lg shadow-gray-200/70 dark:shadow-black/20 px-5 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 no-underline">
              <img src="/logo.png" alt="InternHack" className="h-9 w-9 rounded-xl object-contain" />
              <span className="font-display text-xl font-bold text-gray-950 dark:text-white">
                InternHack
              </span>
            </Link>

            {/* Desktop Menu - GooeyNav */}
            <div className="hidden lg:flex items-center">
              <GooeyNav
                items={NAV_ITEMS}
                initialActiveIndex={initialNavIndex}
                animationTime={500}
                particleCount={12}
                particleDistances={[70, 10]}
                particleR={80}
                timeVariance={200}
                colors={[1, 2, 3, 1, 2, 3, 1, 4]}
                onItemClick={(href) => navigate(href)}
                className="[--gooey-color-1:theme(--color-indigo-400)] [--gooey-color-2:theme(--color-violet-400)] [--gooey-color-3:theme(--color-sky-400)] [--gooey-color-4:theme(--color-emerald-400)]"
              />
            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-2">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 text-gray-500 hover:text-gray-950 hover:bg-black/5 dark:text-white/50 dark:hover:text-white dark:hover:bg-white/10 rounded-xl transition-colors"
                title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              >
                {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>

              {isAuthenticated ? (
                <Popover>
                  <PopoverTrigger asChild>
                    <button className="h-9 w-9 rounded-full cursor-pointer border-0 p-0 bg-transparent">
                      <Avatar className="h-9 w-9">
                        {user?.profilePic && (
                          <AvatarImage src={user.profilePic} alt={user?.name ?? ""} />
                        )}
                        <AvatarFallback>
                          {user?.name?.charAt(0).toUpperCase() ?? "U"}
                        </AvatarFallback>
                      </Avatar>
                    </button>
                  </PopoverTrigger>
                  <PopoverContent align="end" sideOffset={8} className="w-60">
                    <PopoverHeader>
                      <div className="flex items-center gap-3">
                        <Avatar className="h-10 w-10">
                          {user?.profilePic && (
                            <AvatarImage src={user.profilePic} alt={user?.name ?? ""} />
                          )}
                          <AvatarFallback>
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
                        <button className="w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:text-gray-950 hover:bg-black/5 dark:text-white/70 dark:hover:text-white dark:hover:bg-white/10 rounded-lg transition-colors text-left cursor-pointer bg-transparent border-0">
                          <LayoutDashboard className="w-4 h-4" />
                          Dashboard
                        </button>
                      </Link>
                      <Link to={profileLink} className="no-underline">
                        <button className="w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:text-gray-950 hover:bg-black/5 dark:text-white/70 dark:hover:text-white dark:hover:bg-white/10 rounded-lg transition-colors text-left cursor-pointer bg-transparent border-0">
                          <Settings className="w-4 h-4" />
                          Settings
                        </button>
                      </Link>
                    </PopoverBody>
                    <PopoverFooter>
                      <button
                        onClick={handleLogout}
                        className="w-full flex items-center justify-center gap-2 px-3 py-2 text-sm text-gray-600 hover:text-gray-950 bg-black/3 hover:bg-black/5 dark:text-white/70 dark:hover:text-white dark:bg-white/5 dark:hover:bg-white/10 rounded-lg transition-colors cursor-pointer border border-black/8 dark:border-white/10"
                      >
                        <LogOut className="w-4 h-4" />
                        Sign Out
                      </button>
                    </PopoverFooter>
                  </PopoverContent>
                </Popover>
              ) : (
                <>
                  <Link to="/for-recruiters" className="no-underline">
                    <button className="px-4 py-2 text-sm text-gray-600 hover:text-gray-950 dark:text-white/60 dark:hover:text-white transition-colors font-medium rounded-xl hover:bg-black/5 dark:hover:bg-white/10">
                      For Recruiters
                    </button>
                  </Link>
                  <Link to="/login" className="no-underline">
                    <button className="px-4 py-2 text-sm text-gray-600 hover:text-gray-950 dark:text-white/60 dark:hover:text-white transition-colors font-medium rounded-xl hover:bg-black/5 dark:hover:bg-white/10">
                      Sign In
                    </button>
                  </Link>
                  <Link to="/register" className="no-underline">
                    <button className="px-5 py-2 bg-gray-950 text-white dark:bg-white dark:text-gray-950 text-sm font-semibold rounded-xl hover:bg-gray-800 dark:hover:bg-white/90 transition-all shadow-sm">
                      Get Started
                    </button>
                  </Link>
                </>
              )}
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={toggleTheme}
                className="p-2 text-gray-500 hover:text-gray-950 hover:bg-black/5 dark:text-white/50 dark:hover:text-white dark:hover:bg-white/10 rounded-xl transition-colors"
              >
                {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-gray-700 hover:bg-black/5 dark:text-white/70 dark:hover:bg-white/10 rounded-xl transition-colors"
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden lg:hidden"
              >
                <div className="pt-4 pb-2 space-y-1 border-t border-black/8 dark:border-white/10 mt-3">
                  <MobileNavLink href="/" onClick={() => setIsOpen(false)}>Home</MobileNavLink>
                  <MobileNavLink href="/jobs" onClick={() => setIsOpen(false)}>Jobs</MobileNavLink>
                  <MobileNavLink href="/learn" onClick={() => setIsOpen(false)}>Learn</MobileNavLink>
                  <MobileNavLink href="/companies" onClick={() => setIsOpen(false)}>Companies</MobileNavLink>
                  <MobileNavLink href="/blog" onClick={() => setIsOpen(false)}>Blog</MobileNavLink>
                  <div className="pt-3 space-y-2">
                    {isAuthenticated ? (
                      <>
                        <Link to={dashboardLink} onClick={() => setIsOpen(false)}
                          className="block px-4 py-2.5 text-sm text-gray-600 hover:text-gray-950 dark:text-white/60 dark:hover:text-white font-medium rounded-xl hover:bg-black/5 dark:hover:bg-white/10 no-underline">
                          Dashboard
                        </Link>
                        <button onClick={() => { handleLogout(); setIsOpen(false); }}
                          className="w-full px-4 py-2.5 text-sm text-gray-600 hover:text-gray-950 dark:text-white/60 dark:hover:text-white font-medium text-left rounded-xl hover:bg-black/5 dark:hover:bg-white/10">
                          Logout
                        </button>
                      </>
                    ) : (
                      <>
                        <Link to="/for-recruiters" onClick={() => setIsOpen(false)}
                          className="block px-4 py-2.5 text-sm text-gray-600 hover:text-gray-950 dark:text-white/60 dark:hover:text-white font-medium rounded-xl hover:bg-black/5 dark:hover:bg-white/10 no-underline">
                          For Recruiters
                        </Link>
                        <Link to="/login" onClick={() => setIsOpen(false)}
                          className="block px-4 py-2.5 text-sm text-gray-600 hover:text-gray-950 dark:text-white/60 dark:hover:text-white font-medium rounded-xl hover:bg-black/5 dark:hover:bg-white/10 no-underline">
                          Sign In
                        </Link>
                        <Link to="/register" onClick={() => setIsOpen(false)} className="block no-underline">
                          <button className="w-full px-5 py-2.5 bg-gray-950 text-white dark:bg-white dark:text-gray-950 text-sm font-semibold rounded-xl hover:bg-gray-800 dark:hover:bg-white/90 transition-all">
                            Get Started
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
      className="block px-4 py-2.5 text-sm text-gray-600 hover:text-gray-950 hover:bg-black/5 dark:text-white/60 dark:hover:text-white dark:hover:bg-white/10 rounded-xl transition-all font-medium no-underline"
    >
      {children}
    </Link>
  );
}

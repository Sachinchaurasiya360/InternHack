import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, User, Sun, Moon } from "lucide-react";
import { useState, useMemo } from "react";
import { Link, useNavigate, useLocation } from "react-router";
import { useAuthStore } from "../lib/auth.store";
import { useThemeStore } from "../lib/theme.store";
import GooeyNav from "./reactbits/GooeyNav";

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

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 right-0 z-40"
      style={{ left: sidebarOffset, transition: "left 300ms" }}
    >
      <div className="mx-auto max-w-6xl px-4 pt-4">
        <div className="glass rounded-2xl border border-white/60 dark:border-white/10 shadow-lg shadow-black/3 dark:shadow-black/20 px-5 py-3">
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
                className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-950 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl transition-colors"
                title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              >
                {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>

              {isAuthenticated ? (
                <>
                  <Link to={dashboardLink} className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-950 dark:hover:text-white transition-colors font-medium no-underline rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800">
                    <User className="w-4 h-4" />
                    {user?.name}
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-950 dark:hover:text-white transition-colors font-medium rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link to="/for-recruiters" className="no-underline">
                    <button className="px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-950 dark:hover:text-white transition-colors font-medium rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800">
                      For Recruiters
                    </button>
                  </Link>
                  <Link to="/login" className="no-underline">
                    <button className="px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-950 dark:hover:text-white transition-colors font-medium rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800">
                      Sign In
                    </button>
                  </Link>
                  <Link to="/register" className="no-underline">
                    <button className="px-5 py-2 bg-gray-950 dark:bg-white text-white dark:text-gray-950 text-sm font-semibold rounded-xl hover:bg-gray-800 dark:hover:bg-gray-200 transition-all shadow-sm">
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
                className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-950 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl transition-colors"
              >
                {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-colors"
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
                <div className="pt-4 pb-2 space-y-1 border-t border-gray-100 dark:border-gray-700 mt-3">
                  <MobileNavLink href="/" onClick={() => setIsOpen(false)}>Home</MobileNavLink>
                  <MobileNavLink href="/jobs" onClick={() => setIsOpen(false)}>Jobs</MobileNavLink>
                  <MobileNavLink href="/learn" onClick={() => setIsOpen(false)}>Learn</MobileNavLink>
                  <MobileNavLink href="/companies" onClick={() => setIsOpen(false)}>Companies</MobileNavLink>
                  <MobileNavLink href="/blog" onClick={() => setIsOpen(false)}>Blog</MobileNavLink>
                  <div className="pt-3 space-y-2">
                    {isAuthenticated ? (
                      <>
                        <Link to={dashboardLink} onClick={() => setIsOpen(false)}
                          className="block px-4 py-2.5 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-950 dark:hover:text-white font-medium rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 no-underline">
                          Dashboard
                        </Link>
                        <button onClick={() => { handleLogout(); setIsOpen(false); }}
                          className="w-full px-4 py-2.5 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-950 dark:hover:text-white font-medium text-left rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800">
                          Logout
                        </button>
                      </>
                    ) : (
                      <>
                        <Link to="/for-recruiters" onClick={() => setIsOpen(false)}
                          className="block px-4 py-2.5 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-950 dark:hover:text-white font-medium rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 no-underline">
                          For Recruiters
                        </Link>
                        <Link to="/login" onClick={() => setIsOpen(false)}
                          className="block px-4 py-2.5 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-950 dark:hover:text-white font-medium rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 no-underline">
                          Sign In
                        </Link>
                        <Link to="/register" onClick={() => setIsOpen(false)} className="block no-underline">
                          <button className="w-full px-5 py-2.5 bg-gray-950 dark:bg-white text-white dark:text-gray-950 text-sm font-semibold rounded-xl hover:bg-gray-800 dark:hover:bg-gray-200 transition-all">
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
      className="block px-4 py-2.5 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-950 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl transition-all font-medium no-underline"
    >
      {children}
    </Link>
  );
}

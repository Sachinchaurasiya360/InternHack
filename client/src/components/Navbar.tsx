import { motion, AnimatePresence } from "framer-motion";
import { Zap, Menu, X, User } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useAuthStore } from "../lib/auth.store";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated, user, logout } = useAuthStore();
  const navigate = useNavigate();

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
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="mx-auto max-w-6xl px-4 pt-4">
        <div className="glass rounded-2xl border border-white/60 shadow-lg shadow-black/3 px-5 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 no-underline">
              <div className="w-9 h-9 bg-gray-950 flex items-center justify-center rounded-xl">
                <Zap className="w-5 h-5 text-white fill-white" />
              </div>
              <span className="font-display text-xl font-bold text-gray-950">
                InternHack
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-0.5">
              <NavItem href="/">Home</NavItem>
              <NavItem href="/jobs">Jobs</NavItem>
              <NavItem href="/external-jobs">External Jobs</NavItem>
              <NavItem href="/careers">Careers</NavItem>
              <NavItem href="/companies">Companies</NavItem>
              {!isAuthenticated && <NavItem href="/recruiters">For Recruiters</NavItem>}
            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-2">
              {isAuthenticated ? (
                <>
                  <Link to={dashboardLink} className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 hover:text-gray-950 transition-colors font-medium no-underline rounded-xl hover:bg-gray-50">
                    <User className="w-4 h-4" />
                    {user?.name}
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="px-4 py-2 text-sm text-gray-600 hover:text-gray-950 transition-colors font-medium rounded-xl hover:bg-gray-50"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login" className="no-underline">
                    <button className="px-4 py-2 text-sm text-gray-600 hover:text-gray-950 transition-colors font-medium rounded-xl hover:bg-gray-50">
                      Sign In
                    </button>
                  </Link>
                  <Link to="/register" className="no-underline">
                    <button className="px-5 py-2 bg-gray-950 text-white text-sm font-semibold rounded-xl hover:bg-gray-800 transition-all shadow-sm">
                      Get Started
                    </button>
                  </Link>
                </>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-xl transition-colors"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
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
                <div className="pt-4 pb-2 space-y-1 border-t border-gray-100 mt-3">
                  <MobileNavLink href="/" onClick={() => setIsOpen(false)}>Home</MobileNavLink>
                  <MobileNavLink href="/jobs" onClick={() => setIsOpen(false)}>Jobs</MobileNavLink>
                  <MobileNavLink href="/external-jobs" onClick={() => setIsOpen(false)}>External Jobs</MobileNavLink>
                  <MobileNavLink href="/careers" onClick={() => setIsOpen(false)}>Careers</MobileNavLink>
                  <MobileNavLink href="/companies" onClick={() => setIsOpen(false)}>Companies</MobileNavLink>
                  <div className="pt-3 space-y-2">
                    {isAuthenticated ? (
                      <>
                        <Link to={dashboardLink} onClick={() => setIsOpen(false)}
                          className="block px-4 py-2.5 text-sm text-gray-600 hover:text-gray-950 font-medium rounded-xl hover:bg-gray-50 no-underline">
                          Dashboard
                        </Link>
                        <button onClick={() => { handleLogout(); setIsOpen(false); }}
                          className="w-full px-4 py-2.5 text-sm text-gray-600 hover:text-gray-950 font-medium text-left rounded-xl hover:bg-gray-50">
                          Logout
                        </button>
                      </>
                    ) : (
                      <>
                        <Link to="/login" onClick={() => setIsOpen(false)}
                          className="block px-4 py-2.5 text-sm text-gray-600 hover:text-gray-950 font-medium rounded-xl hover:bg-gray-50 no-underline">
                          Sign In
                        </Link>
                        <Link to="/register" onClick={() => setIsOpen(false)} className="block no-underline">
                          <button className="w-full px-5 py-2.5 bg-gray-950 text-white text-sm font-semibold rounded-xl hover:bg-gray-800 transition-all">
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

function NavItem({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link to={href} className="no-underline">
      <span className="block px-3 py-1.5 text-sm text-gray-500 hover:text-gray-950 hover:bg-gray-50 rounded-lg transition-all font-medium cursor-pointer">
        {children}
      </span>
    </Link>
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
      className="block px-4 py-2.5 text-sm text-gray-600 hover:text-gray-950 hover:bg-gray-50 rounded-xl transition-all font-medium no-underline"
    >
      {children}
    </Link>
  );
}

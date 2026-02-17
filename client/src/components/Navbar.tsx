import { motion } from "framer-motion";
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
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 glass border-b border-black/5"
    >
      <div className="max-w-7xl mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 no-underline">
            <motion.div whileHover={{ scale: 1.02 }}>
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-black to-gray-700 flex items-center justify-center rounded-xl shadow-lg">
                  <Zap className="w-6 h-6 text-white fill-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
              </div>
            </motion.div>
            <div>
              <span className="text-2xl font-bold bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent">
                InternHack
              </span>
              <div className="text-[10px] text-gray-500 -mt-1 font-medium tracking-wider">
                PREPARE &bull; PRACTICE &bull; PLACED
              </div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1">
            <NavItem href="/">Home</NavItem>
            <NavItem href="/hackathons">Hackathons</NavItem>
            <NavItem href="/jobs">Jobs</NavItem>
            <NavItem href="/external-jobs">External Jobs</NavItem>
            <NavItem href="/careers">Careers</NavItem>
            <NavItem href="/interview-prep">Interview Prep</NavItem>
            <NavItem href="/ai-interview">AI Interview</NavItem>
            {!isAuthenticated && <NavItem href="/recruiters">For Recruiters</NavItem>}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            {isAuthenticated ? (
              <>
                <Link to={dashboardLink} className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:text-black transition-colors font-medium no-underline">
                  <User className="w-4 h-4" />
                  {user?.name}
                </Link>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleLogout}
                  className="px-5 py-2 text-sm text-gray-700 hover:text-black transition-colors font-medium"
                >
                  Logout
                </motion.button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-5 py-2 text-sm text-gray-700 hover:text-black transition-colors font-medium"
                  >
                    Sign In
                  </motion.button>
                </Link>
                <Link to="/register">
                  <motion.button
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-2.5 bg-black text-white text-sm font-semibold rounded-xl hover:bg-gray-800 transition-all shadow-lg"
                  >
                    Get Started Free
                  </motion.button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-black hover:bg-black/5 rounded-lg transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
          className="overflow-hidden lg:hidden"
        >
          <div className="py-4 space-y-1">
            <MobileNavLink href="/">Home</MobileNavLink>
            <MobileNavLink href="/hackathons">Hackathons</MobileNavLink>
            <MobileNavLink href="/jobs">Jobs</MobileNavLink>
            <MobileNavLink href="/external-jobs">External Jobs</MobileNavLink>
            <MobileNavLink href="/careers">Careers</MobileNavLink>
            <MobileNavLink href="/interview-prep">Interview Prep</MobileNavLink>
            <MobileNavLink href="/ai-interview">AI Interview</MobileNavLink>
            <div className="pt-4 space-y-2">
              {isAuthenticated ? (
                <>
                  <Link to={dashboardLink}
                    className="block px-5 py-2.5 text-sm text-gray-700 hover:text-black transition-colors font-medium text-left rounded-lg hover:bg-black/5 no-underline">
                    Dashboard
                  </Link>
                  <button onClick={handleLogout}
                    className="w-full px-5 py-2.5 text-sm text-gray-700 hover:text-black transition-colors font-medium text-left rounded-lg hover:bg-black/5">
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login"
                    className="block px-5 py-2.5 text-sm text-gray-700 hover:text-black transition-colors font-medium text-left rounded-lg hover:bg-black/5 no-underline">
                    Sign In
                  </Link>
                  <Link to="/register" className="block no-underline">
                    <button className="w-full px-6 py-2.5 bg-black text-white text-sm font-semibold rounded-xl hover:bg-gray-800 transition-all shadow-lg">
                      Get Started Free
                    </button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </motion.div>
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
    <Link to={href}>
      <motion.span
        whileHover={{ scale: 1.05 }}
        className="block px-4 py-2 text-sm text-gray-700 hover:text-black hover:bg-black/5 rounded-lg transition-all font-medium cursor-pointer"
      >
        {children}
      </motion.span>
    </Link>
  );
}

function MobileNavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      to={href}
      className="block px-4 py-2.5 text-sm text-gray-700 hover:text-black hover:bg-black/5 rounded-lg transition-all font-medium no-underline"
    >
      {children}
    </Link>
  );
}

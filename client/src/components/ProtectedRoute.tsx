import { useEffect } from "react";
import { Navigate, useLocation } from "react-router";
import toast from "react-hot-toast";
import { useAuthStore } from "../lib/auth.store";
import type { UserRole } from "../lib/types";

function RedirectWithToast({ to }: { to: string }) {
  useEffect(() => {
    toast.error("Please login to access this resource");
  }, []);
  return <Navigate to={to} replace />;
}

interface ProtectedRouteProps {
  children: React.ReactNode;
  role?: UserRole;
  redirectTo?: string;
}

export function ProtectedRoute({ children, role, redirectTo = "/login" }: ProtectedRouteProps) {
  const { isAuthenticated, user } = useAuthStore();
  const location = useLocation();

  if (!isAuthenticated) {
    const target = redirectTo === "/login"
      ? `/login?from=${encodeURIComponent(location.pathname + location.search)}`
      : redirectTo;
    return <RedirectWithToast to={target} />;
  }

  if (user && !user.isVerified && user.role !== "ADMIN") {
    return <Navigate to={`/verify-email?email=${encodeURIComponent(user.email)}`} replace />;
  }

  if (role && user?.role !== role) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
}

import { Navigate, useLocation } from "react-router";
import { useAuthStore } from "../lib/auth.store";
import type { UserRole } from "../lib/types";

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
    return <Navigate to={target} replace />;
  }

  if (user && !user.isVerified && user.role !== "ADMIN") {
    return <Navigate to={`/verify-email?email=${encodeURIComponent(user.email)}`} replace />;
  }

  if (role && user?.role !== role) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
}

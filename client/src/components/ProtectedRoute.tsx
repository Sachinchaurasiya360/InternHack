import { Navigate } from "react-router";
import { useAuthStore } from "../lib/auth.store";
import type { UserRole } from "../lib/types";

interface ProtectedRouteProps {
  children: React.ReactNode;
  role?: UserRole;
  redirectTo?: string;
}

export function ProtectedRoute({ children, role, redirectTo = "/login" }: ProtectedRouteProps) {
  const { isAuthenticated, user } = useAuthStore();

  if (!isAuthenticated) {
    return <Navigate to={redirectTo} replace />;
  }

  if (role && user?.role !== role) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
}

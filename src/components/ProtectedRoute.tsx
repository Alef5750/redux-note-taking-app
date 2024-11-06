import { FC, ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/auth-hooks";

interface ProtectedRouteProps {
  children: ReactNode;
}

export const ProtectedRoute: FC<ProtectedRouteProps> = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};
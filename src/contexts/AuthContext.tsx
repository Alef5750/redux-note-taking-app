import React, { ReactNode } from "react";
import { AuthContextType } from "../types";
import { AuthContext } from "../hooks/auth-hooks";

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = React.useState<boolean>(false);

  const login = (): void => setIsAuthenticated(true);
  const logout = (): void => setIsAuthenticated(false);

  const value: AuthContextType = {
    isAuthenticated,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// AuthContext.tsx
import React, { createContext, useState, useEffect } from "react";

interface AuthContextType {
  isAuthenticated: boolean;
  token: string | null;
  userId: string | null
  setToken: (token: string | null) => void;
  login: (id: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  token: null,
  userId: null,
  setToken: () => {},
  login: () => {},
  logout: () => {},
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState<string | null>(null);
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    const access_token = localStorage.getItem("token");
    if (access_token) {
      setToken(access_token);
      setIsAuthenticated(true);
    }
  }, []);

  const login = (id: string) => {
    setToken(id);
    setIsAuthenticated(true);
    setUserId(id); // Store the user's id
    localStorage.setItem('token', id);
  };

  const logout = () => {
    setToken(null);
    setIsAuthenticated(false);
    setUserId(null)
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, token, setToken, logout, login, userId }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

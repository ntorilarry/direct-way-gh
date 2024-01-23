// AuthContext.tsx
import React, { createContext, useState, useEffect } from "react";

interface AuthContextType {
  token: string | null;
  setToken: (token: string | null) => void;
  logout: () => void;
  login: () => void;
}

const AuthContext = createContext<AuthContextType>({
  token: null,
  setToken: () => {},
  logout: () => {},
  login: () => {},
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    // Check if the user has a token (you can implement your token validation logic here)
    const access_token = localStorage.getItem("token");
    if (access_token) {
      setToken(access_token);
    }
  }, []);

  const login = () => {
    const access_token = localStorage.getItem("token");
    if (access_token) {
      setToken(access_token);
    }
  };


  const logout = () => {
    setToken(null);
    localStorage.removeItem("token");
  };


  return (
    <AuthContext.Provider value={{ token, setToken, logout, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

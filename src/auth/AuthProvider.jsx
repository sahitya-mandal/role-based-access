import React ,{ createContext,useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const raw = localStorage.getItem("role_demo_user");
    return raw ? JSON.parse(raw) : null;
  });

  useEffect(() => {
    if (user) localStorage.setItem("role_demo_user", JSON.stringify(user));
    else localStorage.removeItem("role_demo_user");
  }, [user]);
  const login = (payload) => setUser(payload);
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const Auth = () => useContext(AuthContext)

import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";

export default function Login() {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const auth = useAuth();
  const from = location.state?.from?.pathname || "/";

  function handleSubmit(e) {
    e.preventDefault();
    auth.login(name, role);
    navigate(from, { replace: true });
  }
  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: <input value={name} onChange={(e) => setName(e.target.value)} /></label>
        </div>
        <div style={{ marginTop: 8 }}>
          <label>Role: <select value={role} onChange={(e) => setRole(e.target.value)} style={{ marginLeft: 6 }}>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
          </label>
        </div>
        <div style={{ marginTop: 8 }}>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}
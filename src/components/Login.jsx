import React, { useState } from "react";

function Login({ onClose }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username === "admin" && password === "1234") {
      alert("Login successful!");
      onClose();
    } else {
      alert("Wrong username or password");
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        top: "20%",
        left: "50%",
        transform: "translateX(-50%)",
        background: "#fff",
        padding: "50px",
        borderRadius: "20px",
        boxShadow: "0 10px 50px rgba(0,0,0,0.3)",
        zIndex: 1000,
      }}
    >
      <h2>Login Page</h2>
      <input
        type="text"
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <br />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <br />
      <button onClick={handleLogin}>Login</button>
      <br />
      <br />
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default Login;

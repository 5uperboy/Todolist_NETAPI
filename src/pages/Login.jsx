import { useState } from "react";
import "./css/login.css";
import { Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:5281/api/Users", {
        username,
        password,
      });

      if (response.status === 200) {
        const { token } = response.data;
        localStorage.setItem("token", token);
        console.log("Login successful");
      } else {
        console.error("Login failed");
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <form className="login-form">
      <div className="login-form-wrap">
        <h1>Sign In</h1>
        <label className="login-form-label">Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="login-form-input"
        />
        <label className="login-form-label">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login-form-input"
        />
        <button onClick={handleLogin} className="login-form-btn">
          Login
        </button>
        <p style={{ textAlign: "center", marginTop: "15px" }}>
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </form>
  );
};

export default Login;

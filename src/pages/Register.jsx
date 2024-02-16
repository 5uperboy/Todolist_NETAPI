import { useState } from "react";
import "./css/register.css";
import { Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setconfirmPass] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPass) {
      alert("Passwords do not match");
    } else {
      try {
        const response = await axios.post("http://localhost:5281/api/Users", {
          username,
          password,
        });

        if (response.status === 200) {
          console.log("Registration successful");
        } else {
          console.error("Registration failed");
        }
      } catch (error) {
        console.error("Registration failed:", error);
      }
    }
  };

  return (
    <form className="register-form">
      <div className="register-form-wrap">
        <h1 className="register-form-title">Create An Acount</h1>
        <label className="register-form-label">Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="register-form-input"
        />
        <label className="register-form-label">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="register-form-input"
        />
        <label className="register-form-label">Confirm Password</label>
        <input
          type="password"
          value={confirmPass}
          onChange={(e) => setconfirmPass(e.target.value)}
          className="register-form-input"
        />
        <button onClick={handleRegister} className="register-form-btn">
          Register
        </button>
        <p style={{ textAlign: "center", marginTop: "15px" }}>
          Already have an account? <Link to="/">Login</Link>
        </p>
      </div>
    </form>
  );
};

export default Register;

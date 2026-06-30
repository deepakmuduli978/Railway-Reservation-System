import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/authService";
import { FaEnvelope, FaLock, FaTrain, FaTimes } from "react-icons/fa";

const Login = ({ close, openRegister }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
const handleLogin = async (e) => {
  e.preventDefault();

  try {

    const response = await loginUser({
      email,
      password,
    });
    alert("Login Successful");

    close();

    window.location.href = "/dashboard";

  } catch (error) {

    alert(
      error.response?.data?.message ||
      "Invalid Email or Password"
    );

  }
};
  return (
    <div className="login-modal">

      <div className="login-card">

        <button
          className="close-login"
          onClick={close}
        >
          <FaTimes />
        </button>

        <div className="login-logo">
          <FaTrain />
          <h2>RailReserve</h2>
        </div>

        <h1>Welcome Back 👋</h1>

        <p>Login to continue your railway journey</p>

        <form onSubmit={handleLogin}>

          <div className="input-group">

            <FaEnvelope />

            <input
              type="email"
              placeholder="Enter Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

          </div>

          <div className="input-group">

            <FaLock />

            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

          </div>

          <div className="remember">

            <label>

              <input type="checkbox" />

              Remember Me

            </label>

            <button
              type="button"
              className="forgot-btn"
            >
              Forgot Password?
            </button>

          </div>

          <button
            type="submit"
            className="login-btn"
          >
            Login
          </button>

        </form>

        <div className="or-line">
          <span>OR</span>
        </div>

        <div className="social-login">

          <button>Google</button>

          <button>GitHub</button>

        </div>

        <p className="register-text">

          Don't have an account?

          <button
            className="switch-btn"
            onClick={openRegister}
          >
            Register
          </button>

        </p>

      </div>

    </div>
  );
};

export default Login;
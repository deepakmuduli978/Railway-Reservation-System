import React, { useState } from "react";
import "./Register.css";
import { registerUser } from "../services/authService";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaLock,
  FaTrain,
  FaTimes,
} from "react-icons/fa";

const Register = ({ close, openLogin }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async (e) => {
  e.preventDefault();

  if (form.password !== form.confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  try {
    const data = await registerUser({
      name: form.name,
      email: form.email,
      phone: form.phone,
      password: form.password,
      
    });

    alert(data.message);

    close();
    openLogin();

  } catch (error) {
    alert(error.response?.data?.message || "Registration Failed");
  }
};
  return (
    <div className="register-modal">
      <div className="register-card">

        <button
          className="close-register"
          onClick={close}
        >
          <FaTimes />
        </button>

        <div className="register-logo">
          <FaTrain />
          <h2>RailReserve</h2>
        </div>

        <h1>Create Account</h1>

        <p>Join RailReserve and start booking tickets</p>

        <form onSubmit={handleRegister}>

          <div className="input-group">
            <FaUser />
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <FaEnvelope />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <FaPhone />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <FaLock />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <FaLock />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={form.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="register-btn"
          >
            Create Account
          </button>

        </form>

        <div className="register-links">

          <p>

            Already have an account?

            <button
              className="switch-btn"
              onClick={openLogin}
            >
              Login
            </button>

          </p>

        </div>

      </div>
    </div>
  );
};

export default Register;
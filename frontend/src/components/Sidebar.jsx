import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import {
  FaHome,
  FaSearch,
  FaTicketAlt,
  FaClipboardList,
  FaTimesCircle,
  FaMapMarkerAlt,
  FaFileAlt,
  FaCreditCard,
  FaHeart,
  FaBell,
  FaUser,
  FaCog,
  FaQuestionCircle,
  FaSignOutAlt,
  FaTrain,
  FaTimes,
} from "react-icons/fa";

import { NavLink, useNavigate } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";

const Sidebar = ({ isOpen, closeSidebar }) => {

  const navigate = useNavigate();

  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    alert("Logout Successful");

    navigate("/");

    window.location.reload();
  };

  return (
    <>
      {showLogin && (
        <Login
          close={() => setShowLogin(false)}
          openRegister={() => {
            setShowLogin(false);
            setShowRegister(true);
          }}
        />
      )}

      {showRegister && (
        <Register
          close={() => setShowRegister(false)}
          openLogin={() => {
            setShowRegister(false);
            setShowLogin(true);
          }}
        />
      )}

      <div className={isOpen ? "sidebar active" : "sidebar"}>
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>

        {/* Logo */}
        <div className="logo">
          <FaTrain className="logo-icon" />
          <h2>RailReserve</h2>
        </div>

        {/* Menu */}
        <ul className="menu">

          <li>
            <NavLink to="/dashboard">
              <FaHome /> Dashboard
            </NavLink>
          </li>

          <li>
            <NavLink to="/search-trains">
              <FaSearch /> Search Trains
            </NavLink>
          </li>

          <li>
            <NavLink to="/book-ticket">
              <FaTicketAlt /> Book Ticket
            </NavLink>
          </li>

          <li>
            <NavLink to="/my-bookings">
              <FaClipboardList /> My Bookings
            </NavLink>
          </li>

          <li>
            <NavLink to="/cancel-ticket">
              <FaTimesCircle /> Cancel Ticket
            </NavLink>
          </li>

          <li>
            <NavLink to="/track-train">
              <FaMapMarkerAlt /> Track Train
            </NavLink>
          </li>

          <li>
            <NavLink to="/pnr-status">
              <FaFileAlt /> PNR Status
            </NavLink>
          </li>

          <li>
            <NavLink to="/payment-history">
              <FaCreditCard /> Payment History
            </NavLink>
          </li>

          <li>
            <NavLink to="/favorites">
              <FaHeart /> Favorite Routes
            </NavLink>
          </li>

          <li>
            <NavLink to="/notifications">
              <FaBell /> Notifications
            </NavLink>
          </li>

          <li>
            <NavLink to="/profile">
              <FaUser /> Profile
            </NavLink>
          </li>

          <li>
            <NavLink to="/settings">
              <FaCog /> Settings
            </NavLink>
          </li>

          <li>
            <NavLink to="/help">
              <FaQuestionCircle /> Help & Support
            </NavLink>
          </li>

        </ul>

        {/* Bottom */}

        <div className="bottom">

          {user ? (
            <>
              <div className="user">

                <div className="avatar">
                  {user.name.charAt(0).toUpperCase()}
                </div>

                <div>
                  <h4>{user.name}</h4>
                  <p>{user.email}</p>
                </div>

              </div>

              <button
                className="logout"
                onClick={handleLogout}
              >
                <FaSignOutAlt />
                Logout
              </button>

            </>
          ) : (
            <>
              <div className="user">

                <div className="avatar">
                  G
                </div>

                <div>
                  <h4>Guest User</h4>
                  <p>Please Login</p>
                </div>

              </div>

              <button
                className="logout"
                onClick={() => setShowLogin(true)}
              >
                <FaSignOutAlt />
                Login
              </button>

            </>
          )}

        </div>

      </div>
    </>
  );
};

export default Sidebar;
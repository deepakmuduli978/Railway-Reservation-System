import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaBars } from "react-icons/fa";
import { useEffect, useState } from "react";

function Navbar({ openSidebar, openLogin, openRegister }) {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <nav className="navbar">
      <button className="menu-btn" onClick={openSidebar}>
        <FaBars />
      </button>

      <div className="logo">
        <Link to="/">RailReserve</Link>
      </div>

      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/search-trains">Search Trains</Link>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>

        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      <div className="auth-btn">
        {!isLoggedIn && (
          <>
            <button className="login-btn" onClick={openLogin}>
              Login
            </button>

            <button className="register-btn" onClick={openRegister}>
              Register
            </button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
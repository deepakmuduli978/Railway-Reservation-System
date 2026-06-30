import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import axios from "axios";

import {
  FaTicketAlt,
  FaCalendarCheck,
  FaTimesCircle,
  FaWallet,
  FaSearch,
} from "react-icons/fa";

import trainBanner from "../assets/dashboard-train.png";

const Dashboard = () => {

  const [open, setOpen] = useState(false);

  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user"))
  );

  const [dashboard, setDashboard] = useState({
    totalBookings: 0,
    bookedTickets: 0,
    cancelledTickets: 0,
    totalAmount: 0,
  });

  useEffect(() => {
    fetchDashboard();
    fetchProfile();
  }, []);

  const fetchDashboard = async () => {
    try {

      const token = localStorage.getItem("token");

      const res = await axios.get(
        "http://localhost:5000/api/dashboard",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setDashboard(res.data.dashboard);

    } catch (error) {
      console.log(error);
    }
  };

  const fetchProfile = async () => {
    try {

      const token = localStorage.getItem("token");

      const res = await axios.get(
        "http://localhost:5000/api/user/profile",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setUser(res.data.user);

      localStorage.setItem(
        "user",
        JSON.stringify(res.data.user)
      );

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar
        openSidebar={() => setOpen(true)}
      />

      <Sidebar
        isOpen={open}
        closeSidebar={() => setOpen(false)}
      />

      <div className="dashboard-container">

        {/* Hero Section */}

        <section className="dashboard-hero">

          <div className="dashboard-hero-left">

            <h1>
              Welcome Back, {user?.name || "Guest"} 👋
            </h1>

            <p>
              Plan your next railway journey with RailReserve.
            </p>

            <button className="dashboard-search-btn">
              <FaSearch />
              Search Trains
            </button>

          </div>

          <div className="dashboard-hero-right">

            <img
              src={trainBanner}
              alt="Train"
            />

          </div>

        </section>

        {/* Statistics */}

        <section className="dashboard-stats">

          <div className="dashboard-card">

            <div className="dashboard-icon blue">
              <FaTicketAlt />
            </div>

            <div>

              <h3>Total Bookings</h3>

              <h2>{dashboard.totalBookings}</h2>

              <span className="green">
                Total Tickets
              </span>

            </div>

          </div>

          <div className="dashboard-card">

            <div className="dashboard-icon green-bg">
              <FaCalendarCheck />
            </div>

            <div>

              <h3>Booked Tickets</h3>

              <h2>{dashboard.bookedTickets}</h2>

              <span className="green">
                Active Bookings
              </span>

            </div>

          </div>

          <div className="dashboard-card">

            <div className="dashboard-icon orange">
              <FaTimesCircle />
            </div>

            <div>

              <h3>Cancelled Tickets</h3>

              <h2>{dashboard.cancelledTickets}</h2>

              <span className="red">
                Cancelled
              </span>

            </div>

          </div>

          <div className="dashboard-card">

            <div className="dashboard-icon purple">
              <FaWallet />
            </div>

            <div>

              <h3>Total Spent</h3>

              <h2>₹{dashboard.totalAmount}</h2>

              <span>
                Total Fare
              </span>

            </div>

          </div>

        </section>

      </div>
    </>
  );
};

export default Dashboard;
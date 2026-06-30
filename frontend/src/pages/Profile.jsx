import React, { useState } from "react";
import "./Profile.css";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";


import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaBirthdayCake,
  FaVenusMars,
  FaTicketAlt,
  FaTrain,
  FaTimesCircle,
  FaEdit,
  FaLock,
  FaCamera,
} from "react-icons/fa";

const Profile = () => {
    const [open, setOpen] = useState(false);

  const [profileImage, setProfileImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setProfileImage(URL.createObjectURL(file));
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
    <div className="profile-container">

      <div className="profile-card">

        {/* ================= HEADER ================= */}

        <div className="profile-header">

          <div className="profile-image-wrapper">

            <label htmlFor="upload-photo">

              {profileImage ? (
                <img
                  src={profileImage}
                  alt="Profile"
                  className="profile-image"
                />
              ) : (
                <div className="default-profile">
                  <FaUser />
                </div>
              )}

              <div className="camera-icon">
                <FaCamera />
              </div>

            </label>

            <input
              type="file"
              id="upload-photo"
              accept="image/*"
              hidden
              onChange={handleImageChange}
            />

          </div>

          <h1>Deepak Muduli</h1>

          <p>MCA Student</p>

        </div>

        {/* ================= PERSONAL INFO ================= */}

        <div className="profile-section">

          <h2>Personal Information</h2>

          <div className="profile-grid">

            <div className="profile-item">
              <FaUser />
              <div>
                <span>Name</span>
                <h4>Deepak Muduli</h4>
              </div>
            </div>

            <div className="profile-item">
              <FaEnvelope />
              <div>
                <span>Email</span>
                <h4>deepak@gmail.com</h4>
              </div>
            </div>

            <div className="profile-item">
              <FaPhone />
              <div>
                <span>Mobile</span>
                <h4>9876543210</h4>
              </div>
            </div>

            <div className="profile-item">
              <FaVenusMars />
              <div>
                <span>Gender</span>
                <h4>Male</h4>
              </div>
            </div>

            <div className="profile-item">
              <FaBirthdayCake />
              <div>
                <span>Date of Birth</span>
                <h4>13 August 2004</h4>
              </div>
            </div>

            <div className="profile-item">
              <FaMapMarkerAlt />
              <div>
                <span>Location</span>
                <h4>Berhampur, Odisha</h4>
              </div>
            </div>

          </div>

        </div>

        {/* ================= BOOKING SUMMARY ================= */}

        <div className="profile-section">

          <h2>Booking Summary</h2>

          <div className="summary-grid">

            <div className="summary-card">
              <FaTicketAlt />
              <h3>12</h3>
              <p>Total Bookings</p>
            </div>

            <div className="summary-card">
              <FaTrain />
              <h3>3</h3>
              <p>Upcoming Trips</p>
            </div>

            <div className="summary-card">
              <FaTimesCircle />
              <h3>2</h3>
              <p>Cancelled Tickets</p>
            </div>

          </div>

        </div>

        {/* ================= BUTTONS ================= */}

        <div className="profile-buttons">

          <button className="edit-btn">
            <FaEdit />
            Edit Profile
          </button>

          <button className="password-btn">
            <FaLock />
            Change Password
          </button>

        </div>

      </div>

    </div>
    </>
  );
};

export default Profile;
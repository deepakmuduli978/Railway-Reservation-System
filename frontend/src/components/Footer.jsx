import React from 'react'
import './Footer.css'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import footerBg from "../assets/footer-bg.png";

const Footer = () => {
  return (<>
 {/* ================= FOOTER ================= */}

    <footer className="footer">

    <div className="footer-container">

        <div className="footer-box">

        <h2 className="footer-logo">
            🚆 Railway Reservation
        </h2>

        <p>
            Your trusted partner for easy, fast and secure train ticket booking across India.
        </p>

        <div className="social-icons">
            <a href="#" target="_blank" rel="noopener noreferrer">
                <FaFacebookF />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn />
            </a>
        </div>

        </div>

        <div className="footer-box">

        <h3>Quick Links</h3>

        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Search Trains</a></li>
            <li><a href="#">My Bookings</a></li>
            <li><a href="#">Cancellation</a></li>
            <li><a href="#">Contact</a></li>
        </ul>

        </div>

        <div className="footer-box">

        <h3>Information</h3>

        <ul>
            <li><a href="#">How It Works</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
        </ul>

        </div>

        <div className="footer-box">

        <h3>Contact Us</h3>

        <p>📞 +91 9876543210</p>
        <p>📧 support@railwayreservation.com</p>
        <p>📍 Berhampur, Odisha, India</p>

        </div>

        <div className="footer-box">

        <h3>Newsletter</h3>

        <p>Subscribe to receive the latest offers and updates.</p>

        <input
            type="email"
            placeholder="Enter your email"
        />

        <button className="subscribe-btn">
            Subscribe
        </button>

        </div>

    </div>

    <hr />

    <div className="footer-bottom">

        <p>
        © 2026 Railway Reservation System. All Rights Reserved.
        </p>

        <p>
        Made with ❤️ by <strong>Deepak Muduli</strong>
        </p>

        <p>
        🔒 Secure Railway Ticket Booking
        </p>

    </div>

    </footer></>
    )
}

export default Footer
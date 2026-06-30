import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";


import "./Home.css";
import bookingLogo from "../assets/instantBooking.png";
import seatLogo from "../assets/seat.png";
import cancelLogo from "../assets/easycancle.png";
import paymentLogo from "../assets/securepayment.png";
import supportLogo from "../assets/support.png";
import mobileLogo from "../assets/mobilefrindly.png";
import feature1 from "../assets/features.png";



import routeBg from "../assets/Routes.png";

import delhiMumbai from "../assets/delhi-mumbai.png";
import mumbaiBangalore from "../assets/mumbai.png";
import hyderabadChennai from "../assets/hydrabad.png";
import kolkataDelhi from "../assets/kolkata.png";
import bangaloreMysore from "../assets/bengalure.png";
import kolkataGuwahati from "../assets/guwahati.png";
import chennaiCoimbatore from "../assets/chennai.png";
import jaipurUdaipur from "../assets/jaypur.png";

import Footer from "../components/Footer";
import Login from "./Login";
import Register from "./Register";

import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  FaUser,
  FaEnvelope,
  FaPaperPlane,
  FaPen,
  FaStar,
} from "react-icons/fa";



const Home = () => {
    const navigate = useNavigate();
    
    const [search, setSearch] = useState({
        from: "",
        to: "",
        date: "",
        });
        
        const [trains, setTrains] = useState([]);
        useEffect(() => {
         console.log("Home Loaded");
        }, []);
        const handleChange = (e) => {
        setSearch({
            ...search,
            [e.target.name]: e.target.value,
        });
        };
        const searchTrain = async () => {
        try {
            const res = await axios.get(
            `http://localhost:5000/api/train/search?from=${search.from}&to=${search.to}`
            );

            console.log(res.data);

            setTrains(res.data.trains);

        } catch (error) {
            console.log(error);
        }
        };
               
        const [rating, setRating] = useState(0);
        const [open, setOpen] = useState(false);
        const [showLogin, setShowLogin] = useState(false);
        const [showRegister, setShowRegister] = useState(false);

      


  return (
    <>
      <Navbar
                openSidebar={() => setOpen(true)}
                openLogin={() => setShowLogin(true)}
                openRegister={() => setShowRegister(true)}
            />
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
          <Sidebar
        isOpen={open}
        closeSidebar={() => setOpen(false)}
      />
      <div className="home">

        {/* Hero Section */}
        <section className="hero">
          <div className="hero-content">
            <h1>Book Your Train Journey with Ease</h1>
            <p>
              Fast • Secure • Reliable Railway Reservation System
            </p>

            <div className="hero-buttons">
             <button
                    className="search-btn"
                    onClick={() => navigate("/search")}
                    >
                    Search Trains
                    </button>

                    <button
                    className="book-btn"
                    onClick={() => navigate("/login")}
                    >
                    Book Ticket
                    </button>
            </div>
          </div>
        </section>

        {/* Search Train Section */}
{/* Search Train Section */}
    <section className="search-section">

    <h2>Search Trains</h2>

    <div className="search-box">

        <input
        type="text"
        name="from"
        placeholder="From Station"
        value={search.from}
        onChange={handleChange}
        />

        <input
        type="text"
        name="to"
        placeholder="To Station"
        value={search.to}
        onChange={handleChange}
        />

        <input
        type="date"
        name="date"
        value={search.date}
        onChange={handleChange}
        />

        <button
        className="search-btn"
        onClick={searchTrain}
        >
        Search Trains
        </button>

    </div>

    {trains.length > 0 ? (

        <div className="train-results">

        <h3>Available Trains</h3>

        {trains.map((train) => (

            <div
            className="train-card"
            key={train._id}
            >

            <h4>{train.trainName}</h4>

            <p>
                <strong>Train No:</strong> {train.trainNo}
            </p>

            <p>
                <strong>Route:</strong> {train.from} ➜ {train.to}
            </p>

            <p>
                <strong>Departure:</strong> {train.departure}
            </p>

            <p>
                <strong>Arrival:</strong> {train.arrival}
            </p>

            <button
                className="book-btn"
                onClick={() =>
                navigate("/book-ticket", {
                    state: {
                    train,
                    date: search.date,
                    },
                })
                }
            >
                Book Now
            </button>

            </div>

        ))}

        </div>

    ) : (

        <p className="no-train">
        No trains found.
        </p>

    )}

    </section>

      {/* ================= OUR FEATURES ================= */}

    <section className="features">

    <div className="feature-overlay">

        <h2>OUR FEATURES</h2>

        <p className="feature-text">
        We offer a range of services to make your train journey
        smooth, convenient and hassle-free.
        </p>

        <div className="feature-container">

        <div className="feature-card">
            <img src={bookingLogo} alt="Train Booking" />
            <h3>Train Booking</h3>
            <p>Book your train tickets instantly from anywhere.</p>
        </div>

        <div className="feature-card">
            <img src={seatLogo} alt="Seat Availability" />
            <h3>Seat Availability</h3>
            <p>Check real-time seat availability before booking.</p>
        </div>

        <div className="feature-card">
            <img src={cancelLogo} alt="Easy Cancellation" />
            <h3>Easy Cancellation</h3>
            <p>Cancel tickets in just a few simple steps.</p>
        </div>

        <div className="feature-card">
            <img src={paymentLogo} alt="Secure Payment" />
            <h3>Secure Payment</h3>
            <p>100% secure online payment gateway.</p>
        </div>

        <div className="feature-card">
            <img src={supportLogo} alt="Support" />
            <h3>24×7 Support</h3>
            <p>Our support team is always ready to help.</p>
        </div>

        <div className="feature-card">
            <img src={mobileLogo} alt="Mobile Friendly" />
            <h3>Mobile Friendly</h3>
            <p>Book tickets anytime using your mobile.</p>
        </div>

        </div>

    </div>

    </section>

      {/* ================= POPULAR ROUTES ================= */}

        <section
        className="routes"
        style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,.72),rgba(0,0,0,.72)), url(${routeBg})`,
        }}
        >
        <h2>POPULAR ROUTES</h2>

        <p className="route-subtitle">
            Explore India's most travelled railway routes
        </p>

        <div className="route-container">

            <div className="route-card">
            <img src={delhiMumbai} alt="" />
            <div className="route-info">
                <h3>Delhi → Mumbai</h3>
                <p>🕒 16h 35m &nbsp; | &nbsp; 📍1245 km</p>
                <h4>From ₹1,240</h4>
            </div>
            </div>

            <div className="route-card">
            <img src={mumbaiBangalore} alt="" />
            <div className="route-info">
                <h3>Mumbai → Bangalore</h3>
                <p>🕒 15h 20m &nbsp; | &nbsp; 📍981 km</p>
                <h4>From ₹1,180</h4>
            </div>
            </div>

            <div className="route-card">
            <img src={hyderabadChennai} alt="" />
            <div className="route-info">
                <h3>Hyderabad → Chennai</h3>
                <p>🕒 12h 50m &nbsp; | &nbsp; 📍627 km</p>
                <h4>From ₹980</h4>
            </div>
            </div>

            <div className="route-card">
            <img src={kolkataDelhi} alt="" />
            <div className="route-info">
                <h3>Kolkata → Delhi</h3>
                <p>🕒 17h 45m &nbsp; | &nbsp; 📍1465 km</p>
                <h4>From ₹1,360</h4>
            </div>
            </div>

            <div className="route-card">
            <img src={bangaloreMysore} alt="" />
            <div className="route-info">
                <h3>Bangalore → Mysore</h3>
                <p>🕒 2h 30m &nbsp; | &nbsp; 📍139 km</p>
                <h4>From ₹250</h4>
            </div>
            </div>

            <div className="route-card">
            <img src={kolkataGuwahati} alt="" />
            <div className="route-info">
                <h3>Kolkata → Guwahati</h3>
                <p>🕒 10h 25m &nbsp; | &nbsp; 📍515 km</p>
                <h4>From ₹720</h4>
            </div>
            </div>

            <div className="route-card">
            <img src={chennaiCoimbatore} alt="" />
            <div className="route-info">
                <h3>Chennai → Coimbatore</h3>
                <p>🕒 5h 35m &nbsp; | &nbsp; 📍498 km</p>
                <h4>From ₹420</h4>
            </div>
            </div>

            <div className="route-card">
            <img src={jaipurUdaipur} alt="" />
            <div className="route-info">
                <h3>Jaipur → Udaipur</h3>
                <p>🕒 6h 15m &nbsp; | &nbsp; 📍396 km</p>
                <h4>From ₹510</h4>
            </div>
            </div>

        </div>
        </section>
        
   {/* ================= CUSTOMER REVIEWS ================= */}

        <section className="review-section">

        <h2 className="review-heading">Customer Reviews</h2>

        <p className="review-subtitle">
            We value your feedback! Share your experience with us.
        </p>

        <div className="review-wrapper">

            {/* Left Side */}

            <div className="review-form-card">

            <h3>Write a Review</h3>

            <div className="review-line"></div>

            <div className="review-row">

                <div className="review-input">

                <label>Your Name</label>

                <div className="input-box">

                    <FaUser className="icon"/>

                    <input
                    type="text"
                    placeholder="Enter your name"
                    />

                </div>

                </div>

                <div className="review-input">

                <label>Email Address</label>

                <div className="input-box">

                    <FaEnvelope className="icon"/>

                    <input
                    type="email"
                    placeholder="Enter your email"
                    />

                </div>

                </div>

            </div>

            <label className="rating-title">
                Rating
            </label>

            <div className="rating-stars">

                {[1,2,3,4,5].map((star)=>(
                <FaStar
                    key={star}
                    className={star<=rating ? "star active":"star"}
                    onClick={()=>setRating(star)}
                />
                ))}

                <span>Click to rate</span>

            </div>

            <label>Your Review</label>

            <div className="textarea-box">

                <FaPen className="textarea-icon"/>

                <textarea
                rows="5"
                placeholder="Share your experience..."
                ></textarea>

            </div>

            <button className="submit-review">

                <FaPaperPlane />

                Submit Review

            </button>

            </div>

            {/* Right Side */}

            <div className="review-info-card">

            <h3>What our customers say</h3>

            <img
                src={feature1}
                alt="Customer Reviews"
                className="review-image"
            />

            <p>
                Your feedback helps us improve and serve you better.
            </p>

            </div>

        </div>

        </section>
        <Footer />
      </div>
    </>
  );
};

export default Home;
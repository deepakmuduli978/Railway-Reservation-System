import React, { useState, useEffect } from "react";
import "./BookTicket.css";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import axios from "axios";

const BookTicket = () => {

  const [open, setOpen] = useState(false);

  const [trains, setTrains] = useState([]);

  const [ticket, setTicket] = useState({
    fullname: "",
    age: "",
    gender: "",
    mobile: "",
    email: "",
    from: "",
    to: "",
    date: "",
    train: "",
    travelClass: "",
    seats: 1,
  });

  useEffect(() => {
    getAllTrains();
  }, []);
  const selectedTrain = trains.find(
  (train) => train._id === ticket.train
  );

  const getAllTrains = async () => {
    try {

      const res = await axios.get(
        "http://localhost:5000/api/train/all"
      );

      setTrains(res.data.trains);

    } catch (error) {

      console.log(error);

    }
  };

  const handleChange = (e) => {

    setTicket({
      ...ticket,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const token = localStorage.getItem("token");
      const selectedClass = selectedTrain.classes.find(
          (cls) => cls.className === ticket.travelClass
        );

    const totalFare =Number(ticket.seats) * selectedClass.price;


      await axios.post(

        "http://localhost:5000/api/booking/book",

        {
          train: ticket.train,
          passengerName: ticket.fullname,
          age: ticket.age,
          gender: ticket.gender,
          mobile: ticket.mobile,
          email: ticket.email,
          journeyDate: ticket.date,
          travelClass: ticket.travelClass,
          seats: ticket.seats,
          totalFare: totalFare,
        },

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }

      );

      alert("Ticket Booked Successfully");

      setTicket({
        fullname: "",
        age: "",
        gender: "",
        mobile: "",
        email: "",
        from: "",
        to: "",
        date: "",
        train: "",
        travelClass: "",
        seats: 1,
      });

    } catch (error) {

      alert(
        error.response?.data?.message ||
        "Booking Failed"
      );

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

    <div className="book-ticket-container">

      <div className="book-ticket-card">

        <h1>🚆 Book Train Ticket</h1>

        <form onSubmit={handleSubmit}>

          <h2>Passenger Details</h2>

          <div className="form-grid">

            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                name="fullname"
                placeholder="Enter Full Name"
                value={ticket.fullname}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Age</label>
              <input
                type="number"
                name="age"
                value={ticket.age}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Gender</label>

              <select
                name="gender"
                value={ticket.gender}
                onChange={handleChange}
                required
              >
                <option value="">Select Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>

            </div>

            <div className="form-group">
              <label>Mobile</label>

              <input
                type="text"
                name="mobile"
                value={ticket.mobile}
                onChange={handleChange}
                required
              />

            </div>

            <div className="form-group">
              <label>Email</label>

              <input
                type="email"
                name="email"
                value={ticket.email}
                onChange={handleChange}
                required
              />

            </div>

          </div>

          <h2>Journey Details</h2>

          <div className="form-grid">

            <div className="form-group">

              <label>Journey Date</label>

              <input
                type="date"
                name="date"
                value={ticket.date}
                onChange={handleChange}
                required
              />

            </div>

            <div className="form-group">

              <label>Select Train</label>

              <select
                name="train"
                value={ticket.train}
                onChange={handleChange}
                required
              >

                <option value="">
                  Select Train
                </option>

                {trains.map((train) => (

                  <option
                    key={train._id}
                    value={train._id}
                  >
                    {train.trainName} ({train.trainNo})
                  </option>

                ))}

              </select>

            </div>

            <div className="form-group">

              <label>Travel Class</label>
              <select
                name="travelClass"
                value={ticket.travelClass}
                onChange={handleChange}
                required
              >

              <option value="">Select Class</option>

              {selectedTrain &&
                selectedTrain.classes.map((cls) => (
                  <option
                    key={cls.className}
                    value={cls.className}
                  >
                    {cls.className} - ₹{cls.price}
                  </option>
                ))}

              </select>
              {ticket.travelClass && selectedTrain && (
            <div className="fare-box">
              Fare per Seat: ₹
              {
                selectedTrain.classes.find(
                  (cls) => cls.className === ticket.travelClass
                )?.price
              }
            </div>
          )}

            </div>

            <div className="form-group">

              <label>No. of Seats</label>

              <select
                name="seats"
                value={ticket.seats}
                onChange={handleChange}
              >

                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>

              </select>

            </div>

          </div>

          <div className="button-group">

            <button
              type="button"
              className="reset-btn"
              onClick={() =>
              setTicket({
              fullname:"",
              age:"",
              gender:"",
              mobile:"",
              email:"",
              from:"",
              to:"",
              date:"",
              train:"",
              travelClass:"",
              seats:1
              })
              }
              >
              Reset
              </button>

            <button
              type="submit"
              className="book-btn"
            >
              Book Ticket
            </button>

          </div>

        </form>

      </div>

    </div>

  </>
);

};

export default BookTicket;
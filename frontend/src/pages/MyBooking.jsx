import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import "./MyBooking.css";

const MyBookings = () => {

  const [open, setOpen] = useState(false);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    getMyBookings();
  }, []);

  const getMyBookings = async () => {
    try {

      const token = localStorage.getItem("token");

      const res = await axios.get(
        "http://localhost:5000/api/booking/my-bookings",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setBookings(res.data.bookings);

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar openSidebar={() => setOpen(true)} />

      <Sidebar
        isOpen={open}
        closeSidebar={() => setOpen(false)}
      />

      <div className="my-bookings-container">

        <h1>🚆 My Bookings</h1>

        <table>

                    <thead>
            <tr>
                <th>PNR</th>
                <th>Train No</th>
                <th>Train Name</th>
                <th>Passenger</th>
                <th>Journey Date</th>
                <th>Travel Class</th>
                <th>Seats</th>
                <th>Total Fare</th>
            </tr>
            </thead>

         <tbody>

            {bookings.length > 0 ? (

            bookings.map((booking) => (

            <tr key={booking._id}>

            <td>{booking.pnr}</td>

            <td>{booking.train?.trainNo}</td>

            <td>{booking.train?.trainName}</td>

            <td>{booking.passengerName}</td>

            <td>{booking.journeyDate}</td>

            <td>{booking.travelClass}</td>

            <td>{booking.seats}</td>

            <td>₹{booking.totalFare}</td>

            </tr>

            ))

            ) : (

            <tr>
            <td colSpan="8">
            No Booking Found
            </td>
            </tr>

            )}

            </tbody>
        </table>

      </div>

    </>
  );
};

export default MyBookings;
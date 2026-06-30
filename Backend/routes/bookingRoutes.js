const express = require("express");

const router = express.Router();

const protect = require("../middleware/authMiddleware").protect;

const {
  bookTicket,
  getMyBookings,
} = require("../controllers/bookingController");

router.post("/book", protect, bookTicket);

router.get("/my-bookings", protect, getMyBookings);

module.exports = router;

const Booking = require("../models/Booking");

function generatePNR() {
  return Math.floor(
    1000000000 + Math.random() * 9000000000
  ).toString();
}

// Book Ticket
exports.bookTicket = async (req, res) => {
  try {

    const booking = await Booking.create({
      ...req.body,
      user: req.user.id,
      pnr: generatePNR(),
    });

    res.status(201).json({
      success: true,
      message: "Ticket Booked Successfully",
      booking,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};
exports.getMyBookings = async (req, res) => {
  const bookings = await Booking.find({
    user: req.user.id,
  }).populate("train");

  res.json({
    success: true,
    bookings,
  });
};
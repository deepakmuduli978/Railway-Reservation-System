const Booking = require("../models/Booking");

exports.getDashboard = async (req, res) => {
  try {

    const userId = req.user.id;

    // Total Bookings
    const totalBookings = await Booking.countDocuments({
      user: userId
    });

    // Booked Tickets
    const bookedTickets = await Booking.countDocuments({
      user: userId,
      status: "Booked"
    });

    // Cancelled Tickets
    const cancelledTickets = await Booking.countDocuments({
      user: userId,
      status: "Cancelled"
    });

    // Total Amount Spent
    const bookings = await Booking.find({
      user: userId,
      status: "Booked"
    });

    let totalAmount = 0;

    bookings.forEach((booking) => {
      totalAmount += booking.totalFare;
    });

    // Recent Bookings
    const recentBookings = await Booking.find({
      user: userId
    })
      .populate("train")
      .sort({ createdAt: -1 })
      .limit(5);

    res.status(200).json({
      success: true,
      dashboard: {
        totalBookings,
        bookedTickets,
        cancelledTickets,
        totalAmount,
        recentBookings
      }
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
};
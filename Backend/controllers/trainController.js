const Train = require("../models/Train");

// Add Train
exports.addTrain = async (req, res) => {
  try {
    const train = await Train.create(req.body);

    res.status(201).json({
      success: true,
      message: "Train Added Successfully",
      train,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get All Trains
exports.getAllTrains = async (req, res) => {
  try {
    const trains = await Train.find();

    res.status(200).json({
      success: true,
      count: trains.length,
      trains,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Search Train
exports.searchTrain = async (req, res) => {
  try {
    const { from, to } = req.query;

    const trains = await Train.find({
      from: { $regex: from || "", $options: "i" },
      to: { $regex: to || "", $options: "i" },
    });

    res.status(200).json({
      success: true,
      count: trains.length,
      trains,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
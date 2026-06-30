const express = require("express");

const router = express.Router();

const {
  addTrain,
  searchTrain,
  getAllTrains,
} = require("../controllers/trainController");

// Add Train
router.post("/add", addTrain);

// Get All Trains
router.get("/all", getAllTrains);

// Search Train
router.get("/search", searchTrain);

module.exports = router;
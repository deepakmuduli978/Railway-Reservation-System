const mongoose = require("mongoose");

const trainSchema = new mongoose.Schema(
  {
    trainNo: {
      type: String,
      required: true,
      unique: true,
    },

    trainName: {
      type: String,
      required: true,
    },

    from: {
      type: String,
      required: true,
    },

    to: {
      type: String,
      required: true,
    },

    departure: {
      type: String,
      required: true,
    },

    arrival: {
      type: String,
      required: true,
    },

    duration: {
      type: String,
      required: true,
    },

    classes: [
      {
        className: {
          type: String,
          required: true,
        },

        price: {
          type: Number,
          required: true,
        },

        seats: {
          type: Number,
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Train", trainSchema);
const mongoose = require("mongoose");

const educationSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    institute: {
      type: String,
      required: true,
    },

    degree: {
      type: String,
      required: true,
    },

    field: {
      type: String,
      default: "",
    },

    startYear: {
      type: String,
      required: true,
    },

    endYear: {
      type: String,
      required: true,
    },

    grade: {
      type: String,
      default: "",
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Education", educationSchema);

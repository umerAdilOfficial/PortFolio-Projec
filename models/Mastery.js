const mongoose = require("mongoose");

const masterySchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    points: {
      type: [String], // array of skills/achievements
      default: [],
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Mastery", masterySchema);

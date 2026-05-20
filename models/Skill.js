const mongoose = require("mongoose");

const skillSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    name: {
      type: String,
      required: true,
    },

    percentage: {
      type: Number,
      required: true,
    },

    icon: {
      type: String,
      default: "",
    },

    category: {
      type: String,
      default: "Programming",
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Skill", skillSchema);

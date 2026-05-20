const mongoose = require("mongoose");

const certificationSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: String,
    platform: String,
    year: String,
    description: String,
    link: String,
  },
  { timestamps: true },
);

module.exports = mongoose.model("Certification", certificationSchema);

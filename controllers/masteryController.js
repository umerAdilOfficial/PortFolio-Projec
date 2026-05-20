const Mastery = require("../models/Mastery");

// ADD or UPDATE mastery
const addMastery = async (req, res) => {
  try {
    const existing = await Mastery.findOne({ userId: req.user.id });

    if (existing) {
      existing.points = req.body.points;
      await existing.save();

      return res.json({
        message: "Mastery Updated",
        mastery: existing,
      });
    }

    const mastery = await Mastery.create({
      userId: req.user.id,
      points: req.body.points,
    });

    res.status(201).json({
      message: "Mastery Added",
      mastery,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET mastery
const getMastery = async (req, res) => {
  try {
    const mastery = await Mastery.findOne({
      userId: req.params.userId,
    });

    res.json(mastery);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { addMastery, getMastery };

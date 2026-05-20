const Experience = require("../models/Experience");

// ADD EXPERIENCE
const addExperience = async (req, res) => {
  try {
    const experience = await Experience.create({
      ...req.body,
      userId: req.user.id,
    });

    res.status(201).json({
      message: "Experience Added",
      experience,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// GET EXPERIENCE (by user)
const getExperience = async (req, res) => {
  try {
    const experience = await Experience.find({
      userId: req.params.userId,
    });

    res.status(200).json(experience);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// UPDATE EXPERIENCE (secure)
const updateExperience = async (req, res) => {
  try {
    const experience = await Experience.findOneAndUpdate(
      {
        _id: req.params.id,
        userId: req.user.id,
      },
      req.body,
      { new: true },
    );

    if (!experience) {
      return res.status(404).json({
        message: "Experience not found or unauthorized",
      });
    }

    res.status(200).json({
      message: "Experience Updated",
      experience,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// DELETE EXPERIENCE (secure)
const deleteExperience = async (req, res) => {
  try {
    const experience = await Experience.findOneAndDelete({
      _id: req.params.id,
      userId: req.user.id,
    });

    if (!experience) {
      return res.status(404).json({
        message: "Experience not found or unauthorized",
      });
    }

    res.status(200).json({
      message: "Experience Deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  addExperience,
  getExperience,
  updateExperience,
  deleteExperience,
};

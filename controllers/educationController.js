const Education = require("../models/Education");

// ADD EDUCATION
const addEducation = async (req, res) => {
  try {
    const education = await Education.create({
      ...req.body,
      userId: req.user.id,
    });

    res.status(201).json({
      message: "Education Added",
      education,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// GET EDUCATION
const getEducation = async (req, res) => {
  try {
    const education = await Education.find({
      userId: req.params.userId,
    });

    res.status(200).json(education);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// UPDATE EDUCATION (secure)
const updateEducation = async (req, res) => {
  try {
    const education = await Education.findOneAndUpdate(
      {
        _id: req.params.id,
        userId: req.user.id,
      },
      req.body,
      { new: true },
    );

    if (!education) {
      return res.status(404).json({
        message: "Not found or unauthorized",
      });
    }

    res.status(200).json({
      message: "Education Updated",
      education,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// DELETE EDUCATION
const deleteEducation = async (req, res) => {
  try {
    const education = await Education.findOneAndDelete({
      _id: req.params.id,
      userId: req.user.id,
    });

    if (!education) {
      return res.status(404).json({
        message: "Not found or unauthorized",
      });
    }

    res.status(200).json({
      message: "Education Deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  addEducation,
  getEducation,
  updateEducation,
  deleteEducation,
};

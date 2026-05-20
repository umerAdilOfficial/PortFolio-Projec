const Certification = require("../models/Certification");

// ADD CERTIFICATION
const addCertification = async (req, res) => {
  try {
    const certification = await Certification.create({
      ...req.body,
      userId: req.user.id,
    });

    res.status(201).json({
      message: "Certification Added",
      certification,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// GET CERTIFICATIONS (by user)
const getCertification = async (req, res) => {
  try {
    const certifications = await Certification.find({
      userId: req.params.userId,
    });

    res.status(200).json(certifications);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// UPDATE CERTIFICATION (secure)
const updateCertification = async (req, res) => {
  try {
    const certification = await Certification.findOneAndUpdate(
      {
        _id: req.params.id,
        userId: req.user.id,
      },
      req.body,
      { new: true },
    );

    if (!certification) {
      return res.status(404).json({
        message: "Certification not found or unauthorized",
      });
    }

    res.status(200).json({
      message: "Certification Updated",
      certification,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// DELETE CERTIFICATION (secure)
const deleteCertification = async (req, res) => {
  try {
    const certification = await Certification.findOneAndDelete({
      _id: req.params.id,
      userId: req.user.id,
    });

    if (!certification) {
      return res.status(404).json({
        message: "Certification not found or unauthorized",
      });
    }

    res.status(200).json({
      message: "Certification Deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  addCertification,
  getCertification,
  updateCertification,
  deleteCertification,
};

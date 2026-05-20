const express = require("express");
const router = express.Router();

const protect = require("../middleware/auth");

const {
  addExperience,
  getExperience,
  updateExperience,
  deleteExperience,
} = require("../controllers/experienceController");

// PUBLIC (GET only)
router.get("/:userId", getExperience);

// PROTECTED ROUTES
router.post("/", protect, addExperience);
router.put("/:id", protect, updateExperience);
router.delete("/:id", protect, deleteExperience);

module.exports = router;

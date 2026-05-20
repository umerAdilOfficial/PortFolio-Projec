const express = require("express");
const router = express.Router();

const protect = require("../middleware/auth");

const {
  addEducation,
  getEducation,
  updateEducation,
  deleteEducation,
} = require("../controllers/educationController");

// PUBLIC
router.get("/:userId", getEducation);

// PROTECTED
router.post("/", protect, addEducation);
router.put("/:id", protect, updateEducation);
router.delete("/:id", protect, deleteEducation);

module.exports = router;

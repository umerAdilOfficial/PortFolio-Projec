const express = require("express");

const router = express.Router();

const protect = require("../middleware/auth");

const {
  addSkill,
  getSkills,
  updateSkill,
  deleteSkill,
} = require("../controllers/skillController");

// PUBLIC
router.get("/:userId", getSkills);

// PROTECTED
router.post("/", protect, addSkill);

router.put("/:id", protect, updateSkill);

router.delete("/:id", protect, deleteSkill);

module.exports = router;

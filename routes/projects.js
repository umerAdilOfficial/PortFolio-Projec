const express = require("express");

const router = express.Router();

const protect = require("../middleware/auth");

const {
  addProject,
  getProjects,
  updateProject,
  deleteProject,
} = require("../controllers/projectController");

// PUBLIC
router.get("/:userId", getProjects);

// PROTECTED
router.post("/", protect, addProject);

router.put("/:id", protect, updateProject);

router.delete("/:id", protect, deleteProject);

module.exports = router;

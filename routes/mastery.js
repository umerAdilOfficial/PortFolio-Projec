const express = require("express");
const router = express.Router();

const protect = require("../middleware/auth");

const { addMastery, getMastery } = require("../controllers/masteryController");

// PUBLIC (view mastery)
router.get("/:userId", getMastery);

// 🔒 PROTECTED (only logged-in user can edit)
router.post("/", protect, addMastery);

module.exports = router;

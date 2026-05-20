const express = require("express");

const router = express.Router();

const protect = require("../middleware/auth");

router.get("/profile", protect, (req, res) => {
  res.json({
    message: "Protected Route Accessed",
    user: req.user,
  });
});

module.exports = router;

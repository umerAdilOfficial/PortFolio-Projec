const express = require("express");
const router = express.Router();

const upload = require("../middleware/upload");

// SINGLE FILE UPLOAD
router.post("/image", upload.single("image"), (req, res) => {
  try {
    res.json({
      message: "File uploaded successfully",
      filePath: req.file.path,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;

const express = require("express");
const router = express.Router();

const protect = require("../middleware/auth");

const {
  addCertification,
  getCertification,
  updateCertification,
  deleteCertification,
} = require("../controllers/certificationController");

router.get("/:userId", getCertification);
router.post("/", protect, addCertification);
router.put("/:id", protect, updateCertification);
router.delete("/:id", protect, deleteCertification);

module.exports = router;

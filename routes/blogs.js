const express = require("express");
const router = express.Router();

const protect = require("../middleware/auth");

const {
  addBlog,
  getBlogs,
  updateBlog,
  deleteBlog,
} = require("../controllers/blogController");

// PUBLIC
router.get("/:userId", getBlogs);

// PROTECTED
router.post("/", protect, addBlog);
router.put("/:id", protect, updateBlog);
router.delete("/:id", protect, deleteBlog);

module.exports = router;

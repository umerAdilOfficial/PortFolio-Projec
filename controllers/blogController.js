const Blog = require("../models/Blog");

// ADD BLOG
const addBlog = async (req, res) => {
  try {
    const blog = await Blog.create({
      ...req.body,
      userId: req.user.id,
    });

    res.status(201).json({
      message: "Blog Added",
      blog,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// GET BLOGS
const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({
      userId: req.params.userId,
    });

    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// UPDATE BLOG
const updateBlog = async (req, res) => {
  try {
    const blog = await Blog.findOneAndUpdate(
      {
        _id: req.params.id,
        userId: req.user.id,
      },
      req.body,
      { new: true },
    );

    if (!blog) {
      return res.status(404).json({
        message: "Blog not found or unauthorized",
      });
    }

    res.status(200).json({
      message: "Blog Updated",
      blog,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// DELETE BLOG
const deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findOneAndDelete({
      _id: req.params.id,
      userId: req.user.id,
    });

    if (!blog) {
      return res.status(404).json({
        message: "Blog not found or unauthorized",
      });
    }

    res.status(200).json({
      message: "Blog Deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  addBlog,
  getBlogs,
  updateBlog,
  deleteBlog,
};

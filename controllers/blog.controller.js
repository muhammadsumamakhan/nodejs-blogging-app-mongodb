const { model, models } = require("mongoose");
const Blog = require("../models/blog");
const Comment = require("../models/comment");

const createBlog = async (req, res) => {
  try {
    const { title, body } = req.body;

    const blog = await Blog.create({
      title,
      body,
      coverImageUrl: req.file ? `/uploads/${req.file.filename}` : null,
      createdBy: req.user._id,
    });

    return res.redirect(`/blog/${blog._id}`);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Something went wrong");
  }
};




const getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id).populate("createdBy");
    const comment = await Comment.find({blogId: req.params.id}).populate("createdBy");
    console.log("blog createsBy:", blog);
    

    return res.render("blog", {
      user: req.user,
      blog,
      comment,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send("Something went wrong");
  }
};


const createComment = async (req, res) => {
  try {
    const { content } = req.body;

    const comment = await Comment.create({
      content,
      blogId: req.params.blogId,
      createdBy: req.user._id,
    });

    return res.redirect(`/blog/${req.params.blogId}`);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Something went wrong");
  }
};


module.exports = {
  createBlog,
  getBlogById,
  createComment,
};

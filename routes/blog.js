const { Router } = require("express");
const router = Router();
const multer = require("multer");
const path = require("path");
const {
  createBlog,
  getAllBlogs,
  getBlogById,
  createComment,
  updateBlog,
  deleteBlog,
} = require("../controllers/blog.controller");


router.get("/add-new-blog", (req, res) => {
  res.render("addBlog", {
    user: req.user,
  });
});



const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // cb(null, path.resolve(`./public/uploads/${req.user._id}`));
    cb(null, path.resolve(`./public/uploads/`));
  },
  filename: function (req, file, cb) {
    const fileName = `${Date.now()}-${file.originalname}`;
    cb(null,fileName)
  }
})

const upload = multer({ storage: storage })

// CREATE
router.post("/", upload.single("coverImageUrl"), createBlog);


// READ - single blog
router.get("/:id", getBlogById);

// Comment 
router.post( "/comment/:blogId", createComment);

// // READ - all blogs
// router.get("/", getAllBlogs);


// // UPDATE
// router.put("/:id", updateBlog);

// // DELETE
// router.delete("/:id", deleteBlog);

module.exports = router;

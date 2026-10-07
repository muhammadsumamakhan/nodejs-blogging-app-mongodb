require('dotenv').config()
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const userRouter = require("./routes/user");
const blogRouter = require("./routes/blog");
const { mongoDBconnect } = require("./database/db");
const { checkForAuthenticationCookie } = require("./middleware/authentication");
const Blog = require("./models/blog");

const app = express();
const PORT = process.env.PORT;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.resolve("./public")));

// cookie-parser middleware
app.use(cookieParser());

// authentication middleware
app.use(checkForAuthenticationCookie("token"));

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.get('/', async (req, res) => {
    if (!req.user) {
        return res.redirect("/user/signin");
    }
    const allBlog = await Blog.find({})
    res.render("home", { user: req.user, blog: allBlog });
});

app.use('/user', userRouter);
app.use('/blog', blogRouter);

mongoDBconnect();

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});

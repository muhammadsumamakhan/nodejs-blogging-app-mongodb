const { Router } = require("express");
const router = Router();
const {
  signinUser,
  signupUser,
  signoutUser,
} = require("../controllers/user.controller");

router.get("/signup", (req, res) => {
  res.render("signup");
});
router.post("/signup", signupUser);

router.get("/signin", (req, res) => {
  res.render("signin");
});

router.post("/signin", signinUser);

router.get("/signout", signoutUser);


module.exports = router;

const User = require("../models/user");


const signinUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const token = await User.matchPasswordAndGenerateToken(email, password);

    console.log("Login successful:", token);

    res.cookie("token", token);

    return res.redirect("/");
  } catch (error) {
    console.error("Signin error:", error);
    
    return res.render("signin", {
      error: "Invalid email or password"
    });
  }
};



const signoutUser = async (req, res) => {
  try {
    res.clearCookie("token");

    return res.redirect("/");
  } catch (error) {
    console.error("Signout error:", error);

    return res.redirect("/signin");
  }
};





const signupUser = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;


    const user = await User.create({
      fullName,
      email,
      password,
    });
    console.log("User created:", user);
    return res.redirect("signin");
  } catch (error) {
    console.error("Signup error:", error);

    return res.status(500).send("Something went wrong");
  }
};

module.exports = {
  signupUser, signinUser, signoutUser
};  

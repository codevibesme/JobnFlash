import express from "express";
import { login } from "../controllers/auth.js";
import passport from "../passport.js";
import User from "../models/User.js";
import bcrypt from "bcrypt";

const router = express.Router();

router.post("/login", login);

router.post("/login/success", async (req, res) => {
  try {
    const { id } = await req.body;
    const user = await User.findById(id).exec();
    res.status(200).json({ email: user.email, password: user.password });
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
});

router.get("/login/failed", (req, res) => {
  res.status(401).json({
    error: true,
    message: "Log in failure",
  });
});

router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/auth/login/failed",
  }),
  async (req, res) => {
    try {
      const user = req.user._json;
      console.log(user);
      const pass = user.sub + Date.now();
      const salt = await bcrypt.genSalt();
      const hashPass = await bcrypt.hash(pass, salt);
      let newUser = await User.findOne({ email: user.email }).exec();
      console.log(newUser);
      if (newUser) {
        newUser = await User.findOneAndUpdate(
          { email: user.email },
          { password: hashPass }
        );
        res.redirect(
          `http://localhost:3000/loginsuccess/${newUser._id}/${pass}`
        );
      } else {
        newUser = new User({
          ssid: user.sub,
          name: user.name,
          email: user.email,
          password: hashPass,
        });
        const savedUser = await newUser.save();
        res.redirect(
          `http://localhost:3000/loginsuccess/${savedUser._id}/${pass}`
        );
      }
    } catch (err) {
      res.status(400).json({ msg: err.message });
    }
  }
);

router.get("/google", passport.authenticate("google", ["profile", "email"]));
router.get("/logout", (req, res) => {
  req.logOut(function (err) {
    if (err) {
      console.log(err.message);
    } else {
      res.redirect(process.env.CLIENT_URL);
    }
  });
});
export default router;

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const register = async (req, res) => {
  try {
    const { name, email, password } = await req.body;
    console.log(email, password, name);
    const duplicateUser = await User.findOne({ email }).exec();
    if (duplicateUser) {
      console.log(duplicateUser);
      return res
        .status(409)
        .json({ message: "User with same email already Exists!" });
    }

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    const newUser = new User({
      email,
      password: passwordHash,
      phone: "",
      name,
      picturePath: "",
    });
    const savedUser = await newUser.save();

    res.status(201).json(savedUser);
  } catch (error) {
    res.status(400).json({ error: err.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (!user) return res.status(400).json({ msg: "user doesnot exist" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid Credentials" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    delete user.password;
    res.status(200).json({ user, token });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const socialLogin = async (req, res) => {
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
      res.redirect(`http://localhost:3000/loginsuccess/${newUser._id}/${pass}`);
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
};

export const githubLogin = async (req, res) => {
  try {
    let user = req.user._json;
    if (user?.email === null) {
      user.email = `${user.login}${user.id}@github.com`;
    }
    console.log(user);
    let newUser = await User.findOne({ email: user.email }).exec();
    console.log(newUser);
    const pass = `${user.login}`;
    const salt = await bcrypt.genSalt();
    const hashPass = await bcrypt.hash(pass, salt);
    if (newUser) {
      // Update user details (excluding password)
      newUser = await User.findOneAndUpdate(
        { email: user.email },
        { password: hashPass }
      );
      res.redirect(`http://localhost:3000/loginsuccess/${newUser._id}/${pass}`);
    } else {
      // Create a new user
      newUser = new User({
        ssid: user.id,
        name: user.name,
        email: user.email,
        password: hashPass,
      });
      const savedUser = await newUser.save();
      console.log(savedUser);
      res.redirect(
        `http://localhost:3000/loginsuccess/${savedUser._id}/${pass}`
      );
    }
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
};

import express from "express";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import User from "../models/UserModel.js";

const router = express.Router();

//How to Register a new user
router.post('/register', async (req, res) => {
    try {
      const { name, email, password } = req.body;
  
      const existingUser = await User.findOne({ email });
      if (existingUser) return res.status(400).json({ message: "User already exists." });
  
      const hashedPassword = await bcrypt.hash(password, 10);
  
      const newUser = new User({
        name,
        email,
        password: hashedPassword
      });
  
      await newUser.save();
      res.status(201).json({ message: "User created successfully." });
    } catch (err) {
      res.status(500).json({ message: "Server error" });
    }
  });
  
  // LOGIN
  router.post('/login', async (req, res) => {
    try {
      const { email, password } = req.body;
  
      const user = await User.findOne({ email });
      if (!user) return res.status(400).json({ message: "Invalid credentials" });
  
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });
  
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '3d' });
  
      res.json({ token, user: { id: user._id, name: user.name, email: user.email } });
    } catch (err) {
      res.status(500).json({ message: "Server error" });
    }
  });
  
  export default router;
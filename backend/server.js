const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Models
const Personal = require("./models/Personal");
const Skill = require("./models/Skill");
const Project = require("./models/Project");
const Blog = require("./models/Blog");

// Connect Database
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// --- API ROUTES ---

// 1. Personal API
app.get("/api/personal", async (req, res) => {
  // Giả sử chỉ có 1 record personal
  const data = await Personal.findOne();
  res.json(data);
});

// 2. Skills API
app.get("/api/skills", async (req, res) => {
  const skills = await Skill.find();
  res.json(skills);
});

// 3. Projects API
app.get("/api/projects", async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
});

// 4. Blogs API
app.get("/api/blogs", async (req, res) => {
  const blogs = await Blog.find();
  res.json(blogs);
});

app.get("/api/blogs/:id", async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    res.json(blog);
  } catch (error) {
    res.status(404).json({ message: "Blog not found" });
  }
});

// 5. Contact API Gửi mail -- test log
app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;
  console.log(`New Contact from ${name} (${email}): ${message}`);
  // Ở đây bạn có thể dùng thư viện 'nodemailer' để gửi mail thật
  res.json({ success: true, message: "Đã nhận thông tin liên hệ!" });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

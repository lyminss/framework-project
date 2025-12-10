const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
  title: String,
  imageUrl: String,
  technologies: [String],
  teamSize: Number,
  startDate: Date,
  endDate: Date,
  description: String,
  link: String,
});

module.exports = mongoose.model("Project", ProjectSchema);

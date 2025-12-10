const mongoose = require("mongoose");

const SkillSchema = new mongoose.Schema({
  name: String,
  type: { type: String, enum: ["hard", "soft"] },
  level: Number,
  icon: String,
});

module.exports = mongoose.model("Skill", SkillSchema);

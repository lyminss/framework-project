const mongoose = require("mongoose");

const SkillSchema = new mongoose.Schema({
  name: String,
  type: { type: String, enum: ["hard", "soft"] }, // Kỹ năng cứng/mềm
  level: Number, // 1-100%
  icon: String,
});

module.exports = mongoose.model("Skill", SkillSchema);

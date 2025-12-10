const mongoose = require("mongoose");

const PersonalSchema = new mongoose.Schema({
  fullName: String,
  avatar: String,
  introduction: String,
  education: [
    {
      school: String,
      major: String,
      year: String,
    },
  ],
  experience: [
    {
      company: String,
      position: String,
      duration: String,
      description: String,
    },
  ],
  email: String,
  phone: String,
  socialLinks: {
    facebook: String,
    github: String,
    linkedin: String,
  },
});

module.exports = mongoose.model("Personal", PersonalSchema);

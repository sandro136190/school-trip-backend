const mongoose = require("mongoose");

const HowItWorksSchema = new mongoose.Schema({
  number: String,
  icon: String,
  title: String,
  description: String,
  color: String,
});

module.exports = mongoose.model("HowItWorks", HowItWorksSchema);

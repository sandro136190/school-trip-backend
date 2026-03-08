const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
  icon: String,
  title: String,
  description: String,
  features: [String],
  color: String,
});

module.exports = mongoose.model("Service", serviceSchema);

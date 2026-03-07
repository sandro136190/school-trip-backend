const mongoose = require("mongoose");

const DestinationSchema = new mongoose.Schema({
  name: String,
  description: String,
  image: String,
  duration: String,
  rating: Number,
  tags: [String],
  hight: Number,
});

module.exports = mongoose.model("Destination", DestinationSchema);

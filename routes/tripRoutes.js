const express = require("express");
const router = express.Router();

// Sample destinations data
const destinations = [
  {
    _id: "1",
    name: "Sataflia",
    description:
      "Explore dinosaur footprints, ancient caves, and stunning glass walkways in this natural wonder.",
    image: "/images/destination-sataflia.jpg",
    duration: "Full Day",
    rating: 4.9,
    tags: ["Nature", "Science", "Adventure"],
    hight: 100,
  },
  {
    _id: "2",
    name: "Gelati Monastery",
    description:
      "UNESCO World Heritage site with breathtaking medieval frescoes and rich Georgian history.",
    image: "/images/destination-gelati.jpg",
    duration: "Half Day",
    rating: 4.8,
    tags: ["History", "Culture", "UNESCO"],
    hight: 12345,
  },
  {
    _id: "3",
    name: "Signagi",
    description:
      "The 'City of Love' with panoramic Alazani Valley views and charming cobblestone streets.",
    image: "/images/destination-signagi.jpg",
    duration: "Full Day",
    rating: 4.9,
    tags: ["Culture", "Wine Region", "Views"],
    hight: 345678,
  },
  {
    _id: "4",
    name: "Motsameta",
    description:
      "Cliff-edge monastery surrounded by lush forests and the scenic Tskaltsitela River canyon.",
    image: "/images/destination-motsameta.jpg",
    duration: "Half Day",
    rating: 4.7,
    tags: ["Nature", "History", "Scenic"],
    hight: 1,
  },
];

// GET all trips
router.get("/", (req, res) => {
  res.json(destinations);
});

// POST a new trip
router.post("/", (req, res) => {
  const tripData = req.body;
  tripData._id = Date.now().toString(); // simple unique ID
  destinations.push(tripData);
  res.json({
    message: "Trip created successfully",
    trip: tripData,
  });
});

module.exports = router;

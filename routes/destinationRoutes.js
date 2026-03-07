const express = require("express");
const router = express.Router();
const Destination = require("../models/Destination");

// GET all destinations
router.get("/get-all", async (req, res) => {
  try {
    const destinations = await Destination.find();
    res.json(destinations);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST new destination
router.post("/create", async (req, res) => {
  try {
    const destination = new Destination(req.body);
    await destination.save();
    res.json(destination);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

const express = require("express");
const router = express.Router();
const HowItWorks = require("../models/HowItWorks");

// GET all how it works steps
router.get("/get-all", async (req, res) => {
  try {
    const howItWorks = await HowItWorks.find();
    res.json(howItWorks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST how it works step
router.post("/create", async (req, res) => {
  try {
    const howItWorks = new HowItWorks(req.body);
    await howItWorks.save();
    res.json(howItWorks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

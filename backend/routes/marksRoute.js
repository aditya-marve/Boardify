const express = require("express");
const router = express.Router();
const Marks = require("../models/marksModel");

// GET all marks
router.get("/", async (req, res) => {
  try {
    const allMarks = await Marks.find();
    res.json(allMarks);
  } catch (err) {
    res.status(500).json({ message: "Error fetching marks" });
  }
});

module.exports = router;

// backend/routes/studentRoute.js

const express = require('express');
const router = express.Router();
const Student = require('../models/Student'); // Adjust if your model path differs

// Route: GET all students
router.get('/', async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;

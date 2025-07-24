const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Check if MONGO_URI exists
const MONGO_URI = process.env.MONGO_URI;
if (!MONGO_URI) {
  console.error('❌ MONGO_URI not found in .env file');
  process.exit(1);
}

// Middleware
app.use(cors());
app.use(express.json());

// Sample Test Route
app.get('/', (req, res) => {
  res.send('✅ Boardify Backend is Running');
});

// Example health check route (optional)
app.get('/api/health', (req, res) => {
  res.json({ status: 'Backend server is healthy!' });
});

// ROUTES (add your actual route files as needed here)
const marksRoute = require('./routes/marksRoute');      // <- implement later
const studentRoute = require('./routes/studentRoute');  // <- implement later

app.use('/api/marks', marksRoute);
app.use('/api/students', studentRoute);

// MongoDB connection and server start
const PORT = process.env.PORT || 5000;
mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('✅ MongoDB Connected Successfully');
    app.listen(PORT, () => {
      console.log(`🚀 Server running at http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err.message);
    process.exit(1);
  });

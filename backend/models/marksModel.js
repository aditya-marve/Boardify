const mongoose = require("mongoose");

const marksSchema = new mongoose.Schema({
  name: { type: String, required: true },
  subject: { type: String, required: true },
  marks: { type: Number, required: true },
  grade: { type: String },
});

module.exports = mongoose.model("Marks", marksSchema);

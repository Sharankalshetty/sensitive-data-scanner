const mongoose = require("mongoose");

const scanSchema = new mongoose.Schema({
  filename: { type: String, required: true },
  results: { type: Object, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Scan", scanSchema);

const mongoose = require('mongoose');

// Define schema for works
const workSchema = new mongoose.Schema({
  type: String,
  projectName: String,
  desc: String,
  detailLists: [String]
}, { _id: false });

// Define schema for experience
const experienceSchema = new mongoose.Schema({
  companyName: String,
  designation: String,
  period: String,
  location: String,
  contributions: [String],
  works: [workSchema]
});

module.exports = mongoose.model('Experience', experienceSchema);

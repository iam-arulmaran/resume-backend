const mongoose = require('mongoose');

const educationSchema = new mongoose.Schema({
  courseName: String,
  graduatedOn: String,
  university: String
});

module.exports = mongoose.model('Education', educationSchema);
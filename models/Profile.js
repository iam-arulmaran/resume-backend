const mongoose = require('mongoose');

const linkedInSchema = new mongoose.Schema({
  name : String,
  link: String
}, {_id: false});

const profileSchema = new mongoose.Schema({
  fullName: String,
  jobTitle: String,
  email: String,
  phone: String,
  location: String,
  linkedIn: linkedInSchema,
});

module.exports = mongoose.model('Profile', profileSchema);
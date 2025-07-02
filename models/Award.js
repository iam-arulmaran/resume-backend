const mongoose = require('mongoose');

const awardSchema = new mongoose.Schema({
  title: String,
  year: String,
  desc: String
});

module.exports = mongoose.model('Award', awardSchema);
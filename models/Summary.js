const mongoose = require('mongoose');

const summarySchema = new mongoose.Schema({
  summary: String
});

module.exports = mongoose.model('Summary', summarySchema);
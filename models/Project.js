const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: String,
  desc: String,
  impact: String,
  detailLists: [String],
  techStack: [String]
});

module.exports = mongoose.model('Project', projectSchema);
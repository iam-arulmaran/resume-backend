const mongoose = require('mongoose');

const skillsSchema = new mongoose.Schema({
  frontend: [String],
  backend: [String],
  testing: [String],
  database: [String],
  cloudAndDatabases: [String]
});

module.exports = mongoose.model('Skills', skillsSchema);
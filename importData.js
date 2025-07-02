require('dotenv').config();
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB connected');
  importData();
}).catch(err => {
  console.error('Connection error:', err);
});

// Load models
const Profile = require('./models/Profile');
const Summary = require('./models/Summary');
const Skills = require('./models/Skills');
const Education = require('./models/Education');
const Award = require('./models/Award');
const Experience = require('./models/Experience');
const Project = require('./models/Project');

// Helper to read JSON
const readJSON = (filename) => {
  const filePath = path.join(__dirname, 'data', filename);
  return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
};

// Import function
async function importData() {
  try {
    await Profile.deleteMany();
    await Summary.deleteMany();
    await Skills.deleteMany();
    await Education.deleteMany();
    await Award.deleteMany();
    await Experience.deleteMany();
    await Project.deleteMany();

    await Profile.create(readJSON('profile.json'));
    await Summary.create(readJSON('summary.json'));
    await Skills.create(readJSON('skills.json'));
    await Education.insertMany(readJSON('education.json'));
    await Award.insertMany(readJSON('awards.json'));
    await Experience.insertMany(readJSON('experiences.json'));
    await Project.insertMany(readJSON('projects.json'));

    console.log('✅ Data imported successfully!');
    process.exit();
  } catch (error) {
    console.error('❌ Error importing data:', error);
    process.exit(1);
  }
}

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error('❌ DB connection error:', err));

// Import routes
const profileRoutes = require('./routes/profile');
const summaryRoutes = require('./routes/summary');
const skillsRoutes = require('./routes/skills');
const educationRoutes = require('./routes/education');
const awardsRoutes = require('./routes/awards');
const experiencesRoutes = require('./routes/experiences');
const projectsRoutes = require('./routes/projects');
const resumeRoutes = require('./routes/resume');


app.use('/api/profile', profileRoutes);
app.use('/api/summary', summaryRoutes);
app.use('/api/skills', skillsRoutes);
app.use('/api/education', educationRoutes);
app.use('/api/awards', awardsRoutes);
app.use('/api/experiences', experiencesRoutes);
app.use('/api/projects', projectsRoutes);
app.use('/api/resume', resumeRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

const express = require("express");
const router = express.Router();
const Awards = require("../models/Award");
const Educations = require("../models/Education");
const Experience = require("../models/Experience");
const Profile = require("../models/Profile");
const Projects = require("../models/Project");
const Skills = require("../models/Skills");
const Summary = require("../models/Summary");

router.get("/", async (req, res) => {
    try {
        const awards = await Awards.find();
        const educations = await Educations.find();
        const exp = await Experience.find();
        const profile = await Profile.find();
        const project = await Projects.find();
        const skills = await Skills.find();
        const summary = await Summary.find();
        const finalData = {awards,educations,exp,profile,project,skills,summary};
        res.json(finalData);
    }
    catch(err) {
        res.status(500).json({error: err.message})
    }
});

module.exports = router;

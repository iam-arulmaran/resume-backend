const express = require("express");
const router = express.Router();
const Project = require("../models/Project");

router.get("/", async (req, res) => {
    try {
        const data = await Project.find();
        res.json(data);
    }
    catch(err) {
        res.status(500).json({error: err.message})
    }
});

module.exports = router;

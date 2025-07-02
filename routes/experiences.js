const express = require("express");
const router = express.Router();
const Experience = require("../models/Experience");

router.get("/", async (req, res) => {
    try {
        const data = await Experience.find();
        res.json(data);
    }
    catch(err) {
        res.status(500).json({error: err.message})
    }
});

module.exports = router;

const express = require("express");
const router = express.Router();
const Skills = require("../models/Skills");

router.get("/", async (req, res) => {
    try {
        const data = await Skills.find();
        res.json(data);
    }
    catch(err) {
        res.status(500).json({error: err.message})
    }
});

module.exports = router;

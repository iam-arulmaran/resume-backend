const express = require("express");
const router = express.Router();
const Summary = require("../models/Summary");

router.get("/", async (req, res) => {
    try {
        const data = await Summary.find();
        res.json(data);
    }
    catch(err) {
        res.status(500).json({error: err.message})
    }
});

module.exports = router;

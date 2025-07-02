const express = require("express");
const router = express.Router();
const Education = require("../models/Education");

router.get("/", async (req, res) => {
    try {
        const data = await Education.find();
        res.json(data);
    }
    catch(err) {
        res.status(500).json({error: err.message})
    }
});

module.exports = router;

const express = require("express");
const router = express.Router();
const Awards = require("../models/Award");

router.get("/", async (req, res) => {
    try {
        const data = await Awards.find();
        res.json(data);
    }
    catch(err) {
        res.status(500).json({error: err.message})
    }
});

module.exports = router;

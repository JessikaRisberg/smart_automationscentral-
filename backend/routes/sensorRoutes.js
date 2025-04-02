const express = require("express");
const { sensorData } = require("../config/mqttConfig");

const router = express.Router();

// Hämta aktuell sensordata
router.get("/", (req, res) => {
    res.json(sensorData);
});

module.exports = router;

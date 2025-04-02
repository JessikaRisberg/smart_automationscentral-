const express = require("express");
const { mqttClient } = require("../config/mqttConfig");

const router = express.Router();

// Styr reläer via MQTT
router.post("/toggle", (req, res) => {
    const { relay, state } = req.body;
    
    if (!relay || !state) {
        return res.status(400).json({ error: "Relay and state required" });
    }

    mqttClient.publish(`home/${relay}`, state); // Ex: "home/relay1" -> "ON"
    res.json({ success: true, relay, state });
});

module.exports = router;

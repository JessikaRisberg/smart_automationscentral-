const mqtt = require("mqtt");

const mqttClient = mqtt.connect(process.env.MQTT_BROKER || "mqtt://localhost");

// När vi ansluter till MQTT-brokern
mqttClient.on("connect", () => {
    console.log("✅ MQTT Connected");
    mqttClient.subscribe("home/temp"); // Lyssnar på temperaturdata
    mqttClient.subscribe("home/humidity");
});

// Hantera inkommande meddelanden
let sensorData = { temperature: "N/A", humidity: "N/A" };

mqttClient.on("message", (topic, message) => {
    if (topic === "home/temp") {
        sensorData.temperature = message.toString();
    } else if (topic === "home/humidity") {
        sensorData.humidity = message.toString();
    }
});

module.exports = { mqttClient, sensorData };

import React, { useState, useEffect } from "react";
import { fetchSensorData } from "../api";
import { sensorData } from "../../../backend/config/mqttConfig";

const SensorData = () => {
    const [data, setSensorData] = useState({ temperature: "N/A", humidity: "N/A"});

    useEffect(() => {
        const updateData = async () => {
            const data = await fetchSensorData();
            setSensorData(data);
        }

        updateData();
        const interval = setInterval(updateData, 5000); // uppdatera var 5:e sekund
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="sensor-card">
            <h2>Sensorvärden</h2>
            <p>Temperatur: {sensorData.temperature} °C</p>
            <p>Luftfuktighet: {sensorData.humidity}</p>
        </div>
    );

};

export default SensorData;


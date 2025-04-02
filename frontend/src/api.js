import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:3001/api";

// Hämtar sensordata från backend
export const fetchSensorData = async () => {
    const res = await axios.get(`${API_BASE_URL}/sensors`);
    return res.data;

 };

 // Styr reläer (ON/OFF)
 export const toggleRelay = async (relay, state) => {
    await axios.post(`${API_BASE_URL}/relay`, { relay, state });
};


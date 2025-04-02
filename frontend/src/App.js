import React from "react";
import SensorData from "./components/SensorData";
import RelayControl from "./components/RelayControl";
import "./styles.css"; // Enkel CSS

function App() {
    return (
        <div className="container">
            <h1>🏠 Smart Automation Dashboard</h1>
            <SensorData />
            <div className="relays">
                <RelayControl relay="relay1" />
                <RelayControl relay="relay2" />
            </div>
        </div>
    );
}

export default App;

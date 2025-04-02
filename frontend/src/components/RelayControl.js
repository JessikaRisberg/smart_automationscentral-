import React, { useState } from "react";
import { toggleRelay } from "../api";

const RelayControl = ({ relay }) => {
    const [state, setState] = useState("OFF");

    const handleToggle = async () => {
        const newState = state === "OFF" ? "ON" : "OFF";
        await toggleRelay(relay, newState);
        setState(newState);
    };

    return (
        <div className="relay-card">
            <h2>{relay.toUpperCase()}</h2>
            <button onClick={handleToggle} className={state === "ON" ? "on" : "off"}>
                {state === "OFF" ? "Slå på" : "Stäng av"}
            </button>
        </div>
    );
};

export default RelayControl;

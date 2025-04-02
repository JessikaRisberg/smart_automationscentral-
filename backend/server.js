const express = require("express");
const cors = require("cors");
const dotenv = ("dotenv");

dotenv.config(); // laddar miljövariabler från .env

const app = express();
app.use(cors());
app.use(express.json());

const relayRoutes = requrie("./routes/relayRoutes");
const sensorRoutes = require("./routes/sensorRoutes");

// Använd API-routes
app.use("/api/relay", relayRoutes);
app.use("/api/sensor", sensorRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
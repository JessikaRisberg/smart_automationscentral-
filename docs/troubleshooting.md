🔧 Felsökning & Vanliga Problem

Denna guide hjälper dig att lösa problem som kan uppstå när du installerar och använder Smart Automationscentralen (ESP32 + MQTT + Reläer + Sensorer).
📌 1️⃣ ESP32 ansluter inte till WiFi
🔹 Problem

ESP32 ansluter inte till ditt WiFi-nätverk.
🔹 Lösning

✅ Kontrollera att SSID och lösenord är korrekt i koden:

const char* ssid = "DITT_WIFI";
const char* password = "DITT_LÖSENORD";

✅ Se till att routern stöder 2.4 GHz (ESP32 fungerar inte med 5 GHz).
✅ Starta om ESP32 och din router.
✅ Testa en enklare WiFi-anslutning i Arduino:

WiFi.begin(ssid, password);
while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.print(".");
}
Serial.println("WiFi Connected!");

✅ Om det fortfarande inte fungerar, testa att dela WiFi från din mobiltelefon.
📌 2️⃣ ESP32 kan inte ansluta till MQTT-broker
🔹 Problem

ESP32 försöker ansluta men misslyckas.
🔹 Lösning

✅ Kontrollera att du använder rätt IP-adress för MQTT-servern:

const char* mqtt_server = "192.168.1.100";  // Ändra till rätt adress

✅ Testa om Mosquitto körs på din dator eller Raspberry Pi:

systemctl status mosquitto

✅ Starta om Mosquitto om det inte körs:

sudo systemctl restart mosquitto

✅ Testa MQTT-anslutning manuellt:

mosquitto_pub -h localhost -t "home/test" -m "Hello"
mosquitto_sub -h localhost -t "home/#"

✅ Om du använder Windows, kör Mosquitto som administratör.
📌 3️⃣ Inga MQTT-meddelanden skickas eller tas emot
🔹 Problem

ESP32 skickar inte data till MQTT-servern.
🔹 Lösning

✅ Kontrollera att ESP32 faktiskt är ansluten till MQTT genom att lägga till en Serial.println()-utskrift i callback()-funktionen:

void callback(char* topic, byte* payload, unsigned int length) {
    Serial.print("Received message: ");
    for (int i = 0; i < length; i++) {
        Serial.print((char)payload[i]);
    }
    Serial.println();
}

✅ Kontrollera att ESP32 är ansluten genom att lägga till:

if (!client.connected()) {
    Serial.println("MQTT Disconnected, reconnecting...");
    reconnect();
}

✅ Testa manuellt att publicera ett MQTT-meddelande:

mosquitto_pub -h localhost -t "home/relay1" -m "ON"

✅ Om du använder en extern MQTT-broker, se till att port 1883 är öppen i brandväggen.
📌 4️⃣ Backend (Node.js) startar inte
🔹 Problem

När du försöker starta backend (node server.js) får du ett felmeddelande.
🔹 Lösning

✅ Kontrollera att Node.js är installerat:

node -v

✅ Installera nödvändiga beroenden igen:

npm install

✅ Se till att Mosquitto körs innan du startar backend.
✅ Om du får EADDRINUSE-fel betyder det att porten redan används. Stäng processen och starta om:

sudo kill $(sudo lsof -t -i:5000)
node server.js

📌 5️⃣ Frontend (React) laddas inte
🔹 Problem

När du kör npm start får du ett fel, eller webbsidan visar inga data.
🔹 Lösning

✅ Kontrollera att backend-servern är igång:

curl http://localhost:5000/api/sensor

✅ Om React inte startar, rensa cache och starta om:

rm -rf node_modules package-lock.json
npm install
npm start

✅ Se till att rätt API-URL används i src/App.js:

const response = await axios.get("http://localhost:5000/sensor-data");

✅ Om frontend inte visar uppdaterad data, öppna webbläsarens utvecklingsverktyg (F12) och kolla Console för felmeddelanden.
📌 6️⃣ Reläer styrs inte från webbgränssnittet
🔹 Problem

När du klickar på knappen i React-appen händer ingenting.
🔹 Lösning

✅ Kontrollera att ESP32 lyssnar på rätt MQTT-topic:

client.subscribe("home/relay1");

✅ Testa manuellt om MQTT fungerar:

mosquitto_pub -h localhost -t "home/relay1" -m "ON"

✅ Kontrollera att frontend faktiskt skickar kommandon genom att lägga till console.log() i toggleRelay() i App.js:

console.log("Sending MQTT command:", relay, newState);

✅ Om reläet klickar men inget händer, testa att byta HIGH/LOW i ESP32-koden:

digitalWrite(relayPin, LOW);  // Vissa relämoduler aktiveras med LOW

📌 7️⃣ Sensordata uppdateras inte
🔹 Problem

Temperatur och luftfuktighet visas inte i webbgränssnittet.
🔹 Lösning

✅ Kontrollera att ESP32 skickar data till rätt MQTT-topic:

client.publish("home/temp", String(temperature).c_str());

✅ Kontrollera att backend tar emot meddelanden genom att lägga till en logg i server.js:

mqttClient.on("message", (topic, message) => {
    console.log(`Received message: ${topic} - ${message.toString()}`);
});

✅ Kontrollera att frontend hämtar rätt API-data genom att lägga till en logg i App.js:

console.log("Fetched temperature:", res.data.temperature);

✅ Testa manuellt att skicka en temperaturuppdatering:

mosquitto_pub -h localhost -t "home/temp" -m "22.5"

📌 8️⃣ ESP32 kraschar eller startar om slumpmässigt
🔹 Problem

ESP32 startar om hela tiden.
🔹 Lösning

✅ Kontrollera att ESP32 har tillräckligt med ström. Använd en extern 5V/2A adapter istället för att driva den från USB.
✅ Om du får "Guru Meditation Error", testa att öka stackstorleken:

xTaskCreatePinnedToCore(
    taskFunction,
    "TaskName",
    10000,  // Öka stackstorlek
    NULL,
    1,
    NULL,
    0
);

✅ Om ESP32 går in i boot loop, radera minnet och ladda upp koden igen:

esptool.py --chip esp32 erase_flash

✅ Slutsats

Om du har följt alla steg och fortfarande har problem, testa att:

    Starta om hela systemet (ESP32, backend, frontend, MQTT-broker).

    Testa komponenterna individuellt (ESP32 → MQTT → Backend → Frontend).

    Kolla loggar och terminalutskrifter.

🚀 Lycka till! 💡
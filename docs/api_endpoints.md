📄 API Endpoints Dokumentation

🚀 Smart Automationscentral (ESP32 + MQTT)
📌 Base URL: http://localhost:5000/api/
📌 1️⃣ Sensor Data
🔹 Hämta aktuell sensordata

Endpoint:

GET /api/sensor

Beskrivning:
Hämtar aktuell temperatur och luftfuktighet från ESP32 via MQTT.

✅ Exempel på anrop:

curl -X GET http://localhost:5000/api/sensor

✅ Exempel på svar:

{
  "temperature": "22.5",
  "humidity": "45"
}

📌 2️⃣ Styrning av Reläer
🔹 Slå på/stänga av ett relä

Endpoint:

POST /api/relay/toggle

Beskrivning:
Aktiverar eller inaktiverar ett relä genom att publicera ett MQTT-meddelande.

📌 Body (JSON):

{
  "relay": "relay1",
  "state": "ON"
}

✅ Exempel på anrop:

curl -X POST http://localhost:5000/api/relay/toggle \
  -H "Content-Type: application/json" \
  -d '{"relay": "relay1", "state": "ON"}'

✅ Exempel på svar:

{
  "success": true,
  "relay": "relay1",
  "state": "ON"
}

📌 3️⃣ MQTT Status
🔹 Kolla MQTT-anslutningens status

Endpoint:

GET /api/mqtt/status

Beskrivning:
Kontrollerar om MQTT-brokern är ansluten.

✅ Exempel på anrop:

curl -X GET http://localhost:5000/api/mqtt/status

✅ Exempel på svar:

{
  "mqtt_connected": true
}

📌 4️⃣ Debug & Loggar
🔹 Hämta systemloggar

Endpoint:

GET /api/logs

Beskrivning:
Hämtar de senaste systemloggarna från backend.

✅ Exempel på anrop:

curl -X GET http://localhost:5000/api/logs

✅ Exempel på svar:

{
  "logs": [
    "[INFO] MQTT Connected",
    "[INFO] Received temperature data: 22.5°C"
  ]
}

🛠 Utökningar & Framtida Funktioner

    📌 Lägga till fler sensorer (t.ex. PIR för rörelsedetektion)

    📌 Historiklagring (logga temperatur och relästatus i en databas)

    📌 Autentisering & säkerhet (JWT för skyddade endpoints)

✅ Slutsats

Denna api_endpoints.md dokumentation hjälper utvecklare att förstå hur man kommunicerar med backend och MQTT-brokern. 🛠🚀

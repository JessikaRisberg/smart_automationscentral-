# smart_automationscentral-
Smart Automationscentral (ESP32 + MQTT + Reläer)

🛠 Projektplan: Smart Automationscentral (ESP32 + MQTT + Reläer)
💡 Mål: Skapa ett system där du kan styra enheter (lampor, motorer, sensorer) via en mobilapp eller webbapp med MQTT och ESP32.
📌 Hårdvara
🔹 ESP32 – Hjärnan i systemet, hanterar nätverk & MQTT.
🔹 Relämodul (t.ex. 4-kanals) – Styr lampor, motorer, fläktar.
🔹 Sensorer:
•	PIR-sensor – Rörelsedetektering (för att tända/släcka automatiskt).
•	DHT22 – Temperatur- och luftfuktighetssensor.
•	LDR (Ljussensor) – Justerar ljusstyrka baserat på omgivningen.
🔹 MQTT-server (Mosquitto) – För att skicka och ta emot kommandon.
🔹 Mobil/Webb-app (Dashboard) – Styr enheter & visar sensordata.
________________________________________
🖥️ Programvaruarkitektur
📌 ESP32 kör:
•	WiFi-anslutning till nätverket.
•	MQTT-klient för att prenumerera på kommandon (exempelvis "home/relay1" för att tända/släcka lampor).
•	Sensoravläsning & publicering av data ("home/temp" skickar temperaturdata).
📌 MQTT-broker (Mosquitto)
•	Kopplar samman ESP32 och din webb-/mobilapp.
📌 Webbapp/Mobilapp (React, Flask, Node-RED eller annan frontend)
•	Skickar kommandon för att styra ESP32 via MQTT.
•	Visar realtidsdata från sensorerna.
________________________________________
📌 Steg-för-Steg Plan
✅ 1. Få ESP32 att kommunicera via MQTT
•	Installera Arduino IDE och ESP32-bibliotek.
•	Använd WiFiManager för att koppla ESP32 till nätverket.
•	Använd PubSubClient-biblioteket för att skicka/ta emot MQTT-meddelanden.
✅ 2. Koppla in Reläer & Sensorer
•	Koppla reläer till ESP32 och skapa MQTT-kommandon ("home/relay1" → ON/OFF).
•	Lägg till PIR-sensor, så att lampor tänds vid rörelse.
•	Lägg till DHT22, så att temperaturen publiceras till "home/temp".
✅ 3. Skapa en MQTT-server
•	Installera Mosquitto MQTT på en Raspberry Pi eller PC.
•	Skapa topics ("home/#" för att prenumerera på alla enheter).
✅ 4. Bygg en Webb/Mobil Dashboard
•	Använd Node-RED, React eller Flask för en enkel dashboard där du:
o	Tänder/släcker lampor via knappar.
o	Visar temperaturdata i realtid.



📄 Installation & Setup

🚀 Smart Automationscentral (ESP32 + MQTT + Reläer + Sensorer)

Denna guide hjälper dig att installera och konfigurera hela systemet, inklusive MQTT-broker, backend, frontend och ESP32.
📌 1️⃣ Förberedelser
✅ Krav

    En dator (Windows/Linux/macOS) eller en Raspberry Pi

    ESP32-utvecklingskort

    Relämodul, sensorer (PIR, DHT22, LDR)

    Internetanslutning

📦 Programvara & Verktyg som behövs

    Arduino IDE (för att programmera ESP32)

    Mosquitto MQTT-broker (för att hantera meddelanden mellan ESP32 och webbgränssnittet)

    Node.js + npm (för backend-server)

    React.js (för frontend)

📌 2️⃣ Installera Mosquitto MQTT Broker
🔹 Windows

    Ladda ner Mosquitto från här.

    Installera och aktivera tjänsten.

    Öppna en terminal och testa:

    mosquitto -v

🔹 Linux (Raspberry Pi/Ubuntu)

    Installera Mosquitto:

sudo apt update
sudo apt install mosquitto mosquitto-clients

Aktivera och starta tjänsten:

sudo systemctl enable mosquitto
sudo systemctl start mosquitto

Testa MQTT-kommunikation:

    mosquitto_sub -h localhost -t "home/#"

📌 3️⃣ Installera Backend (Node.js + Express + MQTT)
🔹 Steg 1: Installera Node.js och skapa backend-projekt

    Installera Node.js.

    Öppna en terminal och kör:

mkdir mqtt-backend
cd mqtt-backend
npm init -y

Installera nödvändiga paket:

    npm install express cors mqtt

🔹 Steg 2: Skapa backend-server

    Skapa en fil server.js och lägg in backend-koden.

    Starta servern:

node server.js

Testa API:

    curl -X GET http://localhost:5000/api/sensor

📌 4️⃣ Installera Frontend (React)
🔹 Steg 1: Skapa React-projekt

    Installera React.js:

    npx create-react-app mqtt-dashboard
    cd mqtt-dashboard
    npm install axios

    Byt ut src/App.js med frontend-koden.

🔹 Steg 2: Starta frontend

npm start

    Öppna http://localhost:3000 i webbläsaren.

📌 5️⃣ Ladda upp koden till ESP32
🔹 Steg 1: Installera Arduino IDE + ESP32-bibliotek

    Ladda ner och installera Arduino IDE.

    Gå till Inställningar och lägg till ESP32 URL i "Additional Board Manager URLs":

    https://dl.espressif.com/dl/package_esp32_index.json

    Gå till Verktyg > Kort > Board Manager, sök efter ESP32 och installera det.

🔹 Steg 2: Installera nödvändiga bibliotek

    Öppna Arduino IDE och installera dessa bibliotek:

        PubSubClient (för MQTT)

        DHT sensor library (för temperatur & luftfuktighet)

🔹 Steg 3: Ladda upp ESP32-koden

    Anslut ESP32 till datorn via USB.

    Kopiera in ESP32-koden i Arduino IDE.

    Välj rätt kort: ESP32 Dev Module.

    Välj rätt port och ladda upp koden.

📌 6️⃣ Testa Systemet
✅ 1. Kontrollera att MQTT fungerar

Öppna två terminaler:

    Prenumerera på alla meddelanden:

mosquitto_sub -h localhost -t "home/#"

Publicera ett testmeddelande:

    mosquitto_pub -h localhost -t "home/relay1" -m "ON"

✅ 2. Kontrollera backend

curl -X GET http://localhost:5000/api/sensor

✅ 3. Testa frontend

Öppna http://localhost:3000 och kontrollera att temperatur visas och reläerna kan styras.
📌 7️⃣ Felsökning
❌ Backend startar inte?

✅ Kontrollera att Node.js är installerat.
✅ Kör npm install för att säkerställa att alla paket är installerade.
❌ Frontend visar ingen data?

✅ Kontrollera att backend-servern körs (node server.js).
✅ Kolla om MQTT fungerar (mosquitto_sub -h localhost -t "home/#").
❌ ESP32 ansluter inte till MQTT?

✅ Kontrollera att du har rätt MQTT-serveradress i ESP32-koden.
✅ Se till att ESP32 har WiFi-anslutning.
✅ Nu är systemet redo att användas! 🚀
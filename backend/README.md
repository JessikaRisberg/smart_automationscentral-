# Info om backend

Här är en **`README.md`**-fil för **backend**-mappen som beskriver hur man startar och använder backend-delen av projektet:

---

# 🌐 **Backend – MQTT Server & API**  

Den här mappen innehåller backend-koden för att hantera kommunikationen mellan frontend och ESP32-enheter via MQTT. Backend använder **Node.js** och **Express** för att tillhandahålla ett REST API och hantera MQTT-meddelanden.

---

## 📌 **1️⃣ Teknologier**  

✅ **Node.js** – JavaScript runtime för server-side applikationer  
✅ **Express** – Web framework för att bygga API:er  
✅ **MQTT** – Protokoll för meddelandehantering via Mosquitto  
✅ **CORS** – För att tillåta kommunikation mellan olika domäner (frontend och backend)

---

## 📌 **2️⃣ Installation & Start**  

### 🔹 **Förutsättningar**  
- **Node.js** måste vara installerat.  
  Kolla versioner:  
  ```sh
  node -v
  npm -v
  ```
- **Mosquitto** MQTT-broker ska vara igång (se instruktioner i `mqtt-broker/README.md`).  

### 🔹 **Installera beroenden**  
Gå till backend-mappen och kör följande kommando för att installera alla nödvändiga beroenden:  
```sh
cd backend
npm install
```

### 🔹 **Starta backend-servern**  
För att starta backend-servern kör du:
```sh
node server.js
```

Servern kommer att lyssna på **http://localhost:5000** och kan användas av frontend för att hämta sensordata och styra ESP32-reläer.

---

## 📌 **3️⃣ API-endpoints**  

### 🔹 **GET /sensor-data**  
Hämtar aktuell sensorinformation, t.ex. temperatur och fuktighet.  
**Svar**:  
```json
{
  "temperature": "22.5",
  "humidity": "60"
}
```

### 🔹 **POST /toggle-relay**  
Slår på eller av ett relä via MQTT.  
**Request body**:  
```json
{
  "relay": "relay1",
  "state": "ON"
}
```
**Svar**:  
```json
{
  "success": true,
  "relay": "relay1",
  "state": "ON"
}
```

---

## 📌 **4️⃣ MQTT-anslutning & Konfiguration**  

Backend använder **mqtt.js** för att ansluta till MQTT-brokern. Den ansluter till broker-servern via:

```javascript
const mqttClient = mqtt.connect("mqtt://localhost");
```

### 🔹 **MQTT Topics**  
- `home/temp`: Publicerar temperaturdata från ESP32.  
- `home/relay1`: Ta emot kommandon för att slå på/av relä.

Backend prenumererar på MQTT-topic för temperaturdata och publicerar meddelanden till relä-topic när ett relä ska styras.

---

## 📌 **5️⃣ Backendstruktur**  

```plaintext
backend/
│── node_modules/           # Nödvändiga npm-moduler
│── src/
│   ├── server.js           # Backend serverkod
│   ├── mqttClient.js       # MQTT-klient för kommunikation
│   ├── routes/             # API-rutter
│── package.json            # Beroenden och skript
│── README.md               # Dokumentation
```

---

## 📌 **6️⃣ Felsökning**  

### 🔹 **Backend startar inte?**  
- Se till att **Node.js** och **npm** är installerade.  
- Kontrollera att du har installerat alla beroenden via `npm install`.
- Se till att **Mosquitto** MQTT-servern körs och är korrekt konfigurerad (se `mqtt-broker/README.md`).

### 🔹 **Kan inte ansluta till Mosquitto?**  
- Kontrollera att Mosquitto-brokern är igång och lyssnar på rätt port.  
  Använd följande kommando för att kontrollera statusen på Mosquitto på en Raspberry Pi:
  ```sh
  sudo systemctl status mosquitto
  ```

---

## 📌 **7️⃣ Nästa steg**  

🚀 **Möjliga förbättringar**:  
- Lägg till fler API-rutter för att styra flera reläer och sensorer.  
- Implementera en autentisering och behörighetskontroll för att skydda API:erna.  
- Sätt upp en **databas** för att logga historiska sensorvärden.

📌 **Backend är nu igång och klar att användas! 🎉**

---

Med denna **`README.md`** kan du och andra utvecklare snabbt komma igång med backend-delen av projektet, få information om hur man kör servern, och förstå hur den interagerar med MQTT-brokern och frontend.
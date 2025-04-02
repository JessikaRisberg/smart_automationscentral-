Här är den uppdaterade **`README.md`**-filen för **frontend**-mappen utan punkt 6:  

---

# 🌍 **Frontend – MQTT Dashboard**  

Den här mappen innehåller **React-baserad frontend** för att styra ESP32-enheter och visa realtidsdata från sensorer via MQTT.  

---

## 📌 **1️⃣ Teknologier**  

✅ **React** – UI-ramverk för frontend  
✅ **Axios** – Hämtar data från backend (Node.js)  
✅ **CSS/Styled Components** – För design och layout  

---

## 📌 **2️⃣ Installation & Start**  

### 🔹 **Förutsättningar**  
- **Node.js** och **npm** måste vara installerade.  
  Kolla versioner:  
  ```sh
  node -v
  npm -v
  ```
- Backend och MQTT-broker ska vara igång.  

### 🔹 **Installera beroenden**  
```sh
cd frontend
npm install
```

### 🔹 **Starta frontend-applikationen**  
```sh
npm start
```
Öppna sedan **http://localhost:3000/** i webbläsaren.  

---

## 📌 **3️⃣ Konfiguration**  

### 🔹 **Miljövariabler**  
Om du behöver ändra backend-URL eller MQTT-server, skapa en **`.env`-fil** i `frontend/`-mappen:  
```env
REACT_APP_API_URL=http://localhost:5000
```

### 🔹 **API-endpoints som frontend använder**  
| Endpoint | Funktion |
|----------|----------|
| `GET /sensor-data` | Hämtar temperatur och andra sensordata |
| `POST /toggle-relay` | Slår på/av reläer via MQTT |

---

## 📌 **4️⃣ Struktur av projektet**  

```plaintext
frontend/
│── public/                # Statiska filer (favicon, index.html)
│── src/
│   ├── components/        # UI-komponenter (knappar, kort etc.)
│   ├── pages/             # Sidor (Dashboard, Inställningar)
│   ├── App.js             # Huvudkomponenten
│   ├── api.js             # Axios-anrop till backend
│   ├── styles.css         # CSS-styling
│── .env                   # Miljövariabler
│── package.json           # Projektets beroenden och scripts
│── README.md              # Dokumentation
```

---

## 📌 **5️⃣ Funktionalitet**  

- 🔄 **Realtidsvisning av sensordata (temperatur, fuktighet)**
- ⚡ **Knapp för att slå på/av reläer (lampor, motorer)**
- 📡 **Kommunikation med backend via REST API**
- 🌐 **Responsiv design – fungerar på mobil och dator**

---

## 📌 **6️⃣ Felsökning**  

### 🔹 **Frontend startar inte?**  
✅ Kolla att Node.js är installerat  
✅ Testa att rensa npm-cache och installera om beroenden:  
```sh
rm -rf node_modules package-lock.json
npm install
```
✅ Om en annan tjänst använder port 3000, ändra port i **package.json**:  
```json
"scripts": {
  "start": "PORT=4000 react-scripts start"
}
```
och starta om med:  
```sh
npm start
```

### 🔹 **Frontend kan inte hämta data från backend?**  
✅ Kolla att backend körs:  
```sh
curl http://localhost:5000/sensor-data
```
✅ Kolla att `REACT_APP_API_URL` i `.env` pekar på backend-servern  

---

## 📌 **7️⃣ Nästa steg**  

🚀 **Möjliga förbättringar**:  
- Lägg till fler reläer och sensorer  
- Lägg till en **historikvy** med grafer  
- Skapa en mobilapp med **React Native**  
- Lägg till **användarautentisering**  

📌 **Frontend är nu redo att användas! 🎉**
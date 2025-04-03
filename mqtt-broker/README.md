# Info om hur man startar MQTT-servern

🛠 MQTT Broker – Mosquitto

Den här mappen innehåller konfigurationsfiler och instruktioner för att köra en Mosquitto MQTT-broker, som används för att skicka och ta emot meddelanden mellan ESP32-enheter och backend/webbappen.
📌 1️⃣ Installera Mosquitto
🔹 På Linux (Ubuntu/Raspberry Pi)

sudo apt update
sudo apt install mosquitto mosquitto-clients

Starta Mosquitto och aktivera det vid uppstart:

sudo systemctl enable mosquitto
sudo systemctl start mosquitto

Bekräfta att Mosquitto körs:

systemctl status mosquitto

🔹 På Windows

    Ladda ner Mosquitto från mosquitto.org/download

    Installera och välj att köra som en tjänst.

    Lägg till Mosquitto-mappen i systemvariablernas PATH om du vill använda kommandon i terminalen.

🔹 På macOS

brew install mosquitto
brew services start mosquitto

📌 2️⃣ Konfiguration av MQTT

Standardkonfigurationen fungerar ofta, men du kan redigera mosquitto.conf för att anpassa din setup.

Öppna filen:

sudo nano /etc/mosquitto/mosquitto.conf

Lägg till följande om du vill aktivera anonyma anslutningar (för testning):

allow_anonymous true
listener 1883

Starta om Mosquitto för att tillämpa ändringarna:

sudo systemctl restart mosquitto

📌 3️⃣ Testa MQTT-kommunikation

🔹 Öppna en terminal och lyssna på alla MQTT-meddelanden:

mosquitto_sub -h localhost -t "home/#"

🔹 Publicera ett testmeddelande:

mosquitto_pub -h localhost -t "home/test" -m "Hello from MQTT!"

Om du ser meddelandet i första terminalen fungerar din MQTT-server! 🎉
📌 4️⃣ Starta Mosquitto automatiskt vid uppstart

Om du vill att Mosquitto alltid ska starta vid omstart av din dator:

🔹 Linux (Ubuntu/Raspberry Pi):

sudo systemctl enable mosquitto

🔹 Windows:
Mosquitto kan köras som en Windows-tjänst vid installation. Om det inte fungerar, kör Mosquitto manuellt:

mosquitto -v

🔹 macOS:

brew services start mosquitto

📌 5️⃣ Felsökning
🔹 Mosquitto startar inte

✅ Kontrollera om det redan körs:

ps aux | grep mosquitto

✅ Om det kraschar, kör det manuellt för att se felmeddelanden:

mosquitto -v

✅ Kontrollera att port 1883 är öppen:

sudo netstat -tulnp | grep 1883

Om porten är upptagen, ändra i mosquitto.conf:

listener 1884

och starta om tjänsten.
📌 6️⃣ Säkerhet (valfritt)

För en säker produktion bör du:

    Stänga av anonyma anslutningar genom att sätta allow_anonymous false i mosquitto.conf.

    Lägga till användarnamn och lösenord:

mosquitto_passwd -c /etc/mosquitto/passwd mqtt_user

    Använda TLS-certifikat om MQTT ska exponeras på internet.

✅ Sammanfattning
Kommando	Funktion
sudo systemctl start mosquitto	Starta Mosquitto
sudo systemctl stop mosquitto	Stoppa Mosquitto
sudo systemctl restart mosquitto	Starta om Mosquitto
mosquitto_sub -h localhost -t "home/#"	Prenumerera på alla meddelanden
mosquitto_pub -h localhost -t "home/test" -m "Hello"	Skicka testmeddelande

🚀 Nu är din MQTT-broker redo att användas!
📄 Hårdvaruuppsättning

🚀 Smart Automationscentral (ESP32 + MQTT + Reläer + Sensorer)
📌 1️⃣ Komponenter
Komponent	Modell/Specifikation	Funktion
Mikrokontroller	ESP32	Hjärnan i systemet (WiFi + MQTT)
Relämodul	4-kanals 5V relä	Styr elektriska enheter
PIR-sensor	HC-SR501	Upptäcker rörelse
DHT22	Temperatur & luftfuktighetssensor	Mäta omgivningens temperatur och luftfuktighet
LDR	Fotomotstånd	Mäter ljusnivåer
MQTT-server	Mosquitto (på Raspberry Pi eller PC)	Kommunicerar med ESP32
Strömförsörjning	5V / 3.3V	Driver ESP32 och sensorer
📌 2️⃣ Kopplingsschema

Här beskrivs hur alla komponenter ska kopplas till ESP32.
ESP32 Pinout

    Relämodul

        IN1 → GPIO 5

        IN2 → GPIO 18

        IN3 → GPIO 19

        IN4 → GPIO 21

        VCC → 5V

        GND → GND

    PIR-sensor

        VCC → 3.3V

        GND → GND

        OUT → GPIO 13

    DHT22 (Temperatur & Luftfuktighet)

        VCC → 3.3V

        GND → GND

        DATA → GPIO 4 (Mellan DATA och VCC ska en 10kΩ pull-up resistor kopplas)

    LDR (Ljussensor)

        Ena benet → 3.3V

        Andra benet → GPIO 34 (via en 10kΩ resistor till GND)

📌 3️⃣ Steg-för-steg Koppling

1️⃣ Montera ESP32 och relämodul på ett kopplingsdäck (breadboard)
2️⃣ Anslut relämodulen enligt kopplingsschemat
3️⃣ Anslut PIR-sensorn till rätt GPIO-port
4️⃣ Koppla in DHT22 med pull-up resistor
5️⃣ LDR-anslutning med spänningsdelning
6️⃣ Anslut strömförsörjning och kontrollera att allt startar upp korrekt
📌 4️⃣ MQTT-kommunikation

ESP32 skickar och tar emot data via MQTT:
Topic	Funktion	Exempelmeddelande
home/relay1	Styr relä 1	ON / OFF
home/relay2	Styr relä 2	ON / OFF
home/temp	Skickar temperaturdata	22.5
home/motion	Rörelsedetektering	MOTION_DETECTED / NO_MOTION
📌 5️⃣ Strömförsörjning

ESP32 kan drivas via USB (5V) eller en extern strömkälla (3.3V–5V).
Om du använder reläer, se till att de får tillräckligt med ström från en extern 5V-källa.
📌 6️⃣ Felsökning

🔹 ESP32 startar inte?
✅ Kontrollera att strömförsörjningen är stabil (3.3V/5V).
✅ Se till att GPIO-pinnarna inte är kortslutna.

🔹 Reläet fungerar inte?
✅ Kontrollera att ESP32 skickar rätt signal till relämodulen.
✅ Se till att reläet är kopplat till rätt VCC och GND.

🔹 Sensorer ger ingen data?
✅ Dubbelkolla kopplingarna och resistorerna (t.ex. pull-up för DHT22).
✅ Nu är hårdvaran redo!

När allt är korrekt kopplat kan du gå vidare till att programmera ESP32 och testa MQTT-kommunikationen. 🚀
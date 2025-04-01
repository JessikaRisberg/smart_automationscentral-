#include "config.h"
#include "mqtt-controller/mqttcontroller.h"
#include "sensor_reader/dht22_sensor-h"
#include "relay_control/relay_control.h"

void setup() {
    Serial.begin(115300);
    setupWiFi(); // Anslut WiFi
    setupMQTT(); // Starta MQTT-klienten
    setupRelays(); // Initiera reläer
    setupSensors(); // Initiera sensorer
}

void loop() {
    mqttLoop(); // Hanterar MQTT-kommunikation
    readSensors(); // Läser sensorer och publicerar till MQTT
    delay(2000);
}
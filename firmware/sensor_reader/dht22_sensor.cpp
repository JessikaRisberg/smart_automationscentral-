#include <DHT.h>
#include <PubSubClient.h>

#define DHTPIN 4  
#define DHTTYPE DHT22

DHT dht(DHTPIN, DHTTYPE);
extern PubSubClient client;

void setupSensors() {
    dht.begin();
}

void readSensors() {
    float temp = dht.readTemperature();
    if (!isnan(temp)) {
        char msg[10];
        dtostrf(temp, 6, 2, msg);
        client.publish("home/temp", msg);
    }
}

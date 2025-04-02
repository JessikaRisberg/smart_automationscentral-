#include <Arduino.h>

const int relayPin = 5;  // GPIO för relä

void setupRelays() {
    pinMode(relayPin, OUTPUT);
    digitalWrite(relayPin, LOW);
}

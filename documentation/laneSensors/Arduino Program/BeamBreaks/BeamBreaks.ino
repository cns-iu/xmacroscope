#include "Adafruit_VL53L0X.h"

Adafruit_VL53L0X lox = Adafruit_VL53L0X();

int count =0;
bool fired = false;

void setup() {
  Serial.begin(115200);

  // wait until serial port opens for native USB devices
  while (! Serial) {
    delay(1);
  }
  
  Serial.println("Adafruit VL53L0X test");
  if (!lox.begin()) {
    Serial.println(F("Failed to boot VL53L0X"));
    while(1);
  }
  // power 
  //Serial.println(F("VL53L0X API Simple Ranging example\n\n")); 

  pinMode(13,OUTPUT);
  pinMode(10,OUTPUT);
  digitalWrite(10,HIGH);
}


void loop() {
  VL53L0X_RangingMeasurementData_t measure;
    
  //Serial.print("Reading a measurement... ");
  lox.rangingTest(&measure, false); // pass in 'true' to get debug data printout!

  if (measure.RangeStatus != 4 && measure.RangeMilliMeter <2000) {  // phase failures have incorrect data
    Serial.print("Distance (mm): "); Serial.println(measure.RangeMilliMeter);
    count++;
  } else {
    count = 0;
    fired = false;
    digitalWrite(13,LOW);
    digitalWrite(10,HIGH);
  }

  if(count >= 1 && !fired){
    digitalWrite(13,HIGH);
    digitalWrite(10,LOW);
    fired = true;
    delay(100);
  }
}

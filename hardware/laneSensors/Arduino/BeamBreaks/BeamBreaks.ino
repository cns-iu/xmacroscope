#include "Adafruit_VL53L0X.h"

/*
* integer that controls the minimum number of times in a row
* the sensor needs to activate to trigger. If you are getting false
* positives, raise this number. If you are not seeing activations when they
* are expected, lower this number (to a minimum of 1).
*
* Each sensor read takes about 40 milliseconds, so a countsToTrigger of 3
* would mean that the sensor needs to be tripped for 120 milliseconds, whereas
* a countsToTrigger would only need a single read to trigger the output.
*/
int countsToTrigger = 1;

///////////////////////////////////////////////
// You should not need to edit below this point

//Create the Time-of-Flight Distance Sensor object.
Adafruit_VL53L0X lox = Adafruit_VL53L0X();

//Create the objects to track how many activations we see in a row.
int count =0;
bool fired = false;


// This is the setup function, called once at startup.
void setup() {

  //Initialize the Serial port to a baud rate of 115200
  Serial.begin(115200);

  // wait until serial port opens for native USB devices
  while (! Serial) {
    delay(1);
  }

  //establish I2C communications with the TOF sensor, pause if not found.
  Serial.println("Adafruit VL53L0X test");
  if (!lox.begin()) {
    Serial.println(F("Failed to boot VL53L0X"));
    while(1);
  }

  pinMode(13,OUTPUT);
  pinMode(10,OUTPUT);
  digitalWrite(10,HIGH);
}

// This is the loop function, which runs ad infinitum after the setup funcition
void loop() {

  //Create a new object to hold TOF measurment data.
  VL53L0X_RangingMeasurementData_t measure;

  //Take the measurment, and pass in the object where the data will be stored.
  lox.rangingTest(&measure, false); // pass in 'true' to get debug data printout!

  // If we see a valid read, and the measurement is less than 2 meters away...
  if (measure.RangeStatus != 4 && measure.RangeMilliMeter <2000) {
    // Serial.print("Distance (mm): "); Serial.println(measure.RangeMilliMeter);
    // Increment the tracking counter.
    count++;
  } else {
    // Otherwise, if we see an invalid read, or a read of distance >2 meters
    // reset the tracking counter, and the flag saying if we've already triggered.
    count = 0;
    fired = false;

    // and reset the outputs to their original state.
    digitalWrite(13,LOW);
    digitalWrite(10,HIGH);
  }

  // If our counter is greater than or equal to countsToTrigger, and we haven't
  // already triggered...
  if(count >= countsToTrigger && !fired){
    //set the outputs to trigger the keyboard encoder
    digitalWrite(13,HIGH);
    digitalWrite(10,LOW);

    // set the flag to say that we have triggered, and delay for 100ms to make
    // sure the keyboard encoder has time to see the activation.
    fired = true;
    // Delay set to 0 because the sensors are not seeing activations when they are expected
    delay(0);
  }
}

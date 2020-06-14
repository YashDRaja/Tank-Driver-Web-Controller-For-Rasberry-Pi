
//SETUP
void setup() {
  Serial.begin(9600);
    pinMode(4, INPUT);  
    pinMode(7, INPUT);
    pinMode(12, OUTPUT);   
    pinMode(13, OUTPUT);
}
 
//LOOP
void loop() {

  if(digitalRead(4) == HIGH){
    digitalWrite(12, HIGH);
  }else{
    digitalWrite(12, LOW);
  }

  if(digitalRead(7) == HIGH){
    digitalWrite(13, HIGH);
  }else{
    digitalWrite(13, LOW);
  }
   Serial.println(digitalRead(4));
   Serial.println(digitalRead(7));
}

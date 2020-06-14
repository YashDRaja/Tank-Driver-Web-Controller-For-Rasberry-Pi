Blockly.Python['go_forward'] = function(block) {
  var value_seconds = Blockly.Python.valueToCode(block, 'seconds', Blockly.Python.ORDER_ATOMIC);
  var value_power = Blockly.Python.valueToCode(block, 'power', Blockly.Python.ORDER_ATOMIC);
  console.log(value_seconds)
  // TODO: Assemble Python into code variable.
  var code = 'forward('+value_seconds +","+value_power+")\n";
  return code;
};
Blockly.Python['go_backward'] = function(block) {
  var value_seconds = Blockly.Python.valueToCode(block, 'seconds', Blockly.Python.ORDER_ATOMIC);
  var value_power = Blockly.Python.valueToCode(block, 'power', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'backward('+value_seconds +","+value_power+")\n";
  return code;
};
Blockly.Python['turn_right'] = function(block) {
  var value_seconds = Blockly.Python.valueToCode(block, 'seconds', Blockly.Python.ORDER_ATOMIC);
  var value_power = Blockly.Python.valueToCode(block, 'power', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'turnRight('+value_seconds + "," + value_power+')\n';
  return code;
};
Blockly.Python['turn_left'] = function(block) {
  var value_seconds = Blockly.Python.valueToCode(block, 'seconds', Blockly.Python.ORDER_ATOMIC);
  var value_power = Blockly.Python.valueToCode(block, 'power', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'turnLeft('+value_seconds + "," + value_power+')\n';
  return code;
};
Blockly.Python['serial_pin_time'] = function(block) {
  var value_pin_number = Blockly.Python.valueToCode(block, 'pin_number', Blockly.Python.ORDER_ATOMIC);
  var value_seconds = Blockly.Python.valueToCode(block, 'seconds', Blockly.Python.ORDER_ATOMIC);
  var value_power = Blockly.Python.valueToCode(block, 'power', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'activatePinTime('+value_pin_number+value_seconds+value_power+")\n";
  return code;
};
Blockly.Python['serial_pin'] = function(block) {
  var value_pin_number = Blockly.Python.valueToCode(block, 'pin_number', Blockly.Python.ORDER_ATOMIC);
  var value_power = Blockly.Python.valueToCode(block, 'power', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'activatePin('+value_pin_number+value_power+")\n";
  return code;
};
Blockly.Python['wait'] = function(block) {
  var value_wait = Blockly.Python.valueToCode(block, 'wait', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'time.sleep('+value_wait+')';
  return code;
};

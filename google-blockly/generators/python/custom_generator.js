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
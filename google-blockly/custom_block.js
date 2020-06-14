Blockly.defineBlocksWithJsonArray([{
  "type": "go_forward",
  "message0": "Go Forward for _ seconds: %1 Power: %2",
  "args0": [
    {
      "type": "input_value",
      "name": "seconds",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "power",
      "check": "Number"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "go_backward",
  "message0": "Go Backwards for _ seconds: %1 Power: %2",
  "args0": [
    {
      "type": "input_value",
      "name": "seconds",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "power",
      "check": "Number"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 60,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "turn_right",
  "message0": "Turn Right for _ seconds: %1 Power to run the motors %2",
  "args0": [
    {
      "type": "input_value",
      "name": "seconds",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "power",
      "check": "Number"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "turn_left",
  "message0": "Turn Left for _ seconds: %1 Power to run the motors %2",
  "args0": [
    {
      "type": "input_value",
      "name": "seconds",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "power",
      "check": "Number"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "serial_pin_time",
  "message0": "Pin Number: %1 Turn on for _ seconds: %2 Power: %3",
  "args0": [
    {
      "type": "input_value",
      "name": "pin_number",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "seconds",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "power",
      "check": "Number"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 0,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "wait",
  "message0": "Wait for _ seconds: %1",
  "args0": [
    {
      "type": "input_value",
      "name": "wait",
      "check": "Number"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 15,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "serial_pin",
  "message0": "Pin Number: %1 Power: %2",
  "args0": [
    {
      "type": "input_value",
      "name": "pin_number",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "power",
      "check": "Number"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 0,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "wait",
  "message0": "Wait for _ seconds: %1",
  "args0": [
    {
      "type": "input_value",
      "name": "wait",
      "check": "Number"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 15,
  "tooltip": "",
  "helpUrl": ""
}])



const rs = require('readline-sync');
const logic = require("./calculator-logic");

let mathArray = [`subtraction`, `addition`, `multiplication`, `division`];
let moreCalcs = 'yes';
let startValue;
let mathIndex;
let mathOperator;
let secondValue;

// ui stuff

function start() {

let result = rs.questionInt('First Value: ');

// ui stuff
function yesOrNo(){
    if (rs.keyInYN('Keep Calculating?: ')) {
        moreCalcs = 'yes'
      } else {
        moreCalcs = 'no';
      }
}

// This starts a loop if you need to do more complex calcs, it ends when you say no.

while (moreCalcs === 'yes') {
  startValue = result;
  console.log('Current Value: ', startValue)
  mathIndex = rs.keyInSelect(mathArray, 'Operator: ');
  mathOperator = mathArray[mathIndex];
  secondValue = rs.questionInt('Second Value: ');
  let func = logic[mathOperator];
  result = func(startValue,secondValue);
  console.log(startValue, mathOperator, secondValue, "=", result)
  yesOrNo();
}

console.log('Final value:', result);

};

start();

// Create two modules
// 1) calculator-ui.js
// 2) calculator-logic.js
// calculator-ui.js
// {
//    start()
// }
// calculator-logic.js
// {
//    add(),
//    subtract(),
//    multiply(),
//    divide()
// }
//
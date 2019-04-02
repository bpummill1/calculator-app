
const rs = require('readline-sync');

let mathArray = [`+`, `-`, `*`, `/`];
let moreCalcs = 'yes';
let startValue;
let mathIndex;
let mathOperator;
let secondValue;
let calculation;

// ui stuff
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
  calculation = startValue + mathOperator + secondValue;
  result = eval(calculation);
  console.log(startValue, mathOperator, secondValue, "=", result)
  // moreCalcs = rs.question('Keep calculating? yes or no:  ');
  yesOrNo();
}

console.log('Final value:', result);

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

let mathArray = [`subtraction`, `addition`, `multiplication`, `division`];
let moreCalcs = 'yes';
const http = require('http');
const url = require('url');

// http calls


// ui stuff

const start = (rs, http) => {

  let result = rs.questionFloat('First Value: ');

  // ui stuff
  const yesOrNo = () => {
      if (rs.keyInYN('Keep Calculating?: ')) {
          moreCalcs = 'yes'
      } else {
        moreCalcs = 'no';
      }
  };

  // This starts a loop if you need to do more complex calcs, it ends when you say no.

  while (moreCalcs === 'yes') {
    let startValue = result;
    console.log('Current Value: ', startValue);
    let mathIndex = rs.keyInSelect(mathArray, 'Operator: ');
    let mathOperator = mathArray[mathIndex];
    let secondValue = rs.questionFloat('Second Value: ');
    result = 
    console.log("Result =", result);
    yesOrNo();
  }

  console.log('Final value:', result);

};

module.exports = start;


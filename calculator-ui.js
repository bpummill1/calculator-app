
let mathArray = [`subtraction`, `addition`, `multiplication`, `division`];
const http = require("http");

// http calls


// ui stuff

const start = (rs) => {

  let result = rs.questionFloat('First Value: ');

  // ui stuff
  const yesOrNo = () => {
      if (rs.keyInYN('Keep Calculating?: ')) {
          thing().then((promiseResult) => {
            console.log("Result =", promiseResult);
            result = promiseResult;
            yesOrNo();
          });
      } else {
        console.log('Final value:', result);
      }
  };

  // This starts a loop if you need to do more complex calcs, it ends when you say no.

  const thing = () => {
    return new Promise((resolve, reject) => {
      let startValue = result;
      let mathIndex = rs.keyInSelect(mathArray, 'Operator: ');
      let mathOperator = mathArray[mathIndex];
      let secondValue = rs.questionFloat('Second Value: ');
      
      let path = ('/?startValue=' + startValue + '&secondValue=' + secondValue + '&mathOperator=' + mathOperator)
            
      const options = {
        hostname: 'localhost',
        port: 8080,
        path: path,
        method: 'GET',
      };
  
      const req = http.request(options, (res) => {
        let requestResult;
        res.on('data', (calc) => {
          requestResult = Number(calc);
        });
        
        res.on('end', () => {
          resolve(requestResult);
        });
      });
  
      req.on('error', (e) => {
        console.error(`problem with request: ${e.message}`);
        reject(e);
      });
      
      req.end();
    });
  };


    const thingPromise = thing();
  
    thingPromise.then((promiseResult) => {
      console.log("Result =", promiseResult);
      result = promiseResult;
      yesOrNo();
    });
};

module.exports = start;



let mathArray = [`subtraction`, `addition`, `multiplication`, `division`];
const http = require("http");


const start = (rs) => {

  let primaryInput = () => { 
    let firstValue = rs.questionFloat('First Value: ');
    return firstValue;
  };

  let subsequentInputsBuildPath = () => {
    let startValue = result;
    let mathIndex = rs.keyInSelect(mathArray, 'Operator: ');
    let mathOperator = mathArray[mathIndex];
    let secondValue = rs.questionFloat('Second Value: ');
    let path = ('/?startValue=' + startValue + '&secondValue=' + secondValue + '&mathOperator=' + mathOperator);
    return path;
  };

  // ui stuff
  const yesOrNo = () => {
      if (rs.keyInYN('Keep Calculating?: ')) {
          doMath().then((promiseResult) => {
            console.log("Result =", promiseResult);
            result = promiseResult;
            yesOrNo();
          });
      } else {
        console.log('Final value:', result);
      }
  };

  const doMath = () => {
    return new Promise((resolve, reject) => {

      let path = subsequentInputsBuildPath();
                  
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

    let result = primaryInput();

    const mathPromise = doMath();
  
    mathPromise.then((promiseResult) => {
      console.log("Result =", promiseResult);
      result = promiseResult;
      yesOrNo();
    });
};

module.exports = start;


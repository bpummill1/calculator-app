const http = require("http");

let startValue = 2;
let secondValue = 4;
let mathOperator = 'addition';
let path = ('/?startValue=' + startValue + '&secondValue=' + secondValue + '&mathOperator=' + mathOperator)
let result;   

console.log(path);

const options = {
  hostname: 'localhost',
  port: 8080,
  path: path,
  method: 'GET',
};


const req = http.request(options, (res) => {
  console.log('firing req');
  res.on('data', (calc) => {
   result = Number(calc);
  });
  
  res.on('end', () => {
    console.log("Result =", result);
  });
});

req.on('error', (e) => {
  console.error(`problem with request: ${e.message}`);
});

req.end();


console.log('Final value:', result);
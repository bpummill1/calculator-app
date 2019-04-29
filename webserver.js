
const logic = require("./calculator-logic");

const http = require('http');
const url = require('url');

http.createServer( function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  let q = url.parse(req.url, true).query;
  let startValue = Number(q.startValue);
  let secondValue = Number(q.secondValue);
  let mathOperator = q.mathOperator;
  let mathFunc = logic[mathOperator];
  let result = mathFunc(startValue,secondValue);
  console.log(startValue, mathOperator, secondValue);
  res.end(result.toString());
}).listen(8080);
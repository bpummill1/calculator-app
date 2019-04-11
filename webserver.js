
const logic = require("./calculator-logic");

const http = require('http');
const url = require('url');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  let q = url.parse(req.url, true).query;
  let startValue = Number(q.startValue);
  let secondValue = Number(q.secondValue);
  let mathOperator = q.mathOperator;
  console.log(typeof mathOperator);
  let mathFunc = logic[mathOperator];
  console.log(mathFunc);
  let result = mathFunc(startValue,secondValue);
  res.end(result.toString());
}).listen(8080);
const runApp = require("./calculator-ui");
const rs = require('readline-sync');
const http = require("http");

runApp(rs, http);
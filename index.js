const logic = require("./calculator-logic");
const dummy = require("./calculator-logic-dummy");
const runApp = require("./calculator-ui");
const rs = require('readline-sync');

let mod;

if (process.env.MODULE === "logic") {
    mod = logic;
}
else {
    mod = dummy;
};

runApp(mod, rs);
Logic running as a server (only use node http libraries) https://nodejs.org/dist/latest-v10.x/docs/api/http.html and https://medium.freecodecamp.org/a-no-frills-guide-to-node-js-how-to-create-a-node-js-web-app-without-external-packages-a7b480b966d2



Rewrite calculator-ui
RULES
1. Subdivide the UI into user i/o and data calls to the webserver
2. No readline/sync (use inquirer)
3. Change server from single route (math) with op1, op2, op => 4 routes (add, subtract, multiply, divide), with just op1, op2
4. Read about and play with callbacks in callback.js file <=
5. http://speakingjs.com/es5/ch01.html
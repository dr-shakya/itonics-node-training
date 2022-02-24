// Import method 1 & 3
const printer = require('./print');
printer.printName('Joe');

// Import method 2
// const print = require('./print');
// print('Joe');

function printName(name) {
  console.log('Inside app.js', name);
}

printName('Joe');

// To terminate node projects
// setTimeout(() => {
//   console.log('Terminating...');
//   process.exit(1);
// }, 2000);

// To access environment variables
// Provide variables in terminal as NAME=Joe ADDRESS=addr node app.js
// console.log('Print env variables', process.env.NAME, process.env.ADDRESS);

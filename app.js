// Import method 1
const printer = require('./print');
printer.printName('Joe');

// Import method 2
// const print = require('./print');
// print('Joe');

function printName(name) {
  console.log('Inside app.js', name);
}

printName('Joe');

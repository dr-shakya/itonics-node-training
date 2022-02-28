function second() {
  console.log('second');
}

function third() {
  console.log('third');
}

function first() {
  console.log('first');
  second();
  third();
}

first();

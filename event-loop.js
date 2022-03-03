function second() {
  console.log('second');
}

function third() {
  console.log('third');
}

function first() {
  console.log('first');
  // macro task - goes to Message queue
  setTimeout(() => {
    console.log('Inside Timeout');
  }, 0);
  // Async
  // micro task - goes to Job queue
  new Promise((resolve) => {
    return resolve();
  }).then(() => {
    console.log('Inside Promise');
  });
  second();
  third();
}

first();

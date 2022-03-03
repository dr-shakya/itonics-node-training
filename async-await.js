function awaitResult() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Result');
    }, 1000);
  });
}

async function consumePromise() {
  const result = await awaitResult();
  console.log(result);
}

consumePromise();

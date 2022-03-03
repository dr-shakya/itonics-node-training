const isRejected = true;

// 3 states: pending, resolved, rejected

// Consume promise
// new Promise((resolve, reject) => {}).then();

// Catch error
// new Promise((resolve, reject) => {}).catch();
const customPromise = new Promise((resolve, reject) => {
  if (isRejected) {
    setTimeout(() => {
      resolve(true);
    }, 1000);
  } else {
    reject(false);
  }
});

customPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  }); // pending

/**
 * Promises can be chained
 * Errors can also be cascaded
 */
/**
  customPromise
    .then((result) => {
      console.log(result);
      return result.users;
    })
    .then((users) => {
      console.log(users);
    })
    .catch((error) => {
      console.log(error);
    }); // pending
 */

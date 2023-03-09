function getFirstResolved(p1, p2) {
    return Promise.race([p1, p2]);
  }

const resolvePromise = Promise.resolve("Success 1 promise");

const promise = new Promise(function(resolve) {
    setTimeout(() => resolve("Success 2 promise"), 1000);
  });

console.log(getFirstResolved(resolvePromise, promise));
// https://github.com/tj/co

co(function* () {
  var result = yield Promise.resolve(true);
  return result;
}).then(function (value) {
  console.log(value);
}, function (err) {
  console.error(err.stack);
});


/*
The way we define a co() is: co(function *()).then();
co() returns a promise
yield returns object or array
*/


/*If you want to convert a co-generator-function into a regular function that returns a promise, you now use co.wrap(fn*). */

var fn = co.wrap(function* (val) {
  return yield Promise.resolve(val);
});

fn(true).then(function (val) {

});

// ways to use co() below:


var co = require('co');

co(function *(){
  // yield any promise
  var result = yield Promise.resolve(true);
}).catch(onerror);

co(function *(){
  // resolve multiple promises in parallel
  var a = Promise.resolve(1); // promise.resolve() returns a promise.then object that is resolved with the given value 
  var b = Promise.resolve(2);
  var c = Promise.resolve(3);
  var res = yield [a, b, c];
  console.log(res);
  // => [1, 2, 3]
}).catch(onerror);

// errors can be try/catched
co(function *(){
  try {
    yield Promise.reject(new Error('boom'));
  } catch (err) {
    console.error(err.message); // "boom"
 }
}).catch(onerror);

function onerror(err) {
  // log any uncaught errors
  // co will not throw any errors you do not handle!!!
  // HANDLE ALL YOUR ERRORS!!!
  console.error(err.stack);
}

// https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve


/*

The yieldable objects currently supported are:

promises
thunks (functions)
array (parallel execution)
objects (parallel execution)
generators (delegation)
generator functions (delegation)
Nested yieldable objects are supported, meaning you can nest promises within objects within arrays, and so on!

*/



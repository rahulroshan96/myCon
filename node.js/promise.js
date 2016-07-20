function dieToss() {
  return Math.floor(Math.random() * 6) + 1;
}

console.log('1');
var promise = new Promise(function(fullfill, reject) { // fullfill and reject order matters in case of promise.then function 
  var n = dieToss();
  if (n == 6) {
    fulfill(n);
  } else {
    reject(n);
  }
  console.log('2');
});

promise.then(function(toss) { // promise.then ( onfullfilled, onrejected)
  console.log('Yay, threw a ' + toss + '.');  
}, function(toss) {
  console.log('Oh, noes, threw a ' + toss + '.');  
});
console.log('3');


// Note: if n == 6 then it would be a fullfill for the promise function, 
//https://www.toptal.com/javascript/javascript-promises
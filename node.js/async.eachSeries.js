async.eachSeries([ 2, 3, 5, 7, 11 ], function (prime, callback) {
  console.log(prime);
  callback(); // Alternatively: callback(new Error());
}, function (err) {
  if (err) { throw err; }
  console.log('Well done :-)!');
});
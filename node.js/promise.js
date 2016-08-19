var fs = require('fs');
var Promise = require('promise');
var co = require('co');
var name = "1";
var name2 = "2";
var name3 = "3";
var name4 = "4";

// CASE 1: Without callbacks, but the problem is asynchronous flow is achieved

// func1(name,function(){});
// func2(name2,function(){});
// func3(name3,function(){});
// func4(name4,function(){});

// CASE 2: With Callbacks synchronous code achieved
// But this case leads to callback hell

// func1(name,function(){
//   func2(name2,function(){
//     func3(name3,function(){
//       func4(name4,function(){
//         console.log("completed the script !");
//       });
//     });
//   });
// });

// CASE 3: Promises
// Promise is an object which has two functions in it, then and catch
// var promise = {
//   then: function(){}, // called when everything is good
//   catch: function(){} // called when there is some problem
// }

co (function * (variable) {
  var result = yield ("test.txt");
  console.log("how was it ? ",result);
  var result2 = yield second_func();
  console.log(result2);
  var result3 = yield third_func();
  console.log(result3);
});


function first_func(name) {
    return new Promise(function(resolve, reject) {
        fs.readFile(name, function(err, data) {
            if (err) {
                reject("can't read file!");
            } else {
                resolve("can read file !");
            }
        });
    });
}

function second_func() {
    return new Promise(function(resolve, reject){
      fs.writeFile("test1.txt", "test it !\n", function(err) {
          if (err) {
              reject("something gone wrong !");
          } else {
              resolve("everything is fine !");
          }
      });
    })
}

function third_func() {
    return new Promise(function(resolve, reject){
      var x = "this is the third function";
      if(x.length == 0){
        reject("error in length!");
      }
      else
      console.log("No error in length");
    })
}


// ************************
function func1(name, cb) {
    console.log(name);
    cb();
}

function func2(name, cb) {
    console.log(name);
    cb();
}

function func3(name, cb) {
    fs.writeFile("test.txt", "test it !\n", function(err) {
        if (err) {
            console.log("something gone wrong ");
        } else {
            console.log("worked successfully !");
            console.log(name);
            cb();
        }
    });

}

function func4(name, cb) {
    console.log(name);
    cb();
}

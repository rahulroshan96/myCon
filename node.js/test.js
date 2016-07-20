

function test(){ // this is defining but not calling
	var y = {
		name:"fiat",
		old:5,
		method: function(){
			console.log("executed");
		}
	}
	return y;
}

x = test(); // this is calling

console.log(x.name);
x.method();


// When using the === equality operator, equal strings are not equal, because the === operator expects equality in both type and value.
var m = "rahul";
var n = new String("rahul");
 
if(m === n) console.log("correct"); //false because x and y have different types (string and obj
else console.log("not correct");



console.log(Number.MAX_VALUE);

console.log(Math.ceil(Math.random()*100));


var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Lemon"); 

console.log(fruits[4]);


// declaration are hoisted
r = 2;
l = 2;
console.log(r+l);
var l;
var r;


var myFunction = function(a, b){return a * b};
var x = myFunction(4, 3);

console.log(x);

//self invoking functions

(function (){
	console.log("I invoke myself");
})();


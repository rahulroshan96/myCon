


// downloadPhoto('http://coolcats.com/cat.gif', handlePhoto)

// function handlePhoto (error, photo) {
//   if (error) console.error('Download error!', error)
//   else console.log('Download finished', photo)
// }

// console.log('Download started')

function test(cb){
	cb(10);
}

test(function cb(y){
	console.log(y);
});



/*
In this example three major things happen. First the handlePhoto function is declared, then the downloadPhoto function is invoked 
and passed the handlePhoto as its callback, and finally 'Download started' is printed out.

Note that the handlePhoto is not invoked yet, it is just created and passed as a callback into downloadPhoto. But it won't run 
until downloadPhoto finishes doing its task, which could take a long time depending on how fast the Internet connection is.



This example is meant to illustrate two important concepts:

The handlePhoto callback is just a way to store some things to do at a later time
The order in which things happen does not read top-to-bottom, it jumps around based on when things complete
*/


// Two ways to call&define a callback 
// Method 1:
function test(cb) {
    var x = "rahul";
    cb(x);
}

test(function cb(input){
   if(input === "rahul")
       console.log("success");
    else
        console.log("failure");
});

//Method 2:

function test(input1) {
    function fun(input1, cb) {
        var x;
        if(input1 === "rahul")
        {
            //console.log("success");
            x = "success";
        }
        else
        {
            //console.log("failure");
            x = "failure";
        }
        cb(x); // do something with this input
    }
    fun(input1,cb);
}

function cb(input1) {
    console.log("This is result: "+ input1);
}

test("rahul");




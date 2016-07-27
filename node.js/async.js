var async = require('async');
var MongoClient = require('mongodb').MongoClient;
//var format = require('util').format;

function  getNumber(cb) {
    MongoClient.connect('mongodb://localhost:27017/mydb', function (err, db) {
        if (err) {
            console.log("Database not Connected !");
        } else {
            //console.log("We are connected !");
            // check if the collection exists or not
            db.collection('script_executed', {strict: true}, function (err, collection) {
                if (err) {
                    console.log("Collection does not exists");
                }
            });

            var collection = db.collection('script_executed');
            collection.find({"executed": {"$exists": 1}}).toArray(function (err, result) {
                if (err) {
                    console.log(err);
                }
                else if (result.length) {
                   // console.log('Found ',result[0].executed);
                     cb(result[0].executed);
                    db.close();

                }
                else {
                    console.log("No document found");
                }
            });
        }
        db.close();
    });
}

    // to fetch number of last executed script
    async.waterfall([function (cb) {
        getNumber(function (executed) {
            console.log("first "+executed);
            cb(null, executed); // this is the way to use callback so that we don't pass a undefined value to next function
        });
        // cb(null,value); // if we use this callback, coz of async nature it would call first with undefined value
    },
        // to connect to github
        function (value, cb) {
            console.log("second "+ value);
            cb(null, value);
    }],function (err) {
        if(err){
            console.log(err);
        }
    });


/*
var fs = require('fs');
var async = require('async');
var http = require('http');
var path = './headers.txt';

async.waterfall(
    [
        // i. check if headers.txt exists
        function(callback) {
            fs.stat(path, function(err, stats) {
                if (stats == undefined) { callback(null); }
                else { console.log('headers already collected'); }
            });
        },
        
        // ii. fetch the HTTP headers
        function(callback) {
            var options = {
                host: 'www.wikipedia.org',
                port: 80
            };        
            http.get(options, function(res) {
                var headers = JSON.stringify(res.headers);
                callback(null, headers);
            });
        },
        
        // iii. write the headers to headers.txt
        function(headers, callback) {
            fs.writeFile(path, headers, function(err) {
                console.log('Great Success!');
                callback(null, ':D');
            });
        }
    ],
    
    // the bonus final callback function
    function(err, status) {
        console.log(status);
    }
);

*/
















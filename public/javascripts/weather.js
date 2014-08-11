/**
 * Created by sjagannath on 8/11/2014.
 */
/**
 *
 */

var WunderNodeClient = require("wundernode");
var URL = require('url');
// Definitions

// Replace this with your API KEY
var apikey = "f31cad7ba050535c";

// Location is passed to the Wunderground API via the query returned by Express
// Example query: http://127.0.0.1:3000/conditions?New York,NY
// Generates this request: http://api.wunderground.com/api/<API_KEY>/conditions/q/New%20York,NY.json

// Set to true if you want to see all sort of nasty output on stdout.
var debug = false;

// Create Client
var wunder = new WunderNodeClient(apikey, debug,  10, 'minute');

var express = require('express');

var app = express();

app.get('/conditions', function(req, res){
    var query = URL.parse(req.url).query;
    console.log('query: ' +  query);
    wunder.conditions(query, function(err, obj) {
        if (err){
            console.log('errors: ' + err);
            res.end("Error processing query string:" + queryData.query);
        }

        res.end(obj);
    });
});

app.get('/', function(req, res) {
    res.sendfile('./display.html'); // load our public/display.html file
});

app.listen(3000);




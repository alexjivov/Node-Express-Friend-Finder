// NPM dependencies

var express = require("express");
var bodyParser = require("body-parser");
var path = require('path');

// Express App configuration

var app = express(); // Starts app 
var PORT = process.env.PORT || 3000; // Initial Port

// Body Parser - this is for THE SERVER TO INTERPET DATA EASILY - use this often
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({encoded: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));


// THE ROUTES - Maps to where the server sends people when users input data
require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

// APP LISTENER - Starts the server
app.listen(PORT, function() {
    console.log("This server is working. App listening on PORT: " + PORT);
})
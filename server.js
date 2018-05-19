//here are the required dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
//get the express app set up to run on port 3000
var app = express();
var PORT = process.env.PORT || 3000;

//here the Express Application is set up to handle data parsing

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//setting up the router
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

//start the server to listen
app.listen(PORT, function() {
	console.log("Application is listening on port: " + PORT);
});

//get the path dependency
var path = require("path");
//set up the routes for the homepage and for the survey
module.exports = function(app){
	//need the route for the Homepage
	app.get("/", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/home.html"));
	});
	//need the route for the survey
	app.get("/survey", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/survey.html"));
	});
};